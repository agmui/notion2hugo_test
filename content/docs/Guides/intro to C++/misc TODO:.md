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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475S3XQV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPPI1ajIVb0130gRfVZEtcg0fV5oGm%2BHObuJkKLOolgAiEA1YT6DED%2FqPAOPrjCYyQgMPcdPB3XxYIhTQzyf5wTFNsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWJa9dgB4rjSjJN5CrcA010VNmiktsIfPekG9X%2Fax55SwPe2KVyTG6MLpqYUrhQrjLeSGsnSMEp3sDFV9JnJS7lGHiGBAWYfmEEthWCuJGdroE8s2Nf11lBvgtLLTt7EPLRpbn94YVtDYOpheDSm8vIEQtEiBr3gniyL6XlS2HiFuL%2Ffvz3edsBYG%2B1XbpgBv6vJgCIc5%2BMqf%2F%2FlE7TemaOIjqxPtw25pSkKUDIpkHZ8VHaBYLg4JxHXSYV0Ptc09vWSNnqJKeMHH7QF46Xto2Jyz6AavWrYnB2L3jz3syn4FPfHdWs5%2FL0xovP%2Fwr%2Brb3z7itFEaMomR9nBW%2FiBHPCwhXJGPlqR17BELi9kidVTiMmqQ9sTtRU09rYzFOqPLsVakAsD0mhIHcHGyFdz4vxg8uJtZ4c1KbcEL7T6OU95SormFVLRA6KgLPQlmt6yh7aerBZv%2BFUqzmoF8KgUuHCEY5C2U3f5mI0HzFM%2BuI8Q99JC3W5x0ryh%2F60kBcKJHkhYPBTpXpJLSnS2wqIbG1%2F0rYBGi1TzOlxkw6XP74CPAqmzxFYRqxzf7J%2FWnmXW1qkDoG7%2FDnU%2BcDVeez3On%2BMVvsv6km4DJt%2FvPCjB2Q1Y72c83UigBCVqgu%2FwLvPPt%2BZ2l16PNZsw0bBMKvGm74GOqUBQyX39wrHjJa%2BjuExHM0HjP6RZ%2BhFrzhbgWyPvHm0m2z3lP8boyUuLOaUZ70eSGHS13oZvCFJN2M0lrSj480Wxaaq2pAX%2FlzaH0cVeDgLmJ6LtKDILryTlZDXbx6n0LI2ztwTQ%2ByJiphTUghuQUo2klx5zrYzUIiucpxUEBLFQ9beV8%2BFJAGcKa89%2BQAk1%2BsAE9ZlCV3u3emdvEh8CgYOIp3efSiZ&X-Amz-Signature=b951a95d5ca10bceadf99a66092585217dd2c4d0d581de664f82627185354d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475S3XQV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPPI1ajIVb0130gRfVZEtcg0fV5oGm%2BHObuJkKLOolgAiEA1YT6DED%2FqPAOPrjCYyQgMPcdPB3XxYIhTQzyf5wTFNsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWJa9dgB4rjSjJN5CrcA010VNmiktsIfPekG9X%2Fax55SwPe2KVyTG6MLpqYUrhQrjLeSGsnSMEp3sDFV9JnJS7lGHiGBAWYfmEEthWCuJGdroE8s2Nf11lBvgtLLTt7EPLRpbn94YVtDYOpheDSm8vIEQtEiBr3gniyL6XlS2HiFuL%2Ffvz3edsBYG%2B1XbpgBv6vJgCIc5%2BMqf%2F%2FlE7TemaOIjqxPtw25pSkKUDIpkHZ8VHaBYLg4JxHXSYV0Ptc09vWSNnqJKeMHH7QF46Xto2Jyz6AavWrYnB2L3jz3syn4FPfHdWs5%2FL0xovP%2Fwr%2Brb3z7itFEaMomR9nBW%2FiBHPCwhXJGPlqR17BELi9kidVTiMmqQ9sTtRU09rYzFOqPLsVakAsD0mhIHcHGyFdz4vxg8uJtZ4c1KbcEL7T6OU95SormFVLRA6KgLPQlmt6yh7aerBZv%2BFUqzmoF8KgUuHCEY5C2U3f5mI0HzFM%2BuI8Q99JC3W5x0ryh%2F60kBcKJHkhYPBTpXpJLSnS2wqIbG1%2F0rYBGi1TzOlxkw6XP74CPAqmzxFYRqxzf7J%2FWnmXW1qkDoG7%2FDnU%2BcDVeez3On%2BMVvsv6km4DJt%2FvPCjB2Q1Y72c83UigBCVqgu%2FwLvPPt%2BZ2l16PNZsw0bBMKvGm74GOqUBQyX39wrHjJa%2BjuExHM0HjP6RZ%2BhFrzhbgWyPvHm0m2z3lP8boyUuLOaUZ70eSGHS13oZvCFJN2M0lrSj480Wxaaq2pAX%2FlzaH0cVeDgLmJ6LtKDILryTlZDXbx6n0LI2ztwTQ%2ByJiphTUghuQUo2klx5zrYzUIiucpxUEBLFQ9beV8%2BFJAGcKa89%2BQAk1%2BsAE9ZlCV3u3emdvEh8CgYOIp3efSiZ&X-Amz-Signature=6aefc5a22f7de185116754c15ce474f5038fbb17e206fc37b0fd0239d2afee2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
