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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MQSRE2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHXQszDRsD8T5Y6LdDxu8VgPvdn1nBQLPA1HrJCg1AgIhAINnGCiolsxD4sCtCyXbLGBWuu%2FOY3nvJHb%2Bf27JCTtWKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK9mn3dGJB9GLneagq3APCUuFxBzoPJL3khAPP98H7C7jGChXlwjRrX0yBmVlrFFp9JmsNkp56xSSv5UPbpu%2FVmFJj71J2A2shICHIXy5cU%2BtAOC%2BMao62s%2FXbMOOsXLSPRD1o4A8w4NEjW2X6AjlabGrJYUsikdSpppxEwYyo2x0po6mNkmmJa0Wz7swkKBtgyYiDAP7VBlLMuYU3ZrJ4ZZFc2LIIOy9QssaLHdrP1S6kxguxf9rddRSUxdgz9b1dULOAhQRhYtslLO%2FTF9xU3IDMP%2F14qZPI3YJl9bNsm6mZnnmZ%2FSoecy0HmlhNujHjgy4Xiid%2FozK1tViu9%2FG0LeN8B0v3EeeG0heZv6R5vpN%2B6aBqzNdeTx5rw2JkwXwEozS7dPSKG5bapgYZYLwoo%2Bifgrpjg2VN2OJd071yHDTMYg67igFpoW7oAtpjO4c%2BdmToUFc5GBC9Wp12%2BhaLvUlcOSXWTGcJgv88eVNaKBoHw%2BmbEpHt8OgTy6WzEXmsYPoXiDwvkiFCDf7QAaRQs%2F%2BJGqMKtReZRbQMt0yxCdy%2FbWbOKWoYRcVjyfhEN%2BFyYjJidfGUnxtWA6gHp3U8vExFGb0YbyNSpTome2Uthy%2BizTaOAguGSW6VJRgk3K%2FQk5wBltbdP7tTdDCxobTEBjqkASO748%2FoYibt%2BHNOjnyH6JVFO%2F9cE%2BSFu6wa3G1PDuWruwd1kkNg2BRNuzqSsyDyRXKt4MTsCGTpA2gwG8cMyk0BocDvaQ7ak4LQeAyDL9TkIKP%2B1y5rcDK1c1Yim2WgZvn%2B7WXNo6ZpQW%2F4hCbRWbBnKvhK6zS057GHQM0bEInX3FKnv3lJv8qEmK5irAzPRQwGi9Es5tKxBdvjoypdaEN%2B9%2Bnw&X-Amz-Signature=a0de42250b27b6963c9f5ef9189f08eb5c726f521d09fac773c76fd9c986cc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MQSRE2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHXQszDRsD8T5Y6LdDxu8VgPvdn1nBQLPA1HrJCg1AgIhAINnGCiolsxD4sCtCyXbLGBWuu%2FOY3nvJHb%2Bf27JCTtWKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK9mn3dGJB9GLneagq3APCUuFxBzoPJL3khAPP98H7C7jGChXlwjRrX0yBmVlrFFp9JmsNkp56xSSv5UPbpu%2FVmFJj71J2A2shICHIXy5cU%2BtAOC%2BMao62s%2FXbMOOsXLSPRD1o4A8w4NEjW2X6AjlabGrJYUsikdSpppxEwYyo2x0po6mNkmmJa0Wz7swkKBtgyYiDAP7VBlLMuYU3ZrJ4ZZFc2LIIOy9QssaLHdrP1S6kxguxf9rddRSUxdgz9b1dULOAhQRhYtslLO%2FTF9xU3IDMP%2F14qZPI3YJl9bNsm6mZnnmZ%2FSoecy0HmlhNujHjgy4Xiid%2FozK1tViu9%2FG0LeN8B0v3EeeG0heZv6R5vpN%2B6aBqzNdeTx5rw2JkwXwEozS7dPSKG5bapgYZYLwoo%2Bifgrpjg2VN2OJd071yHDTMYg67igFpoW7oAtpjO4c%2BdmToUFc5GBC9Wp12%2BhaLvUlcOSXWTGcJgv88eVNaKBoHw%2BmbEpHt8OgTy6WzEXmsYPoXiDwvkiFCDf7QAaRQs%2F%2BJGqMKtReZRbQMt0yxCdy%2FbWbOKWoYRcVjyfhEN%2BFyYjJidfGUnxtWA6gHp3U8vExFGb0YbyNSpTome2Uthy%2BizTaOAguGSW6VJRgk3K%2FQk5wBltbdP7tTdDCxobTEBjqkASO748%2FoYibt%2BHNOjnyH6JVFO%2F9cE%2BSFu6wa3G1PDuWruwd1kkNg2BRNuzqSsyDyRXKt4MTsCGTpA2gwG8cMyk0BocDvaQ7ak4LQeAyDL9TkIKP%2B1y5rcDK1c1Yim2WgZvn%2B7WXNo6ZpQW%2F4hCbRWbBnKvhK6zS057GHQM0bEInX3FKnv3lJv8qEmK5irAzPRQwGi9Es5tKxBdvjoypdaEN%2B9%2Bnw&X-Amz-Signature=b6dd6009038756e95285727d7c398de86019aa4e36696223da76fc8bad5cda5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
