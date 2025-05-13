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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQTLWZT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCpbihTsF36Qs7fCZs1O9EV6KqU0f3Zp3%2BKVbpnUh27SwIhAOM93gIXgZU5Z9NgwAoZB1xJ%2FRzuj1R7vFlKij1RO%2FUCKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW99CjHe%2BrghO6pzAq3AM9UHvQAFJgqReVQ%2B8o%2F7Xu9lO1uEKj1cMWejUBZvtWmcsFIMH0QLC7jcF548HtMQZZnvcmHjY9pEsdpbeV2MCIjrAfiWEhXL4TtnLGV82DCILQVQIAb8nMvwN1OT%2Bt5OfmhqfhaUikfiUlFR91SQ2ooUj%2BYuNVOHv%2FSyd2pUY%2FczYk6bRw2mfxgFmBxHf42GCwcgd23L0WnLCMEWWvOgS3G%2FyKsQOw5iXyM6AcpCRMu%2BHLdi840GVQPTBp%2BPgGKgfwzeb30%2B5fZltkhz5ryshJemNPMdpAKYgncTgcBnU7%2F8%2FP%2FTQAMoBTSTpqZQzOW6AS7cYy6lkuPyicPYr%2F7jsUjqSwRL8wEFk26gLfBcfl9PQ3f946keJGXlgDMaA6Duz%2F7DBXvF5XVOKXuQrHqyM2diyqlM3bQELsKmHNtlfKSHVbaFmIi6LfynASxI8wgmOMgcY3XabU7hKxWEFCXIc%2B8D5PoQIvzGotkygiLWWJTay8g85P50qQIORYDLcrRId4p5OFgepQsPwj0PfIZOi2PIw%2B%2FLiJbN%2FK%2B8WzD9MQR4dYgHD5pENXWhdxRNZfuRHCSygdqrKkRW8wZSHS%2B%2BmZim81naovyKVbUkiAXduJ9MX9Y%2B7Itn7t9vQN0TDkjY7BBjqkAaPH24BKWd5oGhmYpqj3lgXD4Il%2BaS5%2BVfiNa8D%2BTlIGTdPyyP8ayI2Knm%2Bmg7Ulpbm7pv2M14k%2BLq0dttUxQr2ntH4oMnD4%2FhXkAQD4zLkgcDd1e%2BwGKskuip2kjZ7G61b8xKbxHo3jr63U0x51OE51NcoGJICLSg83EDkRWrhBMeI4Oogt0pJMXAUSRvZPTV%2BBfMJRzviEkmyrxfo0NTEt2xnZ&X-Amz-Signature=516458f9a2741669396d0b3340c8a6e49a0c152afe1470b2dfeb5b5ac0f3d7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQTLWZT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCpbihTsF36Qs7fCZs1O9EV6KqU0f3Zp3%2BKVbpnUh27SwIhAOM93gIXgZU5Z9NgwAoZB1xJ%2FRzuj1R7vFlKij1RO%2FUCKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW99CjHe%2BrghO6pzAq3AM9UHvQAFJgqReVQ%2B8o%2F7Xu9lO1uEKj1cMWejUBZvtWmcsFIMH0QLC7jcF548HtMQZZnvcmHjY9pEsdpbeV2MCIjrAfiWEhXL4TtnLGV82DCILQVQIAb8nMvwN1OT%2Bt5OfmhqfhaUikfiUlFR91SQ2ooUj%2BYuNVOHv%2FSyd2pUY%2FczYk6bRw2mfxgFmBxHf42GCwcgd23L0WnLCMEWWvOgS3G%2FyKsQOw5iXyM6AcpCRMu%2BHLdi840GVQPTBp%2BPgGKgfwzeb30%2B5fZltkhz5ryshJemNPMdpAKYgncTgcBnU7%2F8%2FP%2FTQAMoBTSTpqZQzOW6AS7cYy6lkuPyicPYr%2F7jsUjqSwRL8wEFk26gLfBcfl9PQ3f946keJGXlgDMaA6Duz%2F7DBXvF5XVOKXuQrHqyM2diyqlM3bQELsKmHNtlfKSHVbaFmIi6LfynASxI8wgmOMgcY3XabU7hKxWEFCXIc%2B8D5PoQIvzGotkygiLWWJTay8g85P50qQIORYDLcrRId4p5OFgepQsPwj0PfIZOi2PIw%2B%2FLiJbN%2FK%2B8WzD9MQR4dYgHD5pENXWhdxRNZfuRHCSygdqrKkRW8wZSHS%2B%2BmZim81naovyKVbUkiAXduJ9MX9Y%2B7Itn7t9vQN0TDkjY7BBjqkAaPH24BKWd5oGhmYpqj3lgXD4Il%2BaS5%2BVfiNa8D%2BTlIGTdPyyP8ayI2Knm%2Bmg7Ulpbm7pv2M14k%2BLq0dttUxQr2ntH4oMnD4%2FhXkAQD4zLkgcDd1e%2BwGKskuip2kjZ7G61b8xKbxHo3jr63U0x51OE51NcoGJICLSg83EDkRWrhBMeI4Oogt0pJMXAUSRvZPTV%2BBfMJRzviEkmyrxfo0NTEt2xnZ&X-Amz-Signature=aca162ab7bd5a18b7c4d9eac46079dd9240be2f0bbab34e0992d8f8e61bbe7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
