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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHKE3QI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1yHEqhyyvVdV%2BJr%2FVeQT3rOcQtnA48VaajKPZfUe37AiA%2BHKgG0YV%2BH0dPjeTYoNqSAXHPeEKF1QV2VuOz%2Bjx0iyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRayXRNeokgAUwGnBKtwDiXDUDMfCMfqUnIqOJhhARxz8ouCWAfu8gOHB2UXMFevZousKrJlhPQUzIg%2FNatIStpkrtrI0XQ4hOG%2F8j8%2F%2BLtBO0B6SayDUlSzHVNpxINAVoT%2FLE13ru15%2Fb5h7mTFxzOflLhcsd6Pwif4QpkaxKtSkF95ANohYeHHR2qsXMbVV2WtiO%2FOEBBUugS84Sp0PYPePg7ktIdnCgJ7%2BFzjMH8J1Op3uVAjpc5oxDbAbfWtWFFGyNo7wf6VRuqkGexmITsHxQ%2BYslBaAabbmTb8Ms9dhYDknofjm5RxS8f%2FxvJtWmqdJUPtGgNoQBoLQosFBU2Swg1inCzdeUBnnY%2FZI%2FmXt3n01uVtuT2N0%2FXDVScrsYEvB7tEAjFTqRNmR10vPERGO5yMZ4Spqw424WNmtFUrlWrvPvuHkwDh%2B4GO9Od71%2BwIi39NRkD8poXg0fMCWdP4Q5RtjTYn6JhHJ22MRz00IjpWFFWaHHKagh3Xcm9ZItBoUO4032BIIWo4srQkA0ZI%2FddO5gygcZOwbpz9sg%2FCv7gm1vxpFhge4%2FpQsHrQRNKjxNJ69x4ojAeP%2BZ7G%2FL9ELKBtEAwNMYdaQeKvT88cp05fnNdZ2%2BG0i%2FPg9T81%2F7ovO1pnJOYcDBIowwqqqwgY6pgHlPeHd92G0i2n6X75XB7o9Hl2HaFsck9sTtTSqIapKhaiX08Tnrj4qX5FoEohMKsaIxcqCPXudX3OJl%2BjP4ZbMkJ%2BK8XDK1iA4zUUANUA%2FBpOvRUkFl3o2JxVhSygcC6h67mvH1cxjknGB4uDKEg7PlqsDxqiSJ2H5JYkfmGVWCPVeAUJaDhLhowgeXcPeCiznt9itaUY%2B6KLRETJG2289nN8Uy3kr&X-Amz-Signature=fb4fe9de9303bf65db502fe4f69936604739ca1372226c6e830c1c581581fc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHKE3QI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1yHEqhyyvVdV%2BJr%2FVeQT3rOcQtnA48VaajKPZfUe37AiA%2BHKgG0YV%2BH0dPjeTYoNqSAXHPeEKF1QV2VuOz%2Bjx0iyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRayXRNeokgAUwGnBKtwDiXDUDMfCMfqUnIqOJhhARxz8ouCWAfu8gOHB2UXMFevZousKrJlhPQUzIg%2FNatIStpkrtrI0XQ4hOG%2F8j8%2F%2BLtBO0B6SayDUlSzHVNpxINAVoT%2FLE13ru15%2Fb5h7mTFxzOflLhcsd6Pwif4QpkaxKtSkF95ANohYeHHR2qsXMbVV2WtiO%2FOEBBUugS84Sp0PYPePg7ktIdnCgJ7%2BFzjMH8J1Op3uVAjpc5oxDbAbfWtWFFGyNo7wf6VRuqkGexmITsHxQ%2BYslBaAabbmTb8Ms9dhYDknofjm5RxS8f%2FxvJtWmqdJUPtGgNoQBoLQosFBU2Swg1inCzdeUBnnY%2FZI%2FmXt3n01uVtuT2N0%2FXDVScrsYEvB7tEAjFTqRNmR10vPERGO5yMZ4Spqw424WNmtFUrlWrvPvuHkwDh%2B4GO9Od71%2BwIi39NRkD8poXg0fMCWdP4Q5RtjTYn6JhHJ22MRz00IjpWFFWaHHKagh3Xcm9ZItBoUO4032BIIWo4srQkA0ZI%2FddO5gygcZOwbpz9sg%2FCv7gm1vxpFhge4%2FpQsHrQRNKjxNJ69x4ojAeP%2BZ7G%2FL9ELKBtEAwNMYdaQeKvT88cp05fnNdZ2%2BG0i%2FPg9T81%2F7ovO1pnJOYcDBIowwqqqwgY6pgHlPeHd92G0i2n6X75XB7o9Hl2HaFsck9sTtTSqIapKhaiX08Tnrj4qX5FoEohMKsaIxcqCPXudX3OJl%2BjP4ZbMkJ%2BK8XDK1iA4zUUANUA%2FBpOvRUkFl3o2JxVhSygcC6h67mvH1cxjknGB4uDKEg7PlqsDxqiSJ2H5JYkfmGVWCPVeAUJaDhLhowgeXcPeCiznt9itaUY%2B6KLRETJG2289nN8Uy3kr&X-Amz-Signature=0f3d8958ce1b2e950de632c1861a7d29c400805fa4d1ff448d6720688f9091bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
