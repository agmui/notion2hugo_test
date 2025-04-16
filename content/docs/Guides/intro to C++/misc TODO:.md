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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5SWNTA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX9d3%2FcKQkWF5CuRdKLJm%2BkGa26XTQVy1InWnzgOh6YAiBE6Lx2FpW3Qt%2FDw480SBfZpQwJNF8VUCdKeE7pjNdJmCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMaJtBn%2Bv5Xqa%2BSly0KtwDqh2gv7AfoPLXfzxYTDW8wD9TgQJ1yZpuiKbivK%2F7zTBFBVFtK2NU%2Btx42qlxaZAL1Y91joyaK9bZFS%2BNrYz%2BpHZti%2Fj3CqNTLay%2BpEMXJrTEs8h%2FD2WQpI9SvlifKUonisCSA31%2BK9bjrUQ4TnX6eTG7xW%2FKTTC3DIMe4EWfLo7c2UwGjP8VNKe5s935GoMEGPKyQmOhWFUNzDIYivL%2FNNDL%2FP09xB%2B5bhPxxCiMvOWQb%2FnKGikYmnBL2Zx1G0THAwhDfwiwtIaVunvrYeiGtYzp95%2FI%2BIYoJgwR%2FV5b7MKJN4hbr%2BqsNxdodG9EwoxR1HdOm39pl2CO9hBhl1nkGBgmfNAKBOH%2BAT1ZRwPOowCSWeoKBvoYMSMBFgcNZmXb6YyDJYZNNKslqLqsB3bDy7lU0YjSnj8FpVJ5%2FTBMD6O4Jlg93EvOyBialwryV5kxbj6HPydCUNChk8yHTwxv4H2qjnmgHLiMn0EqCrUBRRYW%2FvcYTpcocoGK6WXxJ%2BoO%2B3NycqCeuh%2BGmV7dMGGKtyu35M3P4QEvEsao3s3FjYXp8ZpouNIt7ZBXV6naTKpsObN8b4jQrijFcXpOtfBshvcbBkDrifPnTeOhKsgPXsHCOSTktCsSGEpWHF4woqyAwAY6pgF9agVKC3pjgrEHHp7iRUj7Z2KqV8dqO4Ot6zJcMaUDPG7AyYzgGnGDn4WewaXxbq2fWZXLatjKhpAQ6v4M288bSynC4iYPYMKjbpnvUrXP1iC38D2cV3FncIjOA98CIL0kbcG%2B07LMupZtBhRvuZze4NxQXExkUHTB2Mn7CN7bM8ImvP1phw67eTExW1AxV74SWiuC%2BqhNmnE1tHlPCxkLJFJEjK9x&X-Amz-Signature=d7060f755355249c0138a7b3eb55afd07077516496d588a5720e8d9d9df4812a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5SWNTA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX9d3%2FcKQkWF5CuRdKLJm%2BkGa26XTQVy1InWnzgOh6YAiBE6Lx2FpW3Qt%2FDw480SBfZpQwJNF8VUCdKeE7pjNdJmCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMaJtBn%2Bv5Xqa%2BSly0KtwDqh2gv7AfoPLXfzxYTDW8wD9TgQJ1yZpuiKbivK%2F7zTBFBVFtK2NU%2Btx42qlxaZAL1Y91joyaK9bZFS%2BNrYz%2BpHZti%2Fj3CqNTLay%2BpEMXJrTEs8h%2FD2WQpI9SvlifKUonisCSA31%2BK9bjrUQ4TnX6eTG7xW%2FKTTC3DIMe4EWfLo7c2UwGjP8VNKe5s935GoMEGPKyQmOhWFUNzDIYivL%2FNNDL%2FP09xB%2B5bhPxxCiMvOWQb%2FnKGikYmnBL2Zx1G0THAwhDfwiwtIaVunvrYeiGtYzp95%2FI%2BIYoJgwR%2FV5b7MKJN4hbr%2BqsNxdodG9EwoxR1HdOm39pl2CO9hBhl1nkGBgmfNAKBOH%2BAT1ZRwPOowCSWeoKBvoYMSMBFgcNZmXb6YyDJYZNNKslqLqsB3bDy7lU0YjSnj8FpVJ5%2FTBMD6O4Jlg93EvOyBialwryV5kxbj6HPydCUNChk8yHTwxv4H2qjnmgHLiMn0EqCrUBRRYW%2FvcYTpcocoGK6WXxJ%2BoO%2B3NycqCeuh%2BGmV7dMGGKtyu35M3P4QEvEsao3s3FjYXp8ZpouNIt7ZBXV6naTKpsObN8b4jQrijFcXpOtfBshvcbBkDrifPnTeOhKsgPXsHCOSTktCsSGEpWHF4woqyAwAY6pgF9agVKC3pjgrEHHp7iRUj7Z2KqV8dqO4Ot6zJcMaUDPG7AyYzgGnGDn4WewaXxbq2fWZXLatjKhpAQ6v4M288bSynC4iYPYMKjbpnvUrXP1iC38D2cV3FncIjOA98CIL0kbcG%2B07LMupZtBhRvuZze4NxQXExkUHTB2Mn7CN7bM8ImvP1phw67eTExW1AxV74SWiuC%2BqhNmnE1tHlPCxkLJFJEjK9x&X-Amz-Signature=9353fa21edd5edc0ed7a974d429ce74574805ace3a467aad0ff26ff2e1d52067&X-Amz-SignedHeaders=host&x-id=GetObject)

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
