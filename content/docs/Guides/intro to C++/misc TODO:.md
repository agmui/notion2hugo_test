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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEHJA4Y%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNBQCrLhYQDKE%2B%2FU8KpK%2FCapYIUm9mKGJ1e5QeKDYYwIgL798i%2BaPP0Ac1%2BChTng1dDanIthdvmdLiShWlgkb3Uoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLXZkwl7IETEF3oCsCrcAyQvCWtsIUVrJNplEIKh4OCwPzgejIKQRLLIH9mQqRIQuohzXAxEx73bbnb8QAMnh99YrISEXBlMMoSCjoCHfTBvOr9%2BLqqyWH3u05m%2FNceoiJlXMyA%2F%2FKyQt9af7bxMVHRUDGw%2BELk3wVmmFp5xd9BVoKVmDT2Uh8YOncb%2BnD9V5Bzw%2B0axeKBJV1G7KXkbNlnb1uZASy7Hoq4T5ZK9kmuLHLfEZDgowFYd6Bt8L407ZfRcN1qyjeNmJTMg0eu1I7Z%2BcvHZrbrwFtjvds3h%2FOKlND3W6tlA5ogBLLBAKCcMQ5Y0e7ng9rnk3T59n6rkQziWgZptO2D81fA57l3qu0F0bKVLYl9Zvh0KKUB8lCDXWNAXUz4n80WWwjdfUaVMD4wCFgyhDe71vEOUc4clovGCo2xNEAYFeypzmONdCQc4avDBidcUVpSRrXaKU9Ham5Rhaj%2F7dzLCshpzAMH5bugqRr1h187mc44%2FRdkhyHsLXK9TGT5G7KlqOxtiylHgm4AvfRjt2vHt6A7Dxow7pcbKbbe08mlHCsEBcbuvami5taX3vNwDvWWkj5IM%2BWZ7xVR7C0dAUaxoMSjb2AbWgvD0TEBzwq2Fmp2zz%2FoI58YjrS2tOYduwPokCw2gMKXg%2Fr8GOqUBWFmcQLKKROQxbK%2B14tm34jFp5Z1YknNim0HjgVsJiIYHw49vouBD3QpvtYjdbo%2FDp3qaj4HspW1JD5Hx93xspn%2FlbUe%2BJ95MUP7hzEH8u9HQHg1W7%2FlkxHnquOsnG%2B5rTwh%2BVE7s2pb5%2BPufAq75WeMl1hXsBhq%2BEc3kacSRo%2BTYifOML8ipmgUi8DpL%2BxIXVZQhI654I7HzHUreWUvUqGSIcS%2FQ&X-Amz-Signature=9581e626b9833ba9665d53f49f39dc519879afe5df5bb537a95390eb3433d33a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEHJA4Y%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNBQCrLhYQDKE%2B%2FU8KpK%2FCapYIUm9mKGJ1e5QeKDYYwIgL798i%2BaPP0Ac1%2BChTng1dDanIthdvmdLiShWlgkb3Uoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLXZkwl7IETEF3oCsCrcAyQvCWtsIUVrJNplEIKh4OCwPzgejIKQRLLIH9mQqRIQuohzXAxEx73bbnb8QAMnh99YrISEXBlMMoSCjoCHfTBvOr9%2BLqqyWH3u05m%2FNceoiJlXMyA%2F%2FKyQt9af7bxMVHRUDGw%2BELk3wVmmFp5xd9BVoKVmDT2Uh8YOncb%2BnD9V5Bzw%2B0axeKBJV1G7KXkbNlnb1uZASy7Hoq4T5ZK9kmuLHLfEZDgowFYd6Bt8L407ZfRcN1qyjeNmJTMg0eu1I7Z%2BcvHZrbrwFtjvds3h%2FOKlND3W6tlA5ogBLLBAKCcMQ5Y0e7ng9rnk3T59n6rkQziWgZptO2D81fA57l3qu0F0bKVLYl9Zvh0KKUB8lCDXWNAXUz4n80WWwjdfUaVMD4wCFgyhDe71vEOUc4clovGCo2xNEAYFeypzmONdCQc4avDBidcUVpSRrXaKU9Ham5Rhaj%2F7dzLCshpzAMH5bugqRr1h187mc44%2FRdkhyHsLXK9TGT5G7KlqOxtiylHgm4AvfRjt2vHt6A7Dxow7pcbKbbe08mlHCsEBcbuvami5taX3vNwDvWWkj5IM%2BWZ7xVR7C0dAUaxoMSjb2AbWgvD0TEBzwq2Fmp2zz%2FoI58YjrS2tOYduwPokCw2gMKXg%2Fr8GOqUBWFmcQLKKROQxbK%2B14tm34jFp5Z1YknNim0HjgVsJiIYHw49vouBD3QpvtYjdbo%2FDp3qaj4HspW1JD5Hx93xspn%2FlbUe%2BJ95MUP7hzEH8u9HQHg1W7%2FlkxHnquOsnG%2B5rTwh%2BVE7s2pb5%2BPufAq75WeMl1hXsBhq%2BEc3kacSRo%2BTYifOML8ipmgUi8DpL%2BxIXVZQhI654I7HzHUreWUvUqGSIcS%2FQ&X-Amz-Signature=f672a08b69b64699acf7794ee9a49fa523a72e97e4fab39ca9f95b62f8cbf55a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
