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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q73ZR5S%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwzfDKZbhqIQLqMljhk029PtxVHrlT%2FxkLQ4Fnj7uGyAiB8Q7b1YnpULh7NqTx9CGXWCRF1oXVPTUVZqTcHkwF1JyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk92ctwNNQBmbjkaKtwD9q%2B%2B8gPPrI4VVxBK8IL6mIIo1zYMzQj9Yq3gxRVBiPdKk9nn55gRX9R8yvSlvYzOGBHnAeAMStAkWQEBdEYXkDH0Wyziw4J4fvGNWbd%2FB3mOqO3sPfMnCgPiPkH6SdpyZxXH8WjYBykFQCnqY6wyJMgm8D61zMrY5LifS2yOh4gyXGp5KuYhOnqtxlillnyc6ddEWgABvcOWk9a1TbP%2Bdx7N5f1EJ9yC8ARn3EB9VSJbzOF6ft%2BKcOi5eeIS2Q4FRoYhl86RsIXbDeqg8LEzjxVtFSM52Pj7FS7GglsaX7MvjqvPqcIvz9TzuyPRK%2BQQclrwm%2BLWZ06QQZ%2FNKgB7WJby9zKwpI31EjmNSTbMVswL06o33Buxmyil31R2qFQSWfhT5Gg%2FROry0xEedrQFvquReqEGOmxU7q0CYyht8t5iqUX8511t1Fy2UGitIfLmITS%2Feb%2B80EalyG0BcKx6G94t3Uok5akTsMwfcr%2FCr9KSej%2FV4%2BbzboC70GRm7qN0RRXaZ8gMiW9qsgr8mpKAIZHm0xZ6sLwOl8BdXqYBrb3WKOih2gCFmpxLxamChYY54outaRBC%2FcLlORT5qZfFo4Ehf8p%2FnRTsdygIGr2ydFzd%2FvJG8%2BwvxRQvs%2B0wnf7DwwY6pgH3oxgcVSRFrU0HZ1dPTAkTqC%2F9rnPeBLCUo7HYt6kA21k5NZTKpbPW8ibDBy6rciMrR1oiQVp0LqXaHyZkHPYevGXgCggpV7sjogYhHsEmGZmWg6yy1EIU2u2t0r%2BhOPrNhrDBTyrCuPdWz4NBbmW%2FDEuoKIA6NRrvo3BSKT7gBTyD5xf8NGgqUpQX86fbL5LoxfKsg4fwVbKVCzugV4wVKBvSuYpG&X-Amz-Signature=dda2558fb750ee8d8b3b057d5524b595250cbca134d6db54d58f197af861e27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q73ZR5S%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwzfDKZbhqIQLqMljhk029PtxVHrlT%2FxkLQ4Fnj7uGyAiB8Q7b1YnpULh7NqTx9CGXWCRF1oXVPTUVZqTcHkwF1JyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk92ctwNNQBmbjkaKtwD9q%2B%2B8gPPrI4VVxBK8IL6mIIo1zYMzQj9Yq3gxRVBiPdKk9nn55gRX9R8yvSlvYzOGBHnAeAMStAkWQEBdEYXkDH0Wyziw4J4fvGNWbd%2FB3mOqO3sPfMnCgPiPkH6SdpyZxXH8WjYBykFQCnqY6wyJMgm8D61zMrY5LifS2yOh4gyXGp5KuYhOnqtxlillnyc6ddEWgABvcOWk9a1TbP%2Bdx7N5f1EJ9yC8ARn3EB9VSJbzOF6ft%2BKcOi5eeIS2Q4FRoYhl86RsIXbDeqg8LEzjxVtFSM52Pj7FS7GglsaX7MvjqvPqcIvz9TzuyPRK%2BQQclrwm%2BLWZ06QQZ%2FNKgB7WJby9zKwpI31EjmNSTbMVswL06o33Buxmyil31R2qFQSWfhT5Gg%2FROry0xEedrQFvquReqEGOmxU7q0CYyht8t5iqUX8511t1Fy2UGitIfLmITS%2Feb%2B80EalyG0BcKx6G94t3Uok5akTsMwfcr%2FCr9KSej%2FV4%2BbzboC70GRm7qN0RRXaZ8gMiW9qsgr8mpKAIZHm0xZ6sLwOl8BdXqYBrb3WKOih2gCFmpxLxamChYY54outaRBC%2FcLlORT5qZfFo4Ehf8p%2FnRTsdygIGr2ydFzd%2FvJG8%2BwvxRQvs%2B0wnf7DwwY6pgH3oxgcVSRFrU0HZ1dPTAkTqC%2F9rnPeBLCUo7HYt6kA21k5NZTKpbPW8ibDBy6rciMrR1oiQVp0LqXaHyZkHPYevGXgCggpV7sjogYhHsEmGZmWg6yy1EIU2u2t0r%2BhOPrNhrDBTyrCuPdWz4NBbmW%2FDEuoKIA6NRrvo3BSKT7gBTyD5xf8NGgqUpQX86fbL5LoxfKsg4fwVbKVCzugV4wVKBvSuYpG&X-Amz-Signature=4328d989199f31412750e05a6171507a4552b37f1a6b909fd21aaa039d62039f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
