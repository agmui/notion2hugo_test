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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FUXFAG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzNIiGgTQVSg0DK7gMoTLX7vRRp5Yi%2ByPYa8FgFDvJcwIgWmJWL9XKatV6MhhnVitHw4GOimRNtfUUfYG3HRPYVycqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFPpF%2F%2FEEYs0N%2FxGCrcA5LxQEDnb2rGr3GnWac7yc47s0vlDnQyfpAewgfd4jZKkjS9j76%2FyvJm9a%2ByQ9PM0P7O1tu32JbMOwOaHryr2u5uoMTViL%2BfZYQJLfyabKi4szmOgRjvcWNsq6FC31Bg5PgDnQxz85ez7GmD3UhYsrkn%2FxGjxwkwDaab4xRtwZ0yz6zpukXnXzGV%2FUvYmtXpGxu9lsAcgiRwNHyFNhj%2B%2B1PuLAj7iJOdKON%2FV4oF5kT90r6blhsjaFpVadYrRscBNmVC4FTsngPGjFJMO54tFfblr4CsAGIscqG0qNt1%2FS3Alt4pNzBuyqjEMFU9z8AA2ezVJ8RKoTZm%2Fsu1TvyxIgx6sgs7yH%2BttUhJwQFamjHiIGNmIlkMbhAUoP6RX6QaIl2UYu%2FZuRMSUG%2Fky4Zb2xoTSpjcs3vaSGgWSOnRy9BN2ZkmH8X8Sdwm2kqiliLgZHadZpkOystihZOmSe5azBUAtdtKAWant0ncmZu%2BO7C27gw%2Bcx5FGjmCo8vvQSYD1xfQMXdBOS%2BcyFcHUcvUfNiiALHHM86QkGy0VD8VykZbhyjy6GgF%2FENVvsPhP41vJgsjSTxaurVsjWn1Mb5I2Tfhk7vp6%2FxwR7ZbfzU29XaY8chFxLGFQBdTE8ckMKjir8EGOqUBtO1Ld5ypblzsiq0d9KndfVX5jjKKPDTZtb2x7rGS3ZRc5p5%2FbciWfqK7dzrcOWNZmHF5ynYY3ImtugZsQa4L0HuB0mzOk%2BwzqByJxBkd9%2FvY0zcy43TwgnCzF7aKxKSMDYwnfSTDx98tTprf3Np9wDzzCTKvTgftzA4o%2BG%2Fh2VkfYNdaMwOsyz7E6W%2BL37b3HXD5FgrNQQ0F8%2BKocDvOds%2FkMRHp&X-Amz-Signature=70e5337a4aba928fe8eae54a64c5004c748df0c7d5765a64048235a2f173401f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FUXFAG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzNIiGgTQVSg0DK7gMoTLX7vRRp5Yi%2ByPYa8FgFDvJcwIgWmJWL9XKatV6MhhnVitHw4GOimRNtfUUfYG3HRPYVycqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFPpF%2F%2FEEYs0N%2FxGCrcA5LxQEDnb2rGr3GnWac7yc47s0vlDnQyfpAewgfd4jZKkjS9j76%2FyvJm9a%2ByQ9PM0P7O1tu32JbMOwOaHryr2u5uoMTViL%2BfZYQJLfyabKi4szmOgRjvcWNsq6FC31Bg5PgDnQxz85ez7GmD3UhYsrkn%2FxGjxwkwDaab4xRtwZ0yz6zpukXnXzGV%2FUvYmtXpGxu9lsAcgiRwNHyFNhj%2B%2B1PuLAj7iJOdKON%2FV4oF5kT90r6blhsjaFpVadYrRscBNmVC4FTsngPGjFJMO54tFfblr4CsAGIscqG0qNt1%2FS3Alt4pNzBuyqjEMFU9z8AA2ezVJ8RKoTZm%2Fsu1TvyxIgx6sgs7yH%2BttUhJwQFamjHiIGNmIlkMbhAUoP6RX6QaIl2UYu%2FZuRMSUG%2Fky4Zb2xoTSpjcs3vaSGgWSOnRy9BN2ZkmH8X8Sdwm2kqiliLgZHadZpkOystihZOmSe5azBUAtdtKAWant0ncmZu%2BO7C27gw%2Bcx5FGjmCo8vvQSYD1xfQMXdBOS%2BcyFcHUcvUfNiiALHHM86QkGy0VD8VykZbhyjy6GgF%2FENVvsPhP41vJgsjSTxaurVsjWn1Mb5I2Tfhk7vp6%2FxwR7ZbfzU29XaY8chFxLGFQBdTE8ckMKjir8EGOqUBtO1Ld5ypblzsiq0d9KndfVX5jjKKPDTZtb2x7rGS3ZRc5p5%2FbciWfqK7dzrcOWNZmHF5ynYY3ImtugZsQa4L0HuB0mzOk%2BwzqByJxBkd9%2FvY0zcy43TwgnCzF7aKxKSMDYwnfSTDx98tTprf3Np9wDzzCTKvTgftzA4o%2BG%2Fh2VkfYNdaMwOsyz7E6W%2BL37b3HXD5FgrNQQ0F8%2BKocDvOds%2FkMRHp&X-Amz-Signature=6993be1a3ac3739ce629e99e4119b2005f9e572f6f16d9555123d0d178d2bfdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
