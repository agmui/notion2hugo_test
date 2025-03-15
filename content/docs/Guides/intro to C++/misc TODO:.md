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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VDWK4Y%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpoY58dO1XUWSvSaiCxR8UYQLo%2F7Qm%2FZ4Yg807E%2FcHiAiEA4M45i%2FL%2FFaYYqjTBWQG4Ix%2B20DVSWqah%2BY5RgHTe8iAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAT87PRRqJVUYHpTGyrcA5tc2X4eBLlE%2BizieWlfsNNpw06T6QwsZn%2BkVmN7suCdTCZsPjgaju4A9Pj%2BUGifZCfoKuo6E03qJxapAOfLtgMvJBUDNb%2B51w85ox5MJPoUpJO5vZfVS2rq5NOROt4IkIN%2FC6J8ISKq89yr6%2FeksHlr%2BRR243hAhJr0xlegMc4knxRZtv7%2BM%2FmZyGjCrgFgkm5dj7KIiuudkd%2BUhOcRlr%2B%2Fs4NTlen6kbAd%2B6cnRF8QMuzKq3P0W0zlefMCqh8cTcT%2BkQ0oovWkgh9M62pf%2BjeBgi9GeBK4R9bSDyySEgpKY1goGirfCORpb74fUAudLSiW7Kdk8M0%2B0my%2FqgIU6U%2Bh4Wfhy3GhMtkZI75yb08TmwlDYb%2FQGwUpUofp03su47UL8BwR8IH%2F8wsRplkFVsZ4yAQTK8nto4Jg%2F8Zo%2BmaB03yfCbzSqsaUtIDE1F%2FFEtS9YU%2ByNOZvld8m%2B5ihDDk0H47gAVmSWCH96BRmfFiIBkBI3dOYCJfDeZGGoioAfJBnS5bAuYZAr9bn0vwbK20QYln8PmexPCpz47%2BPDmVo5jz5IIV3UyYAo2%2F8tB%2FASuPHB1UNko9SD3EHenDfsHI46VbpoUECAZLQc7byQs2HNtq1RHYH8nLWeW70MO%2Fu1b4GOqUBMA%2F62xxWAh%2FRGs8YluCi7822ZvHPe14PmLkAcfF6AIkuF3GNNvIxsuC8zFOg7oOLsP2Hv%2Fgs4jdbrhI24VNi1a2u0VPAhLq0FLSV5iWVjT9u7e99PCTm7s3gHi0KGCZ0GAWp7JwLg7%2BQp6CXVG%2FEk91CUSl47ejtqnkhc1XKOro%2BCeV37AB%2FJsGvrbBJxOrnZBA3qf65Z%2BFRHhj95GnbY4cosKrm&X-Amz-Signature=dd287850f868f06aae46a1a9b300e023279f42041520f225eedd59c76a8db1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VDWK4Y%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpoY58dO1XUWSvSaiCxR8UYQLo%2F7Qm%2FZ4Yg807E%2FcHiAiEA4M45i%2FL%2FFaYYqjTBWQG4Ix%2B20DVSWqah%2BY5RgHTe8iAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAT87PRRqJVUYHpTGyrcA5tc2X4eBLlE%2BizieWlfsNNpw06T6QwsZn%2BkVmN7suCdTCZsPjgaju4A9Pj%2BUGifZCfoKuo6E03qJxapAOfLtgMvJBUDNb%2B51w85ox5MJPoUpJO5vZfVS2rq5NOROt4IkIN%2FC6J8ISKq89yr6%2FeksHlr%2BRR243hAhJr0xlegMc4knxRZtv7%2BM%2FmZyGjCrgFgkm5dj7KIiuudkd%2BUhOcRlr%2B%2Fs4NTlen6kbAd%2B6cnRF8QMuzKq3P0W0zlefMCqh8cTcT%2BkQ0oovWkgh9M62pf%2BjeBgi9GeBK4R9bSDyySEgpKY1goGirfCORpb74fUAudLSiW7Kdk8M0%2B0my%2FqgIU6U%2Bh4Wfhy3GhMtkZI75yb08TmwlDYb%2FQGwUpUofp03su47UL8BwR8IH%2F8wsRplkFVsZ4yAQTK8nto4Jg%2F8Zo%2BmaB03yfCbzSqsaUtIDE1F%2FFEtS9YU%2ByNOZvld8m%2B5ihDDk0H47gAVmSWCH96BRmfFiIBkBI3dOYCJfDeZGGoioAfJBnS5bAuYZAr9bn0vwbK20QYln8PmexPCpz47%2BPDmVo5jz5IIV3UyYAo2%2F8tB%2FASuPHB1UNko9SD3EHenDfsHI46VbpoUECAZLQc7byQs2HNtq1RHYH8nLWeW70MO%2Fu1b4GOqUBMA%2F62xxWAh%2FRGs8YluCi7822ZvHPe14PmLkAcfF6AIkuF3GNNvIxsuC8zFOg7oOLsP2Hv%2Fgs4jdbrhI24VNi1a2u0VPAhLq0FLSV5iWVjT9u7e99PCTm7s3gHi0KGCZ0GAWp7JwLg7%2BQp6CXVG%2FEk91CUSl47ejtqnkhc1XKOro%2BCeV37AB%2FJsGvrbBJxOrnZBA3qf65Z%2BFRHhj95GnbY4cosKrm&X-Amz-Signature=7ca8db301de5e2c3cf85342bbc588c33ce3fdf05ef1ceeb30dcaf022bfb42344&X-Amz-SignedHeaders=host&x-id=GetObject)

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
