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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPZ5OGE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDckJb4xHmO6RaG5NmW3NPA%2FMbZX3IAUe5bulLuIO26lAIgc1EVNd5OLEg29NDa2ubBOZT8Oz2ABILl0PWqe8qsLE4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHGvHip%2FFCiAbI%2BvlCrcA8nVEdc%2FIVkQPjn3ZBdlriKrZjRW6d2mYwpHeRBKjDDnUbyPstRXvcf1hGjJWQHKmN1V4fGb4MUEaMIcKrOA1BhqY1WrL12K1uDXQiCLHM6BKges8TPTXbq9mXPvnv9DNX7IT6xmqn7BBiwIdZV49W%2FLRWJk1Tya40eHafHtVTsWWzjjnUAZ1QpaO6YFpKX3X7KrDnx7QuiXEVelzgOphtbdsIOkNXX%2Bbw7DwHMOqipGF0KfGiwunPFpWgVhqEKGh4McrppCbuMvCYdtC4lvNMTKK08NBrq4joxcg4DbN%2BBMj2UMTWwFRHAAO2BJuGCL2jePIeNHXdPuWvlqsI7m6E%2BqD7K1J4elYNDoH9jWAlBoFpSHawJZiyBr553HbYyr5K1glnyb5UKLElVDJkea%2FrvQhevgRY6CATnpsGXoXwLjKU1m4FEuEQH93Qfow4zN%2FWbt1Qts8R8roO%2FW5u61YvdOE3asdvrAlSLEapX2EUmRmURWagNQykqevTgjmjzHkswJ0OQq%2FoKygdkiYXUSI6x%2BthPd7KaJhKf1CMwdOR1Mq32CqJPk9WoOktrJR%2F7ZdRIOvVgx8%2BQPcNeZpr7PX0SYZ%2BzB75fhpDuVlsXE0yH0oT1NJlmVvpNfEyliMJa2lcEGOqUB5SvPaprNRJ8aJ8xkFog4nOAt%2FVduBDC19l2zVqxoVEtovOO8lLo3dDO8virmjLBTalNw8HWdXQ4Dhb6ts%2BdH2k0gv9%2B%2F14cEbnLopjWw%2B5Z9ifDTkjAruU7B0j%2BB%2FfhsOCr0sCa7dte4pN%2Fs8yyLPct%2FxXnAUehmYqjfSPoI1t5v7BpKIWd%2FOJbPAFdqmeg34L0F0tuHNwXYZUUk7NAT7159z0tH&X-Amz-Signature=f62e9bae3dd9b08b8836657bcbd2f88974b0e177089a8cf83f271a292ef3217e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPZ5OGE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDckJb4xHmO6RaG5NmW3NPA%2FMbZX3IAUe5bulLuIO26lAIgc1EVNd5OLEg29NDa2ubBOZT8Oz2ABILl0PWqe8qsLE4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHGvHip%2FFCiAbI%2BvlCrcA8nVEdc%2FIVkQPjn3ZBdlriKrZjRW6d2mYwpHeRBKjDDnUbyPstRXvcf1hGjJWQHKmN1V4fGb4MUEaMIcKrOA1BhqY1WrL12K1uDXQiCLHM6BKges8TPTXbq9mXPvnv9DNX7IT6xmqn7BBiwIdZV49W%2FLRWJk1Tya40eHafHtVTsWWzjjnUAZ1QpaO6YFpKX3X7KrDnx7QuiXEVelzgOphtbdsIOkNXX%2Bbw7DwHMOqipGF0KfGiwunPFpWgVhqEKGh4McrppCbuMvCYdtC4lvNMTKK08NBrq4joxcg4DbN%2BBMj2UMTWwFRHAAO2BJuGCL2jePIeNHXdPuWvlqsI7m6E%2BqD7K1J4elYNDoH9jWAlBoFpSHawJZiyBr553HbYyr5K1glnyb5UKLElVDJkea%2FrvQhevgRY6CATnpsGXoXwLjKU1m4FEuEQH93Qfow4zN%2FWbt1Qts8R8roO%2FW5u61YvdOE3asdvrAlSLEapX2EUmRmURWagNQykqevTgjmjzHkswJ0OQq%2FoKygdkiYXUSI6x%2BthPd7KaJhKf1CMwdOR1Mq32CqJPk9WoOktrJR%2F7ZdRIOvVgx8%2BQPcNeZpr7PX0SYZ%2BzB75fhpDuVlsXE0yH0oT1NJlmVvpNfEyliMJa2lcEGOqUB5SvPaprNRJ8aJ8xkFog4nOAt%2FVduBDC19l2zVqxoVEtovOO8lLo3dDO8virmjLBTalNw8HWdXQ4Dhb6ts%2BdH2k0gv9%2B%2F14cEbnLopjWw%2B5Z9ifDTkjAruU7B0j%2BB%2FfhsOCr0sCa7dte4pN%2Fs8yyLPct%2FxXnAUehmYqjfSPoI1t5v7BpKIWd%2FOJbPAFdqmeg34L0F0tuHNwXYZUUk7NAT7159z0tH&X-Amz-Signature=69b4cd8c720d494e3651f7b69782c42c36d01603f23a2315bfc4e4d0e0198dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
