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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=0d9cfa867d87c18deee2a7061781179270fbe27be66e533243a648f9650f3d12&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HARFXC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIELAd%2F16WLEJth2scUQpSD%2FgWV0tOzJ0nVV77lOioSkAAiAQbtoC18SPBteiX4w1cqUTQ50cAYvBSAVxfEgnqlZ0rCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZnPyNG6Zqr1i5K%2BKtwDHvrlawmJP1mev%2FrEw4PMplzNWD65OGzsa0squkCa7cA2izR3wrhyl4Vff45HU5TarOkWBPkr%2FG85tlPsf2qcFIZmbXT8WKL%2BbchtsvIxd%2F9bjITpNSL74UAoXOWW4oo1wNRQIOe9IMNwUFJI%2BFmweAG%2BKdt6Zh%2BNgVuCdsuKecu7JXed7qrfAKZMdi5JQcsqSZ7WGShiC9K364ZWkVN%2FDG5YwOpH%2FvXsPmK9gg%2F93qOfaoNkuqMZ8lTWDKGiipsQ52tLwbUFdv06m7MaorjWvSZt7uAB8k7ZTpYsCh24SFYk86wievqmVWOCDWIk%2Buw2gsgd0b2KsNgCaia3MJBRDM2kRs8LLmnThEPGDPwKilhfPoos2EuBcqHEzHI5s2nlSLEfEbpownWPDuOBxUbeXkp0K6EW%2F9yh1JFD9KWAajQYaYDD4KjLc9jrDkJG9B1ZsyC0GuX1lk9xK1qCRS%2B82NgVBePZTAAOJJYbNcMApu0fLGsTQLGFLBeJaCN3tFaawCj6lfKZDeUMaN5D1yBWUQvvaK6VUejaPRIrkHpVKdsOytHB9vmwZIo7gnNEvAUTUYaRt%2Bgt4ttOEozSufgVQ6x8ykghBCHVIeKBg5FOZxiVTLqMoJDyNNNLfpAw3IWawAY6pgGogEijuQph2O%2F717g37LufGH4g7sr%2BarGyJILxG7ah39relt4wZUTbEPDsFuAjgBddtlAmvCYIxunTO2OHODyLNbYS3shKKNFke2LGRDvnBSBBMMWtcUbb9xV0k7V%2BCnHOyZQ%2FcP8ZK31EkH4%2BqyCwGMOp5uqiH33cL8YOphW2b5t234kIsRvkYhUyc1qfs58YusXI3hTgEW%2BJaoGBdQES3DFTzzYu&X-Amz-Signature=20ec6ddd0b9e81de3f7f258f554ec8f1ea96529ce93820ad68b984db1a698aff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
