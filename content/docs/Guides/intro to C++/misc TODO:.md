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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTTUS2S%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3zWTnJgfc724qnJOsfwojzPR4FMMr%2BhnYiJYQKrAucAiAq2O1itA%2BKhg7a2%2BTdYXC7BAr7itJCd4GDinwI%2FoD3bCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8JQkRi3RNY%2F5Jds%2FKtwDDN3qXNIeP4QiZo%2BxZWdKOWBACY%2B%2FqQxRDtj0CD9q0WRkCX%2BhxBsBye5d2wdlqbmqSAAqBkw2PTpBDW8QS9wrzBO8qFOe%2F7bRYbPI%2FvWVKav%2FOzCK%2FYEvlg9qc9MO66M2IlsOLUpPXG9iMtQASWq633l1Sm9aA6ZZZLtZlm%2BRxBF%2FSDgk%2BiKJ9J9KI5f0tkfHbZZM1QO0ztyQxbBcyMklKfooB6lCxWVlgQ282rqtJ1ETH25mxCvPYfiVg9quLjiWXDoGPWTdL5S%2FqXlWhzdY6UtIA%2B%2F6k5PKKlO1ZkzfHnunpd%2BLD1Nw%2FqeOt7JiYQkiPoLp38zR4VnKQvjHfUpqj32zVO1079BK2EYqf%2BGrcc7SbQzOvaIa8hrXKuyZHtA8R5fJ6ghTb%2FREG9EfR1ehPY0QcA5xIuaf2plKaUw%2B9%2FVxaR53N3zqrd1HR7UZ%2FB4Z8nttHbQ76%2FIubXkz%2Bron48CvtJzlK3%2BOrUdTcGkm5%2FITD4xkWI%2FdQTnjauRtg6F99E9s9Pm%2BRH33OTaVRma4GzVMUZMKngRHLzKRon%2FXfPIeEqkIx8RJNhOVkVEkX1HMDdQq6cRDulATZC3pgMfxXS7SH5%2FV%2FAn42aUTSA1lwa8qAV9dnYDBkqs3Jywwq8mhwgY6pgGiyzGfb0AUEf5gfmps%2BsCXSYw9jvGDMXvEu8klQzm2YpqqbgKrgDIoa6plDjRVIdgCppqaWA84g9VTLjOTN%2ByY4lVwFR4ZdBEndUUBsbtk0hclt%2FkTR%2FVuuNsjkgB5hSmgsEEKNdDGq0GHgsxKKUek3k5r86sNfywM%2BETDeNlaqnm8zRBAT0xuGrj14PZ4TkcXGnKgkSGx0TcMMZMNpb4%2FVaTHc5Km&X-Amz-Signature=4c7f5842cea42f0cff05e6b766b580346b7c3fcb20237cbc265049161650f881&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTTUS2S%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3zWTnJgfc724qnJOsfwojzPR4FMMr%2BhnYiJYQKrAucAiAq2O1itA%2BKhg7a2%2BTdYXC7BAr7itJCd4GDinwI%2FoD3bCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8JQkRi3RNY%2F5Jds%2FKtwDDN3qXNIeP4QiZo%2BxZWdKOWBACY%2B%2FqQxRDtj0CD9q0WRkCX%2BhxBsBye5d2wdlqbmqSAAqBkw2PTpBDW8QS9wrzBO8qFOe%2F7bRYbPI%2FvWVKav%2FOzCK%2FYEvlg9qc9MO66M2IlsOLUpPXG9iMtQASWq633l1Sm9aA6ZZZLtZlm%2BRxBF%2FSDgk%2BiKJ9J9KI5f0tkfHbZZM1QO0ztyQxbBcyMklKfooB6lCxWVlgQ282rqtJ1ETH25mxCvPYfiVg9quLjiWXDoGPWTdL5S%2FqXlWhzdY6UtIA%2B%2F6k5PKKlO1ZkzfHnunpd%2BLD1Nw%2FqeOt7JiYQkiPoLp38zR4VnKQvjHfUpqj32zVO1079BK2EYqf%2BGrcc7SbQzOvaIa8hrXKuyZHtA8R5fJ6ghTb%2FREG9EfR1ehPY0QcA5xIuaf2plKaUw%2B9%2FVxaR53N3zqrd1HR7UZ%2FB4Z8nttHbQ76%2FIubXkz%2Bron48CvtJzlK3%2BOrUdTcGkm5%2FITD4xkWI%2FdQTnjauRtg6F99E9s9Pm%2BRH33OTaVRma4GzVMUZMKngRHLzKRon%2FXfPIeEqkIx8RJNhOVkVEkX1HMDdQq6cRDulATZC3pgMfxXS7SH5%2FV%2FAn42aUTSA1lwa8qAV9dnYDBkqs3Jywwq8mhwgY6pgGiyzGfb0AUEf5gfmps%2BsCXSYw9jvGDMXvEu8klQzm2YpqqbgKrgDIoa6plDjRVIdgCppqaWA84g9VTLjOTN%2ByY4lVwFR4ZdBEndUUBsbtk0hclt%2FkTR%2FVuuNsjkgB5hSmgsEEKNdDGq0GHgsxKKUek3k5r86sNfywM%2BETDeNlaqnm8zRBAT0xuGrj14PZ4TkcXGnKgkSGx0TcMMZMNpb4%2FVaTHc5Km&X-Amz-Signature=e0711b4628d7d2d14e2541571b1532f5a20e962d7cfd66cc543cbd75960f0aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
