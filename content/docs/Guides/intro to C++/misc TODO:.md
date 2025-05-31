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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SQA4SW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH34bRtZRxCljA5HZFezygpMZ%2FswSIKJucmy8ABU4RVwCIQD3TtnpvGWXDy98xiAQfVkFEbQ5fTIRflB%2B4HmrPixc8yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkWfObLn0zjnhfCmpKtwDU8xx0f47Dgj6beGaqUFk%2FmT%2FhYCjINqz17c1Shon67EMl25PZV0Ns6lBE36UG%2FYva%2FHrVMfipCT5c4O%2BwfI30cvV1rrOEJOKn7elP0EuNn6wUoqGRDNt6lhHUeLU0LcmKRKDBY3reGkWrOdyY1GC4SM7AskdydHsWDWDMPLBcWLQlkVQqOjk5F4fMKjy7BSBaE3SVv%2BLkbZorTOiml%2FkqkxK3PEP9M1nPC7A5sfxt%2B2PLGBEvuJOxwX1q%2FcngDnZzpA4IhsBcYEeu64%2BtrVqbFfDeCvCpKu2Mk7lfo5KbPZkLsxGK2IpLP1FWveTqm%2Ba%2Fc1eJWJDdBr2nokCGtMJM86TULlmy9Sm2VrmXLeYJfL13uAdzaiwT2wkYflkCcTrQPag47gQ8PG1SRdeetr3t0lafIplsdvbYrywMJoTVnn6Qfj2EAf0zW2TAI7RvqG9e4SM73WFsHqgZd1WtOGQNOk8P%2FCVjfrYIh8ZOqQxRlz9bLMMHMmoL5e4DaRQzrqFpR50F8IEoj%2FGUBorCkdtl4i5U9nyfUJgE6ovwSyjZWIDsrVkBvUbQ2rBlTAe2Vs0qTMjAZ4DQnmPkmaJ4BTJ3aDOMtyM%2FAjfZ%2FmIhDik7Z7GrO5bZE5oE%2BPmEiEw3eTpwQY6pgFa1yy4Lh6HNATI49ozysN7Cm1nvgR3pxWnuTNQnVcQo3FYL%2By6eK4brQ7I%2FbEnvivobgOoH7LwC%2FZqdP4uHHFM8GWTHCTcEQ%2F4vuBjFT1tn2UvGJdfqstxcCR%2BvohtOmlZrdKmIEx%2B4AINo%2BfdWTARg3WYRV3YmfFM1Ec3OMo7kJHDX2Gzxa6d1fK16yu%2B4RqFf163ftznbl4kSpVqyu5EvmC1nv3c&X-Amz-Signature=260651a26107e9da688c0a32e51538b0741372c1bc53fb935b2d31ac06b08c43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SQA4SW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH34bRtZRxCljA5HZFezygpMZ%2FswSIKJucmy8ABU4RVwCIQD3TtnpvGWXDy98xiAQfVkFEbQ5fTIRflB%2B4HmrPixc8yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkWfObLn0zjnhfCmpKtwDU8xx0f47Dgj6beGaqUFk%2FmT%2FhYCjINqz17c1Shon67EMl25PZV0Ns6lBE36UG%2FYva%2FHrVMfipCT5c4O%2BwfI30cvV1rrOEJOKn7elP0EuNn6wUoqGRDNt6lhHUeLU0LcmKRKDBY3reGkWrOdyY1GC4SM7AskdydHsWDWDMPLBcWLQlkVQqOjk5F4fMKjy7BSBaE3SVv%2BLkbZorTOiml%2FkqkxK3PEP9M1nPC7A5sfxt%2B2PLGBEvuJOxwX1q%2FcngDnZzpA4IhsBcYEeu64%2BtrVqbFfDeCvCpKu2Mk7lfo5KbPZkLsxGK2IpLP1FWveTqm%2Ba%2Fc1eJWJDdBr2nokCGtMJM86TULlmy9Sm2VrmXLeYJfL13uAdzaiwT2wkYflkCcTrQPag47gQ8PG1SRdeetr3t0lafIplsdvbYrywMJoTVnn6Qfj2EAf0zW2TAI7RvqG9e4SM73WFsHqgZd1WtOGQNOk8P%2FCVjfrYIh8ZOqQxRlz9bLMMHMmoL5e4DaRQzrqFpR50F8IEoj%2FGUBorCkdtl4i5U9nyfUJgE6ovwSyjZWIDsrVkBvUbQ2rBlTAe2Vs0qTMjAZ4DQnmPkmaJ4BTJ3aDOMtyM%2FAjfZ%2FmIhDik7Z7GrO5bZE5oE%2BPmEiEw3eTpwQY6pgFa1yy4Lh6HNATI49ozysN7Cm1nvgR3pxWnuTNQnVcQo3FYL%2By6eK4brQ7I%2FbEnvivobgOoH7LwC%2FZqdP4uHHFM8GWTHCTcEQ%2F4vuBjFT1tn2UvGJdfqstxcCR%2BvohtOmlZrdKmIEx%2B4AINo%2BfdWTARg3WYRV3YmfFM1Ec3OMo7kJHDX2Gzxa6d1fK16yu%2B4RqFf163ftznbl4kSpVqyu5EvmC1nv3c&X-Amz-Signature=598e6f986f24cf03ca7d806fe03956ab590d7931bc7d6a3591d93bbe60a2d8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
