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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VVE5CQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8ewWFRe1Zl7EU2zEglHEComgQUwSkrULv%2BVDrgO2tHAiBumCnjm4kwvz8i8mGicoLeYl4tC4H%2B9zF%2FxIab7ZQGbiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwv5S2woWqQS5AHXKtwD%2FVWG%2F5FKkUcpZ0xw%2Fh%2B6ab7XBCTn3AdB6McSj7h3Joi9aEe%2BZiRdSBeusVtLpNT631mKcAktRhEH6HGK94oKtIJEW39Fh5XhgSwo9ud8tBI2m2BFYechqAK3UP1xNZorxayjkfBu0aZjNcPr5UXSbVBFuIeZq3plNN3pwBuZntcB09BCJ2A3WBhDbSD4W1VKiSazgM384XSNpq35o%2F53p2C%2BTBCiBO53GDIGWJrhWQ5Pm80qg9gpgM31JtC29Q9sr22aDZtxSHAngZ6d8CId3ub9%2FkUR4lY2KIHgldEM3bSdl9FCcsZdVx4iFNReLmQ2QGrb4QRiRpDQe0pgJV5DkHtoYNlNZ%2FYCQi4uNyq2YDPevaxg1WtbJnhJkqqP%2Bw1lfP7AcU4pMDE5bPBPKNkQ1YdtcLIp9qaP41Ai6PaHc123EdYrmd9Ow1q8iUBCn7a52DH51WJz56CMhdo2nlcu4SVLszR%2FBmCSF5P8PoZCUiT2WAv6JmaE3xDsS1IVVJbbLbNnlxxvxCmjWH6Prsb4%2Fk1N9Iqi8P8fTekVXnCTAV8KiK0U47CG2K5WXQsFT%2BCC8h0I3K4La9JXBrRjZRCcVZ7BeZw2seF9jonQuQ55E56tgdkN940YbSHsN%2F0wiJb2wAY6pgGzny%2FA8Ks21fwQNKHNEYvTfuz%2Br2ocFF5mgcxxFjMOdzgp3vN8zIOoFAt7YUltTnBmG3PLmURXXcCHOhOmn4g%2F15SYWSjEAgkLaNzs25JzuEzFnQmAz6FR6P0tuichKCI5LpegTUm4yHZclHVbhs%2BgCHyMvaawsMW%2FOm4E3jOsjt7lmqL9Aj0X3gfE%2FhYvV8IpiaS5ZNOn0wcxUNZgiv%2Bo35XsbMMY&X-Amz-Signature=c7639eb1288188678203d9b8927916ec469ce0ce6b6ee3c6dd9c5526118c3ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VVE5CQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8ewWFRe1Zl7EU2zEglHEComgQUwSkrULv%2BVDrgO2tHAiBumCnjm4kwvz8i8mGicoLeYl4tC4H%2B9zF%2FxIab7ZQGbiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwv5S2woWqQS5AHXKtwD%2FVWG%2F5FKkUcpZ0xw%2Fh%2B6ab7XBCTn3AdB6McSj7h3Joi9aEe%2BZiRdSBeusVtLpNT631mKcAktRhEH6HGK94oKtIJEW39Fh5XhgSwo9ud8tBI2m2BFYechqAK3UP1xNZorxayjkfBu0aZjNcPr5UXSbVBFuIeZq3plNN3pwBuZntcB09BCJ2A3WBhDbSD4W1VKiSazgM384XSNpq35o%2F53p2C%2BTBCiBO53GDIGWJrhWQ5Pm80qg9gpgM31JtC29Q9sr22aDZtxSHAngZ6d8CId3ub9%2FkUR4lY2KIHgldEM3bSdl9FCcsZdVx4iFNReLmQ2QGrb4QRiRpDQe0pgJV5DkHtoYNlNZ%2FYCQi4uNyq2YDPevaxg1WtbJnhJkqqP%2Bw1lfP7AcU4pMDE5bPBPKNkQ1YdtcLIp9qaP41Ai6PaHc123EdYrmd9Ow1q8iUBCn7a52DH51WJz56CMhdo2nlcu4SVLszR%2FBmCSF5P8PoZCUiT2WAv6JmaE3xDsS1IVVJbbLbNnlxxvxCmjWH6Prsb4%2Fk1N9Iqi8P8fTekVXnCTAV8KiK0U47CG2K5WXQsFT%2BCC8h0I3K4La9JXBrRjZRCcVZ7BeZw2seF9jonQuQ55E56tgdkN940YbSHsN%2F0wiJb2wAY6pgGzny%2FA8Ks21fwQNKHNEYvTfuz%2Br2ocFF5mgcxxFjMOdzgp3vN8zIOoFAt7YUltTnBmG3PLmURXXcCHOhOmn4g%2F15SYWSjEAgkLaNzs25JzuEzFnQmAz6FR6P0tuichKCI5LpegTUm4yHZclHVbhs%2BgCHyMvaawsMW%2FOm4E3jOsjt7lmqL9Aj0X3gfE%2FhYvV8IpiaS5ZNOn0wcxUNZgiv%2Bo35XsbMMY&X-Amz-Signature=7383ccad45244f8b0314f874d4219539f04cffc475d132401be1104b6255b07b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
