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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VYR4YYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCuxOjYHXJKuSyr2BBkEfdc0Lcv%2B8IT9sa45aoGEl%2BWQIhAMaWg5xsxTDVrgk6kJtaYxGTX3Ua7p4Aclwe4mqPYY5RKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2Pjzj4Ut282X%2FtPsq3ANkxxDIXmZpdPBF7X2ho0D5bpmUw%2B%2FDl9LTu%2FpDyNMTzTH61DIG9Sk006Ddsbxzk43sROt28DkxoHUC9T7U56%2FyE%2FTLqq3R%2By1yevUVJmKBuFZfXGk91T1fA2GIK3BRO4mBji%2FDy1sI0yheV1p6nTul7AsiyukX1gYxechudDcHpEhl9v3c%2Fu1GtV71W5vGZtJVfI%2FxfZfpHYgqh2Orwi35vSRB5IYKklHFQ9KsllV6mHtq0VbVlLIOCAtXB3DgkwcPoJpcCMSd5PjrLjq4ZG5VjF%2FoXr%2FTmPrnbtFAhb8PwgVmeekIJMoC8sPydPn8iKh5Bk0Cu4O7rT%2F15Qu0qfcuWtFUk6eCB%2BQhHItIFf4j5UI5saMxqqYbfXVLKNRubFQ7NuzTTNwzYF81EOB%2BNQY4qucqMkJL0VlfkoGhRYtjjiXsoBOLHmzwulHmy2r8th62Ic9AzBiqbpNHeZlRCOXvfOk%2BF1mwvDgr4oY%2BNP43aEIjWPwNPUZ2fEdDerVJ7lZ91NORXDSn80sWE4rhQHlv5nnsEbIs8YHSpIGixmjjqppzDYYgVYCxDIC8C75dtKgFQ2PbWYcXANG%2Ft%2F98oeg%2FkqaFsCw%2BvFixI9faKrDEVgDKk%2B2wP2oVOe305DCKmq%2FBBjqkAbiGUBzU72uwIWWgplQlP9susF44drFJa5tMZMcogm9f2TbhHV6E4EThng93WT0ERvpE116SJ%2B0XpnBQVTsBV4Q0g2jm90TMJ2eGSZcc0ZU2btEdRNWZ%2BYFPoSBiDjuSxMs%2BQSTWypqLixNosTUyXpPDFuKU1J77dzlX5SB6DbyxZ56yfjaJxzRtIuDo12OWo%2Fnta8Ah1%2Bw5id0lyyohT0ItxlvQ&X-Amz-Signature=64f5b89e419a3d80ef8bdef39050623c587fa21757a7193c5c9cf4cd629ea523&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VYR4YYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCuxOjYHXJKuSyr2BBkEfdc0Lcv%2B8IT9sa45aoGEl%2BWQIhAMaWg5xsxTDVrgk6kJtaYxGTX3Ua7p4Aclwe4mqPYY5RKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2Pjzj4Ut282X%2FtPsq3ANkxxDIXmZpdPBF7X2ho0D5bpmUw%2B%2FDl9LTu%2FpDyNMTzTH61DIG9Sk006Ddsbxzk43sROt28DkxoHUC9T7U56%2FyE%2FTLqq3R%2By1yevUVJmKBuFZfXGk91T1fA2GIK3BRO4mBji%2FDy1sI0yheV1p6nTul7AsiyukX1gYxechudDcHpEhl9v3c%2Fu1GtV71W5vGZtJVfI%2FxfZfpHYgqh2Orwi35vSRB5IYKklHFQ9KsllV6mHtq0VbVlLIOCAtXB3DgkwcPoJpcCMSd5PjrLjq4ZG5VjF%2FoXr%2FTmPrnbtFAhb8PwgVmeekIJMoC8sPydPn8iKh5Bk0Cu4O7rT%2F15Qu0qfcuWtFUk6eCB%2BQhHItIFf4j5UI5saMxqqYbfXVLKNRubFQ7NuzTTNwzYF81EOB%2BNQY4qucqMkJL0VlfkoGhRYtjjiXsoBOLHmzwulHmy2r8th62Ic9AzBiqbpNHeZlRCOXvfOk%2BF1mwvDgr4oY%2BNP43aEIjWPwNPUZ2fEdDerVJ7lZ91NORXDSn80sWE4rhQHlv5nnsEbIs8YHSpIGixmjjqppzDYYgVYCxDIC8C75dtKgFQ2PbWYcXANG%2Ft%2F98oeg%2FkqaFsCw%2BvFixI9faKrDEVgDKk%2B2wP2oVOe305DCKmq%2FBBjqkAbiGUBzU72uwIWWgplQlP9susF44drFJa5tMZMcogm9f2TbhHV6E4EThng93WT0ERvpE116SJ%2B0XpnBQVTsBV4Q0g2jm90TMJ2eGSZcc0ZU2btEdRNWZ%2BYFPoSBiDjuSxMs%2BQSTWypqLixNosTUyXpPDFuKU1J77dzlX5SB6DbyxZ56yfjaJxzRtIuDo12OWo%2Fnta8Ah1%2Bw5id0lyyohT0ItxlvQ&X-Amz-Signature=691959b7606e1b770792ff05f704683b346fc12f11794749966fb59ec7472450&X-Amz-SignedHeaders=host&x-id=GetObject)

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
