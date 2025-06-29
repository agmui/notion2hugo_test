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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4YT3TX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxIrnKVZTc8gxtRl1D96w0nwwPY4%2F%2Fmx3wyRUw4PEzSAiAII77fpQLytVI9bs0%2Fe0WnhGy5zKxk1W0N8Fu3vAIquyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2BR%2BySxUHH91ERwCKtwDQYPaciHUmRN8VXGnpD04ig98W7%2FqV%2FCOwzoRD%2BVwq0nqKcFmGuvXJGCPQ8ZmiWIRLUFOZs89dOlWMlTuZTGCFzqQem0zj2unMgtKlXeIToTNtXHTMV7qHj0DjLnEJZZWHdOyBjMWsTgP%2Bkgeu0UHePOt1nOKf7vD%2Fitx6zjH4%2BCWzFx0jDk9Umu9zvaP%2BHroz3qpW8lgXTWHMMgbj%2B1VL0i%2FyWbXw%2FnO%2FPBoccxv2onzwNchuwPwuBhX2vHLVcIWQDVUT6NDqnylKq0V3iA1I2GX28IRtwO2kux10uJSUrShIxEbc9uaQf9oU%2B5MjMCeg85WITT9InglvNKltab4Sc5tDf5rDCpMrpPdph2f3Qe%2Bsjn7XKjLqalD2hH4zJ4oIiN6iFELKV%2FmF7OUbKzYfEulMven261M5oEy4h1H%2B9GbhTxwSZLfVPpY2j%2Fd88IhFjA5fEaTBuNPDAB%2B0uV6tu%2Fx6fhfTFUwbrLRjrBF4mPtW5%2BSjNYxRl2pjbchuVOknOjRwkYwAgxcY8kZ84YUZt6jX1CwQ2cqpCjuF50v871bYRddqjZm1ykr%2F%2BTKCnggRvs64iA%2B62XS5LEpGrkEgcEGAX4XVKwBccPCNVtyj5Td3d1wn5%2BGkpLwmMIw2OCCwwY6pgG2SQtPP0lbGx3NQn3o7s%2BwUVtqqW7AB6CR1oLngq1CLNC58Agm5usZkxtpDxjjjzI3utB2OMzdN4PQZ1kyrBeZs9wudT3RWK5BTYmX0I79nOzT%2Bzh%2BI1ZQN9L0o1JVfEVIo5UsP4e9sdLt9HEVGXMSGblhR4%2Fxs5CqapWbV1zpDPaigjf9f7bIbKEmco21bc3elM8hQmAYUPrgEc65aFsUqe8tBZft&X-Amz-Signature=7c32a2bfb7bf67c79af05b09ec5f73f9340ff1255e9da2c8215440b2e59d51cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4YT3TX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxIrnKVZTc8gxtRl1D96w0nwwPY4%2F%2Fmx3wyRUw4PEzSAiAII77fpQLytVI9bs0%2Fe0WnhGy5zKxk1W0N8Fu3vAIquyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2BR%2BySxUHH91ERwCKtwDQYPaciHUmRN8VXGnpD04ig98W7%2FqV%2FCOwzoRD%2BVwq0nqKcFmGuvXJGCPQ8ZmiWIRLUFOZs89dOlWMlTuZTGCFzqQem0zj2unMgtKlXeIToTNtXHTMV7qHj0DjLnEJZZWHdOyBjMWsTgP%2Bkgeu0UHePOt1nOKf7vD%2Fitx6zjH4%2BCWzFx0jDk9Umu9zvaP%2BHroz3qpW8lgXTWHMMgbj%2B1VL0i%2FyWbXw%2FnO%2FPBoccxv2onzwNchuwPwuBhX2vHLVcIWQDVUT6NDqnylKq0V3iA1I2GX28IRtwO2kux10uJSUrShIxEbc9uaQf9oU%2B5MjMCeg85WITT9InglvNKltab4Sc5tDf5rDCpMrpPdph2f3Qe%2Bsjn7XKjLqalD2hH4zJ4oIiN6iFELKV%2FmF7OUbKzYfEulMven261M5oEy4h1H%2B9GbhTxwSZLfVPpY2j%2Fd88IhFjA5fEaTBuNPDAB%2B0uV6tu%2Fx6fhfTFUwbrLRjrBF4mPtW5%2BSjNYxRl2pjbchuVOknOjRwkYwAgxcY8kZ84YUZt6jX1CwQ2cqpCjuF50v871bYRddqjZm1ykr%2F%2BTKCnggRvs64iA%2B62XS5LEpGrkEgcEGAX4XVKwBccPCNVtyj5Td3d1wn5%2BGkpLwmMIw2OCCwwY6pgG2SQtPP0lbGx3NQn3o7s%2BwUVtqqW7AB6CR1oLngq1CLNC58Agm5usZkxtpDxjjjzI3utB2OMzdN4PQZ1kyrBeZs9wudT3RWK5BTYmX0I79nOzT%2Bzh%2BI1ZQN9L0o1JVfEVIo5UsP4e9sdLt9HEVGXMSGblhR4%2Fxs5CqapWbV1zpDPaigjf9f7bIbKEmco21bc3elM8hQmAYUPrgEc65aFsUqe8tBZft&X-Amz-Signature=691810ce5886e4a82c4189fec51c2779a78a134ae8da3eb7eb74c05b715c9f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
