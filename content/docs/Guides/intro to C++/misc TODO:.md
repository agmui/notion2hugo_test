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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBJBH22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIC0sNOcC%2BA0uys9JczVgAlUID5CU7SlR4oO5elhuo4UsAiAJj3%2FyP5my7wRFq29ZGdqj0zjShOpVoZmORQHMiGl1cyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6ctTy8bMihKHOQ6KtwDXMyByCmsRv4iaRzy5b29WjTN1ZHPZRI4mmdbVv8AzstOy0FVOVpqG%2FNMxqBrQdr0gQLwmr2Xr5ZQjtK0LAsuMn38BIYevx94ANqhq63GSxH%2B9Ay1zeiMhax7IkvdKeabNKhJ7txIqTBcfPcTZp1A5vESr9maUB%2F2WO0A3c7DhVLedaIyJrUmpC70XD43UwmhETGBQFdgvZqge%2B5IA1owKEKHfk7EMdTGN8jmYjXiVTDPxvanBkyI3DQ6%2BqbvbSN2gFMHlQV4kWzLbsMWz6Rj1Etqj7m66qR%2BfJ6i6sEX0wWsMlg%2B4barKBRYxDgVmyB6hbpSnM95n5DGUi5CoIziEioKAG8w%2F6oIy07b0JSxF1vYGaZfmf3htkbc2nNbZvkaVG2i98Vcx1Itm01XVyWgDee%2FuJDRg5ZwnhkcDIwvm%2BOC5s1RQAl7MdClXym%2FJYm4Mustmc1u63GZMtfORKmTLJ9T0CuBZ5gECCxK3%2BOeOGB7q9CwnAHG6R29K4EpWevruFxECfWZrU7p6LW9%2FUGYycmR6PdWQf2gVOQ6E8iWILBkMGmWOLdV9W8n6OkUWquci2O90vTH4mVoDYHVtggTj21qDaP9q%2BYr8Ms9yvy9%2BE7XESelP6EyFezZRAcw7t67wQY6pgEUesg6Q2g%2FTaJ%2BE3TynyfrytVnyO%2FwxwbbMC9D0b7ETG87gb7EnZJFjo0SKD00ysodmkrOP%2BENElN3yiaVEZbTyNYbYdkpDyVuse4TKyuehR%2B1PoBeIwLaDOVF1n7x5rons2FWqGEK0Z090RINGSyMsjJsD1260jlLGHCAYA5B7js0KOLehgrCL%2FDZwlOTbkf8u8t93l7mDWm2al4znIyG0ySNs%2BSl&X-Amz-Signature=1253ace8b4ab27602b5c8fb41209e5cae41ceb18368de7db65cd0e46ffb653ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBJBH22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIC0sNOcC%2BA0uys9JczVgAlUID5CU7SlR4oO5elhuo4UsAiAJj3%2FyP5my7wRFq29ZGdqj0zjShOpVoZmORQHMiGl1cyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6ctTy8bMihKHOQ6KtwDXMyByCmsRv4iaRzy5b29WjTN1ZHPZRI4mmdbVv8AzstOy0FVOVpqG%2FNMxqBrQdr0gQLwmr2Xr5ZQjtK0LAsuMn38BIYevx94ANqhq63GSxH%2B9Ay1zeiMhax7IkvdKeabNKhJ7txIqTBcfPcTZp1A5vESr9maUB%2F2WO0A3c7DhVLedaIyJrUmpC70XD43UwmhETGBQFdgvZqge%2B5IA1owKEKHfk7EMdTGN8jmYjXiVTDPxvanBkyI3DQ6%2BqbvbSN2gFMHlQV4kWzLbsMWz6Rj1Etqj7m66qR%2BfJ6i6sEX0wWsMlg%2B4barKBRYxDgVmyB6hbpSnM95n5DGUi5CoIziEioKAG8w%2F6oIy07b0JSxF1vYGaZfmf3htkbc2nNbZvkaVG2i98Vcx1Itm01XVyWgDee%2FuJDRg5ZwnhkcDIwvm%2BOC5s1RQAl7MdClXym%2FJYm4Mustmc1u63GZMtfORKmTLJ9T0CuBZ5gECCxK3%2BOeOGB7q9CwnAHG6R29K4EpWevruFxECfWZrU7p6LW9%2FUGYycmR6PdWQf2gVOQ6E8iWILBkMGmWOLdV9W8n6OkUWquci2O90vTH4mVoDYHVtggTj21qDaP9q%2BYr8Ms9yvy9%2BE7XESelP6EyFezZRAcw7t67wQY6pgEUesg6Q2g%2FTaJ%2BE3TynyfrytVnyO%2FwxwbbMC9D0b7ETG87gb7EnZJFjo0SKD00ysodmkrOP%2BENElN3yiaVEZbTyNYbYdkpDyVuse4TKyuehR%2B1PoBeIwLaDOVF1n7x5rons2FWqGEK0Z090RINGSyMsjJsD1260jlLGHCAYA5B7js0KOLehgrCL%2FDZwlOTbkf8u8t93l7mDWm2al4znIyG0ySNs%2BSl&X-Amz-Signature=b9861c28e4f423759b7c28d03627222535d38c692911bd124ddc2f9d0e046ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
