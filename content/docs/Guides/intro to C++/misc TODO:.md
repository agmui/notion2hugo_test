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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMYJ45W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdG2SjVkAg2ptxE3tWZeizsDHQIVmxI2gOsR9IDBmxYwIhAMZRRoOrm8Lz0vEYlzF31FsnBh9mnl28Q%2B%2B3Q8VJccTbKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKSkfehRwjUIAl8F4q3ANI5QcE6Lfb0Dl9QWR1IN71gMXEnQq9q8ya6bqYnnadtd28O%2B6Zbqvp73KqwTH6qhVqrfkrQhiUlDDHfyT53PYEGGFtjMyblw4wHq2FiEO93d6Nnf8XUUEFq1RrXkVt7ha1ESnhjJHXhp7yrM6qv%2F5KkwkV8t%2FA%2F4NT82CRz3rEeAQzzuOF768FZZ1yNDP5JBig7Coa9wMfA8mwCO3Qy56dz4laiJI9TnIIOCLtDf9s5T5PYzldmDuqqe4OHQQfW8iyTgD%2Bwp%2FbbLYZ5fNL6GzPDzJe48sQ1G2T9mx%2ByRTZPAIz%2FbEE0tQ%2BnA7EtZNkissl9W89eQVNa%2FyxkSCtqwxm5kGsmPDVg75trLa9EPwcB8BWEdx%2FyolA90B1GCmWSeoLDADSTsypsGZSaTfojoi1tYMq4dy1RFY%2FG3beuSHdvpXNLSZN1VpwSEjerHNGQMbdCcMMqgnkRZb4Ajuec8JCEZVQHXb%2FuRYPRKiL4jI0VEuPoCZQWCUDDwRoyRbdVef%2BlKkMCwNEBZieN15f0eOcjL9LhIcx%2BIrqhCpDdr9e7Sdn%2Bxn0FWWbO9mfBC74g3nxgEZ7WxBu54sfJFIlYqnI5B596conVM23E2RccgmeLEUrhCoH6%2FPh5mL3CzDc6vW%2FBjqkAY2Ee92mkrpSvXhwa%2BILDVkQbj2rXfdeSuIZJZExoiIl5hJhYqpXq3bNWijkb%2Bcc0i6ZdFPcf8Cn9nQ%2BnUU3cA09u08XOPG7y87cn5SaZOlqQuNOR%2F0bOSpI2hFmRyAzw1Dz5lEhX%2FoatTnqk%2FWKMOSglQ0CgxhBnN0kBEEJKk1fI3b8BclW6uVgBXT0987LTNgF0BrHn8q8ESSPZLealmBZpps%2B&X-Amz-Signature=b2315f11ba3f928c634f77997b720cda7727035023cb15079a43c3b51d28f235&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMYJ45W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdG2SjVkAg2ptxE3tWZeizsDHQIVmxI2gOsR9IDBmxYwIhAMZRRoOrm8Lz0vEYlzF31FsnBh9mnl28Q%2B%2B3Q8VJccTbKv8DCB4QABoMNjM3NDIzMTgzODA1IgxKSkfehRwjUIAl8F4q3ANI5QcE6Lfb0Dl9QWR1IN71gMXEnQq9q8ya6bqYnnadtd28O%2B6Zbqvp73KqwTH6qhVqrfkrQhiUlDDHfyT53PYEGGFtjMyblw4wHq2FiEO93d6Nnf8XUUEFq1RrXkVt7ha1ESnhjJHXhp7yrM6qv%2F5KkwkV8t%2FA%2F4NT82CRz3rEeAQzzuOF768FZZ1yNDP5JBig7Coa9wMfA8mwCO3Qy56dz4laiJI9TnIIOCLtDf9s5T5PYzldmDuqqe4OHQQfW8iyTgD%2Bwp%2FbbLYZ5fNL6GzPDzJe48sQ1G2T9mx%2ByRTZPAIz%2FbEE0tQ%2BnA7EtZNkissl9W89eQVNa%2FyxkSCtqwxm5kGsmPDVg75trLa9EPwcB8BWEdx%2FyolA90B1GCmWSeoLDADSTsypsGZSaTfojoi1tYMq4dy1RFY%2FG3beuSHdvpXNLSZN1VpwSEjerHNGQMbdCcMMqgnkRZb4Ajuec8JCEZVQHXb%2FuRYPRKiL4jI0VEuPoCZQWCUDDwRoyRbdVef%2BlKkMCwNEBZieN15f0eOcjL9LhIcx%2BIrqhCpDdr9e7Sdn%2Bxn0FWWbO9mfBC74g3nxgEZ7WxBu54sfJFIlYqnI5B596conVM23E2RccgmeLEUrhCoH6%2FPh5mL3CzDc6vW%2FBjqkAY2Ee92mkrpSvXhwa%2BILDVkQbj2rXfdeSuIZJZExoiIl5hJhYqpXq3bNWijkb%2Bcc0i6ZdFPcf8Cn9nQ%2BnUU3cA09u08XOPG7y87cn5SaZOlqQuNOR%2F0bOSpI2hFmRyAzw1Dz5lEhX%2FoatTnqk%2FWKMOSglQ0CgxhBnN0kBEEJKk1fI3b8BclW6uVgBXT0987LTNgF0BrHn8q8ESSPZLealmBZpps%2B&X-Amz-Signature=f213a80b5c2e84a8a9aa918810c06eab639d43636610a5c9e115c16972163fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
