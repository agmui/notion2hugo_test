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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ON6UBQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBwt%2Fj7yIEMTWPao4PUFu98QT6KtHGH3%2Bko6559YzFOVAiAftVf2jgE1Z3IieO%2FgOqHL4Jul02ahQzJrzLiPtozewCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMqk9oIBBvUCNrZk7KtwDSzJ39T5YPOmIvvxY4B3iopv7V8w9z7Ycs4XR3PgIFQP5ue%2BbpjDLuoxKH4Q97m1yK14PtRadGwz%2FM8ZxwAeyZ4z3EPNIli1fzbYfS97rWJYium5x92a9zMxg46S6IQLV53FPhxH2gRCG90TagWxseEvKBw34kvsARAAcpp6zTCnq1ZrnRku50q%2BjLtKCvQ9pXLkDmXTwthBJJsE2tA%2BJzI11p%2BVuCJbOZtlLcpIuUNMTAhuz0nRus8eMbjcndk6p8t9NKRbhAoMG2OKk9V7KMLnzLdms4O4gyRoT%2FcdGhe3cz86H8scOY66cqyvGYkegP%2BLsV1MN6a5qFFTbbnfa2LJ5XiI0kwJ5iHDGR4C4rqDigjLlGe4CxLAZLIwjpxg4KFbZs2ha4Yv0GH7qcb4vsPBjDmpLmk5y55WlwBLt3aZrORI%2FFbco4NFYoUAxobNuKwOOCLgraEzQkZD10HBdISwcBnjXA1OXsYI5UPArRdpT5sjWesdup8Y6J782xKVTL7fu9ilDjOgQNChpNFDXPYhASY1X4wW%2B0xeYW8LUbM7WaiAM4SUhF5GAJemYaqboBle4LaFIe78J44JNgGdx2JJZRW6xhVJndwjJA3F1jZ0D9saKpMQD0WqdXEQwuMOEwgY6pgHcgEn1re4BqKxLSxvYLwDZt9TlPayQjDL9pqLLD0fhhZBVM0pdCWo3nru1vH%2BZHCs5%2B1H%2B4TcGvNBGNzi9wNVRtluTIv4gTmkrv0P8mDItFcrNrYps1HHGZxecUOGjrTiZzI%2FD%2F4bxWf8WGAPMTllaHKXitXbx%2FoL%2FyhMI8XuJciLas06MZ7oF5IEOrTBfGILP66gPMeiyLgT%2FMmWMBHS8Urv07kmH&X-Amz-Signature=0be2f13fda9cb5c0a3b0256b35a0703e9c3bea12684568b974a4dfb1f195db6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ON6UBQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBwt%2Fj7yIEMTWPao4PUFu98QT6KtHGH3%2Bko6559YzFOVAiAftVf2jgE1Z3IieO%2FgOqHL4Jul02ahQzJrzLiPtozewCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMqk9oIBBvUCNrZk7KtwDSzJ39T5YPOmIvvxY4B3iopv7V8w9z7Ycs4XR3PgIFQP5ue%2BbpjDLuoxKH4Q97m1yK14PtRadGwz%2FM8ZxwAeyZ4z3EPNIli1fzbYfS97rWJYium5x92a9zMxg46S6IQLV53FPhxH2gRCG90TagWxseEvKBw34kvsARAAcpp6zTCnq1ZrnRku50q%2BjLtKCvQ9pXLkDmXTwthBJJsE2tA%2BJzI11p%2BVuCJbOZtlLcpIuUNMTAhuz0nRus8eMbjcndk6p8t9NKRbhAoMG2OKk9V7KMLnzLdms4O4gyRoT%2FcdGhe3cz86H8scOY66cqyvGYkegP%2BLsV1MN6a5qFFTbbnfa2LJ5XiI0kwJ5iHDGR4C4rqDigjLlGe4CxLAZLIwjpxg4KFbZs2ha4Yv0GH7qcb4vsPBjDmpLmk5y55WlwBLt3aZrORI%2FFbco4NFYoUAxobNuKwOOCLgraEzQkZD10HBdISwcBnjXA1OXsYI5UPArRdpT5sjWesdup8Y6J782xKVTL7fu9ilDjOgQNChpNFDXPYhASY1X4wW%2B0xeYW8LUbM7WaiAM4SUhF5GAJemYaqboBle4LaFIe78J44JNgGdx2JJZRW6xhVJndwjJA3F1jZ0D9saKpMQD0WqdXEQwuMOEwgY6pgHcgEn1re4BqKxLSxvYLwDZt9TlPayQjDL9pqLLD0fhhZBVM0pdCWo3nru1vH%2BZHCs5%2B1H%2B4TcGvNBGNzi9wNVRtluTIv4gTmkrv0P8mDItFcrNrYps1HHGZxecUOGjrTiZzI%2FD%2F4bxWf8WGAPMTllaHKXitXbx%2FoL%2FyhMI8XuJciLas06MZ7oF5IEOrTBfGILP66gPMeiyLgT%2FMmWMBHS8Urv07kmH&X-Amz-Signature=10dd9654c6202a1d988cc39ce3d01749286406e76ff23e862cf4e1532e1c679b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
