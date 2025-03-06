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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX3LEQP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZHuLqmIqD55qRBX%2FJAwBy%2B8F%2FsXb1EUopPrd53sjFAiA6LRAwe2WMAsbUusB7yWUYOh63nC2Pbr6UeoaVnCEFSSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvH%2Ftr9fn58sQoHWPKtwDMDoMayCKZbpmXR0ryp697%2FMkMLSQyM%2FL%2F0%2Fwz78%2B7vw2WAxUWUrWTn2P4Apg%2FtIhLblLckP5bcH0eiMKVcPA9rT13m8uAq6lCeN6E2x6VYtQQ3vL36SBbKReoXB8e9Xbqd2od6O21kD9a5GzGiIYpSVNVuyE0TcWkNkTr4cXQOa36KaZGFWiKhNDmd%2Fir%2FZ909sCRRtKyEYbyWDnl1r7YQ0pDUT8Mr7Oz5TohVwh5v0nwvNeNHGk6sM46DcRFkv%2BoylM48gbOtCI%2F7r8u9G%2BNixSMZ0V5xFEHRHC90PFmNne51GolO%2Bx135Phd8RI7VQvGSRrEzjLFnPE3l78l1oYcpVBL80l64AOTzQn3JTnMXIt2yDs1N0KLUXJN4NXHjc3wQ6fn%2Fa80AWrDsI%2F2fpUsbVPGPW4UtXqKe3%2Fzmgq%2BUPbprkykAmyQ1HoxxDw70F1QNEXAU%2FIhCBP5b4cVT%2FafSuHILF38y2KQv3b4MLOaBCQO4TJobowoalkchM2WgOYz1O9cg0jFxO7n4g5c%2FzHiCt9r76%2FAzqZb7GLA0RYtpvWKz%2BUYJgxSp3Lcbih56s56H4fhXQqaNNK%2BY89uuzdyCGV5Mrh6lCenYuc%2FPKP8k54NS%2BFjyHzDoaFVowgfOlvgY6pgGYyZDJnr40qutN%2B1zbFT74Ab%2FyFQNhNpamdELUxmHw2UqBhV3CPX6DtB0T9WChCE3JWsaLdI%2BO7jNDW8gg%2FAjoGDCRans%2FPJncaiS1%2BMLWftUKrma4rXHvbCXn95fT4ThRpPwHatzTCy%2BsHJJohSAgCBilRWT9iC5vN1x5VRgOA%2BUMJz1yze01pUAcs4l7r%2BgkldDenW8Bpr9%2FAySfX1dS5EiQQlKI&X-Amz-Signature=902e41decced94ceb34cb694d802f04ccc63679e072c18628170ac8bbb2c63cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX3LEQP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZHuLqmIqD55qRBX%2FJAwBy%2B8F%2FsXb1EUopPrd53sjFAiA6LRAwe2WMAsbUusB7yWUYOh63nC2Pbr6UeoaVnCEFSSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvH%2Ftr9fn58sQoHWPKtwDMDoMayCKZbpmXR0ryp697%2FMkMLSQyM%2FL%2F0%2Fwz78%2B7vw2WAxUWUrWTn2P4Apg%2FtIhLblLckP5bcH0eiMKVcPA9rT13m8uAq6lCeN6E2x6VYtQQ3vL36SBbKReoXB8e9Xbqd2od6O21kD9a5GzGiIYpSVNVuyE0TcWkNkTr4cXQOa36KaZGFWiKhNDmd%2Fir%2FZ909sCRRtKyEYbyWDnl1r7YQ0pDUT8Mr7Oz5TohVwh5v0nwvNeNHGk6sM46DcRFkv%2BoylM48gbOtCI%2F7r8u9G%2BNixSMZ0V5xFEHRHC90PFmNne51GolO%2Bx135Phd8RI7VQvGSRrEzjLFnPE3l78l1oYcpVBL80l64AOTzQn3JTnMXIt2yDs1N0KLUXJN4NXHjc3wQ6fn%2Fa80AWrDsI%2F2fpUsbVPGPW4UtXqKe3%2Fzmgq%2BUPbprkykAmyQ1HoxxDw70F1QNEXAU%2FIhCBP5b4cVT%2FafSuHILF38y2KQv3b4MLOaBCQO4TJobowoalkchM2WgOYz1O9cg0jFxO7n4g5c%2FzHiCt9r76%2FAzqZb7GLA0RYtpvWKz%2BUYJgxSp3Lcbih56s56H4fhXQqaNNK%2BY89uuzdyCGV5Mrh6lCenYuc%2FPKP8k54NS%2BFjyHzDoaFVowgfOlvgY6pgGYyZDJnr40qutN%2B1zbFT74Ab%2FyFQNhNpamdELUxmHw2UqBhV3CPX6DtB0T9WChCE3JWsaLdI%2BO7jNDW8gg%2FAjoGDCRans%2FPJncaiS1%2BMLWftUKrma4rXHvbCXn95fT4ThRpPwHatzTCy%2BsHJJohSAgCBilRWT9iC5vN1x5VRgOA%2BUMJz1yze01pUAcs4l7r%2BgkldDenW8Bpr9%2FAySfX1dS5EiQQlKI&X-Amz-Signature=631d968ca331ce9f574daeb75ca390f66fd6b7ae47a8721288b8dcc0d8f3de06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
