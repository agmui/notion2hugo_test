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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MAVU5SN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCT40sn%2FcbJ%2FN1Lp0Bv%2F2biQkOlUoW%2Buv2vB%2BB3n2ceegIgay79knawZqY4m08z0wTzxHS3eufkDAtjEM4q7fSZ1A0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDH3jb32jAjDWN8bnRSrcA7V5GuOBYbd0UNdgH1sjq%2B2Z7adITxdRTtD4hqOFN3mk%2B2Yqj6nOkoKezZGCziVu3tbP14uKvwt0ibwAjOgQwn7k17czhsWn64YBbUgSnYlMeFRRdCiy2YYra2JquIBOfiNC1aaV9c827LO1VnT3sZXjBw61n2%2BsK2R4QuBs5fSM6SQuV2KSngLPFHcFQgDMtEu9l485ojSnRt7%2BLg%2BsHk17INLfjAEd3eoI46Lrxd2D0ZnVamMftT5akWNCvK9nXtA%2BHYly35b6Nt6WN1tBjsQlWFBqRSQp00KgQ63nn09e0JaUGnsHEfAwzI%2B7YIzJ4hRN%2BxguqLpR5nPFFmR4I8qjM5XAw0%2BOtqFn00Eyq0mpHID2N0A7pQYiJTsFDGtHllQ7DPpISx5oBgMKOXaLK%2BTXAoH8g1SdfrMjo%2B175GtzJhqx2LV5NLXy98Azm7%2FySKw8LfLF5j7xdBHPPVgdH5nJ2WCCYwlRLOEcWjPLQzT1VFonIHslqddnxEEVHSFWy3U%2F0VibRcpNrBhjzyQ8Mu87ExkHMYWOjmWoHTIky8a2HIjyuQpiLdByrUCScK0If0WK0v3t5yp6h%2FJzZoQH2gwDbsyy0VsFbEPoG7h7%2BMFfdkxzdePzR7HRK9AnMJX198IGOqUBSgJO75V52mM8LDPMPV%2FFJb9sUlel%2FMBeFABHoLSRZnV44ZwKofhhxAX1nFW7HB%2FKsAke2typa%2FGuwTRPSO3QWd6BdQXEYGkN7hplP76xEVWMWZqHjCuYnPIDXyWG%2FD93Fp%2FXQ3vk37N%2BQVNYLwe%2BD1BY%2FCoJ64i3wZAt0RzGr7ORdvAHp4XdD2GmI4mOBD4yGBrnaFzm86SlI4MJ7i5S45%2B%2FF%2FcP&X-Amz-Signature=3dfec7fcdf5ec0a4da88dc4116e15d4c87c5b45d78f8561b27acb19e37046573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MAVU5SN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCT40sn%2FcbJ%2FN1Lp0Bv%2F2biQkOlUoW%2Buv2vB%2BB3n2ceegIgay79knawZqY4m08z0wTzxHS3eufkDAtjEM4q7fSZ1A0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDH3jb32jAjDWN8bnRSrcA7V5GuOBYbd0UNdgH1sjq%2B2Z7adITxdRTtD4hqOFN3mk%2B2Yqj6nOkoKezZGCziVu3tbP14uKvwt0ibwAjOgQwn7k17czhsWn64YBbUgSnYlMeFRRdCiy2YYra2JquIBOfiNC1aaV9c827LO1VnT3sZXjBw61n2%2BsK2R4QuBs5fSM6SQuV2KSngLPFHcFQgDMtEu9l485ojSnRt7%2BLg%2BsHk17INLfjAEd3eoI46Lrxd2D0ZnVamMftT5akWNCvK9nXtA%2BHYly35b6Nt6WN1tBjsQlWFBqRSQp00KgQ63nn09e0JaUGnsHEfAwzI%2B7YIzJ4hRN%2BxguqLpR5nPFFmR4I8qjM5XAw0%2BOtqFn00Eyq0mpHID2N0A7pQYiJTsFDGtHllQ7DPpISx5oBgMKOXaLK%2BTXAoH8g1SdfrMjo%2B175GtzJhqx2LV5NLXy98Azm7%2FySKw8LfLF5j7xdBHPPVgdH5nJ2WCCYwlRLOEcWjPLQzT1VFonIHslqddnxEEVHSFWy3U%2F0VibRcpNrBhjzyQ8Mu87ExkHMYWOjmWoHTIky8a2HIjyuQpiLdByrUCScK0If0WK0v3t5yp6h%2FJzZoQH2gwDbsyy0VsFbEPoG7h7%2BMFfdkxzdePzR7HRK9AnMJX198IGOqUBSgJO75V52mM8LDPMPV%2FFJb9sUlel%2FMBeFABHoLSRZnV44ZwKofhhxAX1nFW7HB%2FKsAke2typa%2FGuwTRPSO3QWd6BdQXEYGkN7hplP76xEVWMWZqHjCuYnPIDXyWG%2FD93Fp%2FXQ3vk37N%2BQVNYLwe%2BD1BY%2FCoJ64i3wZAt0RzGr7ORdvAHp4XdD2GmI4mOBD4yGBrnaFzm86SlI4MJ7i5S45%2B%2FF%2FcP&X-Amz-Signature=251f0f3e9874cef6daca3f4aca738479e36e1e5a6a7969af75b260a7181747fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
