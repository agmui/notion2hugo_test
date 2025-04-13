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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCC7EUU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDGi9VINosrywmWTQUDAuUc9zXkDKuWRUsxrfQDZ7ZKxQIhAJKojBCFGi7fXtUoDr8jwi%2BThY2xTXIif9OaqBobUJAJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9HTf2hIOveui7P74q3AMFhQev412nzRpK2Xr6AeLhRLH3gvgIjpn%2B8nI4zG9NRAThiK141nbjbVu0dyXPBktpmBt2CrjygUT2gpfAzEOjGGLniOMTYLecn8%2BqbMgEPSqAbGPBTLJafdeFIb%2B%2FvmCgjDoXbej3M%2FXSjTfTKniq9oAgyl49YkdNnklb40lvQ2YduoEx4AEyGgJogDu5vsFomIciS%2Bcq8iztuGjP8RMFnlGMPO0ZGmccCwloKKJ5tZCfs0cG0w9WntifLZFt5VWS0hDFh2EGh1hFd7fsntF5tFeUzHYgA1tVDG9TgQ4tvR9sMfmKIjz4kCeGIQ8xgFtAHfF0DaJug08INEMWMt7sZIQul8o1W7czVcYGabniE9kN89ZW0fzKv9i3WIzAv7tsdErTe7rm8S%2F6M3n2H%2FPGbHBXFhSs7yyRkjuHjdgsvZxeqnoPzkNIe7Tidm9aGlVUILjm6cwgyNednqJEimZhj9ABtLCaJQFzhNAyrxfhvpL%2BZV2U4fIWyx2aqeJtGWFylHgVYG28lYW6wbROLhAmksyq3GRe0Bg1b5JurzAi%2FYPvC3br8YDnRbEyrwowqIdreKpCezAAjA%2Fnx3y8VSBS5zP8BjfDpOlBnu9z6DqbBP2k%2B%2BBc%2BwLyDDm6ODCqz%2By%2FBjqkAVL6fIj9CX62jYL3gTKnFah6oy2OoT6ClZsYH8%2Bd3D0oL9WWIDt%2BHW3UFSHvrBRNU6nRuZnkyyl9kuRtYlpw%2FwuoB5G5NCNnTbaLM6IEW9xD5C7pS030OXlYcyjxGuDOMYPks%2Bxx9zYEUVB%2FCbeJpeAflXtEnq0B8gpy6Y26wJvy1x68jJ%2Fs6WfopojlpeAd0%2FBPW72f1zG8eI5iQLVCHoqMqewv&X-Amz-Signature=ac20c8f24357e3b8c38673b60eb67c0ef0f5384ad2d79eb145e5897998c53833&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCC7EUU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDGi9VINosrywmWTQUDAuUc9zXkDKuWRUsxrfQDZ7ZKxQIhAJKojBCFGi7fXtUoDr8jwi%2BThY2xTXIif9OaqBobUJAJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9HTf2hIOveui7P74q3AMFhQev412nzRpK2Xr6AeLhRLH3gvgIjpn%2B8nI4zG9NRAThiK141nbjbVu0dyXPBktpmBt2CrjygUT2gpfAzEOjGGLniOMTYLecn8%2BqbMgEPSqAbGPBTLJafdeFIb%2B%2FvmCgjDoXbej3M%2FXSjTfTKniq9oAgyl49YkdNnklb40lvQ2YduoEx4AEyGgJogDu5vsFomIciS%2Bcq8iztuGjP8RMFnlGMPO0ZGmccCwloKKJ5tZCfs0cG0w9WntifLZFt5VWS0hDFh2EGh1hFd7fsntF5tFeUzHYgA1tVDG9TgQ4tvR9sMfmKIjz4kCeGIQ8xgFtAHfF0DaJug08INEMWMt7sZIQul8o1W7czVcYGabniE9kN89ZW0fzKv9i3WIzAv7tsdErTe7rm8S%2F6M3n2H%2FPGbHBXFhSs7yyRkjuHjdgsvZxeqnoPzkNIe7Tidm9aGlVUILjm6cwgyNednqJEimZhj9ABtLCaJQFzhNAyrxfhvpL%2BZV2U4fIWyx2aqeJtGWFylHgVYG28lYW6wbROLhAmksyq3GRe0Bg1b5JurzAi%2FYPvC3br8YDnRbEyrwowqIdreKpCezAAjA%2Fnx3y8VSBS5zP8BjfDpOlBnu9z6DqbBP2k%2B%2BBc%2BwLyDDm6ODCqz%2By%2FBjqkAVL6fIj9CX62jYL3gTKnFah6oy2OoT6ClZsYH8%2Bd3D0oL9WWIDt%2BHW3UFSHvrBRNU6nRuZnkyyl9kuRtYlpw%2FwuoB5G5NCNnTbaLM6IEW9xD5C7pS030OXlYcyjxGuDOMYPks%2Bxx9zYEUVB%2FCbeJpeAflXtEnq0B8gpy6Y26wJvy1x68jJ%2Fs6WfopojlpeAd0%2FBPW72f1zG8eI5iQLVCHoqMqewv&X-Amz-Signature=8ef6b79f33f0f4227d2cec84796a0b886c506d06321495f549a89323d918e0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
