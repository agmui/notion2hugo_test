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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=f0acba586e010bd96d94710a7f170532981fe5ae4b161a057e85f610d6a0a82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=5a5beb7fd7543c4d132e024fbeb0a49e2b47e0a26dcc7a4b76710b0c36145f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
