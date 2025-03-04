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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JUL5SY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL5BwxmNhh2JvotT3RzWPaoRSDg0Fma2D%2BMrCMsfJrPAiEA7skAnpW8PhwbFQ%2B7v%2BvxcfCtVlev82YCdtRj9CCv%2FPkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUPhfBfBbm%2BPm1LlCrcA6kMlLOoUPtQQ2fbzyeUk%2BgxR%2F8sJ9F%2BGqRM%2BhdGTyL4OQqb4S6zRoLkflC%2BbIbN%2BeXlwLwK9UvWF20rj2MmAy9o%2BsxJfNykOgurvt6HOJMRmcriAQLFqrl8BlE50GXPnwFWwZ9XemADfSKvh8teYVJy8iCrNNec3ScSEUY0yZdI7hrs5zA9ABukJmtMZxpxzXPsyrBLlzmPHbmWn8dAYRW7JV2oC61Q%2B5wSuUXk9t9nCcBX%2Fnlbb6%2Fs0DKwSwQAAfiEbDCOsZuX90iXhZ8aK%2F4IVET6mKmbNC12djW5DfbqUAgqoNVeCz%2B5Uua2ZBjIxJymiaTJ9vzFQHbONB26l0dRv4LzMSKUKenD93JNGQNuhAqlCsqFY20zvhd9NS3TyjV4NzdboEckSqKmZlkH7D3ErD68kl9Yz4Q5sBIYmajrHYbwO54M%2BdWxrHaYZe3B3tsiVwCLa2kd6W%2F54xBNp7kFT%2BYW80f7HYCqvovxeguzQGnpzAMB%2BdqTvH8zpmAERjNkgIXKTYeAeJDJ6kCMrbk4jbLlZ%2FkAUdJlA8nwrF%2Fd9yj1Fat5HcbO2ZCjCIYX2lqgeIXEc6PTcTLGM0KjlJY%2FJQWQAwlQ087SzGAfHC%2F5hsEJNCa%2FeUdbjQATMM6jm74GOqUBOv%2F1auVULNsrRaF5QE1ezHGOvFYDQ%2BIJg8xjGDYM7G5kZ1vY9GkSrYrtykQo8hkzZTyXhq2s2S3TE0%2Bd0b3XFecZWn55EppYeP5CQzapwVenB02k1pSMC2%2FUCJSmFtAGyucNBmHem32CgZ2LVA%2B0LamSLqgqhGUjhB6BkxneUoXsna3lZC2oWvmuegUOThy2guGYFBVKlv0C3yGEEdjfhfD4oWO6&X-Amz-Signature=8d9d4a763cd0a715cf84d9262bd9a69cfc6d3564e70b671f82a2d521ddeb7a96&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JUL5SY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL5BwxmNhh2JvotT3RzWPaoRSDg0Fma2D%2BMrCMsfJrPAiEA7skAnpW8PhwbFQ%2B7v%2BvxcfCtVlev82YCdtRj9CCv%2FPkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUPhfBfBbm%2BPm1LlCrcA6kMlLOoUPtQQ2fbzyeUk%2BgxR%2F8sJ9F%2BGqRM%2BhdGTyL4OQqb4S6zRoLkflC%2BbIbN%2BeXlwLwK9UvWF20rj2MmAy9o%2BsxJfNykOgurvt6HOJMRmcriAQLFqrl8BlE50GXPnwFWwZ9XemADfSKvh8teYVJy8iCrNNec3ScSEUY0yZdI7hrs5zA9ABukJmtMZxpxzXPsyrBLlzmPHbmWn8dAYRW7JV2oC61Q%2B5wSuUXk9t9nCcBX%2Fnlbb6%2Fs0DKwSwQAAfiEbDCOsZuX90iXhZ8aK%2F4IVET6mKmbNC12djW5DfbqUAgqoNVeCz%2B5Uua2ZBjIxJymiaTJ9vzFQHbONB26l0dRv4LzMSKUKenD93JNGQNuhAqlCsqFY20zvhd9NS3TyjV4NzdboEckSqKmZlkH7D3ErD68kl9Yz4Q5sBIYmajrHYbwO54M%2BdWxrHaYZe3B3tsiVwCLa2kd6W%2F54xBNp7kFT%2BYW80f7HYCqvovxeguzQGnpzAMB%2BdqTvH8zpmAERjNkgIXKTYeAeJDJ6kCMrbk4jbLlZ%2FkAUdJlA8nwrF%2Fd9yj1Fat5HcbO2ZCjCIYX2lqgeIXEc6PTcTLGM0KjlJY%2FJQWQAwlQ087SzGAfHC%2F5hsEJNCa%2FeUdbjQATMM6jm74GOqUBOv%2F1auVULNsrRaF5QE1ezHGOvFYDQ%2BIJg8xjGDYM7G5kZ1vY9GkSrYrtykQo8hkzZTyXhq2s2S3TE0%2Bd0b3XFecZWn55EppYeP5CQzapwVenB02k1pSMC2%2FUCJSmFtAGyucNBmHem32CgZ2LVA%2B0LamSLqgqhGUjhB6BkxneUoXsna3lZC2oWvmuegUOThy2guGYFBVKlv0C3yGEEdjfhfD4oWO6&X-Amz-Signature=6ef9d39f3416f68198eddba8af7ec34e3009ab2070243b74a2697b71eb73a211&X-Amz-SignedHeaders=host&x-id=GetObject)

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
