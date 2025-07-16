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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKR7DVH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD6%2F97T7qW%2BFz3C3RSZU%2F47foCKTjGowyG9Nju7W0gZ0QIhAP1mghmPoEXsnJk%2BzLtqDZ%2B12qnePVB9Z6iVvgphi81aKv8DCFYQABoMNjM3NDIzMTgzODA1Igwk6Uojr0gwbUO6QjUq3AO85e7JRk9fEMuOg8p0jOwbYEcdqt5EzJbAHYBoOgnWL4tPZi0qFlE7Qum3s4875JTSZQpWktjdh72sr1p%2F81tJDtbXf7ulITQ3cWNi0Cgt%2FXg698sKpF0hxHDGfOo9tlL6Znfx4onUI1WTXgfGqjxh2lVt8NDKURaqboNIqb7tjpJsSWfRMppc3BIaH8tokxMCn%2FrgYVCwYN8qA5rmHHgkWxz0yDweIZf3COvuxmnPS1rHB3nrCMEhKNMGwArbK8zz%2Be1CiDVgySDTcxy4Ol1%2Bi6TCupvZT3oE4BdxtRLWKSve2gFdaR6cirx9SISkhDEXzhSvA1HZqkKwCpqAOs0ehpQOGPKnkgP5AzpJbJdN%2F2sXnsEtZjo0tu0hSE2Th2iUVDsay06RqoWe303%2BNbiJSdKGwfLaeL1idf5ygVV9jlM9hUNZfNxSIYd3ASpVL4rn3wbjXkHqO5f%2BVlP4uZ%2BkCNML8pcJBRc7rGmsUAoQRwRkiIpIV%2FN8cU6SEoJfHMB6M8sQUiZWkKip4AeQxW%2B59Rxnd9IEcCvgszlpO08spqHqC9eFJ3xyrV4r1Wi1dZdu4eqXbNW%2FGqQg2QM9dsREjv39v13X7gErqQMPnZsTR%2Fi44DInpyM%2BJg%2FK1DDG3dzDBjqkAZClwenWKhapCkb4du5%2FhbAQ5Kq%2FLmX3ASEHTk9rdhW45rdwjHdfW9i5xFE72kwzbfmofA8qCbHiyPcAZ3UYjN1agI7PRbIF%2FJ0u7zQ8VTS0UQjXmUvTYkB8aN2bQMvONXAUrEFs2AGkapnc%2BZuw2rer0xp7%2FzAWE6uhP980mezqHCqwnkfKMkb%2Bw6Vl6WP8it0x91auCzVJtB5FNve0OMIu5Rgn&X-Amz-Signature=55e9c68a181dd0927a94fccb6aff39426796b881cecbd6c0b65268ca48d9822e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKR7DVH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD6%2F97T7qW%2BFz3C3RSZU%2F47foCKTjGowyG9Nju7W0gZ0QIhAP1mghmPoEXsnJk%2BzLtqDZ%2B12qnePVB9Z6iVvgphi81aKv8DCFYQABoMNjM3NDIzMTgzODA1Igwk6Uojr0gwbUO6QjUq3AO85e7JRk9fEMuOg8p0jOwbYEcdqt5EzJbAHYBoOgnWL4tPZi0qFlE7Qum3s4875JTSZQpWktjdh72sr1p%2F81tJDtbXf7ulITQ3cWNi0Cgt%2FXg698sKpF0hxHDGfOo9tlL6Znfx4onUI1WTXgfGqjxh2lVt8NDKURaqboNIqb7tjpJsSWfRMppc3BIaH8tokxMCn%2FrgYVCwYN8qA5rmHHgkWxz0yDweIZf3COvuxmnPS1rHB3nrCMEhKNMGwArbK8zz%2Be1CiDVgySDTcxy4Ol1%2Bi6TCupvZT3oE4BdxtRLWKSve2gFdaR6cirx9SISkhDEXzhSvA1HZqkKwCpqAOs0ehpQOGPKnkgP5AzpJbJdN%2F2sXnsEtZjo0tu0hSE2Th2iUVDsay06RqoWe303%2BNbiJSdKGwfLaeL1idf5ygVV9jlM9hUNZfNxSIYd3ASpVL4rn3wbjXkHqO5f%2BVlP4uZ%2BkCNML8pcJBRc7rGmsUAoQRwRkiIpIV%2FN8cU6SEoJfHMB6M8sQUiZWkKip4AeQxW%2B59Rxnd9IEcCvgszlpO08spqHqC9eFJ3xyrV4r1Wi1dZdu4eqXbNW%2FGqQg2QM9dsREjv39v13X7gErqQMPnZsTR%2Fi44DInpyM%2BJg%2FK1DDG3dzDBjqkAZClwenWKhapCkb4du5%2FhbAQ5Kq%2FLmX3ASEHTk9rdhW45rdwjHdfW9i5xFE72kwzbfmofA8qCbHiyPcAZ3UYjN1agI7PRbIF%2FJ0u7zQ8VTS0UQjXmUvTYkB8aN2bQMvONXAUrEFs2AGkapnc%2BZuw2rer0xp7%2FzAWE6uhP980mezqHCqwnkfKMkb%2Bw6Vl6WP8it0x91auCzVJtB5FNve0OMIu5Rgn&X-Amz-Signature=ed9db617bb359dda249e9c815745e64c200e5894e2fa5e1678f29e4df72c43e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
