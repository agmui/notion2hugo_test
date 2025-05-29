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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLAK33W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8f39CDLCTXO9aT9msBLNSASgCzeogIznUqChb4Rs59AiEA2uUKH3hrNO%2BcPCQXXRwKrU5Pc9w3vFGA5TottSHIU7EqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA1SX4ACacePGAk8CrcA80bP57Gh2C8f%2BfXoYy1p78AsbDgsim%2B1x5Hn5KEXY9s8XoVvPYHmZAwvyvII3cOK570AG%2FzATxdag2zVFs5jE0wQ2%2BgxaqrUUYT3gMB5HZcdC6h8BCajw1eaXvb7TbOJSkkhcLjYRlTaBk8PalV%2BWzYKf92AFEAD06Z9iEVY7s5H6y6I8ZcD7kz3put1EO8UTyEu1GZuUjJY0TNIY461Um%2FUHF8AbIWp9j46rMBUHMTW06%2BlsTSOG0wkQfZcFFob7aStNcxn6AF90detc2MwRRBllcMiege2PjgRClN9kBvCKy0ASgdCdIU%2F8dX3q%2F2wfusNcL6vWRRGe1Qfh%2Ff0%2B0VcK1sSHMmrOdxiE8sXXOcVyi8b%2F5DF%2B%2FYxmzvgcbYFLW7bhmpf0lhgDBTQxj2fVVso3dKan0gwq7AAbu7QcI0Hen%2F2FI5T14%2ByxZLNunecXESMJketa7A3Y6x1mImCRQMoqlRHbeJv5VPVx5W2dyPXiPmOyvS8XCMJV7%2FTaRd14BwijrUSxHQ20bLp34mYl%2FuzlqrABx%2Bhh8m2CUDhZkZuHHbZdc9Rb9g%2BxauFemG9J1lYWdKDmofstm5B5%2BMydwnVkdPbXjvBWt4VPBZf3X3lVJLu98e8HsJnSzkMMGv38EGOqUBgVCHQWgbXsAmmvuDes7BNG%2BlHvxRBlGxxfe3kESYfJReAELoYyecFPuvFEKh1ffguJY7BErVy2HU%2FWVXLxRRNLwpjDjRDDzbKeqr2cDNyYo0UUJr%2FTVIyL81mIJXV9lSBc57EcjTPS3fnDweIF7NWXjwwV%2B21BH1JC3fmwlspYTLYpMLFYRDOeqEGJ1040cQjd8%2F0%2FsjHTWD3hKU7IxZwcmuk1FD&X-Amz-Signature=52fc7efa63bffbf3059286a7ac9d0638372febdd0011ffe8e6fd5788b5569221&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLAK33W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8f39CDLCTXO9aT9msBLNSASgCzeogIznUqChb4Rs59AiEA2uUKH3hrNO%2BcPCQXXRwKrU5Pc9w3vFGA5TottSHIU7EqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA1SX4ACacePGAk8CrcA80bP57Gh2C8f%2BfXoYy1p78AsbDgsim%2B1x5Hn5KEXY9s8XoVvPYHmZAwvyvII3cOK570AG%2FzATxdag2zVFs5jE0wQ2%2BgxaqrUUYT3gMB5HZcdC6h8BCajw1eaXvb7TbOJSkkhcLjYRlTaBk8PalV%2BWzYKf92AFEAD06Z9iEVY7s5H6y6I8ZcD7kz3put1EO8UTyEu1GZuUjJY0TNIY461Um%2FUHF8AbIWp9j46rMBUHMTW06%2BlsTSOG0wkQfZcFFob7aStNcxn6AF90detc2MwRRBllcMiege2PjgRClN9kBvCKy0ASgdCdIU%2F8dX3q%2F2wfusNcL6vWRRGe1Qfh%2Ff0%2B0VcK1sSHMmrOdxiE8sXXOcVyi8b%2F5DF%2B%2FYxmzvgcbYFLW7bhmpf0lhgDBTQxj2fVVso3dKan0gwq7AAbu7QcI0Hen%2F2FI5T14%2ByxZLNunecXESMJketa7A3Y6x1mImCRQMoqlRHbeJv5VPVx5W2dyPXiPmOyvS8XCMJV7%2FTaRd14BwijrUSxHQ20bLp34mYl%2FuzlqrABx%2Bhh8m2CUDhZkZuHHbZdc9Rb9g%2BxauFemG9J1lYWdKDmofstm5B5%2BMydwnVkdPbXjvBWt4VPBZf3X3lVJLu98e8HsJnSzkMMGv38EGOqUBgVCHQWgbXsAmmvuDes7BNG%2BlHvxRBlGxxfe3kESYfJReAELoYyecFPuvFEKh1ffguJY7BErVy2HU%2FWVXLxRRNLwpjDjRDDzbKeqr2cDNyYo0UUJr%2FTVIyL81mIJXV9lSBc57EcjTPS3fnDweIF7NWXjwwV%2B21BH1JC3fmwlspYTLYpMLFYRDOeqEGJ1040cQjd8%2F0%2FsjHTWD3hKU7IxZwcmuk1FD&X-Amz-Signature=a1b1ba7fce244c177ead93bdcc9a91535928b8c140113f07a9a4b49f56ea8ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
