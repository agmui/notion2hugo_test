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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM2V22LD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCxI7UnuhJvCwJ5T9ZADAfkQJKGa6I%2BN8T5mKm7MAo4%2FQIgA2fRRoerTA3Bq7jOyJ6%2FfzoarRtC52wZwgub7Gn6UMYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKble%2BYU%2BB%2F7b5Gk6yrcAwzYIVADh%2FRu6%2BHvBQZ9YSxPGPZpsL5P%2FYdIzBGOm3r935%2BzZsonafPp%2Flfri4%2FM2I5frCh%2BYk7TcU154KfGZr1Nna5%2F5c%2BBvTKCJ38BQiIz0YWlGjLBSk3iImNuewjYq9vrlwj05G%2F1sYKbs0aGSogxyCv8miPyPDX%2BdYU5AKQxn9Zc0SS2CjBn4kvLhDOxO963Ps6e4kSHVSF3dwgDGhK%2BZN8whihtVTZ5SguqcIQc%2F26ESfwnMpekATg76qyo8CV88FjX88OWGz4q95w4sxdPnfK4PEARNIMQkmL8D50T0SVw4HmKt7x2TlnHtKqPd01xgRQ4Zw6%2FMWSjxE3Q8lk2AveY2Rt1DfwlgtjjAkconZKQuNnZmZ%2B6LWUCVAsXvafaxIop78cf%2F8OPbX7DkwUYorjWutIWhoS1A8Eq3RB2Ufed2PjOO5wWvQTzzYN10cuzHeVjTtRKoIskbMZPvpSjTjwxl%2BwicfknAJpbE5nZHnH2dGBK56TF61VYTkG0NgplzIG3bRpD6bg9m1cciLjEkWMZbZSSmMMGuboFxsusPA9412k65UWKbrpW%2BDvaSKQNp7xPI%2BgahPc5NJ%2FivBjzkkF6thUfVXkUovDM2dSNnAb0c66uusVG3fktMJ2RxL0GOqUBg%2Fu9TsA7%2BEDP6MIbOIUAlpSiYQOdfnvPHidUphGgr5Fmi%2FZZ2ak%2FEfdiWuXo7u3KII0GM5tF6fsHd2IYSoHqdKgtZ3QEB3x4H8uUkCjH7PJsslXgb7%2Fm6TyF2RhD6MUCHtmPO3ziCCNGxXlUCOKDD5aQ7BrRSsF94fMDjSk3A%2F0rKNQrCMooBEPYVYxX4v6iWthKlq64BWEXygaGPCByaGsyZ8Zf&X-Amz-Signature=7a9753a1b14305d51d90782e58f7ecf440d31b984494c66b49f47a0bba8b3c84&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM2V22LD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCxI7UnuhJvCwJ5T9ZADAfkQJKGa6I%2BN8T5mKm7MAo4%2FQIgA2fRRoerTA3Bq7jOyJ6%2FfzoarRtC52wZwgub7Gn6UMYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKble%2BYU%2BB%2F7b5Gk6yrcAwzYIVADh%2FRu6%2BHvBQZ9YSxPGPZpsL5P%2FYdIzBGOm3r935%2BzZsonafPp%2Flfri4%2FM2I5frCh%2BYk7TcU154KfGZr1Nna5%2F5c%2BBvTKCJ38BQiIz0YWlGjLBSk3iImNuewjYq9vrlwj05G%2F1sYKbs0aGSogxyCv8miPyPDX%2BdYU5AKQxn9Zc0SS2CjBn4kvLhDOxO963Ps6e4kSHVSF3dwgDGhK%2BZN8whihtVTZ5SguqcIQc%2F26ESfwnMpekATg76qyo8CV88FjX88OWGz4q95w4sxdPnfK4PEARNIMQkmL8D50T0SVw4HmKt7x2TlnHtKqPd01xgRQ4Zw6%2FMWSjxE3Q8lk2AveY2Rt1DfwlgtjjAkconZKQuNnZmZ%2B6LWUCVAsXvafaxIop78cf%2F8OPbX7DkwUYorjWutIWhoS1A8Eq3RB2Ufed2PjOO5wWvQTzzYN10cuzHeVjTtRKoIskbMZPvpSjTjwxl%2BwicfknAJpbE5nZHnH2dGBK56TF61VYTkG0NgplzIG3bRpD6bg9m1cciLjEkWMZbZSSmMMGuboFxsusPA9412k65UWKbrpW%2BDvaSKQNp7xPI%2BgahPc5NJ%2FivBjzkkF6thUfVXkUovDM2dSNnAb0c66uusVG3fktMJ2RxL0GOqUBg%2Fu9TsA7%2BEDP6MIbOIUAlpSiYQOdfnvPHidUphGgr5Fmi%2FZZ2ak%2FEfdiWuXo7u3KII0GM5tF6fsHd2IYSoHqdKgtZ3QEB3x4H8uUkCjH7PJsslXgb7%2Fm6TyF2RhD6MUCHtmPO3ziCCNGxXlUCOKDD5aQ7BrRSsF94fMDjSk3A%2F0rKNQrCMooBEPYVYxX4v6iWthKlq64BWEXygaGPCByaGsyZ8Zf&X-Amz-Signature=4ad4b084cfff4b9b02b802de8853d2a3da4733a99fc5faa0625545e24354f3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
