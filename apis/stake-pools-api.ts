/* tslint:disable */
/* eslint-disable */
/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: 2021.3.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { BadRequest } from '../models';
import { ApiMaintenanceActionPostData } from '../models';
import { ApiWalletPassphrase } from '../models';
import { CannotCoverFee } from '../models';
import { ApiStakePool } from '../models';
import { ApiMaintenanceAction } from '../models';
import { ApiFee } from '../models';
import { ApiTransaction } from '../models';
import { InlineResponse4033 } from '../models';
import { InlineResponse4034 } from '../models';
import { InlineResponse4041 } from '../models';
import { InlineResponse415 } from '../models';
import { NoSuchWallet } from '../models';
import { NotAcceptable } from '../models';
import { QueryParamMissing } from '../models';
import { UnsupportedMediaType } from '../models';
/**
 * StakePoolsApi - axios parameter creator
 * @export
 */
export const StakePoolsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
         * @summary Estimate Fee
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDelegationFee: async (walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling getDelegationFee.');
            }
            const localVarPath = `/wallets/{walletId}/delegation-fees`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the current status of the stake pools maintenance actions. 
         * @summary View maintenance actions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMaintenanceActions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/stake-pools/maintenance-actions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
         * @summary Join
         * @param {ApiWalletPassphrase} body 
         * @param {string} stakePoolId 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinStakePool: async (body: ApiWalletPassphrase, stakePoolId: string, walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling joinStakePool.');
            }
            // verify required parameter 'stakePoolId' is not null or undefined
            if (stakePoolId === null || stakePoolId === undefined) {
                throw new RequiredError('stakePoolId','Required parameter stakePoolId was null or undefined when calling joinStakePool.');
            }
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling joinStakePool.');
            }
            const localVarPath = `/stake-pools/{stakePoolId}/wallets/{walletId}`
                .replace(`{${"stakePoolId"}}`, encodeURIComponent(String(stakePoolId)))
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
         * @summary List
         * @param {number} stake The stake the user intends to delegate in Lovelace. Required. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listStakePools: async (stake: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'stake' is not null or undefined
            if (stake === null || stake === undefined) {
                throw new RequiredError('stake','Required parameter stake was null or undefined when calling listStakePools.');
            }
            const localVarPath = `/stake-pools`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (stake !== undefined) {
                localVarQueryParameter['stake'] = stake;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
         * @summary Trigger Maintenance actions
         * @param {ApiMaintenanceActionPostData} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMaintenanceAction: async (body: ApiMaintenanceActionPostData, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postMaintenanceAction.');
            }
            const localVarPath = `/stake-pools/maintenance-actions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tight to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
         * @summary Quit
         * @param {ApiWalletPassphrase} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quitStakePool: async (body: ApiWalletPassphrase, walletId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling quitStakePool.');
            }
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling quitStakePool.');
            }
            const localVarPath = `/stake-pools/*/wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StakePoolsApi - functional programming interface
 * @export
 */
export const StakePoolsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
         * @summary Estimate Fee
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDelegationFee(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiFee>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).getDelegationFee(walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns the current status of the stake pools maintenance actions. 
         * @summary View maintenance actions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMaintenanceActions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiMaintenanceAction>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).getMaintenanceActions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
         * @summary Join
         * @param {ApiWalletPassphrase} body 
         * @param {string} stakePoolId 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinStakePool(body: ApiWalletPassphrase, stakePoolId: string, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiTransaction>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).joinStakePool(body, stakePoolId, walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
         * @summary List
         * @param {number} stake The stake the user intends to delegate in Lovelace. Required. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listStakePools(stake: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ApiStakePool>>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).listStakePools(stake, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
         * @summary Trigger Maintenance actions
         * @param {ApiMaintenanceActionPostData} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMaintenanceAction(body: ApiMaintenanceActionPostData, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).postMaintenanceAction(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tight to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
         * @summary Quit
         * @param {ApiWalletPassphrase} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async quitStakePool(body: ApiWalletPassphrase, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiTransaction>> {
            const localVarAxiosArgs = await StakePoolsApiAxiosParamCreator(configuration).quitStakePool(body, walletId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StakePoolsApi - factory interface
 * @export
 */
export const StakePoolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
         * @summary Estimate Fee
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDelegationFee(walletId: string, options?: any): AxiosPromise<ApiFee> {
            return StakePoolsApiFp(configuration).getDelegationFee(walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current status of the stake pools maintenance actions. 
         * @summary View maintenance actions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMaintenanceActions(options?: any): AxiosPromise<ApiMaintenanceAction> {
            return StakePoolsApiFp(configuration).getMaintenanceActions(options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
         * @summary Join
         * @param {ApiWalletPassphrase} body 
         * @param {string} stakePoolId 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinStakePool(body: ApiWalletPassphrase, stakePoolId: string, walletId: string, options?: any): AxiosPromise<ApiTransaction> {
            return StakePoolsApiFp(configuration).joinStakePool(body, stakePoolId, walletId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
         * @summary List
         * @param {number} stake The stake the user intends to delegate in Lovelace. Required. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listStakePools(stake: number, options?: any): AxiosPromise<Array<ApiStakePool>> {
            return StakePoolsApiFp(configuration).listStakePools(stake, options).then((request) => request(axios, basePath));
        },
        /**
         * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
         * @summary Trigger Maintenance actions
         * @param {ApiMaintenanceActionPostData} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMaintenanceAction(body: ApiMaintenanceActionPostData, options?: any): AxiosPromise<void> {
            return StakePoolsApiFp(configuration).postMaintenanceAction(body, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tight to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
         * @summary Quit
         * @param {ApiWalletPassphrase} body 
         * @param {string} walletId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quitStakePool(body: ApiWalletPassphrase, walletId: string, options?: any): AxiosPromise<ApiTransaction> {
            return StakePoolsApiFp(configuration).quitStakePool(body, walletId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StakePoolsApi - object-oriented interface
 * @export
 * @class StakePoolsApi
 * @extends {BaseAPI}
 */
export class StakePoolsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for joining or leaving a stake pool. Note that it is an estimation because a delegation induces a transaction for which coins have to be selected randomly within the wallet. Because of this randomness, fees can only be estimated. 
     * @summary Estimate Fee
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public getDelegationFee(walletId: string, options?: any) {
        return StakePoolsApiFp(this.configuration).getDelegationFee(walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the current status of the stake pools maintenance actions. 
     * @summary View maintenance actions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public getMaintenanceActions(options?: any) {
        return StakePoolsApiFp(this.configuration).getMaintenanceActions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delegate all (current and future) addresses from the given wallet to the given stake pool.  <strong>Note:</strong> Bech32-encoded stake pool identifiers can vary in length. 
     * @summary Join
     * @param {ApiWalletPassphrase} body 
     * @param {string} stakePoolId 
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public joinStakePool(body: ApiWalletPassphrase, stakePoolId: string, walletId: string, options?: any) {
        return StakePoolsApiFp(this.configuration).joinStakePool(body, stakePoolId, walletId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  List all known stake pools ordered by descending `non_myopic_member_rewards`. The `non_myopic_member_rewards` — and thus the ordering — depends on the `?stake` query parameter.  Some pools _may_ also have metadata attached to them. 
     * @summary List
     * @param {number} stake The stake the user intends to delegate in Lovelace. Required. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public listStakePools(stake: number, options?: any) {
        return StakePoolsApiFp(this.configuration).listStakePools(stake, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Performs maintenance actions on stake pools, such as triggering metadata garbage collection.  Actions may not be instantaneous. 
     * @summary Trigger Maintenance actions
     * @param {ApiMaintenanceActionPostData} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public postMaintenanceAction(body: ApiMaintenanceActionPostData, options?: any) {
        return StakePoolsApiFp(this.configuration).postMaintenanceAction(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Stop delegating completely. The wallet's stake will become inactive.  > ⚠️  Disclaimer ⚠️ > > This endpoint historically use to take a stake pool id as a path parameter. > However, retiring from delegation is ubiquitous and not tight to a particular > stake pool. For backward-compatibility reasons, sending stake pool ids as path > parameter will still be accepted by the server but new integrations are > encouraged to provide a placeholder asterisk `*` instead. 
     * @summary Quit
     * @param {ApiWalletPassphrase} body 
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakePoolsApi
     */
    public quitStakePool(body: ApiWalletPassphrase, walletId: string, options?: any) {
        return StakePoolsApiFp(this.configuration).quitStakePool(body, walletId, options).then((request) => request(this.axios, this.basePath));
    }
}
