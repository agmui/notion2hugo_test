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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73DYN4R%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ocWlkavTmVoVoporElTZObY4iBHelSvPBFbGXs5XxwIgPdLG0p4ElIYt%2Bk0DHu4IfZXDdbzMmYWFShZt54El58kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTMOhk4oWQafLPe1SrcA3xu4f1OKPX%2FJSSnCKzeSraPPUiqqu%2BwwEQCzyjGOW%2Fr%2FmA8RUUQXZSxSSY401u4zCnJIFIf2Ah1gPtiuNEKGPOaEQxvU8hV1Obrlm8k%2BA5ak718MM0dNtsJK1WSX9qJ32GTuiPW%2BruKE2UE395jTFEYCHgq5pgCHjVX%2FR0sMPe8230Be9hV6e9zulgkxPqCUGUuwthNl0f82el5p41eJ%2BqdZgDOnYbzXWKfBrP4fFeAu7JOvVGdkY1z%2BgUZf8Z1B09lhPdQ%2FDK2a8cboR%2BMtFeRbfRSLUfAWOZveos7L74tAi3ii7X0OscpWV9EdNG0r9fzb9yiwjv1HJXmLPS9QG33wSWpm%2Bo69MhZW2m%2BNS7jK38VEGQTlzfx370oj2FDkAtM7jZacg4Vs5dsLWUouIIpPTBhobEJK0epr%2FqE1RN3PrJ81lMcwpAmynrJxPbHHg4v%2FKRKTSEQsS%2FxN8CRC%2BmzER2Xuk1z8Gl%2FR0zqjBXeRe%2B1bb%2BrXtLfBCjQLbynZKKbvPbl1J9xLqVEmuv%2BfFRvPIMQxUCgv8qI%2B1WBYj9KBNf%2FYIehzVElCXv%2FMCSOC8WllMjg0zhcrsiyFpFKtag5fEY%2F8V7l7WUibUQAHhaSgkZH%2FOzPMKhRCK6LMJWkycIGOqUB65gcFBraVzDSSZPAI7omgWucP2Ueo1DQBOPTDSyddfEnyhpadoaPEg9O5xyG8zrcZlD74HdUwQ0qFCz83pDFrA7uH30q0tmttr1CghjmQdUyXjdw7SjFHDBu6rzWy2mkYizMKN7W1mcjycjmeiyUMzflLOpeEWnXrzryr8n9ZkIgBRTOx7ZGrEaKu4RmSsXP0M1GPp9iRq6Zjhyk432WXEsW29bc&X-Amz-Signature=011853413c4f7c5f35326f0d9b4155afcaf18f87858e52d2f85f356b31b21fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73DYN4R%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ocWlkavTmVoVoporElTZObY4iBHelSvPBFbGXs5XxwIgPdLG0p4ElIYt%2Bk0DHu4IfZXDdbzMmYWFShZt54El58kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTMOhk4oWQafLPe1SrcA3xu4f1OKPX%2FJSSnCKzeSraPPUiqqu%2BwwEQCzyjGOW%2Fr%2FmA8RUUQXZSxSSY401u4zCnJIFIf2Ah1gPtiuNEKGPOaEQxvU8hV1Obrlm8k%2BA5ak718MM0dNtsJK1WSX9qJ32GTuiPW%2BruKE2UE395jTFEYCHgq5pgCHjVX%2FR0sMPe8230Be9hV6e9zulgkxPqCUGUuwthNl0f82el5p41eJ%2BqdZgDOnYbzXWKfBrP4fFeAu7JOvVGdkY1z%2BgUZf8Z1B09lhPdQ%2FDK2a8cboR%2BMtFeRbfRSLUfAWOZveos7L74tAi3ii7X0OscpWV9EdNG0r9fzb9yiwjv1HJXmLPS9QG33wSWpm%2Bo69MhZW2m%2BNS7jK38VEGQTlzfx370oj2FDkAtM7jZacg4Vs5dsLWUouIIpPTBhobEJK0epr%2FqE1RN3PrJ81lMcwpAmynrJxPbHHg4v%2FKRKTSEQsS%2FxN8CRC%2BmzER2Xuk1z8Gl%2FR0zqjBXeRe%2B1bb%2BrXtLfBCjQLbynZKKbvPbl1J9xLqVEmuv%2BfFRvPIMQxUCgv8qI%2B1WBYj9KBNf%2FYIehzVElCXv%2FMCSOC8WllMjg0zhcrsiyFpFKtag5fEY%2F8V7l7WUibUQAHhaSgkZH%2FOzPMKhRCK6LMJWkycIGOqUB65gcFBraVzDSSZPAI7omgWucP2Ueo1DQBOPTDSyddfEnyhpadoaPEg9O5xyG8zrcZlD74HdUwQ0qFCz83pDFrA7uH30q0tmttr1CghjmQdUyXjdw7SjFHDBu6rzWy2mkYizMKN7W1mcjycjmeiyUMzflLOpeEWnXrzryr8n9ZkIgBRTOx7ZGrEaKu4RmSsXP0M1GPp9iRq6Zjhyk432WXEsW29bc&X-Amz-Signature=d9abd781a6d7014273954b7f72afe4e2480637608f531bb62ec031bb9d651125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
