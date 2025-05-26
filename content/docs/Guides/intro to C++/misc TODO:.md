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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4FQ6GG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6uDHXRyHRFWjxQstTL357x%2Fq2SDGt2E2YgpwRVWBiwQIgd9U1sUWWUvGzCkViAXYcVmDqmPAF%2F8DFWHqi89g6tSEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPLGC22rwueVCij7uyrcAxyJ5meN9q%2FcoF3aJhy7URys0x0ymQVSnE01UQYxI9cs6nkaPargQ6hkK%2Fz85uRlzNFPhoaq1o%2FaEltBnnMqT4zRgBYNrEW6dPvC%2BNY1We6YeJc4f3PKYFYNybkGjZQaLrMR0Qh9nhwIi96bv2CjmdVUBrNpa6FsdXwZbU6I3rS7XrBIOuw7%2BQFlimF1b%2FttgeOFDuCZ0IwcYQ1DuKaHYBwITQGrKImuC1Cx9DNuBReyu3uaJ7R8MCPCOAB%2Br1AM6rIncEHn8dGkZ%2BNZGWviCjIop2MafJAraEFuMAY0PQFTpDNhe3GCmsDPe94BdIweCt0TH%2BuwR%2BrJ4fEslsOuiUyX4EOU3xcQ7DTYRtXSt3EFrClD197t9%2FQ%2B40%2Fq8b1fRGQU119srD76x9K5VQkj66Ct5pTYaP00LFPc2oMrBKSC1dlVhU4B3iuLpLt7g4LegyJhW4eLZPf04NFtDKilCpPkx1WCRobUDVuzxj5qeMyUD2q0ePKkSfndVrY0jVUjmNCdVDYoVfxsXdPs54T8syymk70844XFxj9ePVqc4TSG3BDSsBYJRNdDDASNipbCsf%2BmsuzQBGp8RCnDejuzZFqf1hpKarpovXQ1k%2Bbm%2FqLDFHfoumdDxRv9xTDoMOPP0sEGOqUBehlMaCWn2BneTsonKn5KjawHAyt%2FpMaHTP1Ywb5uPPZRhQeKeeuRIJ%2FGXkyYJLie3K720UHak5A%2BTTVjkMn43yUP5DZiigqr%2BthgY43bJ6ePW7Bt9F%2BJYFJz6QhKEQ6DjrMMHJsnMiszwaSDKsSHeiMVP9K31YBylp0G4LUge5lsdcXkPC1egriGeUI14%2FWMAez2tSziZLXpE6B3lN6OT0xLyuNf&X-Amz-Signature=6ec7c9d5b991c91f0994effca2d3c856bce0fb439250502270a78e070a7c2710&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4FQ6GG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6uDHXRyHRFWjxQstTL357x%2Fq2SDGt2E2YgpwRVWBiwQIgd9U1sUWWUvGzCkViAXYcVmDqmPAF%2F8DFWHqi89g6tSEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPLGC22rwueVCij7uyrcAxyJ5meN9q%2FcoF3aJhy7URys0x0ymQVSnE01UQYxI9cs6nkaPargQ6hkK%2Fz85uRlzNFPhoaq1o%2FaEltBnnMqT4zRgBYNrEW6dPvC%2BNY1We6YeJc4f3PKYFYNybkGjZQaLrMR0Qh9nhwIi96bv2CjmdVUBrNpa6FsdXwZbU6I3rS7XrBIOuw7%2BQFlimF1b%2FttgeOFDuCZ0IwcYQ1DuKaHYBwITQGrKImuC1Cx9DNuBReyu3uaJ7R8MCPCOAB%2Br1AM6rIncEHn8dGkZ%2BNZGWviCjIop2MafJAraEFuMAY0PQFTpDNhe3GCmsDPe94BdIweCt0TH%2BuwR%2BrJ4fEslsOuiUyX4EOU3xcQ7DTYRtXSt3EFrClD197t9%2FQ%2B40%2Fq8b1fRGQU119srD76x9K5VQkj66Ct5pTYaP00LFPc2oMrBKSC1dlVhU4B3iuLpLt7g4LegyJhW4eLZPf04NFtDKilCpPkx1WCRobUDVuzxj5qeMyUD2q0ePKkSfndVrY0jVUjmNCdVDYoVfxsXdPs54T8syymk70844XFxj9ePVqc4TSG3BDSsBYJRNdDDASNipbCsf%2BmsuzQBGp8RCnDejuzZFqf1hpKarpovXQ1k%2Bbm%2FqLDFHfoumdDxRv9xTDoMOPP0sEGOqUBehlMaCWn2BneTsonKn5KjawHAyt%2FpMaHTP1Ywb5uPPZRhQeKeeuRIJ%2FGXkyYJLie3K720UHak5A%2BTTVjkMn43yUP5DZiigqr%2BthgY43bJ6ePW7Bt9F%2BJYFJz6QhKEQ6DjrMMHJsnMiszwaSDKsSHeiMVP9K31YBylp0G4LUge5lsdcXkPC1egriGeUI14%2FWMAez2tSziZLXpE6B3lN6OT0xLyuNf&X-Amz-Signature=2dca7c09c3dd8efe2821f87cf616dd955571ebef9afa83c29d90e2e797fb9f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
