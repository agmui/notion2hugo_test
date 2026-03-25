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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVVNCWU%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAErLqo%2BxW5mp15VvZa30TjFkWGp2afjlJklAy6OxpwQAiEAv%2FvFP5MgpSzqcVIonN5mJmwJ8C6r7XMxyMjp9ED44h0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLma%2BiNkum58nTN%2FjSrcAwjooZjh2aRaiZfOdHAoX7bOUsI9maadouCnLJYoYoYmKMhJHA%2FJdPIM0PS1af1a2TSCfFBxtZWc6FSSc8cEcvT4eOhjmvFIOijS3Cc4M3nSxsBvVOA44rQDfXO%2BsuNOuNgT25QexshRNYdyoYNHH6XqO7WUp%2Be4yiY5e5R7DO54qQprLghEfJWgAbY%2BVx%2BG%2F9lqKY2Dins1kOodhWPyqELWxVdj2xl%2Bso3oighWPmlfl2bnaYMAka%2BKij70fZ3GUspn3MzUB6qGkPL9GrYClvyMtMfFfJE2kCRZtpWNVl7J5MW%2FClaJWDQt1SGR1UfzaT2UY%2BWfWP9bnmPCdJganuEz5%2BfvyGvp8esmiK16l%2BkzpXTruh7q5rOOI84L37JBajdTco0jfBPa3uXJ1y3DEyTkocootZwFSJu7Kw44u3FhLjj3OP445krR%2Fe6BSGXBZ2Uqbo2KTrJaiaMKQb3e6injP5gqcE%2B14CUQgd92%2Bgebq%2FA5KWXYGTTyhttak14tUmG9XMVBYgNZOvzT2fwOPZSdlzfIDjllwNzXXr1feQZklWR1PRXZE21Ba0MdJ%2BNh6JqMioepSzmMYg%2B8T6LtOLFCxRAeT%2Bvvw9gamsSAeGq9pZJU0CTP1JGFE8NtMML1jM4GOqUBKBzliUfApA5mX%2BksA%2FiXTNz1xjU2QANPsXKNU%2BVTAJRc5HCPOlzcATedgdnpKcV4XMgxxRwecqgYGp409B0LN4tmGjFf3S7VNseClt%2FLBjMuPxBkdGZBeY4hYTYdkOF9ZP8cmf7FrAbLUwWwmeG9JRbhlVwfOQo5LYLQtcyKvMKboj416YiGn5Bix88VQEr%2BFKWpMxyssm%2BsQChSpZUUtqdAxqiW&X-Amz-Signature=c1b485ea6361a1cc89c4e94323f25655125d236ee663b0acf52f72c34c1acc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVVNCWU%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAErLqo%2BxW5mp15VvZa30TjFkWGp2afjlJklAy6OxpwQAiEAv%2FvFP5MgpSzqcVIonN5mJmwJ8C6r7XMxyMjp9ED44h0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLma%2BiNkum58nTN%2FjSrcAwjooZjh2aRaiZfOdHAoX7bOUsI9maadouCnLJYoYoYmKMhJHA%2FJdPIM0PS1af1a2TSCfFBxtZWc6FSSc8cEcvT4eOhjmvFIOijS3Cc4M3nSxsBvVOA44rQDfXO%2BsuNOuNgT25QexshRNYdyoYNHH6XqO7WUp%2Be4yiY5e5R7DO54qQprLghEfJWgAbY%2BVx%2BG%2F9lqKY2Dins1kOodhWPyqELWxVdj2xl%2Bso3oighWPmlfl2bnaYMAka%2BKij70fZ3GUspn3MzUB6qGkPL9GrYClvyMtMfFfJE2kCRZtpWNVl7J5MW%2FClaJWDQt1SGR1UfzaT2UY%2BWfWP9bnmPCdJganuEz5%2BfvyGvp8esmiK16l%2BkzpXTruh7q5rOOI84L37JBajdTco0jfBPa3uXJ1y3DEyTkocootZwFSJu7Kw44u3FhLjj3OP445krR%2Fe6BSGXBZ2Uqbo2KTrJaiaMKQb3e6injP5gqcE%2B14CUQgd92%2Bgebq%2FA5KWXYGTTyhttak14tUmG9XMVBYgNZOvzT2fwOPZSdlzfIDjllwNzXXr1feQZklWR1PRXZE21Ba0MdJ%2BNh6JqMioepSzmMYg%2B8T6LtOLFCxRAeT%2Bvvw9gamsSAeGq9pZJU0CTP1JGFE8NtMML1jM4GOqUBKBzliUfApA5mX%2BksA%2FiXTNz1xjU2QANPsXKNU%2BVTAJRc5HCPOlzcATedgdnpKcV4XMgxxRwecqgYGp409B0LN4tmGjFf3S7VNseClt%2FLBjMuPxBkdGZBeY4hYTYdkOF9ZP8cmf7FrAbLUwWwmeG9JRbhlVwfOQo5LYLQtcyKvMKboj416YiGn5Bix88VQEr%2BFKWpMxyssm%2BsQChSpZUUtqdAxqiW&X-Amz-Signature=81b2b51acf3be718199f5333584df8cf4ebd98cf53c9268f5e646390469786a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
