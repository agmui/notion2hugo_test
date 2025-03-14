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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKZ7NNB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0Y%2BIbIMYVuATAk3PAPfPSlAuL1HSS7IFeLkrzcdLYwAiBgUWgtt2ndd0AZGmlw4oSwXv8WuAVZWFK3E8z3KnOEhSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcNNpeRYbBaTgcpqGKtwDRqESptH5iqNK1gBMtiIT%2F3QKIan53lUvezzMujXe%2B5tTziwZ1ZYDpIdDDhWEBKY4sUz3v8K%2FJhGhitq4YM7TmDAXG4hCxQJK2XZlYpyK%2FmQXht2WdhTYzZ5%2B41oAB3C487z4V9aYWPWJD1FVG1lSuWPtRjb8moP2Hhy0IchUJwPAgWlW0kdfvFMwLuEKCMyqNGTDQItdlNa5COY%2FbJ%2F42TmkvTPezcYszTsSH%2FIe0tObDe4F24IsO1pPM0ESgzrcv2NkVZw60W58gzyqpg1%2F7PR4mD44xx8J26VyxMUsCOwAldnEawhoDSdvWKO2vcfgdbNsL9%2FAy4W8CfHgmy0ClsDQjRI%2B3jkv2N1p3pxX6c6bz4%2FL%2FLtiyKeCp0lynLV0WBogcYHe8JDB8B9%2BaiGb9Ymn6cNrsrjPEtC43n%2FMHozN4XZET15jDDTCDDEMbAQ%2BZcyYGYIeIdOAcPC6%2B5HbDwEMcq3UGmxLfR8%2Fz0xcu%2FWdr07ejOVk%2FKeSYmzLCWQpZrIIdLsJg8dif%2FlzNZwAZCHdVF9StbNygxQwqAFf6bGKG215Uw6906svW3%2FJ5eQ7NvBWD4I4s4190M0IcX8FNJ69cA2bO33tl%2BUQcKtQqqvE1fUIFerWBSRjom0wkLnQvgY6pgGXAPo2Q1RqpNS0PqfaF2Ck1iYsq5LsnabsJHSf8bWcME0A4qrhtVZF9rmHS8GkiBAC4j%2FhUGWFyi9C0kjbYQCJM4iwgw2CfKK%2BNSrMS8xLYZUP65SiWiEhyn0drJWJwT9ox7t95Fy53J7b3YPlwDhcmQrwJAOZOiAHqQWxLhLjHfatK8%2BfYTFEBQxDU1g%2FyeiCp%2BVArWLntY5hV9BO2S5NNo47WfXr&X-Amz-Signature=6047dd9d6760dd3d75c456218a0bfb32cacd8d236065717cfeb85db1f0ac106b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKZ7NNB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0Y%2BIbIMYVuATAk3PAPfPSlAuL1HSS7IFeLkrzcdLYwAiBgUWgtt2ndd0AZGmlw4oSwXv8WuAVZWFK3E8z3KnOEhSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcNNpeRYbBaTgcpqGKtwDRqESptH5iqNK1gBMtiIT%2F3QKIan53lUvezzMujXe%2B5tTziwZ1ZYDpIdDDhWEBKY4sUz3v8K%2FJhGhitq4YM7TmDAXG4hCxQJK2XZlYpyK%2FmQXht2WdhTYzZ5%2B41oAB3C487z4V9aYWPWJD1FVG1lSuWPtRjb8moP2Hhy0IchUJwPAgWlW0kdfvFMwLuEKCMyqNGTDQItdlNa5COY%2FbJ%2F42TmkvTPezcYszTsSH%2FIe0tObDe4F24IsO1pPM0ESgzrcv2NkVZw60W58gzyqpg1%2F7PR4mD44xx8J26VyxMUsCOwAldnEawhoDSdvWKO2vcfgdbNsL9%2FAy4W8CfHgmy0ClsDQjRI%2B3jkv2N1p3pxX6c6bz4%2FL%2FLtiyKeCp0lynLV0WBogcYHe8JDB8B9%2BaiGb9Ymn6cNrsrjPEtC43n%2FMHozN4XZET15jDDTCDDEMbAQ%2BZcyYGYIeIdOAcPC6%2B5HbDwEMcq3UGmxLfR8%2Fz0xcu%2FWdr07ejOVk%2FKeSYmzLCWQpZrIIdLsJg8dif%2FlzNZwAZCHdVF9StbNygxQwqAFf6bGKG215Uw6906svW3%2FJ5eQ7NvBWD4I4s4190M0IcX8FNJ69cA2bO33tl%2BUQcKtQqqvE1fUIFerWBSRjom0wkLnQvgY6pgGXAPo2Q1RqpNS0PqfaF2Ck1iYsq5LsnabsJHSf8bWcME0A4qrhtVZF9rmHS8GkiBAC4j%2FhUGWFyi9C0kjbYQCJM4iwgw2CfKK%2BNSrMS8xLYZUP65SiWiEhyn0drJWJwT9ox7t95Fy53J7b3YPlwDhcmQrwJAOZOiAHqQWxLhLjHfatK8%2BfYTFEBQxDU1g%2FyeiCp%2BVArWLntY5hV9BO2S5NNo47WfXr&X-Amz-Signature=d9828186a023f26a149a3a9f504cba25af37eb6a62edc4ce7f0f64c73f8e1680&X-Amz-SignedHeaders=host&x-id=GetObject)

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
