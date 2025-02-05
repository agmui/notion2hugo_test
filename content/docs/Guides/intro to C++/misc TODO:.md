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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFSO46K%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDFmac3FTaqhl4eGrCyyyHE%2FZ7g4MGb7n7wkTbFSJlu4gIhANBSe8aS%2BRtnMoS%2F%2F7suVe0s6BVGHoNHMjBU0KgzwcVqKv8DCEoQABoMNjM3NDIzMTgzODA1IgzHYtdmsY1M%2BDLiTfwq3AMFIAWx5WCFaDNi3VPJNSj%2Frzagkndfo5Qi2XXF711R8T6zsVqh5jKcWDhf7RwLHoUnijRvRKCAeeUMclYvzhAWeE52XgFD8oJn4SP5iIY4JPRHZ8QpzTHpb89nk6QxdXT5OSkapzSLuDZsSF8xy6H6gjySYM9HUg4PgtgSxfTFCCxDpmK5ulqS%2B3cpXG9NPuI%2BKD0bDoLHnyJgP6x7GaVPowvHIykmGcmuEBbGKcro2OWWPdtXKH9DHaQ3%2BIc1x2Vb5XSnACgyvwer6aRPm6q04ZnWSvnVrwTyN33NqzpSyPnkUScpihWSY6hkKdVy%2FP%2Bme7xiFvcSLjqBW8zd57W3yhwB6XFQgmHs3g8vgD1dQ1vdLiC9VqVMn3LsYa8XDv%2FgsK69TeEI%2FzOtVicp2amnMhndLjAs3WSibBv39vgwkuWZi6TxYFLM60KKy5W0QID2kGejYOklc3NxFMCSt2XwDrX6xb3zVixU8O9WXkqbYzHwnW%2FzLZWzaadgfnI57Nugr2oQHrWQ1STCMqzzjSZrwQHNApaQYjhNOfFwiUuypHuPhVyGSOScXotVVWDLEjfN1eYYayN9pZSAE%2FLPXCN8y0usBIKe4iaMgyZX%2FBz5nRZipD7r3S0S22UkxzDXvI69BjqkAZbyAPD1b41CmBk6mLU38J9zoST1%2BLGvU7cE%2BC86n1dnFufa9arXvTGgttQOrxd4yjLBjj3bSGyO%2FTkvw2jJk9Fw%2BeLp5nXt3K6ebGVpLzEL3XRfYjvE0azhupvXYVrSzh5hE%2FN8R1YoJqAV4rbGNySAkiy%2BQTUUe7FPucI3UKSCr7yqoCvMTza5JWvUKUowlchMDNEcHaIuSb8W9N9t7jOBRQ7i&X-Amz-Signature=f8614ab4a8afebf5093cb6a4a0f27034e689910aa95d9a70e435f7463e6b813f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFSO46K%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDFmac3FTaqhl4eGrCyyyHE%2FZ7g4MGb7n7wkTbFSJlu4gIhANBSe8aS%2BRtnMoS%2F%2F7suVe0s6BVGHoNHMjBU0KgzwcVqKv8DCEoQABoMNjM3NDIzMTgzODA1IgzHYtdmsY1M%2BDLiTfwq3AMFIAWx5WCFaDNi3VPJNSj%2Frzagkndfo5Qi2XXF711R8T6zsVqh5jKcWDhf7RwLHoUnijRvRKCAeeUMclYvzhAWeE52XgFD8oJn4SP5iIY4JPRHZ8QpzTHpb89nk6QxdXT5OSkapzSLuDZsSF8xy6H6gjySYM9HUg4PgtgSxfTFCCxDpmK5ulqS%2B3cpXG9NPuI%2BKD0bDoLHnyJgP6x7GaVPowvHIykmGcmuEBbGKcro2OWWPdtXKH9DHaQ3%2BIc1x2Vb5XSnACgyvwer6aRPm6q04ZnWSvnVrwTyN33NqzpSyPnkUScpihWSY6hkKdVy%2FP%2Bme7xiFvcSLjqBW8zd57W3yhwB6XFQgmHs3g8vgD1dQ1vdLiC9VqVMn3LsYa8XDv%2FgsK69TeEI%2FzOtVicp2amnMhndLjAs3WSibBv39vgwkuWZi6TxYFLM60KKy5W0QID2kGejYOklc3NxFMCSt2XwDrX6xb3zVixU8O9WXkqbYzHwnW%2FzLZWzaadgfnI57Nugr2oQHrWQ1STCMqzzjSZrwQHNApaQYjhNOfFwiUuypHuPhVyGSOScXotVVWDLEjfN1eYYayN9pZSAE%2FLPXCN8y0usBIKe4iaMgyZX%2FBz5nRZipD7r3S0S22UkxzDXvI69BjqkAZbyAPD1b41CmBk6mLU38J9zoST1%2BLGvU7cE%2BC86n1dnFufa9arXvTGgttQOrxd4yjLBjj3bSGyO%2FTkvw2jJk9Fw%2BeLp5nXt3K6ebGVpLzEL3XRfYjvE0azhupvXYVrSzh5hE%2FN8R1YoJqAV4rbGNySAkiy%2BQTUUe7FPucI3UKSCr7yqoCvMTza5JWvUKUowlchMDNEcHaIuSb8W9N9t7jOBRQ7i&X-Amz-Signature=9f42002cdfc5b728c4a9f05de67e341a64155e72b9b1135cce5d194564bd966e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
