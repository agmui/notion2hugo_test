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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFMCAL7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx6XSr%2BvlmyGEWkUr5M3PMU0CCrSqe%2BDRMeo4%2BxZMGlwIhAN4QMwuItRBOm0OaVen2MZyCf5lDhNkDWWYbdwk%2FoD7IKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx39OOIikqgRxJAMGAq3AOmSkaPc7kpoH7GwCt12us7AitdI32sy3ENmvx%2B1zhPFuwdEgiAHtuVfJpzwvadWLowHohLYjOnpmDMA4VRKZTaGXzeOuBmCWBUqt115HYTfbv%2F61o0goyuGiH9I1tweE1%2FMkTYrvtGxiPm5LJJ%2FmBMYgsVoF3ja3B6n4YY%2FSLHIqAHMdSt%2BWeCZQAnW5wo%2BbG%2FkvS9QORai4BDPIsbfQ%2BlHmUYk0V50dVZipEoSdMKhHI32kJ1X%2FZbYM5oDdJoZdHqviXvD9TrkJSptjzQlcsq6JVSnBfaQASxJjd5%2Bmm0DHzZwCZLofbrInGDFvrRcq0jMST%2FeFbHMO0x%2F2FAY6qTCuQYXVvKcQcwsmefmverLPqcHtlk0aBw0B%2BmArGLCI5BixNob57ht3CSA7WbaRl1iE%2Fk6Qi%2FMciDZUwTl3tzQE9ztp%2BI2VyBDIY6gTWOZ3%2FXnYh18%2FGl%2FeGkEJN1TQQ2QnAgb9BFMNhVXWhK9zWl7TP2dlmbE9xpS42zVOns4Q4h0w5wTCsdrTzknTRHA7pz2lnPC3Nt97y2rFuhBtMM16rN8xCdUG26LDBJMC8y1vwGIMiWbI%2BX8edLB0irl8u575SlZKASje3ByGW7NHBzbKsTwd%2Fwr9ZpgvnAMzCd1p7CBjqkAdncaldldfCf5KXqR3Yxp64oeMjquXLDpp%2FjoMsaNVR%2FyE8wPCOCR2VWLin%2Flmo7ooeKY1biGfMXrlBlTNcd5guLcu0MJB4JUoDQU%2FLL01EiPrgblgEihu9EBrVQwfRtlLwv0Awz2m7x7htfPdGiJPuwqZRrJKDpFf2pJCgqvBKX6VhxVxpErItk0xNRHIesN6unB7ja1AGCtWW9kAWwiKSRRt7l&X-Amz-Signature=b266d7ee244317d027c5ba11d8953e388f15252418a1ca302da9852ace3302c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFMCAL7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx6XSr%2BvlmyGEWkUr5M3PMU0CCrSqe%2BDRMeo4%2BxZMGlwIhAN4QMwuItRBOm0OaVen2MZyCf5lDhNkDWWYbdwk%2FoD7IKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx39OOIikqgRxJAMGAq3AOmSkaPc7kpoH7GwCt12us7AitdI32sy3ENmvx%2B1zhPFuwdEgiAHtuVfJpzwvadWLowHohLYjOnpmDMA4VRKZTaGXzeOuBmCWBUqt115HYTfbv%2F61o0goyuGiH9I1tweE1%2FMkTYrvtGxiPm5LJJ%2FmBMYgsVoF3ja3B6n4YY%2FSLHIqAHMdSt%2BWeCZQAnW5wo%2BbG%2FkvS9QORai4BDPIsbfQ%2BlHmUYk0V50dVZipEoSdMKhHI32kJ1X%2FZbYM5oDdJoZdHqviXvD9TrkJSptjzQlcsq6JVSnBfaQASxJjd5%2Bmm0DHzZwCZLofbrInGDFvrRcq0jMST%2FeFbHMO0x%2F2FAY6qTCuQYXVvKcQcwsmefmverLPqcHtlk0aBw0B%2BmArGLCI5BixNob57ht3CSA7WbaRl1iE%2Fk6Qi%2FMciDZUwTl3tzQE9ztp%2BI2VyBDIY6gTWOZ3%2FXnYh18%2FGl%2FeGkEJN1TQQ2QnAgb9BFMNhVXWhK9zWl7TP2dlmbE9xpS42zVOns4Q4h0w5wTCsdrTzknTRHA7pz2lnPC3Nt97y2rFuhBtMM16rN8xCdUG26LDBJMC8y1vwGIMiWbI%2BX8edLB0irl8u575SlZKASje3ByGW7NHBzbKsTwd%2Fwr9ZpgvnAMzCd1p7CBjqkAdncaldldfCf5KXqR3Yxp64oeMjquXLDpp%2FjoMsaNVR%2FyE8wPCOCR2VWLin%2Flmo7ooeKY1biGfMXrlBlTNcd5guLcu0MJB4JUoDQU%2FLL01EiPrgblgEihu9EBrVQwfRtlLwv0Awz2m7x7htfPdGiJPuwqZRrJKDpFf2pJCgqvBKX6VhxVxpErItk0xNRHIesN6unB7ja1AGCtWW9kAWwiKSRRt7l&X-Amz-Signature=49b71486d0e8db0c6c98427ec785872565b424e3ad27a3c3c468f5892fe064a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
