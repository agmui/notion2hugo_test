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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTDMTFI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCeVAa1EdyfxTv7MhAFX3G%2BxOQyvqiND9l6h06x3IAmAiEAh9iLRnK%2B%2FzddNXQa7G9Cy0SScBU4J2MihZkkHK%2Bkwioq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBNkckBRrsoxhScSJircA%2FjdeAayO8861HmSIgJGyqWHfcs8csA8bbcqiysYoMHSXXL0YNB2Do2IZkxXOysCohAObtwqDwy1SuB7hNwr2Ac3FTz%2FiBZKOo9xg6kByF42ZLJDNGeJEWfHdLuj80aLd8aB0zUyLRZyHoedmlZWKUVWDQvrZwOZs%2FzUp4e1cPSLUwus76z7XjxxCpSblIGkgy6LO2Qit0odunVMNnvVZZYgpd8nYcsiXHPYJuykLSqMZ2RBgHRXVz8%2F%2FUeQostjPv9nY7rdOeEDnQwrJ3MxBOEur%2BmojLEu%2BC6Uh5BEfSnygXQKaGJHIratV4c%2FYAZ02p0BgjIUmxJk61oxhIoFbGNLbFv65wLcByn9f7PwQTqO6eUY9YlTBb1tP3Px%2BM%2BFoagjXkwtQo6kcCWuor4dbZQHLDeCwwVInR5HAgsr%2FHgD22wnL7UKIAr7U1DnlqhVt8FnP3Kx0tQkYJ4n8pMUq5hn7XTuuRko1N8gdpKIau6hkSxLBn%2BdJk4t6FItJM7Vf0HdbZKLLgHvm%2FPbYHdI3%2Fa7YJeIDMnwx5tHY7ot2bAOtYs8%2BZhVProjaHWVurewu9JSAkTv%2B5bpkWyW4Rw8gY9XrxRlfuk0%2B8XDn0w4kezZfYOLWnOGkDfgN7RzML%2BV9b8GOqUBvB6Ge%2Bt9jwfa%2BubAvS9auBHzikV%2FQoe7WMu5uc4avZfX%2FddHP1PSIu8U4Tpua5QyYrRkgB6REvI8gwvczEFLavYC5cUA00msyKNnroP%2FS3Gz3fLyeDLJ1vCOG%2Bal0gcq3TCZX6fWrXDrNIlurPP1PuvkSVkBF7xKR9RxsmKl6G0hZzJCrqvdvaVzKuwoByDlqVNWhGseE6aazzqqtcz3n8541o1E&X-Amz-Signature=ccdfa3d428465d230f4ad409c29bb13e6b1eb9b8686092ee7bb16665da13e9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTDMTFI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCeVAa1EdyfxTv7MhAFX3G%2BxOQyvqiND9l6h06x3IAmAiEAh9iLRnK%2B%2FzddNXQa7G9Cy0SScBU4J2MihZkkHK%2Bkwioq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBNkckBRrsoxhScSJircA%2FjdeAayO8861HmSIgJGyqWHfcs8csA8bbcqiysYoMHSXXL0YNB2Do2IZkxXOysCohAObtwqDwy1SuB7hNwr2Ac3FTz%2FiBZKOo9xg6kByF42ZLJDNGeJEWfHdLuj80aLd8aB0zUyLRZyHoedmlZWKUVWDQvrZwOZs%2FzUp4e1cPSLUwus76z7XjxxCpSblIGkgy6LO2Qit0odunVMNnvVZZYgpd8nYcsiXHPYJuykLSqMZ2RBgHRXVz8%2F%2FUeQostjPv9nY7rdOeEDnQwrJ3MxBOEur%2BmojLEu%2BC6Uh5BEfSnygXQKaGJHIratV4c%2FYAZ02p0BgjIUmxJk61oxhIoFbGNLbFv65wLcByn9f7PwQTqO6eUY9YlTBb1tP3Px%2BM%2BFoagjXkwtQo6kcCWuor4dbZQHLDeCwwVInR5HAgsr%2FHgD22wnL7UKIAr7U1DnlqhVt8FnP3Kx0tQkYJ4n8pMUq5hn7XTuuRko1N8gdpKIau6hkSxLBn%2BdJk4t6FItJM7Vf0HdbZKLLgHvm%2FPbYHdI3%2Fa7YJeIDMnwx5tHY7ot2bAOtYs8%2BZhVProjaHWVurewu9JSAkTv%2B5bpkWyW4Rw8gY9XrxRlfuk0%2B8XDn0w4kezZfYOLWnOGkDfgN7RzML%2BV9b8GOqUBvB6Ge%2Bt9jwfa%2BubAvS9auBHzikV%2FQoe7WMu5uc4avZfX%2FddHP1PSIu8U4Tpua5QyYrRkgB6REvI8gwvczEFLavYC5cUA00msyKNnroP%2FS3Gz3fLyeDLJ1vCOG%2Bal0gcq3TCZX6fWrXDrNIlurPP1PuvkSVkBF7xKR9RxsmKl6G0hZzJCrqvdvaVzKuwoByDlqVNWhGseE6aazzqqtcz3n8541o1E&X-Amz-Signature=305880e508e796895b1f0236c15caa203db228e16e55d116622a29f3dbe83a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
