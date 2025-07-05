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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7X2KUG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDc3FjE2OgIaZ4nMMDbCVGHZcuJCosYEAmzPbKXSuhF6AiBAGcvNKCtzyjg3XMfOcY6ydojzyPlCtXfqe%2Fo5Avna%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfQ0%2BScyvH3Rme%2BnCKtwD1RJW2QkXizsUL2huAG34euJS49qvR5QuWD5z035oeq2NbcbcDsDHonBJApa7QXSBQxap7crD%2B68ZAQSUgQO0jMBoODJo%2Bj8DokmzsiZc50J11wR6oeXvjd1ZZo5MrzA3DcUAqOdZFcP2mwhL762NL%2FKqWykO8QJSVw2Tq%2B8OQ9clidsY%2Ff6%2BRo3cR7Th4L0tfjY26c76LEk2e3H8Rem%2FvzKrhjUfgjuyDoPT5X82RegvfMrjfPFUHW%2BqMU0hiuo9c99z6qP1Ag%2FWhIo75XN%2FZNPrA5wm000gdgCo7LTRzCDZU6UA62D9OhTQ2lVJyemQmk0JUXAh%2BrTQi1It5tml8rDo1K4M8UOK5RrA1EPJNXFh4M6sY3zsOu2NOeUA5ZJoOtZXGJt0vqfsXjFGV5afxCDxgUJsbJvesryplEk2MaJtAOO6nW%2F0FPzR8mwkQO08o0vccagMAjiZwRQ42ccxNfP84wLQ33bb6GhRHp1Hf1x%2FwZjE%2BdNRm%2B%2FIbtb61gFGsrRCEE6ffeF%2BFwnhP2WFK3np2RNlblmCEYfL0ss4RdKWIZ8RpjcIfNUwq6%2B2B9h%2BYoMbLC4k98V5I9gbsV1wR2MqXMAzS8TwD11%2FJHg6n9nOuzRXERZqFdJPDJMwoOSlwwY6pgEDJNo4oNagj2LDbiefWvLbDsw79t1pj7uRKGlf3JJZaXsVnMT444zAS2puMKH9foXcpsZ4Q4NelAIpFciCN2K4V313EKdKKK23HgAwlzNeTHoqDNjqvJUi9EMTOB6WTR7k3uJwBzX44Q0gLqa8w1OOmo%2FxMjRVY6ziYyeGtsjzshgkYk5sntjhWsec36%2FuTOcbPfTeqUCMlCzHyUwbo%2FneoA7D7wM%2F&X-Amz-Signature=7795cba8ce09190cbaeaaa413084afff1f209f8889ff426385daa81235f73e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7X2KUG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDc3FjE2OgIaZ4nMMDbCVGHZcuJCosYEAmzPbKXSuhF6AiBAGcvNKCtzyjg3XMfOcY6ydojzyPlCtXfqe%2Fo5Avna%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfQ0%2BScyvH3Rme%2BnCKtwD1RJW2QkXizsUL2huAG34euJS49qvR5QuWD5z035oeq2NbcbcDsDHonBJApa7QXSBQxap7crD%2B68ZAQSUgQO0jMBoODJo%2Bj8DokmzsiZc50J11wR6oeXvjd1ZZo5MrzA3DcUAqOdZFcP2mwhL762NL%2FKqWykO8QJSVw2Tq%2B8OQ9clidsY%2Ff6%2BRo3cR7Th4L0tfjY26c76LEk2e3H8Rem%2FvzKrhjUfgjuyDoPT5X82RegvfMrjfPFUHW%2BqMU0hiuo9c99z6qP1Ag%2FWhIo75XN%2FZNPrA5wm000gdgCo7LTRzCDZU6UA62D9OhTQ2lVJyemQmk0JUXAh%2BrTQi1It5tml8rDo1K4M8UOK5RrA1EPJNXFh4M6sY3zsOu2NOeUA5ZJoOtZXGJt0vqfsXjFGV5afxCDxgUJsbJvesryplEk2MaJtAOO6nW%2F0FPzR8mwkQO08o0vccagMAjiZwRQ42ccxNfP84wLQ33bb6GhRHp1Hf1x%2FwZjE%2BdNRm%2B%2FIbtb61gFGsrRCEE6ffeF%2BFwnhP2WFK3np2RNlblmCEYfL0ss4RdKWIZ8RpjcIfNUwq6%2B2B9h%2BYoMbLC4k98V5I9gbsV1wR2MqXMAzS8TwD11%2FJHg6n9nOuzRXERZqFdJPDJMwoOSlwwY6pgEDJNo4oNagj2LDbiefWvLbDsw79t1pj7uRKGlf3JJZaXsVnMT444zAS2puMKH9foXcpsZ4Q4NelAIpFciCN2K4V313EKdKKK23HgAwlzNeTHoqDNjqvJUi9EMTOB6WTR7k3uJwBzX44Q0gLqa8w1OOmo%2FxMjRVY6ziYyeGtsjzshgkYk5sntjhWsec36%2FuTOcbPfTeqUCMlCzHyUwbo%2FneoA7D7wM%2F&X-Amz-Signature=0a273e988adedede22572982f59a4ae68ab56ebef0bcc900adc68e2c2eef6e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
