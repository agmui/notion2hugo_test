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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LR5UQE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICWo%2Buatvx%2BWqxnoGgBnpFjm17spSQUED4QCV%2BlzxU2UAiA%2Bus5173Cdt5odYFYQ%2BmmrC%2BT00pU7pIVCg0g1ZOlV%2FiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJ8vtS1zb4M3bLSQKtwDZvcdLJ2ntNfUQa9YFZo733vy82LlxHxBSz6%2Fuoehzn%2BzqZukrLdhNyLPLgOC1VLUHXAoAFaDpOZaQOmP1QuhI%2Bm6wKLzA4B3BknGTAV3kZZ2YPw8HnMpSWgh7w%2Bfc5WpoW6Lal%2Bx1dCRoTsyg39%2BejK%2BnBbdyt3JqcyQjqr1cfwTeycI62NwDF0WZtRbHoc22xd1MB2YOb01zNMrE3SyzTTuEHua5pm3QxiRtkaj8bt4BD03IPRy%2BR49PHSMfh84csdF%2B3Ui7%2FaQZ7C2%2BSDDmqWLXoMBRHF%2FnZtNWMjXo9d%2FQJhvKpJT7vhjYWcmUEe%2Fc1R7FEoG3CXvcXjSVedYz5MBu%2FxEiEiS%2FBPBFyqeolMC1BvU0II8Yq%2BUnQxeOVvFPqhIkqX3TsviJY4cxqbD6qlNCcXTuvGeqbRWTr9w%2BFpPCLZN596Muz%2FzxXYyVdvN6njrVhw7%2B1kfWD5vwFpRUcnji4NcbyqkttCmaURIJT9yV5klJPpOefm%2BcnSovYcxMLyIJMmCnVZOj0yfDyLNw3HLl5%2F2AROLD4rbgEILt2%2BVpvkS4QRzo9vlUvcOrfkgWTWdOUEhTc3POGH5IA93dnX4TO89NXvEpjSgPcAUZPOtptCqpZ8dxLzT%2Fogw8rWmvwY6pgHqNMfNYebQ0%2FPI%2FjmrQ1oOh8gKND0JTDajQ8RPGP9ZYv5DJOyLC%2Fh4V5KUqhjYGcGsQVx3pYAPOBkdF4zZV5PIVZWlQaHKxjSZ33tgTgPN8ZJHTkqI7k8AFWqjd%2BpCHSbQiUi%2BraALC21rrJ%2FKlllFJL%2F4VC0CJzkRKfu0GrpdAfjUilfx8A%2B0PfGvYIlQPxmu96sh1YGx4srG3Bh1kP5IMQPXebng&X-Amz-Signature=b69296f18ff18193620e6d6be074a927878c0a98cb97b01c3e189b91afe05cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LR5UQE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICWo%2Buatvx%2BWqxnoGgBnpFjm17spSQUED4QCV%2BlzxU2UAiA%2Bus5173Cdt5odYFYQ%2BmmrC%2BT00pU7pIVCg0g1ZOlV%2FiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJ8vtS1zb4M3bLSQKtwDZvcdLJ2ntNfUQa9YFZo733vy82LlxHxBSz6%2Fuoehzn%2BzqZukrLdhNyLPLgOC1VLUHXAoAFaDpOZaQOmP1QuhI%2Bm6wKLzA4B3BknGTAV3kZZ2YPw8HnMpSWgh7w%2Bfc5WpoW6Lal%2Bx1dCRoTsyg39%2BejK%2BnBbdyt3JqcyQjqr1cfwTeycI62NwDF0WZtRbHoc22xd1MB2YOb01zNMrE3SyzTTuEHua5pm3QxiRtkaj8bt4BD03IPRy%2BR49PHSMfh84csdF%2B3Ui7%2FaQZ7C2%2BSDDmqWLXoMBRHF%2FnZtNWMjXo9d%2FQJhvKpJT7vhjYWcmUEe%2Fc1R7FEoG3CXvcXjSVedYz5MBu%2FxEiEiS%2FBPBFyqeolMC1BvU0II8Yq%2BUnQxeOVvFPqhIkqX3TsviJY4cxqbD6qlNCcXTuvGeqbRWTr9w%2BFpPCLZN596Muz%2FzxXYyVdvN6njrVhw7%2B1kfWD5vwFpRUcnji4NcbyqkttCmaURIJT9yV5klJPpOefm%2BcnSovYcxMLyIJMmCnVZOj0yfDyLNw3HLl5%2F2AROLD4rbgEILt2%2BVpvkS4QRzo9vlUvcOrfkgWTWdOUEhTc3POGH5IA93dnX4TO89NXvEpjSgPcAUZPOtptCqpZ8dxLzT%2Fogw8rWmvwY6pgHqNMfNYebQ0%2FPI%2FjmrQ1oOh8gKND0JTDajQ8RPGP9ZYv5DJOyLC%2Fh4V5KUqhjYGcGsQVx3pYAPOBkdF4zZV5PIVZWlQaHKxjSZ33tgTgPN8ZJHTkqI7k8AFWqjd%2BpCHSbQiUi%2BraALC21rrJ%2FKlllFJL%2F4VC0CJzkRKfu0GrpdAfjUilfx8A%2B0PfGvYIlQPxmu96sh1YGx4srG3Bh1kP5IMQPXebng&X-Amz-Signature=c55205408e3602ab5eee834bbc57ed351ed9ec66634f7b50b1f8d4d5269340d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
