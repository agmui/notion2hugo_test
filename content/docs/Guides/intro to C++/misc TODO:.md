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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVT2OLD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID7PWEELbKX9X2GsboiwxNTDka2j7fWL5%2BGW4dthrO31AiBTmEr2kdR2QDvy7W%2BcbFDOKjWZJLeFC707RPxZC3lQWCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzHxjDerOzTaALTukKtwDYFjpbR4%2FJU6VpitMiD8VaRlvElGIGOqbEwQzL2EsbU2XnYdkr5WjFwHsRS2OPH9NAX4zy%2F4xfbNCj4l5Vs%2FdK51sCQNv5PA396xEUic3cRJR%2Bz1RA7dLaH0G57CX%2BII8VkGMQbiOeQonx%2BdXhUZTQWIHqCoj6LI3euEOEPno5Gl9YXtcVj%2BhN4iNWCh8AylX0%2F8E56hqynfL1ekZQKUbwWrS0VXI2ffYsadDKkR9CNauC7rBUZmvVkSh9D2cWfzYNZoy0AoYkqf03kBMNIlO1bLFUHGFxTnzBxlf%2Fkjjf6uxY0tvwc6YK2LccVadGEZKx5fQb%2BT9YpbQScATTtm4jNv4eLKiz4NHc8ZbsKDFZBnhL%2FLW9yvKLAdLs9xRxhEjjUXCwBZSctkBl4KPJs0xgMaB0uyyqINITuVedAA8cU6kHMdBRa5VyjH%2BBP0icw%2BXVGAo3oA%2BZG%2Bl2dETsjTSd90J3W6MWwB3e7GQeRCrxg%2FD7nvATqAjk8bvsyO7Wu7WrIGz%2Fs61232nt42CNdZXwybrwokqPPrYHUtWN8xMAdfte9v9oiPSgAy60HS1kFeahv%2FFws7hHOG8QyCbkWVAFeMf68F6pgSPnmmp4EZOJ%2FC%2FqXOJ6IqK57gLgiMwiuizvwY6pgHjMRoj6mqiZR6ED8s%2B5S4fjubG%2Fryxbpynu4cEUYHcy6jW43zrUF3ZUmszNgpZYqUn8UvHTdYJg4JWSP6A22fCA2b5HSB7e1m%2F1AU5ytQKk9MyPj4hq03p7%2BbZaR3KcP9A5dsCg9Ohnuqzrq%2BE58RqrwRuywuqX88aHL8UvMK%2FYRq1p87Lh0lrd%2FUxq4KA%2Fiv%2FxHdlnq1yVzmtJC%2BQDM8A3W5XBL4u&X-Amz-Signature=4043d9fa8f8304b0334c61b39a38cdcf669fd4d99ced2ce3cdfc0d7e19c13339&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVT2OLD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID7PWEELbKX9X2GsboiwxNTDka2j7fWL5%2BGW4dthrO31AiBTmEr2kdR2QDvy7W%2BcbFDOKjWZJLeFC707RPxZC3lQWCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzHxjDerOzTaALTukKtwDYFjpbR4%2FJU6VpitMiD8VaRlvElGIGOqbEwQzL2EsbU2XnYdkr5WjFwHsRS2OPH9NAX4zy%2F4xfbNCj4l5Vs%2FdK51sCQNv5PA396xEUic3cRJR%2Bz1RA7dLaH0G57CX%2BII8VkGMQbiOeQonx%2BdXhUZTQWIHqCoj6LI3euEOEPno5Gl9YXtcVj%2BhN4iNWCh8AylX0%2F8E56hqynfL1ekZQKUbwWrS0VXI2ffYsadDKkR9CNauC7rBUZmvVkSh9D2cWfzYNZoy0AoYkqf03kBMNIlO1bLFUHGFxTnzBxlf%2Fkjjf6uxY0tvwc6YK2LccVadGEZKx5fQb%2BT9YpbQScATTtm4jNv4eLKiz4NHc8ZbsKDFZBnhL%2FLW9yvKLAdLs9xRxhEjjUXCwBZSctkBl4KPJs0xgMaB0uyyqINITuVedAA8cU6kHMdBRa5VyjH%2BBP0icw%2BXVGAo3oA%2BZG%2Bl2dETsjTSd90J3W6MWwB3e7GQeRCrxg%2FD7nvATqAjk8bvsyO7Wu7WrIGz%2Fs61232nt42CNdZXwybrwokqPPrYHUtWN8xMAdfte9v9oiPSgAy60HS1kFeahv%2FFws7hHOG8QyCbkWVAFeMf68F6pgSPnmmp4EZOJ%2FC%2FqXOJ6IqK57gLgiMwiuizvwY6pgHjMRoj6mqiZR6ED8s%2B5S4fjubG%2Fryxbpynu4cEUYHcy6jW43zrUF3ZUmszNgpZYqUn8UvHTdYJg4JWSP6A22fCA2b5HSB7e1m%2F1AU5ytQKk9MyPj4hq03p7%2BbZaR3KcP9A5dsCg9Ohnuqzrq%2BE58RqrwRuywuqX88aHL8UvMK%2FYRq1p87Lh0lrd%2FUxq4KA%2Fiv%2FxHdlnq1yVzmtJC%2BQDM8A3W5XBL4u&X-Amz-Signature=abc5ea1c94a7d2560697b448fecfeaef341c795177d02b392e3be1c9375d13d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
