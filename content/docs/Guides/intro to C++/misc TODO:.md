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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILFHOUL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBKsw77H0Fw8mZ9Fh%2FWn0AewxrRSYun0hy0EcHg%2BTBLTAiA6pcEKv70BVoZ4Cn4q5FHQ%2FUbP%2FzDKlDNCNIGD1liFEyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMV5tp7S4pwVZeKRsCKtwDaTnDv%2FJgsCwz7H1DlhgbLuaImF7L6NZWxyvsP0DjBv%2Bod7eDpYjgecshOaUTqQ1VlQkEd0xs5E0kLcRx4dvuc47PDZqCq2CMuNKaOCy9PPrztMvK25xGHgy%2BiHXctY5Rl61BNX0OSkNylazSJQDr7wrVGzQa0AM4nh24rexZB08NpP82w20A%2F%2BdEnu6kLJ%2B%2F1GzKrnAh41wW%2B6JaXPzCVZOx%2BCNeNhf8e9%2FOv6krJ51MqpfwgY5Uhk08TZWFXmhPoIYcEPDYB7DsKZT5WZi1BEqcqfhjGfn3QjDjspUFC3wT3ilqes3Efo%2Fspu0NLHwOhFKFzErEHREhfpdmoEZ23b9CDrLy51qyztBr3%2F61wyi5kgtZs2RfAR%2B2mxaID8zeN%2B5vID2yc3GmbLQdGnNYD6hf7fQLmjS68RpidocUCoNVWKpul1JofYaoD%2BXW1u7s%2FkofJWxDOFYdiuwcBEJduUUB2pd4M0ElyJ0rb1C%2Bv2Q%2FTlZqy79doT3YIWP7p4PRcNQl2oVvuOlFun8KLaM0%2Fts2cp3rHXp9by%2Bo11CVgku05aLyEtYjE3PNgmlVdYTu33iChSs7Fxpd6K6%2BBoDncFrVrT149xDYnZmmNhrbPI8uNb6g0XRDNgBqc7owhcbCvQY6pgG0YQQSyM7lnA02mAilZn2OHiqjtrvRm977dm18CopK4IinXFDvScgES65kgWTzkVdYjmpCZuXDxsF0tk9Igl4t9DX6mV2ih5DRBrXt2AA%2BX8KeDW1R3Z0AFv2Jj3dOTt3zgnGiifyaLoRAxkajmfzY7pbA68eA5QOymuTAco3eQqClb8JkkbuYnKNu8%2FpQ2qTkiLbPM3WjierUOpIkh2wOm%2Bu9lvCr&X-Amz-Signature=f2f95c572befebf607ba83363a9820041e46ed9eacbe6dbb087fbe7912c19ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILFHOUL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBKsw77H0Fw8mZ9Fh%2FWn0AewxrRSYun0hy0EcHg%2BTBLTAiA6pcEKv70BVoZ4Cn4q5FHQ%2FUbP%2FzDKlDNCNIGD1liFEyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMV5tp7S4pwVZeKRsCKtwDaTnDv%2FJgsCwz7H1DlhgbLuaImF7L6NZWxyvsP0DjBv%2Bod7eDpYjgecshOaUTqQ1VlQkEd0xs5E0kLcRx4dvuc47PDZqCq2CMuNKaOCy9PPrztMvK25xGHgy%2BiHXctY5Rl61BNX0OSkNylazSJQDr7wrVGzQa0AM4nh24rexZB08NpP82w20A%2F%2BdEnu6kLJ%2B%2F1GzKrnAh41wW%2B6JaXPzCVZOx%2BCNeNhf8e9%2FOv6krJ51MqpfwgY5Uhk08TZWFXmhPoIYcEPDYB7DsKZT5WZi1BEqcqfhjGfn3QjDjspUFC3wT3ilqes3Efo%2Fspu0NLHwOhFKFzErEHREhfpdmoEZ23b9CDrLy51qyztBr3%2F61wyi5kgtZs2RfAR%2B2mxaID8zeN%2B5vID2yc3GmbLQdGnNYD6hf7fQLmjS68RpidocUCoNVWKpul1JofYaoD%2BXW1u7s%2FkofJWxDOFYdiuwcBEJduUUB2pd4M0ElyJ0rb1C%2Bv2Q%2FTlZqy79doT3YIWP7p4PRcNQl2oVvuOlFun8KLaM0%2Fts2cp3rHXp9by%2Bo11CVgku05aLyEtYjE3PNgmlVdYTu33iChSs7Fxpd6K6%2BBoDncFrVrT149xDYnZmmNhrbPI8uNb6g0XRDNgBqc7owhcbCvQY6pgG0YQQSyM7lnA02mAilZn2OHiqjtrvRm977dm18CopK4IinXFDvScgES65kgWTzkVdYjmpCZuXDxsF0tk9Igl4t9DX6mV2ih5DRBrXt2AA%2BX8KeDW1R3Z0AFv2Jj3dOTt3zgnGiifyaLoRAxkajmfzY7pbA68eA5QOymuTAco3eQqClb8JkkbuYnKNu8%2FpQ2qTkiLbPM3WjierUOpIkh2wOm%2Bu9lvCr&X-Amz-Signature=231ef25d9037552c78a2a4c56a45c857d32909dbf6cec148bf907f17f97b3c64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
