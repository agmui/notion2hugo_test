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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSQQEY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZcH8BosDaqJK86OMqxqRJzEXKnN7qqALlhJ6unVtowIhAI2HYOOXpYG29utNHCth%2FtvI7TRehXlYaRxySyD29FLdKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoGzGZZs%2FfizfXITsq3ANF6IyYiviUF4ZFOsV0Ivivyk4WbFNCvHrm5P8yf68fSREPUPJbxhJpgj22sCMKxLyXRqn22kshb4brAQfwDHT1Nme4xZteLtaVuwM4XsyfVy3OetB9XCiTWKEx0tGsvmXRSU8dxS4yWf5zEbmjMWgi%2B1hChmN35Et7vZhzP5FIEHINQWQ0spCTFwoQiEsdDLVw%2F4d3yuoZ7r1M2QnviYGR4zQlc%2FBLywh4%2FyhHNdF0nJhFCPaXp5mVkYzkUH6txqbJyorgJM9JI7RcXR0TFDI2QcRABsHKs7%2Fnn5n9uXB41HsFtJ4%2Bj0WedWk%2FG%2FWqmOXoT5QkeB8dzkfOrUZ3v%2BYt2OwX%2FF5u6%2F2B27AglQoS7qcCwc2LaFRNkllfeu2JkpXhhucJb%2FDj%2FLb3eDeo2AZkVRcWdOxKKqXvSKBaG8D3qUJv2iRCTpWs%2B10Dr6Lil1Xh75Ct3R0pWu9RZ4GdxJLSY936LqEyvHhEPYyLh%2FCQZL%2FEmOxPeVXdX9mwj6nsGKA1ghcaBDalHMKFqo6iok%2FjsDk8L8XjqjJsULTLDO%2BeoN7CXmebIW%2FFUSClhL5KxVO7oDsXGQYJh6TWu2teK%2FvguNIQu1D11ffi1Aa7VSVWS4Mk%2F3Kwhl47rQ33zTC6sYLDBjqkAfCkI2N0u4clffN6AQE7LcIoUek4lON0AuUqZFNAVCpDtwfXCM%2F4YF1fK4Mh3bZqYxxiPHNhgYLKu2%2BjI5pXo7alT2taiPv4pbHMF1FUdWO8NjAHHoKX0GGP5YryYXRHcCO96EAqds5IL2j17z04WvTbLe8aorCmIPUkzjKsg0gH0yzXe2dkeWTNneaRNSL2cLeMLsZUGqTaoIdsnDl2yqp4HTl%2F&X-Amz-Signature=0b26f9a56226d77abca8174ef63a8096d56d0e2eec3d13215059749e06a95522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSQQEY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZcH8BosDaqJK86OMqxqRJzEXKnN7qqALlhJ6unVtowIhAI2HYOOXpYG29utNHCth%2FtvI7TRehXlYaRxySyD29FLdKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoGzGZZs%2FfizfXITsq3ANF6IyYiviUF4ZFOsV0Ivivyk4WbFNCvHrm5P8yf68fSREPUPJbxhJpgj22sCMKxLyXRqn22kshb4brAQfwDHT1Nme4xZteLtaVuwM4XsyfVy3OetB9XCiTWKEx0tGsvmXRSU8dxS4yWf5zEbmjMWgi%2B1hChmN35Et7vZhzP5FIEHINQWQ0spCTFwoQiEsdDLVw%2F4d3yuoZ7r1M2QnviYGR4zQlc%2FBLywh4%2FyhHNdF0nJhFCPaXp5mVkYzkUH6txqbJyorgJM9JI7RcXR0TFDI2QcRABsHKs7%2Fnn5n9uXB41HsFtJ4%2Bj0WedWk%2FG%2FWqmOXoT5QkeB8dzkfOrUZ3v%2BYt2OwX%2FF5u6%2F2B27AglQoS7qcCwc2LaFRNkllfeu2JkpXhhucJb%2FDj%2FLb3eDeo2AZkVRcWdOxKKqXvSKBaG8D3qUJv2iRCTpWs%2B10Dr6Lil1Xh75Ct3R0pWu9RZ4GdxJLSY936LqEyvHhEPYyLh%2FCQZL%2FEmOxPeVXdX9mwj6nsGKA1ghcaBDalHMKFqo6iok%2FjsDk8L8XjqjJsULTLDO%2BeoN7CXmebIW%2FFUSClhL5KxVO7oDsXGQYJh6TWu2teK%2FvguNIQu1D11ffi1Aa7VSVWS4Mk%2F3Kwhl47rQ33zTC6sYLDBjqkAfCkI2N0u4clffN6AQE7LcIoUek4lON0AuUqZFNAVCpDtwfXCM%2F4YF1fK4Mh3bZqYxxiPHNhgYLKu2%2BjI5pXo7alT2taiPv4pbHMF1FUdWO8NjAHHoKX0GGP5YryYXRHcCO96EAqds5IL2j17z04WvTbLe8aorCmIPUkzjKsg0gH0yzXe2dkeWTNneaRNSL2cLeMLsZUGqTaoIdsnDl2yqp4HTl%2F&X-Amz-Signature=eff9c183435b8522d25bf7e357c5e3102a4dc7690cbabd48e5b2cb14b7f69fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
