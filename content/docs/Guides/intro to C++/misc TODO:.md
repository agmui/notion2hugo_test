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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIMYMTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCVjN51YCpiegJ9dwxzRkyrFcI1gy40eK1jJ%2FHR7AoTEgIhAKupbjBGE14NOt25VI2dFy%2BTxZM38bv5xWWMEH1b1pYyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo0DNRCLUWwes%2FyCgq3AP0Ds9OmD3j53%2Bkj40rTn0YlkxM9TP5dzNG2LjpKMHsYRlS%2FmPqMoLomuTZaC8VZY90W7k2cPq0YCc3wP83o%2BHGkmrBm8aS8SQ0Kzt7ECHQ2noQGBrLHFhpYeYEDOnyLAI57xrpQ8NV45dl51f8Fx1Wzri5tNuJsHfYIjgUDXJ5uJkCOrH3gS7svzadKvOFqFqvGSFeYNNN1JvjS%2BBTE31go4y%2BDc4Pu3fE3Uzm3OeZBREZZX9RqF6iY%2Fc10W2smF6DI4TnsdNhXOUcoahjrgfGwGznw6xy8X3py5hwoKLsVWXkpYpjJCRdnTYAey96QPeilPME%2FI15Q4WezE85dv5%2Fa5ULj6zp6d4rRNwKTF%2BxXEqGro3KgHyrdRJYD3YZoK6tHZOKb7jP%2BfUrR0QqTrI53IQnC0Pkh%2BMIB33upH1Er0Ifvs2hfS%2Bhwgt487jdDe9t09OPH46MftK34wQgmhjKMMoeJaxe%2BSEmVcqgogRFLmvkwm3c%2FALseTuldh7iJb46onFvalgJQGB6honc5JOt2kE4x%2Bb7Dy1ST2OJn7pY2GiemGnHozJrRhCbkTgFnIVqI%2FaxVQXwlVVnKKGAhlAEtRhgyLFYZy%2Bd0x40i4smO1xYmnS%2FKnNf%2Bq%2BJyzC1kazCBjqkAVcDZUqGjLKAPxeEggyOXEUWar2IaF0CRpeZ38LfcVTlwsLguhoqQrWIPSjNk97Fqn5KdZn5BInVfUz%2FOkRW3S%2BJPtpjaKoqMDv40M2SWQfRgApiK2g5IOMPvHyJ3QJ6l3XSlt19O5uRTe2yDy7alUZ6zrlV8i3kxPdOq9M1e1PPEa%2F1HRtGCIO%2Fh8f8tVRGhikiB7YoDjXhYtHGo%2B3vo1dSPBry&X-Amz-Signature=a6e5733c4b6f0669d1ebc8e1eadd61a085b4869477e7cae65966352f9c141146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIMYMTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCVjN51YCpiegJ9dwxzRkyrFcI1gy40eK1jJ%2FHR7AoTEgIhAKupbjBGE14NOt25VI2dFy%2BTxZM38bv5xWWMEH1b1pYyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo0DNRCLUWwes%2FyCgq3AP0Ds9OmD3j53%2Bkj40rTn0YlkxM9TP5dzNG2LjpKMHsYRlS%2FmPqMoLomuTZaC8VZY90W7k2cPq0YCc3wP83o%2BHGkmrBm8aS8SQ0Kzt7ECHQ2noQGBrLHFhpYeYEDOnyLAI57xrpQ8NV45dl51f8Fx1Wzri5tNuJsHfYIjgUDXJ5uJkCOrH3gS7svzadKvOFqFqvGSFeYNNN1JvjS%2BBTE31go4y%2BDc4Pu3fE3Uzm3OeZBREZZX9RqF6iY%2Fc10W2smF6DI4TnsdNhXOUcoahjrgfGwGznw6xy8X3py5hwoKLsVWXkpYpjJCRdnTYAey96QPeilPME%2FI15Q4WezE85dv5%2Fa5ULj6zp6d4rRNwKTF%2BxXEqGro3KgHyrdRJYD3YZoK6tHZOKb7jP%2BfUrR0QqTrI53IQnC0Pkh%2BMIB33upH1Er0Ifvs2hfS%2Bhwgt487jdDe9t09OPH46MftK34wQgmhjKMMoeJaxe%2BSEmVcqgogRFLmvkwm3c%2FALseTuldh7iJb46onFvalgJQGB6honc5JOt2kE4x%2Bb7Dy1ST2OJn7pY2GiemGnHozJrRhCbkTgFnIVqI%2FaxVQXwlVVnKKGAhlAEtRhgyLFYZy%2Bd0x40i4smO1xYmnS%2FKnNf%2Bq%2BJyzC1kazCBjqkAVcDZUqGjLKAPxeEggyOXEUWar2IaF0CRpeZ38LfcVTlwsLguhoqQrWIPSjNk97Fqn5KdZn5BInVfUz%2FOkRW3S%2BJPtpjaKoqMDv40M2SWQfRgApiK2g5IOMPvHyJ3QJ6l3XSlt19O5uRTe2yDy7alUZ6zrlV8i3kxPdOq9M1e1PPEa%2F1HRtGCIO%2Fh8f8tVRGhikiB7YoDjXhYtHGo%2B3vo1dSPBry&X-Amz-Signature=f2525abd632fa779f1c65597ebf54bdc9c6c36f8fefc9bc57c7b664848f64e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
