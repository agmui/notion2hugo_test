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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54CQTM7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGdLO7UTnRs3UX6mO3XyDoGe%2FsYu%2BgPAkiwmdvsXFewtAiAyj0%2Fjnhnx30bqeSrlb7oy9FA55vpXpphFDwEqnkn8pSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKX0TLJLclLkPwANKtwDkAoXpi5MOUZoxgOmKyZYZYX8TFteJVH57lYnUr4eO1xshdKf6fHtAOQrCays4EXRz8myhaaGm6Re1%2FF4jnGx6WW5ySXnQhOvGImG8YEPTldMHKODzTcT6IVO82xRT46QHK1E1Ebdyl4if9wKOh54tomlNV5EvOWhKgtO9I0oJJVdBAmtuUJNBcP2xlzwSYTWsNOTdJ6O6YFqUq5oero%2B0syvOXte2BOVr3incoFhDO8foJhJlglhUGnCB%2FfSmXh8Y7XlKS8WrpFM7X%2BrCfLVeKqYF17Vwy%2FSFmY8oSUKJ9NeBNVLc1jalX0IRGm52wCN9shqIWQmJ85sg5e1TZkvLPnpplTpohwwLnXRIXrT4sywvbSdG9qTww1o0ci2F7XjBW8qRUdyK4Jzk92Yiasw%2B5gqcJ5MtyheyLt7pBIm2QVw61%2BCRvaH%2B9NeErc0DA49hSInPo2SqXDkmuvpf7Y4gWyB3ZerqwUKo4DidMPnz%2BJt%2Bs1ntxeGGJ1e2iSqoN%2FFdHz0a3cUn9A4EoFSdO%2FQ4%2FzFpoQFLV4F3N4sNg5IjBi2UJs3UvxOENEfdqQB1PVifpIuobe7OInigJemfO00xeBA95T8YPBnzDdSZoxygK8CIRpKqylTxtt8RTsw08q%2BwQY6pgFdA%2B7LL9Zr4JdvW6iKOZ6No6Xo%2FZpc3W8ygrypv%2BzbbTZZKbkR9o6P4UTTqLmERIX3B8S42xrPGVfXoyQdGTjT1lS9Pxa5MokvYUNnYcr7CzyUHtXXsnX80Kw532J1Ok%2FUtQwQrJi%2FIw7MnYPFVG%2FWjvZBzYGHl%2Bi64fNjP0T9U9TEKRtSL6WOYpWAFrdVul7eAF0pShRtxnD1fl49Nj%2FyE5oBflDb&X-Amz-Signature=e352dc2eb618e5539ec555f8083b1e19b7ec738accea251b1a12f7873f48de76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54CQTM7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGdLO7UTnRs3UX6mO3XyDoGe%2FsYu%2BgPAkiwmdvsXFewtAiAyj0%2Fjnhnx30bqeSrlb7oy9FA55vpXpphFDwEqnkn8pSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKX0TLJLclLkPwANKtwDkAoXpi5MOUZoxgOmKyZYZYX8TFteJVH57lYnUr4eO1xshdKf6fHtAOQrCays4EXRz8myhaaGm6Re1%2FF4jnGx6WW5ySXnQhOvGImG8YEPTldMHKODzTcT6IVO82xRT46QHK1E1Ebdyl4if9wKOh54tomlNV5EvOWhKgtO9I0oJJVdBAmtuUJNBcP2xlzwSYTWsNOTdJ6O6YFqUq5oero%2B0syvOXte2BOVr3incoFhDO8foJhJlglhUGnCB%2FfSmXh8Y7XlKS8WrpFM7X%2BrCfLVeKqYF17Vwy%2FSFmY8oSUKJ9NeBNVLc1jalX0IRGm52wCN9shqIWQmJ85sg5e1TZkvLPnpplTpohwwLnXRIXrT4sywvbSdG9qTww1o0ci2F7XjBW8qRUdyK4Jzk92Yiasw%2B5gqcJ5MtyheyLt7pBIm2QVw61%2BCRvaH%2B9NeErc0DA49hSInPo2SqXDkmuvpf7Y4gWyB3ZerqwUKo4DidMPnz%2BJt%2Bs1ntxeGGJ1e2iSqoN%2FFdHz0a3cUn9A4EoFSdO%2FQ4%2FzFpoQFLV4F3N4sNg5IjBi2UJs3UvxOENEfdqQB1PVifpIuobe7OInigJemfO00xeBA95T8YPBnzDdSZoxygK8CIRpKqylTxtt8RTsw08q%2BwQY6pgFdA%2B7LL9Zr4JdvW6iKOZ6No6Xo%2FZpc3W8ygrypv%2BzbbTZZKbkR9o6P4UTTqLmERIX3B8S42xrPGVfXoyQdGTjT1lS9Pxa5MokvYUNnYcr7CzyUHtXXsnX80Kw532J1Ok%2FUtQwQrJi%2FIw7MnYPFVG%2FWjvZBzYGHl%2Bi64fNjP0T9U9TEKRtSL6WOYpWAFrdVul7eAF0pShRtxnD1fl49Nj%2FyE5oBflDb&X-Amz-Signature=cc49b6bc72c1d7a43c653d4517f05ac6e7aded5cca193307714f1702e399ee27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
