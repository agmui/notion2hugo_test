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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEH6PW6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD7nU3jdgJd282tPrn0yusNtuSe0ekxMjtN8%2BEKJ8zoVQIhAJWd%2F%2Ba7GdTLDRpYZFYtQVsWmtlusVn8%2Fuzw8Go8HUHkKv8DCGIQABoMNjM3NDIzMTgzODA1Igyt67NddijSPr2FOgEq3APFa3NmDEi4ghryx2Wd5I%2B%2FkKzK2fpypBNVLCjgJxV8%2F%2Bb7DSbv%2Bnjva63tJXDnrokVRywR8X%2FXhCm4cw%2BHR1nog%2BmVyhB9FJPsUdpWYPZXEIxf146EjKN6zE6aE9dTFONLXl4TZXyGBl05WSfz6icYnSl4tWmGxmyIiPXf95vUikqetexOFmcvjTXzwhSXhThd0HsyNYTS3DKjjABCJvLvYA0FHjV7JkvSdiHm8SrYMwUDYqmODdlq%2BraRqFu8jXlA7CypmOZQfzy5VNXSI8HrJE0PrAxTyD4MyqAsVUKT98M6atUsVU9UZL4L6DBj0Z%2Furbx7UzpqhShX1Mxf1lFHwM5quIzMC%2F6pJSHTobNUvwT1lwdnyplc73wXwzQlRcoKi5GB3LqNocpdGJ1VV%2F0r5O525%2FwVsQ0nePPw0li3q1YxVQgQHwKg3kSiknuv8Nu7c3XVJlE67kwP8sq15NMkoO9yOAY82Uasxe1twscydzUCKSEeo5dxX4EhiLp1FXAI8NErOSuQma3ndXF%2Bx5mo%2BLc9UGbGmVIFEuoREgMyCgVNyEbTC6AhY%2BVZzPk%2FIWuywFHhM9L0Z1Wi7F%2BC1CQnnHA5zMd8PheX75ZO1TLUQapX98d4PWuB7cb%2B8jCfhPbCBjqkATst7jTp4ZOBXXqEj3E%2FKSEpXctvjaTwYfaYp1eugM2EtZ76Ee1VYalPjTzbKGEJOc5cwBST%2FNorm9tyWzeYHjNj1LzzgAPFQ%2BeuYAglAdE%2FFbSINY2p4SKcRCvybL1lOMYDcE7zIWQJpC2L5qOZ%2FryG%2BfCcagDgIceU%2BqGJDB%2FVRASmIIyVlC8%2FlZAeuF1Evcn%2BBZsMIqQ%2FmBmo9xMqq%2F0VlnCl&X-Amz-Signature=b1f50a2586903cefba67368e491a852ec21208c15b43c10c59fec14a3b51a120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEH6PW6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD7nU3jdgJd282tPrn0yusNtuSe0ekxMjtN8%2BEKJ8zoVQIhAJWd%2F%2Ba7GdTLDRpYZFYtQVsWmtlusVn8%2Fuzw8Go8HUHkKv8DCGIQABoMNjM3NDIzMTgzODA1Igyt67NddijSPr2FOgEq3APFa3NmDEi4ghryx2Wd5I%2B%2FkKzK2fpypBNVLCjgJxV8%2F%2Bb7DSbv%2Bnjva63tJXDnrokVRywR8X%2FXhCm4cw%2BHR1nog%2BmVyhB9FJPsUdpWYPZXEIxf146EjKN6zE6aE9dTFONLXl4TZXyGBl05WSfz6icYnSl4tWmGxmyIiPXf95vUikqetexOFmcvjTXzwhSXhThd0HsyNYTS3DKjjABCJvLvYA0FHjV7JkvSdiHm8SrYMwUDYqmODdlq%2BraRqFu8jXlA7CypmOZQfzy5VNXSI8HrJE0PrAxTyD4MyqAsVUKT98M6atUsVU9UZL4L6DBj0Z%2Furbx7UzpqhShX1Mxf1lFHwM5quIzMC%2F6pJSHTobNUvwT1lwdnyplc73wXwzQlRcoKi5GB3LqNocpdGJ1VV%2F0r5O525%2FwVsQ0nePPw0li3q1YxVQgQHwKg3kSiknuv8Nu7c3XVJlE67kwP8sq15NMkoO9yOAY82Uasxe1twscydzUCKSEeo5dxX4EhiLp1FXAI8NErOSuQma3ndXF%2Bx5mo%2BLc9UGbGmVIFEuoREgMyCgVNyEbTC6AhY%2BVZzPk%2FIWuywFHhM9L0Z1Wi7F%2BC1CQnnHA5zMd8PheX75ZO1TLUQapX98d4PWuB7cb%2B8jCfhPbCBjqkATst7jTp4ZOBXXqEj3E%2FKSEpXctvjaTwYfaYp1eugM2EtZ76Ee1VYalPjTzbKGEJOc5cwBST%2FNorm9tyWzeYHjNj1LzzgAPFQ%2BeuYAglAdE%2FFbSINY2p4SKcRCvybL1lOMYDcE7zIWQJpC2L5qOZ%2FryG%2BfCcagDgIceU%2BqGJDB%2FVRASmIIyVlC8%2FlZAeuF1Evcn%2BBZsMIqQ%2FmBmo9xMqq%2F0VlnCl&X-Amz-Signature=128734c6187dc86737e7a429352bc1747d52aeaee3bd4298b323c08cf63ff0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
