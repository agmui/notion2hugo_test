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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F35B5AH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBlOklfhLNzJdHgXMwyd3atM0SR0MSMq3iLwsof%2FQBAiAiEA%2BxKotf%2FaLOq8OkBqLtUIZQb0Ibme64bTxuPwELcbzJYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHHGKTvF0CfuuRKvWSrcA%2BFC%2F3k8qMxq%2Ff7OcMad2nrVghMPfxt2RYM5gk3DknEwK%2BaHl%2BcMK1KXV1wmpBnD1YQH96GjPOXDCmhMCbDL4Pll6DmlBA6TewcZ0UKbnHo%2BcsEYCHPmdRzmfOhyJw6FeB2x%2F7%2Fw%2FHdEJOLS5RS9x7%2FOMQGOiub0G8PBO4rgkx5RvLKYZX9t9%2FZ410VjYc4VTDnluXqpi3DYtIBrko8%2FzuVgoUPUAl1TecSNrN3pa%2F6L%2BS8Cl6BLN3jDhldojK2zHQ25HyEjIY1yBG1hgOxN%2BAuV8IPb9fc1nvCcUDAgAdv%2Bp4Iwg4DOdLdwnqPRtI83lH6%2FcKfQE0ceL6Ved9Cv0Acb87mCk7oC5mWhpiC3JYf3fiylqI2G5kIppHR%2F9Zyc6l%2FdqAuY6zJCdhf8NwQkHKV%2FOhI4SbUW8ulOcut2zSsgIcLru3E6EO1fpCNoQma14pgJ2MRbrj7zFkBqcgjWhdlHF72E0U%2FSL9k%2B6BlqcWZYjhrxPLHS9d7%2BJAqrjm9aKqlZ6AKxMMGwV7mBbgFvOl3cc%2BNJTLZxzq2kN4r0tdHsZxnHUPblFmChk1ihVIia6mE4BvfwuvzzE%2BPaPecnri0vGsTA1jlVD33qRaPC7iO3I7pyuQeLcu7YOfpUMMaUvskGOqUB3XI5FQuKkYAy06aYK4dKhNAUD7L5GGaqC%2BODI8Slf4V1In1sQx5xOzwqEMTepE46haNWqSjD12siEquyJcyq9QE7JNHkEn2%2FJS0aYLmLebF0E5CgID%2F7mCJHFPc1%2FF4k1NhiaScYI8%2BT4WsOYbgxG9N8oeD5S3Fh%2BOX9rT5NXdIoKSiL1K3P8WhBb10KbdRpzuyt9ODqbgsp7gKgky1BlCA1hRG0&X-Amz-Signature=03052b681af996a4fc2ef7ead630713ce2e5ea8f7a58d70dcb2b9fc09a075f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F35B5AH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBlOklfhLNzJdHgXMwyd3atM0SR0MSMq3iLwsof%2FQBAiAiEA%2BxKotf%2FaLOq8OkBqLtUIZQb0Ibme64bTxuPwELcbzJYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHHGKTvF0CfuuRKvWSrcA%2BFC%2F3k8qMxq%2Ff7OcMad2nrVghMPfxt2RYM5gk3DknEwK%2BaHl%2BcMK1KXV1wmpBnD1YQH96GjPOXDCmhMCbDL4Pll6DmlBA6TewcZ0UKbnHo%2BcsEYCHPmdRzmfOhyJw6FeB2x%2F7%2Fw%2FHdEJOLS5RS9x7%2FOMQGOiub0G8PBO4rgkx5RvLKYZX9t9%2FZ410VjYc4VTDnluXqpi3DYtIBrko8%2FzuVgoUPUAl1TecSNrN3pa%2F6L%2BS8Cl6BLN3jDhldojK2zHQ25HyEjIY1yBG1hgOxN%2BAuV8IPb9fc1nvCcUDAgAdv%2Bp4Iwg4DOdLdwnqPRtI83lH6%2FcKfQE0ceL6Ved9Cv0Acb87mCk7oC5mWhpiC3JYf3fiylqI2G5kIppHR%2F9Zyc6l%2FdqAuY6zJCdhf8NwQkHKV%2FOhI4SbUW8ulOcut2zSsgIcLru3E6EO1fpCNoQma14pgJ2MRbrj7zFkBqcgjWhdlHF72E0U%2FSL9k%2B6BlqcWZYjhrxPLHS9d7%2BJAqrjm9aKqlZ6AKxMMGwV7mBbgFvOl3cc%2BNJTLZxzq2kN4r0tdHsZxnHUPblFmChk1ihVIia6mE4BvfwuvzzE%2BPaPecnri0vGsTA1jlVD33qRaPC7iO3I7pyuQeLcu7YOfpUMMaUvskGOqUB3XI5FQuKkYAy06aYK4dKhNAUD7L5GGaqC%2BODI8Slf4V1In1sQx5xOzwqEMTepE46haNWqSjD12siEquyJcyq9QE7JNHkEn2%2FJS0aYLmLebF0E5CgID%2F7mCJHFPc1%2FF4k1NhiaScYI8%2BT4WsOYbgxG9N8oeD5S3Fh%2BOX9rT5NXdIoKSiL1K3P8WhBb10KbdRpzuyt9ODqbgsp7gKgky1BlCA1hRG0&X-Amz-Signature=00151ac3c2c9735036ed72583bdac03b0097f302c49fb02f2cef1f40ddb9e514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
