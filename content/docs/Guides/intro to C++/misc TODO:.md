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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637O3ZFGW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFaqnXucdJEhy48lYIjThNGVDjK%2FkDEKmKaX%2FGflWPneAiEA0HeJT4hI%2FFFF9j5O7MzLYkZwgC%2FIDb05RWzHlFLL3dYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCJdZmHlADtM38EYpSrcA5YN4nKUVTmzCuFa%2Bv0jIkURBN6WMRdP55UfFHG0nlG1EUd51AxdSkLLGQTPrk8VwosRZ2JH4NAqLEbGzOR9lcuzKafaXx%2FkiiRAZhDjCZyHwE3c5RFus6e%2B%2F3cEO3wa6QNLQLzV8HU%2FGKZ6SvIldBDMEwFRzx5WWRMke0HqLLD%2BVjApwgnxMuxeiibUbmpS48c%2FL3UicxecWCOYxSjw6lEzBUQdPkNC7fr5JYsKd05%2BKgaP%2F8Sr0TsBR1DOrs9c7wYezTkwu8uRd04mhJytaQneJLWo9Er1W06aCRLej3uD%2FMbsW9MyONFTkJ%2FIiiucK159PDMLggOlF9JOsgeEA5abtFc8c4X3GSA1WvomXxOg38eePtWk1hqkmYUx2b%2BgN9WaM%2F86TPUe7RHfar532wA%2BHP63JIlCTY7KPTDj3Uebc0iZ138Agx4DJ4ItxokwUDJkRmrTl%2Fr%2BTk1hHPGIkzvfIAv39uhXnzk8YbSJPtwL7iiKJ0BBGJTDFppOqwdAvNdBh9grrnqMqhPdExA1lPWJxLNkVMpg2Hw4wPfN8DOPPPLj9kmL9bmvp4CIYkqyaQaXpiA%2BraEHUT5P%2BsXuCgmYvpt0mXCRTSzCnyNbGHhLmc8w%2FYMBpLM7AkzDMNL%2FlMQGOqUBpBE0YG4BdOA0u88nbjGzw2V2jJLcztvt%2FpU1QhItLZRnj2Hhku5yz0AQ6iIF%2FGtFIKqC26UXZAjZbjS1UeOO4tZZhxa79Q0uGN%2Bm5LQ0N5HlrxDeeL9dGClHBxjg7QadZOWzBC0e2RoJzVMVay7XDNpIZt45vfe8pWsr4CSLvb%2B9WSu0zP6mm%2BrsRcaXE90VVBeOzb2GVNkORjYOgrmtCp8v9S0E&X-Amz-Signature=c84da1552376c17ee8c20bb1f914af62b9db6bbff8aa4208a7cc0ed85788493f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637O3ZFGW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFaqnXucdJEhy48lYIjThNGVDjK%2FkDEKmKaX%2FGflWPneAiEA0HeJT4hI%2FFFF9j5O7MzLYkZwgC%2FIDb05RWzHlFLL3dYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCJdZmHlADtM38EYpSrcA5YN4nKUVTmzCuFa%2Bv0jIkURBN6WMRdP55UfFHG0nlG1EUd51AxdSkLLGQTPrk8VwosRZ2JH4NAqLEbGzOR9lcuzKafaXx%2FkiiRAZhDjCZyHwE3c5RFus6e%2B%2F3cEO3wa6QNLQLzV8HU%2FGKZ6SvIldBDMEwFRzx5WWRMke0HqLLD%2BVjApwgnxMuxeiibUbmpS48c%2FL3UicxecWCOYxSjw6lEzBUQdPkNC7fr5JYsKd05%2BKgaP%2F8Sr0TsBR1DOrs9c7wYezTkwu8uRd04mhJytaQneJLWo9Er1W06aCRLej3uD%2FMbsW9MyONFTkJ%2FIiiucK159PDMLggOlF9JOsgeEA5abtFc8c4X3GSA1WvomXxOg38eePtWk1hqkmYUx2b%2BgN9WaM%2F86TPUe7RHfar532wA%2BHP63JIlCTY7KPTDj3Uebc0iZ138Agx4DJ4ItxokwUDJkRmrTl%2Fr%2BTk1hHPGIkzvfIAv39uhXnzk8YbSJPtwL7iiKJ0BBGJTDFppOqwdAvNdBh9grrnqMqhPdExA1lPWJxLNkVMpg2Hw4wPfN8DOPPPLj9kmL9bmvp4CIYkqyaQaXpiA%2BraEHUT5P%2BsXuCgmYvpt0mXCRTSzCnyNbGHhLmc8w%2FYMBpLM7AkzDMNL%2FlMQGOqUBpBE0YG4BdOA0u88nbjGzw2V2jJLcztvt%2FpU1QhItLZRnj2Hhku5yz0AQ6iIF%2FGtFIKqC26UXZAjZbjS1UeOO4tZZhxa79Q0uGN%2Bm5LQ0N5HlrxDeeL9dGClHBxjg7QadZOWzBC0e2RoJzVMVay7XDNpIZt45vfe8pWsr4CSLvb%2B9WSu0zP6mm%2BrsRcaXE90VVBeOzb2GVNkORjYOgrmtCp8v9S0E&X-Amz-Signature=8de8eed624038ef402eb1832171654721dd140048e6f0bbce449da32160d8a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
