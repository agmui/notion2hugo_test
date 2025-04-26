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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666AEA657%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGMMBAn7RXMJTekVbkSP8tTonkskaeWAGtqC%2FMOu4qaQIhAIIAJYblx4pRaFNg%2FIR0rIh2%2B%2BbcVSno4Dfnr%2FO2Uo1eKv8DCD4QABoMNjM3NDIzMTgzODA1IgxTYaltUTRMNAKlIlwq3ANZ635%2FN%2BwJfG28IrCfzExYdP7efUR51S8G9QhslH87peec9bokNDZJQ18S4edrDMFXjPsV16JX57yQYt4B28XHJvoflL%2BGHf8NvIwm5fUAyKjRx%2FtWtgWk2jSOI6l3u%2FlYrhI6HvVV9JuncQ6M3XOReFZOZoyY24vXzZTD5kq3J4%2BeU1%2BvBUpOOilZ1d9neo5IoeUvYbN3gln1zPwGDLBhFEFMaQFeRELRNokd0RnqZjEy0YWBVdYfncbK05HfnywzueZXhuhp5A07jcrdCC7TM%2B7ag9kUFehYQt9vZKTtP6oKn0nBcUfxyGSt%2Fh%2FPYe3ZLqE1aYFPUrbHQneliUaTk%2FIiGDUL6Iep5VWJcQl0QlhkBOrZ350MOC6NFkXdmVzMs3cld2xhW0%2F6RGgVbMwcbpsq41K5Y4%2F1OE4SfcqPXiqre8BaLEeVRh9aWjDhcmursbZSjTTZkJKF5847rlGmrf%2BDyIfdQr%2Bk8yEB68YSZhtuA3jd5J3Yf0d78rtNXkjCAM5NaB5Ho4ysS9AIznL8Kk44qIh2lnb4%2BtXuxOYSkvav0hyGvfpRdE0vgOv1v55RDhiK0EVIBDK4K8wWTDLnXD%2BWfl2x8Se379MEy9aN6aBb5nRCEBBeNwVkszDIyLHABjqkAWifgUQZduMehxRJ7CChktjtcUXMAQrV9sg95Fe9p%2FAFZmAej%2FBTnMTyQKQDsPIYWQrDWmXB%2FgviIqFJ4U8JrOVjekgEpquXUiDNhN32oo%2B2aOhAzmGpBBNQRlRLBWs%2BXMRHopIH1z9Plpc4ueP93GbkzI85aCIp6t0dCtNSDvxt3Sae%2FflECoLFdK3i4bAa%2Bh5hRLth5s%2FeB01BGRgYnXhvypHB&X-Amz-Signature=e4c142ea6fb721b969c6791e3381fde3960bedd9f50338bd7c2fabc71f1310b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666AEA657%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGMMBAn7RXMJTekVbkSP8tTonkskaeWAGtqC%2FMOu4qaQIhAIIAJYblx4pRaFNg%2FIR0rIh2%2B%2BbcVSno4Dfnr%2FO2Uo1eKv8DCD4QABoMNjM3NDIzMTgzODA1IgxTYaltUTRMNAKlIlwq3ANZ635%2FN%2BwJfG28IrCfzExYdP7efUR51S8G9QhslH87peec9bokNDZJQ18S4edrDMFXjPsV16JX57yQYt4B28XHJvoflL%2BGHf8NvIwm5fUAyKjRx%2FtWtgWk2jSOI6l3u%2FlYrhI6HvVV9JuncQ6M3XOReFZOZoyY24vXzZTD5kq3J4%2BeU1%2BvBUpOOilZ1d9neo5IoeUvYbN3gln1zPwGDLBhFEFMaQFeRELRNokd0RnqZjEy0YWBVdYfncbK05HfnywzueZXhuhp5A07jcrdCC7TM%2B7ag9kUFehYQt9vZKTtP6oKn0nBcUfxyGSt%2Fh%2FPYe3ZLqE1aYFPUrbHQneliUaTk%2FIiGDUL6Iep5VWJcQl0QlhkBOrZ350MOC6NFkXdmVzMs3cld2xhW0%2F6RGgVbMwcbpsq41K5Y4%2F1OE4SfcqPXiqre8BaLEeVRh9aWjDhcmursbZSjTTZkJKF5847rlGmrf%2BDyIfdQr%2Bk8yEB68YSZhtuA3jd5J3Yf0d78rtNXkjCAM5NaB5Ho4ysS9AIznL8Kk44qIh2lnb4%2BtXuxOYSkvav0hyGvfpRdE0vgOv1v55RDhiK0EVIBDK4K8wWTDLnXD%2BWfl2x8Se379MEy9aN6aBb5nRCEBBeNwVkszDIyLHABjqkAWifgUQZduMehxRJ7CChktjtcUXMAQrV9sg95Fe9p%2FAFZmAej%2FBTnMTyQKQDsPIYWQrDWmXB%2FgviIqFJ4U8JrOVjekgEpquXUiDNhN32oo%2B2aOhAzmGpBBNQRlRLBWs%2BXMRHopIH1z9Plpc4ueP93GbkzI85aCIp6t0dCtNSDvxt3Sae%2FflECoLFdK3i4bAa%2Bh5hRLth5s%2FeB01BGRgYnXhvypHB&X-Amz-Signature=8b0e30ee15f13a4b7f958a92f35ede1723c0b75c0d113eda726e02228a767f10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
