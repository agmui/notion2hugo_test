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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZPYZ3O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCBUJUcU8NbUPXB73%2BRCFwQYXeaTGa8VBVm%2Bh8%2FUEzZgIgJvMTJP08WWRer0OrFKbey9Ooc4zkpLieHTCtdE0MaC8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZXdGOdrCbMZpJctCrcA3jpC73YWAe1ia7zNQxVw0fPZsIDvoIYqrpuBk5toQMuWMSxSCWeaJc6KvwVBm4PwQ0us6zdOp8IZ%2FD2WeYWssBoCPqQyN5rYJj9GEcD2Vu0Hn7y1PQCW3VTbeFh8KQe%2BJYogOauq2fMatKDj3xR6GZUvjvpIxAoOKucnH1l0hC08MAkIu8XCXDQLlHSxSRZv4DByl0EqFaf7Zywk4fIE42ypqeeLSnp7gs1Cv3TAnNJ9BL8qvh728bdjdQijL6Z8y3hH3iG0S7YwtpujcWA7TfHEETGT0CP5ecHjBUtjZrWwgXFiJSfVyzOhX5opFZE3t5CqwO%2F0EPvecq8miwiilw2HTdq859we1223ggsam7CfpjwwutsWWPlBvhk5O2NcnLEcaTiRuaQq3vLDaQSwj0WqXu3LIhuN5iRsIhClUWrx09HgR25kLAodytCyPQ13tt1yFDoEPgZ62%2FCx09eh1hTRARnm9xxa1uWUZ3h2aKBZTjUmzBVh5MR6HN8UtrrMb1lqq86Wued8SRkZyKEQoFcNwjD00RLwJGUP%2FqmNbEK2fbZByqAQrgshjyCI%2BCLUeFIwxmxpaJ2BdQxFW8aQWZfVQC1fyKxqvdUTcTzXtHCOAA61De4x7WKYVWLMMaM7bwGOqUBi2dhuq2ZDdl6hG6oHoGS6mHd9IHIU6cfWaIg9GiDMQQZeoa56bztajUxarGaIwRQI3ZDpkKmDXdjaw6hgJ5ToGyQ5ep8Ovtu4e%2FG%2BaVpc%2B4r5WU591S%2Fzgl%2FFLsvab8g59VJU8NilEDsdZaJGlpuzqjTFPMIL%2BUyjGhc5GR1Uq7dutTUENu70civybaHPOb4aYxxLcmxzDd8CFCXpvvDvcm7DX9y&X-Amz-Signature=51a8b920858fc61534bdb917b30a5a40b0d7e70135f2ec7658f01cde48fcc4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZPYZ3O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCBUJUcU8NbUPXB73%2BRCFwQYXeaTGa8VBVm%2Bh8%2FUEzZgIgJvMTJP08WWRer0OrFKbey9Ooc4zkpLieHTCtdE0MaC8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZXdGOdrCbMZpJctCrcA3jpC73YWAe1ia7zNQxVw0fPZsIDvoIYqrpuBk5toQMuWMSxSCWeaJc6KvwVBm4PwQ0us6zdOp8IZ%2FD2WeYWssBoCPqQyN5rYJj9GEcD2Vu0Hn7y1PQCW3VTbeFh8KQe%2BJYogOauq2fMatKDj3xR6GZUvjvpIxAoOKucnH1l0hC08MAkIu8XCXDQLlHSxSRZv4DByl0EqFaf7Zywk4fIE42ypqeeLSnp7gs1Cv3TAnNJ9BL8qvh728bdjdQijL6Z8y3hH3iG0S7YwtpujcWA7TfHEETGT0CP5ecHjBUtjZrWwgXFiJSfVyzOhX5opFZE3t5CqwO%2F0EPvecq8miwiilw2HTdq859we1223ggsam7CfpjwwutsWWPlBvhk5O2NcnLEcaTiRuaQq3vLDaQSwj0WqXu3LIhuN5iRsIhClUWrx09HgR25kLAodytCyPQ13tt1yFDoEPgZ62%2FCx09eh1hTRARnm9xxa1uWUZ3h2aKBZTjUmzBVh5MR6HN8UtrrMb1lqq86Wued8SRkZyKEQoFcNwjD00RLwJGUP%2FqmNbEK2fbZByqAQrgshjyCI%2BCLUeFIwxmxpaJ2BdQxFW8aQWZfVQC1fyKxqvdUTcTzXtHCOAA61De4x7WKYVWLMMaM7bwGOqUBi2dhuq2ZDdl6hG6oHoGS6mHd9IHIU6cfWaIg9GiDMQQZeoa56bztajUxarGaIwRQI3ZDpkKmDXdjaw6hgJ5ToGyQ5ep8Ovtu4e%2FG%2BaVpc%2B4r5WU591S%2Fzgl%2FFLsvab8g59VJU8NilEDsdZaJGlpuzqjTFPMIL%2BUyjGhc5GR1Uq7dutTUENu70civybaHPOb4aYxxLcmxzDd8CFCXpvvDvcm7DX9y&X-Amz-Signature=eb0b74724f3688f7e20d57545d95342279d3ba7928d6fee94e28fdaa501f0808&X-Amz-SignedHeaders=host&x-id=GetObject)

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
