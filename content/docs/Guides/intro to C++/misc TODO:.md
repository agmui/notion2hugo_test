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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMQ3ZKM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi%2BtaXJrdQvQ54JX%2BbVgDBj8vkigc%2F9C2UxgfugSGOKAiBwNpmHMnc4Kj%2Bfu7CZZ2LkunHnWi5gzS6jOa8KA9KlQiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrCZPtcYcLuHYVU5LKtwDsSWgEXyNgAx3eilkeLS6clbR3AEjK2BNjcyZPl5dCOXhqD%2FEkmkknv5kSlmHwGlNHV5YM7dc6rnzIirANTmbZLF5vvQQYTfpnu4NW4yNgnQNbkADEmzQo00S6O2tySubcOp879pdrBvxsti3TtAfYXByob6ILqr0sq2M8t5QonDvCs221g7KoHc1coG7bKkk%2BAc3usc70LwsFtFeIZ02lJVrzqGeta7NYfUMvCZn4Q8ck4tcnmH6MmqU1nWDEF04DgzC3fU5jZiXhjKABOZLukrHCZztBhKM84baeSwG0dArbuPGi1jZMjkn3OjrWcjPHsmJ%2BIeExR1TUkLsfhK8AeL1QYc4%2FzjTq66pkiOljRmeJ%2B3MDqJ26LRhIeRbxVe5OqzFHRUq7TFMoX71HBhM0G%2FeVljDEj%2BEWjWz3o%2BdNDhRQTX9rEOA2tkoz%2F%2B3EKEqDHbsyg20AGPR5R5d1Ma4kuogsLzy3H84BPSySd4za%2FWO%2BGPlbuzUXQMOC1oEHbA5kOU9WhqLDm0Gg0b5Y6SYBIQ%2BGKITXxQrFV0w%2BxO4ukI0yzDh7oAwzz730iyJjthESyHpne69lfp3NOm0aBXm68Comb53JUBV8HYgJ8ODFH5xSR6nDpwbpZhXuOYw1aWtvQY6pgFMcSE6xWQFWlmknrBFpoj9yxRafVPTGkHcvapDLj1XdKMyNhOLy1iC7hTwMiZs%2B%2F%2FAhTPUtS1AYzGS5vn727oSkoXJ2P3Zjt9BhEHHZOBaUa30%2Fc6ceZTAAsaSM2iijBm8Pw%2F4Zvv%2F07QVSNdnJ40bKxGvsTNM%2BXdCCYqBWhtCKwpsbDyS27lkONwaGu0J9vlZrt8Y13dwp7lTU1YcJJM880xLX3cl&X-Amz-Signature=063e5df5a75fcec8a4305eed4fcb54833ed40904423f34fc8611289c7376a93b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMQ3ZKM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi%2BtaXJrdQvQ54JX%2BbVgDBj8vkigc%2F9C2UxgfugSGOKAiBwNpmHMnc4Kj%2Bfu7CZZ2LkunHnWi5gzS6jOa8KA9KlQiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrCZPtcYcLuHYVU5LKtwDsSWgEXyNgAx3eilkeLS6clbR3AEjK2BNjcyZPl5dCOXhqD%2FEkmkknv5kSlmHwGlNHV5YM7dc6rnzIirANTmbZLF5vvQQYTfpnu4NW4yNgnQNbkADEmzQo00S6O2tySubcOp879pdrBvxsti3TtAfYXByob6ILqr0sq2M8t5QonDvCs221g7KoHc1coG7bKkk%2BAc3usc70LwsFtFeIZ02lJVrzqGeta7NYfUMvCZn4Q8ck4tcnmH6MmqU1nWDEF04DgzC3fU5jZiXhjKABOZLukrHCZztBhKM84baeSwG0dArbuPGi1jZMjkn3OjrWcjPHsmJ%2BIeExR1TUkLsfhK8AeL1QYc4%2FzjTq66pkiOljRmeJ%2B3MDqJ26LRhIeRbxVe5OqzFHRUq7TFMoX71HBhM0G%2FeVljDEj%2BEWjWz3o%2BdNDhRQTX9rEOA2tkoz%2F%2B3EKEqDHbsyg20AGPR5R5d1Ma4kuogsLzy3H84BPSySd4za%2FWO%2BGPlbuzUXQMOC1oEHbA5kOU9WhqLDm0Gg0b5Y6SYBIQ%2BGKITXxQrFV0w%2BxO4ukI0yzDh7oAwzz730iyJjthESyHpne69lfp3NOm0aBXm68Comb53JUBV8HYgJ8ODFH5xSR6nDpwbpZhXuOYw1aWtvQY6pgFMcSE6xWQFWlmknrBFpoj9yxRafVPTGkHcvapDLj1XdKMyNhOLy1iC7hTwMiZs%2B%2F%2FAhTPUtS1AYzGS5vn727oSkoXJ2P3Zjt9BhEHHZOBaUa30%2Fc6ceZTAAsaSM2iijBm8Pw%2F4Zvv%2F07QVSNdnJ40bKxGvsTNM%2BXdCCYqBWhtCKwpsbDyS27lkONwaGu0J9vlZrt8Y13dwp7lTU1YcJJM880xLX3cl&X-Amz-Signature=92fd7fa3fad95d59c8c76eec2a8ea51af1af654976bb7e0c1968cf5bccc2cf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
