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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW4DZF3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCIUPJe7ecmaB0E6kKU7Am%2B7IHUA7KFxV43vsRqBJ8PJgIhAM3mVvnG%2BTHR%2FRUzGlvwyJXMjEwqDuA%2FyJbMQB4PXHFUKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvgFdlTjUEyICFXpEq3AMutirjhCrCGH5EdAm8MrLmmuHKO1RZy3a%2B2IBdpUNyQt3b8iC96xLT6s8FwkTAg6F5t0L7s6C7uaN4DCuJsiHQ2dJX73NI8O0lkNnPuJizsheyGy7mOT6g6PYxYW1gXhmJErlBaU3Oe%2BC8FR7hTD6r%2B3sR%2BKTnPJzj05LbFn2nFuf4J0bZqicTq2w4rF1LdDAvzLG8lZESl64Ddnsqkqb24CLuE6DJiOKWxIhzNao5DmYqTULoZ7GfDKGOlP%2FQeyWvsRW9Hj4jZ1AOdl6qstGIDk7%2F36GUbs%2B6ceNXZT5gh6nZR4IZkGMHA92LdIqQXWrW9gmlnb2l9MV1O7wZbMC8FG8Q5fVfincnmy2j%2FtrBIMkPmo%2BYa7jG%2F%2FXIz4ldJQFdYKnkxYlcA6y7q8iSbWo1lkwsOfKxImQv8TRH6hyeqhgFRwF79D4Mxisp%2FEIHW5OT%2BhYUh0nn52PWnkPTlKnFCmXU%2BLuPPd0mILzgyDAimT6RiX3%2FW3uwcLEjwfZQkdomi2h8xI7nmTy%2FwSn35n0k7W5I%2F6V2013TotOjIEs6DWy5fPv4Y1a%2BCOxkvdXbRNVpEnyVTgtvI7oBx3E5UysFx4n%2BxDNu99MJoSxw7gPQ6cVL0v0PxmZ7794GFjCy6tjEBjqkAXgWegjsya3LDkfOf4UqxEJuBkQE5TwrmBeK1PACgvJtlMPLY84%2BjcMYeKTSIOoYFZciVCUyENdkQV84jppuxZNNJqgO64tz2U%2FKRi9zZHyI8%2BFSMNVMp%2FxQVywDCIr2DdHTxpCmmgFkxuTQGWbYpIhgdF02Z67h18q6FZ9CuCT6bBEzbv60qvV%2FgdBE0u45%2Bl%2BJIuEQqa4biji5FBimRj9AZ4kR&X-Amz-Signature=a1307ba0d72da142c854353c83ef624062a9f730695c056e5187360bf5146b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW4DZF3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCIUPJe7ecmaB0E6kKU7Am%2B7IHUA7KFxV43vsRqBJ8PJgIhAM3mVvnG%2BTHR%2FRUzGlvwyJXMjEwqDuA%2FyJbMQB4PXHFUKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvgFdlTjUEyICFXpEq3AMutirjhCrCGH5EdAm8MrLmmuHKO1RZy3a%2B2IBdpUNyQt3b8iC96xLT6s8FwkTAg6F5t0L7s6C7uaN4DCuJsiHQ2dJX73NI8O0lkNnPuJizsheyGy7mOT6g6PYxYW1gXhmJErlBaU3Oe%2BC8FR7hTD6r%2B3sR%2BKTnPJzj05LbFn2nFuf4J0bZqicTq2w4rF1LdDAvzLG8lZESl64Ddnsqkqb24CLuE6DJiOKWxIhzNao5DmYqTULoZ7GfDKGOlP%2FQeyWvsRW9Hj4jZ1AOdl6qstGIDk7%2F36GUbs%2B6ceNXZT5gh6nZR4IZkGMHA92LdIqQXWrW9gmlnb2l9MV1O7wZbMC8FG8Q5fVfincnmy2j%2FtrBIMkPmo%2BYa7jG%2F%2FXIz4ldJQFdYKnkxYlcA6y7q8iSbWo1lkwsOfKxImQv8TRH6hyeqhgFRwF79D4Mxisp%2FEIHW5OT%2BhYUh0nn52PWnkPTlKnFCmXU%2BLuPPd0mILzgyDAimT6RiX3%2FW3uwcLEjwfZQkdomi2h8xI7nmTy%2FwSn35n0k7W5I%2F6V2013TotOjIEs6DWy5fPv4Y1a%2BCOxkvdXbRNVpEnyVTgtvI7oBx3E5UysFx4n%2BxDNu99MJoSxw7gPQ6cVL0v0PxmZ7794GFjCy6tjEBjqkAXgWegjsya3LDkfOf4UqxEJuBkQE5TwrmBeK1PACgvJtlMPLY84%2BjcMYeKTSIOoYFZciVCUyENdkQV84jppuxZNNJqgO64tz2U%2FKRi9zZHyI8%2BFSMNVMp%2FxQVywDCIr2DdHTxpCmmgFkxuTQGWbYpIhgdF02Z67h18q6FZ9CuCT6bBEzbv60qvV%2FgdBE0u45%2Bl%2BJIuEQqa4biji5FBimRj9AZ4kR&X-Amz-Signature=a90a472ee9c9d3c458a95f53ba0b9f4356d558f46aa9f8352f0161795205f91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
