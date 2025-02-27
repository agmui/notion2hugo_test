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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VYIUPZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2Bou9BL5B%2FCsBS1QJRlIybU5I8yAX%2BGVUjXAd8YB%2B%2FvwIhANYIFea8MTgxZTMCvsKzqTGOvOliEDqfwc6juoIRlwLaKv8DCHIQABoMNjM3NDIzMTgzODA1IgxeaL7pHFMV5cXC0fAq3APboyCVDna2XbflZuk5WLkIG0VBy1envfJ9sHeoZChhwgSdi9%2FfryiFgu%2FW021V%2B4Y3qT8YUkHoO%2BeCIJz%2FiHp%2FUOE3qdJ54cGi1gUzV%2FxYbZAmDiggGOHezVl7acuoE%2BejwtZg7vZ95DhTFAxYt3xDmv6k11DUXkD324hkuwWQ%2BfW749HY1Peo7FylJOPrzDqYKmgUZD6WU2eP5mI8E5k99zW54J2udBh148NJzHYw6BxXJiAdRUDb4o%2BrRb5vDQCQ1f2LqZTbrdBO5M%2BW3QMi%2BV63hPLs7zmNbzExVp1sEGRfjrRGJFF2BycaUJ5NL3iFtRrqjMtZryFQ8zadREy7tcuwY0nECMc9aQm3wz3L%2BzMBjWhNUGXR%2Fl%2BPr%2Bc%2FwkNcXNR1KBuQpPqpfcM2Evf1TLaKncgP%2BP2eVuxb%2F9rQRN8PsOSf8S%2B%2Bdhr05mptgX8JKxTMYUVzVijx5i20n4CgUXzk8tO%2FYP21AIytHqourU7e1WPxE%2FHsKvGncMZOEL2sXlluUEwlVqvSV4Sqbiy9TXQwiF2%2FAZiO6z0zlSpePwSTmHhj%2BztLs%2FAwYlIoP9lZ5ikYDd3T0LhMZlv9bSYgMPrJWs7aJiktShoWQL6%2FUBGMKCwjE5pN%2B69BZjDW0YC%2BBjqkAbb5QUhqxKOvHL8Ar7wfmblOIdxRc6sMMs7Dm1%2F2rM6zpCtMK6BaMGQ567%2BksCGdMW8d%2Boaw5gDyz8CA2c6h1WaBPksMwZjvEukSiCjOG4EJvzV16wYKirYui34Gw2iG7aOHvqG2kiJ7MdgXTVpbWOsfXs8wWe3eEDAbZsQF68bPYzswbJ1GQP0q3s22reV8Zp5KYus8BVKO74QDPJw9bfdzTfql&X-Amz-Signature=af3165ca75dccf1de22a1cf5f7ca3c1002b58d8729a54388d4cafad957dcf209&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VYIUPZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD%2Bou9BL5B%2FCsBS1QJRlIybU5I8yAX%2BGVUjXAd8YB%2B%2FvwIhANYIFea8MTgxZTMCvsKzqTGOvOliEDqfwc6juoIRlwLaKv8DCHIQABoMNjM3NDIzMTgzODA1IgxeaL7pHFMV5cXC0fAq3APboyCVDna2XbflZuk5WLkIG0VBy1envfJ9sHeoZChhwgSdi9%2FfryiFgu%2FW021V%2B4Y3qT8YUkHoO%2BeCIJz%2FiHp%2FUOE3qdJ54cGi1gUzV%2FxYbZAmDiggGOHezVl7acuoE%2BejwtZg7vZ95DhTFAxYt3xDmv6k11DUXkD324hkuwWQ%2BfW749HY1Peo7FylJOPrzDqYKmgUZD6WU2eP5mI8E5k99zW54J2udBh148NJzHYw6BxXJiAdRUDb4o%2BrRb5vDQCQ1f2LqZTbrdBO5M%2BW3QMi%2BV63hPLs7zmNbzExVp1sEGRfjrRGJFF2BycaUJ5NL3iFtRrqjMtZryFQ8zadREy7tcuwY0nECMc9aQm3wz3L%2BzMBjWhNUGXR%2Fl%2BPr%2Bc%2FwkNcXNR1KBuQpPqpfcM2Evf1TLaKncgP%2BP2eVuxb%2F9rQRN8PsOSf8S%2B%2Bdhr05mptgX8JKxTMYUVzVijx5i20n4CgUXzk8tO%2FYP21AIytHqourU7e1WPxE%2FHsKvGncMZOEL2sXlluUEwlVqvSV4Sqbiy9TXQwiF2%2FAZiO6z0zlSpePwSTmHhj%2BztLs%2FAwYlIoP9lZ5ikYDd3T0LhMZlv9bSYgMPrJWs7aJiktShoWQL6%2FUBGMKCwjE5pN%2B69BZjDW0YC%2BBjqkAbb5QUhqxKOvHL8Ar7wfmblOIdxRc6sMMs7Dm1%2F2rM6zpCtMK6BaMGQ567%2BksCGdMW8d%2Boaw5gDyz8CA2c6h1WaBPksMwZjvEukSiCjOG4EJvzV16wYKirYui34Gw2iG7aOHvqG2kiJ7MdgXTVpbWOsfXs8wWe3eEDAbZsQF68bPYzswbJ1GQP0q3s22reV8Zp5KYus8BVKO74QDPJw9bfdzTfql&X-Amz-Signature=ed85458dfd0ff16916623389e60d8c4b4db86c732a7ca6e36462bcdd6a2f3b52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
