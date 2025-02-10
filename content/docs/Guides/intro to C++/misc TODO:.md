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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFXK5GB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyPxM5onEMAUPLQSFk0aOjAPpG0%2F1gplA4UhmUEDVfoAiEAo0wJBLEHvMyBoCPxm5%2FdY4w%2FklW3NgHlioJNS8dkUhsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFYKnJkdkyl0EwW%2FSrcA21Cr%2F1pHJEebg0jOC3v%2BuXng6gZLylEYBkrJ9eE0yVJaFRN%2BYqigCxKocWsm%2FP9qDyBtuPUCQMFOMcHmQYhp%2FSQYJa1%2BJ9RAHkKpgLRuMAu8QbvKg3sxhUHbpb5FcFpNYqMhKY%2BEbK7lU23muO7MGUUyQHvnaKgzG74x4HPcukrQrEyLqumjImps0uVCN0Xde%2BN9H5A82l5eTs39rtWsCm8iISzNM7kIfBJT41ca9puBAVdpLeKmQM9ryo%2BkcxNxOhIT0xS7CiMwdIHcLUGmIn1npZjbvNy1LbiPfasa0S%2BbPP7Ncsm1coXN0030Mh0AvXv8tCAgN%2FCGJ7CCNFZvM8wOaxN6IA63XYtY62QlzKob%2Fnpkc%2FBYWkzcpGMR%2FIdfTBrgSZcTurM6nEmd69Ru4LudYjW4cvptJ9oIsLovt58aDVKheUTfLkvG8y5R560r4EYWGlRnAgtPgPiM6fUfXKx2zmD8TyTk%2Bac1ZfEW9a66TH3u1iIEbtB19Q6ABWgs3BqhglVP0yb0KCSf43thIjKB1mKaNxGDqCM%2FiD%2B1PeZ4Fiw1nLGp04C2%2B0ShAZfnbS2klrekb%2Bwt6JA4y9aVWmoPVNwA5OkVHuy9ys%2B5Erp8tUKeScAB4JXkiswMPm7qL0GOqUBSSb3GTmAOWm9ZmXvrMWz8agjXKj7gR3YhRdLQGXAdySwZEdnAT0l8U6jcOxwis77NDs9tJoGT5nekcvHNVkwv3uhgW%2FHhzFZgt3N%2BNV%2BL8CJ2u4Y7uFB5%2B510iIEY4ba8GYQLGB39u61O1TkXCaA99%2BJ6bfawkaxBnyb7nmuCVwlsU%2Fqak3yx0jUAQn73xqHMP19pUMe%2F4V3Z95m8HlTjgFlHRGA&X-Amz-Signature=ecdaefb7e45b2a6ef38216ca8a16abe3399a26df11ad4d3a05ded7a6c87013ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFXK5GB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyPxM5onEMAUPLQSFk0aOjAPpG0%2F1gplA4UhmUEDVfoAiEAo0wJBLEHvMyBoCPxm5%2FdY4w%2FklW3NgHlioJNS8dkUhsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFYKnJkdkyl0EwW%2FSrcA21Cr%2F1pHJEebg0jOC3v%2BuXng6gZLylEYBkrJ9eE0yVJaFRN%2BYqigCxKocWsm%2FP9qDyBtuPUCQMFOMcHmQYhp%2FSQYJa1%2BJ9RAHkKpgLRuMAu8QbvKg3sxhUHbpb5FcFpNYqMhKY%2BEbK7lU23muO7MGUUyQHvnaKgzG74x4HPcukrQrEyLqumjImps0uVCN0Xde%2BN9H5A82l5eTs39rtWsCm8iISzNM7kIfBJT41ca9puBAVdpLeKmQM9ryo%2BkcxNxOhIT0xS7CiMwdIHcLUGmIn1npZjbvNy1LbiPfasa0S%2BbPP7Ncsm1coXN0030Mh0AvXv8tCAgN%2FCGJ7CCNFZvM8wOaxN6IA63XYtY62QlzKob%2Fnpkc%2FBYWkzcpGMR%2FIdfTBrgSZcTurM6nEmd69Ru4LudYjW4cvptJ9oIsLovt58aDVKheUTfLkvG8y5R560r4EYWGlRnAgtPgPiM6fUfXKx2zmD8TyTk%2Bac1ZfEW9a66TH3u1iIEbtB19Q6ABWgs3BqhglVP0yb0KCSf43thIjKB1mKaNxGDqCM%2FiD%2B1PeZ4Fiw1nLGp04C2%2B0ShAZfnbS2klrekb%2Bwt6JA4y9aVWmoPVNwA5OkVHuy9ys%2B5Erp8tUKeScAB4JXkiswMPm7qL0GOqUBSSb3GTmAOWm9ZmXvrMWz8agjXKj7gR3YhRdLQGXAdySwZEdnAT0l8U6jcOxwis77NDs9tJoGT5nekcvHNVkwv3uhgW%2FHhzFZgt3N%2BNV%2BL8CJ2u4Y7uFB5%2B510iIEY4ba8GYQLGB39u61O1TkXCaA99%2BJ6bfawkaxBnyb7nmuCVwlsU%2Fqak3yx0jUAQn73xqHMP19pUMe%2F4V3Z95m8HlTjgFlHRGA&X-Amz-Signature=bc1f5ec1dea56151c7d290f9b336ca86ac00decf799fd48aeec0f6d5d2ee745a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
