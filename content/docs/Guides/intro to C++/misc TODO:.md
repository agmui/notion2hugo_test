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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4D2CP2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAhLa1BolKWaPEgovq%2FX5I3Kb3gMgKWu63%2Bmf08EyXxmAiEA3%2BSEZJfQHWJ6mp9GYuxChcfvKsGrbJ6yDyIey0i2qUcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRUvhw%2FaebuqibvrSrcA%2B1N%2Bv1RHTkWTnAyXL1IvMzFP1xI8iWJmBZK7Xd%2Bcgd%2FQpG7GbOK0AwiIyj%2Fvtz4%2FmmOMlE8%2B%2BT8%2FjsTKDk43k%2FJZYtwV2wbNnDOmahs0piNemN1Ai%2FCpnZ1oLap%2FYr0mGF2GnKHEdP67h%2BROooh1IFix3S%2Bb2v5admOZznFnDg5Y5V71YeWLllz3pL%2F8YdaStwX8FcB%2FNw887PdtWuUpfAWe1U2jV3KPWiBiCnjcEpkfuvs%2B2hVWUSP2%2FTmKsVE3qzEhUSVpgwDLpc%2Bvwn0irk2GYGcJcqK9RAJa7gAgRQBSkd%2FrroVitt6n3J6BTydxo71T%2BIx%2Fv6L38S%2FrXfgaVIooBtkdkSKbnJhwdd20psJBeuHUIQjH5V4kr4CDs7RuW6T%2BYbUbjKE9uSHTEWlyAKM7zaItiVCgtL4oQrsldV%2B4C8GB1DuH4Sh12E%2BP2%2BiSB9zmmdSU1HWCisPNfa6NsgKxQcO%2FKAjvUrGjkfRhOeoWnmGG3vZZfWrGT%2B3ZVrUomnRx3FsV4IZnkvp%2Fmwia3Z1wyrGGYKOSHkN7kloA8X%2FMU%2F70PP7Vju3FfaxiLpnc%2F1iuziE9DuNQD4CKq48r6%2F8SiUIgR%2FJCr3PE2FW4TeDmCb7nd4gggc4bZdMMM7M%2F74GOqUBZx4P0SROoSlxUyTyjZXw6PLOaHv9dhE6jrPFiFQMFJMhq2Jqx4lbKoNpFPjZCpQJ9O9Ztnkpby6gTXpuUfo%2FQ31bkMqL27kxIfDcTvtMcvXl9PHieyCeQJlJIOcGjIiOhnSA2ACy1sjKi2aNXF6uhmYAq4aJNUkERvN%2BJgC8v2n6LEpstN%2FxMvz8OApUxyK1TYoBj7XrWU6v4vSJ2M8YCGUTtRyS&X-Amz-Signature=4f1dd721234d85a25ff9577b6c1f6ca3fa14deb1a7ff8cba4ca831259f8a508e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4D2CP2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAhLa1BolKWaPEgovq%2FX5I3Kb3gMgKWu63%2Bmf08EyXxmAiEA3%2BSEZJfQHWJ6mp9GYuxChcfvKsGrbJ6yDyIey0i2qUcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRUvhw%2FaebuqibvrSrcA%2B1N%2Bv1RHTkWTnAyXL1IvMzFP1xI8iWJmBZK7Xd%2Bcgd%2FQpG7GbOK0AwiIyj%2Fvtz4%2FmmOMlE8%2B%2BT8%2FjsTKDk43k%2FJZYtwV2wbNnDOmahs0piNemN1Ai%2FCpnZ1oLap%2FYr0mGF2GnKHEdP67h%2BROooh1IFix3S%2Bb2v5admOZznFnDg5Y5V71YeWLllz3pL%2F8YdaStwX8FcB%2FNw887PdtWuUpfAWe1U2jV3KPWiBiCnjcEpkfuvs%2B2hVWUSP2%2FTmKsVE3qzEhUSVpgwDLpc%2Bvwn0irk2GYGcJcqK9RAJa7gAgRQBSkd%2FrroVitt6n3J6BTydxo71T%2BIx%2Fv6L38S%2FrXfgaVIooBtkdkSKbnJhwdd20psJBeuHUIQjH5V4kr4CDs7RuW6T%2BYbUbjKE9uSHTEWlyAKM7zaItiVCgtL4oQrsldV%2B4C8GB1DuH4Sh12E%2BP2%2BiSB9zmmdSU1HWCisPNfa6NsgKxQcO%2FKAjvUrGjkfRhOeoWnmGG3vZZfWrGT%2B3ZVrUomnRx3FsV4IZnkvp%2Fmwia3Z1wyrGGYKOSHkN7kloA8X%2FMU%2F70PP7Vju3FfaxiLpnc%2F1iuziE9DuNQD4CKq48r6%2F8SiUIgR%2FJCr3PE2FW4TeDmCb7nd4gggc4bZdMMM7M%2F74GOqUBZx4P0SROoSlxUyTyjZXw6PLOaHv9dhE6jrPFiFQMFJMhq2Jqx4lbKoNpFPjZCpQJ9O9Ztnkpby6gTXpuUfo%2FQ31bkMqL27kxIfDcTvtMcvXl9PHieyCeQJlJIOcGjIiOhnSA2ACy1sjKi2aNXF6uhmYAq4aJNUkERvN%2BJgC8v2n6LEpstN%2FxMvz8OApUxyK1TYoBj7XrWU6v4vSJ2M8YCGUTtRyS&X-Amz-Signature=db579f6b9e86b9afd02bc0f3bb359026e40481ba981fdbb817886c599717100f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
