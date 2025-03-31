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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHCYPR2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBjEiOmxpJOO2E%2BWSGsDx3EASn1O1dV%2B798JvWgQtFkbAiBOCjtM%2BXoGjx%2Ft%2FI5Gd5x5Yn04OacSQZhueB3RVIKSJSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nAdc%2F2kZxgV3CKoKtwDGuaH5RqTfokfFuZV1jes3Btawg4WnyekpPDWSfyYBJSjKB2iElNVDEL9K4Cvn8YdJ2VxrZsyMaTNDA0un4XDLtnMMFItkwHH8jsec8rJ4SwgrevimDS9fgxS4WZhburoszxRXvS26lYpZC%2BRoTYIxRcD3sBkr9zSVNwVt340Cl5B5uaWUZEn9L3hn1HNM18KO%2BVLnypDVmA6fDXTu6oJ1QS44WX0302LZ1CmaNFnHCW7VuRoF1Zxkpr6Imn%2BC45YEvv0t87bnG14RN%2BsRXTkBHe4GnYC%2F5O9LvI0Gxwi5u%2BzGwGa84oiZhJ8qqoCot6naUQDswqj%2F%2B6GuM3EXvTPilmnGMo%2FdvWuOAIJS0hmth79q4KsPHOaQo5uxgAqdpCYHbz5P9gYrj%2BL0J%2B7ApH2jg97baBZGn74yfIEELlI7RWpmomH9hxPnSksNfImLeHTXCqqYs0JZjczUjQqoK2ok1FAywGE9qCJpBuKMqLQkf3TOuHP%2B2uVmfRTw0OPmSibPBvy5KHBPcfW1BYdwE7ywLYF5A38n3fEBfpiU4wu4UJY18hW68iqGlKqMo%2BamVIRg2efEQG1EHP1hkeocv8Bv%2F85mzFD%2BYa1IyeQzegfD4E67cOqNjdkFXI5oKcw8c6pvwY6pgGvYM0Lor9AqzLGnlQ%2Fy6fKn%2Bh3xmGgO1MLzohnftTVpA0Dh6nzu1kWVXwh0KWxAXsLk8wbwkTT0VP70U%2BXbLKcvfU3QYgXmqFdlqNBSrTgFYugpyLXUkS3jXC4%2Bx0CnbS8%2Bi200Wc1jqqXVw%2FLvTcQbcJjPw%2FcI7sFClNQVGHo6EioaEu6dROFN6Wgp505xTjP%2B6V6K7jpyYCmKNz0Uvw26GiA1XyP&X-Amz-Signature=f392aa5bfb39a53f1c07556103899972bd785bbc4306b6c6889b7defd58c453d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHCYPR2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBjEiOmxpJOO2E%2BWSGsDx3EASn1O1dV%2B798JvWgQtFkbAiBOCjtM%2BXoGjx%2Ft%2FI5Gd5x5Yn04OacSQZhueB3RVIKSJSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nAdc%2F2kZxgV3CKoKtwDGuaH5RqTfokfFuZV1jes3Btawg4WnyekpPDWSfyYBJSjKB2iElNVDEL9K4Cvn8YdJ2VxrZsyMaTNDA0un4XDLtnMMFItkwHH8jsec8rJ4SwgrevimDS9fgxS4WZhburoszxRXvS26lYpZC%2BRoTYIxRcD3sBkr9zSVNwVt340Cl5B5uaWUZEn9L3hn1HNM18KO%2BVLnypDVmA6fDXTu6oJ1QS44WX0302LZ1CmaNFnHCW7VuRoF1Zxkpr6Imn%2BC45YEvv0t87bnG14RN%2BsRXTkBHe4GnYC%2F5O9LvI0Gxwi5u%2BzGwGa84oiZhJ8qqoCot6naUQDswqj%2F%2B6GuM3EXvTPilmnGMo%2FdvWuOAIJS0hmth79q4KsPHOaQo5uxgAqdpCYHbz5P9gYrj%2BL0J%2B7ApH2jg97baBZGn74yfIEELlI7RWpmomH9hxPnSksNfImLeHTXCqqYs0JZjczUjQqoK2ok1FAywGE9qCJpBuKMqLQkf3TOuHP%2B2uVmfRTw0OPmSibPBvy5KHBPcfW1BYdwE7ywLYF5A38n3fEBfpiU4wu4UJY18hW68iqGlKqMo%2BamVIRg2efEQG1EHP1hkeocv8Bv%2F85mzFD%2BYa1IyeQzegfD4E67cOqNjdkFXI5oKcw8c6pvwY6pgGvYM0Lor9AqzLGnlQ%2Fy6fKn%2Bh3xmGgO1MLzohnftTVpA0Dh6nzu1kWVXwh0KWxAXsLk8wbwkTT0VP70U%2BXbLKcvfU3QYgXmqFdlqNBSrTgFYugpyLXUkS3jXC4%2Bx0CnbS8%2Bi200Wc1jqqXVw%2FLvTcQbcJjPw%2FcI7sFClNQVGHo6EioaEu6dROFN6Wgp505xTjP%2B6V6K7jpyYCmKNz0Uvw26GiA1XyP&X-Amz-Signature=c953c295b72c39d13ab2c26d5115f1d4686a31778ea64ae744cce145de161613&X-Amz-SignedHeaders=host&x-id=GetObject)

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
