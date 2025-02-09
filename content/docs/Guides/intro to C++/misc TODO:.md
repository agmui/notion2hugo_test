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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KQJJBH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJBhvPzAPZzJQXDTeluTGcZn8DCucKPXLC3D5Lu6aEEAIgKfkdtBk7T33I0jpmhO%2BFpGUEYk0XLyhwuYrnbD1wJMUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA1b%2FHwd4OA2f%2B94SrcA7Z0EVdDbOCkE7LRzllfsGim9hwJOPxSlGngyr0tjsB42HFg6uElBNlmqDEHYvTQaL2XpNtdecn4r1q7WWMvZT7ZHSi4p%2BLah7Ph6DxJD1OJKPv08hnk1NY%2BiRv5BcjMu6Nlm2w6IEarfewgehAMZgIb0Q39yx7VbgXAWJoTGQrW06x%2FuTo%2BGiQuylnqIyKM1%2FOcq0%2F1NC9CLqYhqybaSDxfs%2F6abMPMUJUFEshIUkrpv2l4aAINTiG72qcjh%2BZ5yTODGRy3ZpKVSh%2B54HuJyiYcwBdGm5EnKhWpJBijn0TJdjNZ4ahHxLHG3xws9kFdXfFvEU6a3zM2PZOi8IJjXtXExejXYX429JG6ZPD026TS0qwEFJXY3vVxSD6%2BZn5GKa6vJ1vdxWYA1gP2yzQLTqcXqRhDqLdDYIm3lEcA4pBlC4PBTOeYBDrZ19HHhtirabDVna0prsCZS3d%2B%2BNTeKeOkJBj0CmLLIT%2BSLqG93ufcYMiv25Kh8GbUmwENplaDVbv0ffS%2F7bSI98trvF6DyOS26EyXRjACpV2Gh4zPVDNJTWuRsSPOP1XEU7P6jgppujSd6HYBeEzYx0Hgw6vAWtbctUCewiZNLHiVGfRiLsv1o9zM1ISSrVdZ3IBUMMG%2FoL0GOqUBr8RfadNApfhvgJuK7fUT%2F%2Fn2UZbQablBnV01IlfBFDDEBL8Sef%2B%2FE00xUkijluJOHiuaOmW4ypJ2qX8r%2BkOJ7%2BqBppm56BQEE%2Fmo1G3Ns1SNWzCn5F88bmRgAYlQSSFexIyBJYFKEoK%2BYP4S%2BPXSE6betAHVMaAQ5u%2BnTHwC6C9yrZSJix1BIoZ5jFXMaVH4ofMLBQ%2FWtxHvT2O6y3oluTBWR96i&X-Amz-Signature=ee4c5c9f687f25a085a23129fcdd91b2f7eb50980c702450b3dca854d85dc374&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KQJJBH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJBhvPzAPZzJQXDTeluTGcZn8DCucKPXLC3D5Lu6aEEAIgKfkdtBk7T33I0jpmhO%2BFpGUEYk0XLyhwuYrnbD1wJMUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA1b%2FHwd4OA2f%2B94SrcA7Z0EVdDbOCkE7LRzllfsGim9hwJOPxSlGngyr0tjsB42HFg6uElBNlmqDEHYvTQaL2XpNtdecn4r1q7WWMvZT7ZHSi4p%2BLah7Ph6DxJD1OJKPv08hnk1NY%2BiRv5BcjMu6Nlm2w6IEarfewgehAMZgIb0Q39yx7VbgXAWJoTGQrW06x%2FuTo%2BGiQuylnqIyKM1%2FOcq0%2F1NC9CLqYhqybaSDxfs%2F6abMPMUJUFEshIUkrpv2l4aAINTiG72qcjh%2BZ5yTODGRy3ZpKVSh%2B54HuJyiYcwBdGm5EnKhWpJBijn0TJdjNZ4ahHxLHG3xws9kFdXfFvEU6a3zM2PZOi8IJjXtXExejXYX429JG6ZPD026TS0qwEFJXY3vVxSD6%2BZn5GKa6vJ1vdxWYA1gP2yzQLTqcXqRhDqLdDYIm3lEcA4pBlC4PBTOeYBDrZ19HHhtirabDVna0prsCZS3d%2B%2BNTeKeOkJBj0CmLLIT%2BSLqG93ufcYMiv25Kh8GbUmwENplaDVbv0ffS%2F7bSI98trvF6DyOS26EyXRjACpV2Gh4zPVDNJTWuRsSPOP1XEU7P6jgppujSd6HYBeEzYx0Hgw6vAWtbctUCewiZNLHiVGfRiLsv1o9zM1ISSrVdZ3IBUMMG%2FoL0GOqUBr8RfadNApfhvgJuK7fUT%2F%2Fn2UZbQablBnV01IlfBFDDEBL8Sef%2B%2FE00xUkijluJOHiuaOmW4ypJ2qX8r%2BkOJ7%2BqBppm56BQEE%2Fmo1G3Ns1SNWzCn5F88bmRgAYlQSSFexIyBJYFKEoK%2BYP4S%2BPXSE6betAHVMaAQ5u%2BnTHwC6C9yrZSJix1BIoZ5jFXMaVH4ofMLBQ%2FWtxHvT2O6y3oluTBWR96i&X-Amz-Signature=d329d2043a2b2cc1a9fae8ac903268885ba109e805aab909b62572471b884251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
