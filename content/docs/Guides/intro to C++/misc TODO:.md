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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GY3VHJQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHZB7u%2Bdqq2fWRRmrfapdzrG339yJrzvw5Uy9XfuRc7%2FAiEAg8t%2F3LMCy3ktKW%2BnP2ypn9FxBihdVRK68UqqC58sK0Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAxg13AiXQW81wUHLircAxC6AG2h7Ern0JgEd3L9CjG9slEGps%2Bu6gwPZ2xYxIZSVM5u7ZqYRAwseuf3V2EkUEgrA3oeHfvyzjdtaxDfdB464PbTrH%2BcCIJY4pLm6XSHdHzlFBIAd8QXi3X8nksLZJJgTRjZWsFN%2Fb9CTV6en62rAnPehcdd54NjvG1pk1KiowgW9CurnAxNOBUZiy8KYXCcuUYjSDvR2zx7zryFCf9mKhJ2CfNX356Nj91n8Jt00S%2BoNavg0fS4IKV9HoiFHZVnYB6oZWcKHX9rBzaEHTyzuOSgcAwNzZWRiuLTFcl4vz2%2BzlRy5lJQ2rWtRxix3crHNb7gTiTO%2BCNEnyQcLlR2sko0cbn8I1rIhyjOyX5uPI39epGHS1FzgKe25peBw0k19sQSBrD6JtV7U%2BumbtPYWDzhSUHM0z1iow91wy%2BN62fLRwOmxIET6YfEX1b9pwTgPNWp2tshS7wPqv2cOOn15uyfTBJI9jzpXPhPol%2B%2BFfzymA%2FKMfMnqAzH4%2B%2Fmfl%2Fc6xUYsYCLS3lPVer7kKneLLBtwUEgvbfIbMwk8SOwtuAYnVTYstH%2F1%2BaAwmwjIk8zRyOTO7I2OLY0EljcqCF73RmdzHzzxto2Fr8EaHRvXIXocApN5z7roLeAMLSIyb0GOqUBKe3TSoI4OJhzNrltJevr8OGA0FiHHc6nF6P3%2BxsT92GFBXnVpgthWugYqclrwGUYkQW%2Fm%2FomFnWm%2BDxuBVVGw8NA2hNodmZgQ0zDNS4tqr%2FL%2BKw7IGO91u1FOB03%2FM%2BEYY%2Bj%2BWtj1OUAhbsZsPMtVfLCaRSSjChS4OgvhdCAWHdoZRzAFQryoZh0CMJ4ZYi6KeVcSH8JLCkK4Y8e4Yb9ADu0w4FY&X-Amz-Signature=e09200c2bbf9230796b303c357dbb9530302c21e9b0425077d43bf05d779acbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GY3VHJQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHZB7u%2Bdqq2fWRRmrfapdzrG339yJrzvw5Uy9XfuRc7%2FAiEAg8t%2F3LMCy3ktKW%2BnP2ypn9FxBihdVRK68UqqC58sK0Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAxg13AiXQW81wUHLircAxC6AG2h7Ern0JgEd3L9CjG9slEGps%2Bu6gwPZ2xYxIZSVM5u7ZqYRAwseuf3V2EkUEgrA3oeHfvyzjdtaxDfdB464PbTrH%2BcCIJY4pLm6XSHdHzlFBIAd8QXi3X8nksLZJJgTRjZWsFN%2Fb9CTV6en62rAnPehcdd54NjvG1pk1KiowgW9CurnAxNOBUZiy8KYXCcuUYjSDvR2zx7zryFCf9mKhJ2CfNX356Nj91n8Jt00S%2BoNavg0fS4IKV9HoiFHZVnYB6oZWcKHX9rBzaEHTyzuOSgcAwNzZWRiuLTFcl4vz2%2BzlRy5lJQ2rWtRxix3crHNb7gTiTO%2BCNEnyQcLlR2sko0cbn8I1rIhyjOyX5uPI39epGHS1FzgKe25peBw0k19sQSBrD6JtV7U%2BumbtPYWDzhSUHM0z1iow91wy%2BN62fLRwOmxIET6YfEX1b9pwTgPNWp2tshS7wPqv2cOOn15uyfTBJI9jzpXPhPol%2B%2BFfzymA%2FKMfMnqAzH4%2B%2Fmfl%2Fc6xUYsYCLS3lPVer7kKneLLBtwUEgvbfIbMwk8SOwtuAYnVTYstH%2F1%2BaAwmwjIk8zRyOTO7I2OLY0EljcqCF73RmdzHzzxto2Fr8EaHRvXIXocApN5z7roLeAMLSIyb0GOqUBKe3TSoI4OJhzNrltJevr8OGA0FiHHc6nF6P3%2BxsT92GFBXnVpgthWugYqclrwGUYkQW%2Fm%2FomFnWm%2BDxuBVVGw8NA2hNodmZgQ0zDNS4tqr%2FL%2BKw7IGO91u1FOB03%2FM%2BEYY%2Bj%2BWtj1OUAhbsZsPMtVfLCaRSSjChS4OgvhdCAWHdoZRzAFQryoZh0CMJ4ZYi6KeVcSH8JLCkK4Y8e4Yb9ADu0w4FY&X-Amz-Signature=9d50aff59e98f12009dc81ced63fa89f71fbec65afe25e6d78d4196f11e27890&X-Amz-SignedHeaders=host&x-id=GetObject)

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
