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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUG6X4RV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6bls4kpPf5dYM4bHtThCHZWX3sdWWY9te3JQv4DeGyQIgUVHTgYuN6hUlGTR8IcS%2FGDzkf6N4gu2w6OZ4496J%2F0gq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDQH0TsTkb14caBDQSrcA7ifHgL0uFjTSCEAMipiH3m6z%2F09CUg%2F4XT1yOuEnBORYJUhWIUPCe6AYRT1%2F%2BgJqNSUy%2FwkV69tichMRFXqavcD0epK9Svyw7kuwlrNWybmVxuXYtzXohoQhLQV3kKonpyo8JBhGmRhme0yvPnbvDAY6CcGhUHKKp4M1JhJDTpJKgv1CZK6dBT13AAig94KP2mUDPkRBsEyI%2FaPohpNbWpQT72CocKYa8hl1Qr4s3CRK%2F9pLgg8j25jlemuf%2FjCnph%2FAsx%2FCqsKEcsse3NvxV6xu2PdM9Kv1TsNRgbFlPxrUfsJ142iDGGqDZ15rrb9GN7ryDdr%2BSgJigS6UJMKTLNrayW8cJJvZpP9MKuEJCIFR6uZfRvIxSmJ%2FF6rbKw9UE7UYAqVV4q5ngQ34Mg7eTW6HNnjIomVXreG1P%2Bb8lVXK%2BE9tGuNrafmo8PUVubGy7NlF%2FZuAO3aXtL9frYn2g5e0XbxQ3%2FT5gXuHVMk%2BDBnuwR7OTJZo42JXxtc8wPqHyVzwiEm%2BEDCMPdHJRL%2FrlECuQfIKjyFTN5U1pLTxCTWeTu6mmZXJvs9RbdNKxnlyr4q2jOcHqB4M%2FUzSXRlXrnfzyP8u793tW43Le6T%2ByeCUQwQj6Rx0bk9dAL6MJDLyr0GOqUBrSRspKhpnaWzTRRpCKP8fLznDo3Rc7g%2B2qg81aPhHNzeSu7JPslRBeV5dctHBlwkDGTsxqU2cg3pO44aV3UAv2UDi3MmHoOFVZqZoNQUGjeRxpdqX%2FBYw0pULFYTzAUG5lU5oAn9O%2FZWGSfG323XxqNPEAAgZ53LHAzbj8yoQhVPWCTRfC7ayG%2Bqzn3TyDZAH33vN3qvmc6g2cSRTOmgPLumXQ6h&X-Amz-Signature=1ce4020c15a111e571a454143266110a170e03eea1be72243aed62f13ac560ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUG6X4RV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6bls4kpPf5dYM4bHtThCHZWX3sdWWY9te3JQv4DeGyQIgUVHTgYuN6hUlGTR8IcS%2FGDzkf6N4gu2w6OZ4496J%2F0gq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDQH0TsTkb14caBDQSrcA7ifHgL0uFjTSCEAMipiH3m6z%2F09CUg%2F4XT1yOuEnBORYJUhWIUPCe6AYRT1%2F%2BgJqNSUy%2FwkV69tichMRFXqavcD0epK9Svyw7kuwlrNWybmVxuXYtzXohoQhLQV3kKonpyo8JBhGmRhme0yvPnbvDAY6CcGhUHKKp4M1JhJDTpJKgv1CZK6dBT13AAig94KP2mUDPkRBsEyI%2FaPohpNbWpQT72CocKYa8hl1Qr4s3CRK%2F9pLgg8j25jlemuf%2FjCnph%2FAsx%2FCqsKEcsse3NvxV6xu2PdM9Kv1TsNRgbFlPxrUfsJ142iDGGqDZ15rrb9GN7ryDdr%2BSgJigS6UJMKTLNrayW8cJJvZpP9MKuEJCIFR6uZfRvIxSmJ%2FF6rbKw9UE7UYAqVV4q5ngQ34Mg7eTW6HNnjIomVXreG1P%2Bb8lVXK%2BE9tGuNrafmo8PUVubGy7NlF%2FZuAO3aXtL9frYn2g5e0XbxQ3%2FT5gXuHVMk%2BDBnuwR7OTJZo42JXxtc8wPqHyVzwiEm%2BEDCMPdHJRL%2FrlECuQfIKjyFTN5U1pLTxCTWeTu6mmZXJvs9RbdNKxnlyr4q2jOcHqB4M%2FUzSXRlXrnfzyP8u793tW43Le6T%2ByeCUQwQj6Rx0bk9dAL6MJDLyr0GOqUBrSRspKhpnaWzTRRpCKP8fLznDo3Rc7g%2B2qg81aPhHNzeSu7JPslRBeV5dctHBlwkDGTsxqU2cg3pO44aV3UAv2UDi3MmHoOFVZqZoNQUGjeRxpdqX%2FBYw0pULFYTzAUG5lU5oAn9O%2FZWGSfG323XxqNPEAAgZ53LHAzbj8yoQhVPWCTRfC7ayG%2Bqzn3TyDZAH33vN3qvmc6g2cSRTOmgPLumXQ6h&X-Amz-Signature=37da50115deadfb357641bbb8fc7ebfc482ca6eb7caa3bf28bb3064b61a2086d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
