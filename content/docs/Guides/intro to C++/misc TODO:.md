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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUW6TPGG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi7mCccGSKO2KCrFfsEPMLjU2vsfxqVathRap5zyGhCAiBtXRJsVbYVrpAkhtKi7c1aMGkgrUym54a9YyIIKxcQlSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMe6GfJrybZaU%2ByOlhKtwDLadV2PVNgdcq6kV7q4JubE42l%2FFCk4eZKSduKDOLBmY%2FJ2B%2F0%2FC4C0CY1T5rvkIBZMOgxYLHso%2FxMO0D2Ks1LJ7FqH%2BqbcwGhwxf7bgSwyd3aN0cktqjgdHF200vTkOmIsQNqzw9Xb3ee%2Fofb9NGeeAnTuXw896rCYWJVX%2Fj3voBArZA9B%2BOjc4UyXVI%2FRQfe8iCbD9gB1YhD%2BWSNnFVOkcjT7M9goCxKhWom0DNT%2FB8FmwsT%2FdjVVk158inkZ0UaFUbaSWsC5iBAw5zZWtay%2BVvDP7V96wpdpxe0qxcOBUsuM%2FmKdn0A1s2HvUY6QTZHkK3ASHHM7mxj6nPwC25rpdh5GZ8RS8GHU7O7v8HN2DxsEgg6%2BCRm6Phsbd9uodU3N3EhP7pGPajDniOmzzRtHS%2FzyeNuHx%2Fe3QI%2BIbeYZns2H%2FSCzn5qyg5dIfbXbWEbA6Ge3mtDRrzOUXnR2JXWQWvSPpkt3IcQoSzhtSOif8Klk%2FH%2FPx2FCAUUmYjPE1b95aIN3ZOmi1PQ9MTR9FNDURaTc8X9chEp9lsa4MbkSbVSQS%2FsXAu0zRJBcvWYhvO3UT3YJhJuvrnx1oQDJNhpS6amzkJXYcPiCe99BrkJb7msDfddKMoGZWk1pow49%2BrvgY6pgEItaDLZaDlYStS3Zk9AO7%2FlQWEZ3xCJst5MpPR7mzVFcc5iWFLL9SqlEVoB5G7wKc7hCDmNfZ7qU98ff3N62FhEsxXQwVLOIds098%2BhTvMm%2FYzKiMH8ny2KPSLXhdqyu7vkjeT87pzvHmeqLwtyedTxLZ7oYLN%2FUQUqi7Q8ZlkJoDdMTs2IoT8Y26M0HXoShiqfxPg%2FVfdazgZY8nDT%2BdEyti19ORG&X-Amz-Signature=470ce7fc31b026ac8b254a9dba1aae66f2579d3e183ea6d0ce386244e63ac544&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUW6TPGG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi7mCccGSKO2KCrFfsEPMLjU2vsfxqVathRap5zyGhCAiBtXRJsVbYVrpAkhtKi7c1aMGkgrUym54a9YyIIKxcQlSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMe6GfJrybZaU%2ByOlhKtwDLadV2PVNgdcq6kV7q4JubE42l%2FFCk4eZKSduKDOLBmY%2FJ2B%2F0%2FC4C0CY1T5rvkIBZMOgxYLHso%2FxMO0D2Ks1LJ7FqH%2BqbcwGhwxf7bgSwyd3aN0cktqjgdHF200vTkOmIsQNqzw9Xb3ee%2Fofb9NGeeAnTuXw896rCYWJVX%2Fj3voBArZA9B%2BOjc4UyXVI%2FRQfe8iCbD9gB1YhD%2BWSNnFVOkcjT7M9goCxKhWom0DNT%2FB8FmwsT%2FdjVVk158inkZ0UaFUbaSWsC5iBAw5zZWtay%2BVvDP7V96wpdpxe0qxcOBUsuM%2FmKdn0A1s2HvUY6QTZHkK3ASHHM7mxj6nPwC25rpdh5GZ8RS8GHU7O7v8HN2DxsEgg6%2BCRm6Phsbd9uodU3N3EhP7pGPajDniOmzzRtHS%2FzyeNuHx%2Fe3QI%2BIbeYZns2H%2FSCzn5qyg5dIfbXbWEbA6Ge3mtDRrzOUXnR2JXWQWvSPpkt3IcQoSzhtSOif8Klk%2FH%2FPx2FCAUUmYjPE1b95aIN3ZOmi1PQ9MTR9FNDURaTc8X9chEp9lsa4MbkSbVSQS%2FsXAu0zRJBcvWYhvO3UT3YJhJuvrnx1oQDJNhpS6amzkJXYcPiCe99BrkJb7msDfddKMoGZWk1pow49%2BrvgY6pgEItaDLZaDlYStS3Zk9AO7%2FlQWEZ3xCJst5MpPR7mzVFcc5iWFLL9SqlEVoB5G7wKc7hCDmNfZ7qU98ff3N62FhEsxXQwVLOIds098%2BhTvMm%2FYzKiMH8ny2KPSLXhdqyu7vkjeT87pzvHmeqLwtyedTxLZ7oYLN%2FUQUqi7Q8ZlkJoDdMTs2IoT8Y26M0HXoShiqfxPg%2FVfdazgZY8nDT%2BdEyti19ORG&X-Amz-Signature=8d9f20bfe63c54fdfb90a15648973c7047750ba6e1aba7791048131ee6f7913c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
