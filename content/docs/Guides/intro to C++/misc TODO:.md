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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQYRYLP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2FbYdVLhkl5AwVCbusdNEvpHEVdbYblgaagi1bHradAQIhAKv7aUtkB0aq9qlUIDWsNDP4dN5HHInygQnWG%2BD%2F9EGcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq1IjcI3XB2LVcK8Eq3ANHWhdeS7YDvZLLBw8oi68fJ6IkPq71HFghTKOlPf6D4pr%2Bf1f58UsSqUKi6yLOvhF7s9GmqBWOPWzYLsrxn92gGW66Hoas%2FMsdRBfonabyRfUUfZooCWB995tLU5WwrBpiVXszdY4Y8L9Wsh8oAmBTg2A1Mb00snOHLWP1tK5t16R8AKn3K%2FHjhHSAtoTg2ry8%2FV5sVQhHLcGbsv1eqWpV2e51F%2Ftpkpf52J8GPwhxDOFzDAfQr4kOop4ERbhlXOAqHo32PEFRbfPVZw%2Fxyj2euW5EiTk78ArfcfZpcBd9jfX2QmNvrIPSRBr9oKGK5Vzhm1OEdOGU66c3WuHjfQ93%2F4eUN4NhIA0kz7jdKPCwu5VrrT0NYpGw%2BD%2FZAQi4ZqYTEe%2Fvhk1lgxXYZ5sExDQ%2BDCqvpL57amQK473UjXpwjSAtrIPTenffMA1D%2FxDiQ6WXlqT0N1uw6PbGJSxjwDbW%2FUNYWGlN8eV%2BXFpS0p%2B2w8Kmo01Tt%2BHsZJhgBp%2BuGVpMSmaX0hiCI96str5Fp0tVvMPj41zuUbBF%2FgDSUEYm4kipTvEje6BNPSfRSwYRDSBw9jZY%2B8VnoLmTKqh%2Fafoz9c2dlC0mctyil3GnQOQ2ty5MlQlN2L9rbRHqpjCshv7ABjqkAbGdkobaHNszV%2FrpRnJVdus0lqd3txbIh55an%2FMOIO1PplAnBo99VepU6H6d9Yl9ucVmVFMtP1ydSm4Zr%2FoRV4lIsDaAYgil9ko%2Fzr5EO87LNhNxHp%2BRq2LhpoWjIvaiklYBIcFqXhoeIeYeU2eCJzltETMWoTZxkWRDBcIA4PgIpLRkcJ7mVUdUbcmvfxKx9gHkoIzsKeEDKp1QFHk%2B01FfdkHp&X-Amz-Signature=500494c598eb8eb918aa10bb54b19dac5bf77000386add3b208843794fe8bd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQYRYLP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2FbYdVLhkl5AwVCbusdNEvpHEVdbYblgaagi1bHradAQIhAKv7aUtkB0aq9qlUIDWsNDP4dN5HHInygQnWG%2BD%2F9EGcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq1IjcI3XB2LVcK8Eq3ANHWhdeS7YDvZLLBw8oi68fJ6IkPq71HFghTKOlPf6D4pr%2Bf1f58UsSqUKi6yLOvhF7s9GmqBWOPWzYLsrxn92gGW66Hoas%2FMsdRBfonabyRfUUfZooCWB995tLU5WwrBpiVXszdY4Y8L9Wsh8oAmBTg2A1Mb00snOHLWP1tK5t16R8AKn3K%2FHjhHSAtoTg2ry8%2FV5sVQhHLcGbsv1eqWpV2e51F%2Ftpkpf52J8GPwhxDOFzDAfQr4kOop4ERbhlXOAqHo32PEFRbfPVZw%2Fxyj2euW5EiTk78ArfcfZpcBd9jfX2QmNvrIPSRBr9oKGK5Vzhm1OEdOGU66c3WuHjfQ93%2F4eUN4NhIA0kz7jdKPCwu5VrrT0NYpGw%2BD%2FZAQi4ZqYTEe%2Fvhk1lgxXYZ5sExDQ%2BDCqvpL57amQK473UjXpwjSAtrIPTenffMA1D%2FxDiQ6WXlqT0N1uw6PbGJSxjwDbW%2FUNYWGlN8eV%2BXFpS0p%2B2w8Kmo01Tt%2BHsZJhgBp%2BuGVpMSmaX0hiCI96str5Fp0tVvMPj41zuUbBF%2FgDSUEYm4kipTvEje6BNPSfRSwYRDSBw9jZY%2B8VnoLmTKqh%2Fafoz9c2dlC0mctyil3GnQOQ2ty5MlQlN2L9rbRHqpjCshv7ABjqkAbGdkobaHNszV%2FrpRnJVdus0lqd3txbIh55an%2FMOIO1PplAnBo99VepU6H6d9Yl9ucVmVFMtP1ydSm4Zr%2FoRV4lIsDaAYgil9ko%2Fzr5EO87LNhNxHp%2BRq2LhpoWjIvaiklYBIcFqXhoeIeYeU2eCJzltETMWoTZxkWRDBcIA4PgIpLRkcJ7mVUdUbcmvfxKx9gHkoIzsKeEDKp1QFHk%2B01FfdkHp&X-Amz-Signature=08093fec2b18e47d9ea4979122b5a4fda9da6c4c793b7879b84841e00f3ade96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
