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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIC4GJX3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxM1m63qp8RZiiZqbrCqm%2BVGNyWkLuR8RZua5PqcXygIhAO%2FZiI7NYYdmis6DatHDy%2Bv%2FXnQlcOxOl%2Bk%2BU6BjquAwKv8DCCAQABoMNjM3NDIzMTgzODA1IgzKmrkdO4JCzNYRKEYq3AMTh%2FXV%2BoP%2BSFNQm4C%2BpUzy3muSxGDH%2Bu20bTL3I6Vzs%2BhiK0rcTQFaiTAoSzmNIvlAbrVGT50dOXVSSKJqB96UnDMIyBvm%2F0HUcR6fu9o91f8iE5cdb0BdWxaXhkf2PLQ1obss2eDM5G68RR%2FcvxGI8BzOuEXKnUmwbMNw7o5iNA%2FIY6GkrEyV7wa4oE34JxvFW8bV%2BbAaLlu%2FlnrDidcUSLjKfF4XnmX8CLuYknwA0G6M21ecYUaVtkpQcxIFB4JsXav26bqL%2BpGjm961F%2BbC4lHLVyt4577%2FypLIbD9xBlJ7KR5kVBA3msqXiKffBeJckLgN9TI5fEvc%2Bw9UqIjlurz6r6dZgwAjFlxf7EFbeByCujlh0z0QCuPZHIr6%2Br%2B3nxKVRNyWWzgRbDFNVTBHWZKXJyam02ZixyGGYaRllqkEOZcxlxFbQyIx5k%2FJXPl7EXee%2BZrx5ybhELqmlqjgQTXmYCpIof5o9jkbS%2BCQwoxb3dgXnOBd4ICudUzadFYLq%2B2MbMpdaF8cE58mpD7UHXOOHJOcdvIRLE8e7Ln6fdH9lRun5HvcZYdLHNuM02yHNn13UX%2BRLCZexwdd5YD1ow0vkAdIeU3jWmx8y6ftTp0%2BzYUIYEL0vY8FeTDg9KrABjqkAUZ1JWWcn2oMYeUih2ewd7FpaAKNoJvm8BlvADYANbD6FzRfzbxt7BUXzGMKSw1FvZkb2%2BQ1ytQrmUAdTQs4QMkYNlDZMTzrUDLK63G2gpYJ56z0W1ZlclXhtDu%2B2DkDgApfXzGq8XmDAlVTq4ZhuJotdu%2FhNGCqqjI2GweiX5spdh13Mn%2FVVPLZlhhPx6puVVsgMdfng2Y%2FRwcX05lqyNfm%2FJBg&X-Amz-Signature=3054ca14b02bdaded737a1f10af7b735e7bd5b2fed42216329fa6aaa187b29f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIC4GJX3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxM1m63qp8RZiiZqbrCqm%2BVGNyWkLuR8RZua5PqcXygIhAO%2FZiI7NYYdmis6DatHDy%2Bv%2FXnQlcOxOl%2Bk%2BU6BjquAwKv8DCCAQABoMNjM3NDIzMTgzODA1IgzKmrkdO4JCzNYRKEYq3AMTh%2FXV%2BoP%2BSFNQm4C%2BpUzy3muSxGDH%2Bu20bTL3I6Vzs%2BhiK0rcTQFaiTAoSzmNIvlAbrVGT50dOXVSSKJqB96UnDMIyBvm%2F0HUcR6fu9o91f8iE5cdb0BdWxaXhkf2PLQ1obss2eDM5G68RR%2FcvxGI8BzOuEXKnUmwbMNw7o5iNA%2FIY6GkrEyV7wa4oE34JxvFW8bV%2BbAaLlu%2FlnrDidcUSLjKfF4XnmX8CLuYknwA0G6M21ecYUaVtkpQcxIFB4JsXav26bqL%2BpGjm961F%2BbC4lHLVyt4577%2FypLIbD9xBlJ7KR5kVBA3msqXiKffBeJckLgN9TI5fEvc%2Bw9UqIjlurz6r6dZgwAjFlxf7EFbeByCujlh0z0QCuPZHIr6%2Br%2B3nxKVRNyWWzgRbDFNVTBHWZKXJyam02ZixyGGYaRllqkEOZcxlxFbQyIx5k%2FJXPl7EXee%2BZrx5ybhELqmlqjgQTXmYCpIof5o9jkbS%2BCQwoxb3dgXnOBd4ICudUzadFYLq%2B2MbMpdaF8cE58mpD7UHXOOHJOcdvIRLE8e7Ln6fdH9lRun5HvcZYdLHNuM02yHNn13UX%2BRLCZexwdd5YD1ow0vkAdIeU3jWmx8y6ftTp0%2BzYUIYEL0vY8FeTDg9KrABjqkAUZ1JWWcn2oMYeUih2ewd7FpaAKNoJvm8BlvADYANbD6FzRfzbxt7BUXzGMKSw1FvZkb2%2BQ1ytQrmUAdTQs4QMkYNlDZMTzrUDLK63G2gpYJ56z0W1ZlclXhtDu%2B2DkDgApfXzGq8XmDAlVTq4ZhuJotdu%2FhNGCqqjI2GweiX5spdh13Mn%2FVVPLZlhhPx6puVVsgMdfng2Y%2FRwcX05lqyNfm%2FJBg&X-Amz-Signature=f000461b73cb655f39718f1fc77ce31cc1e87bee6505f28ea87ebb9fc9d380d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
