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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6EHN7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBCOSwp9l2xLAq9FGkWtHWNfmV9DzsP%2FVQECn9UspkchAiApa8iowffQ4%2F2e1tA6eY4kT1N5Q0ibAhoL%2FpZcmCQQYyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMfKPaw7BHUmlaECnYKtwDNsEbWsBTwdf%2F8Cv3Knrtv5cf%2FxA5iLkr%2Bwd4jU0wwdKzW4oKHgxHPpprRTEYHNV1uQ%2B8txagFv5uDUji3zTy5ll7ThtAY6XdUb%2FOitHzFpmDNrNHcJy20iWtYnBMIRnLTe7J9quAgJqL5Nk241vG5WdmEYaf8idj%2BG%2F9Aek%2F0W9fgvtPWE0%2Bc02qygXTcg9vnhSkZSb2oP%2FO5QC9qvTUEW%2B0U0egBMywWGSwprmBX3X4wJw2eMNGy7p3XGApGmG5Fyqjs6el8yrKvDRAAdEUT%2F5ZEixg9N5c0TDMdspZDpX51OhU%2BXE4hvc4dgjY%2BnazwvNDmCxCOubkLhjPryu3XwHAD1TLzQvRuxuu1J4dD9HGFJM%2BvRuvBlvmj%2Fy%2BZRmlN9hojL7Km6ZyV6Vecv1NqYlOmMF8uR8Wa%2BoP34LHilBzILqgd6JbmC1vK1IUoKJ2i4hX9q174Rps9BuJH%2Fmh5A6JZhKV%2BjgxK%2B0XDU7D547BeTutKVFkIpYZil3RIq7S78mAsNiTdE7YIeEh7Kxnn7yP3HV3thbtg98NRwOQXdNzz%2FVVWiltVFsWxOinH%2FvORZC5q57kpRCrgD0YKR2wc25jLqcQQt3lBwED7fgIRTIEj%2Fq8O%2F2nwxgax38wseCvvgY6pgHSjojfPZnjyeIaSkFjXFnTEQifFEkx4%2BexoT2DB3QQoY96InyzaxFJdiOARh%2FI9%2Bmy09cBPSHrjRGcSjG6SP%2BlhDegUaiXFAS09mmPdP7wRe8DNga7PzmtFYG5pm4CO8DlK5pRhpvGv9JWLEEAnGgAnrqc2xtm5UGwr%2F5mzlb8arvQ6MEW9Z8stQTCXKH3iHSuyL3ZEV6Uk0aAtTK3zmt33Gqzyu1i&X-Amz-Signature=f9d5f7b7c8e78aceb06d95d51ed36713f54f4ecc72a0442d8df79a0bb6bdba22&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6EHN7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBCOSwp9l2xLAq9FGkWtHWNfmV9DzsP%2FVQECn9UspkchAiApa8iowffQ4%2F2e1tA6eY4kT1N5Q0ibAhoL%2FpZcmCQQYyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMfKPaw7BHUmlaECnYKtwDNsEbWsBTwdf%2F8Cv3Knrtv5cf%2FxA5iLkr%2Bwd4jU0wwdKzW4oKHgxHPpprRTEYHNV1uQ%2B8txagFv5uDUji3zTy5ll7ThtAY6XdUb%2FOitHzFpmDNrNHcJy20iWtYnBMIRnLTe7J9quAgJqL5Nk241vG5WdmEYaf8idj%2BG%2F9Aek%2F0W9fgvtPWE0%2Bc02qygXTcg9vnhSkZSb2oP%2FO5QC9qvTUEW%2B0U0egBMywWGSwprmBX3X4wJw2eMNGy7p3XGApGmG5Fyqjs6el8yrKvDRAAdEUT%2F5ZEixg9N5c0TDMdspZDpX51OhU%2BXE4hvc4dgjY%2BnazwvNDmCxCOubkLhjPryu3XwHAD1TLzQvRuxuu1J4dD9HGFJM%2BvRuvBlvmj%2Fy%2BZRmlN9hojL7Km6ZyV6Vecv1NqYlOmMF8uR8Wa%2BoP34LHilBzILqgd6JbmC1vK1IUoKJ2i4hX9q174Rps9BuJH%2Fmh5A6JZhKV%2BjgxK%2B0XDU7D547BeTutKVFkIpYZil3RIq7S78mAsNiTdE7YIeEh7Kxnn7yP3HV3thbtg98NRwOQXdNzz%2FVVWiltVFsWxOinH%2FvORZC5q57kpRCrgD0YKR2wc25jLqcQQt3lBwED7fgIRTIEj%2Fq8O%2F2nwxgax38wseCvvgY6pgHSjojfPZnjyeIaSkFjXFnTEQifFEkx4%2BexoT2DB3QQoY96InyzaxFJdiOARh%2FI9%2Bmy09cBPSHrjRGcSjG6SP%2BlhDegUaiXFAS09mmPdP7wRe8DNga7PzmtFYG5pm4CO8DlK5pRhpvGv9JWLEEAnGgAnrqc2xtm5UGwr%2F5mzlb8arvQ6MEW9Z8stQTCXKH3iHSuyL3ZEV6Uk0aAtTK3zmt33Gqzyu1i&X-Amz-Signature=58916dfda2c697130df826806e6695a637c1a16c22fd07b2dfdff784bcc95ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
