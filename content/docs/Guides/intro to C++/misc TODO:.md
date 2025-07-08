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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUI6KEM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bnx%2FpFFc5VCvGtGUbL3CxOvheNg%2FqJoacqTgYKt%2FPnAiBWxSXI4nWat8acVZvYWNyWNV0aKlyMBCYriZ1cRCtk5CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1AeaS3dpKR8%2F%2BjbKtwDV8CyBd3cM0fP6ZQBVuAZfgS9OXG9U1w9HsW0wMNJWKeSiMM3jzixgkcB4bVwUPT03p8g8x0%2B5Rinys7Ha0fJJubJgZNUk1LiCrnBkmuo9eSMyK4RpvEdrrbvbOCzem4M%2Bx3dSl04mgvYY0FSYnGK8ogvnrQUOxcJtiJBY17QgjqcmFojWwY8kuWliUJc%2Bx4EjLqGWWJQtVzyGu2N6vK%2FrirhB4sZbgCxnknXwVLq2qIu3JrZ%2FNHcydBclLcDnn9WdW1i%2B5Qu%2BecEfsnWxL%2Fb5JeHMmckg3cIj9hQYWZ%2FpLrUgtKqVLNXj7Z0ruIoqm0CivyRf5SM7KVES7fniRd51buEGnUENleHngrRalnf3N4siLgHjJjXmVptT8yRPpriExnh3tla%2B658VKOkEzPmUJlY%2BVsfbSju3%2Bgk29ReJJred2k97t%2B2zbSnsNdlnoaZQ3dJKyTSf8CKq3cJSJ5fCL3DTRVPBRXdd8rewAehmjI1NwlRN%2BhJ3iC%2B3evM9SxZThlnJchD9X3%2FtzJWB%2BBtobYtyStR%2FrSPCH8ApHSiwEbzDEiWoTe06E6cSMgbchWKmrkslyYyQubncKgF4QpQ7Bvo%2F1VgzUzYlNZ52vfxzw9OliHzChXr3o71S2ow%2F8ezwwY6pgEfDDWL20XL1XXiRUJvq2lsxTmSYOL5YW0iCoxIX5XBZSoU5OFH3FyV%2FzhCWmNRkoBg2NBhTc9QN%2BOarCyK%2F7FxvtK%2FfSRS%2BQGJw8rekpQv81m5fHn3KvW1EdtSDT7WHChKlKAnmYBkDNumWdMoErJx63A%2FnIpcNX4oQ23lJFaqeKkJUpg8MKz9Yh33%2F%2BYlumaK%2FI1vT1KEVQ02sSMDAwiIvKfpPM3R&X-Amz-Signature=1cec71909c540b524c76fe4cf0cda16508dfceee6e51ab4217564cdc385d76c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUI6KEM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bnx%2FpFFc5VCvGtGUbL3CxOvheNg%2FqJoacqTgYKt%2FPnAiBWxSXI4nWat8acVZvYWNyWNV0aKlyMBCYriZ1cRCtk5CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1AeaS3dpKR8%2F%2BjbKtwDV8CyBd3cM0fP6ZQBVuAZfgS9OXG9U1w9HsW0wMNJWKeSiMM3jzixgkcB4bVwUPT03p8g8x0%2B5Rinys7Ha0fJJubJgZNUk1LiCrnBkmuo9eSMyK4RpvEdrrbvbOCzem4M%2Bx3dSl04mgvYY0FSYnGK8ogvnrQUOxcJtiJBY17QgjqcmFojWwY8kuWliUJc%2Bx4EjLqGWWJQtVzyGu2N6vK%2FrirhB4sZbgCxnknXwVLq2qIu3JrZ%2FNHcydBclLcDnn9WdW1i%2B5Qu%2BecEfsnWxL%2Fb5JeHMmckg3cIj9hQYWZ%2FpLrUgtKqVLNXj7Z0ruIoqm0CivyRf5SM7KVES7fniRd51buEGnUENleHngrRalnf3N4siLgHjJjXmVptT8yRPpriExnh3tla%2B658VKOkEzPmUJlY%2BVsfbSju3%2Bgk29ReJJred2k97t%2B2zbSnsNdlnoaZQ3dJKyTSf8CKq3cJSJ5fCL3DTRVPBRXdd8rewAehmjI1NwlRN%2BhJ3iC%2B3evM9SxZThlnJchD9X3%2FtzJWB%2BBtobYtyStR%2FrSPCH8ApHSiwEbzDEiWoTe06E6cSMgbchWKmrkslyYyQubncKgF4QpQ7Bvo%2F1VgzUzYlNZ52vfxzw9OliHzChXr3o71S2ow%2F8ezwwY6pgEfDDWL20XL1XXiRUJvq2lsxTmSYOL5YW0iCoxIX5XBZSoU5OFH3FyV%2FzhCWmNRkoBg2NBhTc9QN%2BOarCyK%2F7FxvtK%2FfSRS%2BQGJw8rekpQv81m5fHn3KvW1EdtSDT7WHChKlKAnmYBkDNumWdMoErJx63A%2FnIpcNX4oQ23lJFaqeKkJUpg8MKz9Yh33%2F%2BYlumaK%2FI1vT1KEVQ02sSMDAwiIvKfpPM3R&X-Amz-Signature=a398e62fdf264ad251624a627f37cee696e838a234c262c2345a0a1ab2a0ec89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
