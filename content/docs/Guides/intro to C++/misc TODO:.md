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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAC3XMAR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCmQQWIRS6X6PZAyf%2B%2B1Kr1%2Fkn7FebqU9sMm%2FxoA62ikQIgAIBMHmZ2m3eTbCtJzKDk5pvSviFFeIGKZM9NsAy0xCwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOR%2FDn1b5dPzHPluQCrcA6RJUW%2Bk6Jr1XrBtD0JmDtVhGrxKRLtSEJG0Rd%2BrQGCin%2BYNtOX6mLYPyxbvyLc%2FL9Az9ABjH4mLOswSj7hPrcV%2BTihI1bQS0%2FhH1dKvdNoZMZ1ftDwgIMDk8DJnYgUIX4IN0EoHatmJKNuftPx0EJEVSjYe7U3OMDfViOQhM6OWw3YjjZeSbeAMooZqctqC11IFFxvXN0oJcCstV5QNVAhqZFFkHA8CSnd%2F9o7RMr1PgkI3B%2BYOrymvFCXJL4n2UV%2Fa0oi8%2BtmXDqY6MSXLcieHFv8Uk61cZ5WqoN9VgGYXcKBw089hC38dZLLgXddfo3Cz9%2FKjbyhAH0%2Bf1QLCrXx8J1hS1qfgY%2FmwNTAcO%2B0ri5kuDhKn5Of7Xv0Nd60nAVMWNdQmKeqA8QZNQ44%2FOE2Bnz4T2RuZppCHFuANBSmc5dwOo%2FvfriDkmbYHkB0dt%2BNQXiWcqdjYARqDop8Ny%2BH9QoOr8B00dDqEz307HX9ilS7n40%2BE%2F4Y6I%2FGqbwXhGCPmh5wYnZJtn65uY5WjVJK%2FFFEdKKxTrlb5PxNxAALONJ8NTGy1QvXN23cIpdfDLI818gr3wdd8IIYruMi7sp2AusFuOJYv5It9awAl72JWPQSVawclWSsNWEHKMMW5tr4GOqUBlEA%2FeOfZG5LPYm0ngZ9%2Fq1ym2kD6U9kwYjK%2FM6zseFnTQ6ub%2BMSaP3KWzeegJl9G2am%2FaHHZmH9%2FSMJY5r6AFEOZZWT08dCV9b7W3M2QbklXE%2F71hTF3HxlEd9zRZA5Y8%2FHE5pJ7UhJRpFU%2Bfrco584t5n7nZYk0JKRL6IsQpr09vsftGfN%2Fc1N8AORhy7WedZ8w1iY%2Fj1%2Ft%2FerVw030Fke%2F6UBN&X-Amz-Signature=7b6d003c60c719d8fd46115a633b8a93c7d33a95ef48b10bba560c777fb6cad6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAC3XMAR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCmQQWIRS6X6PZAyf%2B%2B1Kr1%2Fkn7FebqU9sMm%2FxoA62ikQIgAIBMHmZ2m3eTbCtJzKDk5pvSviFFeIGKZM9NsAy0xCwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOR%2FDn1b5dPzHPluQCrcA6RJUW%2Bk6Jr1XrBtD0JmDtVhGrxKRLtSEJG0Rd%2BrQGCin%2BYNtOX6mLYPyxbvyLc%2FL9Az9ABjH4mLOswSj7hPrcV%2BTihI1bQS0%2FhH1dKvdNoZMZ1ftDwgIMDk8DJnYgUIX4IN0EoHatmJKNuftPx0EJEVSjYe7U3OMDfViOQhM6OWw3YjjZeSbeAMooZqctqC11IFFxvXN0oJcCstV5QNVAhqZFFkHA8CSnd%2F9o7RMr1PgkI3B%2BYOrymvFCXJL4n2UV%2Fa0oi8%2BtmXDqY6MSXLcieHFv8Uk61cZ5WqoN9VgGYXcKBw089hC38dZLLgXddfo3Cz9%2FKjbyhAH0%2Bf1QLCrXx8J1hS1qfgY%2FmwNTAcO%2B0ri5kuDhKn5Of7Xv0Nd60nAVMWNdQmKeqA8QZNQ44%2FOE2Bnz4T2RuZppCHFuANBSmc5dwOo%2FvfriDkmbYHkB0dt%2BNQXiWcqdjYARqDop8Ny%2BH9QoOr8B00dDqEz307HX9ilS7n40%2BE%2F4Y6I%2FGqbwXhGCPmh5wYnZJtn65uY5WjVJK%2FFFEdKKxTrlb5PxNxAALONJ8NTGy1QvXN23cIpdfDLI818gr3wdd8IIYruMi7sp2AusFuOJYv5It9awAl72JWPQSVawclWSsNWEHKMMW5tr4GOqUBlEA%2FeOfZG5LPYm0ngZ9%2Fq1ym2kD6U9kwYjK%2FM6zseFnTQ6ub%2BMSaP3KWzeegJl9G2am%2FaHHZmH9%2FSMJY5r6AFEOZZWT08dCV9b7W3M2QbklXE%2F71hTF3HxlEd9zRZA5Y8%2FHE5pJ7UhJRpFU%2Bfrco584t5n7nZYk0JKRL6IsQpr09vsftGfN%2Fc1N8AORhy7WedZ8w1iY%2Fj1%2Ft%2FerVw030Fke%2F6UBN&X-Amz-Signature=33de97a874edbd93b559685574079ce29776713ca40bf6b602ae6f7b857f65ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
