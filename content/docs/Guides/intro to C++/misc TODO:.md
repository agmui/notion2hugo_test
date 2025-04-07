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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDHER7R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRY87nVWmg3bF0G6wXGxaRUlvyKRVKr%2F1vd9XrP4KWvwIhAJdKjPswq4V%2FmqbYivSs47IDNAlUn8TOLesKRFEeAum2Kv8DCFQQABoMNjM3NDIzMTgzODA1IgwnCVDBWGNRxr9EIqMq3AM%2B0fmDqjCZXqfIfmxmIN%2BMCdhYYTIvOu0aOWQ67gs1vXX%2F3a2d6%2FjPeVpsbJIy5hexoj%2Bwl4ozTQH1%2BxFM5hGJThlhlJBYxMsQt%2B5viZsMDID%2Fo7kLW8fwgVyhA5R8477y%2BnCjlRSseihSLy%2FIuH3uLlpySVuvMuzEooBbTTPiJ6Y7VjPE3vt%2B6r7cZ5g5e3P26VIN15iknZqwZBfCvSDlTm%2F4leWKsLPozhV9tFuJHx1loeY8dqyna96ZsM9tehJzHHvewu%2Bwlsz3wBV6eUbr%2Fx0B6hfBTmnz0GPnvuadEHKQzMQSELwcar9rIsOD%2Bz7bU2%2BsUTeDhl9kxDkfy5KC8%2BAISQxX1%2BmR8Apv2%2FQ7O0zZjpDSSB1cU4OiM3shH6pk%2FXs%2F0QoQfmY0JlM23Iepd%2B5OBdNUY2tR50XzTDRDZM6dcgcUF3DVAaR9bmBu%2BLJiuqk4B%2BXVz697YQgQrB53aiyaMDFnKU3gi0c%2BIyoVrLxjHmkwD0LbM0WWVxLan1QvmMsKAJKgSZHkN1YpGTo%2FBhpNrXDrkzWuR1e3DiRY5VM%2BX5HYRVBdLmDtbbMkIRUsZTpabLO0ZcLuCDWextTQtUnxOFZU9NEoNY0%2BBF2aT3vHqgLPOom1vQkxpzCDg82%2FBjqkAUDYarkObNQ27PTyh8G0wtssg07crXFPQvaRuPOQ6VgEL%2FEjuIzFDLSeozZgxdmUULyuPPLeQNWixhBNjinpjLXfqfFjTMh67mzDrYuXvJXGl9t7H6YVAd%2Brty03xjRMvXCZqe03hhCl1eAj7aZXFdCrePMjyQ3T4PsrjBUiNHim2Wv7uigOzWDOY04n7onnuLDBwmy2Oew8SUlQ%2FUeXxqXySXb4&X-Amz-Signature=65d03b689d78b904f2dfbfa0b033f8a88b9ef94e69d3147e5ef46494f30e2ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDHER7R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRY87nVWmg3bF0G6wXGxaRUlvyKRVKr%2F1vd9XrP4KWvwIhAJdKjPswq4V%2FmqbYivSs47IDNAlUn8TOLesKRFEeAum2Kv8DCFQQABoMNjM3NDIzMTgzODA1IgwnCVDBWGNRxr9EIqMq3AM%2B0fmDqjCZXqfIfmxmIN%2BMCdhYYTIvOu0aOWQ67gs1vXX%2F3a2d6%2FjPeVpsbJIy5hexoj%2Bwl4ozTQH1%2BxFM5hGJThlhlJBYxMsQt%2B5viZsMDID%2Fo7kLW8fwgVyhA5R8477y%2BnCjlRSseihSLy%2FIuH3uLlpySVuvMuzEooBbTTPiJ6Y7VjPE3vt%2B6r7cZ5g5e3P26VIN15iknZqwZBfCvSDlTm%2F4leWKsLPozhV9tFuJHx1loeY8dqyna96ZsM9tehJzHHvewu%2Bwlsz3wBV6eUbr%2Fx0B6hfBTmnz0GPnvuadEHKQzMQSELwcar9rIsOD%2Bz7bU2%2BsUTeDhl9kxDkfy5KC8%2BAISQxX1%2BmR8Apv2%2FQ7O0zZjpDSSB1cU4OiM3shH6pk%2FXs%2F0QoQfmY0JlM23Iepd%2B5OBdNUY2tR50XzTDRDZM6dcgcUF3DVAaR9bmBu%2BLJiuqk4B%2BXVz697YQgQrB53aiyaMDFnKU3gi0c%2BIyoVrLxjHmkwD0LbM0WWVxLan1QvmMsKAJKgSZHkN1YpGTo%2FBhpNrXDrkzWuR1e3DiRY5VM%2BX5HYRVBdLmDtbbMkIRUsZTpabLO0ZcLuCDWextTQtUnxOFZU9NEoNY0%2BBF2aT3vHqgLPOom1vQkxpzCDg82%2FBjqkAUDYarkObNQ27PTyh8G0wtssg07crXFPQvaRuPOQ6VgEL%2FEjuIzFDLSeozZgxdmUULyuPPLeQNWixhBNjinpjLXfqfFjTMh67mzDrYuXvJXGl9t7H6YVAd%2Brty03xjRMvXCZqe03hhCl1eAj7aZXFdCrePMjyQ3T4PsrjBUiNHim2Wv7uigOzWDOY04n7onnuLDBwmy2Oew8SUlQ%2FUeXxqXySXb4&X-Amz-Signature=9f3be60663a1a2d88af5c181db3019a36353ece35a2678cb149db42708455fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
