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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTQ6YDJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRiVpJOHfJ3HHedhD97jJ9ud7XkspP9rQokSAPhm%2BgAiEAn%2Fi8jUHGWS0r2N6vx9Rr1SIIlv%2BLCiOf6Z0WwFkONUEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOodzEXScqbbXZ3qFyrcA%2By%2B%2BvOv4IFaJKSS8lPUxqlNk3f7CVDiace3S4ZJuexIypjqAf%2FWV3H9yaq29u4bQoV1dhJRb4%2B5buc%2Bh4OhfhWclbuWciJIBmKlQfQILIzEdNHJ453Ge1lUecYVe5cYeEkcYoown7ciMsuiq%2BUcEa7kicgF9bCsKO%2FauO5jC14YcATJC5b0K14mBsX4PxiXnME%2BaCVVn6ifXLpDLV4MBB7QEJqcWZeamVWXmti9A5d3oeL%2FB%2BYjZ0gDH74uCrZTV88uX1iVLeXzjNV7oTYCA2%2FyX6oUr0hvM4DEJNch7SfQtq93avZUpBMZsIHGLXbSUzxplwd8jdmkRg8845keTyxtz0hsfqqBmLtQ82fdOqRfGqdhh6klYt84hY3IYeUtsT%2FVQtXc7qhAnQixaH6mIxb2CNW%2B35ojF0RBOEjGXIcTTnu3WmrZVX3OGPN8bW2htqV5FoB%2BeJ0F4f%2B9FKaaVGJ2U7YRq9EJm83nI2AD9klYZFUGXkb%2BCbmhpBtq0aIC%2BKcz9AuHjh1mLGF5KlyJwhcfSYTTeXBPf59qxPA0xVwp3O%2FFQtRdj9yCXTTdxA3NJ5O6v8N61W%2BPac2D1H%2FPY2hpuh1qAtBwzNq%2Bcr3rJi9IRvofxJakMD7JxK2RMPLq670GOqUBF5C%2BGQ1qLD5n5%2BPr%2FQoWgMo1p358nu5EAa81nMb5Kt87xix%2BE40QWXj25NqgpA2EJ5IUU3NQi65dBwhTP1uJADVy9cPELJUoTTwH4LF61vdyN5qnt91oWCflnK3BWPlikOh8CQ2%2BwLNdWz6PJYj5Tuid3KmgXk%2BjG9bV6I4VYuEvGOXaqpVOZ0B3%2BSA7iRFBCqwkqszihvTvoFU682TARiNhHm4T&X-Amz-Signature=b5afb61e6c87f29c688ec8bfaf6f86e7325add0449c4f6e6f0f37c8faf2fb134&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTQ6YDJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRiVpJOHfJ3HHedhD97jJ9ud7XkspP9rQokSAPhm%2BgAiEAn%2Fi8jUHGWS0r2N6vx9Rr1SIIlv%2BLCiOf6Z0WwFkONUEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOodzEXScqbbXZ3qFyrcA%2By%2B%2BvOv4IFaJKSS8lPUxqlNk3f7CVDiace3S4ZJuexIypjqAf%2FWV3H9yaq29u4bQoV1dhJRb4%2B5buc%2Bh4OhfhWclbuWciJIBmKlQfQILIzEdNHJ453Ge1lUecYVe5cYeEkcYoown7ciMsuiq%2BUcEa7kicgF9bCsKO%2FauO5jC14YcATJC5b0K14mBsX4PxiXnME%2BaCVVn6ifXLpDLV4MBB7QEJqcWZeamVWXmti9A5d3oeL%2FB%2BYjZ0gDH74uCrZTV88uX1iVLeXzjNV7oTYCA2%2FyX6oUr0hvM4DEJNch7SfQtq93avZUpBMZsIHGLXbSUzxplwd8jdmkRg8845keTyxtz0hsfqqBmLtQ82fdOqRfGqdhh6klYt84hY3IYeUtsT%2FVQtXc7qhAnQixaH6mIxb2CNW%2B35ojF0RBOEjGXIcTTnu3WmrZVX3OGPN8bW2htqV5FoB%2BeJ0F4f%2B9FKaaVGJ2U7YRq9EJm83nI2AD9klYZFUGXkb%2BCbmhpBtq0aIC%2BKcz9AuHjh1mLGF5KlyJwhcfSYTTeXBPf59qxPA0xVwp3O%2FFQtRdj9yCXTTdxA3NJ5O6v8N61W%2BPac2D1H%2FPY2hpuh1qAtBwzNq%2Bcr3rJi9IRvofxJakMD7JxK2RMPLq670GOqUBF5C%2BGQ1qLD5n5%2BPr%2FQoWgMo1p358nu5EAa81nMb5Kt87xix%2BE40QWXj25NqgpA2EJ5IUU3NQi65dBwhTP1uJADVy9cPELJUoTTwH4LF61vdyN5qnt91oWCflnK3BWPlikOh8CQ2%2BwLNdWz6PJYj5Tuid3KmgXk%2BjG9bV6I4VYuEvGOXaqpVOZ0B3%2BSA7iRFBCqwkqszihvTvoFU682TARiNhHm4T&X-Amz-Signature=145c3c21cd3f13c54cf22e23009193588e5cd924ad479b7a007231cbfb4be537&X-Amz-SignedHeaders=host&x-id=GetObject)

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
