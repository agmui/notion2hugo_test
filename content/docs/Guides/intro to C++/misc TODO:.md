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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBOSFXV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pJm4i1CCY7%2FQaNiqo2phR8LWhct6Lo5AE36ix6PTNwIhAIBGpYKaKuBa9QcrIcTLm0GqPh63TDtLZsO9jl45TQ9pKv8DCE0QABoMNjM3NDIzMTgzODA1IgxEsoey%2BgCnnZUu%2BZ0q3APHTUIJX7pO5ci6Rf9Z39YtRA9KQGnz8m%2B0MvqXsgwZH29Ubv7p6gKv3Pk6gMvmX9kYGJJ8pX5Xw9hzzkEj2WDx8DBfTYkH9ddP3qZFGw5zJI8ih4ZZQcsACNbTG8X0nPfYmdQWvq6jZ0sF5INfNsKsmv8doV4z9K6SxYfCa6YwGnRrqdmD%2BNJuOfYjqXtxeSI6u0c9LKboH9PiIORKwi2BuOhBFC%2Fw3nwa08j3WSPeZCc9W0q2FGc2nrZw7QrtzWfkiggecU00vf4XsdYgePoCjasyonlZ%2FgFVzTSFYRrNc6D2Hp7w%2FHCnq5R1MibtW%2BvtmpRmFbQjNMZF8z8hfBI6mRhYiD2jOL7Wi1mjLUrVfX1vEdwM1DOiimhXmX6g09ZD%2FhZELBwkF45Ge7FfmVZF2xKutRCNHSgJjDGxGVKFMTpXhJX7OIrreMJ9KTtMINgstDboquCLsm4jSVKt0L2sy3elDDtepZVWMwUiETGkyiBGplJRJnt70ShnQVN2NEpqGuiyW83htd0%2FTCW7wTis0pzdcMHIMONClmNGdQiP2IaJM2%2BTlYzrsn%2B%2Fz8Moz4q2mKjv7Cistg6H3idNfzesTTU%2BPgEINPe4CtMUIxfRM9q7HvPeatB5StD%2FHjCk3Za%2FBjqkAXwmoVPi7NfucLlabke7vOdKxB7GluK84QWDGWRFGaejNn%2BmF1ubyLa8rF2vdJtJHnqcbObViWgKWTNl%2FvQyoNAkKxp8AAFubAVoe%2B1bNQQfmXL2e6%2FWmLB641C4IACB%2BZYOyJ%2B7v0NSXiXDfCPs5a5nyTBgv5iBskZKRfBXYiOBWSvjPGh424Tj3P6o2CPTqFw6A2Oc%2FTyYfqpUA2%2BhFsEPOt6W&X-Amz-Signature=d4c4b4d87cabc9e5bcaad9711b89f0c62e8ef7c892baf04ac3d32cdbc42945c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBOSFXV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pJm4i1CCY7%2FQaNiqo2phR8LWhct6Lo5AE36ix6PTNwIhAIBGpYKaKuBa9QcrIcTLm0GqPh63TDtLZsO9jl45TQ9pKv8DCE0QABoMNjM3NDIzMTgzODA1IgxEsoey%2BgCnnZUu%2BZ0q3APHTUIJX7pO5ci6Rf9Z39YtRA9KQGnz8m%2B0MvqXsgwZH29Ubv7p6gKv3Pk6gMvmX9kYGJJ8pX5Xw9hzzkEj2WDx8DBfTYkH9ddP3qZFGw5zJI8ih4ZZQcsACNbTG8X0nPfYmdQWvq6jZ0sF5INfNsKsmv8doV4z9K6SxYfCa6YwGnRrqdmD%2BNJuOfYjqXtxeSI6u0c9LKboH9PiIORKwi2BuOhBFC%2Fw3nwa08j3WSPeZCc9W0q2FGc2nrZw7QrtzWfkiggecU00vf4XsdYgePoCjasyonlZ%2FgFVzTSFYRrNc6D2Hp7w%2FHCnq5R1MibtW%2BvtmpRmFbQjNMZF8z8hfBI6mRhYiD2jOL7Wi1mjLUrVfX1vEdwM1DOiimhXmX6g09ZD%2FhZELBwkF45Ge7FfmVZF2xKutRCNHSgJjDGxGVKFMTpXhJX7OIrreMJ9KTtMINgstDboquCLsm4jSVKt0L2sy3elDDtepZVWMwUiETGkyiBGplJRJnt70ShnQVN2NEpqGuiyW83htd0%2FTCW7wTis0pzdcMHIMONClmNGdQiP2IaJM2%2BTlYzrsn%2B%2Fz8Moz4q2mKjv7Cistg6H3idNfzesTTU%2BPgEINPe4CtMUIxfRM9q7HvPeatB5StD%2FHjCk3Za%2FBjqkAXwmoVPi7NfucLlabke7vOdKxB7GluK84QWDGWRFGaejNn%2BmF1ubyLa8rF2vdJtJHnqcbObViWgKWTNl%2FvQyoNAkKxp8AAFubAVoe%2B1bNQQfmXL2e6%2FWmLB641C4IACB%2BZYOyJ%2B7v0NSXiXDfCPs5a5nyTBgv5iBskZKRfBXYiOBWSvjPGh424Tj3P6o2CPTqFw6A2Oc%2FTyYfqpUA2%2BhFsEPOt6W&X-Amz-Signature=68ce9f3db6c9c91ffdc30678d03d36e00db0841fb9ee37c28e31c38b7a380e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
