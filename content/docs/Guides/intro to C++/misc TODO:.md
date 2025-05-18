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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDHOJXW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg6UNuMQZkpA1IO6kIDG3P79Snozwjr2lJIZJ7FxtoVQIgP21iVfdEsiA1xS2ijOrl1bhhLsSo09gey4jghopEj3Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPcDohtSiweOeuAFDyrcAzpe%2F4PsB4vs8WDJhpzCZ2gNQx2DXdfyai%2F1sO9JBRg9m4Nd5ZfIkqH2gjtvj5ASZMGR%2FlYEDCgNrYJU20Jte7fx3j0S358%2FRJjMLPY8kgasbz7%2BQdj1JKV3Gf5V23hVqTSS6jHFaIzYSt0WrRDcFs6hssc6I89hMaVK1r1BL4ZxN3P3EeAH%2Bygr5r9eoQDSmkkWKXS82m5kMhhs7KxMXniuX9j1B8fORyXFN7vAPtBDFBfFKFC4IsDHuQlZeLkQZWbZIys%2BXdw0sktNkechkvJ61fdAIZ6J2XL%2BmcX4B0eq%2FiziussPwN6lwI1pQoDNjVPgwhd5HKR0XjyzF00V95ddCE9YYMqIVV%2BSWGj%2Fz%2BvU8Ejrd0gwU%2FLjnno0XKinsfa1sV0IgrTrmuOG%2BaiAmQODaO3Wy4pdEHIzX2%2BcaKDPCpsOC6qZwSj4ltilZCpRrJe2bMb3pIIBr1wK39vtLkwDXYZWpOgJOarw9V3gjhy4gXqqel9DBoqi71FzJdC%2FhRKOnw79OOM5BeTxXFDvJwa78DGwdB0IfCTUlKeE3qdTeoc%2F1u%2FpX37zTsR8QV6dPBgeqwXX%2BTzvGt5tanOCpARGd3lkqnc0XZAlKdINKXC2OdkKaNlbomzxz5YlMNK4p8EGOqUBEWpKAW2NZcrjH1vWRHH8zR5Kd6fulzqtA6yMF8L%2F5EgeG4ZFi2tDzKCkGZE7p2rUowiG%2Beq1v4YDoqdN1LCGYczV%2FWmFd5QJb9U0rZegZbHgvdWIXLVfAYURE5KbCwhFPOwGazV2X3f6psvAMXPAqaajcOmYfMpRUtybwE876K1F3Dc7UFVD3H10ETKJJR3ALuEAJFJCRNhuv34KWZEw8kY70cRx&X-Amz-Signature=f162f26a1a98a8ea8dd0f0f2a025c3d4dae6e7bcb88cec7abe3ecec1e5aea321&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDHOJXW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg6UNuMQZkpA1IO6kIDG3P79Snozwjr2lJIZJ7FxtoVQIgP21iVfdEsiA1xS2ijOrl1bhhLsSo09gey4jghopEj3Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPcDohtSiweOeuAFDyrcAzpe%2F4PsB4vs8WDJhpzCZ2gNQx2DXdfyai%2F1sO9JBRg9m4Nd5ZfIkqH2gjtvj5ASZMGR%2FlYEDCgNrYJU20Jte7fx3j0S358%2FRJjMLPY8kgasbz7%2BQdj1JKV3Gf5V23hVqTSS6jHFaIzYSt0WrRDcFs6hssc6I89hMaVK1r1BL4ZxN3P3EeAH%2Bygr5r9eoQDSmkkWKXS82m5kMhhs7KxMXniuX9j1B8fORyXFN7vAPtBDFBfFKFC4IsDHuQlZeLkQZWbZIys%2BXdw0sktNkechkvJ61fdAIZ6J2XL%2BmcX4B0eq%2FiziussPwN6lwI1pQoDNjVPgwhd5HKR0XjyzF00V95ddCE9YYMqIVV%2BSWGj%2Fz%2BvU8Ejrd0gwU%2FLjnno0XKinsfa1sV0IgrTrmuOG%2BaiAmQODaO3Wy4pdEHIzX2%2BcaKDPCpsOC6qZwSj4ltilZCpRrJe2bMb3pIIBr1wK39vtLkwDXYZWpOgJOarw9V3gjhy4gXqqel9DBoqi71FzJdC%2FhRKOnw79OOM5BeTxXFDvJwa78DGwdB0IfCTUlKeE3qdTeoc%2F1u%2FpX37zTsR8QV6dPBgeqwXX%2BTzvGt5tanOCpARGd3lkqnc0XZAlKdINKXC2OdkKaNlbomzxz5YlMNK4p8EGOqUBEWpKAW2NZcrjH1vWRHH8zR5Kd6fulzqtA6yMF8L%2F5EgeG4ZFi2tDzKCkGZE7p2rUowiG%2Beq1v4YDoqdN1LCGYczV%2FWmFd5QJb9U0rZegZbHgvdWIXLVfAYURE5KbCwhFPOwGazV2X3f6psvAMXPAqaajcOmYfMpRUtybwE876K1F3Dc7UFVD3H10ETKJJR3ALuEAJFJCRNhuv34KWZEw8kY70cRx&X-Amz-Signature=7c3bd5bef56a0e48f2899b9009ae8dd933a7f81a96b147bbc47a9ca39080c992&X-Amz-SignedHeaders=host&x-id=GetObject)

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
