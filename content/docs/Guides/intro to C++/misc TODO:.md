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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BLZUOA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGHSbaNRpUpVzjmgY0lzDWj4CkUC0gpPs%2Fz%2BllUOkB%2FoAiBT9GdIGPD%2Fnvj7PrTgYmKspGKsHACbKkI7Yk1I1gnl6Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMVKKFqk9SoBNON36bKtwDkeTYjf0D1x%2FD0CsYlj22zr%2FfAJiS4bMO59HzD1x1RwxhVxYQjmp7jCmQXzuDnLH1F80wRZyqh0BtTCvpn%2Bz1nb0AdnidMBzi0Pzczyucf6kHw01WEZvt1PMOz5QXBd9RrpR80T0bCxP1ovoG7LKSJOLkDbqsmXIbrpcVe6i7b%2FZ%2FxHGvNso2oH9wD3%2FGUUpD%2BkFR8qTwlE6grdfDEUHuvZDDT00k7%2F3CrLD8%2Br2U8iLL0hVgDgeRkNDJT%2BTdAod0xx022YB%2BeU330aDScMWIWS0LYBajFFl2fhxAQLxukswkcZ41NCwc8xfKQqUjx0b359eW%2BZcDpXQ1bQfdfVLn3f0Iz4s5z3deUIdifezJJgm1piTdh4BMrWjbtYGD%2BxqUki5o2mIWGL4A9f%2FxVkVE8yqMXbFVx2d6ha4dP%2BWxAW2ZFlh4yaggLaIviv54Ldn7%2FJWsLxoyU5HrU9q2VaFkUzxw461DCGXYcdIWIhX0wptKbJf1TsAyrY3ZbX2rFwFosoAX1B36ykTbb9w5fML7ruqZECgKTZIPpZacM%2FkmocfBr%2Ba7%2FJucU0yBen9wfLwbegOFWm6zYYTREN2ggQNj59ItneVlpXWgzkkY2KFzCvkWmI6DtaJB6bqH6E4wob3rvgY6pgGWl2vSVPkK30E8JdVEmV2OXX0gxTUHttes8NU1b2fatF7OwvznhTEh5%2BA1RZJoilcoNj08woTa395XlQmncFcrwF7GV9SeGZglPdRg4Ul1ByOzvowGrPat4KvB7ffvwfKSRcG6Ipc7Pzo1a2bW9GVdtRumvIMx6A%2B%2FOxRlpGlxq%2FsPfoNRMdEeJja009mG6yCARkqg19JWVpMekS%2BRuPmA1%2F38Xi4t&X-Amz-Signature=4fd4803d3c16d2392d732aa4442298105a2174e84aa3df955f81b2cae9f10d54&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BLZUOA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGHSbaNRpUpVzjmgY0lzDWj4CkUC0gpPs%2Fz%2BllUOkB%2FoAiBT9GdIGPD%2Fnvj7PrTgYmKspGKsHACbKkI7Yk1I1gnl6Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMVKKFqk9SoBNON36bKtwDkeTYjf0D1x%2FD0CsYlj22zr%2FfAJiS4bMO59HzD1x1RwxhVxYQjmp7jCmQXzuDnLH1F80wRZyqh0BtTCvpn%2Bz1nb0AdnidMBzi0Pzczyucf6kHw01WEZvt1PMOz5QXBd9RrpR80T0bCxP1ovoG7LKSJOLkDbqsmXIbrpcVe6i7b%2FZ%2FxHGvNso2oH9wD3%2FGUUpD%2BkFR8qTwlE6grdfDEUHuvZDDT00k7%2F3CrLD8%2Br2U8iLL0hVgDgeRkNDJT%2BTdAod0xx022YB%2BeU330aDScMWIWS0LYBajFFl2fhxAQLxukswkcZ41NCwc8xfKQqUjx0b359eW%2BZcDpXQ1bQfdfVLn3f0Iz4s5z3deUIdifezJJgm1piTdh4BMrWjbtYGD%2BxqUki5o2mIWGL4A9f%2FxVkVE8yqMXbFVx2d6ha4dP%2BWxAW2ZFlh4yaggLaIviv54Ldn7%2FJWsLxoyU5HrU9q2VaFkUzxw461DCGXYcdIWIhX0wptKbJf1TsAyrY3ZbX2rFwFosoAX1B36ykTbb9w5fML7ruqZECgKTZIPpZacM%2FkmocfBr%2Ba7%2FJucU0yBen9wfLwbegOFWm6zYYTREN2ggQNj59ItneVlpXWgzkkY2KFzCvkWmI6DtaJB6bqH6E4wob3rvgY6pgGWl2vSVPkK30E8JdVEmV2OXX0gxTUHttes8NU1b2fatF7OwvznhTEh5%2BA1RZJoilcoNj08woTa395XlQmncFcrwF7GV9SeGZglPdRg4Ul1ByOzvowGrPat4KvB7ffvwfKSRcG6Ipc7Pzo1a2bW9GVdtRumvIMx6A%2B%2FOxRlpGlxq%2FsPfoNRMdEeJja009mG6yCARkqg19JWVpMekS%2BRuPmA1%2F38Xi4t&X-Amz-Signature=ce20e3ed0abd3043af379a706591e61a5c826b66758e793d0c951afdf2e033e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
