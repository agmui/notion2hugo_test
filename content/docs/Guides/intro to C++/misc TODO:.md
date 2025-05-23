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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZ47W7I%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCAPqoA51%2Fua%2FHUHwSGaRAbzkdYlvy1nLMCJ5%2ByaWmcWAIhAM6B1izyM987XbHozuoZ3N5dch88mm1EEWMAbTgt8%2FEGKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4uLYBD%2FxR3fMH2eMq3AMs9u7JRn5awA0cvGbx7m%2Bcn6xJ3Q3wW2Z%2FAo4BOw2zD6IvFmXbsYZvxCt3fvGFt9moWEqH460WX0LPrD4BtA6V6EdMLJY%2B0iEP5hkKCHghbDnQ%2FfY4D0PHd1J5aQ0JwzJsxQciG0wzEDIRlZvrtyJ83YF4r7PiYMFo3SSAsueuxHUEXUomdIhmjgVLEJF7WceLxVuXsgKtQTfX2rOnC76mROzuRjHxhdeFHhUp3mC34QWRQDbeo%2Bn9vtB65im8DA1M77wdVS6oOUI%2FyBMJj33R6F042gTm%2Bsr9QDLxfPwx7MpSNkfvrLZKpd7iS%2BnTrjQYuQI%2FAIS8EIzt4x0X%2FUgskaYaDZSSyhV%2FTiyeo01ZjdvAvL24QSISJUG7WBJRVQLfjoRGQZi1zG6yr9APcYk%2B57dVlHp%2FY3aPJPXvoKrSLvciAD%2BgpErMmN%2FQVBOCmLft9TjsjsFgYIqDtA1IK6j9uDiLlruvOqDsi%2BFn0sNcbbN21d%2BYQjj5At3YDMp8U8SefLHP8dMnSSHE3Towzwjb4U1xE03pPuz%2FHcl8GYzkmqWnmGSf4w0DsOKUQvTs94OGQ%2Bj34RYEQRkwjX2IX0rPFPtLTn1kTOx53QD5fCZSjk1awg0uRuoFthWqcDCzqcHBBjqkAWH%2BkzymfVB9vJ8mJijjJER6vb5QYwVAZjJIvzQco5XNPNj3YkjtP8WhEpQkYiJ2sLxhFDMdyAxDgRWWHdjpTdEBab4qzQy2GZ%2BhnoCjqKUVF%2F7PsRq7OBX9i9DfFvIxiR6XQq1CzqbqVFBGh75X9S3auyUQvSdVDC7HlmjADp%2Fh9OZjDaRFv%2FQ0zZCwlsM7s5R9ZKkts93pDZKoJhlmM6qov7Cd&X-Amz-Signature=b3ce640db3b7382c1b21c86c27216531b1346e3494f1e3a5dc9d64106ac69549&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZ47W7I%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCAPqoA51%2Fua%2FHUHwSGaRAbzkdYlvy1nLMCJ5%2ByaWmcWAIhAM6B1izyM987XbHozuoZ3N5dch88mm1EEWMAbTgt8%2FEGKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4uLYBD%2FxR3fMH2eMq3AMs9u7JRn5awA0cvGbx7m%2Bcn6xJ3Q3wW2Z%2FAo4BOw2zD6IvFmXbsYZvxCt3fvGFt9moWEqH460WX0LPrD4BtA6V6EdMLJY%2B0iEP5hkKCHghbDnQ%2FfY4D0PHd1J5aQ0JwzJsxQciG0wzEDIRlZvrtyJ83YF4r7PiYMFo3SSAsueuxHUEXUomdIhmjgVLEJF7WceLxVuXsgKtQTfX2rOnC76mROzuRjHxhdeFHhUp3mC34QWRQDbeo%2Bn9vtB65im8DA1M77wdVS6oOUI%2FyBMJj33R6F042gTm%2Bsr9QDLxfPwx7MpSNkfvrLZKpd7iS%2BnTrjQYuQI%2FAIS8EIzt4x0X%2FUgskaYaDZSSyhV%2FTiyeo01ZjdvAvL24QSISJUG7WBJRVQLfjoRGQZi1zG6yr9APcYk%2B57dVlHp%2FY3aPJPXvoKrSLvciAD%2BgpErMmN%2FQVBOCmLft9TjsjsFgYIqDtA1IK6j9uDiLlruvOqDsi%2BFn0sNcbbN21d%2BYQjj5At3YDMp8U8SefLHP8dMnSSHE3Towzwjb4U1xE03pPuz%2FHcl8GYzkmqWnmGSf4w0DsOKUQvTs94OGQ%2Bj34RYEQRkwjX2IX0rPFPtLTn1kTOx53QD5fCZSjk1awg0uRuoFthWqcDCzqcHBBjqkAWH%2BkzymfVB9vJ8mJijjJER6vb5QYwVAZjJIvzQco5XNPNj3YkjtP8WhEpQkYiJ2sLxhFDMdyAxDgRWWHdjpTdEBab4qzQy2GZ%2BhnoCjqKUVF%2F7PsRq7OBX9i9DfFvIxiR6XQq1CzqbqVFBGh75X9S3auyUQvSdVDC7HlmjADp%2Fh9OZjDaRFv%2FQ0zZCwlsM7s5R9ZKkts93pDZKoJhlmM6qov7Cd&X-Amz-Signature=6eeb0bce055bf1f4eb5b74ad3f173b826fd57cad6898aa9bf8d28156902e2f85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
