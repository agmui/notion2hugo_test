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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVIZEYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtS1inm%2B%2FwJDBp2u%2BmcgkJ%2BCNfIQijEY8FdW6zHwEgxAiEAlEGNPuf4Je0Y%2FSCV0mCYF4Q9LeNGa%2F0keneZSCCQXDUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHRls4uzl6qb90KRpyrcA80c4sESrU1ljb0Tdt6QhfVVXT%2BAgvutT%2FoXMZT89V4lSFRPTdZWbVDrFQm%2FWtWcnDwLD5SmiiJSIEPN%2BY8PjZijgA4T5a%2FfFMSemUickFVeRsuzQ2oakViZVKOWudrJ%2BthWtSvYgxOh07PUbRfDUglgr5LLHUvIYU%2BMfHTNcMwJl%2F6pxcJdWKaDppfLbE0J1b2qdYuyPDEafI1gUpTZfLqHOG5ZHeEHSV9mey0BolhbJdlQqZJcyS2vw0JqHGIG48xqmyYcsDvFvuathquxwkR9483AKbY%2B%2Fx%2F%2BfX2XHTyT6IGZWRaeu0AbaSLyj00TZGCRsafrMI2Uxa%2Bok4IGL3c3G6ZA0KiUn4bYE9NWm2VoobEwOr%2BXAme1PGWfnciSFeHk8L97qOIbnzX1J17E3yFXLHjrrwAxwLsUmU1OISMt9%2Fx6ZhI%2FEspPmIvnVjaes3hM7Rq%2Bok5WXjA5Bj4B%2FJendaTKKOt76ng3OX7la6fnI6hAJI7uo9p0tc7mzsbRYoQU9TIwlouuDq8FahoYqFdHNBRWWajDyweKrl8U281yjKNN3QDXE%2Fm7MielIt%2F6ASSvGGyF%2B4vBLbNHXl%2BznRLmaakJiD2cn1SRw4X0sWkpbgtWGhzXOQOMMj5BMIXCw8IGOqUB4LDoCzt7njzr2zDZCZB1U3mKV5O19RU%2B84TgiTEiQ6it%2BwTKNA9a84fvwKuAlKEvFqVwaIJENXaAYkrPnkMBMJim3QcDrcXkQIj1cevuDOhUc%2FFC%2B6ZtNgaltYCORR%2BByxaMumBBRHvYDsDQboQivzuK4XqQVi16c36caLygsuTHElgq8qRZgWcDcpXKFw7nlbPNWgC6g9eolduKmNtRJptk9hKi&X-Amz-Signature=cadc1ab2e649dba596a9a7aa2ea1fceeceb9a570d0437bcc8d45808bf9a0770b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVIZEYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtS1inm%2B%2FwJDBp2u%2BmcgkJ%2BCNfIQijEY8FdW6zHwEgxAiEAlEGNPuf4Je0Y%2FSCV0mCYF4Q9LeNGa%2F0keneZSCCQXDUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHRls4uzl6qb90KRpyrcA80c4sESrU1ljb0Tdt6QhfVVXT%2BAgvutT%2FoXMZT89V4lSFRPTdZWbVDrFQm%2FWtWcnDwLD5SmiiJSIEPN%2BY8PjZijgA4T5a%2FfFMSemUickFVeRsuzQ2oakViZVKOWudrJ%2BthWtSvYgxOh07PUbRfDUglgr5LLHUvIYU%2BMfHTNcMwJl%2F6pxcJdWKaDppfLbE0J1b2qdYuyPDEafI1gUpTZfLqHOG5ZHeEHSV9mey0BolhbJdlQqZJcyS2vw0JqHGIG48xqmyYcsDvFvuathquxwkR9483AKbY%2B%2Fx%2F%2BfX2XHTyT6IGZWRaeu0AbaSLyj00TZGCRsafrMI2Uxa%2Bok4IGL3c3G6ZA0KiUn4bYE9NWm2VoobEwOr%2BXAme1PGWfnciSFeHk8L97qOIbnzX1J17E3yFXLHjrrwAxwLsUmU1OISMt9%2Fx6ZhI%2FEspPmIvnVjaes3hM7Rq%2Bok5WXjA5Bj4B%2FJendaTKKOt76ng3OX7la6fnI6hAJI7uo9p0tc7mzsbRYoQU9TIwlouuDq8FahoYqFdHNBRWWajDyweKrl8U281yjKNN3QDXE%2Fm7MielIt%2F6ASSvGGyF%2B4vBLbNHXl%2BznRLmaakJiD2cn1SRw4X0sWkpbgtWGhzXOQOMMj5BMIXCw8IGOqUB4LDoCzt7njzr2zDZCZB1U3mKV5O19RU%2B84TgiTEiQ6it%2BwTKNA9a84fvwKuAlKEvFqVwaIJENXaAYkrPnkMBMJim3QcDrcXkQIj1cevuDOhUc%2FFC%2B6ZtNgaltYCORR%2BByxaMumBBRHvYDsDQboQivzuK4XqQVi16c36caLygsuTHElgq8qRZgWcDcpXKFw7nlbPNWgC6g9eolduKmNtRJptk9hKi&X-Amz-Signature=10b7581d9f87b73252bc062e0dfd202b06047451c623024e23d27ed4ec51c170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
