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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5QBVXY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2sQ5t2Mr9q6LCnxWP4oF4pIkBPKH7%2BSo9qnjjliQfFgIhALdwFs%2FR1AoFvV9ZJOJK1coNbBhFk4rnvRFc86AMO57qKv8DCFUQABoMNjM3NDIzMTgzODA1IgyzRQdZgfKJXUv%2F4fMq3APVjnSHkrJ%2F5pAg8vOSo7r7VrCqUC56AXmZjMJO7AsyEpr9Qcbg30jb8gYI9VHwDJZgYyS6qBXkl2yR0VcS3Bi3UeEr7f%2FRDeYBj6DMvAd0SuTu5gXlUpQJ%2FLp3GwqcDhCz3iLSI%2FQkubNg7mQXyr1RTBdyaUVSNz729IObr3v3czPXXvJym%2BvEWbvRO2qLvF858HKRXT2szh3xAfLKHvU6jYqN9f4WcTmddHaJp8HU1GUo7UrQXjg46foZNNRpC1q8RaaKU%2FC4PUJp%2FS%2BFM%2BpyW0xobBn14nSmv8k0T5vyTuQyqlIwr14s1M58Lu%2Ff8%2BDR0SyNlp%2BhiIRqwqKwqLZEzlAPegrKH9us8Phr6EcG56VB%2BTWLkkwXreyypr3tseKMogIXe5UFi%2FnyjHRLJhd7FBK3L2R0g%2BPZK0Dik9BvfYeWIVmF71wJq%2BIZEyf%2BHfou%2BkrWB2E%2F%2FQF0R6Cd2vTVJAuxRQOZxC%2Btj%2B9a38UhSWQRp4EQYypz%2BvSivLNvX%2FvQMMyMwT%2BkCJOVqyOwQT2RptbDzVnW1g6H57zw9s4s%2BovSDlSG%2FNyGFUEw7Dc%2FTWK%2BUrNRKqChTfYvau0Sdy5se0sP%2B8EFuBt1HpMdgoKvpd1TmMcimVknzVEtFTDJj6DBBjqkAcZkq93RZRrBcUgECZdSw4Ku0zYRhrq%2FJ%2BMeljpXlQ%2BUJLBPuYsTpICnkRp%2BBXkMMRohokdzm%2FDsm7AaCMpFLy9UtCS1Kc1suWiiVdKmt1aU%2BHI8GIuWv1Pqztdsu5p66phATYP5tuCQbacf2w1nHsVo0hlG%2Bonp8YF3XgdztfrXlPEGlc8FL9PLRf9sMIDhdSPR7hxIA%2FNNyYvpKv3f3beVERNc&X-Amz-Signature=594fe5f2d9dbf7c964e150238fd47c4bb23e363fad6bcc8d9e73c96b37836011&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5QBVXY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2sQ5t2Mr9q6LCnxWP4oF4pIkBPKH7%2BSo9qnjjliQfFgIhALdwFs%2FR1AoFvV9ZJOJK1coNbBhFk4rnvRFc86AMO57qKv8DCFUQABoMNjM3NDIzMTgzODA1IgyzRQdZgfKJXUv%2F4fMq3APVjnSHkrJ%2F5pAg8vOSo7r7VrCqUC56AXmZjMJO7AsyEpr9Qcbg30jb8gYI9VHwDJZgYyS6qBXkl2yR0VcS3Bi3UeEr7f%2FRDeYBj6DMvAd0SuTu5gXlUpQJ%2FLp3GwqcDhCz3iLSI%2FQkubNg7mQXyr1RTBdyaUVSNz729IObr3v3czPXXvJym%2BvEWbvRO2qLvF858HKRXT2szh3xAfLKHvU6jYqN9f4WcTmddHaJp8HU1GUo7UrQXjg46foZNNRpC1q8RaaKU%2FC4PUJp%2FS%2BFM%2BpyW0xobBn14nSmv8k0T5vyTuQyqlIwr14s1M58Lu%2Ff8%2BDR0SyNlp%2BhiIRqwqKwqLZEzlAPegrKH9us8Phr6EcG56VB%2BTWLkkwXreyypr3tseKMogIXe5UFi%2FnyjHRLJhd7FBK3L2R0g%2BPZK0Dik9BvfYeWIVmF71wJq%2BIZEyf%2BHfou%2BkrWB2E%2F%2FQF0R6Cd2vTVJAuxRQOZxC%2Btj%2B9a38UhSWQRp4EQYypz%2BvSivLNvX%2FvQMMyMwT%2BkCJOVqyOwQT2RptbDzVnW1g6H57zw9s4s%2BovSDlSG%2FNyGFUEw7Dc%2FTWK%2BUrNRKqChTfYvau0Sdy5se0sP%2B8EFuBt1HpMdgoKvpd1TmMcimVknzVEtFTDJj6DBBjqkAcZkq93RZRrBcUgECZdSw4Ku0zYRhrq%2FJ%2BMeljpXlQ%2BUJLBPuYsTpICnkRp%2BBXkMMRohokdzm%2FDsm7AaCMpFLy9UtCS1Kc1suWiiVdKmt1aU%2BHI8GIuWv1Pqztdsu5p66phATYP5tuCQbacf2w1nHsVo0hlG%2Bonp8YF3XgdztfrXlPEGlc8FL9PLRf9sMIDhdSPR7hxIA%2FNNyYvpKv3f3beVERNc&X-Amz-Signature=817c34e83557fef4a280bce436fab7de8a397ae475bdc7c51190856b2db368e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
