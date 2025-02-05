---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEYTJZP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgyqM6RmlDyuByxk7kYCF3ZmXftVMkQTjG2IXrwIJcrQIhAK3lRpqtAYiywMa6zXiVSnrtV9er6TPuoiPcrymP8lUeKv8DCDkQABoMNjM3NDIzMTgzODA1IgzhSeM32kNfb%2BERZw0q3AP8aCBy03srQXjxdU3YVrCRwp9EaHiaFhwDILlMMCmYXdpLRyT7B526ThTh4O1hGvgkxo0sV8VyiMPoFmtaJgN%2F7PaCNvGjY%2BrAWmC%2FHqDdGojZQvnHTJ%2FC2jHVHOE8l5ySuYoyd1kN12wyVM2a5to%2FNd6YHtfH8YfjQPzBqrVcj6twe5%2BmCgVcNhBQfAFLgA5b6C0BUUKq9WxVz1y5BbmQASCjOwv1Yb2kr1jhqfUGtkhCiGAKfPHht0pbk1FKQWbT8JLmatXl0prA9CIKqNFgpgN0zdS3b94TKQFOfsoMuK323SVRnyttLWV6MAqHwVblJl3G15LcXMNcIcjzJKk%2BdfV1c0mvwhBQCQUvUIzKg2lI6%2FdC3MJvLXqD7NeWLrPx24vqrvQUNUnDlXRKePNh6WarSLlZMsgNzUL6AskKlF3Ti81efjxB6QlAzqh%2FOCTwBJcFXbCwQ9IA60iojpYzMue9uMbw%2F48QMzQ%2BibvGOcipJgrVKukQDBxXke0MvHB6mhspOaGeRvPbNzQr4Sr%2BoiB46m%2BAQfqS3gwhfxRwnT3NXmlvlRMoRioHQtIL21b7x%2FMRT3S4h6ZjehWqqQMD85pH3aGoJNUvII3cc1YKmdi%2BnLzC%2BfPN9MkHczCKz4q9BjqkAdm48GWlo2JdN0vddnaHJeXg%2F5GPwm0%2FdOyLl1JZI%2FDpArTLt9tezUFUuKj9Vv7N1iAmaWTlO%2BjbeOG5v4l%2F%2B8%2B%2FyVq0OzjhTfU%2BCtt8svh7%2FGjrFQ7qHHsJ79CJSxZ0jj7eQITOvi%2BxyiPz5Ljm4%2BXgxfruvdj4dwmqMN2K42MMe%2BvXro1zSO4DpOkRRJj%2BjWFiUInBqN4ZBbGV%2BjUlCs79bZNZ&X-Amz-Signature=72636661eb97e4a314ea6d2fd8c76ff8cf1b1128b1d86c8dadf616577e26d872&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEYTJZP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgyqM6RmlDyuByxk7kYCF3ZmXftVMkQTjG2IXrwIJcrQIhAK3lRpqtAYiywMa6zXiVSnrtV9er6TPuoiPcrymP8lUeKv8DCDkQABoMNjM3NDIzMTgzODA1IgzhSeM32kNfb%2BERZw0q3AP8aCBy03srQXjxdU3YVrCRwp9EaHiaFhwDILlMMCmYXdpLRyT7B526ThTh4O1hGvgkxo0sV8VyiMPoFmtaJgN%2F7PaCNvGjY%2BrAWmC%2FHqDdGojZQvnHTJ%2FC2jHVHOE8l5ySuYoyd1kN12wyVM2a5to%2FNd6YHtfH8YfjQPzBqrVcj6twe5%2BmCgVcNhBQfAFLgA5b6C0BUUKq9WxVz1y5BbmQASCjOwv1Yb2kr1jhqfUGtkhCiGAKfPHht0pbk1FKQWbT8JLmatXl0prA9CIKqNFgpgN0zdS3b94TKQFOfsoMuK323SVRnyttLWV6MAqHwVblJl3G15LcXMNcIcjzJKk%2BdfV1c0mvwhBQCQUvUIzKg2lI6%2FdC3MJvLXqD7NeWLrPx24vqrvQUNUnDlXRKePNh6WarSLlZMsgNzUL6AskKlF3Ti81efjxB6QlAzqh%2FOCTwBJcFXbCwQ9IA60iojpYzMue9uMbw%2F48QMzQ%2BibvGOcipJgrVKukQDBxXke0MvHB6mhspOaGeRvPbNzQr4Sr%2BoiB46m%2BAQfqS3gwhfxRwnT3NXmlvlRMoRioHQtIL21b7x%2FMRT3S4h6ZjehWqqQMD85pH3aGoJNUvII3cc1YKmdi%2BnLzC%2BfPN9MkHczCKz4q9BjqkAdm48GWlo2JdN0vddnaHJeXg%2F5GPwm0%2FdOyLl1JZI%2FDpArTLt9tezUFUuKj9Vv7N1iAmaWTlO%2BjbeOG5v4l%2F%2B8%2B%2FyVq0OzjhTfU%2BCtt8svh7%2FGjrFQ7qHHsJ79CJSxZ0jj7eQITOvi%2BxyiPz5Ljm4%2BXgxfruvdj4dwmqMN2K42MMe%2BvXro1zSO4DpOkRRJj%2BjWFiUInBqN4ZBbGV%2BjUlCs79bZNZ&X-Amz-Signature=86ef68e0862c50de1b43b00b68431c3423ad3523646a4b6bca41c5a0c085fa5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
