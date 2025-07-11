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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SXH3DU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLhtDaunGl01pnfz1hPNwN4c9hzoF9acy2YUtL8IyIPAiEA%2BJL6Le98sFEo0zVt6a66t1JS5Czjphf%2BQnri0C9TnU8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFbSRxCw3taDfYovyrcA3sUxyc5%2F8MmOefY7J1TMZJElCZKNpD9kHSyYXwGMw1j1xyMklw%2B%2F4F1vD%2B%2FHAtGO7vyKHzryv0Ns3Fk4nUxX84evNuuGdNgq0udMGLUBRya%2B69sdZyKjk7bMrgOaJQ6wmcYXGyeQUTJNNK6AdjlnAbIg7daoccxjyQGrwqQ1xuXIQhQo15AnRTUAxsQcoy3rVkPttF%2BvDXGPm0TwKKUUPlIpI1H3etqbheRzpx%2FiyGXBOfcSXVfr2srQg2J7vo5VGcp0Df80o3jmqyXDUYdNDKwnKX6Skvx5HV345HXOJmMfHvtGpmU1%2BtvauBX12A%2BB2rgRe0n9XzTPVp3hEgVW2qsLddRVyiWtgzVBlOObq2bNYXSWXnBF%2B0tvUkTAl3uACnBcNzNME8qbXMNCNUv2opGpw9J4LDrD73417T4T5zZjDLMgE3lSYiWlrI4pIV%2FuhDffYbR9At7gRZlvQ%2FAq7KBZbtuJ2e2I0c%2FRxs62uDvgD1AxbIQIRPWoDgAT5GMl6CeTmow%2B%2BI5RRRzgF3z4uWAt1gC5VPDkyhew%2Fui1qCagXrOrDGuPr6SbJYd7v1J5QjoMe34dytQk%2BpJ4DIJftSePA7Hf6e8sNdJHZD3DVXqfqaQqNOjtvGTkqcMMLbTwsMGOqUBIRJCkLJFyp36AB60nMMLxJM0o50FIFdYdeAruYqzKJa1Fe7c%2F3%2F0L0kX2j2sqwreiudHDZwZp4DTPK1%2BLEXU9lIvJ5BB%2FBQTQzIPu10N%2BguArHvw5rNT6P9XhzRXBBZKxX25MH1eeGrtOyxBDcwtcqnPYSh3VW4t4eCbnoDwNCCOlSS09YZekcOVhG20ND4%2BuZzq3dLPp2ZcKOTEKEPu5HWPkpvN&X-Amz-Signature=b61cbf0b06787378c06eaf79cfbcace2a70601f86396cc3941b4971c9de6b9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SXH3DU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLhtDaunGl01pnfz1hPNwN4c9hzoF9acy2YUtL8IyIPAiEA%2BJL6Le98sFEo0zVt6a66t1JS5Czjphf%2BQnri0C9TnU8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFbSRxCw3taDfYovyrcA3sUxyc5%2F8MmOefY7J1TMZJElCZKNpD9kHSyYXwGMw1j1xyMklw%2B%2F4F1vD%2B%2FHAtGO7vyKHzryv0Ns3Fk4nUxX84evNuuGdNgq0udMGLUBRya%2B69sdZyKjk7bMrgOaJQ6wmcYXGyeQUTJNNK6AdjlnAbIg7daoccxjyQGrwqQ1xuXIQhQo15AnRTUAxsQcoy3rVkPttF%2BvDXGPm0TwKKUUPlIpI1H3etqbheRzpx%2FiyGXBOfcSXVfr2srQg2J7vo5VGcp0Df80o3jmqyXDUYdNDKwnKX6Skvx5HV345HXOJmMfHvtGpmU1%2BtvauBX12A%2BB2rgRe0n9XzTPVp3hEgVW2qsLddRVyiWtgzVBlOObq2bNYXSWXnBF%2B0tvUkTAl3uACnBcNzNME8qbXMNCNUv2opGpw9J4LDrD73417T4T5zZjDLMgE3lSYiWlrI4pIV%2FuhDffYbR9At7gRZlvQ%2FAq7KBZbtuJ2e2I0c%2FRxs62uDvgD1AxbIQIRPWoDgAT5GMl6CeTmow%2B%2BI5RRRzgF3z4uWAt1gC5VPDkyhew%2Fui1qCagXrOrDGuPr6SbJYd7v1J5QjoMe34dytQk%2BpJ4DIJftSePA7Hf6e8sNdJHZD3DVXqfqaQqNOjtvGTkqcMMLbTwsMGOqUBIRJCkLJFyp36AB60nMMLxJM0o50FIFdYdeAruYqzKJa1Fe7c%2F3%2F0L0kX2j2sqwreiudHDZwZp4DTPK1%2BLEXU9lIvJ5BB%2FBQTQzIPu10N%2BguArHvw5rNT6P9XhzRXBBZKxX25MH1eeGrtOyxBDcwtcqnPYSh3VW4t4eCbnoDwNCCOlSS09YZekcOVhG20ND4%2BuZzq3dLPp2ZcKOTEKEPu5HWPkpvN&X-Amz-Signature=e7d410f1491a0b34868f903fa531ea166f9cce7e260703c092164cf6ea74ccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
