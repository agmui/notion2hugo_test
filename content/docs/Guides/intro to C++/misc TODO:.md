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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VNZLSR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDfso6YhuoVPCciGRsBfP9ZkswOSULHdUb%2FH6rqhY401QIhANAwtqoTaxHc7I7BdpIvE6QLrnj9yz%2BIegWyC%2BGH2e21Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCXbRLbEJQSU37WCUq3ANoDY%2B200FuW8p7xuozMAKxqyo8o6ZSKoX4PJssVAqD8iqI%2FO63%2BMop79L4CiIKO5bz6Zkt27xiTQjP%2BFuyZpD7EcRYggomwaQ3graTAGpuSPJ8JlVASyZ1ozci9nWy6vNQ%2B1DmyQSMs9AE8C7C%2BRK5XwBfB0BTC3WyTZFPxmiVMsnENh%2B0FUjFBrAYxtrKl6zCJj3wFLD4QNdPTaYXtFyFWcRv7Z7uZouIf8lMCzPhP86a0QeWm3XiKWCmPvshxoCNo%2FQc9MmasYkFv9Ce%2B4LGBLF8PrZc7uOFBE1g13PWtYovNSCKLa7WE4owlNInukznv38ZarsLd3tL13%2B3BF%2BvauSXe1DxTBODoAT%2Bq6jXhB9zAaIRuIxj50%2BN2wyEopWuMRbTrb1%2F%2FJBjxk0unxGzsqxq3mR3N9AOz9SuLMjLVgcFf0WKWSE3fl2YpKrzFHFI4FubmZwDxQT73Cp%2B1ZDTWN1R68d0AtmK8b4J7WxK38lInya%2BxQ5Wj1xkNN0kMu17QOEjBDJqYe%2B7Tr3uLtUtdVRDPTG7QJMY69i2ktw%2FL9zKhPN%2FqkbWggZnvlk2v8QPqyJchC9i4HI8gJ8Yub4mGlnhVzLqmGxqwga%2BTlJkIlp8wjibcrzYZ%2Bi%2BCTDts7%2B9BjqkAQW4dQwgUO%2F%2BaZPcXZSjgyvmCIivZC1sjShQGSIIytQknNV7%2FPerU6Y1LNH89I0PY7hdGFY73%2Fqrdd4xc%2FYfO%2FBbln6gcxeoqohWFzNSWLXCamKizF%2FM%2FCIDCD1Uf0sS9rVHbVWlIlrJDEMDuhhUg3Faqt0ssdrcX4t1wrCrkncFYeTktbMSD4lJ9sQrG2Tw9jUUBKlfegwbacly%2FPbmh7dOZxQW&X-Amz-Signature=47c7a10e612658aea2c3a3cd5290dc00c05fc65e3712564839fbce6a44363919&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VNZLSR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDfso6YhuoVPCciGRsBfP9ZkswOSULHdUb%2FH6rqhY401QIhANAwtqoTaxHc7I7BdpIvE6QLrnj9yz%2BIegWyC%2BGH2e21Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwCXbRLbEJQSU37WCUq3ANoDY%2B200FuW8p7xuozMAKxqyo8o6ZSKoX4PJssVAqD8iqI%2FO63%2BMop79L4CiIKO5bz6Zkt27xiTQjP%2BFuyZpD7EcRYggomwaQ3graTAGpuSPJ8JlVASyZ1ozci9nWy6vNQ%2B1DmyQSMs9AE8C7C%2BRK5XwBfB0BTC3WyTZFPxmiVMsnENh%2B0FUjFBrAYxtrKl6zCJj3wFLD4QNdPTaYXtFyFWcRv7Z7uZouIf8lMCzPhP86a0QeWm3XiKWCmPvshxoCNo%2FQc9MmasYkFv9Ce%2B4LGBLF8PrZc7uOFBE1g13PWtYovNSCKLa7WE4owlNInukznv38ZarsLd3tL13%2B3BF%2BvauSXe1DxTBODoAT%2Bq6jXhB9zAaIRuIxj50%2BN2wyEopWuMRbTrb1%2F%2FJBjxk0unxGzsqxq3mR3N9AOz9SuLMjLVgcFf0WKWSE3fl2YpKrzFHFI4FubmZwDxQT73Cp%2B1ZDTWN1R68d0AtmK8b4J7WxK38lInya%2BxQ5Wj1xkNN0kMu17QOEjBDJqYe%2B7Tr3uLtUtdVRDPTG7QJMY69i2ktw%2FL9zKhPN%2FqkbWggZnvlk2v8QPqyJchC9i4HI8gJ8Yub4mGlnhVzLqmGxqwga%2BTlJkIlp8wjibcrzYZ%2Bi%2BCTDts7%2B9BjqkAQW4dQwgUO%2F%2BaZPcXZSjgyvmCIivZC1sjShQGSIIytQknNV7%2FPerU6Y1LNH89I0PY7hdGFY73%2Fqrdd4xc%2FYfO%2FBbln6gcxeoqohWFzNSWLXCamKizF%2FM%2FCIDCD1Uf0sS9rVHbVWlIlrJDEMDuhhUg3Faqt0ssdrcX4t1wrCrkncFYeTktbMSD4lJ9sQrG2Tw9jUUBKlfegwbacly%2FPbmh7dOZxQW&X-Amz-Signature=a8675c08786801135f5d2ccbd33363de3909dbd2bb41dab5e9cda9b3a97ef61f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
