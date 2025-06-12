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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWYWOQB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCye8AY%2BUdUXnTQNYySxuKOGO%2FxHf4cyLxlHK1OIiPvWQIgNgeWzTuqFzM7PzEHNS4Wk03%2By1bP2W8oC4HT3FJMFI4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGvEDK8UsKBpUhAdCrcA7kGZT7TRQujbEyC9a8jegNhDK7CYX3WbU3IaXtsc9hZ9qsBYtqyYZELTnBKc%2BknHXh1BxRiwxCvgLNrXHwyjdXI1TPGvkbBy%2FkGIctA8A1avz1RYjnpiab6ChaGtNNuMMKovjyLaGQxDnfzbBe6E%2BwvYUEPg5AMcq6y6Z9o4CL7PsjLmGqAD45zijIKM9TEDHOQlSiOIx4aldCPB7SbBj8%2Fcq6Q%2FQq%2FrhdzJCF81a4TBZx3NFBXyeWoIgNO86aqoVBPYoGZ6lUun49xiFnsyQjOaAbtLMcCTUdDneiSiP9SOERF1P4HxGxtmzJWhQ5PAhKLjStd%2BtGzCCcoMUfO71AiQR5nb0KkbcRo%2FrcEhAhOTiDYZrKWIL84rP0YtnLtzv0r%2B8EKw7l1aT6Mkadbq3vUtuRw%2F9a%2FoLmKnkTgp5ktCZVH2SeA1qpSdBVejBSdVlx7NhQ7ZI002uuvJ5lEA2JdJ5dHOMYJtfKYNKtagclr2tDiOq9GBNg1ZHfIBunWoKx92s6JvWSLaEiX5GxrySnn%2BQYygWK5W8DMDDynaUVw7yHbn9Pi5RTtj4ZDRnqckxtMToPB2jJJVq6WIY10MbsXvYDX%2BNOQOWDka5Do%2BXB7Ucuv7g27UF%2BHeQqjMPGmqsIGOqUBYqUL9WtdefZ8JxFdYggAX30R4LvuxuiUBZC7lyHSlYO8QaKRx8vT2344O1GCV43dYgIXNHtITrBZKoLG8nhFDjwEYa43fYiRUPuLDui6T5KzqsNAlgpQPY9b8VDk4sSOzaKhD0pg7gCRTEjLZIGfYX0rAOJCi8LhXq%2BJXIPjGB7h3vrZGzC6h2G94j2%2FOrvVKG8WU%2F%2FdXlWyUmwDZlNZtdV5P32W&X-Amz-Signature=e7627191bf88fb1c67734236e8d4b2cc8810e3219f9da66722f0a1366bd879ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWYWOQB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCye8AY%2BUdUXnTQNYySxuKOGO%2FxHf4cyLxlHK1OIiPvWQIgNgeWzTuqFzM7PzEHNS4Wk03%2By1bP2W8oC4HT3FJMFI4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGvEDK8UsKBpUhAdCrcA7kGZT7TRQujbEyC9a8jegNhDK7CYX3WbU3IaXtsc9hZ9qsBYtqyYZELTnBKc%2BknHXh1BxRiwxCvgLNrXHwyjdXI1TPGvkbBy%2FkGIctA8A1avz1RYjnpiab6ChaGtNNuMMKovjyLaGQxDnfzbBe6E%2BwvYUEPg5AMcq6y6Z9o4CL7PsjLmGqAD45zijIKM9TEDHOQlSiOIx4aldCPB7SbBj8%2Fcq6Q%2FQq%2FrhdzJCF81a4TBZx3NFBXyeWoIgNO86aqoVBPYoGZ6lUun49xiFnsyQjOaAbtLMcCTUdDneiSiP9SOERF1P4HxGxtmzJWhQ5PAhKLjStd%2BtGzCCcoMUfO71AiQR5nb0KkbcRo%2FrcEhAhOTiDYZrKWIL84rP0YtnLtzv0r%2B8EKw7l1aT6Mkadbq3vUtuRw%2F9a%2FoLmKnkTgp5ktCZVH2SeA1qpSdBVejBSdVlx7NhQ7ZI002uuvJ5lEA2JdJ5dHOMYJtfKYNKtagclr2tDiOq9GBNg1ZHfIBunWoKx92s6JvWSLaEiX5GxrySnn%2BQYygWK5W8DMDDynaUVw7yHbn9Pi5RTtj4ZDRnqckxtMToPB2jJJVq6WIY10MbsXvYDX%2BNOQOWDka5Do%2BXB7Ucuv7g27UF%2BHeQqjMPGmqsIGOqUBYqUL9WtdefZ8JxFdYggAX30R4LvuxuiUBZC7lyHSlYO8QaKRx8vT2344O1GCV43dYgIXNHtITrBZKoLG8nhFDjwEYa43fYiRUPuLDui6T5KzqsNAlgpQPY9b8VDk4sSOzaKhD0pg7gCRTEjLZIGfYX0rAOJCi8LhXq%2BJXIPjGB7h3vrZGzC6h2G94j2%2FOrvVKG8WU%2F%2FdXlWyUmwDZlNZtdV5P32W&X-Amz-Signature=251e56d10835be6e45fcc527e7031894c9c861b8006ba0745268ceaaabd357be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
