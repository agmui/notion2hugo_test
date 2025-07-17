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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLUOHMS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBFwMoIe4kwOLPkAKrkA%2F0ya%2Bb2Yx3bRwddICKkXP4O%2FAiEAvWm%2F3XxS7n2b1u%2FHp5jVyxbJNjw71%2FXieoKwL9xM8PAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPRyQcKuq9x1wFtCjyrcA5X9RgXBMQgsB65KUtcjFX2R%2B2ZRo1kvZ5qsbv1pWueNZWUCJYarMvaUSNMY2QcWGNQRr4LZ9g7MPXDHDUSZ6LPG25oKOFLowG8DuXcuGmlZeXHyQhvZJswb8OzKiWbnw3EETRAXnABodZESZQM7IsQvXacsgizGzuy0gmcI9QY%2FDKND%2BGr1fmLCH9RfRpzvf60thyddqF8qlgFdFuIZYprlHdtsoKSi8ckFF8vYtnzSNV4hyD48uaK4IXG433fCvf9HwN%2B3goNzh5DJiBSJ9Ub56dITCW6AQByGHp5YaVD3HovoO6FuHx%2BUg0WqfeBCgRa%2FEprelof18ZnzlnN4JjB47SWB%2BdUYamPYJbxAm5D3obFthEkWMltBL8eTY2FbE5npJ%2FWraNb%2BVbL4fGWTqplJ%2BsdqKt9fkXZFMLx2hn5NCpmxOvwWvg6yW8S6jfYn%2FCGtmQZ%2FOfzqd%2FEpDT%2BbRwWQ6FWU5JY%2F8WBiUj4hHt9U0eqJTEup92QjNNS%2BiGNbYC29wnUVtwPK3aEmIA7pRfXwMvUW86LvP9g0jKbrwI1D17GW5VdvdDqjR4Zbs7Azs4a1xJqNDzbZAx%2F7z3ixklVcJCGGu9Md%2BAQvbUA4nUzRHowK1z8B%2FTJqvTQcMJeK5MMGOqUBiz1%2BLpmU1jwWia0H4mX%2FEFZ4GIK%2BtEHMGo0RRIi0NThCZLlD05RMDnbTL%2FY9CBBKh1Qcd2IMtdYozGlqe8hPXzHwXvLDjV8klYyjU0p8F1%2BvcKrEkjTjdgI5Nlc4CVaC1o3efCnktSZW7NpO%2Bj9fxbcsGD%2BajQliU9gimfRdhROWBZsla%2B8uuFBQHovlR01MyB2ihTcFd2g2KKdkXyxo02sNHDon&X-Amz-Signature=4f81e21eb221b66b7df80d39ac8c4f5fc822859b83eaa3a9ea4bfcdb76890e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLUOHMS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBFwMoIe4kwOLPkAKrkA%2F0ya%2Bb2Yx3bRwddICKkXP4O%2FAiEAvWm%2F3XxS7n2b1u%2FHp5jVyxbJNjw71%2FXieoKwL9xM8PAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPRyQcKuq9x1wFtCjyrcA5X9RgXBMQgsB65KUtcjFX2R%2B2ZRo1kvZ5qsbv1pWueNZWUCJYarMvaUSNMY2QcWGNQRr4LZ9g7MPXDHDUSZ6LPG25oKOFLowG8DuXcuGmlZeXHyQhvZJswb8OzKiWbnw3EETRAXnABodZESZQM7IsQvXacsgizGzuy0gmcI9QY%2FDKND%2BGr1fmLCH9RfRpzvf60thyddqF8qlgFdFuIZYprlHdtsoKSi8ckFF8vYtnzSNV4hyD48uaK4IXG433fCvf9HwN%2B3goNzh5DJiBSJ9Ub56dITCW6AQByGHp5YaVD3HovoO6FuHx%2BUg0WqfeBCgRa%2FEprelof18ZnzlnN4JjB47SWB%2BdUYamPYJbxAm5D3obFthEkWMltBL8eTY2FbE5npJ%2FWraNb%2BVbL4fGWTqplJ%2BsdqKt9fkXZFMLx2hn5NCpmxOvwWvg6yW8S6jfYn%2FCGtmQZ%2FOfzqd%2FEpDT%2BbRwWQ6FWU5JY%2F8WBiUj4hHt9U0eqJTEup92QjNNS%2BiGNbYC29wnUVtwPK3aEmIA7pRfXwMvUW86LvP9g0jKbrwI1D17GW5VdvdDqjR4Zbs7Azs4a1xJqNDzbZAx%2F7z3ixklVcJCGGu9Md%2BAQvbUA4nUzRHowK1z8B%2FTJqvTQcMJeK5MMGOqUBiz1%2BLpmU1jwWia0H4mX%2FEFZ4GIK%2BtEHMGo0RRIi0NThCZLlD05RMDnbTL%2FY9CBBKh1Qcd2IMtdYozGlqe8hPXzHwXvLDjV8klYyjU0p8F1%2BvcKrEkjTjdgI5Nlc4CVaC1o3efCnktSZW7NpO%2Bj9fxbcsGD%2BajQliU9gimfRdhROWBZsla%2B8uuFBQHovlR01MyB2ihTcFd2g2KKdkXyxo02sNHDon&X-Amz-Signature=4d84f78199831e1ec64968c1a7b11e5ff1c7d424d271c1d5755c788bfd5eb31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
