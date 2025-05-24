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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHO363L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIAtKoxLcrvH%2FJzhyl5Rg6wqtIMYXbTTUkaktOUx%2F5XSxAiBuK7CuQwUFAK6e%2FJ5OmJdQeW9nfZcaFx0qzQeDrj6D0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMIVCvsMHtc9RpgDPdKtwDXoqD8ZcfkTdJp3fz9Zldt3GLj1pXDZ4p3aClDrJ0KKLcilmvivCAIm%2BuUU4B7fUUvFW76Xg6txEZ5lz3uBuMaxRZyW4%2BlqugPM%2BGQIp2tBguMA5%2F%2BmER8cymuY%2FDoYfhxWZnZOqtzmXp1xvFrr8YHS6HNMWjvA6nPMIUhLaPycfNlQyIWQkp4%2FT3Ho37u1%2FKE8WlcxjAV6yo83rNu6ociUSjiCtR9xORbzP2%2FjB4ESD4vrJhJS5z6iYNN7iqXbnfECSMxsXiW6INgOYRRf%2BL4K74CBlzmSUbIED9IBUC0Gn3%2FzOSpX3bvvNDfPd03L3h8aMrN3%2F1ABxbzPX8KNkHCBpbt9v%2F22w%2FzAzTYd6idlSWswEPB5us1JtUyGXXBexE%2B4PR1BYBQSFnQLaJg0tS7VNyCGR0RUnbYLMoQ%2Fc2aSvIqPWsaLZQMJCIXeW%2Fxa8Xvi%2Bk4aWrMf3IFJfmLRIyHzTjwh%2F43XjcMLN9dscSbicZg8jcKVQc17ZczwRgdtdduAucjCYWOl%2B1I%2FspAH2ragh5wLrv73kV0dMfN8l8BaArsssSglvDfcVRRv95GfmTQJi8BlSkd5iQ%2BVqLyZ%2BwVOP%2FonmSnE8ZDqYa1uGuq88Eio%2FdHL%2FtlDD%2FlR4w34DGwQY6pgEhYMn%2FYPtXeLvHnJm4xrjWN4NlViJk8OKT%2B9r8bc3QF%2FJudALhKszYbKSskaTEHRhNwbJQZDGOdxl%2FpB1YbI%2BPBGTLq4pG63ZGWURk7fFlL7I78cGW9V9PoZahYfMhb5iNeSaF5hth%2FDeeqMiBhiRgq0hqs4EiB%2FEeKaOjq1KS3fbMVHungCoeiYTlAttNFuwNqoD2%2Ftr7aeJR9Au%2BiL9se8L4QHKb&X-Amz-Signature=d300133da75acb412258e85d502b8ab2909eb3ac58d8a2cd12dcca531cb58898&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHO363L%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIAtKoxLcrvH%2FJzhyl5Rg6wqtIMYXbTTUkaktOUx%2F5XSxAiBuK7CuQwUFAK6e%2FJ5OmJdQeW9nfZcaFx0qzQeDrj6D0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMIVCvsMHtc9RpgDPdKtwDXoqD8ZcfkTdJp3fz9Zldt3GLj1pXDZ4p3aClDrJ0KKLcilmvivCAIm%2BuUU4B7fUUvFW76Xg6txEZ5lz3uBuMaxRZyW4%2BlqugPM%2BGQIp2tBguMA5%2F%2BmER8cymuY%2FDoYfhxWZnZOqtzmXp1xvFrr8YHS6HNMWjvA6nPMIUhLaPycfNlQyIWQkp4%2FT3Ho37u1%2FKE8WlcxjAV6yo83rNu6ociUSjiCtR9xORbzP2%2FjB4ESD4vrJhJS5z6iYNN7iqXbnfECSMxsXiW6INgOYRRf%2BL4K74CBlzmSUbIED9IBUC0Gn3%2FzOSpX3bvvNDfPd03L3h8aMrN3%2F1ABxbzPX8KNkHCBpbt9v%2F22w%2FzAzTYd6idlSWswEPB5us1JtUyGXXBexE%2B4PR1BYBQSFnQLaJg0tS7VNyCGR0RUnbYLMoQ%2Fc2aSvIqPWsaLZQMJCIXeW%2Fxa8Xvi%2Bk4aWrMf3IFJfmLRIyHzTjwh%2F43XjcMLN9dscSbicZg8jcKVQc17ZczwRgdtdduAucjCYWOl%2B1I%2FspAH2ragh5wLrv73kV0dMfN8l8BaArsssSglvDfcVRRv95GfmTQJi8BlSkd5iQ%2BVqLyZ%2BwVOP%2FonmSnE8ZDqYa1uGuq88Eio%2FdHL%2FtlDD%2FlR4w34DGwQY6pgEhYMn%2FYPtXeLvHnJm4xrjWN4NlViJk8OKT%2B9r8bc3QF%2FJudALhKszYbKSskaTEHRhNwbJQZDGOdxl%2FpB1YbI%2BPBGTLq4pG63ZGWURk7fFlL7I78cGW9V9PoZahYfMhb5iNeSaF5hth%2FDeeqMiBhiRgq0hqs4EiB%2FEeKaOjq1KS3fbMVHungCoeiYTlAttNFuwNqoD2%2Ftr7aeJR9Au%2BiL9se8L4QHKb&X-Amz-Signature=1f6ba19d4df3fa9183f0df6fc3115aede9da37cd6e869d50524c5fbc00496172&X-Amz-SignedHeaders=host&x-id=GetObject)

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
