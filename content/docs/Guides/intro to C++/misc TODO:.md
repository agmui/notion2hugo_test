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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH72OF3Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTKbMDDOzDknpx4idlolBvRYsJc0Vsu30NMcC9KsQSQIgDRgNibB9YFWzBqs%2BL3rEquVWscAe8jDbsZUgYydlJ7cqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh96EolYRZ5UDCyICrcAwbVkub0ZbeqGdFaiuZYXm19BWRmsVFolxnHRodM1cm7rt98e71oJgBRhDEyP27KozswE1RNqpAP%2BckvPeL8yEJlRXftUXGIsV%2BYXLkounld6Pl3kHQ5XEdxt7to%2BWPrvOpKNtS0oaB8PxGxFPAASKZI153%2F2OMP3L8vYIq0FPIED2OuwN6foQCj1ou3ekQtYZUbA%2BO8g44Qh%2F9TC63%2FadnJ%2BvZagXAxfL0ilrmy7E9qqQZ5%2FrSyq8as2t6A5pSbIkUmPEZy6T3gVFynNADrFkYosZ7VHTrMErhITS3N2raDRpZgWSm5wCQ50GdHTdv5SJDRKEpYWHXawRk2BRVAzKf1ebedy7gBzca4S4rMr7%2FmmdLgnT596KnCNInJHyCheJbnQTcMMxdu62NJD%2BPCOBoavYbushxaeoc%2BJDxOtKMWW83tOkc6Du0nkGEc2loz%2FD%2Bzd1quy6Q1gnT5PFsHitvDVe2TSWglhGj%2BTBhHGtyk81cBiUpyCk56eKB0nyVzsNINB9mBlLUnP%2Fm4%2FCuLHiWJKdS06UdL940xMB36AmrQoGT0P1cisSuOP%2BHhwRH%2Fq0ew7TEkP8Mhy3sBKhh%2B%2FOjoO0brx8NusNzgsIiV6h7q2B9a%2BFzX465XR6x0MLHH5b0GOqUBzhE2q%2F7B5v78O5xU9u8wtQL%2BqT3ZLBONIMMVxg%2FaYbnMhPNfnh6i54Rnd2e2UA%2B7U2A%2B2qLsBLcWwo6uRGBaHaE01DUpo3ahwuRXYtuSfohT4Mlhgl2yH6U23L%2FHSDXQdiWr0u0eax%2FujZUUXftVl4f8oGr%2F0obnadcjFRZeYscUpZdadv6AKdH5vabYVP3jgKCf35v9Vg4XObwdmGfDnw56%2FdxC&X-Amz-Signature=8b936c31d0ac98e61c51485c397694e65d2493e33fd7c5107ca11797c47deaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH72OF3Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTKbMDDOzDknpx4idlolBvRYsJc0Vsu30NMcC9KsQSQIgDRgNibB9YFWzBqs%2BL3rEquVWscAe8jDbsZUgYydlJ7cqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh96EolYRZ5UDCyICrcAwbVkub0ZbeqGdFaiuZYXm19BWRmsVFolxnHRodM1cm7rt98e71oJgBRhDEyP27KozswE1RNqpAP%2BckvPeL8yEJlRXftUXGIsV%2BYXLkounld6Pl3kHQ5XEdxt7to%2BWPrvOpKNtS0oaB8PxGxFPAASKZI153%2F2OMP3L8vYIq0FPIED2OuwN6foQCj1ou3ekQtYZUbA%2BO8g44Qh%2F9TC63%2FadnJ%2BvZagXAxfL0ilrmy7E9qqQZ5%2FrSyq8as2t6A5pSbIkUmPEZy6T3gVFynNADrFkYosZ7VHTrMErhITS3N2raDRpZgWSm5wCQ50GdHTdv5SJDRKEpYWHXawRk2BRVAzKf1ebedy7gBzca4S4rMr7%2FmmdLgnT596KnCNInJHyCheJbnQTcMMxdu62NJD%2BPCOBoavYbushxaeoc%2BJDxOtKMWW83tOkc6Du0nkGEc2loz%2FD%2Bzd1quy6Q1gnT5PFsHitvDVe2TSWglhGj%2BTBhHGtyk81cBiUpyCk56eKB0nyVzsNINB9mBlLUnP%2Fm4%2FCuLHiWJKdS06UdL940xMB36AmrQoGT0P1cisSuOP%2BHhwRH%2Fq0ew7TEkP8Mhy3sBKhh%2B%2FOjoO0brx8NusNzgsIiV6h7q2B9a%2BFzX465XR6x0MLHH5b0GOqUBzhE2q%2F7B5v78O5xU9u8wtQL%2BqT3ZLBONIMMVxg%2FaYbnMhPNfnh6i54Rnd2e2UA%2B7U2A%2B2qLsBLcWwo6uRGBaHaE01DUpo3ahwuRXYtuSfohT4Mlhgl2yH6U23L%2FHSDXQdiWr0u0eax%2FujZUUXftVl4f8oGr%2F0obnadcjFRZeYscUpZdadv6AKdH5vabYVP3jgKCf35v9Vg4XObwdmGfDnw56%2FdxC&X-Amz-Signature=8cf7f35018f74196c730f79b7ebaaea43c5656255f79cb75ae51c27d42a48714&X-Amz-SignedHeaders=host&x-id=GetObject)

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
