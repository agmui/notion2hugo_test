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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HV4HEFJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmW%2BJ14M9Z9uTw1%2Fxba7NZ5ygTgR%2BNgGKrVdJVlSLDtAIgaJLMr9ISskiumnv9nKjLbnkIZixFdUGamEp7%2BEcNB1Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDfLitaY8ZU0G1hIgSrcAx49SNXm1uqh7B7LMy2kgryH%2FAfr8KW5xi%2FeylDa11HDQ9NFBTZFl8yN%2BAtUqs3i9VCV1MRbHSxxF03X4gRbWYj1foYhdUzX4uCaRCGJyZBBzy4oVf9JkWQF%2F%2BP3wpg0yMthcvhMdf%2BKWGC4qCQslHPnosQbMHnCUFxaU98vGtHL4QEMqahbZ%2FMdU7UwiMCiJiPRaWfFGcAGh4k%2BN%2Fw%2F6jSJcJbVum4qLUSw1qFQ8PB%2FGvpILnMPW5MmPzWcrbQicxNq45MTc3NU88egNxIY9trpgSqHCGYv%2BVvHDB1WK%2FxW%2FWE0UI8t0gdlnATdzEsLZA5rwfjgpBNiaSd4XRfSrUPc9y6ReY9P9qBYUU6r7aXsjZkDfpMXh6a99gtiTDsJSBn%2BIjpFVLJbwjaCqZfqAwk6PkbdBGaKppRn3UBs5QWXQNntll%2BGHrkG24hTz4rspyIQADO3psQY9%2BRnUXPDHaMfmnxTVOed6Vsnt%2BxcoDN6ltYxVLlItUsSqFYL%2BsSKJquvToFxgqr8jybodEfX1Y4ouqtvLgCl%2Fc92W8OVkjwQ6x%2BP9X9bRlsqvEFPAyJisZ7cKTtjYY6D%2BQwQvGbaM55GxOS9TK8x8utW1omkpocXy9AlNXNxoK6%2BhG5BMKyt7MoGOqUB8of6jU%2FJL774ZfmBlnRXve%2FsBV2GlnzQ%2FVKuAAYKgjOYK95JD9O6zOnoNqoAyzJqEkiYc6Wr73TZ7D2yNlj%2F55vKj3Gp%2FVQ%2Bf%2B8eOh%2BacxmuDqVjwWkPuBeNdOTvj1SZx6ku2t70mkFtlphN%2F0jGQEhzILDOqpNJjKeYPsz3fWgTyQdx%2BT66YwMqM7qmJ1P3xaigLOeDMKwzu4PGXZuj1i%2Ftwl85&X-Amz-Signature=cc8073d1732a908639a03669eb7d79dcd62dce44231a5b299b4454d7ee13c3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HV4HEFJ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmW%2BJ14M9Z9uTw1%2Fxba7NZ5ygTgR%2BNgGKrVdJVlSLDtAIgaJLMr9ISskiumnv9nKjLbnkIZixFdUGamEp7%2BEcNB1Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDfLitaY8ZU0G1hIgSrcAx49SNXm1uqh7B7LMy2kgryH%2FAfr8KW5xi%2FeylDa11HDQ9NFBTZFl8yN%2BAtUqs3i9VCV1MRbHSxxF03X4gRbWYj1foYhdUzX4uCaRCGJyZBBzy4oVf9JkWQF%2F%2BP3wpg0yMthcvhMdf%2BKWGC4qCQslHPnosQbMHnCUFxaU98vGtHL4QEMqahbZ%2FMdU7UwiMCiJiPRaWfFGcAGh4k%2BN%2Fw%2F6jSJcJbVum4qLUSw1qFQ8PB%2FGvpILnMPW5MmPzWcrbQicxNq45MTc3NU88egNxIY9trpgSqHCGYv%2BVvHDB1WK%2FxW%2FWE0UI8t0gdlnATdzEsLZA5rwfjgpBNiaSd4XRfSrUPc9y6ReY9P9qBYUU6r7aXsjZkDfpMXh6a99gtiTDsJSBn%2BIjpFVLJbwjaCqZfqAwk6PkbdBGaKppRn3UBs5QWXQNntll%2BGHrkG24hTz4rspyIQADO3psQY9%2BRnUXPDHaMfmnxTVOed6Vsnt%2BxcoDN6ltYxVLlItUsSqFYL%2BsSKJquvToFxgqr8jybodEfX1Y4ouqtvLgCl%2Fc92W8OVkjwQ6x%2BP9X9bRlsqvEFPAyJisZ7cKTtjYY6D%2BQwQvGbaM55GxOS9TK8x8utW1omkpocXy9AlNXNxoK6%2BhG5BMKyt7MoGOqUB8of6jU%2FJL774ZfmBlnRXve%2FsBV2GlnzQ%2FVKuAAYKgjOYK95JD9O6zOnoNqoAyzJqEkiYc6Wr73TZ7D2yNlj%2F55vKj3Gp%2FVQ%2Bf%2B8eOh%2BacxmuDqVjwWkPuBeNdOTvj1SZx6ku2t70mkFtlphN%2F0jGQEhzILDOqpNJjKeYPsz3fWgTyQdx%2BT66YwMqM7qmJ1P3xaigLOeDMKwzu4PGXZuj1i%2Ftwl85&X-Amz-Signature=ce39634993396d3d4211e659399f525760eba6ed2f9484ac95990acc2d9ba333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
