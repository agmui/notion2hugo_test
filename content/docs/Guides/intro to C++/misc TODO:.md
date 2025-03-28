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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBJRUXC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0sxRxo7afNhFsDYW0C3DAqXS3UB6v421Qtri35Hmd2wIhAINBwQoBMG2XMsQhYHr1lCGGWXq5mXeOCdrJWaeuzLHEKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2ytUnCRrTuFCpI%2BIq3AMCVs1xsR32Mgjg80fFnVOU4K2kRcFiJXzuiyZ71ZMY5sAXQLuLEym59mQ%2Fsb%2F2e9qJosUs8FTeF2DMV0dpwOVVhUWmpSZPoeSi%2FVXVBkd%2F5oCke8LIek7ycJ1a6YiQRzZyuGuYIQm7cqjzeLghH6jEd0Q9Qr1ygjVR62wASb8E0xClcUTNvfcFFqPNweCprS1EyKLeUopeZJItaJIEXCQR50lCFSfFSPLHJ3xIcNNr%2FWJf2ToHmWz6i2EKspX%2Bh6djquoJP6K6YngT2B7lq5uORYYs9JYIoXHwZ7oDuWnw7PpBQazLQxAsOJ7GqouwwD9HMRl474bJhYs%2FFHey8bv2iwQYd2QndsMRWk836jN7%2FzmMs7Ulvlk3iaJ7f%2BZr9WRnbDdIhxlZmZUgYn61vIaJXYC4MZEHrlfgDtNVPBAnPyGF0BndVDkt7%2F1vDGtk2%2BfVBGsnE0V3fmGxBp9MQ2ACcnPpbojdmoXb9Zebv8dfnMs1CjzQZz2VK%2BUWC6tGdGgUtrAdW9ic%2FeiaZgp3zNyLvFTDrc%2FnaijX4i%2BBpd0gKmaZX1uftjf%2BxHBnD%2BenX3tauyRhKAK21fX99srLtQ%2FcOil9vJxv05EZHlEJvHP4e71Z45bri9vHWt5FkDDIk5i%2FBjqkATHoo76oI%2FMKBSvEEx1RoC6ospvKSWJCFXGIt7%2Ffns7r3099BUWnmIqjE81cqeE9FbwLbQWN235QINzWqQgUjqLDJtrOJZcSuw4muyymIJV%2BNNaYcql8mY2nNUR%2F%2FJNNz92La2b8kTcXp83%2BsI22d7MOKZeyHVxfjS2eUK9ZtUek8IZgbuob3tMDt2QJFUefWqF%2B18zWhGYOhpoxNYOaWoYffz3a&X-Amz-Signature=0ed86473bf8285aed3619d60ab4d6478288a7bf11312fcb8681f6e4257aa8ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBJRUXC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0sxRxo7afNhFsDYW0C3DAqXS3UB6v421Qtri35Hmd2wIhAINBwQoBMG2XMsQhYHr1lCGGWXq5mXeOCdrJWaeuzLHEKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2ytUnCRrTuFCpI%2BIq3AMCVs1xsR32Mgjg80fFnVOU4K2kRcFiJXzuiyZ71ZMY5sAXQLuLEym59mQ%2Fsb%2F2e9qJosUs8FTeF2DMV0dpwOVVhUWmpSZPoeSi%2FVXVBkd%2F5oCke8LIek7ycJ1a6YiQRzZyuGuYIQm7cqjzeLghH6jEd0Q9Qr1ygjVR62wASb8E0xClcUTNvfcFFqPNweCprS1EyKLeUopeZJItaJIEXCQR50lCFSfFSPLHJ3xIcNNr%2FWJf2ToHmWz6i2EKspX%2Bh6djquoJP6K6YngT2B7lq5uORYYs9JYIoXHwZ7oDuWnw7PpBQazLQxAsOJ7GqouwwD9HMRl474bJhYs%2FFHey8bv2iwQYd2QndsMRWk836jN7%2FzmMs7Ulvlk3iaJ7f%2BZr9WRnbDdIhxlZmZUgYn61vIaJXYC4MZEHrlfgDtNVPBAnPyGF0BndVDkt7%2F1vDGtk2%2BfVBGsnE0V3fmGxBp9MQ2ACcnPpbojdmoXb9Zebv8dfnMs1CjzQZz2VK%2BUWC6tGdGgUtrAdW9ic%2FeiaZgp3zNyLvFTDrc%2FnaijX4i%2BBpd0gKmaZX1uftjf%2BxHBnD%2BenX3tauyRhKAK21fX99srLtQ%2FcOil9vJxv05EZHlEJvHP4e71Z45bri9vHWt5FkDDIk5i%2FBjqkATHoo76oI%2FMKBSvEEx1RoC6ospvKSWJCFXGIt7%2Ffns7r3099BUWnmIqjE81cqeE9FbwLbQWN235QINzWqQgUjqLDJtrOJZcSuw4muyymIJV%2BNNaYcql8mY2nNUR%2F%2FJNNz92La2b8kTcXp83%2BsI22d7MOKZeyHVxfjS2eUK9ZtUek8IZgbuob3tMDt2QJFUefWqF%2B18zWhGYOhpoxNYOaWoYffz3a&X-Amz-Signature=9a2586b95ebd3d6c42071e6427d505c49af679a03a6e3bb5de7d0ed83e81d113&X-Amz-SignedHeaders=host&x-id=GetObject)

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
