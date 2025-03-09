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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSKBOLN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3y%2BZ8i8qQeKfiE9w%2BzFz4QQrAgKBEnk4z6TllnkQMQIhAILUOA3jmMJgS%2FV%2BZVyRi4GmAbe%2BjkVgCG09ftdUePCfKv8DCH0QABoMNjM3NDIzMTgzODA1IgzEvSyysIzk0qfw%2Fk8q3AOm9N9T2hjmTDHTtu%2BYdJxWz8fDLrJHDCaCAz1K3%2B3RdVm3%2B04gu9zq7N7uR8s7RyO%2Bd8%2BRGUBFvuEGWcEbluXt5vOgokShtAb45wHJ5NqrGqjNkTWJmK6VhfbXsB7szw8rwKqM%2BkmLY2AtJOGuZeYec9VfbyANVwuOfb5WlrDn4EfiDtuZOaj2eVE9ejE9Os6gmeVvsQXgijSpaUjnT39D2Dw18gCWvvTHqYobapT24TAf8wTgV6txCziNJKSWIMGLO5%2FLlKSQFFkI%2FSJJvbJNMf7ZY%2B%2FjkNZ9GHntF7MgwQkyeMKqv05tpFGSUMjyiLJ4452WLHKN2R98bjxmmxVbrdAxy6U%2BTTKw9QeaWR01qQRfIbSR4lCcpcQeaGkcw07N8ex5bBSyyRM7r%2Bv6OfUiyPIliH0DRGU83Btn5CeMX4Nw1g2ngtmNrKcB9OKtLuVA%2FbhzBPQkvQE8jUrBRp%2FUnOWAL%2Ftlk7WgoV3YCTYJMAB88Zxc%2BZXrY%2FPI1vWCuFG3Lld6cTHj%2F%2BbEx%2FAjSSrUDMBdNR6UCxABtl6R%2FW%2B00bw3OmLPd6ov%2FU4b2hH2smTEQI%2BQ1ify45OAACmgYa8aY%2B9O252wDDSsuxP7zQXtOLVmHsPMl3%2B7qU07ATDK4Le%2BBjqkAUeHs2eNwoDGj6rvVH0%2FaxUe%2BLjz8RO0Fh%2FEzzUDMvDokb9DwADH9AdMuefToZSa4pDzWnV9v6hwcvAesZs99YH0bzUsLPeu2JMiyyYgPMsI1katW8yQ5WX2goDYgzu9fM%2FPJ1hRoADV8p5ZFnuJZ%2Fv0%2FiclXNzlKwQqY1CH9hW0LpLhkVeCe4DSMdup9sds9mc6SsGiQZpAtzIBU08YQ4u%2FzwF8&X-Amz-Signature=b97e027ca70baa60a392da412fcb959754a7e1694f647be16eaf26148bde7240&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSKBOLN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3y%2BZ8i8qQeKfiE9w%2BzFz4QQrAgKBEnk4z6TllnkQMQIhAILUOA3jmMJgS%2FV%2BZVyRi4GmAbe%2BjkVgCG09ftdUePCfKv8DCH0QABoMNjM3NDIzMTgzODA1IgzEvSyysIzk0qfw%2Fk8q3AOm9N9T2hjmTDHTtu%2BYdJxWz8fDLrJHDCaCAz1K3%2B3RdVm3%2B04gu9zq7N7uR8s7RyO%2Bd8%2BRGUBFvuEGWcEbluXt5vOgokShtAb45wHJ5NqrGqjNkTWJmK6VhfbXsB7szw8rwKqM%2BkmLY2AtJOGuZeYec9VfbyANVwuOfb5WlrDn4EfiDtuZOaj2eVE9ejE9Os6gmeVvsQXgijSpaUjnT39D2Dw18gCWvvTHqYobapT24TAf8wTgV6txCziNJKSWIMGLO5%2FLlKSQFFkI%2FSJJvbJNMf7ZY%2B%2FjkNZ9GHntF7MgwQkyeMKqv05tpFGSUMjyiLJ4452WLHKN2R98bjxmmxVbrdAxy6U%2BTTKw9QeaWR01qQRfIbSR4lCcpcQeaGkcw07N8ex5bBSyyRM7r%2Bv6OfUiyPIliH0DRGU83Btn5CeMX4Nw1g2ngtmNrKcB9OKtLuVA%2FbhzBPQkvQE8jUrBRp%2FUnOWAL%2Ftlk7WgoV3YCTYJMAB88Zxc%2BZXrY%2FPI1vWCuFG3Lld6cTHj%2F%2BbEx%2FAjSSrUDMBdNR6UCxABtl6R%2FW%2B00bw3OmLPd6ov%2FU4b2hH2smTEQI%2BQ1ify45OAACmgYa8aY%2B9O252wDDSsuxP7zQXtOLVmHsPMl3%2B7qU07ATDK4Le%2BBjqkAUeHs2eNwoDGj6rvVH0%2FaxUe%2BLjz8RO0Fh%2FEzzUDMvDokb9DwADH9AdMuefToZSa4pDzWnV9v6hwcvAesZs99YH0bzUsLPeu2JMiyyYgPMsI1katW8yQ5WX2goDYgzu9fM%2FPJ1hRoADV8p5ZFnuJZ%2Fv0%2FiclXNzlKwQqY1CH9hW0LpLhkVeCe4DSMdup9sds9mc6SsGiQZpAtzIBU08YQ4u%2FzwF8&X-Amz-Signature=e257a9dc6a088b7d14fffcd9500791e56c0cf8e672fff457e136b83465cb5207&X-Amz-SignedHeaders=host&x-id=GetObject)

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
