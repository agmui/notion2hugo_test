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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDO2HHA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdCb3Ck%2BqxfErV7g7bgdcROq3e03wo7xroA5NtucFmLAIhALqzSJUTyp434K%2FpxABzHK72Vj6HelxSoLsUc8xAhheFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZfH8NPVnYsFPTYUq3AM%2FC5K%2FxtmZsNBwNe1mCFJcloeMkP3VFyoacpvVj4hgUbadeMIg91WzueOAALtcTNlisBBZ8jopty4MBe%2F07pMRb6cptmshYno6AgoHd4hr8hG8w3qKBR5WzdO9sGF6mCQrnOzT0mPB1BXSyaChUR2UtS2m6YxzJA41V3vFMVnqZ0zVnVL1yrvuDF9VNQrDnf4jZP4KRYGQaaOWvubP1r%2FD%2FMsuCBtcvrJjYPN7Iui9SRo2olauVN7YtwhpotDZc%2FABEFW4N6tu3ZMJeQsa8oWBXuBg8B%2FzuJDlVSJJWR38JjbqXO6%2FLLXUC%2Fm%2FG7zsDfzapGrJMTASsJ%2BGSrWF83I%2F8thlxaZVfWzdCZw5u0FyxmJKKhaCKRxPhgKPR67qcT7YASogJNABwakLkMDe%2FV4pi2ST65fs6WzXPIGK7PcbCu3QcR1o6GST3JFC7POvhhn%2FOvvK0F%2Bd%2BMhQ6qPAJIj7wFSqbzYlhBPQBUHDW%2B6ycOqsS6g3JmM3pYFzAggqF8PzGImohbmDiBdMzpiUV3h4eqomrupm1dsHl9XlnjxotfZDfINSJHBjzQ%2FvdZ34cczTBeVDxXVVGMvR8%2BIur7Bziqgx6Rte7SbqGwtvFbpf1hENW5%2FkrTQw6RICtDCjqMPDBjqkAe2lTMEnulLd9cUO6RzU1IG8%2F4diZegAHiHL29uhXvzvbitrrT8ch5nT4yaVAwBinSX34x0sy3ObPBjrfixWYsZx80dObOYzH%2BpM04xsR20Vof7bVoUhjbDTJnUtIYdGe59bQvYGQMZrom2kOV7pZUstOzPkzV%2BrpHPEgWxcW1KJ5g8vhMFRhvJJxkjkGItNeTiHdi1E2hJTs0ug4r8tZeJbKD25&X-Amz-Signature=7cc3f5f19915bfcc8db0f3ce74757fd72eb7b64620061eb6a2021e2a2a03acf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDO2HHA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdCb3Ck%2BqxfErV7g7bgdcROq3e03wo7xroA5NtucFmLAIhALqzSJUTyp434K%2FpxABzHK72Vj6HelxSoLsUc8xAhheFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZfH8NPVnYsFPTYUq3AM%2FC5K%2FxtmZsNBwNe1mCFJcloeMkP3VFyoacpvVj4hgUbadeMIg91WzueOAALtcTNlisBBZ8jopty4MBe%2F07pMRb6cptmshYno6AgoHd4hr8hG8w3qKBR5WzdO9sGF6mCQrnOzT0mPB1BXSyaChUR2UtS2m6YxzJA41V3vFMVnqZ0zVnVL1yrvuDF9VNQrDnf4jZP4KRYGQaaOWvubP1r%2FD%2FMsuCBtcvrJjYPN7Iui9SRo2olauVN7YtwhpotDZc%2FABEFW4N6tu3ZMJeQsa8oWBXuBg8B%2FzuJDlVSJJWR38JjbqXO6%2FLLXUC%2Fm%2FG7zsDfzapGrJMTASsJ%2BGSrWF83I%2F8thlxaZVfWzdCZw5u0FyxmJKKhaCKRxPhgKPR67qcT7YASogJNABwakLkMDe%2FV4pi2ST65fs6WzXPIGK7PcbCu3QcR1o6GST3JFC7POvhhn%2FOvvK0F%2Bd%2BMhQ6qPAJIj7wFSqbzYlhBPQBUHDW%2B6ycOqsS6g3JmM3pYFzAggqF8PzGImohbmDiBdMzpiUV3h4eqomrupm1dsHl9XlnjxotfZDfINSJHBjzQ%2FvdZ34cczTBeVDxXVVGMvR8%2BIur7Bziqgx6Rte7SbqGwtvFbpf1hENW5%2FkrTQw6RICtDCjqMPDBjqkAe2lTMEnulLd9cUO6RzU1IG8%2F4diZegAHiHL29uhXvzvbitrrT8ch5nT4yaVAwBinSX34x0sy3ObPBjrfixWYsZx80dObOYzH%2BpM04xsR20Vof7bVoUhjbDTJnUtIYdGe59bQvYGQMZrom2kOV7pZUstOzPkzV%2BrpHPEgWxcW1KJ5g8vhMFRhvJJxkjkGItNeTiHdi1E2hJTs0ug4r8tZeJbKD25&X-Amz-Signature=e54d03c6ca670443d00a42ec14e319c2a288cca37d69c1ce789d43288770a0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
