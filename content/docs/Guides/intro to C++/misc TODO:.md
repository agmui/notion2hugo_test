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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2MDHS5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdfa6jiAZZnIEnKjSApfFCyBpoYms%2FByqAhY03VQttwIgMBj%2FHCq6MPWcsihfaMuTq5UnyS9pdruTZcea2g0aa7wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi6Bkp8IGl5%2BOAEgircA27DziQ9%2FIeGbH25VOPaZa6gxpwJrvUW9nF2H4970KASPcG6uRC1zEsPG%2FV%2BpysAx6VpK4oGSHA17pymre6whpEQtITkVTxg9AqvZonMHPlNfUOEYzc1dFGS0TXdVto18up%2F5Lam6NucFNBYrGbU4KyUKE2bTdr%2F53SRcBx1pqHz7o%2BE2%2BWAc%2FO61i1uBW4%2BgsCBjpzApBJEmcrThW5xTLfs8gtvARlZiBX1xNFknw49tl3oowCYUEvQVFZjLT%2BB8a1X4rh4c1W7SwGJWqvb3Qvq2Aw%2FbbpesKdTenXreCOsgtH5RBRRWzrLQOD7bhOBFR%2FIvZ8qnA2Z1QBJC4dj%2F%2FuZlJlJaqEEBpPgThHNi%2Fj9XByrdXFw7Edrlbkk%2F2XQbpuVZ9t%2BhhkuxOSJmkwFITOlIPCJF2UQ7dzzrupmLBz%2BZuLA%2FiUSSm2C%2FymzgzXJXxQtRpsY0ppb7HOzz4DWiqkSvIv4u44KvIHS9xjMPnFE0%2FQCVSG5DLGBg3Wog5%2BSnoJ9ExhjLSGu7gZpxy82QHUProxgL64EMjQuJWZfsA%2ByO3lx194OMvUnhK8ZzEVvFq%2Fcdg7YCD4hWC%2FAkoDah6DaRcQgDd6A88EzycZp4byWUe%2F%2BzuL8%2F87vdvk6MKmHo70GOqUB%2FH%2Fdxj6FTkfn7c7zWYm%2BAyJCfB%2BQbLhmhGoxMjIAZn6hRy9SFYupeJZp2eyJtKmWOpupSy1uUNgNYvY3RrfnEwteukCYnx%2FRZvhiT8dmUBUmfOslK4pa25PoR6Gd8ZbfQEREBNP6ElnqcFVm9brQPd3X62fCuB%2BbEIzLLR6vbXLEeiynb4MmqS4n%2BROmq%2FaSiTXut1klkeXscwQRvKTJ8YdPSyWH&X-Amz-Signature=eeb6a6b0c15968f4d8cae2d62cdfb65a0cd2709bca6726720ce32444e524af30&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2MDHS5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdfa6jiAZZnIEnKjSApfFCyBpoYms%2FByqAhY03VQttwIgMBj%2FHCq6MPWcsihfaMuTq5UnyS9pdruTZcea2g0aa7wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi6Bkp8IGl5%2BOAEgircA27DziQ9%2FIeGbH25VOPaZa6gxpwJrvUW9nF2H4970KASPcG6uRC1zEsPG%2FV%2BpysAx6VpK4oGSHA17pymre6whpEQtITkVTxg9AqvZonMHPlNfUOEYzc1dFGS0TXdVto18up%2F5Lam6NucFNBYrGbU4KyUKE2bTdr%2F53SRcBx1pqHz7o%2BE2%2BWAc%2FO61i1uBW4%2BgsCBjpzApBJEmcrThW5xTLfs8gtvARlZiBX1xNFknw49tl3oowCYUEvQVFZjLT%2BB8a1X4rh4c1W7SwGJWqvb3Qvq2Aw%2FbbpesKdTenXreCOsgtH5RBRRWzrLQOD7bhOBFR%2FIvZ8qnA2Z1QBJC4dj%2F%2FuZlJlJaqEEBpPgThHNi%2Fj9XByrdXFw7Edrlbkk%2F2XQbpuVZ9t%2BhhkuxOSJmkwFITOlIPCJF2UQ7dzzrupmLBz%2BZuLA%2FiUSSm2C%2FymzgzXJXxQtRpsY0ppb7HOzz4DWiqkSvIv4u44KvIHS9xjMPnFE0%2FQCVSG5DLGBg3Wog5%2BSnoJ9ExhjLSGu7gZpxy82QHUProxgL64EMjQuJWZfsA%2ByO3lx194OMvUnhK8ZzEVvFq%2Fcdg7YCD4hWC%2FAkoDah6DaRcQgDd6A88EzycZp4byWUe%2F%2BzuL8%2F87vdvk6MKmHo70GOqUB%2FH%2Fdxj6FTkfn7c7zWYm%2BAyJCfB%2BQbLhmhGoxMjIAZn6hRy9SFYupeJZp2eyJtKmWOpupSy1uUNgNYvY3RrfnEwteukCYnx%2FRZvhiT8dmUBUmfOslK4pa25PoR6Gd8ZbfQEREBNP6ElnqcFVm9brQPd3X62fCuB%2BbEIzLLR6vbXLEeiynb4MmqS4n%2BROmq%2FaSiTXut1klkeXscwQRvKTJ8YdPSyWH&X-Amz-Signature=bfe2e83d0d418eb130bb3619bb67f2d12b3e1dce47eaa700925bb56ace1ca3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
