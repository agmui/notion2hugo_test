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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YENJHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAkpshETKsaQ1lnU1w6yTD9GJ4GgCZFJ7BtrXiaXqxXQIhAObKd%2FH1Pxc8zxa%2BsQh1Gqt40KEvrOlp8g6pda5%2FIHzNKv8DCGoQABoMNjM3NDIzMTgzODA1IgxnjnyBg%2FKcjZh35OMq3ANW3zWcrOYN%2B%2F3yJnnTidIbOl7OFfii0GHMA35E2q4GF%2BAb%2B5otRhee6wQziUPZNaIEZQM7hezzvGVQxbat9SYPGZ0PijGBPJUfVHj8LdtCUnIL4HyvqPmpLlrkhly7Y9eCc9MwsPR%2F7oObxD%2BZpwZjc23MZLjNCmuwCRqf%2B9SitrCgBF%2F5saUa3KWWp8kqc1q6lAbFaGN%2BOkCmjhtA%2FRX9WnRSW0PSiiUsFPnZwzRpy7CiJKySo26x%2FkHJqINOqQp6kHHV9Y7mJjMUV6lUhNTXftvNYJm2JS0lBMVhklYFkCmLhXa9qnl7NbnZ%2FdXQ8JdbPDqfzVc%2Fe5CjBTgiKnve5Fyg4p7PC%2F5K3Qs1GPloFnwGkQo%2F9gvXT6lPET0KAfb28XP1cGkGQ15%2BSbiQhHrNbwLMzqglrPTkdbJlmKPwBMHxjVbyaEW2lwXGCD2Sp08eXTvGhY%2BCOxtoDg5SHWcDJRNkVoBJgsRo%2BZv8MfkskBkKxUoGyLkWN%2BMMNyZTchdxe1BWUZgJZ5Gvv08X4%2FjJSBlpKQUuXU5MC%2FqohlrIPNKQVSQITQK0JbI8rkCfLtcFYpAotkwt3Wi9%2Bw0Ltma5LeOhKyZxXcMftd7m22%2Fsg37kSjDZr2o5rzzEmTDJ9%2B%2FABjqkARTDi88oa8freRprkciZEclOekzlSoLUlA%2F0Zz4PlPTUXNsRZuMeXdnJtYPRu2Vj9O6x5T1bXWspXCh59%2F9CQmR0iQwXF9QEpS69bTT6nTSTVXiM41K5JGCz61O5QwV1TTG9zDa7%2Fa%2FrtoxiodCC7qevekzcunC0M5Xh9omHs5tzo6wVO02kSmRv9%2Fcb94kmoT4fJqUuOCBraWBgFIfrwQGviuqs&X-Amz-Signature=608fba2bd64f14ee7368fd55c1fac4ac1400a35ec8e04696d4ad234d6ad4ee66&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YENJHC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAkpshETKsaQ1lnU1w6yTD9GJ4GgCZFJ7BtrXiaXqxXQIhAObKd%2FH1Pxc8zxa%2BsQh1Gqt40KEvrOlp8g6pda5%2FIHzNKv8DCGoQABoMNjM3NDIzMTgzODA1IgxnjnyBg%2FKcjZh35OMq3ANW3zWcrOYN%2B%2F3yJnnTidIbOl7OFfii0GHMA35E2q4GF%2BAb%2B5otRhee6wQziUPZNaIEZQM7hezzvGVQxbat9SYPGZ0PijGBPJUfVHj8LdtCUnIL4HyvqPmpLlrkhly7Y9eCc9MwsPR%2F7oObxD%2BZpwZjc23MZLjNCmuwCRqf%2B9SitrCgBF%2F5saUa3KWWp8kqc1q6lAbFaGN%2BOkCmjhtA%2FRX9WnRSW0PSiiUsFPnZwzRpy7CiJKySo26x%2FkHJqINOqQp6kHHV9Y7mJjMUV6lUhNTXftvNYJm2JS0lBMVhklYFkCmLhXa9qnl7NbnZ%2FdXQ8JdbPDqfzVc%2Fe5CjBTgiKnve5Fyg4p7PC%2F5K3Qs1GPloFnwGkQo%2F9gvXT6lPET0KAfb28XP1cGkGQ15%2BSbiQhHrNbwLMzqglrPTkdbJlmKPwBMHxjVbyaEW2lwXGCD2Sp08eXTvGhY%2BCOxtoDg5SHWcDJRNkVoBJgsRo%2BZv8MfkskBkKxUoGyLkWN%2BMMNyZTchdxe1BWUZgJZ5Gvv08X4%2FjJSBlpKQUuXU5MC%2FqohlrIPNKQVSQITQK0JbI8rkCfLtcFYpAotkwt3Wi9%2Bw0Ltma5LeOhKyZxXcMftd7m22%2Fsg37kSjDZr2o5rzzEmTDJ9%2B%2FABjqkARTDi88oa8freRprkciZEclOekzlSoLUlA%2F0Zz4PlPTUXNsRZuMeXdnJtYPRu2Vj9O6x5T1bXWspXCh59%2F9CQmR0iQwXF9QEpS69bTT6nTSTVXiM41K5JGCz61O5QwV1TTG9zDa7%2Fa%2FrtoxiodCC7qevekzcunC0M5Xh9omHs5tzo6wVO02kSmRv9%2Fcb94kmoT4fJqUuOCBraWBgFIfrwQGviuqs&X-Amz-Signature=cded2693a0636a684e20b7bcf0a74fc62fd14d9ccb976ce39aef46ac2ef0ee1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
