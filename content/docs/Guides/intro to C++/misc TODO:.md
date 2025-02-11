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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DAWNM47%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUakmna4IetvuBqNMYw2otYdrFQ%2B2IxYm0P%2FgiGa%2F%2F3AiBvu6keQ6YIIl4qdIb%2BoCi%2F30CDq%2B5pmfnjyHt36Z%2BuHCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMupLsGSS5w1sbGxxvKtwDRaxSQV%2B74kGDcdWUVMCWRrSb0svUsklLhWYZ1zC5IgH%2Bm4Rcnpauyrila45RCKQbG9yV99Tny0p5b9TsKnMcbkTvaeWQbkCovQDo4KXwa1tNsnsfMdhNp0Hy8CAHchiA0OvCeNhbDc4Vj9w%2BhryUVwGRvzyUfRZ4t1wudJHFZuwJGvsCRB1gz%2FU46AidMl5szv5AW7sD49NbxNJIjl8XJNQVKNPTjHF9%2BilBHc%2BAwls3Mnd7WuBogyfSycuAYmUPyuwfg5AhUQyrQDG8N4%2BJVWBXUYDbY6S4%2FRSJbC%2F%2F7WABWTBkqdTkZw%2B%2BX5lmyrntfnu5bXADzBBHlnXSt9ex154pOhABXFO0ZDtJmNbpJ1yCTIoa0L88%2Fp11MDZ%2F%2FYdaQGgwbE%2F2S2hWEx5dfCAVGvGqr7iftAhGKkvMeNXUD9e7e%2Bq5ILqtnvvKnanOzPh3jtw1BI65fGxow5t8Bwsb5Z36F1BLd9tq1Gf48IAa1T6P7GmCHpovFen3cKDfi2t%2FUy95dnc7RqeHryg93r2k%2Bfy8%2FaYcejDVEGpWCn48eQ57F0J5xKwcmMWuCBrzdaA4sPaf4Qa1xPd68PK%2Ba%2FbEXHWRVYSE%2BEKZOiORaaFNGPGMgg4LWvKnN4vBQfMws8qrvQY6pgEqRyoQDqSp6L%2BYXG7NV0ExRf83ATDffMxu355Z7VWjC%2F07opA8SMNQdlCLlx6SSFyjFNBtTFF6ajHRyVdO7d11Ha2jVTlywrCUC1ewpisL4A5a09kiI9N1HoAHjcnJEKAD4uwBH7FtJG90qQFUMx5ZylMl1D5Xbi5orHTe6VxfITRYCFzzuFTmLbzb8MYEa6wJpg0yCs0XTY7Dm8tLJ49W80Pcmmfj&X-Amz-Signature=42c7a64a3ab87b51f609ccec94cc14fc41310c24a9c93e330fd7482d162befa4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DAWNM47%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUakmna4IetvuBqNMYw2otYdrFQ%2B2IxYm0P%2FgiGa%2F%2F3AiBvu6keQ6YIIl4qdIb%2BoCi%2F30CDq%2B5pmfnjyHt36Z%2BuHCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMupLsGSS5w1sbGxxvKtwDRaxSQV%2B74kGDcdWUVMCWRrSb0svUsklLhWYZ1zC5IgH%2Bm4Rcnpauyrila45RCKQbG9yV99Tny0p5b9TsKnMcbkTvaeWQbkCovQDo4KXwa1tNsnsfMdhNp0Hy8CAHchiA0OvCeNhbDc4Vj9w%2BhryUVwGRvzyUfRZ4t1wudJHFZuwJGvsCRB1gz%2FU46AidMl5szv5AW7sD49NbxNJIjl8XJNQVKNPTjHF9%2BilBHc%2BAwls3Mnd7WuBogyfSycuAYmUPyuwfg5AhUQyrQDG8N4%2BJVWBXUYDbY6S4%2FRSJbC%2F%2F7WABWTBkqdTkZw%2B%2BX5lmyrntfnu5bXADzBBHlnXSt9ex154pOhABXFO0ZDtJmNbpJ1yCTIoa0L88%2Fp11MDZ%2F%2FYdaQGgwbE%2F2S2hWEx5dfCAVGvGqr7iftAhGKkvMeNXUD9e7e%2Bq5ILqtnvvKnanOzPh3jtw1BI65fGxow5t8Bwsb5Z36F1BLd9tq1Gf48IAa1T6P7GmCHpovFen3cKDfi2t%2FUy95dnc7RqeHryg93r2k%2Bfy8%2FaYcejDVEGpWCn48eQ57F0J5xKwcmMWuCBrzdaA4sPaf4Qa1xPd68PK%2Ba%2FbEXHWRVYSE%2BEKZOiORaaFNGPGMgg4LWvKnN4vBQfMws8qrvQY6pgEqRyoQDqSp6L%2BYXG7NV0ExRf83ATDffMxu355Z7VWjC%2F07opA8SMNQdlCLlx6SSFyjFNBtTFF6ajHRyVdO7d11Ha2jVTlywrCUC1ewpisL4A5a09kiI9N1HoAHjcnJEKAD4uwBH7FtJG90qQFUMx5ZylMl1D5Xbi5orHTe6VxfITRYCFzzuFTmLbzb8MYEa6wJpg0yCs0XTY7Dm8tLJ49W80Pcmmfj&X-Amz-Signature=e2857a4696c65acc27a34d0eff1cae60036140a2710c98739909225740747df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
