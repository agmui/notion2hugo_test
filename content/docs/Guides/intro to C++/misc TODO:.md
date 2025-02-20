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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6IJMZY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Ia5cZrzGvvoRb5HZ0MmzX8nnZCKHM%2BIQ7WLnZ5TrwAiBXPssKX859GdCOddlJocUTVvu2d6houxInlKqbkMHqVyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZr8uEQARr6TIBFHKtwDwzo4psWwvFR0gObeyR9bBqBYtJJALLYdvjyQgnC8Bti6VOKzI5kfO2uG9dfdhYdLldfO5sy8SD8t9vU8KZx5KXK6zdWkKzehsaD4eld7rtkIrUisb5S4oueR5NEsz5Lb58bHjMTdyc9piZyTnNSD%2FgIdm5EoNvYd1T%2B%2BqdghYxDj6L93rTotbmYu5mjJR1PqHW1NzdW04z2b%2Fwto77sxiJfBnmFeuCmL5vkZfjT2q2QnU%2BUi2WjIR5Ohvovt8L%2FwpcBE3vfl9I9MLDX3Vph4WrtRXA8ekVKNiCQUzCU1Un5fAtIU57sKecXWKw8Wjpva%2Bxk55ttX7ZtEeneFW%2Bl4DWkPwNMKVUh%2BnJZUtNVkVMUH1EB3%2FbobadNcjXTIEbFOkYgFmp5f2tcpoowaumMavzQIeKH0Trq3QOkXxV9Cmg4VoSwvrhtTZ2fRlXQ1weNHvhxAbmsX96hr%2F2pTq5w0kw2eYupvX67kF5K6zLxLwiqCmHBukaTjUYa%2BX%2BJfFfAYab68vYH6DhiIqDHtJP63DmoFSkR9cbS7yLxyY1wECzDnfEYNm978ImkfzWRf%2FYUgKC7a0oj7POQW5tWakeytL%2B7TAnQOTmpDVI0s%2BcNPn1BgIIC8sqyliBfmQlowxf3avQY6pgG%2FKWqMdMB%2FbNKvb1lPKsF6G28bm%2BHVH7pV2PzKgJXH3xHRp1DlEz2U5Kbui0ruTAs9IEbJajgaFteovFzqgHK0Jxnd68gyFRWH5SB6PznIPBlA%2FxsxYMdKDi4uMe5mNldHHUhbr2bMGdiLfdVBkZzh49Caiz9%2FuBvgQaoXsn6RWZo72gyGQJW0KnwNqWr3eRUFLxWI2Wvnd%2F%2Bklsqs7Wpb095MutkC&X-Amz-Signature=7704eed5394a60b4a948248b605a94707e12ebbbc4df2d62abef8f9ba0a4eb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6IJMZY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Ia5cZrzGvvoRb5HZ0MmzX8nnZCKHM%2BIQ7WLnZ5TrwAiBXPssKX859GdCOddlJocUTVvu2d6houxInlKqbkMHqVyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZr8uEQARr6TIBFHKtwDwzo4psWwvFR0gObeyR9bBqBYtJJALLYdvjyQgnC8Bti6VOKzI5kfO2uG9dfdhYdLldfO5sy8SD8t9vU8KZx5KXK6zdWkKzehsaD4eld7rtkIrUisb5S4oueR5NEsz5Lb58bHjMTdyc9piZyTnNSD%2FgIdm5EoNvYd1T%2B%2BqdghYxDj6L93rTotbmYu5mjJR1PqHW1NzdW04z2b%2Fwto77sxiJfBnmFeuCmL5vkZfjT2q2QnU%2BUi2WjIR5Ohvovt8L%2FwpcBE3vfl9I9MLDX3Vph4WrtRXA8ekVKNiCQUzCU1Un5fAtIU57sKecXWKw8Wjpva%2Bxk55ttX7ZtEeneFW%2Bl4DWkPwNMKVUh%2BnJZUtNVkVMUH1EB3%2FbobadNcjXTIEbFOkYgFmp5f2tcpoowaumMavzQIeKH0Trq3QOkXxV9Cmg4VoSwvrhtTZ2fRlXQ1weNHvhxAbmsX96hr%2F2pTq5w0kw2eYupvX67kF5K6zLxLwiqCmHBukaTjUYa%2BX%2BJfFfAYab68vYH6DhiIqDHtJP63DmoFSkR9cbS7yLxyY1wECzDnfEYNm978ImkfzWRf%2FYUgKC7a0oj7POQW5tWakeytL%2B7TAnQOTmpDVI0s%2BcNPn1BgIIC8sqyliBfmQlowxf3avQY6pgG%2FKWqMdMB%2FbNKvb1lPKsF6G28bm%2BHVH7pV2PzKgJXH3xHRp1DlEz2U5Kbui0ruTAs9IEbJajgaFteovFzqgHK0Jxnd68gyFRWH5SB6PznIPBlA%2FxsxYMdKDi4uMe5mNldHHUhbr2bMGdiLfdVBkZzh49Caiz9%2FuBvgQaoXsn6RWZo72gyGQJW0KnwNqWr3eRUFLxWI2Wvnd%2F%2Bklsqs7Wpb095MutkC&X-Amz-Signature=178390591fdca3ca58b93c1c2c586cb09fbb57f0ccc2426bcac8bf99b7359b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
