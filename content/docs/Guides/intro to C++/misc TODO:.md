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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRSLUQQ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKiDVwJ7Q9P36lPZ1uygOFQ%2FTL2ZtTWiCmkLdbCqNGcwIhAM%2FZuXPLAs%2F%2F6xv5tROO%2FDZmK3DVRkRxqLaHfMVBQRVDKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGkhxdek5tOt416ZYq3AOt9RhmVgYF%2FEiTyaGhPELPmsEx%2Bnzdb2IMDpegdNDlwHAk0IcQXeL7pRSYCndoekn8%2F1lCab2bP8kvth83ACR%2BH%2Fet55DyuDBwoRvbMCbpucPKZn0LfptVoBWFfK55PX6hygpBF%2BHu1cWoY2z%2FQG9ZXuYLgl6Y3hH0O35LPXn21eZZ438%2Fvtkfxf8AeWMOISoFknFVWIX1GZLRVtblbOYXmCx0b%2BfHR4iyolNgpoS29WWURPQO8ZNPbYm1LD6Xx%2BiCSD2miQMjcWheqMaHZsEnsRnH1wBb2vf%2FhAi369Z6Z45cs7jikmL1cu9wyzLAuD0SXyl8DzvPVb%2FqFKL2Qo8KPFNKCUsvKUjKsi3xqjUwB%2FHdwASofpiNnPYvjnaFeh3rBAU5oBmuVC3JrX5%2BGwU%2F8081l3nBQW3tDcdiTK5%2BB1SFYn0fbqwAQVSTg6OnaHffGnJTKTvGP4MRQi2gYr8qJEy8XPi8peFlm5ti56v9of8tPmylDFdDAPovMFAX1L3QO%2FhW2XiLe1N3%2FSd6JmsUtwS8P5RKbsAN1ERNoIf5Ml%2BcCqJXRzftshmYfVxLOzVW9POuLFXq2kmc%2F%2FoRpJn9ynDB7PikzjgFTOY%2BMpFE82T7T%2FS4DHdfOjFPSDCGsc3RBjqkAe%2Bg5p4%2BulvAs51U1RX23YPB3qpRu85xzBRweZsg8U9jRlIQ9yN%2F%2BG%2FgRp%2FNQuUfCJKLc5OC1xW0WSPUAcnEWNRjTfdiVxB24eXdWCpPq8NThMwzBN6gQahus6wn1pUefhCY03RNl16d1JCvw31yDMUArkINatfwaaZcB7nNptwEx1A3iVXghyE1bBrJ%2F6IxNOCTUG2yKxSZeQZKqMUHM2KrbIf3&X-Amz-Signature=c33efdbf495f8e043ba071445f796c3d3367542e8574805f02a2cdb5154f8977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRSLUQQ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKiDVwJ7Q9P36lPZ1uygOFQ%2FTL2ZtTWiCmkLdbCqNGcwIhAM%2FZuXPLAs%2F%2F6xv5tROO%2FDZmK3DVRkRxqLaHfMVBQRVDKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGkhxdek5tOt416ZYq3AOt9RhmVgYF%2FEiTyaGhPELPmsEx%2Bnzdb2IMDpegdNDlwHAk0IcQXeL7pRSYCndoekn8%2F1lCab2bP8kvth83ACR%2BH%2Fet55DyuDBwoRvbMCbpucPKZn0LfptVoBWFfK55PX6hygpBF%2BHu1cWoY2z%2FQG9ZXuYLgl6Y3hH0O35LPXn21eZZ438%2Fvtkfxf8AeWMOISoFknFVWIX1GZLRVtblbOYXmCx0b%2BfHR4iyolNgpoS29WWURPQO8ZNPbYm1LD6Xx%2BiCSD2miQMjcWheqMaHZsEnsRnH1wBb2vf%2FhAi369Z6Z45cs7jikmL1cu9wyzLAuD0SXyl8DzvPVb%2FqFKL2Qo8KPFNKCUsvKUjKsi3xqjUwB%2FHdwASofpiNnPYvjnaFeh3rBAU5oBmuVC3JrX5%2BGwU%2F8081l3nBQW3tDcdiTK5%2BB1SFYn0fbqwAQVSTg6OnaHffGnJTKTvGP4MRQi2gYr8qJEy8XPi8peFlm5ti56v9of8tPmylDFdDAPovMFAX1L3QO%2FhW2XiLe1N3%2FSd6JmsUtwS8P5RKbsAN1ERNoIf5Ml%2BcCqJXRzftshmYfVxLOzVW9POuLFXq2kmc%2F%2FoRpJn9ynDB7PikzjgFTOY%2BMpFE82T7T%2FS4DHdfOjFPSDCGsc3RBjqkAe%2Bg5p4%2BulvAs51U1RX23YPB3qpRu85xzBRweZsg8U9jRlIQ9yN%2F%2BG%2FgRp%2FNQuUfCJKLc5OC1xW0WSPUAcnEWNRjTfdiVxB24eXdWCpPq8NThMwzBN6gQahus6wn1pUefhCY03RNl16d1JCvw31yDMUArkINatfwaaZcB7nNptwEx1A3iVXghyE1bBrJ%2F6IxNOCTUG2yKxSZeQZKqMUHM2KrbIf3&X-Amz-Signature=f516965bc853a81bcd10387d3ff8d91b6f7d4f085514e422831b5f389b42147a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
