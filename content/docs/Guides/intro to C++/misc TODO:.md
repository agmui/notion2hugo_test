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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN342KF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOBjDT8fAcvzWWy82gEjPpCap5VMLSS12zJGdj1SFxlwIhALQftySrLPbUoAV3gXxWwfGHTrhaTCrGmSgMCVNLjEAGKv8DCEwQABoMNjM3NDIzMTgzODA1Igzy7aaNu4l9vvPplJEq3AOgIiqhBtN74QJW%2FJgB6eWgU4SFONyBFEyapmN62jVG%2F6gFe%2BYW%2FLhe8czwy2jFJN3Ai9KXYytQCeusN3rn%2F%2BU4e90NrFKm2dZs%2BXAuthXWBVoeHRuqS73HO09rMR3jWmdP090A80hOVRreHK7xM9AtmtlR6wRj1wyqqwAhrter%2B2JHJLqWAUTRUXbG5haNSDWB1ero%2B%2BXSfm4aDSJ0JRsbx74362ss9O2Xq5hrNLvU%2BLfvAZM0lE46Gxe3DWX0U%2BmEmyIJu0tf%2B6BMffZD9zR%2BW0%2BRhG1iLh3EJmiEr5N8%2FPAiA2i8WjRClSiu1er674r2hkrSzglqvw6iopEjX6%2F9zP5hMCy%2FXybDG7JvjdRCl4QNVmUuHVblr2eVpFptz%2Bpod%2FOBvptxueyaleOXSA5VC5vPOLMmikJDMMOnjRs15yfcTUfD0N5dfkHD3Nvqio5msQw%2BUF%2B4W3O3Bd%2FE1hJGkFWNda2nWLjp9in172ryEY0i%2B62DN5hJ9HWN9XuaqstVPsa6x25IKIX7tvLgYdJ2DUO0N1247kJXCcjABRlQubdcjjzfTTX%2BIoSHAD%2BObzLr5QZo1hhmySyp74QQMKCtHQCIS5v15aZDB0KyDzxI22wlRwULO%2BXduZW6%2BTCYnsu%2FBjqkAT%2B5c1oakwVQatR%2FzrPN7R%2B44qi48LYLH6wi2tFhMjwglHna7nODz9OqC65FuaDQ7uRH%2BY7ZPlRJEARMj3fKUluhEJarQGk%2BgXI15Sjy%2FsGmZXNWRSIc8gW%2F4JeszA4o3u%2Fze9X65shnZl%2B5NBBhsyO1tAPrvdm9c3YkuQRLjLxJxMz%2Br0UU2zbG2Ju4ceuPsKvaKhFtFPh%2Bv7MXBzKKVkTy6%2Fk9&X-Amz-Signature=30a4a7b28eda4b07d1fb529690d60120e176d5f79e0c936c897dbe52574ba246&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN342KF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOBjDT8fAcvzWWy82gEjPpCap5VMLSS12zJGdj1SFxlwIhALQftySrLPbUoAV3gXxWwfGHTrhaTCrGmSgMCVNLjEAGKv8DCEwQABoMNjM3NDIzMTgzODA1Igzy7aaNu4l9vvPplJEq3AOgIiqhBtN74QJW%2FJgB6eWgU4SFONyBFEyapmN62jVG%2F6gFe%2BYW%2FLhe8czwy2jFJN3Ai9KXYytQCeusN3rn%2F%2BU4e90NrFKm2dZs%2BXAuthXWBVoeHRuqS73HO09rMR3jWmdP090A80hOVRreHK7xM9AtmtlR6wRj1wyqqwAhrter%2B2JHJLqWAUTRUXbG5haNSDWB1ero%2B%2BXSfm4aDSJ0JRsbx74362ss9O2Xq5hrNLvU%2BLfvAZM0lE46Gxe3DWX0U%2BmEmyIJu0tf%2B6BMffZD9zR%2BW0%2BRhG1iLh3EJmiEr5N8%2FPAiA2i8WjRClSiu1er674r2hkrSzglqvw6iopEjX6%2F9zP5hMCy%2FXybDG7JvjdRCl4QNVmUuHVblr2eVpFptz%2Bpod%2FOBvptxueyaleOXSA5VC5vPOLMmikJDMMOnjRs15yfcTUfD0N5dfkHD3Nvqio5msQw%2BUF%2B4W3O3Bd%2FE1hJGkFWNda2nWLjp9in172ryEY0i%2B62DN5hJ9HWN9XuaqstVPsa6x25IKIX7tvLgYdJ2DUO0N1247kJXCcjABRlQubdcjjzfTTX%2BIoSHAD%2BObzLr5QZo1hhmySyp74QQMKCtHQCIS5v15aZDB0KyDzxI22wlRwULO%2BXduZW6%2BTCYnsu%2FBjqkAT%2B5c1oakwVQatR%2FzrPN7R%2B44qi48LYLH6wi2tFhMjwglHna7nODz9OqC65FuaDQ7uRH%2BY7ZPlRJEARMj3fKUluhEJarQGk%2BgXI15Sjy%2FsGmZXNWRSIc8gW%2F4JeszA4o3u%2Fze9X65shnZl%2B5NBBhsyO1tAPrvdm9c3YkuQRLjLxJxMz%2Br0UU2zbG2Ju4ceuPsKvaKhFtFPh%2Bv7MXBzKKVkTy6%2Fk9&X-Amz-Signature=9042bca7c1a30b2eb086900249639100d6ee9a50f338de96d8c225cdcb4051f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
