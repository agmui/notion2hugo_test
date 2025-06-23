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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORQ32IH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGzb5RjDmCQ8pX9gX2s8uRgqwRadHmSZMYZwKabF6FRzAiB4nzDhpCZq4eQAvzCoOX2qS%2BInWBno2YHAZUw03m%2Be9SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCyDh%2FjcE0FtFQHqKtwDQ7nDLVBrJdk2vDIMIgGQWNi1Hoi4o3LGzA%2FebBYw7YwpqFd3rU9HBFZaRr3npOp7%2BsjyjRfjrTtCjieHe6Oyc5AsahXGH0B1WQKdG9g2tPbpUqQVH1P4Lzvnk8A6CIjUzTD%2BrQY1kfxh0aHJLqOvqQldIks%2FsN3i21UJQtiyXuBhNsuXWdR96d31OYPNCWjBsQr8airN4qns2tis4d4YU3Ylz3YQOw665oTY6gZIKD4izG7dh4YOYsFo6OzzVS8azv9NPte2oGLGuzZfG3i1KNa7bfvmT4GN0yNyN%2FMXPLoSMZNjEGG6bvZ2pZPVjsdLzr%2FmUiUWMruGFtUgbckgr2NB23Fh8EKF5Uq3ZdA7WMU6EBZ6%2Bfoht%2FTWjTL0%2BTtyj3urSBhHFYexh6ca62KQZvv0jkwMKtWJrdBJl4HLoXsutY7gH9E413krTkjVsdY0Jv4o%2FRUzukWeBYxN4aE1DLNnanIc5ZYFAHVudoISvgq8kZOx0lkP6N%2FoR6IAjDjXze4%2FN9bIKkG%2BGLPs175o1b5Id3aq4o%2BrSZ17mBF%2BHeVwZ8rKww6F28uVDc2WU%2Fix20QxK2Zh3RKe%2FzeyW0xlzP1qQVOZbKWPXQxbpV30RfNi%2FWPFBskpTH4iWn4wga%2FjwgY6pgE0xWnAtcKvNrBEsgwe3pw7R8%2BGyDQ5Fln5j32%2FfIgrIc90MLyqVTxfRuiMBannKTKiXxeDLlFh7nfeNTkx3WntYXnAyo95xF67hTDwL%2BN7EImbwVrQh9bnJfKM4OsMnA3ineB1asL4yEhd3g9F9FlcvyPQSeuvF%2B5meTn45EtoUj%2BJgWFl1O%2BdOo1ZRs9P%2Bt1R60a2TovWz7%2Bgo8HqkQG3zXvqG9%2B0&X-Amz-Signature=3e8d19900eaf9a9dace867c84e738f88adcabe4ac5cb407d3b6accc45a9bf052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORQ32IH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGzb5RjDmCQ8pX9gX2s8uRgqwRadHmSZMYZwKabF6FRzAiB4nzDhpCZq4eQAvzCoOX2qS%2BInWBno2YHAZUw03m%2Be9SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCyDh%2FjcE0FtFQHqKtwDQ7nDLVBrJdk2vDIMIgGQWNi1Hoi4o3LGzA%2FebBYw7YwpqFd3rU9HBFZaRr3npOp7%2BsjyjRfjrTtCjieHe6Oyc5AsahXGH0B1WQKdG9g2tPbpUqQVH1P4Lzvnk8A6CIjUzTD%2BrQY1kfxh0aHJLqOvqQldIks%2FsN3i21UJQtiyXuBhNsuXWdR96d31OYPNCWjBsQr8airN4qns2tis4d4YU3Ylz3YQOw665oTY6gZIKD4izG7dh4YOYsFo6OzzVS8azv9NPte2oGLGuzZfG3i1KNa7bfvmT4GN0yNyN%2FMXPLoSMZNjEGG6bvZ2pZPVjsdLzr%2FmUiUWMruGFtUgbckgr2NB23Fh8EKF5Uq3ZdA7WMU6EBZ6%2Bfoht%2FTWjTL0%2BTtyj3urSBhHFYexh6ca62KQZvv0jkwMKtWJrdBJl4HLoXsutY7gH9E413krTkjVsdY0Jv4o%2FRUzukWeBYxN4aE1DLNnanIc5ZYFAHVudoISvgq8kZOx0lkP6N%2FoR6IAjDjXze4%2FN9bIKkG%2BGLPs175o1b5Id3aq4o%2BrSZ17mBF%2BHeVwZ8rKww6F28uVDc2WU%2Fix20QxK2Zh3RKe%2FzeyW0xlzP1qQVOZbKWPXQxbpV30RfNi%2FWPFBskpTH4iWn4wga%2FjwgY6pgE0xWnAtcKvNrBEsgwe3pw7R8%2BGyDQ5Fln5j32%2FfIgrIc90MLyqVTxfRuiMBannKTKiXxeDLlFh7nfeNTkx3WntYXnAyo95xF67hTDwL%2BN7EImbwVrQh9bnJfKM4OsMnA3ineB1asL4yEhd3g9F9FlcvyPQSeuvF%2B5meTn45EtoUj%2BJgWFl1O%2BdOo1ZRs9P%2Bt1R60a2TovWz7%2Bgo8HqkQG3zXvqG9%2B0&X-Amz-Signature=cef38977fe244dfbf437669e22ccb395b2c2d76943af7c86d9d5893be976da99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
