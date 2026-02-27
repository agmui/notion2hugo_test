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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNGRWIB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDJ1KhrOMJ2XLROJwqkF%2B64dQkLosEMbWFQ45hY3xQJBwIhAKh7ntssQX7bCeLSkRd9MrtevdvSg8mmzjA6lFUIeZ6ZKv8DCDIQABoMNjM3NDIzMTgzODA1Igywjeqj7QnoY718Xzoq3AMd%2Budav5ofXuUi1OhuZ8%2F84Ijq8MFSR7cD8SVBEl61acWu1S6sEkrFxgCknLqGHVbRkWT8ghR7ZdWvzig2EijAdSOrH2ypdc6Zix60FQe3C%2FU4S0M01xWPXjGXSVy8OcmoIyk2GpOWf4QbaAtmwXLcrERWCRIEznWArUnrh1albPycjP7Ea6KUUIkU3ZyeM00ECUz7wXMClVIw0DlQFqoYotaZAj869Peu46Al7AnP6NX4v83dENFpgrZp9a6o%2F7Jj6JLT598M4NaEcX6EdGA9qKcxztaeW4UHv5Dvbcce7SHHB9aXrnYnqNo%2BDDFBmHpx6D4%2BCVR8diZ77Ex4LKstqeoRdlA7uo7iLnOWAVDro0agqWLRyYBsafkQDacxjt%2FEak7BYDb1dPQ%2F7u28Nudxw6lPW82Nu9t74V5cfDJerM2196hRMsHc1aKUOD%2FMc3Hvomep8yrNVAiwFDVgyA1wWg9P7TVnPMAouz734U4b55x5EtBgnyuhKEMPWJNtEfFtKf%2F9XOl0Q9go2ArmbmiZaOOVNUCgSxKil6AuJIA7SN8WuvGGVXkbuHSrWAeFASupebxvknsOhDfKrvsVdLbCZkfl1iFxfv60EWH6hMZPdVoMpRXQ0I7%2B4p9p2jD92YPNBjqkAbIhZvoen4LlEjrSJEWOuuu%2B3vct8Yg9eIDj56Wglm15C8oTvS9SE4RGbJYx8axbHiyJ2jHwrD3eRZLnu8Qmp%2FN0SJ34qqJlJ9SpSjHzmBMkZ%2Bou0eXJZdPP%2BA5jM3oKm2exEFhJhZ43UeaE8nGY1Dl%2FKGZ35DUcLbaOSu%2B%2FjJx4SseMqUDfxJY%2Bj6s2jGuwflsKUMKM%2B7p%2FVPYmTUSxkUMqgZL%2B&X-Amz-Signature=f468181c36edc226af4470dd67deff93de4d75f9e99301b9773606ebfacb4e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNGRWIB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDJ1KhrOMJ2XLROJwqkF%2B64dQkLosEMbWFQ45hY3xQJBwIhAKh7ntssQX7bCeLSkRd9MrtevdvSg8mmzjA6lFUIeZ6ZKv8DCDIQABoMNjM3NDIzMTgzODA1Igywjeqj7QnoY718Xzoq3AMd%2Budav5ofXuUi1OhuZ8%2F84Ijq8MFSR7cD8SVBEl61acWu1S6sEkrFxgCknLqGHVbRkWT8ghR7ZdWvzig2EijAdSOrH2ypdc6Zix60FQe3C%2FU4S0M01xWPXjGXSVy8OcmoIyk2GpOWf4QbaAtmwXLcrERWCRIEznWArUnrh1albPycjP7Ea6KUUIkU3ZyeM00ECUz7wXMClVIw0DlQFqoYotaZAj869Peu46Al7AnP6NX4v83dENFpgrZp9a6o%2F7Jj6JLT598M4NaEcX6EdGA9qKcxztaeW4UHv5Dvbcce7SHHB9aXrnYnqNo%2BDDFBmHpx6D4%2BCVR8diZ77Ex4LKstqeoRdlA7uo7iLnOWAVDro0agqWLRyYBsafkQDacxjt%2FEak7BYDb1dPQ%2F7u28Nudxw6lPW82Nu9t74V5cfDJerM2196hRMsHc1aKUOD%2FMc3Hvomep8yrNVAiwFDVgyA1wWg9P7TVnPMAouz734U4b55x5EtBgnyuhKEMPWJNtEfFtKf%2F9XOl0Q9go2ArmbmiZaOOVNUCgSxKil6AuJIA7SN8WuvGGVXkbuHSrWAeFASupebxvknsOhDfKrvsVdLbCZkfl1iFxfv60EWH6hMZPdVoMpRXQ0I7%2B4p9p2jD92YPNBjqkAbIhZvoen4LlEjrSJEWOuuu%2B3vct8Yg9eIDj56Wglm15C8oTvS9SE4RGbJYx8axbHiyJ2jHwrD3eRZLnu8Qmp%2FN0SJ34qqJlJ9SpSjHzmBMkZ%2Bou0eXJZdPP%2BA5jM3oKm2exEFhJhZ43UeaE8nGY1Dl%2FKGZ35DUcLbaOSu%2B%2FjJx4SseMqUDfxJY%2Bj6s2jGuwflsKUMKM%2B7p%2FVPYmTUSxkUMqgZL%2B&X-Amz-Signature=eebafa93a5beec9f2fe2cb03e639e789c60165ed3871098cb3f18431ce19aa90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
