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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYWDRJC%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDK25mBXARe%2FIhrPuoP0PvGMA8w7aD%2FigHlq0lv8ouUhQIgZYWx1USlAiUNNMKwfcFo0m06iq8HMRHUaUIpkNOKoQMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJrj8CN9GT4c9IiCrcA1RQnJLOAoAzHciFaba7ii%2FJSB6%2FiCxpdNN5sRMunRDg4Hsz%2BSYJID58j4k%2BFBNkYD8fV8HZj%2B4OyESJGLCP2XKyYGS08gOiwVOMLoh9g6WsayOp1vRgzQDFQLpB%2BA%2FAwjnY1xvZhGKnc8mJ0L%2FbOX2ifiiDpRSECQyATE%2Bt%2BbcivwlhoBe99%2FAwMUrYb3a1xgzTIj0F2WD6%2BXPf0C%2F2LJ18L2tOX%2FEMPE%2ByBtTA%2FTHQ524Sw4BG0PFJu7Fl4D2tKXkZUzHmvSw2T%2FnDV7rlmW%2FAVtJGVkMKjrmkvhzdHWsBWT33x1D1e7P0Jq6lScCtAqSaQpxyK1yeVYIW0pQEV3e2eTrfY0dZxyVtfTSXpK9eeL09DPjfqsBhQSCCUYGUxyx1pg%2BLJ0jxlzksPtfufmB3ypP7%2FzSdZ4r%2BMoWzsCYYqeqGTiEqaMPCtR6s7JFim7QOr68a8tfL9XLxYL8ys%2BCJCI8Pm3plOlaPwucLWa%2FERNgik7nwf2jqwLj%2Fp7Xq1XNEgEqzIaACxI4cAxKVhyUHka1%2B3WC8ac0pZfd3jsPbSSQ%2B%2FFJrxO%2FyYvkekFFong6qCAJSKyNIe6B66ZclofAzIhdU1cQ3NXpZNhC%2BUr3PoIOwLYxQeKXgyttIMI%2FtnM4GOqUBcJnJwj%2BPC56YKTx%2Bme%2BzjBcI%2BtBIZDVn4sstRyFElFZSLWDJoIWW51o%2BYT2p1jS7VySN91CX7wCcdAq9qCjVCbOc1gKyKyJlsg0cFTThF05Wc2Dvr3wPuBniON8oOaF5tBKkdv1OZdeNjTTUHGg3S0plHqXsWtipBAU%2B%2F%2BHGIZP%2FUzS%2FSZjW3wsaLLQcWuACdu8tVkHVJkmClQKELLO%2BWIT81Tso&X-Amz-Signature=e10dc9f9c671f710ecc13be2c3c784793c0800e0ea14052ed5cd6495e64271c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYWDRJC%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDK25mBXARe%2FIhrPuoP0PvGMA8w7aD%2FigHlq0lv8ouUhQIgZYWx1USlAiUNNMKwfcFo0m06iq8HMRHUaUIpkNOKoQMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJrj8CN9GT4c9IiCrcA1RQnJLOAoAzHciFaba7ii%2FJSB6%2FiCxpdNN5sRMunRDg4Hsz%2BSYJID58j4k%2BFBNkYD8fV8HZj%2B4OyESJGLCP2XKyYGS08gOiwVOMLoh9g6WsayOp1vRgzQDFQLpB%2BA%2FAwjnY1xvZhGKnc8mJ0L%2FbOX2ifiiDpRSECQyATE%2Bt%2BbcivwlhoBe99%2FAwMUrYb3a1xgzTIj0F2WD6%2BXPf0C%2F2LJ18L2tOX%2FEMPE%2ByBtTA%2FTHQ524Sw4BG0PFJu7Fl4D2tKXkZUzHmvSw2T%2FnDV7rlmW%2FAVtJGVkMKjrmkvhzdHWsBWT33x1D1e7P0Jq6lScCtAqSaQpxyK1yeVYIW0pQEV3e2eTrfY0dZxyVtfTSXpK9eeL09DPjfqsBhQSCCUYGUxyx1pg%2BLJ0jxlzksPtfufmB3ypP7%2FzSdZ4r%2BMoWzsCYYqeqGTiEqaMPCtR6s7JFim7QOr68a8tfL9XLxYL8ys%2BCJCI8Pm3plOlaPwucLWa%2FERNgik7nwf2jqwLj%2Fp7Xq1XNEgEqzIaACxI4cAxKVhyUHka1%2B3WC8ac0pZfd3jsPbSSQ%2B%2FFJrxO%2FyYvkekFFong6qCAJSKyNIe6B66ZclofAzIhdU1cQ3NXpZNhC%2BUr3PoIOwLYxQeKXgyttIMI%2FtnM4GOqUBcJnJwj%2BPC56YKTx%2Bme%2BzjBcI%2BtBIZDVn4sstRyFElFZSLWDJoIWW51o%2BYT2p1jS7VySN91CX7wCcdAq9qCjVCbOc1gKyKyJlsg0cFTThF05Wc2Dvr3wPuBniON8oOaF5tBKkdv1OZdeNjTTUHGg3S0plHqXsWtipBAU%2B%2F%2BHGIZP%2FUzS%2FSZjW3wsaLLQcWuACdu8tVkHVJkmClQKELLO%2BWIT81Tso&X-Amz-Signature=ed5385e8a2a0d88d347b98ab2fb77e7435ac8febbed9081de097de6d8268fbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
