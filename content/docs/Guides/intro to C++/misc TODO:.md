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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNEMYN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEMm1U96n8ZocY1eFqJcYtOEaa4TNummzqL8dRi3b5GrAiACkqJElB%2BjyXZlD%2FdxGThUsUc%2BKDW2wPYusHu02D7wPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMps5x%2FYQVR7MSShmyKtwDWmw99MXFi3O9gBb1yEyy47Zt2OXFClJ08cNCzI5bGlE5c%2BbVBEn2hMfVuEWy%2BtkVV4xYUgjkK7%2FiN%2BDLpmbH4THaMvxvoNBJB4pDPwiIFA%2BgHq1cMFVBHJICols0hq2kz4NyuXUChoCFyXtuwGqRWsPrOn8TDmLe%2F0Mi2h1I2%2F8jgMvK2vqMGzvooP85O%2FyPY%2FvXBiNxpTlUIGEY6GHAiH3CdsvWESWmxzaDOWbN4Z8Hzg7cjnnUh033qu1YWcXFwNaJR8wIFhrvGdGGH%2Fq2JY1hprZbG6J34TlEWmnRMRfEiyJQrdBB%2B3OaprjpTX3Wadw1Pe0Nn6FRahhz6zNo5%2FQAIY5FpAFQ%2BuqIFzrGw4rULYbpjqmCHT%2BrONaLojQPbGYoFVNEZko3ynp2WXBnsFysg%2FWspaiw0W7uFB6u3nWC%2BAnjp1RUyJwm2cYTwzoP56TdM5HuMnIG%2Fag%2FNLoUxEOvfLvKmOPq%2FYfi0oZcuNx4U0lWjTkzo22pAGNbfRD4M0N0La0MdjW4omPVBO4ybqbIYR4%2FvqWA8LnX3ZdlWPO%2BVeomjzfqRD2Ng7nPhzgSoFznoZzDBQapWZnSjtWbNlohl4CzAZZ%2Fgub2dnHZ4fgzy%2FdnywaWjUb9B80wgYWXwQY6pgHBK7wkKOAUk4Ax%2BAujDUeWM340kyX6EUa8grNDHqU0amZvR7yZMG9OSXqAZukJhHUkHby3ClyNRVcfiS2R2p3dHh1ZGPX1DzesDI%2FymCHid4olOZCRTzXn1fqLCdSXB%2B10KtOY5muCXXRlo%2B14NJ6D3aqWSTYV88fO9MFunzaBW8sIaAG8okLEBi1YXEcVp2jVrjteM54E9NLZ%2Bcd466ySp44DL7Tx&X-Amz-Signature=4df14d325e840801935cd794ca385c6559cd667db441dfc15ad874d2428bc24c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNEMYN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEMm1U96n8ZocY1eFqJcYtOEaa4TNummzqL8dRi3b5GrAiACkqJElB%2BjyXZlD%2FdxGThUsUc%2BKDW2wPYusHu02D7wPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMps5x%2FYQVR7MSShmyKtwDWmw99MXFi3O9gBb1yEyy47Zt2OXFClJ08cNCzI5bGlE5c%2BbVBEn2hMfVuEWy%2BtkVV4xYUgjkK7%2FiN%2BDLpmbH4THaMvxvoNBJB4pDPwiIFA%2BgHq1cMFVBHJICols0hq2kz4NyuXUChoCFyXtuwGqRWsPrOn8TDmLe%2F0Mi2h1I2%2F8jgMvK2vqMGzvooP85O%2FyPY%2FvXBiNxpTlUIGEY6GHAiH3CdsvWESWmxzaDOWbN4Z8Hzg7cjnnUh033qu1YWcXFwNaJR8wIFhrvGdGGH%2Fq2JY1hprZbG6J34TlEWmnRMRfEiyJQrdBB%2B3OaprjpTX3Wadw1Pe0Nn6FRahhz6zNo5%2FQAIY5FpAFQ%2BuqIFzrGw4rULYbpjqmCHT%2BrONaLojQPbGYoFVNEZko3ynp2WXBnsFysg%2FWspaiw0W7uFB6u3nWC%2BAnjp1RUyJwm2cYTwzoP56TdM5HuMnIG%2Fag%2FNLoUxEOvfLvKmOPq%2FYfi0oZcuNx4U0lWjTkzo22pAGNbfRD4M0N0La0MdjW4omPVBO4ybqbIYR4%2FvqWA8LnX3ZdlWPO%2BVeomjzfqRD2Ng7nPhzgSoFznoZzDBQapWZnSjtWbNlohl4CzAZZ%2Fgub2dnHZ4fgzy%2FdnywaWjUb9B80wgYWXwQY6pgHBK7wkKOAUk4Ax%2BAujDUeWM340kyX6EUa8grNDHqU0amZvR7yZMG9OSXqAZukJhHUkHby3ClyNRVcfiS2R2p3dHh1ZGPX1DzesDI%2FymCHid4olOZCRTzXn1fqLCdSXB%2B10KtOY5muCXXRlo%2B14NJ6D3aqWSTYV88fO9MFunzaBW8sIaAG8okLEBi1YXEcVp2jVrjteM54E9NLZ%2Bcd466ySp44DL7Tx&X-Amz-Signature=5ffb1c70332fb4352139885b7aba519db1d29735a64507e483a95895003e62ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
