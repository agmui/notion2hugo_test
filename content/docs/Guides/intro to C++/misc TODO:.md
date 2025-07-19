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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR33AH7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOAoY2m%2FLs2SWu8PnQOxNbH18YbhLigr6FgX5pLOa61gIgPZU5qj7lWzMfMzGiYYO7SwE81H6KHBs6CXzf3GQrDH8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkTziOxPigo8cFlXircAzNV8ztiVmHt2wgN8eymIRodtrR5UMWTYTRpOSYyL2F8dYQfSrM0OOhWv4WmTh3inc6MgUIvMQavJuMRsG1SusMuo0bKHDRPTdLISeCp958nYckDSWH06OMiZzRDwctigtbMmCPv1S3Q0%2B%2FIV31I3mkyq21jqu2Y7s7EqdXNC7DNVwFbFoOqsMWzJH215Biv5kNx5U%2F7XNYrRapxWCrt63cDXgTCOZYZYmm7i2XK1tcA6L4izEzmjUXFa520nqP0sY%2Bf1IhTr4Q%2BvyfY3wvVDcUELVzrmtiYC%2FphHdQEl1Y4Ed9vBgpaSW1atVu%2FaDFmgBrZf%2FolgBrtOF1f4suH5MUYxZxO0c9etcHcr9wW7ZyFK11viIBEwqEe9Vyl%2BY3CotW2tEZX3AXSTNERp3ygB%2FIOlC1uJFnPoj7SXWrwnQCocdJr4sozqJ7cENEnFrb%2BqdKyoXOdDy1bpmEt%2FXP%2FDHX8czZy3uNKO6awkIZCMSlsnJ54g3kOULbonC98127%2Fy4W%2Fhl3LL8GllmZWN%2F0RuaxqSs%2FZwIrmiCpgsQHmqdfW2htQ5f30jbZ5tWK8wKfpXZG8gCm5O8r3IA80FCTydNvg4a9ICHy%2BVfPvT9Jw%2BArAk0U0oNEH9oW7hfClMPm37sMGOqUBt2fI964G1YJL4B36sWRU04iLd6dYvY5dSL54EiYZxMTZ05U3RRSG1HrDiV0BSg6qvirabpX8eQVZRPBofkXPkSEoF8oKgG5ZGKmpOP5329ug5Kj7W83AczGQUWEfe2b6jcGNH7E6kfI6K%2BirZoQ8EmD%2FVUxgkZfs8OOVIXYcwS6VH5ICepH68v2f4yF7paenv%2Bm1uCFUidbw56a2L9L0ntNXgx0g&X-Amz-Signature=b9b44729b09edcb0a4f32d30226eef3cc5b7ae4870c01f91844c8937c7f008e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR33AH7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOAoY2m%2FLs2SWu8PnQOxNbH18YbhLigr6FgX5pLOa61gIgPZU5qj7lWzMfMzGiYYO7SwE81H6KHBs6CXzf3GQrDH8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkTziOxPigo8cFlXircAzNV8ztiVmHt2wgN8eymIRodtrR5UMWTYTRpOSYyL2F8dYQfSrM0OOhWv4WmTh3inc6MgUIvMQavJuMRsG1SusMuo0bKHDRPTdLISeCp958nYckDSWH06OMiZzRDwctigtbMmCPv1S3Q0%2B%2FIV31I3mkyq21jqu2Y7s7EqdXNC7DNVwFbFoOqsMWzJH215Biv5kNx5U%2F7XNYrRapxWCrt63cDXgTCOZYZYmm7i2XK1tcA6L4izEzmjUXFa520nqP0sY%2Bf1IhTr4Q%2BvyfY3wvVDcUELVzrmtiYC%2FphHdQEl1Y4Ed9vBgpaSW1atVu%2FaDFmgBrZf%2FolgBrtOF1f4suH5MUYxZxO0c9etcHcr9wW7ZyFK11viIBEwqEe9Vyl%2BY3CotW2tEZX3AXSTNERp3ygB%2FIOlC1uJFnPoj7SXWrwnQCocdJr4sozqJ7cENEnFrb%2BqdKyoXOdDy1bpmEt%2FXP%2FDHX8czZy3uNKO6awkIZCMSlsnJ54g3kOULbonC98127%2Fy4W%2Fhl3LL8GllmZWN%2F0RuaxqSs%2FZwIrmiCpgsQHmqdfW2htQ5f30jbZ5tWK8wKfpXZG8gCm5O8r3IA80FCTydNvg4a9ICHy%2BVfPvT9Jw%2BArAk0U0oNEH9oW7hfClMPm37sMGOqUBt2fI964G1YJL4B36sWRU04iLd6dYvY5dSL54EiYZxMTZ05U3RRSG1HrDiV0BSg6qvirabpX8eQVZRPBofkXPkSEoF8oKgG5ZGKmpOP5329ug5Kj7W83AczGQUWEfe2b6jcGNH7E6kfI6K%2BirZoQ8EmD%2FVUxgkZfs8OOVIXYcwS6VH5ICepH68v2f4yF7paenv%2Bm1uCFUidbw56a2L9L0ntNXgx0g&X-Amz-Signature=237a4df3cb968fa18d93e863ead1ee4f998079fc7da794fbf87bf0fee2994b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
