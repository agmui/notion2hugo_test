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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRZ57JF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCGxh4WloMbhgKfpkT2MUp5JMgCXPhRhXzKJVEaExVBUQIgZCBMSnAAVuMJN%2FQsSSPsr49CFAcPNu97XDDM%2FcvV4FQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDM4EPv69R6Oz5ZQC3ircA4fVjv9%2B9FKxajqeOhZ8t8MJT93ky5K4H%2FyeN1CViraPnx6rdu8yYrW758e5iFAvgK2uhExeCaN1NNCMujoqxSRx2YmODA9EjYP%2Bl8hoLl3yYcBRaG8nDECekrGlv7DzDVIpeAy3O%2FOoQa29Mnvv14F6Lb6fDFw9J0o%2BtIhCcWpVVZOWEyEFT9sU0p%2BxxdE0b1RE1YvX%2BguQWiqwfSM2clfrmwuBSBXzf5qBbjBDA7sbOsQMS1dAYw8ZU0kbeluP8UrZsggGAfF3PYQHa5aqenunvO9yFnKFH1b%2BVMPLUD6P0Xu4tVth5b%2BrlDYfwGvtdDqCovvSwCKNE%2BD%2FD1gMWfzl8cdde45q%2BPIqQ4zeQ7WTcF55TJlPfVO3zyFc9wPyYV5bRXEF7vmSadA4p7nKgsiB3OduhC3zxCwNxt%2FjX7%2FwkSiHDxEryqRuFb0GH2LZhq5vFJpjWmQgxUrc21xwqxZfUSpnU0azWjISNuX%2F84vmk%2F35tjtbF6bKDeF23jqxLfkwHowMeoBXkzo2y0ThBZoHD5YlsJb9g3eVSl%2F1rYtBi%2BwpeFvhDfDFuMsCVt02Tr%2BCeHfJ%2Fp74BcQQu6X5t%2BSRAppnceMUVSd00kkL%2BG7oy6e05lpuU9xTTGEZMKDUmb0GOqUBaS6JrmCaEoAACesHGUFbeyFI0VW6J3qHT%2BIhOOd3jUBeGQlrDnQ4f5wtn7qS62oJCUNYWcptd3a%2FWV6xfj%2Fasic0YW81QIzQfhPaklQlwXwvaa5vdHKSPZZ%2BDYedOIQNc5XIQQLb%2FIdNQIXzRtY0UXeGoWVYGrTMW1ypxOHAiP%2FPL3cbK9v5LqvEBKBJGcgJ52hy5X82OI5%2B3a8GA1gF2yDLa4xN&X-Amz-Signature=860bc0f79662fbc636bf00bd60c968a38372e30367eed697077ebb6cbf051e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRZ57JF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCGxh4WloMbhgKfpkT2MUp5JMgCXPhRhXzKJVEaExVBUQIgZCBMSnAAVuMJN%2FQsSSPsr49CFAcPNu97XDDM%2FcvV4FQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDM4EPv69R6Oz5ZQC3ircA4fVjv9%2B9FKxajqeOhZ8t8MJT93ky5K4H%2FyeN1CViraPnx6rdu8yYrW758e5iFAvgK2uhExeCaN1NNCMujoqxSRx2YmODA9EjYP%2Bl8hoLl3yYcBRaG8nDECekrGlv7DzDVIpeAy3O%2FOoQa29Mnvv14F6Lb6fDFw9J0o%2BtIhCcWpVVZOWEyEFT9sU0p%2BxxdE0b1RE1YvX%2BguQWiqwfSM2clfrmwuBSBXzf5qBbjBDA7sbOsQMS1dAYw8ZU0kbeluP8UrZsggGAfF3PYQHa5aqenunvO9yFnKFH1b%2BVMPLUD6P0Xu4tVth5b%2BrlDYfwGvtdDqCovvSwCKNE%2BD%2FD1gMWfzl8cdde45q%2BPIqQ4zeQ7WTcF55TJlPfVO3zyFc9wPyYV5bRXEF7vmSadA4p7nKgsiB3OduhC3zxCwNxt%2FjX7%2FwkSiHDxEryqRuFb0GH2LZhq5vFJpjWmQgxUrc21xwqxZfUSpnU0azWjISNuX%2F84vmk%2F35tjtbF6bKDeF23jqxLfkwHowMeoBXkzo2y0ThBZoHD5YlsJb9g3eVSl%2F1rYtBi%2BwpeFvhDfDFuMsCVt02Tr%2BCeHfJ%2Fp74BcQQu6X5t%2BSRAppnceMUVSd00kkL%2BG7oy6e05lpuU9xTTGEZMKDUmb0GOqUBaS6JrmCaEoAACesHGUFbeyFI0VW6J3qHT%2BIhOOd3jUBeGQlrDnQ4f5wtn7qS62oJCUNYWcptd3a%2FWV6xfj%2Fasic0YW81QIzQfhPaklQlwXwvaa5vdHKSPZZ%2BDYedOIQNc5XIQQLb%2FIdNQIXzRtY0UXeGoWVYGrTMW1ypxOHAiP%2FPL3cbK9v5LqvEBKBJGcgJ52hy5X82OI5%2B3a8GA1gF2yDLa4xN&X-Amz-Signature=51e6d2190b81aa3fc7ae738dc404acffeab283775108f9c32e8c8dcebfe1b889&X-Amz-SignedHeaders=host&x-id=GetObject)

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
