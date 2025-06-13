---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSZXXOL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDVxOouOf7sWGvzYmMYMu89cbX4JVQU5TfiVzZUQWv%2BFwIgWI2t5jVIu%2BoH91gtOXNGV%2FhMCRTI1Zi6J11hvW%2F4JNEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCsnNlexNmebpHJhGCrcA6apjPsDVgSUIvE%2FyXR%2F1WONdoKtLsFr1q9XyMVAHfIr4pplEYWDvK1rD8ocq5Lx7bq94iQcr2zaZmj3aQMGD4KBTv0W2qoo5hH1ajJu7ldgCpLxS1e0zaeps4s0Fvtr7a9nay0rHKLUmxRleIP%2BY7M1Zl9aY7%2FzZ3bk3T%2BmcG6dt69jU9yEvJKpwBY%2BztxdqrAGRHAcUj5mt0pmBlmc7JmRqIUfCYhLDBbR0UurFrkzlQHZjJTum5nifVr9i%2BqM852GqdQfPgoPifVIOzQoPhQiCdLil2xjBLpJ3adNpnpA0Nb97kN2ZBNjoboCI141iFmu9LLi4%2BzJ25P4hZO2OmOOz9uNj0MiEadhiRSdkfGL%2FN6Ws21zFrTaNIRGMtS4K76MJRBC043VzhTlNHA24dVpL7fNw8nuaiJkfhpd3%2BNZdsgAjRit4Vxvmbx%2FPiMx6eDZYMomeu9zxTAMa6tbRNfNHf8l5GcWM7y8VI8RwuyX07aASK9490HVJOX0hZ33HVx%2BP2vUemCo6iJqlNpHOmhXppZgamvF%2FWjsKC9iv%2BbdT%2FwM2lT1gWhKXDlc8XLzVE%2FpQC0ArZ4Yg1uSHI2WpJnNuBMOsKGWK9%2BNiv0UsiBbrPBF2Sih0%2B4GX3KuMJCqsMIGOqUB7hbM%2BOzM9EH2miS2RcUtHNGrm%2BjReb%2B5On1ugmxlLtm2nRuUTdz6EibgBi6DPaH3SkRZ2GLew22LkoA%2BudRvy8HwOqMsfHUNnEIpZNkloA8Zyz%2B1jZs7Lk9EoTcs2J%2F5HI0u2D9Ek%2BIa1ey1V%2BWzVkbmqI0RLvxGxmZKKGaOM2kbNCtcR4oHlbhdweV7im9ds6fRxJ9G4jNI7tkgEk%2FoCx8mMFwh&X-Amz-Signature=a19866cb35c66917aea31af784638dbc85b3374cd35a57f46582f73e93358648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSZXXOL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDVxOouOf7sWGvzYmMYMu89cbX4JVQU5TfiVzZUQWv%2BFwIgWI2t5jVIu%2BoH91gtOXNGV%2FhMCRTI1Zi6J11hvW%2F4JNEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCsnNlexNmebpHJhGCrcA6apjPsDVgSUIvE%2FyXR%2F1WONdoKtLsFr1q9XyMVAHfIr4pplEYWDvK1rD8ocq5Lx7bq94iQcr2zaZmj3aQMGD4KBTv0W2qoo5hH1ajJu7ldgCpLxS1e0zaeps4s0Fvtr7a9nay0rHKLUmxRleIP%2BY7M1Zl9aY7%2FzZ3bk3T%2BmcG6dt69jU9yEvJKpwBY%2BztxdqrAGRHAcUj5mt0pmBlmc7JmRqIUfCYhLDBbR0UurFrkzlQHZjJTum5nifVr9i%2BqM852GqdQfPgoPifVIOzQoPhQiCdLil2xjBLpJ3adNpnpA0Nb97kN2ZBNjoboCI141iFmu9LLi4%2BzJ25P4hZO2OmOOz9uNj0MiEadhiRSdkfGL%2FN6Ws21zFrTaNIRGMtS4K76MJRBC043VzhTlNHA24dVpL7fNw8nuaiJkfhpd3%2BNZdsgAjRit4Vxvmbx%2FPiMx6eDZYMomeu9zxTAMa6tbRNfNHf8l5GcWM7y8VI8RwuyX07aASK9490HVJOX0hZ33HVx%2BP2vUemCo6iJqlNpHOmhXppZgamvF%2FWjsKC9iv%2BbdT%2FwM2lT1gWhKXDlc8XLzVE%2FpQC0ArZ4Yg1uSHI2WpJnNuBMOsKGWK9%2BNiv0UsiBbrPBF2Sih0%2B4GX3KuMJCqsMIGOqUB7hbM%2BOzM9EH2miS2RcUtHNGrm%2BjReb%2B5On1ugmxlLtm2nRuUTdz6EibgBi6DPaH3SkRZ2GLew22LkoA%2BudRvy8HwOqMsfHUNnEIpZNkloA8Zyz%2B1jZs7Lk9EoTcs2J%2F5HI0u2D9Ek%2BIa1ey1V%2BWzVkbmqI0RLvxGxmZKKGaOM2kbNCtcR4oHlbhdweV7im9ds6fRxJ9G4jNI7tkgEk%2FoCx8mMFwh&X-Amz-Signature=bfe555eb853be4254ec4e0795f7599b2d24d37d16f2d42fb524b33f9e752c7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
