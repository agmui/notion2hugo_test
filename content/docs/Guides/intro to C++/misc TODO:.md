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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KGDAYP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdeiCpPChbCsiO3U%2BtLRSU5lAYvqyC8kTJ%2BLb3hIBHlAIhAMQbUcXDSx6s6zOD2IrepDB3LggUnQF3O%2BbZFEBl7RJiKv8DCBoQABoMNjM3NDIzMTgzODA1Igyo3mrLZT0KmkTij5Uq3ANLAVUu4AIGKPJe9XgUSFwzFfut%2BryI%2FyYhixGg6qIODu8XNMRYH8EnArgraK4b60px5at7F5C920BqhCgwh%2BFQXrTxsBKmYPD%2FfxVjvUt8CCfbLd65YNFLXa57Y5hzHNpXo%2F%2BjYDEhFK8iEibAqM7iPiG38NTvLsq5D4gS9MY2cEk4CW%2FM6UV4rbSUuJ%2B31unvXmMrxASUA%2FK7ptGrjeHqMu0BcHFNdGuyyS7iOPkRxeTumKOr1Zvnpou3TqfqOGoSiE0gG5DW1ijwlwGgvVXFp1flcf11VNDvblIjIYlZQ0KC%2FyvaXaaabbr%2FXMXxNyfcepM%2BTqUSroecg%2B%2BsPXqvBoGvzu%2FPg%2FWoCMBhTA24vtpA4u8x5vIhHq5qNoH05QAEUZNYvYkcO96%2BWv2II9fsHcIT%2Boyz5qWPzy84oP0SqwuY4mxBNH25b0CoblDXXqzFhR3v903j8NPYtiu2HmH%2FxXy%2F7vmwmV4c%2FL6FLg9RSXylpMpp1nDVEV93vKDuvveUwnlIM5gjD4FulmtdAdjQFK%2Fd63XfWE6w3lhjxI9pQ2W7d8du8QgztCCouXmKvrgcOW%2FcZu%2FLB2Vd8FLCMyj8B3wo6%2F6zZB1mYPHrgwNWH%2F4cLIqUvnzJNr0JtDDrhKK%2BBjqkAVJEXj08SeNNHAr94TQm0pXuPePDsmMEAUnqQvXm5L7IbOcJ%2F0EpvhGDmtBfonqz5%2BYjj%2F2WY0nIUVbQAchY5EcRCjecP1g2UEnp%2BB8YOfqRJsQS%2F6zarIewSLW5d61jlbILNDaI12XgSOewXYveZO%2FGSyxhriBwDTB1R7YtTd8wcfQNeZuy%2BNf6LkJbqN627gkqek9gxQ3n8yNO8ur1Ie6P27Tv&X-Amz-Signature=c3d8d8e4beaf1de6a9b67a632e45f9da7228b8cd15584e0d9a53ee1b8cf681c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KGDAYP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdeiCpPChbCsiO3U%2BtLRSU5lAYvqyC8kTJ%2BLb3hIBHlAIhAMQbUcXDSx6s6zOD2IrepDB3LggUnQF3O%2BbZFEBl7RJiKv8DCBoQABoMNjM3NDIzMTgzODA1Igyo3mrLZT0KmkTij5Uq3ANLAVUu4AIGKPJe9XgUSFwzFfut%2BryI%2FyYhixGg6qIODu8XNMRYH8EnArgraK4b60px5at7F5C920BqhCgwh%2BFQXrTxsBKmYPD%2FfxVjvUt8CCfbLd65YNFLXa57Y5hzHNpXo%2F%2BjYDEhFK8iEibAqM7iPiG38NTvLsq5D4gS9MY2cEk4CW%2FM6UV4rbSUuJ%2B31unvXmMrxASUA%2FK7ptGrjeHqMu0BcHFNdGuyyS7iOPkRxeTumKOr1Zvnpou3TqfqOGoSiE0gG5DW1ijwlwGgvVXFp1flcf11VNDvblIjIYlZQ0KC%2FyvaXaaabbr%2FXMXxNyfcepM%2BTqUSroecg%2B%2BsPXqvBoGvzu%2FPg%2FWoCMBhTA24vtpA4u8x5vIhHq5qNoH05QAEUZNYvYkcO96%2BWv2II9fsHcIT%2Boyz5qWPzy84oP0SqwuY4mxBNH25b0CoblDXXqzFhR3v903j8NPYtiu2HmH%2FxXy%2F7vmwmV4c%2FL6FLg9RSXylpMpp1nDVEV93vKDuvveUwnlIM5gjD4FulmtdAdjQFK%2Fd63XfWE6w3lhjxI9pQ2W7d8du8QgztCCouXmKvrgcOW%2FcZu%2FLB2Vd8FLCMyj8B3wo6%2F6zZB1mYPHrgwNWH%2F4cLIqUvnzJNr0JtDDrhKK%2BBjqkAVJEXj08SeNNHAr94TQm0pXuPePDsmMEAUnqQvXm5L7IbOcJ%2F0EpvhGDmtBfonqz5%2BYjj%2F2WY0nIUVbQAchY5EcRCjecP1g2UEnp%2BB8YOfqRJsQS%2F6zarIewSLW5d61jlbILNDaI12XgSOewXYveZO%2FGSyxhriBwDTB1R7YtTd8wcfQNeZuy%2BNf6LkJbqN627gkqek9gxQ3n8yNO8ur1Ie6P27Tv&X-Amz-Signature=200ec23f36b7911936c7a4c6a73cf9d7a35d47a2dc0798364147adde1e3b3e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
