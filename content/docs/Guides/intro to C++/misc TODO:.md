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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDVP566%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0RPpmLP3Jrp1U1s0BqkcrhOqe0U2wE57bpn0yW%2FACgIhAMpSMinfaaxboqRho%2FBluM%2FH5cErsi%2FozhcGqEY2qFbIKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5VP9%2BwJqn6PQ42cIq3AOCcgr6avcO95cnwzn7FPP5mN1G8mucd2KnrxauywqbcWoX270f5BAgqCTfiBftvbVivCttqd25Y9gYmp4hi8uaZxZJXe5HTWhF8Ck1JPe2RtcuWUx9zgW8Xst9Awia1vLWdNNOxer7Vx5OXuUfwONpfs3h%2Fvnpv7F0oP%2FlfFw8HhwNG%2Fr0OznSz%2FrSFnVgovKfp49%2BOQnCVSNw1haGktqWne3%2Bg61qggv%2B6DEM2x%2FGebZ0mqdREUi27h%2Fo2rcY7ThvDv2NLGp%2F2ynRk95E%2BW3mfy1ieXq1gDynV9fe%2BXhabOjZ4vqZ7m9WyzXq%2BOpLB2RSTNAe%2FJ%2By2eF86TyyNYcT5LjOydxmuawVDqb%2FKf7Ybid9FwYZb%2FBnd%2FFZ2EaeVL6DDG79dPeaIUvg3I44YfZTY6Q7UvnEhWfZaDJHqginM6%2FCgxq9GjzDa54me8QPy7tBxIhFTwTwf%2FTfMb2VoQUPjUtsOgQzz0NkRK9QUvBIGw6LuofYLbmBfX%2BGH1a5JAG%2BLsVekR6lyB%2BQhoi4zgXRD96rEIMxboxyqmi3vdkQXM7QDVGw2AZ0o9k0N61q1N4t3ruI%2FR9JBwMQbcOTmNcYXQJzmMYatVvMPC9JA8f8Iov1KhjbG%2BWm%2FY%2FKeTD%2FoezBBjqkAaEQUPJESfViSclVCc9Kar6zG0rWBsWuqA5XRonouhTBShLFUBUJL6WY1o9HOhgCUw9CYU0R0Aan%2BaGWb5j2rVNNVLVgMxEtMI%2BIb24eFAZ%2Fy5i%2BCurvvUuLBGRq7ahc0nI1FHAjzRNlFxJ5z7eEeDEsJXSiWJkFfQ74%2FSp%2BJQeOTvMGLb8KI72Xh%2BbPthz3WYKq5NlILbeN6UVzMLX%2FXYgt1SPY&X-Amz-Signature=9eadb0fed156d73b552e6d930350abca5f68c253bd3cbb88afdd09d4b72475bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDVP566%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0RPpmLP3Jrp1U1s0BqkcrhOqe0U2wE57bpn0yW%2FACgIhAMpSMinfaaxboqRho%2FBluM%2FH5cErsi%2FozhcGqEY2qFbIKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5VP9%2BwJqn6PQ42cIq3AOCcgr6avcO95cnwzn7FPP5mN1G8mucd2KnrxauywqbcWoX270f5BAgqCTfiBftvbVivCttqd25Y9gYmp4hi8uaZxZJXe5HTWhF8Ck1JPe2RtcuWUx9zgW8Xst9Awia1vLWdNNOxer7Vx5OXuUfwONpfs3h%2Fvnpv7F0oP%2FlfFw8HhwNG%2Fr0OznSz%2FrSFnVgovKfp49%2BOQnCVSNw1haGktqWne3%2Bg61qggv%2B6DEM2x%2FGebZ0mqdREUi27h%2Fo2rcY7ThvDv2NLGp%2F2ynRk95E%2BW3mfy1ieXq1gDynV9fe%2BXhabOjZ4vqZ7m9WyzXq%2BOpLB2RSTNAe%2FJ%2By2eF86TyyNYcT5LjOydxmuawVDqb%2FKf7Ybid9FwYZb%2FBnd%2FFZ2EaeVL6DDG79dPeaIUvg3I44YfZTY6Q7UvnEhWfZaDJHqginM6%2FCgxq9GjzDa54me8QPy7tBxIhFTwTwf%2FTfMb2VoQUPjUtsOgQzz0NkRK9QUvBIGw6LuofYLbmBfX%2BGH1a5JAG%2BLsVekR6lyB%2BQhoi4zgXRD96rEIMxboxyqmi3vdkQXM7QDVGw2AZ0o9k0N61q1N4t3ruI%2FR9JBwMQbcOTmNcYXQJzmMYatVvMPC9JA8f8Iov1KhjbG%2BWm%2FY%2FKeTD%2FoezBBjqkAaEQUPJESfViSclVCc9Kar6zG0rWBsWuqA5XRonouhTBShLFUBUJL6WY1o9HOhgCUw9CYU0R0Aan%2BaGWb5j2rVNNVLVgMxEtMI%2BIb24eFAZ%2Fy5i%2BCurvvUuLBGRq7ahc0nI1FHAjzRNlFxJ5z7eEeDEsJXSiWJkFfQ74%2FSp%2BJQeOTvMGLb8KI72Xh%2BbPthz3WYKq5NlILbeN6UVzMLX%2FXYgt1SPY&X-Amz-Signature=e99a50dc9dadc3e44dc91a058bd8b21d1279c7ad8447ccfef3fb0d5c8a500b45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
