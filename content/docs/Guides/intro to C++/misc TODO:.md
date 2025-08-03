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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LKB4X2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj4JkQtTUH9CRdWgopFdYoTdTN5wJNbfW1PALlswsnDgIhAMi1JmATI9tPn3WXUjOEbuZuQcLB%2FX65%2Fgm7uciSJ%2BzeKv8DCCQQABoMNjM3NDIzMTgzODA1IgzAkwFwGMH14Rvfaioq3AN442D7W8KeH39Ofd8U6OGnaQBAKH5wdpctW626H1RCz0k5c%2BKV40w41jIK1qM3qZ7ELnplj3uyocdrcHBkNUttIzInetm%2F3t2PjZuJXe%2FguUJYj6TYR0F5%2FYmZzHr2vadcQYl1WyAoL1VIZ47hCKTDtfk4OT7Nhkx12QRFzVTETZm8IA7NFwKXW4D%2Fz%2FoXXimKyhW4MLWMvlBi1tWii7YyyzQmjL3FbcemDeVvO8xHBHWAbBJydNtkDC8f7qgapM8DsaoTp6tE3uDuF38abkGHfWy%2Bme8%2FpzkghIqsseBFsLDehRsYb%2FhZ70c1pallsIuCNTIo2HVd%2ByEIjIXTOay09M%2BEn13LUlH4kZBdzBRIL8ehqGrRkK9TpDbZiIGsick%2FC%2FqJAKK6Tl4DRd8ipEOH5DupAuI32EHOZlL97FUHEyV0Gja50JbyWJbrmGriM5BxgeG9YP9%2BcM9XElf6rpVIiQ4zCxpnMWu2zbhpiYosH0gAGwtZ4NDPo6Odoun9A4zpRrrWPkcZLjRE2haQmGRf9ZSTCU1sKZlVLtjUIubM4H1qeCm8achp%2F6a%2F1wTLT7PVJhlu3VQNrOojDGbGCw44VnMvGuXmVCHJ%2BB5%2F%2FaSxfbfg39JIvn8oKO8k3zCno7vEBjqkAWkBJQy5Lsj0a39R19ojczAflNUQB2w6r8IoFqP7hyPp8uWLqmKPIQao8OGQNJgBf6GeyeYzbg8Q44YBACx%2BiCkQBR6JZqs3ZYp0ReD1PeyNSqG5JEqd1Ra0NDM%2FgRgyXG5GiJPe1EqHK46N0lgJVC0vyr%2FtDeowCNxL47fqEuf0vt5ZATVASeOAhQsNvK6dzloJFhe1%2BkcL9LTgW0uyU08fUB%2B5&X-Amz-Signature=b16002b81ff09223333ecbc605466e67d2917cbad0ded3c4ee74f66f4df8ea68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LKB4X2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj4JkQtTUH9CRdWgopFdYoTdTN5wJNbfW1PALlswsnDgIhAMi1JmATI9tPn3WXUjOEbuZuQcLB%2FX65%2Fgm7uciSJ%2BzeKv8DCCQQABoMNjM3NDIzMTgzODA1IgzAkwFwGMH14Rvfaioq3AN442D7W8KeH39Ofd8U6OGnaQBAKH5wdpctW626H1RCz0k5c%2BKV40w41jIK1qM3qZ7ELnplj3uyocdrcHBkNUttIzInetm%2F3t2PjZuJXe%2FguUJYj6TYR0F5%2FYmZzHr2vadcQYl1WyAoL1VIZ47hCKTDtfk4OT7Nhkx12QRFzVTETZm8IA7NFwKXW4D%2Fz%2FoXXimKyhW4MLWMvlBi1tWii7YyyzQmjL3FbcemDeVvO8xHBHWAbBJydNtkDC8f7qgapM8DsaoTp6tE3uDuF38abkGHfWy%2Bme8%2FpzkghIqsseBFsLDehRsYb%2FhZ70c1pallsIuCNTIo2HVd%2ByEIjIXTOay09M%2BEn13LUlH4kZBdzBRIL8ehqGrRkK9TpDbZiIGsick%2FC%2FqJAKK6Tl4DRd8ipEOH5DupAuI32EHOZlL97FUHEyV0Gja50JbyWJbrmGriM5BxgeG9YP9%2BcM9XElf6rpVIiQ4zCxpnMWu2zbhpiYosH0gAGwtZ4NDPo6Odoun9A4zpRrrWPkcZLjRE2haQmGRf9ZSTCU1sKZlVLtjUIubM4H1qeCm8achp%2F6a%2F1wTLT7PVJhlu3VQNrOojDGbGCw44VnMvGuXmVCHJ%2BB5%2F%2FaSxfbfg39JIvn8oKO8k3zCno7vEBjqkAWkBJQy5Lsj0a39R19ojczAflNUQB2w6r8IoFqP7hyPp8uWLqmKPIQao8OGQNJgBf6GeyeYzbg8Q44YBACx%2BiCkQBR6JZqs3ZYp0ReD1PeyNSqG5JEqd1Ra0NDM%2FgRgyXG5GiJPe1EqHK46N0lgJVC0vyr%2FtDeowCNxL47fqEuf0vt5ZATVASeOAhQsNvK6dzloJFhe1%2BkcL9LTgW0uyU08fUB%2B5&X-Amz-Signature=4c7b47656c2c7522e9ba010f46cd00463c7ed4f52b57c412f1f7b62d4551c64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
