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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWDW2TJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClViR9SDLThJ%2F8OUDstOX0ghOaAmsEtn%2BoRAwrYJdRogIhAKqOKz%2FB6gEmnG%2BeLdSrcxiyvxh1dJWJFutGT9HnfI3PKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxARhrYvmasqNSmh2Qq3ANuOfohb%2F4%2Fnw07boJYkaxVt7ljDypNCnDa%2FgUflKgzextNaXRjCNv4FtcgY2lFBD24YWyd%2FmGX5iXJGR%2Bbf6N0LQqMd8AgmZNLSew3v17PjJjBHXa5NfDF84RVrLSrSjId3ZTu2qXuFxFW0aO8F3WITCA22mX2%2FrL6ciMKqrFnl4JcO75ZPW%2FgiYQ8JFC5Eosm%2BsS2HQwKKqFiqRJl1yLAPRK%2FWABf3YuJ3qp7HopwWoFzz3KohGdiYyWnlo36Sf5PQ7PWkpe6CuObHru48AEEik4ck6AiteXeUl7ZUzq5nK7fGExlBCmVzWq9RdHEqk5KRLKAZxlkkehPHIs%2BhdpYQcFo3B%2BLNS26Y4t5bzPxfPv0h1nqka%2FG4XkiYeqjpTEnuM0%2FmprxoZdO5t7OZq%2BqetjaVBa5EUUxFq%2F%2BlBH0LnHowmZOAy2PvaH9RBy6C7C%2FQ5ZM5fYAoT3bn3soRZK1ozjzkq18QSIp5HmY6JRGoq6wS9JrDofUVHpZlSbwECnIvCbQnpT8WlP0OpuZNzdLc6Td6BE2KDKn%2BJyu9Ph5EukRV0lv6vGittWr3imbFJgmuxFLr%2BPWzqaXM3mbCIj9UCQHp36gVgaa5qhgyvo7re2liCtfkbEXfeJMADDT2cu%2BBjqkAQPiDVzTkVJovhK8pwqN6EEECrvyFs4X6jqdOxCF1lctNPYIaDOXPkuFSwrzJbMI7PML0o3e6IeMIPf6GPvkKs3qHPIDao8X8gpZ4eQ5uYX38jgBnEAzh0EbaQu7RlxXKfSJhcq4gk7nhQRBMINNWeDLzs3r%2F2crppgytvowK0FsQeWd9eO4lPHU4O1yOGQGjxkXtFNA24vJvj%2Fa%2Ba4nigX%2Bkevh&X-Amz-Signature=6c5de804d60f7af125e8f46746004fb2389879181b8b46c144e8ef32a9ef8fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWDW2TJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClViR9SDLThJ%2F8OUDstOX0ghOaAmsEtn%2BoRAwrYJdRogIhAKqOKz%2FB6gEmnG%2BeLdSrcxiyvxh1dJWJFutGT9HnfI3PKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxARhrYvmasqNSmh2Qq3ANuOfohb%2F4%2Fnw07boJYkaxVt7ljDypNCnDa%2FgUflKgzextNaXRjCNv4FtcgY2lFBD24YWyd%2FmGX5iXJGR%2Bbf6N0LQqMd8AgmZNLSew3v17PjJjBHXa5NfDF84RVrLSrSjId3ZTu2qXuFxFW0aO8F3WITCA22mX2%2FrL6ciMKqrFnl4JcO75ZPW%2FgiYQ8JFC5Eosm%2BsS2HQwKKqFiqRJl1yLAPRK%2FWABf3YuJ3qp7HopwWoFzz3KohGdiYyWnlo36Sf5PQ7PWkpe6CuObHru48AEEik4ck6AiteXeUl7ZUzq5nK7fGExlBCmVzWq9RdHEqk5KRLKAZxlkkehPHIs%2BhdpYQcFo3B%2BLNS26Y4t5bzPxfPv0h1nqka%2FG4XkiYeqjpTEnuM0%2FmprxoZdO5t7OZq%2BqetjaVBa5EUUxFq%2F%2BlBH0LnHowmZOAy2PvaH9RBy6C7C%2FQ5ZM5fYAoT3bn3soRZK1ozjzkq18QSIp5HmY6JRGoq6wS9JrDofUVHpZlSbwECnIvCbQnpT8WlP0OpuZNzdLc6Td6BE2KDKn%2BJyu9Ph5EukRV0lv6vGittWr3imbFJgmuxFLr%2BPWzqaXM3mbCIj9UCQHp36gVgaa5qhgyvo7re2liCtfkbEXfeJMADDT2cu%2BBjqkAQPiDVzTkVJovhK8pwqN6EEECrvyFs4X6jqdOxCF1lctNPYIaDOXPkuFSwrzJbMI7PML0o3e6IeMIPf6GPvkKs3qHPIDao8X8gpZ4eQ5uYX38jgBnEAzh0EbaQu7RlxXKfSJhcq4gk7nhQRBMINNWeDLzs3r%2F2crppgytvowK0FsQeWd9eO4lPHU4O1yOGQGjxkXtFNA24vJvj%2Fa%2Ba4nigX%2Bkevh&X-Amz-Signature=46434e2f1dd5135b018961c12fefa91ff5b5e80bd8dfb2ec88a5f1499eb279c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
