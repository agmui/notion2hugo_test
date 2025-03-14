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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX6GTEN7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuOImUvz70yk92909rkixqccRjCWAnclg9e0ijcz4DDAiEAyjpTqJFp6LlE0Thy3wY2BsYRcMEOgWjgZaUPyBMyTLQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbaG5GF0f46szWJSircA4HFa5tD%2BYuVTX1qWEA2Bau8Ye%2B7B05WRVj2dY0nfGJ5eejPDvwUAc1Q14V9t%2BcrELbd3T1sQYBtj72RO0TfYezBSRXgAdCZp%2BXQFBKAEaMaeY09M4FoDzYePa0%2BXGaYJhMDAoZ%2BuQprhehkUb43xOZ4pr6x0vAgEjOhOUYZqb9es%2FCG%2BHqYC5ZJhPw3Xf%2BxR0gt8%2Fy2QPmx5Cw25OVY39nGu9fQxsbcdqBbom008JAbIA866%2F9xtWzMKIgWzEQwZxBrpkXGL%2FzVhqZ9CBFFFpqz0cjNXn%2B7ZldyLTqA9FfmFykL%2BSDWoNnQMWOhrD%2FyIpkXMRGL5dRyzDShE%2BGlS1Vi6C9oe5nsZIf14xcQYIkRDgcSmXSHR8oQV7AnhWhdBMdZ5DN3DXh%2B3WUUdlaTT5pz8ySkgdZUWhBrJoOCm5JQ%2F5eaFlE15mTsFcR9K9IcrV6yTxPOe%2FW3bZwfRxRtcl%2F%2BUSaPCKATCZVC2ANHZFDoHg9QVW81g0SoclH2oxxGEJw4G8b1VXs1mU8BOwO7egI4i0Hwn2qd7tDzJCjeffXz66nEzKOzIPV9o8eloP3Kvwz9r7oI3iPe0lEZ2h7lVTjCEJRijy6baECsQ9dwMyfdWuYXJhzA1WBWN4dGMPKF0L4GOqUBZnaPVkQxRss7lMR2snSKjH9XTcf0UZqLX7oE1Pt%2By0qxeHyEM2%2FpL0KfbRKYaliTXP4loTHuaGIyVBrL1oHUS1ms%2FoMyKOo8EcQgQ%2Bi6amPsoCeP4ZbOe46k1drAcDTl8jt2P1RCImWRytCS81062ZqKE1stiqnQGMRInvbQPbe2%2BmIsiCFSBfMUDrtFg4Lg9XPFAQO3AQL9P2UTxOeO%2Bj0hCblP&X-Amz-Signature=91220c0fa0640260edd869deae22abe2011d83b3b3f0c68ed23029c71753e8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX6GTEN7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuOImUvz70yk92909rkixqccRjCWAnclg9e0ijcz4DDAiEAyjpTqJFp6LlE0Thy3wY2BsYRcMEOgWjgZaUPyBMyTLQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbaG5GF0f46szWJSircA4HFa5tD%2BYuVTX1qWEA2Bau8Ye%2B7B05WRVj2dY0nfGJ5eejPDvwUAc1Q14V9t%2BcrELbd3T1sQYBtj72RO0TfYezBSRXgAdCZp%2BXQFBKAEaMaeY09M4FoDzYePa0%2BXGaYJhMDAoZ%2BuQprhehkUb43xOZ4pr6x0vAgEjOhOUYZqb9es%2FCG%2BHqYC5ZJhPw3Xf%2BxR0gt8%2Fy2QPmx5Cw25OVY39nGu9fQxsbcdqBbom008JAbIA866%2F9xtWzMKIgWzEQwZxBrpkXGL%2FzVhqZ9CBFFFpqz0cjNXn%2B7ZldyLTqA9FfmFykL%2BSDWoNnQMWOhrD%2FyIpkXMRGL5dRyzDShE%2BGlS1Vi6C9oe5nsZIf14xcQYIkRDgcSmXSHR8oQV7AnhWhdBMdZ5DN3DXh%2B3WUUdlaTT5pz8ySkgdZUWhBrJoOCm5JQ%2F5eaFlE15mTsFcR9K9IcrV6yTxPOe%2FW3bZwfRxRtcl%2F%2BUSaPCKATCZVC2ANHZFDoHg9QVW81g0SoclH2oxxGEJw4G8b1VXs1mU8BOwO7egI4i0Hwn2qd7tDzJCjeffXz66nEzKOzIPV9o8eloP3Kvwz9r7oI3iPe0lEZ2h7lVTjCEJRijy6baECsQ9dwMyfdWuYXJhzA1WBWN4dGMPKF0L4GOqUBZnaPVkQxRss7lMR2snSKjH9XTcf0UZqLX7oE1Pt%2By0qxeHyEM2%2FpL0KfbRKYaliTXP4loTHuaGIyVBrL1oHUS1ms%2FoMyKOo8EcQgQ%2Bi6amPsoCeP4ZbOe46k1drAcDTl8jt2P1RCImWRytCS81062ZqKE1stiqnQGMRInvbQPbe2%2BmIsiCFSBfMUDrtFg4Lg9XPFAQO3AQL9P2UTxOeO%2Bj0hCblP&X-Amz-Signature=885ee6e566ffeca1bf0c139eb5ac7617d81b84126cf99fdff8239064d885622a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
