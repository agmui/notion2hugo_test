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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUF2X7FQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEhRceC3KciKEC8T6uBukWYAuL7cjUsJIhmULSDbNYbrAiAWhP%2BWO7f%2F6Qg%2Fv6rTtoanzynhsJJkfj4cnvsRQFrdaCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgt0HtqD561dsqpvYKtwDQD9uV85GMWiv9MzeHVoBtXOuZGeULJu%2BLIR6ebCTg8vaWPhaxb%2FY7XZn8SdGVYf2Pli4KyRIRv%2BkWfFvg1lYbK2XoZVL%2Fe0GsV4uzP0G%2BCRysEktVsW82oCi6gCyqkJs7rdrT2hJXU%2FPghWIWEAvWi6u6OmSDbnHaNpCfdpzSTHgu306QeuQpXPlyJZA9zVIJCnvfHSGa56Zu26BoxszkR%2B%2BQlEfI5l7j%2Fg8XywZG4hIFcWXhPwmIO4jujyB2%2FL74lg9SdfmjmnIXzJbVnDdxl%2FNKyrGzV2S1JmwZCAhLOXvoSHHWWmpaXAmnLI1CMFe78nKMABd0npERrzKlsxHj7f5NWK2haxq8vmPsENDAx8MQkkpoBFbq4YNuTJh6t1vaPvknxq7kV46Ze0MuHESl4JJWaITJpx5PtUZrTB0ZZiaXWjEtkfTO%2BzVI9G5m4ehSAjCgwG%2Bfn%2Bmq1SX1J1TwpZTV4Qt5QwPpbq2B%2F8busY%2Ffp6MKozrmr4awGlmzsOG89HY5j6lUDGyUkz%2BHUeBgVynhv8159DSy9l7bIUQnLO01YSijeNfumGb64ZYDLTB00QJ%2FNLd8eQhMl09RI0gw25%2FWwiDJoscCrAK%2Fcx2zV0v1K5%2FEtrxEaOLYzwwrMfWxAY6pgG8RxA9JJ5RTZoI1uWbfeGsoD9nclspPhPnHzM1TX%2Bli%2F6BATH0qJ64cD1iYVYGlZxN5Wx8324QTURmrIKqYgXb1%2FaMXEIc6HZmA1%2BRH%2Bag6%2B3uV%2B3F4MpjVqXwvLVNEHxuonAmnqB%2Fh9LlbB9Sw%2FzzkQYbhX7NUe%2FDRsLfRCBib6%2FXK0RQuRd%2FfoXpMUxe41gRcsWKmvrWEJ8ooIgaXBzcTdB13rkF&X-Amz-Signature=317f5224a354ef77934f87730e48a42b01da103d4228ffbec33aee8d2b67258f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUF2X7FQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEhRceC3KciKEC8T6uBukWYAuL7cjUsJIhmULSDbNYbrAiAWhP%2BWO7f%2F6Qg%2Fv6rTtoanzynhsJJkfj4cnvsRQFrdaCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgt0HtqD561dsqpvYKtwDQD9uV85GMWiv9MzeHVoBtXOuZGeULJu%2BLIR6ebCTg8vaWPhaxb%2FY7XZn8SdGVYf2Pli4KyRIRv%2BkWfFvg1lYbK2XoZVL%2Fe0GsV4uzP0G%2BCRysEktVsW82oCi6gCyqkJs7rdrT2hJXU%2FPghWIWEAvWi6u6OmSDbnHaNpCfdpzSTHgu306QeuQpXPlyJZA9zVIJCnvfHSGa56Zu26BoxszkR%2B%2BQlEfI5l7j%2Fg8XywZG4hIFcWXhPwmIO4jujyB2%2FL74lg9SdfmjmnIXzJbVnDdxl%2FNKyrGzV2S1JmwZCAhLOXvoSHHWWmpaXAmnLI1CMFe78nKMABd0npERrzKlsxHj7f5NWK2haxq8vmPsENDAx8MQkkpoBFbq4YNuTJh6t1vaPvknxq7kV46Ze0MuHESl4JJWaITJpx5PtUZrTB0ZZiaXWjEtkfTO%2BzVI9G5m4ehSAjCgwG%2Bfn%2Bmq1SX1J1TwpZTV4Qt5QwPpbq2B%2F8busY%2Ffp6MKozrmr4awGlmzsOG89HY5j6lUDGyUkz%2BHUeBgVynhv8159DSy9l7bIUQnLO01YSijeNfumGb64ZYDLTB00QJ%2FNLd8eQhMl09RI0gw25%2FWwiDJoscCrAK%2Fcx2zV0v1K5%2FEtrxEaOLYzwwrMfWxAY6pgG8RxA9JJ5RTZoI1uWbfeGsoD9nclspPhPnHzM1TX%2Bli%2F6BATH0qJ64cD1iYVYGlZxN5Wx8324QTURmrIKqYgXb1%2FaMXEIc6HZmA1%2BRH%2Bag6%2B3uV%2B3F4MpjVqXwvLVNEHxuonAmnqB%2Fh9LlbB9Sw%2FzzkQYbhX7NUe%2FDRsLfRCBib6%2FXK0RQuRd%2FfoXpMUxe41gRcsWKmvrWEJ8ooIgaXBzcTdB13rkF&X-Amz-Signature=44b512658f056e83cc7466246f27474afceed0005664f373efb9eb3aab52a662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
