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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXM3UF3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCID8LlNJe8quEBi2S%2FYlZCxk4nH6JI4GvRpntE5H92i3RAiEAmJLmSDZWltfyLqYAB402to7SvRl5aubgk3ooZSIEWqgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHnaDGZHkjQdPDBmcCrcA4987smeeI9VlGeO7UYj%2B%2FAm%2BsSW07f7SjhLmRqOo%2B3Cb2bdTNsXFRwF5J4DpcaJZH9wR1hlKBfWmtlIPh7fTzr1KR0IeOQ9OCBpQs9OV34lA4QETmAf7aRV%2FarL22fKHKD2XlX65yf1H9jAn01OUndY6Rucsk4VFX9gG7r4IWiy3J7RY%2F7Uou8yKSG4Ni3k%2BGwvk7ZcCsTFuLRA%2ByEj7G2aQyyLCzVRgGp1N7aBtN%2Bd3pgnpIPxdGPYc4R77j3m%2Fna2VQ9YU2%2F%2FvYLNzC6O0LRQXaJpmjxtoZF4I1YzJTkCg1LATnoDPvO9c8qxi8HUeA%2FXT0BrgDfulh%2BnQk6Vwxolc90v3udspFyX2n2tbki0mxi2PI%2FcfBreapqnzk1Za1M3iRQHF4%2FSJQZ%2B59nudFzkH7oLpJynYEpNaN%2BtOjRHfzHl%2FtiwaEdTHlyHmM0WvMKMqs4Vg2VLp83ViH7Zf8TmlaeCUsEzXqc4SyP1u1aqcmswKkmWuXEBlZT9Rw28X6NInRKd0VLlGHtr14VajT26x4SaDptsJWejR9gOuf%2BFKrIH37p3cutTF6frV9%2BM8XGOOCLcjKLt69UMJC%2BY1fxntq8aLj%2BYquv%2FVsXfo4z4Z48R59n71yJXtUoSMLbBk8QGOqUBDSElD3i5ThPoHkhXpiLMP5cirj9libyHA9hObmo6GaOlLeCZb6W%2BcBk9S9UlkNuibBjHHw9r77MRLeHBy5ODvFpIwtDzRmb5SYMqA8W3VUVHivo5cZe0MgiHz8rCfEopAgOrYdZSnyyWyBFQq3FXuBpuxaq1h8FyX3aTJYYSqCx1Uydb1xcMHr8I%2B2AIRfR9U%2FOc8ym1GWl2enY8jN%2BnXwwuPqJ0&X-Amz-Signature=c31ff224202eb16c7681697c9ed68b79d02c8c2f5d30538f2435393ed49766de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXM3UF3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCID8LlNJe8quEBi2S%2FYlZCxk4nH6JI4GvRpntE5H92i3RAiEAmJLmSDZWltfyLqYAB402to7SvRl5aubgk3ooZSIEWqgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHnaDGZHkjQdPDBmcCrcA4987smeeI9VlGeO7UYj%2B%2FAm%2BsSW07f7SjhLmRqOo%2B3Cb2bdTNsXFRwF5J4DpcaJZH9wR1hlKBfWmtlIPh7fTzr1KR0IeOQ9OCBpQs9OV34lA4QETmAf7aRV%2FarL22fKHKD2XlX65yf1H9jAn01OUndY6Rucsk4VFX9gG7r4IWiy3J7RY%2F7Uou8yKSG4Ni3k%2BGwvk7ZcCsTFuLRA%2ByEj7G2aQyyLCzVRgGp1N7aBtN%2Bd3pgnpIPxdGPYc4R77j3m%2Fna2VQ9YU2%2F%2FvYLNzC6O0LRQXaJpmjxtoZF4I1YzJTkCg1LATnoDPvO9c8qxi8HUeA%2FXT0BrgDfulh%2BnQk6Vwxolc90v3udspFyX2n2tbki0mxi2PI%2FcfBreapqnzk1Za1M3iRQHF4%2FSJQZ%2B59nudFzkH7oLpJynYEpNaN%2BtOjRHfzHl%2FtiwaEdTHlyHmM0WvMKMqs4Vg2VLp83ViH7Zf8TmlaeCUsEzXqc4SyP1u1aqcmswKkmWuXEBlZT9Rw28X6NInRKd0VLlGHtr14VajT26x4SaDptsJWejR9gOuf%2BFKrIH37p3cutTF6frV9%2BM8XGOOCLcjKLt69UMJC%2BY1fxntq8aLj%2BYquv%2FVsXfo4z4Z48R59n71yJXtUoSMLbBk8QGOqUBDSElD3i5ThPoHkhXpiLMP5cirj9libyHA9hObmo6GaOlLeCZb6W%2BcBk9S9UlkNuibBjHHw9r77MRLeHBy5ODvFpIwtDzRmb5SYMqA8W3VUVHivo5cZe0MgiHz8rCfEopAgOrYdZSnyyWyBFQq3FXuBpuxaq1h8FyX3aTJYYSqCx1Uydb1xcMHr8I%2B2AIRfR9U%2FOc8ym1GWl2enY8jN%2BnXwwuPqJ0&X-Amz-Signature=4f39ee5cf35a9683dd82bc19cc482ccef74f8d6877a72548f70c493611c63f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
