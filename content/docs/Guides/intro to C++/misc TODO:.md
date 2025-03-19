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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWR7NAN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCVzNAKhxQjuPEBo4sHS4TDSkvxCZ4L2lK3r36eu5BTKwIhAIC29NOCtlFQGtQUBsvPA4mVM45k2tluCB%2FFqib%2BXdyaKv8DCGwQABoMNjM3NDIzMTgzODA1Igx0044DhMTy0V8DguYq3AP4cgUcDQhRhvUhONIdhhj%2By0J6OubZoJ5lR147CbVor52RC79buK1yGr1iJvpnhI6aaNAC6B%2BmJwpNTpdHhzVebxpFgE4QXD91rhus7g6hFk7vjPNbQifxpGl1%2B5GEbHcBM4QWmElPGH1FswO7ZB3h5blb0hmIRyo6CqWiUeW4iozRSZNs9eTY62dyCpLpdJ%2FT49Mjp4hFdk2FHjgjf1i2Y7c9MMBx82QS2zBNFLw77i3nq%2F16o%2BqrsFiLLe0PkAwfD5Wk%2Fg6zqI6R%2BUEs4OnaCYy2mA4mQ7X9NRXO%2Fca0WPOCtKrK1PKJv%2F9iwvEi4wxeh8vX2W4pEbwWnK%2B8pCcGw5r6a%2BbdVCf96IiNaX%2Fuh41uvPeys9BwuHJ9pNM5b9MNqIncgXKDMaQ1WPKd4BEG03XxvnacersNFO78Wvi7NoB633Wjqrz6wavlbe4H%2F2V54ZFEo41BNIuXBXseKMOi%2BZffIdD4xkwljOoQ8EYbvot3d2%2BryQeL%2B8RjjSYV8z%2FAPbbR7KVZuumsiV1%2Fw1tXVPm3cx95mHwkoIlM1DY4jLbaUw8n%2FpTgWU0QndQ7X5bv6%2F9O2Dr%2F6ucrxGraNNdOTApar4Q4DEmxiZP7d2GVvSemQimteHvXg5fiEDCL3ui%2BBjqkAeZsadvtbeD1vdEctBW%2BAUtLZN5GRxKSQL0lea%2FJRjFcl3dvZJczPiNDEGbwvUaDFqTdH8R4%2FeqciPR2sNaRm6ma3A1qF5fIwqVb%2B7FHa4h6Lo29POV8mE2B7n7M12%2FcqyYloXwDTnzeWM7L0w9tSEraKMe65x20zm66GRpYM9jDaJY%2BFWL56o8%2BVuy6t9Z%2F2Joc4Ao7RTaXCGj8eMjZ%2BsTGwYtn&X-Amz-Signature=1e8db8b5a2593c9c5f67f133b82492b28e6f65bf33bc6fa2de94c0d46541dd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWR7NAN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCVzNAKhxQjuPEBo4sHS4TDSkvxCZ4L2lK3r36eu5BTKwIhAIC29NOCtlFQGtQUBsvPA4mVM45k2tluCB%2FFqib%2BXdyaKv8DCGwQABoMNjM3NDIzMTgzODA1Igx0044DhMTy0V8DguYq3AP4cgUcDQhRhvUhONIdhhj%2By0J6OubZoJ5lR147CbVor52RC79buK1yGr1iJvpnhI6aaNAC6B%2BmJwpNTpdHhzVebxpFgE4QXD91rhus7g6hFk7vjPNbQifxpGl1%2B5GEbHcBM4QWmElPGH1FswO7ZB3h5blb0hmIRyo6CqWiUeW4iozRSZNs9eTY62dyCpLpdJ%2FT49Mjp4hFdk2FHjgjf1i2Y7c9MMBx82QS2zBNFLw77i3nq%2F16o%2BqrsFiLLe0PkAwfD5Wk%2Fg6zqI6R%2BUEs4OnaCYy2mA4mQ7X9NRXO%2Fca0WPOCtKrK1PKJv%2F9iwvEi4wxeh8vX2W4pEbwWnK%2B8pCcGw5r6a%2BbdVCf96IiNaX%2Fuh41uvPeys9BwuHJ9pNM5b9MNqIncgXKDMaQ1WPKd4BEG03XxvnacersNFO78Wvi7NoB633Wjqrz6wavlbe4H%2F2V54ZFEo41BNIuXBXseKMOi%2BZffIdD4xkwljOoQ8EYbvot3d2%2BryQeL%2B8RjjSYV8z%2FAPbbR7KVZuumsiV1%2Fw1tXVPm3cx95mHwkoIlM1DY4jLbaUw8n%2FpTgWU0QndQ7X5bv6%2F9O2Dr%2F6ucrxGraNNdOTApar4Q4DEmxiZP7d2GVvSemQimteHvXg5fiEDCL3ui%2BBjqkAeZsadvtbeD1vdEctBW%2BAUtLZN5GRxKSQL0lea%2FJRjFcl3dvZJczPiNDEGbwvUaDFqTdH8R4%2FeqciPR2sNaRm6ma3A1qF5fIwqVb%2B7FHa4h6Lo29POV8mE2B7n7M12%2FcqyYloXwDTnzeWM7L0w9tSEraKMe65x20zm66GRpYM9jDaJY%2BFWL56o8%2BVuy6t9Z%2F2Joc4Ao7RTaXCGj8eMjZ%2BsTGwYtn&X-Amz-Signature=9c730f05fb052468d3b0ab883694f4fbbc736bb2e57a33e96cb31b16e86ba2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
