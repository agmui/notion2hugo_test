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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZMLYGX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFDNF8qx0M7K8eQtp3Iz6I%2BWPLNtrtEf28o5xV0LapaKAiAnNyJhToa%2BIDA6jlQbgFIPpVNHgI1j6qrQo6Ip7fYJ5ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3%2BvKnMu3TRTxX3hzKtwDTN2f%2F4WdzkxmMbprIwPGkaioLytHVseZ6orN0rL0uaHfnNxKVrdGGcI%2BNvT4MyzHK%2BSuXYCqPIFZgjyhbuW4pZqgpm%2BMVtSYvOuC4qLvLNbTuDc6N6vVUIPhJ7s47BHUIXHYYVyBCUc%2B3A3PSFAi3doDxs84B7FK%2Fn4mHTEMiITCzOpVvf1ywKMO3qX8gPcdvne%2FR6Rr3Sko%2BbJk%2FzXKqlkeQeYLwC1X%2F%2FXRGXngqOYOqPTQG6U%2FilbqkNjYgi5JfzqIbs1DjosB4NAksY4%2By%2BjWwahVt5Ud04jqPpq0%2FjphPheE0zY3HYh68Dh1IvqSndDeQuroRsKnF%2FuSK%2F4zbd8zs2sZ5WbMZuM2Egc6faNDA8Gv4Ip06q1UiDqK59u%2B%2FNPi1Z23wJ5s6UJVxI6Y7UkCIOl2nutTWDcWneNMoM1NTCkMQVQVtdymz5kMsWDRIHZAMViAD17O5JRGWne0Srkyo42GzwEpWloW40pa%2BYsrOZnsC5Vtt1LqC4IHgmXMxqf%2FiLlWtKaaiQ2lsrhPu1i5saq1kxbO%2Fw74MCVb8O1UEe5lhsIrhy4n55GbpZlhqEBdaAh2uJmspEUtvH17DNodqR%2BjMSYZyHriVl0rrD56ck3HDK7aThKe83cwqMvLxAY6pgFpDbekK81zCOfWs7tA28BruK7ZKnNMra%2BdtYOfRLsGBQsbiQw1bopusYW8hkejrqFOaZ4QocEgCjPfoL3qj1ie94aeKIbYD4DqI722sy4QzegupItFdG4ch3NZdI0gxtf%2F4DZVtnbtUx7%2BNZjr4%2FWez%2Fk1Jj2FOpLl6rBDDBEnbWRsm9zbcsB1J05fwHK3eQuFV3N3JwNWkZvnxr%2BSqtY83gubyzvq&X-Amz-Signature=5abb2b3f9116cc60d19bf46a213c86e208789df0e675b3384e96ebaeb6d550a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZMLYGX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFDNF8qx0M7K8eQtp3Iz6I%2BWPLNtrtEf28o5xV0LapaKAiAnNyJhToa%2BIDA6jlQbgFIPpVNHgI1j6qrQo6Ip7fYJ5ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3%2BvKnMu3TRTxX3hzKtwDTN2f%2F4WdzkxmMbprIwPGkaioLytHVseZ6orN0rL0uaHfnNxKVrdGGcI%2BNvT4MyzHK%2BSuXYCqPIFZgjyhbuW4pZqgpm%2BMVtSYvOuC4qLvLNbTuDc6N6vVUIPhJ7s47BHUIXHYYVyBCUc%2B3A3PSFAi3doDxs84B7FK%2Fn4mHTEMiITCzOpVvf1ywKMO3qX8gPcdvne%2FR6Rr3Sko%2BbJk%2FzXKqlkeQeYLwC1X%2F%2FXRGXngqOYOqPTQG6U%2FilbqkNjYgi5JfzqIbs1DjosB4NAksY4%2By%2BjWwahVt5Ud04jqPpq0%2FjphPheE0zY3HYh68Dh1IvqSndDeQuroRsKnF%2FuSK%2F4zbd8zs2sZ5WbMZuM2Egc6faNDA8Gv4Ip06q1UiDqK59u%2B%2FNPi1Z23wJ5s6UJVxI6Y7UkCIOl2nutTWDcWneNMoM1NTCkMQVQVtdymz5kMsWDRIHZAMViAD17O5JRGWne0Srkyo42GzwEpWloW40pa%2BYsrOZnsC5Vtt1LqC4IHgmXMxqf%2FiLlWtKaaiQ2lsrhPu1i5saq1kxbO%2Fw74MCVb8O1UEe5lhsIrhy4n55GbpZlhqEBdaAh2uJmspEUtvH17DNodqR%2BjMSYZyHriVl0rrD56ck3HDK7aThKe83cwqMvLxAY6pgFpDbekK81zCOfWs7tA28BruK7ZKnNMra%2BdtYOfRLsGBQsbiQw1bopusYW8hkejrqFOaZ4QocEgCjPfoL3qj1ie94aeKIbYD4DqI722sy4QzegupItFdG4ch3NZdI0gxtf%2F4DZVtnbtUx7%2BNZjr4%2FWez%2Fk1Jj2FOpLl6rBDDBEnbWRsm9zbcsB1J05fwHK3eQuFV3N3JwNWkZvnxr%2BSqtY83gubyzvq&X-Amz-Signature=d809e47e6c4733ffe2dee413aa05cd9646bf7a1979ccb0f98595708842668e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
