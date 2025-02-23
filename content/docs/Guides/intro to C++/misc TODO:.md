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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKICSEEY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX7kNgFgnWO9Pva%2FSt%2FY3wQbtLsSqT0nUqng8FSXDvCAiEA1J0GLNs5bttFAuxoo3ZqYdfoyRqbPkHSoSlkDRSEQhcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoMf9uzqK4c20%2FEfyrcA5xewH4es%2Fejg4RF8McMO%2FwbZYFUrqRnquNjJ1DTvVAOLdablhhlQd9nWA6CtoKhiAanVPAepF6t2wyNTl1gPSKa50CtdItgDnESf9Zt%2F7ofIePpVuk%2ByL%2BPPNfHw5yzuojphu4OpSsNcGIrfu%2FmdcsxVbIoDRlD9s9UMeV2S812kuE4ojxKMd1Kn2gLEIm3Z8XjWDRNes0BsV3OXbE%2FoXZ%2Bz5dAYpg3Yb536lAIG0yU%2BgGAdQHAbGeWWaTHyM5xl%2Fjee1BnGo3VIf0YNMzkg5PKouKXfvDpji5mKr4qPmJrO8u6Olh0zpFGM%2B1lSQHPfk6QlVJyOW1kLL5l%2FMct%2FgLevjbd7DCzms3nLaHEwPHWW%2F0AWIPIhahBi7B1VxfjN95n%2B8Gq4CAodbUuVjd9SHryw7aymYr0fcIDHcLAZjdWml5xCzLmLRf%2B1q2miywNj3pUiPdhg4WOhLP9xUs130I%2F0xCFLu0E0wzk9A6QL%2Buq%2FwXrTehHPJjW03UXKKDxmcM6OQO%2BGmXlWwDXryOzNeR%2BItTYO3pS5OX7snsgxI4JvQqK%2BRzjjatoQ1bLrNHG8LA1351Retj0r1rwU%2BKF3b%2Brwjw9QaXYNhMR0LiozO5nDHG%2FheFz8vLvSwjXMMvP6r0GOqUBKfE14iEGgfxPCAQpJaYmMwfVBWLreYsOPTg3wofSpeBq%2BZXvZMbOnWqvaB6rl1HmyDOPGAciZLYIuGUaffvOxbKBpSyC7d5ohNa8SJrQXuNfnw%2FJFuPG%2Bpv0nVXMBqnZOBo1%2FI8Yp3Ml5uDcgAZa8X%2Fmp3aBdP5Yr9roYmZYSutEYpIoIobofop9Weh4gOghokVlMDxU4t9u7yX1qBFPwMg8d3gm&X-Amz-Signature=55433eb1eb921bff87ea2bebdb37d4e46537a72900152cc764d81ea30b1a3f55&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKICSEEY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX7kNgFgnWO9Pva%2FSt%2FY3wQbtLsSqT0nUqng8FSXDvCAiEA1J0GLNs5bttFAuxoo3ZqYdfoyRqbPkHSoSlkDRSEQhcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoMf9uzqK4c20%2FEfyrcA5xewH4es%2Fejg4RF8McMO%2FwbZYFUrqRnquNjJ1DTvVAOLdablhhlQd9nWA6CtoKhiAanVPAepF6t2wyNTl1gPSKa50CtdItgDnESf9Zt%2F7ofIePpVuk%2ByL%2BPPNfHw5yzuojphu4OpSsNcGIrfu%2FmdcsxVbIoDRlD9s9UMeV2S812kuE4ojxKMd1Kn2gLEIm3Z8XjWDRNes0BsV3OXbE%2FoXZ%2Bz5dAYpg3Yb536lAIG0yU%2BgGAdQHAbGeWWaTHyM5xl%2Fjee1BnGo3VIf0YNMzkg5PKouKXfvDpji5mKr4qPmJrO8u6Olh0zpFGM%2B1lSQHPfk6QlVJyOW1kLL5l%2FMct%2FgLevjbd7DCzms3nLaHEwPHWW%2F0AWIPIhahBi7B1VxfjN95n%2B8Gq4CAodbUuVjd9SHryw7aymYr0fcIDHcLAZjdWml5xCzLmLRf%2B1q2miywNj3pUiPdhg4WOhLP9xUs130I%2F0xCFLu0E0wzk9A6QL%2Buq%2FwXrTehHPJjW03UXKKDxmcM6OQO%2BGmXlWwDXryOzNeR%2BItTYO3pS5OX7snsgxI4JvQqK%2BRzjjatoQ1bLrNHG8LA1351Retj0r1rwU%2BKF3b%2Brwjw9QaXYNhMR0LiozO5nDHG%2FheFz8vLvSwjXMMvP6r0GOqUBKfE14iEGgfxPCAQpJaYmMwfVBWLreYsOPTg3wofSpeBq%2BZXvZMbOnWqvaB6rl1HmyDOPGAciZLYIuGUaffvOxbKBpSyC7d5ohNa8SJrQXuNfnw%2FJFuPG%2Bpv0nVXMBqnZOBo1%2FI8Yp3Ml5uDcgAZa8X%2Fmp3aBdP5Yr9roYmZYSutEYpIoIobofop9Weh4gOghokVlMDxU4t9u7yX1qBFPwMg8d3gm&X-Amz-Signature=d6dcd68183af0947fcb550599afb420d82d2f3ef2894a623751c5caa7956abac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
