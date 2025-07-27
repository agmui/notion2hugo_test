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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCZS7TU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDLntSYwlK%2FlV3zToa83dgZFBtCZan0QWLaNc9%2BLfz8rAiB09QfZr7UvVMvu5lFrwVGfnCZYaG9b5MZmA6P2ChjYQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMF5pEM8Ky0vJmHjS0KtwD%2BJGKCRiO9KBsjso6MIDdBr1vQ9k413SJJQwkCLBKMitdFtuAR9cbLUeOJPs%2BlD5C2h2wY02hGcTqX%2FjVdiwWSEVfH3Vz%2B%2BwCYuV83UFpJHJqgj8BCxLXw9QykBHBoxKW%2BhHcsXYn%2FBbayO%2FTPR6JH%2FBtGA5Jf7WoJIVNlo1UajDCay1OgqpfD2yZPNT%2BDgX0PyM1Tc79f6sPHEWDfxkf3so3iaFrM1lJEmR9c2HGSS0yjCDBlCPr01Yj67gDzkiJdQvTenZCCARnVYWatzMMHP1zLqcpCQWd3Fc4ZRgYk2I6rio0NRAqfPbJ9IqxZpVen2iLXtkpBKg0LagsIfXja2GvwN2qOBDfhRtIkc3v7gpdxWb3IC0oVU84Cscjc4llNtFuRuXadZIlO1Xjb9I%2FW%2BhhoUs%2Bo6IWUHEIiILva80MFpNylz%2F47sU%2FmjPbPDPo4yUZrn%2FGEpoXoAg%2BCsu9bncLZ2o%2Fi5jsxn76bDqOneGh8oSYiHC7gfkhvcFz1mJAgm4U%2FZVjLLvp06%2FPZrq7Mb5t3w4jLHUDwTqkw3Bq6QF4GZVd10Hb0EXxfBGBlPzWY0Dguts%2Bafjq79iEB9ALPwm8D%2FzAemJJ0sCVbRxyvMDAEtX3jGcbWXlY8U4w4bqWxAY6pgF618IYdRa2nbYK%2BoHgcnyWTtUqhTkpfWsTEhJfbgZfD4yX59aGlrEHO9%2BEqGlXRBTi6yAiSuvnCnK2Xx9vqlcoDnd%2FOQhkwYoncAUPY6KEgeFb5TE2UQQBJJsW3bJLI%2BCWX8%2F71qZjPJ6OQJvN20fBdfIaxm7QAj2GPa9ldm2s2v6ViltlONLnvyh1vJipnPZnA7bOCrgA2IiHxkGBrGxbuzh5xRrU&X-Amz-Signature=451f9a74422ffcff4ff9813541571999633dd09273990bc9bb4e6959e8324a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCZS7TU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDLntSYwlK%2FlV3zToa83dgZFBtCZan0QWLaNc9%2BLfz8rAiB09QfZr7UvVMvu5lFrwVGfnCZYaG9b5MZmA6P2ChjYQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMF5pEM8Ky0vJmHjS0KtwD%2BJGKCRiO9KBsjso6MIDdBr1vQ9k413SJJQwkCLBKMitdFtuAR9cbLUeOJPs%2BlD5C2h2wY02hGcTqX%2FjVdiwWSEVfH3Vz%2B%2BwCYuV83UFpJHJqgj8BCxLXw9QykBHBoxKW%2BhHcsXYn%2FBbayO%2FTPR6JH%2FBtGA5Jf7WoJIVNlo1UajDCay1OgqpfD2yZPNT%2BDgX0PyM1Tc79f6sPHEWDfxkf3so3iaFrM1lJEmR9c2HGSS0yjCDBlCPr01Yj67gDzkiJdQvTenZCCARnVYWatzMMHP1zLqcpCQWd3Fc4ZRgYk2I6rio0NRAqfPbJ9IqxZpVen2iLXtkpBKg0LagsIfXja2GvwN2qOBDfhRtIkc3v7gpdxWb3IC0oVU84Cscjc4llNtFuRuXadZIlO1Xjb9I%2FW%2BhhoUs%2Bo6IWUHEIiILva80MFpNylz%2F47sU%2FmjPbPDPo4yUZrn%2FGEpoXoAg%2BCsu9bncLZ2o%2Fi5jsxn76bDqOneGh8oSYiHC7gfkhvcFz1mJAgm4U%2FZVjLLvp06%2FPZrq7Mb5t3w4jLHUDwTqkw3Bq6QF4GZVd10Hb0EXxfBGBlPzWY0Dguts%2Bafjq79iEB9ALPwm8D%2FzAemJJ0sCVbRxyvMDAEtX3jGcbWXlY8U4w4bqWxAY6pgF618IYdRa2nbYK%2BoHgcnyWTtUqhTkpfWsTEhJfbgZfD4yX59aGlrEHO9%2BEqGlXRBTi6yAiSuvnCnK2Xx9vqlcoDnd%2FOQhkwYoncAUPY6KEgeFb5TE2UQQBJJsW3bJLI%2BCWX8%2F71qZjPJ6OQJvN20fBdfIaxm7QAj2GPa9ldm2s2v6ViltlONLnvyh1vJipnPZnA7bOCrgA2IiHxkGBrGxbuzh5xRrU&X-Amz-Signature=fd8271565158613465b5be8fb905dcfcf9caf308e99501ead99ce1f2cb9384aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
