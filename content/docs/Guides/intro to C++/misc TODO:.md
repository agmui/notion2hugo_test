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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXHARGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAE18HuZkA74wrtdHcXz%2BK089m5L2%2BGjR39HtKMRfY27AiEAty7d2ES4tP4VyaQZs9ZCfyfFvfpkoDZnBxvgU6NRT3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOOwG0Q9SJIY3z0oASrcA3aa8zPj%2BUbBiYjtoMaNMRaslfXyks3lfa9%2FJcw7YitVA6x92Fc8vjgkzfuycqUrZXKKQ4ICI%2FPeZbQGiX5tmMPW1RvyvnRJh4dh5eGP6Vt55v03x2Ukily%2BgJG%2FrI19TQo2b6lfQPtD3jqcZaEGaScRDzFD3CSoj3CBceIf1jqfwIRfYVWInQTrcE%2FYt409W3q9vUqydezgi1IbMtQ9OTx%2FzX3y0T4V70qo56x4EvJy%2FjqH%2Bu4ZPcr9o4JEjevpmaZ7T610We6jxov1cVqY6v8Hk131vZMi0d%2FDbETh6Trap%2FIcBN%2F2Sr8YPWgnMscRxGK0WWA32ok5ATWZjyyy%2Fq2oWmT7YN%2FvpN8AhJXE0RWtRBTbTFcO5SIiehaFtCOGWLOXWA5HC7qF4eS9YUJu%2BejKE0FiHb0RhGgAu%2BHGg7t84XSKtth%2BN7SdDmfZkITFf86%2FX8IPCih3rL%2BXdtOF9KGOmDsdXDVOWzQYnBkY2p7CnYJ0Nc%2BjnmlWXz0pinq1%2Bw88GTjzN9CmYDmYKSUSK75AaHdr3v4i0qK7jDp%2Fo1l6y1zTfuYre8w19Y4qqvEWwsuvoLV6sXN19qY28fR7zjrB%2F9FgBw7RQkka1NoeY%2BxJWg%2B%2F2%2F74g8xsdZjmMLTSscIGOqUBMac%2BUnupqYBjE7Ixp9fjC0OngaaAOAjdf%2Bn6doIFNHoUXQmWdu1ZVwPObL05oPWxGbX2iEvWQ5t0YypFJZGYGIyFS%2FgXacrDIu6VZT9qV%2BYHJLWz0Cu73wC1DMcSMXSO8UDykWNwcYAwtFtuNe8Yo9BbTX0sdxcQfBFD59Us8Mnyw2J4B0nOtoA3boQNdMpuhyHOGaZGPxNzDm6b1BNDFR6%2BUSdc&X-Amz-Signature=cb0697fad071fdcf8be723497e05957f6c3b4311aaba06529f7289e2e5033e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXHARGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAE18HuZkA74wrtdHcXz%2BK089m5L2%2BGjR39HtKMRfY27AiEAty7d2ES4tP4VyaQZs9ZCfyfFvfpkoDZnBxvgU6NRT3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOOwG0Q9SJIY3z0oASrcA3aa8zPj%2BUbBiYjtoMaNMRaslfXyks3lfa9%2FJcw7YitVA6x92Fc8vjgkzfuycqUrZXKKQ4ICI%2FPeZbQGiX5tmMPW1RvyvnRJh4dh5eGP6Vt55v03x2Ukily%2BgJG%2FrI19TQo2b6lfQPtD3jqcZaEGaScRDzFD3CSoj3CBceIf1jqfwIRfYVWInQTrcE%2FYt409W3q9vUqydezgi1IbMtQ9OTx%2FzX3y0T4V70qo56x4EvJy%2FjqH%2Bu4ZPcr9o4JEjevpmaZ7T610We6jxov1cVqY6v8Hk131vZMi0d%2FDbETh6Trap%2FIcBN%2F2Sr8YPWgnMscRxGK0WWA32ok5ATWZjyyy%2Fq2oWmT7YN%2FvpN8AhJXE0RWtRBTbTFcO5SIiehaFtCOGWLOXWA5HC7qF4eS9YUJu%2BejKE0FiHb0RhGgAu%2BHGg7t84XSKtth%2BN7SdDmfZkITFf86%2FX8IPCih3rL%2BXdtOF9KGOmDsdXDVOWzQYnBkY2p7CnYJ0Nc%2BjnmlWXz0pinq1%2Bw88GTjzN9CmYDmYKSUSK75AaHdr3v4i0qK7jDp%2Fo1l6y1zTfuYre8w19Y4qqvEWwsuvoLV6sXN19qY28fR7zjrB%2F9FgBw7RQkka1NoeY%2BxJWg%2B%2F2%2F74g8xsdZjmMLTSscIGOqUBMac%2BUnupqYBjE7Ixp9fjC0OngaaAOAjdf%2Bn6doIFNHoUXQmWdu1ZVwPObL05oPWxGbX2iEvWQ5t0YypFJZGYGIyFS%2FgXacrDIu6VZT9qV%2BYHJLWz0Cu73wC1DMcSMXSO8UDykWNwcYAwtFtuNe8Yo9BbTX0sdxcQfBFD59Us8Mnyw2J4B0nOtoA3boQNdMpuhyHOGaZGPxNzDm6b1BNDFR6%2BUSdc&X-Amz-Signature=1351d774f998b76958a367c4639af862721073da15883b98f680dbdc4e80f0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
