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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIZR5YF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1JVxTHPEi%2FyUCwLvERLH%2F2TmA71hU4ihwvc1d3tpocAiB5O1seuVcl3jejkGx6Eid8wiKdZX0H8eZxHOebsVRoLCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXeDxkmouIGGjCdhxKtwDElzW6Witrm%2Bh4%2Bi%2B6BQlRFjnCTBOoQyKfPZWE9cenGEoAB4Z1ujQ%2FP2ZbGbv0ooKSom1EIjA61ob1tGhykmdfZ0ycvEMconfjA2AiIJDGFMkzqh%2BaOi0O2tWOnNJORmkfPql6nt18c5HArBne1L4oppDGQs1nv8gCW8ciT%2BH13ltxRvT%2BoyvKksHHHuhsjid1LglAWzil485yQKIDJqPJxsp40op7P76sb1GD%2F7mT0tf7H6bdKLaD0gd%2BBiPrt5NMOm1is7mxruls%2BV%2FCXiorCD4Ha482uOmJwjsmK7ZXOICHU7vlzvNP2z7omq98Di0oqnSWgxFrrhF2yt7D12LX3Z4inR%2FhC80qSfUHcAFl92DT1gc%2FPjpRCahE%2BjEQLkRCoAmwDfS4z7fuvY8AN94Ni%2B7rr3LkCeNWqrBT1ulPaVnGjaGSCMIpYQmmgzLREZ%2BWYCuLORsbdSuRaVpsCimu%2B4zR5WFzo3HZp10C1zcWKIzmiCa0JMB6%2F1omY5s6debK%2Bfza3Q7RzsxL%2FmaOgoycpLM0vkKmv7oFjrfxWmcaImUaDNyeDw8Azpnh3E%2F%2BV729yv%2Byd2%2FxYYfaIBVklOf8v1NW3lkd5kaHlY4AsHUF1T4JOI6pgzZBooqlokwkbqmwgY6pgEyya0qCqvUqUrOT6BR7eMkLPbk%2FCRICGBJFW1F%2F6CrVdsagPqN0HfW50xbd1B21IDZowHdRmvxIj%2F5pQeVVMoAhMwe1lhSkpazQFiKPp29sOh1QSR2Fy4dSZYzrJsz7Ea0QBiMEFSLvajczQbS2jFh0DKGIswp9glbugyaHXJS1RM5it%2B0pRWxarAMcs%2BxJUeuC6OGMN13xIi4ea6SFfOOf4KvYoRJ&X-Amz-Signature=a0540ee4ed9de549d9261989409a1e2bbe1b5224a4edf635cfb72050eaac4db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIZR5YF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1JVxTHPEi%2FyUCwLvERLH%2F2TmA71hU4ihwvc1d3tpocAiB5O1seuVcl3jejkGx6Eid8wiKdZX0H8eZxHOebsVRoLCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXeDxkmouIGGjCdhxKtwDElzW6Witrm%2Bh4%2Bi%2B6BQlRFjnCTBOoQyKfPZWE9cenGEoAB4Z1ujQ%2FP2ZbGbv0ooKSom1EIjA61ob1tGhykmdfZ0ycvEMconfjA2AiIJDGFMkzqh%2BaOi0O2tWOnNJORmkfPql6nt18c5HArBne1L4oppDGQs1nv8gCW8ciT%2BH13ltxRvT%2BoyvKksHHHuhsjid1LglAWzil485yQKIDJqPJxsp40op7P76sb1GD%2F7mT0tf7H6bdKLaD0gd%2BBiPrt5NMOm1is7mxruls%2BV%2FCXiorCD4Ha482uOmJwjsmK7ZXOICHU7vlzvNP2z7omq98Di0oqnSWgxFrrhF2yt7D12LX3Z4inR%2FhC80qSfUHcAFl92DT1gc%2FPjpRCahE%2BjEQLkRCoAmwDfS4z7fuvY8AN94Ni%2B7rr3LkCeNWqrBT1ulPaVnGjaGSCMIpYQmmgzLREZ%2BWYCuLORsbdSuRaVpsCimu%2B4zR5WFzo3HZp10C1zcWKIzmiCa0JMB6%2F1omY5s6debK%2Bfza3Q7RzsxL%2FmaOgoycpLM0vkKmv7oFjrfxWmcaImUaDNyeDw8Azpnh3E%2F%2BV729yv%2Byd2%2FxYYfaIBVklOf8v1NW3lkd5kaHlY4AsHUF1T4JOI6pgzZBooqlokwkbqmwgY6pgEyya0qCqvUqUrOT6BR7eMkLPbk%2FCRICGBJFW1F%2F6CrVdsagPqN0HfW50xbd1B21IDZowHdRmvxIj%2F5pQeVVMoAhMwe1lhSkpazQFiKPp29sOh1QSR2Fy4dSZYzrJsz7Ea0QBiMEFSLvajczQbS2jFh0DKGIswp9glbugyaHXJS1RM5it%2B0pRWxarAMcs%2BxJUeuC6OGMN13xIi4ea6SFfOOf4KvYoRJ&X-Amz-Signature=753ae9444084774b3ed4d96e6876628e125fb65bc8c34eddf9a22afd7948bb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
