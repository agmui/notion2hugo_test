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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JM64GFQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDppeVEnLXgS7AYcChoDAb2e0da1s85Yke5%2BupK%2BhfkAiEAk%2BQORiJDE4JDGiOGFjAlhHOqp%2BN3UkKzuTwgOFXfrWwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwwgreEhyBPMmeiGCrcA5ViuVtef0UN8lRUFRj%2FDvWA1Jd8JtkRNZsBr5PW4b%2FgnpQhWsXDZALOM6HZemdakuvPe89DUyn4ZQXf09khGFWFgNwzr8uupxz8ieAhiVg0P2fiJf8Ve%2B7U3n%2BV7B0b7f6NLz1h7CaJrmnkMfNo0c4z8XsgDKW9Zt6LbdfkoW5hcAl5%2FPwLURXxJvX0Fjmxzdq%2BCkj0fR7bwDft2EIxgpUAE1cnELlkPzpZgh13gKyY644bR6iru8AJWWqrsby%2BRIGcoL1yBV3JbjwHtRFX58d1U7Ap6Uj5r4tFnQroyqGNJt6wmX2Owu7lbBChzwrlAy20F9BR6Nsw4xmMwsMNGQYpWsdjPb9rjYRju5HN5uuLNL5EQAjrogwe%2Bbv8pVHVS%2FqwPexrIEoXX2sCSvPD2N4Du9I3TC7yEUs1veD4CeRlPue0O%2BxeDiGVGWaYutGnYtjzKlZYPS69KwJRoZ5qKYqj1U6uyNmRdlZIqVqX8nAas1gJLwD9PGA%2F2ckZBYqlLZI2MOi%2FAkqBA9FhjijCB%2FR1MEiptmnNlI0oPom5laBJaMJJkhFw4gvA4yntXzmp5xiMS8QZba2nFfVz%2BPiMp18uTr%2BUxbmQlya%2B8RJid%2BUjQNzuS3buuxZljbeOMLvx5sEGOqUBtRKLTWriHfRWWOeISy27sa8oJy8oKuv8RyDoRiFPwfIY3%2FsrUtForjlkTn8pHSOOeCWdbiLDkatBIn%2B%2FpIDYB%2BONrOnxuPnqBycXPUlpoEy7vUsw0qts%2BaKOiJMdj3onp5YDWKLEKkbhdmh1ejV7KZQCMcBnaC67fBE8r%2FyegzqhwRNp0YMDxPoNGBXqdFdqOm4LHRFzJJTX7%2F4Yt6d9e4HzHr4I&X-Amz-Signature=cc1e59ecd70b928803e63488c3fe0c8c0f55d21e404c29246c61b57db9c2e59d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JM64GFQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDppeVEnLXgS7AYcChoDAb2e0da1s85Yke5%2BupK%2BhfkAiEAk%2BQORiJDE4JDGiOGFjAlhHOqp%2BN3UkKzuTwgOFXfrWwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwwgreEhyBPMmeiGCrcA5ViuVtef0UN8lRUFRj%2FDvWA1Jd8JtkRNZsBr5PW4b%2FgnpQhWsXDZALOM6HZemdakuvPe89DUyn4ZQXf09khGFWFgNwzr8uupxz8ieAhiVg0P2fiJf8Ve%2B7U3n%2BV7B0b7f6NLz1h7CaJrmnkMfNo0c4z8XsgDKW9Zt6LbdfkoW5hcAl5%2FPwLURXxJvX0Fjmxzdq%2BCkj0fR7bwDft2EIxgpUAE1cnELlkPzpZgh13gKyY644bR6iru8AJWWqrsby%2BRIGcoL1yBV3JbjwHtRFX58d1U7Ap6Uj5r4tFnQroyqGNJt6wmX2Owu7lbBChzwrlAy20F9BR6Nsw4xmMwsMNGQYpWsdjPb9rjYRju5HN5uuLNL5EQAjrogwe%2Bbv8pVHVS%2FqwPexrIEoXX2sCSvPD2N4Du9I3TC7yEUs1veD4CeRlPue0O%2BxeDiGVGWaYutGnYtjzKlZYPS69KwJRoZ5qKYqj1U6uyNmRdlZIqVqX8nAas1gJLwD9PGA%2F2ckZBYqlLZI2MOi%2FAkqBA9FhjijCB%2FR1MEiptmnNlI0oPom5laBJaMJJkhFw4gvA4yntXzmp5xiMS8QZba2nFfVz%2BPiMp18uTr%2BUxbmQlya%2B8RJid%2BUjQNzuS3buuxZljbeOMLvx5sEGOqUBtRKLTWriHfRWWOeISy27sa8oJy8oKuv8RyDoRiFPwfIY3%2FsrUtForjlkTn8pHSOOeCWdbiLDkatBIn%2B%2FpIDYB%2BONrOnxuPnqBycXPUlpoEy7vUsw0qts%2BaKOiJMdj3onp5YDWKLEKkbhdmh1ejV7KZQCMcBnaC67fBE8r%2FyegzqhwRNp0YMDxPoNGBXqdFdqOm4LHRFzJJTX7%2F4Yt6d9e4HzHr4I&X-Amz-Signature=3186ea1e5eef7af899d3abb38cf7323a3e9359ecf2cc6bf43fb7aea4932a3d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
