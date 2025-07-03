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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT2ASPN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDYip2zbYoR2LKy78AyDfgOZGGkEJbJM%2Fct%2BYp5jYCAoAiBrBzgyf86Me07sPjAAjdG1GrCPicIespI3anApbZd%2Boir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMq9hZcR43oooavofNKtwDd4o11zKKxYiZfo%2FpHrDYyv1%2FXEis8irpgq5FPVwEcKNXkNBy%2BUwfTybx6s2GZU%2FcfWHkqQHT7FG6ncQyAQH3Leu8v1nxGaPDNFxtrjocjwbSWil%2FuAM9rP%2Bp046qqRBKpzMqz3ZG8Xhx%2Fu72C0bmQxxZokL2AH5Xlpfta5yVhweqlXVyofG6kyW%2FHnbalEPKfXrV7LZaMUnSXc54LpysGjocsoTyAM6BdTgSFQ8ZmIZVLNYV7%2FrSjnJ9t88A17aNYrtAjGaJuu9XIPjsixE6IFt5BmAdaV7rwQ62eXv44bgnEeYlFP2Lz6ZErK0rrX3ocdONmdi0F33jnNOzh%2F3SzO5I%2B%2F2kWDhdKJiNr7tGMQnLUh0Etg8pEftXY%2B7C5fZylvA6WbsjFI1UFvmagp91LdCWr5LQlvJPkTxkjXY979uKMy1EiKrocT%2BQfFWM%2F4LZEST0nvpH5gwcPwy2hLy2sWeR5MOzVWKTtUSd%2FkFyZ%2BYmyN%2FO2zeDamFKFjlO7gAHlGxV9NVmAW5r9Vr1jXvhkalMszOV697CTnlBv0TF4ox3ly8udKBBqiWLK8PNusSKfFXXWPH3MdWHzqRoiFRDVKAM2DbnlV4CZL3Nb3rLpavgWDiok3WeS8j6OyowzY2awwY6pgE%2F3kgzaFPY%2BdvMN9VLe6o8ajGY42DRx%2F4a1WSq5hTov19g0vWk99LCe0x%2FWRg%2BB25kJ2qHMdd9aLZoBectuMkzGkD90mWzWuKu39q3uz1kd06WRnIRoYJd0LOiAQmcWH3wk8xLNA7mRYMeBxi0ARjKvD8B9rtOSceusW1dvzKDWG8DhhsRH%2BF61CsTp437gBTh25smeNantKf40%2BZvxOVWAqvjZxNH&X-Amz-Signature=0f5b2ded40788e59ef964d8b1e800fd928d153df7d465d27b398e55d9ae6c895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT2ASPN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDYip2zbYoR2LKy78AyDfgOZGGkEJbJM%2Fct%2BYp5jYCAoAiBrBzgyf86Me07sPjAAjdG1GrCPicIespI3anApbZd%2Boir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMq9hZcR43oooavofNKtwDd4o11zKKxYiZfo%2FpHrDYyv1%2FXEis8irpgq5FPVwEcKNXkNBy%2BUwfTybx6s2GZU%2FcfWHkqQHT7FG6ncQyAQH3Leu8v1nxGaPDNFxtrjocjwbSWil%2FuAM9rP%2Bp046qqRBKpzMqz3ZG8Xhx%2Fu72C0bmQxxZokL2AH5Xlpfta5yVhweqlXVyofG6kyW%2FHnbalEPKfXrV7LZaMUnSXc54LpysGjocsoTyAM6BdTgSFQ8ZmIZVLNYV7%2FrSjnJ9t88A17aNYrtAjGaJuu9XIPjsixE6IFt5BmAdaV7rwQ62eXv44bgnEeYlFP2Lz6ZErK0rrX3ocdONmdi0F33jnNOzh%2F3SzO5I%2B%2F2kWDhdKJiNr7tGMQnLUh0Etg8pEftXY%2B7C5fZylvA6WbsjFI1UFvmagp91LdCWr5LQlvJPkTxkjXY979uKMy1EiKrocT%2BQfFWM%2F4LZEST0nvpH5gwcPwy2hLy2sWeR5MOzVWKTtUSd%2FkFyZ%2BYmyN%2FO2zeDamFKFjlO7gAHlGxV9NVmAW5r9Vr1jXvhkalMszOV697CTnlBv0TF4ox3ly8udKBBqiWLK8PNusSKfFXXWPH3MdWHzqRoiFRDVKAM2DbnlV4CZL3Nb3rLpavgWDiok3WeS8j6OyowzY2awwY6pgE%2F3kgzaFPY%2BdvMN9VLe6o8ajGY42DRx%2F4a1WSq5hTov19g0vWk99LCe0x%2FWRg%2BB25kJ2qHMdd9aLZoBectuMkzGkD90mWzWuKu39q3uz1kd06WRnIRoYJd0LOiAQmcWH3wk8xLNA7mRYMeBxi0ARjKvD8B9rtOSceusW1dvzKDWG8DhhsRH%2BF61CsTp437gBTh25smeNantKf40%2BZvxOVWAqvjZxNH&X-Amz-Signature=ba13769575c3d430a6d5d41840f1741421992ff765293099c9bdd33c55b760aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
