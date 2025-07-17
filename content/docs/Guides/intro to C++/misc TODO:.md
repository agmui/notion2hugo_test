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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMKH2ON%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHa5oltoqnk59fljkQOrDy3j4PMVzBDjhMN0T6o7MCpWAiAX7ekYUlxVx8lqcU4t3irYJChTc%2BbIu8owWT1Ita5ZbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNicoZ%2Frgf9x%2FavtDKtwD7VYLOg9jYF4ynjn1m1Ai5EnF139rTi91VxvVxzlAsvbuIJCn%2BF5iRuromfdNsyMqqjk%2F9NOGirNz8%2BoFXQy9LiyFeFJ%2BrNdAKTcFxgVCWl6OhrQS%2BlrZQYu1VKhZCYkyIux2jdm7mpQZOl%2B%2BEWaqrZr1geIbPy%2F2TycN%2FKHzU9FBSLOjvQ6ebuMjUKT8%2F9uP6iidiH5FEFSdfSbi%2BogiPllzqTfP5NEIpTyewuhrc%2BPq8Bu1oDbwjnr7NQGb1q%2Bn80JepUTkGGseu9Jx2U4Yf29UL8x%2FOlEU9fovxaentmrUDxJ5H9uTLjDnRYKAGDIQ1vHQcPuzC3RsApdy6E7WK3EY0hkAWIkxQIXx7ma5xDAQixYBXBVKi1dkcUP0tOVuebhAVNrotqZ5mBdrwwj%2BYagh%2BfR6fxyavCML5XS7%2B0%2FhexdlMfG94bs2gS1mI1hf8b0aOohKknqRCMn987MpZ7rYUXZ%2BDbuTcNYih4igWBGOKjcIgdE7JNEwHn7cx0oyg%2FUGi8h1NtveRHCwMcJYhdMDMgBRWXLQJixA6gaslz6KcQZS2OS7fbZOxcGFyGKEmHxnXua5U85rfRgEVS9EfrCf%2FljdHB0losaFuJpydqBBnUT6C7pX4NlHR7cwnO7hwwY6pgGbHDGTclVKs379UTKloJGD2kTO2ZtRJWdbbGnzPr5dUVYGQj7xC9lQWGxs5BoxHyGn9AAMi5DUPghziiT6dWmePcvtLMLDQ2XFtvHgtMB%2BJe4N9eSpmC3OgkDV0XSW%2BHN1uQXcxkaUAeeqAHPniXswC4I8Aw8MJ2TuEw5O71hSQfKjNnPy0tRWe2%2Bq%2Fo%2F%2FX9SehUKatYD6204Dyq2NnhABdHy0Ti6C&X-Amz-Signature=ae1f627e7822bfa9727498b32d3f1981f834b9f0656844c50f0774c962e6c38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMKH2ON%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHa5oltoqnk59fljkQOrDy3j4PMVzBDjhMN0T6o7MCpWAiAX7ekYUlxVx8lqcU4t3irYJChTc%2BbIu8owWT1Ita5ZbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNicoZ%2Frgf9x%2FavtDKtwD7VYLOg9jYF4ynjn1m1Ai5EnF139rTi91VxvVxzlAsvbuIJCn%2BF5iRuromfdNsyMqqjk%2F9NOGirNz8%2BoFXQy9LiyFeFJ%2BrNdAKTcFxgVCWl6OhrQS%2BlrZQYu1VKhZCYkyIux2jdm7mpQZOl%2B%2BEWaqrZr1geIbPy%2F2TycN%2FKHzU9FBSLOjvQ6ebuMjUKT8%2F9uP6iidiH5FEFSdfSbi%2BogiPllzqTfP5NEIpTyewuhrc%2BPq8Bu1oDbwjnr7NQGb1q%2Bn80JepUTkGGseu9Jx2U4Yf29UL8x%2FOlEU9fovxaentmrUDxJ5H9uTLjDnRYKAGDIQ1vHQcPuzC3RsApdy6E7WK3EY0hkAWIkxQIXx7ma5xDAQixYBXBVKi1dkcUP0tOVuebhAVNrotqZ5mBdrwwj%2BYagh%2BfR6fxyavCML5XS7%2B0%2FhexdlMfG94bs2gS1mI1hf8b0aOohKknqRCMn987MpZ7rYUXZ%2BDbuTcNYih4igWBGOKjcIgdE7JNEwHn7cx0oyg%2FUGi8h1NtveRHCwMcJYhdMDMgBRWXLQJixA6gaslz6KcQZS2OS7fbZOxcGFyGKEmHxnXua5U85rfRgEVS9EfrCf%2FljdHB0losaFuJpydqBBnUT6C7pX4NlHR7cwnO7hwwY6pgGbHDGTclVKs379UTKloJGD2kTO2ZtRJWdbbGnzPr5dUVYGQj7xC9lQWGxs5BoxHyGn9AAMi5DUPghziiT6dWmePcvtLMLDQ2XFtvHgtMB%2BJe4N9eSpmC3OgkDV0XSW%2BHN1uQXcxkaUAeeqAHPniXswC4I8Aw8MJ2TuEw5O71hSQfKjNnPy0tRWe2%2Bq%2Fo%2F%2FX9SehUKatYD6204Dyq2NnhABdHy0Ti6C&X-Amz-Signature=10b92f9b47cee6202938a3e2cacf4a4eae533b22a8db53cd980226e68a2958da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
