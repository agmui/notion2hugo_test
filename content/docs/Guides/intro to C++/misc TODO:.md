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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGVWK7W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFdu6sOjPvzesuAG3Hm%2Bp1qUZ7JAgccfsbhZZJJZTztXAiBfVYWflka%2Bu48E%2BLkkYmVNUc7np6khjDw%2F8FOXO9b2vyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMKBhsIGnKpzzValbbKtwDjYSHsn%2FhsP7zjNzZ6tJQaX8lpz6FiezObKq68Cgn%2BR9m8%2Fl1lr8iQbA7fw4A4srY4n7xQSAzH9LWxbfLm4WRzBJLtF8pxgMEqyr80cCwk3a1d8%2B5u7FOfUO5rgLNMbK%2FOvbdRETOao3RcIHeZKrHSLF3ArxH4kXa%2FeVwBmp7jbhZlgLzwzsKWQLKAhCsFeOhjumIbqHXV9twWmrjRulQa9KtIEVPFjfLrCwDnsOyRgvGTrLRwqMafEj78LxhM%2F8ePmq5352azX%2BpTalNFLtUL70lqU5gWJlPPIt%2FXDH1N1oNU643myLz6qhZzWeRvOMlPST%2FIommFgoLGV%2B5HxAGKT1Aly0rsn6alXN30KpVmQsvIlL968FHySgpygpSPX3Q48Kf3oiB9lOs0ZZ%2BD5QpI%2F4ldDsJoUb4tGlVdnNgBTRZvONqD4nyX%2FK2DoD83Wje6FJGAVrreU4Z8vLoSG%2BZY8A2i5mYJaOAOVJsVwDExpLJVSLLGuxWRgpq4FIRam4iNefKOB1WwoQnmV19BiQ1OnANqvVJwFw0YxClZ7ZzpG6BIoMjkeQdtojMrxdjFl8EvGg631G2fNTuuGKZLpsJ0ZdQC95mlsLCwHQYkuVjS0b8PsItSscWBi%2FxyVkw%2BZ3PwQY6pgGD1xjxkdfMAvlb3Yem%2FijOIXMJ5HG9eL8N4l7BVppfgnTmy5mL9l3lci1F731Si17o%2Bctxueu7JRDr3WLDRSt6XSeYccVxahJzQEfmv555CJKupZXroqC011iDvk4ZJ3Sb21gNd1%2BIBGAerC%2FAozfOPqeHhN0fwcYp4I3RLwtFaIwFxR%2BZCnTFAzmAWTaAjwXxcei0D6tyZ3%2FutKmLk59xNSF2XCIx&X-Amz-Signature=ba5dfba0ff82bd5de31bb60de235c7ce62cbb1d51cbcb8cd31bf6daeebf4cfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGVWK7W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFdu6sOjPvzesuAG3Hm%2Bp1qUZ7JAgccfsbhZZJJZTztXAiBfVYWflka%2Bu48E%2BLkkYmVNUc7np6khjDw%2F8FOXO9b2vyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMKBhsIGnKpzzValbbKtwDjYSHsn%2FhsP7zjNzZ6tJQaX8lpz6FiezObKq68Cgn%2BR9m8%2Fl1lr8iQbA7fw4A4srY4n7xQSAzH9LWxbfLm4WRzBJLtF8pxgMEqyr80cCwk3a1d8%2B5u7FOfUO5rgLNMbK%2FOvbdRETOao3RcIHeZKrHSLF3ArxH4kXa%2FeVwBmp7jbhZlgLzwzsKWQLKAhCsFeOhjumIbqHXV9twWmrjRulQa9KtIEVPFjfLrCwDnsOyRgvGTrLRwqMafEj78LxhM%2F8ePmq5352azX%2BpTalNFLtUL70lqU5gWJlPPIt%2FXDH1N1oNU643myLz6qhZzWeRvOMlPST%2FIommFgoLGV%2B5HxAGKT1Aly0rsn6alXN30KpVmQsvIlL968FHySgpygpSPX3Q48Kf3oiB9lOs0ZZ%2BD5QpI%2F4ldDsJoUb4tGlVdnNgBTRZvONqD4nyX%2FK2DoD83Wje6FJGAVrreU4Z8vLoSG%2BZY8A2i5mYJaOAOVJsVwDExpLJVSLLGuxWRgpq4FIRam4iNefKOB1WwoQnmV19BiQ1OnANqvVJwFw0YxClZ7ZzpG6BIoMjkeQdtojMrxdjFl8EvGg631G2fNTuuGKZLpsJ0ZdQC95mlsLCwHQYkuVjS0b8PsItSscWBi%2FxyVkw%2BZ3PwQY6pgGD1xjxkdfMAvlb3Yem%2FijOIXMJ5HG9eL8N4l7BVppfgnTmy5mL9l3lci1F731Si17o%2Bctxueu7JRDr3WLDRSt6XSeYccVxahJzQEfmv555CJKupZXroqC011iDvk4ZJ3Sb21gNd1%2BIBGAerC%2FAozfOPqeHhN0fwcYp4I3RLwtFaIwFxR%2BZCnTFAzmAWTaAjwXxcei0D6tyZ3%2FutKmLk59xNSF2XCIx&X-Amz-Signature=80bfab8c019d4f38b75475d9fdd2ede818cd08ac5cc6c22e04d39856daa080e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
