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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5KEVLC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHWANG3sd5JILRAdR%2Fz90x22UglUJlS%2B4Ebrnci4dHiVAiA6vdseUPmTw8AgFYucZCNwbDEIccsIdyYlQOu4KyI3mCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM%2F2MMQ%2F6a3tFQqeeuKtwD55S%2B0rajYTVNH%2FPeP38BEYmXWZhd2mDU4dp6lNra5WCnTtS9Ipok5Reeymyg88wN2t2jNTRaSAgcI7Tb3FX2bkfgZN385wVYUxVdtpNvX3%2Fxx8ziGvngfgUlYIHd4eKOMGx4u2HoYjpkmi7CayMKIACsGSrACWQq2C3uAzDEH1Hv9fFA0miu3gD1GLE1WPpdM26e6%2BKyICz2yRVEztLngTi1qWgekAdGpQXj3r3vqgipnJazVxLFs%2B74HN1pF3swzewLuo0b%2FUM2qNywpMPZV5EmasEiqt5Xij26X9XD1Fnk%2F5see42HV%2BNBfH4dfx586udkQyTo%2F1v4qi0kNezE%2BTQDI8%2FP6fpyRaF7uAce5NyDbok0K058iaSMtY4UvS7YZQIzATQNx1qhmzfwvd92%2FjfFfPc8cS4ShjTgxwyTVuggJmZ6kZoaM7813djtA3FBpJ8IEduBdiO812xFjW6KSaDb6Fyvy8E73fXXEkImmW6yK7uSzuSBhUFJZu%2BSz0Rxa7vDzATJ%2FnZgYAyH345zc55MPUYTM18KQPTTYmtk38lgYuJbVyjhSa%2FnWoGBzCIyH%2BP6w64P2I8fr3%2FRyT%2B5gYVil9tqQUuHWHJP%2F3d2e1MjjFKONeZW1n7NmIww0PWQxAY6pgHBxhCV6ZidajG54oNSmEmXVJylNbb9ZliaoPcmoBWVql%2Bljn%2FZwF6qPZUxvB73D0Cl0E4zgzgsxxjGwphwu%2B9IW2MXUwkaOan7QqqAFmVBPzoGmUHFCqdXXrD4MIzE78eFuOXXf%2BB9W38%2B4nN345WVzTJa7%2FZKUwG538jqJXnOMeC48Cr956yT%2FYe33QnunyIoymxkIJwPRRtax%2BmCvldCy0rrCPHb&X-Amz-Signature=d6e6d1c4ff2b66f7af4fdebd0522d66b530ca762bad21434991cdb0b8e6877b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5KEVLC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHWANG3sd5JILRAdR%2Fz90x22UglUJlS%2B4Ebrnci4dHiVAiA6vdseUPmTw8AgFYucZCNwbDEIccsIdyYlQOu4KyI3mCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM%2F2MMQ%2F6a3tFQqeeuKtwD55S%2B0rajYTVNH%2FPeP38BEYmXWZhd2mDU4dp6lNra5WCnTtS9Ipok5Reeymyg88wN2t2jNTRaSAgcI7Tb3FX2bkfgZN385wVYUxVdtpNvX3%2Fxx8ziGvngfgUlYIHd4eKOMGx4u2HoYjpkmi7CayMKIACsGSrACWQq2C3uAzDEH1Hv9fFA0miu3gD1GLE1WPpdM26e6%2BKyICz2yRVEztLngTi1qWgekAdGpQXj3r3vqgipnJazVxLFs%2B74HN1pF3swzewLuo0b%2FUM2qNywpMPZV5EmasEiqt5Xij26X9XD1Fnk%2F5see42HV%2BNBfH4dfx586udkQyTo%2F1v4qi0kNezE%2BTQDI8%2FP6fpyRaF7uAce5NyDbok0K058iaSMtY4UvS7YZQIzATQNx1qhmzfwvd92%2FjfFfPc8cS4ShjTgxwyTVuggJmZ6kZoaM7813djtA3FBpJ8IEduBdiO812xFjW6KSaDb6Fyvy8E73fXXEkImmW6yK7uSzuSBhUFJZu%2BSz0Rxa7vDzATJ%2FnZgYAyH345zc55MPUYTM18KQPTTYmtk38lgYuJbVyjhSa%2FnWoGBzCIyH%2BP6w64P2I8fr3%2FRyT%2B5gYVil9tqQUuHWHJP%2F3d2e1MjjFKONeZW1n7NmIww0PWQxAY6pgHBxhCV6ZidajG54oNSmEmXVJylNbb9ZliaoPcmoBWVql%2Bljn%2FZwF6qPZUxvB73D0Cl0E4zgzgsxxjGwphwu%2B9IW2MXUwkaOan7QqqAFmVBPzoGmUHFCqdXXrD4MIzE78eFuOXXf%2BB9W38%2B4nN345WVzTJa7%2FZKUwG538jqJXnOMeC48Cr956yT%2FYe33QnunyIoymxkIJwPRRtax%2BmCvldCy0rrCPHb&X-Amz-Signature=6d51aee86e0e2c2b07e81d6740a78b664a68f9597e09411466d870f90093600f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
