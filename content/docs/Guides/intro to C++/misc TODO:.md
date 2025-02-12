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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGTMTYY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUm6VtaNFHCQzwqAj3%2FhKhjbz6RpZjGb96%2F9h6NUmVnAiEAp4duC3XwxxLQuiDzSJqNQ%2FaI5ENoYrW%2F1VpCBz3f%2BWYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjgzEN9T0rQkJ%2FEACrcA5cyMwvni%2FtGGp3rAomeQbvOzJBVt2hdKag988%2BV3ueZuchZa13%2BKznKEbCM3fWZ8k%2BIBaxmt3yxMB2XcAE0e5xSONVxF8podpZo%2FIbnVKITP0AGMQNwLzHMBlkgzUe2f%2BAA%2BKbuDTUEwVyKHo%2Fus9gkH1Z%2Fw9LboU3zQYPaoCfCZkFYyhy8UjDcji4jaIGYTQYLhNJlEl%2FlHbn4pdvHDH1hXwP%2BC5SgkF5sYru4rbItI8pDi3WQ98RRpvy%2Fr9vO5hh1yP0%2BC3vnKpiF7CxfBLOUefZoAElSJKewe1yB%2FOGecRd3D%2FZBgnTsVL0DfUenatRL83oREFoTGAAs84rxtE94hit1Xy57FbuGtUbgOw1IZgtVT3gHN7Z%2FXj6%2FtgWV3WOzKQJh98B1JoUMdtYyOoufktmK4YTjek%2B2fWMZWU18Yw0K9jifoC7C941%2Bmu5jpWCug7g9qMhHpOE8ds3bEdNqfVNpFrswQ24wJMjSncTyfrBfdKe1TvGyyGU6QyRgmxKf0A3ZjrUtLZI%2BsNUWs7gz1thm7U8oL5G5MSwP5ENx0QVm43FU4eH%2BL39LeC2f2QPSf514QJMIhL1%2FP5xqWAYRjXX5mkr2NdZ7m1ta6ohQkRfscXvgaMNfw8eNMKSNsb0GOqUBEHH%2BCIPbnqf3kBozLwEYdd%2BJeHGOyoY%2FaQJGOT%2BTmge6DjgRRMoNMILVBguoVszJUFchzc9GLfY5VQDo05Sb9NE8aTJFsNkgqk9v2bifxyrShd4oaPOd3GefJYeIejQ0AbDGUdvJEyMKWRPbLth3jLaT7qQyGQf2bOGlkTAzbzmtRUankXr5J6Qq87%2FgocPgjyHTi6JbLtEbSPcGUJeAwqd1sCw7&X-Amz-Signature=ecf776e498a130277b76d094ca5d96d349889b8a6104bbe802350381b7785060&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGTMTYY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUm6VtaNFHCQzwqAj3%2FhKhjbz6RpZjGb96%2F9h6NUmVnAiEAp4duC3XwxxLQuiDzSJqNQ%2FaI5ENoYrW%2F1VpCBz3f%2BWYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjgzEN9T0rQkJ%2FEACrcA5cyMwvni%2FtGGp3rAomeQbvOzJBVt2hdKag988%2BV3ueZuchZa13%2BKznKEbCM3fWZ8k%2BIBaxmt3yxMB2XcAE0e5xSONVxF8podpZo%2FIbnVKITP0AGMQNwLzHMBlkgzUe2f%2BAA%2BKbuDTUEwVyKHo%2Fus9gkH1Z%2Fw9LboU3zQYPaoCfCZkFYyhy8UjDcji4jaIGYTQYLhNJlEl%2FlHbn4pdvHDH1hXwP%2BC5SgkF5sYru4rbItI8pDi3WQ98RRpvy%2Fr9vO5hh1yP0%2BC3vnKpiF7CxfBLOUefZoAElSJKewe1yB%2FOGecRd3D%2FZBgnTsVL0DfUenatRL83oREFoTGAAs84rxtE94hit1Xy57FbuGtUbgOw1IZgtVT3gHN7Z%2FXj6%2FtgWV3WOzKQJh98B1JoUMdtYyOoufktmK4YTjek%2B2fWMZWU18Yw0K9jifoC7C941%2Bmu5jpWCug7g9qMhHpOE8ds3bEdNqfVNpFrswQ24wJMjSncTyfrBfdKe1TvGyyGU6QyRgmxKf0A3ZjrUtLZI%2BsNUWs7gz1thm7U8oL5G5MSwP5ENx0QVm43FU4eH%2BL39LeC2f2QPSf514QJMIhL1%2FP5xqWAYRjXX5mkr2NdZ7m1ta6ohQkRfscXvgaMNfw8eNMKSNsb0GOqUBEHH%2BCIPbnqf3kBozLwEYdd%2BJeHGOyoY%2FaQJGOT%2BTmge6DjgRRMoNMILVBguoVszJUFchzc9GLfY5VQDo05Sb9NE8aTJFsNkgqk9v2bifxyrShd4oaPOd3GefJYeIejQ0AbDGUdvJEyMKWRPbLth3jLaT7qQyGQf2bOGlkTAzbzmtRUankXr5J6Qq87%2FgocPgjyHTi6JbLtEbSPcGUJeAwqd1sCw7&X-Amz-Signature=5afef904e4baa4f7941e9b4441e5b56a67c6de2cc3d9e21dae0a8d1d1daa3e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
