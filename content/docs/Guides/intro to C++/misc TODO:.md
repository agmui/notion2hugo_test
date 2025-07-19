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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7DE34K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqzw4lFClTJ48wKuAYfHpf7RaaRw7OIyj80LrO6a0HSAiByG7xstNzeiYpRA0WhxXrn%2Bqy%2Bxyi4Eaz3NqyHAivJUyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSN7GokkEzrhWtTUnKtwD4aqki%2FWHOTZWq3BXYbid3KYHjUDfdN1Qcexo1Rpom%2FO5AqgqyqeUjBxXAQ4CEsatFnAM4h9RoAJg9GBm4MalofH4JyxJ9oPlt%2Bc8qC%2FCQIwOawyADqc%2BD8Dw8qaH9I5YiwAgmAR5PWp8Ex89Z%2BC9q5KP%2Fvfp7mJQ6rouIeyXZCa22uYBR3mc3TMh3IRiDjV3E2ZLsRPBYWsEO0K1PlS9MV3XAEpGwsbUq5XbK%2BfeoBl%2F6i2upgrOz179MA76FQhyyGCen1R5ZNZnroc38I0ENkqmcia37riktJYHlkLU3nakhKx3JzRGQJw%2B172lNDEwdtP%2F1ZRfUT9rf8huk7czfrjEVEGftzTTi%2BGpV%2FM5q1hVvRnD5fN9e2PlG4rmsV4dLcmvb4KLusGS7XrSvQkn%2BJtyYVfgn62MGDOx%2BBY9qpenECb1V7SFQMUMyngwEc9SMMaHqWV3fI8BQtcVorLae3a8gF1e%2BMWqo9fMJqYozDYZduwheULNdMsswD32aaMcZshdTWJnh9hcXZVvxSfHeP2equeGdfzmIkWQa%2FLHw5JZvG6JrcEkMit%2B1gYH8MN9hVz6CueSP%2FYCpdGnbugMJppVvuAyR5gZNV7Y9QtFdind5ySWdkGnwYNvF2cwyPXvwwY6pgHowRKPwE0Jrw2xv2UK%2BYgbIkjCtata0QeR%2BPjLevg%2FWx4YffmUDBCI4kE25xbEy9DndyURTEOh%2Bu0KFWvLnMpPx6%2F46279KOgcGegPQRC9AJGxzLHI%2F6sLXCgGs3p4Xg0OWnKUo4vypqt%2Fu3Y%2FOaqCtvaBos0gFdQ%2FxZGW0dxGyc56SzhGd%2B0qAlbUdZkG%2FnyM8iuugthwIgcVWV123ioBRy9Fy3au&X-Amz-Signature=cd503132a5a8738dd953ff841d472d12ca10f8ae1bb05b0d63d8bbb0114e3498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7DE34K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqzw4lFClTJ48wKuAYfHpf7RaaRw7OIyj80LrO6a0HSAiByG7xstNzeiYpRA0WhxXrn%2Bqy%2Bxyi4Eaz3NqyHAivJUyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSN7GokkEzrhWtTUnKtwD4aqki%2FWHOTZWq3BXYbid3KYHjUDfdN1Qcexo1Rpom%2FO5AqgqyqeUjBxXAQ4CEsatFnAM4h9RoAJg9GBm4MalofH4JyxJ9oPlt%2Bc8qC%2FCQIwOawyADqc%2BD8Dw8qaH9I5YiwAgmAR5PWp8Ex89Z%2BC9q5KP%2Fvfp7mJQ6rouIeyXZCa22uYBR3mc3TMh3IRiDjV3E2ZLsRPBYWsEO0K1PlS9MV3XAEpGwsbUq5XbK%2BfeoBl%2F6i2upgrOz179MA76FQhyyGCen1R5ZNZnroc38I0ENkqmcia37riktJYHlkLU3nakhKx3JzRGQJw%2B172lNDEwdtP%2F1ZRfUT9rf8huk7czfrjEVEGftzTTi%2BGpV%2FM5q1hVvRnD5fN9e2PlG4rmsV4dLcmvb4KLusGS7XrSvQkn%2BJtyYVfgn62MGDOx%2BBY9qpenECb1V7SFQMUMyngwEc9SMMaHqWV3fI8BQtcVorLae3a8gF1e%2BMWqo9fMJqYozDYZduwheULNdMsswD32aaMcZshdTWJnh9hcXZVvxSfHeP2equeGdfzmIkWQa%2FLHw5JZvG6JrcEkMit%2B1gYH8MN9hVz6CueSP%2FYCpdGnbugMJppVvuAyR5gZNV7Y9QtFdind5ySWdkGnwYNvF2cwyPXvwwY6pgHowRKPwE0Jrw2xv2UK%2BYgbIkjCtata0QeR%2BPjLevg%2FWx4YffmUDBCI4kE25xbEy9DndyURTEOh%2Bu0KFWvLnMpPx6%2F46279KOgcGegPQRC9AJGxzLHI%2F6sLXCgGs3p4Xg0OWnKUo4vypqt%2Fu3Y%2FOaqCtvaBos0gFdQ%2FxZGW0dxGyc56SzhGd%2B0qAlbUdZkG%2FnyM8iuugthwIgcVWV123ioBRy9Fy3au&X-Amz-Signature=155bab78cb17330b4356375cf6105aed237b5cddac3b9fa3b7309bde849cf9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
