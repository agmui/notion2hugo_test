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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSCN4YA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKDPGuN2t1jBQL%2FjC7gN70TLeMly0CFx%2BnrJmB7xiu%2FwIfGE5eL7gbRSoRMFtwvOcVY7DxojgIy46ar7WGCG%2FQeCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUxbhMFY%2BhI36LmKKtwDJQeVjp9EmcqUAQnvw0pxLZhfKgsuWsOS1duHlWUEK0BCbTqSJ7VtY%2BbR6eMnKk2UBEcNcOiNenPJdTTm2DkUHeI3Xu%2ByeCrgFhvYBt2WVeKjKAEE7Wp%2Fe%2BqBdo00ttfGd4kjzh1zQADsssA9KPyFVVhSYdBtjFhjf%2Fz3dgUlAKAxxw%2FzQ4amRGA5uaiP56KeDEK3E%2FsyPP8IG2Vf3b8j7NnCvx3sbdJDJtXt6BCgj55Oah9azA%2FX9Dd8yKuZNJwX5gBaGRJTcwgrOg0CHA%2Fh34FRQKO7FrYIcthKl%2Fz0VdYkts7ShLnC7KWF0OadHmJMUFpcJKW1WgJ0CgSE43v5Wa7rsCpL%2Fb0ewWY7KgKGmg%2B4%2B%2FbbXd9e6onBJDo4eZYf90pGTZE4Tp5CXvhxMciVsAdOPoj5LMuyvbIN0CwO5mlU%2FjEbwkfHu26f2U8FEdMnnicFz%2FljJj2fki%2BO2KTFhdrjSoiMctI20ttrLfSU6UWPw%2FdSVZO9SDEteklL9AspWz7yqEawfJ8tJPYsT%2F%2Bv33aoQZrrIapc2%2FwTuCaWLwsVhiHjMyn2JnAXraykEw0fkeKiI6yqBOGYUGLN%2BD0Q%2FHiM5bNo5pe5ZlUZbAwaiOC5ugScj7vgr73d2UAwof6%2BwwY6pgGVonnjb1P8FyfYZPqx1EiI3vJ1rxODLgN1Si2A6iMV8%2Fwxn7nTTRO%2BZMcGL5C85fSOSZZij9ZEhB1%2Fd9nuW2WSBezw4aRvpJ6dZ90mPdiB0aKun5la7zcIHc68fwxi0s6gA2IbSN6Emzf3SoUuAoLvsNhZO2PHfjCpBMGTZm3qWMgxk9XG3ogcj1YFMtX8zPzE9o7eslDxEArt85E3fC9XGY8uZaXI&X-Amz-Signature=bc2ac79d7ae63d2ac34cc5fa8034e09c512299cc4fff6b032dbaa8459fafba44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSCN4YA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKDPGuN2t1jBQL%2FjC7gN70TLeMly0CFx%2BnrJmB7xiu%2FwIfGE5eL7gbRSoRMFtwvOcVY7DxojgIy46ar7WGCG%2FQeCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUxbhMFY%2BhI36LmKKtwDJQeVjp9EmcqUAQnvw0pxLZhfKgsuWsOS1duHlWUEK0BCbTqSJ7VtY%2BbR6eMnKk2UBEcNcOiNenPJdTTm2DkUHeI3Xu%2ByeCrgFhvYBt2WVeKjKAEE7Wp%2Fe%2BqBdo00ttfGd4kjzh1zQADsssA9KPyFVVhSYdBtjFhjf%2Fz3dgUlAKAxxw%2FzQ4amRGA5uaiP56KeDEK3E%2FsyPP8IG2Vf3b8j7NnCvx3sbdJDJtXt6BCgj55Oah9azA%2FX9Dd8yKuZNJwX5gBaGRJTcwgrOg0CHA%2Fh34FRQKO7FrYIcthKl%2Fz0VdYkts7ShLnC7KWF0OadHmJMUFpcJKW1WgJ0CgSE43v5Wa7rsCpL%2Fb0ewWY7KgKGmg%2B4%2B%2FbbXd9e6onBJDo4eZYf90pGTZE4Tp5CXvhxMciVsAdOPoj5LMuyvbIN0CwO5mlU%2FjEbwkfHu26f2U8FEdMnnicFz%2FljJj2fki%2BO2KTFhdrjSoiMctI20ttrLfSU6UWPw%2FdSVZO9SDEteklL9AspWz7yqEawfJ8tJPYsT%2F%2Bv33aoQZrrIapc2%2FwTuCaWLwsVhiHjMyn2JnAXraykEw0fkeKiI6yqBOGYUGLN%2BD0Q%2FHiM5bNo5pe5ZlUZbAwaiOC5ugScj7vgr73d2UAwof6%2BwwY6pgGVonnjb1P8FyfYZPqx1EiI3vJ1rxODLgN1Si2A6iMV8%2Fwxn7nTTRO%2BZMcGL5C85fSOSZZij9ZEhB1%2Fd9nuW2WSBezw4aRvpJ6dZ90mPdiB0aKun5la7zcIHc68fwxi0s6gA2IbSN6Emzf3SoUuAoLvsNhZO2PHfjCpBMGTZm3qWMgxk9XG3ogcj1YFMtX8zPzE9o7eslDxEArt85E3fC9XGY8uZaXI&X-Amz-Signature=1fb192cd3c9e7762343350cfad438e4d359163fcfb1de9b9623af4e848d36c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
