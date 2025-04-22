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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHJITL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH%2BaMyYEKvEOhIns%2BnjbYhhD3JSQOkTRxyLfQuzFV3RVAiA%2FHFRRjKZ0TNxI48szKwUYAhjD9dJlvv4jVOs5Si3hIiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3kKZt5L9q9oBDCCKtwDj50yLf5ehzhffV2xhCEMDPduvytysnXKZ9eGEi9SksdHGZ%2BOH0jrhE7gyQA7TfiQF5yUjjM3zobtBNQs%2BMsrM4WzSRwbCGtEiHz9K76BA8nQZv1qDZKzetb06nmiTI%2FUUyGIZepDn3nRPcGn6KkRIJtaX5YKop%2BWHL6AEWytJn%2BcVJJTzArqx%2BERaLx4TwAjBBA8Ig8vPO687h5tcq%2BKtxQo2uxFEf2OUurkDwttWFu9UjH7yRswmJdfL%2F9E%2BVOSB4mI8UrxrLz%2BviKrNFyHQDG0mmcMKsBaCnRtoXnFlqC3PI7oWPVGZFdXZuTKhhClj0BHlCzfHUuiRTnp7UttyMMEJmPGP98L4UczR1hGy5lAi%2FySX3yvavV%2Fc9UGWHjqGtT9cOK7BLhADCA2uaN51IyvzSnYNohD9OcRFUz7SkOvNGutkDIAqEwsl8b%2Bcn%2Fai8fkhdQzyEDEjjsYwaQL62K4RwO8y0cG%2B4zp%2BW%2BfH0GZxrDo%2F81sI2obt6oco2YbiHOpPfkr3Pzhxx8xlGR3lNX6bZL9t0%2FxEylihBJDnFAXmphHSXAOBX0AiZCIEbYqtP9Ade%2F1CiyX5Q6v1qUqdhDEipmGY7O7vIweUI6uJkEUZj4b4k6P7W4l0NUw3NWcwAY6pgGX2gZ%2FUIMazeiQo6kx4por1EHStHdL6h58RJ2iZANW1Y3ARs0VH5CgBP%2F9sEFVlHdTYEtKEYcUTf3RhJClKfhMBplzGhpwknZzn7x1IfjTPkZXcgmNxdvI%2F059eoDZYBhs2y1tJcXxMKl6%2FYxyO7G565UBuK6V%2BPBLGtK6FsieoaB7kp1Epbxe25R5rXrx2%2FcvIuRy4mKLjsCk96o%2BFEdsmK62F1xR&X-Amz-Signature=3584e4e0d6be683a7ec7cc05891047b6cb2245ca344a57046d3f901af89e4aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HHJITL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH%2BaMyYEKvEOhIns%2BnjbYhhD3JSQOkTRxyLfQuzFV3RVAiA%2FHFRRjKZ0TNxI48szKwUYAhjD9dJlvv4jVOs5Si3hIiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3kKZt5L9q9oBDCCKtwDj50yLf5ehzhffV2xhCEMDPduvytysnXKZ9eGEi9SksdHGZ%2BOH0jrhE7gyQA7TfiQF5yUjjM3zobtBNQs%2BMsrM4WzSRwbCGtEiHz9K76BA8nQZv1qDZKzetb06nmiTI%2FUUyGIZepDn3nRPcGn6KkRIJtaX5YKop%2BWHL6AEWytJn%2BcVJJTzArqx%2BERaLx4TwAjBBA8Ig8vPO687h5tcq%2BKtxQo2uxFEf2OUurkDwttWFu9UjH7yRswmJdfL%2F9E%2BVOSB4mI8UrxrLz%2BviKrNFyHQDG0mmcMKsBaCnRtoXnFlqC3PI7oWPVGZFdXZuTKhhClj0BHlCzfHUuiRTnp7UttyMMEJmPGP98L4UczR1hGy5lAi%2FySX3yvavV%2Fc9UGWHjqGtT9cOK7BLhADCA2uaN51IyvzSnYNohD9OcRFUz7SkOvNGutkDIAqEwsl8b%2Bcn%2Fai8fkhdQzyEDEjjsYwaQL62K4RwO8y0cG%2B4zp%2BW%2BfH0GZxrDo%2F81sI2obt6oco2YbiHOpPfkr3Pzhxx8xlGR3lNX6bZL9t0%2FxEylihBJDnFAXmphHSXAOBX0AiZCIEbYqtP9Ade%2F1CiyX5Q6v1qUqdhDEipmGY7O7vIweUI6uJkEUZj4b4k6P7W4l0NUw3NWcwAY6pgGX2gZ%2FUIMazeiQo6kx4por1EHStHdL6h58RJ2iZANW1Y3ARs0VH5CgBP%2F9sEFVlHdTYEtKEYcUTf3RhJClKfhMBplzGhpwknZzn7x1IfjTPkZXcgmNxdvI%2F059eoDZYBhs2y1tJcXxMKl6%2FYxyO7G565UBuK6V%2BPBLGtK6FsieoaB7kp1Epbxe25R5rXrx2%2FcvIuRy4mKLjsCk96o%2BFEdsmK62F1xR&X-Amz-Signature=0341d5072ab90ecfe05c73b3b0170139c19bad137c57f0a32abe2aed9c940f16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
