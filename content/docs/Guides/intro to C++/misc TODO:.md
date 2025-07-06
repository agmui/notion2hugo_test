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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWB5FLLD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAR3NmJzlEW7Qi%2F0ZC7AkH0lzVLwf21MXvS0rYwuwolDAiAtJZalIFO8gO%2BTiFqMnXq4yMcXxbGnDRhByixzD48DmCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZFm6xls8%2B0ZW5U5aKtwDRiPEULJKBIp2yyrSKyab886DKkFF2BIea8lvWRpyK59IrjtplK%2Bx8aIp6vIMaPZnDWUXAmfcXJjBV2H2BH9FbDjWEvjajHZyNEkQn31LgUe%2FfzZmBAIYw6ydNDDfYOLxv1O3J%2FTjiB5Ruyd2oGc3VobuNEeQT%2FXr4sYQnah%2B0dSqkHe41p5IzXjtju1ubA7%2FK2i%2B68etyuQdc5BU5MGG%2B7Cd3jE9yn5aXmn6JnRRBUfId9Iv4bGIhjtURSMMyuz9MPghxMzj5zitPdOQ6a0evuslSubGGY2ncQsynjRbxXeGr8NGbenFsqMtF1OVa1MyZa1qNcuoYkoF7pZts0zvdCVPVcP5xVQhZ93N9ffWw7ndKFAyyGv3kSYORTb6SxZS5pVKGmi%2FzIQbip5h0%2Bv6Bd5UTHgaRxle0v0q6NGSncWfTxCeUzTsP9tq7%2FETIpfqNedTNI0KCm7GzukpOLQD5ShYinBK1ANYE%2FZ4KV%2FuhgKPLgX2jf9H5OgpIPRSXblWaGC6JiRN7Mg1qcCtY%2FOZBDRge9Kad%2Bx2BNXHSaPzidCe53j5vLDAvfC3vKNfBuIYtme0G6%2BRk%2BINQZH65dL96QY0%2F5%2Bn41R58AnuVrCk%2Fyr74XdP8JmOAOFVYaMw9amowwY6pgE3UPuGbO6jkbuMoK5fVGC1nNBxl3M5MN%2Bjmurd1aNUi%2BYWso4P%2FOFFwrNC3rjey67ULMOw9D53utC41%2BG0X%2F9UpQiTdcXbHbTU6MMBI25YsX0tMrGoubXpXcKH7jIO0rerrYlPOrXi1c9qb%2B2fsYWYzhUUQi4R4prq91%2BX9%2FQwvRm25PEvEUHKWbCruUk4pIsZNPHG4%2BQADc5tUx2doA%2BZhMALWgT6&X-Amz-Signature=6cd26b1565270fb88c71718bf28aa19e9104e96231f58eb908c8753f1ea664c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWB5FLLD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAR3NmJzlEW7Qi%2F0ZC7AkH0lzVLwf21MXvS0rYwuwolDAiAtJZalIFO8gO%2BTiFqMnXq4yMcXxbGnDRhByixzD48DmCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZFm6xls8%2B0ZW5U5aKtwDRiPEULJKBIp2yyrSKyab886DKkFF2BIea8lvWRpyK59IrjtplK%2Bx8aIp6vIMaPZnDWUXAmfcXJjBV2H2BH9FbDjWEvjajHZyNEkQn31LgUe%2FfzZmBAIYw6ydNDDfYOLxv1O3J%2FTjiB5Ruyd2oGc3VobuNEeQT%2FXr4sYQnah%2B0dSqkHe41p5IzXjtju1ubA7%2FK2i%2B68etyuQdc5BU5MGG%2B7Cd3jE9yn5aXmn6JnRRBUfId9Iv4bGIhjtURSMMyuz9MPghxMzj5zitPdOQ6a0evuslSubGGY2ncQsynjRbxXeGr8NGbenFsqMtF1OVa1MyZa1qNcuoYkoF7pZts0zvdCVPVcP5xVQhZ93N9ffWw7ndKFAyyGv3kSYORTb6SxZS5pVKGmi%2FzIQbip5h0%2Bv6Bd5UTHgaRxle0v0q6NGSncWfTxCeUzTsP9tq7%2FETIpfqNedTNI0KCm7GzukpOLQD5ShYinBK1ANYE%2FZ4KV%2FuhgKPLgX2jf9H5OgpIPRSXblWaGC6JiRN7Mg1qcCtY%2FOZBDRge9Kad%2Bx2BNXHSaPzidCe53j5vLDAvfC3vKNfBuIYtme0G6%2BRk%2BINQZH65dL96QY0%2F5%2Bn41R58AnuVrCk%2Fyr74XdP8JmOAOFVYaMw9amowwY6pgE3UPuGbO6jkbuMoK5fVGC1nNBxl3M5MN%2Bjmurd1aNUi%2BYWso4P%2FOFFwrNC3rjey67ULMOw9D53utC41%2BG0X%2F9UpQiTdcXbHbTU6MMBI25YsX0tMrGoubXpXcKH7jIO0rerrYlPOrXi1c9qb%2B2fsYWYzhUUQi4R4prq91%2BX9%2FQwvRm25PEvEUHKWbCruUk4pIsZNPHG4%2BQADc5tUx2doA%2BZhMALWgT6&X-Amz-Signature=38654b5097fc46589764c945bb9d104ef2a7edfd22ed76332eb25dd578f7dbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
