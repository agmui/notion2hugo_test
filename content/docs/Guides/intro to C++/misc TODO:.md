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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDHS5BV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAxf6o4jUD%2BWextpSAfH%2FMm%2F%2FtEt9Naxn8ATcMIjPw20AiEA%2Bt5mHH3QtLdf3chr4%2FTZ8v8YeJSLWFnpX1a1pCy2wiIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJs6NdQTBDWSlUdQbircA8QoL2AwOTHuXWODkncGxxHVR1uc1tTa32TX7tBx%2F9BFS8CtauTckGtQceAgeLrrjABeziGqnN6l3DMfVAcoWseC%2FLnf7zdmtAuaRWJc74RNjkrPB5%2Brg7Yx5exdj%2BMWqbGO0FCnzgAKjG5HOSJ0kr4x82o14qs5961r1VvS5QaIEcr3TQILy%2FQKTJm8fUCkDfBFUR2zyrrglkP%2BF%2FZOpukH3vGPHiXeUSDTniZt3Z9abXqpFJ63XwlQlBs%2BDNNLECn9ugqYBeIed1aWslpC3FYb%2FM5pMBHPhObktFBYDB1dVV1HDmDB%2BA0fGSge3QPhE5eRMe65%2FbWQw2QCudKvuN82PEnK6wQDPIV8fp0%2By39S98SJDrmCZMMwlA9%2F%2BSi%2BRpbfx4Jl%2F8fM0t9JiAYQb9k9VADOIg3%2FvqRNxU3LwwdkdTTSboIHu7rskUu0BlJl0NFsaA1%2FLhWJDKaTHdZL8cWk4m3vXcwYlnkh7DlRl2lnPtVR%2FM5%2FzDcXdFAComVl0qqCJojkOMmBGcLlVcgFATwwb2Y0h3fecU2oCV3QMTgOlfKVgEa3Hte4deC7WdnnIFCVp8f1QlVCxLkEy1UoFCHAEAOIauyQiTBmlBs40SRuUfsj9XTgyEDoJsVbMMG35cMGOqUBnxxLOYpeogJLgI9yEdCdxg6o9t7bcc0qiinT9fqluXdVDxco8X%2Focy2oIvmuFESAAeSvVW%2FM3x3ee8Ux8bW62AupN8NEXaKlcJChcPLls8exvuiaYrJnDg3BznyPDYC4LSwUHvHlg8EpB2YIbZMxVX7dKvmoCYLlS8g3UlG69dD4jgTECKDvgfM9NjYgQnaET2U9AZN6y1xoCv1ppS59bV8zXuKI&X-Amz-Signature=9ff233ed252e15ad3ed8834a5b2fbba8d7f587824389c7b087a99eaf4e98ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDHS5BV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAxf6o4jUD%2BWextpSAfH%2FMm%2F%2FtEt9Naxn8ATcMIjPw20AiEA%2Bt5mHH3QtLdf3chr4%2FTZ8v8YeJSLWFnpX1a1pCy2wiIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJs6NdQTBDWSlUdQbircA8QoL2AwOTHuXWODkncGxxHVR1uc1tTa32TX7tBx%2F9BFS8CtauTckGtQceAgeLrrjABeziGqnN6l3DMfVAcoWseC%2FLnf7zdmtAuaRWJc74RNjkrPB5%2Brg7Yx5exdj%2BMWqbGO0FCnzgAKjG5HOSJ0kr4x82o14qs5961r1VvS5QaIEcr3TQILy%2FQKTJm8fUCkDfBFUR2zyrrglkP%2BF%2FZOpukH3vGPHiXeUSDTniZt3Z9abXqpFJ63XwlQlBs%2BDNNLECn9ugqYBeIed1aWslpC3FYb%2FM5pMBHPhObktFBYDB1dVV1HDmDB%2BA0fGSge3QPhE5eRMe65%2FbWQw2QCudKvuN82PEnK6wQDPIV8fp0%2By39S98SJDrmCZMMwlA9%2F%2BSi%2BRpbfx4Jl%2F8fM0t9JiAYQb9k9VADOIg3%2FvqRNxU3LwwdkdTTSboIHu7rskUu0BlJl0NFsaA1%2FLhWJDKaTHdZL8cWk4m3vXcwYlnkh7DlRl2lnPtVR%2FM5%2FzDcXdFAComVl0qqCJojkOMmBGcLlVcgFATwwb2Y0h3fecU2oCV3QMTgOlfKVgEa3Hte4deC7WdnnIFCVp8f1QlVCxLkEy1UoFCHAEAOIauyQiTBmlBs40SRuUfsj9XTgyEDoJsVbMMG35cMGOqUBnxxLOYpeogJLgI9yEdCdxg6o9t7bcc0qiinT9fqluXdVDxco8X%2Focy2oIvmuFESAAeSvVW%2FM3x3ee8Ux8bW62AupN8NEXaKlcJChcPLls8exvuiaYrJnDg3BznyPDYC4LSwUHvHlg8EpB2YIbZMxVX7dKvmoCYLlS8g3UlG69dD4jgTECKDvgfM9NjYgQnaET2U9AZN6y1xoCv1ppS59bV8zXuKI&X-Amz-Signature=e0fb2cc9a7cbd7b676b10e306f487e02dbc566a2992b4a200cad90cf97e3cd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
