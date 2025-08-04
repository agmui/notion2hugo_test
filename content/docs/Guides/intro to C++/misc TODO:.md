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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAUYPVF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCG3lSOAknlvhoxT7Ip%2BWo3SwHi%2BJDNJDffA3EBISdeCQIgQ9Vbv%2BGCDWAO9SFjHIaUrMJzG61IE9DTNejXGbCY5Twq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFrSgG6gEdpeZmoLEircAz8%2FygLhkDn3%2B%2BiUo6PHkELaQv%2BBOLs3MiEeGNGneWt3LxPL7U6H2HG8GlI83E11IQedHVUHKlyZYJtGEyZl9aOIaScTJwJjqDc7Vq7vyRqPhOwKWTxon7LYSffqhzWTfysdCS2eJwMpel%2BIYL6WTodwLjAxFHvSsuQ7q7uJdsycOQRumIZYXGf1uXbKUN%2FucYGIk4RpGSDfVm14yjq1k8xLVbS55t9PkWDuY5FcfR6JDr23RNonqBF6bxWyo6vibset3PfTy2yVfp1zZnH4Ex9oXPHDg9fMvZ9SOyNR8JNL0zftQrM7sEx7KCWPzRuXV1UbO13gMkmh8CRq4AmY7RTO%2FUTDpSO6Q%2FX8VoX5ct5DaQvmHv5lQFQFcZ%2FsL9%2Fbv7BBNTTcI1Q9Ze2IwzilvMOZ0TeMMAZY6q5ZISvyEPdvzaEDSxAVZdBtsmzV419FHpE3Jy5cfOYyJsB6ucTVyp5ODvC8mB3DfhJ2seujPVxGzH9I66S%2BrbB9QgIBZFupRYdr%2BRhNoE09x1SodUR7og89STSUKkEZ65G6DXFHwomMTaHH5SL%2B7oUySSncBgxzLMnsDtUedDg%2BAP2PdbZMp1txK4XsJlE7Xi4JHXpjGRVRxA%2BULzCm6m5LlhHhMP76v8QGOqUBRrf0NVeZ%2BqEPX1%2FfSocrhzenp41CWm3RfqyL1FsjDNE6NZwhEmATAJyc5FCwKjgc9jo0YlFEKcS97eRas25NBD2%2FiqvwzfVNzCc2krkNs95yurBzEvC0R%2BC1n37AA3Ca20bKw6FDnb67hoQKJ8PMWXWkZpzVm%2FyasSiUZ74ICJ8ha7tFtAbwDYlr0KkTMe4bFhvDBH9ff%2BqVIPeI1bBiNxu5YEF7&X-Amz-Signature=a726748b152f03213d30c81c145327ffa8cad7ea96e6b7167f8508e6e59a184e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAUYPVF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCG3lSOAknlvhoxT7Ip%2BWo3SwHi%2BJDNJDffA3EBISdeCQIgQ9Vbv%2BGCDWAO9SFjHIaUrMJzG61IE9DTNejXGbCY5Twq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFrSgG6gEdpeZmoLEircAz8%2FygLhkDn3%2B%2BiUo6PHkELaQv%2BBOLs3MiEeGNGneWt3LxPL7U6H2HG8GlI83E11IQedHVUHKlyZYJtGEyZl9aOIaScTJwJjqDc7Vq7vyRqPhOwKWTxon7LYSffqhzWTfysdCS2eJwMpel%2BIYL6WTodwLjAxFHvSsuQ7q7uJdsycOQRumIZYXGf1uXbKUN%2FucYGIk4RpGSDfVm14yjq1k8xLVbS55t9PkWDuY5FcfR6JDr23RNonqBF6bxWyo6vibset3PfTy2yVfp1zZnH4Ex9oXPHDg9fMvZ9SOyNR8JNL0zftQrM7sEx7KCWPzRuXV1UbO13gMkmh8CRq4AmY7RTO%2FUTDpSO6Q%2FX8VoX5ct5DaQvmHv5lQFQFcZ%2FsL9%2Fbv7BBNTTcI1Q9Ze2IwzilvMOZ0TeMMAZY6q5ZISvyEPdvzaEDSxAVZdBtsmzV419FHpE3Jy5cfOYyJsB6ucTVyp5ODvC8mB3DfhJ2seujPVxGzH9I66S%2BrbB9QgIBZFupRYdr%2BRhNoE09x1SodUR7og89STSUKkEZ65G6DXFHwomMTaHH5SL%2B7oUySSncBgxzLMnsDtUedDg%2BAP2PdbZMp1txK4XsJlE7Xi4JHXpjGRVRxA%2BULzCm6m5LlhHhMP76v8QGOqUBRrf0NVeZ%2BqEPX1%2FfSocrhzenp41CWm3RfqyL1FsjDNE6NZwhEmATAJyc5FCwKjgc9jo0YlFEKcS97eRas25NBD2%2FiqvwzfVNzCc2krkNs95yurBzEvC0R%2BC1n37AA3Ca20bKw6FDnb67hoQKJ8PMWXWkZpzVm%2FyasSiUZ74ICJ8ha7tFtAbwDYlr0KkTMe4bFhvDBH9ff%2BqVIPeI1bBiNxu5YEF7&X-Amz-Signature=30bdd70428edd8f2bd0f2a6975c604bea3bd231950ce93bf6678e54b9566458f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
