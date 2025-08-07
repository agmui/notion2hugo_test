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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM5QIM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFGs7ZxbTT6HeNpzQ7opYpJnKWp8M7JrjSP3NsKv631eAiB7hWDmDQHHVlexb%2BjEBF9dUB8fyNmwKsUz9imgkQjQxCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92XLSk8sW6Ujp0pnKtwDhjIjSg6p0TqjO7q2R9SiGRojG7enbCv49hmmci5AzVV2xMi1ZW9sfJWZ3x4Gco%2FarxZ8KxI6ft%2BBbEj%2FkPzt13NKJk%2FElTHNxS8m4KRTTKIdxx%2BrTBERqyC6bQc9BuxD47XDhozufd1qiUnAYjOaJ8RR4rm%2Bbmw5yklEJqKiCfw0tGXO%2FXeVg8C0eUjh9iOjNhojtBRfu9ZQQ8Auos9IHed%2FBo%2FyRcm%2Fcwwg40fyXRNQLZotwD9heJ0scxuiVk4pMUa3Cr%2FGZf9wUU%2FUrgn9sQU3DYu8IcMsUyi7twlQKVifJXxpvOSMH1mbOL39pv3GgbdS%2Bpm84MnAllYl3q%2BPxRaozsnnLFRz39Hz%2BKmkvLn91NHBnJbdZ64xsXNZtyf7l0GglewfOs3sWsY%2Bzwew815IaRdBC95E0TeGI01tVyfUiSdpjtlLMorUB5cApX3PiAvhC1D%2Bh7qSaramYFkwyNj8ZCO4D6pXWrx9gEOZ8w%2BUMrQ8KT%2FEB5JVuIzTrgGaF0udMVit1IlwY96qyXyoHM9ryqz5deDxqXHLByETdWi%2B56wvIkP8f9%2FUCLaZhM%2BjjIWrBx8O6vC%2FPFcX%2BKvmRzD26lB%2BnLsJkJl%2B8fjYBdgQxh7iPIwvZ%2BZLRqEwiZTUxAY6pgGbh7FfhUMMZzJfs%2BPXtClhQ7vwazQsGp4EJf4mXhdd2ksOy87OdzzCaMwfSwdLTGVCtKdfeuCvQMuegDm9p8xFA04jNdubQbSCdsr65UlF9EPATUVRc8MFNAvbAzvdgbkBRu6f5%2Fdf2CaTEe%2Bh4ozeWRGrkTGO64AXC09kxvi5nP1EdGRS14otAbiaeGnadGrnEYMLucPl2QVn7dcauT6T2OjWPBjs&X-Amz-Signature=d2eb42c527dc939e99b00f2432ff09f18192021cc1585bc18598f0ac1124c81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQM5QIM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFGs7ZxbTT6HeNpzQ7opYpJnKWp8M7JrjSP3NsKv631eAiB7hWDmDQHHVlexb%2BjEBF9dUB8fyNmwKsUz9imgkQjQxCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92XLSk8sW6Ujp0pnKtwDhjIjSg6p0TqjO7q2R9SiGRojG7enbCv49hmmci5AzVV2xMi1ZW9sfJWZ3x4Gco%2FarxZ8KxI6ft%2BBbEj%2FkPzt13NKJk%2FElTHNxS8m4KRTTKIdxx%2BrTBERqyC6bQc9BuxD47XDhozufd1qiUnAYjOaJ8RR4rm%2Bbmw5yklEJqKiCfw0tGXO%2FXeVg8C0eUjh9iOjNhojtBRfu9ZQQ8Auos9IHed%2FBo%2FyRcm%2Fcwwg40fyXRNQLZotwD9heJ0scxuiVk4pMUa3Cr%2FGZf9wUU%2FUrgn9sQU3DYu8IcMsUyi7twlQKVifJXxpvOSMH1mbOL39pv3GgbdS%2Bpm84MnAllYl3q%2BPxRaozsnnLFRz39Hz%2BKmkvLn91NHBnJbdZ64xsXNZtyf7l0GglewfOs3sWsY%2Bzwew815IaRdBC95E0TeGI01tVyfUiSdpjtlLMorUB5cApX3PiAvhC1D%2Bh7qSaramYFkwyNj8ZCO4D6pXWrx9gEOZ8w%2BUMrQ8KT%2FEB5JVuIzTrgGaF0udMVit1IlwY96qyXyoHM9ryqz5deDxqXHLByETdWi%2B56wvIkP8f9%2FUCLaZhM%2BjjIWrBx8O6vC%2FPFcX%2BKvmRzD26lB%2BnLsJkJl%2B8fjYBdgQxh7iPIwvZ%2BZLRqEwiZTUxAY6pgGbh7FfhUMMZzJfs%2BPXtClhQ7vwazQsGp4EJf4mXhdd2ksOy87OdzzCaMwfSwdLTGVCtKdfeuCvQMuegDm9p8xFA04jNdubQbSCdsr65UlF9EPATUVRc8MFNAvbAzvdgbkBRu6f5%2Fdf2CaTEe%2Bh4ozeWRGrkTGO64AXC09kxvi5nP1EdGRS14otAbiaeGnadGrnEYMLucPl2QVn7dcauT6T2OjWPBjs&X-Amz-Signature=2a2376eded39aa1b13a0a0604b413656839fc892c258b26a53af06925b2d688c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
