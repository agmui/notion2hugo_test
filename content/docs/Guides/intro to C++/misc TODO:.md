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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XC2XUK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYESZrGIdMO26P4zeHgvqck%2Bgm%2F4D5S2pRfgdEOqTzOwIgcfFEF85vibjGK4MQqVFXzDdDV%2BaWuhD%2BcPjAKC%2B0ZSQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunuZ9oIHnSRhCOHCrcA1nl3JPB3hjchadaACqCpCZeK7pzJnXkbs%2B5j9eOTWNYJq4MA2Vq0Q1PWccbXhVRzAtZjjf2nVqeMRLWL%2FoAFh74vd6mPRW3UU%2BCkp%2Bq7LXjQ7lYiE3v8ZfuIFrhePbSJh9mCBZ1cvc%2BF7TgZOQsNStmTRCxvwHDuRH%2FqK0onxIvt5r8JMKQzbJwNC0BgSA4AJkng2M75S%2BNeZQCwiiHpR28LaixBCFqTgpUuYVI1QkXVbJDEAwSxSjV5rsjPWPspjOIqcpon87U75o37xCjTuy%2B6F0fxhHReLwseItr2V8tyVRmFieZNrRlg5wevugtyL0nB2uPLomL2A8bj2cEcdZ5HD18ap1gCjB53XFN0QVIX71HA14IRpzDyVyNfy5iKTk0DmICnA54WLKLXqMTQMzPGMLxVNp4LLQ9W2%2F%2Bz2K%2BizHRPujM7lNEhtXKis1DbBG3Hxry7EwL0R5gD4uFQWkL98YOS%2B9ZkrUyTGwE%2BZ%2BbjDEmvsKeyzx9ye7uuEY2QbZWBeBQHSJJP9hNBPW6tWAXhIjn%2BkOoDbWFIOXNBsjc81Ai8C9APtb6Ef0KE7gQlIG9sPohMVHYG35TFHLSdwMTGSTROiuDqupmUSxU1Y2n%2FDDXNN0qil%2FRNpn7MIL9yMMGOqUB7bjEEegVDuJ8%2F76j0UFGLum9%2FzsKSyvyHU6y4EBkbI9o%2FlGKu7N1iV502ZcZknlrcxBWEc6CyTXz9Xqv2VgI69na0I%2BsuLw7Yl0IbGmkY4Sfxy6v8Gu6Ef1oDTKKKLAXNUff%2F5Uoah%2FdA0E%2BfnU2Jg7Anw3cC%2BfFXdiXqCTY8ut6nnOXzpGzWKc0h2zgjxa1w6vxzMgIjRI%2FU%2BecMsmsSNExG5hA&X-Amz-Signature=d183c7ac7e81ca2695f75f1f3d3964b463e17befac5b6642eea3c010b9a20b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XC2XUK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYESZrGIdMO26P4zeHgvqck%2Bgm%2F4D5S2pRfgdEOqTzOwIgcfFEF85vibjGK4MQqVFXzDdDV%2BaWuhD%2BcPjAKC%2B0ZSQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunuZ9oIHnSRhCOHCrcA1nl3JPB3hjchadaACqCpCZeK7pzJnXkbs%2B5j9eOTWNYJq4MA2Vq0Q1PWccbXhVRzAtZjjf2nVqeMRLWL%2FoAFh74vd6mPRW3UU%2BCkp%2Bq7LXjQ7lYiE3v8ZfuIFrhePbSJh9mCBZ1cvc%2BF7TgZOQsNStmTRCxvwHDuRH%2FqK0onxIvt5r8JMKQzbJwNC0BgSA4AJkng2M75S%2BNeZQCwiiHpR28LaixBCFqTgpUuYVI1QkXVbJDEAwSxSjV5rsjPWPspjOIqcpon87U75o37xCjTuy%2B6F0fxhHReLwseItr2V8tyVRmFieZNrRlg5wevugtyL0nB2uPLomL2A8bj2cEcdZ5HD18ap1gCjB53XFN0QVIX71HA14IRpzDyVyNfy5iKTk0DmICnA54WLKLXqMTQMzPGMLxVNp4LLQ9W2%2F%2Bz2K%2BizHRPujM7lNEhtXKis1DbBG3Hxry7EwL0R5gD4uFQWkL98YOS%2B9ZkrUyTGwE%2BZ%2BbjDEmvsKeyzx9ye7uuEY2QbZWBeBQHSJJP9hNBPW6tWAXhIjn%2BkOoDbWFIOXNBsjc81Ai8C9APtb6Ef0KE7gQlIG9sPohMVHYG35TFHLSdwMTGSTROiuDqupmUSxU1Y2n%2FDDXNN0qil%2FRNpn7MIL9yMMGOqUB7bjEEegVDuJ8%2F76j0UFGLum9%2FzsKSyvyHU6y4EBkbI9o%2FlGKu7N1iV502ZcZknlrcxBWEc6CyTXz9Xqv2VgI69na0I%2BsuLw7Yl0IbGmkY4Sfxy6v8Gu6Ef1oDTKKKLAXNUff%2F5Uoah%2FdA0E%2BfnU2Jg7Anw3cC%2BfFXdiXqCTY8ut6nnOXzpGzWKc0h2zgjxa1w6vxzMgIjRI%2FU%2BecMsmsSNExG5hA&X-Amz-Signature=1a8e5feeb95f4d5796ef506e2ad52bf64f3940a4ea9500245edd1c27d8bcd287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
