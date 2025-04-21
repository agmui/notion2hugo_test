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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPUKANT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDIgyFgObWx1SNhFlzQc8buXRgZKBfz9gs54yuKhUkeDwIhAPAyWTKPIz7Ju1B%2FmzF%2FhFsB8buFos1cvG7o4imJRpn6KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd6Av66O9pQn2zqDYq3AMzhHjjiRfEmK%2FvY3cOmVoades95cGwEfGAHYPnj7byyNKuSvqIJFZzzIXqzsw3lNqvup6f1jMyOvF8KD2jAiuqQ9fFYAkilqSrnooaAjBmRb%2F8GO5AP6Ephzi1uuSOTtbAo%2FQGmvGBKlS%2FYXwD%2BtPUQWal2c4WShOEVp56Un7JPJNrAUk1FhTI7L5H%2FDVI1qlxqTBmAZZ4WDAI3TIGkBNND1pUBuvksNhMsfoZuwY%2BbY%2BzmWTCi%2FUM7bAVs4m7RT00LkfOQFmYIfBKt9RNAKO59MtC4xqjqlCq%2B7zE6DYYJSr31whmiF9Bp95V8l3yPtdGnE9TqONV7ANUh%2BctWu8EmDRFVDHDVSleF9zKr25w20Bu2r57yk2%2FVwJ%2BtcjadoUFEZyuLImFT02WpoNeZBIssM6NmkDjWBgV5jxLcSVCUL3AjlB9cQ2OIRc3woV63NwWsXGJmKTxCTyTOJqvq7uyMa3yQgjudGcOhyIn8DA4ZPzfJR%2Bszfw1wvwQWET3XJyqKK06DbuKdeqKnn%2FgaKo6R%2BIaYS0PjNQZsZiYsxtJa%2B5xgPxbu5TCgXUXK0lZhNJMDmi1BcV2pKfjdSD%2FVd277JzTM%2FihRhZAtWmodpwMKU9IIW0pFUiU%2FRIN%2FjCU0pnABjqkAW6Zj2BWgCnMKf0GceRLJ2Wvoa%2Bp9PTKCU2k6L2%2BJN49wQEXk6Y5uX8npDpDACiKOrINXj9FSIBA9TWhZp6CynmGSAHbLzUQt7YFFB4KXrso%2BIHr0N4CxWXnksGHKxDzTre%2BYTfS1smf9NCkwpB2c4lChxQ8BaA0Gj%2B1GzidGvQ0gwWwH3%2BtCqxT4yzheol3zwC0CtYvUgBz2q0dcyNJ0bFj%2Bw7f&X-Amz-Signature=f339783c20af4a44aedf5fb68cd4e33a5c377ceddeaa7f98bbdb6831f5b1faca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPUKANT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDIgyFgObWx1SNhFlzQc8buXRgZKBfz9gs54yuKhUkeDwIhAPAyWTKPIz7Ju1B%2FmzF%2FhFsB8buFos1cvG7o4imJRpn6KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd6Av66O9pQn2zqDYq3AMzhHjjiRfEmK%2FvY3cOmVoades95cGwEfGAHYPnj7byyNKuSvqIJFZzzIXqzsw3lNqvup6f1jMyOvF8KD2jAiuqQ9fFYAkilqSrnooaAjBmRb%2F8GO5AP6Ephzi1uuSOTtbAo%2FQGmvGBKlS%2FYXwD%2BtPUQWal2c4WShOEVp56Un7JPJNrAUk1FhTI7L5H%2FDVI1qlxqTBmAZZ4WDAI3TIGkBNND1pUBuvksNhMsfoZuwY%2BbY%2BzmWTCi%2FUM7bAVs4m7RT00LkfOQFmYIfBKt9RNAKO59MtC4xqjqlCq%2B7zE6DYYJSr31whmiF9Bp95V8l3yPtdGnE9TqONV7ANUh%2BctWu8EmDRFVDHDVSleF9zKr25w20Bu2r57yk2%2FVwJ%2BtcjadoUFEZyuLImFT02WpoNeZBIssM6NmkDjWBgV5jxLcSVCUL3AjlB9cQ2OIRc3woV63NwWsXGJmKTxCTyTOJqvq7uyMa3yQgjudGcOhyIn8DA4ZPzfJR%2Bszfw1wvwQWET3XJyqKK06DbuKdeqKnn%2FgaKo6R%2BIaYS0PjNQZsZiYsxtJa%2B5xgPxbu5TCgXUXK0lZhNJMDmi1BcV2pKfjdSD%2FVd277JzTM%2FihRhZAtWmodpwMKU9IIW0pFUiU%2FRIN%2FjCU0pnABjqkAW6Zj2BWgCnMKf0GceRLJ2Wvoa%2Bp9PTKCU2k6L2%2BJN49wQEXk6Y5uX8npDpDACiKOrINXj9FSIBA9TWhZp6CynmGSAHbLzUQt7YFFB4KXrso%2BIHr0N4CxWXnksGHKxDzTre%2BYTfS1smf9NCkwpB2c4lChxQ8BaA0Gj%2B1GzidGvQ0gwWwH3%2BtCqxT4yzheol3zwC0CtYvUgBz2q0dcyNJ0bFj%2Bw7f&X-Amz-Signature=e2ea4ce085bea0539af294d4034a4f7015f9474f84ae46a19777ea075414b652&X-Amz-SignedHeaders=host&x-id=GetObject)

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
