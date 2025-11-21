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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWEIFRN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGb08SsdJRpYlG7eK%2B6ZWK0MNPe2xhHiMkexIkaNUN77AiBE1V8FZbehJhUB6tm5dpFlxa%2BTqXKNgEcS3Ub9kFFlhSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMyMkg0%2B7dxBe2XqvNKtwDFvoIHE8%2BmifuykyMyBdgv%2Bh10lXfmi3nZjY%2BWMmkn6TIHzn0Cc4UrVHRU4zbzCn3Cl73xTXlFf4Yjd%2Fyb9oQuMQrIoOh%2Biaz4HWXxQ%2FZ0fEGmiDlP44TqfAEl6788HJF%2FkX%2BbZuWhBzYlezYPwTAs%2FC0d%2F%2BCMXvv9j177RLCrzs16eddL8rwYGO7NuQ5NzVLfdx6BYWRw%2BaqqyXd%2Bf3cGNSeHLhoznlJufBJhwn2AlYp6RFNxTGN7ZKcnvxp6USVl76d0E0QNmXtTUATCIAAlD7wfdJiX7v%2FDPmGCbnvpfBQiHAANuWQrnn1wE%2F4ucxn5JADDmz%2FBHxfDZEoB3CDVkOT8tWn9NSJy5g46Aj4JtymekYuyuRuDgF4J%2FQhDLQLKqkW7EKkRxbRVeVpNuprBC0BKwduSNIWcPKzTETEpg%2BhD3YCWjLDIsGaktxflBpzqgwikGKeDSvRtIU78HYKMQIIqEiQSVZc43QkzNFh0QrkPVRCKYGPLq9wBVnIoQBO7Ctgee%2BXsM3I1yU8xfRdlPjUmNhkOGZGFZbKpKd7T2Tb9%2BqAIIt53APjp42yVaOEk4XU6l8shCn9y31sEgr4Q44%2BuYmqbvYpWms1rVnV5bwcKnMqUQwYW7fDNUkw14D%2FyAY6pgH4HOOMN5UnR3hB%2B6DdR40uy75TL%2BGp9ihJFZAaGp16R%2BM4qKqu4e%2FujhGIWe%2FRctrOenZEdz2EM2NX7Ww8n5oKDoQZe5QMCuS4i%2F2lztwVYzb6n6Ip87tNqENDjzxxBdgtYlbdX%2Bk68MwuX28dGraqWKtffz6TGrqKDgeDUI%2BON7m94KU1dE5X0l9d4SBcwSXZK8u4Ze8J7E8cWpBRpBrQ5xTD5HzS&X-Amz-Signature=7dd7aeecc4acbf2d307e5bd5403eda1bd96d794c5642a5ac8306e8b33fc571ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWEIFRN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGb08SsdJRpYlG7eK%2B6ZWK0MNPe2xhHiMkexIkaNUN77AiBE1V8FZbehJhUB6tm5dpFlxa%2BTqXKNgEcS3Ub9kFFlhSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMyMkg0%2B7dxBe2XqvNKtwDFvoIHE8%2BmifuykyMyBdgv%2Bh10lXfmi3nZjY%2BWMmkn6TIHzn0Cc4UrVHRU4zbzCn3Cl73xTXlFf4Yjd%2Fyb9oQuMQrIoOh%2Biaz4HWXxQ%2FZ0fEGmiDlP44TqfAEl6788HJF%2FkX%2BbZuWhBzYlezYPwTAs%2FC0d%2F%2BCMXvv9j177RLCrzs16eddL8rwYGO7NuQ5NzVLfdx6BYWRw%2BaqqyXd%2Bf3cGNSeHLhoznlJufBJhwn2AlYp6RFNxTGN7ZKcnvxp6USVl76d0E0QNmXtTUATCIAAlD7wfdJiX7v%2FDPmGCbnvpfBQiHAANuWQrnn1wE%2F4ucxn5JADDmz%2FBHxfDZEoB3CDVkOT8tWn9NSJy5g46Aj4JtymekYuyuRuDgF4J%2FQhDLQLKqkW7EKkRxbRVeVpNuprBC0BKwduSNIWcPKzTETEpg%2BhD3YCWjLDIsGaktxflBpzqgwikGKeDSvRtIU78HYKMQIIqEiQSVZc43QkzNFh0QrkPVRCKYGPLq9wBVnIoQBO7Ctgee%2BXsM3I1yU8xfRdlPjUmNhkOGZGFZbKpKd7T2Tb9%2BqAIIt53APjp42yVaOEk4XU6l8shCn9y31sEgr4Q44%2BuYmqbvYpWms1rVnV5bwcKnMqUQwYW7fDNUkw14D%2FyAY6pgH4HOOMN5UnR3hB%2B6DdR40uy75TL%2BGp9ihJFZAaGp16R%2BM4qKqu4e%2FujhGIWe%2FRctrOenZEdz2EM2NX7Ww8n5oKDoQZe5QMCuS4i%2F2lztwVYzb6n6Ip87tNqENDjzxxBdgtYlbdX%2Bk68MwuX28dGraqWKtffz6TGrqKDgeDUI%2BON7m94KU1dE5X0l9d4SBcwSXZK8u4Ze8J7E8cWpBRpBrQ5xTD5HzS&X-Amz-Signature=14401758b9d9d082e50af554bdf0df7c2c47b764077d6dbc23e544e4b50f2fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
