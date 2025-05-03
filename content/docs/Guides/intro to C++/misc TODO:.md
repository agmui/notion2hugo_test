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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWICRVQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAgZ4e9aGzXTRpBBfxBbKrNyg1antJ4F3PUl9yRcQIKpAiEAlM274tueCokzARCZnvOKdJkQjhBSmBQ121yxtaDkOq4qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx8rxGvzcXloKe%2FlSrcA2QsmNqbcb8ba1TSnHIwPSK70r4JXejilSkaobwZjzZtG%2FR37DBEICYQ0lLCjix20dMBfj7QC4mHe6RppJKZV19frWMzhFD5f%2FqNCWs73SdS7TzN4C0yvUhqzFUyGKLo5M3fUNwshBEAi098MwRkCa8QZomgX1Vo9lYSZf589iQWTUF6fS7q1rLKsdvCvkcoKfNGQZnAMOKHIn8C%2BkXsaEihS5oQPPiXxm4twRic%2FIK02KatTNaQilQCo0FOaCTdso7oraTAsRUqDla4YiJj9n5vsCu2BlbsCw0FZb4PTJM1AClZbKmDpB0URAYRvTjasIDQHoQoN71etDDrNL%2FK4e1bOancmQQWhPXdftXLfpusVhNXmqo0xo4qNGWrUVkHw5qT7PpRzFt2j5PRGkgx7xTsJbXqygcsmUPNjNA4kl7lR0UcUWA0CUhuTrNKSP1PAv5wKYmMzeoAsE21n71p1hhHYiWIGW%2Ficq8nU8qyvG51qXBvqmjXOnQxSTyiFwSupnpbZ0qNOBxA8SIZDb%2F5F9gKLJM%2FDaxZpeGR%2FjRN%2Fup5FEvzRznV31jRVqVHZI5KdCNhqIXswFJMljUlCdVp7IdrV5i%2F0XpraYU0Crfx%2FvfCdnlVdantWidnuE2SMJmz2sAGOqUBG9DL9AD3%2FyI7CyUHn90N2N6a9gFgJ4XMx3h0PyqIZxQd0o%2F%2BMHkmo%2B%2FWgnFX3ogS8EhxSrwJRErVA9BUVnyysRTUXbwgLATBNwoU3C%2FBqVT9A80SWpsvCHsWECNMPe8wj6%2BddaNofmzalcuLSsYmQa%2FSOgPoopJYmucJ9fLF%2FJOLFW4EAnP%2F3ndFXL1X6BP4H3FU7%2BW9qM2uzohpRvSIpyqqc7gE&X-Amz-Signature=87e8ce40aba40bed266002accf857a46c37973d06738156fcfbc8733ed4e07d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWICRVQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAgZ4e9aGzXTRpBBfxBbKrNyg1antJ4F3PUl9yRcQIKpAiEAlM274tueCokzARCZnvOKdJkQjhBSmBQ121yxtaDkOq4qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx8rxGvzcXloKe%2FlSrcA2QsmNqbcb8ba1TSnHIwPSK70r4JXejilSkaobwZjzZtG%2FR37DBEICYQ0lLCjix20dMBfj7QC4mHe6RppJKZV19frWMzhFD5f%2FqNCWs73SdS7TzN4C0yvUhqzFUyGKLo5M3fUNwshBEAi098MwRkCa8QZomgX1Vo9lYSZf589iQWTUF6fS7q1rLKsdvCvkcoKfNGQZnAMOKHIn8C%2BkXsaEihS5oQPPiXxm4twRic%2FIK02KatTNaQilQCo0FOaCTdso7oraTAsRUqDla4YiJj9n5vsCu2BlbsCw0FZb4PTJM1AClZbKmDpB0URAYRvTjasIDQHoQoN71etDDrNL%2FK4e1bOancmQQWhPXdftXLfpusVhNXmqo0xo4qNGWrUVkHw5qT7PpRzFt2j5PRGkgx7xTsJbXqygcsmUPNjNA4kl7lR0UcUWA0CUhuTrNKSP1PAv5wKYmMzeoAsE21n71p1hhHYiWIGW%2Ficq8nU8qyvG51qXBvqmjXOnQxSTyiFwSupnpbZ0qNOBxA8SIZDb%2F5F9gKLJM%2FDaxZpeGR%2FjRN%2Fup5FEvzRznV31jRVqVHZI5KdCNhqIXswFJMljUlCdVp7IdrV5i%2F0XpraYU0Crfx%2FvfCdnlVdantWidnuE2SMJmz2sAGOqUBG9DL9AD3%2FyI7CyUHn90N2N6a9gFgJ4XMx3h0PyqIZxQd0o%2F%2BMHkmo%2B%2FWgnFX3ogS8EhxSrwJRErVA9BUVnyysRTUXbwgLATBNwoU3C%2FBqVT9A80SWpsvCHsWECNMPe8wj6%2BddaNofmzalcuLSsYmQa%2FSOgPoopJYmucJ9fLF%2FJOLFW4EAnP%2F3ndFXL1X6BP4H3FU7%2BW9qM2uzohpRvSIpyqqc7gE&X-Amz-Signature=e4335bd200a2b29207a02e849233192e2a84afe8d96363886a06e678b85a66db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
