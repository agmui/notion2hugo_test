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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BP6KP3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs4AZ2inrCbB2T9ELIkalJk5ei6FAJLYxFEjZQaBBymAiEAxmgEiYtG2OEH%2BRIfaaEPPq0CeQ%2B6niEvwUQ33YtVIToq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBp3BBFbMsgGGjfcqyrcAyNecpmV5onE4NSZRZKp9n4sCHD9EuGh%2FEpm%2B4LNPa%2FGEUK%2F%2BLflyrcPOlNt3IBd2eavjurAubtzUKdOkHEJ3i8Xq7DrGkwtmFx8E0zTodJl4mgHjn0NFbIkw4J6mJxmAEPXYsx6iC0%2F7oBvnqYB67VFFcmYI9MiXzisNLJFE4I4I7n8YrA%2FAAenhYjab8ZWD2LWqPgzdT4WQHdGsuJDcneV0pNjGyI8M5jIQT4qjK1aQjjcIR4AtFEYwiwRHlVX%2BML06a4FTG%2FvnorNZ79bENKhEFC9RjOkPAb4V291viWaIzahLPfPp66Otu38rW5klqj2Wri2M2H3PbKwkHJ07z3e6jVaCEtRRMTr2X9JeHwxg7Zn%2FWYA9nFTxYXq%2FklbprtlFkOuG%2FE%2BSErceYrjIZpvC9zAyLlkGsDkfkXCQRVvcPLYHftuuBVBVDvQ%2BXx%2BtIe%2Fz75wDcVINbiyTQKfaNly%2F%2B2p1CQS8j1pZj4elVKnqk1zncjsB%2FQwub1cmQyLepG9nM2aAC1SoLsvRQt7CjW2qQxk4orDpsOW3xXOQX%2FXkiICLHnRjw3de0%2Fr8Z92J1CMltHlSV0q6Gs5wJpajZamtW%2Fwj49eq7VKZU1TrSerwypMalZezGVPUgPIMJKugsAGOqUBVaLTiubiAs0nqDRkm94YynzOFg6veocOtH4JLt6v63QXsUKf%2FdQvjWKLyRG1t3jPcJfWyEORK4mJyKISl9Uskv86JHVZQKLi2UjM5lOZGVowv7feCyOZXKWp9bB%2BJ1FoN0nsSBRyKj1uTS38ATZosZcz45sfDzHh5V6pbLhMj0ULe20VIR3nz36lOQYvC3UX%2Fg2DpKZdMvur91jyWs9R8ZiaZIzS&X-Amz-Signature=ed56aa124ee4e370f28effa94864c2e534447b9350966ac718cac9fe074584b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BP6KP3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs4AZ2inrCbB2T9ELIkalJk5ei6FAJLYxFEjZQaBBymAiEAxmgEiYtG2OEH%2BRIfaaEPPq0CeQ%2B6niEvwUQ33YtVIToq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBp3BBFbMsgGGjfcqyrcAyNecpmV5onE4NSZRZKp9n4sCHD9EuGh%2FEpm%2B4LNPa%2FGEUK%2F%2BLflyrcPOlNt3IBd2eavjurAubtzUKdOkHEJ3i8Xq7DrGkwtmFx8E0zTodJl4mgHjn0NFbIkw4J6mJxmAEPXYsx6iC0%2F7oBvnqYB67VFFcmYI9MiXzisNLJFE4I4I7n8YrA%2FAAenhYjab8ZWD2LWqPgzdT4WQHdGsuJDcneV0pNjGyI8M5jIQT4qjK1aQjjcIR4AtFEYwiwRHlVX%2BML06a4FTG%2FvnorNZ79bENKhEFC9RjOkPAb4V291viWaIzahLPfPp66Otu38rW5klqj2Wri2M2H3PbKwkHJ07z3e6jVaCEtRRMTr2X9JeHwxg7Zn%2FWYA9nFTxYXq%2FklbprtlFkOuG%2FE%2BSErceYrjIZpvC9zAyLlkGsDkfkXCQRVvcPLYHftuuBVBVDvQ%2BXx%2BtIe%2Fz75wDcVINbiyTQKfaNly%2F%2B2p1CQS8j1pZj4elVKnqk1zncjsB%2FQwub1cmQyLepG9nM2aAC1SoLsvRQt7CjW2qQxk4orDpsOW3xXOQX%2FXkiICLHnRjw3de0%2Fr8Z92J1CMltHlSV0q6Gs5wJpajZamtW%2Fwj49eq7VKZU1TrSerwypMalZezGVPUgPIMJKugsAGOqUBVaLTiubiAs0nqDRkm94YynzOFg6veocOtH4JLt6v63QXsUKf%2FdQvjWKLyRG1t3jPcJfWyEORK4mJyKISl9Uskv86JHVZQKLi2UjM5lOZGVowv7feCyOZXKWp9bB%2BJ1FoN0nsSBRyKj1uTS38ATZosZcz45sfDzHh5V6pbLhMj0ULe20VIR3nz36lOQYvC3UX%2Fg2DpKZdMvur91jyWs9R8ZiaZIzS&X-Amz-Signature=ebf7274c97c94a296f9f1446da313fa82f0a0570c6ac547903d38d712ba1e279&X-Amz-SignedHeaders=host&x-id=GetObject)

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
