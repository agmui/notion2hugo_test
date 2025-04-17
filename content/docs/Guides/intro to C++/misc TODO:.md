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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KH4VU6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOmES1WnUpBvmgiZMgh5Omr7TTJLcpA0FW4YEGWUpo8AiEA5VIC8SFzdjfKswYRB6Oq4HpE1X7tKOLMRkmpjAS6gBIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkLjZO7sy5UByu2TSrcA0QlLi%2B6U4AXMJj5qlJ02UqCR9Zu5VTHcxEeEn2NyXv1rMRDfabK6dmdm6ypvFTTmcAS6ZNA1FXNpWiolcC8dtvyJqk5r8DhQuSWe%2FpyLFoXYo6x%2FWd7Cb%2BQkysdJipFMgY1QS22N%2BNDNalOmD2cJ2uLbE8y2HajJZdSyCyGP6buhIwvlSXp7SpTR0A5thN%2B1p68DCUxPxZtgprOg%2FotvSmQnoS%2FKchNLq1xE3TBf5PRA8ZjBq7BAxZ1SRmGmOTc5Fctzr02pqt1PBMCRpPS3shLgdN3%2FwVTdh4BSBoKyUo72Me%2BNq%2BoQqn9Vwvlmrkx9sZvZP%2FS%2BxQNyS13GTyOKkVbEmL6sYcMY4KNCYz8NOQUTwp8CglCFzKgRpd6LtXzSlr6RE%2Fl0TbG1%2FmKX7isWHD2Oh%2FRpVpmIXelZ5PRO%2B7hkdmMV5QIzOpAkqUXkSOhECVVeAGbsrf8P78tLruqUtYhGCgHvKYyguB%2B13KUV2xtDEd264daQtxMYXC1v4PZAWUTSCOzSt0ESJnZmFLU3pQ7Nsw8k%2Ba8hZC0JO4I5TzbH%2Bz4HZ6ZZA4MWn4sQkRQBayz9Bd34xtpa3QDvnTJbcVP2Twb%2BxmrD2D9iANKrFJ%2BHIoDrMXSsiCam0gRMJ36gsAGOqUBA9zR0nF9cfmk3JcMO4%2BZiAOK2xhjtSS2x7%2Fkb6EIjwhMkhNb3Kzl02WtxJzv4Ti%2B22iRIaQ6qe248Y2CAKlKAmMEn45xQqTR1fgInLJ2fGyZLwVUbg7y2e7dpO4JM5U%2F%2FhlOK6f1q5pVeVDwBs5CNQIS8wdb9Rp9oSzLPt6X7OXnlhYAyVGSB%2FdCvHAUj4v%2BeG2wGZ5i0zG916lz%2B2Ghpd6Ent4u&X-Amz-Signature=c1802f982b3a40c188f9741f6f85ad575c6dafd2b5ed793d366d4ad32953593c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KH4VU6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOmES1WnUpBvmgiZMgh5Omr7TTJLcpA0FW4YEGWUpo8AiEA5VIC8SFzdjfKswYRB6Oq4HpE1X7tKOLMRkmpjAS6gBIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkLjZO7sy5UByu2TSrcA0QlLi%2B6U4AXMJj5qlJ02UqCR9Zu5VTHcxEeEn2NyXv1rMRDfabK6dmdm6ypvFTTmcAS6ZNA1FXNpWiolcC8dtvyJqk5r8DhQuSWe%2FpyLFoXYo6x%2FWd7Cb%2BQkysdJipFMgY1QS22N%2BNDNalOmD2cJ2uLbE8y2HajJZdSyCyGP6buhIwvlSXp7SpTR0A5thN%2B1p68DCUxPxZtgprOg%2FotvSmQnoS%2FKchNLq1xE3TBf5PRA8ZjBq7BAxZ1SRmGmOTc5Fctzr02pqt1PBMCRpPS3shLgdN3%2FwVTdh4BSBoKyUo72Me%2BNq%2BoQqn9Vwvlmrkx9sZvZP%2FS%2BxQNyS13GTyOKkVbEmL6sYcMY4KNCYz8NOQUTwp8CglCFzKgRpd6LtXzSlr6RE%2Fl0TbG1%2FmKX7isWHD2Oh%2FRpVpmIXelZ5PRO%2B7hkdmMV5QIzOpAkqUXkSOhECVVeAGbsrf8P78tLruqUtYhGCgHvKYyguB%2B13KUV2xtDEd264daQtxMYXC1v4PZAWUTSCOzSt0ESJnZmFLU3pQ7Nsw8k%2Ba8hZC0JO4I5TzbH%2Bz4HZ6ZZA4MWn4sQkRQBayz9Bd34xtpa3QDvnTJbcVP2Twb%2BxmrD2D9iANKrFJ%2BHIoDrMXSsiCam0gRMJ36gsAGOqUBA9zR0nF9cfmk3JcMO4%2BZiAOK2xhjtSS2x7%2Fkb6EIjwhMkhNb3Kzl02WtxJzv4Ti%2B22iRIaQ6qe248Y2CAKlKAmMEn45xQqTR1fgInLJ2fGyZLwVUbg7y2e7dpO4JM5U%2F%2FhlOK6f1q5pVeVDwBs5CNQIS8wdb9Rp9oSzLPt6X7OXnlhYAyVGSB%2FdCvHAUj4v%2BeG2wGZ5i0zG916lz%2B2Ghpd6Ent4u&X-Amz-Signature=202cbfc0cb054e38c70387438c80875d198dfb74942b79088d2354241d6fb056&X-Amz-SignedHeaders=host&x-id=GetObject)

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
