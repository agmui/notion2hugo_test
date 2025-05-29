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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6NABPKL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAhPUVd%2BMzfe1mVy6rxM7hTiuGHrqzSNl5r%2FDfs7U4gIhAJbAEIkBEaau61NQ3EFFCxAYwHlZ5NlxIXeECZAUwZMOKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FfH2Etfe3IgbLRAq3ANA6rflRUh1qFbG6E24AbsFBq%2B%2BvHfrpYjhcxjh6mEl0tPEBV5P3ul6hXH%2FwmILQDuWruZi0RXnfpOMi7%2FW%2BSSPGf7F4DRY5dghe%2FQoKl%2By55cbpab%2FDeuwvTYuxLdc1V%2FtNHVqc4FU78HEX6xJJsERIyFxDOCR3icFGzQuio3pqcBXu1POV2BQrXuNzS8z%2B70bMEEX6YXVgNk%2BMwoS8sUad0zJQtLWyOakZQ90vASf7Qv%2BRu%2FiXA6EAONSfX%2FhvnfxXMkrMrZUbRDqEAjOS%2FtWzxKVPrgTp55ZQcMPZh5%2BHp5P5%2F6AgRcGeJtEjR4GExJhnF5uA8Pfmn4iZDVOp%2B37o7LQVti4ZJdc%2BL4n6%2BSiLhzkG8vGr6BIKCr%2BzSqVv37JHtrFXhsyS0VZfUHD1LkmXl5oAmgcYJjPE2UU5QSASOgPoMzfLz%2BzPmVOawyl9Xi4A%2FfNoYzzZ3k%2FZT06Kth0L3ksPmzZDdoKRG%2BG0jZtP0wSBvEAEcyJTnQxaVwxxUYxmL60wPFKfoCZkwAUVLYMQQBY1UQm4%2BQLlLC2agDcWnGmYV1RluNQVac7ahd4dv4lKfk4eNgl5PpQ51arcb4q1hy33RfA1PpFzJV1h4XnxXwdo8BxaIF7QiO0KTCAsN%2FBBjqkAfl8zjfsPAcj1eZ9QDwB6cWyORDrInREHmTNjePKIl%2FgnMmvnefy0stlqGBNt8ZcTfEo%2F3z%2F4fp24BL7gSItD90HKJp22xFBr5%2F19YCeVufNqzneVee6Z6ids6laLNASI4E4HuXL%2F83LhszhVM2Zw23ecgUiwb8yWJ2RQnzuBYwlc2R6mtg46%2FdV7AvA4EdIv8Jp4Sam5rTc0NDI9wvOeyiwxZ1a&X-Amz-Signature=05a7b3409fd6cea34697496db292d63e67cb9230116cf919b45e6449153d06ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6NABPKL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAhPUVd%2BMzfe1mVy6rxM7hTiuGHrqzSNl5r%2FDfs7U4gIhAJbAEIkBEaau61NQ3EFFCxAYwHlZ5NlxIXeECZAUwZMOKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FfH2Etfe3IgbLRAq3ANA6rflRUh1qFbG6E24AbsFBq%2B%2BvHfrpYjhcxjh6mEl0tPEBV5P3ul6hXH%2FwmILQDuWruZi0RXnfpOMi7%2FW%2BSSPGf7F4DRY5dghe%2FQoKl%2By55cbpab%2FDeuwvTYuxLdc1V%2FtNHVqc4FU78HEX6xJJsERIyFxDOCR3icFGzQuio3pqcBXu1POV2BQrXuNzS8z%2B70bMEEX6YXVgNk%2BMwoS8sUad0zJQtLWyOakZQ90vASf7Qv%2BRu%2FiXA6EAONSfX%2FhvnfxXMkrMrZUbRDqEAjOS%2FtWzxKVPrgTp55ZQcMPZh5%2BHp5P5%2F6AgRcGeJtEjR4GExJhnF5uA8Pfmn4iZDVOp%2B37o7LQVti4ZJdc%2BL4n6%2BSiLhzkG8vGr6BIKCr%2BzSqVv37JHtrFXhsyS0VZfUHD1LkmXl5oAmgcYJjPE2UU5QSASOgPoMzfLz%2BzPmVOawyl9Xi4A%2FfNoYzzZ3k%2FZT06Kth0L3ksPmzZDdoKRG%2BG0jZtP0wSBvEAEcyJTnQxaVwxxUYxmL60wPFKfoCZkwAUVLYMQQBY1UQm4%2BQLlLC2agDcWnGmYV1RluNQVac7ahd4dv4lKfk4eNgl5PpQ51arcb4q1hy33RfA1PpFzJV1h4XnxXwdo8BxaIF7QiO0KTCAsN%2FBBjqkAfl8zjfsPAcj1eZ9QDwB6cWyORDrInREHmTNjePKIl%2FgnMmvnefy0stlqGBNt8ZcTfEo%2F3z%2F4fp24BL7gSItD90HKJp22xFBr5%2F19YCeVufNqzneVee6Z6ids6laLNASI4E4HuXL%2F83LhszhVM2Zw23ecgUiwb8yWJ2RQnzuBYwlc2R6mtg46%2FdV7AvA4EdIv8Jp4Sam5rTc0NDI9wvOeyiwxZ1a&X-Amz-Signature=a1fd70f936be4ba63350f3c6e5614f527ccdbab0e71eefdd3192b84a4f174721&X-Amz-SignedHeaders=host&x-id=GetObject)

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
