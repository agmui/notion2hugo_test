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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y72AA2LL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2FkPIUOeqjTMNGHcVo4BXijxmBlWWpMl9CSxa2hgFQwwIhAO6Lcia1f0uNlv9Nak0%2FUT5bwxqmFEg26YBdQc37fJ7gKv8DCHoQABoMNjM3NDIzMTgzODA1IgzZv3U4MfV%2F1B8vfSIq3ANd5zjUCcHsAgelcnk6u15R7bxKTxhv7dgqmMw2UcwtlUc%2FR9BhPUQPt2DtdDO2Yv6pBIGw4xgX9gF%2F%2BJzrQQxq31m97HDPn6FNzMYEO%2FehtJht5OAy9YUYMhwvUge6pxL3Tr2vmkO2rwxZM8pV12kFThTj5s3oaNzHJaX8x4YqDFqBmo0rHsPSCD%2BQF1F1r%2BP2ycOU9L7yjZxc1%2BL0CGemDZ%2FLuDbd6wfd%2Fwi1Lijdqliw1nuMuDvOIsl5XBmF48VcZRJoNLZgTdq9sXRJOBDc8KOWCIVh0dAo8Gdvp964bRmZZFIBEOGiPbu0qk%2BoObJZ7av1oa10O8u1lpJ9v46JTHkfwGsBoQ%2BohYH20PXLpckFb4eINPu0FtIR2%2FEg1gwlPls3OqfdzmqtA636PnNUFd0yFj4p2X40rIyIoPwQoE7CY%2F%2BJYS4GpQeaXirBZbjTxb0vWyPJ1RbMEXaScU7eMjcDG9u8BDpQo%2Bk%2FKwoITl1n8hCXkIi6fhdgpa0alYrdKqveGCAz511KWWlkEMJhxxemoPGxXFIe6ah9PpqFna6xynrO1iA1MNGinoD66%2Bl57He2yXMXUiD%2FxNwrlGpN%2FX%2B8N%2BIbjT6Uy5B5TAzV6Q4NQyB2pv%2FEHz2j0DCD6q%2FDBjqkAY6jyCJ9TBnBUKCr4iyIiLmMHlavGnzRuSfVqb%2Fvip4IGEv6kCYCdS66rkVD66BpjZe9PZixjhJTg1E8ukuWZWihbzagblE6Bz3t0Mtku8pBIo%2FkoELzAn8Slv9%2BnTGCZrSWXpobZkSJ0C3mQBUM5F5%2BOdjPa3vhbJe2MY1ay1UVAWgKMQNPG97gVnD5TzMKxk%2F8J8gC3NEI7RAHuesN8Sw6cegy&X-Amz-Signature=d98861468bc122032de656fdd672e9a16eb2ccf44425be7740c7cd79fdb4fc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y72AA2LL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2FkPIUOeqjTMNGHcVo4BXijxmBlWWpMl9CSxa2hgFQwwIhAO6Lcia1f0uNlv9Nak0%2FUT5bwxqmFEg26YBdQc37fJ7gKv8DCHoQABoMNjM3NDIzMTgzODA1IgzZv3U4MfV%2F1B8vfSIq3ANd5zjUCcHsAgelcnk6u15R7bxKTxhv7dgqmMw2UcwtlUc%2FR9BhPUQPt2DtdDO2Yv6pBIGw4xgX9gF%2F%2BJzrQQxq31m97HDPn6FNzMYEO%2FehtJht5OAy9YUYMhwvUge6pxL3Tr2vmkO2rwxZM8pV12kFThTj5s3oaNzHJaX8x4YqDFqBmo0rHsPSCD%2BQF1F1r%2BP2ycOU9L7yjZxc1%2BL0CGemDZ%2FLuDbd6wfd%2Fwi1Lijdqliw1nuMuDvOIsl5XBmF48VcZRJoNLZgTdq9sXRJOBDc8KOWCIVh0dAo8Gdvp964bRmZZFIBEOGiPbu0qk%2BoObJZ7av1oa10O8u1lpJ9v46JTHkfwGsBoQ%2BohYH20PXLpckFb4eINPu0FtIR2%2FEg1gwlPls3OqfdzmqtA636PnNUFd0yFj4p2X40rIyIoPwQoE7CY%2F%2BJYS4GpQeaXirBZbjTxb0vWyPJ1RbMEXaScU7eMjcDG9u8BDpQo%2Bk%2FKwoITl1n8hCXkIi6fhdgpa0alYrdKqveGCAz511KWWlkEMJhxxemoPGxXFIe6ah9PpqFna6xynrO1iA1MNGinoD66%2Bl57He2yXMXUiD%2FxNwrlGpN%2FX%2B8N%2BIbjT6Uy5B5TAzV6Q4NQyB2pv%2FEHz2j0DCD6q%2FDBjqkAY6jyCJ9TBnBUKCr4iyIiLmMHlavGnzRuSfVqb%2Fvip4IGEv6kCYCdS66rkVD66BpjZe9PZixjhJTg1E8ukuWZWihbzagblE6Bz3t0Mtku8pBIo%2FkoELzAn8Slv9%2BnTGCZrSWXpobZkSJ0C3mQBUM5F5%2BOdjPa3vhbJe2MY1ay1UVAWgKMQNPG97gVnD5TzMKxk%2F8J8gC3NEI7RAHuesN8Sw6cegy&X-Amz-Signature=518b516ace607d8bd59403fecaf22121dc87cb7eec2082658c61ee8ba9ab3022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
