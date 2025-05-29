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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ONNOGQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC00dQ9DZln6leEWEyoH5NRE8CO%2B6WHtnKp5p%2BvAq8ecQIgcZS9lGh0ppIe6AbgLDocTKC%2BgeLA9nuGp5%2BgEFuUVl8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalxcwgPsTG9VccMircA8LgXgKt20hWT%2BnWzOavjfZs0ZgSvGC5QaqhOeO2ZnV6IP9CTGfo4wEfpHdO7HihBA7y%2Fac4hEsVz8Le8%2FaNRQQ791e9LRUuEHG8XyQDbDGs1jmJ5Hl7LgwqRExh8aiXKN%2BC%2BSh1ZI8c9swprCXZk68WFJSbr2lfhG83%2B88XyV%2BXyC0d1nDSyBQdD6H3Uq0MweDC8pauQonmxRCSGOd0joEvjoGuxkVEYP6efZpmIoDMrigZuCuQLgtOjpqXxouwSXd1sE8CCITlw8Mi26D3%2F0fJE5FvDC%2BIO9utsSE1z8x1CpdOJjGskFqdNqCRJtud1Eg7Y4WiVSF9Lc9LKL7pfRCOB5AjTXlD7%2BXRfyuarnz1zANad61HlIqeoAbZem1A8fXXE94oF1kJT%2BDS8EJ0y7B4ZsuK5ZWb8W%2Bl9bevxLX3o5v55usKYjozDtTiwFC0ZyH5ph9oQcIA3LwOm1MpCluyPwN0o9tNcnb53jmDy06tO6eNIy35vFUkqkB1Mq%2FoysBiZbzGsBo%2B9O4niOe%2FVJhdsz5KIn2YvYzFGuPcrI3LZbLCdORzf%2BSTzikGGxYosPVBa7zJWQNkwKAGMbd0tmQ%2Bk%2FDzLeFhLzDP9XYyfvtQryfxvaAx439cPp9dMKKI38EGOqUBnd76Z5Fe3CYq1ILiTop%2BqDkeqUBAL%2F4YtdjpVigkhYV4OgAMVaiYQsRifccpgdbk1H%2FH4Or7FXcJz%2FQnrSTzA1Z%2BsJEH%2FEYyyJf%2Bc1A9SE%2BF2CjVfkY4vD6LpvOoGt%2BBiOR4yQiwQbhQ4UC4r4Y3iU7hEJtrKYayrQJ9zO6NAbonu9wrAgydrYhcbt9lX5dKxPQ2z2i%2F4yLYMo9VLl5ZUHl4MV0z&X-Amz-Signature=cbe50105ee2a10525550471eb223813335c4f48e439fba48ccd550593a6f2c26&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ONNOGQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC00dQ9DZln6leEWEyoH5NRE8CO%2B6WHtnKp5p%2BvAq8ecQIgcZS9lGh0ppIe6AbgLDocTKC%2BgeLA9nuGp5%2BgEFuUVl8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalxcwgPsTG9VccMircA8LgXgKt20hWT%2BnWzOavjfZs0ZgSvGC5QaqhOeO2ZnV6IP9CTGfo4wEfpHdO7HihBA7y%2Fac4hEsVz8Le8%2FaNRQQ791e9LRUuEHG8XyQDbDGs1jmJ5Hl7LgwqRExh8aiXKN%2BC%2BSh1ZI8c9swprCXZk68WFJSbr2lfhG83%2B88XyV%2BXyC0d1nDSyBQdD6H3Uq0MweDC8pauQonmxRCSGOd0joEvjoGuxkVEYP6efZpmIoDMrigZuCuQLgtOjpqXxouwSXd1sE8CCITlw8Mi26D3%2F0fJE5FvDC%2BIO9utsSE1z8x1CpdOJjGskFqdNqCRJtud1Eg7Y4WiVSF9Lc9LKL7pfRCOB5AjTXlD7%2BXRfyuarnz1zANad61HlIqeoAbZem1A8fXXE94oF1kJT%2BDS8EJ0y7B4ZsuK5ZWb8W%2Bl9bevxLX3o5v55usKYjozDtTiwFC0ZyH5ph9oQcIA3LwOm1MpCluyPwN0o9tNcnb53jmDy06tO6eNIy35vFUkqkB1Mq%2FoysBiZbzGsBo%2B9O4niOe%2FVJhdsz5KIn2YvYzFGuPcrI3LZbLCdORzf%2BSTzikGGxYosPVBa7zJWQNkwKAGMbd0tmQ%2Bk%2FDzLeFhLzDP9XYyfvtQryfxvaAx439cPp9dMKKI38EGOqUBnd76Z5Fe3CYq1ILiTop%2BqDkeqUBAL%2F4YtdjpVigkhYV4OgAMVaiYQsRifccpgdbk1H%2FH4Or7FXcJz%2FQnrSTzA1Z%2BsJEH%2FEYyyJf%2Bc1A9SE%2BF2CjVfkY4vD6LpvOoGt%2BBiOR4yQiwQbhQ4UC4r4Y3iU7hEJtrKYayrQJ9zO6NAbonu9wrAgydrYhcbt9lX5dKxPQ2z2i%2F4yLYMo9VLl5ZUHl4MV0z&X-Amz-Signature=7cecf8c0f5bda7eb70bf25f0b98c81af07ccf61b8241bf4cc28bf793287be299&X-Amz-SignedHeaders=host&x-id=GetObject)

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
