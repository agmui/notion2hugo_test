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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZH4J4JT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOdzMC3HTeyukyAsP%2BRGKjXWB7m3rs4okP79lWV2LNSAiAvC5CkgU%2FKt1RgWb6bAdz23EEsRhg5EYL6k%2FuACNBXTCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfNpjJ8QdX1MjFLlyKtwDG3OrDxGWFPYxr5wJ7l6RXosLdKTbcoSiVgnmyf7qcQVAX3ZGuXGRtS0NIZRrxAu%2BX0%2FElH1dbT4sJrFpncVgSSDuYS%2FpO9Oqc8AsvQX7rb2YNLa%2Bg4Nr%2BX%2B%2BwEdlzZ3YUkx0Wn3mnb9co%2FqQrNRV2aFgOASkEYvrpzNSTa2dlfnaW5%2FTphDxicMKGmknbhDTQLqOlgMdRDR2ThdyowmUVHcb9bfNTXxxl%2F4JhdcfdkeKI%2Bud%2BGdlDGvfP1rLC0VqvZMiBAjwIPPhbvhV1h%2BrffVcnxz4ZVev2th7cJckY19RMBZMLTBujQQ1spFz%2FC5T9I5nr2%2B3zDgOintQi9WT8H%2FCuirdorsjKm3cHcOw33RsU0bWroyN5odKMHR6FwO4m3i%2B5Fv%2F3LYYjEF8vOd1r4PMkzuppoNSgYm%2FfZzjyQxiaxAH8JtQyuc3udiBDrxiRhoq3aWJAuAGL%2BoxpFwMXXNDKWxt0KnOcr%2FfeJE%2F3KZZfERS%2FzlLsOKuZMdAX2v5MqzqpdohcEw%2FBQ4wf7ellK5fqFlGs7dD5317FHaUlo150%2FgWMifKDzUd02kXgJORppKEKfXgqvd6BY%2BDXsYacUlQCOGmF9ANBLUig494Ytay5E7W9BwumvXR%2ByMwrpjawQY6pgGpazd1B0sw4JtpTYzHTSx33N7uiUwXCsmGZOJhyE%2BTJ1SjtjLQhxBEQc%2F2f2zKrU4gQJBl5mPAdUq%2FyPOHe1%2FVcFIEXnkoUxujjCYlbe8kbFs%2FHNHf7vCFxQ6E3Lp8DTVR%2Fi4fGfnXRrUzVD8GHdWglDkAipdBhnZzJcFfR4TxIdmD3VhC0h5kXeqSn9C64sGiQu%2FLwullt%2BnTfnt1C3Wh4ijpr9x5&X-Amz-Signature=6af81892b583d51160b519492982a55c79443720aedf1bb4ae9a849b34b2ac44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZH4J4JT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOdzMC3HTeyukyAsP%2BRGKjXWB7m3rs4okP79lWV2LNSAiAvC5CkgU%2FKt1RgWb6bAdz23EEsRhg5EYL6k%2FuACNBXTCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfNpjJ8QdX1MjFLlyKtwDG3OrDxGWFPYxr5wJ7l6RXosLdKTbcoSiVgnmyf7qcQVAX3ZGuXGRtS0NIZRrxAu%2BX0%2FElH1dbT4sJrFpncVgSSDuYS%2FpO9Oqc8AsvQX7rb2YNLa%2Bg4Nr%2BX%2B%2BwEdlzZ3YUkx0Wn3mnb9co%2FqQrNRV2aFgOASkEYvrpzNSTa2dlfnaW5%2FTphDxicMKGmknbhDTQLqOlgMdRDR2ThdyowmUVHcb9bfNTXxxl%2F4JhdcfdkeKI%2Bud%2BGdlDGvfP1rLC0VqvZMiBAjwIPPhbvhV1h%2BrffVcnxz4ZVev2th7cJckY19RMBZMLTBujQQ1spFz%2FC5T9I5nr2%2B3zDgOintQi9WT8H%2FCuirdorsjKm3cHcOw33RsU0bWroyN5odKMHR6FwO4m3i%2B5Fv%2F3LYYjEF8vOd1r4PMkzuppoNSgYm%2FfZzjyQxiaxAH8JtQyuc3udiBDrxiRhoq3aWJAuAGL%2BoxpFwMXXNDKWxt0KnOcr%2FfeJE%2F3KZZfERS%2FzlLsOKuZMdAX2v5MqzqpdohcEw%2FBQ4wf7ellK5fqFlGs7dD5317FHaUlo150%2FgWMifKDzUd02kXgJORppKEKfXgqvd6BY%2BDXsYacUlQCOGmF9ANBLUig494Ytay5E7W9BwumvXR%2ByMwrpjawQY6pgGpazd1B0sw4JtpTYzHTSx33N7uiUwXCsmGZOJhyE%2BTJ1SjtjLQhxBEQc%2F2f2zKrU4gQJBl5mPAdUq%2FyPOHe1%2FVcFIEXnkoUxujjCYlbe8kbFs%2FHNHf7vCFxQ6E3Lp8DTVR%2Fi4fGfnXRrUzVD8GHdWglDkAipdBhnZzJcFfR4TxIdmD3VhC0h5kXeqSn9C64sGiQu%2FLwullt%2BnTfnt1C3Wh4ijpr9x5&X-Amz-Signature=808bbd31ccac3dd5d3b563db9c8e7cce24647e45394c715382975e75cf0c04d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
