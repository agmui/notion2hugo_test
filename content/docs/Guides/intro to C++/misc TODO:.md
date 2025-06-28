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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGJJ7TN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpS5AxkGfnrP5Tpu7CgV7urOEsRZJmiyfnlcgnswJ%2FsAiBN13hsHuoNgbFBrVFLhl2qajJ3wzPAKO5Ym1LhPB1bsSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvSw2Jw7IV6hkc8lKtwDhiDswRpC9ty3gaqN2wjS%2FQjJzWq%2F32Sc5cjYKF7F2EicWaOrxViyDdz8CGegGBgUgmg3x0%2BO7tkTDOJUDwpZU3WJhG6dFWbdaPSreailF%2FtvVxIWh8yuCo4U8NRJxq82sTsMZWW4GhVmP4YZE0NUV6VytYWaCCCmOA27B1qWu%2FR2dG0rZXc04XJfVhmJp6TZ5VX23C1GjQ9b%2B8GZE4vFEaDOu4t7DVoS97SduJza81dnQVedW74baH8kEj2aJ%2Fn4kVDR1QRR84hWuCbqpkOKjvb%2F4fFcJhyIXEQwgQyQE1Q%2BWSrY%2F9YxEhYugELkjwySyXxKLjqE0Kbjtk66B05G2FIlBHN5MOf1N%2FpwPkdCEoztoPF1JNC1HiIr4%2Br%2F5uvujxZiDgXt4ujsgOxxBNOyMf3K8S%2BND6036O%2B1Un3dq1pr3ahzwh4t9a%2BA7lQZE98oQ3PcMIPAVcoEP%2B83Qvl1JW3M3pv6p7uiaHuvBqnIyMRBm2AcilJAh%2Fx8RJlpmQ1u6VPyt9edsX6m%2BEBZpQnI1l2d1fYAgOO2bieoRXAb8jR%2BgjMiYzgk8xYaRGPsrH8B0hvIIPPPze0Erzzy3IztRN5ZdHjJ%2BVMmU7tyUJKZxI%2Fsvy0AZh1jMqtdCJAw0YqAwwY6pgHeQgYK54QrVDGRyeU4Qr%2B9wEMTyG53cfVpuTJILLAXDqa55zKCMpORDir6TgMlz1DBa8uS2ajNOAQp3RM4yD7wq3MO6ZKnzEcYoj%2BE80VHFKw6ctlKJXQxoNGLUEghzxmTC9HdQIROmWc4BpS9C1zpI%2B2l%2B05yV20raUWTg%2FHyf60v%2Bu8Q6Kr1b%2BBuaOCKB3%2BH9E4xlYKS45c5UZgnSLf6k2ky%2FKi0&X-Amz-Signature=53287e21ee0e2c4825bf02c65c1aa914416937aacc39c5515a9b0c89c64eba68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGJJ7TN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpS5AxkGfnrP5Tpu7CgV7urOEsRZJmiyfnlcgnswJ%2FsAiBN13hsHuoNgbFBrVFLhl2qajJ3wzPAKO5Ym1LhPB1bsSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvSw2Jw7IV6hkc8lKtwDhiDswRpC9ty3gaqN2wjS%2FQjJzWq%2F32Sc5cjYKF7F2EicWaOrxViyDdz8CGegGBgUgmg3x0%2BO7tkTDOJUDwpZU3WJhG6dFWbdaPSreailF%2FtvVxIWh8yuCo4U8NRJxq82sTsMZWW4GhVmP4YZE0NUV6VytYWaCCCmOA27B1qWu%2FR2dG0rZXc04XJfVhmJp6TZ5VX23C1GjQ9b%2B8GZE4vFEaDOu4t7DVoS97SduJza81dnQVedW74baH8kEj2aJ%2Fn4kVDR1QRR84hWuCbqpkOKjvb%2F4fFcJhyIXEQwgQyQE1Q%2BWSrY%2F9YxEhYugELkjwySyXxKLjqE0Kbjtk66B05G2FIlBHN5MOf1N%2FpwPkdCEoztoPF1JNC1HiIr4%2Br%2F5uvujxZiDgXt4ujsgOxxBNOyMf3K8S%2BND6036O%2B1Un3dq1pr3ahzwh4t9a%2BA7lQZE98oQ3PcMIPAVcoEP%2B83Qvl1JW3M3pv6p7uiaHuvBqnIyMRBm2AcilJAh%2Fx8RJlpmQ1u6VPyt9edsX6m%2BEBZpQnI1l2d1fYAgOO2bieoRXAb8jR%2BgjMiYzgk8xYaRGPsrH8B0hvIIPPPze0Erzzy3IztRN5ZdHjJ%2BVMmU7tyUJKZxI%2Fsvy0AZh1jMqtdCJAw0YqAwwY6pgHeQgYK54QrVDGRyeU4Qr%2B9wEMTyG53cfVpuTJILLAXDqa55zKCMpORDir6TgMlz1DBa8uS2ajNOAQp3RM4yD7wq3MO6ZKnzEcYoj%2BE80VHFKw6ctlKJXQxoNGLUEghzxmTC9HdQIROmWc4BpS9C1zpI%2B2l%2B05yV20raUWTg%2FHyf60v%2Bu8Q6Kr1b%2BBuaOCKB3%2BH9E4xlYKS45c5UZgnSLf6k2ky%2FKi0&X-Amz-Signature=44c4f47b9b2e30360b34f1ef7077c154d09fe4c6748507199a68fce29fdb61fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
