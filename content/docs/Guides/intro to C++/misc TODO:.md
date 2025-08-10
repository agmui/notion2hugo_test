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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKRAE4V%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5CTK8Ztjj4qjKet9kOvvHtyMNuk1yMx3oxDYK7rCsIgIgBg8Rny5ymTkipL9fkXdwC7lzKAQNmlxLG5M3oYwMjFQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFsvSdDu5%2FJAqBGMyrcA5U5S0mstEoud6mgX%2FpYs8hFlleWJMh1OMi0cKgl1%2BOE1sLaZFwisMBLUk21SCQ0y51wOhn%2FtYhKwBiHjIb%2F5Llz72q3XJniX9i72QUUoWDX%2Fbzuv4aYBmoKhKD3KzIpS3N8oWuQ2p9L7myZ7uOd9pTHU6jM0kAV%2BQyjIAWAXJdZwMR1jo5FaZvfbndgaCiZrEb9Bdp%2FqKr%2BpDlgSmTw5SnZ0EnLipj5%2Fgpca9OKeS4Sz%2FuPMDiCjWRZEWb3puN8eLxNPYRye2yLmZOgrCcUvR6%2FnFPYBIFG0fkZXQdB4fTXf19F1AnxUczvGibkt3%2F9dwbxDlGeVinRnca1pKWC%2BX%2FTq59xHKelchQIhvM6NVXPLdFQTIKZ9uOttVtOA0hFFI4soCdFmwrWBXTLB42W4IIvxms52%2FTHNK56epVp83FXh7gsZZHt40yT4glgwt23RJDsYKLeOdUXr4Eq5g3Ens3ObXDOmuFHznDqSoMkP16fw6Y1QJ%2Flwe6zY%2FWQMALTaQ8pUjO4%2Ba%2FahKUyTWIqUcp1gsKg8ET5wsT6TD3mRgBwVlRA2RsTcL%2FQkeQ7tVhLEHYwp%2B%2FpMmN6tTzeISNQJ0k1QpfhIWlGWTbR1DF7oP1fpG7Br6drEmpjK3LhML2648QGOqUBarc2ITbnh6Mw9yjMrR36sa7MCGEy78vcnxmfjC3ruXCPPOEO9dbjCXSktBAB%2FKbaeuapIJJlsTC7bllFLrpXAyL96yZqpoqWzPW4G1EKHNPA6zvSqvuINiHBht2fzbIv8KTDGPxIEt5slVuZMrCkdRP3Nn4JKCt6SRxDz%2BNePxs7xdai%2FZkZxenu%2FgyRhWhFyG8Q6xt79muK72BbKF1kVBF%2FUeIX&X-Amz-Signature=0320a3b05717de22f6ea7c31106c4aa9d8234c4b99a3fbc7e153e22d14de56b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKRAE4V%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5CTK8Ztjj4qjKet9kOvvHtyMNuk1yMx3oxDYK7rCsIgIgBg8Rny5ymTkipL9fkXdwC7lzKAQNmlxLG5M3oYwMjFQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFsvSdDu5%2FJAqBGMyrcA5U5S0mstEoud6mgX%2FpYs8hFlleWJMh1OMi0cKgl1%2BOE1sLaZFwisMBLUk21SCQ0y51wOhn%2FtYhKwBiHjIb%2F5Llz72q3XJniX9i72QUUoWDX%2Fbzuv4aYBmoKhKD3KzIpS3N8oWuQ2p9L7myZ7uOd9pTHU6jM0kAV%2BQyjIAWAXJdZwMR1jo5FaZvfbndgaCiZrEb9Bdp%2FqKr%2BpDlgSmTw5SnZ0EnLipj5%2Fgpca9OKeS4Sz%2FuPMDiCjWRZEWb3puN8eLxNPYRye2yLmZOgrCcUvR6%2FnFPYBIFG0fkZXQdB4fTXf19F1AnxUczvGibkt3%2F9dwbxDlGeVinRnca1pKWC%2BX%2FTq59xHKelchQIhvM6NVXPLdFQTIKZ9uOttVtOA0hFFI4soCdFmwrWBXTLB42W4IIvxms52%2FTHNK56epVp83FXh7gsZZHt40yT4glgwt23RJDsYKLeOdUXr4Eq5g3Ens3ObXDOmuFHznDqSoMkP16fw6Y1QJ%2Flwe6zY%2FWQMALTaQ8pUjO4%2Ba%2FahKUyTWIqUcp1gsKg8ET5wsT6TD3mRgBwVlRA2RsTcL%2FQkeQ7tVhLEHYwp%2B%2FpMmN6tTzeISNQJ0k1QpfhIWlGWTbR1DF7oP1fpG7Br6drEmpjK3LhML2648QGOqUBarc2ITbnh6Mw9yjMrR36sa7MCGEy78vcnxmfjC3ruXCPPOEO9dbjCXSktBAB%2FKbaeuapIJJlsTC7bllFLrpXAyL96yZqpoqWzPW4G1EKHNPA6zvSqvuINiHBht2fzbIv8KTDGPxIEt5slVuZMrCkdRP3Nn4JKCt6SRxDz%2BNePxs7xdai%2FZkZxenu%2FgyRhWhFyG8Q6xt79muK72BbKF1kVBF%2FUeIX&X-Amz-Signature=b039dcff38d1ebbe644c5afe6e13e43aab4935f766fcc7cc6ea448924daa2080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
