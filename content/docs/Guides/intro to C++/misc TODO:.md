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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHVUIYT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOrE5%2BfylwtEb9yPF1bCIW4aVaGd%2FPZK60y1ei%2BEgiAiBC%2FPsQfUSuaQiWUT132uFD4cRNVUokP7CyRVmJ5wcC%2FSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMtd28nM33eu7Nc6icKtwD4%2B4f9UqCzz6O2JptkMejWSfejDRZQJ6cWmo1CipdPr7Nm%2F4FTYrSzxv7L3mDAoAAOInP%2BrnkUVKojOpa92X5sjYqnY%2FFUFQl1k3Pqd77d1IN8onJ24A3%2F8rJmfqWY%2FuBI9ARkgBI48tAhFRLC9HXdQermi2CAoVuch7lLDPB%2B3cCGtGTkaW7CZHmVIK%2FBKqY%2B7QWXkue7DIENsHWzBh6aQaHnSQ%2BGCLAqM5xh%2FfkyBcuJsJ5FFNMDu%2F%2FHijb7n5ObV%2BRXBeY1AiMjo2KcAquLBJpHrh7VCPIdMwWGQ4gLusLHqiXj1SAJFrWYpZPw8btwUVLHfj0HC55uHT1AOSEzpD%2FQ2%2BvMXnvWfMXlRI0oWZlDqczIs5n%2BscauT%2Fy29DrRF5G99xQvSrMmKBwCs927LUIUQUoLon4PVYjo%2FtkrFxUFcZmX5Zg6SKrxP5neVLR56%2BMRoxG8%2B1NWuE6ESdrIQ7Gf4b9OxTlX32SJ4%2BprmCf4lWWIWmO5cAIMPvJkG50m7W%2FXevBzMokPHVLGdsLNYYmjEDi1b7lhIPQn2u5qCgmLfOM7Ju47M6O%2BSOoSPJeUACq%2Bbr1jlN%2F31kTacSuij%2FBB307rnFSbEWxSlheIUZj65YyuKnUjt6JxiIwr5iMvwY6pgFk7GbK49JsspYeccHm0RIySkF9IGCRYpf7Ed489Sn9lbvFUbv3GstWPcW15TsOoP3P%2FtxXMqujefMG0esQndzrASwGxG15oe2p%2BcfuA8Fxt6FTKNfM63zwEc7irjInf0P6SMH%2FU%2FKtmSewcINI7a8arDRRxFys7czcDhySfW5odBszDXdWgihV8qJEKNg6CfA7Y6MHZyPaxSGpvu35mFmPmbFmQ4g5&X-Amz-Signature=35dd527900e9aa3a29b7ead46128b06a4da10f9db37f3ec253dbf811a1b00e48&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHVUIYT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOrE5%2BfylwtEb9yPF1bCIW4aVaGd%2FPZK60y1ei%2BEgiAiBC%2FPsQfUSuaQiWUT132uFD4cRNVUokP7CyRVmJ5wcC%2FSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMtd28nM33eu7Nc6icKtwD4%2B4f9UqCzz6O2JptkMejWSfejDRZQJ6cWmo1CipdPr7Nm%2F4FTYrSzxv7L3mDAoAAOInP%2BrnkUVKojOpa92X5sjYqnY%2FFUFQl1k3Pqd77d1IN8onJ24A3%2F8rJmfqWY%2FuBI9ARkgBI48tAhFRLC9HXdQermi2CAoVuch7lLDPB%2B3cCGtGTkaW7CZHmVIK%2FBKqY%2B7QWXkue7DIENsHWzBh6aQaHnSQ%2BGCLAqM5xh%2FfkyBcuJsJ5FFNMDu%2F%2FHijb7n5ObV%2BRXBeY1AiMjo2KcAquLBJpHrh7VCPIdMwWGQ4gLusLHqiXj1SAJFrWYpZPw8btwUVLHfj0HC55uHT1AOSEzpD%2FQ2%2BvMXnvWfMXlRI0oWZlDqczIs5n%2BscauT%2Fy29DrRF5G99xQvSrMmKBwCs927LUIUQUoLon4PVYjo%2FtkrFxUFcZmX5Zg6SKrxP5neVLR56%2BMRoxG8%2B1NWuE6ESdrIQ7Gf4b9OxTlX32SJ4%2BprmCf4lWWIWmO5cAIMPvJkG50m7W%2FXevBzMokPHVLGdsLNYYmjEDi1b7lhIPQn2u5qCgmLfOM7Ju47M6O%2BSOoSPJeUACq%2Bbr1jlN%2F31kTacSuij%2FBB307rnFSbEWxSlheIUZj65YyuKnUjt6JxiIwr5iMvwY6pgFk7GbK49JsspYeccHm0RIySkF9IGCRYpf7Ed489Sn9lbvFUbv3GstWPcW15TsOoP3P%2FtxXMqujefMG0esQndzrASwGxG15oe2p%2BcfuA8Fxt6FTKNfM63zwEc7irjInf0P6SMH%2FU%2FKtmSewcINI7a8arDRRxFys7czcDhySfW5odBszDXdWgihV8qJEKNg6CfA7Y6MHZyPaxSGpvu35mFmPmbFmQ4g5&X-Amz-Signature=346877d521eb57046884a30fe186d5b7ce471ff06b2b5f998480f87953364a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
