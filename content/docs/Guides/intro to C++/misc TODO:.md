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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNB24KX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE2ZmAbswsOCl%2FxnsXBMFw5IX6i3nd9%2FwN1lXGXaTq%2FBAiEAneG7%2FTJ6EJOOuClpEgS1%2FKqsunTXtvwesJPAgJqhx%2BYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCDjglFRyfqRmMkNaircA4%2F6%2BdVWsM9HCc4BF99MkQIa4czG0eQwvNJuXtuxpTBpY2JU%2FJueG79yyvF%2FZjujsIg2YPg%2FD%2BMf%2BJY7aO9mgaQCSQdN8UkE%2FFLf4MewOHnJeEwcSZ7iVjMHNzaIA3Qn7694mmgMIasbapA8q9clFHqP%2BliYJXtlv0EY%2BhpBWu3zXukA3JtewHY3GaRwyJbIWSUYZBJH9KNyrMK4B7H7o9YEQit4QSU2TPD%2B4pE%2FUL7hk%2FVxNlxcXKIHdPqrkFDtAUbFN80z%2BLeFpoDoXf0Z5BNcrd%2Fv7XlEX%2BBTWjMeanFDdqQKJocTGGWoBX3%2FJWqYDn3aE8h0q8hhXqwWs4P2pjnoO%2FVE13AF8u7jM%2F95C2Oosqj4J8sQcUivnmqYtv5gEct%2BhbbYLxwfpHNDYjpxD7ZCU%2F5qyf7IyR3t16VPx0opLLxnE1IGvUjgpDidHnehA8C4VEXCqLT0%2FpLhmtWKaY%2Fw01BNUzWgF%2FHGszLz7tb3oQO9FcCN7aJ85tL%2BEIKZwP8bRMTawlZZpE%2BpKrbkTk1PdsyxB0ndcFhU7RTPDLLxEqmrpXquEu4KLWNchYjosZ4j6mW5W%2Bw9Zu9Um68mfoUXWqy9qAS6PCoI4357jplz2eK%2BpyF3Ucli%2B6eAMKP%2BvcIGOqUBxDo1eZBXE7hA2DWklxE82KOgkD4k3kKI55dgdMSLTclpgmedqNxUstzynnZVd%2Bt2EGxvrzgi4I%2F36cBDII3B6vU6Dsa1JV1%2F02lI7Et9OoujCodHpbBIr1AJ8ETANbr3oh3dkLfliDBmjoQzKdPTtPGEsHualdBhLFOEA63kmGOZpcej7BVIpsKhFDd7oxx7uo3QOimP4J4KXPyAtWDMZA%2B%2BvoLx&X-Amz-Signature=eba00b67f74dfa88a2e1328456278d242f1b0d9ff1e6c1c2d81326368b00158a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNB24KX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE2ZmAbswsOCl%2FxnsXBMFw5IX6i3nd9%2FwN1lXGXaTq%2FBAiEAneG7%2FTJ6EJOOuClpEgS1%2FKqsunTXtvwesJPAgJqhx%2BYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCDjglFRyfqRmMkNaircA4%2F6%2BdVWsM9HCc4BF99MkQIa4czG0eQwvNJuXtuxpTBpY2JU%2FJueG79yyvF%2FZjujsIg2YPg%2FD%2BMf%2BJY7aO9mgaQCSQdN8UkE%2FFLf4MewOHnJeEwcSZ7iVjMHNzaIA3Qn7694mmgMIasbapA8q9clFHqP%2BliYJXtlv0EY%2BhpBWu3zXukA3JtewHY3GaRwyJbIWSUYZBJH9KNyrMK4B7H7o9YEQit4QSU2TPD%2B4pE%2FUL7hk%2FVxNlxcXKIHdPqrkFDtAUbFN80z%2BLeFpoDoXf0Z5BNcrd%2Fv7XlEX%2BBTWjMeanFDdqQKJocTGGWoBX3%2FJWqYDn3aE8h0q8hhXqwWs4P2pjnoO%2FVE13AF8u7jM%2F95C2Oosqj4J8sQcUivnmqYtv5gEct%2BhbbYLxwfpHNDYjpxD7ZCU%2F5qyf7IyR3t16VPx0opLLxnE1IGvUjgpDidHnehA8C4VEXCqLT0%2FpLhmtWKaY%2Fw01BNUzWgF%2FHGszLz7tb3oQO9FcCN7aJ85tL%2BEIKZwP8bRMTawlZZpE%2BpKrbkTk1PdsyxB0ndcFhU7RTPDLLxEqmrpXquEu4KLWNchYjosZ4j6mW5W%2Bw9Zu9Um68mfoUXWqy9qAS6PCoI4357jplz2eK%2BpyF3Ucli%2B6eAMKP%2BvcIGOqUBxDo1eZBXE7hA2DWklxE82KOgkD4k3kKI55dgdMSLTclpgmedqNxUstzynnZVd%2Bt2EGxvrzgi4I%2F36cBDII3B6vU6Dsa1JV1%2F02lI7Et9OoujCodHpbBIr1AJ8ETANbr3oh3dkLfliDBmjoQzKdPTtPGEsHualdBhLFOEA63kmGOZpcej7BVIpsKhFDd7oxx7uo3QOimP4J4KXPyAtWDMZA%2B%2BvoLx&X-Amz-Signature=7f78654c6a6ed5a28921f7a5a7fba30be41b4d75712427bdfb59391836a32640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
