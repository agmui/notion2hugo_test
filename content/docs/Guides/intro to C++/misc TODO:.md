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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAABK2HA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGKTeAE1c0nlsDgyEmVW0%2F5HNiHW%2BT3SFaIyWuFLWnU2AiAZOyYrKDn%2B7CtqWeMFSJALX2DDOH%2BJQ563H3buhTyoyiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvN0MpncxwNR%2BqSiKtwDwmC1w44szPRkHlKr0qT%2F5w1pN6afC42xfCotQGwiW0qitGnBRPeMI%2FnPw1WSvs%2B%2BFvcHqGhTp7QHDyV1Gi2OZw73DSJ3o35Qmwvimro82FoiN9J%2Bisho7S2uv9M2rfBsWWaKzdi5Na9aY%2BDzk%2BNTss%2FcUyoqPZJHJN7ydSG9bofJpz8Qi5xVhsG8pKjujRXcADePtdoq6FxwkRbyftbbpb6BPUik%2BqjLvXiSJGXRQJsE6vgQDoHDPqaPJOtvEtCiaFfsdcvIj7NGO%2FmAj3R%2FtjY5mFIXdld0u%2F53fI9%2Beo1goIFeCKkVgqw%2FgOA4w9mqxgTdm3qgaHG34JFfyDiis5oNLw7w%2Fqf49s4ouI8TTEY2R%2FzJdcttxcKcpLmrGaKQv8zJ4rHIQ7mHv%2BVZ34JEFvBLXvRK7bQ5skHi9X2GgxwgiXhybcWwLmlR9KC21GAwFe0Vnj8zLKtpVMtDLXRKSpZAtf1MItB21WM9NYURyChZdkg1kKQ9ygtuCCLDo9ECYLMlDGfEKNtqfycI84Vo8MHLtOZkdmtVAMq1wXlwO7fpqggmNSysMC5yL7U60nRIB5jm%2BjAKux2ziLS2xYNnYf7G0EjRbecLFqsDhhgI9FniRNG2ohQGwe6gpQsw8fKgwAY6pgEHm%2FF5VkudWh%2BSwHHGv93jcmDKjLl25IHCcA4GuQ60L6AeQOfWX%2BV9jV8XkzpzJoiiOeldGc5O3Ce6P1Xy9wASsVEjxcmTcTOR%2FEKR4W01JwrcURXw1N7vZ3KA%2Bfai030L449Yu2LZOXNgx1ua1ZfVFDcOufZa9ltbTmXZYUPhYgAp0LcJXG1jJfE1zobNU3G1WqtRiJtIEQoGn%2ByKAQmln3yo%2BYED&X-Amz-Signature=27fdb4c7e63cf20b12528f0474d09923c0fd2ec5177f2ba257b5ac21434ae3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAABK2HA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGKTeAE1c0nlsDgyEmVW0%2F5HNiHW%2BT3SFaIyWuFLWnU2AiAZOyYrKDn%2B7CtqWeMFSJALX2DDOH%2BJQ563H3buhTyoyiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvN0MpncxwNR%2BqSiKtwDwmC1w44szPRkHlKr0qT%2F5w1pN6afC42xfCotQGwiW0qitGnBRPeMI%2FnPw1WSvs%2B%2BFvcHqGhTp7QHDyV1Gi2OZw73DSJ3o35Qmwvimro82FoiN9J%2Bisho7S2uv9M2rfBsWWaKzdi5Na9aY%2BDzk%2BNTss%2FcUyoqPZJHJN7ydSG9bofJpz8Qi5xVhsG8pKjujRXcADePtdoq6FxwkRbyftbbpb6BPUik%2BqjLvXiSJGXRQJsE6vgQDoHDPqaPJOtvEtCiaFfsdcvIj7NGO%2FmAj3R%2FtjY5mFIXdld0u%2F53fI9%2Beo1goIFeCKkVgqw%2FgOA4w9mqxgTdm3qgaHG34JFfyDiis5oNLw7w%2Fqf49s4ouI8TTEY2R%2FzJdcttxcKcpLmrGaKQv8zJ4rHIQ7mHv%2BVZ34JEFvBLXvRK7bQ5skHi9X2GgxwgiXhybcWwLmlR9KC21GAwFe0Vnj8zLKtpVMtDLXRKSpZAtf1MItB21WM9NYURyChZdkg1kKQ9ygtuCCLDo9ECYLMlDGfEKNtqfycI84Vo8MHLtOZkdmtVAMq1wXlwO7fpqggmNSysMC5yL7U60nRIB5jm%2BjAKux2ziLS2xYNnYf7G0EjRbecLFqsDhhgI9FniRNG2ohQGwe6gpQsw8fKgwAY6pgEHm%2FF5VkudWh%2BSwHHGv93jcmDKjLl25IHCcA4GuQ60L6AeQOfWX%2BV9jV8XkzpzJoiiOeldGc5O3Ce6P1Xy9wASsVEjxcmTcTOR%2FEKR4W01JwrcURXw1N7vZ3KA%2Bfai030L449Yu2LZOXNgx1ua1ZfVFDcOufZa9ltbTmXZYUPhYgAp0LcJXG1jJfE1zobNU3G1WqtRiJtIEQoGn%2ByKAQmln3yo%2BYED&X-Amz-Signature=bcde0741b89c344861889b6ecd878210199fcb5e99692ac00d626a51406d8fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
