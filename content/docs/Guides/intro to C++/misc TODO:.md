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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMY5JY7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCID%2Fzs%2Fmm3wRlPTyXk52YnJS7KURdr0dvYwQ8xGjJSe59AiAfOYKeBtoC7kEKQ5%2BEYBGYLNcJwbvQDebuckEeO9AxUyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM33YCGPRU83TKQEhjKtwDI7dxxmz%2BECVDdk0lPEUAlmIooL1plakEMX5RrWBslX4%2BlEXNChooqO67WXweAKoDlTYAu6%2FPwDnE7xch6nlRDOcJxba2f1cXPEcABwuSO8jhUURtliOhWbVKhzq5N1QGO9qwaChujzWbYJYR8QrBYuXgHV8Vew%2BGfDzX9E1yae4LYGP%2FUqFFn7UMG%2BlJsxk2RetPWv4wkJC0ptYfVs0kXpVW1vwj5uJdQrohrsRmJTzkoNcOAmOi7cZgAjhJxsBeOhzH3r7luzimU5OcfuxZ2vvGOU862ir%2FHgl6D%2BouTQdWsNSRr4hK8CRDi8k0PxkFP%2F87d71TSyHCMo0xysUC53Clmn9mgSbuNKFD5LKTjod9s6HlVJgm5SO7Y1wYVBerFycNxlcbzn6bKYHHJK2omSVOV8AbWYYQCJ4Gr12%2F36Yj50%2BAAYuFUa3kMFPuPx6zqVQI6eeYBnE7jD%2BV6zCrm4R9ZVBcXHbI49xFxCbh%2FAB756a%2FZrU7MimiSGDl28o7cQO1TCF8q2P9VSPcI3TEV7z%2FSizfR6xZ4nMmD9pfXFJPSO1h8nvf%2FMMrVwt451L%2FGnxCRa%2BuFNQT1Fdytunbi3x2Vc6H3jJZ1r%2FH3Pu%2FlnIFEgQaJ83QROxTVh4w09rZwAY6pgHOV%2FV7ve5fT1j0xnZquqHhdVFKwb6pVK434gwRgxbG0xTEAfp%2FXZ7hpx8uT3wc89%2F6XccvM5d9spFEXjmyaUE9IQdOjZNk8n4HEQhtTVDrzbCwPd9UJgk3DvEQ3wJrZJrEJ8o0pfX9l%2FpXz5onerhHALNS9Z9vxKR0ymsPqjAuiuXZewelhaofG0oCRCfxU1TZvKcotBaA%2FPfWa9lCj1WKIwwNwpLg&X-Amz-Signature=a78be44a47e0c7283608de6bbd65af5f76a0e72654217743d315cd16d47e20d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMY5JY7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCID%2Fzs%2Fmm3wRlPTyXk52YnJS7KURdr0dvYwQ8xGjJSe59AiAfOYKeBtoC7kEKQ5%2BEYBGYLNcJwbvQDebuckEeO9AxUyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM33YCGPRU83TKQEhjKtwDI7dxxmz%2BECVDdk0lPEUAlmIooL1plakEMX5RrWBslX4%2BlEXNChooqO67WXweAKoDlTYAu6%2FPwDnE7xch6nlRDOcJxba2f1cXPEcABwuSO8jhUURtliOhWbVKhzq5N1QGO9qwaChujzWbYJYR8QrBYuXgHV8Vew%2BGfDzX9E1yae4LYGP%2FUqFFn7UMG%2BlJsxk2RetPWv4wkJC0ptYfVs0kXpVW1vwj5uJdQrohrsRmJTzkoNcOAmOi7cZgAjhJxsBeOhzH3r7luzimU5OcfuxZ2vvGOU862ir%2FHgl6D%2BouTQdWsNSRr4hK8CRDi8k0PxkFP%2F87d71TSyHCMo0xysUC53Clmn9mgSbuNKFD5LKTjod9s6HlVJgm5SO7Y1wYVBerFycNxlcbzn6bKYHHJK2omSVOV8AbWYYQCJ4Gr12%2F36Yj50%2BAAYuFUa3kMFPuPx6zqVQI6eeYBnE7jD%2BV6zCrm4R9ZVBcXHbI49xFxCbh%2FAB756a%2FZrU7MimiSGDl28o7cQO1TCF8q2P9VSPcI3TEV7z%2FSizfR6xZ4nMmD9pfXFJPSO1h8nvf%2FMMrVwt451L%2FGnxCRa%2BuFNQT1Fdytunbi3x2Vc6H3jJZ1r%2FH3Pu%2FlnIFEgQaJ83QROxTVh4w09rZwAY6pgHOV%2FV7ve5fT1j0xnZquqHhdVFKwb6pVK434gwRgxbG0xTEAfp%2FXZ7hpx8uT3wc89%2F6XccvM5d9spFEXjmyaUE9IQdOjZNk8n4HEQhtTVDrzbCwPd9UJgk3DvEQ3wJrZJrEJ8o0pfX9l%2FpXz5onerhHALNS9Z9vxKR0ymsPqjAuiuXZewelhaofG0oCRCfxU1TZvKcotBaA%2FPfWa9lCj1WKIwwNwpLg&X-Amz-Signature=e1180f8927670b396db1fe4bb3b817764539e52dd1787609ddae623ec2c27f41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
