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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYA6ECKH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGCnvqUe5HWmAptsV6%2Bj72hqPUTtx0Nxj8jAohtEYq6lAiAMKKQRsW6G6Wr8wqx5yMNP50tgNnsSFU3OO%2BErT8djiir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa427bsafGZszsr5zKtwD8Ilxkqwrd3U5mTlt%2F%2B%2FrbVHw%2FMNSsVCMEd%2BjeLKQ1kdWk11OMuk%2FAOWscWV6VxdUJ%2FsPFlw5jaVSQLdqtTc2KTfBNPJxAMAfcQedL12w60OeiMB6YgVvMLHBwmK5BmjnJjMQc0y9gQZqqc%2FgpXKUwT6MRH%2BPNQ21flbBBzJj7C%2BfO8F9flUf%2F6RB1SZqbcdgYr6aPbrFmf%2BkMjBvfw97r8lBdrZv92EST82QZHxdhMgxdxXs0yeKpVNPrUKNId0FlVWOuockgz%2FQbL2RuXh6bV22IYD1%2BWikCXevodGdJalW33git6EZmh83fuBjjae0IKbW5xW8bX7h8QKEeMson12IkdmoAUSbBPR29Ji75ZaIn3anxYwkeSUOXN33mi0hqq%2F8JLJnPquPjih%2Fqgi1l%2BlswsoYfF4we6iu6a2bTrjG5BN5CFqrmucCNPr9SDiqbfshZcvWj8fj%2B9tpt4RVPlz%2BKFuBNV0E601%2BDD6acyqS02z%2FW3p0CwYTW6db0IkpywCOF4jfPbvd%2FtjTdKxwISu%2FBGYeBN7GQj9Eyy%2B7SAORHU%2B0GlKbbYYGMTlzkGj0JGPNwxBvfOriO1y%2FaLoegDbnBOfs64EOIpjAEUy7jz3ez%2FaysmtJIicSeeYw%2F6uzvgY6pgGxQ7y0fzTn0mgOUjfiUUOV2s%2FmhlvPdjZphsV0xerB6qecWR3YnfVG4S1W4ZGLoOxvXJtvMZc6mwhA4xrzcKHKKNpCXokpQJHVrLwrg39XF2k1KhPyDoPc%2FKAYK6UoDV0UTQ616v8q12zB6xr5VaXb3kdrIA5STCDxR4YPiKqemofLo%2Fk1WBAZY9c5aKzPLB884KRuvKgBranACY5hwwokhB5lo3oh&X-Amz-Signature=48eccdc59f3c8b276eaac0e1cf4ff4969b250e0b664fe8633986facf5d0e6bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYA6ECKH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGCnvqUe5HWmAptsV6%2Bj72hqPUTtx0Nxj8jAohtEYq6lAiAMKKQRsW6G6Wr8wqx5yMNP50tgNnsSFU3OO%2BErT8djiir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa427bsafGZszsr5zKtwD8Ilxkqwrd3U5mTlt%2F%2B%2FrbVHw%2FMNSsVCMEd%2BjeLKQ1kdWk11OMuk%2FAOWscWV6VxdUJ%2FsPFlw5jaVSQLdqtTc2KTfBNPJxAMAfcQedL12w60OeiMB6YgVvMLHBwmK5BmjnJjMQc0y9gQZqqc%2FgpXKUwT6MRH%2BPNQ21flbBBzJj7C%2BfO8F9flUf%2F6RB1SZqbcdgYr6aPbrFmf%2BkMjBvfw97r8lBdrZv92EST82QZHxdhMgxdxXs0yeKpVNPrUKNId0FlVWOuockgz%2FQbL2RuXh6bV22IYD1%2BWikCXevodGdJalW33git6EZmh83fuBjjae0IKbW5xW8bX7h8QKEeMson12IkdmoAUSbBPR29Ji75ZaIn3anxYwkeSUOXN33mi0hqq%2F8JLJnPquPjih%2Fqgi1l%2BlswsoYfF4we6iu6a2bTrjG5BN5CFqrmucCNPr9SDiqbfshZcvWj8fj%2B9tpt4RVPlz%2BKFuBNV0E601%2BDD6acyqS02z%2FW3p0CwYTW6db0IkpywCOF4jfPbvd%2FtjTdKxwISu%2FBGYeBN7GQj9Eyy%2B7SAORHU%2B0GlKbbYYGMTlzkGj0JGPNwxBvfOriO1y%2FaLoegDbnBOfs64EOIpjAEUy7jz3ez%2FaysmtJIicSeeYw%2F6uzvgY6pgGxQ7y0fzTn0mgOUjfiUUOV2s%2FmhlvPdjZphsV0xerB6qecWR3YnfVG4S1W4ZGLoOxvXJtvMZc6mwhA4xrzcKHKKNpCXokpQJHVrLwrg39XF2k1KhPyDoPc%2FKAYK6UoDV0UTQ616v8q12zB6xr5VaXb3kdrIA5STCDxR4YPiKqemofLo%2Fk1WBAZY9c5aKzPLB884KRuvKgBranACY5hwwokhB5lo3oh&X-Amz-Signature=443579ff8e5e2de0b5d6564efc2e7d793de2966f06f305c86472149570da2434&X-Amz-SignedHeaders=host&x-id=GetObject)

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
