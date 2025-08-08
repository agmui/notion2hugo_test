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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W52JXPT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDfAFxifnekECsT1SGGmydn%2BDgsAwWYX2O8GDFmQ5UH7gIgB%2BlfgxKtf5l3t1LLnSWfe5Z2K7dx698UWWpVTQ6FgbUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUqfMY%2FfQ9udotMCSrcA4N1zFgcWKymgkNECuD7r%2Fc3oKI8oekHEDs6uvzClWpR6MpvEBAESsW7ZI0DIQiYz1bPqU7%2B1c3GFRJZSS5%2B49fL706d3rWop7%2Fi3YI5dICC4S4Yw%2FzfzPGAs5WgHWxeWHolDwc1viNtHuxPcJ7lSPYLFtmP5OePbuNoQULGTQQflH2IIecnxNjkUs4mHoTvSpDO4jXJId0Qn7Y7VINsLvGw%2FWne9fOWmYJqCLzCMJRWwGIdj%2FMvivedskVJ4CxhTwreCBZAuAGPtqRz7um6efIElhJtZJ97ZGOJwt5Wvi7ZS5AQpIZH2wG8gNxhiN0Bxvr2X15dNajAP9whpwWwiXpj%2F4nXnlvNG%2FlkpXL7UTrHdVjbEYAIxEn1PrXl1pW00Rsk4aMUddu7C7xMoomuhg1Jk2JIRJ71BLWJJgmfKkzjRQ6J2z8ZgVBbomdh3vJD%2B%2Be1EVCyR5c9HW4vWeWEZXjfXP9Wywd%2FbwAExAAVkx5aomr95quqwycEmfrEggQb4r%2Fr0FGTENQEmAeYCfiTfEf%2FKTDU3ojPzJxEq84XDmW7ARXP58HvRdnyHybPnFQxbsFM6AAIgUqEhGs%2Fzv%2BJl1U37lIBZF9CzKBCpChtLkE3UfqSvV4Tzy7VabQUMOif1sQGOqUB9HUpVvb4FAraHBtCFrthYTWJbZM8oVwHLmibphNiqynSKheyhFixZaXT2w0ILuxvfhyNxkbTVCuqGEmhbbb5s8rU72lxoQQplgQEQPBk1xjLk1dkJ8wkTQy6vInYMJ%2B8RRt6KalQPW3YglWf7uh5HF1zLa5HIu9sJx9SSJAuMmUdwz5qDPg0iwNuSDRlEQ%2F4ohF3dm8CuQo0BlL12wZtDC2wD02v&X-Amz-Signature=2afb7963302c8c3cc7b25446f4d383d2320bd976c9c139e659814edbe17fac28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W52JXPT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDfAFxifnekECsT1SGGmydn%2BDgsAwWYX2O8GDFmQ5UH7gIgB%2BlfgxKtf5l3t1LLnSWfe5Z2K7dx698UWWpVTQ6FgbUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUqfMY%2FfQ9udotMCSrcA4N1zFgcWKymgkNECuD7r%2Fc3oKI8oekHEDs6uvzClWpR6MpvEBAESsW7ZI0DIQiYz1bPqU7%2B1c3GFRJZSS5%2B49fL706d3rWop7%2Fi3YI5dICC4S4Yw%2FzfzPGAs5WgHWxeWHolDwc1viNtHuxPcJ7lSPYLFtmP5OePbuNoQULGTQQflH2IIecnxNjkUs4mHoTvSpDO4jXJId0Qn7Y7VINsLvGw%2FWne9fOWmYJqCLzCMJRWwGIdj%2FMvivedskVJ4CxhTwreCBZAuAGPtqRz7um6efIElhJtZJ97ZGOJwt5Wvi7ZS5AQpIZH2wG8gNxhiN0Bxvr2X15dNajAP9whpwWwiXpj%2F4nXnlvNG%2FlkpXL7UTrHdVjbEYAIxEn1PrXl1pW00Rsk4aMUddu7C7xMoomuhg1Jk2JIRJ71BLWJJgmfKkzjRQ6J2z8ZgVBbomdh3vJD%2B%2Be1EVCyR5c9HW4vWeWEZXjfXP9Wywd%2FbwAExAAVkx5aomr95quqwycEmfrEggQb4r%2Fr0FGTENQEmAeYCfiTfEf%2FKTDU3ojPzJxEq84XDmW7ARXP58HvRdnyHybPnFQxbsFM6AAIgUqEhGs%2Fzv%2BJl1U37lIBZF9CzKBCpChtLkE3UfqSvV4Tzy7VabQUMOif1sQGOqUB9HUpVvb4FAraHBtCFrthYTWJbZM8oVwHLmibphNiqynSKheyhFixZaXT2w0ILuxvfhyNxkbTVCuqGEmhbbb5s8rU72lxoQQplgQEQPBk1xjLk1dkJ8wkTQy6vInYMJ%2B8RRt6KalQPW3YglWf7uh5HF1zLa5HIu9sJx9SSJAuMmUdwz5qDPg0iwNuSDRlEQ%2F4ohF3dm8CuQo0BlL12wZtDC2wD02v&X-Amz-Signature=88b2817e39ef2ae08eb2835f43ded8869edc194e43771d27b451c9f0a1aa6b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
