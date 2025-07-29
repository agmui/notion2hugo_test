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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHU4MPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIF1niBor7Y7lRKpvGvYN2Nw%2Fqv%2F%2FEXM1xCWwXMBiBMYyAiB0Zzwjq0kGRmUnxZZwajDB19Xbd1dBxbIadNwjLQL56SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeQSkoVmQIdB8MSUlKtwDInl%2BSesU%2BUCaIuSs7P1tx7ZFwBZmHZ2egSwXFZ%2Facznlft%2BvE07Zc7NQCg1LpDw2E2nikGKvSzXJJ%2FfDwEFGtN8sTCZryT5fu7dfDb165fEsrkfXFySf%2FOcZRnYIyDySpyt9dQ1ZlWrOrkvrBftIzq2nOBXf%2FkqZk6luJIVfeyffu4lDgIxF7vRwUw6c9aJ8WeuTpCjGCl3uNc258hq0eNOhpc1HJOUfo49CjEkzsInRsVcLCBEXYLVDplcH%2BGJFOxsztHhtiA9IrRWIeQ7oQ2QGIGkYY0wzKzRGESR3IkUPZnF%2FVzlan95QlCl4AWdzRr5fI1VE0SquHTtqcCtY3zGnMTPAf0xd8FDhXwaxn8DYNN2rX%2BlIGrt%2F13P7d8YO46ndi9%2FYa2KWA5JdhMoSYm06GP43J7tP5PVD0jfrUxvwZJvBQLBkgvM0Daup4kfxdd8fJdgDn33b6vdGCmD0o%2BPxwteAQHsgAD0HCKa4e3k4iifZLKTfozOam1%2Bwgfovmo3Qv8UPGvBQoxY4XwNKV9LjFx%2BAk2k8I5KH3Z6%2BOhEM8Zuk%2BhNkjxChoWwGuoovG06z5s1j8dZr2CiBtco2tYda2SbcUvEDMK6OowJFv9ZLD0Jj7UZFUmWcyegwxrShxAY6pgF%2FhcmOwKz%2Ff51yj3oTsKlWXkm5tP%2BUMmp1E6MECtaPeb7AYiax8cTzisbgfW3BASjGnfyS0FMbMOa1ODV%2FtjGo9cklCE%2FzkbPOPI%2F5%2FmuNBp5n7%2FF%2FmtghIW%2BiUtDePIiLZcXBjVl1eCfOq98PhMLEfFbpVEJ6HhGKRC1P4H7JmIVD6JYi0d%2FrIIDMV7DAJ2MOtQCQXxaT9LtaWszM6N3E9mWFB39z&X-Amz-Signature=4f854ed2c62d1a0c84e801d178ceb61e961a59235f4219bcb7ad9a99835dd285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHU4MPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIF1niBor7Y7lRKpvGvYN2Nw%2Fqv%2F%2FEXM1xCWwXMBiBMYyAiB0Zzwjq0kGRmUnxZZwajDB19Xbd1dBxbIadNwjLQL56SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeQSkoVmQIdB8MSUlKtwDInl%2BSesU%2BUCaIuSs7P1tx7ZFwBZmHZ2egSwXFZ%2Facznlft%2BvE07Zc7NQCg1LpDw2E2nikGKvSzXJJ%2FfDwEFGtN8sTCZryT5fu7dfDb165fEsrkfXFySf%2FOcZRnYIyDySpyt9dQ1ZlWrOrkvrBftIzq2nOBXf%2FkqZk6luJIVfeyffu4lDgIxF7vRwUw6c9aJ8WeuTpCjGCl3uNc258hq0eNOhpc1HJOUfo49CjEkzsInRsVcLCBEXYLVDplcH%2BGJFOxsztHhtiA9IrRWIeQ7oQ2QGIGkYY0wzKzRGESR3IkUPZnF%2FVzlan95QlCl4AWdzRr5fI1VE0SquHTtqcCtY3zGnMTPAf0xd8FDhXwaxn8DYNN2rX%2BlIGrt%2F13P7d8YO46ndi9%2FYa2KWA5JdhMoSYm06GP43J7tP5PVD0jfrUxvwZJvBQLBkgvM0Daup4kfxdd8fJdgDn33b6vdGCmD0o%2BPxwteAQHsgAD0HCKa4e3k4iifZLKTfozOam1%2Bwgfovmo3Qv8UPGvBQoxY4XwNKV9LjFx%2BAk2k8I5KH3Z6%2BOhEM8Zuk%2BhNkjxChoWwGuoovG06z5s1j8dZr2CiBtco2tYda2SbcUvEDMK6OowJFv9ZLD0Jj7UZFUmWcyegwxrShxAY6pgF%2FhcmOwKz%2Ff51yj3oTsKlWXkm5tP%2BUMmp1E6MECtaPeb7AYiax8cTzisbgfW3BASjGnfyS0FMbMOa1ODV%2FtjGo9cklCE%2FzkbPOPI%2F5%2FmuNBp5n7%2FF%2FmtghIW%2BiUtDePIiLZcXBjVl1eCfOq98PhMLEfFbpVEJ6HhGKRC1P4H7JmIVD6JYi0d%2FrIIDMV7DAJ2MOtQCQXxaT9LtaWszM6N3E9mWFB39z&X-Amz-Signature=447bd400f56d9c0681156dc313e7ff0050ee55bd199625fcfc40f34153bbf26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
