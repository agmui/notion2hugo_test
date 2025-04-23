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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRZVM6G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQChuoWKEV3CBzFNIJMqc5DN%2FMYr0dniK2iYkWneJio9mwIhAJ2IgMjik%2BdVZWWMUyohAyxdIWAinhdCGRLQ5FCBK7fjKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMWBnt2YL2Sm8yljkq3AP225hcQ08%2FjFYpeaVgbu70zQAWOg29GU8%2BR8vXTtKm1SLEWCRRi%2BIpg4x445lY2oIjeYBAEnDAYp74A9zSfSVL3K8MdppLeNa3qREGjdKabvtgsw7UOtNS4TCNn0kVknm%2B2a6YnH6LKzVADjTfL3Yk9hUbpcsbmDk1lAtkq%2FOIOVAGgfClzBOmid%2FKSn4n%2FUz1NSDPufQxLMDW8e3UQIwiT6xGGyRoVrVSc4s0u0TXiSCp%2FJzcffrdJnxYwdQfIvsHFbIhlDHd2O%2Fli3jT9NgGFRbJMOfuW8UY407lLItWGk3t%2FobbhwBsZBiQqY%2F%2BoGjXmAb7M39ury2dgM5o7J5O8zlBCW%2F7w8SP7AYTbtnYCtZU0N6Msf%2Fh%2FI%2BSItoQt8WqCoaMFWmX0YpsKYJizHQYkkEs2k3Kyfk143Nu7FpTwIg12wsCxDV6t4DkI5g%2FWr3lSlnEpXr4JJ7SjER7IzlHHrXaUaYXcbCX2U0Rgs35NRdIA3mO1XQjOxPCdFX3lUVFTy4Avc4vtb0HpUNYqcc2aAFpomWY1FenXDAJnqdJTcLx4RBnnn5Sh0xb2QiS8%2FBWqWXqtMMad5ugG7St9qSxleg1IrBCWAnYdMh9MJcuU0X9Go9d1xCzNoFd%2FTDdjaXABjqkAafYyjUFXL1Cs9BNbOu11PQiALlFQqi7qUHfh0qS1kVQidmv2%2B%2BWUPTjmLpkHKWDKRBjcuTAymwfQmHQ2f%2BwfHjlyAyalqIZ5u6DFQnhfBunWRiLvUMnvqhbSxFgLy3QEfqjHueMBKEXwMwZpegIoL1SmxGsmgtnseu7JomXrTYfBOyCac5%2BcopP4dw1vTPdfx%2F4ddiosG2b%2BoqJnZTFUpHYrZxG&X-Amz-Signature=721d167a5b81d1d1a23c619d21f6a64b2949a76c9ee39fc07fc4e518f88544bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRZVM6G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQChuoWKEV3CBzFNIJMqc5DN%2FMYr0dniK2iYkWneJio9mwIhAJ2IgMjik%2BdVZWWMUyohAyxdIWAinhdCGRLQ5FCBK7fjKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMWBnt2YL2Sm8yljkq3AP225hcQ08%2FjFYpeaVgbu70zQAWOg29GU8%2BR8vXTtKm1SLEWCRRi%2BIpg4x445lY2oIjeYBAEnDAYp74A9zSfSVL3K8MdppLeNa3qREGjdKabvtgsw7UOtNS4TCNn0kVknm%2B2a6YnH6LKzVADjTfL3Yk9hUbpcsbmDk1lAtkq%2FOIOVAGgfClzBOmid%2FKSn4n%2FUz1NSDPufQxLMDW8e3UQIwiT6xGGyRoVrVSc4s0u0TXiSCp%2FJzcffrdJnxYwdQfIvsHFbIhlDHd2O%2Fli3jT9NgGFRbJMOfuW8UY407lLItWGk3t%2FobbhwBsZBiQqY%2F%2BoGjXmAb7M39ury2dgM5o7J5O8zlBCW%2F7w8SP7AYTbtnYCtZU0N6Msf%2Fh%2FI%2BSItoQt8WqCoaMFWmX0YpsKYJizHQYkkEs2k3Kyfk143Nu7FpTwIg12wsCxDV6t4DkI5g%2FWr3lSlnEpXr4JJ7SjER7IzlHHrXaUaYXcbCX2U0Rgs35NRdIA3mO1XQjOxPCdFX3lUVFTy4Avc4vtb0HpUNYqcc2aAFpomWY1FenXDAJnqdJTcLx4RBnnn5Sh0xb2QiS8%2FBWqWXqtMMad5ugG7St9qSxleg1IrBCWAnYdMh9MJcuU0X9Go9d1xCzNoFd%2FTDdjaXABjqkAafYyjUFXL1Cs9BNbOu11PQiALlFQqi7qUHfh0qS1kVQidmv2%2B%2BWUPTjmLpkHKWDKRBjcuTAymwfQmHQ2f%2BwfHjlyAyalqIZ5u6DFQnhfBunWRiLvUMnvqhbSxFgLy3QEfqjHueMBKEXwMwZpegIoL1SmxGsmgtnseu7JomXrTYfBOyCac5%2BcopP4dw1vTPdfx%2F4ddiosG2b%2BoqJnZTFUpHYrZxG&X-Amz-Signature=6c78d5036c5469d1836d9a0218160ffef657a4743b91875dad1eb8ff0149400e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
