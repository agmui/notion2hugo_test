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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLHSRXQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRT39gOuIpYa3xbkH8ziIPQy8XBs9MjyPUsPo2fdVOSAIhALA0J%2FdJwv6%2FCipfi%2Fu6ISX%2BsgvivCCGKMuBPn0duXbwKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fgLQuSSHKuk7dLoq3AMLD2DSPmUmN1vDyluKRVtymto9zUpBD5xxBJ7Dq86cOUB7mCkI2wP3EmraCk7To2IUGnC07LGRyZfIcsg85SPhdJUu6351vO0X7P3Hpop2QRD%2B898vcBcy2YvsekeX%2BZmQnpveD2hfdNaFWXTEYa%2FrTr0LHwBDgPvOTm9jZajZAFdKG73SkslzF4TIyW7BbdUgOZ0LXi61ui2vl4K3IHBay%2BAGqA5u6oSKyrxBahc%2BJAJw268cI8gkspYnBGy1PdvJI%2BCBON%2F3aM0C%2Fnz9991MbHZA%2BBnMa0rQmImpZauz7gqG8i%2F6cd08kIeCJZNxrH80RUNzygf%2BxPbp90kUTtNIbgrh8xcMrS9V4tFZavbM7xOsP5bx428c9%2BxvvNREtNYfMzR8CTGdwUOyu1vIUY9y0OLua%2FvCtXW8u6jOybYW1T2y4eDPmUThvGcndEiBAqcK7tvhyazWd5z9opyvopmI%2FIElMgmE7alKSzeRqYKLQgJl3saaS1tWXcjHygtrTNT4aLX%2B8A%2F7xj0Giz%2BWnctDfzCUHO5WKe41ekuYQ51udd2peP6%2BjTyquW4ILBV6cyBqT9ZIvKTYBM6FGUmwks42Z4NYIAqqzc%2BVK9%2FB%2Ba6CMovdVkGcBbw4LE5NEzDjyK69BjqkAUNzJRC7GrNlnP2%2B%2F5VAz6op2Th57HVjqE77KyzykPk6MPD2mCRkGIT2FvpikRGiAPBxmtEOkIjQcyfOU5oW9D4gaYJVdgvAwsqs9hCf6YBJpjjUpCyHGDL%2B%2F%2B5GiK7L6pC3%2BDbqH1uxN2rWO2D%2B3VSKnPSFZyvN%2B%2FErhbeya7fLwydytim5ZPxzVwrJPaFWfd5X0hrWBLMP%2BypE70GGqVizv%2BLr&X-Amz-Signature=a7677b8c34d88d23f895e4cfab4530bd206f6bd1a693f4aefb796cfcf089a2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLHSRXQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRT39gOuIpYa3xbkH8ziIPQy8XBs9MjyPUsPo2fdVOSAIhALA0J%2FdJwv6%2FCipfi%2Fu6ISX%2BsgvivCCGKMuBPn0duXbwKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fgLQuSSHKuk7dLoq3AMLD2DSPmUmN1vDyluKRVtymto9zUpBD5xxBJ7Dq86cOUB7mCkI2wP3EmraCk7To2IUGnC07LGRyZfIcsg85SPhdJUu6351vO0X7P3Hpop2QRD%2B898vcBcy2YvsekeX%2BZmQnpveD2hfdNaFWXTEYa%2FrTr0LHwBDgPvOTm9jZajZAFdKG73SkslzF4TIyW7BbdUgOZ0LXi61ui2vl4K3IHBay%2BAGqA5u6oSKyrxBahc%2BJAJw268cI8gkspYnBGy1PdvJI%2BCBON%2F3aM0C%2Fnz9991MbHZA%2BBnMa0rQmImpZauz7gqG8i%2F6cd08kIeCJZNxrH80RUNzygf%2BxPbp90kUTtNIbgrh8xcMrS9V4tFZavbM7xOsP5bx428c9%2BxvvNREtNYfMzR8CTGdwUOyu1vIUY9y0OLua%2FvCtXW8u6jOybYW1T2y4eDPmUThvGcndEiBAqcK7tvhyazWd5z9opyvopmI%2FIElMgmE7alKSzeRqYKLQgJl3saaS1tWXcjHygtrTNT4aLX%2B8A%2F7xj0Giz%2BWnctDfzCUHO5WKe41ekuYQ51udd2peP6%2BjTyquW4ILBV6cyBqT9ZIvKTYBM6FGUmwks42Z4NYIAqqzc%2BVK9%2FB%2Ba6CMovdVkGcBbw4LE5NEzDjyK69BjqkAUNzJRC7GrNlnP2%2B%2F5VAz6op2Th57HVjqE77KyzykPk6MPD2mCRkGIT2FvpikRGiAPBxmtEOkIjQcyfOU5oW9D4gaYJVdgvAwsqs9hCf6YBJpjjUpCyHGDL%2B%2F%2B5GiK7L6pC3%2BDbqH1uxN2rWO2D%2B3VSKnPSFZyvN%2B%2FErhbeya7fLwydytim5ZPxzVwrJPaFWfd5X0hrWBLMP%2BypE70GGqVizv%2BLr&X-Amz-Signature=82bd7675bc8677664054b876ff6009918609985c9a6fb8717c4d3e7bcba58923&X-Amz-SignedHeaders=host&x-id=GetObject)

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
