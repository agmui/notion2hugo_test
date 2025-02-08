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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TNTY2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDTle%2FpaDTiNWDCwlAVmy0J2BoEmMdF%2Fgv9JroSpLKKnQIhAOAdl7Fru5k8qDEjQe0Lw44BoAx1RSe9dKYmfpbu9wpZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYBF3RynuGK7CyQiEq3AOp1YajnrWb5%2BzsU0oC3hjj4HTy611B%2FNZM7mI7FKRhoMr6s1jWsTTwDZI%2BrYdt6prGGKZlO42iWVLg%2FN6ILMmZ80rgrPbcI8yEaCEMzyi7eyCSyEdjajA6YlL2IvGXCzeEGY4%2FiHlu0RpWm9wa8Ta3BXetCYSlxLttzsiEc4J6MXz4xqqo5m01fhIfEP7cGm6y3g3Sr8ZJ0pd6QOgIujxt0Azz7weR3N%2BvQ%2FsD0wcftzs95plNoPs9bsK4AXVrYIwrVjLbtgRKkDF%2Bi9hLaFlbpHaUzNBXc8VJh%2F36tswaBfLkxjsZerB3wk1N%2Be05Qwx0YzW7YfAFIcyMxb140azFlpaVyTV6x%2B0A1EkqE90rDRNCsKFHlHDw7ZeC8aI1m3ewbyLESWUvhBur4fd%2FOfWSogJwrOt8rw8yp2lYT5GvMaKgWDmEl9KWhL6LYtdXWGLV7YGEdajm0iEGiD8xMuCa2IXSDeoARxJEfpnKLJhHMdeneewuUfTl%2FG05pYmaLTL3jNtO0KtnPyXWwKZAblHiMLRH882QCbZLcQsTFUz3ELdOa2DJI51rQDa%2F%2B3xN0SQowEh27JQWlG2uQwyzzgxW%2Frv%2BY1rLlMqKkvlOUcm%2FcIzOl8tIONbN%2BJEsIjDVj5y9BjqkAWMZ9Dw3fvk5ABBO24yYFEZNBKN6B1puAeHHWGv36eDwap0bCvEN5t041K4newQOHUi5cNjdGpZJg4dY5wDG0ztO1jGvrmyePhxmP07cOGN6iczLFFCOoA7pOwB0l6lExCiA7HrItMWFhhoxAIGcILlgLlihn5O3VSm3IwffttKTy7qtwZ%2FtUVrPm3gUkAYrcFipEynO7H9ro5Mn1%2Fi6QxCD%2BKbn&X-Amz-Signature=ea15076f8fdc413a787cbb2eebbe8ac71043a9d82f04c01b66a7e70e9a90bb64&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TNTY2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDTle%2FpaDTiNWDCwlAVmy0J2BoEmMdF%2Fgv9JroSpLKKnQIhAOAdl7Fru5k8qDEjQe0Lw44BoAx1RSe9dKYmfpbu9wpZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYBF3RynuGK7CyQiEq3AOp1YajnrWb5%2BzsU0oC3hjj4HTy611B%2FNZM7mI7FKRhoMr6s1jWsTTwDZI%2BrYdt6prGGKZlO42iWVLg%2FN6ILMmZ80rgrPbcI8yEaCEMzyi7eyCSyEdjajA6YlL2IvGXCzeEGY4%2FiHlu0RpWm9wa8Ta3BXetCYSlxLttzsiEc4J6MXz4xqqo5m01fhIfEP7cGm6y3g3Sr8ZJ0pd6QOgIujxt0Azz7weR3N%2BvQ%2FsD0wcftzs95plNoPs9bsK4AXVrYIwrVjLbtgRKkDF%2Bi9hLaFlbpHaUzNBXc8VJh%2F36tswaBfLkxjsZerB3wk1N%2Be05Qwx0YzW7YfAFIcyMxb140azFlpaVyTV6x%2B0A1EkqE90rDRNCsKFHlHDw7ZeC8aI1m3ewbyLESWUvhBur4fd%2FOfWSogJwrOt8rw8yp2lYT5GvMaKgWDmEl9KWhL6LYtdXWGLV7YGEdajm0iEGiD8xMuCa2IXSDeoARxJEfpnKLJhHMdeneewuUfTl%2FG05pYmaLTL3jNtO0KtnPyXWwKZAblHiMLRH882QCbZLcQsTFUz3ELdOa2DJI51rQDa%2F%2B3xN0SQowEh27JQWlG2uQwyzzgxW%2Frv%2BY1rLlMqKkvlOUcm%2FcIzOl8tIONbN%2BJEsIjDVj5y9BjqkAWMZ9Dw3fvk5ABBO24yYFEZNBKN6B1puAeHHWGv36eDwap0bCvEN5t041K4newQOHUi5cNjdGpZJg4dY5wDG0ztO1jGvrmyePhxmP07cOGN6iczLFFCOoA7pOwB0l6lExCiA7HrItMWFhhoxAIGcILlgLlihn5O3VSm3IwffttKTy7qtwZ%2FtUVrPm3gUkAYrcFipEynO7H9ro5Mn1%2Fi6QxCD%2BKbn&X-Amz-Signature=fef5f7bb564db530450c18d64ac45a92002fd1058bec5d485c4a4c2adca69190&X-Amz-SignedHeaders=host&x-id=GetObject)

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
