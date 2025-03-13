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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEOMUDV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLeA4VzbRz7WC0BQArf4G6CUSpgE0vEQuydAQelfG6%2BAiEAs%2BTuU5ImW0HzyX5l0wZrYaH8J3l6ZTJA5iL4KjRtZHwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGXmOdb40m2v2bySrcAzzM4Xd5bb3jOmjWy5nhqujVQbLVoSuzdmtTXY%2BSMVTm3CK%2ByayThx3H9QVgop3JuFdRIJ8vK%2FQp7zyyxHJMrPAhWRRHn6LLv43ocp1L%2FF6px3jok0vqKqsEI7IP%2F1HdkNqSWV0QDjGmq9HwA5PlPFXQw9oM4AjFrJMc6tWTinhVSKTeshVs2B0wUWodANg%2Fm0Skp5LVMciCl%2FzVl%2B9ocxPsUICDee%2Fw42%2Bf4KO8lrhc7Z%2B0JSo%2BRa%2BNyV%2F09kITQwxU0kZ21%2B0CLXWuPtp4sa0I%2FXVhORdlFngMgN9rGHKNh%2BWpbnT4JkTZUf4gVH7GNLO8rF9%2BkbkzYNb5%2Bn6foTJjufQXB7%2BCHnNs1CLlYkmYdUQTUfj%2FHJKfsLsPSXlhPKMOavarIlbrQtEHQ60G5kpu8wxPbCBl5CYg1Yjq4nqK585pGETwEc24ESGeseGEKNGjZEXPfX02rsBpU5f7MwXvaGkGByoVbjDfAoekQe%2F6OQ7owTr%2FEQ1Ei5GXhyFjuqU%2FX6qaB2BOX6gTWVJVZMEsSRiliIx3Gen%2BydtmwRqa8aPIDa8FCPJTbx3XkM3dMmUEtELp561GY0wFeM4ecBANFdrIWl8%2F%2FcyTTCNHcRQiyM7eJxB4U1wd0pYkMPDAyL4GOqUB6O79Ux%2BI%2BSGJGhuw%2BeAHwB%2BLDP%2FuphRa1FhrPtFeJ04DbtRzYzjdE4g5WYSZBt%2BqSx%2B5oDhFHHVaOX%2FMU%2FUzpBNbv7ouulmzgYWl3kQ0GQoQLoMJbu6ZvCblEm2v%2BOKxlm6woy48EjKjkbwGv7KKC605jjS2xs0qHz75BttRaNAm7Lls2FktDRySeCM1YwGuz51O5vR8v%2F%2BT6ugZZGDUZp72CoU7&X-Amz-Signature=76c172c5b39748880967c7bb405c0a2a9075fbb0f856c3e4cdb747c12b14818f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEOMUDV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLeA4VzbRz7WC0BQArf4G6CUSpgE0vEQuydAQelfG6%2BAiEAs%2BTuU5ImW0HzyX5l0wZrYaH8J3l6ZTJA5iL4KjRtZHwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGXmOdb40m2v2bySrcAzzM4Xd5bb3jOmjWy5nhqujVQbLVoSuzdmtTXY%2BSMVTm3CK%2ByayThx3H9QVgop3JuFdRIJ8vK%2FQp7zyyxHJMrPAhWRRHn6LLv43ocp1L%2FF6px3jok0vqKqsEI7IP%2F1HdkNqSWV0QDjGmq9HwA5PlPFXQw9oM4AjFrJMc6tWTinhVSKTeshVs2B0wUWodANg%2Fm0Skp5LVMciCl%2FzVl%2B9ocxPsUICDee%2Fw42%2Bf4KO8lrhc7Z%2B0JSo%2BRa%2BNyV%2F09kITQwxU0kZ21%2B0CLXWuPtp4sa0I%2FXVhORdlFngMgN9rGHKNh%2BWpbnT4JkTZUf4gVH7GNLO8rF9%2BkbkzYNb5%2Bn6foTJjufQXB7%2BCHnNs1CLlYkmYdUQTUfj%2FHJKfsLsPSXlhPKMOavarIlbrQtEHQ60G5kpu8wxPbCBl5CYg1Yjq4nqK585pGETwEc24ESGeseGEKNGjZEXPfX02rsBpU5f7MwXvaGkGByoVbjDfAoekQe%2F6OQ7owTr%2FEQ1Ei5GXhyFjuqU%2FX6qaB2BOX6gTWVJVZMEsSRiliIx3Gen%2BydtmwRqa8aPIDa8FCPJTbx3XkM3dMmUEtELp561GY0wFeM4ecBANFdrIWl8%2F%2FcyTTCNHcRQiyM7eJxB4U1wd0pYkMPDAyL4GOqUB6O79Ux%2BI%2BSGJGhuw%2BeAHwB%2BLDP%2FuphRa1FhrPtFeJ04DbtRzYzjdE4g5WYSZBt%2BqSx%2B5oDhFHHVaOX%2FMU%2FUzpBNbv7ouulmzgYWl3kQ0GQoQLoMJbu6ZvCblEm2v%2BOKxlm6woy48EjKjkbwGv7KKC605jjS2xs0qHz75BttRaNAm7Lls2FktDRySeCM1YwGuz51O5vR8v%2F%2BT6ugZZGDUZp72CoU7&X-Amz-Signature=4f6130439e0115c608c18390966caed171c9e4b2cba0a7065fab3f6eb30e19b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
