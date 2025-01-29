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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ2MNXE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPnLi%2FRvOV0SxrJQRXmex28eW0gygOs4wjDscI31LbeAiEAtv8wYJiDHHBtbzOMokz%2FYQFseeMVivToC%2FpN472bhXgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBelynzl1%2F0gQqK2CrcAwtlIqGcJEaGg4Xe9Q454%2FpD8KuTPB7NeWy9PKBWzhvWtePeYphKcEMc3H0OZXHE8%2FPOeizeIHKmCT1VyQ4bYNVi%2FhdyGtd2MPx30AbzmtE%2BQFhU1aTKSnoGihTSCCDSwuPzImNSKPbYqfRYlnjvPo3c94faFOlUaw%2FbnbYVVWarGBdUuyVeZiGWI9psCA%2B5dtv69W8QSqa05T73SKjKgQIJZfzEfa21nl%2ByVLUXNPjDUXptNs22U7CF3Nz4Z01DMj2pfpoXr2S8YCIjy96zYnDu54GRVyoj4LF%2BsOPxxzJCM4uNNmO%2Bv3f6Q1LuKJUuhmnsoe7wFHDB5itaAm4WCu6ZcLorbWhHQaPEiQJI8ZF61bMCcaFZR8%2BE2qsZCj9IquIv8rT9O4rMe0kb5btUf831LwzzhBbJmhPbz6WMzZmWKhGR2HiSPtSmG0stCbK1b9wsGioFstmcjEq4L5OemUPJUFh8UehGAMlpjkXe59QVdgCdFWhUXaQw2MAblfAgyezqyWHNLsNHIKJ3OSxXiI2zNPH3jIxHdukl4jMk0USlfHLNY0O1Drhbipz%2BFpBjypcQMpza%2FlAWBLCXSoF7OBLm42mbKv8%2FwO6kVzltRo%2FdxxqQgdDNyr8UA5lAMOaA6LwGOqUBqGEOnNFPKAKn5YI9JsMZxgPbxFaSGHJApXWZK2LDKah7EUp4BSMw8ia9eau4U2f6Coeh74jY34OhDPa5tYpXhbQ7rexuxTIv5PE02PfCSJ%2FW436pgZQg0yeT9PdQwlp8L3JTN79mi3EdOMlSCuzImqvnjqJ2t2sJJoBfvLGCaZITeAFizvJA1DM5dCHD91NL381ObNP2Jngs63KOVzmwwURS67fm&X-Amz-Signature=fd459d8d0eb62986c460962ae53460a95d3a098f12a9860efe606689c26127d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ2MNXE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPnLi%2FRvOV0SxrJQRXmex28eW0gygOs4wjDscI31LbeAiEAtv8wYJiDHHBtbzOMokz%2FYQFseeMVivToC%2FpN472bhXgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBelynzl1%2F0gQqK2CrcAwtlIqGcJEaGg4Xe9Q454%2FpD8KuTPB7NeWy9PKBWzhvWtePeYphKcEMc3H0OZXHE8%2FPOeizeIHKmCT1VyQ4bYNVi%2FhdyGtd2MPx30AbzmtE%2BQFhU1aTKSnoGihTSCCDSwuPzImNSKPbYqfRYlnjvPo3c94faFOlUaw%2FbnbYVVWarGBdUuyVeZiGWI9psCA%2B5dtv69W8QSqa05T73SKjKgQIJZfzEfa21nl%2ByVLUXNPjDUXptNs22U7CF3Nz4Z01DMj2pfpoXr2S8YCIjy96zYnDu54GRVyoj4LF%2BsOPxxzJCM4uNNmO%2Bv3f6Q1LuKJUuhmnsoe7wFHDB5itaAm4WCu6ZcLorbWhHQaPEiQJI8ZF61bMCcaFZR8%2BE2qsZCj9IquIv8rT9O4rMe0kb5btUf831LwzzhBbJmhPbz6WMzZmWKhGR2HiSPtSmG0stCbK1b9wsGioFstmcjEq4L5OemUPJUFh8UehGAMlpjkXe59QVdgCdFWhUXaQw2MAblfAgyezqyWHNLsNHIKJ3OSxXiI2zNPH3jIxHdukl4jMk0USlfHLNY0O1Drhbipz%2BFpBjypcQMpza%2FlAWBLCXSoF7OBLm42mbKv8%2FwO6kVzltRo%2FdxxqQgdDNyr8UA5lAMOaA6LwGOqUBqGEOnNFPKAKn5YI9JsMZxgPbxFaSGHJApXWZK2LDKah7EUp4BSMw8ia9eau4U2f6Coeh74jY34OhDPa5tYpXhbQ7rexuxTIv5PE02PfCSJ%2FW436pgZQg0yeT9PdQwlp8L3JTN79mi3EdOMlSCuzImqvnjqJ2t2sJJoBfvLGCaZITeAFizvJA1DM5dCHD91NL381ObNP2Jngs63KOVzmwwURS67fm&X-Amz-Signature=f2715084e8ad248e3de47a8298790ecb4f871e5194a05421bd43e85b6a41f8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
