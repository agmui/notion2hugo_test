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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466647Y3ZCJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBqWNYMZmJbNshd6hnl8LbPcKrmlHqKBobbYEww0QfA%2FAiB%2BYLJ11T2VeJ4SCh3aU8hlvzpSmonn99g08vnQoYB54iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpV%2B8pTiOUrnb6nbKtwDyYCKxQT1r0KaN64NSaGfa9cUm6OgRkkwpXnLZJv86c7AF%2BsFkwykAyIESmShtVqlpkSIA8NYWYlMYu4h9aiV%2BH8M2wVeNmWRLeKxDxTd8W4nYzTN5e2GHHTl5cxcdLU3UaZh9ocZcjiQjDjNTOVa8Kwn9lSSM%2Br6514P2F0f83Qz88ZReh0j3a0Wl8CdsU7bJXAvKy9zbbsPKcivUhcDBLOELCJutPF9R%2B8Ugju9okuNvndOGIUk3Zz0LmMRN9a%2BWh0eh5MQucRsyM2d9yV8XS9%2BfXHxES6hXlS6a7L6AtY2FUt1HbpyBClarCCUP0DGNIWROTB16UJ76oT%2BIdExsIf5y8VPqiOIcNyR4EbxYB2WSmUC5017XrO6B2S4gxg03bwA6zH3EwoMFM6R%2Be9ZJ%2FR4YiqzTThhvMSrNTzp6JT5ILphOc1SWGVIKQVJQZVTSRZTlYI45BdIi8feOCYFceCx%2FG%2FT75N5UC9ckONEFrM8Vtz9pcVGRL3DoN%2FiwT%2FOMiKXBwKFDCfJ%2FAGxxQVqTlGuLaVDiVNLvzfSeBOyiGQ8Evx4kxyJfM32CO4QZnigdfqnDQpvKwd5ajZ52jMdiU5ul2qfW5DR5EWEsmSKZR%2BKL8RoaSOasYJil2cw18TbxAY6pgHryuZaVERi7yIc85azhZ2FyRvfrkEfnPC%2F3Q6oUMte4KKi91dqsH1ZcNk3fEeulXPFyfJpCY51qLcMm%2BP%2BOv5qfkPfWX79m%2FbB%2BVLk5QaMviSjblnqNqX54KwPlEaUg2o341p%2BxpJ5u9ZG4GTUKWd2pILsgm2HYrxyLquhnXKuF6LTHmlq24M653tDFkokmz6Ega8dFoTW61ogUgOY2ZP7gzxMJpYW&X-Amz-Signature=11cdc109480aff7043b8e35b367593b7a9e2c967bd6a27e1ad1f4f0a5fd6e594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466647Y3ZCJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBqWNYMZmJbNshd6hnl8LbPcKrmlHqKBobbYEww0QfA%2FAiB%2BYLJ11T2VeJ4SCh3aU8hlvzpSmonn99g08vnQoYB54iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpV%2B8pTiOUrnb6nbKtwDyYCKxQT1r0KaN64NSaGfa9cUm6OgRkkwpXnLZJv86c7AF%2BsFkwykAyIESmShtVqlpkSIA8NYWYlMYu4h9aiV%2BH8M2wVeNmWRLeKxDxTd8W4nYzTN5e2GHHTl5cxcdLU3UaZh9ocZcjiQjDjNTOVa8Kwn9lSSM%2Br6514P2F0f83Qz88ZReh0j3a0Wl8CdsU7bJXAvKy9zbbsPKcivUhcDBLOELCJutPF9R%2B8Ugju9okuNvndOGIUk3Zz0LmMRN9a%2BWh0eh5MQucRsyM2d9yV8XS9%2BfXHxES6hXlS6a7L6AtY2FUt1HbpyBClarCCUP0DGNIWROTB16UJ76oT%2BIdExsIf5y8VPqiOIcNyR4EbxYB2WSmUC5017XrO6B2S4gxg03bwA6zH3EwoMFM6R%2Be9ZJ%2FR4YiqzTThhvMSrNTzp6JT5ILphOc1SWGVIKQVJQZVTSRZTlYI45BdIi8feOCYFceCx%2FG%2FT75N5UC9ckONEFrM8Vtz9pcVGRL3DoN%2FiwT%2FOMiKXBwKFDCfJ%2FAGxxQVqTlGuLaVDiVNLvzfSeBOyiGQ8Evx4kxyJfM32CO4QZnigdfqnDQpvKwd5ajZ52jMdiU5ul2qfW5DR5EWEsmSKZR%2BKL8RoaSOasYJil2cw18TbxAY6pgHryuZaVERi7yIc85azhZ2FyRvfrkEfnPC%2F3Q6oUMte4KKi91dqsH1ZcNk3fEeulXPFyfJpCY51qLcMm%2BP%2BOv5qfkPfWX79m%2FbB%2BVLk5QaMviSjblnqNqX54KwPlEaUg2o341p%2BxpJ5u9ZG4GTUKWd2pILsgm2HYrxyLquhnXKuF6LTHmlq24M653tDFkokmz6Ega8dFoTW61ogUgOY2ZP7gzxMJpYW&X-Amz-Signature=44946b7b5d92a99b8261ca882b4f3ad1edb8c31aa6a71e24e7171c5ae25c1654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
