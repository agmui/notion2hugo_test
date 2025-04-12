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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUKQCQ3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFoW3WOEGYcMsiJh6OZToUFK5IYsutJvAe%2F24gzZpOwAAiAHITEsrIY8Z2toqWutDH8SGF9RR8JFz%2FI%2FOwWnYY9HvSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAEe4H3%2FQJVxsBk%2FKtwDLfN1V7%2BFpbWyixGFKwnJFmS5fMyRB4GhTjAUkEOPiG8aIQDwrmmbGTki9z43cJy5MO3I%2F%2BXy8ztJ9dTbY%2F8XyXHP9o0AvFBQxFcsTm9HC%2Fuv0PaQTv38Qvfkn9Vb0tjpQxfU1%2BHqFLmyK9jxPqHLLG5LZ9XC3r0H8oEzDWU3bfJtRIWGvjvPces2r7YFPsLgl6Zh%2FieiEQNup525qIgE%2BvLhqINnKddNK7mbPM%2FH6%2BMIUiZbCy4l6X8TvAzX0HQYlU2sdjQ7NQEUyWv9cGp6Dvb0PxcQV%2F1Y%2FrUg803nNIX38Ul1j8Q7pDlQfoUpDxrXuE7ct6eCk3t45W4%2BGDhumxoV%2BEQP2%2BZMkgfdgq1hX%2Fbbm7z6eixY1%2B9JzWssz1Uopp4Ec5OYVlj3X%2BmCGyYRdBnmaYN%2BSw8Vry9BHrkFPq%2F0im3%2Bii3CP2beKRfhXjtGP085Mp5SDIatiWbvBPtgXq6ZRAAdnLc%2BwUblXp0Dspu4e1XwfoFP1yQr6bIAFHb45GxWaIcAbMcz4zZOtSbcaXpv3itiv8dl1eM5tIAkHobqJQEk43wmCMFeYs5DXJxMFjqYwCLIORCDvKJ2tbKaEk2xVi6znXbzCU2Z85SMsgccgmY9zAKk3HTN9pswh7HrvwY6pgE1qQHtkFhxHjEWZTRr%2B9BgoEsUW%2Fjz8K8LfQvFwgIhKrsV8r3oZbCTuKh%2BRi3pRhGw8g6DW18lWuf3BpGHdPSMso1iujS80Hwcc4xuaKd1rp%2FoC1YZHKWnAWUQQ0SEFsCjM4soOlIst2xtF7SSd0M45S62%2Fgx9IBM1l09ljeNR06YlSBIP5q6pKmyGCUrh2ukNCNHaMEpjOww%2FdJ86EK8qQph%2FTqbO&X-Amz-Signature=181ca6c1db7a0432d6d498dc2026c78aa6a572b7f2a2c1ea117ad43345fbd4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUKQCQ3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFoW3WOEGYcMsiJh6OZToUFK5IYsutJvAe%2F24gzZpOwAAiAHITEsrIY8Z2toqWutDH8SGF9RR8JFz%2FI%2FOwWnYY9HvSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAEe4H3%2FQJVxsBk%2FKtwDLfN1V7%2BFpbWyixGFKwnJFmS5fMyRB4GhTjAUkEOPiG8aIQDwrmmbGTki9z43cJy5MO3I%2F%2BXy8ztJ9dTbY%2F8XyXHP9o0AvFBQxFcsTm9HC%2Fuv0PaQTv38Qvfkn9Vb0tjpQxfU1%2BHqFLmyK9jxPqHLLG5LZ9XC3r0H8oEzDWU3bfJtRIWGvjvPces2r7YFPsLgl6Zh%2FieiEQNup525qIgE%2BvLhqINnKddNK7mbPM%2FH6%2BMIUiZbCy4l6X8TvAzX0HQYlU2sdjQ7NQEUyWv9cGp6Dvb0PxcQV%2F1Y%2FrUg803nNIX38Ul1j8Q7pDlQfoUpDxrXuE7ct6eCk3t45W4%2BGDhumxoV%2BEQP2%2BZMkgfdgq1hX%2Fbbm7z6eixY1%2B9JzWssz1Uopp4Ec5OYVlj3X%2BmCGyYRdBnmaYN%2BSw8Vry9BHrkFPq%2F0im3%2Bii3CP2beKRfhXjtGP085Mp5SDIatiWbvBPtgXq6ZRAAdnLc%2BwUblXp0Dspu4e1XwfoFP1yQr6bIAFHb45GxWaIcAbMcz4zZOtSbcaXpv3itiv8dl1eM5tIAkHobqJQEk43wmCMFeYs5DXJxMFjqYwCLIORCDvKJ2tbKaEk2xVi6znXbzCU2Z85SMsgccgmY9zAKk3HTN9pswh7HrvwY6pgE1qQHtkFhxHjEWZTRr%2B9BgoEsUW%2Fjz8K8LfQvFwgIhKrsV8r3oZbCTuKh%2BRi3pRhGw8g6DW18lWuf3BpGHdPSMso1iujS80Hwcc4xuaKd1rp%2FoC1YZHKWnAWUQQ0SEFsCjM4soOlIst2xtF7SSd0M45S62%2Fgx9IBM1l09ljeNR06YlSBIP5q6pKmyGCUrh2ukNCNHaMEpjOww%2FdJ86EK8qQph%2FTqbO&X-Amz-Signature=a8fa9ec5b475ebf7de235144b4b3b1dc0624f20ebf8129f1ad8f53223be43d19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
