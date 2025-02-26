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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4RR2B6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1AaEhlV56QQxbRA3EFe2yKFUnsrPV7EgRfGj5QfVXfAiBvO%2FY7pV049OhrghdmtfPN3fcj%2FZVImcP%2F4KckXUtPJCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMZwOxJ4eKIHdFgiZ3KtwDtCWVV%2FCjDKRbVP4QP37xzYcqmo1WXBwLaoUKDG8amg75Dp9uJLW6wa8h82aItwqupO1IU5uuSi71Q8G1X3TH6u3MEadMg4B3cg1GS9gEQuUcETVqcQzbEoFHfwYpGDAyhILVuJSBLBqqrcjIXF9eeO98AVUAh3rgfSGh7JxcE98tXZwT%2FB0h8v8sx3wvn6npZodomsplnKlwjWGw9F9ZfzkBJVF2in5jPmc6fXyXDGh40oJP5QygDE7ZgklpfsS3rTvMNMOLDQCtTpmYC5AtIuJlALpaqTAnvHpK7tILbMy31PFAU0OQK1DeyD3dMX%2FJmhEJifus7aJHwlMs8noBsPIYvGITsmqayH85oB4YCO8WQQSOnOF6ptm1TsXg3zrqnrposy4URh1vIFT5fH8jOIcyvSlAPt3T0%2B08HDNUmrWmFl1%2FaSuLLmt%2F%2F7FhveV2ijo8712K1XYiP%2F9bkQ8snbTGqMXq3yznnJLSGap1YA37q%2FAQdYqToKrfO1O3NWJidqGEJIkGeRzB43ldO27oOsSErsz%2FVPRjkSW0%2F4xlUHLUFfTvWwCdosQ3DIaRzUFqJ52iq12S3H79kdXPI%2BVW4qeVmn7Xu4fa4K9BbYOpwHR4YdmlRJ%2Bt7qPAy1EwgID7vQY6pgEFP9ZBc%2FrXxoO7Jo9gZc0I9onArh30b%2F3LmKLl3BxzaHiGTzmf1lYECeOLgCYh98ekqBInnEoIP7U0t%2Fll5Y2ZAdMgaj8eUQ%2FGLRxWqrWnVnWsA7bcRjwOu7wfNtN9czXlf0%2FyC5uzwg9mXu3QJxXMWk5mRJ21EMc8hWgLFpLx%2B1BvhWnrOReA4QBbIZm4t5K7ekxDUj6shUMP04%2FE9t%2FIgBy2jGST&X-Amz-Signature=fb3836aa744d2be6b3dcb39b9c033e03392fa74246f74848e3f213f1d97a1266&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4RR2B6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1AaEhlV56QQxbRA3EFe2yKFUnsrPV7EgRfGj5QfVXfAiBvO%2FY7pV049OhrghdmtfPN3fcj%2FZVImcP%2F4KckXUtPJCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMZwOxJ4eKIHdFgiZ3KtwDtCWVV%2FCjDKRbVP4QP37xzYcqmo1WXBwLaoUKDG8amg75Dp9uJLW6wa8h82aItwqupO1IU5uuSi71Q8G1X3TH6u3MEadMg4B3cg1GS9gEQuUcETVqcQzbEoFHfwYpGDAyhILVuJSBLBqqrcjIXF9eeO98AVUAh3rgfSGh7JxcE98tXZwT%2FB0h8v8sx3wvn6npZodomsplnKlwjWGw9F9ZfzkBJVF2in5jPmc6fXyXDGh40oJP5QygDE7ZgklpfsS3rTvMNMOLDQCtTpmYC5AtIuJlALpaqTAnvHpK7tILbMy31PFAU0OQK1DeyD3dMX%2FJmhEJifus7aJHwlMs8noBsPIYvGITsmqayH85oB4YCO8WQQSOnOF6ptm1TsXg3zrqnrposy4URh1vIFT5fH8jOIcyvSlAPt3T0%2B08HDNUmrWmFl1%2FaSuLLmt%2F%2F7FhveV2ijo8712K1XYiP%2F9bkQ8snbTGqMXq3yznnJLSGap1YA37q%2FAQdYqToKrfO1O3NWJidqGEJIkGeRzB43ldO27oOsSErsz%2FVPRjkSW0%2F4xlUHLUFfTvWwCdosQ3DIaRzUFqJ52iq12S3H79kdXPI%2BVW4qeVmn7Xu4fa4K9BbYOpwHR4YdmlRJ%2Bt7qPAy1EwgID7vQY6pgEFP9ZBc%2FrXxoO7Jo9gZc0I9onArh30b%2F3LmKLl3BxzaHiGTzmf1lYECeOLgCYh98ekqBInnEoIP7U0t%2Fll5Y2ZAdMgaj8eUQ%2FGLRxWqrWnVnWsA7bcRjwOu7wfNtN9czXlf0%2FyC5uzwg9mXu3QJxXMWk5mRJ21EMc8hWgLFpLx%2B1BvhWnrOReA4QBbIZm4t5K7ekxDUj6shUMP04%2FE9t%2FIgBy2jGST&X-Amz-Signature=717cc9ef092fa0e11593d18cb575566f5b8de4da7beb7a82b1ea4b3486ef9feb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
