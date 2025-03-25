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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFAOF3I%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrmsEP2ZWbCdlFYrQ6Ip%2BG0KoLUD690WTwc1j2CbbfQIhAONxRBBGyYeEyhUDynFbqtv0bfQkPpyw%2Fx6C0VHMJIoyKv8DCBUQABoMNjM3NDIzMTgzODA1IgymI7Dz7jf6pq9pXRoq3AMYWUg0rTaDG%2BsNRIx4P%2BRS0De8MrVH0QdyZCddNLD%2BedMN9MgOtN7hEk2w9qtzOidW7mnf9bdl45CwSJPQskIigDbnfNjD%2BkQrsAG6b0ww21HVK2yAwN7e4VHfgHWnL%2BQPKU5CKCqX3GXSti5dR8mVjICKv%2BD2b4RyifW6sPbDMuA7mJuM1YALMxZSl%2FOH1xoDPCWsr3LoSudGH3IxRuDprOHjtPWDwe0kt3Xec%2BZQAcXd9LyxHgyiSfO%2Bpd8ZUS%2FYyAFKKx4wyKqlkG5FAS0v5PGf6jKmQtSlFOYe9qIvZvFgGNSmG2RBfzDJQskfr4CIJ6VvmrFufUdz2Wum%2FeRfG8DsCdoC6HYq807Gxl5SST%2F%2BNaMkK4Mvp8%2Fy1IujOJxdP15nYS4fHb%2BEyDCZ663ojJ0OOThpW7mzrLQ9lsinwwjcPdyCJJxDze2uqvHbN2vrv9lkJgqxyFQOxcIWXCEp2gQmuUiyZssxYhUG2GXEi%2F5SHXpQgsjG0ymO%2Fs57cNH5X9fJ76NLBHAdA4%2FMAGM%2F5wzuyhxsEDCtjK%2FvIYopAwU4nBsqvYzVtr30yIH3fn2feHThjcPWcs4ab51E6CdNgQeNR6elRXZ6x5YSMVeb0DQmbgsb3IYIpn%2BXijCXqIq%2FBjqkAWPltvOfaaDBi6NQ2wveAzD0j9Z4c1eE0qAwh7RafJ9QcpLqhGoZc5t1fT8EqdMy53OxsUO2wZ8IQuHgZ4tHPDo0r9jqOrtr0So%2BUvZ6Qa%2BdGX9ZSyEM1h5vk7PIqYLHB4GamyayT5Dn41VhuGx8sQ%2FkLq2c1GPIfjE5NvXG7YenG6ABedmdOM1EkuEBsk4L9uGOJoS47hOjEKCkiC%2B04S9oxeQ%2B&X-Amz-Signature=87b38d8e3418e16771dcd50829ea13b8822adf37026ae495dda5fcf706e02743&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFAOF3I%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrmsEP2ZWbCdlFYrQ6Ip%2BG0KoLUD690WTwc1j2CbbfQIhAONxRBBGyYeEyhUDynFbqtv0bfQkPpyw%2Fx6C0VHMJIoyKv8DCBUQABoMNjM3NDIzMTgzODA1IgymI7Dz7jf6pq9pXRoq3AMYWUg0rTaDG%2BsNRIx4P%2BRS0De8MrVH0QdyZCddNLD%2BedMN9MgOtN7hEk2w9qtzOidW7mnf9bdl45CwSJPQskIigDbnfNjD%2BkQrsAG6b0ww21HVK2yAwN7e4VHfgHWnL%2BQPKU5CKCqX3GXSti5dR8mVjICKv%2BD2b4RyifW6sPbDMuA7mJuM1YALMxZSl%2FOH1xoDPCWsr3LoSudGH3IxRuDprOHjtPWDwe0kt3Xec%2BZQAcXd9LyxHgyiSfO%2Bpd8ZUS%2FYyAFKKx4wyKqlkG5FAS0v5PGf6jKmQtSlFOYe9qIvZvFgGNSmG2RBfzDJQskfr4CIJ6VvmrFufUdz2Wum%2FeRfG8DsCdoC6HYq807Gxl5SST%2F%2BNaMkK4Mvp8%2Fy1IujOJxdP15nYS4fHb%2BEyDCZ663ojJ0OOThpW7mzrLQ9lsinwwjcPdyCJJxDze2uqvHbN2vrv9lkJgqxyFQOxcIWXCEp2gQmuUiyZssxYhUG2GXEi%2F5SHXpQgsjG0ymO%2Fs57cNH5X9fJ76NLBHAdA4%2FMAGM%2F5wzuyhxsEDCtjK%2FvIYopAwU4nBsqvYzVtr30yIH3fn2feHThjcPWcs4ab51E6CdNgQeNR6elRXZ6x5YSMVeb0DQmbgsb3IYIpn%2BXijCXqIq%2FBjqkAWPltvOfaaDBi6NQ2wveAzD0j9Z4c1eE0qAwh7RafJ9QcpLqhGoZc5t1fT8EqdMy53OxsUO2wZ8IQuHgZ4tHPDo0r9jqOrtr0So%2BUvZ6Qa%2BdGX9ZSyEM1h5vk7PIqYLHB4GamyayT5Dn41VhuGx8sQ%2FkLq2c1GPIfjE5NvXG7YenG6ABedmdOM1EkuEBsk4L9uGOJoS47hOjEKCkiC%2B04S9oxeQ%2B&X-Amz-Signature=532350819bfd1175330f1ddd40ed8afc52ebf289dbc1f0826ccb8734a7ce3c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
