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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCM7KPTN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg3kEiEpifdi0t0Y1zF1p76jzHa%2B%2BsjM6HTfO9klOqKAiEA50RSxNTQuPoiaHU06%2F4ouH%2BN%2BcneCCkWHn5nZ8W1NLwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOV2PQu7xHoXr%2FmgCrcA5S24w35ZEQ0bIjq2RhtYpqWppkQiPebY%2BeYBW1Am99%2BQWpiYmLdUhH1yztHUKR4CQbrqDsxho8hqwgvvbhtvkxKiq4rEnR6Opyejrf10oZkxlzGLll1h42IS%2FASTgzgxo8l1TFuHgoedqbX%2FwTIGJ8cSwlCdvkIrl0pGgggmKM4howTvQH19H9%2B4hHet3bTyAhFc1XZM5TOU6WtymLPOdEWZ7iJz2di9YB80HbytT8gxZqJuemmQKTjVk%2BSXwP1u91MBvZ3tmkuJVwAtnDCU95VnWArFJnZi%2BvsR6n8UaHBIuqg4uyYP5n2z6g4xuI45gEyvijqBbdRB2R77Mmww7mrqFIKWFAs%2FXf0pXpC50sAxlpmYoc05MhTagfNuc0ap%2FuSS%2Fca0DmDNwzbzHaDcWh%2B9JxjuFCu0A6CGiT%2BSdd1Izq7Pob3Q%2FSYiSbSnm06uCxus5wDypiPvRs%2BND6nuP4nhiVmyeMd9sVSrEf2Tu0pW%2BOM6XrZDU0aZrwp525dXFEoLqhXHDAJU5eB84CTsqp9W%2BAkhPqJS4yHZ5Aq45%2Ftf2QHu7kV0mCatbcNlMc53EM76gy5m0WW4NPSA6GRTYYVQyn2jH9S6CxA6Bage3F1ZXk1ACqyqo1PEdUuMMXf%2FrwGOqUBhq6IGPgkJFgP6W59F6sROSBIG3uut2QhcJ52zsh0NUStpuxVM%2FYrYOSa2Yso%2BFF9h3fhby8m%2BTNwGW03H0DLQqLHVV%2FpLzi2n0jYk%2Bh0NRXzbY4oIPKcYbz6X5NaVE9D3LdCQbVvVXKG%2BAYoB1m4ClAMdCs2p3rrDw1uftM8psRXmuUXDCq9WGfObTCbXV400ehcJOE%2Fpu1ODPCxIAl0HDkw5Akp&X-Amz-Signature=a455b6a0f409b2403267624e4efea8e54ffde1cd6e0c69937cdc0521d8d93634&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCM7KPTN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg3kEiEpifdi0t0Y1zF1p76jzHa%2B%2BsjM6HTfO9klOqKAiEA50RSxNTQuPoiaHU06%2F4ouH%2BN%2BcneCCkWHn5nZ8W1NLwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOV2PQu7xHoXr%2FmgCrcA5S24w35ZEQ0bIjq2RhtYpqWppkQiPebY%2BeYBW1Am99%2BQWpiYmLdUhH1yztHUKR4CQbrqDsxho8hqwgvvbhtvkxKiq4rEnR6Opyejrf10oZkxlzGLll1h42IS%2FASTgzgxo8l1TFuHgoedqbX%2FwTIGJ8cSwlCdvkIrl0pGgggmKM4howTvQH19H9%2B4hHet3bTyAhFc1XZM5TOU6WtymLPOdEWZ7iJz2di9YB80HbytT8gxZqJuemmQKTjVk%2BSXwP1u91MBvZ3tmkuJVwAtnDCU95VnWArFJnZi%2BvsR6n8UaHBIuqg4uyYP5n2z6g4xuI45gEyvijqBbdRB2R77Mmww7mrqFIKWFAs%2FXf0pXpC50sAxlpmYoc05MhTagfNuc0ap%2FuSS%2Fca0DmDNwzbzHaDcWh%2B9JxjuFCu0A6CGiT%2BSdd1Izq7Pob3Q%2FSYiSbSnm06uCxus5wDypiPvRs%2BND6nuP4nhiVmyeMd9sVSrEf2Tu0pW%2BOM6XrZDU0aZrwp525dXFEoLqhXHDAJU5eB84CTsqp9W%2BAkhPqJS4yHZ5Aq45%2Ftf2QHu7kV0mCatbcNlMc53EM76gy5m0WW4NPSA6GRTYYVQyn2jH9S6CxA6Bage3F1ZXk1ACqyqo1PEdUuMMXf%2FrwGOqUBhq6IGPgkJFgP6W59F6sROSBIG3uut2QhcJ52zsh0NUStpuxVM%2FYrYOSa2Yso%2BFF9h3fhby8m%2BTNwGW03H0DLQqLHVV%2FpLzi2n0jYk%2Bh0NRXzbY4oIPKcYbz6X5NaVE9D3LdCQbVvVXKG%2BAYoB1m4ClAMdCs2p3rrDw1uftM8psRXmuUXDCq9WGfObTCbXV400ehcJOE%2Fpu1ODPCxIAl0HDkw5Akp&X-Amz-Signature=96038de68fa9194e6bac35f376c6f0f02913a307d7107572141861759ae1c266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
