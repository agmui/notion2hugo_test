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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMZHC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCvADbjfZMoigXEdFjFY5L0NEXyCVNqZgcMg3q5%2BiQ2tQIgCKIruNJOx1EyZyZLMpXwoQ0j64tTk3F06ODEEHGIFVsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPvciQTkFv8fwZcayrcA2bvS84dfczIVIcTEd5OHCWksHBTflst7rOXekFF4%2F8njWzGnph2fo%2F65VbECPmxqbqQ%2F6WpH4lWkQosD%2BOLm2nem0rX%2BViuPRG960CLvP1D9Cc0p3xy5FGk5rRKo6RfWbgiSjhIpED2%2B%2FnS47MP8G%2Fe%2B%2Bd%2FuXEIsklWnPeVPUbPIPwbEfJu6RUejP5oNY85iiJMLi0wjTUuJBvyhp6hiN06AhO2yXaQVZliBriBchVDe%2BvGa7NchFk9p4WXUTPjFKe7AOi2RvcGGBrUZ0mnlEg3GXkulz%2B5xnJ%2FD1vfucf%2BHx82e1%2FvOCozCUAcjVUD1ujKk4wA7DAnHxMQ5LALuXGp8C85JeLtI9thwLBTK4P5JPodj470T4pmv5Zy20PyDhN8S61SLHI8ZZctEaXmhFKRAdO83C1CcOoz5RxwyH3B3ry4FCDJ4LWHwUCd%2Bj6uHoCiuyvTxEZtf41GE0rr%2B9%2FDVnPg0XCyXVFutS6jyBay88qedMMVxCLbyNI48U13jCki8kPuU5y22QYhBGie65IAQNRYD%2F9MObboofH2qUVOjxV8qozOYWXcLZTeVobIvNZNtAZgr7tlwOxCg78iw4mbIwvZDjx%2B%2FEDgulTMrEswQJ0PCd8HkU5lvKD%2FMIbCqcIGOqUBHUY0k6PRuRyuIBr9EXyQS%2FjM9Zc14oZGaN9s%2Fulf13tsWuPr%2BSpUL8UvcQCQJEop0O%2B9v5wt013qR3%2FRRZBbcOdAlbBvvR2NXBIaV9u1pCt6XDGMqymqrMcQD1ntB6nj5n%2Bk8uiPBJl6H7yBsV2bshGn4sD9gmFnLhc7j5dJMNumlYKuntIBBByVBulUIAHx%2FbNppLbdJI8F4yQSUI3vKJ8zjdXJ&X-Amz-Signature=082792fbda1049a047ea8de19efdac86eed7674081af68414993d74318dbec13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMZHC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCvADbjfZMoigXEdFjFY5L0NEXyCVNqZgcMg3q5%2BiQ2tQIgCKIruNJOx1EyZyZLMpXwoQ0j64tTk3F06ODEEHGIFVsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPvciQTkFv8fwZcayrcA2bvS84dfczIVIcTEd5OHCWksHBTflst7rOXekFF4%2F8njWzGnph2fo%2F65VbECPmxqbqQ%2F6WpH4lWkQosD%2BOLm2nem0rX%2BViuPRG960CLvP1D9Cc0p3xy5FGk5rRKo6RfWbgiSjhIpED2%2B%2FnS47MP8G%2Fe%2B%2Bd%2FuXEIsklWnPeVPUbPIPwbEfJu6RUejP5oNY85iiJMLi0wjTUuJBvyhp6hiN06AhO2yXaQVZliBriBchVDe%2BvGa7NchFk9p4WXUTPjFKe7AOi2RvcGGBrUZ0mnlEg3GXkulz%2B5xnJ%2FD1vfucf%2BHx82e1%2FvOCozCUAcjVUD1ujKk4wA7DAnHxMQ5LALuXGp8C85JeLtI9thwLBTK4P5JPodj470T4pmv5Zy20PyDhN8S61SLHI8ZZctEaXmhFKRAdO83C1CcOoz5RxwyH3B3ry4FCDJ4LWHwUCd%2Bj6uHoCiuyvTxEZtf41GE0rr%2B9%2FDVnPg0XCyXVFutS6jyBay88qedMMVxCLbyNI48U13jCki8kPuU5y22QYhBGie65IAQNRYD%2F9MObboofH2qUVOjxV8qozOYWXcLZTeVobIvNZNtAZgr7tlwOxCg78iw4mbIwvZDjx%2B%2FEDgulTMrEswQJ0PCd8HkU5lvKD%2FMIbCqcIGOqUBHUY0k6PRuRyuIBr9EXyQS%2FjM9Zc14oZGaN9s%2Fulf13tsWuPr%2BSpUL8UvcQCQJEop0O%2B9v5wt013qR3%2FRRZBbcOdAlbBvvR2NXBIaV9u1pCt6XDGMqymqrMcQD1ntB6nj5n%2Bk8uiPBJl6H7yBsV2bshGn4sD9gmFnLhc7j5dJMNumlYKuntIBBByVBulUIAHx%2FbNppLbdJI8F4yQSUI3vKJ8zjdXJ&X-Amz-Signature=c4f4a5a22e783b8684ee4973c85df05686dcb90f58400baa950bfe3523459ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
