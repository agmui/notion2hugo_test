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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMX6FPL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHQOtpXQ%2FuuDFNzlYXdTvASHfuFs7bxPymmZFZgYMK4TAiEAqkIEQJdo3pnF0kSUwC7VXAr9H9WoO6jL3RSP4iDxlGgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGgCAXTJPa%2FlLJB2zircA9xc6ZKuruhsva22XLQ51CieEqClZdmtPsqOXk1bd0oWvEnh9HGyyDo2a2ctNmusyGhrGGdg9b4WAIsSnWlAqISxo%2FX0WULrROQ%2F%2FPemSbDAAwOCOyWyghYoN%2BGmdvvKZ2AfBUs4PpK8zft4SLmsbG5MoXmY1W7qtYl3GOmdd4HIWwHwfI87fh7CbnTpgghIjx0QTq4Fl39BO3NAPYt6wXoDMdDM1fMiWKimswUrwwE6duetXQep7ektGYMFKtGjk1c8tKXQpZMxepm6R1eLL0xg%2FmTt%2BcTy%2BvbrTQnN7w9QCPmpcgIGPLY9tXY81OUdtHlnipcsf6sMh9VHzTlBsi18TZGUvrekdlxs5gKE2LrMo6plCz3GUtlOpV72vXJ4VfdZ1qHiTBWfHUw0qikBBi86VnmKKWQOu5IiCw3F7GQc%2F1696iuZ0rv2mIDgqlCQ0hmjPW8FSYAgke0A%2BbbXTbOvOloSz0UNq8IMS%2FXt3sbYqVdk3no2njQJo6OINDQJmVeMehDgApqrgs1mwLXTrgZIL0R8j5FlDOHzjqYQNdpDco6tjYVjlMIZlQ0gL%2BAy3tIlgRQNt6PNZL4ZaB0wiNdS1J%2F1dATjueqSqdPCXC5CWq5dhPb7dWB%2F0MgmMPThjcQGOqUBs38tDW97ckFM0WPiB02QedMmAcVVvJ5GylpDPnHZzHMId8UGWzZ0d5RAbVEETyh6ElifaR1JLMWt76vn%2B0wWnZ0msfOUV8onPPCNarWEgCISlqM1s7j%2BxM5fPfyEpxfO9GZ1Vs51prFUfxUbpbCfank5kVI66jBIbkczKVqgLqz5%2BWYvKQ9spGTEpvcNIXZ5zX%2BCP2OdevU%2BFswYZcmmF4XB4nIs&X-Amz-Signature=fd4a0ed592669c09e2a2444d2e2548d8c1c5f9284bbf1b3db5b1e6b8508c6ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMX6FPL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHQOtpXQ%2FuuDFNzlYXdTvASHfuFs7bxPymmZFZgYMK4TAiEAqkIEQJdo3pnF0kSUwC7VXAr9H9WoO6jL3RSP4iDxlGgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGgCAXTJPa%2FlLJB2zircA9xc6ZKuruhsva22XLQ51CieEqClZdmtPsqOXk1bd0oWvEnh9HGyyDo2a2ctNmusyGhrGGdg9b4WAIsSnWlAqISxo%2FX0WULrROQ%2F%2FPemSbDAAwOCOyWyghYoN%2BGmdvvKZ2AfBUs4PpK8zft4SLmsbG5MoXmY1W7qtYl3GOmdd4HIWwHwfI87fh7CbnTpgghIjx0QTq4Fl39BO3NAPYt6wXoDMdDM1fMiWKimswUrwwE6duetXQep7ektGYMFKtGjk1c8tKXQpZMxepm6R1eLL0xg%2FmTt%2BcTy%2BvbrTQnN7w9QCPmpcgIGPLY9tXY81OUdtHlnipcsf6sMh9VHzTlBsi18TZGUvrekdlxs5gKE2LrMo6plCz3GUtlOpV72vXJ4VfdZ1qHiTBWfHUw0qikBBi86VnmKKWQOu5IiCw3F7GQc%2F1696iuZ0rv2mIDgqlCQ0hmjPW8FSYAgke0A%2BbbXTbOvOloSz0UNq8IMS%2FXt3sbYqVdk3no2njQJo6OINDQJmVeMehDgApqrgs1mwLXTrgZIL0R8j5FlDOHzjqYQNdpDco6tjYVjlMIZlQ0gL%2BAy3tIlgRQNt6PNZL4ZaB0wiNdS1J%2F1dATjueqSqdPCXC5CWq5dhPb7dWB%2F0MgmMPThjcQGOqUBs38tDW97ckFM0WPiB02QedMmAcVVvJ5GylpDPnHZzHMId8UGWzZ0d5RAbVEETyh6ElifaR1JLMWt76vn%2B0wWnZ0msfOUV8onPPCNarWEgCISlqM1s7j%2BxM5fPfyEpxfO9GZ1Vs51prFUfxUbpbCfank5kVI66jBIbkczKVqgLqz5%2BWYvKQ9spGTEpvcNIXZ5zX%2BCP2OdevU%2BFswYZcmmF4XB4nIs&X-Amz-Signature=b8e5089fa18cc3ac56d61c8fc19a74196c36446f41f6632cb80acd7c6ad42eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
