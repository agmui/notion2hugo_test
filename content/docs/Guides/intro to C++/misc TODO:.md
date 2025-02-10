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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2BMJEJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3nGia83ruAGI6XfftHUglRejVPur3eKGh0naz186lsAiAw8y88Oz%2BVcYvmPdHOA8ceK43dyHK5eLPaj6Bf4AqVIyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6AdyAyHQbgwm4mNKtwDQEDJM8pjBD77ykmJxZ6peWOncw2QViVAWyut2Air0txcwN3Si06qJfmhE1cdyXyPBJBJu0FK5dapn9w8GfaBzPaJeRIuabrNAOsxdyLXMKGGWcLosqDuwAeZAs1Hi9volzTyvnRxWj2ZYR8raGRvT8bnMoSptmqPDhcjNQBzCGpRSZSvfsboRmx6GkC2KNJ1XEO7cObV41BZkSCR3HDdcYIZ1K8ncXVZK1ceLObyBKlOB9a7hUxmm2FO3PHDeoROxdWZYnDe4x66iiId45jbuuWASXLxjvBH2TuNj96EtfIHZx9ytZ9yeMqRnG7XsSJBnbgoOTNmfIr5doe%2B3xAy%2Fg3%2BbzkcIEz%2BfG5uBgcaqy8EvFCXudikLjNKqOypNSY80JXT1TDJpagH1zblpkX6BB22ugZBEphOYabnB2vqlqgX%2F64X%2BjO9Cbq1rcJB4QgBE74sWgbjbP2Tootq6Dmt0RlubWKHaZtOCJ99XYeR%2BqeXt5VNzbiHgqfpV8uosENqHBNmlkwH3yCLEmX4gs9IHfMyiODh9A%2BZc0XRv9l5jpJBmVL%2FHjk8U6xorteuJv4%2FaT4qFCJvN88pIPdNQCjhbv6QRtE263ey9kXZwt36KozbsEX8nXuI9KdC%2BAYw6%2FmlvQY6pgHR9iJDMklJ%2BEHQ5LZW73wx%2BBkpUTjOILzvglMgTMY6D68CN0LP7aspCdkSIKw9h%2FDHH6CGN%2F1dXVVhva61DejIghWwWMR8NTGmH98qmf2U0z0h3QGXSmFZYwwhXc4kLOfKpV65lOD2jq6rLZki1UZG%2BqIQkpli24hgTCJYAcXMU%2FX5gRt1HPHJ9F9b7NU7e%2B%2BmHbZKYpY7HOY5F1dD4ToLOLpZT%2BkL&X-Amz-Signature=5985bf06b9ae3c46016abffdd6e713576114c304576c7fe4eeaf3bd3d056d522&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2BMJEJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3nGia83ruAGI6XfftHUglRejVPur3eKGh0naz186lsAiAw8y88Oz%2BVcYvmPdHOA8ceK43dyHK5eLPaj6Bf4AqVIyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6AdyAyHQbgwm4mNKtwDQEDJM8pjBD77ykmJxZ6peWOncw2QViVAWyut2Air0txcwN3Si06qJfmhE1cdyXyPBJBJu0FK5dapn9w8GfaBzPaJeRIuabrNAOsxdyLXMKGGWcLosqDuwAeZAs1Hi9volzTyvnRxWj2ZYR8raGRvT8bnMoSptmqPDhcjNQBzCGpRSZSvfsboRmx6GkC2KNJ1XEO7cObV41BZkSCR3HDdcYIZ1K8ncXVZK1ceLObyBKlOB9a7hUxmm2FO3PHDeoROxdWZYnDe4x66iiId45jbuuWASXLxjvBH2TuNj96EtfIHZx9ytZ9yeMqRnG7XsSJBnbgoOTNmfIr5doe%2B3xAy%2Fg3%2BbzkcIEz%2BfG5uBgcaqy8EvFCXudikLjNKqOypNSY80JXT1TDJpagH1zblpkX6BB22ugZBEphOYabnB2vqlqgX%2F64X%2BjO9Cbq1rcJB4QgBE74sWgbjbP2Tootq6Dmt0RlubWKHaZtOCJ99XYeR%2BqeXt5VNzbiHgqfpV8uosENqHBNmlkwH3yCLEmX4gs9IHfMyiODh9A%2BZc0XRv9l5jpJBmVL%2FHjk8U6xorteuJv4%2FaT4qFCJvN88pIPdNQCjhbv6QRtE263ey9kXZwt36KozbsEX8nXuI9KdC%2BAYw6%2FmlvQY6pgHR9iJDMklJ%2BEHQ5LZW73wx%2BBkpUTjOILzvglMgTMY6D68CN0LP7aspCdkSIKw9h%2FDHH6CGN%2F1dXVVhva61DejIghWwWMR8NTGmH98qmf2U0z0h3QGXSmFZYwwhXc4kLOfKpV65lOD2jq6rLZki1UZG%2BqIQkpli24hgTCJYAcXMU%2FX5gRt1HPHJ9F9b7NU7e%2B%2BmHbZKYpY7HOY5F1dD4ToLOLpZT%2BkL&X-Amz-Signature=9906989867b8a5960f4afc8f507b730cd44372ffbe53880bcd2d9f52b6842b95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
