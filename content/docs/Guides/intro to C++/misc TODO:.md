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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTL45CY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFg1ibrE5qZRKiaYBU4yAmiptRHgBRjyibJgm%2B3c8nPAIhAPS9izihpJpYnKJpYq6QE29HUxsKDbxXYel2pjs8%2F2%2FmKv8DCCUQABoMNjM3NDIzMTgzODA1IgymODnYAS0BXTacYgcq3AOdiIsPhi2sZtMfBXiAO54PExqTqc4HGc%2Fb%2BXEYnxztbyEmTw%2BC%2F7rhzr6oP9aTDAVUEE8YdV2RkIxud6Gw8RSYO8yfRLSY8oivA9RyNNcUyB4LIi7POKMdwtqospOo8uDWqxaspPLsYx1HmYEMmOOVyhyFMggAPyAC6egO4JQnouGpIFHwxvWDxAGF3oN3ZEI4cpvG%2FZanTehfFYZLrEvrJUTseOs5P4MbNMNy%2FRQpIzq0j3wDluV8bcaIynXSu%2BV9wa%2F2XrXjbG1xCLyDDX4iJ7bLX0ZKQXmAtIzXJ9stUcYJP%2Bl1c9t6WpFDoANbd5ZjHEyc7deSAtiwhRRLLy43YqOiuq28tiSxioJkcHrAVHuuN3yhKznTxsrGd42NNXgE%2BY3qnQqRjeYQiPMSGkSQu47ZTLurPYkFCY5a0hJy5pk2G%2B9EdRNe3gYxo4DShdSy26WBOygo30gU%2BeGkKHrMGxKKLO9tR63%2Bb1cIv6OfiLKfT8ssCzZYv3twGXEHPYZwAgElw7juywEfDoks4nF1AKH7hP%2BuEr3Xx9YzfnE951rO%2BCwSPLf1bZg9xtb23R8hdeNhsYeKfUbhytkAtPjxQMbTEtxeOucQAAAap%2FU2uQSa4r7bwJPJ3xHtJTCflazABjqkAX9ADbourlSdJ57FVlELQE70htHFZCwHR3fdNS6BTAgB32e3yMIwDebTvi%2FamC%2FsgiVhsU4v%2Fpjy7xpvpomFQuyfJpc5owXZInD5SJKaNzyi8fepW3CjaiDsLGSkbw1JGqEHyvU4uVxWLYe6WvS7xO7rI%2FyaGX%2BNL5uckKDwtugpRoSP6QEz7PwUyBdMDOn6GldqspqGLJQ3fz8AVHs6zjVH3aks&X-Amz-Signature=508e12e634098fef7ace3e5fdf09690c00bee06e7752656fc0b6cc5e53a5a882&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTL45CY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFg1ibrE5qZRKiaYBU4yAmiptRHgBRjyibJgm%2B3c8nPAIhAPS9izihpJpYnKJpYq6QE29HUxsKDbxXYel2pjs8%2F2%2FmKv8DCCUQABoMNjM3NDIzMTgzODA1IgymODnYAS0BXTacYgcq3AOdiIsPhi2sZtMfBXiAO54PExqTqc4HGc%2Fb%2BXEYnxztbyEmTw%2BC%2F7rhzr6oP9aTDAVUEE8YdV2RkIxud6Gw8RSYO8yfRLSY8oivA9RyNNcUyB4LIi7POKMdwtqospOo8uDWqxaspPLsYx1HmYEMmOOVyhyFMggAPyAC6egO4JQnouGpIFHwxvWDxAGF3oN3ZEI4cpvG%2FZanTehfFYZLrEvrJUTseOs5P4MbNMNy%2FRQpIzq0j3wDluV8bcaIynXSu%2BV9wa%2F2XrXjbG1xCLyDDX4iJ7bLX0ZKQXmAtIzXJ9stUcYJP%2Bl1c9t6WpFDoANbd5ZjHEyc7deSAtiwhRRLLy43YqOiuq28tiSxioJkcHrAVHuuN3yhKznTxsrGd42NNXgE%2BY3qnQqRjeYQiPMSGkSQu47ZTLurPYkFCY5a0hJy5pk2G%2B9EdRNe3gYxo4DShdSy26WBOygo30gU%2BeGkKHrMGxKKLO9tR63%2Bb1cIv6OfiLKfT8ssCzZYv3twGXEHPYZwAgElw7juywEfDoks4nF1AKH7hP%2BuEr3Xx9YzfnE951rO%2BCwSPLf1bZg9xtb23R8hdeNhsYeKfUbhytkAtPjxQMbTEtxeOucQAAAap%2FU2uQSa4r7bwJPJ3xHtJTCflazABjqkAX9ADbourlSdJ57FVlELQE70htHFZCwHR3fdNS6BTAgB32e3yMIwDebTvi%2FamC%2FsgiVhsU4v%2Fpjy7xpvpomFQuyfJpc5owXZInD5SJKaNzyi8fepW3CjaiDsLGSkbw1JGqEHyvU4uVxWLYe6WvS7xO7rI%2FyaGX%2BNL5uckKDwtugpRoSP6QEz7PwUyBdMDOn6GldqspqGLJQ3fz8AVHs6zjVH3aks&X-Amz-Signature=c1ac4531b478ba748c99edf066b623061ab9cec5461d4e97fd46fa9ff04a2bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
