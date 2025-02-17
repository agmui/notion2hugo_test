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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665235GHH6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC1NUWpxNYQYZF669e6EHT12%2Fqnh2y9MelCUNSufSJAbQIhALDKH6MvPe31QX%2FBQfPVs1l5E8nAvnz5ZfFSclN3BP2lKv8DCG8QABoMNjM3NDIzMTgzODA1Igzv6V8s2fW9tq35hTwq3ANqLmLcUn9x6i9CKcDzdGdYmfrZkIR7Mo0L62lwGN8%2BFYVLg2f9JpqGV3ouLOYi6V32UzCcDGTXaGPxrhn7fN9QKw6pp9ciHP2aqXyke2qjp6Na8S%2FRgzDMUuLBChVmYvsqra6wHFvxtvA0dWVrO8PQ6E4gJeQtTgFKMfxKUC%2Bu386c91mlrCUZHoWueD3ScTCKHhV5tmf7Fg6j4gp4ROASHla83p6%2BCjbgMMSyP%2FtdFj798vV81dxqlI4VEsDWE03QHkOCw8jaDKYCxGup2vCzIztPh6U%2BLBqsMWIlKsaW5GbyY0js6Y%2FbF0sc3%2FYUaJSqDzw4amY1oAIOb50oE%2BlPoUt%2ByzN%2BhFpj%2BSVfk5HUVfFmc4Dt4MQaj10SB7tPOn%2BrcO52ENOY8KiHcMH5ZJn2F44pr5C6bulPdUbBoh9L3zvYdRPyC29SdnMweOd4jJA0xDNSjLd5AdHr%2FJXX3%2B%2FqLCupwYE6EOjDJrlMDrUnnkYqH4HCGHRl2KkU29mRfVhc00V9LHW9SbeDBLDkTLhUF7OrNTNJ22PofyjUdC1SjBHLGK5%2FJeIn%2BRix%2Fwaihn93XKxIFpbtyen4VLoy3wvLiiTI2JFUAn6XZYrAWDUIaWSRShnAxEGGTSHyEjCUlcu9BjqkAVKs7o7xGrNlQfZdYV9cP3IeYkW%2F7lWXSsQ%2B062UAe7IVVc1%2BGgnbhc3UYNYOP5vyaHR4gnVmf46Cja3KQG%2FzYokTpY%2FJK18fXmYR7Q9r5y4AqxOgHLNhAnkXl85Q6TGSK12dnNlFNKHnYFJzTLBHK44aDvO38fS7RBayf7pMp01%2FAJmmAI13GYDBuqU%2BhxhHycWyYl4GwkSQOpO31y9a%2Fl6UtyW&X-Amz-Signature=eec690a31596b523ab4ef00b9d752ae2e1cb9a3f0f708d315b4fb8e997a69d51&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665235GHH6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC1NUWpxNYQYZF669e6EHT12%2Fqnh2y9MelCUNSufSJAbQIhALDKH6MvPe31QX%2FBQfPVs1l5E8nAvnz5ZfFSclN3BP2lKv8DCG8QABoMNjM3NDIzMTgzODA1Igzv6V8s2fW9tq35hTwq3ANqLmLcUn9x6i9CKcDzdGdYmfrZkIR7Mo0L62lwGN8%2BFYVLg2f9JpqGV3ouLOYi6V32UzCcDGTXaGPxrhn7fN9QKw6pp9ciHP2aqXyke2qjp6Na8S%2FRgzDMUuLBChVmYvsqra6wHFvxtvA0dWVrO8PQ6E4gJeQtTgFKMfxKUC%2Bu386c91mlrCUZHoWueD3ScTCKHhV5tmf7Fg6j4gp4ROASHla83p6%2BCjbgMMSyP%2FtdFj798vV81dxqlI4VEsDWE03QHkOCw8jaDKYCxGup2vCzIztPh6U%2BLBqsMWIlKsaW5GbyY0js6Y%2FbF0sc3%2FYUaJSqDzw4amY1oAIOb50oE%2BlPoUt%2ByzN%2BhFpj%2BSVfk5HUVfFmc4Dt4MQaj10SB7tPOn%2BrcO52ENOY8KiHcMH5ZJn2F44pr5C6bulPdUbBoh9L3zvYdRPyC29SdnMweOd4jJA0xDNSjLd5AdHr%2FJXX3%2B%2FqLCupwYE6EOjDJrlMDrUnnkYqH4HCGHRl2KkU29mRfVhc00V9LHW9SbeDBLDkTLhUF7OrNTNJ22PofyjUdC1SjBHLGK5%2FJeIn%2BRix%2Fwaihn93XKxIFpbtyen4VLoy3wvLiiTI2JFUAn6XZYrAWDUIaWSRShnAxEGGTSHyEjCUlcu9BjqkAVKs7o7xGrNlQfZdYV9cP3IeYkW%2F7lWXSsQ%2B062UAe7IVVc1%2BGgnbhc3UYNYOP5vyaHR4gnVmf46Cja3KQG%2FzYokTpY%2FJK18fXmYR7Q9r5y4AqxOgHLNhAnkXl85Q6TGSK12dnNlFNKHnYFJzTLBHK44aDvO38fS7RBayf7pMp01%2FAJmmAI13GYDBuqU%2BhxhHycWyYl4GwkSQOpO31y9a%2Fl6UtyW&X-Amz-Signature=0514defdd1dc2d431730736766eabcf85bbab9417582be268bb210bc417f1dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
