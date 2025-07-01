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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNQXRAW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7I2RnhXomV6ThcHPwZmN8hRSSsnLAsDYgrvYD%2Bif5nwIhAPHNjGqtZsgW7XDyO4EMoWznotZzJDYpA0y015Z0M%2FWSKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfYqMFF%2Fol1Euox1gq3AOkIw3Ke7s6Pf9vCNSik8dvbnCRz9IAuQsk%2FuYaHm%2BsrlQXzT7DGuLCqsOiAcZUTjK9CT0oYOriLH2Rakd%2B4aCLPZ6M%2B4%2FouH0xuWy74blxfECNfQMoWmQcMZDpac1hT%2FlTLFCAQ0yM%2Fl6oF4XiTtldajJJnZsNabiv%2FRJhmZnhUcFnAP8wcc8JxUURVswLkSiDVeWBjkik7PD9ZRcG1P9yvcvG9lM%2Bk3iKLTFyUTTRNK94x684VhmMTE%2BWfSrug%2FIHlNYPDVDNca2LDHFjPnQqv3%2FYtjB2lX9%2BYj1hfl1gvj%2FH1vJ6HgNQrp1tuvTnyFqjQP%2F7aSqrJNBx7IPAgBJ4xk6zEYi%2BShlmC73BpToc5nGAu0C8IRvphAbEsJN%2BCumR4cJXlAZI3eiwk5FX1IE8MGh5FIbuGv6kxYb6CMw%2BfOAoAw0qINUbCIO%2F%2FkTzgD5C95l4PDsx3ljWcWR0Oqrze3ytEnyNTFA6P8sbXM4SwYswbmMJrOVlMlBVhR2qnw1qdpF%2BfgMJKQF7tO5ovROFzNGQJ8NytllFLbyStQ5qrHhPbS4j12AeB8r2jLmy%2Fyqp7knAlKiuUhKUFEYhVjgCg9Ns7CzMkuNDTn1nEsctZ%2FIgAFsAql8FtoS53zDuho7DBjqkAR%2Brol0V%2BWF6NLoCep2QNTg%2FPt8FwXD4DnouRp%2F22%2BG0Y5JBXH1C%2BSbzEekK17Iw1mltsqTGggRWWw6V8xJgYKXxMSYryOGuzebUXLxq%2BH3o06a129DW6vSeH4Js%2FWi2b6NnsYMpbZlmvwtmNsPLBqfciCIBcVhYpRXm%2F6hVrMH1DlX8dKApDi3mOq1a2IAsYBICy6WcOr84zAR%2BKEcMROsYczJW&X-Amz-Signature=1572b821e0ca638c531d1c43f9903fb49117a6c76b09eb7b985c1e0581dc3f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNQXRAW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7I2RnhXomV6ThcHPwZmN8hRSSsnLAsDYgrvYD%2Bif5nwIhAPHNjGqtZsgW7XDyO4EMoWznotZzJDYpA0y015Z0M%2FWSKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfYqMFF%2Fol1Euox1gq3AOkIw3Ke7s6Pf9vCNSik8dvbnCRz9IAuQsk%2FuYaHm%2BsrlQXzT7DGuLCqsOiAcZUTjK9CT0oYOriLH2Rakd%2B4aCLPZ6M%2B4%2FouH0xuWy74blxfECNfQMoWmQcMZDpac1hT%2FlTLFCAQ0yM%2Fl6oF4XiTtldajJJnZsNabiv%2FRJhmZnhUcFnAP8wcc8JxUURVswLkSiDVeWBjkik7PD9ZRcG1P9yvcvG9lM%2Bk3iKLTFyUTTRNK94x684VhmMTE%2BWfSrug%2FIHlNYPDVDNca2LDHFjPnQqv3%2FYtjB2lX9%2BYj1hfl1gvj%2FH1vJ6HgNQrp1tuvTnyFqjQP%2F7aSqrJNBx7IPAgBJ4xk6zEYi%2BShlmC73BpToc5nGAu0C8IRvphAbEsJN%2BCumR4cJXlAZI3eiwk5FX1IE8MGh5FIbuGv6kxYb6CMw%2BfOAoAw0qINUbCIO%2F%2FkTzgD5C95l4PDsx3ljWcWR0Oqrze3ytEnyNTFA6P8sbXM4SwYswbmMJrOVlMlBVhR2qnw1qdpF%2BfgMJKQF7tO5ovROFzNGQJ8NytllFLbyStQ5qrHhPbS4j12AeB8r2jLmy%2Fyqp7knAlKiuUhKUFEYhVjgCg9Ns7CzMkuNDTn1nEsctZ%2FIgAFsAql8FtoS53zDuho7DBjqkAR%2Brol0V%2BWF6NLoCep2QNTg%2FPt8FwXD4DnouRp%2F22%2BG0Y5JBXH1C%2BSbzEekK17Iw1mltsqTGggRWWw6V8xJgYKXxMSYryOGuzebUXLxq%2BH3o06a129DW6vSeH4Js%2FWi2b6NnsYMpbZlmvwtmNsPLBqfciCIBcVhYpRXm%2F6hVrMH1DlX8dKApDi3mOq1a2IAsYBICy6WcOr84zAR%2BKEcMROsYczJW&X-Amz-Signature=d84660efeba38123366e0c747198318ed9ffd8173debdee2697886a009ae8818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
