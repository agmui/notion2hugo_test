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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7RO6ZA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BN%2BdYGfzPoIhIRFJ0TTKg1DVLkiUO5t1KN%2BH9y0%2BogIgF%2F00Mw0PufT4PUB6vnrUYNUft0ksNMdAcaF1vOyuyfQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFZzMxtmDpq5krfEUSrcA87CuFI%2B4iAOavlk07A8rjG3lGPo1bf2DZl2yUztACGPe52Phd3A6UnFWeq%2Flz0WXdx%2F%2BAHNf%2FtbFnxU1NP%2BYn10K2BBzI8uJvk4F9HMAnU5O8QYbAvF0Cd4wDvY2Z6YPQ0W6HGxDk2LOV1TedmXCM9EbwVUr2mE%2BRdmoJHIZV6ZPimz5XdAks%2BxHW91hN63Crtd6hNjMqOM34iFt4XITsugsOqaFtjclD4DcclPfrIFOgMZkkwyllL3NMBxbQy6QNqBgv2btUNYn4dftZTpyfuMNKIrwvAWXYOv3ycatXvDhCrDcSimm%2BD8uYDpEMj4uar8FETXZLCMBEnI95WBPw2YMSNdBqDXMI4%2BpC0e7aZR1LGyl7HWtmF2GYKK2QKIuz4Ty4yVjZ7pKTZLwp0R%2FA3yHI1CL0tEvbfmZ4BVaLHQikPx%2FCWAkkkiJRcHdr4W%2FducYlZFQ7P0AjwTkdXuMCVZgomdg0Nb3vj%2F04SGIVeYjRsAEzwzz5xTyw8khVzZsEtDV6%2FV%2F998gdRwRrCaouz0xZBU6XH63eIrSnilFQumx0YSFPaKiw%2F07YS25cWILNozNUf1g93PFkcDlJW8thbdqALWoxNrrDM7KVwoPMh5FIQGSAYEP80qw11JMK6x3cEGOqUBGrhi4iAb9sFABB7fEj9kF%2B24rB7p8g%2F%2FDeDYrSo3vmb1mxdl6TeO3xYGjmjfd0V0nim%2F91thq5lZCU%2FrAWNQOE8X7qbWaXbCbkDF1sFgHK1XEQ9W58fyi68cBgfkMZkkyKAixNkN95RSso3BOobpfm6HqP%2BJr7%2FKDTzMNmnOzjzxNEXGl2PiXcLbStZsEX%2FSWxR8tiP%2FCQJEsSl30cYqv0Y4LUrD&X-Amz-Signature=c98b1bcd9bbd8b24dbfea9a654febb4a221e7e3e3cc6c739529b3fdf2bb27560&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7RO6ZA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BN%2BdYGfzPoIhIRFJ0TTKg1DVLkiUO5t1KN%2BH9y0%2BogIgF%2F00Mw0PufT4PUB6vnrUYNUft0ksNMdAcaF1vOyuyfQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFZzMxtmDpq5krfEUSrcA87CuFI%2B4iAOavlk07A8rjG3lGPo1bf2DZl2yUztACGPe52Phd3A6UnFWeq%2Flz0WXdx%2F%2BAHNf%2FtbFnxU1NP%2BYn10K2BBzI8uJvk4F9HMAnU5O8QYbAvF0Cd4wDvY2Z6YPQ0W6HGxDk2LOV1TedmXCM9EbwVUr2mE%2BRdmoJHIZV6ZPimz5XdAks%2BxHW91hN63Crtd6hNjMqOM34iFt4XITsugsOqaFtjclD4DcclPfrIFOgMZkkwyllL3NMBxbQy6QNqBgv2btUNYn4dftZTpyfuMNKIrwvAWXYOv3ycatXvDhCrDcSimm%2BD8uYDpEMj4uar8FETXZLCMBEnI95WBPw2YMSNdBqDXMI4%2BpC0e7aZR1LGyl7HWtmF2GYKK2QKIuz4Ty4yVjZ7pKTZLwp0R%2FA3yHI1CL0tEvbfmZ4BVaLHQikPx%2FCWAkkkiJRcHdr4W%2FducYlZFQ7P0AjwTkdXuMCVZgomdg0Nb3vj%2F04SGIVeYjRsAEzwzz5xTyw8khVzZsEtDV6%2FV%2F998gdRwRrCaouz0xZBU6XH63eIrSnilFQumx0YSFPaKiw%2F07YS25cWILNozNUf1g93PFkcDlJW8thbdqALWoxNrrDM7KVwoPMh5FIQGSAYEP80qw11JMK6x3cEGOqUBGrhi4iAb9sFABB7fEj9kF%2B24rB7p8g%2F%2FDeDYrSo3vmb1mxdl6TeO3xYGjmjfd0V0nim%2F91thq5lZCU%2FrAWNQOE8X7qbWaXbCbkDF1sFgHK1XEQ9W58fyi68cBgfkMZkkyKAixNkN95RSso3BOobpfm6HqP%2BJr7%2FKDTzMNmnOzjzxNEXGl2PiXcLbStZsEX%2FSWxR8tiP%2FCQJEsSl30cYqv0Y4LUrD&X-Amz-Signature=e1b7ab05166ed2b3079727b27125a355ba63e3c0aa70add315c17dc4b285d3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
