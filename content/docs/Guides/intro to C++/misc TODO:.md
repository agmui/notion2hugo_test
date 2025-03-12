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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FEBEBC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCfsnL4zAizr5IPePzHARaj5iPFgOWv5Zb1sB22926UegIhAP0n9LM0eJinI7wHqQuOMbaJkoeUWo4lBbsxFgyFDRztKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ciI7TxPTqzzHL4sq3ANx1VTmKiKkRTm2YXdyy%2FCi7D1v7UUj8%2FVyYcexDQvQHz0n4CaDV1We2Ean8A%2Fz6x0dZjtRSEhoQf8HQMdt28z5NfgX%2FGoCjg4XkPFpItAFUoHNs5xL6pVBz92FI%2BTn7uxzMNtiD8DltO86ce0ZpbuYsldtzlKKgkjj730V8QVZaj3lq8Rqc2h51IJeEavmoSpqbspYSsI1ja3gXmEAq%2F3gLjQ%2FCt3XoIeQmSrOxvb8O2HwFhfuYDLXpQXM2uULiNf9Al4KX8Lib637oDJpbKuRQ4Js%2FnYcw3n8O8gL3LycF2fDdBIWrpD3ahrgQpR9AfGsfWgONWjYRllCXMdCamUHpogiVK15lWfFT9%2FxBg37P8H1e11wGdnL1GqdG74s0U9Bw3Ud99R3rq2c97964k0kQk5X65IcD94ohVXYwngJRQxW9Ne4nf6iEze5tMk7YD%2FO6Go2vL677RcOSmM95azD7ozzknAUNvMRQVRKoE5Q%2FGQsBLtpb5x1jZcK83ZDFHoELuBaogn63PAF1mFRNyIhqJRV5Q9lktjNASOH5KLLqFjrA117s1ckWsmKPHpGnjZDdEGAE%2BOiMkKGPmidhYeyNsnxph4FuoN%2FcTL0BFcWtT%2BroBqdoc3skDkV6jC3o8e%2BBjqkAU%2FOBpUj1fjEbQlkoLJxqvjWn2LNE4nIFkJVSc37z3J2dR15Ls1HPkADRnIg1mDW6euA84MoarzTHNRUBEeZGQCatgs0OJluzfG7sTFvCjCnjPtvYqqzl%2B9Nex%2B16E9%2Fnu1Ph23dbibjTtj4XnpnRELLQnn6dSAS2UZTp3YOJSntIabL%2FQe6Xs9huMA12AEa4PxmD2gzfgCPw3Y6rVRtLmSG9cNh&X-Amz-Signature=f6d47c95ce317f52bb3eed5367e1a8755ee73ca5518dabde7013c972d20299c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FEBEBC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCfsnL4zAizr5IPePzHARaj5iPFgOWv5Zb1sB22926UegIhAP0n9LM0eJinI7wHqQuOMbaJkoeUWo4lBbsxFgyFDRztKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5ciI7TxPTqzzHL4sq3ANx1VTmKiKkRTm2YXdyy%2FCi7D1v7UUj8%2FVyYcexDQvQHz0n4CaDV1We2Ean8A%2Fz6x0dZjtRSEhoQf8HQMdt28z5NfgX%2FGoCjg4XkPFpItAFUoHNs5xL6pVBz92FI%2BTn7uxzMNtiD8DltO86ce0ZpbuYsldtzlKKgkjj730V8QVZaj3lq8Rqc2h51IJeEavmoSpqbspYSsI1ja3gXmEAq%2F3gLjQ%2FCt3XoIeQmSrOxvb8O2HwFhfuYDLXpQXM2uULiNf9Al4KX8Lib637oDJpbKuRQ4Js%2FnYcw3n8O8gL3LycF2fDdBIWrpD3ahrgQpR9AfGsfWgONWjYRllCXMdCamUHpogiVK15lWfFT9%2FxBg37P8H1e11wGdnL1GqdG74s0U9Bw3Ud99R3rq2c97964k0kQk5X65IcD94ohVXYwngJRQxW9Ne4nf6iEze5tMk7YD%2FO6Go2vL677RcOSmM95azD7ozzknAUNvMRQVRKoE5Q%2FGQsBLtpb5x1jZcK83ZDFHoELuBaogn63PAF1mFRNyIhqJRV5Q9lktjNASOH5KLLqFjrA117s1ckWsmKPHpGnjZDdEGAE%2BOiMkKGPmidhYeyNsnxph4FuoN%2FcTL0BFcWtT%2BroBqdoc3skDkV6jC3o8e%2BBjqkAU%2FOBpUj1fjEbQlkoLJxqvjWn2LNE4nIFkJVSc37z3J2dR15Ls1HPkADRnIg1mDW6euA84MoarzTHNRUBEeZGQCatgs0OJluzfG7sTFvCjCnjPtvYqqzl%2B9Nex%2B16E9%2Fnu1Ph23dbibjTtj4XnpnRELLQnn6dSAS2UZTp3YOJSntIabL%2FQe6Xs9huMA12AEa4PxmD2gzfgCPw3Y6rVRtLmSG9cNh&X-Amz-Signature=c1fb029217f2d8703b9d5b7a08737efe57742d6edd0f4d99023e4c0f13bec87e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
