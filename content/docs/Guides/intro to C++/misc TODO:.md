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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6CUPCT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8lcpoEyBbec2ec4XeS45Yp5jl9WZssbJ7l2jl1QZ0SwIgNxfMP0afLebp5aKXQCkfwhlw4pZS2QSAfp2gfuYIdx8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO2V%2FblTT%2FpqPM%2F8yrcAxMFmUL9wtcbwpro9JoIIbGLIACMiPDHPrx8nf4WgpwpW1VN2qse5VzMu7k2iO0AqJa5apOWAeh9A7BFvN33pBIyN5gmxg8BzbC%2BpVjqgoPQaYiZCU5kpqrqrTfygEZpdpIBKNUwuKd9tufeJFVQUaAi1wIQnlz%2FXPWusIEGOlJ5iXQTBkWTL2W3QzAidDy3s0puV4t0r8636JJeU6tyFNhetlUvIq0MeolgA56VvIDBJvj29CzVsrWqDteNg4og98%2BlVPQC8LG5ayh%2FANs7pbuevshKrgKZsffJgpsWeFQT4gUYGeAbrLKbv87wE7EXOG3xA5Exxzxfxmym16nUnxbZsWpLopQFfsS%2B3JwXwEWwiPZY6XTi1l%2BwL896nTFWdIgBncZB%2BlZ0ra4ZKACqr7T7nQQ4oDO9w0fPDHQbwfMbQSypw0swlDgTRj4kJO8QHsddjXL%2F6Ommw%2B0eWrTDVRiEK9959fmaafXa7jpkJYrtzLTxRapvSJbPJYTY5Kqi3qamkexedxyszECkXD6GgRmHsCtWeRoobiKXbW%2BcId1dy9D9oYxCiTGjPOzMpElQRVjYnMDrJrotxQdzqXpm2JO5TgHJZc3dVMK2RNpYx1MuQWDfqD9pFY%2FE0n8iMNXl57wGOqUB1UdtkfDxOQXQyhpprrej3ZiR%2FqqqrwtIDCt8RjpByUBXKnhWmYw6eEDu6ilmabBdaCr6Sc%2FvachP2e1i1f13S%2F%2BHopGY4bxnck3vDXgNfyuQTmLTaXf3bSZGoAibH%2BUQlggEB0V%2F%2FFdxdtRqskjeq2fkcyef99eWPPSGZ5AY6NxWIZ%2FpD4dEgYoCZ4cNPIkGxA74SavAGdCNiCIxHFPoFr%2FURfHM&X-Amz-Signature=8148c4b84678d39b0a47b06be8a1aac01a4461974c2a788a7c38f194f2de2acf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6CUPCT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8lcpoEyBbec2ec4XeS45Yp5jl9WZssbJ7l2jl1QZ0SwIgNxfMP0afLebp5aKXQCkfwhlw4pZS2QSAfp2gfuYIdx8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO2V%2FblTT%2FpqPM%2F8yrcAxMFmUL9wtcbwpro9JoIIbGLIACMiPDHPrx8nf4WgpwpW1VN2qse5VzMu7k2iO0AqJa5apOWAeh9A7BFvN33pBIyN5gmxg8BzbC%2BpVjqgoPQaYiZCU5kpqrqrTfygEZpdpIBKNUwuKd9tufeJFVQUaAi1wIQnlz%2FXPWusIEGOlJ5iXQTBkWTL2W3QzAidDy3s0puV4t0r8636JJeU6tyFNhetlUvIq0MeolgA56VvIDBJvj29CzVsrWqDteNg4og98%2BlVPQC8LG5ayh%2FANs7pbuevshKrgKZsffJgpsWeFQT4gUYGeAbrLKbv87wE7EXOG3xA5Exxzxfxmym16nUnxbZsWpLopQFfsS%2B3JwXwEWwiPZY6XTi1l%2BwL896nTFWdIgBncZB%2BlZ0ra4ZKACqr7T7nQQ4oDO9w0fPDHQbwfMbQSypw0swlDgTRj4kJO8QHsddjXL%2F6Ommw%2B0eWrTDVRiEK9959fmaafXa7jpkJYrtzLTxRapvSJbPJYTY5Kqi3qamkexedxyszECkXD6GgRmHsCtWeRoobiKXbW%2BcId1dy9D9oYxCiTGjPOzMpElQRVjYnMDrJrotxQdzqXpm2JO5TgHJZc3dVMK2RNpYx1MuQWDfqD9pFY%2FE0n8iMNXl57wGOqUB1UdtkfDxOQXQyhpprrej3ZiR%2FqqqrwtIDCt8RjpByUBXKnhWmYw6eEDu6ilmabBdaCr6Sc%2FvachP2e1i1f13S%2F%2BHopGY4bxnck3vDXgNfyuQTmLTaXf3bSZGoAibH%2BUQlggEB0V%2F%2FFdxdtRqskjeq2fkcyef99eWPPSGZ5AY6NxWIZ%2FpD4dEgYoCZ4cNPIkGxA74SavAGdCNiCIxHFPoFr%2FURfHM&X-Amz-Signature=e5d06bf31326a2fc6b8227ad04786210c5d9a102cb85b83242c99267cf82b129&X-Amz-SignedHeaders=host&x-id=GetObject)

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
