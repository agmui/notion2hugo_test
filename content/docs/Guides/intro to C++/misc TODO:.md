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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAY5VNH%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnrWxZH8fbuEx6OLq%2FVsCHoy1AHknA1fn76LbMwu0l7QIgK7lO%2BjxRrC5iW5kI1OimmV28hL%2B8dLNlSU0m%2BjDpe8Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCcC16XItb6Tw5PVmyrcA0UAaUniJmu1oL52h%2B8zq0vs3wV%2F5g5z40vrBhNWcSSj4nkmg40crVWHOexBS9VFK6VgQwPWVsWECgoOoIsvQKRcgwKagspHNva77xerGmXSEvThxFdM9gDOnF2AMgOUAXoraWryzWCtBFm9IV1fF%2BcMTG0rb0NSRURTfm2MZ7vYL5EJtCn7Cc%2FUtEuMioEsLC4PW2J4hniU2PfLtIucKFR5ZxI0btthN5%2BISzORUzNiymT6zwRgNOaP7zJGcCz7wnBUvjQDte2YTqSL6NW%2Fv90uAJbB2AmNmpQr1c%2BINPei51nIUhwaw5YrDrkKSZWTw5mXV0MCZkjhCnj8GukwCsygot8JoFgqfnwqqNRln7ooLpyI1Zg9RWJsmbZvTpn1bjImjstZRYDjUlLoXRoEXcxUoHIvreKv9lBFeG1jMpXM2ufkSxtNzjmM39WXhnZGGn69gYwkHi%2BiOlH7VdbDtzVSUbZXgBD30SxnBd4JUq5hA32HrZp6ihnXaV00DFn7u1fCkkLFmtW6WUJljF7j2R9VlLkkk0pG6vcPw%2Bbs5UihogST4PGNa8pIkIYgNR%2BDe12EGEB%2BtOEFmCFNRGGDyfVInjkUpZiAq%2BERq1dJaAAXrVLt3QOg5Jngt1XYMI%2Bf68cGOqUBeobq4Yo4hK9NaL0vQWiex9zWRWd5%2F5BeKP87xtUq%2F%2BsXcM41gpFN%2FVG7DH2wq7hMp7T7838DuDmEe%2FnWZ9a4OWHIMthZV6ra7tHh%2F%2F6imbtSNz9GifRuYb9Bt98Hxrc0Wrq3SI8A8xSuaVcCUFNRLvGjRL%2FwUBjrs%2BUlbmNq%2BrVhywuLJMcnu1sScsktDZtzvY79sNc0s5u3RsrgqIJzbTTz7RKp&X-Amz-Signature=355ece31900b240427f5f62718b7eae631517704cfd991d3f1b6c1a9b156c4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAY5VNH%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnrWxZH8fbuEx6OLq%2FVsCHoy1AHknA1fn76LbMwu0l7QIgK7lO%2BjxRrC5iW5kI1OimmV28hL%2B8dLNlSU0m%2BjDpe8Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCcC16XItb6Tw5PVmyrcA0UAaUniJmu1oL52h%2B8zq0vs3wV%2F5g5z40vrBhNWcSSj4nkmg40crVWHOexBS9VFK6VgQwPWVsWECgoOoIsvQKRcgwKagspHNva77xerGmXSEvThxFdM9gDOnF2AMgOUAXoraWryzWCtBFm9IV1fF%2BcMTG0rb0NSRURTfm2MZ7vYL5EJtCn7Cc%2FUtEuMioEsLC4PW2J4hniU2PfLtIucKFR5ZxI0btthN5%2BISzORUzNiymT6zwRgNOaP7zJGcCz7wnBUvjQDte2YTqSL6NW%2Fv90uAJbB2AmNmpQr1c%2BINPei51nIUhwaw5YrDrkKSZWTw5mXV0MCZkjhCnj8GukwCsygot8JoFgqfnwqqNRln7ooLpyI1Zg9RWJsmbZvTpn1bjImjstZRYDjUlLoXRoEXcxUoHIvreKv9lBFeG1jMpXM2ufkSxtNzjmM39WXhnZGGn69gYwkHi%2BiOlH7VdbDtzVSUbZXgBD30SxnBd4JUq5hA32HrZp6ihnXaV00DFn7u1fCkkLFmtW6WUJljF7j2R9VlLkkk0pG6vcPw%2Bbs5UihogST4PGNa8pIkIYgNR%2BDe12EGEB%2BtOEFmCFNRGGDyfVInjkUpZiAq%2BERq1dJaAAXrVLt3QOg5Jngt1XYMI%2Bf68cGOqUBeobq4Yo4hK9NaL0vQWiex9zWRWd5%2F5BeKP87xtUq%2F%2BsXcM41gpFN%2FVG7DH2wq7hMp7T7838DuDmEe%2FnWZ9a4OWHIMthZV6ra7tHh%2F%2F6imbtSNz9GifRuYb9Bt98Hxrc0Wrq3SI8A8xSuaVcCUFNRLvGjRL%2FwUBjrs%2BUlbmNq%2BrVhywuLJMcnu1sScsktDZtzvY79sNc0s5u3RsrgqIJzbTTz7RKp&X-Amz-Signature=199552eb7a01f8e325599c71813f4219da12226822611f7b033859a80b41c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
