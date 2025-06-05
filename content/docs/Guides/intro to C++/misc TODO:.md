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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTP6MXKM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEINF2oL0tkUymFWcpY35kRKmu%2F08kMvkrdl5obaaPuaAiEAr3ycVCl2e%2FIT%2FL729qWhH7xuImt0I0PZl2eNXy5gB9sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLgMQeDhM3VWZIgyTSrcA%2FtQvkiHUMjDeg6GMHXHZiQU%2FenU1LBN%2FrpmHJqjiKFMo4ISLrAfZCZhMH%2Fraxb7USF%2BUMcmzvJFFBRL8a35ONOlh7wmeQFNG4OtXTW0gcRldpAd44rc8I5o1u05wSojoI7zI%2FfBQaudQbnhuX9201ePoeNVXPe2neMz2kk9iocpO0bQQIwrxSqLwGqpTYR5zrEI49pV6w6Piol%2BemFEFZ9y61oyn9KO9h1ZpV8BLac6ZLfFSv%2FuivjR%2FySEhKgEjWYthLtdkzAKim1hUOMohSf2CIKiRXR3SP4ZVkyvZg0qeZrh6s3Gqb2MOalCWWGq%2Bq764iwRs%2BtQDrE6XtqxZl4N5EeS3TF44YqrXUx%2B2ybR0TzJrqchZJEO2jIa%2FM15J%2Bjn1wYoKT83XowVbYhWyfRrUBK6rzc4X13LHEhxitv1WdFuNVr7I%2F75KJrgLBbxHBoM9DJiOqaKeEKPj6Q8Qq6F0hRg1Cd7s3qHYMiscQkqXLmDAVoavHtTQimT1Mt8Bw2v7xIL%2F0WeuSYIGlgl%2FZgRGOaTFuKvUp1nlZMj6y%2FqOsyDk3D0Kt8bcEYHdv9yPuBefQVfut7VQb88KseuEfMr0k4uR8dDH1egPUeqRQrWZtEFFsn3GcROnLqyML%2FnhsIGOqUBsaU%2BLMf5spUfZnN8vd%2Fe1zL9cCMXUNXExjwzgGUuWZAnBhzHG%2BADzsONcwOODGZIYTcdveBWhj8dz7tJDOoQIJtWXNKoHjhWyfLI0injF885k6OjjyMx3PyTys5mg3ipxDRtj2dQ8piM1OYHL1AXuIwK1U1n9WVzMwdXy5smrDpPJ7U%2Bz9iI3BpSPBhg3q%2BKRf%2BIIA4WQG4SEEjSCFV%2BwyFtxx%2FW&X-Amz-Signature=59776abae06432a850b474259f2b70cfe900206b71a4f248a071fc52803f8144&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTP6MXKM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEINF2oL0tkUymFWcpY35kRKmu%2F08kMvkrdl5obaaPuaAiEAr3ycVCl2e%2FIT%2FL729qWhH7xuImt0I0PZl2eNXy5gB9sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLgMQeDhM3VWZIgyTSrcA%2FtQvkiHUMjDeg6GMHXHZiQU%2FenU1LBN%2FrpmHJqjiKFMo4ISLrAfZCZhMH%2Fraxb7USF%2BUMcmzvJFFBRL8a35ONOlh7wmeQFNG4OtXTW0gcRldpAd44rc8I5o1u05wSojoI7zI%2FfBQaudQbnhuX9201ePoeNVXPe2neMz2kk9iocpO0bQQIwrxSqLwGqpTYR5zrEI49pV6w6Piol%2BemFEFZ9y61oyn9KO9h1ZpV8BLac6ZLfFSv%2FuivjR%2FySEhKgEjWYthLtdkzAKim1hUOMohSf2CIKiRXR3SP4ZVkyvZg0qeZrh6s3Gqb2MOalCWWGq%2Bq764iwRs%2BtQDrE6XtqxZl4N5EeS3TF44YqrXUx%2B2ybR0TzJrqchZJEO2jIa%2FM15J%2Bjn1wYoKT83XowVbYhWyfRrUBK6rzc4X13LHEhxitv1WdFuNVr7I%2F75KJrgLBbxHBoM9DJiOqaKeEKPj6Q8Qq6F0hRg1Cd7s3qHYMiscQkqXLmDAVoavHtTQimT1Mt8Bw2v7xIL%2F0WeuSYIGlgl%2FZgRGOaTFuKvUp1nlZMj6y%2FqOsyDk3D0Kt8bcEYHdv9yPuBefQVfut7VQb88KseuEfMr0k4uR8dDH1egPUeqRQrWZtEFFsn3GcROnLqyML%2FnhsIGOqUBsaU%2BLMf5spUfZnN8vd%2Fe1zL9cCMXUNXExjwzgGUuWZAnBhzHG%2BADzsONcwOODGZIYTcdveBWhj8dz7tJDOoQIJtWXNKoHjhWyfLI0injF885k6OjjyMx3PyTys5mg3ipxDRtj2dQ8piM1OYHL1AXuIwK1U1n9WVzMwdXy5smrDpPJ7U%2Bz9iI3BpSPBhg3q%2BKRf%2BIIA4WQG4SEEjSCFV%2BwyFtxx%2FW&X-Amz-Signature=e71fcea787a2870f6cfe19f4f9cdaa2fc76e645d60c6a1a8dc104b295a10476f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
