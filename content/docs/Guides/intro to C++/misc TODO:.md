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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXR3TVP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkvb02kaxhIfh%2Fz8yu0YP8SxO5ZjjSagpxiBb0KJbdigIhAMnrMRGC68wohSXBLiOSN7ajO%2F%2BduoRnX2lP9%2BRqqDneKv8DCDEQABoMNjM3NDIzMTgzODA1IgwDrAsVVeMwQRlWouwq3APZTBZAx92YuelJMmk77OgnE1SHR8%2BAAPEW1j5aBrxrK%2FdiLXL87afVJ1UAK9WY8VIeRz1DiXebvovyLFb3Njc1zPSDZfKcfhtel9Lh5gaL7TDMU4WiKz%2B44nr0lgatz2qDZUQMS%2BRSL8f3MSusOzySTsXtViF1k4klK0hBjS0vAkHBnAyMnEVcyMi4Ab%2BPJ4AmS990WglVyk3L5cXOa6kxYA6ZOre7x%2FiYD7zGx7EODovvEqlo98ueGAYWAFITk5s985HuEYVfdJgsk%2BX1dfcxP5b6GBFeE%2BFh09ZtubLmahyipmPipwp5e4VXchDD0ftFsq5594gfF2fiy%2BYXmqwqpbhPa1Q5paGniBxK81K0h1kLDy8gmItCjMq3doLnZHNzehWOOoBXwWKDwMjJqTkMW%2B3EMgYq33SHKVaIzT5cV%2Fq%2Bxmg7hBKcDUzRION61SvUYYnKisECgpe348HL2Ndt%2FPVbk5zFe1Qjzcw0Do7kG4tAY2%2FcAbnoOKtdEW21%2BL%2BqEONDdve9ZgFjWcX%2Byd4ACj%2BVcp1pmgRjfP6s1IgF1xHBCAATFoOniLsz7re%2Bdfopeb4a7ATF1JGcbThHxW3Fm9hO6S6UugKaBmAGjNgzVPecgdPzpd%2FA5NVgBzCr39u%2BBjqkAR0LADZj4U1nFf8%2B4xvl%2BcZvf8u4mlYZuPiRGVjNHMsH%2BAOANqaJ2p%2Fs5IIMoSh5Bshwq3P0BA0rX3vSZcv5OtPB1ZD7dJn%2FZMkbHOmwLV%2B9qti8ACupqk7vG1nAxpptVZWj%2BFX6ICL5J5nLArytEP3wQoTARYnTGbXZZE2JVAg4F4Gc9fwGASgQDH68kfdCKuR9xV2AxC38DOJgUMmbUIfuOZht&X-Amz-Signature=39665eddf0b55ce8421f203e2c05c9b9ba40880d261771f339164ca369050f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXR3TVP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkvb02kaxhIfh%2Fz8yu0YP8SxO5ZjjSagpxiBb0KJbdigIhAMnrMRGC68wohSXBLiOSN7ajO%2F%2BduoRnX2lP9%2BRqqDneKv8DCDEQABoMNjM3NDIzMTgzODA1IgwDrAsVVeMwQRlWouwq3APZTBZAx92YuelJMmk77OgnE1SHR8%2BAAPEW1j5aBrxrK%2FdiLXL87afVJ1UAK9WY8VIeRz1DiXebvovyLFb3Njc1zPSDZfKcfhtel9Lh5gaL7TDMU4WiKz%2B44nr0lgatz2qDZUQMS%2BRSL8f3MSusOzySTsXtViF1k4klK0hBjS0vAkHBnAyMnEVcyMi4Ab%2BPJ4AmS990WglVyk3L5cXOa6kxYA6ZOre7x%2FiYD7zGx7EODovvEqlo98ueGAYWAFITk5s985HuEYVfdJgsk%2BX1dfcxP5b6GBFeE%2BFh09ZtubLmahyipmPipwp5e4VXchDD0ftFsq5594gfF2fiy%2BYXmqwqpbhPa1Q5paGniBxK81K0h1kLDy8gmItCjMq3doLnZHNzehWOOoBXwWKDwMjJqTkMW%2B3EMgYq33SHKVaIzT5cV%2Fq%2Bxmg7hBKcDUzRION61SvUYYnKisECgpe348HL2Ndt%2FPVbk5zFe1Qjzcw0Do7kG4tAY2%2FcAbnoOKtdEW21%2BL%2BqEONDdve9ZgFjWcX%2Byd4ACj%2BVcp1pmgRjfP6s1IgF1xHBCAATFoOniLsz7re%2Bdfopeb4a7ATF1JGcbThHxW3Fm9hO6S6UugKaBmAGjNgzVPecgdPzpd%2FA5NVgBzCr39u%2BBjqkAR0LADZj4U1nFf8%2B4xvl%2BcZvf8u4mlYZuPiRGVjNHMsH%2BAOANqaJ2p%2Fs5IIMoSh5Bshwq3P0BA0rX3vSZcv5OtPB1ZD7dJn%2FZMkbHOmwLV%2B9qti8ACupqk7vG1nAxpptVZWj%2BFX6ICL5J5nLArytEP3wQoTARYnTGbXZZE2JVAg4F4Gc9fwGASgQDH68kfdCKuR9xV2AxC38DOJgUMmbUIfuOZht&X-Amz-Signature=f4e73a7f835b05435c8ad775e7c9f6edf3c132dfd25c0c37feb293297a7a4b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
