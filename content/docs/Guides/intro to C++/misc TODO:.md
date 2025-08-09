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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCF64DS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxGzQ2KyRhJUDIBf%2BvUfOyaRbXuGNOqBiZY%2FRLzeHajgIgcXfI2ebOTVSio7tntwHUO2gbmysYjVpELBZH%2F4IVY6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPj%2B3ha7mnxQHeXMCrcA0hDGyO0ALLw4PoQTFIFBP3IlnXBG4%2FpV%2BbCOWNxnM4bH4SBBIXf6lSF9CD9UvrF%2FYxpCQtogy5BadFhv6vxnrpt2zk4IH6DveXT4KGWh%2FiIeZ9FvgUr3e7hFs6dsIGD%2FHSwhqu7%2FrlMLKBG6nb4eIqiaiTQ1pnD3J4Iiffcn3%2F5zt8hwRUJp2g02KHbTP5Va4sWLU07xtDNRruP%2BU%2Bks667YxFzsjHTOWxMXS8nJirNbc1N5I683lRs7xV4V5kWUCgdpMU4%2FqRLlPQo9zIfEf%2FIBHiFcCbU4QYQbe6r1XwFXGOMWlpnDhVOYF%2BAtK78PG%2FU6gbL4MJ9dq%2BzshLosWP7hWYW0ZeyWs%2FYXQXZkRmNnosX1p9u1AUmakzZH4pvhST9YM7Wghto0BOxsMCHgpa9dkpwgetDzbi%2B%2FdtaGaXRqVrRzpmJCHIym0rzh8LO%2BD%2BAzChWS7HGp3ufHOfJXoHtKVYGW6hYwa7buInZ9ItSEfgJVMz8nksZE9gnAcPr07hhE1p42%2BjSFXlYnU8g74lNEwhHfKJQuKBpn0%2FWNSJrFG%2FVHOfAzezDUdGj3BzPvTjgoXnK0kz0i7dcI%2F2L1xIgYE6Ww11agw0fA44209jNdE4W4lAmWMYfpPmaMOWL38QGOqUB6GqGIlfv6ugwJre9thl7Qsbpi%2B1BlwalD8%2BVaaCBZTIh%2F4OdgQT1Q%2B44mKcVvDWgGg8TT%2BwZ9uPbPJPpYC8v6%2FmVSsXUk587YtYiSKrqt45yCk0z%2BFkk4g85qCnhBpkwnKw8A213zlKqWRgJwfY5dF4m9%2BrIwTxOB%2FwNsnhK6rAhQ5vTTDvt8mlFG6rEDiDoIFnAUPiEsnJwFM7WLan0qb2LpITB&X-Amz-Signature=6f7b67211a6a465a90443fce153857fb4569f50461d40235d53d6e2e63128161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCF64DS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxGzQ2KyRhJUDIBf%2BvUfOyaRbXuGNOqBiZY%2FRLzeHajgIgcXfI2ebOTVSio7tntwHUO2gbmysYjVpELBZH%2F4IVY6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPj%2B3ha7mnxQHeXMCrcA0hDGyO0ALLw4PoQTFIFBP3IlnXBG4%2FpV%2BbCOWNxnM4bH4SBBIXf6lSF9CD9UvrF%2FYxpCQtogy5BadFhv6vxnrpt2zk4IH6DveXT4KGWh%2FiIeZ9FvgUr3e7hFs6dsIGD%2FHSwhqu7%2FrlMLKBG6nb4eIqiaiTQ1pnD3J4Iiffcn3%2F5zt8hwRUJp2g02KHbTP5Va4sWLU07xtDNRruP%2BU%2Bks667YxFzsjHTOWxMXS8nJirNbc1N5I683lRs7xV4V5kWUCgdpMU4%2FqRLlPQo9zIfEf%2FIBHiFcCbU4QYQbe6r1XwFXGOMWlpnDhVOYF%2BAtK78PG%2FU6gbL4MJ9dq%2BzshLosWP7hWYW0ZeyWs%2FYXQXZkRmNnosX1p9u1AUmakzZH4pvhST9YM7Wghto0BOxsMCHgpa9dkpwgetDzbi%2B%2FdtaGaXRqVrRzpmJCHIym0rzh8LO%2BD%2BAzChWS7HGp3ufHOfJXoHtKVYGW6hYwa7buInZ9ItSEfgJVMz8nksZE9gnAcPr07hhE1p42%2BjSFXlYnU8g74lNEwhHfKJQuKBpn0%2FWNSJrFG%2FVHOfAzezDUdGj3BzPvTjgoXnK0kz0i7dcI%2F2L1xIgYE6Ww11agw0fA44209jNdE4W4lAmWMYfpPmaMOWL38QGOqUB6GqGIlfv6ugwJre9thl7Qsbpi%2B1BlwalD8%2BVaaCBZTIh%2F4OdgQT1Q%2B44mKcVvDWgGg8TT%2BwZ9uPbPJPpYC8v6%2FmVSsXUk587YtYiSKrqt45yCk0z%2BFkk4g85qCnhBpkwnKw8A213zlKqWRgJwfY5dF4m9%2BrIwTxOB%2FwNsnhK6rAhQ5vTTDvt8mlFG6rEDiDoIFnAUPiEsnJwFM7WLan0qb2LpITB&X-Amz-Signature=d18c79f8ec7816d3ec7bd6a6c416af93c6ef66a3d1430e45291304206ab361e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
