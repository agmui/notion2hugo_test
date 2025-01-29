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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEI7UYFZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF07XxcmKa%2BdgpFP393bmwC86bI1YtO%2BEUl0eBfNBHXKAiEAt6h%2BvsGiNRuBk6fSzfLBQsXL1hYNWmY0EIqmNtkxRlEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6WbOiaryUh8gI%2F4ircAyA8yLlrh9RTbITck4MdvX9%2FrEU%2FeLqQxclRTkMl5pXMOY4S%2Bv7IgC8ZaxObV0nhd2SuI7N4xe1HcbENYnEJvy2bG6AykZv3FoI%2FhAn7uM1loxKXZKUh5ZfR8qnDd8u6Pn3SNvtqlqkJjiN0yTm1I8HzN4lPdd5WQ8y%2Fx5OKkFfa1kQfEMHTTF6bZ15Ge1Nj4au0Hzl9l8f2tGXY53X4t%2F48L4vpa4XFBATS1bKmbAbHwozFN%2FnnrRcO83zz0WMGdf2t%2BxEKFfvVneKpaWfOogNPFpDrk6%2B%2B02u7uGzMMaLLkqh%2BfVsQqjvqNB0r1ooiuWLc56bvpctlC9J3y0r%2FPdLUXu4UA9AemqQ4NEn22jyoQsrfarC8%2ByZAct3CCPofsCJc6dZEi6Zx42Wzjxj5iND1Us0q0a%2BnRcbrvN4vIls0UE8Ne5S5jMV7JgT6ThX9Y8iTEwjve%2BDcikQTqwTcbgy6VQjPH4sO7KE292vc5XiKSyaa6a%2FQ3Z%2BIU46qnqXpHLHOS2DaOr435UY3%2FgFt9yAhP5xBTTm4FyvqpSEpPPz0pRpiyyJ4P5s7%2BBVwmlN8U5rMYYpW%2B9utTs936YArYK0n2ZWREI0aDjU1FZwJmcc%2BLuv2%2FVPdEPKw51f9MM%2BF6bwGOqUBWpcTf7SphvpPLtzMQ%2F9WCH3e16mQqecNfNzl7JzH1mdp%2BrKrDhoRR6tuYQqhrYda%2Fnq5Q2A3sBRRb1gzpSdTf44gqTGcYz9m1xMSoIgE%2BYMhHBKcc18Zvxo%2FjZW5Oq0kEGNGj5O5yzpg5B2Y2g3XkNxV1VZhmPxyDWYZQ0kTBrhHIx5x8SCUOdCqmJ4QGUL%2F6lRpJjLjepiC%2BJ%2FiIPUSgARvi10L&X-Amz-Signature=748e668f6007829559b3b7b8851e5ab7bfaf1bb43114eebe3fa23bb9393c3946&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEI7UYFZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF07XxcmKa%2BdgpFP393bmwC86bI1YtO%2BEUl0eBfNBHXKAiEAt6h%2BvsGiNRuBk6fSzfLBQsXL1hYNWmY0EIqmNtkxRlEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6WbOiaryUh8gI%2F4ircAyA8yLlrh9RTbITck4MdvX9%2FrEU%2FeLqQxclRTkMl5pXMOY4S%2Bv7IgC8ZaxObV0nhd2SuI7N4xe1HcbENYnEJvy2bG6AykZv3FoI%2FhAn7uM1loxKXZKUh5ZfR8qnDd8u6Pn3SNvtqlqkJjiN0yTm1I8HzN4lPdd5WQ8y%2Fx5OKkFfa1kQfEMHTTF6bZ15Ge1Nj4au0Hzl9l8f2tGXY53X4t%2F48L4vpa4XFBATS1bKmbAbHwozFN%2FnnrRcO83zz0WMGdf2t%2BxEKFfvVneKpaWfOogNPFpDrk6%2B%2B02u7uGzMMaLLkqh%2BfVsQqjvqNB0r1ooiuWLc56bvpctlC9J3y0r%2FPdLUXu4UA9AemqQ4NEn22jyoQsrfarC8%2ByZAct3CCPofsCJc6dZEi6Zx42Wzjxj5iND1Us0q0a%2BnRcbrvN4vIls0UE8Ne5S5jMV7JgT6ThX9Y8iTEwjve%2BDcikQTqwTcbgy6VQjPH4sO7KE292vc5XiKSyaa6a%2FQ3Z%2BIU46qnqXpHLHOS2DaOr435UY3%2FgFt9yAhP5xBTTm4FyvqpSEpPPz0pRpiyyJ4P5s7%2BBVwmlN8U5rMYYpW%2B9utTs936YArYK0n2ZWREI0aDjU1FZwJmcc%2BLuv2%2FVPdEPKw51f9MM%2BF6bwGOqUBWpcTf7SphvpPLtzMQ%2F9WCH3e16mQqecNfNzl7JzH1mdp%2BrKrDhoRR6tuYQqhrYda%2Fnq5Q2A3sBRRb1gzpSdTf44gqTGcYz9m1xMSoIgE%2BYMhHBKcc18Zvxo%2FjZW5Oq0kEGNGj5O5yzpg5B2Y2g3XkNxV1VZhmPxyDWYZQ0kTBrhHIx5x8SCUOdCqmJ4QGUL%2F6lRpJjLjepiC%2BJ%2FiIPUSgARvi10L&X-Amz-Signature=b4c084b233b4731211d4aed8d5ff88342357d001dd24642590dfb3c11dc61fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
