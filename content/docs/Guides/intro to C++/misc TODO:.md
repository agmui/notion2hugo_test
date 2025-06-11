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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBRO7XF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxaZ8sAKk%2BqTFMtya1OgHN9jTZcQsn7qDEJyhlwUuWHAiEA1EGY12eIrmwiEg8iPBCn65n2nje7ln0VLUP%2BJcdgY4wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr0beXW%2FMPIekvqQyrcA5Jzm7zeo09%2Ff4KAe8JFpnjHicFcjVMrNeWp%2BQZo6jRhFMufDTCtWjByCGMtEV2miORBhXECP2OMyRNaHQNaYMWLUag9h2xci%2BpVnAiobiPE3S%2B%2F179Tq167f%2FhmQD%2FU2eR3%2B6Ey6vVSrVhtdtyAIXVfNV9gVkA1wRjsMic5dflV1vAPdnXvj7soVPY69wfWY%2FJ18oZXCzD6ZvO8V%2Fut4NYJ5D3ouguCAex9ngM%2BR1RF%2BdVyxU6ckZB2v8kfAb19htgSPHPjg57gukXM5t11%2BcZtye95FHju7dGlxcKO7X9ZuftsAkcS6v9zEAbjKiffoxVxPpiD0OI5peAhw3429dspKUB4lWOng2PhYLSVLj0Nt0rXsmDKT97UXw312hRi4nzhiglhAJRzhzjWcpATBE%2Fp5F9CZnY6X31wHC40SeoH%2FWDTu2mp60amZ%2F3mqQkWftyIRDfrDoNkmTWdLBj5hFd8vTYg2PtAGxOqMCQNuXQmNGLh5%2FP02EZVrSqZffbbcp2q0836brPsAa3M6u1EZT63RAiuqknZ%2Fz5rvlTiHm%2B%2FMbC%2BjD5JpZk9dbHfrtht7%2FgM06AkQkYmJaO22pv5iaBNx6XfjWGdb5zeY6%2FsqJ2aEV4U9CWxJIETNSYcMJ%2BypMIGOqUBNe%2FHW1CKJc1t7%2FqauCz5g5Qdm89asqXty4x516Ibnkh9D20Keqt5GxULO427EL4BHTSHPIRllrJXFkpsr9wc%2FN0YuMzAd%2FPjuDzmcdz40ga9gEnCCAcfiR3l6tJD2G1Ifqy%2Bv%2FtPhPbsw8DK38xcbMOweWDgx0NrOHSiUP9k50WK%2FPJQmXZYDgK0nTAhZZd4%2BJBkUDF3DhbvLft2q92ynUqf69Y6&X-Amz-Signature=651f2a531ea5bda1d9cc36c05abaac01acbe5fc98880994332941ef09bdbf07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBRO7XF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxaZ8sAKk%2BqTFMtya1OgHN9jTZcQsn7qDEJyhlwUuWHAiEA1EGY12eIrmwiEg8iPBCn65n2nje7ln0VLUP%2BJcdgY4wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr0beXW%2FMPIekvqQyrcA5Jzm7zeo09%2Ff4KAe8JFpnjHicFcjVMrNeWp%2BQZo6jRhFMufDTCtWjByCGMtEV2miORBhXECP2OMyRNaHQNaYMWLUag9h2xci%2BpVnAiobiPE3S%2B%2F179Tq167f%2FhmQD%2FU2eR3%2B6Ey6vVSrVhtdtyAIXVfNV9gVkA1wRjsMic5dflV1vAPdnXvj7soVPY69wfWY%2FJ18oZXCzD6ZvO8V%2Fut4NYJ5D3ouguCAex9ngM%2BR1RF%2BdVyxU6ckZB2v8kfAb19htgSPHPjg57gukXM5t11%2BcZtye95FHju7dGlxcKO7X9ZuftsAkcS6v9zEAbjKiffoxVxPpiD0OI5peAhw3429dspKUB4lWOng2PhYLSVLj0Nt0rXsmDKT97UXw312hRi4nzhiglhAJRzhzjWcpATBE%2Fp5F9CZnY6X31wHC40SeoH%2FWDTu2mp60amZ%2F3mqQkWftyIRDfrDoNkmTWdLBj5hFd8vTYg2PtAGxOqMCQNuXQmNGLh5%2FP02EZVrSqZffbbcp2q0836brPsAa3M6u1EZT63RAiuqknZ%2Fz5rvlTiHm%2B%2FMbC%2BjD5JpZk9dbHfrtht7%2FgM06AkQkYmJaO22pv5iaBNx6XfjWGdb5zeY6%2FsqJ2aEV4U9CWxJIETNSYcMJ%2BypMIGOqUBNe%2FHW1CKJc1t7%2FqauCz5g5Qdm89asqXty4x516Ibnkh9D20Keqt5GxULO427EL4BHTSHPIRllrJXFkpsr9wc%2FN0YuMzAd%2FPjuDzmcdz40ga9gEnCCAcfiR3l6tJD2G1Ifqy%2Bv%2FtPhPbsw8DK38xcbMOweWDgx0NrOHSiUP9k50WK%2FPJQmXZYDgK0nTAhZZd4%2BJBkUDF3DhbvLft2q92ynUqf69Y6&X-Amz-Signature=4f53d77a1908ce47beff347bf32ed59e79d405fb37429b2102fe4dabb2dcb98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
