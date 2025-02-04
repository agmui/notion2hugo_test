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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKECP35%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHBykto1BmRJ%2BxdlxUeJzmdd%2BXYwZemnm%2By1g0un%2BSHvAiBSFmmRQ0vxO8ljw6Ed%2FNkhXbyeYlW0%2BtYRTjdTfBQRiir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJaez1veiRWP753G3KtwDSj5ZeztNtelva%2B6mq7Q8pKl5ZXrfO5ULHUaMulsM6gbb0v%2F6x6Rnylq0ewyt0LkqXnzgkmW4rPWw%2FvYTFGKrh29E4JhoTxZnDUDkBa7iJWlqr8KTFQbacNm3iLmK7NzHUp8Mh%2BBDPop7qTU2%2F3uraep3BW2cHgsCJPqIF2H5IBT%2FfcdpZM5cf%2FmT%2FRbSgqGW308WGRr0LUbQwUFRLP8SxKuuYQO7ZiRlbmMiu5xR%2BnTyUWTnSvvxRU1znbb3r%2Fmxs7U%2Brq1MP8qMo5XBK%2F9do5oNPq2Dxjk9Bmw0Eyb32oVd07AkMt1P2aiANYGWgN6F0%2FxPtShjMztDRBgDWrriGhrdG0YTP6QfP2PFvX%2B13pJzxqtWR0tUnCQK6nju2XQGy7FGcCcrw1kOz0KoZNsMXrWHacrw6dJEVweizrczJRLB3jra4MEwgdNPG2GS4z75RM4DguwegMtBGWuHV7FuukK0LmsWiWFGZx86izXXX0PADftIbuAmU3dEgNrKMoDQVG8w9fswUIQlVaXg7qRGSrx%2Bhbwsy%2BRoCUBxpCElq8MCdTUGNm8%2BJGPiLOJbk4yytiqwQcFXhlaDEn%2FrY7boBYcWwLttZmvKrgcDfOvB%2FKh23Os1ed68DDjmuMIwi5%2BIvQY6pgESdNkzpWuqNiIdlSaGSpNKWZsYjU3lwh6ZR1LY4MgEb25e6oOlqVwUzinL6qRHi3s3Ny%2BiMhNN65sw1Iej5cYNViVvCm5KgaTnWTh%2FMApP5XNUtH6vvfUBzO5l4QE5FQDcoOoWzgFJUfZvKrbyBGm7fSQfd8MbG4qBqetIRWteL%2FMRyPDZrQQhn18lAQSCQpWF9A1zo1kkB4ZuH42CwQ428fShOQsY&X-Amz-Signature=e3f7bbe00895eef8549a962e9c3a45c896faa9091123ee967e50945bbdad1d61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKECP35%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHBykto1BmRJ%2BxdlxUeJzmdd%2BXYwZemnm%2By1g0un%2BSHvAiBSFmmRQ0vxO8ljw6Ed%2FNkhXbyeYlW0%2BtYRTjdTfBQRiir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJaez1veiRWP753G3KtwDSj5ZeztNtelva%2B6mq7Q8pKl5ZXrfO5ULHUaMulsM6gbb0v%2F6x6Rnylq0ewyt0LkqXnzgkmW4rPWw%2FvYTFGKrh29E4JhoTxZnDUDkBa7iJWlqr8KTFQbacNm3iLmK7NzHUp8Mh%2BBDPop7qTU2%2F3uraep3BW2cHgsCJPqIF2H5IBT%2FfcdpZM5cf%2FmT%2FRbSgqGW308WGRr0LUbQwUFRLP8SxKuuYQO7ZiRlbmMiu5xR%2BnTyUWTnSvvxRU1znbb3r%2Fmxs7U%2Brq1MP8qMo5XBK%2F9do5oNPq2Dxjk9Bmw0Eyb32oVd07AkMt1P2aiANYGWgN6F0%2FxPtShjMztDRBgDWrriGhrdG0YTP6QfP2PFvX%2B13pJzxqtWR0tUnCQK6nju2XQGy7FGcCcrw1kOz0KoZNsMXrWHacrw6dJEVweizrczJRLB3jra4MEwgdNPG2GS4z75RM4DguwegMtBGWuHV7FuukK0LmsWiWFGZx86izXXX0PADftIbuAmU3dEgNrKMoDQVG8w9fswUIQlVaXg7qRGSrx%2Bhbwsy%2BRoCUBxpCElq8MCdTUGNm8%2BJGPiLOJbk4yytiqwQcFXhlaDEn%2FrY7boBYcWwLttZmvKrgcDfOvB%2FKh23Os1ed68DDjmuMIwi5%2BIvQY6pgESdNkzpWuqNiIdlSaGSpNKWZsYjU3lwh6ZR1LY4MgEb25e6oOlqVwUzinL6qRHi3s3Ny%2BiMhNN65sw1Iej5cYNViVvCm5KgaTnWTh%2FMApP5XNUtH6vvfUBzO5l4QE5FQDcoOoWzgFJUfZvKrbyBGm7fSQfd8MbG4qBqetIRWteL%2FMRyPDZrQQhn18lAQSCQpWF9A1zo1kkB4ZuH42CwQ428fShOQsY&X-Amz-Signature=4925c494520c7d3bfc1a2312b3c147480f19a1582c073882c8c7da491a366388&X-Amz-SignedHeaders=host&x-id=GetObject)

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
