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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JPDZ5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtu%2BAuTCWwsBXfytZHxTSdcZBMbYLDkQjI6lL1vGTeJgIhAPcvQ9HVuzoMwF83PfnlA8bhiIb801L8fKi0HYr4HvP3KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyxxs58cGq7Sy5IaV8q3APfhakNY2GhgcPKV7iIjOXCQx07sylaKztZ0tL%2BFoGWnK58byYIk%2Bl8%2BRskbQI0SAwo7KHM%2BkdNCijXyGCeZekXlb6SZ13cRMQY%2FJgLwDwzs3arHiVXpWJoEOB7%2B7pmWVAUYpEvj%2Bg6BWzkYB2BZ%2BY2uN7adgX53YwpzAIauN6camve4uieG8m5dXhatLCj2r5m18B52r6jLCMgjWa5sSzs9AE3VlczDiFem%2F%2FZdwKmWjnGJyrxP%2FANeVvSWhx1qizxtWOM%2BKzTusqvqoaDiYfGUjuIRF%2FDqX7XozCWJA2xmNnrYtWR4kevW2oNbog3DYIBf4S8iw1nRmivK4kkR0dO7w%2Bl3T%2Fd%2BAakG3wVooGYxyBfNVg%2B%2Fve0uFwPkCgg3Bqfjw%2BxNsWNmp5Wmq8eUknUYBvLqqNsxeY4me0KEkqXYPNyNAu7j2QZb5G1ybLVxQzTL8C44wtfyvj%2BOVJkJyYqS4bDr96R3vWcZW46f0rTnyIVak2lPq48HjA2b%2FdQhzOaP%2BwhW5%2FFo7gSO8EwKcys9GTTXodt9clO0e7GKGW5IAkz%2BbkvRrso9FKF%2BczFxddl8U%2BLFnFlXxIIKMXk7hjYSxgxSryMVY2IuogMitXpZh5fK4E2bQZfkX8N%2FTCzppXCBjqkAbvvpzAP4aBq%2FJ9W3CDN8DWIGvK%2BqKicl6sP3XttfIglX0IRE7jvSsm8OU2wdxatuTX578x1qSjQMJDLXDU%2FT5laH%2F6M%2FZDySRWy%2FWCSaE25qpcsMUz3Til%2Fw43Nikd5oyYJviti5P3SWAmvdyqEzYbqRk0whLJM%2FfxUv3Ui4HK696jfxxIgrGA0cdMbM2tPd4HUfqFm8vVreWyL6ZWTPWXggsex&X-Amz-Signature=2d187d5fb04fdf8f7a69c25ae40bfd117294df88e9411dd41b710b17a968e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JPDZ5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtu%2BAuTCWwsBXfytZHxTSdcZBMbYLDkQjI6lL1vGTeJgIhAPcvQ9HVuzoMwF83PfnlA8bhiIb801L8fKi0HYr4HvP3KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyxxs58cGq7Sy5IaV8q3APfhakNY2GhgcPKV7iIjOXCQx07sylaKztZ0tL%2BFoGWnK58byYIk%2Bl8%2BRskbQI0SAwo7KHM%2BkdNCijXyGCeZekXlb6SZ13cRMQY%2FJgLwDwzs3arHiVXpWJoEOB7%2B7pmWVAUYpEvj%2Bg6BWzkYB2BZ%2BY2uN7adgX53YwpzAIauN6camve4uieG8m5dXhatLCj2r5m18B52r6jLCMgjWa5sSzs9AE3VlczDiFem%2F%2FZdwKmWjnGJyrxP%2FANeVvSWhx1qizxtWOM%2BKzTusqvqoaDiYfGUjuIRF%2FDqX7XozCWJA2xmNnrYtWR4kevW2oNbog3DYIBf4S8iw1nRmivK4kkR0dO7w%2Bl3T%2Fd%2BAakG3wVooGYxyBfNVg%2B%2Fve0uFwPkCgg3Bqfjw%2BxNsWNmp5Wmq8eUknUYBvLqqNsxeY4me0KEkqXYPNyNAu7j2QZb5G1ybLVxQzTL8C44wtfyvj%2BOVJkJyYqS4bDr96R3vWcZW46f0rTnyIVak2lPq48HjA2b%2FdQhzOaP%2BwhW5%2FFo7gSO8EwKcys9GTTXodt9clO0e7GKGW5IAkz%2BbkvRrso9FKF%2BczFxddl8U%2BLFnFlXxIIKMXk7hjYSxgxSryMVY2IuogMitXpZh5fK4E2bQZfkX8N%2FTCzppXCBjqkAbvvpzAP4aBq%2FJ9W3CDN8DWIGvK%2BqKicl6sP3XttfIglX0IRE7jvSsm8OU2wdxatuTX578x1qSjQMJDLXDU%2FT5laH%2F6M%2FZDySRWy%2FWCSaE25qpcsMUz3Til%2Fw43Nikd5oyYJviti5P3SWAmvdyqEzYbqRk0whLJM%2FfxUv3Ui4HK696jfxxIgrGA0cdMbM2tPd4HUfqFm8vVreWyL6ZWTPWXggsex&X-Amz-Signature=e183c4b784b241c5aee453ac3d20fbabff49dfb984d2d8af44556788ae4e5e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
