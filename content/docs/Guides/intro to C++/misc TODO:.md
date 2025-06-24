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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XZ7VXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCgG%2Fy8JUZYA%2Fc%2Fis6OxlvVTiVcfeMqN8A8He%2B4IreMlgIgDjxFsk3%2FXEhHdUTp8ukxO9%2Fip98zoVOLykEbvkhTpUcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEwbQtVbtmp9iTw4bircAyNfdfO3nm3bfcEP%2FdRmRMtUbZTKClR5yERVdLi1UNaFCsxog%2FQsu7VhNH8z4jFJXNWjCfkNqYAjcBZK9vjLEKZt42tucU3SfkT5sMLKiGTmbSffVZFg13epWKBDrfnEr8PWyyoZYGuK3Hou6cm1NNT0sxW5u4TzdD0Gd3fQ9PV4ZftQgNJeezJ9onkEdZuh%2B84cNHQ%2BBoCtGBqclWwv%2FUwd%2FXEwZQmrIBNozOH%2Fjy2mQf%2FoXeG7iTJbtRRjX65kYC16cApe5zyVhfu52JCOm8xKurM1BkUZ6AgQQ%2Fq4NlCmRBJx2eZp8EyujN8tEm4lpnyzERqyrLH93lxdBobQb%2F2yXeuIYworsioMbUmzj5kA9imLu82sA%2B2mr6nPDDhomUist5STD38xZja1kegPpvmDvfsRG08X5oT7TqFnRNEaiDioBN2qcCQm%2BDoVOoySTb4vbru76MoDrybvpuvDDIhXQgfd%2F9%2FC5tFo47N6uEJ8LSUXtJFYOzjarUAzgvsb4VESVe45ueAIrsyQtrjdxd%2BlsmhvUnYt1QWy%2BV7GUH5cY32RBJ%2Be%2Bv%2BusfSAYUmdhk4C%2FFSIXVUvZr4aS%2BMKZUsMzebC%2Bi6kz3%2BArLFf34v%2B%2FSs2POxT%2B2NH%2BoOrMIuQ68IGOqUBUDu4wbhXjduw%2B9zp9cD4Gl3D8T9cWOdlulyBy9EOjGAa87IKstIcdeIfrQuOVUI%2FD4%2BnHG%2F%2BMqLwew8SKgbOIFwwYwTMEyzrjrOIFaXbViOIRLj%2Fh6%2BLDFgzmwjpGq2HuKvjo1MXKsHGZxgPxOKK%2BRK0SeAPJlgYgGIfmr9ogNRiJCwpflO8TJKbrR3uuBTjghVYTokngQUmFzatlJzhhheIn3wL&X-Amz-Signature=d9cc45e6c0273366f313c3f1407783826cca5d31800b13853ac4d86296f6ac57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XZ7VXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCgG%2Fy8JUZYA%2Fc%2Fis6OxlvVTiVcfeMqN8A8He%2B4IreMlgIgDjxFsk3%2FXEhHdUTp8ukxO9%2Fip98zoVOLykEbvkhTpUcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEwbQtVbtmp9iTw4bircAyNfdfO3nm3bfcEP%2FdRmRMtUbZTKClR5yERVdLi1UNaFCsxog%2FQsu7VhNH8z4jFJXNWjCfkNqYAjcBZK9vjLEKZt42tucU3SfkT5sMLKiGTmbSffVZFg13epWKBDrfnEr8PWyyoZYGuK3Hou6cm1NNT0sxW5u4TzdD0Gd3fQ9PV4ZftQgNJeezJ9onkEdZuh%2B84cNHQ%2BBoCtGBqclWwv%2FUwd%2FXEwZQmrIBNozOH%2Fjy2mQf%2FoXeG7iTJbtRRjX65kYC16cApe5zyVhfu52JCOm8xKurM1BkUZ6AgQQ%2Fq4NlCmRBJx2eZp8EyujN8tEm4lpnyzERqyrLH93lxdBobQb%2F2yXeuIYworsioMbUmzj5kA9imLu82sA%2B2mr6nPDDhomUist5STD38xZja1kegPpvmDvfsRG08X5oT7TqFnRNEaiDioBN2qcCQm%2BDoVOoySTb4vbru76MoDrybvpuvDDIhXQgfd%2F9%2FC5tFo47N6uEJ8LSUXtJFYOzjarUAzgvsb4VESVe45ueAIrsyQtrjdxd%2BlsmhvUnYt1QWy%2BV7GUH5cY32RBJ%2Be%2Bv%2BusfSAYUmdhk4C%2FFSIXVUvZr4aS%2BMKZUsMzebC%2Bi6kz3%2BArLFf34v%2B%2FSs2POxT%2B2NH%2BoOrMIuQ68IGOqUBUDu4wbhXjduw%2B9zp9cD4Gl3D8T9cWOdlulyBy9EOjGAa87IKstIcdeIfrQuOVUI%2FD4%2BnHG%2F%2BMqLwew8SKgbOIFwwYwTMEyzrjrOIFaXbViOIRLj%2Fh6%2BLDFgzmwjpGq2HuKvjo1MXKsHGZxgPxOKK%2BRK0SeAPJlgYgGIfmr9ogNRiJCwpflO8TJKbrR3uuBTjghVYTokngQUmFzatlJzhhheIn3wL&X-Amz-Signature=f764d1ed0de2b6369e7073d3501b888e201069d6ef84e5dfe1a0b282e907a327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
