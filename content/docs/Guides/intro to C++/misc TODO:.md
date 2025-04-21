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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIAHBDL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDT7WZAI4lbatUTWAVoi2zsca%2FajwpoPTNs%2BZ1TxlRVKgIgc9bc2wDXoDm3LkgJ3eujtJruZ5%2FUAT0vjvwbvemB%2FKEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZD6BazgmKxwiayFircA9Rcg5aF7rebnD2GRr%2BANxs7kKbPa2yGw1KSpQPI0tEW3R4wBupLGKLne8Vn8wCX8J0krU7719pvH%2BSEyCEjtS%2BWReCIA3CgthsI5fD15bE4SmWsiJylbfiTIhVFznAzsVr9p7sjZ5lKg1yIEu7%2FWLm8MbIJffY%2FmxLkIZGpt9Rh3Mbn%2F7FVWV3As2yTfnpo2BG7LPrCus9sVbBVdm16yTT2REuO8GZj1w6Smd57hV1hlNQNyqB8L4JwhqabEaT9FVeD%2BrVQIUVtlimIY8jN0HrKWTtIQgMUHjYUZmWm%2B850AoU6COEMwAQ3FxxaNWj%2FvukH%2F33%2B%2Bd0%2FuiszhS%2FH%2Fl6XR9wgWgmvJjf4kNDcXdlWo1R%2FIYaumEqg8GgYzdQqKW6MFyIe%2F9XgWKqCWEDkNNiHev8KmfTEp1N1rdB43uBc93GSXJr0ZygIXcd7x7UJ7hE%2B07goDGBnrOMi9rfjHHdMFZb2%2B7MarDy2gyuyRRzv8h0d99UvncskVCGnAoh9M8c83jxX5WomWBiw7hF0h50e83f5X%2FTjPv2lCbPdOkZre%2BLX9XQIyeyW1%2BYUmXBHPEl7uzKeLIQbs%2BBvw1AYkP035p%2Fi69O1PwSQt7mGfEq%2BFrl8f1o2Y4pdRWrmMJX8lsAGOqUB9kqRXIsnHSURcwf3RSIoEY%2B7TdDxoG%2BLKg7UfRK%2F%2FXAW7psThky2XokN4076QmYxJLJZpp7RebSYgD6GJar0XMygJnqA882A5RT248MeBa6E4sgtEl9%2Bw1phJN6jiUPl9PEX%2Bu6XXhnKw9KVIrBifVQFDs%2FN1qfBhRhUGoAyZpbwG1MazheHwYiptxbAL%2Bi9rFQiOIU69kHEEOgJdcDSV0kKxRUD&X-Amz-Signature=aae71f23b897b7011ff0237a5caac4ffb6b0441616f86e3b06fee73d53d7e734&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIAHBDL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDT7WZAI4lbatUTWAVoi2zsca%2FajwpoPTNs%2BZ1TxlRVKgIgc9bc2wDXoDm3LkgJ3eujtJruZ5%2FUAT0vjvwbvemB%2FKEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZD6BazgmKxwiayFircA9Rcg5aF7rebnD2GRr%2BANxs7kKbPa2yGw1KSpQPI0tEW3R4wBupLGKLne8Vn8wCX8J0krU7719pvH%2BSEyCEjtS%2BWReCIA3CgthsI5fD15bE4SmWsiJylbfiTIhVFznAzsVr9p7sjZ5lKg1yIEu7%2FWLm8MbIJffY%2FmxLkIZGpt9Rh3Mbn%2F7FVWV3As2yTfnpo2BG7LPrCus9sVbBVdm16yTT2REuO8GZj1w6Smd57hV1hlNQNyqB8L4JwhqabEaT9FVeD%2BrVQIUVtlimIY8jN0HrKWTtIQgMUHjYUZmWm%2B850AoU6COEMwAQ3FxxaNWj%2FvukH%2F33%2B%2Bd0%2FuiszhS%2FH%2Fl6XR9wgWgmvJjf4kNDcXdlWo1R%2FIYaumEqg8GgYzdQqKW6MFyIe%2F9XgWKqCWEDkNNiHev8KmfTEp1N1rdB43uBc93GSXJr0ZygIXcd7x7UJ7hE%2B07goDGBnrOMi9rfjHHdMFZb2%2B7MarDy2gyuyRRzv8h0d99UvncskVCGnAoh9M8c83jxX5WomWBiw7hF0h50e83f5X%2FTjPv2lCbPdOkZre%2BLX9XQIyeyW1%2BYUmXBHPEl7uzKeLIQbs%2BBvw1AYkP035p%2Fi69O1PwSQt7mGfEq%2BFrl8f1o2Y4pdRWrmMJX8lsAGOqUB9kqRXIsnHSURcwf3RSIoEY%2B7TdDxoG%2BLKg7UfRK%2F%2FXAW7psThky2XokN4076QmYxJLJZpp7RebSYgD6GJar0XMygJnqA882A5RT248MeBa6E4sgtEl9%2Bw1phJN6jiUPl9PEX%2Bu6XXhnKw9KVIrBifVQFDs%2FN1qfBhRhUGoAyZpbwG1MazheHwYiptxbAL%2Bi9rFQiOIU69kHEEOgJdcDSV0kKxRUD&X-Amz-Signature=6f61b015900fcb04e8fd9c312d4923490f6a1bd4b0dbfb4acc61fe92a51cf240&X-Amz-SignedHeaders=host&x-id=GetObject)

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
