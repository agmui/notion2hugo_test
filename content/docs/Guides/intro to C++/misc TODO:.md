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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7S4AQK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9Kz%2FYeC6%2B8XDUGTehR8Z9HUKaPXVqpnKMoAn3cKa7wIhALpKfo%2BJXXAKpry2slXdVyEgRmCR1YZ1LANauaIxx2tZKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy36PInaqiAm9f%2Fvgcq3ANVFFbc996DqC02%2FbrbjK0i%2FkckmoqeOmpKuJQ%2BVs%2BcT4CIwFfUxy0QAFtt4fS1Ld5VuZtMNay0bTo%2FpItVSOg72CbOuXpeCLD2HCNRf%2BLZimv4LpO%2FTRcW7eKL7fcidRV7j%2FhZaWOzZ1NfHtDcFKWiGrCBo5%2FKedIy4WlWB9uIWVc7iW3fwMH7ckgCyCCTPOD3R5l6pRRp5bOQdxYtbo%2F2WFO7rMf2bgOZHa6x5cdl9GP1dY6ihKtSiao7r%2F%2FubQU2lb01B%2Bu4HG%2F6QX6r9pbYmeSQuJbU2qDmFZwqepuNTs8vgZNuDYSK0TFXS9bjfYhfFljtkCMdIGfuv7CwnntwKlF0oPwSjTWPPkDNNwa57T%2F%2F1dasqHzwF03Yg%2F042GtYk%2FmvFials8Rqbk%2BOkHjbh59jC2Wo6cuDifYL4bbMH48MNa3YZgZCci53dmo5WILOrKFOHXdpB3438EC%2F29kTMKdMt4YiadbP2ssIHmzZB4CtovX0oZNRYc9oEd2fW6Mw1JeE%2BHAinRIvECWiJ8ZW6iEQZYBggTCevOBBFo8%2BwDwNQ9eau9ne5x%2Fb7CvRBRKF8JcUF9DhFeGq3AY3MJyxPJQ657z8O4wBomTbaxDQy1UUGTFN2DzXAwsgcDD4s9DCBjqkAcd%2FjgRRndoUOPBUx6JMvzD2LnqRWfV9YWfXURozLCkmJzbLyTHAwVnV%2FyS6eDAR3KwABl90U2nmubJLDftSAokXXzmp68zBXpBacebLd8kyCp5C62FWziv0p7xQVoN3WCPM4Yg5BHWhIEub4Na%2FSbgs7yGqStQPfQUBkquDAkt4EC96qUswyITVdp%2Fhd55cJmHhwIsic9KUr1ZX04mYv5gcX8Cx&X-Amz-Signature=b24a73ed28a25abc03061269c9f63a9c2c6dc6e86b4fb81a50bf0e5a472a1b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7S4AQK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9Kz%2FYeC6%2B8XDUGTehR8Z9HUKaPXVqpnKMoAn3cKa7wIhALpKfo%2BJXXAKpry2slXdVyEgRmCR1YZ1LANauaIxx2tZKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy36PInaqiAm9f%2Fvgcq3ANVFFbc996DqC02%2FbrbjK0i%2FkckmoqeOmpKuJQ%2BVs%2BcT4CIwFfUxy0QAFtt4fS1Ld5VuZtMNay0bTo%2FpItVSOg72CbOuXpeCLD2HCNRf%2BLZimv4LpO%2FTRcW7eKL7fcidRV7j%2FhZaWOzZ1NfHtDcFKWiGrCBo5%2FKedIy4WlWB9uIWVc7iW3fwMH7ckgCyCCTPOD3R5l6pRRp5bOQdxYtbo%2F2WFO7rMf2bgOZHa6x5cdl9GP1dY6ihKtSiao7r%2F%2FubQU2lb01B%2Bu4HG%2F6QX6r9pbYmeSQuJbU2qDmFZwqepuNTs8vgZNuDYSK0TFXS9bjfYhfFljtkCMdIGfuv7CwnntwKlF0oPwSjTWPPkDNNwa57T%2F%2F1dasqHzwF03Yg%2F042GtYk%2FmvFials8Rqbk%2BOkHjbh59jC2Wo6cuDifYL4bbMH48MNa3YZgZCci53dmo5WILOrKFOHXdpB3438EC%2F29kTMKdMt4YiadbP2ssIHmzZB4CtovX0oZNRYc9oEd2fW6Mw1JeE%2BHAinRIvECWiJ8ZW6iEQZYBggTCevOBBFo8%2BwDwNQ9eau9ne5x%2Fb7CvRBRKF8JcUF9DhFeGq3AY3MJyxPJQ657z8O4wBomTbaxDQy1UUGTFN2DzXAwsgcDD4s9DCBjqkAcd%2FjgRRndoUOPBUx6JMvzD2LnqRWfV9YWfXURozLCkmJzbLyTHAwVnV%2FyS6eDAR3KwABl90U2nmubJLDftSAokXXzmp68zBXpBacebLd8kyCp5C62FWziv0p7xQVoN3WCPM4Yg5BHWhIEub4Na%2FSbgs7yGqStQPfQUBkquDAkt4EC96qUswyITVdp%2Fhd55cJmHhwIsic9KUr1ZX04mYv5gcX8Cx&X-Amz-Signature=819d4fc0bd8d3999e64141e8c450422fe227394cb2548ef25f1bbabc44144cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
