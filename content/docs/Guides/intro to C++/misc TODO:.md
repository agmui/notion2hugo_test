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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JH2HCX7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBT%2BmDGLIbwDni05R5EOsQXCj47QFTtDPuhIgXaIQfaGAiEA11tiwfChnA%2BOkXVGwlDfDqxbB8434K9Pe5h%2BKWG3BpAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEVt4eZ6z780cn%2BncyrcAy3Yj1LVck0hbo7VjrFR%2Fn27wEGK%2BxomFMSH0t9o03R0LKHJH4HBCuBr0MQdVedY6oy%2BORmQbF%2B8%2BHJblHoTugwhpuicx0S9YSKSmq2G2mohU9VhHpAxaQBzcg8Hrn1a8gTYde37lrNRSr8AqvYzUp4Q1SibLysTU%2Fg1KE1nSnoWaC%2Bs0MtY2TUQuYo2D8daOEjiaBsoYhmk7904zTacTzOcVSn4dh1vsHmuoHdYyQa9%2F9N0fGsAdozy7%2BJoWPT1ppdRnnTzxlR2OgYmRH35nzgBRBmMdthgmh71oFbqrLQtnlQjp8mY94c6WrSFf0uS3ZfiVfyo5vIqD9APaV3jb8%2BwDcwvNxbAwMZiiQqXIdCbntCSwxITf0CkFJVdKeV3PQchkDaMiKeuMIYURL7ncP9p08ETU2LdBjCGeD%2BzVjII1dm6yDy1Lh4Fdk%2FAzC7RlGHx04JEP0EMhaxMH7GESoe2jV6O0%2FjZFqeJlnqx3AmbMvgn%2Fe2%2Bop6jdO8asIQffRhoI7yducgBIJjcH2s%2BKUTzk2uNnGBlOKEpioKIzlkvRgaO2Xqyr8jVAKMWC2HP7j%2FqoUfqC%2B%2BiUSCRbFpj%2Fp4dZA9RLzyDhM8A65wK8O8KGzn79%2B6ZmQdpp8mCMJmJjsIGOqUByn1WH3udeQM4QUnIfA%2BsMYeHGePfSOpD9NACw9Uxeh97EFOFv1m0rjnyZG9tE1LykFigcLO1CR7JTYL%2F7aVFU05YQxv0jTkqxW1TFodxJkYrjmzTX%2F9BKkdYp3AwDMBIbh6rUJW%2FVoU8ST8vxJLI108AY%2BSayz7Rl75MaJVM8IBwTrPRh2TYPFcfq0yww1Mhv8q2urYPJ%2BpkI4Aw0h5uSx65E0Me&X-Amz-Signature=d849bece8b2b6c968bf68380a3f2911cba2a20e2f227884dbc08528255fab375&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JH2HCX7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBT%2BmDGLIbwDni05R5EOsQXCj47QFTtDPuhIgXaIQfaGAiEA11tiwfChnA%2BOkXVGwlDfDqxbB8434K9Pe5h%2BKWG3BpAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEVt4eZ6z780cn%2BncyrcAy3Yj1LVck0hbo7VjrFR%2Fn27wEGK%2BxomFMSH0t9o03R0LKHJH4HBCuBr0MQdVedY6oy%2BORmQbF%2B8%2BHJblHoTugwhpuicx0S9YSKSmq2G2mohU9VhHpAxaQBzcg8Hrn1a8gTYde37lrNRSr8AqvYzUp4Q1SibLysTU%2Fg1KE1nSnoWaC%2Bs0MtY2TUQuYo2D8daOEjiaBsoYhmk7904zTacTzOcVSn4dh1vsHmuoHdYyQa9%2F9N0fGsAdozy7%2BJoWPT1ppdRnnTzxlR2OgYmRH35nzgBRBmMdthgmh71oFbqrLQtnlQjp8mY94c6WrSFf0uS3ZfiVfyo5vIqD9APaV3jb8%2BwDcwvNxbAwMZiiQqXIdCbntCSwxITf0CkFJVdKeV3PQchkDaMiKeuMIYURL7ncP9p08ETU2LdBjCGeD%2BzVjII1dm6yDy1Lh4Fdk%2FAzC7RlGHx04JEP0EMhaxMH7GESoe2jV6O0%2FjZFqeJlnqx3AmbMvgn%2Fe2%2Bop6jdO8asIQffRhoI7yducgBIJjcH2s%2BKUTzk2uNnGBlOKEpioKIzlkvRgaO2Xqyr8jVAKMWC2HP7j%2FqoUfqC%2B%2BiUSCRbFpj%2Fp4dZA9RLzyDhM8A65wK8O8KGzn79%2B6ZmQdpp8mCMJmJjsIGOqUByn1WH3udeQM4QUnIfA%2BsMYeHGePfSOpD9NACw9Uxeh97EFOFv1m0rjnyZG9tE1LykFigcLO1CR7JTYL%2F7aVFU05YQxv0jTkqxW1TFodxJkYrjmzTX%2F9BKkdYp3AwDMBIbh6rUJW%2FVoU8ST8vxJLI108AY%2BSayz7Rl75MaJVM8IBwTrPRh2TYPFcfq0yww1Mhv8q2urYPJ%2BpkI4Aw0h5uSx65E0Me&X-Amz-Signature=bbb0f274e16e07249a04cf68e64c60a63092aa43accca0bfa770d6a7a56d54c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
