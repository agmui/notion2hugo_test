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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RCZGCO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRcRiXZpGwWrhH4TkLSHsUVvjtDNp0xHeWlkvawPdrVgIgOAy9K2r8jg5WAFtdIG7jOjn2J0PmS3bcJjrcg2nmI8EqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4lyGRPITmuM%2Fd0TircAyZOa1dgjmYoqu475qoV3ztodDhxAVYPRFERdkSldmAVQX%2BVCEP3%2F1QYKxeKTCVjxtbhzAc0l4aa4wWb3c8NCCMU6RcIMal0w9%2FRMLWeJOHti16hdWlILmCbVDrAGMfBx5mgwOpDGVlEiiyZC%2BYL9yNYhbPh%2F%2FsnBhfKYewQIT1lTU83up50Pa8AoqWJB7v8d3vWzKjM3yH8RWX%2Fbo0Vv%2BvNu0iKFZ5lOz6jBVrOysLl8UtH%2BUxYeP5mc8Q2hERw3FAfXcdTY%2BV08hha7j0FLRFpFcp9go5znOZI1%2BVOVkOLUgflEgPOn0QzVZ0yCZ3KGzMYw%2BaxI0NTZrO0%2Bh1Y5EcUxZ4lrY4CmgDOGT5ViS9Se3941xM20Hm4QVpA1k48RRIRXlj1b8CqTOVXWvY2g0eRV7JshqScoVnS%2BNc3hTLZHUaGFOnr6HsyakUGvt4fWrskGAalY817Fg5TCUdASU6q2f1Q%2BfeZiflYwc92UK3tQ%2F1LrzV%2B1bKKLYWTETeRsP%2FYwXCWU1%2F9rQKkf4NvMDNBc5SJHT1omrZgpCpezo56t0tbTeSXHLd9II8smeJcGgUv0%2Bgo3OCHnZlesWZrEFH17fjtQHPSPmkvevYbB1eEK%2B01ELzHM2511WXaMJ6R%2F8IGOqUB2EBmf4Dg%2FwO4tNZXeXRkY9vjAMLexFqz4jvXSmYKIyrrUmr5kzFtnysH%2FvUJ0zwjkX5%2Bfv2CZ3dIPLmuppFJ90n6VcZHOUomgNwPtCzem204p0Zzw0kYJJpHQMjEhHaFU9wKrS3vorHmz%2B8Vnpd6ICxNi3MiclvsFpk8ZtMc0lR6YzOkQkOFzTbq3PoLH98Mmo8ASQ6TbE3pkRcO4kFbihvRMsOH&X-Amz-Signature=af8b3aa2683870ed402e66e73eb25bb143cf9158ab3168ae034b2231947ba0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RCZGCO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRcRiXZpGwWrhH4TkLSHsUVvjtDNp0xHeWlkvawPdrVgIgOAy9K2r8jg5WAFtdIG7jOjn2J0PmS3bcJjrcg2nmI8EqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4lyGRPITmuM%2Fd0TircAyZOa1dgjmYoqu475qoV3ztodDhxAVYPRFERdkSldmAVQX%2BVCEP3%2F1QYKxeKTCVjxtbhzAc0l4aa4wWb3c8NCCMU6RcIMal0w9%2FRMLWeJOHti16hdWlILmCbVDrAGMfBx5mgwOpDGVlEiiyZC%2BYL9yNYhbPh%2F%2FsnBhfKYewQIT1lTU83up50Pa8AoqWJB7v8d3vWzKjM3yH8RWX%2Fbo0Vv%2BvNu0iKFZ5lOz6jBVrOysLl8UtH%2BUxYeP5mc8Q2hERw3FAfXcdTY%2BV08hha7j0FLRFpFcp9go5znOZI1%2BVOVkOLUgflEgPOn0QzVZ0yCZ3KGzMYw%2BaxI0NTZrO0%2Bh1Y5EcUxZ4lrY4CmgDOGT5ViS9Se3941xM20Hm4QVpA1k48RRIRXlj1b8CqTOVXWvY2g0eRV7JshqScoVnS%2BNc3hTLZHUaGFOnr6HsyakUGvt4fWrskGAalY817Fg5TCUdASU6q2f1Q%2BfeZiflYwc92UK3tQ%2F1LrzV%2B1bKKLYWTETeRsP%2FYwXCWU1%2F9rQKkf4NvMDNBc5SJHT1omrZgpCpezo56t0tbTeSXHLd9II8smeJcGgUv0%2Bgo3OCHnZlesWZrEFH17fjtQHPSPmkvevYbB1eEK%2B01ELzHM2511WXaMJ6R%2F8IGOqUB2EBmf4Dg%2FwO4tNZXeXRkY9vjAMLexFqz4jvXSmYKIyrrUmr5kzFtnysH%2FvUJ0zwjkX5%2Bfv2CZ3dIPLmuppFJ90n6VcZHOUomgNwPtCzem204p0Zzw0kYJJpHQMjEhHaFU9wKrS3vorHmz%2B8Vnpd6ICxNi3MiclvsFpk8ZtMc0lR6YzOkQkOFzTbq3PoLH98Mmo8ASQ6TbE3pkRcO4kFbihvRMsOH&X-Amz-Signature=d427ba87c7f7c9bfbfe883c127db6a8d907e24d963cadf1764b1550c5939e7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
