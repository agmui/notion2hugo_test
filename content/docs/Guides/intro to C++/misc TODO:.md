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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEQT6BD%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKtaHBTB34jdw8pbo0EP1hEJoFcmiBxu9Df6i1kRNf7AIgRrj%2BtGy5PuFXXGn9ztMF1pCqJY%2BwNmQ9iGGVGE3YUrwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKtVG8zZBdIUdG8MPCrcA161YLR9SJ%2BksRnWCiXcy9P6oi0duYOCFrHyt71X%2F%2FW1rj92VY1usjyJrbX3VvffNgdDHpAgzZ5tDRwPpp3raUi2tVxTSHfqqPKfJMNtRMOQpTOPpIohvBNylNocWfjMThdl6fUv10XK5Ipu9xoZCG7l13nyi7iDsnomz3pf3nadywlko9bfhHy3094mZoXskpAIG9P9dRV166Ni%2FqyKDREuMSGrXhZvximNK6IsmGU19o1DzrKOf0FKf8Ql6f415PmVFLdT9Uvs8Udlcb5A7eVdqt0IBm0g8JSCS57QnJ%2B7mVz3SR6%2BMHOIQtv30myyo3MhMmxbWhD4y%2BczcmdtyVIUMDbrGvLkJDGew9ltBeyKc4Ryw9uJjrCdWiAgG1LQFza6zHGk5J48UJHroweYjOgsNFvdRUXj0y4NrAT4y2Ep9vNQdxNQMG9ZocxLmc2m4TqG7vcxCYMTh3EaM%2BoksknVXV2Fyf7LRWoQaNi5%2F6PcKhwFckEeurlduLDnZLv1jXr6qYDJRKLBHPLa8CoEcuN%2By%2Bq919QeESKSPl5tIhxrMsaNeFF%2Bxz%2FlWyJwEAL7Dbhv2sGPg7nHoHmQPFuRE6KEITe%2FQ6mWcWPApuGkgXMlP7cMkycJzB3TlkuQMPz509AGOqUB4HLjl%2F%2FXAvSIyx2ZjDSW%2BZ4p37nRY2uPbTOmaPchS6gy7JEG7yX9CluqjsFfXQEtIJppILOevRjCs4G1Zxazx5BjXW%2BQ3sL8wj4VsyBqNefcv2xqvCco0ejqmE112MdYJxfLnVkRIm4CciEE2qY%2FwtBQW5w3zs%2F0Ry0MML1APuifD8WBDeyigdhFhQ1mR%2FE7Fe4dnwt%2B%2BARzFze2xR6eyZzfK5GG&X-Amz-Signature=41500f64bba4c7191e6064ec3f4a059f64d7caffd71890f2d4033687168f95ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEQT6BD%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKtaHBTB34jdw8pbo0EP1hEJoFcmiBxu9Df6i1kRNf7AIgRrj%2BtGy5PuFXXGn9ztMF1pCqJY%2BwNmQ9iGGVGE3YUrwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKtVG8zZBdIUdG8MPCrcA161YLR9SJ%2BksRnWCiXcy9P6oi0duYOCFrHyt71X%2F%2FW1rj92VY1usjyJrbX3VvffNgdDHpAgzZ5tDRwPpp3raUi2tVxTSHfqqPKfJMNtRMOQpTOPpIohvBNylNocWfjMThdl6fUv10XK5Ipu9xoZCG7l13nyi7iDsnomz3pf3nadywlko9bfhHy3094mZoXskpAIG9P9dRV166Ni%2FqyKDREuMSGrXhZvximNK6IsmGU19o1DzrKOf0FKf8Ql6f415PmVFLdT9Uvs8Udlcb5A7eVdqt0IBm0g8JSCS57QnJ%2B7mVz3SR6%2BMHOIQtv30myyo3MhMmxbWhD4y%2BczcmdtyVIUMDbrGvLkJDGew9ltBeyKc4Ryw9uJjrCdWiAgG1LQFza6zHGk5J48UJHroweYjOgsNFvdRUXj0y4NrAT4y2Ep9vNQdxNQMG9ZocxLmc2m4TqG7vcxCYMTh3EaM%2BoksknVXV2Fyf7LRWoQaNi5%2F6PcKhwFckEeurlduLDnZLv1jXr6qYDJRKLBHPLa8CoEcuN%2By%2Bq919QeESKSPl5tIhxrMsaNeFF%2Bxz%2FlWyJwEAL7Dbhv2sGPg7nHoHmQPFuRE6KEITe%2FQ6mWcWPApuGkgXMlP7cMkycJzB3TlkuQMPz509AGOqUB4HLjl%2F%2FXAvSIyx2ZjDSW%2BZ4p37nRY2uPbTOmaPchS6gy7JEG7yX9CluqjsFfXQEtIJppILOevRjCs4G1Zxazx5BjXW%2BQ3sL8wj4VsyBqNefcv2xqvCco0ejqmE112MdYJxfLnVkRIm4CciEE2qY%2FwtBQW5w3zs%2F0Ry0MML1APuifD8WBDeyigdhFhQ1mR%2FE7Fe4dnwt%2B%2BARzFze2xR6eyZzfK5GG&X-Amz-Signature=d62986ea9a401a5be1def6f7e8318ceee1b5244ac3a8f814901340260943d45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
