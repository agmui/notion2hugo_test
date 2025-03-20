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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCA3HHA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAnxEIgNhYtag8oI8qchpOOtFr%2BdvmewJYPFJkOsg6jBAiAxDs%2BdXmCKcRDy51OwaMQuccY9DZKV5QJ2Y4mC2SHtJyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4A5AgReM5wyJBEUKtwD3J9gmWWzUBFnwHxqwdDf6IBvIsMDwdo%2Ff0XMwmjAgKHT6dT8vI1FY%2BBrRLsaZ%2BcOXrQLI8blQinb8ODRWVBLpaw2JpjndagbTvgPL697a2LS0bDgu2WAmhAtluX6JfDL1ztaefeKYGPQTOtpD4x379Dlf6O%2BuJIHdP1rjjoeOckw7Onm%2Bv0uY61lWXWC9MQQQ0JW3ZRcZCC8BxRWzTPndtUG4vYXmXWGCJwCDxCusGOzq8TO8XSzrtlvbZ6h%2Bx2SXoV38WTFroWWS5RmyLe9YllOqCDkqDsVCr2QLSrCd1K%2Bf%2Fw2qyOswtakyzWTHvVfL2v5pba3h0tk3bcJP88MRcD6PZUdhlIR8t5aGSnLvhEXmKIFhQPSJ1gRf7oiv8aokIbcIMbJSHQ9XHP3BKamNbbkZeaS%2BrLrr4cRE8dS%2F9F%2B8jAQjURMK1A5fDxDIXVjY%2FQi9e5%2FeuGTmF2VVEuYiN89cKcshJVpxY1X9xBAzzhS1bZBkpnemFPFAc3zH1y4tG5AgbBsRG%2BJedYunc99oeVSyw6dgZbecDS4Fqe8E7I%2B2zUKJSTA6vOXsdU%2FDjYbDOARxuQnpZI3uqCxL1HHkDVA67UddpbR%2B1yIeP3OI5%2Bynded2v0ioxo5eIwwuMfuvgY6pgGxhAYBVmUUOJd%2F%2BgpYQ2wXAGF7mDORnggpPiKlYZmw5JpgcZneQd3Z2FQW7EiznsHrjsMO8AjWe25bwaKryQN4mMntd6CuzsKRW1HoeicTtdhCRgkGiUfx8rrquAQIggq%2BoAXuQzPN5woQJ0gIogTarAdn0aD4W8zZ%2By6YerKvNILM68foIB9IGMGkbFsNmHWDC%2B0VPfXv44N0Ane4HHsUDpQM3nnA&X-Amz-Signature=220fd0d383010f5ebba98dc125e712aa4af99638bb6adc4eb8a62df9159e7e43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCA3HHA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAnxEIgNhYtag8oI8qchpOOtFr%2BdvmewJYPFJkOsg6jBAiAxDs%2BdXmCKcRDy51OwaMQuccY9DZKV5QJ2Y4mC2SHtJyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4A5AgReM5wyJBEUKtwD3J9gmWWzUBFnwHxqwdDf6IBvIsMDwdo%2Ff0XMwmjAgKHT6dT8vI1FY%2BBrRLsaZ%2BcOXrQLI8blQinb8ODRWVBLpaw2JpjndagbTvgPL697a2LS0bDgu2WAmhAtluX6JfDL1ztaefeKYGPQTOtpD4x379Dlf6O%2BuJIHdP1rjjoeOckw7Onm%2Bv0uY61lWXWC9MQQQ0JW3ZRcZCC8BxRWzTPndtUG4vYXmXWGCJwCDxCusGOzq8TO8XSzrtlvbZ6h%2Bx2SXoV38WTFroWWS5RmyLe9YllOqCDkqDsVCr2QLSrCd1K%2Bf%2Fw2qyOswtakyzWTHvVfL2v5pba3h0tk3bcJP88MRcD6PZUdhlIR8t5aGSnLvhEXmKIFhQPSJ1gRf7oiv8aokIbcIMbJSHQ9XHP3BKamNbbkZeaS%2BrLrr4cRE8dS%2F9F%2B8jAQjURMK1A5fDxDIXVjY%2FQi9e5%2FeuGTmF2VVEuYiN89cKcshJVpxY1X9xBAzzhS1bZBkpnemFPFAc3zH1y4tG5AgbBsRG%2BJedYunc99oeVSyw6dgZbecDS4Fqe8E7I%2B2zUKJSTA6vOXsdU%2FDjYbDOARxuQnpZI3uqCxL1HHkDVA67UddpbR%2B1yIeP3OI5%2Bynded2v0ioxo5eIwwuMfuvgY6pgGxhAYBVmUUOJd%2F%2BgpYQ2wXAGF7mDORnggpPiKlYZmw5JpgcZneQd3Z2FQW7EiznsHrjsMO8AjWe25bwaKryQN4mMntd6CuzsKRW1HoeicTtdhCRgkGiUfx8rrquAQIggq%2BoAXuQzPN5woQJ0gIogTarAdn0aD4W8zZ%2By6YerKvNILM68foIB9IGMGkbFsNmHWDC%2B0VPfXv44N0Ane4HHsUDpQM3nnA&X-Amz-Signature=8757cef1ed2648904e438e9da556e2e27b956e1fa2598f0487ca1b663b6148ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
