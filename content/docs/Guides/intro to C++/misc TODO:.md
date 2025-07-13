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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVH2C5V6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC67MOgUYVmVYsfYMOhjhWvo6TzeGjxE6cqk2w4qVKBKwIhAJ5rRmSbT6HR6pBzXHM9Q4Wi96G1EAWF04pmfc6SmHuhKv8DCBwQABoMNjM3NDIzMTgzODA1IgxvENhc%2F6LQtpAtwbgq3AMdWWYntjynlyor1G2I05vZb3T3Mfny%2Fgl%2B%2FfVndYCodF5Tc8pq3h5BNqPe6hZ8s9vKM%2BDzf%2BjwVZ8Eq61PNYkZ9w3Sc3X0GSDwB9H3blhb%2BWCKLjSNLpSS%2F9I7%2B9NtqGLKZOc%2B4u%2BwRaEu2GHhOZ0DKxrNxsT9a41DJHLu6JCGHVf%2BbWCfNtkhXFmWS29DUGkjPc7yBiGEi9z9xYs6KIvIn8nmUeojCGugXn9mB47YtJMszxrRzk%2BIuddtFXAIYvSBCqeSEtOCGdenXwqTMdKZyAzMkYVFlIvwKbQ1UhQ861niOgL8ooX%2BMDxx0B890jI%2FSS1rIeaxlGgs0nuKgo3oVMj5yPLUI0Z5tdx8e6uPcBShqfsJ7mXwEgTkvIqoRsVsvsM2dC%2FY7o1cssOitqbWL9OMtgJ89Kt%2Fvx4oqD594d1MMLO6A%2FCv8Gaad5EcoRSggU%2Fq93ojjx56d3jOO3jQwIqGivZ%2FENevpfwQDmKJ7bOPM7Q9ipbrY9SpySTqDj1utny5kNgbHvcM1FDRwWz1AB8JN%2BkHv8CAFX2km7p2oEqkjmBkTBtSraIz1AbTCaJPXMF%2BLfdE%2F7FgVWxBubXYQq47z7lvDOLqEiWNqBJuQwMcG00f4zd1HyMlfzDEj9DDBjqkAddRfI6t22l0wURIhd3%2FitUI2NuCczysVF%2BvmaVB0bmKxEzoLJXyB5BWXSbMVr41DeLR51h2XmmjJbcTbJrkPlMAeshIhPHJ%2FLzZNx8NWrCQsJXXVajvWA4XI5kVa%2FUbPVtrOIlsMQYEneoGQfaEh%2BAjjmXVEamtZtU%2FNAVdW7preHAKRgePV%2FnMp%2Fey8O%2FuFBoC%2Bh3px%2BwwxCHCBEMXP%2Fdu6SLh&X-Amz-Signature=a1aeaf9a58725450a982ee297de866e93263def966813bdc973b7b73df3159e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVH2C5V6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC67MOgUYVmVYsfYMOhjhWvo6TzeGjxE6cqk2w4qVKBKwIhAJ5rRmSbT6HR6pBzXHM9Q4Wi96G1EAWF04pmfc6SmHuhKv8DCBwQABoMNjM3NDIzMTgzODA1IgxvENhc%2F6LQtpAtwbgq3AMdWWYntjynlyor1G2I05vZb3T3Mfny%2Fgl%2B%2FfVndYCodF5Tc8pq3h5BNqPe6hZ8s9vKM%2BDzf%2BjwVZ8Eq61PNYkZ9w3Sc3X0GSDwB9H3blhb%2BWCKLjSNLpSS%2F9I7%2B9NtqGLKZOc%2B4u%2BwRaEu2GHhOZ0DKxrNxsT9a41DJHLu6JCGHVf%2BbWCfNtkhXFmWS29DUGkjPc7yBiGEi9z9xYs6KIvIn8nmUeojCGugXn9mB47YtJMszxrRzk%2BIuddtFXAIYvSBCqeSEtOCGdenXwqTMdKZyAzMkYVFlIvwKbQ1UhQ861niOgL8ooX%2BMDxx0B890jI%2FSS1rIeaxlGgs0nuKgo3oVMj5yPLUI0Z5tdx8e6uPcBShqfsJ7mXwEgTkvIqoRsVsvsM2dC%2FY7o1cssOitqbWL9OMtgJ89Kt%2Fvx4oqD594d1MMLO6A%2FCv8Gaad5EcoRSggU%2Fq93ojjx56d3jOO3jQwIqGivZ%2FENevpfwQDmKJ7bOPM7Q9ipbrY9SpySTqDj1utny5kNgbHvcM1FDRwWz1AB8JN%2BkHv8CAFX2km7p2oEqkjmBkTBtSraIz1AbTCaJPXMF%2BLfdE%2F7FgVWxBubXYQq47z7lvDOLqEiWNqBJuQwMcG00f4zd1HyMlfzDEj9DDBjqkAddRfI6t22l0wURIhd3%2FitUI2NuCczysVF%2BvmaVB0bmKxEzoLJXyB5BWXSbMVr41DeLR51h2XmmjJbcTbJrkPlMAeshIhPHJ%2FLzZNx8NWrCQsJXXVajvWA4XI5kVa%2FUbPVtrOIlsMQYEneoGQfaEh%2BAjjmXVEamtZtU%2FNAVdW7preHAKRgePV%2FnMp%2Fey8O%2FuFBoC%2Bh3px%2BwwxCHCBEMXP%2Fdu6SLh&X-Amz-Signature=61d79f571ac15ed1e7295487d4b1d534a53f57d732848b74b6287090577378e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
