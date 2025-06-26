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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUBXI5X%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGxtrLv5rYiD%2BvUsNxFpWr5NrkxjJMzJ1Ic5lqLiROI5AiEA0hDJ6F%2BlKS%2BjqcLMGBQWk21pZuGx3JmfriuS7w105Dsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLKw%2BC305mUu0K1JhCrcA%2BjiuacTjSWJPhtEa2Ekb2vMCjQCG8xxSj5NJnMA%2BiILT8A%2F7HnroECNpYryfiOjrJKDu6vBkHi4YOOHy4Ho4PVqHZ3YBfJzfFhIiN0chIIHIjCur1UeY5GZ3zcn2DQiPXrxP3h73JRkZG6cQip7tuDvwC6WTOon53cFF%2B6nS6V1tujuyZsKeWfze8dIYVOQL7raXU7OjOopDVZTyr%2BerAc5KqhVCCeULKA0U0ZYKVSebqG9Lbc6TUpIWnzOzmhzuJ%2FtkBs1QQ%2FyyqoSRKl28S1nTnrQtLEs%2BZymmsMRx9pC%2F8k35bdgXZn%2F6yPDvLPh3ixmloPbKYTn4q9p4D4jIoD07yevHVtoifIb5Lf6KI4Z3OLLCb%2ByxkBQdzItXcRSeg11%2FtJOtcqvOiXHsZVMKWdv%2BuOfxENl8%2BBf%2FZCN1oedeK5OhPYTkoWpA3Wh2hVtMN%2FpD3UnhfBw6w3Z56ZMrpWakEHZlNTK9dxha3oUtPjXhHV1Q1za99m7MVWboR%2BFqJdkuHkUS%2B2bASiRGbNpGZo20wuqwP5CNltbPmQIVedmz9O8zMzK3DciNJ3Q0WyPoC%2FD7s24%2F2UWCUF%2F7a75iIt8R%2FhFZ8%2FDeNkqIUP%2BsDprTHK8ERF6f6qx5VOpMIGW9MIGOqUBnJmjZhSHoTs9WrgNr3BzxIyEc1essAmgRVUdu%2BmP93ca5uNInPc5NHjApYMP9Rg0HbxpIyRumTgv0YuM%2BTnpUfsSZVnRNeL5hoBgXoAHu5BhiHBcXU96HZtWVhCpP%2FLz0A%2FxMese3P8Uj8UPihB9lglbb7u5BmXIjwHfoezvIrqdWo9bgBDuNY7TO1qDP9%2FACO%2FMhfw5qlaggvs%2FmJR1IDLPymSR&X-Amz-Signature=f6bdbdfc9162f08869c3f896c2639e77c0ce8b4140de7b39a23912de1a9e11c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUBXI5X%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGxtrLv5rYiD%2BvUsNxFpWr5NrkxjJMzJ1Ic5lqLiROI5AiEA0hDJ6F%2BlKS%2BjqcLMGBQWk21pZuGx3JmfriuS7w105Dsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLKw%2BC305mUu0K1JhCrcA%2BjiuacTjSWJPhtEa2Ekb2vMCjQCG8xxSj5NJnMA%2BiILT8A%2F7HnroECNpYryfiOjrJKDu6vBkHi4YOOHy4Ho4PVqHZ3YBfJzfFhIiN0chIIHIjCur1UeY5GZ3zcn2DQiPXrxP3h73JRkZG6cQip7tuDvwC6WTOon53cFF%2B6nS6V1tujuyZsKeWfze8dIYVOQL7raXU7OjOopDVZTyr%2BerAc5KqhVCCeULKA0U0ZYKVSebqG9Lbc6TUpIWnzOzmhzuJ%2FtkBs1QQ%2FyyqoSRKl28S1nTnrQtLEs%2BZymmsMRx9pC%2F8k35bdgXZn%2F6yPDvLPh3ixmloPbKYTn4q9p4D4jIoD07yevHVtoifIb5Lf6KI4Z3OLLCb%2ByxkBQdzItXcRSeg11%2FtJOtcqvOiXHsZVMKWdv%2BuOfxENl8%2BBf%2FZCN1oedeK5OhPYTkoWpA3Wh2hVtMN%2FpD3UnhfBw6w3Z56ZMrpWakEHZlNTK9dxha3oUtPjXhHV1Q1za99m7MVWboR%2BFqJdkuHkUS%2B2bASiRGbNpGZo20wuqwP5CNltbPmQIVedmz9O8zMzK3DciNJ3Q0WyPoC%2FD7s24%2F2UWCUF%2F7a75iIt8R%2FhFZ8%2FDeNkqIUP%2BsDprTHK8ERF6f6qx5VOpMIGW9MIGOqUBnJmjZhSHoTs9WrgNr3BzxIyEc1essAmgRVUdu%2BmP93ca5uNInPc5NHjApYMP9Rg0HbxpIyRumTgv0YuM%2BTnpUfsSZVnRNeL5hoBgXoAHu5BhiHBcXU96HZtWVhCpP%2FLz0A%2FxMese3P8Uj8UPihB9lglbb7u5BmXIjwHfoezvIrqdWo9bgBDuNY7TO1qDP9%2FACO%2FMhfw5qlaggvs%2FmJR1IDLPymSR&X-Amz-Signature=fb81e2495dda56e19ad15dea7efa799257864e2eada2fd0e81251c642e2ae853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
