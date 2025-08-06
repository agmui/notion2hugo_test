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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXXG555%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrk55vhNkr%2FNXPotbHRYaLNE%2FfMMOjDN7O3jwxntPnpgIgH1Bg9xULO7%2BVnZkEdEHwva4qZXrK2VZTzwOVW0gOgfsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFVjfUgtGCa45ZLC1ircAzZNM081d0TiXoUelwQu1rGYa%2FU%2F6U1TLw1TwUZTV2V23oJffu6nHOM6NtE7EcOtx057PG0wGoe0vU1M2coQVHpeoPmFD5mWZCKnqXFULMZxrgIXdaLOhnLPsdKE%2Bu0gWDgcuGxLjn3ClhC1DCv%2B22yFfeXE%2BG6POVxXT9J24%2BaWY0I7tO6h6c%2FgF7o97dCyvJNtuB%2FvcLaK2Q%2FlvaFiGK%2Fr0yXOLywGRZ%2FPGNDFGCnk%2Bv6TdNmbteZEXWZV77V7TEqclzfoRHh%2F01TpOhcG3IJ%2Ff57C%2BpGSc3K7p5rAdtb0yYLLcCT8Wsl%2FhYyb6RbRE5VXmY4sLGD06nmH0oATkQzoEee%2B5j8yI0M%2FWy6M0diwCR0Z33CokDC4QjbcOsAG%2FF0a%2BJpoa3LtMh1yJpRqLImCA1xCRdp6HxhrnbpViC7Fw2lCYJt6db%2Bf%2FfLnf3CrcfYMcAbFnURm9ClPUKf9%2FsCvXN4m4qtbFK6YrAWS2K1r9W2GkW%2F75SWe%2FqPjyTL7BycMNJywLUgXveFj%2BnfKVY6WGPtOmfNnI0qNB9%2BlIDUiKRpdcGSEWdwu69uLpZFwhKJbyNbCN%2FK%2B8AfpV5Loj%2BkzL4lzHFgjWUWuIEnDgQQ5VQ0fl%2FILKwBpnyCsMKPrzsQGOqUBbAcJJQnxTJgfp0fSeRu1hBMpEXt6rHR5bDtXHGuprR%2FZyLFlNriibXr8bK6papi4a6o0MeFEcxA%2FF4vUr3%2Fak6r90uBKEbAFfUh2JhPr0R3QunOMsZC0MUyEid0sZsEb%2BZf%2BzvZF48Hh%2F%2FibhZWF%2BhgVGywADyH8a4T4PFO4i5QGkrCkut85pGlLFK3Hp3GM0J2wEiD3lSycPwCthIhfM9vBksuN&X-Amz-Signature=e31ae1786d0321d5bacad87d2c518580bf3965c57bf3c4a9201d1a68e5c009fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXXG555%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrk55vhNkr%2FNXPotbHRYaLNE%2FfMMOjDN7O3jwxntPnpgIgH1Bg9xULO7%2BVnZkEdEHwva4qZXrK2VZTzwOVW0gOgfsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFVjfUgtGCa45ZLC1ircAzZNM081d0TiXoUelwQu1rGYa%2FU%2F6U1TLw1TwUZTV2V23oJffu6nHOM6NtE7EcOtx057PG0wGoe0vU1M2coQVHpeoPmFD5mWZCKnqXFULMZxrgIXdaLOhnLPsdKE%2Bu0gWDgcuGxLjn3ClhC1DCv%2B22yFfeXE%2BG6POVxXT9J24%2BaWY0I7tO6h6c%2FgF7o97dCyvJNtuB%2FvcLaK2Q%2FlvaFiGK%2Fr0yXOLywGRZ%2FPGNDFGCnk%2Bv6TdNmbteZEXWZV77V7TEqclzfoRHh%2F01TpOhcG3IJ%2Ff57C%2BpGSc3K7p5rAdtb0yYLLcCT8Wsl%2FhYyb6RbRE5VXmY4sLGD06nmH0oATkQzoEee%2B5j8yI0M%2FWy6M0diwCR0Z33CokDC4QjbcOsAG%2FF0a%2BJpoa3LtMh1yJpRqLImCA1xCRdp6HxhrnbpViC7Fw2lCYJt6db%2Bf%2FfLnf3CrcfYMcAbFnURm9ClPUKf9%2FsCvXN4m4qtbFK6YrAWS2K1r9W2GkW%2F75SWe%2FqPjyTL7BycMNJywLUgXveFj%2BnfKVY6WGPtOmfNnI0qNB9%2BlIDUiKRpdcGSEWdwu69uLpZFwhKJbyNbCN%2FK%2B8AfpV5Loj%2BkzL4lzHFgjWUWuIEnDgQQ5VQ0fl%2FILKwBpnyCsMKPrzsQGOqUBbAcJJQnxTJgfp0fSeRu1hBMpEXt6rHR5bDtXHGuprR%2FZyLFlNriibXr8bK6papi4a6o0MeFEcxA%2FF4vUr3%2Fak6r90uBKEbAFfUh2JhPr0R3QunOMsZC0MUyEid0sZsEb%2BZf%2BzvZF48Hh%2F%2FibhZWF%2BhgVGywADyH8a4T4PFO4i5QGkrCkut85pGlLFK3Hp3GM0J2wEiD3lSycPwCthIhfM9vBksuN&X-Amz-Signature=14d732ce07aab66687319617b762ff797aa1c163d42f87988b39cb202c4c63ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
