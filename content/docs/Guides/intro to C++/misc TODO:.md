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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM3SGZA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0QjM29msUeD%2FuPDSGt7Td0%2FH0G1pQJnpYAa5DEpnZ4AiEAzWov3azenE4Yb33LzKGmb0jSOtVVeC26ljZu3FVNQHAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkKMi4n1wwbkgrYkSrcAyYSw7VHvu1iUqNTv2ZIvepdlGk9KQOpi3oJIH9uPT%2BikjajYrJnWibW96kErvKOYYNtn1s%2FROF%2FL0LLnr3O8Ztb1KhKFIMuqiRP2GlBV3UgZI9IHg0XkXT4U0Qed8w8%2FrsgP54adQzzlQ3BO8DI9djDyn3LLCCOmPl3FzELCUKXjOJi%2BUaY2ngIiocMF6GvO0qJEk4ujueBzueYDiFsmqrux7f9B%2F%2Fcgw8l%2BXQmk%2FVUZmSlTyDvQ5OI8uUIqnJivLvBVY%2FMWLQzuUsNMbnOpiy8JtRbMe9Wn1BNpTFCyVtNTPQTFRf4o%2FDDbIyjp0tzr9URhNkMkEUdBCO7Ku8qv4Sd2wlA8AvB3cUIqBexSveRKUGcRrV3%2FGyTguKs11OQtmXzRFHx3PAut9vUx2Hey1G2iRaOOYF6CGoMFgJf09HKWyc11fYEXNiUbNrmnafFYwduUSs%2FgqJFOcSCc7g1bwZwktu%2Box70WZVLMtvSrh2%2F2Q2tizU3KSKvJCOqk2sy%2FYdMK%2Boha3Q8qqKZnMtzVDrRumRuTqOWQB8pi%2BCH7h6%2BBQ0CkYr9U0u3AP%2BFR9WdwAZCdMxn%2FasOuBTwwmRMGZF4jsgZqB%2B8zNbEulwxuPJabu%2BlPBrqRWNbK69WMPfF7MMGOqUBtVIykUtkeZ3lJIEZ2GBob8y8TPRoi4fvwqpYxmnNaySL7T7w1Eqx9Xp2T7inhMxS%2F%2FuqwgMuPfEMSQWicI7vLsPmlowNeZaSL8FryYhLgq3e%2Bt8hZLGwvJ4te%2BksLhS9jC5ZIqONXKD2YFBhceFVLV1wqw%2BC3qKyTL3jGawDSfyCrp13f3Erpv6qpTO3DCr%2FMiAMiIy1Sfn671lf9kb8FWlQKwBL&X-Amz-Signature=7dd224b296d6959df978b32fab0c5fef7351b99215e23721e23568736d89c0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM3SGZA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0QjM29msUeD%2FuPDSGt7Td0%2FH0G1pQJnpYAa5DEpnZ4AiEAzWov3azenE4Yb33LzKGmb0jSOtVVeC26ljZu3FVNQHAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkKMi4n1wwbkgrYkSrcAyYSw7VHvu1iUqNTv2ZIvepdlGk9KQOpi3oJIH9uPT%2BikjajYrJnWibW96kErvKOYYNtn1s%2FROF%2FL0LLnr3O8Ztb1KhKFIMuqiRP2GlBV3UgZI9IHg0XkXT4U0Qed8w8%2FrsgP54adQzzlQ3BO8DI9djDyn3LLCCOmPl3FzELCUKXjOJi%2BUaY2ngIiocMF6GvO0qJEk4ujueBzueYDiFsmqrux7f9B%2F%2Fcgw8l%2BXQmk%2FVUZmSlTyDvQ5OI8uUIqnJivLvBVY%2FMWLQzuUsNMbnOpiy8JtRbMe9Wn1BNpTFCyVtNTPQTFRf4o%2FDDbIyjp0tzr9URhNkMkEUdBCO7Ku8qv4Sd2wlA8AvB3cUIqBexSveRKUGcRrV3%2FGyTguKs11OQtmXzRFHx3PAut9vUx2Hey1G2iRaOOYF6CGoMFgJf09HKWyc11fYEXNiUbNrmnafFYwduUSs%2FgqJFOcSCc7g1bwZwktu%2Box70WZVLMtvSrh2%2F2Q2tizU3KSKvJCOqk2sy%2FYdMK%2Boha3Q8qqKZnMtzVDrRumRuTqOWQB8pi%2BCH7h6%2BBQ0CkYr9U0u3AP%2BFR9WdwAZCdMxn%2FasOuBTwwmRMGZF4jsgZqB%2B8zNbEulwxuPJabu%2BlPBrqRWNbK69WMPfF7MMGOqUBtVIykUtkeZ3lJIEZ2GBob8y8TPRoi4fvwqpYxmnNaySL7T7w1Eqx9Xp2T7inhMxS%2F%2FuqwgMuPfEMSQWicI7vLsPmlowNeZaSL8FryYhLgq3e%2Bt8hZLGwvJ4te%2BksLhS9jC5ZIqONXKD2YFBhceFVLV1wqw%2BC3qKyTL3jGawDSfyCrp13f3Erpv6qpTO3DCr%2FMiAMiIy1Sfn671lf9kb8FWlQKwBL&X-Amz-Signature=37b62955660cf6342c91f02d8f51fcb600a0f48387d91fb4b5692a9d576f02f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
