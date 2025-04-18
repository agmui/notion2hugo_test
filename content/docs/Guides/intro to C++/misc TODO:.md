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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CCPXIS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4tjAHQXJisOfawO5%2FrW0OtJu%2BZYWCJhmK97az78IawQIhAJKRtABBY2SjJRcJg06Bf%2FljxZFSFApLLCXFwRABBeVPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU1QxbYL8WcbKq0DYq3AP8kdMcDdjobNJymn%2B8womILNJEivTzzpT2eX5j1k5pm2eCNhq7h8HZnX4jXcQZfxLdK4hRbQrFoNsXpIbpABLlGDAfAofLDdsV%2BTtwqnHUT4Dj8PugmVVazd21KZSKU9yXWGQgfCVvqfB6xcKJXCrprTWI5WFBYDDsDkBETBUPhJRcoofpQ6SaOYY1t4cwA2HQ4ZfSIv9XkFcLQqZaiJShXS4kMVxjkP7LAPhMJTFndud6%2BG0zRNrdJwFxeJJGozcXnsAvOn%2BtkKjFrAXPPqUnL7PCwDGZPuYXj8bUHXJu9nEsN9s%2FB9W1WlOz8T%2B0nGoHCvEdBBCBO56wfNUabIOveygeIgmgmh1ZBMztMgEckjZ5R9%2BKi0pN0jA1Dj06XRd9p0AvWa6QPAr%2Bjb7LOPJ4m06zqFPzjdUh2gGJoSVhwyuWyAkdHudGh%2F%2FMUBQ7FRVZfNVzTi5vef32Hh0nYCz%2F7H90EuyM7xJ1p9jpEsaeYWCGyc%2BHT3a67gUWJiNwNkpj6meVQgkCBvPFFRzq9Hbt4RNVUYtVJLilUgJoXknLMLpuhpbpFWYw88yewpNzB%2FrYa4P4lxHO%2F4BjdNuv4pI2xsV%2Fo53GlyonpEM9c3J4m0OPUMEeWfwm56adUzDCs4vABjqkAVZYMmlEMzZ9RqLhSwp77PH93iU%2B5GL9J%2Fu2pO7gKnerO7w4HfmPP7W8WtUsPu4Ip9yvJIlRZodSm0z48n06yfv3i6q3PoNau6e7i1Z%2F10WtGvSi0a0CSjuFpqyi1N7cszd8irT9Sv%2FgpPV8gwvbvHRrfh4nkB4EjguWk%2FpnM6jqt90IwPkBoUviI9FCdR8paZfG2kkljfqc4i6j6rKSo8ui7L5G&X-Amz-Signature=693dbc1e73e8a5b66457642adb5155c0e34e106724a648090747d967d1ed70d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CCPXIS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4tjAHQXJisOfawO5%2FrW0OtJu%2BZYWCJhmK97az78IawQIhAJKRtABBY2SjJRcJg06Bf%2FljxZFSFApLLCXFwRABBeVPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU1QxbYL8WcbKq0DYq3AP8kdMcDdjobNJymn%2B8womILNJEivTzzpT2eX5j1k5pm2eCNhq7h8HZnX4jXcQZfxLdK4hRbQrFoNsXpIbpABLlGDAfAofLDdsV%2BTtwqnHUT4Dj8PugmVVazd21KZSKU9yXWGQgfCVvqfB6xcKJXCrprTWI5WFBYDDsDkBETBUPhJRcoofpQ6SaOYY1t4cwA2HQ4ZfSIv9XkFcLQqZaiJShXS4kMVxjkP7LAPhMJTFndud6%2BG0zRNrdJwFxeJJGozcXnsAvOn%2BtkKjFrAXPPqUnL7PCwDGZPuYXj8bUHXJu9nEsN9s%2FB9W1WlOz8T%2B0nGoHCvEdBBCBO56wfNUabIOveygeIgmgmh1ZBMztMgEckjZ5R9%2BKi0pN0jA1Dj06XRd9p0AvWa6QPAr%2Bjb7LOPJ4m06zqFPzjdUh2gGJoSVhwyuWyAkdHudGh%2F%2FMUBQ7FRVZfNVzTi5vef32Hh0nYCz%2F7H90EuyM7xJ1p9jpEsaeYWCGyc%2BHT3a67gUWJiNwNkpj6meVQgkCBvPFFRzq9Hbt4RNVUYtVJLilUgJoXknLMLpuhpbpFWYw88yewpNzB%2FrYa4P4lxHO%2F4BjdNuv4pI2xsV%2Fo53GlyonpEM9c3J4m0OPUMEeWfwm56adUzDCs4vABjqkAVZYMmlEMzZ9RqLhSwp77PH93iU%2B5GL9J%2Fu2pO7gKnerO7w4HfmPP7W8WtUsPu4Ip9yvJIlRZodSm0z48n06yfv3i6q3PoNau6e7i1Z%2F10WtGvSi0a0CSjuFpqyi1N7cszd8irT9Sv%2FgpPV8gwvbvHRrfh4nkB4EjguWk%2FpnM6jqt90IwPkBoUviI9FCdR8paZfG2kkljfqc4i6j6rKSo8ui7L5G&X-Amz-Signature=8088b5a6e9388c51ecb31000301966b00c07105d56babb12b1acf2d00dc10d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
