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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDRXJQF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcioSaKTiMLouXmslHXT5qGtJTA8IK0fRJQ26w6db0GQIgFofYmwy7uVOuayMBy3BO5yyO6bKwU0nJJTX5TB8wcPEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMbOmcl1XKXvo4TP%2FircA8UYTmxgDM9ZTlUXc59tBcyR6HxPSl5CDKcr99GzVM0AHLS1Am9Ummg6ryaKfy%2Bvc%2BhZpSVWA3cj5%2BCzC662ZaGh0bTZuS7YF1SOIaqAp%2BXoDctMdZXtKbNMd1xcHFK990iJYjW24RY8sY7J51bPACTWQfFZEZ1xzYvDtu39j6KCIKHRdbULHmluQT8pFzPqnDQ7hn%2BhD4KD9tQIE2n1T6SBf5IX6A%2FKIuKms3CrlXv1VYjzkULR5GFNWf%2FLverYFxQ1sQkJkRS7noORKstlT0V3C73Ig0WuYbt0ifclQvlSunQ872b%2Fz1DktyP3Bt7syoKAwdRY1TAhDrDLAJQMd280HHLIu000GQaOrQB9BVUl%2BDfgoHVVnJ7kP%2BiiI%2FLan3t2D9fUQ6RHtFmbpj20xGY9Adgo%2BzGWOIgXOLup5MNXXiDfBuyJpRLO4hATu8kEtdrCVP8dcoq%2Bb9PaYhh94hbOU92Dqli%2BM8JGJqy1A4fEANLvFU5PN2VBs8GWj%2FuILBKtdvxrEatTnA5aFQHFBN0vkT0eb0runbeD%2B1wgy6v27igRm19wMoKl9YKpR6cjKJG59vY1fCMj4iJeZIRRYiKHwG%2FIPaSV6TO9Xv3oUJ5Z5Hd3rBrkYCrXgOXTML6V9b8GOqUB5pZDnvXiWgHb%2FwIqEN6Na6lFR3CfU4hhbSmmPIfLyV%2BgBoXQVys4d2ymG1nyrb%2B4NBX3ez%2BMBio%2BaT9clpd4e%2FzSvxwmXW79nDTmkwHAOZt%2FHl7eC5CIsXDB5BfW5nu4bRFWbUNZp1LijqkTocMeqw%2FFX1FHSsCcYonRdI8UDlyp19QfYczay4obb24f%2F8OM33Ma8ExA61k909pQTT9X1RwfaMoa&X-Amz-Signature=967d3489acd232ce47ea103533ed1ebef24a433be8812b89e361a1bd24e0cf54&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDRXJQF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcioSaKTiMLouXmslHXT5qGtJTA8IK0fRJQ26w6db0GQIgFofYmwy7uVOuayMBy3BO5yyO6bKwU0nJJTX5TB8wcPEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMbOmcl1XKXvo4TP%2FircA8UYTmxgDM9ZTlUXc59tBcyR6HxPSl5CDKcr99GzVM0AHLS1Am9Ummg6ryaKfy%2Bvc%2BhZpSVWA3cj5%2BCzC662ZaGh0bTZuS7YF1SOIaqAp%2BXoDctMdZXtKbNMd1xcHFK990iJYjW24RY8sY7J51bPACTWQfFZEZ1xzYvDtu39j6KCIKHRdbULHmluQT8pFzPqnDQ7hn%2BhD4KD9tQIE2n1T6SBf5IX6A%2FKIuKms3CrlXv1VYjzkULR5GFNWf%2FLverYFxQ1sQkJkRS7noORKstlT0V3C73Ig0WuYbt0ifclQvlSunQ872b%2Fz1DktyP3Bt7syoKAwdRY1TAhDrDLAJQMd280HHLIu000GQaOrQB9BVUl%2BDfgoHVVnJ7kP%2BiiI%2FLan3t2D9fUQ6RHtFmbpj20xGY9Adgo%2BzGWOIgXOLup5MNXXiDfBuyJpRLO4hATu8kEtdrCVP8dcoq%2Bb9PaYhh94hbOU92Dqli%2BM8JGJqy1A4fEANLvFU5PN2VBs8GWj%2FuILBKtdvxrEatTnA5aFQHFBN0vkT0eb0runbeD%2B1wgy6v27igRm19wMoKl9YKpR6cjKJG59vY1fCMj4iJeZIRRYiKHwG%2FIPaSV6TO9Xv3oUJ5Z5Hd3rBrkYCrXgOXTML6V9b8GOqUB5pZDnvXiWgHb%2FwIqEN6Na6lFR3CfU4hhbSmmPIfLyV%2BgBoXQVys4d2ymG1nyrb%2B4NBX3ez%2BMBio%2BaT9clpd4e%2FzSvxwmXW79nDTmkwHAOZt%2FHl7eC5CIsXDB5BfW5nu4bRFWbUNZp1LijqkTocMeqw%2FFX1FHSsCcYonRdI8UDlyp19QfYczay4obb24f%2F8OM33Ma8ExA61k909pQTT9X1RwfaMoa&X-Amz-Signature=07b0184a2d96fb65b7992f37c288ef52979b6776d5fa1b776fb10129f06d6fce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
