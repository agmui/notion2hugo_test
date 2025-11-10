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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCI5OFJ%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCYJZCkJpT4lmVjDdl%2BbCi3JOPtW49o0kjenmBlmuS1oAIhAKG9mbMnAQCRX6hrZTVsesC%2Fd8wuwG5x16AMaP%2BYMNCIKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0PSCF9ZJhOn0hqG8q3APqDDBfCR0bBop3fj9zylyuLouN20ptzf0ewvHAxSM9j097K4JxRhgvyNAOwDM5KitonQh9bYGjPBcUzhysHmm%2FKyKNjBHryG9ge35ZdQZzyQbozK%2B2qDVNUG99ZIhC%2FdRDKfl21jtNviYUZDyIDE0vEo0AN9%2BtO%2FA8oFt2bYfRii%2FGzNkfwq2jFbOV4UtcsfHSiPIAvCiEIUjdwwGUjaSiiVjKxxS1mH5TPagQATHRWLGaLnb7A%2FnUeX7GIpUl92tDvcWY06%2BOlzhA%2BTmd1gkQi3rQ8309q%2FAL2BLJnh%2F5RNtPXPf4BQE6lDOZNnOijBrFYizCNoocama7wocuW3go1N2Z9FDK5UnfKWEEeYkmeVfGlrR9GCG6eQTqBIlydgEJ2Ge9osJINu%2FA7XboqIadqFkE6utniHARrcVxvflkDmD%2FMs%2BG5R9ikNSJ9sQzXiduZSMPq9iv%2BtpS4VWejv%2BEf0b%2FX17xVPFTgf%2FBMV33z61u1UPCHJS2FL0RQKQdephdcYdz6pXql1gyAkGcs5C1I6pVLmMiVYICMzxDW%2FpetbazUBjgqGeetHNQoGxeY3xIW5qtRB7ysSGqN%2BQo1HTHf8j4oJfXg3crAv%2Frcc1JMK9C5AlFYxOOaadYxTCMtcTIBjqkAX6jCLiGk3TOQ1w7Us2%2F7iXmmSU%2BNfcMd2u3jfTL14KnmdfSv9cOOAX3DjmLDkRFT3kmyoD2p9VZGKACLBKp%2B77%2F2cfqppmRORMlIuPJxxzXXSK8pXni8u%2B8gCyjpNKMAr0q%2BdzIznrCoqvqCvYljgmiL1UbNGSzqbMr7RbBXBAqqex1XFWPDjcsg2gkNdp%2FOVxjq7AwMBE%2Flt95c7vQRXeqRwuG&X-Amz-Signature=546e6fee0e2e6251edce72b49a163433fda9c915881aa9e6ec769b3663f344a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCI5OFJ%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCYJZCkJpT4lmVjDdl%2BbCi3JOPtW49o0kjenmBlmuS1oAIhAKG9mbMnAQCRX6hrZTVsesC%2Fd8wuwG5x16AMaP%2BYMNCIKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0PSCF9ZJhOn0hqG8q3APqDDBfCR0bBop3fj9zylyuLouN20ptzf0ewvHAxSM9j097K4JxRhgvyNAOwDM5KitonQh9bYGjPBcUzhysHmm%2FKyKNjBHryG9ge35ZdQZzyQbozK%2B2qDVNUG99ZIhC%2FdRDKfl21jtNviYUZDyIDE0vEo0AN9%2BtO%2FA8oFt2bYfRii%2FGzNkfwq2jFbOV4UtcsfHSiPIAvCiEIUjdwwGUjaSiiVjKxxS1mH5TPagQATHRWLGaLnb7A%2FnUeX7GIpUl92tDvcWY06%2BOlzhA%2BTmd1gkQi3rQ8309q%2FAL2BLJnh%2F5RNtPXPf4BQE6lDOZNnOijBrFYizCNoocama7wocuW3go1N2Z9FDK5UnfKWEEeYkmeVfGlrR9GCG6eQTqBIlydgEJ2Ge9osJINu%2FA7XboqIadqFkE6utniHARrcVxvflkDmD%2FMs%2BG5R9ikNSJ9sQzXiduZSMPq9iv%2BtpS4VWejv%2BEf0b%2FX17xVPFTgf%2FBMV33z61u1UPCHJS2FL0RQKQdephdcYdz6pXql1gyAkGcs5C1I6pVLmMiVYICMzxDW%2FpetbazUBjgqGeetHNQoGxeY3xIW5qtRB7ysSGqN%2BQo1HTHf8j4oJfXg3crAv%2Frcc1JMK9C5AlFYxOOaadYxTCMtcTIBjqkAX6jCLiGk3TOQ1w7Us2%2F7iXmmSU%2BNfcMd2u3jfTL14KnmdfSv9cOOAX3DjmLDkRFT3kmyoD2p9VZGKACLBKp%2B77%2F2cfqppmRORMlIuPJxxzXXSK8pXni8u%2B8gCyjpNKMAr0q%2BdzIznrCoqvqCvYljgmiL1UbNGSzqbMr7RbBXBAqqex1XFWPDjcsg2gkNdp%2FOVxjq7AwMBE%2Flt95c7vQRXeqRwuG&X-Amz-Signature=eb91d2cfef9c37ac36a4c22ea98d5c5c721034f240941a6b4cac5022bd513e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
