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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZKHSU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwjVO%2Bm4UbR46LbKkcgZgl4ItD5SU9MVM3ncOCntTe%2BAiBDDDJKTAqKilZuVsYSlhWMpJ68C6TXGjjEGt3LTWurgyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM3Mtpiyfzv3FN%2FouXKtwDJhM4jP0KbAnP9nqKgXarAX5Cdg%2Bhph48JM73ObDoc5fndGDJizw1WklOweFySWdOY76BgkybT%2BMvHazs4nW87WsfB6R%2FLfRiK70DlSlwBNjOwpJk9RB5NlFTMen7ebo61SYMjiVcoXBkCctNQCojEkRFMjLvq3gj5TiZKGRvnEncE79I%2FaD01ShCy63KhnoSClUDLPjp3PcJSWLNJDSOWgtXOZkXqeAgubEPt5IluRgzTbSf7hfTl1YCFcZQw0MELX5n5DtwZLMs6zF8Wp70ha72G6olEOofmSyQlKkzd7CFEQ17udk2vVyWiB7%2FOHQQMM4VITg4KnswGy5vm2Ru9YKwhF8PL8kgSRH3eNri1zyzleze5cH1kNTxxcinkJzjftmH8M9NVZOR7NghnGTmfcaijOB59UD7mXuB1fGwCuzZ0V6n8bs%2B3iQZH005c0yevyXBqercxxXXSwYL4bdoUPbUAu6czFesiZNXp1y2nz%2Fe%2BMOQUgWi355lYFRYiMmsgK7%2FLS7NSmO1AA5CTzle3XNf7phvWLXw4e7kb8a39KExdkPx6jema12U5VGvzBDaPfnKn7GeC9pksdjhbbuoqnvuTmHIh6cal2qc5gEqxYMqGC0vtJeWdCarxpswq73JxAY6pgGK%2FidEjxQcVW2%2FBSFWV9eP03TvAVkgV%2FwuP0lEeEJdWShgnkc3rIGeCxd44maOrshyaGk1CBj6OGw2Y8EF%2FPSZBYHXTxUBth%2F3tzgyx%2FVoSmwjNrjKX8NmYWcm9QCVQ1yhRUCW%2FatHdBNUHBYHVPxwvPxo8AX2mnNHR%2BhlK8ehY3lI%2FajzBBG8Qs3h%2BjnNDm2oMD9GgXwfjvPREvKLtBIev7cQdeXc&X-Amz-Signature=13d3c10f06aad56840041e04d926c974b5787deaa4e78851b23900da557fe8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZKHSU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwjVO%2Bm4UbR46LbKkcgZgl4ItD5SU9MVM3ncOCntTe%2BAiBDDDJKTAqKilZuVsYSlhWMpJ68C6TXGjjEGt3LTWurgyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM3Mtpiyfzv3FN%2FouXKtwDJhM4jP0KbAnP9nqKgXarAX5Cdg%2Bhph48JM73ObDoc5fndGDJizw1WklOweFySWdOY76BgkybT%2BMvHazs4nW87WsfB6R%2FLfRiK70DlSlwBNjOwpJk9RB5NlFTMen7ebo61SYMjiVcoXBkCctNQCojEkRFMjLvq3gj5TiZKGRvnEncE79I%2FaD01ShCy63KhnoSClUDLPjp3PcJSWLNJDSOWgtXOZkXqeAgubEPt5IluRgzTbSf7hfTl1YCFcZQw0MELX5n5DtwZLMs6zF8Wp70ha72G6olEOofmSyQlKkzd7CFEQ17udk2vVyWiB7%2FOHQQMM4VITg4KnswGy5vm2Ru9YKwhF8PL8kgSRH3eNri1zyzleze5cH1kNTxxcinkJzjftmH8M9NVZOR7NghnGTmfcaijOB59UD7mXuB1fGwCuzZ0V6n8bs%2B3iQZH005c0yevyXBqercxxXXSwYL4bdoUPbUAu6czFesiZNXp1y2nz%2Fe%2BMOQUgWi355lYFRYiMmsgK7%2FLS7NSmO1AA5CTzle3XNf7phvWLXw4e7kb8a39KExdkPx6jema12U5VGvzBDaPfnKn7GeC9pksdjhbbuoqnvuTmHIh6cal2qc5gEqxYMqGC0vtJeWdCarxpswq73JxAY6pgGK%2FidEjxQcVW2%2FBSFWV9eP03TvAVkgV%2FwuP0lEeEJdWShgnkc3rIGeCxd44maOrshyaGk1CBj6OGw2Y8EF%2FPSZBYHXTxUBth%2F3tzgyx%2FVoSmwjNrjKX8NmYWcm9QCVQ1yhRUCW%2FatHdBNUHBYHVPxwvPxo8AX2mnNHR%2BhlK8ehY3lI%2FajzBBG8Qs3h%2BjnNDm2oMD9GgXwfjvPREvKLtBIev7cQdeXc&X-Amz-Signature=ffa607192f85b28e2de19243a24e642fdc0d956537f97abb1e5bca58912d201b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
