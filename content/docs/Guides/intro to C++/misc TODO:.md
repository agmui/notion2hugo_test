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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILVSP4K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzngsGWAJwqEjAOHCmvXdVyoeVeFnFW8NUrN%2BKFGqqeAiEA1QpwpDla6DR5ZlZwqV8bA%2FVPvYGxRl96XO%2FYBX31p3kqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApyK16%2BezISoOIlKCrcAweRTJxj%2FDy8L9DzLY8P6E5ptvE9Ah9qq%2BkqKlvPOrNlu6bIgvtssxXFsQm8ZDRNrrKuQJcCIrxdaAcEqiF6k%2BLu5EIGZaNT6pxzVyqd7oKatdl6ijrrmOW153hVdKznXfDcFcuAabXPah4jbiIjdEP3mSTq4kHIFwGGNWzzGEvOmSNpSiyDxrEJNQdNJU6TC6sKODLLXmpUEVPs3N4SlbUy54fK9HkW%2FO6kQsdhHjLRJycRIdeaLW%2FAYeij9zCR8WwaNwNgiUTPl9rA05zd67hwpkL7QI%2BnVUYHxsCiGXJmjNV4wd%2FXCEP71wAp6V%2BJTGV%2F94c1mHWaxMLGa7I4Em5XrWrt7CbW4RBb96YoTTaHrj5jVnIhnvfkRLGHGGMhpcZyI5N86S1HyCvKyQFREA2u6y6M3pPxWVdZH2pRlUIWxKUAnIc5mt7RTeBMI6jrdeqVQ7pnz7g%2FFj1bZHQwSdPn97XoQTNJNKdGYXuNb%2BLWPE6nCz8dKE0YZkNHkGcVex18BsfMcp4EpZmmDWuMqQmMMisyHtB%2FkVcl3kXiAIulM1lI%2F%2Fz50G9cgE2B13p67ol5WuZOnYBV53PACIytrhY6I5RGjaRDYC%2F01cVP1vnar4qWJioh%2BMZoQ5RzMN2D68EGOqUBPtoSxv9%2BK6pQligcAKuFU26SOU1z%2BsvKLddYwfLXi0wzcNIV2hKXYyhPuBWR2dcxr2ESq%2Bx67OXJWLYM%2FJ5k1C%2FIIf%2FiFB7CdvLhHiIhOJ3rEsXTTu08FxyP99uDsW35GfbWZGAY4qE8TaYjB6PAmq9M1noDmkxuqf9S56TQVwQMikQh6ghQIihaHFYBRhaZXZca%2FQsMAmVbXhf5dU0EVERislxF&X-Amz-Signature=6077e706ce91678eeb4764ba0cc9f6b7c0f5351139d4f40518b8b9d6c42bfdbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILVSP4K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzngsGWAJwqEjAOHCmvXdVyoeVeFnFW8NUrN%2BKFGqqeAiEA1QpwpDla6DR5ZlZwqV8bA%2FVPvYGxRl96XO%2FYBX31p3kqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApyK16%2BezISoOIlKCrcAweRTJxj%2FDy8L9DzLY8P6E5ptvE9Ah9qq%2BkqKlvPOrNlu6bIgvtssxXFsQm8ZDRNrrKuQJcCIrxdaAcEqiF6k%2BLu5EIGZaNT6pxzVyqd7oKatdl6ijrrmOW153hVdKznXfDcFcuAabXPah4jbiIjdEP3mSTq4kHIFwGGNWzzGEvOmSNpSiyDxrEJNQdNJU6TC6sKODLLXmpUEVPs3N4SlbUy54fK9HkW%2FO6kQsdhHjLRJycRIdeaLW%2FAYeij9zCR8WwaNwNgiUTPl9rA05zd67hwpkL7QI%2BnVUYHxsCiGXJmjNV4wd%2FXCEP71wAp6V%2BJTGV%2F94c1mHWaxMLGa7I4Em5XrWrt7CbW4RBb96YoTTaHrj5jVnIhnvfkRLGHGGMhpcZyI5N86S1HyCvKyQFREA2u6y6M3pPxWVdZH2pRlUIWxKUAnIc5mt7RTeBMI6jrdeqVQ7pnz7g%2FFj1bZHQwSdPn97XoQTNJNKdGYXuNb%2BLWPE6nCz8dKE0YZkNHkGcVex18BsfMcp4EpZmmDWuMqQmMMisyHtB%2FkVcl3kXiAIulM1lI%2F%2Fz50G9cgE2B13p67ol5WuZOnYBV53PACIytrhY6I5RGjaRDYC%2F01cVP1vnar4qWJioh%2BMZoQ5RzMN2D68EGOqUBPtoSxv9%2BK6pQligcAKuFU26SOU1z%2BsvKLddYwfLXi0wzcNIV2hKXYyhPuBWR2dcxr2ESq%2Bx67OXJWLYM%2FJ5k1C%2FIIf%2FiFB7CdvLhHiIhOJ3rEsXTTu08FxyP99uDsW35GfbWZGAY4qE8TaYjB6PAmq9M1noDmkxuqf9S56TQVwQMikQh6ghQIihaHFYBRhaZXZca%2FQsMAmVbXhf5dU0EVERislxF&X-Amz-Signature=f69eca5e48e4f698413359c7604a15b8690072d8a4ec68b23ffc78bc9cc2b358&X-Amz-SignedHeaders=host&x-id=GetObject)

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
