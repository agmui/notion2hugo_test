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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRDEQ52%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICAHV9SEh60F%2FDq3bYgzAJsElBOVCZQsn5bioXMf0XGUAiEA3JB622f%2FTJGjSjKSzGMzdSzckDHFfA%2FlY%2BFd2gACoLYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJ4E1WpZ7d1Zq2wlyrcAx%2FA8Q9%2FdccpUIYEWBU2UimlimIvYORw3AoG43%2F5a8Hkh46pmHMlrkHIxt%2FvUA5a3ngw3Bjsn1ewznbSX%2BrsuFPPqO%2F5PIwyza%2Bj%2B5ShTtSDbZs0gmmqJ3lOIf9XbbZqFJcK3gb%2BQv8P7Xt5p%2BscZSO8n8wps1alBfDX1B3nbo19hMYfX7gdGZj4vREclwxjL4wDO%2FI%2FmlquX4W1X%2FpgIZvV34CLSa9A%2Fcc6Om7mzrJTkPFJ4KcsruCP4rCwF2SZg%2B6nGxmewregWp3NyBg4RHesB22aYKiZvHr%2FOCI0bc5ajVzt6XeneI3LYUlkF8dGm2sXA42SnZO5P4AY4B5Dcyjedll3ZMpCgvkjh6g8nQt8FQzcRi%2Fgw08pt1TUDQuB23nXph5J%2BX4oNWcogz9VwnhjbKAnGu6mU1gVpsGD6syQvVHovxz7k3AoS6obrPZCMPOSnRKYSyqkFcBCbn1TPUrfYtEe4wknqiHSVVA2ciE92C11YvvQIiFIo%2BeYtJJsgkf2AcptXameS08dyaK2VPzwQnWdqm1CXvB8iOyG%2BgGDShh7yoww4Rkfe6XsU0rwaIcO%2BpViICM1OgxC%2Fi0SBkDHAO%2FcAh5g9OsZAxSEKRVVJ5Uj9LR%2Fhlvtp6JRMO3I0MQGOqUBdlytoSLExRQrQ7Rw7nxaYNr8NpblKu%2Fsyyw0GaZDFNt6WtnM3RgQRY2sIZ3MwCSDIGov1eF7imnQazwWGvh8bF59Vj%2Fj6ufD%2B0FrZ0%2BFUFd65oyNNCHn8SFbAMuU%2F4DDD2jz7jNHuphZH%2BCn%2FzRotHoHuUIURexBAlEfD9hKZvP2UZWbbIlm7uTLL0zEjo8BD7I2j05736BntWuOqkdhQhO6y0TY&X-Amz-Signature=7a78c96aad1a4407717b16d3fde5e013034ee9fdfc4f07fc97bce211133317a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRDEQ52%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICAHV9SEh60F%2FDq3bYgzAJsElBOVCZQsn5bioXMf0XGUAiEA3JB622f%2FTJGjSjKSzGMzdSzckDHFfA%2FlY%2BFd2gACoLYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJ4E1WpZ7d1Zq2wlyrcAx%2FA8Q9%2FdccpUIYEWBU2UimlimIvYORw3AoG43%2F5a8Hkh46pmHMlrkHIxt%2FvUA5a3ngw3Bjsn1ewznbSX%2BrsuFPPqO%2F5PIwyza%2Bj%2B5ShTtSDbZs0gmmqJ3lOIf9XbbZqFJcK3gb%2BQv8P7Xt5p%2BscZSO8n8wps1alBfDX1B3nbo19hMYfX7gdGZj4vREclwxjL4wDO%2FI%2FmlquX4W1X%2FpgIZvV34CLSa9A%2Fcc6Om7mzrJTkPFJ4KcsruCP4rCwF2SZg%2B6nGxmewregWp3NyBg4RHesB22aYKiZvHr%2FOCI0bc5ajVzt6XeneI3LYUlkF8dGm2sXA42SnZO5P4AY4B5Dcyjedll3ZMpCgvkjh6g8nQt8FQzcRi%2Fgw08pt1TUDQuB23nXph5J%2BX4oNWcogz9VwnhjbKAnGu6mU1gVpsGD6syQvVHovxz7k3AoS6obrPZCMPOSnRKYSyqkFcBCbn1TPUrfYtEe4wknqiHSVVA2ciE92C11YvvQIiFIo%2BeYtJJsgkf2AcptXameS08dyaK2VPzwQnWdqm1CXvB8iOyG%2BgGDShh7yoww4Rkfe6XsU0rwaIcO%2BpViICM1OgxC%2Fi0SBkDHAO%2FcAh5g9OsZAxSEKRVVJ5Uj9LR%2Fhlvtp6JRMO3I0MQGOqUBdlytoSLExRQrQ7Rw7nxaYNr8NpblKu%2Fsyyw0GaZDFNt6WtnM3RgQRY2sIZ3MwCSDIGov1eF7imnQazwWGvh8bF59Vj%2Fj6ufD%2B0FrZ0%2BFUFd65oyNNCHn8SFbAMuU%2F4DDD2jz7jNHuphZH%2BCn%2FzRotHoHuUIURexBAlEfD9hKZvP2UZWbbIlm7uTLL0zEjo8BD7I2j05736BntWuOqkdhQhO6y0TY&X-Amz-Signature=7f85e33afe5ac466b62b2940ac984aa5a16ddd83729a140b26eea6aef7b3fe9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
