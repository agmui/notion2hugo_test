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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZFQDJX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlRDwVlekdWlehO9x%2BsrQk3a%2FxBU7tfKTFEzgo6p2h1wIgZcMHJaPFja19aKppu8pY9nr9EJlnHBmFE7eKRZK0Ahgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEthHZ0tbOUYjOHJqCrcA2%2F4KVDVe6EASx6CjeMiD08YX3%2FYRMnbbjxIlI03T%2FF%2Fue898jiB1w8tF%2FRjLBhbdlT0h9DR20inHRpBO8aXnwcdJ7w0V7KB0MXporwOhVkvL6RezJ%2F0AlJDrkGzRaOi3%2FX52vDAZ%2BUZx3RAnm19To9CdsnQJrC0IJqDeY%2FoloLrb1qVA9T3M5%2Brjekwx5O29AzhguJ8cC6zry5zPUMpr%2BASa5JbqeFXPk9jVtZceSIl2UfE1e5DJsaAcxGg%2F7Nk7U5%2BJaiNPP3tM9%2FnbJU8ybsyw7n9zIfbDiG41ZA7sRZ73XDQNk24fsIiN927owVJvHBg0rnGjMkvOLShCs2fgurIdWw%2B5ik3H21%2B%2F1Y5PmnD5hszbV60S7kW4t9UH8ELcN%2BAGEc15kPkEZtjfLY2JnTQn0O%2B22wLKyEDNqHlNZOudGj9pV5hpdDSFzx%2FIS%2BLKaLu3Pp2k27zCrIJJnyQq2Nozwug2jQq4x1980yf6vzIMAIU6KcxDZv%2F%2BFQQZI3UXxCdbWjmtRkaShaOwkNgSIFlLY8Rlz8GnAamSr%2BrSX816zT3XcBYNUy9fKVMwLbi0SSdtXSrICJ5jJKnMiHkq83V8Nk2cmGogc6fm94nl6a%2BFQmAgIB%2BuJhsK6gFMNfYpL4GOqUBnQDkA1e4YJvuqCzSHYOOqVTzX6ynCOMn30MO6RHziF1Lj6qA1gBH9PVu15dxXoNTrdG6yQhvqBUGdZ%2BkYErjin2bijPm6b9D847cjQoqmdqKzicGj3QPPmKkbp1TvPZaH2wX%2Bdd7snX5gO8Q%2BxvKE1GpGOKdePJHxC2d1wP9IZEUU%2FVkwJYuzXhP2RCpluaXPZtF%2Bo%2FH5UpXOqW8Pi2GeHhyXuxS&X-Amz-Signature=d77c826399c72bdb0885ab600ca637b998e54fb652b8c3bdb4cd5e132f99ef06&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZFQDJX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlRDwVlekdWlehO9x%2BsrQk3a%2FxBU7tfKTFEzgo6p2h1wIgZcMHJaPFja19aKppu8pY9nr9EJlnHBmFE7eKRZK0Ahgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEthHZ0tbOUYjOHJqCrcA2%2F4KVDVe6EASx6CjeMiD08YX3%2FYRMnbbjxIlI03T%2FF%2Fue898jiB1w8tF%2FRjLBhbdlT0h9DR20inHRpBO8aXnwcdJ7w0V7KB0MXporwOhVkvL6RezJ%2F0AlJDrkGzRaOi3%2FX52vDAZ%2BUZx3RAnm19To9CdsnQJrC0IJqDeY%2FoloLrb1qVA9T3M5%2Brjekwx5O29AzhguJ8cC6zry5zPUMpr%2BASa5JbqeFXPk9jVtZceSIl2UfE1e5DJsaAcxGg%2F7Nk7U5%2BJaiNPP3tM9%2FnbJU8ybsyw7n9zIfbDiG41ZA7sRZ73XDQNk24fsIiN927owVJvHBg0rnGjMkvOLShCs2fgurIdWw%2B5ik3H21%2B%2F1Y5PmnD5hszbV60S7kW4t9UH8ELcN%2BAGEc15kPkEZtjfLY2JnTQn0O%2B22wLKyEDNqHlNZOudGj9pV5hpdDSFzx%2FIS%2BLKaLu3Pp2k27zCrIJJnyQq2Nozwug2jQq4x1980yf6vzIMAIU6KcxDZv%2F%2BFQQZI3UXxCdbWjmtRkaShaOwkNgSIFlLY8Rlz8GnAamSr%2BrSX816zT3XcBYNUy9fKVMwLbi0SSdtXSrICJ5jJKnMiHkq83V8Nk2cmGogc6fm94nl6a%2BFQmAgIB%2BuJhsK6gFMNfYpL4GOqUBnQDkA1e4YJvuqCzSHYOOqVTzX6ynCOMn30MO6RHziF1Lj6qA1gBH9PVu15dxXoNTrdG6yQhvqBUGdZ%2BkYErjin2bijPm6b9D847cjQoqmdqKzicGj3QPPmKkbp1TvPZaH2wX%2Bdd7snX5gO8Q%2BxvKE1GpGOKdePJHxC2d1wP9IZEUU%2FVkwJYuzXhP2RCpluaXPZtF%2Bo%2FH5UpXOqW8Pi2GeHhyXuxS&X-Amz-Signature=6f0aac729588e9be35aa517c3b635f72e9770382dc78f64cd7d5f7013096b5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
