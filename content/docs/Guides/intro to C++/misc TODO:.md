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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4KGH3M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqNyLExTBA3iKb0E2n5FRZ9XDYKps2ZCP43pn%2BxQ%2BIQAIgIHc3Gz%2BwIfR9fZQ3yFUZTrL03u1jB2atniX2fch5rZkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChCfjhKpLjl3f44nyrcA6NSqSHyQP6fAGJtUiNE%2FdilvMv1a8DUAVYWZZpk%2Fv6bUaMKHm7n%2Bj6FDpAFJxQUw%2FvzbGJXj2VRcr%2B36smJgsRt27%2FNvUyXG6j1FXqjo5RX%2FQC6RoNvRampBeh4rqjjtOe3gjDH9kAT5VVm3Ili0l5e72SwgrtFO2n1cRwNHOq%2BLCEsZYfYWf3ZMgtK0zNdOquPoGMDOQoZMinwDLYE1guDyyu1l4gw4mOnq4u4hsk5U%2BBVWwdjfCOMXmdg73GdZeHt%2FMXaoZcAOftiN0huPi7oGVUBzxUb1rmhx21QqJxIIjNAGTrrClrZmKXO3ahvLyZPXmIyWKiiDqz1zhx1lGnDmn0HsepG%2B%2Ft8wXlU7FaX0fzReHmS6VQQUMxszA1c89R5N1tiNFQ26SUeJQyxuQb3Aq%2BKq1DkO1V0npmV5mPVZqVGgQP2eZtlswDhB%2Fco5OfekFRVRBp6Pw2ovIzeZsZXIerdJFi6l9t5rCYOXgK3piPJwDoFf4S4RkOqzeIPAe9np6tInvw0a%2F5yO3iG8%2FPe0Lm0kGZTUkwNlqzLhCzWbYjjJbcb9SeyUJK%2FzJKg1aBKzZGOq2%2BHtGbqhYLkm3%2BNdy9MVGfBnH7o%2BjwpNfp6on5kc8mSUKDrwyN6MNHyoMAGOqUB6sm7BLNZE8zRpbsQMAKtx4ybKxCj8gPCncPwF8ZJOlHTbEaWsFx5HzLLlaL904Kvelk8Kqbe1NdTTlYq6Xwyxxt7oGkVYPGe8mwnyBSLaAOrask%2Fr%2BxXjNFnAJz0XIHq%2BcBlcisdCBtgT7XQLYOSPA%2FeXGxEgcKSWSBKt3tpsx417YV7GHiSHD9hBKwJeiWTO5faHILKEa3ykFuuHtoKbOg2vhm3&X-Amz-Signature=156b24db1ab7a7a01438cf88293b7c7c8b53bc39b5938a81a59f4efa57bb1fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4KGH3M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqNyLExTBA3iKb0E2n5FRZ9XDYKps2ZCP43pn%2BxQ%2BIQAIgIHc3Gz%2BwIfR9fZQ3yFUZTrL03u1jB2atniX2fch5rZkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChCfjhKpLjl3f44nyrcA6NSqSHyQP6fAGJtUiNE%2FdilvMv1a8DUAVYWZZpk%2Fv6bUaMKHm7n%2Bj6FDpAFJxQUw%2FvzbGJXj2VRcr%2B36smJgsRt27%2FNvUyXG6j1FXqjo5RX%2FQC6RoNvRampBeh4rqjjtOe3gjDH9kAT5VVm3Ili0l5e72SwgrtFO2n1cRwNHOq%2BLCEsZYfYWf3ZMgtK0zNdOquPoGMDOQoZMinwDLYE1guDyyu1l4gw4mOnq4u4hsk5U%2BBVWwdjfCOMXmdg73GdZeHt%2FMXaoZcAOftiN0huPi7oGVUBzxUb1rmhx21QqJxIIjNAGTrrClrZmKXO3ahvLyZPXmIyWKiiDqz1zhx1lGnDmn0HsepG%2B%2Ft8wXlU7FaX0fzReHmS6VQQUMxszA1c89R5N1tiNFQ26SUeJQyxuQb3Aq%2BKq1DkO1V0npmV5mPVZqVGgQP2eZtlswDhB%2Fco5OfekFRVRBp6Pw2ovIzeZsZXIerdJFi6l9t5rCYOXgK3piPJwDoFf4S4RkOqzeIPAe9np6tInvw0a%2F5yO3iG8%2FPe0Lm0kGZTUkwNlqzLhCzWbYjjJbcb9SeyUJK%2FzJKg1aBKzZGOq2%2BHtGbqhYLkm3%2BNdy9MVGfBnH7o%2BjwpNfp6on5kc8mSUKDrwyN6MNHyoMAGOqUB6sm7BLNZE8zRpbsQMAKtx4ybKxCj8gPCncPwF8ZJOlHTbEaWsFx5HzLLlaL904Kvelk8Kqbe1NdTTlYq6Xwyxxt7oGkVYPGe8mwnyBSLaAOrask%2Fr%2BxXjNFnAJz0XIHq%2BcBlcisdCBtgT7XQLYOSPA%2FeXGxEgcKSWSBKt3tpsx417YV7GHiSHD9hBKwJeiWTO5faHILKEa3ykFuuHtoKbOg2vhm3&X-Amz-Signature=1e6dbf691d6b0154eee20381ef08f0a5c304fc4463e32499bb2f3f15c97ef967&X-Amz-SignedHeaders=host&x-id=GetObject)

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
