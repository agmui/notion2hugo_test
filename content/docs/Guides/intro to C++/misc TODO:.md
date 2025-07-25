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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BM5K3FI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDvp0uy8p%2B0ye5yAYkLxbfsgiEgX8qIYKF06HWuIcCupgIge0qZ%2FvI3aRl1bVPgwiRiK9vI8uXNYRdUGiaIlVKD6GUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFineb37uLvE8oXKVCrcA2yfDgf6iclkVJZecno09Ojvx930Wnsce%2FNx%2Fs70n7aapatV57zmFHe0yWOADxxZuejJEoSgjswBU0nZmRFadaIk9cIja1tPvY6oF0xs%2BrFNHzxH1%2B15DGQu%2FsZ6gIHnY0gzJIbF3qrUy294XF2uZlxN62d09rkSkTzRt%2BC1l5d6xxHyfHCKag%2FsmvmOwuCIp3LdKg0BATrQtgQtkpGk5j6851PaZ6ZIuAMhvs3G3ivyvdFo3bgKnVSDpkxBPFf%2BdzIYjnU3ZcFo4A6Ic99ZMMm2l2PlZlRSSEdsPUcV5iDyrUnuAhlFlsEQNxSZv0bhdYYtaW%2B3GnSCIvCfD1ajp%2BHArNibNj4luNqWPllthYLqVs%2FsCHCv3LyOrgghPFZv35YDgxHHuGx%2FNm6WX2wrjnSRoivsEm%2B4rEsFgZC9R1QjJEUv46zdc0vUr4tiKhA21vLC6Unz7%2F4rg6EfI1mXJiVvNCrV6md7txTCIWf%2B6B2bjJjOt92T1wntJBJLRZ0KQN%2BnpqhKSjEfs3XhC0CoX6bw9sbBkrRdG7cOK04bFrwFR6cWtmsREappoD75ezhRn9RuXHBF6unlhADr8s7YxxHE0mQcnAaRN9dY417GpII6AG4nBA5Bcun7I2klMMrnjMQGOqUBO%2FLhXg26b3rVpmKy7RvAi0Sp3ECSsRv8Hxev1LqoCExK6Fvujt79wDDweSDa615q7ZELH0PFqieh5xRw1y3uhHAGxnYSmfmCMd3TmQeWfSAJCgBJQAK6ZvHfwx7IXoo9Li5fEnsseq%2F81KuvbWqHDO06a%2FqYLfStOEBlRylz4WJgRLIR1kWkl8Ja4Z%2FESDTnGhSnvfSLEHGDHirn%2Fm53OJeOT5tI&X-Amz-Signature=c762ac18dd370d61dcafabc39618079b5d81f47560a947027ee2805abf50b946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BM5K3FI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDvp0uy8p%2B0ye5yAYkLxbfsgiEgX8qIYKF06HWuIcCupgIge0qZ%2FvI3aRl1bVPgwiRiK9vI8uXNYRdUGiaIlVKD6GUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFineb37uLvE8oXKVCrcA2yfDgf6iclkVJZecno09Ojvx930Wnsce%2FNx%2Fs70n7aapatV57zmFHe0yWOADxxZuejJEoSgjswBU0nZmRFadaIk9cIja1tPvY6oF0xs%2BrFNHzxH1%2B15DGQu%2FsZ6gIHnY0gzJIbF3qrUy294XF2uZlxN62d09rkSkTzRt%2BC1l5d6xxHyfHCKag%2FsmvmOwuCIp3LdKg0BATrQtgQtkpGk5j6851PaZ6ZIuAMhvs3G3ivyvdFo3bgKnVSDpkxBPFf%2BdzIYjnU3ZcFo4A6Ic99ZMMm2l2PlZlRSSEdsPUcV5iDyrUnuAhlFlsEQNxSZv0bhdYYtaW%2B3GnSCIvCfD1ajp%2BHArNibNj4luNqWPllthYLqVs%2FsCHCv3LyOrgghPFZv35YDgxHHuGx%2FNm6WX2wrjnSRoivsEm%2B4rEsFgZC9R1QjJEUv46zdc0vUr4tiKhA21vLC6Unz7%2F4rg6EfI1mXJiVvNCrV6md7txTCIWf%2B6B2bjJjOt92T1wntJBJLRZ0KQN%2BnpqhKSjEfs3XhC0CoX6bw9sbBkrRdG7cOK04bFrwFR6cWtmsREappoD75ezhRn9RuXHBF6unlhADr8s7YxxHE0mQcnAaRN9dY417GpII6AG4nBA5Bcun7I2klMMrnjMQGOqUBO%2FLhXg26b3rVpmKy7RvAi0Sp3ECSsRv8Hxev1LqoCExK6Fvujt79wDDweSDa615q7ZELH0PFqieh5xRw1y3uhHAGxnYSmfmCMd3TmQeWfSAJCgBJQAK6ZvHfwx7IXoo9Li5fEnsseq%2F81KuvbWqHDO06a%2FqYLfStOEBlRylz4WJgRLIR1kWkl8Ja4Z%2FESDTnGhSnvfSLEHGDHirn%2Fm53OJeOT5tI&X-Amz-Signature=0163002d3bda5a07621254a65a0e00d480bae7149933d23f6b5d9d88ae5d2fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
