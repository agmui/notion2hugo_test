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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSXJEPW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDCBCfz08LeIeYRpXAjthSZFEmTY3U0ONbBvi1AIMZduQIgDqp2ohc5ldnaHLrm0Lijy1Tg2gz4F3RxbAO5NVfXJJ0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCNQuMz3Daj9MvsJ0ircA6hPYvTxLOQ9LSJtVq%2FqTZBSkRso7CtKD6Tjdv9PwJxed8dDzX%2BFXZs%2FHVKt6LbdRDrp%2B2i%2Bw1jiNssLEDZoJWMaPeUL2mRyKk1eIbVegzdnSWJ1WsE70ntnZIT6b8R7Xb4zTKscZyc4YL%2FwCySSiQ%2Bys791%2F73m1fwt5fjLi8WorcGfTtz3P2sqnCYaJ%2F5pdVw9q%2BAmzR2RrxXvgA91%2Bx5QnjPJDpG6kN5aW3P8pmyqiAtI8x2GhguVrxLs3x8WFpRmqjycNzwbBntfw9O%2BkfMvsV8AXPONdb4R3tMFvnYSovpfYOWoox2gC2luv2IycqFux%2F7QGeBBuZPCb1s7k1KqyU8sdjCR5bZvaxPPW9AogCYODZae3JSVzPhpS%2Fy8PjT53kDx0gJgm3HGFP5TwYrMSEEFdU0vbYnU0fczPNWH0YxGVt32rGfSAUboDRX1d67T8sLwghxg1A49Wkx%2Fpm9pSGAFn5vpFzW3TEotJJaWKde0KDLTiycUdeeygmndl4q2OAPFxRQJiODq22AoeN%2FjIuaesKAWMmwDGjsvPye1eXy%2FTscNvPSl16hrT7nhrvI9fq5xTcIquYNhtSfgmcuVqecUarYtPuEsun9rDceOaWkP6med4FJ%2BVA5HMOG9nsMGOqUBlvTOEpfS43fDp4NcQ%2B7YncOeUx3QD7KkzM%2BwQlx7wHy2oGIj6UJvKt7clCiBkh95YhxdsNNI3UQAQ3CI%2F%2B5PDNeQAcw7vC8yG3DJ2KNhfmVH5fzaFu7oar9EoFCwn3EeZpefacVz2wN5wDCg%2BmKdUTC3%2BrOlMLj6u8Jy%2BlVmw1QlCc%2FjbOB9HdiCIOc%2FiC6QY45HF7iiUX5N9YHib5WQItaDdqp9&X-Amz-Signature=305e8a7e0c73f82fce2de25ec4673fa722adfe62ca96da20bc0a51db57a08e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSXJEPW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDCBCfz08LeIeYRpXAjthSZFEmTY3U0ONbBvi1AIMZduQIgDqp2ohc5ldnaHLrm0Lijy1Tg2gz4F3RxbAO5NVfXJJ0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCNQuMz3Daj9MvsJ0ircA6hPYvTxLOQ9LSJtVq%2FqTZBSkRso7CtKD6Tjdv9PwJxed8dDzX%2BFXZs%2FHVKt6LbdRDrp%2B2i%2Bw1jiNssLEDZoJWMaPeUL2mRyKk1eIbVegzdnSWJ1WsE70ntnZIT6b8R7Xb4zTKscZyc4YL%2FwCySSiQ%2Bys791%2F73m1fwt5fjLi8WorcGfTtz3P2sqnCYaJ%2F5pdVw9q%2BAmzR2RrxXvgA91%2Bx5QnjPJDpG6kN5aW3P8pmyqiAtI8x2GhguVrxLs3x8WFpRmqjycNzwbBntfw9O%2BkfMvsV8AXPONdb4R3tMFvnYSovpfYOWoox2gC2luv2IycqFux%2F7QGeBBuZPCb1s7k1KqyU8sdjCR5bZvaxPPW9AogCYODZae3JSVzPhpS%2Fy8PjT53kDx0gJgm3HGFP5TwYrMSEEFdU0vbYnU0fczPNWH0YxGVt32rGfSAUboDRX1d67T8sLwghxg1A49Wkx%2Fpm9pSGAFn5vpFzW3TEotJJaWKde0KDLTiycUdeeygmndl4q2OAPFxRQJiODq22AoeN%2FjIuaesKAWMmwDGjsvPye1eXy%2FTscNvPSl16hrT7nhrvI9fq5xTcIquYNhtSfgmcuVqecUarYtPuEsun9rDceOaWkP6med4FJ%2BVA5HMOG9nsMGOqUBlvTOEpfS43fDp4NcQ%2B7YncOeUx3QD7KkzM%2BwQlx7wHy2oGIj6UJvKt7clCiBkh95YhxdsNNI3UQAQ3CI%2F%2B5PDNeQAcw7vC8yG3DJ2KNhfmVH5fzaFu7oar9EoFCwn3EeZpefacVz2wN5wDCg%2BmKdUTC3%2BrOlMLj6u8Jy%2BlVmw1QlCc%2FjbOB9HdiCIOc%2FiC6QY45HF7iiUX5N9YHib5WQItaDdqp9&X-Amz-Signature=588cb7247fa293583984b686b92a247721cfd20987b79f330e082cc80298ef1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
