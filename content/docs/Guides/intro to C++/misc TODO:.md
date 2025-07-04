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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YMJIU7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDXjHiR4TA74mXhqbME9SCuF%2BYuJguHJvpGQflW6H5PkwIhANCYkv8R4HzGRUBG4Rcky0OxKghEQXi5Jw%2FQF%2FYf3HHtKv8DCCEQABoMNjM3NDIzMTgzODA1IgxlJAvgbd2tRa7XK8Yq3AOIzaB9J0xqz7vWJdyvnYNP9aK9lA7HvVH9F1hJ6QtOJQuPbBOfNtoFYAM2CFLn2W%2BYJ3Cek1ATEB3fwgvl9GTLARwN2EoWwzv876xzUfxWYE9b9kOBIywQas%2BwVdAQ%2B715XU7H22qSz6VlFlPLCYEfwHeK3tt1NPS52yvQzCEGGDJQp%2Bfw6Et7xFB%2FXijqXCfz9xbWiJtvahwGXgJqFfCkcnZhU4%2B25f1dXDFLmxj2tSW903%2F35iX6xp8qO53%2BpoVROdskASsw7jeInMk2uUSc0W9VASnCP%2FFQiHdfZYYW8YrzysiYJza4E8smV8A%2FWB1fPMXu8uTik8NcdahkTOZXiMYUIg1MmGgrG%2F94NW4AEpimSyaKJZyKJVa8EdnEd%2Fl56QlcFwJn4nKeCsh2XtWHwP1YhbgOYGf27dQfidDr6xVoZIorAeoNCniy9JcKwBG2tMj098ChYeP8HOk%2FxYL1G37U%2FCjq4Jdx0t7D0nbD5ZxUUT9Z28eRKKximfsajgCHQGKWX1XWYIMhztpv2FUJ3efJGZ7OW1O6oSWY40BgIYH88XpNpUE1PlOYLqTDPK8bOG%2Bzr7ERXnHJRZVuXy0rUS7dx5qzohmZbLJsQj496EeSJMzw8zDtMe2PsTDZt5zDBjqkAeea%2BrFhip3lQxWlbr0cmREpVprdDaFK3ah7BfebGhTe6dcXCNtF7L4gsK6tk4PFF6b7en4wsvzAJ3GcTpQXZP3Pcn5DQLkqgLMQNkJRi0qTAJw%2FJ9SgVdGCwXAqB8iTdhqW23Ato2xOukU8zk2MxjrhEZmZafsm9aFJhZREvQRGa2aJZhEAK1FD3agMojlE9ByFlQve5mxoyrh5TBKYHzjn4fY7&X-Amz-Signature=d1aaaf9d8525efc7fc55315c14a80fa7258bcabf8c40738bdd46efa752c6aaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YMJIU7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDXjHiR4TA74mXhqbME9SCuF%2BYuJguHJvpGQflW6H5PkwIhANCYkv8R4HzGRUBG4Rcky0OxKghEQXi5Jw%2FQF%2FYf3HHtKv8DCCEQABoMNjM3NDIzMTgzODA1IgxlJAvgbd2tRa7XK8Yq3AOIzaB9J0xqz7vWJdyvnYNP9aK9lA7HvVH9F1hJ6QtOJQuPbBOfNtoFYAM2CFLn2W%2BYJ3Cek1ATEB3fwgvl9GTLARwN2EoWwzv876xzUfxWYE9b9kOBIywQas%2BwVdAQ%2B715XU7H22qSz6VlFlPLCYEfwHeK3tt1NPS52yvQzCEGGDJQp%2Bfw6Et7xFB%2FXijqXCfz9xbWiJtvahwGXgJqFfCkcnZhU4%2B25f1dXDFLmxj2tSW903%2F35iX6xp8qO53%2BpoVROdskASsw7jeInMk2uUSc0W9VASnCP%2FFQiHdfZYYW8YrzysiYJza4E8smV8A%2FWB1fPMXu8uTik8NcdahkTOZXiMYUIg1MmGgrG%2F94NW4AEpimSyaKJZyKJVa8EdnEd%2Fl56QlcFwJn4nKeCsh2XtWHwP1YhbgOYGf27dQfidDr6xVoZIorAeoNCniy9JcKwBG2tMj098ChYeP8HOk%2FxYL1G37U%2FCjq4Jdx0t7D0nbD5ZxUUT9Z28eRKKximfsajgCHQGKWX1XWYIMhztpv2FUJ3efJGZ7OW1O6oSWY40BgIYH88XpNpUE1PlOYLqTDPK8bOG%2Bzr7ERXnHJRZVuXy0rUS7dx5qzohmZbLJsQj496EeSJMzw8zDtMe2PsTDZt5zDBjqkAeea%2BrFhip3lQxWlbr0cmREpVprdDaFK3ah7BfebGhTe6dcXCNtF7L4gsK6tk4PFF6b7en4wsvzAJ3GcTpQXZP3Pcn5DQLkqgLMQNkJRi0qTAJw%2FJ9SgVdGCwXAqB8iTdhqW23Ato2xOukU8zk2MxjrhEZmZafsm9aFJhZREvQRGa2aJZhEAK1FD3agMojlE9ByFlQve5mxoyrh5TBKYHzjn4fY7&X-Amz-Signature=d51ed1699eb93ae110c4ffec3944bcba4b2283d0c0a0bc2543ae819eab7d6de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
