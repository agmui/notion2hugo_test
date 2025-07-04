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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETOVNV2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDeNDPtZYenoS8DMN2LEhATSAC8w5OUcpmEGv104bpBPQIgNGZ0wtssIHa%2B%2BdqLykVKbt1k3HpiKeYWSYnR0H1wAc8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMdVD9awgjTUSld4MSrcA8hAY8X8ocW%2BwWh9sGcnZZsPve2uSrE4i35mrB4Z4zgyQG%2FBHM0GIYVQ8MbF4F0kHxwiHhigPrn49ZAdjIMBVVjwRT6cGaE5h19JukXuTn%2BEPcmW%2BB6Cib2aksttcj9inUwQgSeTvhdPb91593whbyD3u3mJf%2B4ev6h0nq00gejoQwXmtvmFAMeemmoWg5Wj4G2T9HokPTUWcw1oY2RGI7ryUdtCRZx3WgcbqY7QzpW0wHIQLnJoNt0NFx%2Fmi%2FgKu9AlPjAU1%2FXhZL19ocTB2vsgnicEqs%2FFsSO%2Fcf5DxFoDIC56Wu0vM8H08rBAF8cqMJpoGjixgZdHHs1q1jN%2BGUP2yDfvusdqqm26xH2sFZRSXO8LpIsjxmcYjV2xkfGiqbptw2Uj8bpd0NNreHhV6%2FJmGx%2B%2BmnJLEfEVnLVZPhbgPcbVcUIEok9XltD4QOYVLknIMwGRUx10dWomsgey2LBH2%2Bm7zg5pqVvypVeziHQmUiMQ1i322R%2FNRi3h2gsd24ET8nRP61MfDrwCeRmKNVZ0ygMrLm1%2Fse4oRYfqX0nKZoP9aVAj6rarEdwAo1CCRen3vattcuHyvLQN3S%2FR7LA44WYEE9Rg0Do4GtbmnQ3o9YDSNLZjnp0x2XzTMJjooMMGOqUBwmz6wFOgsbHtI0huFH2mzM7qZm6vl3y6poc7IXAZ3qigswukQvhbyFGM0WbvB0S%2F7eWQCXbuwuv5lmN4OrL24URXLo0Xi8a8OQjQ%2Fa3PQEn%2BCe61BTleOV3VUlVzXGyhEJXCn%2FcboX8%2BTi1w01oHR712cGjJI7c8ccDD6ezszzVFmheeYtvId0qM%2FAWx%2FCQUua0S1qM%2FuYNUw8iEkA6bMlLhFzAi&X-Amz-Signature=717f8256366b1a0d072f8e4f2f5161c9312236e5933c45673d4752b38666b76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETOVNV2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDeNDPtZYenoS8DMN2LEhATSAC8w5OUcpmEGv104bpBPQIgNGZ0wtssIHa%2B%2BdqLykVKbt1k3HpiKeYWSYnR0H1wAc8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMdVD9awgjTUSld4MSrcA8hAY8X8ocW%2BwWh9sGcnZZsPve2uSrE4i35mrB4Z4zgyQG%2FBHM0GIYVQ8MbF4F0kHxwiHhigPrn49ZAdjIMBVVjwRT6cGaE5h19JukXuTn%2BEPcmW%2BB6Cib2aksttcj9inUwQgSeTvhdPb91593whbyD3u3mJf%2B4ev6h0nq00gejoQwXmtvmFAMeemmoWg5Wj4G2T9HokPTUWcw1oY2RGI7ryUdtCRZx3WgcbqY7QzpW0wHIQLnJoNt0NFx%2Fmi%2FgKu9AlPjAU1%2FXhZL19ocTB2vsgnicEqs%2FFsSO%2Fcf5DxFoDIC56Wu0vM8H08rBAF8cqMJpoGjixgZdHHs1q1jN%2BGUP2yDfvusdqqm26xH2sFZRSXO8LpIsjxmcYjV2xkfGiqbptw2Uj8bpd0NNreHhV6%2FJmGx%2B%2BmnJLEfEVnLVZPhbgPcbVcUIEok9XltD4QOYVLknIMwGRUx10dWomsgey2LBH2%2Bm7zg5pqVvypVeziHQmUiMQ1i322R%2FNRi3h2gsd24ET8nRP61MfDrwCeRmKNVZ0ygMrLm1%2Fse4oRYfqX0nKZoP9aVAj6rarEdwAo1CCRen3vattcuHyvLQN3S%2FR7LA44WYEE9Rg0Do4GtbmnQ3o9YDSNLZjnp0x2XzTMJjooMMGOqUBwmz6wFOgsbHtI0huFH2mzM7qZm6vl3y6poc7IXAZ3qigswukQvhbyFGM0WbvB0S%2F7eWQCXbuwuv5lmN4OrL24URXLo0Xi8a8OQjQ%2Fa3PQEn%2BCe61BTleOV3VUlVzXGyhEJXCn%2FcboX8%2BTi1w01oHR712cGjJI7c8ccDD6ezszzVFmheeYtvId0qM%2FAWx%2FCQUua0S1qM%2FuYNUw8iEkA6bMlLhFzAi&X-Amz-Signature=1b5ade3c4081755181bb7e69930b174db0e3968ec6e4c6d210b6d6ae7a390697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
