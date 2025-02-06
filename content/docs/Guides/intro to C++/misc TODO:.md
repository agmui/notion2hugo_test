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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7GF57N%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFA3g5CKGJwprCLeO9N9fnlt9LDnDDNAZMifpqCJnRmeAiEAzZccB4bGAMcF%2FUrL3wDZBK7pl%2FMPo4exNbOHRwJZgRkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDG%2Fl0cdeur8pln2HyrcA%2FLEYA8LovFyuboKiCWUT6LkO1N8mnga%2FMdG6iVSIiRRTT5vD%2BXDZ5%2BfNkrrLDpYZIaKqVqi36971T1ivpitxE8EbceumyarjlUDxmEejb7rZ9SLl5YzrCdmUH3%2FMKHXo764vRGrE5oBVIyBw2Bl1PEtpAMfpzz6mlkyyFOB2avbkEztcnVItXqn0xE54d4YBzjHk4LEkl6XKakSEpAygD0wY5%2FYI1PnPYKPpHCQ9JFYiDp6RHHRcrX17k3S7G5nBzlEeQRK2uvoCWyiEINSTgIc8VNq5gypehM%2Bs8q2Fg3f%2Bj9DhHhhYZqeLwHTQ2cYoOctgbGB2AC8b6zNrhPg5NqVhDMof2tSLlGCitiG54Bts6oFdIvzRiM8b6rDfR8qWnXyL0FkAkdsQH5VCb%2B3Ttd9nMKkp%2FQXhQBubcB12twk1sAeMFVBM0rJ2239tYdQ2rYxmM4%2FTHDrnAs7rrivihbPhNwdaITf0SgRRowdfMPjZYF4JgoB6dtFwI0bxf0g3IGtKjwtOH8tndLZZ1nyRjDQn159zhR%2BkOFXPtV9ka%2FKfTmL1LzSKj%2F9BJkOgEWVyBjQUzv8VORbu7Cq1mI7b50qV7ikH2Bk7QEvPF9wb9fs6kdM0qhS%2BFcOm%2BVyMLzsj70GOqUBIjnL7NW3uQoN0YqQgqZ5ke01HAQzRW3ZIYNyWl%2FmVcMvJ2ekhvtdxm86JrbTL5GjWtOneYWHmQK18YCKjLkDKpi3VHyQeV2d9lySLWOJWQSJY9EkI3zBAkrIDg4Y%2BsPHN7qPyXozhWwNK4QMs054TlqsbNOoeDT%2FRXopAowkh%2BYhpU2k1ZdKme9THxyXbMXVlWc14uoqcx7r5J9O9Jqxo%2ByIXZsr&X-Amz-Signature=7f8f757cfe9c020c4f3dafb1fe35786f7aecaaa4746673652a5c76cfe2d7c7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7GF57N%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFA3g5CKGJwprCLeO9N9fnlt9LDnDDNAZMifpqCJnRmeAiEAzZccB4bGAMcF%2FUrL3wDZBK7pl%2FMPo4exNbOHRwJZgRkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDG%2Fl0cdeur8pln2HyrcA%2FLEYA8LovFyuboKiCWUT6LkO1N8mnga%2FMdG6iVSIiRRTT5vD%2BXDZ5%2BfNkrrLDpYZIaKqVqi36971T1ivpitxE8EbceumyarjlUDxmEejb7rZ9SLl5YzrCdmUH3%2FMKHXo764vRGrE5oBVIyBw2Bl1PEtpAMfpzz6mlkyyFOB2avbkEztcnVItXqn0xE54d4YBzjHk4LEkl6XKakSEpAygD0wY5%2FYI1PnPYKPpHCQ9JFYiDp6RHHRcrX17k3S7G5nBzlEeQRK2uvoCWyiEINSTgIc8VNq5gypehM%2Bs8q2Fg3f%2Bj9DhHhhYZqeLwHTQ2cYoOctgbGB2AC8b6zNrhPg5NqVhDMof2tSLlGCitiG54Bts6oFdIvzRiM8b6rDfR8qWnXyL0FkAkdsQH5VCb%2B3Ttd9nMKkp%2FQXhQBubcB12twk1sAeMFVBM0rJ2239tYdQ2rYxmM4%2FTHDrnAs7rrivihbPhNwdaITf0SgRRowdfMPjZYF4JgoB6dtFwI0bxf0g3IGtKjwtOH8tndLZZ1nyRjDQn159zhR%2BkOFXPtV9ka%2FKfTmL1LzSKj%2F9BJkOgEWVyBjQUzv8VORbu7Cq1mI7b50qV7ikH2Bk7QEvPF9wb9fs6kdM0qhS%2BFcOm%2BVyMLzsj70GOqUBIjnL7NW3uQoN0YqQgqZ5ke01HAQzRW3ZIYNyWl%2FmVcMvJ2ekhvtdxm86JrbTL5GjWtOneYWHmQK18YCKjLkDKpi3VHyQeV2d9lySLWOJWQSJY9EkI3zBAkrIDg4Y%2BsPHN7qPyXozhWwNK4QMs054TlqsbNOoeDT%2FRXopAowkh%2BYhpU2k1ZdKme9THxyXbMXVlWc14uoqcx7r5J9O9Jqxo%2ByIXZsr&X-Amz-Signature=244d483e764940d1ea7958dbe8b637d552a213032cf3653291d218dd9583732d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
