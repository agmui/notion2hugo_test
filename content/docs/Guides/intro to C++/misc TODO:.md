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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXOGVMG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVwvr4X7c33jDSr56nsXyy0iZzzBJDr1OMYnAmwFENZAiA1aSOhQm83Rp5KDyocVB6%2FSSoAJ7pz0yu%2FDLiMf63XpiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYomjAr5HjXHK%2Bd8KtwDogR53%2BSuZwV7tOVyQS4OoWdwrP5Ebx9X%2FOUZo2TqsYhakudKBESfhNw%2FErMNp3KDKWLtHSiwPuzbIQoRNT%2BJfxnSdRZ3IBHphIjxBGbETcoF79D6%2F0eeRqVjKCfJ2v%2BUlsvJcZuMhgrWC71jM6b7UMer4gkL%2Bf%2FaWmYcONKEA1ykiRmOeOSOYaKTk4Bj%2FGpU8JQoCcoSDIp3hEM14ZPtw8yKfpg1qX8wDZdG96Xg4P5MXVcwWMhM2oTLIEOYH%2BaQPFwSgUvYb7uW2NalNOFjPJ%2F4QbsYC62MyNk4gByETKWMrqM8n9YIJrdZjPxgflkXG955REx1h%2B2pHuf3ztMSzZkXKKAYLRu2O3bSSiZpR6%2BhXXwkuRL5fZdm%2BEzgCfcfxBW%2BLsZMlf2OxbYQPtcxmjBUsLJxlqQOBg%2FUFeO0Aa%2BqGukAaC6%2FpXtbXvp1TkH3Duw%2B8B7GXYbRpQifwHQ4cFWgVm%2B%2BQBXhNsRx0d8RyjXuJ4DHn1kSU2XIgdC7fP%2F1PmP0rkhrDLytDF2%2FHbqLpMLraeyCMyA2OoOtA7uQR69TdrDSWEJXC5ZGxUGs9RrOKoMuRsApLQ037%2BQMjk5h%2FEgAqHVCh%2BG4ElzbpyepF8LDazXopPSTxpxvRy8wweCkvQY6pgGj3moPgJRxwrUO8XMkmih%2Fk0%2FVjxu7Ooh1%2B1%2BbMolheu7JFzdJntLI77McAdUJKO8M1wBH102lev4RHFOyNiUJleIV3KTjgyOTqS4fBMOMvszWrY0jKI0hp0J%2FqGc%2FobZtMzcieWk5bWtCACYS0sVvUnPTD2Zob3BbDWbvyAcF85JVk2QFXHkGUt7RBj5Dh828qg5Hg%2F2VXEd3vm9lWOLCxYM%2BGlEB&X-Amz-Signature=c98fdc153a5a5b82719aebf226aa650904e09a0da6eb03f25c63d78460a6f00f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXOGVMG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVwvr4X7c33jDSr56nsXyy0iZzzBJDr1OMYnAmwFENZAiA1aSOhQm83Rp5KDyocVB6%2FSSoAJ7pz0yu%2FDLiMf63XpiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYomjAr5HjXHK%2Bd8KtwDogR53%2BSuZwV7tOVyQS4OoWdwrP5Ebx9X%2FOUZo2TqsYhakudKBESfhNw%2FErMNp3KDKWLtHSiwPuzbIQoRNT%2BJfxnSdRZ3IBHphIjxBGbETcoF79D6%2F0eeRqVjKCfJ2v%2BUlsvJcZuMhgrWC71jM6b7UMer4gkL%2Bf%2FaWmYcONKEA1ykiRmOeOSOYaKTk4Bj%2FGpU8JQoCcoSDIp3hEM14ZPtw8yKfpg1qX8wDZdG96Xg4P5MXVcwWMhM2oTLIEOYH%2BaQPFwSgUvYb7uW2NalNOFjPJ%2F4QbsYC62MyNk4gByETKWMrqM8n9YIJrdZjPxgflkXG955REx1h%2B2pHuf3ztMSzZkXKKAYLRu2O3bSSiZpR6%2BhXXwkuRL5fZdm%2BEzgCfcfxBW%2BLsZMlf2OxbYQPtcxmjBUsLJxlqQOBg%2FUFeO0Aa%2BqGukAaC6%2FpXtbXvp1TkH3Duw%2B8B7GXYbRpQifwHQ4cFWgVm%2B%2BQBXhNsRx0d8RyjXuJ4DHn1kSU2XIgdC7fP%2F1PmP0rkhrDLytDF2%2FHbqLpMLraeyCMyA2OoOtA7uQR69TdrDSWEJXC5ZGxUGs9RrOKoMuRsApLQ037%2BQMjk5h%2FEgAqHVCh%2BG4ElzbpyepF8LDazXopPSTxpxvRy8wweCkvQY6pgGj3moPgJRxwrUO8XMkmih%2Fk0%2FVjxu7Ooh1%2B1%2BbMolheu7JFzdJntLI77McAdUJKO8M1wBH102lev4RHFOyNiUJleIV3KTjgyOTqS4fBMOMvszWrY0jKI0hp0J%2FqGc%2FobZtMzcieWk5bWtCACYS0sVvUnPTD2Zob3BbDWbvyAcF85JVk2QFXHkGUt7RBj5Dh828qg5Hg%2F2VXEd3vm9lWOLCxYM%2BGlEB&X-Amz-Signature=c492fe4ce3fe6f78f84ccab50a9ca7d54ff0e3cdbf93f4a0e47b6a91a85e3345&X-Amz-SignedHeaders=host&x-id=GetObject)

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
