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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXJY6NG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCZmfZw3NdRm8ENZJTYZI1k4eS5NDQSekMVRVdQzSXjGgIgAMYn1s%2BWthmrAlR6wn%2FnWuBKzyiwLUAMljh6VccJjUEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPtQgjAF9dRD6CY15yrcAxF2Y6gkQDTkiVPsFGHy96PK%2FPWjLyNQy6c2eXlKYjTqJtO8XlQ3C5RXjh0ibtegh7T1bzLX5k2o8S7Gkd6eH2XArnC5l%2F2ENnN6jx1ITEZUlaZ9OobyLX31j9PguEgsP2vHVcOkK%2Bq4korTITbn8Ldn9jl4022nwfGvmy0MzMSbo28CR6UuqCCDtCdHB0TO0bpFAkwnGGXAS68sAj6uaBPiIHiEgTnka5oYkyAv%2Bu%2B1owYZk4arHHBDd5crsgekXIK%2BHRujDhlCSEY%2BD11Cm9QHENz2%2BAu96oI%2FQ1Z1oLR3i2TocPmjKyhBRSKGR7Yx7MwE2rwojIxnIgmWjmgdLtoKo68oXlDlTK0e5G6i3cnSjvE7cTPBsgDe%2BxzWWiphOkgmoaiCI9tkSVtost2ocEjcu1lS9miPFT%2Bk%2Bsovuk%2FWM9%2BWWtx4Nq32nG99OfmTOC1qamwh8r75yHzgOdcySRDntswd%2BkCy8AymQ0zcYUVSE1JQx486SRDMNpq119opBZpcU53loNkXh8NPFiwnZKPFQeHVcVOtjhOYy1jbAWaSXyfKNX08b2uNyZPMmGv78cSrVGHH0dT4Hy4IjOE9JY6uF03bfKIMi%2FSs2G9E2mtEDi7n47ZEV5u4EIyJMOHenL8GOqUBMiYILBzuZRSIeGbVOaQd4rbpTbFF9i2LyzoOZaX%2BWwnbkdsPccb2KCUxbhUuAfTmqcdQzBOM8wHOehEcvUteTGdvhIlWbJbDEV37B8RQGx4G%2FzKmkkRJWPCHKIldy9jyPo4ucGSsChRNqkkLj23VFGobmNVB%2FtsbECv%2F2nYSngQMulUmRVZmdOo8ydNCjDuDei%2FiQecMHemA2wk4OHroEvWa4Wxk&X-Amz-Signature=1d7b381cb702c23c02bb7e4c4c7531e3368bcba4a7bff7849c3dce0948afddce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXJY6NG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCZmfZw3NdRm8ENZJTYZI1k4eS5NDQSekMVRVdQzSXjGgIgAMYn1s%2BWthmrAlR6wn%2FnWuBKzyiwLUAMljh6VccJjUEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPtQgjAF9dRD6CY15yrcAxF2Y6gkQDTkiVPsFGHy96PK%2FPWjLyNQy6c2eXlKYjTqJtO8XlQ3C5RXjh0ibtegh7T1bzLX5k2o8S7Gkd6eH2XArnC5l%2F2ENnN6jx1ITEZUlaZ9OobyLX31j9PguEgsP2vHVcOkK%2Bq4korTITbn8Ldn9jl4022nwfGvmy0MzMSbo28CR6UuqCCDtCdHB0TO0bpFAkwnGGXAS68sAj6uaBPiIHiEgTnka5oYkyAv%2Bu%2B1owYZk4arHHBDd5crsgekXIK%2BHRujDhlCSEY%2BD11Cm9QHENz2%2BAu96oI%2FQ1Z1oLR3i2TocPmjKyhBRSKGR7Yx7MwE2rwojIxnIgmWjmgdLtoKo68oXlDlTK0e5G6i3cnSjvE7cTPBsgDe%2BxzWWiphOkgmoaiCI9tkSVtost2ocEjcu1lS9miPFT%2Bk%2Bsovuk%2FWM9%2BWWtx4Nq32nG99OfmTOC1qamwh8r75yHzgOdcySRDntswd%2BkCy8AymQ0zcYUVSE1JQx486SRDMNpq119opBZpcU53loNkXh8NPFiwnZKPFQeHVcVOtjhOYy1jbAWaSXyfKNX08b2uNyZPMmGv78cSrVGHH0dT4Hy4IjOE9JY6uF03bfKIMi%2FSs2G9E2mtEDi7n47ZEV5u4EIyJMOHenL8GOqUBMiYILBzuZRSIeGbVOaQd4rbpTbFF9i2LyzoOZaX%2BWwnbkdsPccb2KCUxbhUuAfTmqcdQzBOM8wHOehEcvUteTGdvhIlWbJbDEV37B8RQGx4G%2FzKmkkRJWPCHKIldy9jyPo4ucGSsChRNqkkLj23VFGobmNVB%2FtsbECv%2F2nYSngQMulUmRVZmdOo8ydNCjDuDei%2FiQecMHemA2wk4OHroEvWa4Wxk&X-Amz-Signature=471d1cf5daed418dba09c64a3f48585960cdc0336e299fbe300df04fd7cba3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
