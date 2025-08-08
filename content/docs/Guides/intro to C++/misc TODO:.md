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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFLE7LI4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDdXnQu2In3n%2FG9%2FxbjbnOuAPX81tjYUHLZRHw8IuTPyQIhALKbVaMqcHDVcVQ%2F%2FNefH8MvxBe3eDbzuq%2FtjI82v%2By%2FKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Ihtx5E%2FNgw46sLoq3ANyftva2r13a5JWLu5k%2BKa%2FgEiUaPhgYW7BaeuQK%2FmKHKDQwZIYrassPvrWoUkCIixSYGPXMusYczvti0BX7ZSZRiAjpxOeZ6sX3UX7hrlajcfUcxV2Vn1quB%2FGvuVkgtKH1UtZaLEGcdNPPzKonav7ciLkhhkYZ%2BbuEAXJK%2BlAw0%2Bg%2BcSM8Yy7EnIa1r%2BiwLK%2Ff2fkh7P9RQhoZ2ohDvumg6kwN8G9cB0BWCV8rOTRCU9i2oaLGk%2ByEF54ODfHz1Tg6eHy6NHsuFAaeKpo1QvqiGT3vX136%2Boi0VfMPVLL8B3hnnnI1L40YbB%2Ft5n8RpFhBxJ7okX4lsJzKvnc1fjtd7vXSe%2F1Snn%2B4ONUdpsoC%2BrNyYc8mJCLF8xaF0LinrpqEloDAdb7yngaYUKAK8Y7vGeeRNWlBgG97PfY961XeHPI33G%2BydDMnyH8OFajMEp4EQ2YRpeF3sVXlMi8yaY%2FCYtJZLSuYayDy7sZoKuMzvEX%2BXXDjOj27duHNtpH3hwIOAtGn2JnDl6%2BTSnpj7uHbXmDCq3B6mUOD9SMdReSyiRZAIQK8IJiFSiqbnYWoWbrY0U3hukkpgDLpATxkoNon2ElO7bLFQdcvCsLdCgbXQFzZzxUVykrmwvT0zCo09XEBjqkAZh4ZeAWPhLlayyDj2z4xhXJ848Mo6MOGo0rQAHPX%2B%2FSHokyDuB%2BqSlqsnhLbIdywd3WMLFldY1ysVFZ80c4xq5BxwWrASkAxsEoIme7ptmS%2F1MRG2cew3U4Z%2FIG%2Bk5FK9BRr5%2BFQviKVTgUXR4xS624R8hdpghgscXUS8pDZLYj%2BbY4Ps3cHgXSzcxf2eoAtD3ATn9elKjB9PWxABA3UemPcx6v&X-Amz-Signature=13f2ab8499632ce5e7d3d43e7f53238fefd01d1e61aa298cb77df489bd13b9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFLE7LI4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDdXnQu2In3n%2FG9%2FxbjbnOuAPX81tjYUHLZRHw8IuTPyQIhALKbVaMqcHDVcVQ%2F%2FNefH8MvxBe3eDbzuq%2FtjI82v%2By%2FKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Ihtx5E%2FNgw46sLoq3ANyftva2r13a5JWLu5k%2BKa%2FgEiUaPhgYW7BaeuQK%2FmKHKDQwZIYrassPvrWoUkCIixSYGPXMusYczvti0BX7ZSZRiAjpxOeZ6sX3UX7hrlajcfUcxV2Vn1quB%2FGvuVkgtKH1UtZaLEGcdNPPzKonav7ciLkhhkYZ%2BbuEAXJK%2BlAw0%2Bg%2BcSM8Yy7EnIa1r%2BiwLK%2Ff2fkh7P9RQhoZ2ohDvumg6kwN8G9cB0BWCV8rOTRCU9i2oaLGk%2ByEF54ODfHz1Tg6eHy6NHsuFAaeKpo1QvqiGT3vX136%2Boi0VfMPVLL8B3hnnnI1L40YbB%2Ft5n8RpFhBxJ7okX4lsJzKvnc1fjtd7vXSe%2F1Snn%2B4ONUdpsoC%2BrNyYc8mJCLF8xaF0LinrpqEloDAdb7yngaYUKAK8Y7vGeeRNWlBgG97PfY961XeHPI33G%2BydDMnyH8OFajMEp4EQ2YRpeF3sVXlMi8yaY%2FCYtJZLSuYayDy7sZoKuMzvEX%2BXXDjOj27duHNtpH3hwIOAtGn2JnDl6%2BTSnpj7uHbXmDCq3B6mUOD9SMdReSyiRZAIQK8IJiFSiqbnYWoWbrY0U3hukkpgDLpATxkoNon2ElO7bLFQdcvCsLdCgbXQFzZzxUVykrmwvT0zCo09XEBjqkAZh4ZeAWPhLlayyDj2z4xhXJ848Mo6MOGo0rQAHPX%2B%2FSHokyDuB%2BqSlqsnhLbIdywd3WMLFldY1ysVFZ80c4xq5BxwWrASkAxsEoIme7ptmS%2F1MRG2cew3U4Z%2FIG%2Bk5FK9BRr5%2BFQviKVTgUXR4xS624R8hdpghgscXUS8pDZLYj%2BbY4Ps3cHgXSzcxf2eoAtD3ATn9elKjB9PWxABA3UemPcx6v&X-Amz-Signature=46787e127c7a9199b8bca5f05c08709ed743f68d8a68469082f6e624bc45f053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
