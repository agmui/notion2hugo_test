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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3RRYSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEplNzgFAdEUQgX%2FErmOgR6RF2FiRNd8ntg4%2F1KEEc7bAiA8UgndR9bqlZ5QrCRQkX5qP8ZvAXr%2BtUmwWY1JzpgFRCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMonw24xUdRSAa2kh7KtwD7wNYd%2F8dN%2BOCxx5KcTCh3RbokU%2BJC%2FtLHfINZUtnPHMr5sG93vDheq375SubfD00TdQoFbXIxhH7gjjM4NUQDpbGeyKJyJ%2B7hJJdhXnoCvPvNc5t%2BEv8CeQaRzZznhJuUR%2BA%2BQMNcPIr960By0ki6u%2F6d4uDfsJTrM5%2Fw%2FlC7HrU2OWwtUVeRTpcy8E8t9DHQJSQPunMtoDyngbGqXg0Sk3C%2BHBJgh%2BRfzYrYKzFdcafiL%2FBTO9tDrEKzUWVfIMy7cEb1Oslk6EqJvVN4SlQc5WZhwZQoUDfYhxD9TCvLHORlK240vIhO3cO8L8Z9oJlL4nPbAayNztsB%2FNnmZhIyhWxHftLFIv%2FD0U5d%2BCEfJELZhASEGw7Sywlntosx%2FVcvRIXMFLn6moZvhvCrgAhXvymzT0fh4hyS7y2Z%2BfU9%2FW4ZXwxVR4Tz1IDX6C59Oeqj544ovuQpmBeH%2FFr7Ap0nwIMNPItP4A83heqqGB6oAEqWZehmfdAP0g%2B5JVxzDXkSVf3JHv6J9r2aiUgGpUvVUWJeRI5r9G9B9dqWEEUEgAR%2FMIkzvVPZi0MKQ6AQ%2BwZJKOvTpelk8Y4FihitYncV2sMhqnOV04RK7eol%2Bb40EIFB72nQAJYjqbLfhAw2ZGNwgY6pgHvsC82%2FS2h%2Bwdglbo25EwoMCoOUK3%2F1y8zot5NE9IN82yA7FmmZ7uUnhVu%2BySl16Gy%2ByWcxIlvtQ0iLemTjM2CkBHYEdqekxqvLNCcXa%2BK8Mhhmr78EA3iTf6oauL%2FN8PkxA5qpHiC9wJdSLdL6hi6ssR3%2Fw3nO8eTU61ZuXrmfu7tOB%2F7%2BQjU4pGoSmDkK2mNAm%2FxqwJEKXCzS8UzznJjkmPVaSbt&X-Amz-Signature=2b0a4bf76a132d1d21f1a3a56481eedd9e372a775981dd0691f624fd4c656e76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3RRYSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEplNzgFAdEUQgX%2FErmOgR6RF2FiRNd8ntg4%2F1KEEc7bAiA8UgndR9bqlZ5QrCRQkX5qP8ZvAXr%2BtUmwWY1JzpgFRCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMonw24xUdRSAa2kh7KtwD7wNYd%2F8dN%2BOCxx5KcTCh3RbokU%2BJC%2FtLHfINZUtnPHMr5sG93vDheq375SubfD00TdQoFbXIxhH7gjjM4NUQDpbGeyKJyJ%2B7hJJdhXnoCvPvNc5t%2BEv8CeQaRzZznhJuUR%2BA%2BQMNcPIr960By0ki6u%2F6d4uDfsJTrM5%2Fw%2FlC7HrU2OWwtUVeRTpcy8E8t9DHQJSQPunMtoDyngbGqXg0Sk3C%2BHBJgh%2BRfzYrYKzFdcafiL%2FBTO9tDrEKzUWVfIMy7cEb1Oslk6EqJvVN4SlQc5WZhwZQoUDfYhxD9TCvLHORlK240vIhO3cO8L8Z9oJlL4nPbAayNztsB%2FNnmZhIyhWxHftLFIv%2FD0U5d%2BCEfJELZhASEGw7Sywlntosx%2FVcvRIXMFLn6moZvhvCrgAhXvymzT0fh4hyS7y2Z%2BfU9%2FW4ZXwxVR4Tz1IDX6C59Oeqj544ovuQpmBeH%2FFr7Ap0nwIMNPItP4A83heqqGB6oAEqWZehmfdAP0g%2B5JVxzDXkSVf3JHv6J9r2aiUgGpUvVUWJeRI5r9G9B9dqWEEUEgAR%2FMIkzvVPZi0MKQ6AQ%2BwZJKOvTpelk8Y4FihitYncV2sMhqnOV04RK7eol%2Bb40EIFB72nQAJYjqbLfhAw2ZGNwgY6pgHvsC82%2FS2h%2Bwdglbo25EwoMCoOUK3%2F1y8zot5NE9IN82yA7FmmZ7uUnhVu%2BySl16Gy%2ByWcxIlvtQ0iLemTjM2CkBHYEdqekxqvLNCcXa%2BK8Mhhmr78EA3iTf6oauL%2FN8PkxA5qpHiC9wJdSLdL6hi6ssR3%2Fw3nO8eTU61ZuXrmfu7tOB%2F7%2BQjU4pGoSmDkK2mNAm%2FxqwJEKXCzS8UzznJjkmPVaSbt&X-Amz-Signature=5b0793ef6dc4edc9199754d84329bbee27d23004e0df502f228cb754ed22aab2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
