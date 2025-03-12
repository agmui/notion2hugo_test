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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARETF67%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCobeT4MD5SYrQh9GEDzpEZVIC2%2F366AEshZkSMr0bjQAIgUeQAG0umMPTEWZc4V3Jr0BOuquCYh3XiYj0KXQC9B9QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHy0FGcf48ZtZVIqzircA2mI6rgep1m9B5wf7s6O6Otm0q0fXX7DC%2Bru2IUdWVHphtOEixcR%2BqM8ptO2eZoogTkM1jYX%2Fdh0ci2VRKDHq8UFHDSrlQW7LYNhcjqIJZLxOvNfd7pprOjy2OoAW2gi6pDRyjXr5NjzMiHY4deRVQu%2ByJvZQUqvs5S3b7MBEKo6g5Mqq%2BWgymRqr6TRHiKaFJ57t1mAz2D64OYsGeOHK2lqcMP%2B8nfBWpfy4y7XsUe2id3ayegE8hC3EpUTaxfWOGV4j%2FLupdZdgPI1rbHdCCTdzNzXB9YhBXN%2BKlaKM1%2FxESpV721vsdjwWUjG9UE3Ixmbub%2BNv9A2k2RlP9VrEz0%2Fq2dkIVcD3P8KuYATR%2BCxe9YB%2FCrrsbAk1%2BnONnsQlx0ikZbTN8vxn8JvR%2FlI%2FH5HKcrPINbvMQIqz8Nh4%2B0Ka93Ud%2Fz82dhOJc%2FnoU1Uwvxh2M%2B6L1P2CDFWpzjPsZ6iYhpxaG4gfs7luMXDA6ziT6qHQ%2B%2B1xyhkFPpXyTd6M5I6LYJ4xFZqQ3eXREOPGDdIUR3PodzHsHZIlk85yrW3tSUlwXWUsWOad52bPX1guNENOZFwIP3YC65c8CHQqJiieeg1bWMhivX%2Fiy3hyul8mP5piUgi3cosxORrMLXqw74GOqUB7Dt64LwmXz90JUKQgpik8L76S4vNTAaLiLLQhT%2B5MgLGvKOtPs9xYfEsfPyFs0jlBPdh0hAjUkLSQq3Hz%2FEVvdHdjQo1eWuFaDIh5JELTympeTt1r5PX9f%2BMWkwXKHVOQ0nag4m8i0tPtUAMaYyTKwIkwHBioFFQ4C%2FXJ79r937U0SMHCmGGzt53efytS%2FMxWeHbEqXlhEJ1Cb%2F7VucT1EIHM7HY&X-Amz-Signature=657fcb89715605bc23588d09464cf71353dc52a5f6371d6aca21581d4f3f04b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARETF67%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCobeT4MD5SYrQh9GEDzpEZVIC2%2F366AEshZkSMr0bjQAIgUeQAG0umMPTEWZc4V3Jr0BOuquCYh3XiYj0KXQC9B9QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHy0FGcf48ZtZVIqzircA2mI6rgep1m9B5wf7s6O6Otm0q0fXX7DC%2Bru2IUdWVHphtOEixcR%2BqM8ptO2eZoogTkM1jYX%2Fdh0ci2VRKDHq8UFHDSrlQW7LYNhcjqIJZLxOvNfd7pprOjy2OoAW2gi6pDRyjXr5NjzMiHY4deRVQu%2ByJvZQUqvs5S3b7MBEKo6g5Mqq%2BWgymRqr6TRHiKaFJ57t1mAz2D64OYsGeOHK2lqcMP%2B8nfBWpfy4y7XsUe2id3ayegE8hC3EpUTaxfWOGV4j%2FLupdZdgPI1rbHdCCTdzNzXB9YhBXN%2BKlaKM1%2FxESpV721vsdjwWUjG9UE3Ixmbub%2BNv9A2k2RlP9VrEz0%2Fq2dkIVcD3P8KuYATR%2BCxe9YB%2FCrrsbAk1%2BnONnsQlx0ikZbTN8vxn8JvR%2FlI%2FH5HKcrPINbvMQIqz8Nh4%2B0Ka93Ud%2Fz82dhOJc%2FnoU1Uwvxh2M%2B6L1P2CDFWpzjPsZ6iYhpxaG4gfs7luMXDA6ziT6qHQ%2B%2B1xyhkFPpXyTd6M5I6LYJ4xFZqQ3eXREOPGDdIUR3PodzHsHZIlk85yrW3tSUlwXWUsWOad52bPX1guNENOZFwIP3YC65c8CHQqJiieeg1bWMhivX%2Fiy3hyul8mP5piUgi3cosxORrMLXqw74GOqUB7Dt64LwmXz90JUKQgpik8L76S4vNTAaLiLLQhT%2B5MgLGvKOtPs9xYfEsfPyFs0jlBPdh0hAjUkLSQq3Hz%2FEVvdHdjQo1eWuFaDIh5JELTympeTt1r5PX9f%2BMWkwXKHVOQ0nag4m8i0tPtUAMaYyTKwIkwHBioFFQ4C%2FXJ79r937U0SMHCmGGzt53efytS%2FMxWeHbEqXlhEJ1Cb%2F7VucT1EIHM7HY&X-Amz-Signature=d07fb6b43cdc7a18813a0cbbc31147ea922751c5b684d05709927fe65c98dbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
