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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNGAFJ4T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBJzswTzgojJrPBE3vus6z0wesevXFs9ywh%2B8v8YjZjDAiBT3LCy%2F8rsngwScH9X9GsrZaKNI7rMZGshxz67N5hkxSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BQCswlgmb04BoH9xKtwDJbq3lfIty3y%2FHP%2FDBe1km60KzYgSgJzRUm9EOSDpVeoZ1zaMt5sDQl49mKAsFtXZuCdC1U2wM%2Busvu3gVtQxj8krN39ZwzWB7eyNkQZUzPgw%2Fm40cRio3yHjO1TXPUAfB4o4TcCaXvMJL7W83IyIN%2BrYMM1xl7bmJZ2z0yFtJIXu5%2B9qzdVqoRn4%2Far6Ec0r%2BwSR7JYqB8mF%2F48X4VOgZtyUzZDijYh3YgZaBuSnPu5My0Wyye3ydK1mNWBAnhQE8pfuBxLQDPZ3ebqIV7olq5qLej4PO4ZKBucDrkI83EqbvxAcfKJ4ph86SZ%2BvhlSnPHSIUz%2B3n%2BU1gF%2B1NQvWmx5OPR2jK75JEp3HkKqxNCCpdQfpj%2BpfHZP0CuIAGWtu5hMpniAVuWBxJ5in%2FAzYrqsEEqoumA8k69XhAXJ1lNPwpdXUsuf5tuhBkexDEz7aK9K2lBK3G0lIqWkm7TlhYVwwMrPG3FA1JDBohMBaLGFtpRVDGybRMy8AxSz0SMT%2Bq9b163AbNLgMDXqhelQWYvyGDWeZRcKYbxHiVhJEnk%2BsXIYzebAaf9al063bVhE%2B6bicrl%2F62nkwfANMKCxANqfspd%2BC5sk3nXABNl5nFjNeFPjea2HFJMsT3m4wh8nQxAY6pgFCOuUR8jXA3KtfOEWYep0rcTAGj1XPfrPMZBHQlLR1lXurv3zNPLHRS3VMQ5jJUhmad%2B3whl%2FNTq5qYr411A7OOcwEDuvjB%2B%2FtRGO6X1aph4u4qNHIuE1y0LHUwH6o080eQfVdxXkaveJSEKZemV2Q2EmHyjkJQ0MKG%2Bpkts4xPpc3x579nx2hYoOkEhHgMiUmJ2zn0S9eXZL010VcMrJlUgfdgQzr&X-Amz-Signature=6a061b573cac05b451adfebad36018cc2914a862cc99dce0f8b2cd4e1fe1e926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNGAFJ4T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBJzswTzgojJrPBE3vus6z0wesevXFs9ywh%2B8v8YjZjDAiBT3LCy%2F8rsngwScH9X9GsrZaKNI7rMZGshxz67N5hkxSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BQCswlgmb04BoH9xKtwDJbq3lfIty3y%2FHP%2FDBe1km60KzYgSgJzRUm9EOSDpVeoZ1zaMt5sDQl49mKAsFtXZuCdC1U2wM%2Busvu3gVtQxj8krN39ZwzWB7eyNkQZUzPgw%2Fm40cRio3yHjO1TXPUAfB4o4TcCaXvMJL7W83IyIN%2BrYMM1xl7bmJZ2z0yFtJIXu5%2B9qzdVqoRn4%2Far6Ec0r%2BwSR7JYqB8mF%2F48X4VOgZtyUzZDijYh3YgZaBuSnPu5My0Wyye3ydK1mNWBAnhQE8pfuBxLQDPZ3ebqIV7olq5qLej4PO4ZKBucDrkI83EqbvxAcfKJ4ph86SZ%2BvhlSnPHSIUz%2B3n%2BU1gF%2B1NQvWmx5OPR2jK75JEp3HkKqxNCCpdQfpj%2BpfHZP0CuIAGWtu5hMpniAVuWBxJ5in%2FAzYrqsEEqoumA8k69XhAXJ1lNPwpdXUsuf5tuhBkexDEz7aK9K2lBK3G0lIqWkm7TlhYVwwMrPG3FA1JDBohMBaLGFtpRVDGybRMy8AxSz0SMT%2Bq9b163AbNLgMDXqhelQWYvyGDWeZRcKYbxHiVhJEnk%2BsXIYzebAaf9al063bVhE%2B6bicrl%2F62nkwfANMKCxANqfspd%2BC5sk3nXABNl5nFjNeFPjea2HFJMsT3m4wh8nQxAY6pgFCOuUR8jXA3KtfOEWYep0rcTAGj1XPfrPMZBHQlLR1lXurv3zNPLHRS3VMQ5jJUhmad%2B3whl%2FNTq5qYr411A7OOcwEDuvjB%2B%2FtRGO6X1aph4u4qNHIuE1y0LHUwH6o080eQfVdxXkaveJSEKZemV2Q2EmHyjkJQ0MKG%2Bpkts4xPpc3x579nx2hYoOkEhHgMiUmJ2zn0S9eXZL010VcMrJlUgfdgQzr&X-Amz-Signature=7bef66c825b1578291103894bf7f17baec02c170d8c86e906fb6c923a938aa3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
