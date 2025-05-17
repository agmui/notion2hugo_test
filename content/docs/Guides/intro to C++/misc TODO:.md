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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA3OPXJ4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWfM4pwlTzFzIZJGbySeOoEUboFhAvZRIMvi4MzwlZ1QIhALTMmczp34cI3soW2NKBqskMiLH1mP80LrA7VFZYRVjYKv8DCFEQABoMNjM3NDIzMTgzODA1IgyULUhKhjCCdNKQVjIq3ANl88HZ8FiJ%2B%2F2uxafantyRAaragSM9aDWdMzNNZnoUlyykc3IaAjMb6X%2FhwbhCvpTFd%2FPCs9bmi7uy4dk7tyx9SUUDm4eKh9fpOqIGXSkOjNsTSN7o1rIKPAw2YXmWAtxg5NhiJwBLQArK0P6aPwfN5pXItYdcb1I1KoAhuvPdSlS9kfy5xM5vQ6mxmBzy%2FsyH48%2BPuIl5DIIj8aYcfGX%2F6B7v5uW4Ux8gtfOrAR3BBwwX9wdNUsQl76YcU9OjGLN2nDPC9frFvBd5eAnHVgJ6TbCqRJPPCCsZqdeaOicLYW%2BTXeE094MbCsMwK14ftbi08%2BLsSYCCukn%2Bido9gKC6AzA43hgBCt49i9rrQ6wU614Q%2FPya2p0CVR4vTSsYEXOCguds4XQQsvCBsnZOyab4MIoaTriCSue2c8I7AfwcjasSbIVh04XMZx7A7MplVgefyF10GbI1Uph6Flec0KG35ncXgaSxSCBd60XrnR4uoLpa7PgiJuOlhlYZJ9N8TpkfR4BFhI7jwyJvqx86jOF2EkNEVqiDvEww3EHLsmnAlWusJYya2x5mdvCfvxYINPsOCjbtk0Fr9bOADhd4Rh0uOqZ%2BTzzRqZblr9U4ygS8fdq3Zr0BrgYBxrsA%2BDDKoJ%2FBBjqkAUyoHtkw8%2FXGjjG5QREAk9mm6YkmnXdeRwgd%2BqkwbvT76yuEHyYmq2M%2B07m9vY1N4zMYRLn3Si82dfnVQF5Eq3xSAvDPlPxlO8a1UkucnIEFuolYdw6Uxj8q%2FJ8TJcoxl33N5a035e9yC3M%2FU2EBYhnaiqQhByZ%2FAM5Xw%2B0%2F2r6Y9N85A3UnWe8qfZjQFTUugcrhERzKgPHzKU52XTmaTimx2Bdb&X-Amz-Signature=d8d474ac0730cd0c5461220b75f9227e4ce6c4b97c607ad5b487c2749a30bb53&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA3OPXJ4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWfM4pwlTzFzIZJGbySeOoEUboFhAvZRIMvi4MzwlZ1QIhALTMmczp34cI3soW2NKBqskMiLH1mP80LrA7VFZYRVjYKv8DCFEQABoMNjM3NDIzMTgzODA1IgyULUhKhjCCdNKQVjIq3ANl88HZ8FiJ%2B%2F2uxafantyRAaragSM9aDWdMzNNZnoUlyykc3IaAjMb6X%2FhwbhCvpTFd%2FPCs9bmi7uy4dk7tyx9SUUDm4eKh9fpOqIGXSkOjNsTSN7o1rIKPAw2YXmWAtxg5NhiJwBLQArK0P6aPwfN5pXItYdcb1I1KoAhuvPdSlS9kfy5xM5vQ6mxmBzy%2FsyH48%2BPuIl5DIIj8aYcfGX%2F6B7v5uW4Ux8gtfOrAR3BBwwX9wdNUsQl76YcU9OjGLN2nDPC9frFvBd5eAnHVgJ6TbCqRJPPCCsZqdeaOicLYW%2BTXeE094MbCsMwK14ftbi08%2BLsSYCCukn%2Bido9gKC6AzA43hgBCt49i9rrQ6wU614Q%2FPya2p0CVR4vTSsYEXOCguds4XQQsvCBsnZOyab4MIoaTriCSue2c8I7AfwcjasSbIVh04XMZx7A7MplVgefyF10GbI1Uph6Flec0KG35ncXgaSxSCBd60XrnR4uoLpa7PgiJuOlhlYZJ9N8TpkfR4BFhI7jwyJvqx86jOF2EkNEVqiDvEww3EHLsmnAlWusJYya2x5mdvCfvxYINPsOCjbtk0Fr9bOADhd4Rh0uOqZ%2BTzzRqZblr9U4ygS8fdq3Zr0BrgYBxrsA%2BDDKoJ%2FBBjqkAUyoHtkw8%2FXGjjG5QREAk9mm6YkmnXdeRwgd%2BqkwbvT76yuEHyYmq2M%2B07m9vY1N4zMYRLn3Si82dfnVQF5Eq3xSAvDPlPxlO8a1UkucnIEFuolYdw6Uxj8q%2FJ8TJcoxl33N5a035e9yC3M%2FU2EBYhnaiqQhByZ%2FAM5Xw%2B0%2F2r6Y9N85A3UnWe8qfZjQFTUugcrhERzKgPHzKU52XTmaTimx2Bdb&X-Amz-Signature=84b32e65bc7993aa0fcae3263dd430843bdd77bf195b73c3f908e75c31fa8c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
