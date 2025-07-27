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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2HTII4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDU5UL7IS4CIjJN9H%2F8P9jqYowMIPMwduhsTRtUeZYmjAIhAISflL5SItlfjN3JJO35%2BRgxE4SiY4AynhhetiXmQIViKv8DCGgQABoMNjM3NDIzMTgzODA1Igx7GOOwGOAQ0rD5gzsq3AP1wD1Vv2fGD%2FNABqeH%2B0AV9g4dnHEqsxOrOM%2FROuGt2sBWextrxQ47BwsOxsbCdhUiy0P4MdUVntHZS%2FaxdDitnMMTRFqRK8oJpr2GOn1ZY5Ijmtfuv6yjgXjeX%2BSSqL1kD6JYwOJeq9XTYzEqqlRKAQl8NS8mZmHQm4rmn9XaKWgEz%2FjRB1Wn8Pp2XsOlyZrNrkuDXCv0ZXe7E0sMERXQR%2F%2FCqXCQlS3fbRadoRhNW7ckTn98vTTH4htCFwr4Bs9aCEPx%2F9OovRzyRdDemwxJdr2FvwGACBHXO5jN1QDzrpnGyqujYCt%2BpFHHMOaZEEmDUJ2pPuSsi7bBtFTz6NU0omdC4pOrtf1SCXgsSXtsBBh21Pr0RW%2FjLhwT54nwTbJ0MwT%2FMMKrKaVUJHVdZgowtnwEANBHlZaOfEtU77ApHCw7yxQgqitlhaoWR3FbqTkndNBDYzdpwGSyf5jzLJ06VuIFrBWrwFUr3ufJQ%2FH8M5uAJtt50XXzlR4AdhhxfSSOVJGZqe%2FYg7Wzv25NoN3AjZEjyKhPQ1EECjczsl2Crpcp0ZOIDSwPXz%2B3HUBB0FPUKsdx5gGeC%2BSKr61WF%2BKmz4Q4UEcHIWrsbF5znNiFjV%2B7PAW%2FfF%2Fo6WEwLzDswpXEBjqkAWYz7PuGfcTh0%2FV45xSDCara5KBdVCEIvEs9i6sBC%2FfsRosa3uK531L%2FS4dOt21NRnHYrnSlPodWI2ksKw76mZ0ui33YylWomd3ugaO2puclKPyqgi%2FTCtSTAeewSRCPHi3F%2B2MgzAzP7uL8lQdW9tGCxR6a1lKXQRenYBl7iIGNmwtkEXv3glNjpWHbRzjL9iI4LadCFjFRDsPCU0n6fksIGADb&X-Amz-Signature=ff95bbd96ff134218e17610273ab197c07fe8c4272f5d9c153361b37414119f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2HTII4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDU5UL7IS4CIjJN9H%2F8P9jqYowMIPMwduhsTRtUeZYmjAIhAISflL5SItlfjN3JJO35%2BRgxE4SiY4AynhhetiXmQIViKv8DCGgQABoMNjM3NDIzMTgzODA1Igx7GOOwGOAQ0rD5gzsq3AP1wD1Vv2fGD%2FNABqeH%2B0AV9g4dnHEqsxOrOM%2FROuGt2sBWextrxQ47BwsOxsbCdhUiy0P4MdUVntHZS%2FaxdDitnMMTRFqRK8oJpr2GOn1ZY5Ijmtfuv6yjgXjeX%2BSSqL1kD6JYwOJeq9XTYzEqqlRKAQl8NS8mZmHQm4rmn9XaKWgEz%2FjRB1Wn8Pp2XsOlyZrNrkuDXCv0ZXe7E0sMERXQR%2F%2FCqXCQlS3fbRadoRhNW7ckTn98vTTH4htCFwr4Bs9aCEPx%2F9OovRzyRdDemwxJdr2FvwGACBHXO5jN1QDzrpnGyqujYCt%2BpFHHMOaZEEmDUJ2pPuSsi7bBtFTz6NU0omdC4pOrtf1SCXgsSXtsBBh21Pr0RW%2FjLhwT54nwTbJ0MwT%2FMMKrKaVUJHVdZgowtnwEANBHlZaOfEtU77ApHCw7yxQgqitlhaoWR3FbqTkndNBDYzdpwGSyf5jzLJ06VuIFrBWrwFUr3ufJQ%2FH8M5uAJtt50XXzlR4AdhhxfSSOVJGZqe%2FYg7Wzv25NoN3AjZEjyKhPQ1EECjczsl2Crpcp0ZOIDSwPXz%2B3HUBB0FPUKsdx5gGeC%2BSKr61WF%2BKmz4Q4UEcHIWrsbF5znNiFjV%2B7PAW%2FfF%2Fo6WEwLzDswpXEBjqkAWYz7PuGfcTh0%2FV45xSDCara5KBdVCEIvEs9i6sBC%2FfsRosa3uK531L%2FS4dOt21NRnHYrnSlPodWI2ksKw76mZ0ui33YylWomd3ugaO2puclKPyqgi%2FTCtSTAeewSRCPHi3F%2B2MgzAzP7uL8lQdW9tGCxR6a1lKXQRenYBl7iIGNmwtkEXv3glNjpWHbRzjL9iI4LadCFjFRDsPCU0n6fksIGADb&X-Amz-Signature=31d190afca1b6bb067b1fd7c857a6764a757c4d8b79f98d25e022f0fb7c9a6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
