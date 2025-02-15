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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOU5NT3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCS47RYc17%2B9RF1ZlyxSj5XehjCZ6FrUkwss6hr2JiZjwIgcVlCFEAk06l9Y9KU3cidyEiNv3JHu1C8nHYvwxt2ickq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKZ%2FzQyvxSq3F5JkFCrcAyMDKaIadc0GWB9%2BcYxzkiMA6zyKm7FDArdvleyAX2PStp8aTxztMfdaFS%2BnbMfDB9TwBiEsra%2FjAs3eVhnnejDuzldeIxvIMwdJZY9wBk3FXANDyhRE0BaylP2Wn2p4r1jP4YV%2Bjii0MMqN3nO1%2FBAZzdKXXlbNmiq27ErJsLGcUimDKP3Bx4ew1kqXDLiGY9sBLqWvoEmU1%2FLMiAWBfFzDZ%2BUp6v0qX5GL1%2BhVVrwihvUY1x8%2Biu1vEJGzgNk%2FnVGVLdi%2FGqvGfQwwvAShlD6DPij41zpre65rdRbyA%2B0joZPeYWIT4X6oG3%2FrlV%2F9zkgGUlUsL%2Fr1VcaB%2BW0hh9wkSCOHp0yB8j4k0Ex7ceM1iueUchH7Eb7ktOKTolvDxnuHVlLT7MwVW8qgWiTxFoPi5FhKMWy0gAEcj3aNjFY3BQk0eZdJHdzIDtHZdUchrw57nnD6hBByJVhiN9zD9WU5gAP6kM%2Bo%2B5sTM2dSemNKZZyijg%2BCJPwqujFrLn4HCptIiM9YQ6c0L6MIggxtgRz%2BS3v3bzOrRiITOXVlK0leiFwq6xRCbMucxmzde6st3Gq7Rid%2BxVufyYg1WIUu%2FV81vcnhYKdxldQFzjFNZulQOSMrnFoXnVrem9DOMMqEwb0GOqUB3hiABceKMrC2cqOgRNvPuMogSMZU8uzLC2ArYcONG99JJzl1pBNrlftQyGg3wHXbIQpk0DtKHaHPpkbOgeiXpuvMAaMZ9yosEDz17NUShgsBflpqH1stYzAluyRyu0pzWelk0HfnfXv2TB9ydF8Sixv5DAAcfkBQ60aYsiwmr%2FPRMrXIPkTGOEV8e61bNNJJyTGygMzP13lLYi8wZkAwCIWF2FLb&X-Amz-Signature=3f7a803f93c03cdf108f8d5a9454703ea26db8c6aafc777e9fad4987a4f16f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOU5NT3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCS47RYc17%2B9RF1ZlyxSj5XehjCZ6FrUkwss6hr2JiZjwIgcVlCFEAk06l9Y9KU3cidyEiNv3JHu1C8nHYvwxt2ickq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKZ%2FzQyvxSq3F5JkFCrcAyMDKaIadc0GWB9%2BcYxzkiMA6zyKm7FDArdvleyAX2PStp8aTxztMfdaFS%2BnbMfDB9TwBiEsra%2FjAs3eVhnnejDuzldeIxvIMwdJZY9wBk3FXANDyhRE0BaylP2Wn2p4r1jP4YV%2Bjii0MMqN3nO1%2FBAZzdKXXlbNmiq27ErJsLGcUimDKP3Bx4ew1kqXDLiGY9sBLqWvoEmU1%2FLMiAWBfFzDZ%2BUp6v0qX5GL1%2BhVVrwihvUY1x8%2Biu1vEJGzgNk%2FnVGVLdi%2FGqvGfQwwvAShlD6DPij41zpre65rdRbyA%2B0joZPeYWIT4X6oG3%2FrlV%2F9zkgGUlUsL%2Fr1VcaB%2BW0hh9wkSCOHp0yB8j4k0Ex7ceM1iueUchH7Eb7ktOKTolvDxnuHVlLT7MwVW8qgWiTxFoPi5FhKMWy0gAEcj3aNjFY3BQk0eZdJHdzIDtHZdUchrw57nnD6hBByJVhiN9zD9WU5gAP6kM%2Bo%2B5sTM2dSemNKZZyijg%2BCJPwqujFrLn4HCptIiM9YQ6c0L6MIggxtgRz%2BS3v3bzOrRiITOXVlK0leiFwq6xRCbMucxmzde6st3Gq7Rid%2BxVufyYg1WIUu%2FV81vcnhYKdxldQFzjFNZulQOSMrnFoXnVrem9DOMMqEwb0GOqUB3hiABceKMrC2cqOgRNvPuMogSMZU8uzLC2ArYcONG99JJzl1pBNrlftQyGg3wHXbIQpk0DtKHaHPpkbOgeiXpuvMAaMZ9yosEDz17NUShgsBflpqH1stYzAluyRyu0pzWelk0HfnfXv2TB9ydF8Sixv5DAAcfkBQ60aYsiwmr%2FPRMrXIPkTGOEV8e61bNNJJyTGygMzP13lLYi8wZkAwCIWF2FLb&X-Amz-Signature=cdf677f4dc5ae9d1b772d19f4855ea9463db1ceb59df880043c4ab12849a76c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
