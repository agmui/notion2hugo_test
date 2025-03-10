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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ERV23Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDf15DGDwhMhg3ICJjGjcyCfOrk6XKpXs7bJ9ayTXHYUAIhANT4MULxc0z40nlNtO7IN9Lrg%2FtGZafJL%2BQgGsYVeTqoKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZR0CSFahBXVq5fo4q3AOAssQZ5jNbtH4KuLxAtyBMzoCnrR86ZVeJ2fBeoeq5LzJccgOs%2BMy0vJiKYCKgXd80ePWJo7Uv%2B8kWyYeKsItIXRMlktL%2BMDSejQmmfoWo0qkQAQwHNSKj6swQR%2BDEl15dDaveQehW3d8DSiFY%2B%2BOwhQlQf4DCBcEgztI8oOO4WMCbPt4NvYbEuyDU6BLY04ya4rMh63ZFZnti81t%2BdiBvQfsBgohq9BBB7qlsHtUlC9sTuj2Na6YHhmdnHzgdkdXAWGVpNzpGkW6HXIv%2BcmoB5NaLpu52%2B3PwmgMPKZ7vveXhC0jXwdqxz4vywrIYuC3%2FwqJtHFF2BEXra5Ny0Sy%2Bgm1oPIOdthK47igPvc16BO8IglW7cty5XcgMRxsPxK0HT5AeVjfy6rGVvAALVvdqKw2FuKtAZNYhWtgghVn%2FmBTU6i8lVaKrTbOZ%2BYVZxtsDIosEMc7VkY04H%2B6%2FqibbJkkoHWNORygHKHMrHnAy8FtD3Q%2Fud%2FYsBKI4HDJBNWzUvxHWFGW5ZXyGl44njpzfqdxIe5PEwgck7S0ysRGvHaOkXjv01tVFjsF%2BTKto8ALl8q1%2BLsaJ2J4bY0Ial59myunG0yjunggKwpKnmUcPi05%2FwLc6bjeZjzj46DCBqry%2BBjqkAQHkuOTkaCYnn%2F%2FQEPFIfHpuoqHAXqVcMKimIdtPoRpjhJW5A0GBBHY1Ec%2FO53QOcARv4BdyXc0IDgHArisnkV3yK9Ytou1kwI5KjrmzyYAyn%2B69uC%2Fjn7oQpIQ47V7nL5XbWUJfXMyZIg5ZYikHVowPxHBIsAFID3LsjaoJXFcl7RvwfDBnIqx5cKVR%2FT%2BT%2FTy5JsCNiQVgbWGPlKLZbqn6q9PY&X-Amz-Signature=96f2e2fec85f9de1f53205cd0597b966e7a53a2bffa5b4b0563840fbeed06dce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ERV23Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDf15DGDwhMhg3ICJjGjcyCfOrk6XKpXs7bJ9ayTXHYUAIhANT4MULxc0z40nlNtO7IN9Lrg%2FtGZafJL%2BQgGsYVeTqoKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZR0CSFahBXVq5fo4q3AOAssQZ5jNbtH4KuLxAtyBMzoCnrR86ZVeJ2fBeoeq5LzJccgOs%2BMy0vJiKYCKgXd80ePWJo7Uv%2B8kWyYeKsItIXRMlktL%2BMDSejQmmfoWo0qkQAQwHNSKj6swQR%2BDEl15dDaveQehW3d8DSiFY%2B%2BOwhQlQf4DCBcEgztI8oOO4WMCbPt4NvYbEuyDU6BLY04ya4rMh63ZFZnti81t%2BdiBvQfsBgohq9BBB7qlsHtUlC9sTuj2Na6YHhmdnHzgdkdXAWGVpNzpGkW6HXIv%2BcmoB5NaLpu52%2B3PwmgMPKZ7vveXhC0jXwdqxz4vywrIYuC3%2FwqJtHFF2BEXra5Ny0Sy%2Bgm1oPIOdthK47igPvc16BO8IglW7cty5XcgMRxsPxK0HT5AeVjfy6rGVvAALVvdqKw2FuKtAZNYhWtgghVn%2FmBTU6i8lVaKrTbOZ%2BYVZxtsDIosEMc7VkY04H%2B6%2FqibbJkkoHWNORygHKHMrHnAy8FtD3Q%2Fud%2FYsBKI4HDJBNWzUvxHWFGW5ZXyGl44njpzfqdxIe5PEwgck7S0ysRGvHaOkXjv01tVFjsF%2BTKto8ALl8q1%2BLsaJ2J4bY0Ial59myunG0yjunggKwpKnmUcPi05%2FwLc6bjeZjzj46DCBqry%2BBjqkAQHkuOTkaCYnn%2F%2FQEPFIfHpuoqHAXqVcMKimIdtPoRpjhJW5A0GBBHY1Ec%2FO53QOcARv4BdyXc0IDgHArisnkV3yK9Ytou1kwI5KjrmzyYAyn%2B69uC%2Fjn7oQpIQ47V7nL5XbWUJfXMyZIg5ZYikHVowPxHBIsAFID3LsjaoJXFcl7RvwfDBnIqx5cKVR%2FT%2BT%2FTy5JsCNiQVgbWGPlKLZbqn6q9PY&X-Amz-Signature=c2bebff95bb947db54fd4cfe38083990ac28863fb98904f8e6d0d1030a3b7c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
