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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNDRV47%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdMF076n97bB4fLbCSTovrC%2BXx%2BVtQwLUqXP9kpqJaAIgNiAxMy2EN65eVnlibIxtOV1DoQtVoLw%2FuXm6QejbUm4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMO9AfRch55ZauNm9CrcA9vFI5sahPMZjfv%2BsMIlDuKviojq3DGUv7oc4no28UiXjolhW%2FagpCvhg6gxOqEGRJE3m3v1drHvIkithvkHJkvxw4AkRsFUpBc5VbYNCydjIYBHjSNK4guDm%2B7npR7ZUaVQkjSO6c88ASBz5Ppl978iKUcZJWSDLhhonFBKAQ%2BK4dQDJjMTVtn21ItM7edVDAYdF4nqhtgZYhcP6aNiKXNcHpR4hgXszArdNHw%2FJdkqIG28CGRKbOzpNnRarnbNRzeCbjYNeMSBrO%2B0gaNqWdvI5EfiTNRlnREsXc%2FprVegoQAQcxb5lPVA%2FDZ6OVoCiN9YJmfSos6gHVH%2FcYGNh9y82ocqUibl6IlzbnN76lsT9V6GFomczvfXVbmOhZhwKsQE4DLdDro4lS7xro73LjPT7NI6SBOQP0NofT1HV42Z7XFvBG5zZ%2FB7RZ4a5XPPVuBKMFPOMxvz%2FHj7GE7nFefqicZ8SeA7%2FCiZZkVQ2y7kK4ao3E44n89rdZe76S6M9zNCGPnlidg%2B5jgvaquzMRBRQSMJ6as8PHFUjKTXtozHiTpesnsn54k8uGbvS0isHIgoy%2FljzOFHTp30z3FrANzYdxEcXWK7Ywg7blrCoslXD9eLXtPJlj57Yv31MInZ8NIGOqUBPIhVfVEt4dyJzpaFde274E%2BjwP7qOZxYEW8DJj66S1vJi3jqQMOWFVV57xfQohy7O0B59Zb1tvUKlB0EIXCrwt7lv%2BOvhSngPxNHHxx8eMrV4PUF6drgfu13WgzVwJqcVHGSka%2FMoGuTs6gvknkUg1WO%2FMM458XRXd2h7evo8f1vxj2cJi9idpV5Mzm0piOIWNJiqjnQX4Sx9iYBfmJpFTzFtaNd&X-Amz-Signature=1fc1ad19a7bb121b01b77cb5b775b1ef3c7fe97d24251985597f729e951342bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNDRV47%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdMF076n97bB4fLbCSTovrC%2BXx%2BVtQwLUqXP9kpqJaAIgNiAxMy2EN65eVnlibIxtOV1DoQtVoLw%2FuXm6QejbUm4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMO9AfRch55ZauNm9CrcA9vFI5sahPMZjfv%2BsMIlDuKviojq3DGUv7oc4no28UiXjolhW%2FagpCvhg6gxOqEGRJE3m3v1drHvIkithvkHJkvxw4AkRsFUpBc5VbYNCydjIYBHjSNK4guDm%2B7npR7ZUaVQkjSO6c88ASBz5Ppl978iKUcZJWSDLhhonFBKAQ%2BK4dQDJjMTVtn21ItM7edVDAYdF4nqhtgZYhcP6aNiKXNcHpR4hgXszArdNHw%2FJdkqIG28CGRKbOzpNnRarnbNRzeCbjYNeMSBrO%2B0gaNqWdvI5EfiTNRlnREsXc%2FprVegoQAQcxb5lPVA%2FDZ6OVoCiN9YJmfSos6gHVH%2FcYGNh9y82ocqUibl6IlzbnN76lsT9V6GFomczvfXVbmOhZhwKsQE4DLdDro4lS7xro73LjPT7NI6SBOQP0NofT1HV42Z7XFvBG5zZ%2FB7RZ4a5XPPVuBKMFPOMxvz%2FHj7GE7nFefqicZ8SeA7%2FCiZZkVQ2y7kK4ao3E44n89rdZe76S6M9zNCGPnlidg%2B5jgvaquzMRBRQSMJ6as8PHFUjKTXtozHiTpesnsn54k8uGbvS0isHIgoy%2FljzOFHTp30z3FrANzYdxEcXWK7Ywg7blrCoslXD9eLXtPJlj57Yv31MInZ8NIGOqUBPIhVfVEt4dyJzpaFde274E%2BjwP7qOZxYEW8DJj66S1vJi3jqQMOWFVV57xfQohy7O0B59Zb1tvUKlB0EIXCrwt7lv%2BOvhSngPxNHHxx8eMrV4PUF6drgfu13WgzVwJqcVHGSka%2FMoGuTs6gvknkUg1WO%2FMM458XRXd2h7evo8f1vxj2cJi9idpV5Mzm0piOIWNJiqjnQX4Sx9iYBfmJpFTzFtaNd&X-Amz-Signature=22f0fe58255256e5745c2d3496891b14d7583a061a46367e604496ab8d12f974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
