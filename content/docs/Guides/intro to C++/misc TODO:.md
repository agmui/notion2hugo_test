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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTW2PLVL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV2KMEOi%2FikN4N8YnKKAnBQSO2T3LLHBlcQ4JO3qmWzwIgWQ6DtR4mMIolIQS9PeTap8OHZgQ5aU8SDiO4W%2BejabQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKpLOpnsGtx7E9VWzSrcA2zAF15%2Fc9u7Flzxw4UFJLLwRGpWEY7d6r84hEAnBD%2FL6VDp%2FyJ7LBXwmEzXCVRnMpyFGa9q6yhC7nRBnKhGdSfKVd%2BWCtL%2FtRW7NEst3Zfvk0oiQSGy3eXGcA%2FK9e6mGoBRAbkJrAB4fzJ5tWCOFK0IoO%2BShzbOSvyv3f9b3HpCFfqFv4vqmp1qKrz1kzzsttWedIJazHe4OV2HUK%2F7fEmlnNMqf0vtnZSHBEfnj0MynHc%2B6Qy%2BhR8mhXpQ1GY7r4LECe%2BZDwV%2BC6gFZ4TuxxZtQgfTVv6PEJPWC5STmz%2BRNqt9KzQzp4piHPT7MhMPWSGakINMUaj7x9yKVvAowNfrfIsCBEtsvakC4qjh650kDdlYRebKulgoFosInUoPELYnH8bw0kwyGYeLFyFuHnS7HWclyc45z0rC0uqtdSvvl%2BS1xU62WhdKiTvX%2BcxpGlpR1pexQeQJcUbIjyOu8x07rmcXhGaa7fmFTe7CsBtHeHuzeOM8VSlK%2FnzfaJbxwWDqBhCV1WiRBnS%2FmYCm0P0ZQ0ChIiLBKIrqh1pu7clNPKhL%2Bemix6k5E99rwpyfD4FX1Q2EXdZyIr0G6FnjlNz6Fc3K1oQgoY7n3sULpwA%2FDW7hbIPZUILCGokGMKCa88AGOqUBvNg7aWvGVbCYNOzLT0HoqOlteykU9D7ZpyiDxI9WVCCixnpdRnsJOXosUGQRA%2FYUhceO56CkRvicWkhjXTYBbi2x04wy2aPnCzazaWrpB62UfzCqYt6D8gGfCPIwyfWotRHyS%2FNbEvQzgsmmg1gdkA2UOSQmRrfJ1vgeGhm65sHqLqZrUL0c%2BLaZDufj2hBEz69Ik9iL8phrhgllAlu8X6JgAB9u&X-Amz-Signature=18b934af2607c2e6143c2c2fe5387c4d885a032a89973e09704a8bd1407c0acf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTW2PLVL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV2KMEOi%2FikN4N8YnKKAnBQSO2T3LLHBlcQ4JO3qmWzwIgWQ6DtR4mMIolIQS9PeTap8OHZgQ5aU8SDiO4W%2BejabQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKpLOpnsGtx7E9VWzSrcA2zAF15%2Fc9u7Flzxw4UFJLLwRGpWEY7d6r84hEAnBD%2FL6VDp%2FyJ7LBXwmEzXCVRnMpyFGa9q6yhC7nRBnKhGdSfKVd%2BWCtL%2FtRW7NEst3Zfvk0oiQSGy3eXGcA%2FK9e6mGoBRAbkJrAB4fzJ5tWCOFK0IoO%2BShzbOSvyv3f9b3HpCFfqFv4vqmp1qKrz1kzzsttWedIJazHe4OV2HUK%2F7fEmlnNMqf0vtnZSHBEfnj0MynHc%2B6Qy%2BhR8mhXpQ1GY7r4LECe%2BZDwV%2BC6gFZ4TuxxZtQgfTVv6PEJPWC5STmz%2BRNqt9KzQzp4piHPT7MhMPWSGakINMUaj7x9yKVvAowNfrfIsCBEtsvakC4qjh650kDdlYRebKulgoFosInUoPELYnH8bw0kwyGYeLFyFuHnS7HWclyc45z0rC0uqtdSvvl%2BS1xU62WhdKiTvX%2BcxpGlpR1pexQeQJcUbIjyOu8x07rmcXhGaa7fmFTe7CsBtHeHuzeOM8VSlK%2FnzfaJbxwWDqBhCV1WiRBnS%2FmYCm0P0ZQ0ChIiLBKIrqh1pu7clNPKhL%2Bemix6k5E99rwpyfD4FX1Q2EXdZyIr0G6FnjlNz6Fc3K1oQgoY7n3sULpwA%2FDW7hbIPZUILCGokGMKCa88AGOqUBvNg7aWvGVbCYNOzLT0HoqOlteykU9D7ZpyiDxI9WVCCixnpdRnsJOXosUGQRA%2FYUhceO56CkRvicWkhjXTYBbi2x04wy2aPnCzazaWrpB62UfzCqYt6D8gGfCPIwyfWotRHyS%2FNbEvQzgsmmg1gdkA2UOSQmRrfJ1vgeGhm65sHqLqZrUL0c%2BLaZDufj2hBEz69Ik9iL8phrhgllAlu8X6JgAB9u&X-Amz-Signature=1bf44145e7fbedacf55a5f0beabc349a789e54afc46ef07fb0703cb4560d9cae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
