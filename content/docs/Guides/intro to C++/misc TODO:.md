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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7HZDB2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDY1AtIvQ7RKzHD45XiWf4WjQCn9hzXc5YC9O61eNvcaAiEA03uWguXbHeRjFjmRn7TMa9LXrlV5I37XJRO%2B6r18csQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqhA2FkoMoAOTcaeCrcA45VqIDf79sH8F5wngTA03SqnMUTdRm9j7G7G7tP9NciYVrGYrA08rV9nsRj1FVkRk4oWwq6gAcPHk3mCod5wNEPT%2BxiGs9yrUN%2FUiopfsODVeUoJylnpTeFh%2BndopvzZUQi6vMkIduFkOQw4Dr35Nyukq9g0h0NzWnLYo6PIUDAW9yYFzlud99%2Bq44auS9FnaTJEBltFyVLhJXE8SMQf06XefNPTw3nrs8QVqM3kQXyZpVOGJEhIgarYKOms8A5qrzvw8vsu1PluXbUoCupbHWTvTO4vAh6Xp4quaYCFyJZ4p1HwossWFi501GfLYxEjfNsQx9DTwySOZ%2BHirUgTB%2FI7zhuag9EUD9SIitLEDP8RN%2FJb0YMFwX77xvBBpEbw8JP3e4aKuZbjDEMlJQvOM0ImejW%2B7wyekc37bD42MjNAAHzmveQGbwuY1m4LPnq2jNB48lQMqeuGwbM%2FVjT3asqbrMmHmDb3heKEM7ljaxr%2B0%2BsIEFaGOfY5lxYwXGu7R6DLa383SO2hLsSA6CUP8ae8dNK0%2FZJ5iD7Vuy8Z88etYmh8bPcPw2kPoDqdMZPrrRuta4y6ZDHKcLXxiLBRzYkueq9PbBINT5zL%2BmJqt3NL5GVaxFloctOhVyDMN2w678GOqUBh7Qze1saB0x%2FKglTUKYKL%2BnOgu1p9sWw1J6mtIpVumh2aSQwwbX1toR%2BftWRTbgqLMZojC7LnbU19SKGJVybzQ9kmnMZchs3C5jLtMhd5VxselUnXeNgtFktAQi6aYBfdZM0Ysz%2FQonXnOKKrKdfCNOMNWvQlB3rQiB72hB3Tq23%2FYmTgAuKrBTrNHupButQyLPZUDZYuaJIlEM1dozEZuGhiBhA&X-Amz-Signature=2696df07e207887e5aa55f70ea61f8b26bf4b6c37ac25c33b68fa84f8ac5b0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7HZDB2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDY1AtIvQ7RKzHD45XiWf4WjQCn9hzXc5YC9O61eNvcaAiEA03uWguXbHeRjFjmRn7TMa9LXrlV5I37XJRO%2B6r18csQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqhA2FkoMoAOTcaeCrcA45VqIDf79sH8F5wngTA03SqnMUTdRm9j7G7G7tP9NciYVrGYrA08rV9nsRj1FVkRk4oWwq6gAcPHk3mCod5wNEPT%2BxiGs9yrUN%2FUiopfsODVeUoJylnpTeFh%2BndopvzZUQi6vMkIduFkOQw4Dr35Nyukq9g0h0NzWnLYo6PIUDAW9yYFzlud99%2Bq44auS9FnaTJEBltFyVLhJXE8SMQf06XefNPTw3nrs8QVqM3kQXyZpVOGJEhIgarYKOms8A5qrzvw8vsu1PluXbUoCupbHWTvTO4vAh6Xp4quaYCFyJZ4p1HwossWFi501GfLYxEjfNsQx9DTwySOZ%2BHirUgTB%2FI7zhuag9EUD9SIitLEDP8RN%2FJb0YMFwX77xvBBpEbw8JP3e4aKuZbjDEMlJQvOM0ImejW%2B7wyekc37bD42MjNAAHzmveQGbwuY1m4LPnq2jNB48lQMqeuGwbM%2FVjT3asqbrMmHmDb3heKEM7ljaxr%2B0%2BsIEFaGOfY5lxYwXGu7R6DLa383SO2hLsSA6CUP8ae8dNK0%2FZJ5iD7Vuy8Z88etYmh8bPcPw2kPoDqdMZPrrRuta4y6ZDHKcLXxiLBRzYkueq9PbBINT5zL%2BmJqt3NL5GVaxFloctOhVyDMN2w678GOqUBh7Qze1saB0x%2FKglTUKYKL%2BnOgu1p9sWw1J6mtIpVumh2aSQwwbX1toR%2BftWRTbgqLMZojC7LnbU19SKGJVybzQ9kmnMZchs3C5jLtMhd5VxselUnXeNgtFktAQi6aYBfdZM0Ysz%2FQonXnOKKrKdfCNOMNWvQlB3rQiB72hB3Tq23%2FYmTgAuKrBTrNHupButQyLPZUDZYuaJIlEM1dozEZuGhiBhA&X-Amz-Signature=98620a92d0b3195dca1a25bb46363f24a16046e7aedaa1e3cc7fedcb6709e519&X-Amz-SignedHeaders=host&x-id=GetObject)

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
