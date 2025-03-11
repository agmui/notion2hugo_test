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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKHCRUJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGeSzGCWP8NN07hWOeU6Tgw2c8whkbyimKuZ0dKJ6PR%2FAiEAghTDt4NUmHFouscHbvUFxLV7uHnh2oNDMxurS%2FE%2FCjEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQrEkLRBPKFrQTb%2FCrcAxE8flfRwkVQQwVlbRHhDbpMXAVYLLHWEKmMGHzYoxRd8EagRrX5A11REIRGsw6dHpYD8DwP9v7qeZE78IfHAizX9Y%2BC%2BRyrY4hZyhXDMexNrzU1IZ5B0TSfsH2OmBWozi26zudyQaHpoyUNWUUqhRjbcjqPqA5nlJ%2Bmw5P4eLYexRMN0Lny2HlwkNBgeNmmw10DO69xtvcdE5DS%2BlaU6hmttDKj0%2FszXt5j9DxiZzQc%2FmCE9LXPidli4ZTSGaSquh7Oh8iGFqJu0udrg%2Ffjv%2BDkiP%2BYV5nyOzXPlQxYBQp2%2BYS56b06hATuRdWC14hPJZF74rDDKnmmKBNX0srzI9F6E61mWFAICrt%2FLaT7zXXiS4VZkuR%2BD1dCi3J6Bzzj5irE5Uu7YR1i4Gq6hXgJSNiJs6u%2F%2B21tRd07JvkARM1NHlYWPMWrGiu1xFlq%2BAIVW5aSa3MhrGYIArxd3D6TQbnqOC4HBK45TAjsVM4IbNxnjNtItoQrzVIO0fZKTOXxGtBTgtmwn5shmnbeouxZjoSljolJNBh978u5w3NTLqIdGqUTjaEda1YUE4d3lnwQmMUU%2BxanjsK86OlGqSQ4wtGdKJstu%2FmtHqBRN5qWG4ALOnp2THdQnJnQEpN2MNyYwL4GOqUBUUg1gdiP%2BUMIdDJx4IbJdRhM5k7GPj3IAGXLFspfLMM8csCaHNl9XTVQdw1Gj7QiZxd6fwvcfJodiBgGJSkiKsuhr4wwVynnS8vwt%2B6IBv86I7eWfMrH8IY24%2FzibYgHifvhWx%2BgvZXlX4Pkp7tgVfjAMHwDyqwVSTePwYS9X8acFE0ZJ%2FKjsf7vFsXfWJBUlHSPvaJsOXqqThusHaF7u4Z%2FJmd%2B&X-Amz-Signature=1c0651ce99de41c1923fc8499cd4cdf0c077597cf2b9ad90917f7ff3c0353241&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKHCRUJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGeSzGCWP8NN07hWOeU6Tgw2c8whkbyimKuZ0dKJ6PR%2FAiEAghTDt4NUmHFouscHbvUFxLV7uHnh2oNDMxurS%2FE%2FCjEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQrEkLRBPKFrQTb%2FCrcAxE8flfRwkVQQwVlbRHhDbpMXAVYLLHWEKmMGHzYoxRd8EagRrX5A11REIRGsw6dHpYD8DwP9v7qeZE78IfHAizX9Y%2BC%2BRyrY4hZyhXDMexNrzU1IZ5B0TSfsH2OmBWozi26zudyQaHpoyUNWUUqhRjbcjqPqA5nlJ%2Bmw5P4eLYexRMN0Lny2HlwkNBgeNmmw10DO69xtvcdE5DS%2BlaU6hmttDKj0%2FszXt5j9DxiZzQc%2FmCE9LXPidli4ZTSGaSquh7Oh8iGFqJu0udrg%2Ffjv%2BDkiP%2BYV5nyOzXPlQxYBQp2%2BYS56b06hATuRdWC14hPJZF74rDDKnmmKBNX0srzI9F6E61mWFAICrt%2FLaT7zXXiS4VZkuR%2BD1dCi3J6Bzzj5irE5Uu7YR1i4Gq6hXgJSNiJs6u%2F%2B21tRd07JvkARM1NHlYWPMWrGiu1xFlq%2BAIVW5aSa3MhrGYIArxd3D6TQbnqOC4HBK45TAjsVM4IbNxnjNtItoQrzVIO0fZKTOXxGtBTgtmwn5shmnbeouxZjoSljolJNBh978u5w3NTLqIdGqUTjaEda1YUE4d3lnwQmMUU%2BxanjsK86OlGqSQ4wtGdKJstu%2FmtHqBRN5qWG4ALOnp2THdQnJnQEpN2MNyYwL4GOqUBUUg1gdiP%2BUMIdDJx4IbJdRhM5k7GPj3IAGXLFspfLMM8csCaHNl9XTVQdw1Gj7QiZxd6fwvcfJodiBgGJSkiKsuhr4wwVynnS8vwt%2B6IBv86I7eWfMrH8IY24%2FzibYgHifvhWx%2BgvZXlX4Pkp7tgVfjAMHwDyqwVSTePwYS9X8acFE0ZJ%2FKjsf7vFsXfWJBUlHSPvaJsOXqqThusHaF7u4Z%2FJmd%2B&X-Amz-Signature=f26f85101c51c68a925d4db3103f84cc1c4aaf83318b884c5e0c2002e43bf668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
