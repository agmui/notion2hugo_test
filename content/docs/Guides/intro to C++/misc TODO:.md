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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3U6AUYP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VEIUEu6ZxTfvE9UNs4%2BewdTCRcPIAOzCNspRnFqjpQIhAL8RXi0BXXuROFTsRgIak1XJSEMJAvntZkbScICLoznqKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClZeNdOI%2Bu%2FdeVCcq3APuuQmSRXyWlftJU%2Fyw%2FHAwyIwt98jiL9%2BKRjo79ftSwbcF1shxpqnX1Ab39FhwAKC3%2BQz%2FLRAX1wV4eovnfIpGZdeG9WSBnQQ2z%2FswtU6ubhRbv1A3IqR%2FnFfwfxa1%2B3HJsszTn7MCGfYsx5ixuEMNiYqTSSgYFmmJLb5ZS%2BCQEg%2Fo00zEypFRl3d69Qb0ArGQlamecuKfeE6zrXqB%2FNzq%2Bq045vtsQWUX2rCtxipwMXBXEw%2BqGej2%2FCnX%2FEKxEKw1esVqZnidkq%2FU%2FuipFsiXOdT8NgzPpVIeJTzWjQA4Dp8nLp8upeLu78LBNcOihWefs%2FeoPUPjnFEltkTi8kwO0sOmOkz3hwF3pEL9rEYkeaM0%2F072rXakfZot4ZY2NlH6xY0kkfNIhl9PMBLyah5ALkOtOXJN5xmLZQYMncplX9PmIGlyfm4lvKmQFIg2UnaQte0697hJ3uLzrbfxT5uciWJDkn7Q4ORz9x3GuEbVfeqvInV8zYIdbGUVRCSw4tk7s3%2B6E%2Fa%2FBA3DCtc2eCqUZZ%2Boe6gO6iPHPseFyqKfOdamKOhdHtNTE1DefAgiRMrUwFwCAfL49pTr28cD%2B6PUBZjcAj75qGIU7osWi7j0Zmrg05vbePcP2wPvjDCc8p7FBjqkAcQOrols4YYkLPGuygyL1D04kYUpAuBjeuPuKMBwRu4K1o%2BHb%2Fi9cGDkVc5QKp9MhLiN9HiRdJ46A0N7hvmx%2FisLlXlwDpiWPcwWZNX3DPBJZoNbdKulxFgs31jN%2BuYf1%2F00xLo68qLOcRqoS83ezYA8UaTpnLLo217r9z7Dejc%2BJTjo5oOcKzPstTOgBRwNUK7yzXpWT%2FK7NNpZnsIyQkrW%2FpxP&X-Amz-Signature=4465292953c55997bf336d50be672db65c7cf946cf1a92b914752bcb87275e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3U6AUYP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1VEIUEu6ZxTfvE9UNs4%2BewdTCRcPIAOzCNspRnFqjpQIhAL8RXi0BXXuROFTsRgIak1XJSEMJAvntZkbScICLoznqKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClZeNdOI%2Bu%2FdeVCcq3APuuQmSRXyWlftJU%2Fyw%2FHAwyIwt98jiL9%2BKRjo79ftSwbcF1shxpqnX1Ab39FhwAKC3%2BQz%2FLRAX1wV4eovnfIpGZdeG9WSBnQQ2z%2FswtU6ubhRbv1A3IqR%2FnFfwfxa1%2B3HJsszTn7MCGfYsx5ixuEMNiYqTSSgYFmmJLb5ZS%2BCQEg%2Fo00zEypFRl3d69Qb0ArGQlamecuKfeE6zrXqB%2FNzq%2Bq045vtsQWUX2rCtxipwMXBXEw%2BqGej2%2FCnX%2FEKxEKw1esVqZnidkq%2FU%2FuipFsiXOdT8NgzPpVIeJTzWjQA4Dp8nLp8upeLu78LBNcOihWefs%2FeoPUPjnFEltkTi8kwO0sOmOkz3hwF3pEL9rEYkeaM0%2F072rXakfZot4ZY2NlH6xY0kkfNIhl9PMBLyah5ALkOtOXJN5xmLZQYMncplX9PmIGlyfm4lvKmQFIg2UnaQte0697hJ3uLzrbfxT5uciWJDkn7Q4ORz9x3GuEbVfeqvInV8zYIdbGUVRCSw4tk7s3%2B6E%2Fa%2FBA3DCtc2eCqUZZ%2Boe6gO6iPHPseFyqKfOdamKOhdHtNTE1DefAgiRMrUwFwCAfL49pTr28cD%2B6PUBZjcAj75qGIU7osWi7j0Zmrg05vbePcP2wPvjDCc8p7FBjqkAcQOrols4YYkLPGuygyL1D04kYUpAuBjeuPuKMBwRu4K1o%2BHb%2Fi9cGDkVc5QKp9MhLiN9HiRdJ46A0N7hvmx%2FisLlXlwDpiWPcwWZNX3DPBJZoNbdKulxFgs31jN%2BuYf1%2F00xLo68qLOcRqoS83ezYA8UaTpnLLo217r9z7Dejc%2BJTjo5oOcKzPstTOgBRwNUK7yzXpWT%2FK7NNpZnsIyQkrW%2FpxP&X-Amz-Signature=e84d085a8fc01871052173ab7d9833bac25bd78bd670d019202f62468bec1424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
