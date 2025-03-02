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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV4JS6Y%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMrrUeoutompJ%2FG9FAd0Fc8GrEcFkA27XJzmHqio3%2FTAiEAkDWUqIAW%2FsygW0JFs9kF%2BZjQiu1SXSIrGFcCJXk1NbEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFReRXJ80BhWjnL51ircA%2B8%2BClL4%2Bepb5bMXbYAzfRH5DxVVm%2BHQthdhptJ%2Bdg1nwGI1pyLze%2Bj1kJePDrOiaJIt94ifIzGDkYTSz19f%2FFAYBVDZ4y2JIheFrKRmvQz%2FIzXOSMEOPPgP2TXnDUml41d%2BvNxhEw3vx%2FmHD%2FmBfzJrWIxfaEHJWYltzCg3DoraLBy1QXxqDPbMZJPiTifUlLwydqh6rQy9p3GbV2vPHdjAODXVin6sXP9BvBzdAbVEBIVN31xBedbAQuw0fwpoZKmLgDgqHKIn7BuuQOeIJHHnhWNfqYB4VrgcCrR9iVJAKElKWSDFTtoHczms1r3NOryMVkM72x28LjqNZYXpukuq02n4RY07r%2BhJEP0P6mv5Itm%2Bpl7Z9qdSV1K7xxz03MXRQ%2BSSyTtSOxM08uv4DehSUanZYMvv8fDdZ9urD7c7WsfW9e7zzSFLoMtQ%2B6SB%2BvmY1HiCuJllWp2tIdR2ZqKKfO8Y0KeXnfMZFdZLDilr%2FGJ8HhXC9nxb3vvGusZSxG2cmdg2toOa7sNJ8OuF1gy9zSeJOLu68W8J%2FVc%2B%2B2MDvF82MBZoIHz76Q1PWiXheNB7enojV713diLc9sD9jXh1FCZztdoAjHh6Vwk5nHdVA478ng7ZPjruWch6MNP2jr4GOqUBfZjjA%2BD5FCa9BGVjSR4pB0Td6hLY%2Bk7f1AGD08rjW6k%2F8ukzFHMVMEUlcka7NNBeXEDAzsd%2BmIqDxRoQjXd0MJ6Xa0JlF9xv13IAoDV2LL9m3RxUr5N%2BvgxXcHN1KEf4cjVg1bOSxNOZiTgEqZUhcNU8PPws1pRKoopkTmKjVpt920hoiwjEs36nXhx62l%2B%2FCLpUK7HSUOjYU%2FHhNs63j1DVslo2&X-Amz-Signature=42515dcf8e3291d53a3c66c4c114d2201c30e0bbc581b3ccdf9c80fb092fd31d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV4JS6Y%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMrrUeoutompJ%2FG9FAd0Fc8GrEcFkA27XJzmHqio3%2FTAiEAkDWUqIAW%2FsygW0JFs9kF%2BZjQiu1SXSIrGFcCJXk1NbEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFReRXJ80BhWjnL51ircA%2B8%2BClL4%2Bepb5bMXbYAzfRH5DxVVm%2BHQthdhptJ%2Bdg1nwGI1pyLze%2Bj1kJePDrOiaJIt94ifIzGDkYTSz19f%2FFAYBVDZ4y2JIheFrKRmvQz%2FIzXOSMEOPPgP2TXnDUml41d%2BvNxhEw3vx%2FmHD%2FmBfzJrWIxfaEHJWYltzCg3DoraLBy1QXxqDPbMZJPiTifUlLwydqh6rQy9p3GbV2vPHdjAODXVin6sXP9BvBzdAbVEBIVN31xBedbAQuw0fwpoZKmLgDgqHKIn7BuuQOeIJHHnhWNfqYB4VrgcCrR9iVJAKElKWSDFTtoHczms1r3NOryMVkM72x28LjqNZYXpukuq02n4RY07r%2BhJEP0P6mv5Itm%2Bpl7Z9qdSV1K7xxz03MXRQ%2BSSyTtSOxM08uv4DehSUanZYMvv8fDdZ9urD7c7WsfW9e7zzSFLoMtQ%2B6SB%2BvmY1HiCuJllWp2tIdR2ZqKKfO8Y0KeXnfMZFdZLDilr%2FGJ8HhXC9nxb3vvGusZSxG2cmdg2toOa7sNJ8OuF1gy9zSeJOLu68W8J%2FVc%2B%2B2MDvF82MBZoIHz76Q1PWiXheNB7enojV713diLc9sD9jXh1FCZztdoAjHh6Vwk5nHdVA478ng7ZPjruWch6MNP2jr4GOqUBfZjjA%2BD5FCa9BGVjSR4pB0Td6hLY%2Bk7f1AGD08rjW6k%2F8ukzFHMVMEUlcka7NNBeXEDAzsd%2BmIqDxRoQjXd0MJ6Xa0JlF9xv13IAoDV2LL9m3RxUr5N%2BvgxXcHN1KEf4cjVg1bOSxNOZiTgEqZUhcNU8PPws1pRKoopkTmKjVpt920hoiwjEs36nXhx62l%2B%2FCLpUK7HSUOjYU%2FHhNs63j1DVslo2&X-Amz-Signature=54cda96c8b2223968974882addc0601fa68128be68cf12999355a538e9d353e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
