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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCSKICI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1vKIBBH%2BfNXMn7lDz1CDM6PmeEGAdF6GJPyO3HssOuwIgE2u2OL71BnApaV3NFo7tM7byWuP%2BtqwQ41D%2BQL40kFMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpHpwr2Cd7z%2FjFDiSrcA2mk7qNwBpd3h%2BBeJ%2Fm%2FIYhvDFjc1PCnT89D%2BeQDJNh1I9AyepDrSJphYmNQei3yiRkovrH%2BxZAC%2B%2FNnpB2ErMWOxcNsa13NwL7tiqrDgkAZ32dC7DY6oIR7JonaIH3MFABU4xdMlkxq69iXVXM7bc1EmyaeX%2B6%2B5y5XQ4%2B6U%2FnQzd87uQX47PTrtB5ODbKaPrHROoMhkrOt6LoParJE9D0yaBZIHKj7%2FA8WrtYTDf3DolicS8%2F10a2YZoWpOinPip2yFMnla28lf0msDEAg6nouRMKUwiQxw%2FPc6FViZ%2FSh9dtc2DdN%2FzUMS7u0d6l6UeDBJlZD1QwcdVi2qsv5iuyB5L2noe6mmpt2Q114mf5lipytZT91hCfuMQH6%2B9h70OJo%2BS4SUi1mYtqRNb2hFciqM1lX7i8S6T7gCrX4HmEwpYGKHCfLrH3PSf9EbdI2RFmYyhxWguO1sdu0upuH3YrcDJqnATzkp2WB1u1%2F6WvXNo7NO8hC9jGBBxQ4ldCZZRCd1o0sBjKHYaiFRE81MYUWenP%2Fq%2BV5L96xayr1Bsb34qIwQDFuisQd6FaW%2F7Lwd3sJWZ7TsXIxBBTBxe8npmJ%2FhlRDeqGoYZt28JlByW4G36vKGe7JTxTECub6MOHe2r0GOqUBqVmHptTTk%2BO9phutHECeTK8JzVLnJESXs%2BfgrFy2h32NVRjrSrvmZnGfgZ2%2FYOKgzPwQ9GGCe4FoPQ78fjT7QienV01MjRZ1UQOe1zAtNS2D00%2BBacBnsXRlb4EnyHfPlCqSYKSfAXLTHtLkmpA7PYrPriKg2d%2Fj6yrqZmVCoelTbb8DqSbVo%2B7HdO185APtjAuaRdEhj%2FlXlBdAPZ2O7jakqLmu&X-Amz-Signature=57177840999a4f462f9c15172dd470fbe70196b0530e917168834c859eca0c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCSKICI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1vKIBBH%2BfNXMn7lDz1CDM6PmeEGAdF6GJPyO3HssOuwIgE2u2OL71BnApaV3NFo7tM7byWuP%2BtqwQ41D%2BQL40kFMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpHpwr2Cd7z%2FjFDiSrcA2mk7qNwBpd3h%2BBeJ%2Fm%2FIYhvDFjc1PCnT89D%2BeQDJNh1I9AyepDrSJphYmNQei3yiRkovrH%2BxZAC%2B%2FNnpB2ErMWOxcNsa13NwL7tiqrDgkAZ32dC7DY6oIR7JonaIH3MFABU4xdMlkxq69iXVXM7bc1EmyaeX%2B6%2B5y5XQ4%2B6U%2FnQzd87uQX47PTrtB5ODbKaPrHROoMhkrOt6LoParJE9D0yaBZIHKj7%2FA8WrtYTDf3DolicS8%2F10a2YZoWpOinPip2yFMnla28lf0msDEAg6nouRMKUwiQxw%2FPc6FViZ%2FSh9dtc2DdN%2FzUMS7u0d6l6UeDBJlZD1QwcdVi2qsv5iuyB5L2noe6mmpt2Q114mf5lipytZT91hCfuMQH6%2B9h70OJo%2BS4SUi1mYtqRNb2hFciqM1lX7i8S6T7gCrX4HmEwpYGKHCfLrH3PSf9EbdI2RFmYyhxWguO1sdu0upuH3YrcDJqnATzkp2WB1u1%2F6WvXNo7NO8hC9jGBBxQ4ldCZZRCd1o0sBjKHYaiFRE81MYUWenP%2Fq%2BV5L96xayr1Bsb34qIwQDFuisQd6FaW%2F7Lwd3sJWZ7TsXIxBBTBxe8npmJ%2FhlRDeqGoYZt28JlByW4G36vKGe7JTxTECub6MOHe2r0GOqUBqVmHptTTk%2BO9phutHECeTK8JzVLnJESXs%2BfgrFy2h32NVRjrSrvmZnGfgZ2%2FYOKgzPwQ9GGCe4FoPQ78fjT7QienV01MjRZ1UQOe1zAtNS2D00%2BBacBnsXRlb4EnyHfPlCqSYKSfAXLTHtLkmpA7PYrPriKg2d%2Fj6yrqZmVCoelTbb8DqSbVo%2B7HdO185APtjAuaRdEhj%2FlXlBdAPZ2O7jakqLmu&X-Amz-Signature=5662722eaf0a959794ebd2a010188d518cafa02f3436e5cdba59708590773644&X-Amz-SignedHeaders=host&x-id=GetObject)

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
