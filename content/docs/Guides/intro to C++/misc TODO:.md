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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUXPVY2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6krpGLb%2FrLsaEF7vlRon8UyI1DgPDhYBed4DIpucvfQIhAIXZFJcGMEJ3qFPOSrPGT%2B1Hxjbl%2BKcWIrBO4Q8pBsrxKv8DCCwQABoMNjM3NDIzMTgzODA1Igxt5SbwgAwJJlyRds0q3AMyEHwhwZVe%2BhQ%2BOVFTzDCy%2Bfv0x8HGdrEhUQL%2Bll9p5jm13lgtfuboc283GjN6IltkF2r4Ot3yO1S2N3DBgo9W648%2BGnybEfFHuYXiLlsVVdIpgtABmGTCB3vaSr7njgMZbW1WwVsTA%2FlhcN0FeaKf2ZSD8JF%2B%2B72UZ%2F9lzp4A3%2BH4sRruh01EsrbENFJJfRqTjcUbjPJ%2FRQhJfjEJaFqw8fiBMXjMiK%2BghTDpq3hKOXFKVT4ATOBzyxvu6Fyi%2FCEv%2BhSTqeZzTGEOoe7%2BW73C9C4fpir34s0QugnGGGgKKGjVa9QeD%2FdE8UmRtnZfFvoueohGZbdQJP1QiuCdAmmL%2FGsiaA2XvwnYHn4GkeEFrOWwUc5AY4ph0JImy36tHiHIwvDfeRhZ6PFK7bpNcpSs1VB5xNRycNJ1bCadXEMX3E34Ew6RaHfj8KJtz%2F5aecv3DstRQIzERya5RIybtmqkdpIToDCvtvwE1gm0xDqSY4VdDkE0gaB0vRupfDubethChFcmpDNj0%2BdCqLmrwwmiDYtGuSW2drWOITWSp%2Feo0vKvizzIRXxni9meBO3lUmBIJJsqoHoOdC7j5I4TdY5p%2BQ7hvx1D%2Blqy6tLCTfxSvLZEaO6jxGp1KNG6qjCh2dq%2BBjqkAaqBqsHGrW37uKHIdnYo5c%2Fi5lJdaPQ4CNAzNp4so8OyzOcLvYlmMJz5otXxkDp2REVIr%2F1TY1q7%2B%2BZsfpbzjBCZusKiSbGhFWyzTCGZcz9WkxZEJblPg9TP7tv25AlguVcSEqkB76Y9AW5RpqcPMg6FLpJGxIzaUJJ%2FW49fL%2Ft%2FRpVZ24xZxDP3IxtXh4PVLqCRibzoWc0Fr4of99yc7Adzmcm0&X-Amz-Signature=baf60c4bb3015cb92df1a815d35ccb07c1e46d610da73c3135319028e4b20422&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUXPVY2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6krpGLb%2FrLsaEF7vlRon8UyI1DgPDhYBed4DIpucvfQIhAIXZFJcGMEJ3qFPOSrPGT%2B1Hxjbl%2BKcWIrBO4Q8pBsrxKv8DCCwQABoMNjM3NDIzMTgzODA1Igxt5SbwgAwJJlyRds0q3AMyEHwhwZVe%2BhQ%2BOVFTzDCy%2Bfv0x8HGdrEhUQL%2Bll9p5jm13lgtfuboc283GjN6IltkF2r4Ot3yO1S2N3DBgo9W648%2BGnybEfFHuYXiLlsVVdIpgtABmGTCB3vaSr7njgMZbW1WwVsTA%2FlhcN0FeaKf2ZSD8JF%2B%2B72UZ%2F9lzp4A3%2BH4sRruh01EsrbENFJJfRqTjcUbjPJ%2FRQhJfjEJaFqw8fiBMXjMiK%2BghTDpq3hKOXFKVT4ATOBzyxvu6Fyi%2FCEv%2BhSTqeZzTGEOoe7%2BW73C9C4fpir34s0QugnGGGgKKGjVa9QeD%2FdE8UmRtnZfFvoueohGZbdQJP1QiuCdAmmL%2FGsiaA2XvwnYHn4GkeEFrOWwUc5AY4ph0JImy36tHiHIwvDfeRhZ6PFK7bpNcpSs1VB5xNRycNJ1bCadXEMX3E34Ew6RaHfj8KJtz%2F5aecv3DstRQIzERya5RIybtmqkdpIToDCvtvwE1gm0xDqSY4VdDkE0gaB0vRupfDubethChFcmpDNj0%2BdCqLmrwwmiDYtGuSW2drWOITWSp%2Feo0vKvizzIRXxni9meBO3lUmBIJJsqoHoOdC7j5I4TdY5p%2BQ7hvx1D%2Blqy6tLCTfxSvLZEaO6jxGp1KNG6qjCh2dq%2BBjqkAaqBqsHGrW37uKHIdnYo5c%2Fi5lJdaPQ4CNAzNp4so8OyzOcLvYlmMJz5otXxkDp2REVIr%2F1TY1q7%2B%2BZsfpbzjBCZusKiSbGhFWyzTCGZcz9WkxZEJblPg9TP7tv25AlguVcSEqkB76Y9AW5RpqcPMg6FLpJGxIzaUJJ%2FW49fL%2Ft%2FRpVZ24xZxDP3IxtXh4PVLqCRibzoWc0Fr4of99yc7Adzmcm0&X-Amz-Signature=47ca2a22c4341459f5267632ecdc49f710172368a5d4653df4e9070bd3602ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
