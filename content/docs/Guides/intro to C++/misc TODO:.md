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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3HE3U6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDPpS9C45CngCENmVfteOpe5CXlj7A6WoPmmOMFScBWuwIhAKxgKon6y%2BwRTO%2BTCvnPNHK%2Fawt9mpa%2FNLyEjeLc5oLfKv8DCB8QABoMNjM3NDIzMTgzODA1IgzwrZIXGF6znC%2FLrxwq3AM0cs9UC0COjqOk5RXS26scykFy%2BUEwVQ9OO68Y9lNz4cMapDoT8kAJhj41iMRz3MHUZn3OAU2zS2Qea4NPI99DmZNXXpOOMPJrn1rwxHLFvgO0Pu1BIDrJEqKLpBvABcaCS5EnAVGKNztXy6eLWEmDZNmHywZo877dG8w3VvqXVBu%2F1CzfrIdTqgJ4gsjiEHYsho%2B%2Bl5jZRNjE7Avh9DDCNYWa3SDzLNMG729VhPR1FM5NFPXvVE%2FY5BwWeWyoubYYzH%2BWV7faKmSQDEgTTyiPqEmNHVnsfxPupNc4gNxJBu6gAGUZPR0Q07YQfpspwoIkDAqdr8ZCwqBLuhnVz28Az0I4v0LnJOQ3lsW9jdBCg75lrinVev17OKywj3CA0TU9MFxeV2dJs3o6qh8R7FF%2B3oyHjE%2BCXNDTqZ%2F3Kpf4YF0Zjqj%2ByFnUYJj6hUYoOUvyJ9we0JVGXk93Df9qIGUnOti9KwMUN0sIREn8V0unSK%2FWb7zz1J8Y3ihGj6rTx00nmKmOk%2FVC%2FkpQYdudDKk5cKnR8WJ%2FyDAK3i7bV%2F3c0gi8eo9h9JnlrOjsIdBuVvyAAFL%2FAE%2B0RtYfGKiZMhIazlCUa6JsU%2BmXTwt93EZJNLUE6megRk6EpZyUiTDHyNDDBjqkAc0bYyaIQSDrUXqfM%2BzcJHUdUjpJACt14yrMphs0ZWhTg4T6RqWzK0gdRbrps9SY6UDtJwuh1IJ%2FVkiwOTSigfUsEocdrgmTidXxpcG%2BzInqzIuvrQXdKDsPAQkSIFijU5mVxLKBi2AcssAHtJA0J3zbOTc64zlP4dIUtKRNSfdaxk0Y%2BwqeTy8i4L19KSUjWHfrsIqGV%2FjDvnY6qv%2FRBV4aRffw&X-Amz-Signature=e977ef2da1d3709f6cefd33e923b6f1bcb53b6858d27d319c64f1f1d9aee19ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3HE3U6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDPpS9C45CngCENmVfteOpe5CXlj7A6WoPmmOMFScBWuwIhAKxgKon6y%2BwRTO%2BTCvnPNHK%2Fawt9mpa%2FNLyEjeLc5oLfKv8DCB8QABoMNjM3NDIzMTgzODA1IgzwrZIXGF6znC%2FLrxwq3AM0cs9UC0COjqOk5RXS26scykFy%2BUEwVQ9OO68Y9lNz4cMapDoT8kAJhj41iMRz3MHUZn3OAU2zS2Qea4NPI99DmZNXXpOOMPJrn1rwxHLFvgO0Pu1BIDrJEqKLpBvABcaCS5EnAVGKNztXy6eLWEmDZNmHywZo877dG8w3VvqXVBu%2F1CzfrIdTqgJ4gsjiEHYsho%2B%2Bl5jZRNjE7Avh9DDCNYWa3SDzLNMG729VhPR1FM5NFPXvVE%2FY5BwWeWyoubYYzH%2BWV7faKmSQDEgTTyiPqEmNHVnsfxPupNc4gNxJBu6gAGUZPR0Q07YQfpspwoIkDAqdr8ZCwqBLuhnVz28Az0I4v0LnJOQ3lsW9jdBCg75lrinVev17OKywj3CA0TU9MFxeV2dJs3o6qh8R7FF%2B3oyHjE%2BCXNDTqZ%2F3Kpf4YF0Zjqj%2ByFnUYJj6hUYoOUvyJ9we0JVGXk93Df9qIGUnOti9KwMUN0sIREn8V0unSK%2FWb7zz1J8Y3ihGj6rTx00nmKmOk%2FVC%2FkpQYdudDKk5cKnR8WJ%2FyDAK3i7bV%2F3c0gi8eo9h9JnlrOjsIdBuVvyAAFL%2FAE%2B0RtYfGKiZMhIazlCUa6JsU%2BmXTwt93EZJNLUE6megRk6EpZyUiTDHyNDDBjqkAc0bYyaIQSDrUXqfM%2BzcJHUdUjpJACt14yrMphs0ZWhTg4T6RqWzK0gdRbrps9SY6UDtJwuh1IJ%2FVkiwOTSigfUsEocdrgmTidXxpcG%2BzInqzIuvrQXdKDsPAQkSIFijU5mVxLKBi2AcssAHtJA0J3zbOTc64zlP4dIUtKRNSfdaxk0Y%2BwqeTy8i4L19KSUjWHfrsIqGV%2FjDvnY6qv%2FRBV4aRffw&X-Amz-Signature=ffbbea728c0ec0aac6ebb690bbd53058567a8866add7a36f4a5f0c4b9c51c60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
