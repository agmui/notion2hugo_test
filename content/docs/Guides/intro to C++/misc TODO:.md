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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MTAXU3A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDSjidbBeRuzr1jWzcR1hpoj2qZj0Vdgy%2B1cF%2FaMlYBEwIhALB5xxLW%2BVqVvRC5SwsfgGFpFjPbzQS6po4QTwBtWkvzKv8DCCMQABoMNjM3NDIzMTgzODA1IgxZeFJV0dGLW2AfEtkq3APH161FCiBFi3vx19a%2FzdWWpVRDSqJsJ8skFVeBHcrfZlsK6Q1vFZOu7y6s3WM4UsMNUXGr8p19HiHgU%2B5Mq3GtA66clOiBvIYV%2FnkwSSUiKcGBNdPxnz73gpLaMT1aXsTcHjrC6nW61peAdPgU%2FV1OsDoAvQpBwGTChnedFsfxJfMN0rxv%2FiG6jDpadynKqI0cansdFUfEY2d%2Bs0%2Fua9MN5%2F7V2aQFsMi2SscspvH1n2E%2Fp7ZmXEC2GG0I%2FIFjNP1BMQ08rixGIHunAVqjc2q6NpbUwyyD7zvHoEt1xgShkoZwuAFggghQOB5VVcuKzQGyJBs%2FJ%2Bmi2IlLmnpgYICg%2Fjdue6nSTuBZWdX%2FmLE%2F4KClPt0fzdpgf77%2F4e5xF3vrXCkhViBS9bBiLxyTTVUz6%2B7mnDayiDkDjMYoQ3TFZyfPNFYdygtGhkg4VF496ayGfwI%2B67Wdc51Om9LYcWL8t4buIIqQ5BQPVUSD4Y9nAVywIkU9UmzRtflvhsk9Uq%2Flw5GN5eGEGu2vQ%2FHs2tfBzbi67tUDMYhaRqnLJXVK4F%2B2qeXFyAaLoLTqu6BBbIzUPlktVXiDsLgetT8LfxFlCFy%2BDWO4g11rZeIw6Bljvccm0adwqnaEiih0ZTD2y9HDBjqkAWm58g2aBN9X1oyTrBv%2FfhdvaDUQlArfqIWPd1DjfQ%2B7YPDoI4uFcBu%2BiIlvaxbGmtCVV8l%2BgvR%2F08XyzQNAhX7Jk%2Fhl947uWZhjpD7Ikm7ww4UZjOKElnnlhi%2BPN%2Ft3uIEwxBqJzNrMSSkW%2BM6LtfhnW0m8Q6dprDBPSmhpD7xleC4SffhsQWRFNtye2Bv4I8HpWFT1QW4GcP7SeL1fV59VnHlC&X-Amz-Signature=fa09a841f0adc7e29fc143402490d81efeeaafa7ec5511b07d0bf134f0769bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MTAXU3A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDSjidbBeRuzr1jWzcR1hpoj2qZj0Vdgy%2B1cF%2FaMlYBEwIhALB5xxLW%2BVqVvRC5SwsfgGFpFjPbzQS6po4QTwBtWkvzKv8DCCMQABoMNjM3NDIzMTgzODA1IgxZeFJV0dGLW2AfEtkq3APH161FCiBFi3vx19a%2FzdWWpVRDSqJsJ8skFVeBHcrfZlsK6Q1vFZOu7y6s3WM4UsMNUXGr8p19HiHgU%2B5Mq3GtA66clOiBvIYV%2FnkwSSUiKcGBNdPxnz73gpLaMT1aXsTcHjrC6nW61peAdPgU%2FV1OsDoAvQpBwGTChnedFsfxJfMN0rxv%2FiG6jDpadynKqI0cansdFUfEY2d%2Bs0%2Fua9MN5%2F7V2aQFsMi2SscspvH1n2E%2Fp7ZmXEC2GG0I%2FIFjNP1BMQ08rixGIHunAVqjc2q6NpbUwyyD7zvHoEt1xgShkoZwuAFggghQOB5VVcuKzQGyJBs%2FJ%2Bmi2IlLmnpgYICg%2Fjdue6nSTuBZWdX%2FmLE%2F4KClPt0fzdpgf77%2F4e5xF3vrXCkhViBS9bBiLxyTTVUz6%2B7mnDayiDkDjMYoQ3TFZyfPNFYdygtGhkg4VF496ayGfwI%2B67Wdc51Om9LYcWL8t4buIIqQ5BQPVUSD4Y9nAVywIkU9UmzRtflvhsk9Uq%2Flw5GN5eGEGu2vQ%2FHs2tfBzbi67tUDMYhaRqnLJXVK4F%2B2qeXFyAaLoLTqu6BBbIzUPlktVXiDsLgetT8LfxFlCFy%2BDWO4g11rZeIw6Bljvccm0adwqnaEiih0ZTD2y9HDBjqkAWm58g2aBN9X1oyTrBv%2FfhdvaDUQlArfqIWPd1DjfQ%2B7YPDoI4uFcBu%2BiIlvaxbGmtCVV8l%2BgvR%2F08XyzQNAhX7Jk%2Fhl947uWZhjpD7Ikm7ww4UZjOKElnnlhi%2BPN%2Ft3uIEwxBqJzNrMSSkW%2BM6LtfhnW0m8Q6dprDBPSmhpD7xleC4SffhsQWRFNtye2Bv4I8HpWFT1QW4GcP7SeL1fV59VnHlC&X-Amz-Signature=b617cf93fe757879d3135b8441cab14477138cd70fa10af227951e3ce112f425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
