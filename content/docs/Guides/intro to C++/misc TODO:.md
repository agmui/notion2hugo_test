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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCOL7KA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICM58ivOIx510Ajou31pty8zwvN%2FFo5VTUSpWy9CHlzwAiArmM6sSms2PRJfGZcJZ2ywimt2cOwP5pC5zQOftCQieSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUdufV9%2FJTigC0ZtKtwDXBVM9q8ng%2B%2ByNpCTI5C1zZpQeu8YUjphBw%2FTtkNCFh1BpSwc5s2%2BiMNuZF1RHqGK8O1SIqpUGaanpou5J5YY8aBULVgRaodsWrPGdU2J96OeVctfsLyMxdX8nc%2FZlyCs3nQA8xLAZduPv%2FhkKO7R7wiDLhsVzpdvR%2BCsksxxASqvoRxRE3roNr7iPlSovwLA%2FmEBrPmgJe99SvCxs4uPNrcpNQ5A5%2B%2BVZG5GCy6XiNC%2B%2B%2F6hgehSjALCr6hWCNDNP41%2BmSXgVz3k7XlF1Y9TyEkq75Fzc4nHPVVbuHuq10ONmYlgEZ12QFMBFub7JLKxVOYNU%2F4byN85mR23QBVmmVYFeHH3KIUpTufF8oO%2FT%2FIHb31Ff8oNPex05loD98xKNwyp%2BEOfHfaGJoQzGxLIHDxnscYjYpFty%2BzR%2FLAn6DJinj7oOrPwg2vn%2BDODPTjjZs%2B9rkhSvXrz9Fe0D9K2%2Fk07n3IXY0BIRLTX4qoTrXMWGo%2FLV5z9kFhNnfojGN%2FpP5P%2BS4kIrAzU3TdNxeqGTbkm1fJlm%2Ba%2B%2Fz6DGD42fZVlj6y2zqDLKZ9qkw4ykIH48uJYl0CMN%2F0tU0xJE4n%2Bqx3snEGIE0vGoZf8iml66kur8vrTr4yESjp3z14wv4iiwgY6pgGWphxKrL8alqIhfi2S%2BJR5LA1vu5morSdDzqZtrP6Ngqfv1pFf8pVg2OFZcty6ySCIpXc%2FGbuzGOwOPbJRfjlbwqGNQmur2sh1O0RqacKsgj2aNS6jPoJmbibEGJ9nL1RTQlNvYCOc9yhJvXHM8VPBdoO7MMZ0tLQEKq8Umt2bc%2B%2BWN2AqFbXq9uRfyxNhNmMEVgGUSQ%2BFtV%2BSu7tCJ%2F89Fz0JqqIT&X-Amz-Signature=35958c38da3ff81f91aa187ac1583ea125bdc17ff7454d56eef021de9f6e7083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCOL7KA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICM58ivOIx510Ajou31pty8zwvN%2FFo5VTUSpWy9CHlzwAiArmM6sSms2PRJfGZcJZ2ywimt2cOwP5pC5zQOftCQieSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUdufV9%2FJTigC0ZtKtwDXBVM9q8ng%2B%2ByNpCTI5C1zZpQeu8YUjphBw%2FTtkNCFh1BpSwc5s2%2BiMNuZF1RHqGK8O1SIqpUGaanpou5J5YY8aBULVgRaodsWrPGdU2J96OeVctfsLyMxdX8nc%2FZlyCs3nQA8xLAZduPv%2FhkKO7R7wiDLhsVzpdvR%2BCsksxxASqvoRxRE3roNr7iPlSovwLA%2FmEBrPmgJe99SvCxs4uPNrcpNQ5A5%2B%2BVZG5GCy6XiNC%2B%2B%2F6hgehSjALCr6hWCNDNP41%2BmSXgVz3k7XlF1Y9TyEkq75Fzc4nHPVVbuHuq10ONmYlgEZ12QFMBFub7JLKxVOYNU%2F4byN85mR23QBVmmVYFeHH3KIUpTufF8oO%2FT%2FIHb31Ff8oNPex05loD98xKNwyp%2BEOfHfaGJoQzGxLIHDxnscYjYpFty%2BzR%2FLAn6DJinj7oOrPwg2vn%2BDODPTjjZs%2B9rkhSvXrz9Fe0D9K2%2Fk07n3IXY0BIRLTX4qoTrXMWGo%2FLV5z9kFhNnfojGN%2FpP5P%2BS4kIrAzU3TdNxeqGTbkm1fJlm%2Ba%2B%2Fz6DGD42fZVlj6y2zqDLKZ9qkw4ykIH48uJYl0CMN%2F0tU0xJE4n%2Bqx3snEGIE0vGoZf8iml66kur8vrTr4yESjp3z14wv4iiwgY6pgGWphxKrL8alqIhfi2S%2BJR5LA1vu5morSdDzqZtrP6Ngqfv1pFf8pVg2OFZcty6ySCIpXc%2FGbuzGOwOPbJRfjlbwqGNQmur2sh1O0RqacKsgj2aNS6jPoJmbibEGJ9nL1RTQlNvYCOc9yhJvXHM8VPBdoO7MMZ0tLQEKq8Umt2bc%2B%2BWN2AqFbXq9uRfyxNhNmMEVgGUSQ%2BFtV%2BSu7tCJ%2F89Fz0JqqIT&X-Amz-Signature=8aed5b768299f1c24211f04bf0fe4e8ece4004b8a1d207cfca6a7687743299ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
