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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPZK4XI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCozbqm1iD0OKMVMusfkZ2VXmBRBJwz65oloagOxSb3oQIgO3dIr6wyDQul2Jca%2B%2F9ILjXUPpo1P0E2AP9u3Sz5QBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeawpllLt8hcEQ3VSrcA6FgzQJFh380T5zRZmE3BCWdmJJV8VpX%2FU955rYaqbx9vUl5VPpQpos%2FMG2FXRkj160o7Tltcb%2FXjxeRniwEuioCHeYxdlWHX6ujMGstk48rdf4799k1wuvOd1ddiq4iSBwKOjXxDOQ2WcVYa42XqFbEthUxgDT2RvcQl3GUeChQ%2F%2Fsqwg4zq1OONQnFyT89BAxcJZjaDLKxaJ1sJ2eo31z0xW66SUWzLI3bhbJ%2F6xRRRtEoiQ3Di%2FCJgoOD%2FJyQJvculz7WW5tdHDZHsmJU1HHiVOxR7iHr%2Bwipe%2F2HvnS6ZI65lEsR%2FzSh3YFCEf17viUnyZ9ah3AF4U1m%2FcFkJgjaWci2lCshZ9zWv9PZ6j0rLXlOcMBv0y6TjYFbHJ%2F%2BPeAbaVlgMgNUR%2BqypAdJV%2BY7OD2P4B%2B5hw0igcvt8ALbY4Ie6ihIycRYqIjnekq8kAtyArcYjJa%2BlNhkMgcFujhWDJV2T1Pz1MGvDGNHu8oTc52jGnfh3xh4w6M%2BCMXlGm5nByWa54MWeFmpYQ0AzbHy0xmPzIRWOxeF%2Fpyz4NTA2vmfhdZjwy0f9WlIUMyIlDql8V2DmAO3PRtJNrB4HfC9eWfOQwUvbOgStXJ9eMSwxNJbe3oP8NgT1gltMOXP6MMGOqUB7v%2BSDkUsWi05ETBnSklSVAAHn5onSB1jCuysoA1C9JuMrcZbXGDzqBbpcuf2dI7MAkMtRRtdCN%2BRULO1X23YVzFqBpebQZEBxB%2BfkmJWymHBGhIvF%2BzpA4%2F%2BxdTPOXBfnlZCTKV2eh0e5LWQPig6FGdiNkPBwIzNI0BGy1G96Dyl8%2Ffq4obAfGKjGxxHZxxKI6CY%2B5Ismz3TVOnCXN9hl3GPT3Nj&X-Amz-Signature=288bf759f91aa12ae578f38014ad747ac9979e9164914d6a13852454d5d8a9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPZK4XI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCozbqm1iD0OKMVMusfkZ2VXmBRBJwz65oloagOxSb3oQIgO3dIr6wyDQul2Jca%2B%2F9ILjXUPpo1P0E2AP9u3Sz5QBIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeawpllLt8hcEQ3VSrcA6FgzQJFh380T5zRZmE3BCWdmJJV8VpX%2FU955rYaqbx9vUl5VPpQpos%2FMG2FXRkj160o7Tltcb%2FXjxeRniwEuioCHeYxdlWHX6ujMGstk48rdf4799k1wuvOd1ddiq4iSBwKOjXxDOQ2WcVYa42XqFbEthUxgDT2RvcQl3GUeChQ%2F%2Fsqwg4zq1OONQnFyT89BAxcJZjaDLKxaJ1sJ2eo31z0xW66SUWzLI3bhbJ%2F6xRRRtEoiQ3Di%2FCJgoOD%2FJyQJvculz7WW5tdHDZHsmJU1HHiVOxR7iHr%2Bwipe%2F2HvnS6ZI65lEsR%2FzSh3YFCEf17viUnyZ9ah3AF4U1m%2FcFkJgjaWci2lCshZ9zWv9PZ6j0rLXlOcMBv0y6TjYFbHJ%2F%2BPeAbaVlgMgNUR%2BqypAdJV%2BY7OD2P4B%2B5hw0igcvt8ALbY4Ie6ihIycRYqIjnekq8kAtyArcYjJa%2BlNhkMgcFujhWDJV2T1Pz1MGvDGNHu8oTc52jGnfh3xh4w6M%2BCMXlGm5nByWa54MWeFmpYQ0AzbHy0xmPzIRWOxeF%2Fpyz4NTA2vmfhdZjwy0f9WlIUMyIlDql8V2DmAO3PRtJNrB4HfC9eWfOQwUvbOgStXJ9eMSwxNJbe3oP8NgT1gltMOXP6MMGOqUB7v%2BSDkUsWi05ETBnSklSVAAHn5onSB1jCuysoA1C9JuMrcZbXGDzqBbpcuf2dI7MAkMtRRtdCN%2BRULO1X23YVzFqBpebQZEBxB%2BfkmJWymHBGhIvF%2BzpA4%2F%2BxdTPOXBfnlZCTKV2eh0e5LWQPig6FGdiNkPBwIzNI0BGy1G96Dyl8%2Ffq4obAfGKjGxxHZxxKI6CY%2B5Ismz3TVOnCXN9hl3GPT3Nj&X-Amz-Signature=de4f1145e745bd535a3422f86a3d942580b279281872134798aa571f9e444505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
