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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VTWMEA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzSTSDCVsgOlYGPBQ1o7J%2FLyn8z6bSXVVUGathNRk4AiEAqq0q5lnvBEOcB7qWQFId6uDq8FWR40pf8qRYDqWWBTAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHxybCLh%2FUf9zYoHSrcA4vOvFz00N7T6E4j4xMMsbi7J09T5cHCE3Xbj93won3XMBe25ipapDlndOl%2FKG6yhgiFsWuVO3KHKCc6KEBhP5FaIPnZCgNNPx7eJRrRAXrVHtaUbt2%2BcE8JpPYY4J0oibebE0mAhMUl7foTml8S5yYTKAuLQRyVai5HVjmEGbKax8FLximhRLjztaT6%2BCmMw%2FUVo1NsRxb7Sx8wOp5yJdmBqRtd%2FzfXNOZtY0YbFxVRhLKTOkD%2F0udXVIKhx4iDhDEQ9bheY80OCmAfpYS8g%2Fs9NcO%2BuH4ySw54EDsQeVZcg%2FkiZlCYgeQlsvMUWI%2BUt6ckc3oRlhyzLLxi8iyel8xISGEj%2BM7H3tEhFMeiTaYsjK37bdoAYYWXDcuGW%2FJBS2VA1r5xbni%2BvWESJ78Pf%2F7kPvBVeYfMV7wbxx4H1kPeoHiZ%2Fi5UHb3mGBeLZ0iHciaci0cs4R3n8TU3RXyZf9RxL0bdzEmKHyX05Eo9fXAFX3dLxKOJUX4pF9ILRZOgUELTkohKkM1MGQGuk9uwWUFZHii%2BgTvUdGuKyXKh0daRHzzBczzIs%2FPb6kIVUDkFffyyVev1%2BP9aSu2yakgQETIW5URkoP82TXQ5zNI8AD5E7HZt8AUnL8Po6ylPMJSY7rwGOqUBZKiyEQ9dV8ZSl83Kj9gGl2yM3%2BNBksl0g8anOE9mQpPx2JD4V8vXmPmInOUFNyTWkPWurXIIv9ALXaDhsYq%2BWPv4BnbZ%2FNrQ%2BF4Uh4LmF%2BclYlCeaQ1Q6wu8bRznrXgYUkmdch0GL3%2BjrD0qUf6KfyzFmCOos4x2fxaSYPukKbgjl9QMmNhO7pSVX2zEJ3O1BP%2FkvhyWSp2xcuGHLiQVQfkAcU3K&X-Amz-Signature=d6ee8883ac5862d36903f020eb15082c2cd9b1a7f51e0129d98294a144d09a23&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VTWMEA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzSTSDCVsgOlYGPBQ1o7J%2FLyn8z6bSXVVUGathNRk4AiEAqq0q5lnvBEOcB7qWQFId6uDq8FWR40pf8qRYDqWWBTAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHxybCLh%2FUf9zYoHSrcA4vOvFz00N7T6E4j4xMMsbi7J09T5cHCE3Xbj93won3XMBe25ipapDlndOl%2FKG6yhgiFsWuVO3KHKCc6KEBhP5FaIPnZCgNNPx7eJRrRAXrVHtaUbt2%2BcE8JpPYY4J0oibebE0mAhMUl7foTml8S5yYTKAuLQRyVai5HVjmEGbKax8FLximhRLjztaT6%2BCmMw%2FUVo1NsRxb7Sx8wOp5yJdmBqRtd%2FzfXNOZtY0YbFxVRhLKTOkD%2F0udXVIKhx4iDhDEQ9bheY80OCmAfpYS8g%2Fs9NcO%2BuH4ySw54EDsQeVZcg%2FkiZlCYgeQlsvMUWI%2BUt6ckc3oRlhyzLLxi8iyel8xISGEj%2BM7H3tEhFMeiTaYsjK37bdoAYYWXDcuGW%2FJBS2VA1r5xbni%2BvWESJ78Pf%2F7kPvBVeYfMV7wbxx4H1kPeoHiZ%2Fi5UHb3mGBeLZ0iHciaci0cs4R3n8TU3RXyZf9RxL0bdzEmKHyX05Eo9fXAFX3dLxKOJUX4pF9ILRZOgUELTkohKkM1MGQGuk9uwWUFZHii%2BgTvUdGuKyXKh0daRHzzBczzIs%2FPb6kIVUDkFffyyVev1%2BP9aSu2yakgQETIW5URkoP82TXQ5zNI8AD5E7HZt8AUnL8Po6ylPMJSY7rwGOqUBZKiyEQ9dV8ZSl83Kj9gGl2yM3%2BNBksl0g8anOE9mQpPx2JD4V8vXmPmInOUFNyTWkPWurXIIv9ALXaDhsYq%2BWPv4BnbZ%2FNrQ%2BF4Uh4LmF%2BclYlCeaQ1Q6wu8bRznrXgYUkmdch0GL3%2BjrD0qUf6KfyzFmCOos4x2fxaSYPukKbgjl9QMmNhO7pSVX2zEJ3O1BP%2FkvhyWSp2xcuGHLiQVQfkAcU3K&X-Amz-Signature=bb85fd1499943e4b35d2eaad08d5104d3e52387ba1d63c699a1ae9d0284ab432&X-Amz-SignedHeaders=host&x-id=GetObject)

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
