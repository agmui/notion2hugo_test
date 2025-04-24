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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBL52O6Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCLxypiB4dd2OV0rEzxdJBmkV%2BzD7QSqbVUYbSwRG6jZAIhAPuerq3YHm7NeRKbyzxmCX%2Bc4LiYpwW6k1djxtuKZJIkKv8DCBAQABoMNjM3NDIzMTgzODA1IgzifcnyG0hUiW982UIq3APuaYFAZZx4LijfTXswLRrQBTawlam3kogj2dkEdC7eu7wmdswcWd6eO7NrZj0I9i8R%2B2cp%2FCEQVV4ytZz4fqiI4DjItKrJDHeE9%2BpGm2kVONiW7DWMEeHAH4MbqTiNDM0EgqKqCTWsWEzzq5gIFgdm5IfOTALWWn7VfaO4kNi3WtdzJpFP94mjY%2FSF4IrJ3ICuHOx584URjXw%2BSFhnFUVdAdjkKBwCK2PJ2tz25%2FvvGRmyVP15Ge%2F4gFcQrGg9trIxKv0jUsZ4M%2BL1DPWCKPAOReoFL5sPBx5%2F8kIgpt0xAmqTCfG9hdZoxLstpvtxYhjYPCZglSAfrcWixzcSSTc3SK8MX973DGPpR4gDfOMMdk3Ln%2BQZb%2B%2Fgxvdy6MSjCRpmTiDL82nx0p%2FdftnXnH30RpUpR74QLb1ohdPG4IQ9Xz4QfOyyHJxvY5%2FnOKStEMmcDa%2FNjkXUnbQDW1kl8okNdUKkfCWYbNyOCCXsN2Xlz2PFj9wfHTBsI96hEnXW12km6kVF7u%2FcsvIha4BMTGEijGowbuJgjGOG1t7ArFI%2Bwr%2BRVxaljAtYiY8nRFSW7Tf0DWErqYxzzIX39ff0iS1DQsBKsa3PBkszSMCWRW6xpWDu6SQPQkKPryJq0zCDtKfABjqkAXlqaP%2BeG5JRlThcK8vOsJg4qLv2bhHxLM%2BCweM1%2BFFkVPuuH27xBGOijwkwcJshR0t8j3JwPmCWep6SYZF6NzHgixlL8eoJFTaqS4ofRgqg5rNsN7nTfaPs0%2FHXwksP37UtOD1ecGtZwmG7qyROqxL7oRGCAFeMucOskwDQKMgNs06IMnscxz1dpcCrlg9cAOdbIVohuufvrEVU9zmT36NRPqmF&X-Amz-Signature=8e309760a3845d7ae759d3e88cb3bc3c6f10267bf31f55f29929c10e831a0908&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBL52O6Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCLxypiB4dd2OV0rEzxdJBmkV%2BzD7QSqbVUYbSwRG6jZAIhAPuerq3YHm7NeRKbyzxmCX%2Bc4LiYpwW6k1djxtuKZJIkKv8DCBAQABoMNjM3NDIzMTgzODA1IgzifcnyG0hUiW982UIq3APuaYFAZZx4LijfTXswLRrQBTawlam3kogj2dkEdC7eu7wmdswcWd6eO7NrZj0I9i8R%2B2cp%2FCEQVV4ytZz4fqiI4DjItKrJDHeE9%2BpGm2kVONiW7DWMEeHAH4MbqTiNDM0EgqKqCTWsWEzzq5gIFgdm5IfOTALWWn7VfaO4kNi3WtdzJpFP94mjY%2FSF4IrJ3ICuHOx584URjXw%2BSFhnFUVdAdjkKBwCK2PJ2tz25%2FvvGRmyVP15Ge%2F4gFcQrGg9trIxKv0jUsZ4M%2BL1DPWCKPAOReoFL5sPBx5%2F8kIgpt0xAmqTCfG9hdZoxLstpvtxYhjYPCZglSAfrcWixzcSSTc3SK8MX973DGPpR4gDfOMMdk3Ln%2BQZb%2B%2Fgxvdy6MSjCRpmTiDL82nx0p%2FdftnXnH30RpUpR74QLb1ohdPG4IQ9Xz4QfOyyHJxvY5%2FnOKStEMmcDa%2FNjkXUnbQDW1kl8okNdUKkfCWYbNyOCCXsN2Xlz2PFj9wfHTBsI96hEnXW12km6kVF7u%2FcsvIha4BMTGEijGowbuJgjGOG1t7ArFI%2Bwr%2BRVxaljAtYiY8nRFSW7Tf0DWErqYxzzIX39ff0iS1DQsBKsa3PBkszSMCWRW6xpWDu6SQPQkKPryJq0zCDtKfABjqkAXlqaP%2BeG5JRlThcK8vOsJg4qLv2bhHxLM%2BCweM1%2BFFkVPuuH27xBGOijwkwcJshR0t8j3JwPmCWep6SYZF6NzHgixlL8eoJFTaqS4ofRgqg5rNsN7nTfaPs0%2FHXwksP37UtOD1ecGtZwmG7qyROqxL7oRGCAFeMucOskwDQKMgNs06IMnscxz1dpcCrlg9cAOdbIVohuufvrEVU9zmT36NRPqmF&X-Amz-Signature=8f59d6e3c8bee3eb57b46a1d25af784801dce7ee1c5644e17300ca17970afd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
