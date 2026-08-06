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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7PN7ZBO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDPA%2FNi6ZuWVap7BjGMoJ6qWoiLpt4gm248qCH5hk2%2BogIhAK1nkfdQwecpzUogsDJbjZYFJyxn5D1q6rTnGcPxYl5IKv8DCDMQABoMNjM3NDIzMTgzODA1IgyJ0kJ7xCplfXck3JAq3ANInuSFy9E%2FbXoels3zCmTHkJ0zvyW3Fg1M15kQpeW0ca4hRhFcJuq7O7%2BOunibPtdy%2BpvhLUaUJPgKr5OvZ3Kevs8%2BeSabY9wk6DHnFIRJRFUMMAS7jhpc3LUbD0OrbbeJzps1645%2BXhA2MKfpihS8OJlOR8gS9QJ38lOhpv6OBNLLk2eUqPzUfx61rm6ypM%2Bt6BnA%2F2YkFvEXDDPQFWVkM%2BpBLZE%2B7Pq7tEYTJKqs3NRWRn5vDZCvN7G7Vw93o0ryLknfVoNWKiEmPOHwl5SHfO%2BVZ70ZirvqPo3oXFaHDcSbjH7PPeIZ32vQzjVailj6R3F4Gk%2FYZnUzIumnWYL4aEoT%2Bhzl8FLriZ1vDjX408CnhAd3KsDfCIEvaKMNPFwG%2BAySjs5y%2Bj9Q9ONzoJHgKN3cv0ScZ8o%2FcH5lCVwPIdmnP%2FJxfHLY0WqbxJZ4JZa12qGnNUz5aYeboSNKLpBAofF%2FC0cHBlsvimCoYhNK6yPQo11MqZeiafoH5Bpeny0BCpyC2L6WVXcb14D5UthR6LbDJkiQ%2B0Cqjg0Y%2BzFBB1zRWdw%2BuA4zHvlFvt5%2BNe9WSHWNBHK%2BlyGsuWMGQpRhUXAnpZZG3ZLka2m5%2Bc%2B6%2F%2FK1RRaWWbRMrP68dTCx1M%2FTBjqkAQZZyQeDFZhbVZdPPnseU7Jo%2FOy730ygDOAk28QdCjEcOXcPfh33s%2BTcFUe3QWT3eiLxHV%2B%2BHeAmWTua1hnty2W4MGvdAmvufbZ1y8zNtWmqMVguiLQL9A1yWJnUjKpngVq%2BOF6xSp6Iryd7keJmugeuOGR2DTZK5xX2Z9UEDRaNPPxhUl6YFnHMz66NiIgh9PB378oly2grM2B4THOz01ddrJCS&X-Amz-Signature=a3481f8963f03008d3db3ff7d74afebe129a872e84879c87ab682d4c4067e3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7PN7ZBO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDPA%2FNi6ZuWVap7BjGMoJ6qWoiLpt4gm248qCH5hk2%2BogIhAK1nkfdQwecpzUogsDJbjZYFJyxn5D1q6rTnGcPxYl5IKv8DCDMQABoMNjM3NDIzMTgzODA1IgyJ0kJ7xCplfXck3JAq3ANInuSFy9E%2FbXoels3zCmTHkJ0zvyW3Fg1M15kQpeW0ca4hRhFcJuq7O7%2BOunibPtdy%2BpvhLUaUJPgKr5OvZ3Kevs8%2BeSabY9wk6DHnFIRJRFUMMAS7jhpc3LUbD0OrbbeJzps1645%2BXhA2MKfpihS8OJlOR8gS9QJ38lOhpv6OBNLLk2eUqPzUfx61rm6ypM%2Bt6BnA%2F2YkFvEXDDPQFWVkM%2BpBLZE%2B7Pq7tEYTJKqs3NRWRn5vDZCvN7G7Vw93o0ryLknfVoNWKiEmPOHwl5SHfO%2BVZ70ZirvqPo3oXFaHDcSbjH7PPeIZ32vQzjVailj6R3F4Gk%2FYZnUzIumnWYL4aEoT%2Bhzl8FLriZ1vDjX408CnhAd3KsDfCIEvaKMNPFwG%2BAySjs5y%2Bj9Q9ONzoJHgKN3cv0ScZ8o%2FcH5lCVwPIdmnP%2FJxfHLY0WqbxJZ4JZa12qGnNUz5aYeboSNKLpBAofF%2FC0cHBlsvimCoYhNK6yPQo11MqZeiafoH5Bpeny0BCpyC2L6WVXcb14D5UthR6LbDJkiQ%2B0Cqjg0Y%2BzFBB1zRWdw%2BuA4zHvlFvt5%2BNe9WSHWNBHK%2BlyGsuWMGQpRhUXAnpZZG3ZLka2m5%2Bc%2B6%2F%2FK1RRaWWbRMrP68dTCx1M%2FTBjqkAQZZyQeDFZhbVZdPPnseU7Jo%2FOy730ygDOAk28QdCjEcOXcPfh33s%2BTcFUe3QWT3eiLxHV%2B%2BHeAmWTua1hnty2W4MGvdAmvufbZ1y8zNtWmqMVguiLQL9A1yWJnUjKpngVq%2BOF6xSp6Iryd7keJmugeuOGR2DTZK5xX2Z9UEDRaNPPxhUl6YFnHMz66NiIgh9PB378oly2grM2B4THOz01ddrJCS&X-Amz-Signature=7cd02cbea8bd4d2403f16126f16e22a8b1bfb52b8750a29dcfd193f75c46e747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
