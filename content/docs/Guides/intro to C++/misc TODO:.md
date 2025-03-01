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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7DZIMI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDmhrqF71Nh9r57pajfiJGNtqBYIQcZjC67QDg2Jcg%2B7AIhALpddoYGIkEsPDW6nPSpEnC2W2j6IyTXJwpzQTLV3pYyKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEFnNw%2FQmgtst6JBoq3AMMnBC5j2evweDWVi0dHcWqgi0msoBzzbWjlqLY1iYUUNeZkc5nBTDstcnWV1%2BCufQmQfNLXgnQ4wjFLIs%2BptSZuydk%2FU7chAkdGRIXZNvHXkNsaDrygxQ8RDzKXwAiVKZu%2B97pP1R6q51WI8hJ7geQB7W8%2BYe54qTa9GOf%2F0lZ4R5YGfWQmcXOTpVRz8Ktm9RLJk7JivaSOUedAsDgyBXQVzMU7adnGliWSfrGhL1QSk2BBZ8wD8wSjgyY0rmvabCXLcdY4X0r7bJbBaulBwWz1T6AnWeeFbpBMpGMqm3IBlQNTTgsSBEtrWw6MBqxDd3J5uLKxZM63ayCOzzOY9CBs%2F%2FV4D32q0V2yLbFe8tT7umuiBA9mCKzEJ%2FiYGWWyGObzFVV641H0rCbsPoObdRU2VFcVArCtjHjT6tnk8mNcdtqsiqM7%2BoqheLrB%2F5sCZhpVUuqEa1XBUdFOnl%2F6sWluJut%2B453Z9dRb6NNMBU7PW%2FtiKVen5rVPw4wvcf3ERsaNsPp6MsVEDXr%2BRpzkiRJMQAuWTCz5juBJT4VFPs3DVn5R4OJfL4Ky7gLKUC7X7U5Pno%2BgQkaB78IACmIw2rQb33YVG73qLPv3c2D3rcRAhoovrLigeyhcRpARzCTuou%2BBjqkAQjS4Bq5JWiTgKIh2E29mxKU1x0QLfkhvbqYBULngCdJSaLXeAEq37tbrZHpxhWV%2BIeTytar9OEwDy6m9OXQFqB9BQCImmLN8BJY6XxP5JO8lDVsPygqPYH%2Bt4cmd%2BAam6FFIBvShCoQfxVR5u%2FPLcPzzorDDN4Xbi3YZAUuIqirP5bKbBS12dEcFkNw%2FD3T9qO020SeNqe42yn5ybjE3Gwq%2FvV2&X-Amz-Signature=33b1214dad04c5bf62ef25dc33d5f3b47eb1a0b2aa4fea4f09076daed00e9b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7DZIMI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDmhrqF71Nh9r57pajfiJGNtqBYIQcZjC67QDg2Jcg%2B7AIhALpddoYGIkEsPDW6nPSpEnC2W2j6IyTXJwpzQTLV3pYyKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEFnNw%2FQmgtst6JBoq3AMMnBC5j2evweDWVi0dHcWqgi0msoBzzbWjlqLY1iYUUNeZkc5nBTDstcnWV1%2BCufQmQfNLXgnQ4wjFLIs%2BptSZuydk%2FU7chAkdGRIXZNvHXkNsaDrygxQ8RDzKXwAiVKZu%2B97pP1R6q51WI8hJ7geQB7W8%2BYe54qTa9GOf%2F0lZ4R5YGfWQmcXOTpVRz8Ktm9RLJk7JivaSOUedAsDgyBXQVzMU7adnGliWSfrGhL1QSk2BBZ8wD8wSjgyY0rmvabCXLcdY4X0r7bJbBaulBwWz1T6AnWeeFbpBMpGMqm3IBlQNTTgsSBEtrWw6MBqxDd3J5uLKxZM63ayCOzzOY9CBs%2F%2FV4D32q0V2yLbFe8tT7umuiBA9mCKzEJ%2FiYGWWyGObzFVV641H0rCbsPoObdRU2VFcVArCtjHjT6tnk8mNcdtqsiqM7%2BoqheLrB%2F5sCZhpVUuqEa1XBUdFOnl%2F6sWluJut%2B453Z9dRb6NNMBU7PW%2FtiKVen5rVPw4wvcf3ERsaNsPp6MsVEDXr%2BRpzkiRJMQAuWTCz5juBJT4VFPs3DVn5R4OJfL4Ky7gLKUC7X7U5Pno%2BgQkaB78IACmIw2rQb33YVG73qLPv3c2D3rcRAhoovrLigeyhcRpARzCTuou%2BBjqkAQjS4Bq5JWiTgKIh2E29mxKU1x0QLfkhvbqYBULngCdJSaLXeAEq37tbrZHpxhWV%2BIeTytar9OEwDy6m9OXQFqB9BQCImmLN8BJY6XxP5JO8lDVsPygqPYH%2Bt4cmd%2BAam6FFIBvShCoQfxVR5u%2FPLcPzzorDDN4Xbi3YZAUuIqirP5bKbBS12dEcFkNw%2FD3T9qO020SeNqe42yn5ybjE3Gwq%2FvV2&X-Amz-Signature=11dddb95fe8d3aa766cca4a46b61cdb3d9c743c1925efbe381245ae547dbf61c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
