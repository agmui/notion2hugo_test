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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YURXPF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAhyQF9Ay%2B%2BdWt9RL80HoiO5NQItnHtNIp3udT%2B8GM5MAiEAnGcAe15XYxkyY6%2FWklfzS8YJ4ksMb1Aha%2F7fjz%2BAHpcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCvHwBRHxhCCutWuvircAzMYl%2FhNN8D%2BdalGmMkgsF3VgBzl3Pz%2BYqWLc%2FXgqtlVF%2FHP1DY%2FHmVnEHumPXKU97EwtUeeeEupH6n7ceqh9v6JZPlTpt8ycWTtr4YmPD8dcEgxFjufd0Af4lDJ5L8N3i0oQxpa%2FKpXvrhi1Om5LklC%2F7q2KzwCYqQaG78u5zOdj0U7eDDkEhxAMkjsRdu8rLBlekeXqw429RbFaRyX%2B0MZUpqRrmzJOkr7o5aqDJJhgfOoPBpg%2Bl1o%2BxUAyoDxxR2QqCA%2F%2FGbdBbbuZpVL3kbYjCdoeXMtXdexK2nBg0n4iWIvaHF9qKWvYMIzXOHZmzY3Gt%2FoAJuKXX8IEoLPVD%2BZJqfP6vhta%2FkMjdpaBCiTzXn9FXSpTqaHmgVByB6aunkDGeibqK5KvyhapjWDkerNpbjVih9snouN%2BdZ3Us%2BrZg8JB2uXUj5EJ559WJ17HeqE8GD1%2BnmX1CGCKNCxJ5ZVs9vQksHGPqn3KJMI7pFcuicfoMTc3%2FpUSJ3Jss6EMpXeEVQ0eHcoJ5Wlibi0OslqsBimaTpO0%2BzPe%2FMvmLfgVodytLpzxZheLjnVjuEb%2FNbun8mQ%2BuOKsXsCLzaqEeAgyi1S2BWVWYYqtMF7%2F7g%2FBCpv3YW4JY4zqKgMMMP%2BvcIGOqUBp5H9K3g2QjxAmEuekxn3nIIEPZdG7IU%2Fz0BWw234Awzkc2UunTqJQtzfTCtq3LI4IPE4HufKWQXfMk64m9Os3kzW3iqx4WPqmZBsJdOkW38B1LCirl4ZJgAEyNR9DV8B4xIzgQDqicuFKLHbfbUucR%2F9g1WYoGHwvCLrLN8qmTLfm5Nynor8%2F%2FeEHpDwIAHxt7oHepKLo418tCc10EqdD7Isl5Me&X-Amz-Signature=8fd458a8875d1ab9f7f949be522b0fd3946d412f617781e1026fd35848f8cd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YURXPF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAhyQF9Ay%2B%2BdWt9RL80HoiO5NQItnHtNIp3udT%2B8GM5MAiEAnGcAe15XYxkyY6%2FWklfzS8YJ4ksMb1Aha%2F7fjz%2BAHpcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCvHwBRHxhCCutWuvircAzMYl%2FhNN8D%2BdalGmMkgsF3VgBzl3Pz%2BYqWLc%2FXgqtlVF%2FHP1DY%2FHmVnEHumPXKU97EwtUeeeEupH6n7ceqh9v6JZPlTpt8ycWTtr4YmPD8dcEgxFjufd0Af4lDJ5L8N3i0oQxpa%2FKpXvrhi1Om5LklC%2F7q2KzwCYqQaG78u5zOdj0U7eDDkEhxAMkjsRdu8rLBlekeXqw429RbFaRyX%2B0MZUpqRrmzJOkr7o5aqDJJhgfOoPBpg%2Bl1o%2BxUAyoDxxR2QqCA%2F%2FGbdBbbuZpVL3kbYjCdoeXMtXdexK2nBg0n4iWIvaHF9qKWvYMIzXOHZmzY3Gt%2FoAJuKXX8IEoLPVD%2BZJqfP6vhta%2FkMjdpaBCiTzXn9FXSpTqaHmgVByB6aunkDGeibqK5KvyhapjWDkerNpbjVih9snouN%2BdZ3Us%2BrZg8JB2uXUj5EJ559WJ17HeqE8GD1%2BnmX1CGCKNCxJ5ZVs9vQksHGPqn3KJMI7pFcuicfoMTc3%2FpUSJ3Jss6EMpXeEVQ0eHcoJ5Wlibi0OslqsBimaTpO0%2BzPe%2FMvmLfgVodytLpzxZheLjnVjuEb%2FNbun8mQ%2BuOKsXsCLzaqEeAgyi1S2BWVWYYqtMF7%2F7g%2FBCpv3YW4JY4zqKgMMMP%2BvcIGOqUBp5H9K3g2QjxAmEuekxn3nIIEPZdG7IU%2Fz0BWw234Awzkc2UunTqJQtzfTCtq3LI4IPE4HufKWQXfMk64m9Os3kzW3iqx4WPqmZBsJdOkW38B1LCirl4ZJgAEyNR9DV8B4xIzgQDqicuFKLHbfbUucR%2F9g1WYoGHwvCLrLN8qmTLfm5Nynor8%2F%2FeEHpDwIAHxt7oHepKLo418tCc10EqdD7Isl5Me&X-Amz-Signature=0b308bbe9dc3ecb3da51fe92e903aa2bd3ef8af68bd31cbf004286dda5766c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
