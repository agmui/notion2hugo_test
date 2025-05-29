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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAAM7F6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6p2EPxCT4ZDIHwSdadakui%2BHypV7%2FLH9zxswwn6A1iAiEA%2FpqnGys8ETbeszFR4mzYsYloWtYxDuHyqEHJ3QuESRoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiLBOWSg6zln5MF%2FyrcA%2BActsr3eorpqnfIwosIkoemcUx5tZd2vAzA6Th4FE6GMptjJh8pLtJlK3rMSfm5Y36SXRB5M90kawtz%2BDMd4wmsOLBvVvjURtB6QFecalyWB1yFaCjA3Dag51Da29M3eChW877UKrq2c1zy6V0PN4M2kqAXOpqNuG%2FeiRHQnGqmFBETsyldDKGDnLP8Kzhpmn8USTgf9rfPMvwBHjNsCKw%2BMp1mfvt0EP1Bs31%2FH8GiKZQTza5TEvbPFqQxBIlmLjRfhPZlwzExc8FNyXK4Q3FVJ7%2BKR7LpKmpOV47WFI8%2F%2FQs5sLJxOn54wvGDZSA58g5iJ5HN95tZj2jycgJHt6fYrCwKolA%2FuBRP8eMyOOKgUKSLNbZnIyzdNDmCbn5GV2hZaK0KtRx%2BQIVLnFtXX%2BmJIIn56QWR3Bfj75G6JXz05xM8jUMNlga7wfQEm6s0ODAs2sJ86W%2B6U0faVIfQrUWIM5FeohZpALHmWetIFv%2BB52X02I1g1Bbxc%2Fuhi7z3OjPympQIntfbBprf7xZI2mKOpnd7eR3kGSBd19n9k1DTqB3QqUwF8jquSfaZVJ63UktjvXLcgkB6fF4%2B9mtAaEASdRq4CDoaP968dFqKGq93pVKJ1MJ6gXDgMNa%2BMKra38EGOqUBOcsW7pkMyadHFrkOh4%2FBlqJIE%2BXMM6GXXWhg4MQBoaZIjsOqcSaszjSGn9HR2g9q8bs324PX0KVICUrp2BBS6RhQ7NzfAFHaAARrM93wT%2FPqbzEjSTn%2FotcPTDX8P0a8TJIEGAWYs%2BGLsttUk%2BkKjQv5RCdB%2BDr2jbL2728uxJJ%2B%2B9Fu%2BM%2FDnlHwNRGl1lL%2BFfw3ctzLPpw%2FhGoSNbA5sU9GS0N7&X-Amz-Signature=504dc4e33a8b072ffab16a25fa35b00174dc2292301e85e9bf5f23b49437730e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAAM7F6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6p2EPxCT4ZDIHwSdadakui%2BHypV7%2FLH9zxswwn6A1iAiEA%2FpqnGys8ETbeszFR4mzYsYloWtYxDuHyqEHJ3QuESRoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiLBOWSg6zln5MF%2FyrcA%2BActsr3eorpqnfIwosIkoemcUx5tZd2vAzA6Th4FE6GMptjJh8pLtJlK3rMSfm5Y36SXRB5M90kawtz%2BDMd4wmsOLBvVvjURtB6QFecalyWB1yFaCjA3Dag51Da29M3eChW877UKrq2c1zy6V0PN4M2kqAXOpqNuG%2FeiRHQnGqmFBETsyldDKGDnLP8Kzhpmn8USTgf9rfPMvwBHjNsCKw%2BMp1mfvt0EP1Bs31%2FH8GiKZQTza5TEvbPFqQxBIlmLjRfhPZlwzExc8FNyXK4Q3FVJ7%2BKR7LpKmpOV47WFI8%2F%2FQs5sLJxOn54wvGDZSA58g5iJ5HN95tZj2jycgJHt6fYrCwKolA%2FuBRP8eMyOOKgUKSLNbZnIyzdNDmCbn5GV2hZaK0KtRx%2BQIVLnFtXX%2BmJIIn56QWR3Bfj75G6JXz05xM8jUMNlga7wfQEm6s0ODAs2sJ86W%2B6U0faVIfQrUWIM5FeohZpALHmWetIFv%2BB52X02I1g1Bbxc%2Fuhi7z3OjPympQIntfbBprf7xZI2mKOpnd7eR3kGSBd19n9k1DTqB3QqUwF8jquSfaZVJ63UktjvXLcgkB6fF4%2B9mtAaEASdRq4CDoaP968dFqKGq93pVKJ1MJ6gXDgMNa%2BMKra38EGOqUBOcsW7pkMyadHFrkOh4%2FBlqJIE%2BXMM6GXXWhg4MQBoaZIjsOqcSaszjSGn9HR2g9q8bs324PX0KVICUrp2BBS6RhQ7NzfAFHaAARrM93wT%2FPqbzEjSTn%2FotcPTDX8P0a8TJIEGAWYs%2BGLsttUk%2BkKjQv5RCdB%2BDr2jbL2728uxJJ%2B%2B9Fu%2BM%2FDnlHwNRGl1lL%2BFfw3ctzLPpw%2FhGoSNbA5sU9GS0N7&X-Amz-Signature=a001869e186e032432c4cc4651b436f140a369f45d1fd9f09ded4637bf30d93b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
