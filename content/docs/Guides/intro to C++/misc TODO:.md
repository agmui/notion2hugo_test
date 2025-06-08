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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5TKDMP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLGmPRAmEx7HRcICe%2FgWyCgLzP4y8tk1mJMy%2BIyoZ9QIhAIelWuz2htVaxl0FYbdqn56ImVYvH3J7sozwynvNYGQvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL2udgFOOLGsPgFDIq3ANQIu7912L5Hf00AV%2F5T%2FGcMwMGLBuT1WUkf1EZF3qcCPDjdAtSTJxrqZ5x%2B0EiQY%2BDCFastuLR0Xgk2GFfk7WCU1XnKAmKQVknPWqV8w4iRYmqAsM2fa5cU1Z%2FkTh%2FmNKxau7rqqdxY97DnalowlyC3TMIjWgBO4PFEFzMlnBZwFJZo%2BArE6yh4vnFv%2F9HvVpmeYG2FMwu9jOHh68wa2IfcM0%2BDsLYDoRkrdQ1Kj5fbx1HXD1UGBel3vmTRWajI8oGGYvsXEM6XVNkol%2FIpep6amxl631LpoJf74VIDFWx1%2Bzuvey2FcgB76Mkk0yNMBb4tUmzevs4uiCSyCTyRa%2F5GSKuVH3rlQXYqXxlJPlMiBUZjhlYfUHXQD3W6j3%2F%2BA4XYMmJpXsynnkRBEKduH50X13L4vAYOx3BQLmg9YLiZeEU0TTquAuMh%2BkqbQY%2FF3N9m7T%2F8NKEphoZ0I2WY6YBa6%2FjXddu0UrpkLUvKJr4FseSmQzs4WwP9C5jZcqv0tl2KfhjjJpJREwXcT%2FYxxo%2BJkGMnUeSjtZ4FQBaUSiBPqJVXCCJBuYrvSSXy0XLAJ5xXteqr6miBk%2BBAc0RtuKgNBQw2bnRn61hZi7wy2ftk48I6uGBUsYH%2BOrxEDCNv5XCBjqkAex%2FKaKXNJiAax1Uz8U5djuOSWWov4F96BQ04r4erWLGn%2B7YP4Eh6%2B7HUQ6m8mnlp0WKe7mOLfn7H3%2FQCWQMascvJ%2BRRcQ1VLG6J%2Fm3%2Fh7pdqvrI8by%2Fge%2F9Aqhd2gsxljoFjeuhQCzLN20j0jLwB1GBE90cUOAnfireVcutkpQwOKgUAT71ZwO%2F1JEEaeYCzNZB%2FR9vC4al3%2BHxp9kLg9jvThb5&X-Amz-Signature=99483359c3d0e6d87425429006e3a416eb412bbc1a5a1896a5a2521b4cb39030&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5TKDMP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLGmPRAmEx7HRcICe%2FgWyCgLzP4y8tk1mJMy%2BIyoZ9QIhAIelWuz2htVaxl0FYbdqn56ImVYvH3J7sozwynvNYGQvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL2udgFOOLGsPgFDIq3ANQIu7912L5Hf00AV%2F5T%2FGcMwMGLBuT1WUkf1EZF3qcCPDjdAtSTJxrqZ5x%2B0EiQY%2BDCFastuLR0Xgk2GFfk7WCU1XnKAmKQVknPWqV8w4iRYmqAsM2fa5cU1Z%2FkTh%2FmNKxau7rqqdxY97DnalowlyC3TMIjWgBO4PFEFzMlnBZwFJZo%2BArE6yh4vnFv%2F9HvVpmeYG2FMwu9jOHh68wa2IfcM0%2BDsLYDoRkrdQ1Kj5fbx1HXD1UGBel3vmTRWajI8oGGYvsXEM6XVNkol%2FIpep6amxl631LpoJf74VIDFWx1%2Bzuvey2FcgB76Mkk0yNMBb4tUmzevs4uiCSyCTyRa%2F5GSKuVH3rlQXYqXxlJPlMiBUZjhlYfUHXQD3W6j3%2F%2BA4XYMmJpXsynnkRBEKduH50X13L4vAYOx3BQLmg9YLiZeEU0TTquAuMh%2BkqbQY%2FF3N9m7T%2F8NKEphoZ0I2WY6YBa6%2FjXddu0UrpkLUvKJr4FseSmQzs4WwP9C5jZcqv0tl2KfhjjJpJREwXcT%2FYxxo%2BJkGMnUeSjtZ4FQBaUSiBPqJVXCCJBuYrvSSXy0XLAJ5xXteqr6miBk%2BBAc0RtuKgNBQw2bnRn61hZi7wy2ftk48I6uGBUsYH%2BOrxEDCNv5XCBjqkAex%2FKaKXNJiAax1Uz8U5djuOSWWov4F96BQ04r4erWLGn%2B7YP4Eh6%2B7HUQ6m8mnlp0WKe7mOLfn7H3%2FQCWQMascvJ%2BRRcQ1VLG6J%2Fm3%2Fh7pdqvrI8by%2Fge%2F9Aqhd2gsxljoFjeuhQCzLN20j0jLwB1GBE90cUOAnfireVcutkpQwOKgUAT71ZwO%2F1JEEaeYCzNZB%2FR9vC4al3%2BHxp9kLg9jvThb5&X-Amz-Signature=35d84af2787704753487576fa759c5b0eafa0dd8fc3450e3a74e9bcb0db85f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
