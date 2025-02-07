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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4OBX2O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFDEwtljYNtY2GOWLM6yZ3INnYMrUN2hBuFRGfjRK4VLAiEA1GuvjPWDfJr1N%2BDSkqBPeRgV80kqYCDi7IK%2B%2FVCQthsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDExwL0mDFpMcg4iCbircA2t0bRyybMcsz6xD35Pf6Wo7kNtG0h7YaMhwAEdoXEwkp10%2FtpqOjXU7fTox8iyKY3tzd3OLEpEJelRlBsusqTth5uZW4RSGNdz%2Fd%2B%2BeIr5F8eQAmGeW6swyNeVCX8qGSleXCx3Pddm5iIbfB7s20Sq%2F0gVR8hHZudKVE72HJFgWm0But9Y%2BOrNAj73pxjkDLmVTLU1YLddfYuk%2FyXbkzOL5RH6ETdK36U8rhaDy%2BCDsxG8D4P5cKMHTFuNjhry%2Fht4YxnvzloRARlh13LMXsqnI%2BXT6HtNNPqXiCWtyzx%2F6yU4qpek%2FslD1EmpQSvIUFZWa0C5zKlFWU3bOhBXsfY8STrefMDQJtHognvpYQPDGsrbvz8xECxUYj6g%2FWgz89C%2F9BMQrsZ6AN%2FFvOM0CmH81jimvvYWTDQTI3B28mdmuI7Bg0r9xS95nZU%2BoNdyQ9UJuzyPEYN4p3bu2RHz06nLW5fUPG%2Bw3BK9TsQ1NwVm2xTJVLgrafLFztAQx5yUc%2B%2F5oJ9boSuYO2rQCcvaKJEwy70iJFSEREdwxaRQTS5pwuqmNr8RQX0JgOxv24i4bj97hDuqOUlwEaFq1p5t%2BTcmN%2FmlDOYcogEZ34vGRhzoqNKz6gv%2Fk5%2F5Mc5SSMIublb0GOqUBFa%2BKD2NmsU60Pt6Kyl8QqiULNqgKBXBpD3K3WaFpjC2cBlK0RBrO0DkEyQvDgGEwVPOvtuj72WMRcGmCh1Vl2IWDVtKs8a4HFi%2FlKBftg1stHUT%2BWtXQ3IymXxOaxd5xPy2g73cB8noSS8Aeis8NfCC0T%2F77n5UofCsUXpnpZJ5O%2Bva3Mpc2OINV3fS1ljaTcZMw5%2F387cSBRbMkuMu1EUuLC1GS&X-Amz-Signature=47fae265de6de79a673b057c3eb2765da541de3fa901a3fa9ef197aa55c04bec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4OBX2O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFDEwtljYNtY2GOWLM6yZ3INnYMrUN2hBuFRGfjRK4VLAiEA1GuvjPWDfJr1N%2BDSkqBPeRgV80kqYCDi7IK%2B%2FVCQthsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDExwL0mDFpMcg4iCbircA2t0bRyybMcsz6xD35Pf6Wo7kNtG0h7YaMhwAEdoXEwkp10%2FtpqOjXU7fTox8iyKY3tzd3OLEpEJelRlBsusqTth5uZW4RSGNdz%2Fd%2B%2BeIr5F8eQAmGeW6swyNeVCX8qGSleXCx3Pddm5iIbfB7s20Sq%2F0gVR8hHZudKVE72HJFgWm0But9Y%2BOrNAj73pxjkDLmVTLU1YLddfYuk%2FyXbkzOL5RH6ETdK36U8rhaDy%2BCDsxG8D4P5cKMHTFuNjhry%2Fht4YxnvzloRARlh13LMXsqnI%2BXT6HtNNPqXiCWtyzx%2F6yU4qpek%2FslD1EmpQSvIUFZWa0C5zKlFWU3bOhBXsfY8STrefMDQJtHognvpYQPDGsrbvz8xECxUYj6g%2FWgz89C%2F9BMQrsZ6AN%2FFvOM0CmH81jimvvYWTDQTI3B28mdmuI7Bg0r9xS95nZU%2BoNdyQ9UJuzyPEYN4p3bu2RHz06nLW5fUPG%2Bw3BK9TsQ1NwVm2xTJVLgrafLFztAQx5yUc%2B%2F5oJ9boSuYO2rQCcvaKJEwy70iJFSEREdwxaRQTS5pwuqmNr8RQX0JgOxv24i4bj97hDuqOUlwEaFq1p5t%2BTcmN%2FmlDOYcogEZ34vGRhzoqNKz6gv%2Fk5%2F5Mc5SSMIublb0GOqUBFa%2BKD2NmsU60Pt6Kyl8QqiULNqgKBXBpD3K3WaFpjC2cBlK0RBrO0DkEyQvDgGEwVPOvtuj72WMRcGmCh1Vl2IWDVtKs8a4HFi%2FlKBftg1stHUT%2BWtXQ3IymXxOaxd5xPy2g73cB8noSS8Aeis8NfCC0T%2F77n5UofCsUXpnpZJ5O%2Bva3Mpc2OINV3fS1ljaTcZMw5%2F387cSBRbMkuMu1EUuLC1GS&X-Amz-Signature=2e6430786a26becbe9e53fc72706830f85dcdcb6a1a9d2ce6d791408651f2814&X-Amz-SignedHeaders=host&x-id=GetObject)

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
