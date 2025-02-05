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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WPI7BQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDRlIRseUmSzmN6O1IpD6hMnJuhEp%2FDTKSRb8xLxI86lwIhAPne0y4plDovnacEIJvyjgbzuEGkI26M7VGNqH5vX2PgKv8DCEgQABoMNjM3NDIzMTgzODA1Igx1x%2F2C07tHPENyAhcq3AO%2FYtnWSKhM2u99CFGwFo9j5bYdMTly2ZpwYlewejhNBYWkQoPuwzQMINZnTljB6oTCtj0FzOCrUTmyIRkb1vuBIwUWoND%2BPLavG8kI0pfXA6EXFf0xsA0taH%2FUBNHDuhqmKL9P1BasFA%2F9fHXMU3zEO%2F2W3EkbBRqIyM%2BHZzCREKHt3bi%2Btb49Tak62DLDTcslz7rEf%2BB96v8witgy9igfokmZwgLVrLyyWv2X2z6SoIZijNlPkvAROLOuAGm%2BH0tqI8MEX9vaFZkoSQuhzZPfJYsjdDCXnr%2FQ7P3QDFHtmWjMnbXX6FhQpcegg%2BXlZvaCc7ExeU%2FyJiEwPGcK8fIw6QrXLmNKVwKy3xdj1H5060m%2FpnAiwFYha0NqlmG5H9TDkXGH5U1cC5iH%2F%2B8HszHFV0PE%2BrHQsWnvkO2HB7dRY5%2BVTdNU1rKvfJhhpwzSe%2BaT366V%2BhiPcOV2xxLqBlHfZm7eLr1cBt8FWjPpwR0ifE%2B7UTW4D9RAbWPZjEUPpO8X21p%2F89FNvhuqXYjEUo%2F5QYAUWx1NsRpSh3sObPSuwKtOBZPGgpd81wwlf4bKX9gQv9XlDbOA2YvgjTVFcNMPTZQtYTCGLiOH0zumR3XZ2%2FXqtbzkE8dWDNDYhDD4gY69BjqkAYoZUvcEhq0MJLVQyF72jtdDV6x5%2FmROa8SDqoAwQXFfxIZY6IfuHwN%2Fyqp2Tz481%2FaI0pnPDyeSGaX8xrx4BJ%2BOUIUv9sVx6h%2Fr15sh8qZJm90DKNsE8un3Aa3NsFcyWCjpgnD68FoOHq7kVySVRvZwiaFC2EyccAG0PppAO6jAEVndRyC3rhbrPuOliuY3Y%2BcXAj%2B3K1In4UokmUzNtbWetpnM&X-Amz-Signature=6763406b81027fb225681aa8a19dfcdb358ffa7784b770557ad3f07fe28b6312&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WPI7BQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDRlIRseUmSzmN6O1IpD6hMnJuhEp%2FDTKSRb8xLxI86lwIhAPne0y4plDovnacEIJvyjgbzuEGkI26M7VGNqH5vX2PgKv8DCEgQABoMNjM3NDIzMTgzODA1Igx1x%2F2C07tHPENyAhcq3AO%2FYtnWSKhM2u99CFGwFo9j5bYdMTly2ZpwYlewejhNBYWkQoPuwzQMINZnTljB6oTCtj0FzOCrUTmyIRkb1vuBIwUWoND%2BPLavG8kI0pfXA6EXFf0xsA0taH%2FUBNHDuhqmKL9P1BasFA%2F9fHXMU3zEO%2F2W3EkbBRqIyM%2BHZzCREKHt3bi%2Btb49Tak62DLDTcslz7rEf%2BB96v8witgy9igfokmZwgLVrLyyWv2X2z6SoIZijNlPkvAROLOuAGm%2BH0tqI8MEX9vaFZkoSQuhzZPfJYsjdDCXnr%2FQ7P3QDFHtmWjMnbXX6FhQpcegg%2BXlZvaCc7ExeU%2FyJiEwPGcK8fIw6QrXLmNKVwKy3xdj1H5060m%2FpnAiwFYha0NqlmG5H9TDkXGH5U1cC5iH%2F%2B8HszHFV0PE%2BrHQsWnvkO2HB7dRY5%2BVTdNU1rKvfJhhpwzSe%2BaT366V%2BhiPcOV2xxLqBlHfZm7eLr1cBt8FWjPpwR0ifE%2B7UTW4D9RAbWPZjEUPpO8X21p%2F89FNvhuqXYjEUo%2F5QYAUWx1NsRpSh3sObPSuwKtOBZPGgpd81wwlf4bKX9gQv9XlDbOA2YvgjTVFcNMPTZQtYTCGLiOH0zumR3XZ2%2FXqtbzkE8dWDNDYhDD4gY69BjqkAYoZUvcEhq0MJLVQyF72jtdDV6x5%2FmROa8SDqoAwQXFfxIZY6IfuHwN%2Fyqp2Tz481%2FaI0pnPDyeSGaX8xrx4BJ%2BOUIUv9sVx6h%2Fr15sh8qZJm90DKNsE8un3Aa3NsFcyWCjpgnD68FoOHq7kVySVRvZwiaFC2EyccAG0PppAO6jAEVndRyC3rhbrPuOliuY3Y%2BcXAj%2B3K1In4UokmUzNtbWetpnM&X-Amz-Signature=637b326f9f8092fef18a10aea05d4fc69a124738dc5f81b9281b32d6556b689d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
