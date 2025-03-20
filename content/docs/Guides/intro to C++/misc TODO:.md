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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXD4IXM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2B%2FNpVRKCsQLJUkMaU0Jl6GIvhkPmwKjlMbOt5sZ6fQAiAgAa%2FweY3bzXZf%2BMBHsMBk4IhAEyDlpGJnbyRg0UfXmCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUn57%2BbXFcYwNAkNyKtwDUJCIWdDdstMBTg1a0nkLNbACycfTQjiVJfsX169Kg2rgVWBX9Uhk%2Fkm5gGIpB4X%2Fb3J%2FAw9QqtZTlVJym%2BTe1gFM%2BGuMpPIHTGedKv%2BfU%2BAtBHKy%2B78tr4h%2Fu%2FEw%2Bs3HRegvRvpNiOv5dCWMmvEZofXOJwHwiBSQN70nUqm2skgI80XXdQS9jcNjBp6VjobgdnSx9Lgo8g5A2617oHQyLNgxUx%2BU2vKytUkko8AnG9xCBfZXg5IZsSgq3x2%2F3nkskzVPN1QWcTe0iwXkwgTBUGpTeQkERUIEoe08cbbXdeeNKALlO0342riVyI3NbOvqVp5cbi7iDlrB7NicTKFOOZte%2F1uSgF4jooLonGbGgYCPG%2B6vPoYSjyR52FCgEZ%2BCY3EP%2FWT9%2BDrttdJJrIxrMSB%2B2FYRFrF4oXhhndx0uiVtpdnnDR9xIp%2BQhesafMRRVPaayuzBhiqi5YA2Y6hiJ1pr9WkzfKGIy4kMSxuyFe6mYhJA%2FMT%2F5%2FTZePEyECTa2KRHgcJzdcs7hy45TzbHqTiXymQNPeTbA4KJ3qtP9QFMl0FJchBv%2FLEvdfbXW4o%2BsSyI8EgvdSXvetDercdC1yJz6I1FVsVPMV6dG4XPpRYj0xtAL7OYlw5ElrAwtqXwvgY6pgEuc%2FOmyS2gxeiCW9owH0ney%2Bv24v60ToxNPEk3U2q%2FyiEhPbSLXK4cne62oOHuBax%2FtUOF%2Bmxr5IF6FiKdh%2BTmdBGcJyALB4IRUYnvlkb43JcfZa6DYKIGWUllaq7QsiDOFDApRabR4VmdgM%2BcwgNMPCEDe4MOlNhvx52zY5kCbPX6q4AaOsqaP1jxst4KvYvN%2F7ZAKxBDWy9Qb4jjzKiYF6WTYz64&X-Amz-Signature=b91c272a1fe9d924225380e94b2221eee920228c40a7a27322cba618a7302b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXD4IXM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2B%2FNpVRKCsQLJUkMaU0Jl6GIvhkPmwKjlMbOt5sZ6fQAiAgAa%2FweY3bzXZf%2BMBHsMBk4IhAEyDlpGJnbyRg0UfXmCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUn57%2BbXFcYwNAkNyKtwDUJCIWdDdstMBTg1a0nkLNbACycfTQjiVJfsX169Kg2rgVWBX9Uhk%2Fkm5gGIpB4X%2Fb3J%2FAw9QqtZTlVJym%2BTe1gFM%2BGuMpPIHTGedKv%2BfU%2BAtBHKy%2B78tr4h%2Fu%2FEw%2Bs3HRegvRvpNiOv5dCWMmvEZofXOJwHwiBSQN70nUqm2skgI80XXdQS9jcNjBp6VjobgdnSx9Lgo8g5A2617oHQyLNgxUx%2BU2vKytUkko8AnG9xCBfZXg5IZsSgq3x2%2F3nkskzVPN1QWcTe0iwXkwgTBUGpTeQkERUIEoe08cbbXdeeNKALlO0342riVyI3NbOvqVp5cbi7iDlrB7NicTKFOOZte%2F1uSgF4jooLonGbGgYCPG%2B6vPoYSjyR52FCgEZ%2BCY3EP%2FWT9%2BDrttdJJrIxrMSB%2B2FYRFrF4oXhhndx0uiVtpdnnDR9xIp%2BQhesafMRRVPaayuzBhiqi5YA2Y6hiJ1pr9WkzfKGIy4kMSxuyFe6mYhJA%2FMT%2F5%2FTZePEyECTa2KRHgcJzdcs7hy45TzbHqTiXymQNPeTbA4KJ3qtP9QFMl0FJchBv%2FLEvdfbXW4o%2BsSyI8EgvdSXvetDercdC1yJz6I1FVsVPMV6dG4XPpRYj0xtAL7OYlw5ElrAwtqXwvgY6pgEuc%2FOmyS2gxeiCW9owH0ney%2Bv24v60ToxNPEk3U2q%2FyiEhPbSLXK4cne62oOHuBax%2FtUOF%2Bmxr5IF6FiKdh%2BTmdBGcJyALB4IRUYnvlkb43JcfZa6DYKIGWUllaq7QsiDOFDApRabR4VmdgM%2BcwgNMPCEDe4MOlNhvx52zY5kCbPX6q4AaOsqaP1jxst4KvYvN%2F7ZAKxBDWy9Qb4jjzKiYF6WTYz64&X-Amz-Signature=c5ad74fee750971fc0d76582839716be54fa2e28d750d631560b4cc73e363333&X-Amz-SignedHeaders=host&x-id=GetObject)

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
