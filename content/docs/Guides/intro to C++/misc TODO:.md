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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YRECT7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyfJ5Nm9lRimHE96mv5h0OBQ9LlGCaYAhYdG%2FjFMUUAIhAP5EEEYqQ8zkDDXgaW5Mv%2BtG6HjUwLSGFSuiF9z%2FCVfuKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4n%2BNM2Uq9MNVrx0oq3APTtWmETmCcCDLGWW0gfNqQMQX0SVf7147yTbyB%2BIXJ4tM8z6k%2BAK1SqFxLbcSWiIx3gFC4eKT4LTEAGjLo3oaX8jEQSZCeN4poeadQtYH%2B7Kh9zN7z%2FAPlU%2FoLszCO4KMMrFwJ5Qt17BcrPcyEyz3bbaKZqUi%2B%2FWIm7gj%2Bkf2GV4Yf52W6Cr%2BHmEc7Jl0Scj1%2FTFqmPZlAbbbpWUQV9fn8xPr32HdPBzGTKNZiCRoI7YNAwf8Y8Q%2FEB%2Fvoq3Mk6tF03S%2BDnOQUcxouAjMgDdr8rV983lRDCggRsUi%2BLO%2Bhp6ObocyOduyc8TbkD1APKPXFC898yzkeJItCIEI66lAcG41%2BaBycBZ01EAPDg8hL3kwBEibnFrw8BuN3CNUuKuMFL54OKs%2BN5Ud4N%2B5haGID0UwRB3frhsEGZmIBOLu7FLP7QvbSIKsPEIuA5iBF00TcpSRYEgO58crE5umn%2B9l0Khenz1MIiSTdornkjTtzlZc6CSb%2BBka6lPS7s4wdYbjPgiz7jTSN2wbkUCSRyYIXGJdnmrmjbipmqeYN%2B41oPhSvb%2F79FneA0CZv%2FLyHDiw%2BeFkzSiGVXu2ViZjwW%2FNe6ueZdFElyFsBZVPBKgODFWiS3PoOoDfqg4CnOzCOlfW8BjqkAaBBARtDhat2ineAvi6WWtkukvk3xCzD6y4V6KTLNh4T%2FfzD98imGI%2Feulgia8Q69d9Ev0ZsZ%2BkjeXtz7v4AAvbSkLOPwCUqI2emuNIQCxYH0TWfb%2F0PfomJZoZ3UcnTsEPMxF7gnIeK99G3ymluVNlcl02x43oTNrhpAm%2FtBT3zkgAK9daYzkpjbNPJfp42Cqga7um%2BfaFn7f4INxUClM0c63qF&X-Amz-Signature=3cf5bca3f141c35082b3bb43477b0abec120b6262b3f6e8c576b81641b09ca33&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YRECT7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyfJ5Nm9lRimHE96mv5h0OBQ9LlGCaYAhYdG%2FjFMUUAIhAP5EEEYqQ8zkDDXgaW5Mv%2BtG6HjUwLSGFSuiF9z%2FCVfuKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4n%2BNM2Uq9MNVrx0oq3APTtWmETmCcCDLGWW0gfNqQMQX0SVf7147yTbyB%2BIXJ4tM8z6k%2BAK1SqFxLbcSWiIx3gFC4eKT4LTEAGjLo3oaX8jEQSZCeN4poeadQtYH%2B7Kh9zN7z%2FAPlU%2FoLszCO4KMMrFwJ5Qt17BcrPcyEyz3bbaKZqUi%2B%2FWIm7gj%2Bkf2GV4Yf52W6Cr%2BHmEc7Jl0Scj1%2FTFqmPZlAbbbpWUQV9fn8xPr32HdPBzGTKNZiCRoI7YNAwf8Y8Q%2FEB%2Fvoq3Mk6tF03S%2BDnOQUcxouAjMgDdr8rV983lRDCggRsUi%2BLO%2Bhp6ObocyOduyc8TbkD1APKPXFC898yzkeJItCIEI66lAcG41%2BaBycBZ01EAPDg8hL3kwBEibnFrw8BuN3CNUuKuMFL54OKs%2BN5Ud4N%2B5haGID0UwRB3frhsEGZmIBOLu7FLP7QvbSIKsPEIuA5iBF00TcpSRYEgO58crE5umn%2B9l0Khenz1MIiSTdornkjTtzlZc6CSb%2BBka6lPS7s4wdYbjPgiz7jTSN2wbkUCSRyYIXGJdnmrmjbipmqeYN%2B41oPhSvb%2F79FneA0CZv%2FLyHDiw%2BeFkzSiGVXu2ViZjwW%2FNe6ueZdFElyFsBZVPBKgODFWiS3PoOoDfqg4CnOzCOlfW8BjqkAaBBARtDhat2ineAvi6WWtkukvk3xCzD6y4V6KTLNh4T%2FfzD98imGI%2Feulgia8Q69d9Ev0ZsZ%2BkjeXtz7v4AAvbSkLOPwCUqI2emuNIQCxYH0TWfb%2F0PfomJZoZ3UcnTsEPMxF7gnIeK99G3ymluVNlcl02x43oTNrhpAm%2FtBT3zkgAK9daYzkpjbNPJfp42Cqga7um%2BfaFn7f4INxUClM0c63qF&X-Amz-Signature=0cd57ec8fae91e3c5ab28c57973ef4ccb92e025012a2f23da110a58b4f7b95be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
