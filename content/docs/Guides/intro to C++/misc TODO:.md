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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5HLRJV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHHg5LG8VzihhvJWM6tsyMzoRj5F0CoTdunT2cWDhFqBAiEAz7MDufb4YRD%2FYWijC%2BpZZOdbpO7ezTXKJ3lM1pJfhZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPGxuPKj56v14YcSWyrcAxhdCE9TdJZfpgEGlT9lUtB%2B%2FuuJc8Op6iryuCl1OqEUhUgagPt4P4BQ6B9WlOwE5Fpcgo7M1SMf%2BD9mzgULPEfQmYvBqkEkLh0w9amn7tUnxAm1A%2B2UFzBUw%2BKAoA8X79LSbIzkkCSXgML15AzG6pM8tgmlOW5CJTUaPNmwDgNZKUNdcijSpC6S42wa%2FP794ESdbjnvgCgDpVD%2BPRr%2BD%2FbpQFAzg%2FU3FwQagoswmxqUIhfggCeXKHzjOoO39Pen9y8K14gEzqmdkEeqEUySo6PR4NH%2F2tielgMgluW%2BE6L3pWYgc8M19UmtjiWmRzAj3YJ%2FcJ78cbJu1NSpgdZkmNSvRsTQcrVKJi0mUtLOftpoYyoG7Zcsm%2FzFR1s824mMN4UWtkeHYhTXW%2BfDIUruFDkLi3pd7RweGkxcKZeIHEtGvpbbaRkZhdx4Ja%2FXstMLjpHsN4UjD9x%2FmyIsFTXgxDBscGEm1F55uFIcbc8iEUrpIoqLBPSZXZT%2F7FleBFleOf4uQ5i7ABPZ5T1gykw%2FiMOYZ3t78tiS%2FrckTEuZJgeU1WpLeOrL6gwYAlFRQ0i87kFrHzJhgL%2B3Makq6Vhl1udsNzCjtw1nWagFbMsudANY0liV6M181F6IM4nCMN2dr74GOqUBSKD28ilakl87Sua90qYnvnNHViQLpx2tuM0wA7MBS%2FycIT2vkToOzJfrprxuTaW1xLFJOfOrSZkgFV6rDWlC57HQqbE6jrnIsL2IN09U8JfKlOK00RxIFh9vjeyX96LOOvEJwahccaaa3%2FlkhcncKGD9ZOHkBaOw3id5zbg8t5Qkkfh1UtShQqimDmNMPqEccsXkxoKfmWuSYcDoIzPfxb1Y1P6r&X-Amz-Signature=7131affc16f2b4e5d92c55a4f5bf6995debf10da9229e2a5bf3c522c7f2adb01&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5HLRJV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHHg5LG8VzihhvJWM6tsyMzoRj5F0CoTdunT2cWDhFqBAiEAz7MDufb4YRD%2FYWijC%2BpZZOdbpO7ezTXKJ3lM1pJfhZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPGxuPKj56v14YcSWyrcAxhdCE9TdJZfpgEGlT9lUtB%2B%2FuuJc8Op6iryuCl1OqEUhUgagPt4P4BQ6B9WlOwE5Fpcgo7M1SMf%2BD9mzgULPEfQmYvBqkEkLh0w9amn7tUnxAm1A%2B2UFzBUw%2BKAoA8X79LSbIzkkCSXgML15AzG6pM8tgmlOW5CJTUaPNmwDgNZKUNdcijSpC6S42wa%2FP794ESdbjnvgCgDpVD%2BPRr%2BD%2FbpQFAzg%2FU3FwQagoswmxqUIhfggCeXKHzjOoO39Pen9y8K14gEzqmdkEeqEUySo6PR4NH%2F2tielgMgluW%2BE6L3pWYgc8M19UmtjiWmRzAj3YJ%2FcJ78cbJu1NSpgdZkmNSvRsTQcrVKJi0mUtLOftpoYyoG7Zcsm%2FzFR1s824mMN4UWtkeHYhTXW%2BfDIUruFDkLi3pd7RweGkxcKZeIHEtGvpbbaRkZhdx4Ja%2FXstMLjpHsN4UjD9x%2FmyIsFTXgxDBscGEm1F55uFIcbc8iEUrpIoqLBPSZXZT%2F7FleBFleOf4uQ5i7ABPZ5T1gykw%2FiMOYZ3t78tiS%2FrckTEuZJgeU1WpLeOrL6gwYAlFRQ0i87kFrHzJhgL%2B3Makq6Vhl1udsNzCjtw1nWagFbMsudANY0liV6M181F6IM4nCMN2dr74GOqUBSKD28ilakl87Sua90qYnvnNHViQLpx2tuM0wA7MBS%2FycIT2vkToOzJfrprxuTaW1xLFJOfOrSZkgFV6rDWlC57HQqbE6jrnIsL2IN09U8JfKlOK00RxIFh9vjeyX96LOOvEJwahccaaa3%2FlkhcncKGD9ZOHkBaOw3id5zbg8t5Qkkfh1UtShQqimDmNMPqEccsXkxoKfmWuSYcDoIzPfxb1Y1P6r&X-Amz-Signature=7079d955972df0a84ca15b921f794905943e63d232c68b585747dc5b7169e0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
