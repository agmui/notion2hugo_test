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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORGOOKM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSCIi6Kbil%2F5RO9J1Gprlz8ZMK%2B77slURLuJMAyM%2BcAIgccoKy5hImA5vbVV6JyvLTIBMfvCQbuFlzmw%2BcCgjpDMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCOycj%2FQsuwVJ5vSMyrcAy1amVRdXczTN9QQJySk5f%2Fx4NXnofJjWr%2BxjNf6elNSR7tjomSd3cVp5NzTvg6pJ9G7R9IRQz0MS1fAyuzBXSz%2BgFMPd7VHYnWY%2BFiRi0eS%2FZe344fHHjhdPaGTwa2ZM1vLsxvaLA9tFUyyM0crFEK%2FXeBCTG0Aqtz%2FMOtFF8Ljh7KOiQBpihwrNQHAxrT5WUNopi%2B5YPgXLr1kej%2BbX6QUNjhacEnm9NNiSds438HHQgDDEqiPKvoDG83lUycLbhLW3Emjnf7CYLkhEbujKfHHd%2Bapja8DcaI0K%2Fnb6KqoUxPKnkddFEZjdp6GhQPesfhZ8L6tTMdRd1qqgabL9fclA9iL1DBTvCnF9tfM648c7M5P3hu5Y02xOnKTLDw%2FYnOWT576AEq%2Fj5GJw8cP0B6SPDpfyM544Q15%2F0qftLXMb6uMsoLekic4tyXdWlm%2BjjGgHvZcZNwZ1bKk0APFdNGrnKLBD2bA6aLsIsetakT9w9z0NSJcSnvS%2Fxhy7xmKAWnt1x7NZYVJ%2FF6XRWdpTQDXNhv2khKzLSnks32grQaJjAdG7rU8qXb6B8X42zuzqcNdYGpe5seg20bb1qkviwtlqoCEALRbbeRz3mW1qpkmD63guhCWuVrnBIINMMiX6MAGOqUBqiEnp%2BxDorF3JimzVYksZVdMJ3F%2FDlOzHn7%2BG8RCg1l2qY%2FxJVekQYlX2ks%2FIDH4kniKF2evhQBMtpcceNxNp0GiuegPudYBOVtSNXIwocScSog3TQ4Kf1kRuuNHFNgyYF%2FZedOM75XmuyalSBGLzcYBLn3jhC%2BbHWtMCsDIdcA0hTkseJZKO11oNGWGaotO%2BqezyiuQk3%2FVrnucGbKtCfv13ETD&X-Amz-Signature=5a131ccbdc9be64992a449d011a406b1ef8362ca88a3b91f4c2579d005a70382&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORGOOKM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSCIi6Kbil%2F5RO9J1Gprlz8ZMK%2B77slURLuJMAyM%2BcAIgccoKy5hImA5vbVV6JyvLTIBMfvCQbuFlzmw%2BcCgjpDMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCOycj%2FQsuwVJ5vSMyrcAy1amVRdXczTN9QQJySk5f%2Fx4NXnofJjWr%2BxjNf6elNSR7tjomSd3cVp5NzTvg6pJ9G7R9IRQz0MS1fAyuzBXSz%2BgFMPd7VHYnWY%2BFiRi0eS%2FZe344fHHjhdPaGTwa2ZM1vLsxvaLA9tFUyyM0crFEK%2FXeBCTG0Aqtz%2FMOtFF8Ljh7KOiQBpihwrNQHAxrT5WUNopi%2B5YPgXLr1kej%2BbX6QUNjhacEnm9NNiSds438HHQgDDEqiPKvoDG83lUycLbhLW3Emjnf7CYLkhEbujKfHHd%2Bapja8DcaI0K%2Fnb6KqoUxPKnkddFEZjdp6GhQPesfhZ8L6tTMdRd1qqgabL9fclA9iL1DBTvCnF9tfM648c7M5P3hu5Y02xOnKTLDw%2FYnOWT576AEq%2Fj5GJw8cP0B6SPDpfyM544Q15%2F0qftLXMb6uMsoLekic4tyXdWlm%2BjjGgHvZcZNwZ1bKk0APFdNGrnKLBD2bA6aLsIsetakT9w9z0NSJcSnvS%2Fxhy7xmKAWnt1x7NZYVJ%2FF6XRWdpTQDXNhv2khKzLSnks32grQaJjAdG7rU8qXb6B8X42zuzqcNdYGpe5seg20bb1qkviwtlqoCEALRbbeRz3mW1qpkmD63guhCWuVrnBIINMMiX6MAGOqUBqiEnp%2BxDorF3JimzVYksZVdMJ3F%2FDlOzHn7%2BG8RCg1l2qY%2FxJVekQYlX2ks%2FIDH4kniKF2evhQBMtpcceNxNp0GiuegPudYBOVtSNXIwocScSog3TQ4Kf1kRuuNHFNgyYF%2FZedOM75XmuyalSBGLzcYBLn3jhC%2BbHWtMCsDIdcA0hTkseJZKO11oNGWGaotO%2BqezyiuQk3%2FVrnucGbKtCfv13ETD&X-Amz-Signature=a023ea9b2f6ca4aac3425e401c1de39f8206618db764844052c7b7197391c4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
