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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVDSUIQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Bz9sscY%2BYe001GM8B1Byb9GGjkKNU6fJkMYN9a42CwAiAi9WQddUEyp8kcfe2LVEKKDAi1FwWuqSBPSbABOM8joyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMPdHQM3QtYUvPyZoqKtwDdtLdlB8MfHunq6S562VFtS1jMHvpqmlAERCgg9mp0dYefFgq3K0DvzOk7LYKJritRnlir0pJs%2Bk6Eri85n8vnihHwk9Sa22E4eZUUWfMBMYkcHtmsm%2BDz8t5Oe7D8ngYyvKfa1QbdwL9ScfiibxB%2FWCIPmWYcsc3dc05h97fqytU5kiH2a8Cj1BZW%2FclF0tIqJpqBahceu84gljWZVg%2BMEYLdp2L6BDQEbX5nYhG1nXt%2Bs0H3l8zQi4T7n9wcb7J57Ds1Sob1Yd%2FO0x6zxB5WNTvLqewu96QuO0ozZohrwta2eGZ%2FFAwFwORonwgvWqBEorg5qqlliXXqM2V2RvvMCOzUUSzSPmGm%2B4vfZtWa4MiwF7nFoOftwxG2bWnb1T%2B09Cmz5sybVJSEr5PKlKNBvJlaP8fQAr7OLbaksID6EStSnL%2FqlvmndFy%2B63shZ5z6%2BQnZ9jIrdxgarDZgI%2F5V%2Bhkamsdkw7JkEBQ1%2B0i9ik9zxYJjEyaZp%2FsHEt4SPjUT61vyu4dFFP58Sc4N1NUvBq8%2B1X%2FlvBX4aLH%2BFLqfJfy8NDbmnc81Uw1iYxNZxWsPMFTfTSZWFw9c2xeDAJ%2FwqobjVh7U8%2FmlZVoZOTmCo2UnIy%2BIeAGYWeCzmQw48PawQY6pgHiFSKZExmYEUIrSTaLc%2BF011NXpCPBpBwTqOC5g4zMUGyYByIWX6Vhwc%2FkvWmVIBWvJfpDfFK8sAQRXrkN3o%2BRfzC4hE7%2BOcLGUq251aN0D6rUCDJBxXBKvdGAfUby4ZOJDOyxuwnO4X8Ryns3c7313pK5pzNhAVlFALSERbc6wCDeu9GSUpz3bGC0%2FXBmUH4c7t4XFzKFuwqJO2teroCehh%2FCa4TE&X-Amz-Signature=efa6673a2198d73b9a00a2b766c29e714a5e4b031796a2ffa0b9d0a759347e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVDSUIQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Bz9sscY%2BYe001GM8B1Byb9GGjkKNU6fJkMYN9a42CwAiAi9WQddUEyp8kcfe2LVEKKDAi1FwWuqSBPSbABOM8joyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMPdHQM3QtYUvPyZoqKtwDdtLdlB8MfHunq6S562VFtS1jMHvpqmlAERCgg9mp0dYefFgq3K0DvzOk7LYKJritRnlir0pJs%2Bk6Eri85n8vnihHwk9Sa22E4eZUUWfMBMYkcHtmsm%2BDz8t5Oe7D8ngYyvKfa1QbdwL9ScfiibxB%2FWCIPmWYcsc3dc05h97fqytU5kiH2a8Cj1BZW%2FclF0tIqJpqBahceu84gljWZVg%2BMEYLdp2L6BDQEbX5nYhG1nXt%2Bs0H3l8zQi4T7n9wcb7J57Ds1Sob1Yd%2FO0x6zxB5WNTvLqewu96QuO0ozZohrwta2eGZ%2FFAwFwORonwgvWqBEorg5qqlliXXqM2V2RvvMCOzUUSzSPmGm%2B4vfZtWa4MiwF7nFoOftwxG2bWnb1T%2B09Cmz5sybVJSEr5PKlKNBvJlaP8fQAr7OLbaksID6EStSnL%2FqlvmndFy%2B63shZ5z6%2BQnZ9jIrdxgarDZgI%2F5V%2Bhkamsdkw7JkEBQ1%2B0i9ik9zxYJjEyaZp%2FsHEt4SPjUT61vyu4dFFP58Sc4N1NUvBq8%2B1X%2FlvBX4aLH%2BFLqfJfy8NDbmnc81Uw1iYxNZxWsPMFTfTSZWFw9c2xeDAJ%2FwqobjVh7U8%2FmlZVoZOTmCo2UnIy%2BIeAGYWeCzmQw48PawQY6pgHiFSKZExmYEUIrSTaLc%2BF011NXpCPBpBwTqOC5g4zMUGyYByIWX6Vhwc%2FkvWmVIBWvJfpDfFK8sAQRXrkN3o%2BRfzC4hE7%2BOcLGUq251aN0D6rUCDJBxXBKvdGAfUby4ZOJDOyxuwnO4X8Ryns3c7313pK5pzNhAVlFALSERbc6wCDeu9GSUpz3bGC0%2FXBmUH4c7t4XFzKFuwqJO2teroCehh%2FCa4TE&X-Amz-Signature=034c683a0477ebcdb1a31629754946e20fa7fd8f4b2d5d70b14a3e5a7a703ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
