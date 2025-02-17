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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRRFHNH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx23dnRn54tX76IUZYbwKrWB6WxyoHVMRCwSu7cTeoaAiAaAuHEuTe%2FzQ2d17ke2kiV%2FD%2BO6DUZ0lmOxIuz3IvI2Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMzQQgQo3cvzSvlBpgKtwDBkkGWMT3ZArfSx9lOU81nLgWgnXpYWAOdz8tr19vpZLR7We1GTV%2BE1k42Y3vKA%2FQtSnbwHBZboxSIYRzSOHztcr7z%2B9e%2FqTBtWgJh0zheYlaWmod%2B5lyuCru5MKfGVgvB2%2FnYaaYTHK%2FkUP1kbI4Gz6Sk9J1%2B2AUHa1Si6OTir%2FtJeupMzk%2B10fniRhuA4WQsGcr4PZItVQsIMEiWPp5la0xM8IzpR01bNeZvYZRpMZSho0rTQWFupiM6iiwVySTW2ZbYxroMOjlLiizK6NfhLw%2F1SYXCneMVFSSfHdsFUrGBYzppxxuHkajU9Hk8JlXBX1C68WiFdfW%2FbCQzPwXzQKiTR34HmYPW8Tq%2FRFp7XZuS6HTWLOjPd9VQtcwOcUJ1b39LBLewddCDeWq0NS2O%2Bk9aUTxT%2FkzM7R7psQyMa3QAN3jngeNCN1fqS3sif%2Bn5PBBE3rCGvBh9h%2FUBSxSbr8NK%2BGeX2VNJ3qcH67LrlbY%2BIDavDVV1WHgS%2FalQdsiJmod2lrAF2IdF3E2ysf%2FF9cWKyy4WFW7fJ%2FWfANsSV2TGPCMcz6Cv6lEsHPp%2FFAgGliC0Aygdua3Vjga%2FurfytHNC0LxDM4BSpEVjbEjx5ifwlrnmx7wBu4Co%2FIwx%2BrLvQY6pgHzpEPPBzw626GnTlanSTR3ryDBim%2Bs4PY4d3Zz7Zn5fg32a170SJ7bWjmecaAR%2BYbhgb6aDM2d3lv6XAHx7M5VnUTVuKmYW4Q3RDdjm8EFlB6aLsKm7BRgOP1rMx8bGMiFgDvKoYwXg7B%2B3KR9JoQw9HaHzgDJtuPdTg1f%2BB1d3hPaH17DVJkd9zLFf4UH5XIBUR3iV3WYBdWGhOnDzrTrOndzkURf&X-Amz-Signature=bb0ea2556016c9802fa1fe3f1d233f343de4998dac691d04eb38258e602a6128&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRRFHNH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx23dnRn54tX76IUZYbwKrWB6WxyoHVMRCwSu7cTeoaAiAaAuHEuTe%2FzQ2d17ke2kiV%2FD%2BO6DUZ0lmOxIuz3IvI2Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMzQQgQo3cvzSvlBpgKtwDBkkGWMT3ZArfSx9lOU81nLgWgnXpYWAOdz8tr19vpZLR7We1GTV%2BE1k42Y3vKA%2FQtSnbwHBZboxSIYRzSOHztcr7z%2B9e%2FqTBtWgJh0zheYlaWmod%2B5lyuCru5MKfGVgvB2%2FnYaaYTHK%2FkUP1kbI4Gz6Sk9J1%2B2AUHa1Si6OTir%2FtJeupMzk%2B10fniRhuA4WQsGcr4PZItVQsIMEiWPp5la0xM8IzpR01bNeZvYZRpMZSho0rTQWFupiM6iiwVySTW2ZbYxroMOjlLiizK6NfhLw%2F1SYXCneMVFSSfHdsFUrGBYzppxxuHkajU9Hk8JlXBX1C68WiFdfW%2FbCQzPwXzQKiTR34HmYPW8Tq%2FRFp7XZuS6HTWLOjPd9VQtcwOcUJ1b39LBLewddCDeWq0NS2O%2Bk9aUTxT%2FkzM7R7psQyMa3QAN3jngeNCN1fqS3sif%2Bn5PBBE3rCGvBh9h%2FUBSxSbr8NK%2BGeX2VNJ3qcH67LrlbY%2BIDavDVV1WHgS%2FalQdsiJmod2lrAF2IdF3E2ysf%2FF9cWKyy4WFW7fJ%2FWfANsSV2TGPCMcz6Cv6lEsHPp%2FFAgGliC0Aygdua3Vjga%2FurfytHNC0LxDM4BSpEVjbEjx5ifwlrnmx7wBu4Co%2FIwx%2BrLvQY6pgHzpEPPBzw626GnTlanSTR3ryDBim%2Bs4PY4d3Zz7Zn5fg32a170SJ7bWjmecaAR%2BYbhgb6aDM2d3lv6XAHx7M5VnUTVuKmYW4Q3RDdjm8EFlB6aLsKm7BRgOP1rMx8bGMiFgDvKoYwXg7B%2B3KR9JoQw9HaHzgDJtuPdTg1f%2BB1d3hPaH17DVJkd9zLFf4UH5XIBUR3iV3WYBdWGhOnDzrTrOndzkURf&X-Amz-Signature=8522b6e501fb9be7ac917e100e57d6398b0f05f25bb5de0ef6c5df6e72c7e2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
