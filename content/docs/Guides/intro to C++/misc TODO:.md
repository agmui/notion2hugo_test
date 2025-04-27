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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBBXE3Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRGqdx7svZMVrR3E3wB0yqj28daWyPFhRJSqd%2F4QetwIhAKr01BZbI7%2FVaU%2BtaB4lfymKOY8L7mx26EbaD4pf2rKuKv8DCFYQABoMNjM3NDIzMTgzODA1IgzQMk09U7cB6gAAVIUq3APZRzdiO9qYQ6cMPJYLHI2E5g2pOSpVXbTL2m7JKyzn98MIrFhPa0CWIUAzBQ0nnbsQ6zjxJ2TO33VNoBKChZ1MsVqyJRWZqXZ7U3P4y8GHw8%2Bjn0PbP%2BKgF8nGdIIP7dCkHk2u8znjImf%2FnkAXO%2B2RiYTk65mHukheYCv4rGzL7JtqrLtF9JlXGrR33Zfg6cOc5oT40w5z0Tt0y5jkardWikfBfgs0sxpv6ddbzO7L3RN7IoIyR53hzq6BGVcJ26HrigU0xBGJy4ZHb2i%2FOKZyJOYw7NneR2nw7PDgAkO6Gjsr9zdx6En7n5uW23bZ4k1e4DnKGA7mcyA3vVAgNCkq13Q3qRiqzXmClcVhZIAnC8ZTmp3DlMjmCN2%2Ba0B%2F6OU%2Bwe%2BOXzDghO2LZXgGDhxcjm1x75oOtEJY2uQ58hZqokz3MltiDx2LjYGuYYG2A7b6VER%2Fn%2BW3gZ6pM7aypzcrpc3IlSjT45X3nL%2BW%2F9ugzVtdOujqACmBKxkV58gH4tHPERLCRIV%2FeWHOv2kTNNRi1yeQzfH2ka4izayokXHdyEtGtHEwojCuVZNedrgtaajMNb5%2FZ%2BrwvgkfmHd7W47mRYQJQ4Sn9UgWv2MYGKv5fnjWXDSH63L%2BADKQOTDq7LbABjqkAXhW84eC4eNs4pihqr5ud9MeaK9ETBF1TCqBR67flRmZr26uISg2L46Rqn82d9MxiuzdLzmiaIJO4V36GOts%2FCFBG5vvYbz7F0nDoWGLzdV7syFRCiYtg3OLFgSyydn5t4P724jbbH6cxThc8BEv7mhwR2YsmsbEcivV%2Fqqzd8S0qbtbRwj5rU9ZgOOnQ3NaCBxYEfcL2GopJ4bIbbKjcjSx1H17&X-Amz-Signature=732f2a3766cd3348ee413eb23ae9bbd8ef5a8a5891403cb36574a4e97391bb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBBXE3Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRGqdx7svZMVrR3E3wB0yqj28daWyPFhRJSqd%2F4QetwIhAKr01BZbI7%2FVaU%2BtaB4lfymKOY8L7mx26EbaD4pf2rKuKv8DCFYQABoMNjM3NDIzMTgzODA1IgzQMk09U7cB6gAAVIUq3APZRzdiO9qYQ6cMPJYLHI2E5g2pOSpVXbTL2m7JKyzn98MIrFhPa0CWIUAzBQ0nnbsQ6zjxJ2TO33VNoBKChZ1MsVqyJRWZqXZ7U3P4y8GHw8%2Bjn0PbP%2BKgF8nGdIIP7dCkHk2u8znjImf%2FnkAXO%2B2RiYTk65mHukheYCv4rGzL7JtqrLtF9JlXGrR33Zfg6cOc5oT40w5z0Tt0y5jkardWikfBfgs0sxpv6ddbzO7L3RN7IoIyR53hzq6BGVcJ26HrigU0xBGJy4ZHb2i%2FOKZyJOYw7NneR2nw7PDgAkO6Gjsr9zdx6En7n5uW23bZ4k1e4DnKGA7mcyA3vVAgNCkq13Q3qRiqzXmClcVhZIAnC8ZTmp3DlMjmCN2%2Ba0B%2F6OU%2Bwe%2BOXzDghO2LZXgGDhxcjm1x75oOtEJY2uQ58hZqokz3MltiDx2LjYGuYYG2A7b6VER%2Fn%2BW3gZ6pM7aypzcrpc3IlSjT45X3nL%2BW%2F9ugzVtdOujqACmBKxkV58gH4tHPERLCRIV%2FeWHOv2kTNNRi1yeQzfH2ka4izayokXHdyEtGtHEwojCuVZNedrgtaajMNb5%2FZ%2BrwvgkfmHd7W47mRYQJQ4Sn9UgWv2MYGKv5fnjWXDSH63L%2BADKQOTDq7LbABjqkAXhW84eC4eNs4pihqr5ud9MeaK9ETBF1TCqBR67flRmZr26uISg2L46Rqn82d9MxiuzdLzmiaIJO4V36GOts%2FCFBG5vvYbz7F0nDoWGLzdV7syFRCiYtg3OLFgSyydn5t4P724jbbH6cxThc8BEv7mhwR2YsmsbEcivV%2Fqqzd8S0qbtbRwj5rU9ZgOOnQ3NaCBxYEfcL2GopJ4bIbbKjcjSx1H17&X-Amz-Signature=0cad976c602cf1708ef82b284f0821999855e93011b8f348844c9df6c7e73d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
