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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW3SCBED%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANBUnhmXJFnNwxXaVHsbBbzvfpjW8psQbwvKbrjTHSFAiAIR0Zi4163CbXe0hq4elRjQ1Vbj6jZDVPXWLQ40UCHiCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFffKiH7%2Fkc54skwtKtwDg7cQSJkQX0VEQ71qyuVB19uMrPsiXl43nhAYJ6T1c1VcChRQ5oQ6H6pZ2RTGv86yvzmB6FmMuUoLoF9fzgvhHVB4mEHzIspl0XPCuomJ%2BdwOyVUG0UhlSPDGaQ1SZE9EUYL4XCJyAsRR1ucgy4bzXNei6XkH1usbCpu4%2BN005tfHk40wYXpTlSxf7mFylYx5DObuCFnROUfdK8Dk92XxdSITR9J93vy5QohsZVIwr9827ztwuF2ePr3A5RSTdyQNCBnl8ByIHXSsUfLNHhPGKEL%2BLgd%2FxJ%2BFKn09mxXFOknU6Y6D9W0SL3%2Bf6n%2BP4QRspHAr8NXMhwZuiAUlPQjwA%2BzW%2BVxWXVoU8SYWRNJz2uX1m0Gsu6T525hWt5BsvB42%2Fvkgv6ER%2BBKSO31YsXdg09NTg5TBawL%2BWohFvHjVildIvO4BlMLbKELhOdxrOGgJsbkWL2nyQ%2Fye7wRrTyhiYldGpv3rHEDestp4BYdGt3LuTG8%2BytuvD7apobeoJMOrDLmKAUn4jweje8k1czKIkE%2FkLALA1RbIOjvn0PAlGbqI6wCQpX%2Br0SsY6S%2Bg%2BwwryvhhMnNJXHDPEwtTsaktJxGeLG0rC7K%2BjSAvd2MVauGwkMcxW3uBqdNYWOwwz4f4wAY6pgEWJOq7iPaf1DmbJ2r84GKWs2FmyHvwthk5gC1B4VW6rH6GeXch7r1A2XkWoY5zyVBPYD32GY5ikGEE3m0v5%2F4fR1wg%2BzXzhXeaeeEtxgfQ8X7qo5v49g5ggtZkXA9ETXLEq6pgHFN3L5Bvuwxkw5gqphfikGbMM3h5zv9Lj8gUZcxVipV0T%2BYUVdB9Vy4uBCYvs5WmQCZ55zu30gWyMQkQItTPomLd&X-Amz-Signature=cfd7a53d2da6e31baa3f8580b37d730b6dfecc7635a9b3dc4cf9b429f9559508&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW3SCBED%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANBUnhmXJFnNwxXaVHsbBbzvfpjW8psQbwvKbrjTHSFAiAIR0Zi4163CbXe0hq4elRjQ1Vbj6jZDVPXWLQ40UCHiCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFffKiH7%2Fkc54skwtKtwDg7cQSJkQX0VEQ71qyuVB19uMrPsiXl43nhAYJ6T1c1VcChRQ5oQ6H6pZ2RTGv86yvzmB6FmMuUoLoF9fzgvhHVB4mEHzIspl0XPCuomJ%2BdwOyVUG0UhlSPDGaQ1SZE9EUYL4XCJyAsRR1ucgy4bzXNei6XkH1usbCpu4%2BN005tfHk40wYXpTlSxf7mFylYx5DObuCFnROUfdK8Dk92XxdSITR9J93vy5QohsZVIwr9827ztwuF2ePr3A5RSTdyQNCBnl8ByIHXSsUfLNHhPGKEL%2BLgd%2FxJ%2BFKn09mxXFOknU6Y6D9W0SL3%2Bf6n%2BP4QRspHAr8NXMhwZuiAUlPQjwA%2BzW%2BVxWXVoU8SYWRNJz2uX1m0Gsu6T525hWt5BsvB42%2Fvkgv6ER%2BBKSO31YsXdg09NTg5TBawL%2BWohFvHjVildIvO4BlMLbKELhOdxrOGgJsbkWL2nyQ%2Fye7wRrTyhiYldGpv3rHEDestp4BYdGt3LuTG8%2BytuvD7apobeoJMOrDLmKAUn4jweje8k1czKIkE%2FkLALA1RbIOjvn0PAlGbqI6wCQpX%2Br0SsY6S%2Bg%2BwwryvhhMnNJXHDPEwtTsaktJxGeLG0rC7K%2BjSAvd2MVauGwkMcxW3uBqdNYWOwwz4f4wAY6pgEWJOq7iPaf1DmbJ2r84GKWs2FmyHvwthk5gC1B4VW6rH6GeXch7r1A2XkWoY5zyVBPYD32GY5ikGEE3m0v5%2F4fR1wg%2BzXzhXeaeeEtxgfQ8X7qo5v49g5ggtZkXA9ETXLEq6pgHFN3L5Bvuwxkw5gqphfikGbMM3h5zv9Lj8gUZcxVipV0T%2BYUVdB9Vy4uBCYvs5WmQCZ55zu30gWyMQkQItTPomLd&X-Amz-Signature=9caaddcd61c91a726d3b0aeb2369afc1e8b745dbc01ce6aebbc7194673566535&X-Amz-SignedHeaders=host&x-id=GetObject)

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
