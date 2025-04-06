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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CWFNB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeZu%2BUc8QjRv7EWPnCIemkoZOIV%2FkYwXFAWnmoIVTuDQIhAPOoy9uWwzkpiZc841PWEVuuk5SrLGDzYRbBVc0B7uGrKv8DCEAQABoMNjM3NDIzMTgzODA1IgwfpuSfv02xvnw7Pfkq3ANhpMzjUwtkfPJSXg3BOa7QIzEkiNBps16xVr3SU7ebLgUnSjfbUh4ACf%2BEGDC29bwofr7dzh52l9MMHcQH3cbI%2BJd%2FCG1Q%2FJb4zuaaOj5Kb5YedVtVRVSSWkiBWMZboGeiNm%2FCIDO2vtHbZNaihKPbzWLig%2BW2Z36J6URcTHRAH2Rcnf9%2BGNaZmwQHwh7JaDw26B0SYvEWmNlG%2B%2FqkXfRAaSRixZhyAUdHnUJj%2B4d32rztCN2dDmqz9YRKCQ1erU3FpNAqRLmWyW0IGdDdvu5EdcIDMRgoo1uJ%2BM2xb3rzJMCDz4r%2BKg2LgWXtIveurXNVqhpkoz2b4yZGP2P7afqulOsoEktgVGboGtJCYPJ3g8PWK%2F8gNcbBoPq4oTlk7TVu5hrPIc9K98NEYpE%2BuitB9mJc3YTNADubCdgNjVLj6VawklRVCX5sHBfjebHs7rzPJVeFcCVkPhgMEAQid4xo3uNA%2BmpWvkho8KSHNPw8M%2FjNKWoO6LpvmtfjvqUE2NrMGsxQ0dfdWOhW4GamNe8d6Bzqieaa3PLFjl7j7ythAk%2F9VprpWqclVs2UVRwIhtEwwhU5WLntCn9bklUnAyDSBpnHcknBlgBkvdHqwJj0uAthsK859M3zhFs6JjDvv8i%2FBjqkAYqYa4DeklD3WrkcPhBXQah%2FKE4gBwIj1wHjy2E6OEee88UIQFpo27nvi5G4v4MZvhZXxJXGoIy9tHebwWDx9tK1xnX7mnp2OYmzI%2BuVEMFK6Q%2B4XfsTF6KqZgY6vAVrLMS%2B6twD8Zdi%2FP67fzaIk96IBaacOqWL0%2F9q08c%2Fh3o85zLNHFLVxY9Zo9%2FZUZlVjyrSFktHfPhwqaE%2FGS6WsL6sGSIa&X-Amz-Signature=8f22dba1da1ae78d2afab3709f5f82ea99d796ff2aa58a9192971716fe767c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CWFNB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeZu%2BUc8QjRv7EWPnCIemkoZOIV%2FkYwXFAWnmoIVTuDQIhAPOoy9uWwzkpiZc841PWEVuuk5SrLGDzYRbBVc0B7uGrKv8DCEAQABoMNjM3NDIzMTgzODA1IgwfpuSfv02xvnw7Pfkq3ANhpMzjUwtkfPJSXg3BOa7QIzEkiNBps16xVr3SU7ebLgUnSjfbUh4ACf%2BEGDC29bwofr7dzh52l9MMHcQH3cbI%2BJd%2FCG1Q%2FJb4zuaaOj5Kb5YedVtVRVSSWkiBWMZboGeiNm%2FCIDO2vtHbZNaihKPbzWLig%2BW2Z36J6URcTHRAH2Rcnf9%2BGNaZmwQHwh7JaDw26B0SYvEWmNlG%2B%2FqkXfRAaSRixZhyAUdHnUJj%2B4d32rztCN2dDmqz9YRKCQ1erU3FpNAqRLmWyW0IGdDdvu5EdcIDMRgoo1uJ%2BM2xb3rzJMCDz4r%2BKg2LgWXtIveurXNVqhpkoz2b4yZGP2P7afqulOsoEktgVGboGtJCYPJ3g8PWK%2F8gNcbBoPq4oTlk7TVu5hrPIc9K98NEYpE%2BuitB9mJc3YTNADubCdgNjVLj6VawklRVCX5sHBfjebHs7rzPJVeFcCVkPhgMEAQid4xo3uNA%2BmpWvkho8KSHNPw8M%2FjNKWoO6LpvmtfjvqUE2NrMGsxQ0dfdWOhW4GamNe8d6Bzqieaa3PLFjl7j7ythAk%2F9VprpWqclVs2UVRwIhtEwwhU5WLntCn9bklUnAyDSBpnHcknBlgBkvdHqwJj0uAthsK859M3zhFs6JjDvv8i%2FBjqkAYqYa4DeklD3WrkcPhBXQah%2FKE4gBwIj1wHjy2E6OEee88UIQFpo27nvi5G4v4MZvhZXxJXGoIy9tHebwWDx9tK1xnX7mnp2OYmzI%2BuVEMFK6Q%2B4XfsTF6KqZgY6vAVrLMS%2B6twD8Zdi%2FP67fzaIk96IBaacOqWL0%2F9q08c%2Fh3o85zLNHFLVxY9Zo9%2FZUZlVjyrSFktHfPhwqaE%2FGS6WsL6sGSIa&X-Amz-Signature=7bcb9a74dbef400545b8e8312725386e5be4634dd753fc10dba95769d54c1975&X-Amz-SignedHeaders=host&x-id=GetObject)

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
