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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3T4AQI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHQM7331MO%2BfEZTfremnqXCAgpQIK0KLwGB%2BtfMGe4uAiBusSYIYGehgSfI206UWQdhUJU8uh%2BUL9vspQCqBpw1fSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXKqnoB9WzAR2yM0KtwDYCZmMQu5IzlBmQ4m%2Ber6j2siIc%2Bmw8LTU4KwfUG458HozsTtyTiG%2BSeRc8QR5EZwk3dX18OfapE3SXJXFpjmEZowJIfdEGfh7yDzkzLV%2BjU2nQnJ6zIGCgZaIj5K%2FaS7hw3cF2WiQOZss%2BibOYTfXe7%2B6vqMGhpIgIs0P2xi%2FJVk3ugho6mM%2Fe5j6w6RACi3kKQjPxa1W6ATjiZCkpX0kd4%2FCfALNyVix%2FYt8MQaWLS1qvZxxswF7FhXdSQeEEAjGp560e1AXUNZZBAG2OB9UfxG5MgLbwFyg7dN9W1YGLiutaodF0H2DksjgXSv1cCQFYs9pSifOetidOmCLm5dmG%2FIp%2FuFORRnlzVpyduK1lcr7%2BKad7tBEOvAv5CWsEU3IJPxOvQZi1%2B2uJ0pR3q3LrtT5GY0lX8vLDKPzu%2FVAZcg2eYzLFYrAFJWIIU1uy3QKrmzR1jtOFPGdm6iR3nEoOg1xrHr8iLEjGEDl8GyJClCtVEfmMHY0yFRF00zPe0Vs54w2Fvv6OTZX%2B7yCOg2vTBzxZWj45NdNdMDla%2F4NpUwPTT3XVm7cXTL01YRyF9Q7r7C9%2FlOZvWYEeG9BtWCggobCkTT92p%2BJKhFD9WYK%2Bd04a6yoMpcnpjvPxAwo93zwwY6pgGpV5FZO8WfSgEA%2BBL85XXmy8WsnEJ%2BCVCMpoRxO0MrR9EB9%2BLrYBnAo9hQ78YuPgApvJLWyxw5RVSOk9XG8yWMmFFNAGCarqGLZ4nLn0GSInu34IB%2F43ionr6Bnty0zzHsp8udGCaeJhg3uRNtCxSH40SSLkjcF6mOtRS1DGXH5A0pYNxLe6sLpwur01v3ByyJXi6zf%2FKlrStj037Ob1BZwHz3Iyt6&X-Amz-Signature=db04a0fd3977715b6388cdf4c77e7b9c5b3dcc97032d0e513d08ce57fed96267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3T4AQI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHQM7331MO%2BfEZTfremnqXCAgpQIK0KLwGB%2BtfMGe4uAiBusSYIYGehgSfI206UWQdhUJU8uh%2BUL9vspQCqBpw1fSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXKqnoB9WzAR2yM0KtwDYCZmMQu5IzlBmQ4m%2Ber6j2siIc%2Bmw8LTU4KwfUG458HozsTtyTiG%2BSeRc8QR5EZwk3dX18OfapE3SXJXFpjmEZowJIfdEGfh7yDzkzLV%2BjU2nQnJ6zIGCgZaIj5K%2FaS7hw3cF2WiQOZss%2BibOYTfXe7%2B6vqMGhpIgIs0P2xi%2FJVk3ugho6mM%2Fe5j6w6RACi3kKQjPxa1W6ATjiZCkpX0kd4%2FCfALNyVix%2FYt8MQaWLS1qvZxxswF7FhXdSQeEEAjGp560e1AXUNZZBAG2OB9UfxG5MgLbwFyg7dN9W1YGLiutaodF0H2DksjgXSv1cCQFYs9pSifOetidOmCLm5dmG%2FIp%2FuFORRnlzVpyduK1lcr7%2BKad7tBEOvAv5CWsEU3IJPxOvQZi1%2B2uJ0pR3q3LrtT5GY0lX8vLDKPzu%2FVAZcg2eYzLFYrAFJWIIU1uy3QKrmzR1jtOFPGdm6iR3nEoOg1xrHr8iLEjGEDl8GyJClCtVEfmMHY0yFRF00zPe0Vs54w2Fvv6OTZX%2B7yCOg2vTBzxZWj45NdNdMDla%2F4NpUwPTT3XVm7cXTL01YRyF9Q7r7C9%2FlOZvWYEeG9BtWCggobCkTT92p%2BJKhFD9WYK%2Bd04a6yoMpcnpjvPxAwo93zwwY6pgGpV5FZO8WfSgEA%2BBL85XXmy8WsnEJ%2BCVCMpoRxO0MrR9EB9%2BLrYBnAo9hQ78YuPgApvJLWyxw5RVSOk9XG8yWMmFFNAGCarqGLZ4nLn0GSInu34IB%2F43ionr6Bnty0zzHsp8udGCaeJhg3uRNtCxSH40SSLkjcF6mOtRS1DGXH5A0pYNxLe6sLpwur01v3ByyJXi6zf%2FKlrStj037Ob1BZwHz3Iyt6&X-Amz-Signature=3e6b092759c8c3be777e8ed41b25e7f82eb718373aa066a58088d0c7f88bc3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
