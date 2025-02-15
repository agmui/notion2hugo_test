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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWMRB5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC8iyiMyju5WY%2Ffj8q2Q5Utzg8Cn4v%2FfXQo%2BH3mH4y%2B2wIhAPZH2K9abJTqJBqK3yLDw5Aiul8m%2FVu9zbXLVw9DNR2NKv8DCEcQABoMNjM3NDIzMTgzODA1IgyACW4LBX%2BfazhPOAUq3ANokbRmhJIb%2BZ2q85bZyo4J6RIK2RPuOd7lbnv1GjU3T1%2BwvQ%2BCtvuiIoGbikJmRrwqCjzj%2FGi8tryNl8tQv%2FB8ZqanQiU2dYaJdjEm%2B%2BWLL7A9UDgpXGdqQrFMiBfRFyhcwwuJDYUOCJtyzRzO58bhUv2ygWhi4uItxoDW3TnaLWpYUl5pvh1EaCJ8%2BpbGUGtAlpjwKSSsB3XQdr5cNg5ptTS%2F%2Bdhiv1ThwJoYbXKovO%2FiW6qI%2B%2BhMYlgHxeQ79qq9FiTR2n8An%2F7aC%2BK7DIH4y7QAK0pU8n3y8K0VxqpYb6MZiuqnEyUeF4WBlMhTB5XbnwIkmoeIIuICS1diJegVqM4BA0GdP%2Ftmic01vkswXIpy%2BoMgwdD5dlmTRL8yukAcCgJbQ0oZuvbfK4ATnGMtWRcgJCK%2BPtXAQ1Yt%2Fwlc3u2WfeZ%2Fm9SiYVNYosDJIBXZ%2FOR8oi5NF%2B7B%2BU6uC8tbRtV7WU5hAH4B9WpEgoQXY830Q8SkrSXvSwaJ%2BWf2m8iAFwy%2FtjMRRHGZVw01EY0GmZwU959qO73dDEffOcJWvldFpfhm3WE6ekDW90jfp%2FtWLCTZ6zCKJPEQhMTwbfvaMpQtsuQ4myZuwzpPtZU5qtkHZvNKSO02dFplVjC8xsK9BjqkATNH73LrEiwhIRaV1mHaLbL0VU1v9JpLaEqMxkyIR1l%2ByM7zaSlGqKJggWq6hiHA%2FntqtQ4I1lx%2FxdMAh2ONC%2FRVLQ7GUxoiIbkZ%2BM0TxhhliuFVnf7VGncT7Psh2aazlP4%2BkofoNZyg%2F8yVQbS2CkTU1J157x9Wtg1AxjbfADCBg8h690TfLc3wqJ4Uv6jCbOb7okL3piO%2Bx5t8edhd7qAk%2Bavn&X-Amz-Signature=b4efe834add55a7b5d5d675a4c244932d397dc9894a3464f65c24a25eb942c09&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWMRB5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC8iyiMyju5WY%2Ffj8q2Q5Utzg8Cn4v%2FfXQo%2BH3mH4y%2B2wIhAPZH2K9abJTqJBqK3yLDw5Aiul8m%2FVu9zbXLVw9DNR2NKv8DCEcQABoMNjM3NDIzMTgzODA1IgyACW4LBX%2BfazhPOAUq3ANokbRmhJIb%2BZ2q85bZyo4J6RIK2RPuOd7lbnv1GjU3T1%2BwvQ%2BCtvuiIoGbikJmRrwqCjzj%2FGi8tryNl8tQv%2FB8ZqanQiU2dYaJdjEm%2B%2BWLL7A9UDgpXGdqQrFMiBfRFyhcwwuJDYUOCJtyzRzO58bhUv2ygWhi4uItxoDW3TnaLWpYUl5pvh1EaCJ8%2BpbGUGtAlpjwKSSsB3XQdr5cNg5ptTS%2F%2Bdhiv1ThwJoYbXKovO%2FiW6qI%2B%2BhMYlgHxeQ79qq9FiTR2n8An%2F7aC%2BK7DIH4y7QAK0pU8n3y8K0VxqpYb6MZiuqnEyUeF4WBlMhTB5XbnwIkmoeIIuICS1diJegVqM4BA0GdP%2Ftmic01vkswXIpy%2BoMgwdD5dlmTRL8yukAcCgJbQ0oZuvbfK4ATnGMtWRcgJCK%2BPtXAQ1Yt%2Fwlc3u2WfeZ%2Fm9SiYVNYosDJIBXZ%2FOR8oi5NF%2B7B%2BU6uC8tbRtV7WU5hAH4B9WpEgoQXY830Q8SkrSXvSwaJ%2BWf2m8iAFwy%2FtjMRRHGZVw01EY0GmZwU959qO73dDEffOcJWvldFpfhm3WE6ekDW90jfp%2FtWLCTZ6zCKJPEQhMTwbfvaMpQtsuQ4myZuwzpPtZU5qtkHZvNKSO02dFplVjC8xsK9BjqkATNH73LrEiwhIRaV1mHaLbL0VU1v9JpLaEqMxkyIR1l%2ByM7zaSlGqKJggWq6hiHA%2FntqtQ4I1lx%2FxdMAh2ONC%2FRVLQ7GUxoiIbkZ%2BM0TxhhliuFVnf7VGncT7Psh2aazlP4%2BkofoNZyg%2F8yVQbS2CkTU1J157x9Wtg1AxjbfADCBg8h690TfLc3wqJ4Uv6jCbOb7okL3piO%2Bx5t8edhd7qAk%2Bavn&X-Amz-Signature=5fbadbd245235aa92262127ad97adda0bce24254ec6f523936710d25da4bf570&X-Amz-SignedHeaders=host&x-id=GetObject)

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
