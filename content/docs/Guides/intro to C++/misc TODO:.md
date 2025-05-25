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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYC2FCG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDEFpcR%2FhGs8RZX7FNXykaRzx62bVF9gMtRpwvQvSYR6wIhAM4llDPJWKaS270J%2FAdE2B%2FD2Cpi0rTl%2BfNj669rZ2pWKv8DCDUQABoMNjM3NDIzMTgzODA1IgzQ3J6tVm1xSO7BnKgq3AMvyLhh5DWdIZCehZslEeX82QXTJjjPuiMDlq0rA%2BUXPcq%2BMa0NVEtv%2BgV8gFRKMD75sUFPPq91iHMyUJsm%2FaPFk52nbqios1XZ5ubPcPpscSdWwCakTOtHi0lIKo1h2WR5YHLnh36CO9TXnpN28lJYwmuICbg%2F7qRxRzrkGVyN%2Fu7hLpkBYB3Unbdr%2B5E5M7G4Nnajoz4VwjA26C7PawqfKTaOkoLQW6P91c3t2m9yoWFb8imwfAZkzIw4BYdL6%2BQ5Qx%2Fw8s6Z7u8hhmMi0vd%2BDCnO87brN7MdqVIuAD%2FEEH1NnyujOPjRq3V6qvm%2FY5QE5%2Fvl0n7bAkeX%2FqoXP2bWJTQawMvzFQRsOUaB4VZpKB3QY%2BtlUfsH40%2FZpD9kc94P2QltDVgCB3I0FdiHiCQop%2BWeXouL90XzgkXd%2FWDLUk49UFBjPSKmHwhJs4qZwPZ3GJksG4bQuR1CSr1cL1ldzH3Zb7BUZt3XBBxlwk8P54QH877NUPcxwa15qOdUa0DxK3GbYmbWl%2BArBGX0rJnCPhXp2nalIAqoFkB8xEtOU6KaoEMmv4OIi6nYdh4jKgTNOPM71oTrjipM0ckrKwYXMfUwUKFeqwlGdzxX9ihwbbpR9MPhsSjbKH6WMjDk9M3BBjqkAcZliTJ03rPzGeWUylAjivvPKjGsRJi5fQO%2BlFN5r5lDml374LDWJs7zjeWQDuAGaK0dI2nBd72GKR0Tf4lATTAmYrLNapspWZDyjKaCg0ppFmVjmlS5DY6BPaGIFsM4Duun6qaxINSAervMDE56uJe4rHbZXv9ROwV3dciswFbdufB0odVD6kBjGvcLHo%2FNzpJx%2FNgtVzGFDM8ypHvPgoc54z2f&X-Amz-Signature=778703f0ed74d81c6d8ae769e96c491927ceff0e9175ebbf12b487bba269beb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYC2FCG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDEFpcR%2FhGs8RZX7FNXykaRzx62bVF9gMtRpwvQvSYR6wIhAM4llDPJWKaS270J%2FAdE2B%2FD2Cpi0rTl%2BfNj669rZ2pWKv8DCDUQABoMNjM3NDIzMTgzODA1IgzQ3J6tVm1xSO7BnKgq3AMvyLhh5DWdIZCehZslEeX82QXTJjjPuiMDlq0rA%2BUXPcq%2BMa0NVEtv%2BgV8gFRKMD75sUFPPq91iHMyUJsm%2FaPFk52nbqios1XZ5ubPcPpscSdWwCakTOtHi0lIKo1h2WR5YHLnh36CO9TXnpN28lJYwmuICbg%2F7qRxRzrkGVyN%2Fu7hLpkBYB3Unbdr%2B5E5M7G4Nnajoz4VwjA26C7PawqfKTaOkoLQW6P91c3t2m9yoWFb8imwfAZkzIw4BYdL6%2BQ5Qx%2Fw8s6Z7u8hhmMi0vd%2BDCnO87brN7MdqVIuAD%2FEEH1NnyujOPjRq3V6qvm%2FY5QE5%2Fvl0n7bAkeX%2FqoXP2bWJTQawMvzFQRsOUaB4VZpKB3QY%2BtlUfsH40%2FZpD9kc94P2QltDVgCB3I0FdiHiCQop%2BWeXouL90XzgkXd%2FWDLUk49UFBjPSKmHwhJs4qZwPZ3GJksG4bQuR1CSr1cL1ldzH3Zb7BUZt3XBBxlwk8P54QH877NUPcxwa15qOdUa0DxK3GbYmbWl%2BArBGX0rJnCPhXp2nalIAqoFkB8xEtOU6KaoEMmv4OIi6nYdh4jKgTNOPM71oTrjipM0ckrKwYXMfUwUKFeqwlGdzxX9ihwbbpR9MPhsSjbKH6WMjDk9M3BBjqkAcZliTJ03rPzGeWUylAjivvPKjGsRJi5fQO%2BlFN5r5lDml374LDWJs7zjeWQDuAGaK0dI2nBd72GKR0Tf4lATTAmYrLNapspWZDyjKaCg0ppFmVjmlS5DY6BPaGIFsM4Duun6qaxINSAervMDE56uJe4rHbZXv9ROwV3dciswFbdufB0odVD6kBjGvcLHo%2FNzpJx%2FNgtVzGFDM8ypHvPgoc54z2f&X-Amz-Signature=ff9314598fc3cfd736ece50a68133f6a01e63251ee6d2e2b1a27b52e439d42dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
