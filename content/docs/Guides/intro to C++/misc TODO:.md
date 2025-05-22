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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5IHYSG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBB5aotyv3YlFuFBhoc8SZK4MrIQMCbOKvndtelTwPhBAiBrrVDoNjierQSXJ2FWsqVl%2BCEO5ynODQo0r0Uk%2BxpZ6SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJIl%2FE1h3gRXVCW6KtwD%2BvcpA6ExaH01olTf%2B24UfASJ1L%2FTGsbJptBByEmO0PQbsx6PjbK5tyoaHds918gYoPxK6gZcVne%2Bzwtm6cTr8rbyc0zfxHY2zl3ZJjRYKWMHQtw0z%2Fofp0D%2Fbde%2BSn6EaIaWOV4q%2FJK4qtNH6mqGPOo5AtbqX%2B7dxA19eq40%2Fhp9zEfItFMaCHv%2BSjz5cT0vOudV1lvLH%2B8j57nrCGBeGkJZiWzMvsegoVKQJKyc%2BxLb0RhQcDzU7xg42BhxHent68Viag9Pe%2FfwIMO61EPQwL6LJ7d6nKVq9z4QTu9HybOw2TI0DgOrTRIxRkMsXpkpsf42v4%2FaFK0HJD%2FT%2BSpsf7WOT0qdW7B7BgaSVM7o%2ByY91UemfG1xuMlSXA7DjyozWVqmtA7KS0z6J5mIdURktWHjADnFVw5ACSvUyIEfGDGgfmfqqAvzN2xuba14Su%2BYn80M%2BZjcoiK9oFZBAayj4wzN4D7fGoUSPuJ1g3XkH%2BXnLEBdYnn3yCWH5r3pz0vT2SB7u71o3kged8YVzljHj%2F4cPRyflj%2BAO%2F3%2B4YK%2Bqr1VO%2Ba9ExxzdpceRYhhjk4b6WSi7jiJnnGAzgsB3CsgB6hNYTFV2N%2BBN5k8vwouc8nrt3wZhq8%2BuQVUnGIwqMW8wQY6pgFusCEDEGCJiG5gk5615oe14Re%2F19m2HFvq597eIZwJ%2BOf%2BE6r61SCzBRqiazkCOv7%2FiPM2fCDDK0tF%2By6vQlIRdq140UjKNawbblM4zJCjRQrlXVu8bAcC%2FMBdsJlxxooJ2BS7QnqRcldZDsYrHxU4jOfKFcGgon4n46jiJCQXqporIMp9r3jtni0%2B0HBATglF9jJZNKkXAZFxlf9jH85ku%2F5vw6iS&X-Amz-Signature=54332ee7718cca54461e7c4da230b78d77a4fa17e6fb7985cc192ca5cd6263cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5IHYSG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBB5aotyv3YlFuFBhoc8SZK4MrIQMCbOKvndtelTwPhBAiBrrVDoNjierQSXJ2FWsqVl%2BCEO5ynODQo0r0Uk%2BxpZ6SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJIl%2FE1h3gRXVCW6KtwD%2BvcpA6ExaH01olTf%2B24UfASJ1L%2FTGsbJptBByEmO0PQbsx6PjbK5tyoaHds918gYoPxK6gZcVne%2Bzwtm6cTr8rbyc0zfxHY2zl3ZJjRYKWMHQtw0z%2Fofp0D%2Fbde%2BSn6EaIaWOV4q%2FJK4qtNH6mqGPOo5AtbqX%2B7dxA19eq40%2Fhp9zEfItFMaCHv%2BSjz5cT0vOudV1lvLH%2B8j57nrCGBeGkJZiWzMvsegoVKQJKyc%2BxLb0RhQcDzU7xg42BhxHent68Viag9Pe%2FfwIMO61EPQwL6LJ7d6nKVq9z4QTu9HybOw2TI0DgOrTRIxRkMsXpkpsf42v4%2FaFK0HJD%2FT%2BSpsf7WOT0qdW7B7BgaSVM7o%2ByY91UemfG1xuMlSXA7DjyozWVqmtA7KS0z6J5mIdURktWHjADnFVw5ACSvUyIEfGDGgfmfqqAvzN2xuba14Su%2BYn80M%2BZjcoiK9oFZBAayj4wzN4D7fGoUSPuJ1g3XkH%2BXnLEBdYnn3yCWH5r3pz0vT2SB7u71o3kged8YVzljHj%2F4cPRyflj%2BAO%2F3%2B4YK%2Bqr1VO%2Ba9ExxzdpceRYhhjk4b6WSi7jiJnnGAzgsB3CsgB6hNYTFV2N%2BBN5k8vwouc8nrt3wZhq8%2BuQVUnGIwqMW8wQY6pgFusCEDEGCJiG5gk5615oe14Re%2F19m2HFvq597eIZwJ%2BOf%2BE6r61SCzBRqiazkCOv7%2FiPM2fCDDK0tF%2By6vQlIRdq140UjKNawbblM4zJCjRQrlXVu8bAcC%2FMBdsJlxxooJ2BS7QnqRcldZDsYrHxU4jOfKFcGgon4n46jiJCQXqporIMp9r3jtni0%2B0HBATglF9jJZNKkXAZFxlf9jH85ku%2F5vw6iS&X-Amz-Signature=5b14fc76cf703716e0d7b1d5e0fbef997370f2a195f70a2ec542eead8c62c67c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
