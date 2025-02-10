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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSHVSUY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYlDVCcCtmQc8EZs%2Fn%2FpHgCVK166RmzSw%2FT4UAG8fkaAiB9ThgVIqAcVH32G%2BFYC34f%2FWXrvHSiXGTAhUeTJ4oxzyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuQtqn8Ynlr%2Buv7UKtwDH8Clo81AXDDNFJH%2B9%2BH%2FpB4zhM%2Fdp4NpqC0Tthj62IBeNNFBKpH9OkNTn0uPUGzeSYsFJe8bI%2BQfkVWgrrElVkpElXCyJAMQayI7eRWBCBgWO3bYSMBZ8SrMRBNABIa9SKNLs%2Bd%2FyXKQ4l0wI%2B6XFdJfUDW7d8DFayQH28wvf1dE26%2BtjSDMZZjS%2BX%2BufLrbqlA9L3TwA%2Fu6sTeLRbO%2BXHcg86zXVK22aYPOIUXiRYmQ3%2FWWeSstx1h5%2BaqIP%2BIod17U%2FmbJ2AxnlxaxAFUUCWjofo1cW9i49stiqOaBHfePejT%2Bc3rFYtA30Aq%2Bc1PU4nni0I%2FsM4qqnqQu0USaetCrihqKP6ky74DQcxuzPVuiHHyEP0BVx5%2F2IrEeKJT7Hnmjc%2FpUG8GbK8D2Mh2J6E7G06zH7yyeYlAHy5pGzlMptlcT97tbbLzUNoghbaCFDN8Jdt%2FKHTy3ONALsfJzIbxX705eJEKh%2BxCZlsDZfHFKuOYvlYOdZq7GoOeKt4rzA%2BvKC0FQGHbCfDqe9vhKgyEUDfqUb8taj5rNw98GjEJo%2BSBaoF8rb6Wvqd2tEeYsO3%2BDrcocBrZmNGkh%2Bn%2BZ%2FeTtDmNlZawISs2TqGN1UpzWpFWewZ4K58vUPhMwv7yovQY6pgF8l4nIGG3Dc1S1zkXVymIj7vQxOpv55rTvMUURINHjzsHVGfRJ0%2Fp6XRkX%2BalS7DM1176%2FwcwQzuoiTU%2FBsqh6LAA3s%2BlBWsm6jj1IC5eDoOZKzclFsHk1ZIfcxodsgixas7yvHdIBPz7X2cxWEih0tyImEG728UUIN7eW3hBEnn87IEblFbE8ker099j%2FLQ4XlVXKVJXr9Ob8xI%2FckgnpipBEuIG7&X-Amz-Signature=68ac94d440b504e529bcfe23ae96c1a72c95ab45faad8297d109d4b15230a1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSHVSUY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYlDVCcCtmQc8EZs%2Fn%2FpHgCVK166RmzSw%2FT4UAG8fkaAiB9ThgVIqAcVH32G%2BFYC34f%2FWXrvHSiXGTAhUeTJ4oxzyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuQtqn8Ynlr%2Buv7UKtwDH8Clo81AXDDNFJH%2B9%2BH%2FpB4zhM%2Fdp4NpqC0Tthj62IBeNNFBKpH9OkNTn0uPUGzeSYsFJe8bI%2BQfkVWgrrElVkpElXCyJAMQayI7eRWBCBgWO3bYSMBZ8SrMRBNABIa9SKNLs%2Bd%2FyXKQ4l0wI%2B6XFdJfUDW7d8DFayQH28wvf1dE26%2BtjSDMZZjS%2BX%2BufLrbqlA9L3TwA%2Fu6sTeLRbO%2BXHcg86zXVK22aYPOIUXiRYmQ3%2FWWeSstx1h5%2BaqIP%2BIod17U%2FmbJ2AxnlxaxAFUUCWjofo1cW9i49stiqOaBHfePejT%2Bc3rFYtA30Aq%2Bc1PU4nni0I%2FsM4qqnqQu0USaetCrihqKP6ky74DQcxuzPVuiHHyEP0BVx5%2F2IrEeKJT7Hnmjc%2FpUG8GbK8D2Mh2J6E7G06zH7yyeYlAHy5pGzlMptlcT97tbbLzUNoghbaCFDN8Jdt%2FKHTy3ONALsfJzIbxX705eJEKh%2BxCZlsDZfHFKuOYvlYOdZq7GoOeKt4rzA%2BvKC0FQGHbCfDqe9vhKgyEUDfqUb8taj5rNw98GjEJo%2BSBaoF8rb6Wvqd2tEeYsO3%2BDrcocBrZmNGkh%2Bn%2BZ%2FeTtDmNlZawISs2TqGN1UpzWpFWewZ4K58vUPhMwv7yovQY6pgF8l4nIGG3Dc1S1zkXVymIj7vQxOpv55rTvMUURINHjzsHVGfRJ0%2Fp6XRkX%2BalS7DM1176%2FwcwQzuoiTU%2FBsqh6LAA3s%2BlBWsm6jj1IC5eDoOZKzclFsHk1ZIfcxodsgixas7yvHdIBPz7X2cxWEih0tyImEG728UUIN7eW3hBEnn87IEblFbE8ker099j%2FLQ4XlVXKVJXr9Ob8xI%2FckgnpipBEuIG7&X-Amz-Signature=4f5a9443442ba7c59688aef8c8b192c6e88952729ebd644e478f65ed12865324&X-Amz-SignedHeaders=host&x-id=GetObject)

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
