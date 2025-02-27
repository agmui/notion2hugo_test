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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRXQVSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCkRI2pC4brSWYJpglS0ES%2BcxVAIzM6Qj97jtNDuyFIDgIhAMJvu6TLb83X4HrS6G2m8kXgV2t8cKjqSGmW3Xm5cJMtKv8DCHQQABoMNjM3NDIzMTgzODA1Igx3FwuaET1ecj6OBOAq3APtyTwQVJR7Ggg7DqT2zDds4WNd24FL6z1hO59OpZu2qs9yPV66csaBBzxypWePRBunC4fb2M8new2akvDIrsZZmGxWAvOUG1%2FpVOQC2o8Z94BzF6mkNjLkycGJ%2BURXVn%2FHd24kTWBeMDVsI7X6fFqMUvzzxh6cYdATx0rQPxChp8lZnLuxLLZ9EYDUmiHuAg6cpBFw75GTILL7b4EqzaAolXWuRqAXpH0mNdEjtB8nn1uE0wq%2FvAQh9yiEemPFxOgQLDlr96tbSllI0zzhchlYHSrjv9ifl%2FZOEDJHnwFcBo2nsXmTsVB9wF8M9mIIMq0W3PvIFDFIhLGURyF4%2FN7yn8jL9HVYFIPIDixVOd8owrP4Z0kY%2FxAwq05OQLGOtPOfzEy7wHr01AeQc5%2FSEJ5rzXUadZbyydBfRpwH4b%2Bq66fFCdKBjgBIVU0YKH1%2FuWMx30vHSe6xfeD2GUHISCYNQL2krXO32hwgrpsvUPvMjVXCF31WXt0XDyXBrjWMNiZf3LUup4CN3Kk%2BDV1mNTau8A9qNTmrZ4xNOz6hg4EJb%2BHRDvwYEAPMRdQTR35DVN4Q1kwmCVNHBAqMNBm3Xh0bc0TLva6pzbyGlbQ17468cRqgPHLHhiz3O1CFSDCRkIG%2BBjqkAfJStOLDFGWNsFpVPurqojyQD2g5jnwvkdA7l7m9WmOsO%2Bp%2BsgJOQ%2F68sRM4yq1uaDPYaOb4VokPqb9GS7ysbxRWCQVTJ856Zo1cw2j6KWraczR6YBXs%2BoGg%2BCmEIdHLcjv%2FhvssAuAmOu%2BF%2FVp9CQ7EkmxqKwEhzmpTS9cmzC0Bw4k3vM4XLKXFHrfT%2B50Um8ssG0o%2FH9AwFLqNCyhcuAFnz1Je&X-Amz-Signature=a59da17ba27005ee1344f0c34a4a76ebbe40df2ad59de67601b7c1b59aa45344&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRXQVSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCkRI2pC4brSWYJpglS0ES%2BcxVAIzM6Qj97jtNDuyFIDgIhAMJvu6TLb83X4HrS6G2m8kXgV2t8cKjqSGmW3Xm5cJMtKv8DCHQQABoMNjM3NDIzMTgzODA1Igx3FwuaET1ecj6OBOAq3APtyTwQVJR7Ggg7DqT2zDds4WNd24FL6z1hO59OpZu2qs9yPV66csaBBzxypWePRBunC4fb2M8new2akvDIrsZZmGxWAvOUG1%2FpVOQC2o8Z94BzF6mkNjLkycGJ%2BURXVn%2FHd24kTWBeMDVsI7X6fFqMUvzzxh6cYdATx0rQPxChp8lZnLuxLLZ9EYDUmiHuAg6cpBFw75GTILL7b4EqzaAolXWuRqAXpH0mNdEjtB8nn1uE0wq%2FvAQh9yiEemPFxOgQLDlr96tbSllI0zzhchlYHSrjv9ifl%2FZOEDJHnwFcBo2nsXmTsVB9wF8M9mIIMq0W3PvIFDFIhLGURyF4%2FN7yn8jL9HVYFIPIDixVOd8owrP4Z0kY%2FxAwq05OQLGOtPOfzEy7wHr01AeQc5%2FSEJ5rzXUadZbyydBfRpwH4b%2Bq66fFCdKBjgBIVU0YKH1%2FuWMx30vHSe6xfeD2GUHISCYNQL2krXO32hwgrpsvUPvMjVXCF31WXt0XDyXBrjWMNiZf3LUup4CN3Kk%2BDV1mNTau8A9qNTmrZ4xNOz6hg4EJb%2BHRDvwYEAPMRdQTR35DVN4Q1kwmCVNHBAqMNBm3Xh0bc0TLva6pzbyGlbQ17468cRqgPHLHhiz3O1CFSDCRkIG%2BBjqkAfJStOLDFGWNsFpVPurqojyQD2g5jnwvkdA7l7m9WmOsO%2Bp%2BsgJOQ%2F68sRM4yq1uaDPYaOb4VokPqb9GS7ysbxRWCQVTJ856Zo1cw2j6KWraczR6YBXs%2BoGg%2BCmEIdHLcjv%2FhvssAuAmOu%2BF%2FVp9CQ7EkmxqKwEhzmpTS9cmzC0Bw4k3vM4XLKXFHrfT%2B50Um8ssG0o%2FH9AwFLqNCyhcuAFnz1Je&X-Amz-Signature=4dc63c92577042e0546704a3d51e3c5ae663a4acaffb7ef24d2db3938b59ab87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
