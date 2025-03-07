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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=8a6311c4d6559f57c304182bd99f0e66585e4b7fae281bf4f541848b4792426e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=d3c527ed7b64990eb49a79b410a27813c1b9bb72e5128c415dc8bd11c1dffc51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
