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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JWJJIH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC7V6psF1Sc4%2FB1Kzfzd8zhEcjf%2BqL3POZbyInbjSrs4AIhAIkJVP74GZOjn%2FRlpZqUW4nGUIHK9P7oTfz89765FQATKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP6Zf47l%2BbCRtv164q3APMEYofoH%2BmE04mj459S%2FKA%2FN0%2FTBaoFgYtUn0jJXPuiD8iNlPYgGdbKvfWN32M9oY7pLjnUzwICvAXSpmmn9%2FF4tYdcX1KD%2FUoJDKyyZU0%2BBoDNqfCfxf6raxq19RCcZ8fyen4hHaI6Y8q7KOvVCB7bxKJnnujs%2Bdjt92m8xvxI1dShxyoa5oB9NYZd24jPfyENs1Mf8rOMGYvTlSB7UidbWyZEjAYPpjcnzJNLI7at20gjf0A1IurzTFF5L3TPnGCam49qRRqfsoyhBdJoRkB02vYYKQEXK5w9nG8tzF7XdASYcATYDEB3vxClNXwpl8PQe%2FHPXXeukk%2BiYSM%2BkrirqlnL5b%2Fkqk9vweFw7OuAQzJP0BufxlaGrIRaUCScXK%2BO4Aj%2FF1v5DCxrFUMQURwiADodVHw4icBWPQzFY0OkCt5AklyGSDYXSPwt%2F1dqb64s0lAoMZFtV1UGuOmIVIf2oyQIN5z2OMF7sA5xafroPzntXQRVOtVDmUtjt%2Bll2Ef6FO27hbK%2FDDMskBGWlvQykxil5DOtn%2FlaRrtpuhsH1RQQP1%2B8zi18opUEzMGiDZFLITXSSZJ7lq0jwkVbqYImPJiJNCTq7kZt3e1Lp%2F7%2BoEQcf%2Bdoz6z%2F%2BN0JzCR6aLABjqkAam%2FFWEFMSjwRepFkF8Dm5Yb4%2F5hGn6MCg9a6bOcho650kXq%2BllBXi2CONX02bp1Zp3GE8Q7E06Z0vSkaTAON0m2mVj63DwXmEtvmSAgilhjO6FkuBdWmDCahCD7UEKC1wUQRL3QCNWbaj64OxvX3wXSKHJTEKmLlmyTbUIdihYpaI6uzGqUfVoKNtV5qcLFEt63OzFbPUmfuk5%2FkJnXlmUnp%2FmX&X-Amz-Signature=69829b694b15a683a7b0025984389bd6556a5f7c8a3078dce0c560a062dd726b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JWJJIH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC7V6psF1Sc4%2FB1Kzfzd8zhEcjf%2BqL3POZbyInbjSrs4AIhAIkJVP74GZOjn%2FRlpZqUW4nGUIHK9P7oTfz89765FQATKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP6Zf47l%2BbCRtv164q3APMEYofoH%2BmE04mj459S%2FKA%2FN0%2FTBaoFgYtUn0jJXPuiD8iNlPYgGdbKvfWN32M9oY7pLjnUzwICvAXSpmmn9%2FF4tYdcX1KD%2FUoJDKyyZU0%2BBoDNqfCfxf6raxq19RCcZ8fyen4hHaI6Y8q7KOvVCB7bxKJnnujs%2Bdjt92m8xvxI1dShxyoa5oB9NYZd24jPfyENs1Mf8rOMGYvTlSB7UidbWyZEjAYPpjcnzJNLI7at20gjf0A1IurzTFF5L3TPnGCam49qRRqfsoyhBdJoRkB02vYYKQEXK5w9nG8tzF7XdASYcATYDEB3vxClNXwpl8PQe%2FHPXXeukk%2BiYSM%2BkrirqlnL5b%2Fkqk9vweFw7OuAQzJP0BufxlaGrIRaUCScXK%2BO4Aj%2FF1v5DCxrFUMQURwiADodVHw4icBWPQzFY0OkCt5AklyGSDYXSPwt%2F1dqb64s0lAoMZFtV1UGuOmIVIf2oyQIN5z2OMF7sA5xafroPzntXQRVOtVDmUtjt%2Bll2Ef6FO27hbK%2FDDMskBGWlvQykxil5DOtn%2FlaRrtpuhsH1RQQP1%2B8zi18opUEzMGiDZFLITXSSZJ7lq0jwkVbqYImPJiJNCTq7kZt3e1Lp%2F7%2BoEQcf%2Bdoz6z%2F%2BN0JzCR6aLABjqkAam%2FFWEFMSjwRepFkF8Dm5Yb4%2F5hGn6MCg9a6bOcho650kXq%2BllBXi2CONX02bp1Zp3GE8Q7E06Z0vSkaTAON0m2mVj63DwXmEtvmSAgilhjO6FkuBdWmDCahCD7UEKC1wUQRL3QCNWbaj64OxvX3wXSKHJTEKmLlmyTbUIdihYpaI6uzGqUfVoKNtV5qcLFEt63OzFbPUmfuk5%2FkJnXlmUnp%2FmX&X-Amz-Signature=53112d3bbf2ad04644798205e9023e7d3a6a8c4589186f107640f5a4c197acc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
