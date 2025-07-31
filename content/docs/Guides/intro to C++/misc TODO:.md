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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DRVGL5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuw7zJrinjdDO6XnarWhA%2F6MVvF8AWvbz63iGi6EtLTgIgVyjqT31xkPmbO1Mdcev8DxtDYvZ95RQEtJVheA1SxOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Q6PmcXX0vpUq3RyrcA9MKb2%2FIBEe0y8AqOAjV9iUnOCSlbn4XAw0R0cIZnE7xBW2H0%2BQ5BUJ8kEgwL6zAPqIGKKT7bmca1aWp1J29eIhFOF6c9HFwdR6DR0aBHY8rNsJRChTWv52AnKTeghLbHvEYKKfBtHpzDgY2ZmftfIKfM3QXj34BA65W68nJOI3jqoIiBxJXmv60naoUzxK2SjA0PSv%2B0oLdafF0kZvkHoAliSGAdqX26GkOn7Lpb8rdNyamuKqdGlJLCqjxkiRZ6olYd88anytINA8xBOJo3ieEMjneB9w2Q%2BmtqMHXf5vD9ILs7LNNB6ftRsMGkIwX6L%2B%2BkmFYut3LFycuuIL%2BD1Kgv%2Bz21SmAj%2Bo4uwKOkHnfWL612JIWhVmkLws9COiVzNfn9BFD%2BY2HwmaaPodsENeLrDCObuuGyEOnfU3KZ1CKdmtpOl5z4ALAgvWPlJy4HH3SpxoAM1t68k%2BiMnbLAuAJi8HgvCE3Hx%2Fp0JR3qaB2K0HpqxXtIQngWSu2Wq2Bnz440ml6pfKLU0uWp7n76%2BSAeGEorVInGMmfEtWggVdpKpHv2DYD0%2BtILhzufarRQtKe2JwSbyaH%2Fw6JCPByTwO5ujtbKl2CACX99tu1PYzu0VaZauPgNLWk7lfkMKuRrsQGOqUBnuZrTVEBs21qZ8yIXYidPVC8nwBZHq4CtZOSzLZutQPblj3sPpr9nomrVvXPoqw6HOrbceT3nJKC%2B9Zzsq0PRO9SJ7OioNspl9eMqkFPsraYSUj0RoVw9sIRTjHLwOxIg9luBsEOGsrKU4msy1Zg8axyZY3mjxkCPqBS4bj3ud%2FzJQnu%2BJeK1gioAO3p%2BM5e%2FEELLBHJz%2BlCpK%2FgPzbDOIMVnzdH&X-Amz-Signature=973555be1c937dba1727837b114717a74aca40ea37c1faa00f384754e406decc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DRVGL5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuw7zJrinjdDO6XnarWhA%2F6MVvF8AWvbz63iGi6EtLTgIgVyjqT31xkPmbO1Mdcev8DxtDYvZ95RQEtJVheA1SxOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Q6PmcXX0vpUq3RyrcA9MKb2%2FIBEe0y8AqOAjV9iUnOCSlbn4XAw0R0cIZnE7xBW2H0%2BQ5BUJ8kEgwL6zAPqIGKKT7bmca1aWp1J29eIhFOF6c9HFwdR6DR0aBHY8rNsJRChTWv52AnKTeghLbHvEYKKfBtHpzDgY2ZmftfIKfM3QXj34BA65W68nJOI3jqoIiBxJXmv60naoUzxK2SjA0PSv%2B0oLdafF0kZvkHoAliSGAdqX26GkOn7Lpb8rdNyamuKqdGlJLCqjxkiRZ6olYd88anytINA8xBOJo3ieEMjneB9w2Q%2BmtqMHXf5vD9ILs7LNNB6ftRsMGkIwX6L%2B%2BkmFYut3LFycuuIL%2BD1Kgv%2Bz21SmAj%2Bo4uwKOkHnfWL612JIWhVmkLws9COiVzNfn9BFD%2BY2HwmaaPodsENeLrDCObuuGyEOnfU3KZ1CKdmtpOl5z4ALAgvWPlJy4HH3SpxoAM1t68k%2BiMnbLAuAJi8HgvCE3Hx%2Fp0JR3qaB2K0HpqxXtIQngWSu2Wq2Bnz440ml6pfKLU0uWp7n76%2BSAeGEorVInGMmfEtWggVdpKpHv2DYD0%2BtILhzufarRQtKe2JwSbyaH%2Fw6JCPByTwO5ujtbKl2CACX99tu1PYzu0VaZauPgNLWk7lfkMKuRrsQGOqUBnuZrTVEBs21qZ8yIXYidPVC8nwBZHq4CtZOSzLZutQPblj3sPpr9nomrVvXPoqw6HOrbceT3nJKC%2B9Zzsq0PRO9SJ7OioNspl9eMqkFPsraYSUj0RoVw9sIRTjHLwOxIg9luBsEOGsrKU4msy1Zg8axyZY3mjxkCPqBS4bj3ud%2FzJQnu%2BJeK1gioAO3p%2BM5e%2FEELLBHJz%2BlCpK%2FgPzbDOIMVnzdH&X-Amz-Signature=00ccba4df73c79840727a9288fd8eb263620abfec5a99e5a70a594dbc9029827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
