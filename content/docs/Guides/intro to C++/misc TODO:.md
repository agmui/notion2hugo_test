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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARB7ZFB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsvFB%2FY0nxlckG3b%2Ffea42wVCC7RgV2n1A4ITP9%2BdEgIhAIZwWdFlG43cepp0dW6BYSFABk%2FftObiCtQiUbWkPg7CKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzttpTuO%2Fd5Cn2kULAq3APHHyCBD65sfndy5bvqD1ARMXCZ8zceET%2BBoi4xXgIaHHVkYOcSmFRFKRQwef2BJYvr5ajUH689gdmPTOynY1QqcsTQOi%2BaFCi8a%2FnPb%2Bp%2BjtZwkRsO856nDGVIP%2BCtoKHL5IBhuYWeIP%2BCczJi%2FgsNRnDWUTNSOVq5Vzb9vIsDGfqy4cshrAEY3qfq%2Fv3tvy%2F3en4A41SxfoJ0Ca8ACRYhIQYGzt6tJefCRAf7QOWGMWmAs1arMsWO8E7P3zHZix6Bux%2B%2FSf0w8uHrKHGfliAvXUq49sI8wfdlrgZQx3OE0s5E9%2B%2BvoUdP1bQRcksaQbo%2F0q19ZC7krs7CgQNiaCJHAT65jVkbStf5OeCHdqL9lV7uxnFome29adZJ0JIMfZTlJDyLQ6%2FfbIY9dJCR9RPvrdZwJmQK3xa33sB0yh3nnOH2dJHq9ZozXZfLMUErvfy1HEC8Z5FrexSmfqkmzezf1EmjnenmkhaIem4g52zIlAgnrsaC%2Bh%2BJ%2FdbG3nr%2BBWpbK%2FdM7z1YWrgkvGASBaBGLWqoxWN0kan5SMvWG7Fv%2Bz5%2B25OE4c720ASOmSpxfQAOwdI%2FdD%2FgOPU%2FOsYMYYC%2FRYoLQ2%2B%2FVpZ0edkKkgDs%2FKQXUQzTGdORV0XKQjDAzOi8BjqkAeRNKVTiR3buUUnIyMi3q7zK0Jo%2FcZYuM39so4l%2BqblQeGezpamR%2BJgE7DBFa9DkdovWIenMRpjhfVTuo15GiI4rx4eThz%2BL9XtjTgTO48ipl27m%2BnWpNGnM9XA8Ao%2F6R8g2AYDAEV3lVASumzNyJ4M7yXwzEnZsbbb8u3HVwYiw8CNsRDlwGE%2BTN0YuJ4zyr1waCnuVxyZoEJ7FQi7ZzqqvwLOn&X-Amz-Signature=ea72c1538d7cdb59741ddf36d4169fe8bcf440c35ce0d9906a652c1ab64fdc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARB7ZFB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLsvFB%2FY0nxlckG3b%2Ffea42wVCC7RgV2n1A4ITP9%2BdEgIhAIZwWdFlG43cepp0dW6BYSFABk%2FftObiCtQiUbWkPg7CKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzttpTuO%2Fd5Cn2kULAq3APHHyCBD65sfndy5bvqD1ARMXCZ8zceET%2BBoi4xXgIaHHVkYOcSmFRFKRQwef2BJYvr5ajUH689gdmPTOynY1QqcsTQOi%2BaFCi8a%2FnPb%2Bp%2BjtZwkRsO856nDGVIP%2BCtoKHL5IBhuYWeIP%2BCczJi%2FgsNRnDWUTNSOVq5Vzb9vIsDGfqy4cshrAEY3qfq%2Fv3tvy%2F3en4A41SxfoJ0Ca8ACRYhIQYGzt6tJefCRAf7QOWGMWmAs1arMsWO8E7P3zHZix6Bux%2B%2FSf0w8uHrKHGfliAvXUq49sI8wfdlrgZQx3OE0s5E9%2B%2BvoUdP1bQRcksaQbo%2F0q19ZC7krs7CgQNiaCJHAT65jVkbStf5OeCHdqL9lV7uxnFome29adZJ0JIMfZTlJDyLQ6%2FfbIY9dJCR9RPvrdZwJmQK3xa33sB0yh3nnOH2dJHq9ZozXZfLMUErvfy1HEC8Z5FrexSmfqkmzezf1EmjnenmkhaIem4g52zIlAgnrsaC%2Bh%2BJ%2FdbG3nr%2BBWpbK%2FdM7z1YWrgkvGASBaBGLWqoxWN0kan5SMvWG7Fv%2Bz5%2B25OE4c720ASOmSpxfQAOwdI%2FdD%2FgOPU%2FOsYMYYC%2FRYoLQ2%2B%2FVpZ0edkKkgDs%2FKQXUQzTGdORV0XKQjDAzOi8BjqkAeRNKVTiR3buUUnIyMi3q7zK0Jo%2FcZYuM39so4l%2BqblQeGezpamR%2BJgE7DBFa9DkdovWIenMRpjhfVTuo15GiI4rx4eThz%2BL9XtjTgTO48ipl27m%2BnWpNGnM9XA8Ao%2F6R8g2AYDAEV3lVASumzNyJ4M7yXwzEnZsbbb8u3HVwYiw8CNsRDlwGE%2BTN0YuJ4zyr1waCnuVxyZoEJ7FQi7ZzqqvwLOn&X-Amz-Signature=3777acf51fa57c11bce9e220c3e1dbf1153f64e1801e3e171d57a30dcdcf2a28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
