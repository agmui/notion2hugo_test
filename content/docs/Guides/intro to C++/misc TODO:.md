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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNMHFWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyQsZGaU5X52Kxs%2BZfRNzCerp%2BIYvzZj9Nrs9N5i04UAiB5v5BsY1pEqbuB1YzS80lHoj26Qt7yJaupMeRKftClSCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Zus00hYm2rdyma%2BKtwDyZB4k4nkFX9OhLuymhaD%2BwX%2BiRMEEJuZQk%2BP9DPC2ALwhMkbqdxrHgyjrIRGajuQrm70fCGOHKCSuBDkqIMh1kgXOJJhWmB3mUIOG6WNUrkK7RApx8mot96Q9b1xWgbMaRMNtoFApJurWYVQnZONASeSDkmbqg%2BYe%2FobnM3Kjyc%2BPiwDQEQ5YqtSbeKpbn2GBmLt%2Fvm93UquwxZ%2Fr8sf2Zaw0pmzttz8ODCzzaM4vd5NXHme8ppPeyzaBY%2BzABlYu6vzJhI%2B11BKNEvXXmhyFnMz%2ByLOasgWzAHsl69hS0IYOaw88oRTI%2FxiW%2B%2FhJ%2BqDfMJnz1ADUk6Wo6OwrS4nKwkLW5Pvo5L8Tw6KiTjAfZDKPUSfsbk1Xs60udwmdOUr%2B0Lc1yymXcOUkS2fITsOE0KqPRlRh3zEMwbucMo3gWOBGJuIHeziZY2DVbIenzQz2bMbp89p0wJyWbwyTaxPaG3Zv6Rqz6fehfdOFyzA6Gap7fy18rREKp7iLSS2zrao85x2BgCTkQZGi%2FPNRSsl3yjZrDJhfaZyeBHTfniqzAaHULSUYoWsQaQ8oooZuJ7IQ%2FR5pPOUniJzAqNPYD%2Fy51PjCMMJOIBC7ZkosoQB8gYOYDGeA1pnBFhy6BwwgdG8wwY6pgGdg6Pd2bTsUTXo1KTcq3BewkfYtk2aj0RLs4FfhMwGQJ4A24zQrZHAcS76ye4da30h4dsDr1iJ3pjItqKya0UEI23V0DAgx4jTcLQXfC8zEsT%2F6ala2gLaXdCwYwNxz0n24%2BHNRu4rcHBIcW%2FKQFjdBrLMwId8mgLI53gWZdBri1HhdZqqsy1DgLsH6CbaZ6NFZ0WmOXEOM%2B5VJFG0jItaTuS9mSve&X-Amz-Signature=402942f44dc1629966f3cc6752c5a946b1466cd77a08053310ba1347af070957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNMHFWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyQsZGaU5X52Kxs%2BZfRNzCerp%2BIYvzZj9Nrs9N5i04UAiB5v5BsY1pEqbuB1YzS80lHoj26Qt7yJaupMeRKftClSCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Zus00hYm2rdyma%2BKtwDyZB4k4nkFX9OhLuymhaD%2BwX%2BiRMEEJuZQk%2BP9DPC2ALwhMkbqdxrHgyjrIRGajuQrm70fCGOHKCSuBDkqIMh1kgXOJJhWmB3mUIOG6WNUrkK7RApx8mot96Q9b1xWgbMaRMNtoFApJurWYVQnZONASeSDkmbqg%2BYe%2FobnM3Kjyc%2BPiwDQEQ5YqtSbeKpbn2GBmLt%2Fvm93UquwxZ%2Fr8sf2Zaw0pmzttz8ODCzzaM4vd5NXHme8ppPeyzaBY%2BzABlYu6vzJhI%2B11BKNEvXXmhyFnMz%2ByLOasgWzAHsl69hS0IYOaw88oRTI%2FxiW%2B%2FhJ%2BqDfMJnz1ADUk6Wo6OwrS4nKwkLW5Pvo5L8Tw6KiTjAfZDKPUSfsbk1Xs60udwmdOUr%2B0Lc1yymXcOUkS2fITsOE0KqPRlRh3zEMwbucMo3gWOBGJuIHeziZY2DVbIenzQz2bMbp89p0wJyWbwyTaxPaG3Zv6Rqz6fehfdOFyzA6Gap7fy18rREKp7iLSS2zrao85x2BgCTkQZGi%2FPNRSsl3yjZrDJhfaZyeBHTfniqzAaHULSUYoWsQaQ8oooZuJ7IQ%2FR5pPOUniJzAqNPYD%2Fy51PjCMMJOIBC7ZkosoQB8gYOYDGeA1pnBFhy6BwwgdG8wwY6pgGdg6Pd2bTsUTXo1KTcq3BewkfYtk2aj0RLs4FfhMwGQJ4A24zQrZHAcS76ye4da30h4dsDr1iJ3pjItqKya0UEI23V0DAgx4jTcLQXfC8zEsT%2F6ala2gLaXdCwYwNxz0n24%2BHNRu4rcHBIcW%2FKQFjdBrLMwId8mgLI53gWZdBri1HhdZqqsy1DgLsH6CbaZ6NFZ0WmOXEOM%2B5VJFG0jItaTuS9mSve&X-Amz-Signature=11044b9d2b7e995237eec0a948bd673c171981fdfcbc1f5b2904145430080dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
