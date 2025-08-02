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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4SUQAZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhSKWQQsMgyaedWC29vkCSpSwMLE6KmFD3DaC9Sioy9AIhAMrBtLLW3ncG1LJ2hV4iU8ERP69Ak%2Fm88mzBTvZqYFZrKv8DCBAQABoMNjM3NDIzMTgzODA1IgxINU1slzZnPAxvlNcq3ANH7hWxx6Mqjnc1PxaozsujaeI3Ir1UWAnDofYz7JbctvJNa8g1LsVUhIicQLUDSETN1vOlU85uOt5az%2BYWIwKEVvpUyjFqyZ4puOJnpXq5MEwnl8ZEUiN2begJ1gqLDU4C6Kf6iwATI78tmDDVorABe5K5mHQC%2Bubwg%2BB9WfIzWFDV5GMob%2F%2FpolrAa72zbgTBPmwyUmyjx30UXv8ri2NFfRMXsPdCkhtLpxkFnnjbUD9MGJmJmn6wjqQnuYNS33wnKP6VnlZMDX9hRfWEJvqJJbmjvrkFCGTTHh6WgL4JkSVZHdpvlUZpG%2B5nzGE196bQFj3AIaZhN6CPc%2FVjvh6JgGMNV6deocGznClDOPvTQJ3l7rRvRJfXYJR4vwVWEXpXnr4Dzdtm6fXsBsVIwH8f9tin%2F%2Byb39JMFZdAwBIFotaXywnF8Foy2gAmmdURMmGJmd%2B4t5f%2BDH1Qh1O1UA6cz26PqzvSkFPqrywsybRNc7%2BGn2yOqWbwBdQDMu7ed8U1YETKw9dfltfFChPu1CIYemRNUuNKk1ypGcWpgV%2BeqoRH%2Bw%2BueTFhtMlZM6V80TEEox1J5OvSxJwW5wGWH8Sbgfa8tJeUJprTDgGfDAsdkYJB1AhOzfZ7WHx7hjDy77bEBjqkARs%2FDhkIGEQ%2FkXyoJnFOJnZCxm3RSmchyDe1BECt1x8nLxOSlFdm7fgby5EQZLWRJsSyONTCVVvvh%2F5kRzUjUXIX1xNYWb5eMY4FDXfa5CRwBy0el65uxShtkx6ANtYYPRVKMlKPDgQKKg%2FRLmTXfEEre0s5Gauw2yxs87ftI0MftBlQ3srJrTRVGrBv9fal59zpEEGAU07fegTK08zo6lQe6cZF&X-Amz-Signature=0a5222c555e7e14ac44c185749d05d96abaff83d28f3036b6389b962a025ad87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4SUQAZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhSKWQQsMgyaedWC29vkCSpSwMLE6KmFD3DaC9Sioy9AIhAMrBtLLW3ncG1LJ2hV4iU8ERP69Ak%2Fm88mzBTvZqYFZrKv8DCBAQABoMNjM3NDIzMTgzODA1IgxINU1slzZnPAxvlNcq3ANH7hWxx6Mqjnc1PxaozsujaeI3Ir1UWAnDofYz7JbctvJNa8g1LsVUhIicQLUDSETN1vOlU85uOt5az%2BYWIwKEVvpUyjFqyZ4puOJnpXq5MEwnl8ZEUiN2begJ1gqLDU4C6Kf6iwATI78tmDDVorABe5K5mHQC%2Bubwg%2BB9WfIzWFDV5GMob%2F%2FpolrAa72zbgTBPmwyUmyjx30UXv8ri2NFfRMXsPdCkhtLpxkFnnjbUD9MGJmJmn6wjqQnuYNS33wnKP6VnlZMDX9hRfWEJvqJJbmjvrkFCGTTHh6WgL4JkSVZHdpvlUZpG%2B5nzGE196bQFj3AIaZhN6CPc%2FVjvh6JgGMNV6deocGznClDOPvTQJ3l7rRvRJfXYJR4vwVWEXpXnr4Dzdtm6fXsBsVIwH8f9tin%2F%2Byb39JMFZdAwBIFotaXywnF8Foy2gAmmdURMmGJmd%2B4t5f%2BDH1Qh1O1UA6cz26PqzvSkFPqrywsybRNc7%2BGn2yOqWbwBdQDMu7ed8U1YETKw9dfltfFChPu1CIYemRNUuNKk1ypGcWpgV%2BeqoRH%2Bw%2BueTFhtMlZM6V80TEEox1J5OvSxJwW5wGWH8Sbgfa8tJeUJprTDgGfDAsdkYJB1AhOzfZ7WHx7hjDy77bEBjqkARs%2FDhkIGEQ%2FkXyoJnFOJnZCxm3RSmchyDe1BECt1x8nLxOSlFdm7fgby5EQZLWRJsSyONTCVVvvh%2F5kRzUjUXIX1xNYWb5eMY4FDXfa5CRwBy0el65uxShtkx6ANtYYPRVKMlKPDgQKKg%2FRLmTXfEEre0s5Gauw2yxs87ftI0MftBlQ3srJrTRVGrBv9fal59zpEEGAU07fegTK08zo6lQe6cZF&X-Amz-Signature=7292ec8bff8b3c8adb2b7f941d04d1a3bb9d64f7a0d3d933da753d1c88fe9b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
