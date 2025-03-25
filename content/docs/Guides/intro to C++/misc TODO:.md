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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=92d6832da9545f3990f62f849cf175560537e8ded9c8ca7b1128d1fd27ea5ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=074bc8fdcbf89c64c925b493855e40e71612aff0b22d957f90fc5a4cb11225dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
