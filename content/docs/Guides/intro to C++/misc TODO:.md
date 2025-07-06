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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZY5F2Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCA20NXwUOP04WDRB83ibd4z5IqEh11boUM%2BsIbLwZggwIhAPkDh0SXOkF%2FO8t66G8Bn%2BXsWfrucpoL3ZEdPgpfq3QNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxZ5kG52%2BNUk0VpFlYq3AMnEu8sVFG4qFiKbgkuGR1q8nybxBDeZY9nPF%2BNTW3cDCqeECaeqUp18S6KXFQ1a%2BtL7WDDveJbJ%2B11Br7Y2jjqfmiCpUksrIVK6GCc4Nmkp8cpdY11lXVdjCk7Xt6n1HNqxtudXB%2FNgPK1jgFL8LBhwzk0HQaVMRdVHYjdu6F76hfx4qu5kFB80m%2Fn%2BGFk2%2Br8TbDDgLtA5Eg3nprKDEzmgPbuGlusHDmacviog4ancKfismgOZnUh33ZA6gsHS%2BGFbeTpcD%2FCrc6Gxquj1cOpYMb4uTc6gf%2BkqEnjeumBe2%2FGpuWdUOBDxa%2FNtFSkCW6UXd5SiIkB7yLfM92j5ggRHQzjyk%2FJjPcxicrScEVMN03jXKFKbg0c0Lgzme7urlMI1eZX21BZI9nKPND1DjBa7dhmKXKkDh%2BRs2sCLmw9MjPZtwkArdhxxPHQ7Gmrm2uMhvAVM9etQUMRB9Dx%2F%2FCDCzdzFn7J%2B9dimtnHl9zj03fVz0gvDe%2FXzfSeqJVWI5h4YBRodrdtG3LijIeKIEUvB3nnarJZzLrVvrHlBZVx9%2FLSecHLgnWmlKhke5xqllNyG9vXdF1SGLVS1Vt6SWwKFlDEc8ua8V86vv5%2BL9mcSpxYdXPE5AUicHs8eDC4rKjDBjqkAa8KLUBZjOc7rREzPy6ZSizcBHzlS4zTiCZrnMHXYoJE7D1uaEAt15Tz4RIwzRJqlcZ6KVq3%2F7Z28xzjUTaQOMXiowxv9mDnvwxiZDCp5IMNiRJfERTPtIZ3P4rOINwyvQcYybQTRh4E9ir4NBx%2F2oFwKJnccFC%2FLvh4u4qNyxkd%2BQBZMHktHeu9DpU1QtwnBjRka9izYoDzflWIxmD7gAJC9aL%2F&X-Amz-Signature=cf740f79c544033d6b98f784931c50de0e208d326f98b94b8f73d2e39735329e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZY5F2Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCA20NXwUOP04WDRB83ibd4z5IqEh11boUM%2BsIbLwZggwIhAPkDh0SXOkF%2FO8t66G8Bn%2BXsWfrucpoL3ZEdPgpfq3QNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxZ5kG52%2BNUk0VpFlYq3AMnEu8sVFG4qFiKbgkuGR1q8nybxBDeZY9nPF%2BNTW3cDCqeECaeqUp18S6KXFQ1a%2BtL7WDDveJbJ%2B11Br7Y2jjqfmiCpUksrIVK6GCc4Nmkp8cpdY11lXVdjCk7Xt6n1HNqxtudXB%2FNgPK1jgFL8LBhwzk0HQaVMRdVHYjdu6F76hfx4qu5kFB80m%2Fn%2BGFk2%2Br8TbDDgLtA5Eg3nprKDEzmgPbuGlusHDmacviog4ancKfismgOZnUh33ZA6gsHS%2BGFbeTpcD%2FCrc6Gxquj1cOpYMb4uTc6gf%2BkqEnjeumBe2%2FGpuWdUOBDxa%2FNtFSkCW6UXd5SiIkB7yLfM92j5ggRHQzjyk%2FJjPcxicrScEVMN03jXKFKbg0c0Lgzme7urlMI1eZX21BZI9nKPND1DjBa7dhmKXKkDh%2BRs2sCLmw9MjPZtwkArdhxxPHQ7Gmrm2uMhvAVM9etQUMRB9Dx%2F%2FCDCzdzFn7J%2B9dimtnHl9zj03fVz0gvDe%2FXzfSeqJVWI5h4YBRodrdtG3LijIeKIEUvB3nnarJZzLrVvrHlBZVx9%2FLSecHLgnWmlKhke5xqllNyG9vXdF1SGLVS1Vt6SWwKFlDEc8ua8V86vv5%2BL9mcSpxYdXPE5AUicHs8eDC4rKjDBjqkAa8KLUBZjOc7rREzPy6ZSizcBHzlS4zTiCZrnMHXYoJE7D1uaEAt15Tz4RIwzRJqlcZ6KVq3%2F7Z28xzjUTaQOMXiowxv9mDnvwxiZDCp5IMNiRJfERTPtIZ3P4rOINwyvQcYybQTRh4E9ir4NBx%2F2oFwKJnccFC%2FLvh4u4qNyxkd%2BQBZMHktHeu9DpU1QtwnBjRka9izYoDzflWIxmD7gAJC9aL%2F&X-Amz-Signature=2089f3c8cd4997ff5486eacf2ce3f10ca782974a25b57154a0ee2a4d21816442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
