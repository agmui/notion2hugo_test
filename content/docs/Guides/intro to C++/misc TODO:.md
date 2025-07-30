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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJDBRBS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBw2OBmSbg9lQFK3KXRHeqg3cvGOI%2FbxxZVmAd4gmFQAiEAm5yb8A2cFogi%2Ba4IN0AGoDYI1xibne7GY4TraKk6LeUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlEO3YhExAPR5i82yrcA8KLa8rk4ZEv%2FEQe36EwAWU5xVh01faiWTHvOxaCA3tJ%2BOb3n4pCdITfqD8rIXg6g6TuSiCwZCkIuc4tNnuRxiXrYJ%2FvMVcO0iuwa25DFCBcBpbsPTH8z6JX%2FBsEQxWaibtzZp7fOJjJolVKJuZrzYG07H9TnXq6lPvEydRTgwEQznieYGmgiB37oKfNCkMeNGz0DDPr7ZDM0HrKWBEFrJqLWD9H%2BsNL7iETskJfjlHUDdvyJnZOag%2BNgTLBLFhnUXfUzJWiLNxRYObyvta7WQa3LFl%2Bg9Q57TV8PtXQHlUArBxch7wphobKGrMDydQX1WtWOcOSDQOEmgsyiWcVi7%2FSnlb0MjBquPB5tPruwiAdCK1Qsajs4rD5JMs2f%2F0ZbggmsEKROZlYH9Ja%2Bk6n7ThShHLYu%2FwaH17PTVG5Wv1iS4c39xZO1zVFxRwJY38uoLuY0BLQKWXzO%2BT8OCwhYuBgLiR%2FFBvZU1jVL%2BfULMWoso57zVNQVu3vPYLpXTzohdoXqDsooBvKwAfwyHjoOHiIS5VTCG5SVLT9xsusYROiFAAfmDLrumJeIRw85GtWqrF8kAB0ySC%2FR4RdxNiV685Mo8TXVAYdnRiPXUYzoVEyizG0lJu28j6QeXzAMKPzpcQGOqUBayNmJmBQ9dfkJv94bHEzeBosB9RyBCsHfg4AghoCycQgDcLo4wu1ztrcxVnt%2BRKV09jwBhpftS8pGif5aAmNbslOUEIQVdaagOjrbHRhVeIDVrOuQ5ENET546r7XeU%2FZU1LxmcFb7NbNMIzA8h%2BQ9%2BLGsmCY0xQ%2FIH9DKdMNyzUTPVPTDXfexWwD%2FQKBBS71iOsVhTWJ2MCo4o%2BgSdkM5El4LeyD&X-Amz-Signature=8e19f3c0da2d83a3c261a9245da6c37aa1f1bc38e80ad3dcc63af6300e8c4115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJDBRBS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBw2OBmSbg9lQFK3KXRHeqg3cvGOI%2FbxxZVmAd4gmFQAiEAm5yb8A2cFogi%2Ba4IN0AGoDYI1xibne7GY4TraKk6LeUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlEO3YhExAPR5i82yrcA8KLa8rk4ZEv%2FEQe36EwAWU5xVh01faiWTHvOxaCA3tJ%2BOb3n4pCdITfqD8rIXg6g6TuSiCwZCkIuc4tNnuRxiXrYJ%2FvMVcO0iuwa25DFCBcBpbsPTH8z6JX%2FBsEQxWaibtzZp7fOJjJolVKJuZrzYG07H9TnXq6lPvEydRTgwEQznieYGmgiB37oKfNCkMeNGz0DDPr7ZDM0HrKWBEFrJqLWD9H%2BsNL7iETskJfjlHUDdvyJnZOag%2BNgTLBLFhnUXfUzJWiLNxRYObyvta7WQa3LFl%2Bg9Q57TV8PtXQHlUArBxch7wphobKGrMDydQX1WtWOcOSDQOEmgsyiWcVi7%2FSnlb0MjBquPB5tPruwiAdCK1Qsajs4rD5JMs2f%2F0ZbggmsEKROZlYH9Ja%2Bk6n7ThShHLYu%2FwaH17PTVG5Wv1iS4c39xZO1zVFxRwJY38uoLuY0BLQKWXzO%2BT8OCwhYuBgLiR%2FFBvZU1jVL%2BfULMWoso57zVNQVu3vPYLpXTzohdoXqDsooBvKwAfwyHjoOHiIS5VTCG5SVLT9xsusYROiFAAfmDLrumJeIRw85GtWqrF8kAB0ySC%2FR4RdxNiV685Mo8TXVAYdnRiPXUYzoVEyizG0lJu28j6QeXzAMKPzpcQGOqUBayNmJmBQ9dfkJv94bHEzeBosB9RyBCsHfg4AghoCycQgDcLo4wu1ztrcxVnt%2BRKV09jwBhpftS8pGif5aAmNbslOUEIQVdaagOjrbHRhVeIDVrOuQ5ENET546r7XeU%2FZU1LxmcFb7NbNMIzA8h%2BQ9%2BLGsmCY0xQ%2FIH9DKdMNyzUTPVPTDXfexWwD%2FQKBBS71iOsVhTWJ2MCo4o%2BgSdkM5El4LeyD&X-Amz-Signature=dd8b909e27b85b8e9fc833e3956b34e3cfb76b071ab37495790312fd180b61ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
