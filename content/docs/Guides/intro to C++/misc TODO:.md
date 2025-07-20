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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFQ3DDZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFwvwYhq06N8NBeHjmc23ZKcb6vjsghn5PjFA%2F%2FsYGPAiEAj9ZE5ELXo9uixs2rulv9%2BBb3eaqZnFAi5%2F%2Btfuvg6DYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE5zLHqAeanSuxi7yrcA%2FiyzNBArvzoBG0vNnqDELwM0XJpPwOnsGV7zfGpRdzD%2Fae8kFhVLx%2BOb3c8EMWxvakmiKOhfXYsX8kPCsbix75em%2BG%2Bj118CUXkzMTK81V8nkc2NhZpZbDjyEhiXR0O1h%2BSWLuz%2BJnrvw%2Fgg6m2%2Fo5wFX%2B65b9KUagTHUcQM2sBVVRl0xsrcV85rnzr1OSPG%2BHQSDFvHFuKOFMKuRbdJ0D13QpyeV%2Be%2F2kAr1%2FumWkUL2ax7xgAj4M%2FhH25z0yhj7gU13bVLifAYcvapjYJmsYaiz9vctEi46Qg2iwHjlMcRcNjx6uAW4nsxN0fCudmomoWDwkC20efYMrF8VWxMi7xGuzH7D8M7vXG4zKX5VEFE%2FDOGAugNf6dZdWYkBgD%2FVibku6TaQ64GDAzskmDSi9W14bNUttLQoH3%2F%2FVzaRgP2UptgcOuDB3PhhkRibw8C4fOy5A4aHaexT%2FdCfwOsX%2Frt4olKIV7uvw5fdqZTFne3koQSSFN3VynlftspdiQT8fVR2wNLYL0H9Owt49bZy7leFjU73SsZFcwQNcS8R1nGhdQ943pWAtLXeT9gvxFXcqzugJx%2FM9w6CiBHnKA32dCQk1emDhI0e5olORrM%2FoVEtggE%2BMPlmXvGfqvMLXY88MGOqUBy%2Fl0xKlDKOwQHwN4t%2BVyqsr5R5FfFRvM5A9If0Vh2rCjyxjVEdwghb5S4%2Bx9mc2XScY1vhrwy4RFK00q3w%2FFwYjfXTnlDRYExw1CdZNuHXxjYOvIqNIOfJux%2B3pcxPKcwL8Rc4jb%2B22o6mX%2Bys5flsAQOuFFxA9gpONqnNt3Xo0V408VJg%2Bg8%2FPiylFyuVOQO2WaPPEg3uiSy3x0Z1yx0qWluYtb&X-Amz-Signature=160c5dbc78e64dd65f237b18eab6ee7c0589abc518c37e3080e26d192283441e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFQ3DDZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFwvwYhq06N8NBeHjmc23ZKcb6vjsghn5PjFA%2F%2FsYGPAiEAj9ZE5ELXo9uixs2rulv9%2BBb3eaqZnFAi5%2F%2Btfuvg6DYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE5zLHqAeanSuxi7yrcA%2FiyzNBArvzoBG0vNnqDELwM0XJpPwOnsGV7zfGpRdzD%2Fae8kFhVLx%2BOb3c8EMWxvakmiKOhfXYsX8kPCsbix75em%2BG%2Bj118CUXkzMTK81V8nkc2NhZpZbDjyEhiXR0O1h%2BSWLuz%2BJnrvw%2Fgg6m2%2Fo5wFX%2B65b9KUagTHUcQM2sBVVRl0xsrcV85rnzr1OSPG%2BHQSDFvHFuKOFMKuRbdJ0D13QpyeV%2Be%2F2kAr1%2FumWkUL2ax7xgAj4M%2FhH25z0yhj7gU13bVLifAYcvapjYJmsYaiz9vctEi46Qg2iwHjlMcRcNjx6uAW4nsxN0fCudmomoWDwkC20efYMrF8VWxMi7xGuzH7D8M7vXG4zKX5VEFE%2FDOGAugNf6dZdWYkBgD%2FVibku6TaQ64GDAzskmDSi9W14bNUttLQoH3%2F%2FVzaRgP2UptgcOuDB3PhhkRibw8C4fOy5A4aHaexT%2FdCfwOsX%2Frt4olKIV7uvw5fdqZTFne3koQSSFN3VynlftspdiQT8fVR2wNLYL0H9Owt49bZy7leFjU73SsZFcwQNcS8R1nGhdQ943pWAtLXeT9gvxFXcqzugJx%2FM9w6CiBHnKA32dCQk1emDhI0e5olORrM%2FoVEtggE%2BMPlmXvGfqvMLXY88MGOqUBy%2Fl0xKlDKOwQHwN4t%2BVyqsr5R5FfFRvM5A9If0Vh2rCjyxjVEdwghb5S4%2Bx9mc2XScY1vhrwy4RFK00q3w%2FFwYjfXTnlDRYExw1CdZNuHXxjYOvIqNIOfJux%2B3pcxPKcwL8Rc4jb%2B22o6mX%2Bys5flsAQOuFFxA9gpONqnNt3Xo0V408VJg%2Bg8%2FPiylFyuVOQO2WaPPEg3uiSy3x0Z1yx0qWluYtb&X-Amz-Signature=8dd5303697b0a6e6c2f7dbe70921d0efab634b93aa9a66d2f86fe2e955488c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
