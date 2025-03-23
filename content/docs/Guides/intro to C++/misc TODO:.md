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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXTU4TW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD7Sy9r66xOXQPbNE3qSdFu93LKEb%2FWXd1ktiKO89rBYQIhAJIUyxvPhirL3d%2Bpqj4DnQbcffSymTSjNZ9RmWuIK8FBKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2LtdBkgFBTfSa7UAq3AM4Ap%2BoPS5yqqaYSG2MdCLaNZ8lkfp2PjU3SlH9PYkUOCcG26YSuwjcnuRAPdiCq3ov5wgw05BgNubUYk17kdBT%2Bz5DtBkAA1JW6bA7OPSpRMpx53ArRvOgIScBvOmumcPmSlol5ZabOTBJWZ8o26Ika%2F2OdyCX%2F2db%2Fppjp1Xa3d1r%2FppZ4ztQBaVSouxSeb3OSaZBl3S45dNhFam%2F5idy1UrEaTNjcK18qGQ5T7ilT%2BmP1LSN1dzhurmls86gLiybGN0rMtfHCWM1dQ%2FhXoI8D8U8bOVaCRinC57MrBh5cMDUjXilWN8W1ZnYuUYoCO9Kiv6W4DP%2B%2BI1uVhagYR0dvNfuL%2BZHAy%2FwjN3413Y3kOgkEvCuzQdDdlrVP3ZsErlxnzn1RST2p0Q0YTkXNRNfXj%2FV1Fo%2B0Rgouv2U0B%2Fev8vufRnFXCxw7DN8zm8McDZbWf6TzfEGI5WGkob%2Bz8wNIbX90NHJIzlPo2ENxYzfK7sPKqwHMFGGT4rAz%2BQ7RYBWiTrW2uTJykgcCqAxKSEaYTBTE5TRXRS7Sbdkgfwouu98fXsne83uhxC7nuZZn7%2B1jKB%2F7b9204cvLZUeVioLjrpcoNOrS%2BBhy%2FlPoY149cisd6CbWJwYE3sWSTC7tvy%2BBjqkAQ1RKPbmjPfTbrNLLwwgWICfu0MK5vMAjB4BhMf2BRNTY0RKBHLUcFUKH1yRhmgZVVUwNSsyu7JJPB0yHAoLVsamanGxsRPlm%2F2UNhOMOtSyhbjbhSfNh8aXaOL4PmioaNQdecD%2BeCh7NXQPXxElDGHeQquYjo9S0M9yIjC%2FQT1q5YpH0FD6UVEeGyP8yUt3mOOgJkgdz37kAt5KkxG5H%2F05Add9&X-Amz-Signature=127f6cd69f6ffa93e54d106ad330b7d5ddfdad84632afa34107ac2974f253c78&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXTU4TW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD7Sy9r66xOXQPbNE3qSdFu93LKEb%2FWXd1ktiKO89rBYQIhAJIUyxvPhirL3d%2Bpqj4DnQbcffSymTSjNZ9RmWuIK8FBKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2LtdBkgFBTfSa7UAq3AM4Ap%2BoPS5yqqaYSG2MdCLaNZ8lkfp2PjU3SlH9PYkUOCcG26YSuwjcnuRAPdiCq3ov5wgw05BgNubUYk17kdBT%2Bz5DtBkAA1JW6bA7OPSpRMpx53ArRvOgIScBvOmumcPmSlol5ZabOTBJWZ8o26Ika%2F2OdyCX%2F2db%2Fppjp1Xa3d1r%2FppZ4ztQBaVSouxSeb3OSaZBl3S45dNhFam%2F5idy1UrEaTNjcK18qGQ5T7ilT%2BmP1LSN1dzhurmls86gLiybGN0rMtfHCWM1dQ%2FhXoI8D8U8bOVaCRinC57MrBh5cMDUjXilWN8W1ZnYuUYoCO9Kiv6W4DP%2B%2BI1uVhagYR0dvNfuL%2BZHAy%2FwjN3413Y3kOgkEvCuzQdDdlrVP3ZsErlxnzn1RST2p0Q0YTkXNRNfXj%2FV1Fo%2B0Rgouv2U0B%2Fev8vufRnFXCxw7DN8zm8McDZbWf6TzfEGI5WGkob%2Bz8wNIbX90NHJIzlPo2ENxYzfK7sPKqwHMFGGT4rAz%2BQ7RYBWiTrW2uTJykgcCqAxKSEaYTBTE5TRXRS7Sbdkgfwouu98fXsne83uhxC7nuZZn7%2B1jKB%2F7b9204cvLZUeVioLjrpcoNOrS%2BBhy%2FlPoY149cisd6CbWJwYE3sWSTC7tvy%2BBjqkAQ1RKPbmjPfTbrNLLwwgWICfu0MK5vMAjB4BhMf2BRNTY0RKBHLUcFUKH1yRhmgZVVUwNSsyu7JJPB0yHAoLVsamanGxsRPlm%2F2UNhOMOtSyhbjbhSfNh8aXaOL4PmioaNQdecD%2BeCh7NXQPXxElDGHeQquYjo9S0M9yIjC%2FQT1q5YpH0FD6UVEeGyP8yUt3mOOgJkgdz37kAt5KkxG5H%2F05Add9&X-Amz-Signature=2375390b05353d03ae8499c8d51e22f10f2f2a9c9755ddc9eed5c77e6d8c6145&X-Amz-SignedHeaders=host&x-id=GetObject)

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
