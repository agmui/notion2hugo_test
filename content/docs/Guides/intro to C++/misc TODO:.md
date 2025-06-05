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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WG2YHRA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDiiy1%2FKCd5jX7kEC9%2FyBV2oekFuK7ZxZ6NDRAAxeFlQwIgUuZAPGMPEyqMcZwtKuBk5dsx2nyEoXBtd2mCaiDw1nUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEBpbjCfm8PhfnOpmSrcA6J4qf5XrAHqg0wOCy6gPnvnIQMP5qftRTHh6%2B%2F1X67Jc78rVM4OJcIe7qE84WseF%2BqSmvr%2Fd9UU2uuaP1SgnBg0xee7OJxdkJYT7FgG0VUD7JnlB9OTMtw0Dys%2FbJBmZQH3H7ATFFrxG%2FTPICfGD9G%2FH8Jn4H%2B64tOVZX4EjLf2IaahMKybzTXziPA5PO9y6RKZBu8adL8FkJxpKcm4MU6BjDWvs8iKp%2F%2FBT%2B3K%2FbYesrc00mNTdgyJAoXhTp%2FF%2BJrXk5eioLY2d%2Fer0zimHEjSemGm2nRyG5Gjn9puJeQomTJYT50L9oamj0XQ98tbanC%2FsEhguyjSHi8Y6afTaPQi%2FVxb98NRmJFcSTeDaMWB9ycKPEye2P3j4RS%2FciGofFPPb6q9cD%2Fo4tsQRBcKVuDO7M7wbkobzt0m2V0EGGEkvgHE9JFwNjCwL8hQ9nvQ5RA3SidvJpS8iK6vEzls6XiJi7y5YdZ6t9I%2B8z0ZzhgW44enKJvBNDCVsCo70FDnWdGxYzT6vgvn%2B4ZZ8ulbf1ArRT2%2FEARLNtFhHl0RAdK4pajmulNfSTAVJObnqjeymKM%2BXdY%2Fqul7oY46Qe7%2FQ5zB0vtad2i8pIsFljWFQ1I4h1RVd%2B6MvgFu7uLUMKDlhMIGOqUBVhw7rOf96OhBIRwotwtC%2FlShFBCkPZuq6l97NzvwMNKu%2FIzkCL2q4PP2j%2BSpZh%2FJu59wiX7mUSMMWcQaUnzp3lH4rPDOLp%2Bo2noPWv8IHdJYuYFJAK%2FaYW7ciGDOnWS7oB7Gxbr6yz0IelmLBypIgiu0b4XQjY603xVtdpOF8Jp8Tk34FrG7pXo%2Fmi8F8HmwQ69%2B7hVPo3MHoRril57%2Buth4y3ey&X-Amz-Signature=7dca444376117af233126d72f91f4f4d040ec7bae0764e95e2c2fdb518a2f4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WG2YHRA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDiiy1%2FKCd5jX7kEC9%2FyBV2oekFuK7ZxZ6NDRAAxeFlQwIgUuZAPGMPEyqMcZwtKuBk5dsx2nyEoXBtd2mCaiDw1nUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEBpbjCfm8PhfnOpmSrcA6J4qf5XrAHqg0wOCy6gPnvnIQMP5qftRTHh6%2B%2F1X67Jc78rVM4OJcIe7qE84WseF%2BqSmvr%2Fd9UU2uuaP1SgnBg0xee7OJxdkJYT7FgG0VUD7JnlB9OTMtw0Dys%2FbJBmZQH3H7ATFFrxG%2FTPICfGD9G%2FH8Jn4H%2B64tOVZX4EjLf2IaahMKybzTXziPA5PO9y6RKZBu8adL8FkJxpKcm4MU6BjDWvs8iKp%2F%2FBT%2B3K%2FbYesrc00mNTdgyJAoXhTp%2FF%2BJrXk5eioLY2d%2Fer0zimHEjSemGm2nRyG5Gjn9puJeQomTJYT50L9oamj0XQ98tbanC%2FsEhguyjSHi8Y6afTaPQi%2FVxb98NRmJFcSTeDaMWB9ycKPEye2P3j4RS%2FciGofFPPb6q9cD%2Fo4tsQRBcKVuDO7M7wbkobzt0m2V0EGGEkvgHE9JFwNjCwL8hQ9nvQ5RA3SidvJpS8iK6vEzls6XiJi7y5YdZ6t9I%2B8z0ZzhgW44enKJvBNDCVsCo70FDnWdGxYzT6vgvn%2B4ZZ8ulbf1ArRT2%2FEARLNtFhHl0RAdK4pajmulNfSTAVJObnqjeymKM%2BXdY%2Fqul7oY46Qe7%2FQ5zB0vtad2i8pIsFljWFQ1I4h1RVd%2B6MvgFu7uLUMKDlhMIGOqUBVhw7rOf96OhBIRwotwtC%2FlShFBCkPZuq6l97NzvwMNKu%2FIzkCL2q4PP2j%2BSpZh%2FJu59wiX7mUSMMWcQaUnzp3lH4rPDOLp%2Bo2noPWv8IHdJYuYFJAK%2FaYW7ciGDOnWS7oB7Gxbr6yz0IelmLBypIgiu0b4XQjY603xVtdpOF8Jp8Tk34FrG7pXo%2Fmi8F8HmwQ69%2B7hVPo3MHoRril57%2Buth4y3ey&X-Amz-Signature=198fd081c6b4d0f3707cbc49dcb5e59ddb2a03d74e9b9ade1195152e6df7963b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
