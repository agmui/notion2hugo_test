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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLH2OV4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWltb77JZy2HgJd%2Bmv%2BfqGkakXvsdgH%2FLKvgC%2FJcm4kAiEAqJ7KbLy0YxC8nn9R8RtRq5fGqXJANs9Qw2gmgNzwy54q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIGsqa86M3bwM%2FD1fCrcA8G66k9%2B%2BkfQsXSuWWPwcGITiP99H8MTDrEF7WT4Jwdfa4P3RKiMc7wn%2BNNf9ddv2%2F1Nq4zuHOHxx1h5ZxpUYEoe7yVfTG83fw1RblP%2BvQdG0lsHy1n4IEY3E9J7B9DXZ7Kf1uS6DJ%2ByhAprg%2FCVCTsBhUS8JSbl68nbMQBpegdh0cglYAo4H8d3FY44jo06Fvr%2BiPwVY7Zux5X3sv9LMwxmFEhuVaP8s6EMBRmWU9KmltrBdZUJj52wLViMQ5eLeLDaCGdCVhSnFZsI1Iosd%2FN838i4h9a2p8AGVQyy8KUc8CxjXk%2F%2B3xbMFvaDh5%2Ff8oCP9tv536I%2BR480SkhRH7r0BrRw6YE%2F9hnB7QBMVAxgVd6ZumfAmLxN9xTqv%2B0V9NuaJb8Eu7ZoOBCvOgOJ7huTk7PbwZWz9jQedh3amkvbzn6T6Nto2J5ZtuSdJ6mBEL2wqLAmPefVqP%2FPkRNrFmt7dEeqqaMj9z7mT0bitlUC%2BIICh%2BUs%2FZ50eateDoe5LOrq9S3dQgtkX2aNZr2YipXJ5aOV8FDTAriKx3K%2FK6h5g8q4j7h2szyH4C2bqvWs4fZx5mTmRZaFATleXjKXoeL%2BN5rVbIrX%2Beu%2BxO7NPfznq4xCpSz3Wz2tkExaMO%2BJk78GOqUBdECce4YLUL2K167wKmbJxyUx%2Bposy3LjDiLPLGPdE3iVG0Nfu3RSpad6y%2Bq1L3ISDWbAjYbJJf6K27rp7PGGRcVln7H%2B3xFFKY5U4sV33U%2BVYtRHtQckQiGzTIbaQ1GuYzDWoNfDTo7FooYz71SPY%2FAA2G39VnKceamAwPr561QO%2FTBoBr0IB384K0RT464NK%2FzHl1wVwJw6roC%2Bd7HZLipidsKx&X-Amz-Signature=62d9713753cd70049947a1a3e00eba309bdd2f9c1e727505d7de949599d79c70&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLH2OV4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWltb77JZy2HgJd%2Bmv%2BfqGkakXvsdgH%2FLKvgC%2FJcm4kAiEAqJ7KbLy0YxC8nn9R8RtRq5fGqXJANs9Qw2gmgNzwy54q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIGsqa86M3bwM%2FD1fCrcA8G66k9%2B%2BkfQsXSuWWPwcGITiP99H8MTDrEF7WT4Jwdfa4P3RKiMc7wn%2BNNf9ddv2%2F1Nq4zuHOHxx1h5ZxpUYEoe7yVfTG83fw1RblP%2BvQdG0lsHy1n4IEY3E9J7B9DXZ7Kf1uS6DJ%2ByhAprg%2FCVCTsBhUS8JSbl68nbMQBpegdh0cglYAo4H8d3FY44jo06Fvr%2BiPwVY7Zux5X3sv9LMwxmFEhuVaP8s6EMBRmWU9KmltrBdZUJj52wLViMQ5eLeLDaCGdCVhSnFZsI1Iosd%2FN838i4h9a2p8AGVQyy8KUc8CxjXk%2F%2B3xbMFvaDh5%2Ff8oCP9tv536I%2BR480SkhRH7r0BrRw6YE%2F9hnB7QBMVAxgVd6ZumfAmLxN9xTqv%2B0V9NuaJb8Eu7ZoOBCvOgOJ7huTk7PbwZWz9jQedh3amkvbzn6T6Nto2J5ZtuSdJ6mBEL2wqLAmPefVqP%2FPkRNrFmt7dEeqqaMj9z7mT0bitlUC%2BIICh%2BUs%2FZ50eateDoe5LOrq9S3dQgtkX2aNZr2YipXJ5aOV8FDTAriKx3K%2FK6h5g8q4j7h2szyH4C2bqvWs4fZx5mTmRZaFATleXjKXoeL%2BN5rVbIrX%2Beu%2BxO7NPfznq4xCpSz3Wz2tkExaMO%2BJk78GOqUBdECce4YLUL2K167wKmbJxyUx%2Bposy3LjDiLPLGPdE3iVG0Nfu3RSpad6y%2Bq1L3ISDWbAjYbJJf6K27rp7PGGRcVln7H%2B3xFFKY5U4sV33U%2BVYtRHtQckQiGzTIbaQ1GuYzDWoNfDTo7FooYz71SPY%2FAA2G39VnKceamAwPr561QO%2FTBoBr0IB384K0RT464NK%2FzHl1wVwJw6roC%2Bd7HZLipidsKx&X-Amz-Signature=24b51440625d31dabe65044b8970fa4cc510e057cc86e738c73da13c628c9c75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
