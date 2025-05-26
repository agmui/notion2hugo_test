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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AERDSE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWTyapCJhHoozFL85BKhW%2BEmW7EYvxM8FvJy4UmrzLgAiEAwnwsv%2B0US6gZLaXGs1QnOrUvLKmznHEy6s9ZVlykb10q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJLOxBmTjt5lMv7UYircA5bQ7Awh3bVVL5KVGGSj1wsQ%2FEtIeIZ98axCS6%2F98jzFYh4ioRMkJxbUiTa98GwNcQHhZvjSlOOYTNU7RK6k%2B9Bm8PXmQVApQ6dhQbGnc4%2BiMxEFIrDAvsMt3fv1yP0uaYal7v6voJUWnV%2FwdIDVFiWrhiymHeijwQNHcUtbcX869sBJ4n1NJ3i32EXhhhbCTBRoMqcR0XRJmkl4kHYv%2BFDt9F7QjnVMjYos0J%2ByRaSb0mLJMTwXgV0Zx520Ln%2BaH5japlLohoUOt0kDbgBRUWk2s7mgkQnzy0TzNfUFdkzZ0xeHPI8NvHktNeNDNvBtIbqk36OEAh1NqrEIWawKMiFYEmoGn6CJTX8VEHTCfl1z5rV%2BnQBhzfhy7vpTh2ylgbQWoiLrILLf2RqNR6D4O5Nwqx0ddarUBzO3yoBrIpzXMo4JJEivdP1yiWHHtIeLsCM1CKM73pQtXFt7sPmaEhfVO2sShrjFDKKGvjCLH8mRHjl8ovxHnrtM%2FhJ64VECVHd0O%2FyxfWhYqfmZWzIA39%2BKt0%2BmRLB7Ko527%2BUnP7LuhDyVzspX9p9yRpoM7Zf8Q9%2FWQz7uaUFYyrhU0bJiTWu0jU1rH25LhqJpCqBmps%2BuuKA%2FuSmAni3O8ss1MIz50sEGOqUB2TfUyQ%2BFI0YWV6Skb%2BOcpvsbsjaJHyHWGFpU1sw3Q%2FLrnulD2RhoRQ%2BbP1m9yBju3ujkNaOqGDoj1bEsTXrzmo6VYBaLl%2F5diVn8Ubv26Lud%2FSX2VhMSW%2BG%2FKiKjB9rObqLN8OCYo0spNHqkO0aYN7n6AJTfclbzM9DSc6wSBxsZG8sMIRTiGknNO14Dne6d4ZhPXipEHzX8a66RcZh%2FEycqV6C5&X-Amz-Signature=61dd7c1a024d5d335bc7066bc706b0134b7a0991fe9f0e07c7b91b6eb236b0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AERDSE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWTyapCJhHoozFL85BKhW%2BEmW7EYvxM8FvJy4UmrzLgAiEAwnwsv%2B0US6gZLaXGs1QnOrUvLKmznHEy6s9ZVlykb10q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJLOxBmTjt5lMv7UYircA5bQ7Awh3bVVL5KVGGSj1wsQ%2FEtIeIZ98axCS6%2F98jzFYh4ioRMkJxbUiTa98GwNcQHhZvjSlOOYTNU7RK6k%2B9Bm8PXmQVApQ6dhQbGnc4%2BiMxEFIrDAvsMt3fv1yP0uaYal7v6voJUWnV%2FwdIDVFiWrhiymHeijwQNHcUtbcX869sBJ4n1NJ3i32EXhhhbCTBRoMqcR0XRJmkl4kHYv%2BFDt9F7QjnVMjYos0J%2ByRaSb0mLJMTwXgV0Zx520Ln%2BaH5japlLohoUOt0kDbgBRUWk2s7mgkQnzy0TzNfUFdkzZ0xeHPI8NvHktNeNDNvBtIbqk36OEAh1NqrEIWawKMiFYEmoGn6CJTX8VEHTCfl1z5rV%2BnQBhzfhy7vpTh2ylgbQWoiLrILLf2RqNR6D4O5Nwqx0ddarUBzO3yoBrIpzXMo4JJEivdP1yiWHHtIeLsCM1CKM73pQtXFt7sPmaEhfVO2sShrjFDKKGvjCLH8mRHjl8ovxHnrtM%2FhJ64VECVHd0O%2FyxfWhYqfmZWzIA39%2BKt0%2BmRLB7Ko527%2BUnP7LuhDyVzspX9p9yRpoM7Zf8Q9%2FWQz7uaUFYyrhU0bJiTWu0jU1rH25LhqJpCqBmps%2BuuKA%2FuSmAni3O8ss1MIz50sEGOqUB2TfUyQ%2BFI0YWV6Skb%2BOcpvsbsjaJHyHWGFpU1sw3Q%2FLrnulD2RhoRQ%2BbP1m9yBju3ujkNaOqGDoj1bEsTXrzmo6VYBaLl%2F5diVn8Ubv26Lud%2FSX2VhMSW%2BG%2FKiKjB9rObqLN8OCYo0spNHqkO0aYN7n6AJTfclbzM9DSc6wSBxsZG8sMIRTiGknNO14Dne6d4ZhPXipEHzX8a66RcZh%2FEycqV6C5&X-Amz-Signature=e7ee1241b13cd0171b7d2330122340f848467ddbddd31bd1416aae41dd3e929f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
