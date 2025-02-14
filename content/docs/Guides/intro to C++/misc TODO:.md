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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFZTX3E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB%2FX2KsrU0igpGShUL9TPBO7vEaVGqR8TCGLg585njuoAiAIa6Yy6O6C8Q3ncSbQe9lSPhI%2B3Xx%2F9%2B3cRjl9HZIhpSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM5AoestW%2FCzEt%2F12IKtwD%2FhLoKjtMCX9N1anHTzrb2arROHETLUaGnDJT5cqYOTTjgw6I1ewh0xIFNyh5ogD8S3og%2FJEofLDaMiYUoL7NFCwbx%2BVx52Hf2q3dGyWN%2BKGNTDtPpNIg%2BWvCQmjYu3r6lqbg0PMhsE42MX5Ur05SRTHR72l8rYeEPPoesxsTeG6J1bcRBYQGsUcUb9QPw4xmLlV%2F0e3f7GFTCu9GKZqvJwjpepePy9iYkYnwVmjx3%2Fm1PVNA3WKW7YjQd59fYjcnHTnaRko%2FHTOxqminSpVGDIx1EHdOyzFi9ueDah69LAKub9Z7r8NwcDlD0jz4etvyxSoEAlOdQXSmaelJZx%2FDFJHgVjlYjOQvdga4r57XSJ3um5421FUMrW1VtNO2agVAMY1zOhn5p81ECao9oAuS4EEu87INwO5r64GXa6%2B5XDawLRfSR%2Bi49FIa6BcMaK0IrTSQ%2FlFBbZ3vkQFxzmzxoC6N9ScvK7WgsARN1VBd91cZlFZRmziPRQbM3F9DMnnY0cDJdcN7O8Pz7OrTDrxGXxUYv9NOQFsUHfsx%2BExX77xr%2BlfPydgeSxFzo6nqyfwY3MuVr72S3zhr9nwWWGNjLD4GQGIyOJbRr9h0BDg2pwZzNl2IDzfK1ixcOskwgrK8vQY6pgErNS0MtATu3zla02qEEhMbJBG5RO6gr1nAGrQvaPBQkbnw6RuvZE8MMu71JvXTCr%2Bl1YZZcVCHEGkjlq%2BKdn8aIIybIm5eFeAUSvZs1PSBdchVxOrpNjR5xqkMTyF9liJ2xULly7WMoj0IOmtqaQMU3lB2vjGOeK5lpU%2Ftma1Dh6wY5xj%2BOwgUUpThvG4lLNP7%2FDMRkjqT793f7VY4g8bATvxSpBTl&X-Amz-Signature=fe5af1b9f1dca88cc0dd4327d3f780d4d6ff004df38729766b31eb358a412dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFZTX3E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB%2FX2KsrU0igpGShUL9TPBO7vEaVGqR8TCGLg585njuoAiAIa6Yy6O6C8Q3ncSbQe9lSPhI%2B3Xx%2F9%2B3cRjl9HZIhpSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM5AoestW%2FCzEt%2F12IKtwD%2FhLoKjtMCX9N1anHTzrb2arROHETLUaGnDJT5cqYOTTjgw6I1ewh0xIFNyh5ogD8S3og%2FJEofLDaMiYUoL7NFCwbx%2BVx52Hf2q3dGyWN%2BKGNTDtPpNIg%2BWvCQmjYu3r6lqbg0PMhsE42MX5Ur05SRTHR72l8rYeEPPoesxsTeG6J1bcRBYQGsUcUb9QPw4xmLlV%2F0e3f7GFTCu9GKZqvJwjpepePy9iYkYnwVmjx3%2Fm1PVNA3WKW7YjQd59fYjcnHTnaRko%2FHTOxqminSpVGDIx1EHdOyzFi9ueDah69LAKub9Z7r8NwcDlD0jz4etvyxSoEAlOdQXSmaelJZx%2FDFJHgVjlYjOQvdga4r57XSJ3um5421FUMrW1VtNO2agVAMY1zOhn5p81ECao9oAuS4EEu87INwO5r64GXa6%2B5XDawLRfSR%2Bi49FIa6BcMaK0IrTSQ%2FlFBbZ3vkQFxzmzxoC6N9ScvK7WgsARN1VBd91cZlFZRmziPRQbM3F9DMnnY0cDJdcN7O8Pz7OrTDrxGXxUYv9NOQFsUHfsx%2BExX77xr%2BlfPydgeSxFzo6nqyfwY3MuVr72S3zhr9nwWWGNjLD4GQGIyOJbRr9h0BDg2pwZzNl2IDzfK1ixcOskwgrK8vQY6pgErNS0MtATu3zla02qEEhMbJBG5RO6gr1nAGrQvaPBQkbnw6RuvZE8MMu71JvXTCr%2Bl1YZZcVCHEGkjlq%2BKdn8aIIybIm5eFeAUSvZs1PSBdchVxOrpNjR5xqkMTyF9liJ2xULly7WMoj0IOmtqaQMU3lB2vjGOeK5lpU%2Ftma1Dh6wY5xj%2BOwgUUpThvG4lLNP7%2FDMRkjqT793f7VY4g8bATvxSpBTl&X-Amz-Signature=7bb25ddd566b3bb710f11956f5d097d9f28849ce6260fdcff7b9c50dfb60c40a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
