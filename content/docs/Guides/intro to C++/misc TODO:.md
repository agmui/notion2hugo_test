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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2IX723%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxqEQ3jG2ZWO%2F2ozOz3EOaimVKTY7mekQuSZ54DpZUAwIhANhd%2B0LePHlsyMTPQKHtYffUvKUXpYXJD3Yt0j1EkOf6KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyTVpNlYeCU6X8HJ8q3ANa9UpCzkeE8YHhZjeuj6ELKPP%2Fno3g6cvlgITb3eEw77hr054vTr2uyRr69OiK1nw36ifO6jYeKY0OMvLH1yXBVryRzLdLNcKooohFzHpI%2FrWTJUN5d2GHWB0zp5n8ih1aIdE14jlDvFDVTwy5iZsm5BFMyvzfV40sbPngupdKyoPMD9YSIie2q7A3yBAfS%2FZG0auyAXmwEYoCrxchhPx900KXxG2Gfof%2Fgk%2BP90vaWnXJz4GM88ghuSpo2J3WY4UI6kSed0aVUbJE7Bh5J5DheQBIYBnVTVj%2BLeXh8dV2gy30M7nVfbxifYEufAJ0nzbhvdRguHbHm1lXQJkDTRnWtN6QwFtDw52cbC%2B4feR2BgFkw6OhckeZI025%2FPK8sFUl%2BLowy9VAMvqcJSQdk4TwqHJAsC%2FkYLIHli6tvbLWnzrunUhNRMgG3EZBOyhARh3wC9rdLvBTyG3cXXglCpTX26Pt77Ai73jYjpH%2Fv3KzkgvD4IW%2BEpRQmob4CPcW4U3mMKus805oIZ2zPb8JU44DiQCvOd19h0MSWzNLBo%2FrlL9k8oqFg7SYOn5gjZ8VDubNNG9HNCDWi3KaNCsE4vKgO4ipA%2BaLby3d9nQJXJfGcqQIQUsrp2fInEEvEzCWr9jCBjqkAcilIsQDUME9fMjCjdoaja4GzsunVPYNTpyKAZeXAEUqwDtdys7hGNo0WkpFAILrFngblBYILD9rbEirE2kz8rXbB%2ButpHPssggvLIfKW9rYCB4w9F7KiIJM5M3evhoFw4IcEKU6xXQqLw0ovgamnvjb8%2BTpx%2BNPZXaKFudf6HJqim7v%2BN%2BwdokUlnMZNtllt0gsYNgBULWgqkCZ6QfJ6W9CCW9%2F&X-Amz-Signature=35e252790b26dc9dca5daf8ba500b8f075363d24797f9eef987c74f02147950e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2IX723%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxqEQ3jG2ZWO%2F2ozOz3EOaimVKTY7mekQuSZ54DpZUAwIhANhd%2B0LePHlsyMTPQKHtYffUvKUXpYXJD3Yt0j1EkOf6KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyTVpNlYeCU6X8HJ8q3ANa9UpCzkeE8YHhZjeuj6ELKPP%2Fno3g6cvlgITb3eEw77hr054vTr2uyRr69OiK1nw36ifO6jYeKY0OMvLH1yXBVryRzLdLNcKooohFzHpI%2FrWTJUN5d2GHWB0zp5n8ih1aIdE14jlDvFDVTwy5iZsm5BFMyvzfV40sbPngupdKyoPMD9YSIie2q7A3yBAfS%2FZG0auyAXmwEYoCrxchhPx900KXxG2Gfof%2Fgk%2BP90vaWnXJz4GM88ghuSpo2J3WY4UI6kSed0aVUbJE7Bh5J5DheQBIYBnVTVj%2BLeXh8dV2gy30M7nVfbxifYEufAJ0nzbhvdRguHbHm1lXQJkDTRnWtN6QwFtDw52cbC%2B4feR2BgFkw6OhckeZI025%2FPK8sFUl%2BLowy9VAMvqcJSQdk4TwqHJAsC%2FkYLIHli6tvbLWnzrunUhNRMgG3EZBOyhARh3wC9rdLvBTyG3cXXglCpTX26Pt77Ai73jYjpH%2Fv3KzkgvD4IW%2BEpRQmob4CPcW4U3mMKus805oIZ2zPb8JU44DiQCvOd19h0MSWzNLBo%2FrlL9k8oqFg7SYOn5gjZ8VDubNNG9HNCDWi3KaNCsE4vKgO4ipA%2BaLby3d9nQJXJfGcqQIQUsrp2fInEEvEzCWr9jCBjqkAcilIsQDUME9fMjCjdoaja4GzsunVPYNTpyKAZeXAEUqwDtdys7hGNo0WkpFAILrFngblBYILD9rbEirE2kz8rXbB%2ButpHPssggvLIfKW9rYCB4w9F7KiIJM5M3evhoFw4IcEKU6xXQqLw0ovgamnvjb8%2BTpx%2BNPZXaKFudf6HJqim7v%2BN%2BwdokUlnMZNtllt0gsYNgBULWgqkCZ6QfJ6W9CCW9%2F&X-Amz-Signature=443235ae68fe1dd2977fb902c287755e78c1df43c9ccaa98a910c256fb5a7047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
