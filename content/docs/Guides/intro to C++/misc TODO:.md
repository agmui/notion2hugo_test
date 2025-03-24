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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7A6IZY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgNtXl2c34seh9ggiO58YP1r%2FH83RUTSNXBij65BnAwIhAIRsWK8gE5q9RvKZdkEVTGIlHQx2wis1r1EmSET2VKzcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHKw0ZpIzvWa7EGqgq3AP%2FjwTqUWdeWOiEYSYLUqZWOLyaTT4nSYuPmiLM79I4WD2ZuyzRMNLlpxj48VANPSvK3CuVZQb%2FT0OV4A5TXOgY2DnEad5I1RyEUpd4sX4Qz%2FM5XntN2gjaZPonTFWMLML10%2Feh6CdzOYAqvJ8%2BrZWuGjjqNjJDcp5ubFK2gBEUkQ%2F%2BKZUrXmzJSk3Plw0PuGHTLe0VSZS%2FMsHWDRufIVsB8VURQtd5YJjkbk76bSqhcPy7VN9GoiOH9qYAs9kTar1bBaBbUHmQCo1A%2FZgFcM3LpaevKf5mA3AehFYwBtQ7kjuAxn27uS8FdBKNKvB5INT%2BIgIHsBf%2BBDzzQ2Rk1ru6iYqXZdZBcvRsOW95sSvXnQklA4ZN92o1AvPfkhb5Ahi6aY5UKjgokW2vYZ09GPDJaiqn7IgXkBZpXbPQ1Mj2vZQ%2BunMC%2FL5axx9%2FpFdDTzEnGkLcNBP1eb9jqbOzx8BdBelLAauWNHnU986GCxnnZJx4EzB1WwLqwoZU3UV8NiN0RedTv7AXe%2Fp%2FEG3G%2BbTUOWzBuXdBOR2JhKk2Xe%2BxicU%2Bn0RqSxguqdaSKW%2B2xitBjWoENeCDXkaZ0JjWWExyGxDORBz3IvIord6GleF96m7rpuZF5GwbmnHCazC1%2FYW%2FBjqkAXFggKbSammw8opiU5VoHu3Ub7%2FsO8Vmx8HXLMzvXQF%2Bb1sLMjnH4Vl2dz64p0gxmFeOEjhSbJUV82bAklNUlbEtl6IH3M3fVtuEsrXjro3jOsNdtEbkX9EcweJneG3v75Fpkd%2FQ5Va7qM4Cg2q2BxQwY9oJRc0%2BtMhh4Ig4sLS%2F0WpRl4hgSGKqfEClHmePAIqKuCtEiT%2B%2FiUy02PB9t7XgGfkp&X-Amz-Signature=24666b34e650295f3688d2be7bb1e372cb0296a7acf9aeb8389564cbd235e8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7A6IZY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgNtXl2c34seh9ggiO58YP1r%2FH83RUTSNXBij65BnAwIhAIRsWK8gE5q9RvKZdkEVTGIlHQx2wis1r1EmSET2VKzcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHKw0ZpIzvWa7EGqgq3AP%2FjwTqUWdeWOiEYSYLUqZWOLyaTT4nSYuPmiLM79I4WD2ZuyzRMNLlpxj48VANPSvK3CuVZQb%2FT0OV4A5TXOgY2DnEad5I1RyEUpd4sX4Qz%2FM5XntN2gjaZPonTFWMLML10%2Feh6CdzOYAqvJ8%2BrZWuGjjqNjJDcp5ubFK2gBEUkQ%2F%2BKZUrXmzJSk3Plw0PuGHTLe0VSZS%2FMsHWDRufIVsB8VURQtd5YJjkbk76bSqhcPy7VN9GoiOH9qYAs9kTar1bBaBbUHmQCo1A%2FZgFcM3LpaevKf5mA3AehFYwBtQ7kjuAxn27uS8FdBKNKvB5INT%2BIgIHsBf%2BBDzzQ2Rk1ru6iYqXZdZBcvRsOW95sSvXnQklA4ZN92o1AvPfkhb5Ahi6aY5UKjgokW2vYZ09GPDJaiqn7IgXkBZpXbPQ1Mj2vZQ%2BunMC%2FL5axx9%2FpFdDTzEnGkLcNBP1eb9jqbOzx8BdBelLAauWNHnU986GCxnnZJx4EzB1WwLqwoZU3UV8NiN0RedTv7AXe%2Fp%2FEG3G%2BbTUOWzBuXdBOR2JhKk2Xe%2BxicU%2Bn0RqSxguqdaSKW%2B2xitBjWoENeCDXkaZ0JjWWExyGxDORBz3IvIord6GleF96m7rpuZF5GwbmnHCazC1%2FYW%2FBjqkAXFggKbSammw8opiU5VoHu3Ub7%2FsO8Vmx8HXLMzvXQF%2Bb1sLMjnH4Vl2dz64p0gxmFeOEjhSbJUV82bAklNUlbEtl6IH3M3fVtuEsrXjro3jOsNdtEbkX9EcweJneG3v75Fpkd%2FQ5Va7qM4Cg2q2BxQwY9oJRc0%2BtMhh4Ig4sLS%2F0WpRl4hgSGKqfEClHmePAIqKuCtEiT%2B%2FiUy02PB9t7XgGfkp&X-Amz-Signature=276736ed13c27057e063896f2cc65e35c9d850a5668118f2da6a64cbb085bb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
