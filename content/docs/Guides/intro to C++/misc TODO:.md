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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3LQXN6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCCfJY7T4820zlw6Hhea%2FddE2GcHxbIhrAPu6JTe0%2F3DwIhAK8humjXdMGqL58OZGJNjnLRgrZvnblxvSy2ikxZwQcWKv8DCBYQABoMNjM3NDIzMTgzODA1IgwkxyywzUjJfZBC40gq3AOrSrbr5dcnWD7xqCavTtFeZ%2BSGChP94G1B%2BSj5zhFA5PKWGUVVDfkHIkr6DnJ7OxAqZ9sjSyB5xryP2SwNIUIRel5ZEUNRUFFOTpKEjMy7zXaMyyQje%2FGjL3cS0Dukou%2B0h1QO1Lj8CqwU%2BlQqIlzCuh4nUwCCVeEM5PeVpQZ5wk9hadd3pNmB2xF1yFnod%2BZGZlLXrwauyoRDVz0qmxwOfiekH7egKfknqhGGIuoEGyWbtbM9APWaArWvHqAHFGt6ZqL9Fj8zp779xnm21gNSqX49Xt%2B1fv165lFapbsmVn6MyzSYewl32CB2EW92Q79Hs4LUZaXL%2Fe7UtQOx6rIBfVROW0TkV2kNv%2BvPO0Pv41zdCNYaC1dIUJCBmrKpBJo3buxcAuegCvCGsDHI3Z8YX0ToUbJQgIdMEP14bT94xQ8GIl8vUwHRFLJhlBODYOhUA3z37xDinszDQpDFCTNh7ocG43V3npizVd%2FvqNAe%2FdyQ5Sz1EcMRJ4D4uuTBkpVkyApKfZBkEQ5xQgMdQiPqk1whrhSNRc5pOYvwUOkQ5FaOTWbZ7zy1oZDMp6OFzCSz3KwjaPoE2Eo9Dg1hDotXEScJQhbAiOqLLn0iJWo8gSivzJtQb8ceuTwwsjDV6KjABjqkAf8Me40gNkIYrSzGCmwaS0W%2BwbrWNRlx9pLNbMvzSEaJjOh5N3%2B3Ku97dzQXhd62xh5Sthr2KDtYhVql9NIe%2FpLNsktXWAUprU8%2B7r0tY8CA%2BRNNQ0XMseDNU5SEw536DyzIVoxtGRKrM07PfNqfBCCjm75JiM5LHbzLYmmtxo2bJUwaDJ9ZSxuLZXHgmLONoBN0tKVAm80whju%2FuJc%2FZF5dqKNn&X-Amz-Signature=674623f3cea7641fcfdb454b4bfc282e36eb45da6f7d922a18cefeb375a25f56&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3LQXN6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCCfJY7T4820zlw6Hhea%2FddE2GcHxbIhrAPu6JTe0%2F3DwIhAK8humjXdMGqL58OZGJNjnLRgrZvnblxvSy2ikxZwQcWKv8DCBYQABoMNjM3NDIzMTgzODA1IgwkxyywzUjJfZBC40gq3AOrSrbr5dcnWD7xqCavTtFeZ%2BSGChP94G1B%2BSj5zhFA5PKWGUVVDfkHIkr6DnJ7OxAqZ9sjSyB5xryP2SwNIUIRel5ZEUNRUFFOTpKEjMy7zXaMyyQje%2FGjL3cS0Dukou%2B0h1QO1Lj8CqwU%2BlQqIlzCuh4nUwCCVeEM5PeVpQZ5wk9hadd3pNmB2xF1yFnod%2BZGZlLXrwauyoRDVz0qmxwOfiekH7egKfknqhGGIuoEGyWbtbM9APWaArWvHqAHFGt6ZqL9Fj8zp779xnm21gNSqX49Xt%2B1fv165lFapbsmVn6MyzSYewl32CB2EW92Q79Hs4LUZaXL%2Fe7UtQOx6rIBfVROW0TkV2kNv%2BvPO0Pv41zdCNYaC1dIUJCBmrKpBJo3buxcAuegCvCGsDHI3Z8YX0ToUbJQgIdMEP14bT94xQ8GIl8vUwHRFLJhlBODYOhUA3z37xDinszDQpDFCTNh7ocG43V3npizVd%2FvqNAe%2FdyQ5Sz1EcMRJ4D4uuTBkpVkyApKfZBkEQ5xQgMdQiPqk1whrhSNRc5pOYvwUOkQ5FaOTWbZ7zy1oZDMp6OFzCSz3KwjaPoE2Eo9Dg1hDotXEScJQhbAiOqLLn0iJWo8gSivzJtQb8ceuTwwsjDV6KjABjqkAf8Me40gNkIYrSzGCmwaS0W%2BwbrWNRlx9pLNbMvzSEaJjOh5N3%2B3Ku97dzQXhd62xh5Sthr2KDtYhVql9NIe%2FpLNsktXWAUprU8%2B7r0tY8CA%2BRNNQ0XMseDNU5SEw536DyzIVoxtGRKrM07PfNqfBCCjm75JiM5LHbzLYmmtxo2bJUwaDJ9ZSxuLZXHgmLONoBN0tKVAm80whju%2FuJc%2FZF5dqKNn&X-Amz-Signature=17518ed3d4014b40eed7b8c3ced66829930a9d9c93efe35d5c8c39ae474104fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
