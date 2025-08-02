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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=ee732e3e37f951a112b1fc2d409f15f71a91e1b05685f91809d11ee2f345aa12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=3cc9ae2d14e61819676d082ff2f7fce0859a0b1f46736bf1122d18329803a93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
