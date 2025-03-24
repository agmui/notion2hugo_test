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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZXZRGJC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPpxUJWcof45BVCAg9pdeZu2py7exZiY8cQpcFqA13pwIhAJiRA4yezDccUkX1HFhj3yNxD4375pobjx%2BeJU32Vj0uKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvcvcl%2BhsfsODFKlsq3AMhoM95IaxRM%2B23B6mlNQua3MYmeh6%2BccpUMaqj0L0ON6Ur6No2d97RbViYVXz%2FeIYs%2FSsFeHzAKJH13usniayfFuhBUkUcmh44jp5FkZ%2FeomeAI%2BIvaxdb8qzWgBOq2GCQaYQaiVq58kBUd%2FhM48yAPaohyMGdCSoCjV57lLmDKF6it3SxNCsiIVCnKaBEKQVUB9IuxJfc7Gcm7qMZ6ctDnwhVsLNAhFWzk62x2n%2FX1N2c%2BA2152%2BFVP6pXCzfLqQP5Qn4UCkNiKMnQZe%2F0kijUfFQu7NaHhTCaws5%2F%2Be4BVJmqC39Wwd%2F0715MV%2F1FcuRM2Mbu8u5SDJNTD2NTGDaRVIGqMrvUL0VK81hAMzwtTBqqIuWy%2FEo3DgZCs2srPmPXb%2FSwIOSbJEfIQCGWjz5afH5H4tfjByAx6DTqpdD2jdwqp1FkA%2FAWgfdTXse57cnw7ZKPol1pKk2r8EjqHUsT3qMUwdZVxSb2a1s2MP8%2B3sBhkKG9WbAIU6CKJtwRVcFzioqY23j6uHZ%2BXbebyITYI3EgelZ9xAq8a9d4ksPLYqjzTbrLJQstcgJQeRxHiWm5Py6HXR6qO9ccaEY8Sh6MkxLZyDDgTZRsJqbm1g1AxsjmufaixpXpOMRQDCcsYe%2FBjqkAWF45RAVEnL18Nh%2B87SJegDH%2F2cbe0BMLlOUS3mGqfcSsSfebqnXoawuSCJ%2Fhc4qVL8Y2ilkFCrubWPGpyTs09pH7S%2BFeSIFGIAyJaRTuRNDjfxS0iSZZ%2F3PSdZwAFnIA6GJPG%2BPqVDfux8TstckmlniIfvcTANZIN8LcQYOoAKgyvujVvCcnpCKGqoJr9aSA%2BkYpT9fg24ZAdGn6Tb6ktZfoxAU&X-Amz-Signature=aec10881d0939585b05e022db786e97c16c86cacc802f55bba2672d616bb9beb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZXZRGJC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPpxUJWcof45BVCAg9pdeZu2py7exZiY8cQpcFqA13pwIhAJiRA4yezDccUkX1HFhj3yNxD4375pobjx%2BeJU32Vj0uKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvcvcl%2BhsfsODFKlsq3AMhoM95IaxRM%2B23B6mlNQua3MYmeh6%2BccpUMaqj0L0ON6Ur6No2d97RbViYVXz%2FeIYs%2FSsFeHzAKJH13usniayfFuhBUkUcmh44jp5FkZ%2FeomeAI%2BIvaxdb8qzWgBOq2GCQaYQaiVq58kBUd%2FhM48yAPaohyMGdCSoCjV57lLmDKF6it3SxNCsiIVCnKaBEKQVUB9IuxJfc7Gcm7qMZ6ctDnwhVsLNAhFWzk62x2n%2FX1N2c%2BA2152%2BFVP6pXCzfLqQP5Qn4UCkNiKMnQZe%2F0kijUfFQu7NaHhTCaws5%2F%2Be4BVJmqC39Wwd%2F0715MV%2F1FcuRM2Mbu8u5SDJNTD2NTGDaRVIGqMrvUL0VK81hAMzwtTBqqIuWy%2FEo3DgZCs2srPmPXb%2FSwIOSbJEfIQCGWjz5afH5H4tfjByAx6DTqpdD2jdwqp1FkA%2FAWgfdTXse57cnw7ZKPol1pKk2r8EjqHUsT3qMUwdZVxSb2a1s2MP8%2B3sBhkKG9WbAIU6CKJtwRVcFzioqY23j6uHZ%2BXbebyITYI3EgelZ9xAq8a9d4ksPLYqjzTbrLJQstcgJQeRxHiWm5Py6HXR6qO9ccaEY8Sh6MkxLZyDDgTZRsJqbm1g1AxsjmufaixpXpOMRQDCcsYe%2FBjqkAWF45RAVEnL18Nh%2B87SJegDH%2F2cbe0BMLlOUS3mGqfcSsSfebqnXoawuSCJ%2Fhc4qVL8Y2ilkFCrubWPGpyTs09pH7S%2BFeSIFGIAyJaRTuRNDjfxS0iSZZ%2F3PSdZwAFnIA6GJPG%2BPqVDfux8TstckmlniIfvcTANZIN8LcQYOoAKgyvujVvCcnpCKGqoJr9aSA%2BkYpT9fg24ZAdGn6Tb6ktZfoxAU&X-Amz-Signature=bf08674fe83557071045f9d3624c1057cc1dd63fffd695f53ab46fc7feb01e96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
