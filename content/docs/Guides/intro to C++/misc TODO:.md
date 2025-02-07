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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNHXNEV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD9T6OynJK5SHgWi8H8uwudcIq%2BW1fZrPjvL%2BBPW8vJVQIhAJUX3Gp3ugWO%2BoRL7F8zLRS1rfdcNKzNwqSCV0H8oc6oKv8DCGkQABoMNjM3NDIzMTgzODA1Igx1MHtWEVdfD3%2BGj0Eq3AO7EvBc2DVEVHCcxBPWDiXuN0yz3uCFI3S2kPSQenLUmV8em7zk5ZSPb0lxsfhkbPTP7GQgc1%2BZRokK3NJjn1V07xMmPbdV5hhMxGXcPT4bFDGFkHJweazqpIyka9erl1UL0aJisY5GB97D88lHIuFT7hG3G2SiLAwAjxj2coW4KnrufO4F2mOrw%2BLd0ZuVmxg%2BxkX%2BvOrlftUu5j7ePawPg%2BHOdy38Z75eznKCahe2gJiNI7Zfn0lfAijluQ9OV72v%2BWvyPB4J91lhz7VSb7UAPQT6gUfwdekGPIoRZfHojHjbghxtq01LOpl9aorvl54srW2v6pK637APxmp5Kp42AVTuCVJ%2BC0%2BbVhrnIb2oMuN8Mh8fn36jPUEMHscDZxkM%2BTmH4AFkVcVwvro7ZG7pULgGl24gg2dL2%2FfBhQ%2FjuDqINEOr0qdMrYDyv6UC68ZhuZI7ZZ9yTyykFPUa5N0FVGhWPXS%2FYb8ArymbJWx7IDlHOb35VIsL4IR13TqyMzmN4Td5z%2BwA%2FZYcah7kJU9cAyB3APFXJ8zptt0%2Fsju594xN%2BJvS9J7QuGjbS98GlTnbJxWy8E9s%2FD2lrQdX1vDscJZ1sr28FqHKwHH5RrLcV4zuyWfEK3mvrV2sMzDqm5W9BjqkAUiMvRGQj4aB15PqJpaKx5eA46rShbGL0OLHn%2B2cCbKpRp1dRr50fHNADR%2BFV1oEGu3vgxjnzYCZSJWiZ6nD96gi57sYYRib1MP2g3UhQOejFHPv4oCvoaPB%2BnL5k%2Bcqa2GWaGsY%2BfhBqr0STucsf02hluhDdafU6OBarwGKXu%2BZMmAN50PgdXan1G5Pw1E%2BMmiD5jnMS29qF5YB0zKJr7%2FbytxJ&X-Amz-Signature=a2d6feab5cca079cb178ea90d6c36579562144f027dfddcff11b76d7bca815f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNHXNEV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD9T6OynJK5SHgWi8H8uwudcIq%2BW1fZrPjvL%2BBPW8vJVQIhAJUX3Gp3ugWO%2BoRL7F8zLRS1rfdcNKzNwqSCV0H8oc6oKv8DCGkQABoMNjM3NDIzMTgzODA1Igx1MHtWEVdfD3%2BGj0Eq3AO7EvBc2DVEVHCcxBPWDiXuN0yz3uCFI3S2kPSQenLUmV8em7zk5ZSPb0lxsfhkbPTP7GQgc1%2BZRokK3NJjn1V07xMmPbdV5hhMxGXcPT4bFDGFkHJweazqpIyka9erl1UL0aJisY5GB97D88lHIuFT7hG3G2SiLAwAjxj2coW4KnrufO4F2mOrw%2BLd0ZuVmxg%2BxkX%2BvOrlftUu5j7ePawPg%2BHOdy38Z75eznKCahe2gJiNI7Zfn0lfAijluQ9OV72v%2BWvyPB4J91lhz7VSb7UAPQT6gUfwdekGPIoRZfHojHjbghxtq01LOpl9aorvl54srW2v6pK637APxmp5Kp42AVTuCVJ%2BC0%2BbVhrnIb2oMuN8Mh8fn36jPUEMHscDZxkM%2BTmH4AFkVcVwvro7ZG7pULgGl24gg2dL2%2FfBhQ%2FjuDqINEOr0qdMrYDyv6UC68ZhuZI7ZZ9yTyykFPUa5N0FVGhWPXS%2FYb8ArymbJWx7IDlHOb35VIsL4IR13TqyMzmN4Td5z%2BwA%2FZYcah7kJU9cAyB3APFXJ8zptt0%2Fsju594xN%2BJvS9J7QuGjbS98GlTnbJxWy8E9s%2FD2lrQdX1vDscJZ1sr28FqHKwHH5RrLcV4zuyWfEK3mvrV2sMzDqm5W9BjqkAUiMvRGQj4aB15PqJpaKx5eA46rShbGL0OLHn%2B2cCbKpRp1dRr50fHNADR%2BFV1oEGu3vgxjnzYCZSJWiZ6nD96gi57sYYRib1MP2g3UhQOejFHPv4oCvoaPB%2BnL5k%2Bcqa2GWaGsY%2BfhBqr0STucsf02hluhDdafU6OBarwGKXu%2BZMmAN50PgdXan1G5Pw1E%2BMmiD5jnMS29qF5YB0zKJr7%2FbytxJ&X-Amz-Signature=4c93ec57bffc9b7bdc3e45b6ecb3da324965728bc3d9125f7f22defc0a1e7f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
