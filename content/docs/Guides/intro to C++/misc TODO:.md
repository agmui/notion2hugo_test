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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZGLUTKD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICQJQg%2ByEeIUsLGTy2AHjR82ThC%2BcgC0qNYHfo1g3mEMAiEAjGOaT11qq2GShJpOquFeUZnbNLNHKDGUUs25JxtSmu8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOVkmZUEZXCCANiEwCrcA1X6FfTysdScvWm8adiDicqSy%2FPyNZOOZ508mJOHGbE9loxkd1h4N9uU5NLd7CQtKuGWr2CblSnF6maW2SZ8IGKjtN83SZos3ZY09RMXo2dvisB2LQeKekrNFiHj8rYf5WQWOdCFeVhLr3cSAqQ2F3dTAiANKIMOk6T7sg%2BmW2IpQJh%2F%2BwK3Mui1ZzWsF460sb8%2FECwjhjo9ZYH1k08uhPkB7Bj%2B0K92hT6wrqpEJStqeDp4JwLnFgTu3k3IB4EZnhne7pxc25oAwX6c5%2F%2FinND%2FI6z%2BnEnLMkjTt1LSjYgLmdGHzHMOWfFsvTOCYvandAnzAOFuNwufvWGcNt080mFYXIiVO9aBYoMc4Ghzkmy2PxNckNKA0DiLXuQb%2BK6YrmRoRAPjj4HU6CWRjtF6IO2cgVQ2S3xRvtNY31NKfto0lY6wqEAWJwCQHEtKPBPdnY95EbRnjK7B57Ou22EcRBCKAmYSP4NazqAkukQSJkb1JtXH6tqI%2BvdvKa2%2B3R2KWux4PD30b%2B%2FXes%2BwxNXEWAyn6xAXbMZ5sHXqlQGAV4T7gPM5cy9rmuIVPS3%2FKE8CO0BhIrbxWxfh0u6VR1SirJWmmNSoMCaVdTiT8cLFcq0avHoez5w3BrHdfv%2BjMLTt%2F70GOqUB7OeJ2QOv%2Fjyn6ku9WXjNsyCO3BFt32bDm4BqWpbw9H%2BuNHWAwgJsAn7uahYjoH%2F5Lgj9Bj8ResleGFjKhmxl5Oi0iD7wLR0fHh7Eq%2BJqhzBmPPXwJekyFy%2FVZk91xITkz6Fi3p1LHOnotb%2Bsm9zQmCuyRJeXOXnRkDw5L%2BkLFywQyaJi7efx1CrZ%2F8vFdaNv9uJYCpV455pW7znp6LFAPMTrIGMW&X-Amz-Signature=7cbbadd22e09ba2bffdc94022c96f27a9cebe88cdf8cc26fba463647a4adc251&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZGLUTKD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICQJQg%2ByEeIUsLGTy2AHjR82ThC%2BcgC0qNYHfo1g3mEMAiEAjGOaT11qq2GShJpOquFeUZnbNLNHKDGUUs25JxtSmu8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOVkmZUEZXCCANiEwCrcA1X6FfTysdScvWm8adiDicqSy%2FPyNZOOZ508mJOHGbE9loxkd1h4N9uU5NLd7CQtKuGWr2CblSnF6maW2SZ8IGKjtN83SZos3ZY09RMXo2dvisB2LQeKekrNFiHj8rYf5WQWOdCFeVhLr3cSAqQ2F3dTAiANKIMOk6T7sg%2BmW2IpQJh%2F%2BwK3Mui1ZzWsF460sb8%2FECwjhjo9ZYH1k08uhPkB7Bj%2B0K92hT6wrqpEJStqeDp4JwLnFgTu3k3IB4EZnhne7pxc25oAwX6c5%2F%2FinND%2FI6z%2BnEnLMkjTt1LSjYgLmdGHzHMOWfFsvTOCYvandAnzAOFuNwufvWGcNt080mFYXIiVO9aBYoMc4Ghzkmy2PxNckNKA0DiLXuQb%2BK6YrmRoRAPjj4HU6CWRjtF6IO2cgVQ2S3xRvtNY31NKfto0lY6wqEAWJwCQHEtKPBPdnY95EbRnjK7B57Ou22EcRBCKAmYSP4NazqAkukQSJkb1JtXH6tqI%2BvdvKa2%2B3R2KWux4PD30b%2B%2FXes%2BwxNXEWAyn6xAXbMZ5sHXqlQGAV4T7gPM5cy9rmuIVPS3%2FKE8CO0BhIrbxWxfh0u6VR1SirJWmmNSoMCaVdTiT8cLFcq0avHoez5w3BrHdfv%2BjMLTt%2F70GOqUB7OeJ2QOv%2Fjyn6ku9WXjNsyCO3BFt32bDm4BqWpbw9H%2BuNHWAwgJsAn7uahYjoH%2F5Lgj9Bj8ResleGFjKhmxl5Oi0iD7wLR0fHh7Eq%2BJqhzBmPPXwJekyFy%2FVZk91xITkz6Fi3p1LHOnotb%2Bsm9zQmCuyRJeXOXnRkDw5L%2BkLFywQyaJi7efx1CrZ%2F8vFdaNv9uJYCpV455pW7znp6LFAPMTrIGMW&X-Amz-Signature=e474aee8b1fd2716c03597e92e0e6604d2150a85a559d7b0bcf81cc19b91e7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
