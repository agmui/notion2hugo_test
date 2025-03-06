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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGQL5JJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeoD3mfwTl6krZ%2F8Ctr6ZcCrzL2TJBxswzbbDoZAc3aAiEA3nAD4yNNIQI1hjdLdWvAxOax5PbX%2BeE3mcIEum2czSEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDMsytFIDF%2BXwWmPrircA5uUJBBmiT%2BxRxzIH53SFyV2frgFeZVIaoSVKaX6f84B3VEYpdtqB2trJ%2BnR8%2FL7pCKOMgvdoyJkAHOmIDWPrFPfYx43A%2FNb4841MrUBGXHiPkY57cGWwgVdJl7JvyvNB3Sc434ARB95ow7OVb78OkVfmpN%2FE0BTZxjM391MY9Es9nYy%2BKLCE3OoySBTAJiMmIfLJc5BqFWSGFsBY0d9f%2Bo8rwXrKtuAi14Z3O43gv2wM0jtVXNpGaU4xa1oCyiJXSbQhW6YT2swNBuya3M3HUVQ%2BpJ47cKD8iMVt0q1494eR%2B7k6AU47iCaAdnrr0lQZL6Z%2Fpcgz%2BvbEGP1sMJq3lfhxqadReag8DTnz%2FECdrC89GmQNPmROP6Ie9ngR1Va%2BXP27UHKfM049%2Bnh6wUOH7OuIjq7%2FMIY4cvM6uAJ2M2ecqvCfyoq0ph%2FLBxevI9z%2FIM4EY2JLiV%2FeAvWk3r8lv8K%2BTuGm2RdNV0MvnkA6mGvv7YyjTNESCCPOfJR1Q5a5d9JvXsesoL42MdEB4RiZy33JUJT9ezsBf0wGOAUiGqIzO5mkmeWlTavWK%2BykePQtexA0%2BBDXU%2FSyXtIOZbS%2FU%2FKwSSr%2FDdJ%2Ft3nShMUaLUmDJmeinwZM5CASKkOMOPno74GOqUB4BGx1GR8jKXUmLkAU6y3bVdqmyqXD2nyNcJSmCGak2FHwrvAgdaIP2yRcBS3ik7%2FqpHSo4nYUzhQxc%2Bkcoii4172tdeYk36Z3fWFhRMSVGGJ8Jltqoud80%2F1b2rx8COe7MZBlpFaRKZTCmZZm1Z5yWFV6Q5KSlhFi9%2B1LwGpYKqws8a9asfKkdMlGFB51pkIhGaXW%2Bh2zeh34jEN1KB1CaNEPbKa&X-Amz-Signature=d4553787664217f0957bbed156b790dd62f377b7b1f4ec6f38becb6675cd5c13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGQL5JJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeoD3mfwTl6krZ%2F8Ctr6ZcCrzL2TJBxswzbbDoZAc3aAiEA3nAD4yNNIQI1hjdLdWvAxOax5PbX%2BeE3mcIEum2czSEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDMsytFIDF%2BXwWmPrircA5uUJBBmiT%2BxRxzIH53SFyV2frgFeZVIaoSVKaX6f84B3VEYpdtqB2trJ%2BnR8%2FL7pCKOMgvdoyJkAHOmIDWPrFPfYx43A%2FNb4841MrUBGXHiPkY57cGWwgVdJl7JvyvNB3Sc434ARB95ow7OVb78OkVfmpN%2FE0BTZxjM391MY9Es9nYy%2BKLCE3OoySBTAJiMmIfLJc5BqFWSGFsBY0d9f%2Bo8rwXrKtuAi14Z3O43gv2wM0jtVXNpGaU4xa1oCyiJXSbQhW6YT2swNBuya3M3HUVQ%2BpJ47cKD8iMVt0q1494eR%2B7k6AU47iCaAdnrr0lQZL6Z%2Fpcgz%2BvbEGP1sMJq3lfhxqadReag8DTnz%2FECdrC89GmQNPmROP6Ie9ngR1Va%2BXP27UHKfM049%2Bnh6wUOH7OuIjq7%2FMIY4cvM6uAJ2M2ecqvCfyoq0ph%2FLBxevI9z%2FIM4EY2JLiV%2FeAvWk3r8lv8K%2BTuGm2RdNV0MvnkA6mGvv7YyjTNESCCPOfJR1Q5a5d9JvXsesoL42MdEB4RiZy33JUJT9ezsBf0wGOAUiGqIzO5mkmeWlTavWK%2BykePQtexA0%2BBDXU%2FSyXtIOZbS%2FU%2FKwSSr%2FDdJ%2Ft3nShMUaLUmDJmeinwZM5CASKkOMOPno74GOqUB4BGx1GR8jKXUmLkAU6y3bVdqmyqXD2nyNcJSmCGak2FHwrvAgdaIP2yRcBS3ik7%2FqpHSo4nYUzhQxc%2Bkcoii4172tdeYk36Z3fWFhRMSVGGJ8Jltqoud80%2F1b2rx8COe7MZBlpFaRKZTCmZZm1Z5yWFV6Q5KSlhFi9%2B1LwGpYKqws8a9asfKkdMlGFB51pkIhGaXW%2Bh2zeh34jEN1KB1CaNEPbKa&X-Amz-Signature=411ef76a1f02cfc63e0d341023d02258c3a73138ba4fb9ba2eb96dd2995a8e58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
