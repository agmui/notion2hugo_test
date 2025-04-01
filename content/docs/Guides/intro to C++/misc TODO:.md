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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKJV3PQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuuMlBjClKmJnL7FM0X85fy4aj39SbngzGQA4BXgx2FQIgbsREdZbjxyhJDoD6eMrU5YxsCB3O0MlmLOd6HVEwiEEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNsceZtdxEKFPD0DircA9NDu9MeGCgEef8fyt40%2F5AVoQxb28ZPqPLi8G3PbYePvz68%2BSwfuIoj0YqpDko%2BJahLFXCY2TBmZBNJ2zGbe8haP59kjPRsEFhPny%2BWFamaeP9ysEQ9Pl%2FX0%2BezfAKwqiSNOd2c4DvPc6QkLHu1EYfCzR7qgRJrIIv7AW2%2BASQbI%2FCDM5ta%2Bj7EK9mL8VMKfz7RQb0wjRpNXyJcbf4Rd1Z8IgsbzuIdPk94MO6KlVOiqGg8TWl37eSNLZRBfip4hCYDrENbP7YdkmfGyq0h5GkBHXBKk37Ua24aV405BaR7MNH8crdpxzs3ia5j36aWk%2BwL6H1U7AgU3bgsz2PeFa%2Fj64HACSiiQ8VbYaf%2Fm7UPAQyBIg0XfdKq1Lr8QaK%2BjouROXiWE9lVIHTjXRMmUer1r7LkN5VJobTO6oR3lXFveA%2Bx44qCKpg2QdGvZKNN2CM6CBiwQZ4%2BaJB%2F%2FJ2goQZBoBRQyJMt%2Fwksut6YIV%2Bh9r8yH2jH%2FP%2FGfzaP8ZIF0xhZiuE8dYf%2B4y%2F6T8VSgBoVYx8YlXDmBATlheMfYfdF%2BmM%2FlXDvwIVILMZEwpZkfce8F5AW0tZ6SD%2BtdD4c1ow9dC65LwIToM%2FHwn9c1KcutkNjGicxirmwIO9gMNmosb8GOqUBRndjkHrhmNHAMF%2FvP03aTEQOmMnoN1FOARSQ1YGT5718204vfl8merSv0uiuagDMPadmUb9uFwqBIGCQpTvzipwQJL3KQGDULjXBZniqoff1v8Y0KZsFhzNTvuEyt4ucZVosyOxngglrdMYasPRblv6z%2FxGZiM2GgzOBDgk52TvDDyxf%2F7nTLSkGrH6L8RMToEcMulV4Ck4PAMDeVnE%2FsUqM8kv9&X-Amz-Signature=c4016c43453cc0d26df796b8ee6675c31977c663cfe4dc3382a212ef30e5ca8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKJV3PQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDuuMlBjClKmJnL7FM0X85fy4aj39SbngzGQA4BXgx2FQIgbsREdZbjxyhJDoD6eMrU5YxsCB3O0MlmLOd6HVEwiEEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNsceZtdxEKFPD0DircA9NDu9MeGCgEef8fyt40%2F5AVoQxb28ZPqPLi8G3PbYePvz68%2BSwfuIoj0YqpDko%2BJahLFXCY2TBmZBNJ2zGbe8haP59kjPRsEFhPny%2BWFamaeP9ysEQ9Pl%2FX0%2BezfAKwqiSNOd2c4DvPc6QkLHu1EYfCzR7qgRJrIIv7AW2%2BASQbI%2FCDM5ta%2Bj7EK9mL8VMKfz7RQb0wjRpNXyJcbf4Rd1Z8IgsbzuIdPk94MO6KlVOiqGg8TWl37eSNLZRBfip4hCYDrENbP7YdkmfGyq0h5GkBHXBKk37Ua24aV405BaR7MNH8crdpxzs3ia5j36aWk%2BwL6H1U7AgU3bgsz2PeFa%2Fj64HACSiiQ8VbYaf%2Fm7UPAQyBIg0XfdKq1Lr8QaK%2BjouROXiWE9lVIHTjXRMmUer1r7LkN5VJobTO6oR3lXFveA%2Bx44qCKpg2QdGvZKNN2CM6CBiwQZ4%2BaJB%2F%2FJ2goQZBoBRQyJMt%2Fwksut6YIV%2Bh9r8yH2jH%2FP%2FGfzaP8ZIF0xhZiuE8dYf%2B4y%2F6T8VSgBoVYx8YlXDmBATlheMfYfdF%2BmM%2FlXDvwIVILMZEwpZkfce8F5AW0tZ6SD%2BtdD4c1ow9dC65LwIToM%2FHwn9c1KcutkNjGicxirmwIO9gMNmosb8GOqUBRndjkHrhmNHAMF%2FvP03aTEQOmMnoN1FOARSQ1YGT5718204vfl8merSv0uiuagDMPadmUb9uFwqBIGCQpTvzipwQJL3KQGDULjXBZniqoff1v8Y0KZsFhzNTvuEyt4ucZVosyOxngglrdMYasPRblv6z%2FxGZiM2GgzOBDgk52TvDDyxf%2F7nTLSkGrH6L8RMToEcMulV4Ck4PAMDeVnE%2FsUqM8kv9&X-Amz-Signature=99e35a22a141dddde30b9f3c42e0c10d27738b282fee2bb5834e91d7693f8001&X-Amz-SignedHeaders=host&x-id=GetObject)

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
