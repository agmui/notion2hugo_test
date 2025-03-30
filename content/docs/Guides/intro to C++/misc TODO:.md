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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DXNUCCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBFT%2Fg2IhtSbJlDeCnr1YUFTmDqP1hBx7OchlrR8hU4wAiBQg3%2BPXyvsUwsGnz3rN%2BkeIriAuofyT092H2%2FromeWjSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAK%2FU1n%2ByID%2FznkdHKtwDiKXuGQljbZws%2FxxgBdU8f4ySVgf3DmU1FJ2fWkDy7BheWX8DRxb%2BXlv6wRbgASz5LPIaanBzmFPTDxXZ8ZzgYpJ52WGpbsIyB51yNW288L6hBip%2FwYj%2FlvekHoT%2FyMiUt9oq6aFkdqSaOjyMFDpAwpFKYeHWprsnIi1SH6zmuF7qur0X2a2v2K297nu0WWkIJbMDdBp7qL%2FzwtIjn2yIT%2BypgRc4WDy0GIPbJwc4%2FiDhwt0yAP%2FcDfJLCvboAq7JFTOLky5sU2DT3kKw4cyOPqxMD0cBwJ%2B3CkyLzdoDdFx4IISg7rensx7WWkZOWkpRSwIPmQiRiThXTaV%2Fu4osXhhLlpW4OTGlpAHChDXCj%2BuRKDxo3EJ6pKeqKH8883%2B%2Bf%2B%2B%2BLUTefbdbfPRIqpOzUcAFKmmY1T6oleB637TUs3yjWEFzY6G7KmzntD6I0%2BuYhit7hPt56e%2FVq6vmw0vtFIylNlCXt5P%2Bb6pdU5Q6%2FUWEhijx2ZUXHJobsC6XIEmqWhEWYi6nkLLwu37nhWrXc6UlrNAYfDzRxpOSf%2Flw5Rz0g62RpHsQPhH0cnwRNSCn5s5RtR8oxRqvK5kC42i86%2FxfM5NcySvWkURZljnZOVeN2dxALHNDWvrY5DAwl9GivwY6pgEq2H%2Bcbo%2FjE8u8KFixey%2Byv7nwU%2FkxcKAM41f4OGlbXWzJW2%2FmHR7trEVXXxiRIWXBZQZhIgQgFyYVllksCebrshlwO%2BM7x7PQmpKYWI3EUJ90QIpwyArlFxMdQEg%2FqqmuenZGkufEcC39ggx%2BAhsef0MG%2BuBR92hgl5ZbHuuWVc%2BaC8MxE0wE8j430uW8nXX9Jb0SEkl5tZey%2BNveju38Ou%2FFRIYr&X-Amz-Signature=156454f38bf2c1e6a1f8333ac44ee97da175e8ab39d2c378c3c055d2720cf152&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DXNUCCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBFT%2Fg2IhtSbJlDeCnr1YUFTmDqP1hBx7OchlrR8hU4wAiBQg3%2BPXyvsUwsGnz3rN%2BkeIriAuofyT092H2%2FromeWjSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAK%2FU1n%2ByID%2FznkdHKtwDiKXuGQljbZws%2FxxgBdU8f4ySVgf3DmU1FJ2fWkDy7BheWX8DRxb%2BXlv6wRbgASz5LPIaanBzmFPTDxXZ8ZzgYpJ52WGpbsIyB51yNW288L6hBip%2FwYj%2FlvekHoT%2FyMiUt9oq6aFkdqSaOjyMFDpAwpFKYeHWprsnIi1SH6zmuF7qur0X2a2v2K297nu0WWkIJbMDdBp7qL%2FzwtIjn2yIT%2BypgRc4WDy0GIPbJwc4%2FiDhwt0yAP%2FcDfJLCvboAq7JFTOLky5sU2DT3kKw4cyOPqxMD0cBwJ%2B3CkyLzdoDdFx4IISg7rensx7WWkZOWkpRSwIPmQiRiThXTaV%2Fu4osXhhLlpW4OTGlpAHChDXCj%2BuRKDxo3EJ6pKeqKH8883%2B%2Bf%2B%2B%2BLUTefbdbfPRIqpOzUcAFKmmY1T6oleB637TUs3yjWEFzY6G7KmzntD6I0%2BuYhit7hPt56e%2FVq6vmw0vtFIylNlCXt5P%2Bb6pdU5Q6%2FUWEhijx2ZUXHJobsC6XIEmqWhEWYi6nkLLwu37nhWrXc6UlrNAYfDzRxpOSf%2Flw5Rz0g62RpHsQPhH0cnwRNSCn5s5RtR8oxRqvK5kC42i86%2FxfM5NcySvWkURZljnZOVeN2dxALHNDWvrY5DAwl9GivwY6pgEq2H%2Bcbo%2FjE8u8KFixey%2Byv7nwU%2FkxcKAM41f4OGlbXWzJW2%2FmHR7trEVXXxiRIWXBZQZhIgQgFyYVllksCebrshlwO%2BM7x7PQmpKYWI3EUJ90QIpwyArlFxMdQEg%2FqqmuenZGkufEcC39ggx%2BAhsef0MG%2BuBR92hgl5ZbHuuWVc%2BaC8MxE0wE8j430uW8nXX9Jb0SEkl5tZey%2BNveju38Ou%2FFRIYr&X-Amz-Signature=66db8006ef9e1362a7992228b5bf051a2493330e4e0f9a37da70877334d736ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
