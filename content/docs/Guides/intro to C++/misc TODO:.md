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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUUZQTU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC0KDAKsxTsAEy0QI9pKOZ%2BCyubBQEK%2BWHG2dOwH5Jt%2FAIhAK%2BAZ42eBTkBRyd9YvAn1hx9cmxO%2B4S%2FUQ77sr6%2BdCtbKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTj3GGPWuKp3vpG%2FIq3APvkOYU7IncFEKKBjum4y%2BhADQM2CP21Zwz4Eh%2FGpThTLVSDvvg5NLFblxMDh%2FzsNCAg3dc5aVBC4hwMNw6GQQkalBcsCuy6GjaOGBXtXMK4HzflyJ1XcpotmneqSLee5FVaBbGAQN8lcb%2BhPSjtI5Gkwbdz%2FyW%2FwhMQ2Wrf47CjnFzDN8OnvuYMXXqHl9AuULv3ZNnkF4jPLPlftOUtsVAsYYYW8avhIkCLxGfN5bZBxmSAWGxHXTlW6Tc8jMvKFXn1Y12Wo9Wd4alCkAF%2F8SxQO9ppi5QE3Wpz0iwm9nAZ1rKDsY8xx9MbtNBVk5%2FHkrKxmM3Ex5NUTrQpe2ph%2Fab1wZ4VbwkAdNAF5Pb1VEluvfLokX1ETeBo1WGwXR9JcNQhtil%2F0Wjp80z44RBxJpqQGkjwtNCKmajyesVtKuROzUAz1Tm4Eo83qKNAbOpqXFM6NDtF6zKanDT9%2F6h1cp7AP4OYr63nfAY2z479ZTIJLQc5uTDvvPK9VTJDzRR0B4ACu7Pa0M64AK4ro8dLWEgHZsb5KhedFZZCnVL%2BFL3R%2Brj1%2FR5eWmX%2BwKqz6d9%2FGIO9EPL%2B1QS0g9F7thZbm%2F5vhudhy36eoB1lgUBxhJKRtDTPWznESgom%2FLCljCYhIbBBjqkATc1BuvJfkfEL9GCskIJJzuuuRx5kUBdihHd7UZn6rPVP2JWfpd8rUiJ%2BQA9GvgczlPwBnk04BbFP9Ih65pqwqXruqEyZ3tJrXT50jVUSv%2FS4uLIJhHl%2FlJN%2BWLiSoKL7YWw1Y%2BmzeOwHZ4spgXvUPQYjRfA7O9DXrZRiqm1N84WAeMRXxSHJWzNG5xooc5NH4Yf0gTt4CfD6WZvuyM%2FrS8cKKtf&X-Amz-Signature=542e770912b5d0bded52552991f4b4547bef2b83719d66e10c7755d3dd818616&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUUZQTU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC0KDAKsxTsAEy0QI9pKOZ%2BCyubBQEK%2BWHG2dOwH5Jt%2FAIhAK%2BAZ42eBTkBRyd9YvAn1hx9cmxO%2B4S%2FUQ77sr6%2BdCtbKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTj3GGPWuKp3vpG%2FIq3APvkOYU7IncFEKKBjum4y%2BhADQM2CP21Zwz4Eh%2FGpThTLVSDvvg5NLFblxMDh%2FzsNCAg3dc5aVBC4hwMNw6GQQkalBcsCuy6GjaOGBXtXMK4HzflyJ1XcpotmneqSLee5FVaBbGAQN8lcb%2BhPSjtI5Gkwbdz%2FyW%2FwhMQ2Wrf47CjnFzDN8OnvuYMXXqHl9AuULv3ZNnkF4jPLPlftOUtsVAsYYYW8avhIkCLxGfN5bZBxmSAWGxHXTlW6Tc8jMvKFXn1Y12Wo9Wd4alCkAF%2F8SxQO9ppi5QE3Wpz0iwm9nAZ1rKDsY8xx9MbtNBVk5%2FHkrKxmM3Ex5NUTrQpe2ph%2Fab1wZ4VbwkAdNAF5Pb1VEluvfLokX1ETeBo1WGwXR9JcNQhtil%2F0Wjp80z44RBxJpqQGkjwtNCKmajyesVtKuROzUAz1Tm4Eo83qKNAbOpqXFM6NDtF6zKanDT9%2F6h1cp7AP4OYr63nfAY2z479ZTIJLQc5uTDvvPK9VTJDzRR0B4ACu7Pa0M64AK4ro8dLWEgHZsb5KhedFZZCnVL%2BFL3R%2Brj1%2FR5eWmX%2BwKqz6d9%2FGIO9EPL%2B1QS0g9F7thZbm%2F5vhudhy36eoB1lgUBxhJKRtDTPWznESgom%2FLCljCYhIbBBjqkATc1BuvJfkfEL9GCskIJJzuuuRx5kUBdihHd7UZn6rPVP2JWfpd8rUiJ%2BQA9GvgczlPwBnk04BbFP9Ih65pqwqXruqEyZ3tJrXT50jVUSv%2FS4uLIJhHl%2FlJN%2BWLiSoKL7YWw1Y%2BmzeOwHZ4spgXvUPQYjRfA7O9DXrZRiqm1N84WAeMRXxSHJWzNG5xooc5NH4Yf0gTt4CfD6WZvuyM%2FrS8cKKtf&X-Amz-Signature=0befbe6cc2db9839cef74de8bac16f84b55f0f41a6027fbdad1b7d1e82f20ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
