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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD7OSAXU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE%2FE0v0YAfrp%2Bcl2XpWDOlSWnxc4dRJTn%2F%2BxT0YDYFjTAiBn8PxSK%2BjoK1aZTj5pELVIeCQt0gdnFQd%2F5cYSwfGEdir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMF1G3l2nrPrtG673hKtwDJVtA1NEZOW5sgxerWIQhw1VHGjJLKxTGIpOhpMuAaKyySyibLzQ3KZLCxEh48UKrgkDpNdtXdKHKBzWnv5kMhIdrGBClKdxvf4V844HnCuP0QA1c%2BlunISvvQRalsqpaWlZ%2FqkMWMicSsetU2vYKmuoqdaaggQ1N8zZSCTK5tf9EgjyJlN8TAfyLCZENNIisQO5FvBiA%2B7jKZ0%2BaxvmPM9m%2B0wEfdINXt3eQpvB6QEjBSUfejwnsnidpgKYQ11N0crwT2ZwBIy3hzYgnDvimzB0ri9pTHM%2FvnrsLiHUJnac4AlPPtCV09hV%2FGsGpS1rUMiC8cyYs%2FzsqiI%2FBcIWyFDuQevhyOUjMG8GjSI26PpvuP78KgB9B233iQhLKvSAaPDs%2FhgR0FEvJM3c32IiykYhJMSLtvEPqXf6EOjFeUSkRKl%2FygN2OdZmxB9Y5V4WaY6H3oLYXb6jTr7QLMlEadT7AgOIpqG3G2lw%2Ba%2FE6C76W9I1ximJ2LFQAnS0cmDPvOT0vMZZu9HtCE9DO200OtRIxFsiWCw8lXkrBJo6TDsAZfBShV4JwWOQFWkUQlqlS404e1NaMzi15Y%2BSyVQu7NrBxQTRYPYebX5uiiWQZf8VMGYFxkzgx7QMK6gAw%2FI%2BKxAY6pgGFPOMYG4fmjJbIrfoggsLV3JBSMfMLCYyk8RQ5L1wMrLBTK86%2FQBgAzSkvJufYVBrcrs2IsglmszCUYE31pu3Ffo53gDvmVaN9H6D60Gb8VTWWE1B%2BhljJKnOZ%2BIo4Een%2FQfJ3Jr0EgpR2neLTDPFZFsPsaZHADjpOGN4DD5MNqR0gLJRlZ6%2FNKiAuaaS2MnOjCQWZlNkPOkpmvVzU%2B3n8ET%2FhMSUo&X-Amz-Signature=e6353527c936f21fcc4f1576566740c703ab52549682fd48b97cc3f70f87d029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD7OSAXU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE%2FE0v0YAfrp%2Bcl2XpWDOlSWnxc4dRJTn%2F%2BxT0YDYFjTAiBn8PxSK%2BjoK1aZTj5pELVIeCQt0gdnFQd%2F5cYSwfGEdir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMF1G3l2nrPrtG673hKtwDJVtA1NEZOW5sgxerWIQhw1VHGjJLKxTGIpOhpMuAaKyySyibLzQ3KZLCxEh48UKrgkDpNdtXdKHKBzWnv5kMhIdrGBClKdxvf4V844HnCuP0QA1c%2BlunISvvQRalsqpaWlZ%2FqkMWMicSsetU2vYKmuoqdaaggQ1N8zZSCTK5tf9EgjyJlN8TAfyLCZENNIisQO5FvBiA%2B7jKZ0%2BaxvmPM9m%2B0wEfdINXt3eQpvB6QEjBSUfejwnsnidpgKYQ11N0crwT2ZwBIy3hzYgnDvimzB0ri9pTHM%2FvnrsLiHUJnac4AlPPtCV09hV%2FGsGpS1rUMiC8cyYs%2FzsqiI%2FBcIWyFDuQevhyOUjMG8GjSI26PpvuP78KgB9B233iQhLKvSAaPDs%2FhgR0FEvJM3c32IiykYhJMSLtvEPqXf6EOjFeUSkRKl%2FygN2OdZmxB9Y5V4WaY6H3oLYXb6jTr7QLMlEadT7AgOIpqG3G2lw%2Ba%2FE6C76W9I1ximJ2LFQAnS0cmDPvOT0vMZZu9HtCE9DO200OtRIxFsiWCw8lXkrBJo6TDsAZfBShV4JwWOQFWkUQlqlS404e1NaMzi15Y%2BSyVQu7NrBxQTRYPYebX5uiiWQZf8VMGYFxkzgx7QMK6gAw%2FI%2BKxAY6pgGFPOMYG4fmjJbIrfoggsLV3JBSMfMLCYyk8RQ5L1wMrLBTK86%2FQBgAzSkvJufYVBrcrs2IsglmszCUYE31pu3Ffo53gDvmVaN9H6D60Gb8VTWWE1B%2BhljJKnOZ%2BIo4Een%2FQfJ3Jr0EgpR2neLTDPFZFsPsaZHADjpOGN4DD5MNqR0gLJRlZ6%2FNKiAuaaS2MnOjCQWZlNkPOkpmvVzU%2B3n8ET%2FhMSUo&X-Amz-Signature=64025f1fb5485d4f3913b85c8d50e5eb2a2bfdd64254865b1d6b85c9751832f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
