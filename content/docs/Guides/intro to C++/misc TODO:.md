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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOH4SGVC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDliZ3038tqm0%2Bpu3zj517QOzQ0Cc%2Fe1Q6PgI5cS0uKtAiEA5wxWFAkeS5RM5eZxEGnxKtm%2BVPIBQk1SGUMXyHxS9JkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZePehbZ19eFsqd3SrcA24BH5%2BTNEB9R3YOxtPif5PjTL7rjHIDuOov%2BQR1xfk9epzoPdNDR4y%2FmwLjqwZN9eeQ6IyabR4f1cfsxqSpL3S4Ec06W8r96f8ynMnJEVLDVEA%2BBrTGrMqh2bXZbvcSCp7Ij3ZFeqy5AP59KilkUEq6fb%2B6BRBs9DtEGqXsTbMpf8XT24MDDGZjW9E2fkltTKI24ggjfqcvMFlH0ykgBl1VeF9r3%2F6IAg7S9yo%2BU9qSW7HmlxsLD5nTczKMICFjgDRPr4ddTdmhKZvedrK6ykTlTVtMwPyFQFegCnh%2BnFTqpRVdmAULIDaIWn1GTQkd59Qw%2BS42Nln63mSVwP1Vd8M2ici5eRWPucouKP3SWhAEoPDLeBbhpRc9nHVYapxMtxsFaYZaUUZUaf8wzSj4%2BsTeGW8DhRORzLh6UYcOzJwo7Kbjo3LiW5lFDoiqZsHXG7OH51OQMUNxmFL%2F8gV4xpyMIHayVqWgnZs4wJ4r5l%2BqUraQCWoiX%2FXFLkPxVkrvFbEfOxtsxlPSoPESYFgBIcJ4NmxWw%2BTcWVbFJ%2FAzntERIm2bj1v1m6z4Zq4gPIA9V1ngMz7RxkL01Jd1hgqn9b6ZW0CH4MjxrtWgmRxn0O1yxH8xTrryEDFSaFN3MLq4q78GOqUBgA0QA%2BCHFPDCdi8UQm2uNH%2FdO3ylQY%2Bbf8wnrYU%2Fc7SUBmhgAQFhzexFgYzOKOaMu1U9C6E3kAWcajNmd6XiCfsHW2U2kModVl%2B4eQ9TOx2BwqWzkiYxMly6DSHTzQNzoZchuKrkvp53XwkW1G35qWmJfHnkV6wt4hlwMp%2FqB1HOyMwdZHTLL1ipow3%2BpPlQE6Yad2574ly7lWcThUppDDN8HoQh&X-Amz-Signature=82988196fb94ac3a4e1889087fc06c526fc5b708963afacc3bc7e6f7f5e666c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOH4SGVC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDliZ3038tqm0%2Bpu3zj517QOzQ0Cc%2Fe1Q6PgI5cS0uKtAiEA5wxWFAkeS5RM5eZxEGnxKtm%2BVPIBQk1SGUMXyHxS9JkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZePehbZ19eFsqd3SrcA24BH5%2BTNEB9R3YOxtPif5PjTL7rjHIDuOov%2BQR1xfk9epzoPdNDR4y%2FmwLjqwZN9eeQ6IyabR4f1cfsxqSpL3S4Ec06W8r96f8ynMnJEVLDVEA%2BBrTGrMqh2bXZbvcSCp7Ij3ZFeqy5AP59KilkUEq6fb%2B6BRBs9DtEGqXsTbMpf8XT24MDDGZjW9E2fkltTKI24ggjfqcvMFlH0ykgBl1VeF9r3%2F6IAg7S9yo%2BU9qSW7HmlxsLD5nTczKMICFjgDRPr4ddTdmhKZvedrK6ykTlTVtMwPyFQFegCnh%2BnFTqpRVdmAULIDaIWn1GTQkd59Qw%2BS42Nln63mSVwP1Vd8M2ici5eRWPucouKP3SWhAEoPDLeBbhpRc9nHVYapxMtxsFaYZaUUZUaf8wzSj4%2BsTeGW8DhRORzLh6UYcOzJwo7Kbjo3LiW5lFDoiqZsHXG7OH51OQMUNxmFL%2F8gV4xpyMIHayVqWgnZs4wJ4r5l%2BqUraQCWoiX%2FXFLkPxVkrvFbEfOxtsxlPSoPESYFgBIcJ4NmxWw%2BTcWVbFJ%2FAzntERIm2bj1v1m6z4Zq4gPIA9V1ngMz7RxkL01Jd1hgqn9b6ZW0CH4MjxrtWgmRxn0O1yxH8xTrryEDFSaFN3MLq4q78GOqUBgA0QA%2BCHFPDCdi8UQm2uNH%2FdO3ylQY%2Bbf8wnrYU%2Fc7SUBmhgAQFhzexFgYzOKOaMu1U9C6E3kAWcajNmd6XiCfsHW2U2kModVl%2B4eQ9TOx2BwqWzkiYxMly6DSHTzQNzoZchuKrkvp53XwkW1G35qWmJfHnkV6wt4hlwMp%2FqB1HOyMwdZHTLL1ipow3%2BpPlQE6Yad2574ly7lWcThUppDDN8HoQh&X-Amz-Signature=24b07c2344575f6e6bc12dd4afb3b52818183a0db31d59fa2b4b5f06f0fa1f46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
