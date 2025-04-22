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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CUK4GQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICNPGuvGCNwvD0kbHLwcjc6gQuI9OzUrdP3MinuNQJ2dAiEAhkTzZuS4vyFSWgJcHQrcwYU0zg942BDwms9pDyeGDtcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPldo%2BAc2bL6xqivJSrcA%2BC%2FPqx0NfLe6ZCXfDn0kN3c5%2F6BO2UDiUENSmn3wmRNjBHELAOPWWNUBHy3PDRTEhH5bQXzkaO5SVlQGFGwFvZSHQAH%2Bub3SPYnFQGOThwkDKcEfWtgemRYI95F6r%2FVGzGMx3g9KuZ3SYXhePeZ%2BqiCp1vgcPx6dLuEIG0pRJByV43oYazqRfXVb7dawg%2FFHB2uNYjs%2BcxVo9QEwV6K0gnPuJ3RUfz9eosIu0D7glgbx9SFZCuHCG3I0DitvHiQOrvftAMRdPIFiJ7aOONl%2BeSrYRCSDirbjVpa3i3DZJ1xxkcVzcjTtaTc2sUB%2F46mL6yu4UCH%2BsQR7puNTC0FawYbVOGWlvMg8zdZDJV2SY8npmUWUFFbSSG9WweZi817CQnsf9jw5WuNp7pKNWwkLYLdYHA7tyETtyQ3Y6SL4OxLbFbqFuhbIMoXAfHiz0wXTPZpMR3B1%2FSUOtNHeJGIQ9FEKwhIgEJhWyG8SuoOuRI0xJRNMLktMMHnt43rXw93tztwuh0KXsDkMsPS92J2CXrTtQfppQRvS6%2FDyH801B9QtfAdAZUyOvY5TYv6czRJC0gio60tAGAt8FFMl4XQjB42N8UjFUOtC%2Bh7O8wzdOigzqj2AZPJ6uOLWZl5MLiqnsAGOqUBP1NU758SzZQCurvLGOZtRS4swSjUXKKgeRwZAwJxlm6IEFrNmTA9wAg6HKdGX9yv0x%2BtwAI%2FmowR56iYWsrH0FDKBUrKREgJD%2FrZLKAVjhPTvTeYMBvr4%2F8cFVrAUQAHqrMwC2RoWMT18Omk219DjcJl4njbaas09Vq3Xdsuufd%2BGyh1sMp2lTXKhQlgtM8ZyFS7c5JREYPXDuXgvCDqfsSHgu9k&X-Amz-Signature=fc9dca86cbac592fb22058d3e1ca13c50e59f286b619e962e1c6dacdbf148f01&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CUK4GQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICNPGuvGCNwvD0kbHLwcjc6gQuI9OzUrdP3MinuNQJ2dAiEAhkTzZuS4vyFSWgJcHQrcwYU0zg942BDwms9pDyeGDtcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPldo%2BAc2bL6xqivJSrcA%2BC%2FPqx0NfLe6ZCXfDn0kN3c5%2F6BO2UDiUENSmn3wmRNjBHELAOPWWNUBHy3PDRTEhH5bQXzkaO5SVlQGFGwFvZSHQAH%2Bub3SPYnFQGOThwkDKcEfWtgemRYI95F6r%2FVGzGMx3g9KuZ3SYXhePeZ%2BqiCp1vgcPx6dLuEIG0pRJByV43oYazqRfXVb7dawg%2FFHB2uNYjs%2BcxVo9QEwV6K0gnPuJ3RUfz9eosIu0D7glgbx9SFZCuHCG3I0DitvHiQOrvftAMRdPIFiJ7aOONl%2BeSrYRCSDirbjVpa3i3DZJ1xxkcVzcjTtaTc2sUB%2F46mL6yu4UCH%2BsQR7puNTC0FawYbVOGWlvMg8zdZDJV2SY8npmUWUFFbSSG9WweZi817CQnsf9jw5WuNp7pKNWwkLYLdYHA7tyETtyQ3Y6SL4OxLbFbqFuhbIMoXAfHiz0wXTPZpMR3B1%2FSUOtNHeJGIQ9FEKwhIgEJhWyG8SuoOuRI0xJRNMLktMMHnt43rXw93tztwuh0KXsDkMsPS92J2CXrTtQfppQRvS6%2FDyH801B9QtfAdAZUyOvY5TYv6czRJC0gio60tAGAt8FFMl4XQjB42N8UjFUOtC%2Bh7O8wzdOigzqj2AZPJ6uOLWZl5MLiqnsAGOqUBP1NU758SzZQCurvLGOZtRS4swSjUXKKgeRwZAwJxlm6IEFrNmTA9wAg6HKdGX9yv0x%2BtwAI%2FmowR56iYWsrH0FDKBUrKREgJD%2FrZLKAVjhPTvTeYMBvr4%2F8cFVrAUQAHqrMwC2RoWMT18Omk219DjcJl4njbaas09Vq3Xdsuufd%2BGyh1sMp2lTXKhQlgtM8ZyFS7c5JREYPXDuXgvCDqfsSHgu9k&X-Amz-Signature=e3450aef5e5f3c220b5ea8e926f01feb28a6eff624778ef88a39c7bdbd7ffe21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
