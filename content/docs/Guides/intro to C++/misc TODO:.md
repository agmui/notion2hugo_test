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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4MNHCK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDaUfCkOosM3Vkmm3SjVYnLAsm2PTgWrQWgaT455u5jZwIgLlA5I6t9xSAf01kezlByfIBUXwZcRgDgvGIOUdXXoJkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBrkQi0NH5eK2PgT7ircAyXhX9GhxcjxLFg1wdeZzVZhqbPT6Xc%2FpycBUy5IQmJfWsZQSbG7WuKbcoZe9%2B8MypzYlPJaAO6zQ%2FyQaWgM17tZk9ME1cL%2FUZ89rSyldsfvwsdR7n4oLM38jvt%2F1IjEAdUqjgbXBftc1NRYriEDU%2BTfq64tzBGjOVdF4ndVSp%2BJp2Chzj%2F5m%2BFUWu%2FrCJqKFpbW4W2GRKEW80vcxKxsgsYO%2FbY4TDcpaElWqQXc%2FyjVV4WF7jGgPhj507oYh6vZElFqzQVsvy%2B7zT%2BQe9tj48RoNa8pdy3wKOQXCUeLmMfqM%2FTO%2BIQNNJKDVuDKdR75zmU5KSpHE%2Bz6rEssDD4ogvBTbfTFxWlA8cfKBAFvngsIzfDEY%2BYzbwckgjpGPMGZpXDOzlv8gdCkXQeGw7WDZT4WDzqJ2UObIZVvsRegwD7POAmidT2jIMO8BUusbTSorupMlpfrEJk2w%2FwO%2F8ec2pWO6cX7oCnMApKevb74Eo1MZ%2FLv%2FitLeYVy%2BLryuaNjwpa1GBYIioY8d9Ij%2FPlNHWgJHFxxqP%2BQO93RNwLMBpgm4O3DFY%2Bt%2Fwr9AjGxV5AuGKSyoS5NCmag7KX0r3ANfzJS4vLzE9VKIoqvzM0PLKDPdhm0VJC8e2UwrNPRMNGtgsIGOqUBGkTUS4tSQJeAVprMk8Fm5%2FvfYIXW1cZ8RepAlqMnwc1IECtkdbp%2FYyjtux6YJ2uLGcXq1etPoRlo8uLSEqzcA3%2BY6HDQwNxWR%2B7LsdQpaj079RDTXkbQgzROjHqLqtoe4uM6jfYuJjTRudjgYZXeWT9tkGl44Y7UYm60ca3%2F1wbp112KF6%2Fj9sltJgcFUeOeZIoyQaZAB%2FFo%2FD%2BeEVdQ4G6rq4iM&X-Amz-Signature=5714d99c7df897b4846f117b1863c40f3f4a86827a297c124718e74d61adace3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4MNHCK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDaUfCkOosM3Vkmm3SjVYnLAsm2PTgWrQWgaT455u5jZwIgLlA5I6t9xSAf01kezlByfIBUXwZcRgDgvGIOUdXXoJkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBrkQi0NH5eK2PgT7ircAyXhX9GhxcjxLFg1wdeZzVZhqbPT6Xc%2FpycBUy5IQmJfWsZQSbG7WuKbcoZe9%2B8MypzYlPJaAO6zQ%2FyQaWgM17tZk9ME1cL%2FUZ89rSyldsfvwsdR7n4oLM38jvt%2F1IjEAdUqjgbXBftc1NRYriEDU%2BTfq64tzBGjOVdF4ndVSp%2BJp2Chzj%2F5m%2BFUWu%2FrCJqKFpbW4W2GRKEW80vcxKxsgsYO%2FbY4TDcpaElWqQXc%2FyjVV4WF7jGgPhj507oYh6vZElFqzQVsvy%2B7zT%2BQe9tj48RoNa8pdy3wKOQXCUeLmMfqM%2FTO%2BIQNNJKDVuDKdR75zmU5KSpHE%2Bz6rEssDD4ogvBTbfTFxWlA8cfKBAFvngsIzfDEY%2BYzbwckgjpGPMGZpXDOzlv8gdCkXQeGw7WDZT4WDzqJ2UObIZVvsRegwD7POAmidT2jIMO8BUusbTSorupMlpfrEJk2w%2FwO%2F8ec2pWO6cX7oCnMApKevb74Eo1MZ%2FLv%2FitLeYVy%2BLryuaNjwpa1GBYIioY8d9Ij%2FPlNHWgJHFxxqP%2BQO93RNwLMBpgm4O3DFY%2Bt%2Fwr9AjGxV5AuGKSyoS5NCmag7KX0r3ANfzJS4vLzE9VKIoqvzM0PLKDPdhm0VJC8e2UwrNPRMNGtgsIGOqUBGkTUS4tSQJeAVprMk8Fm5%2FvfYIXW1cZ8RepAlqMnwc1IECtkdbp%2FYyjtux6YJ2uLGcXq1etPoRlo8uLSEqzcA3%2BY6HDQwNxWR%2B7LsdQpaj079RDTXkbQgzROjHqLqtoe4uM6jfYuJjTRudjgYZXeWT9tkGl44Y7UYm60ca3%2F1wbp112KF6%2Fj9sltJgcFUeOeZIoyQaZAB%2FFo%2FD%2BeEVdQ4G6rq4iM&X-Amz-Signature=24da3c59482ccf0edc233112c19c951a3e12e90f1137656453ed6ac9d224442e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
