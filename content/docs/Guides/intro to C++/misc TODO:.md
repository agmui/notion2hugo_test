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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWOTGX3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlCpUJwZ4b%2B23iYiSP7V3XwlPr%2FWAL0GIFnIIPumUYsAiAeWwZkhIPdptXvSnXK%2Bc6V764gWaSzG9vkzDl1fbP%2FISr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBp4iFxSQ%2FzJ84%2FWoKtwDUj6Zmpm6fIOan0lWlh2Jng84mbKPy%2FqP%2Ff13LIasYHdqd86TU73i69bgvF1P2tB74NWrSBHHjeB9Bqmsh3UVy8z2Vzfurkj70P1hM7ZD%2FeqeV4jKSLN8J2f4PCE61xmm028Xnqw5fjmvJtIauThHmwLR4ObgHsZ7HKkaXSpdCpiBAzPqGv0xVd%2BaLRDjsAouplaBW8vEkbP56zY7QGW5VC292pfCZeOXRA1R8VkchInLVAXve9ML3mpBxIFawTybnAHn%2FN9BTJ6XuLo5wUWOh37wtA4yd7y0xrlPSwS%2BOT8UVOuS9iPpeNA8KIM4yzvrxPb%2FcyrTPoyhWf3AY%2BOwNktIGyP%2BFoqdR5x%2B9mV3NrNMev0k2DRth02u17iYcRFtofjfeJjdrl8CqDgPacOQsXk0SLYqvgZR4MGPI%2FCz0G7i1011iiHicJdNCDpRIiKGYnfM%2BlxMcqaHEr2D%2FUUUpAzkWxefDuI1omLlQvQwSdH5f8JnLRunG%2F10f9Co%2BFVNYesplv7%2F4g%2B5RbFs5NRaXms%2F6VcU6i3SBqhHtGKLISdh4Xv7GouPLISH4GpUtaMuj7XhlvZ8FVWHH2CO%2FoDkq97QF%2BJwxoTPURqErNAnPZE5xwyUedXcQNWzWFIwmZPfvgY6pgFsI0T%2B1sMhu9gRAFPBLgEuY9dxPSaX2QdahXn%2FkPgW2RbkCYnHxiO7kLl43YJlzEPIFG1hglRCk7LLi0JE1PqlGRFo4eX%2Bf%2BLnxwOw%2FoZkkniGebg7buKaHp%2B6S%2BSpXzlE5korUUMhyEyOXMcv3bH7VELV77Ez5aNAdVHEq9aCAbbutXMGDWKyGrpoZ%2F4yWtkQPeUXY9dcLKmfGA%2Bl8SXw%2BXsTh%2FAp&X-Amz-Signature=3b875ea3c3f284c011a019ae0c181144a1bed4d58e5dd056cfb6cc2e047cb80a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWOTGX3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlCpUJwZ4b%2B23iYiSP7V3XwlPr%2FWAL0GIFnIIPumUYsAiAeWwZkhIPdptXvSnXK%2Bc6V764gWaSzG9vkzDl1fbP%2FISr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBp4iFxSQ%2FzJ84%2FWoKtwDUj6Zmpm6fIOan0lWlh2Jng84mbKPy%2FqP%2Ff13LIasYHdqd86TU73i69bgvF1P2tB74NWrSBHHjeB9Bqmsh3UVy8z2Vzfurkj70P1hM7ZD%2FeqeV4jKSLN8J2f4PCE61xmm028Xnqw5fjmvJtIauThHmwLR4ObgHsZ7HKkaXSpdCpiBAzPqGv0xVd%2BaLRDjsAouplaBW8vEkbP56zY7QGW5VC292pfCZeOXRA1R8VkchInLVAXve9ML3mpBxIFawTybnAHn%2FN9BTJ6XuLo5wUWOh37wtA4yd7y0xrlPSwS%2BOT8UVOuS9iPpeNA8KIM4yzvrxPb%2FcyrTPoyhWf3AY%2BOwNktIGyP%2BFoqdR5x%2B9mV3NrNMev0k2DRth02u17iYcRFtofjfeJjdrl8CqDgPacOQsXk0SLYqvgZR4MGPI%2FCz0G7i1011iiHicJdNCDpRIiKGYnfM%2BlxMcqaHEr2D%2FUUUpAzkWxefDuI1omLlQvQwSdH5f8JnLRunG%2F10f9Co%2BFVNYesplv7%2F4g%2B5RbFs5NRaXms%2F6VcU6i3SBqhHtGKLISdh4Xv7GouPLISH4GpUtaMuj7XhlvZ8FVWHH2CO%2FoDkq97QF%2BJwxoTPURqErNAnPZE5xwyUedXcQNWzWFIwmZPfvgY6pgFsI0T%2B1sMhu9gRAFPBLgEuY9dxPSaX2QdahXn%2FkPgW2RbkCYnHxiO7kLl43YJlzEPIFG1hglRCk7LLi0JE1PqlGRFo4eX%2Bf%2BLnxwOw%2FoZkkniGebg7buKaHp%2B6S%2BSpXzlE5korUUMhyEyOXMcv3bH7VELV77Ez5aNAdVHEq9aCAbbutXMGDWKyGrpoZ%2F4yWtkQPeUXY9dcLKmfGA%2Bl8SXw%2BXsTh%2FAp&X-Amz-Signature=604fc40122354b8085c620bca835d58a45d236bf42ded9dbcec0458b0ce37bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
