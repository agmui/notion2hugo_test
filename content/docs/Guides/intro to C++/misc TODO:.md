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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUB247W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzi0dk%2FaT82%2B1duVim9rGiJmaIiItcomer8i9VplQeIgIhAP2%2F2uTpi88cOe5ccdDieXLnpDFT%2FCFE%2BPCJK0kHonM8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2K1X3a5%2FJlR4bzZkq3AO4rY6ymkWjyZeKfDE920RBo%2Bw4RZIFLmx6wIvHeKs4jxYz%2Bdb1OjbncqOGrf7%2FgjLYE0vyKF842pcUmL05L9Uh8W%2F3zt5xtJjBBJ2EId1ih%2Fpf%2FMbbBU4gbvO%2F0%2BwRomJSiLTgEc4B62eb2YG6dLir2PlFWJo8ofEHLms75Da1TFagVfJSXrNXRn5MuWRLCWmcBl26efmgsKOnFCUsNjn0P0o7kbdBS%2FN1E7u8E5bfpvh5jKc0NPvG1hp5OcFmZ%2FHCQIWByG5DhphchePDkUQ71CXQ30NjUn%2FiJEeT3HsWWr3ClAuMygR7wkcViKI0uVNOtBOMlHaJcvo2yj6wkkv3I7S5eGCyUSHa2ti5%2Bpmbbt5ToFAJdmWdqriGQC%2FQnpmAu66WXKYYjMVfNTkcmDw3BNMdIfyB6yjBHfaFE%2BcNQzxGsAKzmVkNnLvM6J%2BhK3wkL73cghfDjIhI2HW00oIEQYQ1f3J%2FwuOA2el7BYQ%2F0YDhwh4KoTSnRkHAwscOgNQyYJidTxRS7p%2FEdoOlX7vBwH7YzS%2BIOn9dBmMSAMFxF4hJDNWsQ8B%2Bm9xjIIy6cQtmcoliX9SOiFq3%2FHvCw85VYAQd8SQ2GewHGwQylk5vuk1mFnPqIFwvNSUBYTCT7ua9BjqkAc2xenvUAR1BX7dmeIqkytLPz2ji2WCMN2dtFFpQv1tZS1syB4heWHWoFko4aM7p%2FuPtpy9gJPdfGH4b042cFMPJQirZ7eStk2Tw11pdODx2ZuWbUPbiP%2FBUrGVVQuS6SgDGp6HiZ995RQRtDWoPLUa6y%2BvFM4ffsvZs7FftohSmQAsKhJzjy0v8kW4kYC1oteOkVXSluLqA8g6gdHCRqsueJ4bJ&X-Amz-Signature=c00a5ad13d2027c994f548daee5547a31689ab9a7a71ea62c58e20a399e209af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUB247W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzi0dk%2FaT82%2B1duVim9rGiJmaIiItcomer8i9VplQeIgIhAP2%2F2uTpi88cOe5ccdDieXLnpDFT%2FCFE%2BPCJK0kHonM8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2K1X3a5%2FJlR4bzZkq3AO4rY6ymkWjyZeKfDE920RBo%2Bw4RZIFLmx6wIvHeKs4jxYz%2Bdb1OjbncqOGrf7%2FgjLYE0vyKF842pcUmL05L9Uh8W%2F3zt5xtJjBBJ2EId1ih%2Fpf%2FMbbBU4gbvO%2F0%2BwRomJSiLTgEc4B62eb2YG6dLir2PlFWJo8ofEHLms75Da1TFagVfJSXrNXRn5MuWRLCWmcBl26efmgsKOnFCUsNjn0P0o7kbdBS%2FN1E7u8E5bfpvh5jKc0NPvG1hp5OcFmZ%2FHCQIWByG5DhphchePDkUQ71CXQ30NjUn%2FiJEeT3HsWWr3ClAuMygR7wkcViKI0uVNOtBOMlHaJcvo2yj6wkkv3I7S5eGCyUSHa2ti5%2Bpmbbt5ToFAJdmWdqriGQC%2FQnpmAu66WXKYYjMVfNTkcmDw3BNMdIfyB6yjBHfaFE%2BcNQzxGsAKzmVkNnLvM6J%2BhK3wkL73cghfDjIhI2HW00oIEQYQ1f3J%2FwuOA2el7BYQ%2F0YDhwh4KoTSnRkHAwscOgNQyYJidTxRS7p%2FEdoOlX7vBwH7YzS%2BIOn9dBmMSAMFxF4hJDNWsQ8B%2Bm9xjIIy6cQtmcoliX9SOiFq3%2FHvCw85VYAQd8SQ2GewHGwQylk5vuk1mFnPqIFwvNSUBYTCT7ua9BjqkAc2xenvUAR1BX7dmeIqkytLPz2ji2WCMN2dtFFpQv1tZS1syB4heWHWoFko4aM7p%2FuPtpy9gJPdfGH4b042cFMPJQirZ7eStk2Tw11pdODx2ZuWbUPbiP%2FBUrGVVQuS6SgDGp6HiZ995RQRtDWoPLUa6y%2BvFM4ffsvZs7FftohSmQAsKhJzjy0v8kW4kYC1oteOkVXSluLqA8g6gdHCRqsueJ4bJ&X-Amz-Signature=c0ffb66bd56727e9c2c45e58b98f60b9cec087f7b7b4d9d1d2df89358ea9656f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
