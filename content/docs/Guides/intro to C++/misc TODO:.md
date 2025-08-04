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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIK7H7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDXUE0mGMpXiJaMlqbYebHJkwuRtLGW4D80pfdLcV5VzQIhAN7NyUCpdY98iP6zk7rQSrtTWnlqBqQlhOK9%2FMwxW5GlKv8DCEwQABoMNjM3NDIzMTgzODA1IgxIpC6jYu0D7VuHYH8q3AOP5PWo320Me7JjV5ceO70FvKBn0LAyE0X6rzTpJmI67Y6vfLvomeo8jAusAwWNosef4TJ7UR6UBqtiNAwtUsEw6ASq9xA5jkdX4TmtleICZfJMhGwA1int9V0ZJwMyAB%2FkBLW7lwPpC%2FeYwsflKOm8rww%2FibMPTjA74bFdpPuUh%2B0KxJLvluR3wQADFZoVeYZsm1ZuTarDe7tTcqwpsehz9a%2FQkHvX8iTESGDar5UR2jslQkKBupTk4mzd3Dy5XuPw81zQwzcfIw8UBRUBBD0rff8Ry0jQnGy9gP3eh0CDBLck7sms%2F2MLmLaCjjDM93x2jT%2Fn5ACZp%2BySLRlM8o54zUTabPfGB9LiVKAhhJqXrL5DjkJSrQorTpvQ33uNWrTV%2BE1zIW6HbWxWwRYpyguAD5yy1CUQVLcWv%2BFTrAd9SY8JNBHPm%2F5m%2B9C1unKX4PNI%2F2kzejh3DmPq2wmqT3dtHRkIMwSLujWbr0%2BwKVVwEzQnyQMhyiUAqVqybWyLeqwtd478fQI%2F3YOSigQ6yAg%2F%2BFZaxQ0FM85%2B4DVsSarSuHiO7f5KBHlsL%2BLuxPJc4JBaeTaNohUhgwrOldnCCFZ%2FXTBlUDhcGZvBjWsFx5v%2BYzJpw8PTSTRX5rysyjDd%2BMPEBjqkAdFa0A8O11Nx2lV%2FX2A3IBAmg3xYEPSWeBHZvdOQTzqQ7VfdgS8a82hoawPNWv7K0AsGygutRk%2FooXBT%2F%2BY7H9Dky%2FAciRukGSBPziC2r6k4iimy7ldvS%2BtYdodDzV%2BhX8pKaYn6W4mrWG3XefUfmky9%2FOdwdg1xb6HMgbtBG5D7LFFo7N3qZ%2BHjOs5V2GIrG4YUOohGznyZcsHeRxPBbXyWPKk3&X-Amz-Signature=8984766b61adcec620282199068348e040c9fe1899b7fe9983bcbb87c16afa92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIK7H7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDXUE0mGMpXiJaMlqbYebHJkwuRtLGW4D80pfdLcV5VzQIhAN7NyUCpdY98iP6zk7rQSrtTWnlqBqQlhOK9%2FMwxW5GlKv8DCEwQABoMNjM3NDIzMTgzODA1IgxIpC6jYu0D7VuHYH8q3AOP5PWo320Me7JjV5ceO70FvKBn0LAyE0X6rzTpJmI67Y6vfLvomeo8jAusAwWNosef4TJ7UR6UBqtiNAwtUsEw6ASq9xA5jkdX4TmtleICZfJMhGwA1int9V0ZJwMyAB%2FkBLW7lwPpC%2FeYwsflKOm8rww%2FibMPTjA74bFdpPuUh%2B0KxJLvluR3wQADFZoVeYZsm1ZuTarDe7tTcqwpsehz9a%2FQkHvX8iTESGDar5UR2jslQkKBupTk4mzd3Dy5XuPw81zQwzcfIw8UBRUBBD0rff8Ry0jQnGy9gP3eh0CDBLck7sms%2F2MLmLaCjjDM93x2jT%2Fn5ACZp%2BySLRlM8o54zUTabPfGB9LiVKAhhJqXrL5DjkJSrQorTpvQ33uNWrTV%2BE1zIW6HbWxWwRYpyguAD5yy1CUQVLcWv%2BFTrAd9SY8JNBHPm%2F5m%2B9C1unKX4PNI%2F2kzejh3DmPq2wmqT3dtHRkIMwSLujWbr0%2BwKVVwEzQnyQMhyiUAqVqybWyLeqwtd478fQI%2F3YOSigQ6yAg%2F%2BFZaxQ0FM85%2B4DVsSarSuHiO7f5KBHlsL%2BLuxPJc4JBaeTaNohUhgwrOldnCCFZ%2FXTBlUDhcGZvBjWsFx5v%2BYzJpw8PTSTRX5rysyjDd%2BMPEBjqkAdFa0A8O11Nx2lV%2FX2A3IBAmg3xYEPSWeBHZvdOQTzqQ7VfdgS8a82hoawPNWv7K0AsGygutRk%2FooXBT%2F%2BY7H9Dky%2FAciRukGSBPziC2r6k4iimy7ldvS%2BtYdodDzV%2BhX8pKaYn6W4mrWG3XefUfmky9%2FOdwdg1xb6HMgbtBG5D7LFFo7N3qZ%2BHjOs5V2GIrG4YUOohGznyZcsHeRxPBbXyWPKk3&X-Amz-Signature=6a1a3dbc232068b9a2beabdb511d66be395ca5a587906084f8d8c8084d537157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
