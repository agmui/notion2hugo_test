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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW4XROPD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRtAgLQUENBLIIy2LN%2Fzzk%2BTeLGPn5Ald8HC7nJYPehAiBY%2Foc%2Fb8XC9J4ucIF%2BvOiHmKLx87iir7xNSE53B8S3ViqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVIOXVLcBOcO2xplKtwDBASy%2BMwJNSH9mxdINbw1ykKOVMnAodBnlW%2FEp3lixDKlOrOOeo5nMqfcetNvD8vjzSrei10lacyGlk1rCLaFiqNOqP7jsHSXs12HDK5jCXMno35TDbDn8%2F9FAvauG24lBcRcD285wYIw0F6pr40Gvf%2FqLA8iTBY89IyAb9nNnYahmvYKxfsluZDns47Kf2upc6YHeFyrzJxiOVUUJde0qefzRRlK9KANjkD5QTdG6ZvSpL%2FU7eVYxzo%2Fl7MiJGsIcGMvf81AyFRdkSt4M4Ns5AnuHKtdM7SyMToFxytmrTgq0eh87YH%2F9pZSq1AwPCEqmaJdweQeyes5VHVWdt4eg9HDEn%2BmoaUyxQ6G60dgs6ySbExqIuFvJRTmi1ZQFcHdwwiFr85S89zEhCHeeQ4UR%2FhpPwDPliLW3kZc5u8uRx9EfgHe4Q9CHJtreghbRwcLWw27OlOYxHOggN7ZM2RCBNhUrL0seVXAc4RkMzJIL6ZpiggTt7spKldGxeYy9liWv90P3a%2FuY19cZut5F7eYwk4X%2B%2F%2BFfHN9ycu8%2FozKv4r0%2B2YbeOAJWMWEAtRJxAk2sxvutRS5nUA6VJAHZthZRiA0%2BLOVfEDwAhjQB7huJOjScm7%2BMwkkZNZe8TMw38urxAY6pgEOCHXSWJfbvy3MoMtVF8LzGbbdaWrbIm8jyvLTJG9cIK5%2Fj0ENhYCGFdNvvlvs1LTnpQ9q81O5nz0n4dQAopl6kjxRcNvWMKXrMLbwhOCFA%2F4uStozzS0J5Ca%2BfGjrPbMnmMcLO20oJWwFXuvLeCPIaGpPsEMq9wTEzLREidnP%2FgY9n2aJc1zM54bGDDT4NC7freZWdPEr%2B8ouQ6yKhoDRBNiAUp2S&X-Amz-Signature=1ce785e26f4a7fede4ae5b18f1bdf27820c3c9f3f160dcdd4a37b43c64224e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW4XROPD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRtAgLQUENBLIIy2LN%2Fzzk%2BTeLGPn5Ald8HC7nJYPehAiBY%2Foc%2Fb8XC9J4ucIF%2BvOiHmKLx87iir7xNSE53B8S3ViqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVIOXVLcBOcO2xplKtwDBASy%2BMwJNSH9mxdINbw1ykKOVMnAodBnlW%2FEp3lixDKlOrOOeo5nMqfcetNvD8vjzSrei10lacyGlk1rCLaFiqNOqP7jsHSXs12HDK5jCXMno35TDbDn8%2F9FAvauG24lBcRcD285wYIw0F6pr40Gvf%2FqLA8iTBY89IyAb9nNnYahmvYKxfsluZDns47Kf2upc6YHeFyrzJxiOVUUJde0qefzRRlK9KANjkD5QTdG6ZvSpL%2FU7eVYxzo%2Fl7MiJGsIcGMvf81AyFRdkSt4M4Ns5AnuHKtdM7SyMToFxytmrTgq0eh87YH%2F9pZSq1AwPCEqmaJdweQeyes5VHVWdt4eg9HDEn%2BmoaUyxQ6G60dgs6ySbExqIuFvJRTmi1ZQFcHdwwiFr85S89zEhCHeeQ4UR%2FhpPwDPliLW3kZc5u8uRx9EfgHe4Q9CHJtreghbRwcLWw27OlOYxHOggN7ZM2RCBNhUrL0seVXAc4RkMzJIL6ZpiggTt7spKldGxeYy9liWv90P3a%2FuY19cZut5F7eYwk4X%2B%2F%2BFfHN9ycu8%2FozKv4r0%2B2YbeOAJWMWEAtRJxAk2sxvutRS5nUA6VJAHZthZRiA0%2BLOVfEDwAhjQB7huJOjScm7%2BMwkkZNZe8TMw38urxAY6pgEOCHXSWJfbvy3MoMtVF8LzGbbdaWrbIm8jyvLTJG9cIK5%2Fj0ENhYCGFdNvvlvs1LTnpQ9q81O5nz0n4dQAopl6kjxRcNvWMKXrMLbwhOCFA%2F4uStozzS0J5Ca%2BfGjrPbMnmMcLO20oJWwFXuvLeCPIaGpPsEMq9wTEzLREidnP%2FgY9n2aJc1zM54bGDDT4NC7freZWdPEr%2B8ouQ6yKhoDRBNiAUp2S&X-Amz-Signature=1c1963dbbfd9c0830aeb8d4fdaada1ba36f2efecd329bf1e1f4eeaad0ffbf3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
