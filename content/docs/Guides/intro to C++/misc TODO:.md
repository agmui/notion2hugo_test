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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCPAIQG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzZg2P5CjzOiDQWtFAgRQP7TqrPeBlY25CVrNEkMFuKAiAWu03nutJnOlVSM4XUnp%2FjDJSy7Oph3qZyLAnV4Ig44iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2BhuxuAVZbbrcacEKtwDr4FeIPWcJzTwiABkNOQce2rxqO%2FwMEgXYRI6mzF3t1H5AO55Ev2JN7pLJkXWftthMYbUv2y7ynj9L3trbTsKqzrnRZZRbuyjuLzesyE5Iww%2FMjJtYDLerLID4QxA75JIYte0MOzpTpdVSe8jjBuYiNKzwaT9OVqYOc%2FWtv4kByiF2pSz4t9Ta1lV5jB%2FcZdT3HYNcSLc3VNPeV73u%2F5Yr7bDZjxVlZOx%2BHy1LbI7aRwUDpfM3BAH%2BfbSVMk2xQsi4QL13e%2B9lMHBQ0HZ9ffRbQ4zF8xLaYWmTFdcUNECTwaH2dk%2BKRKJOMEhbStV%2FRrFh45yj6LDcwa4PfSjVJvKyMQBdLZKxQUtMFrkwI0578Lqfsr8IFpC0uVSp0riwER8vENdugDuXW028QnqQSjFwfvJDrEqY1DMifmXlgg3sJvk4NU4xywKQooKhST%2BC5Uimi0Hyb4J8vshRCYHg1hs5WRPH%2Be1%2FfIjYxfFr7AGMouKaG3kibmRmWeSCIAWHj99bHEfNSSctl5JRcC2xqnqbzOjBE1TKCUXSKr%2Bg1ZsHCpFzAaa8jLQakaQrJS5fS6ekxJuZkxV8HmY%2Fi0gvrICRRBinW6J0S10ZDvq1LjZzw9XUdkOUrufBdSoe7AwlfmVxQY6pgHKFAoKR81nGxYPYp04e0xUr4ELmzuj0SeXLpXqUVbXJFvc1gUZwkLvJtmMH7a6fxC2SPCqR%2FfIwPdFx5ZgxGoJFWHgUGzg6nsctPkGwsle3SByRg1PlSPyJpQEMQi%2FTcizOg8555xC4MPnnugLQmE8FaXpxNO0HLSKDxViu7xwNV1UiPIqlrj5bnwkjFU271olJx6yMPZymfzSMko3msCvmDiZeVIr&X-Amz-Signature=9cb8744a282dc229a49e2fd651908afdb2a106c64192a630bd57037fd15a1d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCPAIQG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzZg2P5CjzOiDQWtFAgRQP7TqrPeBlY25CVrNEkMFuKAiAWu03nutJnOlVSM4XUnp%2FjDJSy7Oph3qZyLAnV4Ig44iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2BhuxuAVZbbrcacEKtwDr4FeIPWcJzTwiABkNOQce2rxqO%2FwMEgXYRI6mzF3t1H5AO55Ev2JN7pLJkXWftthMYbUv2y7ynj9L3trbTsKqzrnRZZRbuyjuLzesyE5Iww%2FMjJtYDLerLID4QxA75JIYte0MOzpTpdVSe8jjBuYiNKzwaT9OVqYOc%2FWtv4kByiF2pSz4t9Ta1lV5jB%2FcZdT3HYNcSLc3VNPeV73u%2F5Yr7bDZjxVlZOx%2BHy1LbI7aRwUDpfM3BAH%2BfbSVMk2xQsi4QL13e%2B9lMHBQ0HZ9ffRbQ4zF8xLaYWmTFdcUNECTwaH2dk%2BKRKJOMEhbStV%2FRrFh45yj6LDcwa4PfSjVJvKyMQBdLZKxQUtMFrkwI0578Lqfsr8IFpC0uVSp0riwER8vENdugDuXW028QnqQSjFwfvJDrEqY1DMifmXlgg3sJvk4NU4xywKQooKhST%2BC5Uimi0Hyb4J8vshRCYHg1hs5WRPH%2Be1%2FfIjYxfFr7AGMouKaG3kibmRmWeSCIAWHj99bHEfNSSctl5JRcC2xqnqbzOjBE1TKCUXSKr%2Bg1ZsHCpFzAaa8jLQakaQrJS5fS6ekxJuZkxV8HmY%2Fi0gvrICRRBinW6J0S10ZDvq1LjZzw9XUdkOUrufBdSoe7AwlfmVxQY6pgHKFAoKR81nGxYPYp04e0xUr4ELmzuj0SeXLpXqUVbXJFvc1gUZwkLvJtmMH7a6fxC2SPCqR%2FfIwPdFx5ZgxGoJFWHgUGzg6nsctPkGwsle3SByRg1PlSPyJpQEMQi%2FTcizOg8555xC4MPnnugLQmE8FaXpxNO0HLSKDxViu7xwNV1UiPIqlrj5bnwkjFU271olJx6yMPZymfzSMko3msCvmDiZeVIr&X-Amz-Signature=c0e43910010fdd6195ad1ba7555e6df1b840758be8cbbcc48a0d95df60524973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
