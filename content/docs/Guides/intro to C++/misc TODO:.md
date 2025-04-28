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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DYFVP3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SKKmexkcdix2xhCaY91Z56j9sqAMNEqKtalqr4vgAAIgeVsGqZ6fTFRRm7an3PvzVUC6VIYkqIM0Zv7NlhGuMpQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMOzHUTG7ilo95qtxircA%2BKkqXmGo9ow1LZe3kYY%2B%2FT6W5QkinOy531CJJhUzbfuK87HwjzWAoKPZmWZYDuck3mtrY%2BAQ4jjo3r4AdoWvd4GvVxfwEY6KD%2FIY01iktLfXmKtZvgmckgGGta7anzpLQqc700GxViRiHXXoMmFa37f3EqUy9eJ7cu%2FUuA2vP79CvcJMFnY3gCAFzwiAl%2BMuGm3dzog1XkbYOCDiYX%2BHeSuZ9uX0erRQpuc%2BmJJUh6mfWyO2Vm6cL%2BvLjhVJza%2Bz%2FlMtAw2CQktyT%2FPwG79rjnJ9AzNkU5pfBv4ZYWegV%2BAUI9HR5vE6icEnWvbT7uAUTVfaV0ZTigGmDcSTz%2FaVIF7J3uzxt3a1vQJUSRiedCWTO8phHvJxRqr2tO5rglfqceCS0gKVLEylSttGuHwAy%2BY4jDxrOj411dR7cGFbLi5%2FN4nkxg6EtVDSPZVIfWfRMPWYQvxyBN37INkZGxJAPYi48gmBtGwRS2wg%2BpFxd%2FBhCyC2YMe%2BgCZKuRUPgAsqP8YUjc%2BgrE%2FtukMYohDOFpD3EwknfxeDaLkvkxx6IPjBL1eCpWt7P%2FmflR7hRsqzXzIvLXMPxOaqbQ6QjtjLN5ESuScke6NGsH8JMBTaRcGogI9Kt3Zb7BZ4A%2FQMPOhu8AGOqUBDZ0OG7%2Bn6RYBNhI7aWoMvv0jU2t%2Fx8BdKnVGfiAGmfxTN%2BliY%2BQWpBArbJ9neQkMV%2BXTTch7m5ENjm2bjBPQEQqIQA3JvsAs8rPbWvW9EkDZs4r9C3PwGrMQCJvf%2FSirFqNZsEtwP1sNxQfg5Cl4om%2Fe66b117ekHiEwZv1kovyKvPKG1%2BYnsGA40vDIgyrUWwPSPDYx9%2B87EOw7CDZksuyRz%2FNK&X-Amz-Signature=ba7ca0d6cbc27bc74bbbdf9a29802f87e4b97c06d4f548689b164fb97962890a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DYFVP3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SKKmexkcdix2xhCaY91Z56j9sqAMNEqKtalqr4vgAAIgeVsGqZ6fTFRRm7an3PvzVUC6VIYkqIM0Zv7NlhGuMpQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDMOzHUTG7ilo95qtxircA%2BKkqXmGo9ow1LZe3kYY%2B%2FT6W5QkinOy531CJJhUzbfuK87HwjzWAoKPZmWZYDuck3mtrY%2BAQ4jjo3r4AdoWvd4GvVxfwEY6KD%2FIY01iktLfXmKtZvgmckgGGta7anzpLQqc700GxViRiHXXoMmFa37f3EqUy9eJ7cu%2FUuA2vP79CvcJMFnY3gCAFzwiAl%2BMuGm3dzog1XkbYOCDiYX%2BHeSuZ9uX0erRQpuc%2BmJJUh6mfWyO2Vm6cL%2BvLjhVJza%2Bz%2FlMtAw2CQktyT%2FPwG79rjnJ9AzNkU5pfBv4ZYWegV%2BAUI9HR5vE6icEnWvbT7uAUTVfaV0ZTigGmDcSTz%2FaVIF7J3uzxt3a1vQJUSRiedCWTO8phHvJxRqr2tO5rglfqceCS0gKVLEylSttGuHwAy%2BY4jDxrOj411dR7cGFbLi5%2FN4nkxg6EtVDSPZVIfWfRMPWYQvxyBN37INkZGxJAPYi48gmBtGwRS2wg%2BpFxd%2FBhCyC2YMe%2BgCZKuRUPgAsqP8YUjc%2BgrE%2FtukMYohDOFpD3EwknfxeDaLkvkxx6IPjBL1eCpWt7P%2FmflR7hRsqzXzIvLXMPxOaqbQ6QjtjLN5ESuScke6NGsH8JMBTaRcGogI9Kt3Zb7BZ4A%2FQMPOhu8AGOqUBDZ0OG7%2Bn6RYBNhI7aWoMvv0jU2t%2Fx8BdKnVGfiAGmfxTN%2BliY%2BQWpBArbJ9neQkMV%2BXTTch7m5ENjm2bjBPQEQqIQA3JvsAs8rPbWvW9EkDZs4r9C3PwGrMQCJvf%2FSirFqNZsEtwP1sNxQfg5Cl4om%2Fe66b117ekHiEwZv1kovyKvPKG1%2BYnsGA40vDIgyrUWwPSPDYx9%2B87EOw7CDZksuyRz%2FNK&X-Amz-Signature=ac4b615a6616c01e4ad55691f7a9b0811f2c6cbd3b9f95e9322429b7f1640321&X-Amz-SignedHeaders=host&x-id=GetObject)

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
