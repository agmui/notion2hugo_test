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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REV6H6AW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICfq0tfVpigSr53vX3Zh0lCE58qaf9UTEzcn9PR8mMrcAiBEe5uGwj2Jnnm0CuLR9Z4I5ylsBdXlKwSz1BUo3gefuCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJggZyDba0gkP4KHKtwDVKZakhGFfem7vlMIWQW5QpTFBtqB7%2BWdJFenfZYmErkuItBmRiCigyyia7BG0Iv8MnEdD2PGUKiBZxjZ%2BDQBHwKwTJ5hva4Gfql5%2FB6sCUM6Ij1PRHLiiJC051rC%2FzzCQ%2BJlMGBWimS0FN%2BjbGeYmd56kcMnFFMR3PmMJPWDslibnwGe%2Be8gHIz9XH3vjeO6TQH8Gk%2BtexRp3UDXcdO2%2B0stMcsG9oLo38%2FUEOrX8M3%2FOl79%2BzLFZtJRD35QYyIJlDz4BJffMccYRkHfZtHfou%2FtYekp83%2By7vk34Kkg7%2BKMs6ieCv5CbA2%2Faf4ezcg5cF4RUkv1Tg8t1vmuMEsbJ7OqN7%2BKILxRVN9PZBDuFVYPG8icYEG82CmfnNcV3KzA5Y5t7aMXXZj4jdXrvkcziT%2B81F2f%2F%2BFCLF6%2BuKVXr%2Fri4jY%2Fp3Gamv3R1XY%2BUSIlYJ6tpZkUOn5VOD%2FgvJN0iFTkdk3p16iBJ%2BI9CEWOe7%2BuijjEo%2Fr8MHAO%2B4eMeTBi8WMyBKkfq8RDj3Cw60Bp9MDPZGisrekkuXvEVEgoZGXioG4m7vBWAqAZ2TSmFA%2Blum6dPc804WNzIgQygyArzE70OiBcqU0HVlP7szTD6zwlppwLuyW7lPTbdEswm%2B7TxAY6pgGAApJrI%2BWXolpwpJs2y6zvFxCYqnbdq%2BMAqfrZUVFx%2Fss%2FlepRbUgm7Y4YcYv62C%2FwX0F6UhSluKdiv3i70Ya92W3qQxVtTD8uwFZ2sPvvpXBHzw1RtP4G4PF6%2BrGudMpMkNqRBBj2ECpjFR2uwrRajonGOnl2E20Uv8sCCce9bcRrfLKFjj9g1v%2BMkbtp68pi5IDBQbd%2F5THqLAfuqjUVqEEXEltV&X-Amz-Signature=388de83fb57ee05ccfebce01add1e1e4624d61f06b8118022afd3ef74078a09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REV6H6AW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICfq0tfVpigSr53vX3Zh0lCE58qaf9UTEzcn9PR8mMrcAiBEe5uGwj2Jnnm0CuLR9Z4I5ylsBdXlKwSz1BUo3gefuCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJggZyDba0gkP4KHKtwDVKZakhGFfem7vlMIWQW5QpTFBtqB7%2BWdJFenfZYmErkuItBmRiCigyyia7BG0Iv8MnEdD2PGUKiBZxjZ%2BDQBHwKwTJ5hva4Gfql5%2FB6sCUM6Ij1PRHLiiJC051rC%2FzzCQ%2BJlMGBWimS0FN%2BjbGeYmd56kcMnFFMR3PmMJPWDslibnwGe%2Be8gHIz9XH3vjeO6TQH8Gk%2BtexRp3UDXcdO2%2B0stMcsG9oLo38%2FUEOrX8M3%2FOl79%2BzLFZtJRD35QYyIJlDz4BJffMccYRkHfZtHfou%2FtYekp83%2By7vk34Kkg7%2BKMs6ieCv5CbA2%2Faf4ezcg5cF4RUkv1Tg8t1vmuMEsbJ7OqN7%2BKILxRVN9PZBDuFVYPG8icYEG82CmfnNcV3KzA5Y5t7aMXXZj4jdXrvkcziT%2B81F2f%2F%2BFCLF6%2BuKVXr%2Fri4jY%2Fp3Gamv3R1XY%2BUSIlYJ6tpZkUOn5VOD%2FgvJN0iFTkdk3p16iBJ%2BI9CEWOe7%2BuijjEo%2Fr8MHAO%2B4eMeTBi8WMyBKkfq8RDj3Cw60Bp9MDPZGisrekkuXvEVEgoZGXioG4m7vBWAqAZ2TSmFA%2Blum6dPc804WNzIgQygyArzE70OiBcqU0HVlP7szTD6zwlppwLuyW7lPTbdEswm%2B7TxAY6pgGAApJrI%2BWXolpwpJs2y6zvFxCYqnbdq%2BMAqfrZUVFx%2Fss%2FlepRbUgm7Y4YcYv62C%2FwX0F6UhSluKdiv3i70Ya92W3qQxVtTD8uwFZ2sPvvpXBHzw1RtP4G4PF6%2BrGudMpMkNqRBBj2ECpjFR2uwrRajonGOnl2E20Uv8sCCce9bcRrfLKFjj9g1v%2BMkbtp68pi5IDBQbd%2F5THqLAfuqjUVqEEXEltV&X-Amz-Signature=57a0ece9b13a46ada019ce3207ece155271ee416f97d94c8122c7e2f42ce9068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
