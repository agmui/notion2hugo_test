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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GUVGFZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDZmSOh9Ii3zoXpGnaUJ7Wd7mC8IMVWjZV4CFdTrswEnwIgTHw6vxlqicR506WabmWn8XCdu%2BmDIzLQNOoMaUjAuy8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQNO4VlcL4RRJcH4CrcA0qtVtxmCBNPQSPPzJdz70x8VLRSa6cid%2F8a91D3gnfBMiHSapghC5bk%2BvEH5kiTPtyEF4ubNqnmhDLW4XtCBucaZfGELJwJZRL7Y35ZsQOovXUhVaUk3EQdWzddnEHW8W%2F0a0gp9wmmaNoa6C5zN1cZvH6INvhBS2g0UGvowxCQOdluuBbhQDp5vMRII4AtdU94JJZABGV%2FKsbamIzB33za%2Biw%2FTs%2BKMlIKf%2Fxv4WAKIG7ZHnTsssr7opyN1gPZjgP8%2FXWUu2R6EuWpt2wvCofFzOq4YQJ1U8bYTxuZ7cB1F2%2FZc2JDhMjWqgFkGYVzhCRh18ob6yVWqWFnmpTtcYKHvUrSeywOFhQFiP5IiXfKnl1af%2BaPUp49wmHiWQkMHGOgwyiwznelCmJmJVuqboQHG093XoyeSTIjw4Ik5Tmb0ClJXOvtkHJKd37Alww6fuPFvEyO02UK8eaAQkJkrOD8YNeZcuFCznyBdAakpVrGoqgkfhtp9e2jXkVS4oO46Y7XeiSK%2B%2Bz32UCeoMrSxq5GMv%2BaJLCDpOHnck1%2BpbxnU6BrZiUreFxuosIXQ9Yzlstmjc0tJBwDDATnkr3Iuez846LiqWvevEzluLUILlU7QvW%2FRiIZvGyiZJDqMIDo%2BL4GOqUB1B3PC9IUeZO7WqzmPktj82wlpKL7kYtD%2BeH1oCdkNnF%2Be5VLp1saks14w06wdwPHGA5DwVpnaVROU%2FEevhoUPFOJVDuvlHhHOYtYr8u%2Bkx4vTA64H3nhhyiyJ0tFJgYdRT%2BoOBUuoCK4eQIBJ7cKWQlDRt%2Ft%2FWbKqKtj%2BR9h8ijb2ouUAUrYWtwyJc3EoZhNC2Av%2FyaDt1y8cHS2VNAzszidkbIL&X-Amz-Signature=83779094551c9312dbafab4b46fa91bc160ca89a1984bb0c2aabc3c7e4de817e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GUVGFZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDZmSOh9Ii3zoXpGnaUJ7Wd7mC8IMVWjZV4CFdTrswEnwIgTHw6vxlqicR506WabmWn8XCdu%2BmDIzLQNOoMaUjAuy8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQNO4VlcL4RRJcH4CrcA0qtVtxmCBNPQSPPzJdz70x8VLRSa6cid%2F8a91D3gnfBMiHSapghC5bk%2BvEH5kiTPtyEF4ubNqnmhDLW4XtCBucaZfGELJwJZRL7Y35ZsQOovXUhVaUk3EQdWzddnEHW8W%2F0a0gp9wmmaNoa6C5zN1cZvH6INvhBS2g0UGvowxCQOdluuBbhQDp5vMRII4AtdU94JJZABGV%2FKsbamIzB33za%2Biw%2FTs%2BKMlIKf%2Fxv4WAKIG7ZHnTsssr7opyN1gPZjgP8%2FXWUu2R6EuWpt2wvCofFzOq4YQJ1U8bYTxuZ7cB1F2%2FZc2JDhMjWqgFkGYVzhCRh18ob6yVWqWFnmpTtcYKHvUrSeywOFhQFiP5IiXfKnl1af%2BaPUp49wmHiWQkMHGOgwyiwznelCmJmJVuqboQHG093XoyeSTIjw4Ik5Tmb0ClJXOvtkHJKd37Alww6fuPFvEyO02UK8eaAQkJkrOD8YNeZcuFCznyBdAakpVrGoqgkfhtp9e2jXkVS4oO46Y7XeiSK%2B%2Bz32UCeoMrSxq5GMv%2BaJLCDpOHnck1%2BpbxnU6BrZiUreFxuosIXQ9Yzlstmjc0tJBwDDATnkr3Iuez846LiqWvevEzluLUILlU7QvW%2FRiIZvGyiZJDqMIDo%2BL4GOqUB1B3PC9IUeZO7WqzmPktj82wlpKL7kYtD%2BeH1oCdkNnF%2Be5VLp1saks14w06wdwPHGA5DwVpnaVROU%2FEevhoUPFOJVDuvlHhHOYtYr8u%2Bkx4vTA64H3nhhyiyJ0tFJgYdRT%2BoOBUuoCK4eQIBJ7cKWQlDRt%2Ft%2FWbKqKtj%2BR9h8ijb2ouUAUrYWtwyJc3EoZhNC2Av%2FyaDt1y8cHS2VNAzszidkbIL&X-Amz-Signature=fee39b2297aa8d53897a0a840d833a370cc8a557d175aae4b7aa4188f2d3d98c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
