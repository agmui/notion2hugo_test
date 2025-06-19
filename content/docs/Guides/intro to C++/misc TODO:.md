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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GF6XB6T%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfmGZlr05At6fFzVMjVbjqJ83CfztcEMDESJDump0l%2FgIhAMU0%2FfTP9f4v8NU3hF7cmyi4QVdGYZF90nOIeTkh6dieKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh%2FT%2B0scuXFGtwX5Qq3AM9matZsxzZZI6UmCNtxmiP68JZGx6bNRlFLJAN%2FQTTNXed3njvCl92a68RdjoI%2FihmKR3igf2OFoYHaX2Bi4lD%2F94BqvQlKnKR61AdKUWTIjdDcUsbUW%2B1wG6l9nd894SNqlXatQCD8Cqit9V9IXkEZRBi6IwG%2BRcIhFZNwNHGzfirwvQzUQnzrGcbr2fuDMVW6UwPLC0fOtEuvybsrGN393w6ldtRtvgkVjmmO93b6maYkLBjBAvZB7S%2BL61jmigm4gGG6d5o%2Fp24hXzJtWieY8GH6kEbezl%2BvfTxIDlcP0uGF0h8JgpWCD6uaINACAr4HjAbt5DkmVAj1%2BXkW8ISwB%2BTZCEOBpNdAPT2bKEcCi22j22qCPDIDrGzzfLmZB6xkykRBe%2BM%2F4FIzW4kqV0or9nCQqjHZxxuqnFCwuBEM%2F%2BGA4JAUC1N%2FS8zc6vMhgurN3b45u6HdsrJem%2BjOlJ0LpxZbIANaxjACc2hX3qXqmL2DhJlvVqbSf0gkNESRPhkiMYnGhcIyCLfnnv3mAOuSE7mx2nVc%2FCB3%2FTCQH6FKcGJDUxXWGWwcRi2eAFQefyz7YQqP5MFEag1ke3SwSc30gcfXjwOHuMEgvXmp4ehn%2BuBoe0L7NvoC9%2BzYjDR0s%2FCBjqkAQXjsTddpgrX4aVkAeFrZJLd1ndv0a8W1okcM%2Bp1mk7tcOWULWScjTfAP53dTmHj4XwLDvLq3lqQLmVQ%2BEGFfpxJ2ZNHg6FVSHjNCXGO9rY3KRt0%2FjApDZ9uE5tzvhReUrkqx1YLTT%2FjuqPdN0dYHdzyWY7XR4%2FjnM%2BSsT%2BXpFS%2Fc5eYkvK1TY739%2BoF1r%2FxfFfFNYpDA90HFiuauQCoD4bi1Iy2&X-Amz-Signature=785883497a7ba5a3bd606f2ff1a1aa39b18caf49af0a2cbb1d914d5c1b44c96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GF6XB6T%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfmGZlr05At6fFzVMjVbjqJ83CfztcEMDESJDump0l%2FgIhAMU0%2FfTP9f4v8NU3hF7cmyi4QVdGYZF90nOIeTkh6dieKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh%2FT%2B0scuXFGtwX5Qq3AM9matZsxzZZI6UmCNtxmiP68JZGx6bNRlFLJAN%2FQTTNXed3njvCl92a68RdjoI%2FihmKR3igf2OFoYHaX2Bi4lD%2F94BqvQlKnKR61AdKUWTIjdDcUsbUW%2B1wG6l9nd894SNqlXatQCD8Cqit9V9IXkEZRBi6IwG%2BRcIhFZNwNHGzfirwvQzUQnzrGcbr2fuDMVW6UwPLC0fOtEuvybsrGN393w6ldtRtvgkVjmmO93b6maYkLBjBAvZB7S%2BL61jmigm4gGG6d5o%2Fp24hXzJtWieY8GH6kEbezl%2BvfTxIDlcP0uGF0h8JgpWCD6uaINACAr4HjAbt5DkmVAj1%2BXkW8ISwB%2BTZCEOBpNdAPT2bKEcCi22j22qCPDIDrGzzfLmZB6xkykRBe%2BM%2F4FIzW4kqV0or9nCQqjHZxxuqnFCwuBEM%2F%2BGA4JAUC1N%2FS8zc6vMhgurN3b45u6HdsrJem%2BjOlJ0LpxZbIANaxjACc2hX3qXqmL2DhJlvVqbSf0gkNESRPhkiMYnGhcIyCLfnnv3mAOuSE7mx2nVc%2FCB3%2FTCQH6FKcGJDUxXWGWwcRi2eAFQefyz7YQqP5MFEag1ke3SwSc30gcfXjwOHuMEgvXmp4ehn%2BuBoe0L7NvoC9%2BzYjDR0s%2FCBjqkAQXjsTddpgrX4aVkAeFrZJLd1ndv0a8W1okcM%2Bp1mk7tcOWULWScjTfAP53dTmHj4XwLDvLq3lqQLmVQ%2BEGFfpxJ2ZNHg6FVSHjNCXGO9rY3KRt0%2FjApDZ9uE5tzvhReUrkqx1YLTT%2FjuqPdN0dYHdzyWY7XR4%2FjnM%2BSsT%2BXpFS%2Fc5eYkvK1TY739%2BoF1r%2FxfFfFNYpDA90HFiuauQCoD4bi1Iy2&X-Amz-Signature=f1b672ae96a792e58d95a6f351ff34ce7a929c1f17cd6de482c45909709e0af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
