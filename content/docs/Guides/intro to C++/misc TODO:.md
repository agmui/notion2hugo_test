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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IWWPM4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhu5Cmp85dprTUwpNhtuTJ5jJy8l87Cy4fS7OO5PKxoAiEAlK7j%2F4Kyrp%2BgdEBojcajlKbY5JHxq9mn4nHfkaAibLkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxc1kmofx%2BgMm4opSrcA6TS1CF8IjVkyN4fa99qjSTSBnwYxv1Xu%2FHXsQD0IKvB8K9R0ZIYVISSLQlGlYHjocA5%2B8QBWpypGbS7Ba0g%2Fs9t%2FQouMBJl8xYsZQU%2F2c4WDgbMGl1bqaUODy3uM%2BJIzsWRcoxuFSAzZVQNU1hbmN%2BvatJ1L9uC6NAgu%2FUwjOGFcibOPMKQWyLdlSLhEfP66RbD99Tt5ltV7zp7zzDPolaKUPP1rsXA9gpEznoybmJCTL30IPr5cKvK0Z2%2Fia68WLirkO6rasQIwoGj6WSh%2BhJjbudV1Xg0nvjFu7CHwjwW9RaIaqPeNYiuQ%2BjoiDsyWuklP%2ByMngiGxQ4BQAjzQtFcviQ14nWydqPbf9xFsLNKvv02%2BuWQTeK3iPiXKauRtRRypkCWBeP%2FbMpPYKa16L2Dkh46PGZK1ZTGp17cg3kA3lDRf9dTsJJAxFNr8ZGXhWCj%2FecYo9Crc7M9n0Tr98PJFVDtqGXu9bOtBacba%2BukPpcHjHdm2Tsn17ijFGkENkDTkJoDolmXb7MW8S6%2BdenDXlYG6kqojtxQyHdg%2BZoMFt1q7B3XWPsUIv%2BvbzExP3ZXotopVBiqOC2xX4rGpTk3BFFfnlL62JpJGfh%2FdFqIR513nplcWLKdEMkQMJ6Rsb0GOqUBtG3aetlozyQ8I4rEMvDclG6SeDDwnaZejdGONsOprNcIiyrtXArCh5IeiT1wmNH601ydjQ8t2AFlzzyDy3sMQxCJa4LRhAaH3KRAj71v4OT08d8u8dfXpof6NJctRJSErcVPCfZrvmHyfHW4P3LCrRaNX02A0HnNC1ohymcGi6SCe8c0MWbJHIhEd88AVP3R1NNnh45sXnrZNqg48D3eFMLxESZx&X-Amz-Signature=f70f1930a39b8a2aca52b6e738370ee2f5f218e5d5e1cc0f46451565c87f1abb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IWWPM4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhu5Cmp85dprTUwpNhtuTJ5jJy8l87Cy4fS7OO5PKxoAiEAlK7j%2F4Kyrp%2BgdEBojcajlKbY5JHxq9mn4nHfkaAibLkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxc1kmofx%2BgMm4opSrcA6TS1CF8IjVkyN4fa99qjSTSBnwYxv1Xu%2FHXsQD0IKvB8K9R0ZIYVISSLQlGlYHjocA5%2B8QBWpypGbS7Ba0g%2Fs9t%2FQouMBJl8xYsZQU%2F2c4WDgbMGl1bqaUODy3uM%2BJIzsWRcoxuFSAzZVQNU1hbmN%2BvatJ1L9uC6NAgu%2FUwjOGFcibOPMKQWyLdlSLhEfP66RbD99Tt5ltV7zp7zzDPolaKUPP1rsXA9gpEznoybmJCTL30IPr5cKvK0Z2%2Fia68WLirkO6rasQIwoGj6WSh%2BhJjbudV1Xg0nvjFu7CHwjwW9RaIaqPeNYiuQ%2BjoiDsyWuklP%2ByMngiGxQ4BQAjzQtFcviQ14nWydqPbf9xFsLNKvv02%2BuWQTeK3iPiXKauRtRRypkCWBeP%2FbMpPYKa16L2Dkh46PGZK1ZTGp17cg3kA3lDRf9dTsJJAxFNr8ZGXhWCj%2FecYo9Crc7M9n0Tr98PJFVDtqGXu9bOtBacba%2BukPpcHjHdm2Tsn17ijFGkENkDTkJoDolmXb7MW8S6%2BdenDXlYG6kqojtxQyHdg%2BZoMFt1q7B3XWPsUIv%2BvbzExP3ZXotopVBiqOC2xX4rGpTk3BFFfnlL62JpJGfh%2FdFqIR513nplcWLKdEMkQMJ6Rsb0GOqUBtG3aetlozyQ8I4rEMvDclG6SeDDwnaZejdGONsOprNcIiyrtXArCh5IeiT1wmNH601ydjQ8t2AFlzzyDy3sMQxCJa4LRhAaH3KRAj71v4OT08d8u8dfXpof6NJctRJSErcVPCfZrvmHyfHW4P3LCrRaNX02A0HnNC1ohymcGi6SCe8c0MWbJHIhEd88AVP3R1NNnh45sXnrZNqg48D3eFMLxESZx&X-Amz-Signature=1a4d4b703cb90e5716a53d879a905243095b09698b525d10e84cc8db897212e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
