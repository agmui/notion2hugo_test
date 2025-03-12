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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645G66AJO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIE4a14yhvLlKhI4CTTNG1pZyD3rSCh3PKdcOmJvnR%2BerAiEAn8t26%2FilE9S%2Fqo9XYw5ivJ6Nx10BXVSrCDa1Y7ZPLXEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrQE4TdHlqNnRsZwCrcA7Y%2FfmuyaMnz889kNr6x8gHYLvBRKnpZiTHlxSMbeouWKSw4tJs1CwfS43yPHEyad%2FuYrBGgkxFR7pVWpP6LIT%2BYWOa%2B%2BdI%2FxTxi8c7e5CwS848raLdiEPLTHOZLV4Fd06BMJ8Jgto%2FmmtsBtXvQNFQT1Tfcx4PeETGLfvhGrUalju7mYR%2BeCpxmqIWOPU4RAjDWihrF0RmUT7E3%2FZaLzspGbMrIbJRp0lYKcUFmVbI6Tuy1BmLSsDNOMFb5C2taHGfDvOdoN6BVUFhXoxIMmjOdu72aNRWylXVXkFeSQYDwbj%2BuWkSfH9RvaNmj7Z%2FIC7%2BOfInbyiyO5dRGX82CQs23XMCqGks00liO%2FSGM8UXNKfKl5MavVU8VPIF2jKtpKiGfjjuvdMNpoV72lUC0azDi5V5P8rB%2FrL4tAf6fxaBtNKzhV2W%2FgtMRSvtJ7XxAOY5qKuPluJaTHNtKhvu%2B1tUSqzmqkSwU%2B2FRFCg4H7cZ7w0sFeUC9mNwH8HF%2BsRnNSj7eKTwMrEqYEFsJNNRR%2BFo6ad8a5MwGVoQYVItEfyCVWPpiQzuq11f3xnH1Y7h8Sl1AXySPmm0%2FRtgav7KGICg6%2Fql9IL1ghX1B%2F0qF4Fgyx%2FutyuBU90rDJn1MKPAxr4GOqUBeHRS9FG%2BKVFi45LDCoB22FypsYh17Cg2iK6tABHX%2Bfq5KzcO9vpFc2L19e6q3DsW3ywkzkQY48iZRmQgvjWu62%2FZlfLRZTanzosmxnKTyTKE9H6XMv%2Bd%2FG6bgyR1y2tEkhmF8aBf2DTIbsHR7mD7LDwOjYGY7nVV2Lr0kwx%2FAEeRNZXd79LIPoRTOHlKTe9RW%2Fa4N4HBfUh8%2BAW3VzojOSLpqH4l&X-Amz-Signature=f23c834958a69b360149a91d4328aa540177f7dc4437a87b718ce06deb72d4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645G66AJO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIE4a14yhvLlKhI4CTTNG1pZyD3rSCh3PKdcOmJvnR%2BerAiEAn8t26%2FilE9S%2Fqo9XYw5ivJ6Nx10BXVSrCDa1Y7ZPLXEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrQE4TdHlqNnRsZwCrcA7Y%2FfmuyaMnz889kNr6x8gHYLvBRKnpZiTHlxSMbeouWKSw4tJs1CwfS43yPHEyad%2FuYrBGgkxFR7pVWpP6LIT%2BYWOa%2B%2BdI%2FxTxi8c7e5CwS848raLdiEPLTHOZLV4Fd06BMJ8Jgto%2FmmtsBtXvQNFQT1Tfcx4PeETGLfvhGrUalju7mYR%2BeCpxmqIWOPU4RAjDWihrF0RmUT7E3%2FZaLzspGbMrIbJRp0lYKcUFmVbI6Tuy1BmLSsDNOMFb5C2taHGfDvOdoN6BVUFhXoxIMmjOdu72aNRWylXVXkFeSQYDwbj%2BuWkSfH9RvaNmj7Z%2FIC7%2BOfInbyiyO5dRGX82CQs23XMCqGks00liO%2FSGM8UXNKfKl5MavVU8VPIF2jKtpKiGfjjuvdMNpoV72lUC0azDi5V5P8rB%2FrL4tAf6fxaBtNKzhV2W%2FgtMRSvtJ7XxAOY5qKuPluJaTHNtKhvu%2B1tUSqzmqkSwU%2B2FRFCg4H7cZ7w0sFeUC9mNwH8HF%2BsRnNSj7eKTwMrEqYEFsJNNRR%2BFo6ad8a5MwGVoQYVItEfyCVWPpiQzuq11f3xnH1Y7h8Sl1AXySPmm0%2FRtgav7KGICg6%2Fql9IL1ghX1B%2F0qF4Fgyx%2FutyuBU90rDJn1MKPAxr4GOqUBeHRS9FG%2BKVFi45LDCoB22FypsYh17Cg2iK6tABHX%2Bfq5KzcO9vpFc2L19e6q3DsW3ywkzkQY48iZRmQgvjWu62%2FZlfLRZTanzosmxnKTyTKE9H6XMv%2Bd%2FG6bgyR1y2tEkhmF8aBf2DTIbsHR7mD7LDwOjYGY7nVV2Lr0kwx%2FAEeRNZXd79LIPoRTOHlKTe9RW%2Fa4N4HBfUh8%2BAW3VzojOSLpqH4l&X-Amz-Signature=39d6fc5782d1db1dd1a4e86ee701c800dc7add5709849f07e083728e4cdd5695&X-Amz-SignedHeaders=host&x-id=GetObject)

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
