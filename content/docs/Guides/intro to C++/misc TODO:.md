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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIT4UOBR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0tDDJ4B3zHaJ7n%2B2nrUOIWUcS0kfTpvcY4lxJyc1xRwIhAL7X%2BFL6gzzpUMKWn0MVVU%2FS1bsTd8PNhNAAeDbTJHewKv8DCDcQABoMNjM3NDIzMTgzODA1Igx9%2FLFm2KSEi005%2Bc0q3ANkkyrzck%2BZeroguSwQ%2Bhfs3zBw%2BQ7D29zVhDYwl6R8jVRz1qQ6H5E%2BO%2BPlKJ09N7gUlvJTlOmyQg7DcAVkPBNS4M%2F6NmUOtVGQyTqdj2qjuYllTEsB41M7NVGPSqH8UajUaY%2Fk1kLwrcVxulanVaGyIlJvv2%2Fuh2MXrZfX7rA%2BqkFy2HGDuxu5GyQX4toU64tBdHmtaOAsycR%2FSGqvicWEy9ND0dlrOr0kZcW6G35FDdh1nv29Jwgqvu7o%2F2dBXUhOnjForg8qYe7NEYIg3d7Ax%2F1Mg0ZsowoYVBnTIEc8%2Fz%2FHykzu8I16ORc8GC%2FdQ8EZLtPprJCG6hBjcMNx2Zrw4P0DQ6%2FFn8NRdehiZHo8kypUwJrnMbtMFdFRjOvzeeysqjbQmIMxB1bLH9ONhpR8uDhp7DqneeC8ZcEfSg6fuEfXeHfdXOMq5UQygTj61UCnFciro7fQjZiNuhJtFn95YwnjT%2BRrdUyBxi97wbrrHgohBjNMZz1QHXlY%2Foxa17Rn1hxrfVCCm8N2Jsxk5655AjUlnVymRV%2FZeKD2jxTlf5rina%2BV0ywwBUjCbJGYNMHfZwVfY%2FaETYtVBvlbJ%2B4QM4zIpI2PpgAn2zZNksyLCyCVxNaL4oOWgBCtWTCf8ZG%2FBjqkAdv%2F6RohoyybpU2Q3korEMwmb2Xit%2FSRDlq%2BiWBzVzRJ06PNXCBl46adx64XBL1U%2BE3%2F1EyrMc%2BvNgOP6pKSaYeMzlNdMn2Gb1bEPA5wm321kcRXB2fkgPgEFO8cSeljx1fNFbM2ua8xMJNmkKmnYh9kkG%2Ftpj%2FYpz2S0SX0gdaxDQEsqlErQqwajoPRBBnrIJzBMpXla6MxaVf1npQ4YGiY3ofQ&X-Amz-Signature=5a2889bbf17959581ee77184c3323b2b7482aa739e681bb0980a88350e8d909a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIT4UOBR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0tDDJ4B3zHaJ7n%2B2nrUOIWUcS0kfTpvcY4lxJyc1xRwIhAL7X%2BFL6gzzpUMKWn0MVVU%2FS1bsTd8PNhNAAeDbTJHewKv8DCDcQABoMNjM3NDIzMTgzODA1Igx9%2FLFm2KSEi005%2Bc0q3ANkkyrzck%2BZeroguSwQ%2Bhfs3zBw%2BQ7D29zVhDYwl6R8jVRz1qQ6H5E%2BO%2BPlKJ09N7gUlvJTlOmyQg7DcAVkPBNS4M%2F6NmUOtVGQyTqdj2qjuYllTEsB41M7NVGPSqH8UajUaY%2Fk1kLwrcVxulanVaGyIlJvv2%2Fuh2MXrZfX7rA%2BqkFy2HGDuxu5GyQX4toU64tBdHmtaOAsycR%2FSGqvicWEy9ND0dlrOr0kZcW6G35FDdh1nv29Jwgqvu7o%2F2dBXUhOnjForg8qYe7NEYIg3d7Ax%2F1Mg0ZsowoYVBnTIEc8%2Fz%2FHykzu8I16ORc8GC%2FdQ8EZLtPprJCG6hBjcMNx2Zrw4P0DQ6%2FFn8NRdehiZHo8kypUwJrnMbtMFdFRjOvzeeysqjbQmIMxB1bLH9ONhpR8uDhp7DqneeC8ZcEfSg6fuEfXeHfdXOMq5UQygTj61UCnFciro7fQjZiNuhJtFn95YwnjT%2BRrdUyBxi97wbrrHgohBjNMZz1QHXlY%2Foxa17Rn1hxrfVCCm8N2Jsxk5655AjUlnVymRV%2FZeKD2jxTlf5rina%2BV0ywwBUjCbJGYNMHfZwVfY%2FaETYtVBvlbJ%2B4QM4zIpI2PpgAn2zZNksyLCyCVxNaL4oOWgBCtWTCf8ZG%2FBjqkAdv%2F6RohoyybpU2Q3korEMwmb2Xit%2FSRDlq%2BiWBzVzRJ06PNXCBl46adx64XBL1U%2BE3%2F1EyrMc%2BvNgOP6pKSaYeMzlNdMn2Gb1bEPA5wm321kcRXB2fkgPgEFO8cSeljx1fNFbM2ua8xMJNmkKmnYh9kkG%2Ftpj%2FYpz2S0SX0gdaxDQEsqlErQqwajoPRBBnrIJzBMpXla6MxaVf1npQ4YGiY3ofQ&X-Amz-Signature=f1059354f9aad5daa837994b98f51996ad207db8b8087df4a69411a9491c4e06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
