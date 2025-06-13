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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEMRDFO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAEQ4H52etMbD7yAPzOeVZiSpGbMx76lehFREJt3QncxAiB12doCyuq8QyEGluvn0mJUG%2FGW8moEqtBQmg6W48sZzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKgTWKCTmRdF6YSmiKtwD%2FcSt0WRUS%2BY4Q%2FAe%2FlkLAk5sxpVLWPJv4P6pKwwpQbs7gtIPsIV0HNCVXDigwnr90Wrhl5scvdwA6OJhNZONf5g8uhC2QpugtldKBXVrEVDb6peZ203WXAIWlpCiGXkro%2Byh3hyjI69dXBL5QMDsqEcIJElusb0QTcvcD6pb0osPRqKME%2F5opqLlm3A4wU0ToH2NeEVGv2G67z9GiWI%2B%2BeFQU4QYhrXfLSEpR8JoeL1iVlBc%2FV2nY%2BfqX3%2Bj3XXgx8LCDzbwTlU5YzKz8rpOh1ipPuYRr8ySxEdozL2wuk5r%2B1%2F2D79uXbPQUiNQpthXMABYdcBFrC8WbxKT5xwSes4w%2B8S9jU0Xinj56G3mTgy17cFIBk73sldheVWuIJNlalwq3hvqyFdlIAjbNWuFK2pVjUAZKe1gS%2FjoTEdvcpTSPPjqCE7MeGwfVx3SAWcIiXyWe67nCwEFglFrMRyWRW5oDW5%2BhuP4UT2%2BFuzGjob%2FbTtEab8h2N2Li4TSuV8IYL5%2FDrQOeHn5M6AD5Qzp9DII3ZZpSaDdxSlb4g2mKoPnen%2FEpbU1id6pUypg3QSJJ1AzklfOJgU%2BRBBfXUUTnn8yAWEEW23CMpvja3gjZgmJTTDDGo6ANv3xSSAwgrmtwgY6pgE6oHuxiIt99ya0UQgMIv6SxV8NDhOXwYdP2zYDg1p8xayzYEO665gmwv1uhWW8k3ByxLXFsc1B295KRKvQP%2FHw2NaaqpjAmKYhTBjig8O7iSgSXWfpjESrURb1NLikAYO1D8GGYbanviMBbaryBOcJCHRkXBiT2GM2VFYccp9UX%2Bobi7hEW6r%2BzavbHvwPs00uZOsk%2FJZNmler7y%2FWW68G6fYw%2BeVN&X-Amz-Signature=68b91a19c363a700ffbd2cbe85f153be6ef0d889eea39c65b1c147f9b8660ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NEMRDFO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAEQ4H52etMbD7yAPzOeVZiSpGbMx76lehFREJt3QncxAiB12doCyuq8QyEGluvn0mJUG%2FGW8moEqtBQmg6W48sZzyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKgTWKCTmRdF6YSmiKtwD%2FcSt0WRUS%2BY4Q%2FAe%2FlkLAk5sxpVLWPJv4P6pKwwpQbs7gtIPsIV0HNCVXDigwnr90Wrhl5scvdwA6OJhNZONf5g8uhC2QpugtldKBXVrEVDb6peZ203WXAIWlpCiGXkro%2Byh3hyjI69dXBL5QMDsqEcIJElusb0QTcvcD6pb0osPRqKME%2F5opqLlm3A4wU0ToH2NeEVGv2G67z9GiWI%2B%2BeFQU4QYhrXfLSEpR8JoeL1iVlBc%2FV2nY%2BfqX3%2Bj3XXgx8LCDzbwTlU5YzKz8rpOh1ipPuYRr8ySxEdozL2wuk5r%2B1%2F2D79uXbPQUiNQpthXMABYdcBFrC8WbxKT5xwSes4w%2B8S9jU0Xinj56G3mTgy17cFIBk73sldheVWuIJNlalwq3hvqyFdlIAjbNWuFK2pVjUAZKe1gS%2FjoTEdvcpTSPPjqCE7MeGwfVx3SAWcIiXyWe67nCwEFglFrMRyWRW5oDW5%2BhuP4UT2%2BFuzGjob%2FbTtEab8h2N2Li4TSuV8IYL5%2FDrQOeHn5M6AD5Qzp9DII3ZZpSaDdxSlb4g2mKoPnen%2FEpbU1id6pUypg3QSJJ1AzklfOJgU%2BRBBfXUUTnn8yAWEEW23CMpvja3gjZgmJTTDDGo6ANv3xSSAwgrmtwgY6pgE6oHuxiIt99ya0UQgMIv6SxV8NDhOXwYdP2zYDg1p8xayzYEO665gmwv1uhWW8k3ByxLXFsc1B295KRKvQP%2FHw2NaaqpjAmKYhTBjig8O7iSgSXWfpjESrURb1NLikAYO1D8GGYbanviMBbaryBOcJCHRkXBiT2GM2VFYccp9UX%2Bobi7hEW6r%2BzavbHvwPs00uZOsk%2FJZNmler7y%2FWW68G6fYw%2BeVN&X-Amz-Signature=799feb3b99cdd7f9a4440fa91f5ce9e7b292c18e0e7db37ea82c070a8bf54332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
