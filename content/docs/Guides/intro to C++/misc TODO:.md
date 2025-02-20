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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T4I3LY4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnn35F33jl3L3MbbnYQcVRMtZIEtr%2FpejbIsTOpILW9QIgWuukYUzqAEmjnyNKcqIBd4904NsDzG9ng5Zo6D561fMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6SgaA0TXD73NF1OCrcAxdTBOFyxjeEx7Bp06iafLYW7XUxnzaTAiGpKtm5DplAHjxsUVpnd4CQGyyw0Bd3kS2HmH6cnC%2Ftg3hP2%2BAIqYtlRmLyDg7Bq4ETujWOwrDiQEhNhslV99h1mtrhhdoEEju0TdkFghtCR3IxNXes5PI%2FybiRmkTuBHmhPq3%2FQ5vscRGY7lyk3vt5Ud9O5j79oVeH1jeRmomAbzkCjdMqWAAshnemCE3eYu6XuDiByLAYnun6cSSoxZypMOqazC6D5sXnOqenl7Xsv1rWOhxyPbHckJQyllm5UFnnHhQwKiD067zYWxdQhQuf2YOZKfofv%2FBZOuI7eS1oa7iZB01VkUcW3DeCO117jx7LVmwM7Ph4F7%2FxOkvzD1lppKRVm1SbCAsbVdJjybL0ia%2B08ji8WSA%2BqvS528gCbyLEMcszu%2FfDTL%2FABDRo2BvTo8v0%2FkeAclstat%2BbFKw14yymt3mbgp5jk8uRNkyZ4ActG%2FkhgETGkZz%2BDbkJLayHf3YlcEib6TTCy8enCqhV1aSXCR3b8FaPwd%2Bt03IbQSJyVlD0dXH6ZS90wraz03EBwYk55sjtFi%2BaE0i6fn1hP5gokioCTThRh%2BfFezstgpmQwlnuNd5ONujribAO8Zwq0zyjMISy3b0GOqUBClOD6LvD%2B4wIv1YFMlq6oJT4wGP%2FXOJ8ehYMJWgqEp3q1h0mdvcjDSKXYqBRoevEJcCdfixxYMSCmJWvLRZ%2B36Y7BfJNCcY3Kud9Z5OuKZG4Gwg%2BIwrh28yzBoTM%2FlDXZAVHcNrEhx4b62UzV01NC2SYa58aTI90m5yNPoqcqT8f2tBlb9swse%2BGxM5NhpW%2F6bb2Lc%2B%2F%2F5r0fATokoSvSErkgHo7&X-Amz-Signature=3261daf8ec70dd68a9c6fdc844709d0aeb3bb136661d964bfe9e78c18ffeecfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T4I3LY4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnn35F33jl3L3MbbnYQcVRMtZIEtr%2FpejbIsTOpILW9QIgWuukYUzqAEmjnyNKcqIBd4904NsDzG9ng5Zo6D561fMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6SgaA0TXD73NF1OCrcAxdTBOFyxjeEx7Bp06iafLYW7XUxnzaTAiGpKtm5DplAHjxsUVpnd4CQGyyw0Bd3kS2HmH6cnC%2Ftg3hP2%2BAIqYtlRmLyDg7Bq4ETujWOwrDiQEhNhslV99h1mtrhhdoEEju0TdkFghtCR3IxNXes5PI%2FybiRmkTuBHmhPq3%2FQ5vscRGY7lyk3vt5Ud9O5j79oVeH1jeRmomAbzkCjdMqWAAshnemCE3eYu6XuDiByLAYnun6cSSoxZypMOqazC6D5sXnOqenl7Xsv1rWOhxyPbHckJQyllm5UFnnHhQwKiD067zYWxdQhQuf2YOZKfofv%2FBZOuI7eS1oa7iZB01VkUcW3DeCO117jx7LVmwM7Ph4F7%2FxOkvzD1lppKRVm1SbCAsbVdJjybL0ia%2B08ji8WSA%2BqvS528gCbyLEMcszu%2FfDTL%2FABDRo2BvTo8v0%2FkeAclstat%2BbFKw14yymt3mbgp5jk8uRNkyZ4ActG%2FkhgETGkZz%2BDbkJLayHf3YlcEib6TTCy8enCqhV1aSXCR3b8FaPwd%2Bt03IbQSJyVlD0dXH6ZS90wraz03EBwYk55sjtFi%2BaE0i6fn1hP5gokioCTThRh%2BfFezstgpmQwlnuNd5ONujribAO8Zwq0zyjMISy3b0GOqUBClOD6LvD%2B4wIv1YFMlq6oJT4wGP%2FXOJ8ehYMJWgqEp3q1h0mdvcjDSKXYqBRoevEJcCdfixxYMSCmJWvLRZ%2B36Y7BfJNCcY3Kud9Z5OuKZG4Gwg%2BIwrh28yzBoTM%2FlDXZAVHcNrEhx4b62UzV01NC2SYa58aTI90m5yNPoqcqT8f2tBlb9swse%2BGxM5NhpW%2F6bb2Lc%2B%2F%2F5r0fATokoSvSErkgHo7&X-Amz-Signature=927d25f959130894fb3044a7bf509bb47f7862009c8ac6d8108a3bca02f8f82b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
