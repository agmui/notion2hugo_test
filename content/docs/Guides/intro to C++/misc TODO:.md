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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3LBKWN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQ4AnpOng8Ver1urxyZ49iW4zAQXS7RSVX%2B7HVihIfQwIhALUxBTCiwv1N%2B1AjgKTj4pg%2BJF%2FVLqr9dzwZo97nNwcSKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRnrMSofFMkXH9FQq3AM9LJQZszO%2BIGEy2qwWyYAVnPXb6aB0Wll5D2LyGE8Rwb%2BRE5%2BLkXnsNkGp9j8wZYrVTWv11HqR9eX9IMCD8z4qrl4JtqKSQkWOx3LxQ7SoXAWKQeUJj7dekWAjVfWbwKgl5OxWcDHtGeJTdfpZA8edzutDeQCAObWEOaXmdMQbo%2BIn9G6iBts0%2BqyFx%2BY7yXHRbeD8J2ZE%2F%2BUXHFLzXQDenRk0JnDvVrahwIZE4PH8yzOMVXgss8zFaxXATYohBeLr48RiHStY1gV1xOKHHIEQVVFUbvRphDSPteMwmGWeANoD%2FcSn18P252J2QIsmXj4uwdcInWyigtIL8xk6IuFTILqRab%2F3%2BcSniEkdics2EAS46X6vMyPPC2we76hvqOtFm4I%2Fm9by8b9HJFvfCHteh2kGHFyUUZJMchag%2FhXZWhAD6IBxCq4d0syPMWApmxv5E8t62hQrgIwA1r0AXVT%2FvzECaFPip5OecGUq1z5OYr0DsCJ%2FhcAd3RrKA%2F5TqOr9YHuiTpn75RJEvjN0OSs5qlEkNVOLRdtrd%2FrxpB1NonAukq3S%2FXnPVl4T6d31GgkL5cGCuyErqk%2B3bhqVNgSGWJrv1z%2BPc3ix1iRMSyS4z8jlJQLSYthxhLrpVjCK2%2F2%2BBjqkAdBWUQ6ZUyu66HC9jL0OLZm16tTjcHVm4U1W0TjcrbE05L2G%2FmVKGxOBehbX7R9MPMZm7xYpfWqYsoBlCz%2FbmEcDOjozSAnFiYVlHzO9rB8JMVDBnsTdqqieW1XTtCbekNqerf%2BdH4dEDJgL%2BtEst0T44%2Fz4WW5rgfTuCp2EsQDW4dqGYuZxU%2BnElxYu6qI1Kgsx84qepnPEa%2BM6DVpwxlrnWcvQ&X-Amz-Signature=bfbf927c0515d0cffd6d2bb429700b68a54b9f165ef382d0c7f0a27be3f2bc31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3LBKWN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQ4AnpOng8Ver1urxyZ49iW4zAQXS7RSVX%2B7HVihIfQwIhALUxBTCiwv1N%2B1AjgKTj4pg%2BJF%2FVLqr9dzwZo97nNwcSKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRnrMSofFMkXH9FQq3AM9LJQZszO%2BIGEy2qwWyYAVnPXb6aB0Wll5D2LyGE8Rwb%2BRE5%2BLkXnsNkGp9j8wZYrVTWv11HqR9eX9IMCD8z4qrl4JtqKSQkWOx3LxQ7SoXAWKQeUJj7dekWAjVfWbwKgl5OxWcDHtGeJTdfpZA8edzutDeQCAObWEOaXmdMQbo%2BIn9G6iBts0%2BqyFx%2BY7yXHRbeD8J2ZE%2F%2BUXHFLzXQDenRk0JnDvVrahwIZE4PH8yzOMVXgss8zFaxXATYohBeLr48RiHStY1gV1xOKHHIEQVVFUbvRphDSPteMwmGWeANoD%2FcSn18P252J2QIsmXj4uwdcInWyigtIL8xk6IuFTILqRab%2F3%2BcSniEkdics2EAS46X6vMyPPC2we76hvqOtFm4I%2Fm9by8b9HJFvfCHteh2kGHFyUUZJMchag%2FhXZWhAD6IBxCq4d0syPMWApmxv5E8t62hQrgIwA1r0AXVT%2FvzECaFPip5OecGUq1z5OYr0DsCJ%2FhcAd3RrKA%2F5TqOr9YHuiTpn75RJEvjN0OSs5qlEkNVOLRdtrd%2FrxpB1NonAukq3S%2FXnPVl4T6d31GgkL5cGCuyErqk%2B3bhqVNgSGWJrv1z%2BPc3ix1iRMSyS4z8jlJQLSYthxhLrpVjCK2%2F2%2BBjqkAdBWUQ6ZUyu66HC9jL0OLZm16tTjcHVm4U1W0TjcrbE05L2G%2FmVKGxOBehbX7R9MPMZm7xYpfWqYsoBlCz%2FbmEcDOjozSAnFiYVlHzO9rB8JMVDBnsTdqqieW1XTtCbekNqerf%2BdH4dEDJgL%2BtEst0T44%2Fz4WW5rgfTuCp2EsQDW4dqGYuZxU%2BnElxYu6qI1Kgsx84qepnPEa%2BM6DVpwxlrnWcvQ&X-Amz-Signature=4d9a300df699825263b57d6fe0055325bd19777533a6b29dfeda811f6f86c008&X-Amz-SignedHeaders=host&x-id=GetObject)

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
