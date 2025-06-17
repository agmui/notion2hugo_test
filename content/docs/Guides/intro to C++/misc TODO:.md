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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA6D6TX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG52DsluBqb9D8eqkN8q6f%2FPrHSAenvQxNXMfZel5gKiAiAPJuISOLAp8bZuZkLC6Tq8cnQDltX8MIng6E5LXTx2lCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM89bxcp7DqI6rARvwKtwDL3JTzbaUjesflmZxd6tYzH5NyzyA6cS6Yf089r3i%2FmX29rPyKc0od9DcvFtyeZ7%2BOOdrZZX1hQr19PGunXQEfTwlfEh96dMpwGZZUdqgom57VQAcbkfAfY1O%2Fhvt2qJSEtBjFNId7JEKN6h7Fk9DEJA5v9kkcaHjIoKLskjjVqzrZ14nLPeQCRjEsy3ITQXgt7EN%2FtfVQ2vYyaPyfQcGYMDr8ApqL%2FhhODcmAbm9zoqYQJkjF7oBKSsJ6rI7V895SQu%2B7H1PfJO3%2BZvBtjHv0NfSeS2i3PQVjSTJc8Sc1ECdNcXEu1uf12Ym4XyVnWsdzeYpfJq%2BSJJPsTTJGR7EuwmTG3MEnxDrQhgXyEgxInMuqMySrsSu4708ERDWlEWYeL916HY%2Bte7zfhIFoPBZtqJVD%2B4phmETwtx34D9kDgSGX3ZuAPszhEzuZanS5pT%2BmonlzgrDLCqXG5Ry8XK42YwdrEUnswXXGjaBbbeUMGdEihwH%2B0qCbVaWaJ6cZY4lf1AGo7AcriAPeJD%2FwlNsUHa21ziy9A8uk5LqpuLpkYsvANdZu536l%2B%2BewORL8ySgCEeH79D%2FQSSdxm27efSdaN4%2BMHScRPa717HMi5Bnmu0tAmNfpVcMxDo0Dtow297CwgY6pgFrv86l%2BLeYQr9hWM9W%2BUWg3Bwu7w2kgBETDGyNgiJVL1eaaRprioUyWKYSgf6JWMkg63BFThrxdNJoySVAF69QLe9lktd6QHNCP4YF1zmKxV7p64v4edvB86qQMzu4bN2F74ZmFp%2Ba%2BdJW9fX3%2Bam1DPgj3weCVcLaD1ANABE3ygMxPziuNOhaJcNotaqQ7PpT%2BoVVevyWsS7ADgZOUJaREGqNzTOs&X-Amz-Signature=2efb18ae4723b562c4ac4ca4d9441bc980ec5cbe8a7c5820088aae31700ca957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA6D6TX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG52DsluBqb9D8eqkN8q6f%2FPrHSAenvQxNXMfZel5gKiAiAPJuISOLAp8bZuZkLC6Tq8cnQDltX8MIng6E5LXTx2lCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM89bxcp7DqI6rARvwKtwDL3JTzbaUjesflmZxd6tYzH5NyzyA6cS6Yf089r3i%2FmX29rPyKc0od9DcvFtyeZ7%2BOOdrZZX1hQr19PGunXQEfTwlfEh96dMpwGZZUdqgom57VQAcbkfAfY1O%2Fhvt2qJSEtBjFNId7JEKN6h7Fk9DEJA5v9kkcaHjIoKLskjjVqzrZ14nLPeQCRjEsy3ITQXgt7EN%2FtfVQ2vYyaPyfQcGYMDr8ApqL%2FhhODcmAbm9zoqYQJkjF7oBKSsJ6rI7V895SQu%2B7H1PfJO3%2BZvBtjHv0NfSeS2i3PQVjSTJc8Sc1ECdNcXEu1uf12Ym4XyVnWsdzeYpfJq%2BSJJPsTTJGR7EuwmTG3MEnxDrQhgXyEgxInMuqMySrsSu4708ERDWlEWYeL916HY%2Bte7zfhIFoPBZtqJVD%2B4phmETwtx34D9kDgSGX3ZuAPszhEzuZanS5pT%2BmonlzgrDLCqXG5Ry8XK42YwdrEUnswXXGjaBbbeUMGdEihwH%2B0qCbVaWaJ6cZY4lf1AGo7AcriAPeJD%2FwlNsUHa21ziy9A8uk5LqpuLpkYsvANdZu536l%2B%2BewORL8ySgCEeH79D%2FQSSdxm27efSdaN4%2BMHScRPa717HMi5Bnmu0tAmNfpVcMxDo0Dtow297CwgY6pgFrv86l%2BLeYQr9hWM9W%2BUWg3Bwu7w2kgBETDGyNgiJVL1eaaRprioUyWKYSgf6JWMkg63BFThrxdNJoySVAF69QLe9lktd6QHNCP4YF1zmKxV7p64v4edvB86qQMzu4bN2F74ZmFp%2Ba%2BdJW9fX3%2Bam1DPgj3weCVcLaD1ANABE3ygMxPziuNOhaJcNotaqQ7PpT%2BoVVevyWsS7ADgZOUJaREGqNzTOs&X-Amz-Signature=c89c660a7863c76b6181f4e17044ab26ede761520da247dd82a627f2ac93f4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
