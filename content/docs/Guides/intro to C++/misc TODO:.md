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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLNRLL%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7u1crNur4GrmBB7X28%2FyaMhfe8XlB4QbOGwwRrQgMTAiEAxA7%2F9HvAwGD9dPtypNPpIeLn28nArwDdU7usEaCCodsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNzrHt9YQb5uyWKH5CrcA4LXHkQAdlobwdWp5d0TkaUO6RnE0nFvHG0WSZ44%2BTJGmdYkW%2BHvH9Cc5NQ%2BiVm2oRYXdDlsmAHsFDPChBM0AwYiJxRzagAp4TKe6iUieM1f0bdGfxiLCJYRIWvIBPld9ljF0ANIW1cnWLtWe9wpPCweI1hgU93Zrc%2F%2FXqUvC%2BVgUkRNjXZ7diiD1FppHSpu6FrYCPiyrZFSQg4BRKzSIQFDaEm2DQXiqiG%2B3lkghImVBbiQtHuoZK9ym8vOU4bqAr3sZSxz5xqz0BUU8a381Z3D4g%2BL5PVlk5XxqdoMLFyRq4mZxKPWg5mS9DRghXKCwRaAEprw1aZ1wvUUQ3PI1NPVXTCjlzgOZSQwjIFb%2FjpxQmvt2hpnK0qZetbzvn0w9%2B23sR28lLfdE%2FoL6LCPMCsLy4aOB39d%2BYwqigvtvC5sSuAO11q1Z7vhi0MQcJIs6pmA8JRNrbfjrwxTZ1gB90TWiCGDcvx5h0roeYcV9Pl91GJlxhVLRo6HK3O7CWoPSauWrcvt2qSBeKNp7RV7IBzAG9N8i%2BPhjlU6wl8ELsmdvYU30b4yXtKfy%2Fre7Ka6AH04tK%2F96NH%2F59kWd0BRy5VQndsaupJ8om5Nt%2FhE7Sb3nDaJVAxknLvjwehHMM2m5tIGOqUB8hyAdI4ybcKstMJlRWQmxv3LiPmBUJp2bcat%2Fa5CYqkz1ivcm5J%2BVKzYDzYu8dg7jDxQbF6Yrv5kdW2OZWOkbT%2FOLWL7Da9tyhNvIKjrBZwaSxVQCaReu9Va8MdAGYSgxm%2BUHMoua8%2FG%2B1Bw3RZ421Mjonj4cOkB0rIMPeRnp2XoioB6peG%2FIDjaKaf%2BihBS5WtcJ5Kl7RnVoh9QSXLc4S58qQEB&X-Amz-Signature=66e1d4963e1ac6e00f82b9241618338e3e77c43295e87854123129f106e8c86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLNRLL%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7u1crNur4GrmBB7X28%2FyaMhfe8XlB4QbOGwwRrQgMTAiEAxA7%2F9HvAwGD9dPtypNPpIeLn28nArwDdU7usEaCCodsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNzrHt9YQb5uyWKH5CrcA4LXHkQAdlobwdWp5d0TkaUO6RnE0nFvHG0WSZ44%2BTJGmdYkW%2BHvH9Cc5NQ%2BiVm2oRYXdDlsmAHsFDPChBM0AwYiJxRzagAp4TKe6iUieM1f0bdGfxiLCJYRIWvIBPld9ljF0ANIW1cnWLtWe9wpPCweI1hgU93Zrc%2F%2FXqUvC%2BVgUkRNjXZ7diiD1FppHSpu6FrYCPiyrZFSQg4BRKzSIQFDaEm2DQXiqiG%2B3lkghImVBbiQtHuoZK9ym8vOU4bqAr3sZSxz5xqz0BUU8a381Z3D4g%2BL5PVlk5XxqdoMLFyRq4mZxKPWg5mS9DRghXKCwRaAEprw1aZ1wvUUQ3PI1NPVXTCjlzgOZSQwjIFb%2FjpxQmvt2hpnK0qZetbzvn0w9%2B23sR28lLfdE%2FoL6LCPMCsLy4aOB39d%2BYwqigvtvC5sSuAO11q1Z7vhi0MQcJIs6pmA8JRNrbfjrwxTZ1gB90TWiCGDcvx5h0roeYcV9Pl91GJlxhVLRo6HK3O7CWoPSauWrcvt2qSBeKNp7RV7IBzAG9N8i%2BPhjlU6wl8ELsmdvYU30b4yXtKfy%2Fre7Ka6AH04tK%2F96NH%2F59kWd0BRy5VQndsaupJ8om5Nt%2FhE7Sb3nDaJVAxknLvjwehHMM2m5tIGOqUB8hyAdI4ybcKstMJlRWQmxv3LiPmBUJp2bcat%2Fa5CYqkz1ivcm5J%2BVKzYDzYu8dg7jDxQbF6Yrv5kdW2OZWOkbT%2FOLWL7Da9tyhNvIKjrBZwaSxVQCaReu9Va8MdAGYSgxm%2BUHMoua8%2FG%2B1Bw3RZ421Mjonj4cOkB0rIMPeRnp2XoioB6peG%2FIDjaKaf%2BihBS5WtcJ5Kl7RnVoh9QSXLc4S58qQEB&X-Amz-Signature=0d963e37dd5747763eff5a2cca8c4e9d3a8114b793f4d35961e8cbcf11e84843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
