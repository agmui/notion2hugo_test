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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAIRFHR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUW3wBjX8S60vieDdPlmtSyWNSRsoZLnnUI280F5eDqwIgc52hwK4ypvj0bvYBpPn3Bb%2BP7aPThtj9kdLgoqeC%2Fo8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDH6F8W%2FV0XKGIRSWQyrcA9BxgLJVSsKj9erq0LAQAv%2BhT3U4Nuv6OmJ9zywfdGGIO6ZAYmNj2J%2FffvReYjcd67Ze2yPCLIiujyEZcqNou6HQXHD2X8iF6HMulJeYsr7PdslTDVLKseENDmK3L6DRawf0gnb7x8Po7tiIMdaOHLdLni9%2Fb%2BIWRXC0rAEbE2yDGgA9zI0GMPqo1R98mIvodHpBkulhciUCNPEZYRBfSUIlnyd6QxU6urSswcVZRlKFK7OrsUWd396p%2BkDBh5CkagM2nC6rx2%2FtjnvePEj4GgHkqrwMjluglpiN5R1Z0XBmjGtGPQ1%2Fwxv61aevNQoXlhretekPuNXDg4Ejg6OZCA%2Bo40E9ZPch08VleHWWJtUXeWcnTBOxa7LpNUjyKRKK%2B2mhAVSB1bXf2fWzBCzUXUDnQ3AXv97pCjZ80mWKXOfpJQ51jCPrCArwUkSzpMbbTzJ3mtCBALZmbN7odJS7sLJjZWMW5JOguiQkyeFhHjNLVpUCgmpS%2BwfdIO6z6kU7WSCvApkYIl%2BE2e6%2FLjBpZy2szYKEhQmudBwehLbXEiGQGwLva7lvu3kpjnIMkTBZ0EmTKajTkD9yL%2FzBcbrRlOHqJ2C5SVpnov8K63tiMTVjGbvRY0BcXoXhcs4PMK%2FIvcAGOqUBtE77kIN9kZMW3iwsnadOwoW%2BGeBuP3Dxd1b6UDuR%2F5gU1SpQFOkFC9TxNgcK8%2FcU9PamfvyM9LRoyys77TsuwXCoUYgqS6aKohsXJNsvOU6uR5579yJjCV8Nc%2BuspfYLLv6VXu5kMQh4Jogx%2Bso4GVK%2FFzHuoq7FItovGKSCnuLZvHVcjLbs07LCulV7f%2FwHk3ijPbhNcxCpC2Jd6FbhOhl9AQx2&X-Amz-Signature=e4a2c30e892f4109d42745688ae0d3c12f060cdf1817a05668927132e8f02ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAIRFHR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUW3wBjX8S60vieDdPlmtSyWNSRsoZLnnUI280F5eDqwIgc52hwK4ypvj0bvYBpPn3Bb%2BP7aPThtj9kdLgoqeC%2Fo8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDH6F8W%2FV0XKGIRSWQyrcA9BxgLJVSsKj9erq0LAQAv%2BhT3U4Nuv6OmJ9zywfdGGIO6ZAYmNj2J%2FffvReYjcd67Ze2yPCLIiujyEZcqNou6HQXHD2X8iF6HMulJeYsr7PdslTDVLKseENDmK3L6DRawf0gnb7x8Po7tiIMdaOHLdLni9%2Fb%2BIWRXC0rAEbE2yDGgA9zI0GMPqo1R98mIvodHpBkulhciUCNPEZYRBfSUIlnyd6QxU6urSswcVZRlKFK7OrsUWd396p%2BkDBh5CkagM2nC6rx2%2FtjnvePEj4GgHkqrwMjluglpiN5R1Z0XBmjGtGPQ1%2Fwxv61aevNQoXlhretekPuNXDg4Ejg6OZCA%2Bo40E9ZPch08VleHWWJtUXeWcnTBOxa7LpNUjyKRKK%2B2mhAVSB1bXf2fWzBCzUXUDnQ3AXv97pCjZ80mWKXOfpJQ51jCPrCArwUkSzpMbbTzJ3mtCBALZmbN7odJS7sLJjZWMW5JOguiQkyeFhHjNLVpUCgmpS%2BwfdIO6z6kU7WSCvApkYIl%2BE2e6%2FLjBpZy2szYKEhQmudBwehLbXEiGQGwLva7lvu3kpjnIMkTBZ0EmTKajTkD9yL%2FzBcbrRlOHqJ2C5SVpnov8K63tiMTVjGbvRY0BcXoXhcs4PMK%2FIvcAGOqUBtE77kIN9kZMW3iwsnadOwoW%2BGeBuP3Dxd1b6UDuR%2F5gU1SpQFOkFC9TxNgcK8%2FcU9PamfvyM9LRoyys77TsuwXCoUYgqS6aKohsXJNsvOU6uR5579yJjCV8Nc%2BuspfYLLv6VXu5kMQh4Jogx%2Bso4GVK%2FFzHuoq7FItovGKSCnuLZvHVcjLbs07LCulV7f%2FwHk3ijPbhNcxCpC2Jd6FbhOhl9AQx2&X-Amz-Signature=f4148e991c056f42685556908c9f58d2ab817789f53f1bc442336c3946daa065&X-Amz-SignedHeaders=host&x-id=GetObject)

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
