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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLS6YVGZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVuFhCi%2Bcl%2B%2FyNubrwxyGS1R%2FqkSxYlM%2Bfq462RMYQAIhAPpefn3YYx1LX2Om54B2QkiKCBUs4Xjca3Zt8IM6khMIKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmhGu1OVGRvOP4O4q3ANYExqLUZ%2FiKGQ9RsXEM22ka1dzrDIYRXJiF9IHFHUdX00yrwwLnl35lKpWDwDJJAYO6DnhcwKheMlSk8Xb6RXRDXTSeX4VUu2CZmveqU%2BeELAh7r9%2BV0G1f1PGk1PQ4UJHc0BeLvUbuTaVFDsgnYgzCVvoZ509knrFXoAa6YhrWoxKt%2BI0xny%2BvG%2Fj65pza1Ybz6549bfNdlPUVrLH565udxKDhg1iBEiY4ZL7sFryLx0h6AwunINSl%2BLqmkyPGIN3Lqka7Vj%2BWvaUmPnDcS6Ks%2FyGroCnSLPcZDTPc1pYQiHv2WlpDJnxc6h%2B6x4nHvOGbmTQxXaj3kGzTFhIoLPicaE6KxYsoeFV0E3RUK7WhFopNhBeJ%2FjXxGdhtb7ew8abmIhBYnHfixldCmGk4qt5iE66MRoqLpMlPz9O95G5rNCCUUSoUj57YnGHZE7lKvLvPlEva2FReeYV8%2BZlSF6dCgS%2Ffxd70VIF9aISLqqyA8SnxWVPz2UGbA0GD%2Bp92y3Z0WfIF6Flbk%2BcTdpbag3NiPACyAHiS5xf0K1Du3iUKMAXYSUHjlT6tWZoNfqC5V7gdAuQgcOxUyrNscaT%2B%2FF0wI%2F6y1%2BmzF8iWk6R1%2Br0NEGmPsckJWJjfTNwGDDP3uTBBjqkAdcUcWbb86OW9adcwAsA5WJnApG1oVTj8YWo68LTdsDY%2FdzHieCig8YZrTRz8uZf2GKaJfB8N9U%2B3PQOPjAGhMN3Ife5F3Kfq5eZ70V2D86ZB0%2B%2F69O4aEtHdz8orzEi8tkAkuU2MjLCd63x7rfl%2F5O5eJ%2BywgQL0ODmDyz5sW9%2B6iBr0X5tFhpuA6gTyuftI2puUn1a1N2CFaVAm0QKEtHNUzFW&X-Amz-Signature=bc9f6712a6b6c519ef743977a8cda72bb8581cb473c581ca5995dfabf760b54f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLS6YVGZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVuFhCi%2Bcl%2B%2FyNubrwxyGS1R%2FqkSxYlM%2Bfq462RMYQAIhAPpefn3YYx1LX2Om54B2QkiKCBUs4Xjca3Zt8IM6khMIKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWmhGu1OVGRvOP4O4q3ANYExqLUZ%2FiKGQ9RsXEM22ka1dzrDIYRXJiF9IHFHUdX00yrwwLnl35lKpWDwDJJAYO6DnhcwKheMlSk8Xb6RXRDXTSeX4VUu2CZmveqU%2BeELAh7r9%2BV0G1f1PGk1PQ4UJHc0BeLvUbuTaVFDsgnYgzCVvoZ509knrFXoAa6YhrWoxKt%2BI0xny%2BvG%2Fj65pza1Ybz6549bfNdlPUVrLH565udxKDhg1iBEiY4ZL7sFryLx0h6AwunINSl%2BLqmkyPGIN3Lqka7Vj%2BWvaUmPnDcS6Ks%2FyGroCnSLPcZDTPc1pYQiHv2WlpDJnxc6h%2B6x4nHvOGbmTQxXaj3kGzTFhIoLPicaE6KxYsoeFV0E3RUK7WhFopNhBeJ%2FjXxGdhtb7ew8abmIhBYnHfixldCmGk4qt5iE66MRoqLpMlPz9O95G5rNCCUUSoUj57YnGHZE7lKvLvPlEva2FReeYV8%2BZlSF6dCgS%2Ffxd70VIF9aISLqqyA8SnxWVPz2UGbA0GD%2Bp92y3Z0WfIF6Flbk%2BcTdpbag3NiPACyAHiS5xf0K1Du3iUKMAXYSUHjlT6tWZoNfqC5V7gdAuQgcOxUyrNscaT%2B%2FF0wI%2F6y1%2BmzF8iWk6R1%2Br0NEGmPsckJWJjfTNwGDDP3uTBBjqkAdcUcWbb86OW9adcwAsA5WJnApG1oVTj8YWo68LTdsDY%2FdzHieCig8YZrTRz8uZf2GKaJfB8N9U%2B3PQOPjAGhMN3Ife5F3Kfq5eZ70V2D86ZB0%2B%2F69O4aEtHdz8orzEi8tkAkuU2MjLCd63x7rfl%2F5O5eJ%2BywgQL0ODmDyz5sW9%2B6iBr0X5tFhpuA6gTyuftI2puUn1a1N2CFaVAm0QKEtHNUzFW&X-Amz-Signature=51a10261f95a5d103ea3332905936379066cb2f81205fea5158d5d8742ac0c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
