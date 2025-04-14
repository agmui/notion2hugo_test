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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPGX5STM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl9z6MK%2BBy1j840BEigqnnlKPZuH4Tm4q30lkts1X%2BZAiALTxT8MPvbmHn2DcYW4m9VA%2FGvbD6fgSRStKhz2grwhSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BjVvWKV9PXXPTEOKtwD4590I9iJpNRU1ssT3AZaMBUyZsmx6ykHd%2BRjnnPOvcruvrs%2BGiuruSP%2FB9WhbGjmjIOpkfYVELCWLocUOf%2BhquRFftt2FVwY9aSepaTwqk1VA4%2Faqt%2B7ce0Du7oXH03e8onklYvftZFiZYZcvmcLgoH8GkgKfUV7Sr6k3hmXcy0dnqz9ggX7g26wTUomfyFuqD5aD1ZnOdXxHYnY2BUrW11ZOCvMjVQtwjwZOqWEWMFql5ynZM6fmtP58XyU8KIt3csQXphE0AsW3HlopDPvwe9%2FUTuhX6Jq5UkPrJdZ6h77c9fqFFU8ZqVEF%2FkqvpSPuqTMChF1q9KNfeSyV5ylJTdJAr5dXIzGf0ESgQv%2FBEeuXJi2YQ4re8ybDfLSmN35turvRuqHb8B%2Bu6AbRxM70IZclSTEmYTPCRbn47sjDfCYM5YkOoDuiLlEdmOQDAc70AjOOeubSuq%2F74PofJRASBf2Fux3XRf6tVahCFAMhYVYjmGQwI2%2BvOUOe0mNMx5mhyOV5PNkWvuMBNHQU1WH2%2F423EPwzGarWHrBWYheb7i7OqDqkoeJ1grYhsd0gP6wOeW7o4ziD%2F3yyA3zTAdOncZxd%2Bk5PYI8qvq5QYohA0lWMPA7RGwvLhR4m5MwsLnxvwY6pgEYYEXiLOzjdrBzEsqJaXfxbFFdXuhXfvLPxBp4qiwHatBt2XtLforJfuKcHAR5emvh7TU%2FHMXKyQNYNYWsrQiQxOrtGeoq%2FZAgSwtVb4Qyv0nqs3yWBLGuzfskbKMtJUyLujEST%2FO0Lsew0rxDlXMq65mEMvWHO3H0YthcnqmijOaSO6a%2BWtwL2u%2Bh%2FUntYqyZ3PwrqXhBYLa0Xw4wW08s76rN3Pmx&X-Amz-Signature=78e0faa21f1ef8ecb3af33b9bbc6b48ea02ae99b4626fdd461a655dd5cc343c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPGX5STM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl9z6MK%2BBy1j840BEigqnnlKPZuH4Tm4q30lkts1X%2BZAiALTxT8MPvbmHn2DcYW4m9VA%2FGvbD6fgSRStKhz2grwhSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BjVvWKV9PXXPTEOKtwD4590I9iJpNRU1ssT3AZaMBUyZsmx6ykHd%2BRjnnPOvcruvrs%2BGiuruSP%2FB9WhbGjmjIOpkfYVELCWLocUOf%2BhquRFftt2FVwY9aSepaTwqk1VA4%2Faqt%2B7ce0Du7oXH03e8onklYvftZFiZYZcvmcLgoH8GkgKfUV7Sr6k3hmXcy0dnqz9ggX7g26wTUomfyFuqD5aD1ZnOdXxHYnY2BUrW11ZOCvMjVQtwjwZOqWEWMFql5ynZM6fmtP58XyU8KIt3csQXphE0AsW3HlopDPvwe9%2FUTuhX6Jq5UkPrJdZ6h77c9fqFFU8ZqVEF%2FkqvpSPuqTMChF1q9KNfeSyV5ylJTdJAr5dXIzGf0ESgQv%2FBEeuXJi2YQ4re8ybDfLSmN35turvRuqHb8B%2Bu6AbRxM70IZclSTEmYTPCRbn47sjDfCYM5YkOoDuiLlEdmOQDAc70AjOOeubSuq%2F74PofJRASBf2Fux3XRf6tVahCFAMhYVYjmGQwI2%2BvOUOe0mNMx5mhyOV5PNkWvuMBNHQU1WH2%2F423EPwzGarWHrBWYheb7i7OqDqkoeJ1grYhsd0gP6wOeW7o4ziD%2F3yyA3zTAdOncZxd%2Bk5PYI8qvq5QYohA0lWMPA7RGwvLhR4m5MwsLnxvwY6pgEYYEXiLOzjdrBzEsqJaXfxbFFdXuhXfvLPxBp4qiwHatBt2XtLforJfuKcHAR5emvh7TU%2FHMXKyQNYNYWsrQiQxOrtGeoq%2FZAgSwtVb4Qyv0nqs3yWBLGuzfskbKMtJUyLujEST%2FO0Lsew0rxDlXMq65mEMvWHO3H0YthcnqmijOaSO6a%2BWtwL2u%2Bh%2FUntYqyZ3PwrqXhBYLa0Xw4wW08s76rN3Pmx&X-Amz-Signature=b9ca1d9f0a6e3870fc03d1ae4b35dbae9a52847944143d51819e2d763f632e32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
