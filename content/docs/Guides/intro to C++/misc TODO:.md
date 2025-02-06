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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYHF7NZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCICr9pLyAoqcubPG0rzFAqo2RSjUGa%2F3OP4Ou1ba0SUjGAiAN7975ZjjjqkW0vAOBwIk2WLzaoG9zpghkcUcDyTfl%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM97xFcWZogcjZUfZAKtwDz3v%2FTy2HLNr%2FGLvNgaB3APMueyJNVCms7w3QZQIPSXg5pFcdMmRtHU8q5xtNYSm7lHPKUwVOfOeWryLtdK3XCK4xxRSg%2Fhh3ujCvOD6vHt%2FBsvn0Xa4FvFXoxhsJhrRFhExbC8mAD34zqIT92V8nLph5qtGGekTcGFqlxI6ZduRq8JNH4h%2FDzxobdvjNNhguIPMQHC5WVAfc11Xq%2FoNVEhXuufDsehzGCw%2BGatiKD0TvdR6tBvcTZhUGwEYh1QHDPUqHHa%2BJX8NY0J9Cm9XLNJC7SZg0yuiwtItcEo8j5E2j9qrL9RXtBVvKtIEIgGmIeYTkQQSuoGgoGVRToaQZUrmXrSryy8lKJmWeFghnWGrlDBQIWh5HAod7nmypJU6%2BxPSJ%2BZGPUweIkO4yDAjd6CpKfW%2FlntiLODl0zlR6v78aOoZzCTiRXCix0IcKtT1ZSEM0zL74ZXKjB4P8M6G7qCgFLxSt90HzOqIC%2BEMEPOVu1G0igxWFmPxN8z1lva7n42SjMhoNfussUjm%2BB3A7UxqfKq%2BZW2aBtuZtOzD84ol2GKeGwrlzdBc3TvnqsSdln1IQOyutiuaRTwl%2F3dETFI%2FzmQ%2BPJfuuZr3EUWS9ui383%2BS0vCDe7%2BhMh5owsp2TvQY6pgEE7X5aC0QMhoguIjbL2J3rBVbyjejAvqN9WqEYhKiklH6hdTbrkMEMPQySBAAFwO0299Jys%2FzL5lNsOS1XMihR0ct7AGZqMW%2FJ4%2F3C%2FnJ8DmztKgh9%2BorDcLVN6MtCEQXjM486TpzxhFgFG9AJv%2BmK4hVoEfcrAXtRScScvrOZz%2B5o4xy6Aj7yul3exAOT3FETbP%2F7XIpX5iTuYGp8hi5gMPiQ6PUt&X-Amz-Signature=99863db4167bfb03859c1df3bb0d5372db9edc08c314b7692070cab1aaab85fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYHF7NZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCICr9pLyAoqcubPG0rzFAqo2RSjUGa%2F3OP4Ou1ba0SUjGAiAN7975ZjjjqkW0vAOBwIk2WLzaoG9zpghkcUcDyTfl%2Bir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM97xFcWZogcjZUfZAKtwDz3v%2FTy2HLNr%2FGLvNgaB3APMueyJNVCms7w3QZQIPSXg5pFcdMmRtHU8q5xtNYSm7lHPKUwVOfOeWryLtdK3XCK4xxRSg%2Fhh3ujCvOD6vHt%2FBsvn0Xa4FvFXoxhsJhrRFhExbC8mAD34zqIT92V8nLph5qtGGekTcGFqlxI6ZduRq8JNH4h%2FDzxobdvjNNhguIPMQHC5WVAfc11Xq%2FoNVEhXuufDsehzGCw%2BGatiKD0TvdR6tBvcTZhUGwEYh1QHDPUqHHa%2BJX8NY0J9Cm9XLNJC7SZg0yuiwtItcEo8j5E2j9qrL9RXtBVvKtIEIgGmIeYTkQQSuoGgoGVRToaQZUrmXrSryy8lKJmWeFghnWGrlDBQIWh5HAod7nmypJU6%2BxPSJ%2BZGPUweIkO4yDAjd6CpKfW%2FlntiLODl0zlR6v78aOoZzCTiRXCix0IcKtT1ZSEM0zL74ZXKjB4P8M6G7qCgFLxSt90HzOqIC%2BEMEPOVu1G0igxWFmPxN8z1lva7n42SjMhoNfussUjm%2BB3A7UxqfKq%2BZW2aBtuZtOzD84ol2GKeGwrlzdBc3TvnqsSdln1IQOyutiuaRTwl%2F3dETFI%2FzmQ%2BPJfuuZr3EUWS9ui383%2BS0vCDe7%2BhMh5owsp2TvQY6pgEE7X5aC0QMhoguIjbL2J3rBVbyjejAvqN9WqEYhKiklH6hdTbrkMEMPQySBAAFwO0299Jys%2FzL5lNsOS1XMihR0ct7AGZqMW%2FJ4%2F3C%2FnJ8DmztKgh9%2BorDcLVN6MtCEQXjM486TpzxhFgFG9AJv%2BmK4hVoEfcrAXtRScScvrOZz%2B5o4xy6Aj7yul3exAOT3FETbP%2F7XIpX5iTuYGp8hi5gMPiQ6PUt&X-Amz-Signature=945915063efb3092691672c75abfd0212bb1c30fde118f5a9d63c6baa51908c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
