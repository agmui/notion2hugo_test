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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73ZV7YP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCz2mFtXNTLauiCPRcv64AHG9fR6qdj0m02NTbkvq6P3QIhAIq%2B08YIgpdBmrOwsPD6aXeWP7c1wEEECOVxAqGI8txgKv8DCEYQABoMNjM3NDIzMTgzODA1Igw5EP3b85gaI9nfsLEq3AP8B0n9%2Ffck07T8hzchI9iizZ9pGT0EDwcmo7uMBPt%2FJ8xEV7PD%2BkDvv0dLdm1SUxE%2F5RQgecv4v4v54DAuIIk9LgP9GaM9UJej%2FRi7%2BYx4uuYQYJODdg01pkpgLDftp02S9VXrz%2BwSZgTTilv5sMLCav5s489puaDdA02C6GlqPWZk7yuhGNf9%2FUCHwUH1i%2BXXyeNdmiPUkRGMIzWiBvErWarNy77dO2VU84dHruQBBGBvn7GBBCuTfSsjPNlu0TxzkX1NmKonEZhBRyjPqBmMRmt8qvoN8ftfAe2GpwDQWmXuuMzLCsVUtsKdXUbz5m6W5kgyxfMZKVhvRqSF9AXnKpCOdQ5B1k7XsAm3KLqC32cWdzw%2FVObfwcmMvcqIcDKfiNBV4TFmDqXRiNqrxqfoLzm5FFFW3VgPaz%2F6ZtgjLTXQy0s8Y2MFT7GXtSe0hOQXVINAitVKB8zemK5uPA%2FST%2Bk5sSrYruqNeo3zy61TzQSfBUSaWj17u4lZ5FuDBGLB8czeJYjVRvYvAK7TC6YOU9WhSiIVYuNc7QaywTwUq71a0lvSiiIgTzF6jLgTFo6Meir1IGBTLLn2%2FqKFFz8JgMOMVTVyHyw0xYghj1iYkFLxZILwsX5%2FNxf27TDM%2Bfa9BjqkAdPyKPsTBA2w1YqxcbfXgS39PpOC5cLPrZRJmnd4OR9hfrvwqm1pK3cQnfMpNNZrXlS9JNmV5kQBpxzOsAiyMpBE6FMioq2%2FkPXFMvUAQSwDLh%2Bhs9tId%2FSGIkdF7kPX2zulVyW3FHjfK7SB2Qk5aJPD9lZvC0990bUIwcF0fG25CBZmePyJRBS5mqTcveQvPgNg2ks2uKqtzpGEGejl98V%2F3HHU&X-Amz-Signature=c320de9d2272f6416e9e068dd81414c563439fb3b08e4c9d1fa28c5f3190667d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73ZV7YP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCz2mFtXNTLauiCPRcv64AHG9fR6qdj0m02NTbkvq6P3QIhAIq%2B08YIgpdBmrOwsPD6aXeWP7c1wEEECOVxAqGI8txgKv8DCEYQABoMNjM3NDIzMTgzODA1Igw5EP3b85gaI9nfsLEq3AP8B0n9%2Ffck07T8hzchI9iizZ9pGT0EDwcmo7uMBPt%2FJ8xEV7PD%2BkDvv0dLdm1SUxE%2F5RQgecv4v4v54DAuIIk9LgP9GaM9UJej%2FRi7%2BYx4uuYQYJODdg01pkpgLDftp02S9VXrz%2BwSZgTTilv5sMLCav5s489puaDdA02C6GlqPWZk7yuhGNf9%2FUCHwUH1i%2BXXyeNdmiPUkRGMIzWiBvErWarNy77dO2VU84dHruQBBGBvn7GBBCuTfSsjPNlu0TxzkX1NmKonEZhBRyjPqBmMRmt8qvoN8ftfAe2GpwDQWmXuuMzLCsVUtsKdXUbz5m6W5kgyxfMZKVhvRqSF9AXnKpCOdQ5B1k7XsAm3KLqC32cWdzw%2FVObfwcmMvcqIcDKfiNBV4TFmDqXRiNqrxqfoLzm5FFFW3VgPaz%2F6ZtgjLTXQy0s8Y2MFT7GXtSe0hOQXVINAitVKB8zemK5uPA%2FST%2Bk5sSrYruqNeo3zy61TzQSfBUSaWj17u4lZ5FuDBGLB8czeJYjVRvYvAK7TC6YOU9WhSiIVYuNc7QaywTwUq71a0lvSiiIgTzF6jLgTFo6Meir1IGBTLLn2%2FqKFFz8JgMOMVTVyHyw0xYghj1iYkFLxZILwsX5%2FNxf27TDM%2Bfa9BjqkAdPyKPsTBA2w1YqxcbfXgS39PpOC5cLPrZRJmnd4OR9hfrvwqm1pK3cQnfMpNNZrXlS9JNmV5kQBpxzOsAiyMpBE6FMioq2%2FkPXFMvUAQSwDLh%2Bhs9tId%2FSGIkdF7kPX2zulVyW3FHjfK7SB2Qk5aJPD9lZvC0990bUIwcF0fG25CBZmePyJRBS5mqTcveQvPgNg2ks2uKqtzpGEGejl98V%2F3HHU&X-Amz-Signature=387e730348229ddbd448a6304dbd674613edd995e71e4c25fe55ddea1d50cb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
