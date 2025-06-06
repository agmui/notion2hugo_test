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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVO22WZV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHH6tZGbxZneAnknHQVLkGViryeWNqTONq5DNmLLdHBbAiEArJq%2F76%2B7VyRhTXkznyhedllDr181gsxhdfQox5zs8IEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBkZ99jNtJPCcwZpYyrcAxpb4XiV4L1jZSTx24Nx7CB%2BQxjCHuPqoXFuynCI4UrVdhnkHCnYOtR4Pyrv%2FlT0QPdnbWkKYX8JfMmz2V8vRrO90kMRVE9fLQTNVNFqknMMkLp3KQGyqtPdTE9JRh9FeJlINR178mP%2Bvt18PU9QNQJJiGH6km4fbRB0oG%2BP%2BDdwUDSPMP%2FLxKT1dAVNlcNMa5wjpcrx%2B6zryC2OB%2FnUa0TjwZBYyE%2BknKzBQNZH4FrAO94RZOO43N%2BEQprJJh9QiGjwTn0JV2rySqLBQUJwy01Tow8xUP%2Fb7GSNm3%2F6VJnQT9PsfALbSPDhT0HdXfgyDVOGkhyJTrVpLyJE0i%2Bd1TydR0QBYNUIO%2FwOqzKTbr1PDoBP7%2BmpGjtaFd1lqvhv6adSetewSP0nnURScV%2FAbpBW9ptCd8VE3OeanBeveT8p0wJq9cNgizHidFElXHRQPAlMrpGDa4K5SKPJSVTFrbFQHYP60Q1xNWfFIN2hWAj3P3COmSe%2BLGnlKwMj8PJaLfXHujRquB63tXE9hCI2ljB0C1qIEuDZUFcfkWW9Z4wm%2FA2r6v339xczOU32b1%2FhAj5aGlKzBMOZRvWv9bmOtYZlolq7k2qWO2kaaLwSKO4bW8BHMF0GRKv24f5gMK73iMIGOqUBabGL5c8nxzEBt4o4ooMOK69OjrFQPe1ec0zv9t3WqB2VqsGnNuugnid36NLsWk%2FPdeu9ZEX5%2FF0mZaQAmv1nG7TrzGKdCNIP2OFnNVupgx%2FzjwQgYBf4VcLiBDWKnUDiX%2BZ14HWUtCQVEOuThkbmU31dqPRtL9mJXh2I6m3xjitDtHxo7bA3zs64vndwgt6Eq7eKPJcaYa8IWlod3NbMk2GdywrB&X-Amz-Signature=c71ccf6e6832952a8d15930b25316555bf75dc1f4a3505d850118862975e7306&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVO22WZV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHH6tZGbxZneAnknHQVLkGViryeWNqTONq5DNmLLdHBbAiEArJq%2F76%2B7VyRhTXkznyhedllDr181gsxhdfQox5zs8IEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBkZ99jNtJPCcwZpYyrcAxpb4XiV4L1jZSTx24Nx7CB%2BQxjCHuPqoXFuynCI4UrVdhnkHCnYOtR4Pyrv%2FlT0QPdnbWkKYX8JfMmz2V8vRrO90kMRVE9fLQTNVNFqknMMkLp3KQGyqtPdTE9JRh9FeJlINR178mP%2Bvt18PU9QNQJJiGH6km4fbRB0oG%2BP%2BDdwUDSPMP%2FLxKT1dAVNlcNMa5wjpcrx%2B6zryC2OB%2FnUa0TjwZBYyE%2BknKzBQNZH4FrAO94RZOO43N%2BEQprJJh9QiGjwTn0JV2rySqLBQUJwy01Tow8xUP%2Fb7GSNm3%2F6VJnQT9PsfALbSPDhT0HdXfgyDVOGkhyJTrVpLyJE0i%2Bd1TydR0QBYNUIO%2FwOqzKTbr1PDoBP7%2BmpGjtaFd1lqvhv6adSetewSP0nnURScV%2FAbpBW9ptCd8VE3OeanBeveT8p0wJq9cNgizHidFElXHRQPAlMrpGDa4K5SKPJSVTFrbFQHYP60Q1xNWfFIN2hWAj3P3COmSe%2BLGnlKwMj8PJaLfXHujRquB63tXE9hCI2ljB0C1qIEuDZUFcfkWW9Z4wm%2FA2r6v339xczOU32b1%2FhAj5aGlKzBMOZRvWv9bmOtYZlolq7k2qWO2kaaLwSKO4bW8BHMF0GRKv24f5gMK73iMIGOqUBabGL5c8nxzEBt4o4ooMOK69OjrFQPe1ec0zv9t3WqB2VqsGnNuugnid36NLsWk%2FPdeu9ZEX5%2FF0mZaQAmv1nG7TrzGKdCNIP2OFnNVupgx%2FzjwQgYBf4VcLiBDWKnUDiX%2BZ14HWUtCQVEOuThkbmU31dqPRtL9mJXh2I6m3xjitDtHxo7bA3zs64vndwgt6Eq7eKPJcaYa8IWlod3NbMk2GdywrB&X-Amz-Signature=10aa5923d1d73696e77df59dd34eff23167a57376bc06ff9b9b77bb98a6768bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
