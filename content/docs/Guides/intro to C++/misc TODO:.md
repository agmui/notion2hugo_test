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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFONZZG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD%2FUSlhRa%2B3PLX1qe2wjKjZ%2FwDL%2Fj4K%2F8IZ7xWa4adw9wIhAPGVRHDRFVE4CcSx%2FLhAqjvZ0M5YMtKGO31k5yVfDutnKv8DCHAQABoMNjM3NDIzMTgzODA1IgxoAqV%2BPaPqcQG%2BYqoq3AN9tCEvBgp3G3%2Bx4iT7iZHuDIKXuIpUreUXO7MJIAI9UbHbX6ECopznGYJfO3wXsWLJh%2BRRY%2BBOarzD6shTObFUNlvROY0MGDSXDTtnw5Ytl%2BtJ3qx2EUMWUaEl1bX1IAJwXesqzRb3gluzyCw9GSTrDAgpTgfcYzZAw4IaDOMNlfsm5bK1z6aYTgPzpO9Kzp%2B%2FfuUxwaUW%2Fdx5nENLAK%2Fm3Vcz8G6%2Fnm0n9mSNbckxguj1T%2BZp5FVYBFpwlO%2FAg4lphfEpT1rrEwMBONn3pSLu3D7xZyo1TOcpvtBtHs3IV0QSGtcLSq83CW%2B0dJ6XYLgUympVvOVJVob6PyHeEFOVfjlBpISgPNy%2ByfEH4n89Bt0juAflsNHWWb%2B%2BMxWvj0C%2BZoXY470v0erVzDWk9Xo5vvqPdqHJupwUIaKMO%2BtGqPzBechbyZRbALT8M3NaCXOR%2FkAcNxZYLbtg4KLh1RyzmwLkymZEGAGqTbJ2sCWWrf89VAGxb7MonL74%2BcDlWBf4wbgEgmlSR23gQ%2FGBW6PHkBvQe6t%2B%2BLMBDXyZK3icf87y5wL9APHybu2XC7cFzzkcyixnawU22w1zCuCowTIvikGM2TFgoNYRsj52UWx6idIqcRpk%2FbOV6oeVuDCE7LS%2BBjqkAR7CI7Pa91xVUjPrB03V%2FY6hY2L6Ot0poxF5cx%2FQM1Un2VPk%2BDXdB3xxAd0%2FjILrJZWFnOBKMyC9x4ZnhQ7Q%2FYJ550YZEpzxllI0j8g406DyluisKZPZWbEzL%2BHQvPKgr0vNaCkYVgYALTQg4kInRAPpE5Cuu4V4Und8SDHwjoKW17zHGuLUuyNpfCkUEwpbrAWY5s9zwHp1cj8fIkr%2Fc1dn3%2BUx&X-Amz-Signature=2b178c7eca8534198ff896a1a80f5edee6b38b3728b33efc9087e942b06f2a62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFONZZG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD%2FUSlhRa%2B3PLX1qe2wjKjZ%2FwDL%2Fj4K%2F8IZ7xWa4adw9wIhAPGVRHDRFVE4CcSx%2FLhAqjvZ0M5YMtKGO31k5yVfDutnKv8DCHAQABoMNjM3NDIzMTgzODA1IgxoAqV%2BPaPqcQG%2BYqoq3AN9tCEvBgp3G3%2Bx4iT7iZHuDIKXuIpUreUXO7MJIAI9UbHbX6ECopznGYJfO3wXsWLJh%2BRRY%2BBOarzD6shTObFUNlvROY0MGDSXDTtnw5Ytl%2BtJ3qx2EUMWUaEl1bX1IAJwXesqzRb3gluzyCw9GSTrDAgpTgfcYzZAw4IaDOMNlfsm5bK1z6aYTgPzpO9Kzp%2B%2FfuUxwaUW%2Fdx5nENLAK%2Fm3Vcz8G6%2Fnm0n9mSNbckxguj1T%2BZp5FVYBFpwlO%2FAg4lphfEpT1rrEwMBONn3pSLu3D7xZyo1TOcpvtBtHs3IV0QSGtcLSq83CW%2B0dJ6XYLgUympVvOVJVob6PyHeEFOVfjlBpISgPNy%2ByfEH4n89Bt0juAflsNHWWb%2B%2BMxWvj0C%2BZoXY470v0erVzDWk9Xo5vvqPdqHJupwUIaKMO%2BtGqPzBechbyZRbALT8M3NaCXOR%2FkAcNxZYLbtg4KLh1RyzmwLkymZEGAGqTbJ2sCWWrf89VAGxb7MonL74%2BcDlWBf4wbgEgmlSR23gQ%2FGBW6PHkBvQe6t%2B%2BLMBDXyZK3icf87y5wL9APHybu2XC7cFzzkcyixnawU22w1zCuCowTIvikGM2TFgoNYRsj52UWx6idIqcRpk%2FbOV6oeVuDCE7LS%2BBjqkAR7CI7Pa91xVUjPrB03V%2FY6hY2L6Ot0poxF5cx%2FQM1Un2VPk%2BDXdB3xxAd0%2FjILrJZWFnOBKMyC9x4ZnhQ7Q%2FYJ550YZEpzxllI0j8g406DyluisKZPZWbEzL%2BHQvPKgr0vNaCkYVgYALTQg4kInRAPpE5Cuu4V4Und8SDHwjoKW17zHGuLUuyNpfCkUEwpbrAWY5s9zwHp1cj8fIkr%2Fc1dn3%2BUx&X-Amz-Signature=2ad04535798448a11e0045ec922719c2cc271d49e605afdf27ce7a5bd5b27e56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
