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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AKFREM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGk0FME%2Fh2kMOYsJuC8r7Bf%2BmETnJ40BnrZLE3pP9GVgIgKa1VLIWgJUfEGD3mS6t0RA3pzYANwVxvre65JuTC3w4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLhaPxRxQZyZbCRBnSrcAwbTnewqGGPMvQfitlTBhJyaPWTSXidpkmHtylKu9ZdS%2F3dY2vPc5Cql6OQJrNAvzTi40SzPw1e9RfJ85W%2BvjST6c%2Bd8%2Bo3q0gvdvDjRqNUxkf3EzGczkSwfZ%2FxaUmv%2B%2BBK03OZVKmuD6yIq1TPrqcaCznCNWZzCkEoFMxpgk6RXaLBA96jOcvmiTMxt42qY26%2BRgsvy0hE%2Fe5ikA9zjfbUo4QRyKapMQIdNGH47KfcBnN1IQiqbO276BGQn7rCzqFrxuMXOH5p1LTRLL51zV%2BKjyl2mHByCo9KuZTOB1lYWZqY%2FbOsCZkHyCxYhBpm%2BPFb0L0nycfpzZIx6y9s2eOgfu%2FNikCutyaSQhVi0sP3iWV%2BBQw7So4rmzjAc3J4zU8UstErtfaq6%2FkYpvTQAukUIVrfkhlxLx36Kh%2Bn0QZym2Nw8ZgAkXqikG%2BNFhbCh0RvXH6AWL8E1G5PhJ6QKe%2BNbMYoTJ659AgbMBsUjPCM31vz4x38jki5r2ljqtO2xo68pTdDIYOD8APQA9q7A2SIH0bsgfT5fUng0wSPkbMT1AfVWKFT6PZdDAkcCr3WIljpbAkShptD3a9mh4apNy%2FrZVXa0fedjk2DR1aMLsf3VtXmuWcyyL3Xc663IMLLtzr8GOqUBco0K2pLxTOhElJCav%2FOx009rR452wv9Z2cu1%2FxpApaHSExfN%2BqYAalBRJMIKqL%2Fqu09BbpnQ0TLskieeyl6Ig%2FaKPWhnBrunAXpIZyl8Hiv1eXteaLszCVqetOmD%2F%2F5MiCWg9ZcsrQuZE3D32LQdclj5EELsKW1oBxeMqNOnaaZISsAYrcpzFjEhUfgwbMuv88rwaGn192EVvmMxK6ak4BESk9B8&X-Amz-Signature=97045ba5dfc2210748f44c2215fc1693c0bf6b7d55b803e3560afdb50349b4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AKFREM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGk0FME%2Fh2kMOYsJuC8r7Bf%2BmETnJ40BnrZLE3pP9GVgIgKa1VLIWgJUfEGD3mS6t0RA3pzYANwVxvre65JuTC3w4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLhaPxRxQZyZbCRBnSrcAwbTnewqGGPMvQfitlTBhJyaPWTSXidpkmHtylKu9ZdS%2F3dY2vPc5Cql6OQJrNAvzTi40SzPw1e9RfJ85W%2BvjST6c%2Bd8%2Bo3q0gvdvDjRqNUxkf3EzGczkSwfZ%2FxaUmv%2B%2BBK03OZVKmuD6yIq1TPrqcaCznCNWZzCkEoFMxpgk6RXaLBA96jOcvmiTMxt42qY26%2BRgsvy0hE%2Fe5ikA9zjfbUo4QRyKapMQIdNGH47KfcBnN1IQiqbO276BGQn7rCzqFrxuMXOH5p1LTRLL51zV%2BKjyl2mHByCo9KuZTOB1lYWZqY%2FbOsCZkHyCxYhBpm%2BPFb0L0nycfpzZIx6y9s2eOgfu%2FNikCutyaSQhVi0sP3iWV%2BBQw7So4rmzjAc3J4zU8UstErtfaq6%2FkYpvTQAukUIVrfkhlxLx36Kh%2Bn0QZym2Nw8ZgAkXqikG%2BNFhbCh0RvXH6AWL8E1G5PhJ6QKe%2BNbMYoTJ659AgbMBsUjPCM31vz4x38jki5r2ljqtO2xo68pTdDIYOD8APQA9q7A2SIH0bsgfT5fUng0wSPkbMT1AfVWKFT6PZdDAkcCr3WIljpbAkShptD3a9mh4apNy%2FrZVXa0fedjk2DR1aMLsf3VtXmuWcyyL3Xc663IMLLtzr8GOqUBco0K2pLxTOhElJCav%2FOx009rR452wv9Z2cu1%2FxpApaHSExfN%2BqYAalBRJMIKqL%2Fqu09BbpnQ0TLskieeyl6Ig%2FaKPWhnBrunAXpIZyl8Hiv1eXteaLszCVqetOmD%2F%2F5MiCWg9ZcsrQuZE3D32LQdclj5EELsKW1oBxeMqNOnaaZISsAYrcpzFjEhUfgwbMuv88rwaGn192EVvmMxK6ak4BESk9B8&X-Amz-Signature=020aef6e70972a812efa35a69df1efbc6ca62bb695a2ad033710fd0a66b37eea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
