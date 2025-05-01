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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PJ56FT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIENQ88kKgVZTilsSFC0vbIPD9AIsZKzMnfoGwiE1PBzcAiBC9pgly3ijUzfBOrhkBo0pETUdQzLN9n1bTqvD328PLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM717IrKiIX9IrzhesKtwD0vEGOpWtR4IE6qcTBqJymrYYjU%2B%2FXbxDces23cdIZj4KVujCiUVFV11iNpJy3HNq6mLScb0UNw8iqCnRhO3SdZ9mtMm4eF0T0Et%2BAOM4%2B2RdZjCau5oa5%2F03UmnbRtGw9pgb25WKZTMGO1hm9iMuiF%2FKz9jlV4aM9GixzuFd3GGcfp2D%2FGsVyJusViywNU2diwYy%2Br6cbqFsDlMnDpWjMXKWwUY5%2Btz7D0yIk%2BAfcdkrQN%2FHgoaMru0KUVJJ2ihTS%2BruSY%2BSSPxrdZlhfsI%2Be98qEUEKqeyVoXRQYFRV3xburJXi93BX6tMtvY8vBoCoCG06PeQ34wWzQTl6wUDIp9u57hyUEvr2vfZ8FVG55jPswIaDoqE%2BlQkBX3zakhV9Q%2BADuWjH%2BcJkuRdbMla1gCzaQdQwGVEHS3izQMoibxnsmaWAKBYXVJD%2BlYnZUWBWmNehMw8%2FKxAJu67%2B8%2FLmJoLNkWhU3MuYWNuy0kv%2BtC14uPZ3ci9qwGDH3BDJm5GaeZ25YHgZ3mHppku%2BuEFgZK%2B%2FRgfCSaENEMQWFZ8vlk%2BgqDR%2F5RvdK%2FyzsDQEtHRTrP1Y%2BVyuVmT5xft7IiEsqR7CO3ir%2FPIKMCMLV05QB52UUBUuVPLzqD4dEHEw6MjNwAY6pgGNQCqnIPgEYOWX61P1yLs%2Bh3mP6kmMns7yZJdfUzCctI3epJVrJ%2F0RsdCTFHa8qg%2FvuUASctExfa9qEHRVtCnCck%2BUH7QTUi4r9v1ObDy7AdNa1sxt%2BKfcgnxzEXBua7cH%2B8eUR1%2FE6Z84e8Z0vxhBpm5w%2F1cRnyUsPkJ6w%2FCQGYBqw33LpTebiCE2vAgmr9RogXKGfN6lLaiqJiaxhYJAKzkm%2BAJY&X-Amz-Signature=2622326be8fefef28eea6fceac2948744d7401dd48d5d0a78a296a832fc7899b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PJ56FT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIENQ88kKgVZTilsSFC0vbIPD9AIsZKzMnfoGwiE1PBzcAiBC9pgly3ijUzfBOrhkBo0pETUdQzLN9n1bTqvD328PLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM717IrKiIX9IrzhesKtwD0vEGOpWtR4IE6qcTBqJymrYYjU%2B%2FXbxDces23cdIZj4KVujCiUVFV11iNpJy3HNq6mLScb0UNw8iqCnRhO3SdZ9mtMm4eF0T0Et%2BAOM4%2B2RdZjCau5oa5%2F03UmnbRtGw9pgb25WKZTMGO1hm9iMuiF%2FKz9jlV4aM9GixzuFd3GGcfp2D%2FGsVyJusViywNU2diwYy%2Br6cbqFsDlMnDpWjMXKWwUY5%2Btz7D0yIk%2BAfcdkrQN%2FHgoaMru0KUVJJ2ihTS%2BruSY%2BSSPxrdZlhfsI%2Be98qEUEKqeyVoXRQYFRV3xburJXi93BX6tMtvY8vBoCoCG06PeQ34wWzQTl6wUDIp9u57hyUEvr2vfZ8FVG55jPswIaDoqE%2BlQkBX3zakhV9Q%2BADuWjH%2BcJkuRdbMla1gCzaQdQwGVEHS3izQMoibxnsmaWAKBYXVJD%2BlYnZUWBWmNehMw8%2FKxAJu67%2B8%2FLmJoLNkWhU3MuYWNuy0kv%2BtC14uPZ3ci9qwGDH3BDJm5GaeZ25YHgZ3mHppku%2BuEFgZK%2B%2FRgfCSaENEMQWFZ8vlk%2BgqDR%2F5RvdK%2FyzsDQEtHRTrP1Y%2BVyuVmT5xft7IiEsqR7CO3ir%2FPIKMCMLV05QB52UUBUuVPLzqD4dEHEw6MjNwAY6pgGNQCqnIPgEYOWX61P1yLs%2Bh3mP6kmMns7yZJdfUzCctI3epJVrJ%2F0RsdCTFHa8qg%2FvuUASctExfa9qEHRVtCnCck%2BUH7QTUi4r9v1ObDy7AdNa1sxt%2BKfcgnxzEXBua7cH%2B8eUR1%2FE6Z84e8Z0vxhBpm5w%2F1cRnyUsPkJ6w%2FCQGYBqw33LpTebiCE2vAgmr9RogXKGfN6lLaiqJiaxhYJAKzkm%2BAJY&X-Amz-Signature=cbaebe41d4f8a02737534b1fb0fdff6b57212ea72eb3bf2f1a154451b5cce871&X-Amz-SignedHeaders=host&x-id=GetObject)

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
