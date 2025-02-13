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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LB6TB3H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTKOKh2uDauaPFwKttxMn8VrdPK6X9Sm%2FDiwEbSy1suQIgDEt8zeb2qZ5KRYe%2FvookS1e97IeRNSnMPRJWT0qFWIQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTa0loqAS%2FihveEiSrcA3WJwQna6s2KzC%2BhChkwD2TbEVqFg%2Ba46FzklJ3nYf4EtwAwVLL7%2BDoiCkiNuoKza%2BXuH8VHokzMbI9aqaO%2Byw6ErvSIMFW503CktpGCjGxq%2BqFDAxcOCodKIekSleGnw2bWfnz9yYZk8KIRufnZcoIPhOf4YM%2FVVCZEU6AJj9nMD%2FQhKOpnf2AGop0gE5%2FvrLLbtCqRzGq%2BMUNl1XtPh65v38lW9qc4P%2FODv406Jtx%2F%2FUVWhF9nGkMKWXEEqzvysIvgLLBT2G9o9tODCAAVBR2vZ76iS8%2FXFKajkJK2jhKfMAWpMVnvIHSYdCnIxVxssMijl%2F3KFyzWDtr9x03GL6FmHHkTZIbHqWTinJR6ZnUO4PRhSOMr2k4BNlp4u24dyLVYMBodOC3A5KEFkYPcFSgaZSGGbLswF8qqPhxqGbA7U1P5ilPb3GnUj8ONE9A6VNWABuV3eyZzzFDYi0xQfMUQoFtdpclC6t9s5SVZ2Vbt5Vuy1lLRAXCwVAa0LyJTjbQI%2F%2Bzakyzezafqgl0pmXv1YuVGflf43KC1UrB4U%2FxLJMWpoQ6Filk3WQ%2FDpRqEQhF8p2WU1DPt4sEY2%2BDnqeEUrfDvwr4hB0pFIJ25l%2BAF5aleAz3FwdycuBO%2FMMbhtL0GOqUB8HENJydKt83gbynFkDpO1I5LFp1wG8C6VDlPco%2FmulUx6A5QJdscyGDxEleyPOLhFIyj3nWHXZlqoQ38qR%2Bx8JSXcG21Cgxc2Upqq8gOdqezEq%2BpYmrZbu9WBnyMFyXLRztOiLRFROejuHDEtUeVWASpyX9sE%2FVh4VOgtlC6YtEeRTgvbQuVBjUfm0jR83GrtmmxHbYzViyXn%2BUEp257ifI4Ytn7&X-Amz-Signature=5938698aa4f5a51e0be7500f7e499391a8c2dcf368a495f8e10ec906fa8c5166&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LB6TB3H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTKOKh2uDauaPFwKttxMn8VrdPK6X9Sm%2FDiwEbSy1suQIgDEt8zeb2qZ5KRYe%2FvookS1e97IeRNSnMPRJWT0qFWIQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTa0loqAS%2FihveEiSrcA3WJwQna6s2KzC%2BhChkwD2TbEVqFg%2Ba46FzklJ3nYf4EtwAwVLL7%2BDoiCkiNuoKza%2BXuH8VHokzMbI9aqaO%2Byw6ErvSIMFW503CktpGCjGxq%2BqFDAxcOCodKIekSleGnw2bWfnz9yYZk8KIRufnZcoIPhOf4YM%2FVVCZEU6AJj9nMD%2FQhKOpnf2AGop0gE5%2FvrLLbtCqRzGq%2BMUNl1XtPh65v38lW9qc4P%2FODv406Jtx%2F%2FUVWhF9nGkMKWXEEqzvysIvgLLBT2G9o9tODCAAVBR2vZ76iS8%2FXFKajkJK2jhKfMAWpMVnvIHSYdCnIxVxssMijl%2F3KFyzWDtr9x03GL6FmHHkTZIbHqWTinJR6ZnUO4PRhSOMr2k4BNlp4u24dyLVYMBodOC3A5KEFkYPcFSgaZSGGbLswF8qqPhxqGbA7U1P5ilPb3GnUj8ONE9A6VNWABuV3eyZzzFDYi0xQfMUQoFtdpclC6t9s5SVZ2Vbt5Vuy1lLRAXCwVAa0LyJTjbQI%2F%2Bzakyzezafqgl0pmXv1YuVGflf43KC1UrB4U%2FxLJMWpoQ6Filk3WQ%2FDpRqEQhF8p2WU1DPt4sEY2%2BDnqeEUrfDvwr4hB0pFIJ25l%2BAF5aleAz3FwdycuBO%2FMMbhtL0GOqUB8HENJydKt83gbynFkDpO1I5LFp1wG8C6VDlPco%2FmulUx6A5QJdscyGDxEleyPOLhFIyj3nWHXZlqoQ38qR%2Bx8JSXcG21Cgxc2Upqq8gOdqezEq%2BpYmrZbu9WBnyMFyXLRztOiLRFROejuHDEtUeVWASpyX9sE%2FVh4VOgtlC6YtEeRTgvbQuVBjUfm0jR83GrtmmxHbYzViyXn%2BUEp257ifI4Ytn7&X-Amz-Signature=f8ea0df42507ce1c4ba83a78f1a9f05ab7ce7e57191227d8d0325a3c8cdaa6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
