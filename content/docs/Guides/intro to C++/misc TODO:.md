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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSSRL6E%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCID7OtyOzhRptB4mYY%2BRC1eDmUqkrMjsvNriShdXPepa%2FAiEAoTXMnADHQ8SsgtHGr%2BxnGze9AYXrMjwCxmyEq3krQvUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMZNo5WHYKrR7QMzyrcA5kR1isxz7cpXTmndbB9JLj7AQj8Mx%2Bh63WL0mL%2Bs%2BJRNRlHGomIH43P%2FZDz%2FLNv4dqTLvlz9UEPBzN3KPi1bG%2FRY80HyCpbwMOX%2BoxR6Z%2Fxubo56XI%2BNPiN15sbu8MlHkdaiv5sm6DHkOSzaEi90QfvlNYvparY9u0NgHGon70iyhyDa%2F9jf9iriOx3r1dRWICQ7P5r%2FShrl3eVHdnORbmw5mU8LU7848Jy%2F4WM25bFXvuLV3kUYr1WU4lMosU05Lg74tCHzNT%2Bz2g6eTMUylYUWw4VdYHK4fyygcYidnx%2BcrcI7%2FUa1MCjH2ZgI8Hd9DfP3HktrzjeBST7VsAzcNeFFZA4CtJchVDYTn3WK4wjqjZPJnLLMNX4v36YVBtBlQhf22JVTGFCtYxAdpLyCoJRbbKdHw39qKbFeydmwDygrxFeSyLE%2BI8aP7Zi5luI9waNa6UzQ0mhxW7q8eq0AffxWV%2F5jzka5LT3sJl%2F4LHBC6MMP6t6WClikkDz2jWgADmjArTKN0fa77Q0knos8pIXUgLC3hILA4tJDoAcmdd%2BGaN6CS9r%2BKMe53cC%2F2WDrs6imLAxZ06Q929Niy1fV8Y4R2GLuBtZSbC7JFahDhUcRmVYW5C4NhHXjLQwMOnkm8MGOqUBkMGG3NCGiHIa2fekqA0bTfbOmQyOK6%2BtNVywRAf5u1UuegsWRo7z7Q4jNtPt%2F7wqnF0NzSCafWBmfXt9AZjd%2Fiw8U31nAe6VA5aFn0%2B6WCrbA08yoSMr3mKT2nPAx6sX%2BI3uW3QKKbRpjpWi6CjW54Wgl44y24x5PWH3XtrNqt9l83wf0X0X1LAFYsbG7cgRJABrPNtsFzQsB%2BaqvITkdshNf2mx&X-Amz-Signature=98c88be1ea2449839e98f5ffc11d92f33c07a28800de5f1eba182b9fa27f9215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSSRL6E%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCID7OtyOzhRptB4mYY%2BRC1eDmUqkrMjsvNriShdXPepa%2FAiEAoTXMnADHQ8SsgtHGr%2BxnGze9AYXrMjwCxmyEq3krQvUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJMZNo5WHYKrR7QMzyrcA5kR1isxz7cpXTmndbB9JLj7AQj8Mx%2Bh63WL0mL%2Bs%2BJRNRlHGomIH43P%2FZDz%2FLNv4dqTLvlz9UEPBzN3KPi1bG%2FRY80HyCpbwMOX%2BoxR6Z%2Fxubo56XI%2BNPiN15sbu8MlHkdaiv5sm6DHkOSzaEi90QfvlNYvparY9u0NgHGon70iyhyDa%2F9jf9iriOx3r1dRWICQ7P5r%2FShrl3eVHdnORbmw5mU8LU7848Jy%2F4WM25bFXvuLV3kUYr1WU4lMosU05Lg74tCHzNT%2Bz2g6eTMUylYUWw4VdYHK4fyygcYidnx%2BcrcI7%2FUa1MCjH2ZgI8Hd9DfP3HktrzjeBST7VsAzcNeFFZA4CtJchVDYTn3WK4wjqjZPJnLLMNX4v36YVBtBlQhf22JVTGFCtYxAdpLyCoJRbbKdHw39qKbFeydmwDygrxFeSyLE%2BI8aP7Zi5luI9waNa6UzQ0mhxW7q8eq0AffxWV%2F5jzka5LT3sJl%2F4LHBC6MMP6t6WClikkDz2jWgADmjArTKN0fa77Q0knos8pIXUgLC3hILA4tJDoAcmdd%2BGaN6CS9r%2BKMe53cC%2F2WDrs6imLAxZ06Q929Niy1fV8Y4R2GLuBtZSbC7JFahDhUcRmVYW5C4NhHXjLQwMOnkm8MGOqUBkMGG3NCGiHIa2fekqA0bTfbOmQyOK6%2BtNVywRAf5u1UuegsWRo7z7Q4jNtPt%2F7wqnF0NzSCafWBmfXt9AZjd%2Fiw8U31nAe6VA5aFn0%2B6WCrbA08yoSMr3mKT2nPAx6sX%2BI3uW3QKKbRpjpWi6CjW54Wgl44y24x5PWH3XtrNqt9l83wf0X0X1LAFYsbG7cgRJABrPNtsFzQsB%2BaqvITkdshNf2mx&X-Amz-Signature=4c19230d5673d7038817d5b914c6a41509254a700a237a95f72737eeccb72fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
