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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7KJ7JY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY3vDx8YhG8cAWpQ%2BTELauPbB6ImNSJKxCPE7nZlQ8wwIgAwJXcvcp34ZiTgkkThQ2judVm2FmyG9oFO1B%2BVPZ0DYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDAZcqXNItKsKyAPF9ircA40FG0NgffJmlP%2BYX%2BVaYohUqu1QkrWHS%2FS%2BRIf1RzC98erLVslT1LXNCSf5UwbPVtCm0taeLskNe3EoZq6vCVkqN%2FuV%2BtIe6j2w6xLYM9hhVhfBwTilXv7gLBLRn8PoV9MWlodPXbpd1nRVlfvuBet68Oy9nW4EQkuOfLrYh6ISFwGZxJPFnUh1z2SqY6I6r3rdK1GNGsO76MFY81OXjgr1vrdiPy6omrZZhmQJGtfhRpokZrEGm2k5gRzbcUG0yAwdhOmbR3fVvw6on1EzbY3UQQutV2omqUIO872fAaNn8wdi47m%2FTTzd0CcdyIrQh%2FzZruawQlMm5AuAhnjPs29KI9JEVuWwkYJqgnhw6gQP8c3LcTB29EQjFTMLaMIJWQuq%2BZPbGimCSPkm%2BUJE1lFIkpL2cuYJ%2BG%2FPC1ZGn9jngOtYqhJF5Id%2BOwBUzq4mVLdIqr0BCHkzrd1Jmi5Kq33Ci2czn13FVekrwgmRBLJsAUpd1iomLh%2BZZiHYWm%2F1v92UFQGGyj2x4K6xxquWHcwetNRg3GIrLMNHtwcKxvosur1NSv2pOCpykMasfFiUewZyv%2FstUfcO7%2F6GFZ94dJK4c%2FgV0Az27a%2BzlGbZuC3y1LGTSQl4MFlw9OUpMPvvpr4GOqUBYewpwCnw3TlqGHHogmjKUVGnzRx%2FkX0K%2F3d1%2Fp0E7DgO6BNHnEimmUMJLw2Vc6ksUQjMN5jhymEqBTlKVR6SMD0AmaaWft3DKrrSnPXlJpXFebdQuWhMbQ4wL4YhItfKXCFZ%2BS6o3dy8bbga0SgmcZgnccz27YpKJoBxU0P2u%2FLU7Hfq%2FC20DkcJ3dix4vjM9uwDOqjvuh9VM2SnvKxl7fUIZ%2F6V&X-Amz-Signature=e0c2e12800ac26cda1bbbcb26170a9731994aedb79f3cc5ed1f2647dabc9c26d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7KJ7JY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY3vDx8YhG8cAWpQ%2BTELauPbB6ImNSJKxCPE7nZlQ8wwIgAwJXcvcp34ZiTgkkThQ2judVm2FmyG9oFO1B%2BVPZ0DYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDAZcqXNItKsKyAPF9ircA40FG0NgffJmlP%2BYX%2BVaYohUqu1QkrWHS%2FS%2BRIf1RzC98erLVslT1LXNCSf5UwbPVtCm0taeLskNe3EoZq6vCVkqN%2FuV%2BtIe6j2w6xLYM9hhVhfBwTilXv7gLBLRn8PoV9MWlodPXbpd1nRVlfvuBet68Oy9nW4EQkuOfLrYh6ISFwGZxJPFnUh1z2SqY6I6r3rdK1GNGsO76MFY81OXjgr1vrdiPy6omrZZhmQJGtfhRpokZrEGm2k5gRzbcUG0yAwdhOmbR3fVvw6on1EzbY3UQQutV2omqUIO872fAaNn8wdi47m%2FTTzd0CcdyIrQh%2FzZruawQlMm5AuAhnjPs29KI9JEVuWwkYJqgnhw6gQP8c3LcTB29EQjFTMLaMIJWQuq%2BZPbGimCSPkm%2BUJE1lFIkpL2cuYJ%2BG%2FPC1ZGn9jngOtYqhJF5Id%2BOwBUzq4mVLdIqr0BCHkzrd1Jmi5Kq33Ci2czn13FVekrwgmRBLJsAUpd1iomLh%2BZZiHYWm%2F1v92UFQGGyj2x4K6xxquWHcwetNRg3GIrLMNHtwcKxvosur1NSv2pOCpykMasfFiUewZyv%2FstUfcO7%2F6GFZ94dJK4c%2FgV0Az27a%2BzlGbZuC3y1LGTSQl4MFlw9OUpMPvvpr4GOqUBYewpwCnw3TlqGHHogmjKUVGnzRx%2FkX0K%2F3d1%2Fp0E7DgO6BNHnEimmUMJLw2Vc6ksUQjMN5jhymEqBTlKVR6SMD0AmaaWft3DKrrSnPXlJpXFebdQuWhMbQ4wL4YhItfKXCFZ%2BS6o3dy8bbga0SgmcZgnccz27YpKJoBxU0P2u%2FLU7Hfq%2FC20DkcJ3dix4vjM9uwDOqjvuh9VM2SnvKxl7fUIZ%2F6V&X-Amz-Signature=1f4e6b97f24c180a449d9cb5b6a70a0ca5b413c803b969554229f3a5691fcd62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
