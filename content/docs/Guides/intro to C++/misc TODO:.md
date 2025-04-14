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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYX26XN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOC1Vw0R98VvdjOwb1O1gTSAm9C6kTrbpG%2BZgQc8vBIgIgU8FJfCbuKCiR5zRP07AZJ8fOYSDp3wpuZy62AHmQb3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMjIRbdeyWG%2FZyBlircA18dbiclnySPqAkyNps8E30WChZmIDqWgNfC40aescZ5woGbLR8cLkUK%2BxpfWLAiK8CxNvFzpnp0c2sYzJHae4XNDjN7hAIqUXO%2F%2B1InpQYyTB15juaJEtkXo5SjZwm%2FjHCgmfArXGjYN19hw99YgBxsajkbJUkf%2BmeA65cJGTxt3Mk9QPIBB9nKf6i8LvXwsTMzfuGlYGiMYC8WuGvCXWFQ6CSaP3mk0IaljQFU%2FV%2BbJucXLG0X%2BHWvcprdTKQ5by593wKKGY3j7nBaaND1wwg4z%2F1ZIgNRF%2FxzZLDJXvzdY124DuSvFHV6LglFgCLfPC7gyBtzgaPSVbIFwqz8myJ5pJ4vg58FnRKRqHRTMbKXdosSDdOPpiS%2BbAnWRVbCyGBoWvQsbAupBG%2BV5%2Bndjerf2rWUtrLETyfwa2kgUrQIZjMN6m8s90SeTwr%2FAcCV6ESsFcEphsgiTXTDfmrWmX9e1rgBjB5hzxDyCt3mbkETnJXiWq35aed1F9VA4BxV3Le28L66KsqfGlyFDg5I4FqBNFvlnMqO49KDN4OGtgubfj%2Bn4TKrcqS5f80%2BDzlmy%2BqpMO3WbD6ot0k4FetjTmff9sAq3FrPV8%2FWllTuQ%2Fq7QHRydUB4mYrDLQpXMO2U9b8GOqUB0phYvLBHzktCIv7hnSt2p1phvuhYvUyjqjA3T5Jp6wlI2Hftwu6wcO8olx7lklhK5sq%2BcZNChaRgtypYkrYnlkbyYLJ78MrV03vKKNIbHhg2qox52xcObBhwavDKmYWhlxb1foaXgXfXymuzKNKTkm0%2FNQDhFaDrCW5SkDGL70gL9QJSY8iFHx0kIhB2ltRqZtDfMe%2BhTgukCHDS1vq0Klb05f1e&X-Amz-Signature=f769e17f34b7779e4446f1a0d47ec3c4ea6626c713ba35479ef7ac7225f8ac3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYX26XN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOC1Vw0R98VvdjOwb1O1gTSAm9C6kTrbpG%2BZgQc8vBIgIgU8FJfCbuKCiR5zRP07AZJ8fOYSDp3wpuZy62AHmQb3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMjIRbdeyWG%2FZyBlircA18dbiclnySPqAkyNps8E30WChZmIDqWgNfC40aescZ5woGbLR8cLkUK%2BxpfWLAiK8CxNvFzpnp0c2sYzJHae4XNDjN7hAIqUXO%2F%2B1InpQYyTB15juaJEtkXo5SjZwm%2FjHCgmfArXGjYN19hw99YgBxsajkbJUkf%2BmeA65cJGTxt3Mk9QPIBB9nKf6i8LvXwsTMzfuGlYGiMYC8WuGvCXWFQ6CSaP3mk0IaljQFU%2FV%2BbJucXLG0X%2BHWvcprdTKQ5by593wKKGY3j7nBaaND1wwg4z%2F1ZIgNRF%2FxzZLDJXvzdY124DuSvFHV6LglFgCLfPC7gyBtzgaPSVbIFwqz8myJ5pJ4vg58FnRKRqHRTMbKXdosSDdOPpiS%2BbAnWRVbCyGBoWvQsbAupBG%2BV5%2Bndjerf2rWUtrLETyfwa2kgUrQIZjMN6m8s90SeTwr%2FAcCV6ESsFcEphsgiTXTDfmrWmX9e1rgBjB5hzxDyCt3mbkETnJXiWq35aed1F9VA4BxV3Le28L66KsqfGlyFDg5I4FqBNFvlnMqO49KDN4OGtgubfj%2Bn4TKrcqS5f80%2BDzlmy%2BqpMO3WbD6ot0k4FetjTmff9sAq3FrPV8%2FWllTuQ%2Fq7QHRydUB4mYrDLQpXMO2U9b8GOqUB0phYvLBHzktCIv7hnSt2p1phvuhYvUyjqjA3T5Jp6wlI2Hftwu6wcO8olx7lklhK5sq%2BcZNChaRgtypYkrYnlkbyYLJ78MrV03vKKNIbHhg2qox52xcObBhwavDKmYWhlxb1foaXgXfXymuzKNKTkm0%2FNQDhFaDrCW5SkDGL70gL9QJSY8iFHx0kIhB2ltRqZtDfMe%2BhTgukCHDS1vq0Klb05f1e&X-Amz-Signature=5b40fe07b15b946ce4c0333eac6f05e2adbecb10788fd22ef19c85657e253f71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
