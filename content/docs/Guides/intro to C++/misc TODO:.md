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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IHFYVO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3XIH9x%2BfKPplqKDNFRtdx0uQJH%2BIXVQipR1fyqFRWRwIgbWx7wpn38q6a1cE5BPSKG87taB6TZtRVSEAMb8AztQsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC7AdAdjx%2B1pUM2gBSrcA35GqarG%2FyFm%2FjTMaH7Ao5bCTRn8uEYTqfRK8WmWUZap1GoZBD%2Bi50b%2BRlW54M%2BJVfxbbDSDBbhMM1B7lZzPLyDAuQVYjYLgpGmV3edkNwqfFeaGZC89rlA0jb6IjNMCMk3bPkJd3BdwCbMr4Pn%2F3%2BfoHBvpTVbjtzY5p13EM3fScIVdm6tZwhGtWZMCHZPto%2FS4EbgPOU%2Bf%2BbnDNJqTjKR%2BXEwEUg5Gd72tPdCzdZORm8Igo5aU3yh5Ti0IumlWfTYwIX9LeCiRQLiB9BFiVz%2FsuDVJDFnMsEk0HcR3HmP5fCSO2iZFBMBxeAd67DqpKT38Mbsy5J3AWmKxAXcK%2BNfaWLY3y7wkLNg%2BeXd75JP794P4nHZ8595CQczLEE8iyr6bQIJgvLmjbiFwtvnzpaQcX0uGyG5yFndyrfBGLvSXi6ff1Olf%2BByKWZfBT3wozhWWIz%2B526enj85f5po5xJLZ6ppLv%2FwzYdjqiyjvUqdXVeQUG%2Fh1SuwJQR7d8bsq6tI4N7VdHrx6iVtMAtFjUolI9bCFBD0eNU6buiS20gpZY5%2FhJJlic325offrswIOvS4ocxQ2SCZiVTlolGjXjPaWOjUO9AcMcquMv%2B4JYZyIfkyccv3XZRk03YCvMNqkzcMGOqUBMEgDzIha5PFlkYr2hTSZUInUy4qYeCUV4ZANBLXhHVJeE5URfU2ZaiHIqLm%2BaTobt4NRtOipGJSi78yggm%2F%2BS4FJMc8PIi1OTiogOenZYuBdbvANhOXdnrbFaBCgG84AnOR2%2BmGB0fXh%2Fpq3znZufk0CPN9kFRs4cofrZhWMOMLCJdJf85waQLPMH9XLcL7Un8ehqyc%2B8IAxTu0a4iCRYb1KEpd8&X-Amz-Signature=3e750c820b4ee35839d1e3c9e03ff3dd8b52325e41947ee17d9f3101eeff6e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IHFYVO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3XIH9x%2BfKPplqKDNFRtdx0uQJH%2BIXVQipR1fyqFRWRwIgbWx7wpn38q6a1cE5BPSKG87taB6TZtRVSEAMb8AztQsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC7AdAdjx%2B1pUM2gBSrcA35GqarG%2FyFm%2FjTMaH7Ao5bCTRn8uEYTqfRK8WmWUZap1GoZBD%2Bi50b%2BRlW54M%2BJVfxbbDSDBbhMM1B7lZzPLyDAuQVYjYLgpGmV3edkNwqfFeaGZC89rlA0jb6IjNMCMk3bPkJd3BdwCbMr4Pn%2F3%2BfoHBvpTVbjtzY5p13EM3fScIVdm6tZwhGtWZMCHZPto%2FS4EbgPOU%2Bf%2BbnDNJqTjKR%2BXEwEUg5Gd72tPdCzdZORm8Igo5aU3yh5Ti0IumlWfTYwIX9LeCiRQLiB9BFiVz%2FsuDVJDFnMsEk0HcR3HmP5fCSO2iZFBMBxeAd67DqpKT38Mbsy5J3AWmKxAXcK%2BNfaWLY3y7wkLNg%2BeXd75JP794P4nHZ8595CQczLEE8iyr6bQIJgvLmjbiFwtvnzpaQcX0uGyG5yFndyrfBGLvSXi6ff1Olf%2BByKWZfBT3wozhWWIz%2B526enj85f5po5xJLZ6ppLv%2FwzYdjqiyjvUqdXVeQUG%2Fh1SuwJQR7d8bsq6tI4N7VdHrx6iVtMAtFjUolI9bCFBD0eNU6buiS20gpZY5%2FhJJlic325offrswIOvS4ocxQ2SCZiVTlolGjXjPaWOjUO9AcMcquMv%2B4JYZyIfkyccv3XZRk03YCvMNqkzcMGOqUBMEgDzIha5PFlkYr2hTSZUInUy4qYeCUV4ZANBLXhHVJeE5URfU2ZaiHIqLm%2BaTobt4NRtOipGJSi78yggm%2F%2BS4FJMc8PIi1OTiogOenZYuBdbvANhOXdnrbFaBCgG84AnOR2%2BmGB0fXh%2Fpq3znZufk0CPN9kFRs4cofrZhWMOMLCJdJf85waQLPMH9XLcL7Un8ehqyc%2B8IAxTu0a4iCRYb1KEpd8&X-Amz-Signature=c1f6bce9b8aa809c60f1b0805e4b7625b8018fda3432431e3dd0f3300b0fa8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
