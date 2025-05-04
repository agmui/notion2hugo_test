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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MLIWWF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD%2Fv9VkrEFAEnoHgAcfhSEVgb0%2BGsqlx%2BXcTxkfRn8xTAIgTMVEhoLJqefwdS5V%2BQszRLIqyE6vSwgW%2BjnUWUwdUfUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIbN0ZU8XpQzkvGMyyrcAx9WK16fGDOw22azIlck1DmeHMxYkEwNpHHoByKW85SZVJU39Z1EhinaAPjfrypDbM87wUgJhCr7kdSc8IekZypqjdVSAzEN%2BPQ%2BaSuIw4vXj6wPV6TiF5WiVKObYLVB1wawqtfh2cAkR2bMDGC1SCzz1rmJdVFxpbb%2FTaJcd%2FLx8tUpRTQb%2FGGnhJAJpwRQgzi8%2FfO1%2FMdcobKFZ%2BEyUSxZUyNLKRl4gp4nXNCJo8Jn8q0iCm2nRx0hpHQukKJObKJFSNiFvOKElRax42mJYNVN8O3I1eZzdmTY5wnp8isjA82%2Fp4wBQMb%2FacaDwCIBiOhwSODqBl7lErPRaT6lqId41hFZDdFqpWRIbq1%2F4anW4CyN8DqYKRVa2jKxMsTjONtvJtt8gfiba%2BuxAD6aqaCrKgHKSjAfBgrRIWHrG45nbjn2KDT%2FeRRJKIEnnOXV4i4noSvA0L21S9rDN702Y0zH4l2bj0HWXnLGy1QrvWRzOki%2Fg6O1G%2FN9urbPDHxAdLx3pFroBaXRYfn8%2B3yg5AxeDCDVwcB34LuNus%2BDVdUuFZs5z9zfSmugdldPTM2jFJQKOic80vDLP%2FISe0cuqRu322fR0tWT39Ow3ZswqnQICH8mpODgPwCFdj%2F%2FMIT83MAGOqUBVyi4unXmvM0NV%2FuB5BymfaZOiWlYz1Dyf5kQCoKLD7fAh%2BqcShhWScCO6CI5EYdNpffT0yHuhSkmAdfujog0YLeU4SarSswsiIzfRUynCXEOXu4fq7jZOejwk4EnbIDLh67WuHmxoLgToHfaiALnixNjoLj7lluRHRuV6i7IiKJG2eSNGWEF9w%2Bepj6f47agtw0XuG49X0pmmzVA2%2B5dl168RuKn&X-Amz-Signature=098c45437bde22c859750d237f2c8279b39e93e5327567f65354c9f57ad4ae2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MLIWWF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD%2Fv9VkrEFAEnoHgAcfhSEVgb0%2BGsqlx%2BXcTxkfRn8xTAIgTMVEhoLJqefwdS5V%2BQszRLIqyE6vSwgW%2BjnUWUwdUfUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIbN0ZU8XpQzkvGMyyrcAx9WK16fGDOw22azIlck1DmeHMxYkEwNpHHoByKW85SZVJU39Z1EhinaAPjfrypDbM87wUgJhCr7kdSc8IekZypqjdVSAzEN%2BPQ%2BaSuIw4vXj6wPV6TiF5WiVKObYLVB1wawqtfh2cAkR2bMDGC1SCzz1rmJdVFxpbb%2FTaJcd%2FLx8tUpRTQb%2FGGnhJAJpwRQgzi8%2FfO1%2FMdcobKFZ%2BEyUSxZUyNLKRl4gp4nXNCJo8Jn8q0iCm2nRx0hpHQukKJObKJFSNiFvOKElRax42mJYNVN8O3I1eZzdmTY5wnp8isjA82%2Fp4wBQMb%2FacaDwCIBiOhwSODqBl7lErPRaT6lqId41hFZDdFqpWRIbq1%2F4anW4CyN8DqYKRVa2jKxMsTjONtvJtt8gfiba%2BuxAD6aqaCrKgHKSjAfBgrRIWHrG45nbjn2KDT%2FeRRJKIEnnOXV4i4noSvA0L21S9rDN702Y0zH4l2bj0HWXnLGy1QrvWRzOki%2Fg6O1G%2FN9urbPDHxAdLx3pFroBaXRYfn8%2B3yg5AxeDCDVwcB34LuNus%2BDVdUuFZs5z9zfSmugdldPTM2jFJQKOic80vDLP%2FISe0cuqRu322fR0tWT39Ow3ZswqnQICH8mpODgPwCFdj%2F%2FMIT83MAGOqUBVyi4unXmvM0NV%2FuB5BymfaZOiWlYz1Dyf5kQCoKLD7fAh%2BqcShhWScCO6CI5EYdNpffT0yHuhSkmAdfujog0YLeU4SarSswsiIzfRUynCXEOXu4fq7jZOejwk4EnbIDLh67WuHmxoLgToHfaiALnixNjoLj7lluRHRuV6i7IiKJG2eSNGWEF9w%2Bepj6f47agtw0XuG49X0pmmzVA2%2B5dl168RuKn&X-Amz-Signature=dced42a00741854112c1192e87cf70f3a19a1d0e57b31d4fd789906819541181&X-Amz-SignedHeaders=host&x-id=GetObject)

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
