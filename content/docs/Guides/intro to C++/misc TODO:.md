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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJWOTJR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCID25tnx1b8a5hsaGv7OXxBjk4cXJELziT6lYxJmbG7UZAiAVlXYDeiDoQmultmK%2Bzv%2BK90DeyI7VMupMPxlRw1n0HiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXppQI7gP7z7DbuWwKtwDd7DNZeJm4qtz75ho8%2FNn5WqiTeLU3bVU3AfO3KrUPP4QSLtiO2g4YqBBM9VtsJHHuA%2By0JTaiuVCpoR%2B01%2FIvMYTcvMGTuFpKjVQlJrstA4FMaUiUBvnQh672H1Wt7eUZcs01K2sbn2k5oHGUNpYxErkV3NBzq%2FXZhUa%2Bb6h4Zv%2Fjhc%2FKwibY3yGocgUbC3WuSijY1Qn2mIH700CbioHXGDquYtfKvqCFALItFiCid1m%2BLMIgUdjh7x7476P5n4jJhZ9U6zrAJNuG47HSTu1oSN6SPBOWXOU0Mkt7s%2BI476sOIgRNIVLnlqcfrJBwLsmFnaY64D%2Bbk7YpRlOvqLhq557hof6Xbgzn%2Fncdbo1h8d0uGH8FbubQ5kCeUo%2BLLONMv%2BPJ%2Fe4INQu86sC%2FP7fqYXey%2FY%2F2Xv3F6vlAI73uSsIJWk5KwGd8svM0EfUhT26LfuEEWAnCe7Hl8YkGMciJ8AJF7layE%2BPhZXZDDRpUJBCBYTHDkqkssmk3TFj7VAci0i8eJuUFRosbNa4cbNjzjYly8XacWDKjawloiADB166hFVAc9s04MDiXWiRKr%2F50UeFYgzheCHxZlGe0h988XCsPx9o99Vjz09OSb%2Bt%2BZGSiYIv1bMR21KFXSIwv8O0vwY6pgGVvhxeuU0m%2FFZHuf%2Ff47ccNuB%2BXnhssK7aY8j8TxtoTXJWyfhOcexI6y3Uko6syRlVxaZKEPiFvPCy0Kb5gSKjjtKsgaPky8roISG2HEpbQp7VGH03vhteY5O4wOxjqhdmlomyChWSJIXQ95lOTQWOW%2BjvpotdAzRDuiKoIyTIO8rMAD4ZGaUIx7xLDtCAJMXqWOR0pao8vq%2BMgPCKkvmP6iJEzcNm&X-Amz-Signature=6d80e173f1e27a6e813a3079781cc44e511589f3236564ed2edc1c94ac0d2f15&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJWOTJR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCID25tnx1b8a5hsaGv7OXxBjk4cXJELziT6lYxJmbG7UZAiAVlXYDeiDoQmultmK%2Bzv%2BK90DeyI7VMupMPxlRw1n0HiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXppQI7gP7z7DbuWwKtwDd7DNZeJm4qtz75ho8%2FNn5WqiTeLU3bVU3AfO3KrUPP4QSLtiO2g4YqBBM9VtsJHHuA%2By0JTaiuVCpoR%2B01%2FIvMYTcvMGTuFpKjVQlJrstA4FMaUiUBvnQh672H1Wt7eUZcs01K2sbn2k5oHGUNpYxErkV3NBzq%2FXZhUa%2Bb6h4Zv%2Fjhc%2FKwibY3yGocgUbC3WuSijY1Qn2mIH700CbioHXGDquYtfKvqCFALItFiCid1m%2BLMIgUdjh7x7476P5n4jJhZ9U6zrAJNuG47HSTu1oSN6SPBOWXOU0Mkt7s%2BI476sOIgRNIVLnlqcfrJBwLsmFnaY64D%2Bbk7YpRlOvqLhq557hof6Xbgzn%2Fncdbo1h8d0uGH8FbubQ5kCeUo%2BLLONMv%2BPJ%2Fe4INQu86sC%2FP7fqYXey%2FY%2F2Xv3F6vlAI73uSsIJWk5KwGd8svM0EfUhT26LfuEEWAnCe7Hl8YkGMciJ8AJF7layE%2BPhZXZDDRpUJBCBYTHDkqkssmk3TFj7VAci0i8eJuUFRosbNa4cbNjzjYly8XacWDKjawloiADB166hFVAc9s04MDiXWiRKr%2F50UeFYgzheCHxZlGe0h988XCsPx9o99Vjz09OSb%2Bt%2BZGSiYIv1bMR21KFXSIwv8O0vwY6pgGVvhxeuU0m%2FFZHuf%2Ff47ccNuB%2BXnhssK7aY8j8TxtoTXJWyfhOcexI6y3Uko6syRlVxaZKEPiFvPCy0Kb5gSKjjtKsgaPky8roISG2HEpbQp7VGH03vhteY5O4wOxjqhdmlomyChWSJIXQ95lOTQWOW%2BjvpotdAzRDuiKoIyTIO8rMAD4ZGaUIx7xLDtCAJMXqWOR0pao8vq%2BMgPCKkvmP6iJEzcNm&X-Amz-Signature=52304dfd72b87563660cffc0c19e009c2f8832d1ba90db10958ac4ac370ea26a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
