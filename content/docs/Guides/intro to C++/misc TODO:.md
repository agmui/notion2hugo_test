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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4X3Y3A%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH01O37z92cId%2FLN43NjQ1LD%2B%2FPHHfEBVLAw1uBoSvc9AiBy4yC0CMiWTtjV6vUl%2FWZ1dRuAJVze1kFtTL71zCnafyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMDMnk3107vY1XlWvfKtwDRDFZR1ZwPLEzmzIBu4LZW8LgtkjTocMJGNlnCcN7XWIQLyuFgu2ShVCmzTCxpaZ%2FFi%2FsU9HkwG8QkdhoKYBf6XSRV5YcAlVSn6d%2FoGLGSr6dZEcudNIIiFWqP%2BODykXg7%2Fsz1BER%2FZDsBiHRbVA6WgFzuN7bOQ2cAz0AKf6qVOiEpkbAQfLYLJKv2%2BSVfdX0KveQcOAaMposVDpStiCt9B5IPErvrLX%2BWl468LNpoUcgLRubNQzUVLBQ3xhI3o976T8Ns8wvF9GKBIAvK%2B6aSmwkmDiOfa9R7sbXP0bJZLgbayoPfT9zfWBsA%2FEY%2BQbJ%2FtlLWrhHSCEX5IfP4pvOHhlTxRaAgnscJENBRvZYHkq0PKQorADIsV5WH9GYNp6BfjLihIjumVzklyPtPNuazrtDQYB0bOHxcjoo64VY50UJYTEhXR6AprLPLOROg4o%2Fso0WJJ8JIjwqpN5rWggmUJjCQU8JDIcz0BPEVQ0en%2ByvntFfa6GE3bc0fj6o%2FWeXmcFLfXs%2F8zjKcmlrQnW%2Fi2KwuLTQYW9P6%2F036D%2Bg7F6ICqAh%2BN%2FrrwI8WAjXXGTyJkm%2BoCHkAda3zYvYu4CpByQBpphKGmU%2FSYxAdEl4VeyRcSAUpKhlZPxImXgw8c2bywY6pgGQXDoK1pQ3WBlUUdtkC34z2mk5P4MzC4RM1797r1vChWfa1NTKEMaLaWzhk6jcCEgAmzfDD5SWu3E2ACAGzw7oy3jcOS3VzYDv5vQSW3eE9j895F95jaV4o0TjKwUmR5HDR%2ByrgDwAZv8IteVcKFfmQUnzs%2FLPfUlKQ9bIW%2FOTJ1pU%2Bk3HfCcIkZvRiTh3IXcaPOtw9F2W%2BOkDLX5WG7%2BmOSLWlAP%2F&X-Amz-Signature=0b334965018fd99c427ae147d57eac6dc22924c57c3742b49cd9f522931c184a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4X3Y3A%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH01O37z92cId%2FLN43NjQ1LD%2B%2FPHHfEBVLAw1uBoSvc9AiBy4yC0CMiWTtjV6vUl%2FWZ1dRuAJVze1kFtTL71zCnafyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMDMnk3107vY1XlWvfKtwDRDFZR1ZwPLEzmzIBu4LZW8LgtkjTocMJGNlnCcN7XWIQLyuFgu2ShVCmzTCxpaZ%2FFi%2FsU9HkwG8QkdhoKYBf6XSRV5YcAlVSn6d%2FoGLGSr6dZEcudNIIiFWqP%2BODykXg7%2Fsz1BER%2FZDsBiHRbVA6WgFzuN7bOQ2cAz0AKf6qVOiEpkbAQfLYLJKv2%2BSVfdX0KveQcOAaMposVDpStiCt9B5IPErvrLX%2BWl468LNpoUcgLRubNQzUVLBQ3xhI3o976T8Ns8wvF9GKBIAvK%2B6aSmwkmDiOfa9R7sbXP0bJZLgbayoPfT9zfWBsA%2FEY%2BQbJ%2FtlLWrhHSCEX5IfP4pvOHhlTxRaAgnscJENBRvZYHkq0PKQorADIsV5WH9GYNp6BfjLihIjumVzklyPtPNuazrtDQYB0bOHxcjoo64VY50UJYTEhXR6AprLPLOROg4o%2Fso0WJJ8JIjwqpN5rWggmUJjCQU8JDIcz0BPEVQ0en%2ByvntFfa6GE3bc0fj6o%2FWeXmcFLfXs%2F8zjKcmlrQnW%2Fi2KwuLTQYW9P6%2F036D%2Bg7F6ICqAh%2BN%2FrrwI8WAjXXGTyJkm%2BoCHkAda3zYvYu4CpByQBpphKGmU%2FSYxAdEl4VeyRcSAUpKhlZPxImXgw8c2bywY6pgGQXDoK1pQ3WBlUUdtkC34z2mk5P4MzC4RM1797r1vChWfa1NTKEMaLaWzhk6jcCEgAmzfDD5SWu3E2ACAGzw7oy3jcOS3VzYDv5vQSW3eE9j895F95jaV4o0TjKwUmR5HDR%2ByrgDwAZv8IteVcKFfmQUnzs%2FLPfUlKQ9bIW%2FOTJ1pU%2Bk3HfCcIkZvRiTh3IXcaPOtw9F2W%2BOkDLX5WG7%2BmOSLWlAP%2F&X-Amz-Signature=3b1506c1c46b298cb205825815881b2fd58747c60049aef4bc12a09298a2310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
