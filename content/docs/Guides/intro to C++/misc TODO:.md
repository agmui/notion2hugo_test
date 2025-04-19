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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIJVQ4A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFZknO23UW5w%2BQLyLNrBKvCZN0C2A6SF%2FEJTs6ASgi4YAiEA%2Fg7lUiKw1IZJQqUdK0Wp39PaPaib7LJNwgYOZ5xrXToqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgLEP1CbMon5KYVOircA18e0DnzSj1AR8akWjCm%2BLjZ9%2BsD4hFkN6DO8JUWvyy%2F2yOq%2FpVrOZtQeycLQexcJCest190ojTD28izBiQsGhnCGKFf%2BR356blEOJsmaYMJHb4Lpm7PrBlWQGlHXX12rx1MZOlVtWskgYbOhZVR7%2BptZlw3sLQCAlhwjLq3iZEhAgkjorIJVOrSHuKVnswg4wDelI7OZMuLjf29SpDx3bAQEGN4Y1JMELYzsO2wUQRrvDGJBZ4s82fz7vISkVDZaIP0kcKyy%2Fnumv%2BPYdgzl39gXRgPWHPAEegEAsjBLuU2ddkHBh1bOoYrNP1fVUzfkKjQ2DDh49X%2BLzKu1GNvddgSS61Zsmv3Xy%2B%2F%2B9U5TIzeEBSitQqrRbYP3SO2cIVr5bITWJi7tEohyLnhIHVXYmC36IYYkUVFzCML0toI1bGUCymC7kZ33M%2Bs5SOAM17JYOCwCWrLsp1DF1lrIm7yPtD4sQNbCj2AaIzz9PBg77Ayfzdl%2BjmIXkRJnGXW0xgHQWP3KNfp25yiQzX3dXkBQk5lqhkfPWFUjQ2vzUyGk0qvxygn%2FqFNNYUt0BBUMTytV3hum0LljG6SXNglHAHXTlRc6oMAwtOJG95p6EvqRX6yQ%2BZ8W%2Fs%2Bb2jKsNKCMIegj8AGOqUBKzImQbFFW9dp8qSjJ13WcSXkDDxQlaZL82HyhIw4DEBOjjcw1EaZCu5ONOwL9sWVKf6x2s%2FF9iHkMGpV%2BSGAsaX2GElS7aML0lzb92ntbYM59FiWMEZ7MyoCuJTOl9Jbe%2FH7eq5kADAl6CGWuuhycoB83NMRBO67xPU44f%2FBCaahX7lCH1OqosMj5SJZHJEtRS5OAwiwzboqQrj2H1O2sIMmtnym&X-Amz-Signature=f7ce1da30a1e5bc935f36277d2799d671a943685e1d5a72a05ae2fb0596e4a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIJVQ4A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFZknO23UW5w%2BQLyLNrBKvCZN0C2A6SF%2FEJTs6ASgi4YAiEA%2Fg7lUiKw1IZJQqUdK0Wp39PaPaib7LJNwgYOZ5xrXToqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgLEP1CbMon5KYVOircA18e0DnzSj1AR8akWjCm%2BLjZ9%2BsD4hFkN6DO8JUWvyy%2F2yOq%2FpVrOZtQeycLQexcJCest190ojTD28izBiQsGhnCGKFf%2BR356blEOJsmaYMJHb4Lpm7PrBlWQGlHXX12rx1MZOlVtWskgYbOhZVR7%2BptZlw3sLQCAlhwjLq3iZEhAgkjorIJVOrSHuKVnswg4wDelI7OZMuLjf29SpDx3bAQEGN4Y1JMELYzsO2wUQRrvDGJBZ4s82fz7vISkVDZaIP0kcKyy%2Fnumv%2BPYdgzl39gXRgPWHPAEegEAsjBLuU2ddkHBh1bOoYrNP1fVUzfkKjQ2DDh49X%2BLzKu1GNvddgSS61Zsmv3Xy%2B%2F%2B9U5TIzeEBSitQqrRbYP3SO2cIVr5bITWJi7tEohyLnhIHVXYmC36IYYkUVFzCML0toI1bGUCymC7kZ33M%2Bs5SOAM17JYOCwCWrLsp1DF1lrIm7yPtD4sQNbCj2AaIzz9PBg77Ayfzdl%2BjmIXkRJnGXW0xgHQWP3KNfp25yiQzX3dXkBQk5lqhkfPWFUjQ2vzUyGk0qvxygn%2FqFNNYUt0BBUMTytV3hum0LljG6SXNglHAHXTlRc6oMAwtOJG95p6EvqRX6yQ%2BZ8W%2Fs%2Bb2jKsNKCMIegj8AGOqUBKzImQbFFW9dp8qSjJ13WcSXkDDxQlaZL82HyhIw4DEBOjjcw1EaZCu5ONOwL9sWVKf6x2s%2FF9iHkMGpV%2BSGAsaX2GElS7aML0lzb92ntbYM59FiWMEZ7MyoCuJTOl9Jbe%2FH7eq5kADAl6CGWuuhycoB83NMRBO67xPU44f%2FBCaahX7lCH1OqosMj5SJZHJEtRS5OAwiwzboqQrj2H1O2sIMmtnym&X-Amz-Signature=bf397eff343b02d8ea0f0f56b95d893e54132cb25630bb0aafa8f8600bd93b63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
