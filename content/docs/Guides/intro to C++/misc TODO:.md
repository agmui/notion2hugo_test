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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BBAGF2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAGvdC%2BztUGmHghMvnSYeWm3J%2FXoC337YoZP%2FS8aPoS%2FAiAFJR%2FQCLbCN1CXDhAjdRnZcBs%2B9tLUgNrKQyotSnqg7yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8PUVJuEFsivYFiFrKtwDtWIvoONtg4BFYU885EdLMGkTiz%2FPlSz4xyA3ekkPAKYPEwgIk7jSXU3PI58temvHtmRdwdEToD39An%2BZp81d3W8Ejn81vp7va23IJRKf5x8qD%2FhDA4Z88VXBjJAgQzAs97qnU0gWYbkJLeHPvAUOy8MAgPPmaaOMxLzd794SP8LPO6%2Fanmo1SO3v%2FVvXIx1fcq8DTB2k1N%2Bu60TcU%2F%2BUrHPAbVjAa5Va1C3OV1MtfwbnxtQ8Ihb3qzE0nDbpXqwfL4wEiG6EUMItMiTOFDWheFMPSBG5c2lClQhEW6O0HoQCnenjVA7XfYwtHn9wm21jQ0RylnGDqmuvvrgyUpAOSfD10O9g0j62PQv1Qyym6vu2rxcMQdJbmm%2Fgm0UVhE62G7WabClHKVVxrzhfAJU9qwXWLttFiQKbFj%2Bd29TMkuLT1dIBsaXgLVJ4HDBKYA%2Babc9jAuI9WUi7eyjqS4qLY%2Btn3M3LwyqAwEL5SX97qPerylXjjp75T%2BOX5igV0zc%2Byy%2BQvu7liHfC%2BkOUP%2BQ2PaKX8%2BxA%2FM9x2JpcUCZVLCsH1%2FFQzT8IwpsstatntOu9mv%2FffyG8bq187kQSXcsrPAhD929kwKs1BlVU6HYkowKrebex0BFUD6Y2Eiww%2BdDgwwY6pgEQd1M3Wvx1YNaEULEl94dR5GTvkFb3vpWkbiO9UCH%2BVc1T6Ur1eV%2BtHvl0%2Bs%2BkZ2JTYcn8xD3xX0C%2FoSuJAJ7q91xSv1jM7LXMbX4qJEa0qEAfgnSCENVDpqmOCgdJC0B6fHt3NvPPTyI9f87ZaUhf6mir75GhPqMoYAPbdPesfD1QhQRJZQshDN1LzmPgOI3c00iwD2zDSQSs3S%2F8ZBOg0veu1PWU&X-Amz-Signature=f0e908047e1bbdf21136553f190818e911a50e94985034b47bcee22f4f42990d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BBAGF2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAGvdC%2BztUGmHghMvnSYeWm3J%2FXoC337YoZP%2FS8aPoS%2FAiAFJR%2FQCLbCN1CXDhAjdRnZcBs%2B9tLUgNrKQyotSnqg7yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8PUVJuEFsivYFiFrKtwDtWIvoONtg4BFYU885EdLMGkTiz%2FPlSz4xyA3ekkPAKYPEwgIk7jSXU3PI58temvHtmRdwdEToD39An%2BZp81d3W8Ejn81vp7va23IJRKf5x8qD%2FhDA4Z88VXBjJAgQzAs97qnU0gWYbkJLeHPvAUOy8MAgPPmaaOMxLzd794SP8LPO6%2Fanmo1SO3v%2FVvXIx1fcq8DTB2k1N%2Bu60TcU%2F%2BUrHPAbVjAa5Va1C3OV1MtfwbnxtQ8Ihb3qzE0nDbpXqwfL4wEiG6EUMItMiTOFDWheFMPSBG5c2lClQhEW6O0HoQCnenjVA7XfYwtHn9wm21jQ0RylnGDqmuvvrgyUpAOSfD10O9g0j62PQv1Qyym6vu2rxcMQdJbmm%2Fgm0UVhE62G7WabClHKVVxrzhfAJU9qwXWLttFiQKbFj%2Bd29TMkuLT1dIBsaXgLVJ4HDBKYA%2Babc9jAuI9WUi7eyjqS4qLY%2Btn3M3LwyqAwEL5SX97qPerylXjjp75T%2BOX5igV0zc%2Byy%2BQvu7liHfC%2BkOUP%2BQ2PaKX8%2BxA%2FM9x2JpcUCZVLCsH1%2FFQzT8IwpsstatntOu9mv%2FffyG8bq187kQSXcsrPAhD929kwKs1BlVU6HYkowKrebex0BFUD6Y2Eiww%2BdDgwwY6pgEQd1M3Wvx1YNaEULEl94dR5GTvkFb3vpWkbiO9UCH%2BVc1T6Ur1eV%2BtHvl0%2Bs%2BkZ2JTYcn8xD3xX0C%2FoSuJAJ7q91xSv1jM7LXMbX4qJEa0qEAfgnSCENVDpqmOCgdJC0B6fHt3NvPPTyI9f87ZaUhf6mir75GhPqMoYAPbdPesfD1QhQRJZQshDN1LzmPgOI3c00iwD2zDSQSs3S%2F8ZBOg0veu1PWU&X-Amz-Signature=517c9264e5da68a5cb00216e400b98eb5516498716d0f7230ab7a6670a3441b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
