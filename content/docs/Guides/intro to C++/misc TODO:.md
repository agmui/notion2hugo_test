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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNZXDB3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7GLL4jdWft6QZNBI3a1PTIkcb23JRXPG1JvfWSTXUPAiB9L2O6Eqc9EKgPgf8iPbjV61ew9Z6L%2F77SmUBODR%2FeDiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzjTEGvh8BP%2F%2FnjzoKtwD47lumZHZuumGnf7aTffeGgWMc2EkmradII474WKL2yzavRfVqeiel%2BOEKGvlN5cqRSKtVWP25cAFbedxOWlAqVQpMgF6m3AaYfnwgg%2B6L2xu%2BBXM9fWIDUuE0rT6oWOxJeFXfNSWXWaLYFWFlPLNOCxnp6az26n0FGdXEDfX2hSVTeAmrtdZvB7RTyvy4OnGG%2BE1ciCTyRgqbrIgjGC0RgZlK5YIvojaCUW9ChtMWK4qkABrxUm%2FdKHwLyLcpJrStTsHvR3vJesPDX%2BySf%2B1%2BaWse95YS6DrpMcRi22EeP4K2jDGzrrqwrVw3qx0%2FFtFWfsdjybLV3F0u%2Fu0RlLGoNu5v8cLC03%2FOBePDdnEauQkHA%2BFrXSeuPncZzvhRVUaQfOKFzTVjeD8Dy8jsQZnU6GM0s6lvRAFqq%2BWPz4DRhoT75KIYSW8%2BmM52%2FNip%2BqUdusXpvJNqdQuvwBeyFoBzGZRnJYBi5XrI2%2FRUA3i1Zm8wzToMwqE1oZMPSbToPC7ZAgbxpufxxOsMKdI9NKJsid7Z5Xhc7TiaR0Y%2FoQOnGr0oIvOC3exatF7FXjhRkHjD878s3hJqT0iSFi14DqP8hzP4r5YpHckQP2tJ%2BwZRU%2Bs7y9prmP0VCAb2KowxqCqxAY6pgGs%2FbwVKGO%2FWDfdwfXxmmNmiNfii2Ud7MhhfgbXsgt7qGCTkBIFvD8Anb%2F1ScAwb7Y%2FBYVq%2FdLv83ycMujtpMlnuEwgpKRQEFcDs8y0MTn9IUHMdSz1ofcHhzUFckz2%2FRsYUQHg28JWQIFngIuzMx2TGfILeE%2FR8fKxjl6s7%2BqWuKtRW4PohEwUsJ95xk3QH87bT2a52PaaUGSbooNDRZneVkHXq3eo&X-Amz-Signature=4d0e017ac7336c706d7103c6ab15c2c7a2856a121be3129817a4ab5b2083c160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNZXDB3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7GLL4jdWft6QZNBI3a1PTIkcb23JRXPG1JvfWSTXUPAiB9L2O6Eqc9EKgPgf8iPbjV61ew9Z6L%2F77SmUBODR%2FeDiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzjTEGvh8BP%2F%2FnjzoKtwD47lumZHZuumGnf7aTffeGgWMc2EkmradII474WKL2yzavRfVqeiel%2BOEKGvlN5cqRSKtVWP25cAFbedxOWlAqVQpMgF6m3AaYfnwgg%2B6L2xu%2BBXM9fWIDUuE0rT6oWOxJeFXfNSWXWaLYFWFlPLNOCxnp6az26n0FGdXEDfX2hSVTeAmrtdZvB7RTyvy4OnGG%2BE1ciCTyRgqbrIgjGC0RgZlK5YIvojaCUW9ChtMWK4qkABrxUm%2FdKHwLyLcpJrStTsHvR3vJesPDX%2BySf%2B1%2BaWse95YS6DrpMcRi22EeP4K2jDGzrrqwrVw3qx0%2FFtFWfsdjybLV3F0u%2Fu0RlLGoNu5v8cLC03%2FOBePDdnEauQkHA%2BFrXSeuPncZzvhRVUaQfOKFzTVjeD8Dy8jsQZnU6GM0s6lvRAFqq%2BWPz4DRhoT75KIYSW8%2BmM52%2FNip%2BqUdusXpvJNqdQuvwBeyFoBzGZRnJYBi5XrI2%2FRUA3i1Zm8wzToMwqE1oZMPSbToPC7ZAgbxpufxxOsMKdI9NKJsid7Z5Xhc7TiaR0Y%2FoQOnGr0oIvOC3exatF7FXjhRkHjD878s3hJqT0iSFi14DqP8hzP4r5YpHckQP2tJ%2BwZRU%2Bs7y9prmP0VCAb2KowxqCqxAY6pgGs%2FbwVKGO%2FWDfdwfXxmmNmiNfii2Ud7MhhfgbXsgt7qGCTkBIFvD8Anb%2F1ScAwb7Y%2FBYVq%2FdLv83ycMujtpMlnuEwgpKRQEFcDs8y0MTn9IUHMdSz1ofcHhzUFckz2%2FRsYUQHg28JWQIFngIuzMx2TGfILeE%2FR8fKxjl6s7%2BqWuKtRW4PohEwUsJ95xk3QH87bT2a52PaaUGSbooNDRZneVkHXq3eo&X-Amz-Signature=e8d35ee33595840b5c81fc7604b1edc5f331f82c35fd088f0fc75d68c15ed8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
