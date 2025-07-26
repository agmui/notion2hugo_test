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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T5EU3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAY8oUKiBJ5TcBL0BmuaXepfuQDsZPbqEO5ojclrk28LAiAq3IgRDxnmGT70RSdQWZK9oBpcCz8rTUYJahraq6wB3yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6gZsYWOcM1jLfHVsKtwDCMNAGbjvHi8bHPzEKxH2X7wSY1caGqbHF6w43uopVFLL%2FjsJ%2F5%2FMup%2FjoF3z6BvxUiwSGgIlfCEUnqqBzoDOYIe5ihoNLY82c410bWTQ5r6RHuMzu%2F0%2Fyb76yulRLOe6jCn%2FD15%2FpaZvXKMdugXSeFCnBv6d1sIvLx3UODZ1DJwl3trp5rGvdmXe2iRrvltscEvR6ZnOj57hK4371KeeZm%2B56TYaHGVN%2BIRqd%2BeVHfH50RgXO2AKSYnDXcELusKufg2S9COVoCkUkTmoq2iGrmJLRf05YhxdBOpVsj%2BEulH8Zd5HX63njuCSGWGi3XGsoAKzJ5qEAhsrjXk9AuJKOmX2dNYM8%2BB44%2FNqF6g3rYz3L9QdDtRLCMVqn1dO4B%2Fz5JegauIWjGQsPrEWgMegIt2NOC3EtVzj%2BdAdijcCtjOaXPDQmrgRlBLEBV9UvWUcX%2BF3wgrF%2BXlWPZIsb30kZpDDVeL%2Bx13waXZtQKsRVetRdMik%2BnPhB1eN15syXBahjrSTnClZ18OpE%2FqErk30ZGxmuwfm%2BaCt3xFQCn4%2FHW81gaEMHtxX0iIA%2FnUICX33XlSH0LKAWEHZUcPrcPl77KTSxNO5WjMJPf67fqmIr3CUoKIwsM8ucGVXWoEw5f%2BUxAY6pgHzgr1d7HQfNH9%2B0pjcpm68JlUhuNhZpTwUV4OhYbb5WpPsxPoTb3p%2BfyjeS7%2FbhyoW5jTdl4MUuDNh60oBoVvtl5VZAN1%2Ftnf8GiEA865LAJY5qma4o64DcQ7%2B6Bmd08eGzrDNJYSuqzW%2BOG9%2FqJI49k4B1TzG4F1e0AxK8jpJjpxoiQRpziT5aW5hOtF%2FA00HMVPai3TeAruIwjkLklIUjcBVtpvg&X-Amz-Signature=8bd55090b92194e83a58916c5348f23f4ea40a0e13f4bccb4e1fc1bd1e034135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T5EU3U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAY8oUKiBJ5TcBL0BmuaXepfuQDsZPbqEO5ojclrk28LAiAq3IgRDxnmGT70RSdQWZK9oBpcCz8rTUYJahraq6wB3yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6gZsYWOcM1jLfHVsKtwDCMNAGbjvHi8bHPzEKxH2X7wSY1caGqbHF6w43uopVFLL%2FjsJ%2F5%2FMup%2FjoF3z6BvxUiwSGgIlfCEUnqqBzoDOYIe5ihoNLY82c410bWTQ5r6RHuMzu%2F0%2Fyb76yulRLOe6jCn%2FD15%2FpaZvXKMdugXSeFCnBv6d1sIvLx3UODZ1DJwl3trp5rGvdmXe2iRrvltscEvR6ZnOj57hK4371KeeZm%2B56TYaHGVN%2BIRqd%2BeVHfH50RgXO2AKSYnDXcELusKufg2S9COVoCkUkTmoq2iGrmJLRf05YhxdBOpVsj%2BEulH8Zd5HX63njuCSGWGi3XGsoAKzJ5qEAhsrjXk9AuJKOmX2dNYM8%2BB44%2FNqF6g3rYz3L9QdDtRLCMVqn1dO4B%2Fz5JegauIWjGQsPrEWgMegIt2NOC3EtVzj%2BdAdijcCtjOaXPDQmrgRlBLEBV9UvWUcX%2BF3wgrF%2BXlWPZIsb30kZpDDVeL%2Bx13waXZtQKsRVetRdMik%2BnPhB1eN15syXBahjrSTnClZ18OpE%2FqErk30ZGxmuwfm%2BaCt3xFQCn4%2FHW81gaEMHtxX0iIA%2FnUICX33XlSH0LKAWEHZUcPrcPl77KTSxNO5WjMJPf67fqmIr3CUoKIwsM8ucGVXWoEw5f%2BUxAY6pgHzgr1d7HQfNH9%2B0pjcpm68JlUhuNhZpTwUV4OhYbb5WpPsxPoTb3p%2BfyjeS7%2FbhyoW5jTdl4MUuDNh60oBoVvtl5VZAN1%2Ftnf8GiEA865LAJY5qma4o64DcQ7%2B6Bmd08eGzrDNJYSuqzW%2BOG9%2FqJI49k4B1TzG4F1e0AxK8jpJjpxoiQRpziT5aW5hOtF%2FA00HMVPai3TeAruIwjkLklIUjcBVtpvg&X-Amz-Signature=95d0977f722ae90bc0fd4ca9de48e7358e4c3122411c009e2b4434ca0f0d6938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
