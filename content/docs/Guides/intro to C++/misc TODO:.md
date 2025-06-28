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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHYNSGM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnhwfrulVVpKsOL6J5RHKUhyiPjT9TK%2BER31%2BHbOnocAIhAJdhQZyOimUbn%2F%2BGATa9bR%2BxyfisqaasLK7gkXZmWjeQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7DRmq%2FT4HZ9Wi9tIq3AMOrq2xuzAJbSdSzS6FanUieHZyIXGEhDKWO3twTuPUjCKRFhd9Lrq8DjAUpz9SMcEH%2F3vwwEeJbeI%2Blf1%2B9gEHI3ECfAZfaFzU2bcXzhjLa%2BIsylMAdVs0W5FzrIWfypVVQb8DV61C834n3Zi5iM50c%2BcXA7izrdIvUlIe2KODLoEUMEyUxGI56GdMZl1o6ISurq7xP%2BtxATu9NbHudAFOgYqhY1NLf8tyJUbrTaK7xBZ7Me5uG4FJwz87cOo7%2F4h4z5zzrxTndXoPbEkZVvqD2nPUHZd4eJlN6iTqlrDOaPMpIxLdyGbPMy9x0V8EvCG2MODNcotbQ5795g0HNwN%2FuFPFN9qZhsMtuZYpBKuIWsjWNUM1%2B%2B78xsd%2FFiUP2AMhFatwfPQoGMY0SiqFnELjhYyVRsf%2BMsRuW1vH7N0OoPuo4CinjMKhCdHgUn%2Fwyd9sX4qWDvoTzj%2BRfqwe50DqAXYJ59ox4ordLO1Gc2G6YDDKx9zWFgUMokibHsTqTceDKpYZ2MiIamQfaPrnWZkAKi%2Bt2sEHXowEoSG%2Fl0fgw3QVp9AmFG6BM5HemW9CPjlPq07eoI7mxt3n5X9Kl5Jxr3Qf8piO2bmi4r7uxyAccwztAQ74Qh%2BwXqX%2B4jC89IDDBjqkAY%2BTGlZVoJNzKvSc8obWY4vTogbdPTTykWF4ezrvFIJIy%2BLDOUAdfx2zm66I8P1otbUl9YlgPr8boEmYk5YARXrGICTWE8eQ5GW0tDlLkUdIb2AtcwDoqSXkFwCBpGduOC0MUbxdIrnfiVY3kodVjog2A48k7wZYW3GLuFY4fV%2FdLQ1Pbtfs8QKlVgE7pc1Vlp2ja2GWcuYyjB%2Fl9WPgEe0Sji60&X-Amz-Signature=68366b3aa8c993360c6470c2aad090e51e7872abc5b00bdc3a23b21ceb45cca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHYNSGM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnhwfrulVVpKsOL6J5RHKUhyiPjT9TK%2BER31%2BHbOnocAIhAJdhQZyOimUbn%2F%2BGATa9bR%2BxyfisqaasLK7gkXZmWjeQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7DRmq%2FT4HZ9Wi9tIq3AMOrq2xuzAJbSdSzS6FanUieHZyIXGEhDKWO3twTuPUjCKRFhd9Lrq8DjAUpz9SMcEH%2F3vwwEeJbeI%2Blf1%2B9gEHI3ECfAZfaFzU2bcXzhjLa%2BIsylMAdVs0W5FzrIWfypVVQb8DV61C834n3Zi5iM50c%2BcXA7izrdIvUlIe2KODLoEUMEyUxGI56GdMZl1o6ISurq7xP%2BtxATu9NbHudAFOgYqhY1NLf8tyJUbrTaK7xBZ7Me5uG4FJwz87cOo7%2F4h4z5zzrxTndXoPbEkZVvqD2nPUHZd4eJlN6iTqlrDOaPMpIxLdyGbPMy9x0V8EvCG2MODNcotbQ5795g0HNwN%2FuFPFN9qZhsMtuZYpBKuIWsjWNUM1%2B%2B78xsd%2FFiUP2AMhFatwfPQoGMY0SiqFnELjhYyVRsf%2BMsRuW1vH7N0OoPuo4CinjMKhCdHgUn%2Fwyd9sX4qWDvoTzj%2BRfqwe50DqAXYJ59ox4ordLO1Gc2G6YDDKx9zWFgUMokibHsTqTceDKpYZ2MiIamQfaPrnWZkAKi%2Bt2sEHXowEoSG%2Fl0fgw3QVp9AmFG6BM5HemW9CPjlPq07eoI7mxt3n5X9Kl5Jxr3Qf8piO2bmi4r7uxyAccwztAQ74Qh%2BwXqX%2B4jC89IDDBjqkAY%2BTGlZVoJNzKvSc8obWY4vTogbdPTTykWF4ezrvFIJIy%2BLDOUAdfx2zm66I8P1otbUl9YlgPr8boEmYk5YARXrGICTWE8eQ5GW0tDlLkUdIb2AtcwDoqSXkFwCBpGduOC0MUbxdIrnfiVY3kodVjog2A48k7wZYW3GLuFY4fV%2FdLQ1Pbtfs8QKlVgE7pc1Vlp2ja2GWcuYyjB%2Fl9WPgEe0Sji60&X-Amz-Signature=d08256fb2fc35a3c3007cb69b7d86c6406d67a51fd6d7b9c5557d05c8b35ed00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
