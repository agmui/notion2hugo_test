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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERBOJ32%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl7Hx9z2T1gX%2FJD%2B3oTBKa5O0POqYicMAAziyBeTh%2BWAiEAuKYYQlMIRrm9ku2uxmes4tRi1i8yMj%2FPMue%2Fpd%2BmCtwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERUrEtzVjj3iU4ynSrcA6wN6%2BU%2BAHZ1p6DCe6Fu3GvKncotiRiCsXGfEKRWqrkNPf5WlLnD1hEDABXD40%2Fb2%2FGmzWEf4pasO84QYVp10pWPEFpSOUz0JEjLVgZ6Si0Q1U6slCgTLiwQhI%2FP6LDcwWbdKQbLNcDsdCliPgEUuyRYsZHPOx7h4KUSS1wP3GAb6zhex1pZ%2B3NGRUkJSZo4GkW1Et7rzI6d%2Bo1%2B0i0dpdhax0Bpp8rlOk%2FGmYwNuj3pkiLbKvhn%2FLKedKSpAEPNuvHhJY2rflEq6JwtrAl7wlPz2roBfJYpmCHSmIJakMGoVbeOGTCWtajPxH5p9FIo7nS5B6ZlLmgTndyjNKcvq2TGpi4DvOjdIGmdzrbXeisIua3Ujmry62%2FeX3nMDjWtvG7MQKWZ4Hyip4uCAS49xsjKcVrdfZyUIUXR%2BT7YhZwxiSxtl0sK%2BTD3%2FSjlZttlwcaKJbDXM0ttrcdCLgWPGGokOwrLyL76j0FRlbtkRaEipBu3BRH8XKwwTSq6ouui1%2BgmnYUK63maZgtXpKEw8IPEBWPGqSITdzFT%2Fox%2BW2SQvQhQPswxPlW%2FO1wyHTQUaAfXnTl69uAhXagUEUa2EgmIF0H8Zl4rEqJ5PJPA%2Fa3tfzkNiSBS%2BJr40db8MPnKgb8GOqUB%2FnXEde3T9Bs8kQHc%2BRQqb0%2BWhMGSB5CD0rGwaFw%2BS7v9jOdwZ6YsULQtxRd84ZmYfVsDutsIhRRPUOSSsAThTcXaG6Zku1IrIMIsHC3BqvdVdC5YxV6qAlqhaPJK1Cjao0exGtQneFwFZVQhdLovOkgPQhlRARfhbGzwiZcDPLHYik1oPE2YXOiin21m2yHKB4AXmcO9Q7nlMkIQRjanRFWDf3dD&X-Amz-Signature=4517e669fe1b0f28b6041adf9b130b726aa0069f4c383713a045c061051ad088&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERBOJ32%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl7Hx9z2T1gX%2FJD%2B3oTBKa5O0POqYicMAAziyBeTh%2BWAiEAuKYYQlMIRrm9ku2uxmes4tRi1i8yMj%2FPMue%2Fpd%2BmCtwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERUrEtzVjj3iU4ynSrcA6wN6%2BU%2BAHZ1p6DCe6Fu3GvKncotiRiCsXGfEKRWqrkNPf5WlLnD1hEDABXD40%2Fb2%2FGmzWEf4pasO84QYVp10pWPEFpSOUz0JEjLVgZ6Si0Q1U6slCgTLiwQhI%2FP6LDcwWbdKQbLNcDsdCliPgEUuyRYsZHPOx7h4KUSS1wP3GAb6zhex1pZ%2B3NGRUkJSZo4GkW1Et7rzI6d%2Bo1%2B0i0dpdhax0Bpp8rlOk%2FGmYwNuj3pkiLbKvhn%2FLKedKSpAEPNuvHhJY2rflEq6JwtrAl7wlPz2roBfJYpmCHSmIJakMGoVbeOGTCWtajPxH5p9FIo7nS5B6ZlLmgTndyjNKcvq2TGpi4DvOjdIGmdzrbXeisIua3Ujmry62%2FeX3nMDjWtvG7MQKWZ4Hyip4uCAS49xsjKcVrdfZyUIUXR%2BT7YhZwxiSxtl0sK%2BTD3%2FSjlZttlwcaKJbDXM0ttrcdCLgWPGGokOwrLyL76j0FRlbtkRaEipBu3BRH8XKwwTSq6ouui1%2BgmnYUK63maZgtXpKEw8IPEBWPGqSITdzFT%2Fox%2BW2SQvQhQPswxPlW%2FO1wyHTQUaAfXnTl69uAhXagUEUa2EgmIF0H8Zl4rEqJ5PJPA%2Fa3tfzkNiSBS%2BJr40db8MPnKgb8GOqUB%2FnXEde3T9Bs8kQHc%2BRQqb0%2BWhMGSB5CD0rGwaFw%2BS7v9jOdwZ6YsULQtxRd84ZmYfVsDutsIhRRPUOSSsAThTcXaG6Zku1IrIMIsHC3BqvdVdC5YxV6qAlqhaPJK1Cjao0exGtQneFwFZVQhdLovOkgPQhlRARfhbGzwiZcDPLHYik1oPE2YXOiin21m2yHKB4AXmcO9Q7nlMkIQRjanRFWDf3dD&X-Amz-Signature=71855829a94ab30830243ae749931f5ebe92a1b015abef9c13a7f820a82dac12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
