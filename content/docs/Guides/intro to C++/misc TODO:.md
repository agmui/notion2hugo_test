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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCD3WQ7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA42JrQMXVAs80MfqgG0oO5rxQ2FEtdvW0L01U1ntexYAiA1hEXV%2BViA7BD5OpHP8sLExg5VYnp77vz3kjN0g4yPvCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMmnZ1OjI7V1Yyy0GpKtwD1MOCeg1vUaXVqDdPdPe1DWwcuY3kaHHLIYqUl%2BHd%2Fx%2FPQ%2BLevyQ4yI9cgeEGed%2BvxNgbJDndFoZSnFN2d%2Bb%2BSgusHqNn11Tj%2B9jtYBwLPMW1uLpiS9nC87fvOR9wmzS4K%2BG27ahtb3D2%2FNaUnDJBZ%2FCByK7nsi7axqAOpw8W5YTBn72%2FlUvZxSGFTGAqV7meB9MOWcWdOSrizRqRde93bEJSXDQuIHXHSADw03yM7N8N4vIIsNqBcDk3EaR%2FxQfMTzS29LPeOWeyvffDV%2By8r9hvT6wPbvzF8l%2FvmHceFdeJIWQ1rk0Ed414OoIha6nFDTtOAuYNHkQE83sojp5np1mJYtqOh5dQ960xqtLYuSC9LSs8dX9cXJri5gZv8YoTLnzoNsABdIW0hZHx0gNHcEt5xQuwnVF0cfqbXBYBcNHzbl%2BoQXcbNV6kPB%2BQohtGqM4nAYagKe%2F4UAWU%2B%2B8QaDqDJ1pIG%2FOadjQXO7FKVrxQWrApfxO5fl2kargmX%2FKMpHD%2B3UY6vbXZ%2ByMSpliBrM%2F9PVcRs2H1Luu4j3xcUEaaIIkcu4T6x9L7M9TcKFQpYk7ZRUpCwXLHSjbDMZ9azVsRzcgjEDg1I7DJT4C8E58SBFveRIXgkaT%2B%2F0cwmt%2FFvQY6pgGGJeB%2B%2FLfrL0xbgCUxALBabp9UfAmGi2jMf8baC0ufXh884gQ9OcjqYxXOO4ZIOUmSSxWIiEhLHXqvoHT5nNOhGJKCEyp0smLILGQfnpr61RVnZo0qcCi%2FYoCAuvdrBlmTjH%2Boo4F4MUvE9cbNWXCS2UB1%2B4JTm4YIi%2F%2FfKZHHQPYShpgNGxeQn3OpdpE%2BxIoktPjLcz5rDKpW8ZwMMjApzjNjC8wX&X-Amz-Signature=729265ced10523f657235b2410b7b51e41a1d154e2dc1f0d6cfb73d3b0d33ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCD3WQ7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA42JrQMXVAs80MfqgG0oO5rxQ2FEtdvW0L01U1ntexYAiA1hEXV%2BViA7BD5OpHP8sLExg5VYnp77vz3kjN0g4yPvCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMmnZ1OjI7V1Yyy0GpKtwD1MOCeg1vUaXVqDdPdPe1DWwcuY3kaHHLIYqUl%2BHd%2Fx%2FPQ%2BLevyQ4yI9cgeEGed%2BvxNgbJDndFoZSnFN2d%2Bb%2BSgusHqNn11Tj%2B9jtYBwLPMW1uLpiS9nC87fvOR9wmzS4K%2BG27ahtb3D2%2FNaUnDJBZ%2FCByK7nsi7axqAOpw8W5YTBn72%2FlUvZxSGFTGAqV7meB9MOWcWdOSrizRqRde93bEJSXDQuIHXHSADw03yM7N8N4vIIsNqBcDk3EaR%2FxQfMTzS29LPeOWeyvffDV%2By8r9hvT6wPbvzF8l%2FvmHceFdeJIWQ1rk0Ed414OoIha6nFDTtOAuYNHkQE83sojp5np1mJYtqOh5dQ960xqtLYuSC9LSs8dX9cXJri5gZv8YoTLnzoNsABdIW0hZHx0gNHcEt5xQuwnVF0cfqbXBYBcNHzbl%2BoQXcbNV6kPB%2BQohtGqM4nAYagKe%2F4UAWU%2B%2B8QaDqDJ1pIG%2FOadjQXO7FKVrxQWrApfxO5fl2kargmX%2FKMpHD%2B3UY6vbXZ%2ByMSpliBrM%2F9PVcRs2H1Luu4j3xcUEaaIIkcu4T6x9L7M9TcKFQpYk7ZRUpCwXLHSjbDMZ9azVsRzcgjEDg1I7DJT4C8E58SBFveRIXgkaT%2B%2F0cwmt%2FFvQY6pgGGJeB%2B%2FLfrL0xbgCUxALBabp9UfAmGi2jMf8baC0ufXh884gQ9OcjqYxXOO4ZIOUmSSxWIiEhLHXqvoHT5nNOhGJKCEyp0smLILGQfnpr61RVnZo0qcCi%2FYoCAuvdrBlmTjH%2Boo4F4MUvE9cbNWXCS2UB1%2B4JTm4YIi%2F%2FfKZHHQPYShpgNGxeQn3OpdpE%2BxIoktPjLcz5rDKpW8ZwMMjApzjNjC8wX&X-Amz-Signature=d36c0763a7e0923ac2b326accd085e08a7835ab0a6823315cc120a4c01e0e974&X-Amz-SignedHeaders=host&x-id=GetObject)

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
