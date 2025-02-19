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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VTB25Y%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDjSpIg7P0jO8YDjuXel4WbYkHpJgqPVL0CrTlsp0Xx2wIgJ2voYpxgIMR9i6J68eEtcqRBOsoFeh9x%2FSfJsPeV9JUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4gOn0zHbfUKyPSRircAx9X9gxYf41Od%2BcORDqE3WVbtUvC%2F7aDvdIu%2FXF1%2BHkmsDnTaPWTIcEE%2BXUWOOOGyTAQGKzW8DG3z8MM5OKo%2Bg1ZIC%2BVVjDtAxueUYCRjrCOHNG31C51K%2BWAO2B4l%2FZekjkFk1V%2BG2As%2BOae5%2BAJPj1gay8XhDWUe0qygvqv3UNwoac%2FeBsy2lxkyljMjGyosv0o0VoNkY%2FyxSuzVPvrGa3cpyyEooDhNtFpGq9EzkbHSZSyPp98mPoXALycZ%2FIQ%2BRjwyj7qzImrK27tcoTL38Rmh5GzkR05zu%2FGOjtciazOVacoUiMy%2FZdLz1tcziPYYUT%2BtCiTKI7zi%2BMruGTIBvvAEajpAZbgc4YguEDIj22uJvDrM7m3uTv04HajtnN9sUhQnjFQEes07qee9U4o19%2BcdDP4XIIQbNQZG26M6gUyp988VWF23uZLzmvZFjYmIq66p0lqZkBO6cKXmJelpTzKUQzXeBNQVkpPcFVq5NFlQ0dYAx8yqxlbodkLzFJZ%2BrzBqDhN49SDgXOQ%2BZb3Uqi2hV6Bg5L7vND%2F%2Bn30mjzBamAhmdcffhoSCZmRFkoarYcUoatkOriPRgHvCamrUPicRBsA0SkbVXcRqFJIwoEXrtncmLZlzu2hg%2BZZMK3c1r0GOqUBKt19mQkAwd%2FLas85KMiu4Q2jN3C7xwQmI%2FveG%2BggR4GK8mUDPOoBK4MqY5rFU5XbzFKTSIITaIkYcEgrjWPT8jn5YD7fmJJf0EAgeUUdDrPnNfSt5dpAH%2FX2W8M3OUt5gy4Y82iRanqSqz1vHJI7ablUaMOw%2FdQ0Vd73UmtnYzCXMDHN9EUI3U4KBYgXMHg%2FPb%2FgzQRTtUuqC%2Fdot6lYJzF3SzMs&X-Amz-Signature=db93a6427d73b5b2b5f974a6cbbce1074411ba6381e5358cf3f151cc374da3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VTB25Y%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDjSpIg7P0jO8YDjuXel4WbYkHpJgqPVL0CrTlsp0Xx2wIgJ2voYpxgIMR9i6J68eEtcqRBOsoFeh9x%2FSfJsPeV9JUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4gOn0zHbfUKyPSRircAx9X9gxYf41Od%2BcORDqE3WVbtUvC%2F7aDvdIu%2FXF1%2BHkmsDnTaPWTIcEE%2BXUWOOOGyTAQGKzW8DG3z8MM5OKo%2Bg1ZIC%2BVVjDtAxueUYCRjrCOHNG31C51K%2BWAO2B4l%2FZekjkFk1V%2BG2As%2BOae5%2BAJPj1gay8XhDWUe0qygvqv3UNwoac%2FeBsy2lxkyljMjGyosv0o0VoNkY%2FyxSuzVPvrGa3cpyyEooDhNtFpGq9EzkbHSZSyPp98mPoXALycZ%2FIQ%2BRjwyj7qzImrK27tcoTL38Rmh5GzkR05zu%2FGOjtciazOVacoUiMy%2FZdLz1tcziPYYUT%2BtCiTKI7zi%2BMruGTIBvvAEajpAZbgc4YguEDIj22uJvDrM7m3uTv04HajtnN9sUhQnjFQEes07qee9U4o19%2BcdDP4XIIQbNQZG26M6gUyp988VWF23uZLzmvZFjYmIq66p0lqZkBO6cKXmJelpTzKUQzXeBNQVkpPcFVq5NFlQ0dYAx8yqxlbodkLzFJZ%2BrzBqDhN49SDgXOQ%2BZb3Uqi2hV6Bg5L7vND%2F%2Bn30mjzBamAhmdcffhoSCZmRFkoarYcUoatkOriPRgHvCamrUPicRBsA0SkbVXcRqFJIwoEXrtncmLZlzu2hg%2BZZMK3c1r0GOqUBKt19mQkAwd%2FLas85KMiu4Q2jN3C7xwQmI%2FveG%2BggR4GK8mUDPOoBK4MqY5rFU5XbzFKTSIITaIkYcEgrjWPT8jn5YD7fmJJf0EAgeUUdDrPnNfSt5dpAH%2FX2W8M3OUt5gy4Y82iRanqSqz1vHJI7ablUaMOw%2FdQ0Vd73UmtnYzCXMDHN9EUI3U4KBYgXMHg%2FPb%2FgzQRTtUuqC%2Fdot6lYJzF3SzMs&X-Amz-Signature=2a825bcf05d7530586b2998d1c6c1db265ca3f5009f8fd6aea79f0227bc6df39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
