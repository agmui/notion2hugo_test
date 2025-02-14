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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYXTLHW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAGtxj7QJ0wXV7B0v%2Fipn37GkpFIIbNO3YEle4DfVn0wAiEA%2Fo0P%2BoQhHFKIInxcBazkYEbRtzOe7LIACsNCO6sihTkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDB%2BDowkBoGoAu8kCFSrcA8ttDuCaziEQOriBoj%2F9xA77NH1zFJ8t81Xb6SGTM4qUk6pzxIN8QsXaQ06f3EMd0gdQfVDuWufTBg7byfWpNk4RtqXjltRJz%2Bo8yaDsLtCiLUQPG60q6eZFXwl1gohwOTFAt1TVuk%2FVQiGhGnRsC%2FeEzaldjFSKoB663RrJIDXS0xBzvUivqELuslN8H%2FQ7EDXrAcsMlf7EQivz28Sjbhs8LNHsFkSy%2FRXPwtD8%2F5ARxrbNtM5jEvvmE1VUGVYl2FA2%2Fs6iUtslVj5xwWhNSpUigYieOfNssrHRgNhL1kWpYPPjVnJVrufaBBXIPmcj9LOrgQ00aVBx%2BimDHEMk08SsFroUwABMJvqDY1og6vyZxpezC70y49OZFEC9kNPHK7FwCK7HBPxKjw9%2FQIO%2FKXWDKp1nwMhqFy8P22M41h7D3eb%2FPXQBumdk%2FLFrR42PyDYUP8kYGBVz%2Fftqdss1BLvvMoAvyAv3gJPHvkfV2qH%2Bib7HJ5qEqA79dVk3A%2Bgbz%2FfNkSz%2Bv2haqMSNtmfzB42rgCGDtyqkZV49zPGJqbVvJs3iCnPbQ5C8fPiPzR8HcAma3u2PVK3UD%2FERJrWdvs9vNjmab7odIajpwJ24brt3pK6wTBLXrTGCR%2BPOMPnRvr0GOqUBnSi%2F%2F9NliYf2mAQ96z6TxGqrH3cGkaYSx0m9je1rpxkVB1aLoXD8vSyo%2FoJgi7wkkS5zBca%2FW9K0VUfmXaP5mUhD7e3QjTBmjoryF38lmjG%2F7LQjUVCrROKOaYD72etQrNewFfP7J9QnaRRLdKLf4QkMu68MG%2BrY7d4eaWrKq9Y5rkrxADiFm8Agrktn%2FqKrTFkxOi1tIKJGuDs0hoC1lronQdOU&X-Amz-Signature=b3b513c39e530417eda06e32b79a399256b2eddcff23bd6cdf5348eaa86bc7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYXTLHW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAGtxj7QJ0wXV7B0v%2Fipn37GkpFIIbNO3YEle4DfVn0wAiEA%2Fo0P%2BoQhHFKIInxcBazkYEbRtzOe7LIACsNCO6sihTkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDB%2BDowkBoGoAu8kCFSrcA8ttDuCaziEQOriBoj%2F9xA77NH1zFJ8t81Xb6SGTM4qUk6pzxIN8QsXaQ06f3EMd0gdQfVDuWufTBg7byfWpNk4RtqXjltRJz%2Bo8yaDsLtCiLUQPG60q6eZFXwl1gohwOTFAt1TVuk%2FVQiGhGnRsC%2FeEzaldjFSKoB663RrJIDXS0xBzvUivqELuslN8H%2FQ7EDXrAcsMlf7EQivz28Sjbhs8LNHsFkSy%2FRXPwtD8%2F5ARxrbNtM5jEvvmE1VUGVYl2FA2%2Fs6iUtslVj5xwWhNSpUigYieOfNssrHRgNhL1kWpYPPjVnJVrufaBBXIPmcj9LOrgQ00aVBx%2BimDHEMk08SsFroUwABMJvqDY1og6vyZxpezC70y49OZFEC9kNPHK7FwCK7HBPxKjw9%2FQIO%2FKXWDKp1nwMhqFy8P22M41h7D3eb%2FPXQBumdk%2FLFrR42PyDYUP8kYGBVz%2Fftqdss1BLvvMoAvyAv3gJPHvkfV2qH%2Bib7HJ5qEqA79dVk3A%2Bgbz%2FfNkSz%2Bv2haqMSNtmfzB42rgCGDtyqkZV49zPGJqbVvJs3iCnPbQ5C8fPiPzR8HcAma3u2PVK3UD%2FERJrWdvs9vNjmab7odIajpwJ24brt3pK6wTBLXrTGCR%2BPOMPnRvr0GOqUBnSi%2F%2F9NliYf2mAQ96z6TxGqrH3cGkaYSx0m9je1rpxkVB1aLoXD8vSyo%2FoJgi7wkkS5zBca%2FW9K0VUfmXaP5mUhD7e3QjTBmjoryF38lmjG%2F7LQjUVCrROKOaYD72etQrNewFfP7J9QnaRRLdKLf4QkMu68MG%2BrY7d4eaWrKq9Y5rkrxADiFm8Agrktn%2FqKrTFkxOi1tIKJGuDs0hoC1lronQdOU&X-Amz-Signature=70db294754b6accb74447fb9471dd9ef3f43acf60e51df01ca090945eb6c277c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
