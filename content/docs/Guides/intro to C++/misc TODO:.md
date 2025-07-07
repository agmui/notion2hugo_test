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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQR6WXY3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFaK%2BRyCoPv7Nr2Mh42qcxvzJDeG0s0tzJogMk6HJ1m4AiBcbhsbRQ%2FsVJGTUQi%2FA2fcLpKC0o304veVLpuswHu0ZSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMPy8I0SX0GJd7EHPIKtwDTCD%2BOiwsExDQ%2FFcH72phLW3sv6gI5u7C2fBXRv%2FxNyWtJFd1Mz7nhoRC2WMYrWuhVTk8RlUe3XCehOL079B21UzszJO8Xmxh3bXCFo8YGSneirjnAvQEpYB7RnbPDqJFKHZKe26yTOvhO9YUWIzmbOldenFNaegt9J6TWhmolLu1AoaO5KrIHvwY%2BwPb8SeErTZ8XOlyKyxPmHOysviz639y29%2Bm4uvviB5ewSP5VICDGq2UwYbSgYkPuHHuVO%2FsldRz6NrryAcCh1h7zkcNKRWFAcy3FSI09tql1aYYFcNUIDe7igyPTIeoSbgW1bgqokUMb%2Fp8NdjH22SqKrp%2FUWbpSmV65P7kLJfvMsFgv3UF55dD5%2BRt3H0Owm1v0zrV%2BwG83zaVrhROUJyZXwO838Dk6d7zc%2B%2BSqCOfRVy1D7n2ZzCyKCzEeF1tJ8H0uRhQqo%2B532671kZoZ%2B8nDVsnMICL8D3KBgOsS3U7bHd%2FR8ye6WWDWBwy2NYl4WM4%2FpMkErRhZFfnb9YvMX4ZSx98X6SLJa3VXS2xVZayOV3ntQd0ORVtg4v2IIPv57hz37wMPjbh95adXrVW2f5fUdBmOKjETuEBZLMIF%2BL6nm7Avkb86VyGa42GEsp9Ofgw%2FPCswwY6pgG8n%2FEXTShLxw1aYEgnbr%2B6uGUumq51y5x2CdE27ALw4QB4CUOlRv0VksgXDUZMS0u2nv%2FP11jzS9CvBayca0KVU6iwMggH5I5fdMzZl80RUrBJ2bLWE8KzVFOZnSnPYvH24lurEibZzdajv308gF5ET1OqoXj052OwzVYksY157gjK79tlgpz2qayoSjwyPzcjtCE8Fq8UJp%2FXETHww1Um00MEFcqS&X-Amz-Signature=9abb7e9d3257b96fed28be227ca430a2965b1964090a0ef40e1ca4811cff28d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQR6WXY3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFaK%2BRyCoPv7Nr2Mh42qcxvzJDeG0s0tzJogMk6HJ1m4AiBcbhsbRQ%2FsVJGTUQi%2FA2fcLpKC0o304veVLpuswHu0ZSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMPy8I0SX0GJd7EHPIKtwDTCD%2BOiwsExDQ%2FFcH72phLW3sv6gI5u7C2fBXRv%2FxNyWtJFd1Mz7nhoRC2WMYrWuhVTk8RlUe3XCehOL079B21UzszJO8Xmxh3bXCFo8YGSneirjnAvQEpYB7RnbPDqJFKHZKe26yTOvhO9YUWIzmbOldenFNaegt9J6TWhmolLu1AoaO5KrIHvwY%2BwPb8SeErTZ8XOlyKyxPmHOysviz639y29%2Bm4uvviB5ewSP5VICDGq2UwYbSgYkPuHHuVO%2FsldRz6NrryAcCh1h7zkcNKRWFAcy3FSI09tql1aYYFcNUIDe7igyPTIeoSbgW1bgqokUMb%2Fp8NdjH22SqKrp%2FUWbpSmV65P7kLJfvMsFgv3UF55dD5%2BRt3H0Owm1v0zrV%2BwG83zaVrhROUJyZXwO838Dk6d7zc%2B%2BSqCOfRVy1D7n2ZzCyKCzEeF1tJ8H0uRhQqo%2B532671kZoZ%2B8nDVsnMICL8D3KBgOsS3U7bHd%2FR8ye6WWDWBwy2NYl4WM4%2FpMkErRhZFfnb9YvMX4ZSx98X6SLJa3VXS2xVZayOV3ntQd0ORVtg4v2IIPv57hz37wMPjbh95adXrVW2f5fUdBmOKjETuEBZLMIF%2BL6nm7Avkb86VyGa42GEsp9Ofgw%2FPCswwY6pgG8n%2FEXTShLxw1aYEgnbr%2B6uGUumq51y5x2CdE27ALw4QB4CUOlRv0VksgXDUZMS0u2nv%2FP11jzS9CvBayca0KVU6iwMggH5I5fdMzZl80RUrBJ2bLWE8KzVFOZnSnPYvH24lurEibZzdajv308gF5ET1OqoXj052OwzVYksY157gjK79tlgpz2qayoSjwyPzcjtCE8Fq8UJp%2FXETHww1Um00MEFcqS&X-Amz-Signature=3e95c9246857e57fa3270ae378776a4d8f5cbdca69f0d6279e9283e2dd706d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
