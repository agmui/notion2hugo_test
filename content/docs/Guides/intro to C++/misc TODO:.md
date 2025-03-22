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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCBMVI4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMkUuubCCNvHnhCis%2BjRHCwMaoe5pByFUW0SoHEaAFcAIgD6wSRNkb6gqnb26u8vFKIW2c9GsCW0j9n%2FiHCnhb6ocqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJVGTDT1u6vjcPG3yrcA0oyS5jgSmFzoO%2BU9ZNWSM%2F%2FrVBhoiWh0w89TPijhTIigTQUyT2pSe0TcNCSnY0qGEnEI3oynRXdhaPSSJn4ceYHoODArb7fQA7ymHginlC1kHVPI%2BkoVQapsyGoLDKczIfqQOEvKJjTfOyhby39HXtqXX%2Fe8ARuXQxQ%2Fm2KU9rYkeUIm11AnjPuJEOFwZlBJlvd9XUG6x5zuV%2BEQVatvC8tgNHIXip%2FnX84YQ4I9JWc%2F8hHRdF%2BBO9wXR%2By7uJQF0uye0s258lt4uJfCnW45tIPmfzqcX7Tnyfqqb6qNCn1UCVQOJNkdEgLVZRmLLx3egVaRzabWFVcs1%2Bag5vbjYBdo2DwNGH7aSYu9lnQffftC%2BA6w%2B6jpGvT%2Be8VOWjnKZEwIXW3V7HpkjWulWNteS9wOtKddfoBSEkuMFuWA3TPgs54XyIMmuvTTpg15yItiDdshHSLA5WRoApx1%2Fb5nha9GaiemKisG6iW49N007K1oUIS7W9JhO%2B7Bn8fojEn82B3AAg%2FjhNuPbMi8PCI4E6LI1HSYa7wtaHQ%2FammjuNElB225uPpLS62y0LtnAxfX46YvBjRVe%2Bdmp%2FYA9UfR2dbSmKBBBsiyq5Qkke37AxEamRYQbJRe%2BxXxnVWMJK2%2FL4GOqUBJIxywEmXZISk%2Ba7yY7cXzoDJ0%2ByLBbdE90ia0oRIuqlnpsOExDqWLBIrPHMWsM4oiZ3AePQmSDLxfsdMTmwnkGPMm8BQmuJs1sag9XJFq2TkIU0Si3rqrNYatJWAIl%2Bsx%2F67FEaolt0V1MPGH%2B5e0XIoswvVHAJ1pVr%2FgAi0WSXr7ATQWklAM9JxEcHHh2VAtFWhhHMgWCFQ3kuha2RWForp4LC5&X-Amz-Signature=158cb56439f5c77744e361a6001ae2827562d838ffabc2e286a825ed855f9cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCBMVI4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMkUuubCCNvHnhCis%2BjRHCwMaoe5pByFUW0SoHEaAFcAIgD6wSRNkb6gqnb26u8vFKIW2c9GsCW0j9n%2FiHCnhb6ocqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJVGTDT1u6vjcPG3yrcA0oyS5jgSmFzoO%2BU9ZNWSM%2F%2FrVBhoiWh0w89TPijhTIigTQUyT2pSe0TcNCSnY0qGEnEI3oynRXdhaPSSJn4ceYHoODArb7fQA7ymHginlC1kHVPI%2BkoVQapsyGoLDKczIfqQOEvKJjTfOyhby39HXtqXX%2Fe8ARuXQxQ%2Fm2KU9rYkeUIm11AnjPuJEOFwZlBJlvd9XUG6x5zuV%2BEQVatvC8tgNHIXip%2FnX84YQ4I9JWc%2F8hHRdF%2BBO9wXR%2By7uJQF0uye0s258lt4uJfCnW45tIPmfzqcX7Tnyfqqb6qNCn1UCVQOJNkdEgLVZRmLLx3egVaRzabWFVcs1%2Bag5vbjYBdo2DwNGH7aSYu9lnQffftC%2BA6w%2B6jpGvT%2Be8VOWjnKZEwIXW3V7HpkjWulWNteS9wOtKddfoBSEkuMFuWA3TPgs54XyIMmuvTTpg15yItiDdshHSLA5WRoApx1%2Fb5nha9GaiemKisG6iW49N007K1oUIS7W9JhO%2B7Bn8fojEn82B3AAg%2FjhNuPbMi8PCI4E6LI1HSYa7wtaHQ%2FammjuNElB225uPpLS62y0LtnAxfX46YvBjRVe%2Bdmp%2FYA9UfR2dbSmKBBBsiyq5Qkke37AxEamRYQbJRe%2BxXxnVWMJK2%2FL4GOqUBJIxywEmXZISk%2Ba7yY7cXzoDJ0%2ByLBbdE90ia0oRIuqlnpsOExDqWLBIrPHMWsM4oiZ3AePQmSDLxfsdMTmwnkGPMm8BQmuJs1sag9XJFq2TkIU0Si3rqrNYatJWAIl%2Bsx%2F67FEaolt0V1MPGH%2B5e0XIoswvVHAJ1pVr%2FgAi0WSXr7ATQWklAM9JxEcHHh2VAtFWhhHMgWCFQ3kuha2RWForp4LC5&X-Amz-Signature=52acfd98acc725390824541bcd48d18c014c8e0a7b3eff6a4b91383f1cd1eb47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
