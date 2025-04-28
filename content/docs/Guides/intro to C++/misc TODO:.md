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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAIZ3KC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1yOnBeMn1vjYiVyPqo6MdG0%2FMAoXtR9uEAFkfKUfLRAiAAygJkX5ou%2F4Qvvkn8hAmNqT%2F%2FqxixVb%2B3G2%2B2WIT%2F5Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMbBqu%2FeynhEm3ON42KtwDoPIYmEdAh9cIzQunM8vSRTROhtev8k%2B6yNAK3iht2o%2Bn0mRI8eowsohbO3Puls3LSM%2BxQt0NMjkgrQm0ZiY9QAzXvmmzWm7OBCEjby0SYKyi%2BTuiZuw%2BRjg%2BJob5i6GvLVMlkclJL98XJHWkyFptsNdfLCOmcIQeBKA%2Bb2y2ax4clcUp5f0GysjTCc7lD6Wl%2BFBxbT%2FzZ%2BHM1CqkUNIn1jVFcl8ya3WAmiM6moNjGZuevZwIzW9f46I6zc5bBArQd4VzMeK0OC5UZVmiJtjobCHpayTMoBMP74fhQPw04G9skswzZFCwgX4vp%2FwrV4SahfCIPHFg5rZCVMIKUnED7iml2qfl5StoZtsFgyZNdt2EL3UeH89p16cCSAH%2Bm9j%2BsnYRB3sMqZz5LXy8nT4wOvt9cyxJhdOJsbfs%2FhGHIDpyfupigDrUz7Pj3c8SHjQ53wA9dyg05VlVC7A6vU5QexWec%2B923IoS4EOP7V1QPsXE8UbJKH1JWtwuaKOLq9NwqWYWToXnQA%2BzJEccSd1mCBbKhsULtwhSWMpSoyTa4ACQKjbgcAKRNklJ%2BF%2FFuocOkzh0eibOr8vVGCZEeF3J1uT9AXFb8V16l3SF6GcT%2BKiXzhPtGE4pRwO%2B3Xww24O%2BwAY6pgFlnLAUCYxchN2Jf4u85fAehBsNpVwbB7Pcpdt0%2Fk2XVti0NreUY5YHHue%2Fnf5byEpb1YEIBgSizItboPMuOqhlwAuTvF%2F5yjzLDRJijPU1ZzJD01eXw4JG%2FBI3W16uYOO2vp%2B2%2BXAzdv%2BDvVezqiTwzgWq8XNvapZZZgU83EX%2FZPuOnVD8Ec3NDop1HYZC2WqRov6PwZ7A95N2P%2FcGeZ7UtwoGL73e&X-Amz-Signature=76b01ef762ca6a11429ecfab7b3f9221a34119b6df3a741239901d8d00f97ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAIZ3KC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1yOnBeMn1vjYiVyPqo6MdG0%2FMAoXtR9uEAFkfKUfLRAiAAygJkX5ou%2F4Qvvkn8hAmNqT%2F%2FqxixVb%2B3G2%2B2WIT%2F5Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMbBqu%2FeynhEm3ON42KtwDoPIYmEdAh9cIzQunM8vSRTROhtev8k%2B6yNAK3iht2o%2Bn0mRI8eowsohbO3Puls3LSM%2BxQt0NMjkgrQm0ZiY9QAzXvmmzWm7OBCEjby0SYKyi%2BTuiZuw%2BRjg%2BJob5i6GvLVMlkclJL98XJHWkyFptsNdfLCOmcIQeBKA%2Bb2y2ax4clcUp5f0GysjTCc7lD6Wl%2BFBxbT%2FzZ%2BHM1CqkUNIn1jVFcl8ya3WAmiM6moNjGZuevZwIzW9f46I6zc5bBArQd4VzMeK0OC5UZVmiJtjobCHpayTMoBMP74fhQPw04G9skswzZFCwgX4vp%2FwrV4SahfCIPHFg5rZCVMIKUnED7iml2qfl5StoZtsFgyZNdt2EL3UeH89p16cCSAH%2Bm9j%2BsnYRB3sMqZz5LXy8nT4wOvt9cyxJhdOJsbfs%2FhGHIDpyfupigDrUz7Pj3c8SHjQ53wA9dyg05VlVC7A6vU5QexWec%2B923IoS4EOP7V1QPsXE8UbJKH1JWtwuaKOLq9NwqWYWToXnQA%2BzJEccSd1mCBbKhsULtwhSWMpSoyTa4ACQKjbgcAKRNklJ%2BF%2FFuocOkzh0eibOr8vVGCZEeF3J1uT9AXFb8V16l3SF6GcT%2BKiXzhPtGE4pRwO%2B3Xww24O%2BwAY6pgFlnLAUCYxchN2Jf4u85fAehBsNpVwbB7Pcpdt0%2Fk2XVti0NreUY5YHHue%2Fnf5byEpb1YEIBgSizItboPMuOqhlwAuTvF%2F5yjzLDRJijPU1ZzJD01eXw4JG%2FBI3W16uYOO2vp%2B2%2BXAzdv%2BDvVezqiTwzgWq8XNvapZZZgU83EX%2FZPuOnVD8Ec3NDop1HYZC2WqRov6PwZ7A95N2P%2FcGeZ7UtwoGL73e&X-Amz-Signature=becd01398017c52fc63a91a41d193befd5889a2cb34fff4631c86fdb90123cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
