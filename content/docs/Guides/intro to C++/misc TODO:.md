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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOIENBCR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Fod3KIzk89L9gAd4Vn%2F4HDXRQyhS2ivOZgHVcWutDCAiEAutTFMvqBavyyifkdhb%2BxxmqgOg6eHdix9s%2BlU564bmwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGkpP6KNpONzFov2nCrcA5qSpg6DtTUDKntkzjkHO8JDJdiz7qTXDuX%2F6h%2FusyQEFQydKLhp%2F3etVqzLGe4N%2BmrbXZzBRvuRn60qxm85O2M%2BacpiA%2FMBL4gb55%2BLY3Dm8%2F5rkKWIkxkmWhTb1wM3nBsfZzmct6dwpZCpzqHRadGoZLQiqDPXCgfJVJHoDtAKxOoIB9YzAR3Pz4pzwrGMna%2BhJu7u798zREYajGlgyBePYFwDzTBKemqutaR%2B3lm6r19CdEe4PdZ3vFVlvyGq01xMDZHkBdj0tNDxT%2BH0MI%2BuQU4zri6DokHWwBzKF70FXf1UqWGVyhlqFjElsKQX62HzSkQGbBtHAJONoj2yt67YA1Ps6q1K74mU9vORtby7jIdHrtNNX9yEwqLDq5fQbhnldRyPqvqa5xS8wlijUDUy2ziO7yMnXIV%2B4rY2diSTQD6kiL6de2%2BxWv7%2BB0yAc9npxuxLbDSCXA82PJIwmlt9QItMD6%2FO3Lwm1%2BwND99CKg4e%2B0SbrbTn33ye5q46wcIpihvxek13FirOWVXnRGBmXDU6iAGFUO4XkOFeD9CDlkJ6m5nblM7nUkVi814tzFJXrsjcCucMgka5M8wNViwtxQGCJGLEtbQDT49AfUm1qPpV%2BhvJpauCTavUMPPh48MGOqUBtSQWsoy85biXKx2omcMfdizGqV2oDyONEkEhheK%2BaorVNl8uOHr39VKjXHaJe1e%2Fvyj1RmJkPG3azlJLkINrGCl2zT3wMz7ZMZk7jjK%2FrkHLWQbATXJonUc5S0b7fyTQ8GrhceV%2F1F7EPvOUr5Rh3iGXcLA%2FGl688KfKI%2F25t7pSSOeEAK2kDVjevA5Jv%2FlOpf6FFB7VDLBKKnEkZ4BnR49gUC2k&X-Amz-Signature=427b2eb3a4b416f1e10958ab765d84ca51746232e0b190ec53fa24673c7ede2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOIENBCR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Fod3KIzk89L9gAd4Vn%2F4HDXRQyhS2ivOZgHVcWutDCAiEAutTFMvqBavyyifkdhb%2BxxmqgOg6eHdix9s%2BlU564bmwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGkpP6KNpONzFov2nCrcA5qSpg6DtTUDKntkzjkHO8JDJdiz7qTXDuX%2F6h%2FusyQEFQydKLhp%2F3etVqzLGe4N%2BmrbXZzBRvuRn60qxm85O2M%2BacpiA%2FMBL4gb55%2BLY3Dm8%2F5rkKWIkxkmWhTb1wM3nBsfZzmct6dwpZCpzqHRadGoZLQiqDPXCgfJVJHoDtAKxOoIB9YzAR3Pz4pzwrGMna%2BhJu7u798zREYajGlgyBePYFwDzTBKemqutaR%2B3lm6r19CdEe4PdZ3vFVlvyGq01xMDZHkBdj0tNDxT%2BH0MI%2BuQU4zri6DokHWwBzKF70FXf1UqWGVyhlqFjElsKQX62HzSkQGbBtHAJONoj2yt67YA1Ps6q1K74mU9vORtby7jIdHrtNNX9yEwqLDq5fQbhnldRyPqvqa5xS8wlijUDUy2ziO7yMnXIV%2B4rY2diSTQD6kiL6de2%2BxWv7%2BB0yAc9npxuxLbDSCXA82PJIwmlt9QItMD6%2FO3Lwm1%2BwND99CKg4e%2B0SbrbTn33ye5q46wcIpihvxek13FirOWVXnRGBmXDU6iAGFUO4XkOFeD9CDlkJ6m5nblM7nUkVi814tzFJXrsjcCucMgka5M8wNViwtxQGCJGLEtbQDT49AfUm1qPpV%2BhvJpauCTavUMPPh48MGOqUBtSQWsoy85biXKx2omcMfdizGqV2oDyONEkEhheK%2BaorVNl8uOHr39VKjXHaJe1e%2Fvyj1RmJkPG3azlJLkINrGCl2zT3wMz7ZMZk7jjK%2FrkHLWQbATXJonUc5S0b7fyTQ8GrhceV%2F1F7EPvOUr5Rh3iGXcLA%2FGl688KfKI%2F25t7pSSOeEAK2kDVjevA5Jv%2FlOpf6FFB7VDLBKKnEkZ4BnR49gUC2k&X-Amz-Signature=62c6f24d1a4a4bf30f1beffe59a9bddab998d1c5ef265b8f6e51474ceeb0fae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
