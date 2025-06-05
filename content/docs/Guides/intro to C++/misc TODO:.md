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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW62TJK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBOCU6o%2BouRGZo4CaBJ14Vl0i%2Fmjv%2F8Wy4rC9lndpti0AiEA57n%2Fp8AHDL3fqar0D2YKYiWCX9%2FlqgQtYC2Fh1FSZiwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHXlCFDKOsivYKImjCrcA5E2QZ1B8VHl0JSjfu53YcmPAs3MPet%2FsPxkg31BI%2FrtKWW1jtjfKRcxJZnQRNOlBWeYf5ZlZsDr4wlBjs6sC6BioLn7EUjfDOwnVdSNucvsSmo8AoPMJ4%2BemaAFqABj4o%2BytCGCcYSwGo%2Fes4nj1qaqPFdGzgg2TkrFoAFj7ooQsDHGyOiUHe5gh3Ht6Vw%2BqqH0MOz%2BVN28e9lNqAz1t2992K3AaqxpUtxCcFGj%2FyAkszLdt0NP1mL8KA9wh%2FoHQAtkxRvJwQ613wX9j3qhBlG7pLkB4tWTIdjE83u0bEdhpsE3AE8eF%2Fr4Q1PlgAixWankwzGuqWn0fnDU3OvjaGbaSj8UY1efql711MedkNabxkhOhGqgX9F48Fz8AMrG0YkApd3mXCuP4stlOIyJkMKBkX9lvu1O7P%2BqNyAoQPbSV1pz2vLQoxxfrAgVFS%2F6CYV0RiNCEeW7t%2F6BWqbdzrvQejJZa7Wl5h6RQO4GKPChgUpXRnXbGWFYHPt4gwt2s%2F5EEEPZqrpzQsM%2F5G%2B4nbeZgAyaJroeZSMvAa1sFGhREHgW0dgQSbfXsVYaDcYIYke%2BeiL5r8KnhN72ZXXJgPNJYosDd5RZ9T4z%2FAGmBCeCvBL3W7fEG8xy6k4hMNTKg8IGOqUBWepQ%2FzaSA0rIHhhytwgL5i%2FM4gpYPx0pTOI58gSawlnCDeOGXu0%2BUQusK1SmVA7bXIBsuA9FvYjX9mzZzw%2FsqntPO8cTXrrIXVXrvSU3cp2SKwsMISG%2BoiShJ%2Fe88rM7KwA6mUoe%2BHo45mvgidnohGiB0p8j0wjq%2BWnC2enc89fn43ZyeMKTxN2FYoKZ%2FASIX63RQTBMFRuoHMXOCSG6l86OlTqd&X-Amz-Signature=5e2a4aef0090209add818449dd9009786ddaf07a0a818f09d302e4a03ab24b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW62TJK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBOCU6o%2BouRGZo4CaBJ14Vl0i%2Fmjv%2F8Wy4rC9lndpti0AiEA57n%2Fp8AHDL3fqar0D2YKYiWCX9%2FlqgQtYC2Fh1FSZiwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHXlCFDKOsivYKImjCrcA5E2QZ1B8VHl0JSjfu53YcmPAs3MPet%2FsPxkg31BI%2FrtKWW1jtjfKRcxJZnQRNOlBWeYf5ZlZsDr4wlBjs6sC6BioLn7EUjfDOwnVdSNucvsSmo8AoPMJ4%2BemaAFqABj4o%2BytCGCcYSwGo%2Fes4nj1qaqPFdGzgg2TkrFoAFj7ooQsDHGyOiUHe5gh3Ht6Vw%2BqqH0MOz%2BVN28e9lNqAz1t2992K3AaqxpUtxCcFGj%2FyAkszLdt0NP1mL8KA9wh%2FoHQAtkxRvJwQ613wX9j3qhBlG7pLkB4tWTIdjE83u0bEdhpsE3AE8eF%2Fr4Q1PlgAixWankwzGuqWn0fnDU3OvjaGbaSj8UY1efql711MedkNabxkhOhGqgX9F48Fz8AMrG0YkApd3mXCuP4stlOIyJkMKBkX9lvu1O7P%2BqNyAoQPbSV1pz2vLQoxxfrAgVFS%2F6CYV0RiNCEeW7t%2F6BWqbdzrvQejJZa7Wl5h6RQO4GKPChgUpXRnXbGWFYHPt4gwt2s%2F5EEEPZqrpzQsM%2F5G%2B4nbeZgAyaJroeZSMvAa1sFGhREHgW0dgQSbfXsVYaDcYIYke%2BeiL5r8KnhN72ZXXJgPNJYosDd5RZ9T4z%2FAGmBCeCvBL3W7fEG8xy6k4hMNTKg8IGOqUBWepQ%2FzaSA0rIHhhytwgL5i%2FM4gpYPx0pTOI58gSawlnCDeOGXu0%2BUQusK1SmVA7bXIBsuA9FvYjX9mzZzw%2FsqntPO8cTXrrIXVXrvSU3cp2SKwsMISG%2BoiShJ%2Fe88rM7KwA6mUoe%2BHo45mvgidnohGiB0p8j0wjq%2BWnC2enc89fn43ZyeMKTxN2FYoKZ%2FASIX63RQTBMFRuoHMXOCSG6l86OlTqd&X-Amz-Signature=494a574fb74301a1c8351e653d8b0a986c7faa451a3e67d1261e9a3111e94b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
