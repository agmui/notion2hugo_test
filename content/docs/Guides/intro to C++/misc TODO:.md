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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFNMZSA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJp7TH9dap7%2Bg9onmL1rEoUXVAdH%2BIMLca5%2BunUN2DngIgWzLSNA8%2FD5uHFZ4KReYWg1otu9Q5jhx6u7YrlD7vY9oqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrtvICkgOUExw4YvyrcAwzGV7%2BlgTcn5NGWkTdmAHjH0XxzoYMnLQkjg%2FCigOkTleEXSQJHdUSkgflzIMldv8v8RHtNrURO%2B8VQoLsl8713%2BkOsB5tpsG6LA9Ywn9IUoaNJs%2FOlv%2F%2BKSw1JU61Rp8VtL4IaG8aLyJw5dFbCuzYla%2F1iBFAdt6Acq%2FJfw2DIEfsaggJsv7zxUxrQsTS6yUa8BeTk4nQD%2FZ2Jr12ScozIHSq9c1Fe3Jj2hbPl7q4w9WmMmtY1AO06IXOFQ39ck%2B1sBFePF0qLJcVS8HtFYeYElX3cuCwjS3a%2BHL%2FsDgNg9mGnoa1a8kDOMGXo%2BE2cD51N9Qp%2B5220g9vJtB35xt%2Ftumjf7l2LdEhvkjPzTi%2Bj%2B2mCEAYUBTZi94QGNpAa1wn1kBoLqPRbZRpRoonxUWBQg3qjkY0wWIspsdLuCZfSu0cauPDlzd9KUgLC%2BZqVyEqEwFBesK8jPQd3sjixb25Omqe3%2BVBUvyV2sh4HZ%2FSOr3%2BXrmXzl2lwrknXo5WRdD6Gw8I7XNbLt0%2BtUKDDmsbgfAh%2BKyjENdqtC5ir3fQP2jXlCpViHvHDa1Q%2BbBZ7%2BikTTaxrsfZUhoK9lvLc0AglcO%2F7ZEx9Ryjmbm%2Fa8HQ1c%2BO67xTND9uR9kckMOCyur8GOqUBIq%2B1S1BqaePZMRyLWF8QAwB8wVlypabRSputs3ldnBNwl0JDtseJpOeknkzwtZO%2Bzn1awPhenxIMF5DGnf22aSlF0Rd9v55CVK0INTAt1dvV9lE2K69bVi8jtaIPqTd3S1KFQ4ez1A5MdfC%2FsqY%2BL7khIq3INpNiiAK5goqmuhtmddZyqghcdUdH3E7Z6xr2FtPWZpSVFebBU27lOB%2FaRmXQFwqv&X-Amz-Signature=c76193163c26daf8d081bd5f8e585aa0b24137155f5351d72d7869e658fb21de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFNMZSA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJp7TH9dap7%2Bg9onmL1rEoUXVAdH%2BIMLca5%2BunUN2DngIgWzLSNA8%2FD5uHFZ4KReYWg1otu9Q5jhx6u7YrlD7vY9oqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrtvICkgOUExw4YvyrcAwzGV7%2BlgTcn5NGWkTdmAHjH0XxzoYMnLQkjg%2FCigOkTleEXSQJHdUSkgflzIMldv8v8RHtNrURO%2B8VQoLsl8713%2BkOsB5tpsG6LA9Ywn9IUoaNJs%2FOlv%2F%2BKSw1JU61Rp8VtL4IaG8aLyJw5dFbCuzYla%2F1iBFAdt6Acq%2FJfw2DIEfsaggJsv7zxUxrQsTS6yUa8BeTk4nQD%2FZ2Jr12ScozIHSq9c1Fe3Jj2hbPl7q4w9WmMmtY1AO06IXOFQ39ck%2B1sBFePF0qLJcVS8HtFYeYElX3cuCwjS3a%2BHL%2FsDgNg9mGnoa1a8kDOMGXo%2BE2cD51N9Qp%2B5220g9vJtB35xt%2Ftumjf7l2LdEhvkjPzTi%2Bj%2B2mCEAYUBTZi94QGNpAa1wn1kBoLqPRbZRpRoonxUWBQg3qjkY0wWIspsdLuCZfSu0cauPDlzd9KUgLC%2BZqVyEqEwFBesK8jPQd3sjixb25Omqe3%2BVBUvyV2sh4HZ%2FSOr3%2BXrmXzl2lwrknXo5WRdD6Gw8I7XNbLt0%2BtUKDDmsbgfAh%2BKyjENdqtC5ir3fQP2jXlCpViHvHDa1Q%2BbBZ7%2BikTTaxrsfZUhoK9lvLc0AglcO%2F7ZEx9Ryjmbm%2Fa8HQ1c%2BO67xTND9uR9kckMOCyur8GOqUBIq%2B1S1BqaePZMRyLWF8QAwB8wVlypabRSputs3ldnBNwl0JDtseJpOeknkzwtZO%2Bzn1awPhenxIMF5DGnf22aSlF0Rd9v55CVK0INTAt1dvV9lE2K69bVi8jtaIPqTd3S1KFQ4ez1A5MdfC%2FsqY%2BL7khIq3INpNiiAK5goqmuhtmddZyqghcdUdH3E7Z6xr2FtPWZpSVFebBU27lOB%2FaRmXQFwqv&X-Amz-Signature=c7eae64c45adabfd3b0b005413a5bac4041883f7f8139b1b039bbd384d46e44e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
