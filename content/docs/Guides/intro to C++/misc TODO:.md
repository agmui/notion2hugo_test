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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FH4XZLD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbvmyWO%2FLkFoclYWope5G7bEjWy4xvbCz7wNosqsX3ngIgQKfcUjFculmIZlG%2BO5k2efsfaMoVVCuCuWsm8uSzH2gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKK3iPoWp91ilL6iHircAyuf3OKdqC%2BEc2ZaajYcmaovV9Lz3RPULc4Csx4kcS2TJKRI95mrDs0N8tnlN2umNWlXqOmvIt7bvWVhv2ou%2FArpQuD3bWR%2Bh2XMZvVznjJFczBUY7y8e%2FI15AUz3o%2Bpv1zOnSRo9Kbvo8yKxwv3kbLc6vVDUA2aVJY1dnE2bJX%2FY3IDsHCn%2BZKmD2eoaqytfHZldFOvV1B0KobaD%2Fam1h%2BNn2cavvRsWyskjInUCNcJykfX45vNMaXcmsmFkDQyll%2FvwjLNIMpi%2FnYl0G9Vvm67k5L29vF6ck8g3u41ei0JkfDL%2B%2BkP1YhzyKtDuzuhwUzL8vHLPxZjnkk92H5O%2BiL7WVpxHSDrZMCVAivhi5KMSbCwDtC%2F3w4GCKh3k4vmf0dTxSRQdR%2BXnI08u%2Bhdgp7T0miF66QypMv9lyr5Fvn53MaV8XPQotvjMyyBp9BGf%2FGQLjXSmugO6DeGSsm0if%2BXMdem7WvvluJMZQ7zOlzG20Q0Tc2GMNg5HZ0SMnZeFA3v4CpcTDSmGumhSHxSroId0CpWme53XtuTdilnns5zwLnezqcyPwg5CUrneqTeiwJ0OL65xsvckZh%2FOxlx7phDuLv2lNGQQHPIFsBYeQXQwXuiH5i%2BYUKyQhvTMPmgx70GOqUBCa3CXHD6Myn7d6zpkD8PS1wH2RV150X8WfVbWoj4bkQHNEGpmP9eBI6y3J5zqt0anUPHrB8cnTAs75d9OGLUejbXcMZJR6LqZJMl1y9xpsS8FsNLRuDWwuAPqrWBF2AkiTfZ2%2BdeIHUSEmLKsWIEAqynyXFZ%2FX43OTkXb648VGJQ%2F9%2BVN8FIaZiDHEYSoF1PtcWneFYeSk0%2BtTxeqMM398c7AJvl&X-Amz-Signature=0227f55d6291c5511822795d9f6c85c81012a7cadefffc61c5a6000def16683b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FH4XZLD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbvmyWO%2FLkFoclYWope5G7bEjWy4xvbCz7wNosqsX3ngIgQKfcUjFculmIZlG%2BO5k2efsfaMoVVCuCuWsm8uSzH2gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKK3iPoWp91ilL6iHircAyuf3OKdqC%2BEc2ZaajYcmaovV9Lz3RPULc4Csx4kcS2TJKRI95mrDs0N8tnlN2umNWlXqOmvIt7bvWVhv2ou%2FArpQuD3bWR%2Bh2XMZvVznjJFczBUY7y8e%2FI15AUz3o%2Bpv1zOnSRo9Kbvo8yKxwv3kbLc6vVDUA2aVJY1dnE2bJX%2FY3IDsHCn%2BZKmD2eoaqytfHZldFOvV1B0KobaD%2Fam1h%2BNn2cavvRsWyskjInUCNcJykfX45vNMaXcmsmFkDQyll%2FvwjLNIMpi%2FnYl0G9Vvm67k5L29vF6ck8g3u41ei0JkfDL%2B%2BkP1YhzyKtDuzuhwUzL8vHLPxZjnkk92H5O%2BiL7WVpxHSDrZMCVAivhi5KMSbCwDtC%2F3w4GCKh3k4vmf0dTxSRQdR%2BXnI08u%2Bhdgp7T0miF66QypMv9lyr5Fvn53MaV8XPQotvjMyyBp9BGf%2FGQLjXSmugO6DeGSsm0if%2BXMdem7WvvluJMZQ7zOlzG20Q0Tc2GMNg5HZ0SMnZeFA3v4CpcTDSmGumhSHxSroId0CpWme53XtuTdilnns5zwLnezqcyPwg5CUrneqTeiwJ0OL65xsvckZh%2FOxlx7phDuLv2lNGQQHPIFsBYeQXQwXuiH5i%2BYUKyQhvTMPmgx70GOqUBCa3CXHD6Myn7d6zpkD8PS1wH2RV150X8WfVbWoj4bkQHNEGpmP9eBI6y3J5zqt0anUPHrB8cnTAs75d9OGLUejbXcMZJR6LqZJMl1y9xpsS8FsNLRuDWwuAPqrWBF2AkiTfZ2%2BdeIHUSEmLKsWIEAqynyXFZ%2FX43OTkXb648VGJQ%2F9%2BVN8FIaZiDHEYSoF1PtcWneFYeSk0%2BtTxeqMM398c7AJvl&X-Amz-Signature=f1d382adfedcdb0e47c645d3d7de7097efcf5cf71f07a17f802aaf99e95df5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
