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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QY3SFN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCjD1yfe9V5BPyMtDMUdINtMv7HiDlaXcoXItnfKExq6gIhANnqo20dvaQITfrQu81kJYbvpvtEVyL4jVhZkok6nzxxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzQQxRsJz%2BrmYyRMkAq3APd6SSoL6C4fXl2K8EXXWIg0eoYDQQQY86CrMcd6JzCBAqns5PsJgUjpgUOs6EZ9nG4z305DU52ww7GJqMmxa1jqz5Kf7rfVUxXXMbUcVKeYM6EmijWawS1nG%2BcWmtGgAgW4GyWbJhli5uDfBTpOUaOoNF5WjAX1aCGw92R%2BEw2SWCuxj4VnBKyfnhOpfWHuIACKX%2FqxIWgiiLY%2Fh9%2FPl13OVKfJzPgiZNagCsBaaepGyJzw4moPTw951Xw7YKZktXxlaYcSPkevgzkWqyAdfNJiwVydbTv%2BenW8GxSP3QrtEjzif%2B9GU7gsleAKzfYdMOEOqtos3K9AGNeNjP%2BsaKxY3jV01nq6aTxv7pL0xwTH7uLB3LVsvRr2%2FHdg2FExghAP4SjLSLTYb1LWQRw%2Bun6GV2SZwXSCY5DnYPGRT%2BDFbaOvZUaB5G6WxW%2FgRlHGZnBCxMo2BRgJMU50RHgmRM8EXFVrQ6yy2Glzx5VH7bJDfUP4kGPkiRuoI6tG%2F5AQxKxTLgtg%2FGbmNu9JeWnn52IpoHCcHPyUigRKN2lDJp%2FGhi9%2F%2FEpyWY7lgYYdeh09Pb%2Bv1oIMuwODhv1fSsRg%2BTLpVmNN5ibiGj%2BfTshPNMhdX%2FYwDMExj1U0057vTDzyvbCBjqkAU1NowZL3c8YUCZKN8k16mVeWqAoY6eM0xU9rDQTt26zOgFR6F98hHzNUPDIOmtGkcOqFPsDsdJJqrAGuTz5JYoGPfI953JmtGuMkc6ZE6jaAowbu4dB4F6iZGkgWWHE4hWnL6YZqUKFzdFX99kdD8Qw10DG1rpfpqcGLQJUG%2FcFvcrj%2FeENzLYCP%2B3nTq0pXwga5z%2BkOhS%2F3qf9BLNYODrlj70C&X-Amz-Signature=17d40f81b32fa4f7ff98e5f41fe7c497ff6279950e5cd0b050ba8da585fc3581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QY3SFN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCjD1yfe9V5BPyMtDMUdINtMv7HiDlaXcoXItnfKExq6gIhANnqo20dvaQITfrQu81kJYbvpvtEVyL4jVhZkok6nzxxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzQQxRsJz%2BrmYyRMkAq3APd6SSoL6C4fXl2K8EXXWIg0eoYDQQQY86CrMcd6JzCBAqns5PsJgUjpgUOs6EZ9nG4z305DU52ww7GJqMmxa1jqz5Kf7rfVUxXXMbUcVKeYM6EmijWawS1nG%2BcWmtGgAgW4GyWbJhli5uDfBTpOUaOoNF5WjAX1aCGw92R%2BEw2SWCuxj4VnBKyfnhOpfWHuIACKX%2FqxIWgiiLY%2Fh9%2FPl13OVKfJzPgiZNagCsBaaepGyJzw4moPTw951Xw7YKZktXxlaYcSPkevgzkWqyAdfNJiwVydbTv%2BenW8GxSP3QrtEjzif%2B9GU7gsleAKzfYdMOEOqtos3K9AGNeNjP%2BsaKxY3jV01nq6aTxv7pL0xwTH7uLB3LVsvRr2%2FHdg2FExghAP4SjLSLTYb1LWQRw%2Bun6GV2SZwXSCY5DnYPGRT%2BDFbaOvZUaB5G6WxW%2FgRlHGZnBCxMo2BRgJMU50RHgmRM8EXFVrQ6yy2Glzx5VH7bJDfUP4kGPkiRuoI6tG%2F5AQxKxTLgtg%2FGbmNu9JeWnn52IpoHCcHPyUigRKN2lDJp%2FGhi9%2F%2FEpyWY7lgYYdeh09Pb%2Bv1oIMuwODhv1fSsRg%2BTLpVmNN5ibiGj%2BfTshPNMhdX%2FYwDMExj1U0057vTDzyvbCBjqkAU1NowZL3c8YUCZKN8k16mVeWqAoY6eM0xU9rDQTt26zOgFR6F98hHzNUPDIOmtGkcOqFPsDsdJJqrAGuTz5JYoGPfI953JmtGuMkc6ZE6jaAowbu4dB4F6iZGkgWWHE4hWnL6YZqUKFzdFX99kdD8Qw10DG1rpfpqcGLQJUG%2FcFvcrj%2FeENzLYCP%2B3nTq0pXwga5z%2BkOhS%2F3qf9BLNYODrlj70C&X-Amz-Signature=cef78b74075958f48c842d3954fc211e1797c65a487095eaca9129d2951010fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
