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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMNHD7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcwHQgX5Y%2FSZ90ZQ1aZ0xKw5zwAuX7ONMKMa%2FXXoOSiAiBGf2x00vYDBJy1a2yBlGSY0ScnpFkHHBew0Qy6S7zC8ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMpASBFg6YoHC9p16%2BKtwD%2BQS5Nnbbcw8f6w5L1wnIS0XwkfKY7N746CjZ3MxT50a4UxTLmeUIcplv2vd2IVgBN%2F0IgwCU3QNh%2FIJuimeXf3pKYpMMUrIUk61b8uKkPb2jjPfeS1PXqwEnYVf8Ji4osnRAWwKcVu%2FZM6A7lhkQXyijycCiXsF1FhhIGZ6w%2BeTdMiPs8zV8%2FPUHuYm1LYguUH7cMwaeTujVhGx4x9Y%2BraZAnHQe3jJi7t4xJDAfYTKvm7Bf8ljD%2B9UKqElHdgw4N40Kjqmy4yLiNCL2Aj8a2U7X0HmWNVNPgyuX6KTFhSbUFNPLMk%2BCFvDMOnbM0icOTeLRoe4TCnWAyBthZdypsKRXFb9FTdp7i2zA8ZhWGLNZfe6vgH0NGiFDKxVh6HA2wAHN5ktBDEZG%2FIExjJxnRDte%2FC83HeJ3xKFOurEAVZjIKLF%2FJIOjJqmGqtX%2FQVapkpcOfWQYTyBmN7dD%2FBDBjqBiRoldWrqFswBUSmF37hlnSrmGZ3CfSZhEqC%2Fe%2Fr7IETkqDviRMdVlDuUBMn5czO2A137%2FkQGeH1bAPDsINo5S%2BXq2Z8LizDUsRQAvvAj%2BHLWgIonH5XLGi%2BAhryQffbla8PiE1misCqur4iOF1IvIIFwIVi3OCoaj61cw6LyhwQY6pgGUCqhfm6zlwrz32yGPclW9RzFrDEp9uPmsLbAIVkbswrQH9ObBjlWnUopGYC%2FILlkSYu9M5ISFMkOKre5SNDcXuBvKIY8zwwzpd3IFjXlRMJEYL81IF6LTQLPd8gwEZi%2BOGAYvjE9ue3hqCpNn57Muf7RnarMZCKPiuNn8lOaOvAROvkT6wIiruppIP1Ou%2FH51Oqz90bxhlQqSD4HPIci%2BnVGAFDo6&X-Amz-Signature=35ddada2be721aa68a7f7e70320cb8939ebd54079729fc27315fb3504c776a16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMNHD7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcwHQgX5Y%2FSZ90ZQ1aZ0xKw5zwAuX7ONMKMa%2FXXoOSiAiBGf2x00vYDBJy1a2yBlGSY0ScnpFkHHBew0Qy6S7zC8ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMpASBFg6YoHC9p16%2BKtwD%2BQS5Nnbbcw8f6w5L1wnIS0XwkfKY7N746CjZ3MxT50a4UxTLmeUIcplv2vd2IVgBN%2F0IgwCU3QNh%2FIJuimeXf3pKYpMMUrIUk61b8uKkPb2jjPfeS1PXqwEnYVf8Ji4osnRAWwKcVu%2FZM6A7lhkQXyijycCiXsF1FhhIGZ6w%2BeTdMiPs8zV8%2FPUHuYm1LYguUH7cMwaeTujVhGx4x9Y%2BraZAnHQe3jJi7t4xJDAfYTKvm7Bf8ljD%2B9UKqElHdgw4N40Kjqmy4yLiNCL2Aj8a2U7X0HmWNVNPgyuX6KTFhSbUFNPLMk%2BCFvDMOnbM0icOTeLRoe4TCnWAyBthZdypsKRXFb9FTdp7i2zA8ZhWGLNZfe6vgH0NGiFDKxVh6HA2wAHN5ktBDEZG%2FIExjJxnRDte%2FC83HeJ3xKFOurEAVZjIKLF%2FJIOjJqmGqtX%2FQVapkpcOfWQYTyBmN7dD%2FBDBjqBiRoldWrqFswBUSmF37hlnSrmGZ3CfSZhEqC%2Fe%2Fr7IETkqDviRMdVlDuUBMn5czO2A137%2FkQGeH1bAPDsINo5S%2BXq2Z8LizDUsRQAvvAj%2BHLWgIonH5XLGi%2BAhryQffbla8PiE1misCqur4iOF1IvIIFwIVi3OCoaj61cw6LyhwQY6pgGUCqhfm6zlwrz32yGPclW9RzFrDEp9uPmsLbAIVkbswrQH9ObBjlWnUopGYC%2FILlkSYu9M5ISFMkOKre5SNDcXuBvKIY8zwwzpd3IFjXlRMJEYL81IF6LTQLPd8gwEZi%2BOGAYvjE9ue3hqCpNn57Muf7RnarMZCKPiuNn8lOaOvAROvkT6wIiruppIP1Ou%2FH51Oqz90bxhlQqSD4HPIci%2BnVGAFDo6&X-Amz-Signature=03692052fcfc6c450861edadc22c12f64c617ff8e5e44bf17553b25ba9b66927&X-Amz-SignedHeaders=host&x-id=GetObject)

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
