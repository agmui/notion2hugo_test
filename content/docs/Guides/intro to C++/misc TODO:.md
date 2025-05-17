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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SLRMLD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDerOe2Ts63jg1hyzI6kBkM1iXWP%2FrIEZEkLueSPzbajgIgOGZ6SRdTd%2B0hrPTPmhYMNbVdMCMqFGlCPvihNMDSPUsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLN6FAng5tFNvi1wuCrcA%2FyijPveSTLGQ1AxSIx1WNuEClvYK0K8OQbvP0MW2vc1oD%2BlpFW2chvzEYaGhGNe3Hr9H%2BSCCifRfV%2BskZfMGGrN%2FMEexAHgtieEzF7TfiSR4bwXrGw5pynf2m68hpxFwN2rnmuoQ9CWRV1WRT3kjgTSglz6FBZEu%2B%2BQbXEknUG2foQLBG5QouF92YczOXVUfHBVRLkkEDeFyB9uFYPBMcI1hyDSr%2FKGdiFAFfseb%2BG4huQhiae84cU18wfsq7DCRtOx1SYII1Z2pWNWFhp81NpexeMT0LW00tAzLSZfSZzz74E3UN2G%2B4tXwc84ZFVnCxcs03KZlUae5%2B70KCPx08zEMDZtcXYZcPL0CLrq0qSV53H68RSLYucadBA6sw%2B7bSI%2FJutPsEln7aFrUFEQwOz9L2ZSM3rxfb6a%2F5Q744UFd%2BljhGLX1JZpkwwgYycZSszuFzlfgLJm1DtpUbJi2Bd%2B5RV5Cw9c%2F%2BTf2EUGaUWBiXT4qBsLkNu0BE924GVZJTpGdKeE9CKN%2BnifGe7w6xbNbS8PgSgE8gnJij3rXjY6yLY6NYFeOnz9Z2FZuqcb%2BEFZFcIDw%2BD034D0nkcIkgKUlfJsajgCVqttueV7ViQV%2FuLpJOplwlOyOg5tMMu1osEGOqUB%2FqMXrLqIVeAorIxDw0uR96Tdw1JUUwfAHpRAGBxjDJD5AL%2FSw4yZsidtDjjn%2BPtmVShPSX9EzARAAW3XNq58jMkAETFHYdtDQJNGBetN9vnymdrgAOO9TYEdwRiS9yvk5y4%2FfmwL2%2BmPJ8OJGK2CmIJdneQ5iQ%2FBrtyZhupQQNX5ZW6CqGupz%2BhhWPfNoJROKm%2BBgL87wAG28AOSG6%2Flj%2FOL6WT5&X-Amz-Signature=9bbd2e77b7d9b83ac7fd9c9637dd412b2c764cc478644b6f44f57c6ccb4c7c27&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SLRMLD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDerOe2Ts63jg1hyzI6kBkM1iXWP%2FrIEZEkLueSPzbajgIgOGZ6SRdTd%2B0hrPTPmhYMNbVdMCMqFGlCPvihNMDSPUsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLN6FAng5tFNvi1wuCrcA%2FyijPveSTLGQ1AxSIx1WNuEClvYK0K8OQbvP0MW2vc1oD%2BlpFW2chvzEYaGhGNe3Hr9H%2BSCCifRfV%2BskZfMGGrN%2FMEexAHgtieEzF7TfiSR4bwXrGw5pynf2m68hpxFwN2rnmuoQ9CWRV1WRT3kjgTSglz6FBZEu%2B%2BQbXEknUG2foQLBG5QouF92YczOXVUfHBVRLkkEDeFyB9uFYPBMcI1hyDSr%2FKGdiFAFfseb%2BG4huQhiae84cU18wfsq7DCRtOx1SYII1Z2pWNWFhp81NpexeMT0LW00tAzLSZfSZzz74E3UN2G%2B4tXwc84ZFVnCxcs03KZlUae5%2B70KCPx08zEMDZtcXYZcPL0CLrq0qSV53H68RSLYucadBA6sw%2B7bSI%2FJutPsEln7aFrUFEQwOz9L2ZSM3rxfb6a%2F5Q744UFd%2BljhGLX1JZpkwwgYycZSszuFzlfgLJm1DtpUbJi2Bd%2B5RV5Cw9c%2F%2BTf2EUGaUWBiXT4qBsLkNu0BE924GVZJTpGdKeE9CKN%2BnifGe7w6xbNbS8PgSgE8gnJij3rXjY6yLY6NYFeOnz9Z2FZuqcb%2BEFZFcIDw%2BD034D0nkcIkgKUlfJsajgCVqttueV7ViQV%2FuLpJOplwlOyOg5tMMu1osEGOqUB%2FqMXrLqIVeAorIxDw0uR96Tdw1JUUwfAHpRAGBxjDJD5AL%2FSw4yZsidtDjjn%2BPtmVShPSX9EzARAAW3XNq58jMkAETFHYdtDQJNGBetN9vnymdrgAOO9TYEdwRiS9yvk5y4%2FfmwL2%2BmPJ8OJGK2CmIJdneQ5iQ%2FBrtyZhupQQNX5ZW6CqGupz%2BhhWPfNoJROKm%2BBgL87wAG28AOSG6%2Flj%2FOL6WT5&X-Amz-Signature=a73600fc7923fc6a65743768b1ab29852e505336d7a4a1dbdbe743223e93ebca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
