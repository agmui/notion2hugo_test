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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPVAMTX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDbpUb5ffddFjUbEqFx%2FDHzTOiXIdTnatb9svZ2r1GrkwIhAObZVULGXbyAB1GUD7CuO7YA%2BpfX%2F2SIFTu%2Btqv6I6AfKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRd91DpfD9SKtKtEcq3AMIq5a7xo5QKBysKfd83QLYE660mV%2BkRMtP3TeSRD7uhWzi8T2%2B8sBXQ7ZnCBoXueYRgzLBqZJKzdTy4MdTrxeP1Xs6UWRnmzwVvbSitP5xE2qJUM7KwRrCc4vJO91OqDeyhND5NcPEp%2FvyercgpRz2FeCAYKI1HIDsEl8T7Avf7nLSs2LKbIYo5eXLrFR3VPjoZ0Hkxvb5MlrfjFvVm6bB1HBjqwoUNx0X43jVFQDb5hpZ0r%2BqAi75%2BvQCdgXWERo7cXdBD4V1H2behjQbK26FHL9axvkRBjf9WBVuRUutyby%2BETqQDwZPGPszDxheH1OZ02WSXU6JuK2D%2Fkup%2FVb%2F7YoJi5LJxac0Om93F5DWUXvMteg2wqXFBfeLt03%2F%2Bej4e7L0Ldq72xgkirMOlakR7niiGmfjLNt4b%2FkWMTzdWfJ2XIoGdT2vgRCy8fz1iHrW%2FU4kADAX8L0Y0Lg5YDP5kW3ZCtKD0n2aEJFuoBHJUZ6DNFM1bRh35%2FyZKD4dZa2uWDrCmyuL7S3hrj3VOgWenKvWHbuNcDau8oe3qGNJSiZ86IGOF2fI%2BdfKZHrHBaJHebUX9PC6HCpGh0j8Nd0rt%2Bm78OMknl3jh%2BQ9VfAPlLfAhNVI0rwNF4XqOjCZ%2B9XEBjqkAacNkTcZeDT1Nh%2FJ4bbKg5Af71G3Zp7dFCYMaZj6H%2F0rjbImV5p6VhQHgb8IMSFt6oNaCxGyglTppODANlVJPPjmCNUy8RKeB1Q28Yk7tm3ilMuUMjBDrM0VwsXBCOKghx9gH3PwJ%2FSCAF8ygXVO2mL7tvfH4X9i1U19OrBgvyP110CKagb2V5xStKaY3ebMIqCoESI4lA3Oz4xFyobWvmahNfou&X-Amz-Signature=ce161a34180c71eb3e6d0c64a61111851b94020a33fbde38c217af33d2b3f703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPVAMTX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDbpUb5ffddFjUbEqFx%2FDHzTOiXIdTnatb9svZ2r1GrkwIhAObZVULGXbyAB1GUD7CuO7YA%2BpfX%2F2SIFTu%2Btqv6I6AfKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRd91DpfD9SKtKtEcq3AMIq5a7xo5QKBysKfd83QLYE660mV%2BkRMtP3TeSRD7uhWzi8T2%2B8sBXQ7ZnCBoXueYRgzLBqZJKzdTy4MdTrxeP1Xs6UWRnmzwVvbSitP5xE2qJUM7KwRrCc4vJO91OqDeyhND5NcPEp%2FvyercgpRz2FeCAYKI1HIDsEl8T7Avf7nLSs2LKbIYo5eXLrFR3VPjoZ0Hkxvb5MlrfjFvVm6bB1HBjqwoUNx0X43jVFQDb5hpZ0r%2BqAi75%2BvQCdgXWERo7cXdBD4V1H2behjQbK26FHL9axvkRBjf9WBVuRUutyby%2BETqQDwZPGPszDxheH1OZ02WSXU6JuK2D%2Fkup%2FVb%2F7YoJi5LJxac0Om93F5DWUXvMteg2wqXFBfeLt03%2F%2Bej4e7L0Ldq72xgkirMOlakR7niiGmfjLNt4b%2FkWMTzdWfJ2XIoGdT2vgRCy8fz1iHrW%2FU4kADAX8L0Y0Lg5YDP5kW3ZCtKD0n2aEJFuoBHJUZ6DNFM1bRh35%2FyZKD4dZa2uWDrCmyuL7S3hrj3VOgWenKvWHbuNcDau8oe3qGNJSiZ86IGOF2fI%2BdfKZHrHBaJHebUX9PC6HCpGh0j8Nd0rt%2Bm78OMknl3jh%2BQ9VfAPlLfAhNVI0rwNF4XqOjCZ%2B9XEBjqkAacNkTcZeDT1Nh%2FJ4bbKg5Af71G3Zp7dFCYMaZj6H%2F0rjbImV5p6VhQHgb8IMSFt6oNaCxGyglTppODANlVJPPjmCNUy8RKeB1Q28Yk7tm3ilMuUMjBDrM0VwsXBCOKghx9gH3PwJ%2FSCAF8ygXVO2mL7tvfH4X9i1U19OrBgvyP110CKagb2V5xStKaY3ebMIqCoESI4lA3Oz4xFyobWvmahNfou&X-Amz-Signature=19f0187a677bfad7ca096ef517642b6328188470968d88cf0d2df284b9220617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
