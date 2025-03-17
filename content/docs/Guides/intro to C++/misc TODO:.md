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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUGSVMR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Uau7B%2BAeIjUYqfHMtx1QHBtsik%2FWAikt69LS%2BpfoxAiARAyk5jGLmIbpbQzYK02rX6XFbcv8d2p0GSXYOoqPhVCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMMGaAVgMwRRgHmMTGKtwDicLpsUyyqJaiYZsq0c%2BhZuTktf7EFmKLQIaESx7J67M%2Balo2dikU6OXGqav3JKQW%2B0WQQzsjdRZyR5sLXWiW%2BzZz9r5h7ZxzZGPX7WjsPGfeqDlLm%2F41jQpPm8P8DDnJVT6wQ9ODu9I30umQ%2F2ID%2FbY2iTXec9n3Y0ZdxbNfkHnySH4gWVLupKMjlPwYT%2F8QGYmWs0l9PhrGK5oMeaJs2XUs8Qek6zgXHPzIuQxCfqhhxw8cnIeN3KCW3Nd%2FAEaGHZaIZTZqlV20sYrEuOxSn5z9PnML0VNO5tiTRjjgrLm%2BTesxr1rRmxiieSmoELu10yzMi%2BIHn4fMCV3DETL7WjrpZ7G8qoCSWY9kvxQUYD3k6ZtADcMdixrK3tmy%2FOewuMaWKJO%2FerVDY%2B1N%2BtqVu8ZteEsCLRNUzu0ZgbtGoiQpMceyP037Ehh48AeFexBDq%2FuUIJwrwGodBKQ9C9o1IP4JLD7RdL48Wu3rmGEfGb6WMoMnYqlCsHVrz2ZJBMu4RoJfcw54aFFpTtd2OgXmVO5p3NST6gyLtGTExDuukyGTOblTlu8my4KAgHFndgzAJc9atO4RAA8nkN5eVEmw3JsYBWMqoqDR%2FEQaEvaf4A9R5MybtXypePjYvjIw5ZrevgY6pgEZwAdLwf8p5WKLjNWjF4pHcSwytRDYMvH6FUi%2FXn0if4dE7CHTo2sjZLgATokLcg0yzVoTZJqDNuBpFW98KgFNKkYE5LEZsn3UDxTlvYFTeWiR7qiRMJQVA74jkhm2Hcf%2BLIfWjNu1MsyArTYAdQ1m3GOWaY2dc%2FTSjpPzxIuUoq6i94h1ViQjdP4NtMjLiVxW0xgHgl22%2FdZnJI91AkyZ5KV9yAdm&X-Amz-Signature=9fe02aab91157a2ca29e6a506d202a1e031b7a849e54d5eab8d189d639802ece&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUGSVMR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Uau7B%2BAeIjUYqfHMtx1QHBtsik%2FWAikt69LS%2BpfoxAiARAyk5jGLmIbpbQzYK02rX6XFbcv8d2p0GSXYOoqPhVCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMMGaAVgMwRRgHmMTGKtwDicLpsUyyqJaiYZsq0c%2BhZuTktf7EFmKLQIaESx7J67M%2Balo2dikU6OXGqav3JKQW%2B0WQQzsjdRZyR5sLXWiW%2BzZz9r5h7ZxzZGPX7WjsPGfeqDlLm%2F41jQpPm8P8DDnJVT6wQ9ODu9I30umQ%2F2ID%2FbY2iTXec9n3Y0ZdxbNfkHnySH4gWVLupKMjlPwYT%2F8QGYmWs0l9PhrGK5oMeaJs2XUs8Qek6zgXHPzIuQxCfqhhxw8cnIeN3KCW3Nd%2FAEaGHZaIZTZqlV20sYrEuOxSn5z9PnML0VNO5tiTRjjgrLm%2BTesxr1rRmxiieSmoELu10yzMi%2BIHn4fMCV3DETL7WjrpZ7G8qoCSWY9kvxQUYD3k6ZtADcMdixrK3tmy%2FOewuMaWKJO%2FerVDY%2B1N%2BtqVu8ZteEsCLRNUzu0ZgbtGoiQpMceyP037Ehh48AeFexBDq%2FuUIJwrwGodBKQ9C9o1IP4JLD7RdL48Wu3rmGEfGb6WMoMnYqlCsHVrz2ZJBMu4RoJfcw54aFFpTtd2OgXmVO5p3NST6gyLtGTExDuukyGTOblTlu8my4KAgHFndgzAJc9atO4RAA8nkN5eVEmw3JsYBWMqoqDR%2FEQaEvaf4A9R5MybtXypePjYvjIw5ZrevgY6pgEZwAdLwf8p5WKLjNWjF4pHcSwytRDYMvH6FUi%2FXn0if4dE7CHTo2sjZLgATokLcg0yzVoTZJqDNuBpFW98KgFNKkYE5LEZsn3UDxTlvYFTeWiR7qiRMJQVA74jkhm2Hcf%2BLIfWjNu1MsyArTYAdQ1m3GOWaY2dc%2FTSjpPzxIuUoq6i94h1ViQjdP4NtMjLiVxW0xgHgl22%2FdZnJI91AkyZ5KV9yAdm&X-Amz-Signature=712de91bb2e187230b3334d0337c90e739d44804a9ec98bd3667c23d67d61969&X-Amz-SignedHeaders=host&x-id=GetObject)

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
