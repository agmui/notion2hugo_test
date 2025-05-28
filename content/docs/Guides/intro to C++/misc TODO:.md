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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XM6Q63C%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh0ro4CfCHodmrg6FTRBNILiCm86oeLmvHXmSAORkRCAIhAKURG7cB%2B9BOQ%2FqktVZuF2SsVnhtqgfxX%2BVGMeaEV4mWKv8DCHAQABoMNjM3NDIzMTgzODA1IgxAuQVJTkXk2yd%2BtMIq3AOpGWFB5rnV6IGqzN6jyuGS9SezZw%2FS1A%2BQEwWRon%2F1gQwSNNn3oJz3PxGKGYsRyGE0P1f6YSP%2BY%2B8oBi7F2B6k1%2BX0WC2E7Gmv5VnI4okwpNbDtVPu3U5sB3D%2FJyWEI9ysFDFx%2FUfwzUvUiWtzXi4MdRbY17tM7vl%2FTkiqzk1mZ4wIeAspFSN%2Fwvh92iq%2FU0ZiJYCWnz7oCxK2W2g1ttQXvNkUlU6Hl0VKwOW09NRcLuj4a%2FcNCqU1amBcQKraWH6%2FgOUXsbdohNU%2F5SSJhWK%2BLrF7AABu8D5LYVy%2BDMWmkZdqtni23zgp0HnYwyeHfhv1JLepvU4kOyUrwRjd%2F3PTrYOMDwmNS7SGr3SygKmRKI%2Fie64hatIN%2FD0YMAesLUNjJxnvBO8jhLx9%2FEMPSPsX9N5Z3Y7QNvt2RuahVHVz4A%2Fvuo0KzY%2Bd2PXAMGAtAzfpISD3giJ%2FGHDRT6a2ayr5wfoUGDjfU0cfaMTmbW0plOJxAwujWkvdKXBj295DcvRBJcPz7CEBM%2Fs6UPZS%2Bmlmh1r70gNqR5cgwegVv8NO4eWRl7n%2B%2BbpJh%2BSUrIxy25fUss3%2FfzQSneYfJQxhd3LmVeddhAY5aU9AUNKoZ4evSW3njVw3VjOrGYVChzCj9trBBjqkAQYYUWRUy74K6YvteJ9rTSX4t5dLA6ZfOjw%2Fyb9CkNRH7UnVkXyLBSIwyi5NxYtjA6ySWOQUtTTJSD8gNl%2F8Tt%2FO1erxos3UKCC3%2BUyAp5lGYuptT%2F18pUNNRkzGzqoYkvFqeH9WpfjmIXGBqUTwn9%2Bb3saKWhcwHSGL67flZJV5UCs10sFx%2FwYPoeGnXTbw9sIAcTRLz1seVtWgB1ENTEb9jmY1&X-Amz-Signature=8677ac617bfffb7b8078c7b66dada0e875c2c7a90adb20294b5e7412fdc23c97&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XM6Q63C%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh0ro4CfCHodmrg6FTRBNILiCm86oeLmvHXmSAORkRCAIhAKURG7cB%2B9BOQ%2FqktVZuF2SsVnhtqgfxX%2BVGMeaEV4mWKv8DCHAQABoMNjM3NDIzMTgzODA1IgxAuQVJTkXk2yd%2BtMIq3AOpGWFB5rnV6IGqzN6jyuGS9SezZw%2FS1A%2BQEwWRon%2F1gQwSNNn3oJz3PxGKGYsRyGE0P1f6YSP%2BY%2B8oBi7F2B6k1%2BX0WC2E7Gmv5VnI4okwpNbDtVPu3U5sB3D%2FJyWEI9ysFDFx%2FUfwzUvUiWtzXi4MdRbY17tM7vl%2FTkiqzk1mZ4wIeAspFSN%2Fwvh92iq%2FU0ZiJYCWnz7oCxK2W2g1ttQXvNkUlU6Hl0VKwOW09NRcLuj4a%2FcNCqU1amBcQKraWH6%2FgOUXsbdohNU%2F5SSJhWK%2BLrF7AABu8D5LYVy%2BDMWmkZdqtni23zgp0HnYwyeHfhv1JLepvU4kOyUrwRjd%2F3PTrYOMDwmNS7SGr3SygKmRKI%2Fie64hatIN%2FD0YMAesLUNjJxnvBO8jhLx9%2FEMPSPsX9N5Z3Y7QNvt2RuahVHVz4A%2Fvuo0KzY%2Bd2PXAMGAtAzfpISD3giJ%2FGHDRT6a2ayr5wfoUGDjfU0cfaMTmbW0plOJxAwujWkvdKXBj295DcvRBJcPz7CEBM%2Fs6UPZS%2Bmlmh1r70gNqR5cgwegVv8NO4eWRl7n%2B%2BbpJh%2BSUrIxy25fUss3%2FfzQSneYfJQxhd3LmVeddhAY5aU9AUNKoZ4evSW3njVw3VjOrGYVChzCj9trBBjqkAQYYUWRUy74K6YvteJ9rTSX4t5dLA6ZfOjw%2Fyb9CkNRH7UnVkXyLBSIwyi5NxYtjA6ySWOQUtTTJSD8gNl%2F8Tt%2FO1erxos3UKCC3%2BUyAp5lGYuptT%2F18pUNNRkzGzqoYkvFqeH9WpfjmIXGBqUTwn9%2Bb3saKWhcwHSGL67flZJV5UCs10sFx%2FwYPoeGnXTbw9sIAcTRLz1seVtWgB1ENTEb9jmY1&X-Amz-Signature=a105160c7b064caf546533dd8f2651ba3590259c80cbcfa0576a1950df08e71f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
