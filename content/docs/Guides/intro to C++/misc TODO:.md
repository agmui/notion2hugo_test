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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E24CNV%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH436gr3M8w%2BcsTh7wjVIXgpxs9mJE%2B12HqpaHswiL9NAiEA99tSePj6cbP0TX8ajHq1W6scqN7wx9tPmjH8Ub%2Fj1ycq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMmwHyHV%2BerxkKoeTyrcAw66rJSXGeTQCT4TA4lxd2GSV%2BcAboFcSD5tzrwY09%2BCV9NqNItfngQs%2F9HzTJxIA%2BuCHn1Z%2BrRPCF62kyDWJsDwQscEmUtiMPd0PwcA4H%2FVaBbdc%2BncEj9L7aCC6wWWaVA%2B42C3XLf%2BIMMCZq0%2BA6uKynCbML1RfJt9p4JwlSJVtr3OtGewZZyy7%2FMsWjXBp9qSDUyD5xXFAzT6D%2FVpSeuT2JxNCw2ImWaFOlplyxMtLWT%2B0vv45JafiQ1j%2BId73Z8qBvzys%2FjixRElINm1IEOu%2BNgY7zjED%2FXGd%2B9QMS6bMm1A6pbq4ToYIZyljBZ7geeSPrk%2FaIJn69dAQ1%2BosOk4wsuGLy3y%2Brd716r4TZLE7WebeKdmD1vS3FcTeBZs1%2F2sZkwvvb0VYFicx28MF9uMQLKN86EJLIvfOHvy6OiNPZ5%2BJKy6nTMkdjBtcIuYzT5WQ2II60SM6URlUgg0T%2BAovSPxibkXP4ME27oq6DHPltBWtYo%2FCANcU7q76ES7G%2FvKxp5uHUl9%2BeYlBn%2FwvaFcaSG06bG%2FFhngcqBIv8rgUgZ6IFQS26s2uhDSJuPYNX2AuvZwskPWK0B8HRyKH%2FRE10%2F69XN0N5MReRTeCqZ%2BixkCuiGu7TXn%2Fmy%2FMK2K2cUGOqUBok1wE6kfk40MAMrpCCblmdM46VBLHEURTLrTrhKWXtZtY7xCvrQ3FmOmLPblW1R4GUHC6NUmam%2BIX66hP8%2BQ94rUd%2FbF3ckTZRXIWugEeRjAiLKgGp85k%2F9WoGZWBaC3Np5wR6O5J5BDyonPX4mEqNW8VYX9SCOM2wYMpD0NbXxq6UAsf4OIs%2Fg7S9neXsocKoBUgbIExMxFgz1ZHhttPKr89sd2&X-Amz-Signature=e29c02bf244d3415077daa899e8087239673608f65ad39dfc99b00fca4fd4600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E24CNV%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH436gr3M8w%2BcsTh7wjVIXgpxs9mJE%2B12HqpaHswiL9NAiEA99tSePj6cbP0TX8ajHq1W6scqN7wx9tPmjH8Ub%2Fj1ycq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMmwHyHV%2BerxkKoeTyrcAw66rJSXGeTQCT4TA4lxd2GSV%2BcAboFcSD5tzrwY09%2BCV9NqNItfngQs%2F9HzTJxIA%2BuCHn1Z%2BrRPCF62kyDWJsDwQscEmUtiMPd0PwcA4H%2FVaBbdc%2BncEj9L7aCC6wWWaVA%2B42C3XLf%2BIMMCZq0%2BA6uKynCbML1RfJt9p4JwlSJVtr3OtGewZZyy7%2FMsWjXBp9qSDUyD5xXFAzT6D%2FVpSeuT2JxNCw2ImWaFOlplyxMtLWT%2B0vv45JafiQ1j%2BId73Z8qBvzys%2FjixRElINm1IEOu%2BNgY7zjED%2FXGd%2B9QMS6bMm1A6pbq4ToYIZyljBZ7geeSPrk%2FaIJn69dAQ1%2BosOk4wsuGLy3y%2Brd716r4TZLE7WebeKdmD1vS3FcTeBZs1%2F2sZkwvvb0VYFicx28MF9uMQLKN86EJLIvfOHvy6OiNPZ5%2BJKy6nTMkdjBtcIuYzT5WQ2II60SM6URlUgg0T%2BAovSPxibkXP4ME27oq6DHPltBWtYo%2FCANcU7q76ES7G%2FvKxp5uHUl9%2BeYlBn%2FwvaFcaSG06bG%2FFhngcqBIv8rgUgZ6IFQS26s2uhDSJuPYNX2AuvZwskPWK0B8HRyKH%2FRE10%2F69XN0N5MReRTeCqZ%2BixkCuiGu7TXn%2Fmy%2FMK2K2cUGOqUBok1wE6kfk40MAMrpCCblmdM46VBLHEURTLrTrhKWXtZtY7xCvrQ3FmOmLPblW1R4GUHC6NUmam%2BIX66hP8%2BQ94rUd%2FbF3ckTZRXIWugEeRjAiLKgGp85k%2F9WoGZWBaC3Np5wR6O5J5BDyonPX4mEqNW8VYX9SCOM2wYMpD0NbXxq6UAsf4OIs%2Fg7S9neXsocKoBUgbIExMxFgz1ZHhttPKr89sd2&X-Amz-Signature=613db636354f08a125fc315229d440a2023d30398b76c6812cd98669f98b5261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
