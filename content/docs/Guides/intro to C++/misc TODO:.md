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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDFIEIMN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHPHOWRSY2I3Lbq0pW0z5FKbqmq4C9iK3JZfKPNThEyiAiBLlvd%2F9UcUfuJBmgV6Dqd%2BzOANw2WhfSihK%2FfHkk%2F3jir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr%2FOjc4JSQRqYL9YqKtwD2dHhqE7MChOIyGnhvx%2FmK5%2Bdy5CAiuAu8wpDr6h3IU3U6GHTzfbaYHHWWLbjHE66AEBnfzbcKm8iIkIZ%2BZTObGHz97NWmddHhiOLdBwaDuMsPnrH8VCBVf32fThDu%2F6gSiRllf9vCd41TOZfxd5TGFwgWgqmxiU1jogCbeAwRUavf8pzpSpcmKn0xJLy5bGZ%2FEnmRKoYzfdNUF%2BjbRR9S9L81KYVMKLwHV2Iqd7r1F4BiaP4neqelbgyk%2FKsDSpQzN0ZE5i0aoPVh1XhgeCeg1p6I8%2F1WNJwi29JEjMRPV4hnIzuasx7H7f%2BR2KcaamoO7C%2F%2FILx%2BiHgTrcHW9q4h0JLv5aZVnjZGbRYUV6ZS%2FehpULjNqEVx70lCmRVQm6YAuOHFg17H5aYZpZd2abliqZNfLBFTlWAdmIwBcAjWAiFgjJDiq1AQYdEbEoAxfcKhTZi0bIp1c3o5zuTcPwsWLoAkTcsFBGCPEVRh6Hx3tIth8ITDxcweQvAYSordmzUmP4T2B%2BV2ga%2FS23gBMo9NPxru855dyJIIVQwatSOpVrVDcvvvFNIllIA9Bi%2FH6pqMSaF8hclwyib9YaZKLldL2lCEo5MO%2BIu1DwXvx2cSquYALQ3OlguTSLx5rowg7jBxAY6pgFBH3x0XhrykIKilZ7bRJ7sMFAGSqNtQSH3NaRyExUL5v7pxkxH5n60xWtruRjLvhiNIUHQ6EU0yMAyJlIw5kY%2Bsz4%2B5DvR6yiTRzl2T%2Fy9TQHE9pMKJ2%2FazQjcsyIzWdEggfDWdN4lzC6w5kGYkSfemq%2Fa0avxBt7vhIaH7hmtw85qzZBfvYp%2BQehGX9%2FX6emgblr0MkC00rLqmrCduTdfPKlZOuG4&X-Amz-Signature=0a71f125cfd6f9fbd9d7b5c45be528eb945501b11f766ddb1b5e580890d9450d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDFIEIMN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHPHOWRSY2I3Lbq0pW0z5FKbqmq4C9iK3JZfKPNThEyiAiBLlvd%2F9UcUfuJBmgV6Dqd%2BzOANw2WhfSihK%2FfHkk%2F3jir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr%2FOjc4JSQRqYL9YqKtwD2dHhqE7MChOIyGnhvx%2FmK5%2Bdy5CAiuAu8wpDr6h3IU3U6GHTzfbaYHHWWLbjHE66AEBnfzbcKm8iIkIZ%2BZTObGHz97NWmddHhiOLdBwaDuMsPnrH8VCBVf32fThDu%2F6gSiRllf9vCd41TOZfxd5TGFwgWgqmxiU1jogCbeAwRUavf8pzpSpcmKn0xJLy5bGZ%2FEnmRKoYzfdNUF%2BjbRR9S9L81KYVMKLwHV2Iqd7r1F4BiaP4neqelbgyk%2FKsDSpQzN0ZE5i0aoPVh1XhgeCeg1p6I8%2F1WNJwi29JEjMRPV4hnIzuasx7H7f%2BR2KcaamoO7C%2F%2FILx%2BiHgTrcHW9q4h0JLv5aZVnjZGbRYUV6ZS%2FehpULjNqEVx70lCmRVQm6YAuOHFg17H5aYZpZd2abliqZNfLBFTlWAdmIwBcAjWAiFgjJDiq1AQYdEbEoAxfcKhTZi0bIp1c3o5zuTcPwsWLoAkTcsFBGCPEVRh6Hx3tIth8ITDxcweQvAYSordmzUmP4T2B%2BV2ga%2FS23gBMo9NPxru855dyJIIVQwatSOpVrVDcvvvFNIllIA9Bi%2FH6pqMSaF8hclwyib9YaZKLldL2lCEo5MO%2BIu1DwXvx2cSquYALQ3OlguTSLx5rowg7jBxAY6pgFBH3x0XhrykIKilZ7bRJ7sMFAGSqNtQSH3NaRyExUL5v7pxkxH5n60xWtruRjLvhiNIUHQ6EU0yMAyJlIw5kY%2Bsz4%2B5DvR6yiTRzl2T%2Fy9TQHE9pMKJ2%2FazQjcsyIzWdEggfDWdN4lzC6w5kGYkSfemq%2Fa0avxBt7vhIaH7hmtw85qzZBfvYp%2BQehGX9%2FX6emgblr0MkC00rLqmrCduTdfPKlZOuG4&X-Amz-Signature=1b9862b6364d39c3e1a68a62ed4f8387a6e6cd09f0cd28fc96ec1dc467882a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
