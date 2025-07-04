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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDKRAR5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDYDgdRyK1iVNmQ3Ba%2B8HyQEsqns7v2ffucQDA0i8FQawIhANUjuv%2BWGo%2F1oUnsOmCbRegWUkKzUROgb7mFlrXiyE9tKv8DCCkQABoMNjM3NDIzMTgzODA1IgzeK%2FQOdSQZ9LYRlLsq3AMehtLT5Nn9C2fLj8nIHosJmEucfmkOvxklFBjPzMapDatoXybAXMBBcS%2Fi0orX6SedxP%2Fgl%2BUL8otNDfqDcqwKTgTt6FZAWW3H1927TfoHgUinEYjZ8UD92LcvZmazkPUH1x6ZrTTW8n2PjVdP%2B2Ff9SycBgkDmjf%2Bmm8VO0nMFxtSx7wYZydlrIRs1eU54FKZcrP1tRbndAQM56aQhE8AnknF3WDI9QRAML9isM6kvcICej7RpggeUze65q8VP%2F0zJKBbEQ6tWvK41N7%2FQh4GggNJ7OlylKMHs2zElxDW%2F3p5Pt8zbTkZBCxBDj6sPW1GXKJmS20sBWh1KSAzYwHC%2B7MdWPw7SUZnC0m1bPrluDSoz2m%2BxN6xySETyo5SSx8pJwm%2FZ9N8FwOb%2BjQi1ONE078oLXAKYGpqvd8DMGrHGkXMCT05r61KBSbuIaKRH5nIj5FD5PpFr8yTgQCWSo5NKHH7YK8sETr%2Bvo65KwRFEDsJmn3G5DCP2wVc7tEEUtb%2Fsq%2FI2wvkV6J9tFPAXq4cC%2BXZDgqiOx3oij1RSqGFsLCLVmHXLkHZHqAb7%2FkZS2iN7nzCglz9AzkXcDbdZz0uVuJ%2BJ06o97DfiMHX6kKfUJZLIJns%2BpmdXoq2eTC9jJ7DBjqkAbb4Tiin2obRGXdtI9qzkhsJANSc%2BEvTivkskgBN3e%2FcUgjZmUva0lDGjUbZGiWLpVYWND8z67iR7rL3aERqhcjEtvFq6mnRO0JuI755O88svV1yXL%2FL%2F9K0u83DPZmHQ9sZESYu3jWz9lsoXnobw%2B5yQfcI7bkDzZxXoQrc2MblE0on0yczp9T%2Bkg5IuIsdjLLcl4YDKDM7P0G9g9KlwZ1MUYd3&X-Amz-Signature=3c417204c43cc060fff205412f0b83994369447cb9064903aad161397a670ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDKRAR5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDYDgdRyK1iVNmQ3Ba%2B8HyQEsqns7v2ffucQDA0i8FQawIhANUjuv%2BWGo%2F1oUnsOmCbRegWUkKzUROgb7mFlrXiyE9tKv8DCCkQABoMNjM3NDIzMTgzODA1IgzeK%2FQOdSQZ9LYRlLsq3AMehtLT5Nn9C2fLj8nIHosJmEucfmkOvxklFBjPzMapDatoXybAXMBBcS%2Fi0orX6SedxP%2Fgl%2BUL8otNDfqDcqwKTgTt6FZAWW3H1927TfoHgUinEYjZ8UD92LcvZmazkPUH1x6ZrTTW8n2PjVdP%2B2Ff9SycBgkDmjf%2Bmm8VO0nMFxtSx7wYZydlrIRs1eU54FKZcrP1tRbndAQM56aQhE8AnknF3WDI9QRAML9isM6kvcICej7RpggeUze65q8VP%2F0zJKBbEQ6tWvK41N7%2FQh4GggNJ7OlylKMHs2zElxDW%2F3p5Pt8zbTkZBCxBDj6sPW1GXKJmS20sBWh1KSAzYwHC%2B7MdWPw7SUZnC0m1bPrluDSoz2m%2BxN6xySETyo5SSx8pJwm%2FZ9N8FwOb%2BjQi1ONE078oLXAKYGpqvd8DMGrHGkXMCT05r61KBSbuIaKRH5nIj5FD5PpFr8yTgQCWSo5NKHH7YK8sETr%2Bvo65KwRFEDsJmn3G5DCP2wVc7tEEUtb%2Fsq%2FI2wvkV6J9tFPAXq4cC%2BXZDgqiOx3oij1RSqGFsLCLVmHXLkHZHqAb7%2FkZS2iN7nzCglz9AzkXcDbdZz0uVuJ%2BJ06o97DfiMHX6kKfUJZLIJns%2BpmdXoq2eTC9jJ7DBjqkAbb4Tiin2obRGXdtI9qzkhsJANSc%2BEvTivkskgBN3e%2FcUgjZmUva0lDGjUbZGiWLpVYWND8z67iR7rL3aERqhcjEtvFq6mnRO0JuI755O88svV1yXL%2FL%2F9K0u83DPZmHQ9sZESYu3jWz9lsoXnobw%2B5yQfcI7bkDzZxXoQrc2MblE0on0yczp9T%2Bkg5IuIsdjLLcl4YDKDM7P0G9g9KlwZ1MUYd3&X-Amz-Signature=014cc44b3bcb9d7b9e218d47981451c57d827b0b2da73e43a8265f7019230e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
