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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTEBWJO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL4VlH9m4vj0lDz3lzaPijitaKbsNnjMxOzI%2FBuwqinAiEAtwHvACm6d57WPluYA82jqX0WT8F%2BS5gZui0ER5ywweQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUoSDlMdhYHvGUkGSrcAyJkj2qCIacrA5bIGeQFYti97eAiX%2FgG4mgEpjzU6dx05i0m3VZjTlLsVWHXRsjcei%2F00F2NgpogJCxNxBONJclAHTPhotxcIcBOkcEiY6l5z9rn9MMJrTR0RvX7RGlVqIAc8siLnbKJ8SrjF4PbWPArPlywrctyfQ1UmJEO7FaDQN5tm3QRvYpssHqCOdsw7B%2FYwQPAf7nzxyyiS6D%2Flf13fPmuDhTecv%2FzgJQjG3TVBWh6JNMj6lhR2c3h0YJ%2BxZeWCTZLw29LkiQxNwgoaHFU1qV%2FanGKObTqNVQ0MDiw%2FjxZR1Yvjx5SE8jE6BYs0ZixWUVxF71QwWIl3IyvCYOyh5RgPIMmOz5caiu4FezzMotoksL%2BZ%2BkhNAh4rQahQfbkCF0AlVbTbJfQjtPtXzlnrXaYcmnbA%2FJbipmCKgASC8eNtn5ZQGTkSVCzlwme0LNIsTqY7CDNEbMcLKMyU%2F7CvY9JGscGv%2FMzAwG9EwxvPJYqrtJuGdv5tylHxEKL%2BTgWf9zN4htqA1Ht%2F7LEthIxVPqdPcSrpRx6bqTha2F1lk1px5XlD14mN3p7Pp1V9lKLTHMBwm62i4ar95CM6beZ59N2rN%2BI0csKsUlGoH9x8wo0%2F6dSPAV8vTorMLbpr70GOqUBxmazmW%2Bn%2BXc661OORT0yp0q5heVpLVtTt9F2RW77vnWFzucvHRnGXT5cD6wDUqeMxlWliBMyp%2FDmZWJgCUVQRv0yIyBHEA3JospXgyNSGL4XJJVOA8EByac0WaUafP0HIGo2igwY92WCoAAzstU4nKJ3Idxx7r%2FaCWObwp6hMk4Qte4z0arzH%2FPP72SO5i0vOzQP0xlaJ1JEFrWTkc52fJYtwcmU&X-Amz-Signature=43b6d14581ab227daedefc02f87b9bee124343c4024f01adc90a02b3b0094515&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTEBWJO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL4VlH9m4vj0lDz3lzaPijitaKbsNnjMxOzI%2FBuwqinAiEAtwHvACm6d57WPluYA82jqX0WT8F%2BS5gZui0ER5ywweQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUoSDlMdhYHvGUkGSrcAyJkj2qCIacrA5bIGeQFYti97eAiX%2FgG4mgEpjzU6dx05i0m3VZjTlLsVWHXRsjcei%2F00F2NgpogJCxNxBONJclAHTPhotxcIcBOkcEiY6l5z9rn9MMJrTR0RvX7RGlVqIAc8siLnbKJ8SrjF4PbWPArPlywrctyfQ1UmJEO7FaDQN5tm3QRvYpssHqCOdsw7B%2FYwQPAf7nzxyyiS6D%2Flf13fPmuDhTecv%2FzgJQjG3TVBWh6JNMj6lhR2c3h0YJ%2BxZeWCTZLw29LkiQxNwgoaHFU1qV%2FanGKObTqNVQ0MDiw%2FjxZR1Yvjx5SE8jE6BYs0ZixWUVxF71QwWIl3IyvCYOyh5RgPIMmOz5caiu4FezzMotoksL%2BZ%2BkhNAh4rQahQfbkCF0AlVbTbJfQjtPtXzlnrXaYcmnbA%2FJbipmCKgASC8eNtn5ZQGTkSVCzlwme0LNIsTqY7CDNEbMcLKMyU%2F7CvY9JGscGv%2FMzAwG9EwxvPJYqrtJuGdv5tylHxEKL%2BTgWf9zN4htqA1Ht%2F7LEthIxVPqdPcSrpRx6bqTha2F1lk1px5XlD14mN3p7Pp1V9lKLTHMBwm62i4ar95CM6beZ59N2rN%2BI0csKsUlGoH9x8wo0%2F6dSPAV8vTorMLbpr70GOqUBxmazmW%2Bn%2BXc661OORT0yp0q5heVpLVtTt9F2RW77vnWFzucvHRnGXT5cD6wDUqeMxlWliBMyp%2FDmZWJgCUVQRv0yIyBHEA3JospXgyNSGL4XJJVOA8EByac0WaUafP0HIGo2igwY92WCoAAzstU4nKJ3Idxx7r%2FaCWObwp6hMk4Qte4z0arzH%2FPP72SO5i0vOzQP0xlaJ1JEFrWTkc52fJYtwcmU&X-Amz-Signature=7327fa2a321caaec532d75c2f5ec506a79de5b404a8b6fccac2f0747605d7500&X-Amz-SignedHeaders=host&x-id=GetObject)

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
