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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72JUEJU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5iSW1bZilDXJR0F%2BaUyrTu8KQ7DR4LVSENmUABQcmzAiAJC6zb17BIUNhODU0djupHvv7XxqFsvvefLKFvNeHjfir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMPL%2Br6JsK5VVBq%2F8XKtwD3JBWmuHR%2BdRroEXkieHg%2FlwloX4ZnOL0QJRtRheh87zpZXRTyqUqu2%2BK0xKQOMLWUj9JHSbwt6zm1ThH%2BCxQo4qPlQ2oilBuvky%2BLlFH9%2B292A4OkTbuVU0jhQL%2B5G3jbFh%2BaJ26mRy0qBaW0qjabLYE%2FzCGv%2B8cg%2Bx4V2Aht%2ByAP8bujoA3Jin0Ac%2Fmfh0H5pAiFvgypi7mggAht%2BLe1Mh38CmtOCnGDe%2FXrirOEujKPSKh73EB8GdBWrB8qWUOhtWOZ6wVL9f%2BdQjgLwseTJk8y9nR2%2FxaDO93kPLv1CtKtHYeQfmkZIfDWmUWaAr%2FLtNbgjVALEGQ0TT0QZwm25ojmcwRPm3H5femu5rVzuvhxAF5PuSGXBASMtWG3KKJS2LnE9Amd5ij05jQAkwFz8ONCcKwg5hOhJ9gBteOHuKgQmS%2Bt6cpLVtLUfU3JYng%2FxvOpkiWV2zTwZ8iArKzjzLMk0jhcNEzx3X4ydQLSixDcLR0Ysqx5g2xU8wnjatNaXoqx%2FHj6evtBezrTPSTiZJO2YFSsvLbbr8ntrZoXqNjJYXipD1azhYtiGSYnJ%2B3EEUIxZUqeFlsV5pCaPngO2UJWFk0TfKrtE%2FAXmnRtBvzdpZ5jlES%2FW1MRJYwzerZvgY6pgENUpvr5yzf%2Fgk%2FyZEtjbJha7odUa%2BDRo7zJVovdjl7ykClr3V%2BinkAss66JURq5eF%2Fh1bRHm4oGdEiKo1Ll%2B2clR%2B770tZ%2B9ibHux5pV23q3ZIPqbo%2Frp3Aqf%2FM4UbIJtLWR6qiFJNLX2ZAG8Li2ZSTHF4mQsItNWWQTJGuftxppZ%2F3CQIJ59RFzGEjyOuTn3bJuZWZLPH4eo5YFJQYVAL2pQzecgt&X-Amz-Signature=81c4c7feb0e824fdaeca5709f1c97e4b5c8881718b7978e4ab064ab0efccb7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72JUEJU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5iSW1bZilDXJR0F%2BaUyrTu8KQ7DR4LVSENmUABQcmzAiAJC6zb17BIUNhODU0djupHvv7XxqFsvvefLKFvNeHjfir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMPL%2Br6JsK5VVBq%2F8XKtwD3JBWmuHR%2BdRroEXkieHg%2FlwloX4ZnOL0QJRtRheh87zpZXRTyqUqu2%2BK0xKQOMLWUj9JHSbwt6zm1ThH%2BCxQo4qPlQ2oilBuvky%2BLlFH9%2B292A4OkTbuVU0jhQL%2B5G3jbFh%2BaJ26mRy0qBaW0qjabLYE%2FzCGv%2B8cg%2Bx4V2Aht%2ByAP8bujoA3Jin0Ac%2Fmfh0H5pAiFvgypi7mggAht%2BLe1Mh38CmtOCnGDe%2FXrirOEujKPSKh73EB8GdBWrB8qWUOhtWOZ6wVL9f%2BdQjgLwseTJk8y9nR2%2FxaDO93kPLv1CtKtHYeQfmkZIfDWmUWaAr%2FLtNbgjVALEGQ0TT0QZwm25ojmcwRPm3H5femu5rVzuvhxAF5PuSGXBASMtWG3KKJS2LnE9Amd5ij05jQAkwFz8ONCcKwg5hOhJ9gBteOHuKgQmS%2Bt6cpLVtLUfU3JYng%2FxvOpkiWV2zTwZ8iArKzjzLMk0jhcNEzx3X4ydQLSixDcLR0Ysqx5g2xU8wnjatNaXoqx%2FHj6evtBezrTPSTiZJO2YFSsvLbbr8ntrZoXqNjJYXipD1azhYtiGSYnJ%2B3EEUIxZUqeFlsV5pCaPngO2UJWFk0TfKrtE%2FAXmnRtBvzdpZ5jlES%2FW1MRJYwzerZvgY6pgENUpvr5yzf%2Fgk%2FyZEtjbJha7odUa%2BDRo7zJVovdjl7ykClr3V%2BinkAss66JURq5eF%2Fh1bRHm4oGdEiKo1Ll%2B2clR%2B770tZ%2B9ibHux5pV23q3ZIPqbo%2Frp3Aqf%2FM4UbIJtLWR6qiFJNLX2ZAG8Li2ZSTHF4mQsItNWWQTJGuftxppZ%2F3CQIJ59RFzGEjyOuTn3bJuZWZLPH4eo5YFJQYVAL2pQzecgt&X-Amz-Signature=b11fbf3a68c12b78b0f5df79b68aec854651f690186c9c3e794da6a9bc2b2232&X-Amz-SignedHeaders=host&x-id=GetObject)

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
