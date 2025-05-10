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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YFI56M%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFO8o4miqlES2lTjH%2FyjHjI56pR8t%2FHtptkkenYhwogEAiAsvmSkpKQTGJ2rD4oIb3fAfdernI4Azot%2Be1ixoQ3kLyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIb4xKXYe2aFpuvz7KtwDatunLH6drISDVlSVzR2cIgGZQfiPr9pvPVS6FGG%2Bu9NsmCOHNpcObKFZfFxhtwY6X0SKfDb8Uz6R8sbqCUO2irtqxYvaM8H3Eih44Saj6xBByFeEdqzdB2oG8GU99JOboHslXYU0aAAEVym3TQRue0ZZ6MkJ36tXafKFM5MYXoVaMNkSA8wBM1ZDyWo66mRikIK2GMMdQL0I9yEjZeXibZ2F5jOh%2BtiK1g6Q%2FrXY%2F2hSRNSX%2BGJf3tYCPON5lNlraOgDo4uNPVSRuSXfvWcLTlVz4OQzUB2dvz3XTUa5pFSDdwNSc32%2FoN%2FWorRLBXc8e6J5MY4dCORbmV9x2Om%2FtGv9Yp3DYoaUDKZTuJYExg1FfpCj2oEmjrI%2FQ526XmdlTtI9qXxKFu%2BYR3EExoGx6qh2sS143BcNC8dIZ6iGBhHvDtiQKfdj8BJsUA8CimWpPoI4BXWsxt3ge99eQ4C6fGyjCkBWM%2FwjyP8oKjMQDCzMFoGkCIGVAusAOthzJ4mgkmoikEEgjk02HpQFOdz%2B%2FRu6HjDZZlXHme1uJl5wn1%2FAQUza4o8bQ6Oz1Eev5nOY%2B1B1T0aMSByK%2F58j0Ef1zfPEluxjKLscy9jV4vIGxrlBapEImkFVYGnwWGswjLb6wAY6pgGcrmGXWmsmNuu91rtdVCWjQzkxiXpCqw%2B%2BOqVm1MH4lgtEvKZTQ%2FLwIo1Ejsxh7fqAPZ4UGBcVLhwqR%2FCqTH%2B6qXgcrlaFFL7%2BjUTHRbTqyg6iijHtcY8sKQtkBvMPAI8TctDplt9nc%2Bfb1ypuzZCaMJ7iiHx3HKF5ZbKG7JDGq%2BChN9ECQH76hvRNLwpKkSuKjwGMBDBMznF%2BOWcMDl%2B%2Ba5zGYhjC&X-Amz-Signature=31b8d47f0e42907ea7e7d0c41175e24f3d5175de5f4277ca04bd4f776c20ef47&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YFI56M%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFO8o4miqlES2lTjH%2FyjHjI56pR8t%2FHtptkkenYhwogEAiAsvmSkpKQTGJ2rD4oIb3fAfdernI4Azot%2Be1ixoQ3kLyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIb4xKXYe2aFpuvz7KtwDatunLH6drISDVlSVzR2cIgGZQfiPr9pvPVS6FGG%2Bu9NsmCOHNpcObKFZfFxhtwY6X0SKfDb8Uz6R8sbqCUO2irtqxYvaM8H3Eih44Saj6xBByFeEdqzdB2oG8GU99JOboHslXYU0aAAEVym3TQRue0ZZ6MkJ36tXafKFM5MYXoVaMNkSA8wBM1ZDyWo66mRikIK2GMMdQL0I9yEjZeXibZ2F5jOh%2BtiK1g6Q%2FrXY%2F2hSRNSX%2BGJf3tYCPON5lNlraOgDo4uNPVSRuSXfvWcLTlVz4OQzUB2dvz3XTUa5pFSDdwNSc32%2FoN%2FWorRLBXc8e6J5MY4dCORbmV9x2Om%2FtGv9Yp3DYoaUDKZTuJYExg1FfpCj2oEmjrI%2FQ526XmdlTtI9qXxKFu%2BYR3EExoGx6qh2sS143BcNC8dIZ6iGBhHvDtiQKfdj8BJsUA8CimWpPoI4BXWsxt3ge99eQ4C6fGyjCkBWM%2FwjyP8oKjMQDCzMFoGkCIGVAusAOthzJ4mgkmoikEEgjk02HpQFOdz%2B%2FRu6HjDZZlXHme1uJl5wn1%2FAQUza4o8bQ6Oz1Eev5nOY%2B1B1T0aMSByK%2F58j0Ef1zfPEluxjKLscy9jV4vIGxrlBapEImkFVYGnwWGswjLb6wAY6pgGcrmGXWmsmNuu91rtdVCWjQzkxiXpCqw%2B%2BOqVm1MH4lgtEvKZTQ%2FLwIo1Ejsxh7fqAPZ4UGBcVLhwqR%2FCqTH%2B6qXgcrlaFFL7%2BjUTHRbTqyg6iijHtcY8sKQtkBvMPAI8TctDplt9nc%2Bfb1ypuzZCaMJ7iiHx3HKF5ZbKG7JDGq%2BChN9ECQH76hvRNLwpKkSuKjwGMBDBMznF%2BOWcMDl%2B%2Ba5zGYhjC&X-Amz-Signature=a530db84ea2145c52a5009284a33d89c95085824450a0a0a9417ac3c343fba2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
