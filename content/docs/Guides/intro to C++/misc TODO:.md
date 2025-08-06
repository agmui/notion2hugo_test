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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF2KZIV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGoUfEhYprTjux1M1%2Fwb8DYKSdeWEWegT28b0qaYK3ZXAiAY%2FfcjmD%2BH%2F7NbcxugmjOwsOybGI8CdCtzM7RYJcVqWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMmmqV4QM%2FWolKc16fKtwDMB0z12QqMCC%2BcWGHlNIcKu9KLuusVYCiIdcp3fQSgkEMlQbtZCBJ0YfsWaq7qsiUcIRPf5Zmnddlez3ZYLGONTmja5Je2mJpMMXWZBs541qrLjofdrhYx3wmI8181QQj8WYUVH76WaWIv%2FGmBJU193yrv0djeOUJW%2FFcqKBhCnMOXEg1ddwDm7brVeij4m%2FzkiSPx9iCFqDzc3UBlwonnMoN9JT9vGvMRQJm5ULtNLuRyKR4sSlTbmj36iUX%2FipAGvb6ReJspuJcaApVTXQLMJnjMdPGChomC9JGSAwsnsmWur%2BnLvvurdi8BsBumqiqDjwo%2FcBtgxtILcJXnxssVCDc9GUHz5VFL9QpVoxwGL8Xrr%2BYf3%2FnzumLpbB%2F9GtKfY0p1I0vF7aZkZkmBxE%2FwaXv%2BZCbO4UnS0vopKVZIx6hAlmdEciPR%2B%2Fa2n%2FgIhE3om1QixDHXti0b1VBA69l2B49bbbG9qwoiNvzx7I8hxSJiOzB%2F%2Fn4nTTzdvJyo9pj%2FaFHY0c1Y089imMWRnbQzTmxK7uydM2nirMDlKx4f0oDscSUz39qyqUacOr7s1VjfrIhdZin3dod44SMgg8cxgLLTz809BeWL212c0NH5z%2B2JuXvrJDsS%2FZSySgw6%2FrNxAY6pgH7itZRuXEapL1K1T4jkOtJBBmW%2FQFRAix73WlpHxmGXc3Vu2TjZBEzf5ZwiHPtZj9IVrTw0ipnCprMopnZf2p00X7FHIn31hSswJ%2FQWoTCmjhMQIanWlk63cgf9RJUy4IFmMJ0X%2BB9P8BCfGQUMAr8Jj86Uov9F%2BnEck3Mfi%2B1DNPGmoCvXyyP1FDlpE40wBCgc9bGi22wSRpO2LgUvEE3x0tD90f0&X-Amz-Signature=f37f73f3ae04ef52d1bf321871889a35c1331bdb57dc72bb2735c7adfebfc2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF2KZIV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGoUfEhYprTjux1M1%2Fwb8DYKSdeWEWegT28b0qaYK3ZXAiAY%2FfcjmD%2BH%2F7NbcxugmjOwsOybGI8CdCtzM7RYJcVqWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMmmqV4QM%2FWolKc16fKtwDMB0z12QqMCC%2BcWGHlNIcKu9KLuusVYCiIdcp3fQSgkEMlQbtZCBJ0YfsWaq7qsiUcIRPf5Zmnddlez3ZYLGONTmja5Je2mJpMMXWZBs541qrLjofdrhYx3wmI8181QQj8WYUVH76WaWIv%2FGmBJU193yrv0djeOUJW%2FFcqKBhCnMOXEg1ddwDm7brVeij4m%2FzkiSPx9iCFqDzc3UBlwonnMoN9JT9vGvMRQJm5ULtNLuRyKR4sSlTbmj36iUX%2FipAGvb6ReJspuJcaApVTXQLMJnjMdPGChomC9JGSAwsnsmWur%2BnLvvurdi8BsBumqiqDjwo%2FcBtgxtILcJXnxssVCDc9GUHz5VFL9QpVoxwGL8Xrr%2BYf3%2FnzumLpbB%2F9GtKfY0p1I0vF7aZkZkmBxE%2FwaXv%2BZCbO4UnS0vopKVZIx6hAlmdEciPR%2B%2Fa2n%2FgIhE3om1QixDHXti0b1VBA69l2B49bbbG9qwoiNvzx7I8hxSJiOzB%2F%2Fn4nTTzdvJyo9pj%2FaFHY0c1Y089imMWRnbQzTmxK7uydM2nirMDlKx4f0oDscSUz39qyqUacOr7s1VjfrIhdZin3dod44SMgg8cxgLLTz809BeWL212c0NH5z%2B2JuXvrJDsS%2FZSySgw6%2FrNxAY6pgH7itZRuXEapL1K1T4jkOtJBBmW%2FQFRAix73WlpHxmGXc3Vu2TjZBEzf5ZwiHPtZj9IVrTw0ipnCprMopnZf2p00X7FHIn31hSswJ%2FQWoTCmjhMQIanWlk63cgf9RJUy4IFmMJ0X%2BB9P8BCfGQUMAr8Jj86Uov9F%2BnEck3Mfi%2B1DNPGmoCvXyyP1FDlpE40wBCgc9bGi22wSRpO2LgUvEE3x0tD90f0&X-Amz-Signature=f08788de735eea01328a3dd37b56f8db23a60d8df49219f0956bb5a5ba89668d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
