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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWQSDVK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4AUJhw9CLayLGGGPOA86rKPn39r%2FR8f0IKB5yYAM5OAiAJWlsfM7tEr65HeUbzOLL6qRq5YFLc595D3vtKUoWqfir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMIIly5daCLgDg%2F%2BA5KtwDopZ8Nj03scyG%2F8perZGMkNW2%2BIyDyOWhA6eNGyBYJswBxKEEFQwpAT%2FaByODXaacqbaz5blCSGWPuS38n7qeTxWywLkfzIKDmdWIaLuV4bvw7MAuDTpAICxoiL2XeWsMLNnkOo25jPoxNJuF20Gg6e441NPsMgk%2FvaFl4CoWJBMX6iw7%2F0njGaqEvki4x2BeTriRBhauWL5XNYhv2TBtq9wuij3W5POnRocOoadOJlvxuu9STP1NEZH58fPaKGHAB%2FoktPt5VtSpH%2BEn5TuecXoYKHzAwpJkz7%2BavL7cdmCwRGhb0GFXq%2BsF3wKG6E5XDfaX9tOutJ9GFG8%2BUpTNdoVU7yAwSZFmydRo3KLFLNHEIlD8DaaFZELZDbrXJPhsKynGaG2LBwqpQ%2FtmJbbZvvXn9N9rLvLRqfzAvMuhXZLaM8g76XFd0M5CeEmlSdFBO4ATubS9aUM5CpPZFvcZ8MgWlnWH%2FFvwxDeweymfecSIAxvYxmdoivDk6jL%2B%2BUDw6xnnaLjjdVTpjh%2FNdqC70RY9oODPMWgzuFmqil6i2Xp8ibxKictmgLuVYnMpC4hb3IOg7%2BXNmYhdn%2Bi%2FxU9w%2FiYrYB%2Fn5F0M1YHLhIl2CybSSWg4Ts5R%2FxJUE%2FowmrHswAY6pgGjj3ZgiZ5%2BNdMSgylOrfJ5Tv%2Fiufcm2N2ZwadZw21Nytu6PV88Ug6xEmbtkUgn3gLyvZAt8yrrjgCLBCZ%2FG27zeWkJ4T03FRYnOywGAfGLsAxAzuDmDJWqIP8vcRegdKtGXtm8ELLUYtSgBmdpxU1PnonMzw2sXzMUsI%2FdoeICwizo%2BsTg6srQ8JC9GB3c8oL8oAZVlYqYal6WXjg9mDlDZJMska6d&X-Amz-Signature=ffde227a8c86cc69c0386a6a207020cfebb4ef4ca3d0b8fc317efa2446748eea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWQSDVK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4AUJhw9CLayLGGGPOA86rKPn39r%2FR8f0IKB5yYAM5OAiAJWlsfM7tEr65HeUbzOLL6qRq5YFLc595D3vtKUoWqfir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMIIly5daCLgDg%2F%2BA5KtwDopZ8Nj03scyG%2F8perZGMkNW2%2BIyDyOWhA6eNGyBYJswBxKEEFQwpAT%2FaByODXaacqbaz5blCSGWPuS38n7qeTxWywLkfzIKDmdWIaLuV4bvw7MAuDTpAICxoiL2XeWsMLNnkOo25jPoxNJuF20Gg6e441NPsMgk%2FvaFl4CoWJBMX6iw7%2F0njGaqEvki4x2BeTriRBhauWL5XNYhv2TBtq9wuij3W5POnRocOoadOJlvxuu9STP1NEZH58fPaKGHAB%2FoktPt5VtSpH%2BEn5TuecXoYKHzAwpJkz7%2BavL7cdmCwRGhb0GFXq%2BsF3wKG6E5XDfaX9tOutJ9GFG8%2BUpTNdoVU7yAwSZFmydRo3KLFLNHEIlD8DaaFZELZDbrXJPhsKynGaG2LBwqpQ%2FtmJbbZvvXn9N9rLvLRqfzAvMuhXZLaM8g76XFd0M5CeEmlSdFBO4ATubS9aUM5CpPZFvcZ8MgWlnWH%2FFvwxDeweymfecSIAxvYxmdoivDk6jL%2B%2BUDw6xnnaLjjdVTpjh%2FNdqC70RY9oODPMWgzuFmqil6i2Xp8ibxKictmgLuVYnMpC4hb3IOg7%2BXNmYhdn%2Bi%2FxU9w%2FiYrYB%2Fn5F0M1YHLhIl2CybSSWg4Ts5R%2FxJUE%2FowmrHswAY6pgGjj3ZgiZ5%2BNdMSgylOrfJ5Tv%2Fiufcm2N2ZwadZw21Nytu6PV88Ug6xEmbtkUgn3gLyvZAt8yrrjgCLBCZ%2FG27zeWkJ4T03FRYnOywGAfGLsAxAzuDmDJWqIP8vcRegdKtGXtm8ELLUYtSgBmdpxU1PnonMzw2sXzMUsI%2FdoeICwizo%2BsTg6srQ8JC9GB3c8oL8oAZVlYqYal6WXjg9mDlDZJMska6d&X-Amz-Signature=d1cae03733e3deb278548a5c23983bd21b1263c5a668093776e303bcebc928d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
