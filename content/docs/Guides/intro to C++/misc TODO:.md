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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=c33f4d4035b8b13362bbf29e3aa2b17f484d4827dde929cad3fd228cd86ae846&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=37bfca7c39d73aec1a1d1b0d0f50647320c4619a72f49cdb1c175a5efde43d92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
