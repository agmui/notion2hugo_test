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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N35LHMD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDpZQEdefQsDR6ePA%2BMuPu9lPX%2FOzNPqm0FhSirgmQ6IgIhAIsnGjuuMASe7Ns%2FDwtv22AnKOIAA2eNk3Bni29qLfvWKv8DCHwQABoMNjM3NDIzMTgzODA1IgzrzaKJg3pD7m0082gq3AOKJlhVU8IiqNiQgqOIiGuYOki5JuhNQk36j3utvi6WxeldYtdJQOyBf3lj8MLqxoJ4xJU2SPGzJ53odB%2FyRC4l3oWdA1iSgwKNq1ofCOMGykl7UhB2HKawVbcbjP6%2Fejr0Qxte7R5tJZbQ%2BC0dzhkvyx2cMJQVAvvYjnShdskvYckHvffkZchYbdTUJjUaOP5yBABkp15VemDxtSwdLkPOCJIHOlT0hIwvEWVHzRYcmuQ4IG19zBp4Ik6RgsbRZY0eqbljRJmkoK9k1NnXvBvxg%2BY9Gt016phblw1lSePxoTSque94XFPJjMxu%2BWLgWVN%2BWVd1l7kWdLs0hXU4m8oTwZ5RENUDiKEolqqJTGVHjM%2BA%2BOSjpa25oiO66d8Z1kgYcoHepIym9nZ8e8MbOanXsokiz%2FwFc3ZZlrnTIYULYSCsNy%2Bd0tUEfmrvppDKTI%2BPSBJg4tw1bjuXGndFBrfDGjKHhfWJBkrS3Tx%2BoUUIUxaSeQqyqMTNpTxv%2B6SBFhLXZ%2FLoyl1OrDlyZUJl7UysiNrT6JJ%2B59%2FlvcQFro21qmbGx8u3%2FvYfL%2F6%2BTzH1dk5xQ9LrqDzmjnrVp4g8ixBecONw6sB2NMnL1INo%2FZ3uTUSrdkDH74rDQzoBuzDBjuXDBjqkAXjXzV9FmuiPqHYjQLe9nfSsRiETwdaC1TeoSYFJpATYL7bcdz6LYvLhVoA6WVNndGih9q115WsOyk815x82jmlt6K1Nh7d9qzr7xs14uoEGjL004I%2Fro4wpfE470H%2F%2Fh%2FXPhT7L%2BKVHLFVDVO0BZQnr%2F1cq5m%2Btemah9uLkfNlmDEoLZ%2FmikqL1C45YspMNgSrQgbDxIpcgPCMVCzT5DlJf5ebx&X-Amz-Signature=a9af9145cfe5fccd0e6c67673881b5493d6b85efa9b757bf6c6396a392d7b7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N35LHMD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDpZQEdefQsDR6ePA%2BMuPu9lPX%2FOzNPqm0FhSirgmQ6IgIhAIsnGjuuMASe7Ns%2FDwtv22AnKOIAA2eNk3Bni29qLfvWKv8DCHwQABoMNjM3NDIzMTgzODA1IgzrzaKJg3pD7m0082gq3AOKJlhVU8IiqNiQgqOIiGuYOki5JuhNQk36j3utvi6WxeldYtdJQOyBf3lj8MLqxoJ4xJU2SPGzJ53odB%2FyRC4l3oWdA1iSgwKNq1ofCOMGykl7UhB2HKawVbcbjP6%2Fejr0Qxte7R5tJZbQ%2BC0dzhkvyx2cMJQVAvvYjnShdskvYckHvffkZchYbdTUJjUaOP5yBABkp15VemDxtSwdLkPOCJIHOlT0hIwvEWVHzRYcmuQ4IG19zBp4Ik6RgsbRZY0eqbljRJmkoK9k1NnXvBvxg%2BY9Gt016phblw1lSePxoTSque94XFPJjMxu%2BWLgWVN%2BWVd1l7kWdLs0hXU4m8oTwZ5RENUDiKEolqqJTGVHjM%2BA%2BOSjpa25oiO66d8Z1kgYcoHepIym9nZ8e8MbOanXsokiz%2FwFc3ZZlrnTIYULYSCsNy%2Bd0tUEfmrvppDKTI%2BPSBJg4tw1bjuXGndFBrfDGjKHhfWJBkrS3Tx%2BoUUIUxaSeQqyqMTNpTxv%2B6SBFhLXZ%2FLoyl1OrDlyZUJl7UysiNrT6JJ%2B59%2FlvcQFro21qmbGx8u3%2FvYfL%2F6%2BTzH1dk5xQ9LrqDzmjnrVp4g8ixBecONw6sB2NMnL1INo%2FZ3uTUSrdkDH74rDQzoBuzDBjuXDBjqkAXjXzV9FmuiPqHYjQLe9nfSsRiETwdaC1TeoSYFJpATYL7bcdz6LYvLhVoA6WVNndGih9q115WsOyk815x82jmlt6K1Nh7d9qzr7xs14uoEGjL004I%2Fro4wpfE470H%2F%2Fh%2FXPhT7L%2BKVHLFVDVO0BZQnr%2F1cq5m%2Btemah9uLkfNlmDEoLZ%2FmikqL1C45YspMNgSrQgbDxIpcgPCMVCzT5DlJf5ebx&X-Amz-Signature=d66819da3c80c497ac54c4f889a43e9c084fcce61942d7f088fa3eb256440357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
