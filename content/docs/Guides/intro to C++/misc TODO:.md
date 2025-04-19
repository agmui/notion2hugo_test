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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBELKD2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgKB9mfUFKH7VSj4upAkHZvNRwwZcYC1hQ0e0dCLoQBAIgIZ%2B6RvKdC1WE%2FLMiCFK6OTVmXVL6Hdd6ihQH00v%2B6NAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1L%2FPMjt7Tz59YhzyrcA7Uyosl0z78aVbcUDnc3Cdfx2h7z%2BE4hcO89QlVYQoek4SYMwsndpX6QLmOHNoYhE3OC9f713cduaa%2B%2FnpT%2BbGOYuuVyB2v8%2FOvb5uplXmhQRhqOS1vgZysq2LaH5F43R8EY5%2BArszuHx2jtUlmt2zoeNL9qp2Y52%2B58ejqZJ%2FoTNmiLxcTrlsRyy7zhsZzR3SG0khaOIuMsCZy%2FAHHimAgK19LyxW%2FPFGL1L13m6lNSMUlZ9CKh58dB6C4l3HR6svJ2DtepD6ikccQDchrzCry8hI0ZdCIhx2Lu%2FYHnnA2XYOjNboq4u5rDQLre%2B8Q0g7%2FgatOYzybt6NzbOzokV370F%2FUrp6RQDJOzNBHo1P1H%2Bacjml%2FasP%2FmZfiKSQ9zc0SRGbYah3oBG6gK1BsYru%2FABtQQ9ShBOFs%2BULoWo1eIvTjFXSTRkM7Cyd5cCgXI%2FYLxNg4WPXV6HJCIvhqdKY3s8%2BjMPgUDrzJ97B3XHHD7yY3NclwreqfGEAjXTWY5JnY%2FSX0lrhD7LjSTyBvSk940HvbP1SCYs%2Bum02bBXWC7MVRmKal8KREwko8mgEfsyNDAlfhheOCkUnswmedU0Hi7AeFg93W3cdD%2B6L32Rq180d9AWfmCgtxz17bCMOLXjMAGOqUBRW00Q4HjyaBG03V1n0ldExdj8QAW6bN4mx6mq1AZrhvVLRth5dNXtsGfntoLtWFl4ivO7lA6FR8f7gn60txdPJVzcKH1c3eFpH%2F9cQRIp2y2FGKsXX%2BpYDM9K2%2FGJ9T4ZSQA1Xv%2FM8iGKOdrgfdZiIvSloTcGqMoimeBACEjScjh8a0RGQmIFQO1zd6c4k1wge3w9iZ%2FkErIYG4qYmZPHCIQCY7R&X-Amz-Signature=92904c517d516a463980b8712f60716441971ce53405b13deba9c90eb07bb0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBELKD2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgKB9mfUFKH7VSj4upAkHZvNRwwZcYC1hQ0e0dCLoQBAIgIZ%2B6RvKdC1WE%2FLMiCFK6OTVmXVL6Hdd6ihQH00v%2B6NAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1L%2FPMjt7Tz59YhzyrcA7Uyosl0z78aVbcUDnc3Cdfx2h7z%2BE4hcO89QlVYQoek4SYMwsndpX6QLmOHNoYhE3OC9f713cduaa%2B%2FnpT%2BbGOYuuVyB2v8%2FOvb5uplXmhQRhqOS1vgZysq2LaH5F43R8EY5%2BArszuHx2jtUlmt2zoeNL9qp2Y52%2B58ejqZJ%2FoTNmiLxcTrlsRyy7zhsZzR3SG0khaOIuMsCZy%2FAHHimAgK19LyxW%2FPFGL1L13m6lNSMUlZ9CKh58dB6C4l3HR6svJ2DtepD6ikccQDchrzCry8hI0ZdCIhx2Lu%2FYHnnA2XYOjNboq4u5rDQLre%2B8Q0g7%2FgatOYzybt6NzbOzokV370F%2FUrp6RQDJOzNBHo1P1H%2Bacjml%2FasP%2FmZfiKSQ9zc0SRGbYah3oBG6gK1BsYru%2FABtQQ9ShBOFs%2BULoWo1eIvTjFXSTRkM7Cyd5cCgXI%2FYLxNg4WPXV6HJCIvhqdKY3s8%2BjMPgUDrzJ97B3XHHD7yY3NclwreqfGEAjXTWY5JnY%2FSX0lrhD7LjSTyBvSk940HvbP1SCYs%2Bum02bBXWC7MVRmKal8KREwko8mgEfsyNDAlfhheOCkUnswmedU0Hi7AeFg93W3cdD%2B6L32Rq180d9AWfmCgtxz17bCMOLXjMAGOqUBRW00Q4HjyaBG03V1n0ldExdj8QAW6bN4mx6mq1AZrhvVLRth5dNXtsGfntoLtWFl4ivO7lA6FR8f7gn60txdPJVzcKH1c3eFpH%2F9cQRIp2y2FGKsXX%2BpYDM9K2%2FGJ9T4ZSQA1Xv%2FM8iGKOdrgfdZiIvSloTcGqMoimeBACEjScjh8a0RGQmIFQO1zd6c4k1wge3w9iZ%2FkErIYG4qYmZPHCIQCY7R&X-Amz-Signature=db9b48f7d178f14010099ab35f194db8b8de343222b634a49f3a83a8b13a7617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
