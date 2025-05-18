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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAE4FAS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvHoTjq2uc044bWLmZ14AiA63s5IJzKEDMGBGmAcbbKQIgGSM5%2B0DL7g8ykc65UQK5OKuG0n3ii6Ic%2B%2FPfrZcOWjMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDK6Z4oiQ1anHb%2BPZvSrcAx4FMqJhDfRfPK%2FOI%2Bdi0L094dnPvs%2BKlFY%2Bg52zNm59EDDIiqITpTV4w47wzIt8VvoZMydb4w9sXRckjxahL8h5ei1Unflo7QjySbayW6Hv6XVScPgli5LDRTOiniwVHOqZxF7gP1Z%2FGiHE9xmPnnzV5bC9t7DD9JavL2BpvUeFOO0o2KqmXnq2P3ktvsZcc07zukIrqgcDbOrX6SSl%2B1Or4NCoYNV4Pr6H0XdWgEVNp%2BVaoOldckvrCVnItl2DFToq3zqQQAB8AcLYZKk6xbuTI10ApLLkW9Ou%2FicJtIpNXzUW1YEAEiv31%2FVxohvbIGOml5XcEZfS0G%2BxqDyitOtNwPEeZb4TnZzDJUbrJ5wZZ8r6mBqAHCeEqfvIugjpBExYu95z%2FgwzDyMoelGTlLdGyQwJKYaTlxvZT0HBEOfN%2BCQreNYBfE23OeC8QXecfgxC3bHChSBWrejBt%2BluNM0Nktp6McqoXdcCrnp3EgXDcisHAoY3zfZ%2FDDyJR5qCYrb2MCXaTGYuF1WBLBAKB%2BONxXP7ONYS7CMnBo%2FGALXh8Xu1A7wAWEu4FYCnqaPcSvJGoQ8g0w%2FpGWBGaaEMYIpt8Ovbsgj1vERExoWFkRhqxppyuX8L4igTVB%2F5MK7epcEGOqUBcQ4GSoNmtGSCIrJFRtHbn68Eg4Ha1vmNrCm2E2XHt3sqoQ4TDny5NuD30lwqULEUokX%2FaWh0eNUbhwxcC763Q8Goe4mP7BlsmmuA3IDWq0eSfZfKBsGbym2IZ1WS%2BCDHhELUDBHCKaV2Lq8ub52bg4FpSdYh%2FnZN8NVLUct2QBOmH1Bnk1zW9nu%2Bn%2Bh4nqF%2FNWYmqlUok21n8zBNsJL5APO%2FWo%2BQ&X-Amz-Signature=53f1c3e65b780237478c1b43bab84292ceeb4e2eb2d7260d6d25b388e0f31153&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAE4FAS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvHoTjq2uc044bWLmZ14AiA63s5IJzKEDMGBGmAcbbKQIgGSM5%2B0DL7g8ykc65UQK5OKuG0n3ii6Ic%2B%2FPfrZcOWjMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDK6Z4oiQ1anHb%2BPZvSrcAx4FMqJhDfRfPK%2FOI%2Bdi0L094dnPvs%2BKlFY%2Bg52zNm59EDDIiqITpTV4w47wzIt8VvoZMydb4w9sXRckjxahL8h5ei1Unflo7QjySbayW6Hv6XVScPgli5LDRTOiniwVHOqZxF7gP1Z%2FGiHE9xmPnnzV5bC9t7DD9JavL2BpvUeFOO0o2KqmXnq2P3ktvsZcc07zukIrqgcDbOrX6SSl%2B1Or4NCoYNV4Pr6H0XdWgEVNp%2BVaoOldckvrCVnItl2DFToq3zqQQAB8AcLYZKk6xbuTI10ApLLkW9Ou%2FicJtIpNXzUW1YEAEiv31%2FVxohvbIGOml5XcEZfS0G%2BxqDyitOtNwPEeZb4TnZzDJUbrJ5wZZ8r6mBqAHCeEqfvIugjpBExYu95z%2FgwzDyMoelGTlLdGyQwJKYaTlxvZT0HBEOfN%2BCQreNYBfE23OeC8QXecfgxC3bHChSBWrejBt%2BluNM0Nktp6McqoXdcCrnp3EgXDcisHAoY3zfZ%2FDDyJR5qCYrb2MCXaTGYuF1WBLBAKB%2BONxXP7ONYS7CMnBo%2FGALXh8Xu1A7wAWEu4FYCnqaPcSvJGoQ8g0w%2FpGWBGaaEMYIpt8Ovbsgj1vERExoWFkRhqxppyuX8L4igTVB%2F5MK7epcEGOqUBcQ4GSoNmtGSCIrJFRtHbn68Eg4Ha1vmNrCm2E2XHt3sqoQ4TDny5NuD30lwqULEUokX%2FaWh0eNUbhwxcC763Q8Goe4mP7BlsmmuA3IDWq0eSfZfKBsGbym2IZ1WS%2BCDHhELUDBHCKaV2Lq8ub52bg4FpSdYh%2FnZN8NVLUct2QBOmH1Bnk1zW9nu%2Bn%2Bh4nqF%2FNWYmqlUok21n8zBNsJL5APO%2FWo%2BQ&X-Amz-Signature=e35763726161b802be1dc52efb8a9daffbe323e093fcd15c3da7a2fd4a16863f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
