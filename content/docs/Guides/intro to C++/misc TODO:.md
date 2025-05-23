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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCR6S6G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCau95%2FGETayXVksXCWzaRAMiErgKOYsrtYGAqIMOhqhgIhAMzwzh3SzS5coQyB398ZfJAn720MtgMhSo2SsDKeWUl5KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQBVDIPu9kUFQs5EAq3ANtwT%2FmldGqeE27%2BcS4wGwk6ee42%2BMlZ%2BkxrMiW9XNlKSyZ%2Btg7zvkLzbV9qo4t3o6ChnYXfDTnRx%2BkMH4g%2B8jcLJWk6w100d1dXtAjpvY%2BwGD0uqtdVblXD6uyB8NVnOHcNCN%2But6Mfqtwpcm%2FMfH3Szcdw5yzkvI933Q267lPkwIpYtjbSC2SYvv11Oe3gDBj70li9mCVgLtWuI%2FfBZ5ppZJNCuTAx6G01%2BWxyO0pf2Py5p%2FtOARCawK8Df6qA%2FDwVhWTXhzwCwKkUyECiXi5o82fOzCeEnk2LyjwFPpO52tGMVyWDN5Oi5Zt39GNGe9bYAwpV1sUbANtM4o8KeHqZXXvkVpksI4iJDEcJYbOJ7SnitECAeqDTSBAYJtwdm2SOxoW0%2BQadWwr5PUhflXgNOO8pTvGNGhK%2FOftS5akcoNYDNJ0xQlUOrM4Wj38Mpyjj8RPyx0Zh%2BcB4mMs52CEa8k9roBBSaxUzU5AgUVMJLRzZ8FWgKfRFVVFExXW0YMtU726BqH5OAU5mjovgiHlpYlDSJpZop8NDdRQCs8R1gA7BOVmJ8TGCBKaZ09mc0bGlvLyaM1Mc3s%2F6blXtRvKeuESHwu9ls7%2BGbLle6LP55u0lFzOwaZkPwLGEjDlwb%2FBBjqkAbs3nZXrhO0KiM07I4Oh4TCMa6%2FrnwNCp5vX30F8iJa20oT2puOhPo252E86jZxYBd022Pmf%2FXGmIiY2U4OkeeW%2F3NQk4FOARtfrXhFSk6nst3NsAnHYTMbMTpIKzcQw5emjT70Sf8d58WELcx1igxZvLMqPh%2BK%2BCnwpBjOC2XsK5RywsBmijlxi47GJ0AkKHFrAd2GO%2Bb%2FElRhnYcpfRi20FVGI&X-Amz-Signature=6c47b2a9814402804db03be4de8a56f249f2cd9fc4ca924140c938261873a720&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCR6S6G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCau95%2FGETayXVksXCWzaRAMiErgKOYsrtYGAqIMOhqhgIhAMzwzh3SzS5coQyB398ZfJAn720MtgMhSo2SsDKeWUl5KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQBVDIPu9kUFQs5EAq3ANtwT%2FmldGqeE27%2BcS4wGwk6ee42%2BMlZ%2BkxrMiW9XNlKSyZ%2Btg7zvkLzbV9qo4t3o6ChnYXfDTnRx%2BkMH4g%2B8jcLJWk6w100d1dXtAjpvY%2BwGD0uqtdVblXD6uyB8NVnOHcNCN%2But6Mfqtwpcm%2FMfH3Szcdw5yzkvI933Q267lPkwIpYtjbSC2SYvv11Oe3gDBj70li9mCVgLtWuI%2FfBZ5ppZJNCuTAx6G01%2BWxyO0pf2Py5p%2FtOARCawK8Df6qA%2FDwVhWTXhzwCwKkUyECiXi5o82fOzCeEnk2LyjwFPpO52tGMVyWDN5Oi5Zt39GNGe9bYAwpV1sUbANtM4o8KeHqZXXvkVpksI4iJDEcJYbOJ7SnitECAeqDTSBAYJtwdm2SOxoW0%2BQadWwr5PUhflXgNOO8pTvGNGhK%2FOftS5akcoNYDNJ0xQlUOrM4Wj38Mpyjj8RPyx0Zh%2BcB4mMs52CEa8k9roBBSaxUzU5AgUVMJLRzZ8FWgKfRFVVFExXW0YMtU726BqH5OAU5mjovgiHlpYlDSJpZop8NDdRQCs8R1gA7BOVmJ8TGCBKaZ09mc0bGlvLyaM1Mc3s%2F6blXtRvKeuESHwu9ls7%2BGbLle6LP55u0lFzOwaZkPwLGEjDlwb%2FBBjqkAbs3nZXrhO0KiM07I4Oh4TCMa6%2FrnwNCp5vX30F8iJa20oT2puOhPo252E86jZxYBd022Pmf%2FXGmIiY2U4OkeeW%2F3NQk4FOARtfrXhFSk6nst3NsAnHYTMbMTpIKzcQw5emjT70Sf8d58WELcx1igxZvLMqPh%2BK%2BCnwpBjOC2XsK5RywsBmijlxi47GJ0AkKHFrAd2GO%2Bb%2FElRhnYcpfRi20FVGI&X-Amz-Signature=9acc97975c6ace977c9418b259a24a24ae2443b0eb64922ff61d68de3db08862&X-Amz-SignedHeaders=host&x-id=GetObject)

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
