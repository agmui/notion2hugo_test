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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWUS5EP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHN%2BjU75p%2BHG4EPfAlRDLbvWFD7TFZT7VFuF3F91HqS2AiAQ3tDhULWPBE7TkzOwGpmVTx6otZ32U33eNED5LKkksir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGJxqbHBW6SDdfjNiKtwD3fOAyFiIc3tqEjuF%2FMtqgS2sXlxqnoGzpBR6s%2Fr2IlpEYhVWkQlXVZiJaooIeH08j314pxiEJVljdn%2Bvz6WtUFbxpQxXpy03XZqAM6ttEbxbuo3J97EBk3sx7KDzSQtWTVC3uD1pSer0Kj69nhxZ%2BBQiA3D3gUvRMFok4hCDl%2BUjrrClJZdNdVU0%2BU6BjPVjVWOzsgzQnTARPPDQm3b9jsIYtB6Akebnbc0tIEZ4ias43PqhlHejp7IuSeCLFzHjb9sJbFSVN%2BFwK5wRn8GtLy28C%2BWeGC%2F3fXsvUPtnI1ZYYz%2FaubJk61iSgnspChf5TbwJpQ8o0bWDo7HmhgBAFrEIEoyMKDzIt20gqyPbTY0JbRK5qg6dbPyZ4xvHyIVNaHn2sOazqcltfw3CtKLy8H0%2BlsK1ka7bG6gpufTl1YTfd1sjnjOFh50QI01O2GX002V5Prn5HM%2B4%2B6cBu2ZsxA1y5birmYr2Pnt1VKlaXz7Wx%2BJCfaTkfzZ0JGNQzSW1eji38ZEr0TNCx0s6pTkZFh8qpIj1TCXCTmEczq%2FBxl3%2FQ8p094uoyH%2Fm%2BTfrBhUDZEd4fak86lOQVJor0ViZxsRrJ96SeU9UQG5WdvEYuzS8KocmeqA1dCKVkPQwwarRwQY6pgH9erFI1TEENhXxuV46LjQOjYReRPag0lteCdahOrqs3DBIYv4Z0fQmS4KatTdS3jFaQLgifrdDpBAZb3lizSPxcxIsrcAbqIPIcvw1GWBR5xX6U2TTrlxyBl%2FSFDFIj7w%2BoHVOJaKJFqnjHUCMrMDMi%2FQUEqL9bq1cMyblmLvo82KFge1pKpexPoKgXW%2BhBzH2NzmZl3dRA2FIPKt%2ByZEPyaYxN79I&X-Amz-Signature=ea898e00680274c8410ab7186329c26c2af524329a29a2e84fa74fbfb6a8f69e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWUS5EP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHN%2BjU75p%2BHG4EPfAlRDLbvWFD7TFZT7VFuF3F91HqS2AiAQ3tDhULWPBE7TkzOwGpmVTx6otZ32U33eNED5LKkksir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGJxqbHBW6SDdfjNiKtwD3fOAyFiIc3tqEjuF%2FMtqgS2sXlxqnoGzpBR6s%2Fr2IlpEYhVWkQlXVZiJaooIeH08j314pxiEJVljdn%2Bvz6WtUFbxpQxXpy03XZqAM6ttEbxbuo3J97EBk3sx7KDzSQtWTVC3uD1pSer0Kj69nhxZ%2BBQiA3D3gUvRMFok4hCDl%2BUjrrClJZdNdVU0%2BU6BjPVjVWOzsgzQnTARPPDQm3b9jsIYtB6Akebnbc0tIEZ4ias43PqhlHejp7IuSeCLFzHjb9sJbFSVN%2BFwK5wRn8GtLy28C%2BWeGC%2F3fXsvUPtnI1ZYYz%2FaubJk61iSgnspChf5TbwJpQ8o0bWDo7HmhgBAFrEIEoyMKDzIt20gqyPbTY0JbRK5qg6dbPyZ4xvHyIVNaHn2sOazqcltfw3CtKLy8H0%2BlsK1ka7bG6gpufTl1YTfd1sjnjOFh50QI01O2GX002V5Prn5HM%2B4%2B6cBu2ZsxA1y5birmYr2Pnt1VKlaXz7Wx%2BJCfaTkfzZ0JGNQzSW1eji38ZEr0TNCx0s6pTkZFh8qpIj1TCXCTmEczq%2FBxl3%2FQ8p094uoyH%2Fm%2BTfrBhUDZEd4fak86lOQVJor0ViZxsRrJ96SeU9UQG5WdvEYuzS8KocmeqA1dCKVkPQwwarRwQY6pgH9erFI1TEENhXxuV46LjQOjYReRPag0lteCdahOrqs3DBIYv4Z0fQmS4KatTdS3jFaQLgifrdDpBAZb3lizSPxcxIsrcAbqIPIcvw1GWBR5xX6U2TTrlxyBl%2FSFDFIj7w%2BoHVOJaKJFqnjHUCMrMDMi%2FQUEqL9bq1cMyblmLvo82KFge1pKpexPoKgXW%2BhBzH2NzmZl3dRA2FIPKt%2ByZEPyaYxN79I&X-Amz-Signature=79cc42be8fe10ef7936cd5d2e3678543ee56d498beecf279b63d1b132c30e41c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
