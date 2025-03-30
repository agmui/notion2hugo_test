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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFH5UXHM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGFTt6BAg9%2Fz5SFfwaOlCW9sX%2Bc4D6SIgPMdLqiexORNAiEAm2MqFi1jZ9smd3nuOZYnD2uAyIDqIVSbAZo781plyIUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFknwNjsVse96ySNfyrcA1ScrZKCqCqs51C8TnypB8SO2%2BhBUVgtP866W3anR9sCA0ucn81a%2BgBoecZpQN3QKPN9pquIkkuoXlSnQRr%2F3CZmss8pr9q%2BVpU6g9yCirFQIMAMh4VMZng9UBaVXqj86SDxAV98mJQh5OKtX%2F4I51TzrFKEzCvcUhG3Aj%2BUkEtmj9oDg4Bzi72fBDdp%2BjdkQZC80iwtbHUusQnEOXk5wxyKzAZdFKkSXqnsKkV8u1vCQ8kn3m%2BPnng0ZD46%2B9YHjQO2jNVXhfc0pT%2B8DL730ZeY%2B91jTW0zW1oW9DVXGd%2BV5QRlZzxTF5dYGed4ncQB3cYkF9kpodXn7QPu7M%2BcVam7E5oNmabrYoz%2Frtly4KIjdLQdmxWTGnYUDNHaecFImeYMubGxHrzlh3nd8snlJdvtELDi276mygnkz8ZPX7mAQP3yAr8UWIEdgPk7dYdSk22QczlKFWUWtsA1X8ckzUw1F7ZjbfnF%2B1evdDLKaiBv1VF%2FQ%2F%2FyGVUkwRbuAqdc9K2p%2F8Yizshs4rDyuD9L8CXwJQc6Jk5Fb1IQYIFfOHQbK7tb8vRGr3heTiTWxf8zMPfXxaaeiqh92cLgXM%2F%2FKs2aKN2wL1tf0ibtbngV7bSRWV78giMSZC8tUxXgMPrvo78GOqUBMtIVXOC6Q3eyfaXCzGU8%2BNBmBz8WE%2BaBOr7gRrnqrOESAyVlQIp0a82m0QpO%2B%2BH7xhrzR9mAERS%2Frgi6Xu7YxMCgY7K%2F3aUxGN9GrclJjnW6v8tTSvZcWlgI1U%2FNxM3r6tlldo64FpPO9pY8gzNHWgw4pD6DtQO5ZrCub0c7F%2BVlHDyU2FW%2Ffsmobmk4vNP4RMm1QjxdL2TKMaiKDjGTUQ%2FMc19E&X-Amz-Signature=e78e0ac24f2628d4461d059281df1ce0837d952e62ec9cbfd05f0d35bd9fbdee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFH5UXHM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGFTt6BAg9%2Fz5SFfwaOlCW9sX%2Bc4D6SIgPMdLqiexORNAiEAm2MqFi1jZ9smd3nuOZYnD2uAyIDqIVSbAZo781plyIUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFknwNjsVse96ySNfyrcA1ScrZKCqCqs51C8TnypB8SO2%2BhBUVgtP866W3anR9sCA0ucn81a%2BgBoecZpQN3QKPN9pquIkkuoXlSnQRr%2F3CZmss8pr9q%2BVpU6g9yCirFQIMAMh4VMZng9UBaVXqj86SDxAV98mJQh5OKtX%2F4I51TzrFKEzCvcUhG3Aj%2BUkEtmj9oDg4Bzi72fBDdp%2BjdkQZC80iwtbHUusQnEOXk5wxyKzAZdFKkSXqnsKkV8u1vCQ8kn3m%2BPnng0ZD46%2B9YHjQO2jNVXhfc0pT%2B8DL730ZeY%2B91jTW0zW1oW9DVXGd%2BV5QRlZzxTF5dYGed4ncQB3cYkF9kpodXn7QPu7M%2BcVam7E5oNmabrYoz%2Frtly4KIjdLQdmxWTGnYUDNHaecFImeYMubGxHrzlh3nd8snlJdvtELDi276mygnkz8ZPX7mAQP3yAr8UWIEdgPk7dYdSk22QczlKFWUWtsA1X8ckzUw1F7ZjbfnF%2B1evdDLKaiBv1VF%2FQ%2F%2FyGVUkwRbuAqdc9K2p%2F8Yizshs4rDyuD9L8CXwJQc6Jk5Fb1IQYIFfOHQbK7tb8vRGr3heTiTWxf8zMPfXxaaeiqh92cLgXM%2F%2FKs2aKN2wL1tf0ibtbngV7bSRWV78giMSZC8tUxXgMPrvo78GOqUBMtIVXOC6Q3eyfaXCzGU8%2BNBmBz8WE%2BaBOr7gRrnqrOESAyVlQIp0a82m0QpO%2B%2BH7xhrzR9mAERS%2Frgi6Xu7YxMCgY7K%2F3aUxGN9GrclJjnW6v8tTSvZcWlgI1U%2FNxM3r6tlldo64FpPO9pY8gzNHWgw4pD6DtQO5ZrCub0c7F%2BVlHDyU2FW%2Ffsmobmk4vNP4RMm1QjxdL2TKMaiKDjGTUQ%2FMc19E&X-Amz-Signature=9f82500e8fc187bf294ee00b33b18d6c26a5066b805c6d61d5006da3499e8b28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
