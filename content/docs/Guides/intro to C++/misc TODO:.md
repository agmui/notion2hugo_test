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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SXLWYC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAX%2BOusagIF4iggPF3FSPRqC9lsQdChWPy1efMmaI%2BneAiBjjE1AOd6hm8PO3y9lO5LIsGf1THS9vHC48EQ3%2F0Qi8CqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9MszKz4xUQYaH%2FMKtwDcCpXRX4YCZeZr5xQugVUaMdQ%2BMND8XGdSaXh%2BiFT%2FhYciYHeg6HluteUXkRodI%2BMUjugcYCJ9YBBAOhz4F%2FHTeRjp0I46PkE1XsTJDTBqB1FTEMTjWuxRQNVq8jXX4f%2Fj4XwrBRs5GXcdvIdVW%2FAypIu9VR6%2FI1ka%2BkHE8AKVyTNNAfOiLcofc01oApzmyLP%2FGYkK0Ty8dtLw9WADMIinDRjxxWhtCnek8TaNg2b%2BHQnu7IasuWubPHGeFVu%2F7LPKN%2B7pmZCajtGg0jFWXWqwLarQ1ZdxLY%2BTiD5ZYujEEAIoNwaEEmth3d%2FmGUbnqd9vjVA5rcW9kwIFIpZy8Vz1bPLfQ3XPBnqHhKUbgMmBesKjAkN14suBFrQKRLVNa9ZOKh768Amlw3dos0%2BiScG4uYGKm3BqDbzH30zxrvIObA%2BQKtGyx%2FL%2Bb%2BGyf8tZGAF8%2Bh4yScvatgSD1teNi6SNGwlEmbymSpVaPL8hAkYyMt0fisGwgmM4%2FW1DueRJCmIMgl9IC%2BJBhsV93%2BKJsKY3C4tn8GeYaAjF%2BpEnj%2B49fpu8Kl%2BjxaSDEq%2B63zGWK22UVSWMh08w45WFpdNJR3RzXNRfY65XNWex2nbBC6ldWyU9rOSf3OfPeXu1LMwmvrzvgY6pgEwWAAQ8sjjTvc8YsNGDxixg2eicazShGXFihIyjqi8tBAnrd7ct6KC5rg8ze5IQWvrTHRUPp79KPG6T7UglLZRF750QG0GJuDraKpZ7l4kgdhdpPvjmrgVwV9Fy%2BjshtVpAzyzfFgijnfi8hxlbeBZKM6j%2FXHPvJgGFdA5Buxw7IInrwtNRkH2VSzGO6UO8j5xRuV87u0cf8nXvIAzfryg7mt0%2B9QZ&X-Amz-Signature=9887b184308daa17ee0b0a1cf4fd04cd20ce3a38ee19803262d0761fdeaf9e17&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SXLWYC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAX%2BOusagIF4iggPF3FSPRqC9lsQdChWPy1efMmaI%2BneAiBjjE1AOd6hm8PO3y9lO5LIsGf1THS9vHC48EQ3%2F0Qi8CqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9MszKz4xUQYaH%2FMKtwDcCpXRX4YCZeZr5xQugVUaMdQ%2BMND8XGdSaXh%2BiFT%2FhYciYHeg6HluteUXkRodI%2BMUjugcYCJ9YBBAOhz4F%2FHTeRjp0I46PkE1XsTJDTBqB1FTEMTjWuxRQNVq8jXX4f%2Fj4XwrBRs5GXcdvIdVW%2FAypIu9VR6%2FI1ka%2BkHE8AKVyTNNAfOiLcofc01oApzmyLP%2FGYkK0Ty8dtLw9WADMIinDRjxxWhtCnek8TaNg2b%2BHQnu7IasuWubPHGeFVu%2F7LPKN%2B7pmZCajtGg0jFWXWqwLarQ1ZdxLY%2BTiD5ZYujEEAIoNwaEEmth3d%2FmGUbnqd9vjVA5rcW9kwIFIpZy8Vz1bPLfQ3XPBnqHhKUbgMmBesKjAkN14suBFrQKRLVNa9ZOKh768Amlw3dos0%2BiScG4uYGKm3BqDbzH30zxrvIObA%2BQKtGyx%2FL%2Bb%2BGyf8tZGAF8%2Bh4yScvatgSD1teNi6SNGwlEmbymSpVaPL8hAkYyMt0fisGwgmM4%2FW1DueRJCmIMgl9IC%2BJBhsV93%2BKJsKY3C4tn8GeYaAjF%2BpEnj%2B49fpu8Kl%2BjxaSDEq%2B63zGWK22UVSWMh08w45WFpdNJR3RzXNRfY65XNWex2nbBC6ldWyU9rOSf3OfPeXu1LMwmvrzvgY6pgEwWAAQ8sjjTvc8YsNGDxixg2eicazShGXFihIyjqi8tBAnrd7ct6KC5rg8ze5IQWvrTHRUPp79KPG6T7UglLZRF750QG0GJuDraKpZ7l4kgdhdpPvjmrgVwV9Fy%2BjshtVpAzyzfFgijnfi8hxlbeBZKM6j%2FXHPvJgGFdA5Buxw7IInrwtNRkH2VSzGO6UO8j5xRuV87u0cf8nXvIAzfryg7mt0%2B9QZ&X-Amz-Signature=76dd870154aba25e4857188f3b56014b269ebec72731ecbbd6b7cd450930efe1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
