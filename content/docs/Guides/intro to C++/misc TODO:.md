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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHXLFTU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDHmCrPzTtbVcKQ3o9tQpeSvwcbzNB36rxPsJHYaWqASAiEA4U%2FCEVNz%2B3mT2S8FfiTMi5UhYnkHU9PvRmhSO3pY43gqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf%2BhC70W2ZU6DiRlCrcA2DmOxD33a5hBQaqDqLMl47Dfh7odcOcWU4AsHOTCxkY7SzQBuWyuInRGfVdadkyy29VsZSpRKSPrAB0p%2FwlbKW6Rs89GCsgjg5cZKGYAPC8qz5BBgYbYbx8f9HyY2jU%2BsTzsbgZPBJa9370sQZmzn4umZeUQb8a7Oio%2BWjj0jgw0UMJIblW2aUDmzGlmGkowasS0bNEI1iFIy%2FQ0eeODojKJa%2FcUL3PyZB%2B2fHnfTR1SHIQa%2BZepzOd24O4oF9M16%2FpioYgMZbHiMFcF1ac%2Blm4dwB0ZFfdy0Qd022YuKboNvV8KMekHag9h6OqVRqMxBg%2FLeVoT7pFFTcj%2BvNRnhY2qyEuu%2FTGHoA1wU72cTB11a%2FerAQWkLDIRHuYk5iHE9Mq%2FUh5o5xjNdiE1EaeyMc4YdA2QTi2VvLbqruP8vCk4lLhFO2VtkpgwpPe2yAyRPimavuFstdiQ8UEHIZiivY4%2BHijofQ7V0tMNB8936wlUncqVYa4IXLIW2qstqAe%2BMfqmBf3suDn4I4DWnnZNoAwdQ1ltwaNyDjd%2F8j4QLSk8a%2FS7xfkpNSy9lNlTltVqZ2oaIiCSgTbHUDaisgZZMgOAam0NrLtgqUOkZKrdV5VrU%2FHWYKXLA%2BvXsRaMOXBnr0GOqUBFKZ74oPJEHrJFIsRFe8xrATZ01kZSgoIxIVJhCtjcaJb%2BO5tN78jmiNp%2BYDpwUmAXJq8MiP5ByQRRi4hrvKyZR2XoOurzh1QW%2FeUV5P%2FN3REGaZjcnhXlsPArSOdOJS6Bg3KIFEC4v9zZq%2FMw5RcjDbvwpGx3Yjdjhb5RcJKvtxnQr%2FGi%2FeV0LczzUiUSnUI9loof0DBH%2FAElScMYvnLQZjx4886&X-Amz-Signature=148136e9bad707e660f512739bdc4f9a2be6ec530f63a9c03ff317f9a2857e16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHXLFTU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDHmCrPzTtbVcKQ3o9tQpeSvwcbzNB36rxPsJHYaWqASAiEA4U%2FCEVNz%2B3mT2S8FfiTMi5UhYnkHU9PvRmhSO3pY43gqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf%2BhC70W2ZU6DiRlCrcA2DmOxD33a5hBQaqDqLMl47Dfh7odcOcWU4AsHOTCxkY7SzQBuWyuInRGfVdadkyy29VsZSpRKSPrAB0p%2FwlbKW6Rs89GCsgjg5cZKGYAPC8qz5BBgYbYbx8f9HyY2jU%2BsTzsbgZPBJa9370sQZmzn4umZeUQb8a7Oio%2BWjj0jgw0UMJIblW2aUDmzGlmGkowasS0bNEI1iFIy%2FQ0eeODojKJa%2FcUL3PyZB%2B2fHnfTR1SHIQa%2BZepzOd24O4oF9M16%2FpioYgMZbHiMFcF1ac%2Blm4dwB0ZFfdy0Qd022YuKboNvV8KMekHag9h6OqVRqMxBg%2FLeVoT7pFFTcj%2BvNRnhY2qyEuu%2FTGHoA1wU72cTB11a%2FerAQWkLDIRHuYk5iHE9Mq%2FUh5o5xjNdiE1EaeyMc4YdA2QTi2VvLbqruP8vCk4lLhFO2VtkpgwpPe2yAyRPimavuFstdiQ8UEHIZiivY4%2BHijofQ7V0tMNB8936wlUncqVYa4IXLIW2qstqAe%2BMfqmBf3suDn4I4DWnnZNoAwdQ1ltwaNyDjd%2F8j4QLSk8a%2FS7xfkpNSy9lNlTltVqZ2oaIiCSgTbHUDaisgZZMgOAam0NrLtgqUOkZKrdV5VrU%2FHWYKXLA%2BvXsRaMOXBnr0GOqUBFKZ74oPJEHrJFIsRFe8xrATZ01kZSgoIxIVJhCtjcaJb%2BO5tN78jmiNp%2BYDpwUmAXJq8MiP5ByQRRi4hrvKyZR2XoOurzh1QW%2FeUV5P%2FN3REGaZjcnhXlsPArSOdOJS6Bg3KIFEC4v9zZq%2FMw5RcjDbvwpGx3Yjdjhb5RcJKvtxnQr%2FGi%2FeV0LczzUiUSnUI9loof0DBH%2FAElScMYvnLQZjx4886&X-Amz-Signature=5a429fcdbfd3f06288cab4f08048ec4ed2c516c2e053bf967f9b6881ab74e51b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
