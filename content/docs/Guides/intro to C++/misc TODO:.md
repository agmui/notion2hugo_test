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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW66D57W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmBDIXJaZMPngauXh116LkMFCWIqIeVK1zqV%2F0fqSnAAiAoJRaU%2F3yw%2FCVjonN8YHH30BboGYBdqk6w%2BS4G5HubxSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnksD5J%2Bxub5BDN8KtwDMzBd%2FGxZVhuGSSUKJcMIcyCPEqV1zvb00XaLMFgLxO3EJ0y8z9F8cmaMDWobU3zTE8oB2t%2F%2FGrtwwngldL3PHhOkua3r2KMCFsHsvF%2F%2F6uJIt%2BRHOmbzBmMZR0ZQ%2FJXPE8Tg97MbLfDgRXYh%2FYcqTF0MN79oAwGe93enRexA7SjVIbiYrfmYYDkr%2BctMsZVjSL1YPwFcYbAR1qhJnVKfL42aMnkKK0dQ%2BiwWFJfTlJGfA29qlerl%2FO52ZfwzqWLcgMF3SI1Pmt%2BtsrIAyzRJ1tD%2B%2FBhtX%2BZhCjYGmNEJ%2FiuQJLQPDvFaDWhtLVfDXNeQvhvE6GOOU8HkxIxHWuUEzHMeFAWMF0YOvDaxWEwQBp2tC1Xh5423lFEjFPJGJ7DN3fITdUc78KkWPl2q6QUVA6pHRrAiYeDtfM1f%2Bbex6ijAS53ZwCrBNyiL6kpmnFtvkDFSBTVE6%2FLJ41zTpwkBM31VPobOrcHHo%2FWYSDR0NgmbRbvLZUHr%2BQtUAI4hiprnfrAcc%2BZ%2B6WKuwggU8lGJRkn0z4vxrvEbBy1TYUTIXrTv8v9kmEmjbQnH3PSoo1vaUFsHh093o%2FraXKK4onCg9%2FlNu36FiUASpNZvju0HB5FWjC3S1yy0RrM6%2BvMw2Mq5vwY6pgHyFaLCC6cR7oCwf4HrsffdGaPTStgpIqSIqQ1MPh8a30CNPctIVmZS7UeLQSGVEi7YmatbBfFVKu9ecujLXkBQa1T%2FroT958A8dKoCXYox%2FoB7h22GBprtArdGhl3Jf8PEM5F%2FplQbsCLh%2BaGM%2F8V9CIRna0ztwLkfD9wQ2NTWge8ipvoOqBD6RQtvfoLKkjX1FlvrBez9tYMqQRwg1EmPZfDKs54h&X-Amz-Signature=c8eb8c6861a8f07059a587ad98d656c507e00ab9fce9e52de3655692878151d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW66D57W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmBDIXJaZMPngauXh116LkMFCWIqIeVK1zqV%2F0fqSnAAiAoJRaU%2F3yw%2FCVjonN8YHH30BboGYBdqk6w%2BS4G5HubxSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnksD5J%2Bxub5BDN8KtwDMzBd%2FGxZVhuGSSUKJcMIcyCPEqV1zvb00XaLMFgLxO3EJ0y8z9F8cmaMDWobU3zTE8oB2t%2F%2FGrtwwngldL3PHhOkua3r2KMCFsHsvF%2F%2F6uJIt%2BRHOmbzBmMZR0ZQ%2FJXPE8Tg97MbLfDgRXYh%2FYcqTF0MN79oAwGe93enRexA7SjVIbiYrfmYYDkr%2BctMsZVjSL1YPwFcYbAR1qhJnVKfL42aMnkKK0dQ%2BiwWFJfTlJGfA29qlerl%2FO52ZfwzqWLcgMF3SI1Pmt%2BtsrIAyzRJ1tD%2B%2FBhtX%2BZhCjYGmNEJ%2FiuQJLQPDvFaDWhtLVfDXNeQvhvE6GOOU8HkxIxHWuUEzHMeFAWMF0YOvDaxWEwQBp2tC1Xh5423lFEjFPJGJ7DN3fITdUc78KkWPl2q6QUVA6pHRrAiYeDtfM1f%2Bbex6ijAS53ZwCrBNyiL6kpmnFtvkDFSBTVE6%2FLJ41zTpwkBM31VPobOrcHHo%2FWYSDR0NgmbRbvLZUHr%2BQtUAI4hiprnfrAcc%2BZ%2B6WKuwggU8lGJRkn0z4vxrvEbBy1TYUTIXrTv8v9kmEmjbQnH3PSoo1vaUFsHh093o%2FraXKK4onCg9%2FlNu36FiUASpNZvju0HB5FWjC3S1yy0RrM6%2BvMw2Mq5vwY6pgHyFaLCC6cR7oCwf4HrsffdGaPTStgpIqSIqQ1MPh8a30CNPctIVmZS7UeLQSGVEi7YmatbBfFVKu9ecujLXkBQa1T%2FroT958A8dKoCXYox%2FoB7h22GBprtArdGhl3Jf8PEM5F%2FplQbsCLh%2BaGM%2F8V9CIRna0ztwLkfD9wQ2NTWge8ipvoOqBD6RQtvfoLKkjX1FlvrBez9tYMqQRwg1EmPZfDKs54h&X-Amz-Signature=1fd03fa9a9af792a175f4534c4e4a4c77a7668f81308e9f5de8ee7b247f81b63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
