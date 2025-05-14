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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIMCIKD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIANu3oBMq065h%2BZBVpANngkhHyda140Ay9ouAzC3du1kAiEA7jf57CT0oZr6IsOB6qrRcMEjSlMIs7RJY6qdBvFHmM8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPbxUPWFe40LHvsCAircA5lDMRVtAkehI7AxtcWalScE6tpJUq5WwLCvxZsq%2Ftt8xNGqiAIBHnvZx6aW6WvOJccKDVfyqvnxducG%2Fp%2FK8Mrz6FH5PVjETbcm1LIs%2BMuLYhoREK04Fp%2BdD5C49n%2BeCxW6cba3OOvA%2FmpPd6kl2%2BpSGV0xvnf%2BHoy0LdyTApjW8bb6hDnTB2d7S2aBLIiBPTSoUanbNa6mVnNpBhdbN945YbRGYb74%2FD4JR3%2BtpoSqtgoaepa6DwsZNo4qMNhcSKGsuh1ECyacMm7dWKRqJVAfYkdxLjYdK1VHN7yCzvqyHAXGZ0CCmb0tYvF75%2Fklk8293QSsDdGidZMmX012Ypm9ssXPkmZOG9NMMlNrBWKnNylkRf9IhLdO6Wb2tD2P%2FuMnSL4Xe9N07YRepLxnDCKTtUIhFXpmim8vH%2FGxyEmu5RjIWPG%2FKwaztHDjGAWr1bzdKDhoagnJMa%2FEOXXFgOWjh2nstN3fzC2X%2BufIeIcBtxvSYU%2FTl1Dj0XFiSfj0wboHxCCDsNFfQuT6Au3SKJgfPGlikSuI2EM4eeDcXYvMhpQZ3Pcj8vxyP2eiS%2BgF6rY8LdgIwxBQEbzrAd5h9Wrta2uQPn6tWWDX%2BpyK5PAMqXbS4DLdoF4Ywi5nMKqhlMEGOqUB6eIovyapYIpzNTjWniltii51XPPA%2BzBgjg0d7jXUAv8xOjMmVttpxBTPrhAkucULnrcemaHgSNxVCkjTrKB%2FBNRDHQZUerV8oLEy4FkOfChn7aPe1QwDwIttTknhfhtLNyaCx4EwV2e%2BFHI1xOpPggXweTodIY15jyEOChHfeHNvcHIvhMpWYVgi2F%2BHfUbkjSC73jggZFbJWmlnX7IWP0M%2FQRzM&X-Amz-Signature=312bc5873e42b9812b18286b9ac7d4cb7e1f1093f7b2811d42dffa772a11bc07&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIMCIKD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIANu3oBMq065h%2BZBVpANngkhHyda140Ay9ouAzC3du1kAiEA7jf57CT0oZr6IsOB6qrRcMEjSlMIs7RJY6qdBvFHmM8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPbxUPWFe40LHvsCAircA5lDMRVtAkehI7AxtcWalScE6tpJUq5WwLCvxZsq%2Ftt8xNGqiAIBHnvZx6aW6WvOJccKDVfyqvnxducG%2Fp%2FK8Mrz6FH5PVjETbcm1LIs%2BMuLYhoREK04Fp%2BdD5C49n%2BeCxW6cba3OOvA%2FmpPd6kl2%2BpSGV0xvnf%2BHoy0LdyTApjW8bb6hDnTB2d7S2aBLIiBPTSoUanbNa6mVnNpBhdbN945YbRGYb74%2FD4JR3%2BtpoSqtgoaepa6DwsZNo4qMNhcSKGsuh1ECyacMm7dWKRqJVAfYkdxLjYdK1VHN7yCzvqyHAXGZ0CCmb0tYvF75%2Fklk8293QSsDdGidZMmX012Ypm9ssXPkmZOG9NMMlNrBWKnNylkRf9IhLdO6Wb2tD2P%2FuMnSL4Xe9N07YRepLxnDCKTtUIhFXpmim8vH%2FGxyEmu5RjIWPG%2FKwaztHDjGAWr1bzdKDhoagnJMa%2FEOXXFgOWjh2nstN3fzC2X%2BufIeIcBtxvSYU%2FTl1Dj0XFiSfj0wboHxCCDsNFfQuT6Au3SKJgfPGlikSuI2EM4eeDcXYvMhpQZ3Pcj8vxyP2eiS%2BgF6rY8LdgIwxBQEbzrAd5h9Wrta2uQPn6tWWDX%2BpyK5PAMqXbS4DLdoF4Ywi5nMKqhlMEGOqUB6eIovyapYIpzNTjWniltii51XPPA%2BzBgjg0d7jXUAv8xOjMmVttpxBTPrhAkucULnrcemaHgSNxVCkjTrKB%2FBNRDHQZUerV8oLEy4FkOfChn7aPe1QwDwIttTknhfhtLNyaCx4EwV2e%2BFHI1xOpPggXweTodIY15jyEOChHfeHNvcHIvhMpWYVgi2F%2BHfUbkjSC73jggZFbJWmlnX7IWP0M%2FQRzM&X-Amz-Signature=c37852368a12a1b9ea799b87c114cc504d3ebb457dbd2b8fcf08168c255a495a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
