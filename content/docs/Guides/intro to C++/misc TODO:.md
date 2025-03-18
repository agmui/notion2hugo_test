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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4REYQ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCNXqQpRIUq%2Btd3titbZmplwPEctm4gNJefw9xerc6ijQIgEp1RdfJmdv%2FklnvzNRm%2Fg11oA0%2BHXxQMFD%2Fg9u8NW9sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCBuAy2%2FyKZesyaAJyrcA9%2Fppeq5iAtVDur0EguZ%2FQvjn9UmeOhYi0lbqwDgt%2FpWtcLS877CmhNhA6WhikpcbU3Iot60AuLr0FLnP7lKWs6BWrySk8%2BiVaCXYhxxTfEDsCIlk%2BqbutZX9Zz4s5mmlb3nN7PV3dhLx%2F%2BES6oR%2Fo8VB%2FWvSc644IIS1sk01j9wBZCp%2FCViLxwy1EoataU0dOPh9u%2F4OqI51fG9hGij%2BOjqdsXQO4t5%2FDif5XusjeoxTwMEcccpHNKuB0RFPH75vc9U7jMcNgYddfEtJq5ao5pHgyLXwqF5AoqN1iIoYuEbgclKKato39gql0q%2FefI2aquVP2SwmBbDNG9IG%2Bq5WazbFkUjn0GmqOFiEd3r73ih5iksxQI86ZDdjPkHnqY4mmRK8jhGax6MssD7vvkIgBSE%2BVuRM6jylTH1c%2FobRsxZTLHmAWZ4zIPiLhAYq5DIy2grXLSZ8oeCxeqieaIwMLhkCKqjge85FTvufHl8XXi605H1e7OfP%2FCvlN5%2BTe0ALddFOR5FT2yROkpWQGUROygqeE58phI%2FfHqBRhbCHdypZOk%2FsitJrBxQkHKS%2BRDxiN2NA5nAzPdoszeRx2zCktMJ5PuCSTaD6wY7ndJxNWbWmm7vCY8xElWhbMrhMP3z5r4GOqUBAmbsS8%2BrhgkGxbXDb1FfEmHLrVFdB03bGaK6QJ8G9S5cNJqqqO9Mawr4jBXGarZNT3wZNrbhR7dMMUoUq7G%2Bmjns4ZjanriolpNzcj91pwh8dPrE4xup8uTWwROxzN8JcAPoCgtiFMYITpHOBgKwRM4%2FMa2O1bq5vOIyajJHogCnQ4TjQM5Rom4Cu2Cb9qTay2OP4509tMKnqAQRXeUR0ulQa6o%2F&X-Amz-Signature=5b9d39fddf9565eb6fe938a28f2deb795a8b685a9c26f9db75355b208f25ae1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4REYQ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCNXqQpRIUq%2Btd3titbZmplwPEctm4gNJefw9xerc6ijQIgEp1RdfJmdv%2FklnvzNRm%2Fg11oA0%2BHXxQMFD%2Fg9u8NW9sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCBuAy2%2FyKZesyaAJyrcA9%2Fppeq5iAtVDur0EguZ%2FQvjn9UmeOhYi0lbqwDgt%2FpWtcLS877CmhNhA6WhikpcbU3Iot60AuLr0FLnP7lKWs6BWrySk8%2BiVaCXYhxxTfEDsCIlk%2BqbutZX9Zz4s5mmlb3nN7PV3dhLx%2F%2BES6oR%2Fo8VB%2FWvSc644IIS1sk01j9wBZCp%2FCViLxwy1EoataU0dOPh9u%2F4OqI51fG9hGij%2BOjqdsXQO4t5%2FDif5XusjeoxTwMEcccpHNKuB0RFPH75vc9U7jMcNgYddfEtJq5ao5pHgyLXwqF5AoqN1iIoYuEbgclKKato39gql0q%2FefI2aquVP2SwmBbDNG9IG%2Bq5WazbFkUjn0GmqOFiEd3r73ih5iksxQI86ZDdjPkHnqY4mmRK8jhGax6MssD7vvkIgBSE%2BVuRM6jylTH1c%2FobRsxZTLHmAWZ4zIPiLhAYq5DIy2grXLSZ8oeCxeqieaIwMLhkCKqjge85FTvufHl8XXi605H1e7OfP%2FCvlN5%2BTe0ALddFOR5FT2yROkpWQGUROygqeE58phI%2FfHqBRhbCHdypZOk%2FsitJrBxQkHKS%2BRDxiN2NA5nAzPdoszeRx2zCktMJ5PuCSTaD6wY7ndJxNWbWmm7vCY8xElWhbMrhMP3z5r4GOqUBAmbsS8%2BrhgkGxbXDb1FfEmHLrVFdB03bGaK6QJ8G9S5cNJqqqO9Mawr4jBXGarZNT3wZNrbhR7dMMUoUq7G%2Bmjns4ZjanriolpNzcj91pwh8dPrE4xup8uTWwROxzN8JcAPoCgtiFMYITpHOBgKwRM4%2FMa2O1bq5vOIyajJHogCnQ4TjQM5Rom4Cu2Cb9qTay2OP4509tMKnqAQRXeUR0ulQa6o%2F&X-Amz-Signature=5acf180fd487ecd193165a00bff3763b0d402d0d5a6d7cb1050f70f0419f0574&X-Amz-SignedHeaders=host&x-id=GetObject)

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
