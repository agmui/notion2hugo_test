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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYTWSEB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDZywygf15iF4zekGFX%2FxAj6eaufcE6Fkns21IcLTgvvAiBq3LgskZMIUZS5vq4e%2Fpo6ESIwYc9qmGQp%2BYjZswtNUCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrYxYGf8uMzJz4oRKtwDthnp12rioplBwv3cGB7WtbYFu3JKr76reOdCl3JixheqSJF68f0jONhBjXc2waTyFeVTkUeIMGVO1HrP7%2FICNevqIhzzjA1ukYe%2F%2FS8lsy3MS8AbcHSCVPSJq2tboPlRiJAXFcs5IGdSuTURkOYq7Dtm93xYSX7l0RmYuqBh3AF2HZz4FpzJrq7x5rbZLuReIXYQiCbO%2F%2BPQAwpnsPffB8l6Nimwhh1hPN40WzGN9WuH0J%2FCYi38gsbyLeT%2FH5CbCj637tMwjRB11Rb2pmnVRx1OCtmUD%2FAe7xv6e7uKPY45ZRjm3zvJAkuxTW3iIs5XNv6ohohSn2ZK6Y4RX%2Bwh9gn1hbgHjuDP59c%2FeMi0nNZ2Lm62pY%2Fdsyx%2BNdV%2BWLKxip8FXQJIxXUXGhVUH4kG2Gy413vCQVLJZEycg4%2FsN8xn1PyphEChFSTggH2rUJXNSltZ1SqHEw3%2FUi1mU2ovHi99uv313VGDP0vZHtr9KYDbvz7lAww6OObaun0GSNz7g1A57A%2BBG0AzfjVUt9AGjK%2FrAqGLY6cQ1Kt9Iqrik6xXW5oyS1fehwpCWPY27moPLR1V%2Fe9zbhRecRRLGLiuAI4ZAxQCcAgCRThtMJBdQxG2%2FcAWpF%2BkRTDlD98w3Nv2vgY6pgFrqoM9ie2REyDE%2BfxYXnJqjLxuYdDXmLgcnngX5TJ5YId0alNfpVmec%2FI1%2BcZZqw4xTFuphgPtQj1mObx0eWVdDs8Okb%2FLrXL0Tnjt101FIJQvixmcA5DCfvOeDwQRAfZhF9%2B0jtuklFamAP92ocfKSriit6hsc5qQMr5c0DZQX4Hc47EHlPY1Xkv8O96WA0Mza%2BGDMca6hv%2FcVyHDfc%2FGPKnEgrQR&X-Amz-Signature=1ff54716150e420570fc221043aa3f1ea9b0ad10092427936d57d5d273d643a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYTWSEB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDZywygf15iF4zekGFX%2FxAj6eaufcE6Fkns21IcLTgvvAiBq3LgskZMIUZS5vq4e%2Fpo6ESIwYc9qmGQp%2BYjZswtNUCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrYxYGf8uMzJz4oRKtwDthnp12rioplBwv3cGB7WtbYFu3JKr76reOdCl3JixheqSJF68f0jONhBjXc2waTyFeVTkUeIMGVO1HrP7%2FICNevqIhzzjA1ukYe%2F%2FS8lsy3MS8AbcHSCVPSJq2tboPlRiJAXFcs5IGdSuTURkOYq7Dtm93xYSX7l0RmYuqBh3AF2HZz4FpzJrq7x5rbZLuReIXYQiCbO%2F%2BPQAwpnsPffB8l6Nimwhh1hPN40WzGN9WuH0J%2FCYi38gsbyLeT%2FH5CbCj637tMwjRB11Rb2pmnVRx1OCtmUD%2FAe7xv6e7uKPY45ZRjm3zvJAkuxTW3iIs5XNv6ohohSn2ZK6Y4RX%2Bwh9gn1hbgHjuDP59c%2FeMi0nNZ2Lm62pY%2Fdsyx%2BNdV%2BWLKxip8FXQJIxXUXGhVUH4kG2Gy413vCQVLJZEycg4%2FsN8xn1PyphEChFSTggH2rUJXNSltZ1SqHEw3%2FUi1mU2ovHi99uv313VGDP0vZHtr9KYDbvz7lAww6OObaun0GSNz7g1A57A%2BBG0AzfjVUt9AGjK%2FrAqGLY6cQ1Kt9Iqrik6xXW5oyS1fehwpCWPY27moPLR1V%2Fe9zbhRecRRLGLiuAI4ZAxQCcAgCRThtMJBdQxG2%2FcAWpF%2BkRTDlD98w3Nv2vgY6pgFrqoM9ie2REyDE%2BfxYXnJqjLxuYdDXmLgcnngX5TJ5YId0alNfpVmec%2FI1%2BcZZqw4xTFuphgPtQj1mObx0eWVdDs8Okb%2FLrXL0Tnjt101FIJQvixmcA5DCfvOeDwQRAfZhF9%2B0jtuklFamAP92ocfKSriit6hsc5qQMr5c0DZQX4Hc47EHlPY1Xkv8O96WA0Mza%2BGDMca6hv%2FcVyHDfc%2FGPKnEgrQR&X-Amz-Signature=047d1b5847a4a5c087c6f4efba1b1e6e482ef7d44d3c0d80279b81d8dd0c05ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
