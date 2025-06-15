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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5YIED4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBC3r6XFO4vZkTmi7RxQO8%2FnszMCqMwa6HqQ9NG0UtMlAiEAmQeITg02tEvffrMR%2BDLOdzWqFgiqFzyRb19u6GzmFTAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDK%2FTUYh1Xel3zUTpsSrcA4YHXb0pnA6yQhYD8oFNpniVbgRkDBlQLZ8lSpF%2B6SD40F9LpNHu35DDx%2FCOn3ew%2BWFDQVi5hmY9pqcWhw9thJ5PSDmUJ%2FmYJHLCfYUMwehc0xQ53aIWcC%2FHRxy9TBXwz%2BE68G2thtv%2B%2F%2FtWn%2FtpcdGJLfi69Jxjd%2F0ewLaCBAdCfQsUInv2KHT7c63UuxlVfSMGXRJFe6GlPEKJ8YuqUdE%2BAxGRw5tlAWMy485cc%2B%2Fgau3xnaF1klXLP%2Bn8vH%2BC6WxyhTjhvkl8stMurV2u31ftr0quI3n3sDD8dFbXfKEvLU8BzxOnMR7ge9oyz4wqeiTY%2BSjQBrgVXZNTFFb9J7VMoK39vBhJvmLI2jiFhQY83iakEu5DFd%2BRyqXyPqTpyi79m4nnC6x2XTvmb0m2ca7V3Hbp2XFLEb49reGhVQVkuuttSbF7Rzt08xpIQG9GiR%2Brq4PTtSp%2BALhGaOVL57zzEdES73QWFrS2xnqvzBtEEwMyA4PEAAAmXrbq9y5Qw7oP1MCbnEnfH8THZgk%2FszM1BotT972YTju%2FCx2dirjU0jJxtQvnbsR4YAUoLIEH9bdcGsduwm4YERkQARrF3Py4TyTIwGqcC1h%2F0W%2BMkXUyBkNOK0Y8bbd37LDMMJyEvMIGOqUBuV0duS2I%2BDb9Gmtfllmo7dbzBzIDGEkSnhnaDk0SzOxe3WAgRIRPtOfQ3gk604VgNYaiEJNELHszAAoCWnf3FZMidSoDorHdD8x4tRpXKtrIvrjfuljoo3CGp5zIxZBHOOds01L90zugWu41UyU%2BxoLvW5IjrlgY04oEW2oeKzi34VKAHuOgPW71sciK%2BY0ZZQmu%2F9VPl0PRAXRgmlNPFo061FXK&X-Amz-Signature=0a39c9833e889b4d4eb90fbee0dbf79468a5d3f391aa74d1261ce1f481ee9ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5YIED4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBC3r6XFO4vZkTmi7RxQO8%2FnszMCqMwa6HqQ9NG0UtMlAiEAmQeITg02tEvffrMR%2BDLOdzWqFgiqFzyRb19u6GzmFTAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDK%2FTUYh1Xel3zUTpsSrcA4YHXb0pnA6yQhYD8oFNpniVbgRkDBlQLZ8lSpF%2B6SD40F9LpNHu35DDx%2FCOn3ew%2BWFDQVi5hmY9pqcWhw9thJ5PSDmUJ%2FmYJHLCfYUMwehc0xQ53aIWcC%2FHRxy9TBXwz%2BE68G2thtv%2B%2F%2FtWn%2FtpcdGJLfi69Jxjd%2F0ewLaCBAdCfQsUInv2KHT7c63UuxlVfSMGXRJFe6GlPEKJ8YuqUdE%2BAxGRw5tlAWMy485cc%2B%2Fgau3xnaF1klXLP%2Bn8vH%2BC6WxyhTjhvkl8stMurV2u31ftr0quI3n3sDD8dFbXfKEvLU8BzxOnMR7ge9oyz4wqeiTY%2BSjQBrgVXZNTFFb9J7VMoK39vBhJvmLI2jiFhQY83iakEu5DFd%2BRyqXyPqTpyi79m4nnC6x2XTvmb0m2ca7V3Hbp2XFLEb49reGhVQVkuuttSbF7Rzt08xpIQG9GiR%2Brq4PTtSp%2BALhGaOVL57zzEdES73QWFrS2xnqvzBtEEwMyA4PEAAAmXrbq9y5Qw7oP1MCbnEnfH8THZgk%2FszM1BotT972YTju%2FCx2dirjU0jJxtQvnbsR4YAUoLIEH9bdcGsduwm4YERkQARrF3Py4TyTIwGqcC1h%2F0W%2BMkXUyBkNOK0Y8bbd37LDMMJyEvMIGOqUBuV0duS2I%2BDb9Gmtfllmo7dbzBzIDGEkSnhnaDk0SzOxe3WAgRIRPtOfQ3gk604VgNYaiEJNELHszAAoCWnf3FZMidSoDorHdD8x4tRpXKtrIvrjfuljoo3CGp5zIxZBHOOds01L90zugWu41UyU%2BxoLvW5IjrlgY04oEW2oeKzi34VKAHuOgPW71sciK%2BY0ZZQmu%2F9VPl0PRAXRgmlNPFo061FXK&X-Amz-Signature=0880ef8ca190e1d995691936aeb255743caafd8ef5c36ed9e94d8e43d56b0515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
