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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWQ4SSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4oqqgsRnwnGxrHC7yVKm4pk5DOh7JwRm665N06EMNbAiEA6eo%2BPNLI7RsmWE63VRLg09mlW%2BHQp%2BeiYLDhJwskGF8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHMGFX9C0YvtmT5bxSrcA9NqlW7LDnNrLPeIGYYMWYPpJwEkHUBY3Ay5J%2F05DdiIIfRn50auw%2FaMVHz4SF%2Bcl8OM0B0IC439Ugxp8AQxxqRct%2BY7Rcgp2nGnzDmkH3BFiIE6szzS24T9Hisii%2BcS3yV8HGus5IwJph9%2B0toeXV%2Flj6D%2FPV%2B9nQCSVUGwNPkSXUfUtNNQhM4m2%2BHBsghoa9K381mpAkKgmnuG%2BXhua80skMbqG8gfI7dKqa%2FKTvSR%2BcwTpVNZO3ow%2B5pCTOjQ7%2FoUvqPdrgwnFXvm8poZD5T86YFwNh8rOeRitFvpIMX%2FdKT6X8Q6ynPWLf0jTlpgS5ybN7E5ETagSgXBcKQvzDKYYN%2BCSHBNSLA6LBe7G5itUfHrBlSHNnEnWBoXm5u%2FFyK3oOfXSTGKxqpCPWd6UkTNZa%2BWLls55qxOkjoLA6mOfFDwUov2oDQHgKn%2F9TKkqvbqYo6oFGPdIEgzgrjD098lob1WZBfgPzyImT5ej1MlKH%2FRlKaGc86YxzfxpjFzyueWjCSi26bBCk%2FTeqnL3lQtfgKApMeJWuSCn2iRD3Sb6fyUX%2FHmu0PXrm8TbMYSBUtV3kB9TY%2BTmiWzAVRmg5L1ELFlBR7iCQeAYzWJyREOyg7FiCZrTOcVE%2BsxMLrhgsAGOqUBlWtBw%2Fi5zCopL%2FTevlac5GI3iIYAkgqa%2B96I5EFEpRf2hDZ3MpqhJ7pqmPJaSMT4Gn3%2F8jCyTcW3LULlanodDHywjNZBVQgbFM1Af%2BrlLUy8NWrsSJ%2FyDX7NWzOWGQYrm3sOhblFPHdCU0eQ2B4w7D1pnP9DzrM%2BGcV%2Bpaq%2FvPmk5CfVfLbQR86iqwvkSihhOgom6gbQ9khJUFbxgfKxBNmzzXKl&X-Amz-Signature=de4aa549c1e8e15352f5016454de2b3d114499ab297894abcbe6c22c11aa7727&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWQ4SSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4oqqgsRnwnGxrHC7yVKm4pk5DOh7JwRm665N06EMNbAiEA6eo%2BPNLI7RsmWE63VRLg09mlW%2BHQp%2BeiYLDhJwskGF8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHMGFX9C0YvtmT5bxSrcA9NqlW7LDnNrLPeIGYYMWYPpJwEkHUBY3Ay5J%2F05DdiIIfRn50auw%2FaMVHz4SF%2Bcl8OM0B0IC439Ugxp8AQxxqRct%2BY7Rcgp2nGnzDmkH3BFiIE6szzS24T9Hisii%2BcS3yV8HGus5IwJph9%2B0toeXV%2Flj6D%2FPV%2B9nQCSVUGwNPkSXUfUtNNQhM4m2%2BHBsghoa9K381mpAkKgmnuG%2BXhua80skMbqG8gfI7dKqa%2FKTvSR%2BcwTpVNZO3ow%2B5pCTOjQ7%2FoUvqPdrgwnFXvm8poZD5T86YFwNh8rOeRitFvpIMX%2FdKT6X8Q6ynPWLf0jTlpgS5ybN7E5ETagSgXBcKQvzDKYYN%2BCSHBNSLA6LBe7G5itUfHrBlSHNnEnWBoXm5u%2FFyK3oOfXSTGKxqpCPWd6UkTNZa%2BWLls55qxOkjoLA6mOfFDwUov2oDQHgKn%2F9TKkqvbqYo6oFGPdIEgzgrjD098lob1WZBfgPzyImT5ej1MlKH%2FRlKaGc86YxzfxpjFzyueWjCSi26bBCk%2FTeqnL3lQtfgKApMeJWuSCn2iRD3Sb6fyUX%2FHmu0PXrm8TbMYSBUtV3kB9TY%2BTmiWzAVRmg5L1ELFlBR7iCQeAYzWJyREOyg7FiCZrTOcVE%2BsxMLrhgsAGOqUBlWtBw%2Fi5zCopL%2FTevlac5GI3iIYAkgqa%2B96I5EFEpRf2hDZ3MpqhJ7pqmPJaSMT4Gn3%2F8jCyTcW3LULlanodDHywjNZBVQgbFM1Af%2BrlLUy8NWrsSJ%2FyDX7NWzOWGQYrm3sOhblFPHdCU0eQ2B4w7D1pnP9DzrM%2BGcV%2Bpaq%2FvPmk5CfVfLbQR86iqwvkSihhOgom6gbQ9khJUFbxgfKxBNmzzXKl&X-Amz-Signature=329fe8139ca8471c9f45ffe492199f559a75dcd778b9a9b0980718a4fd18fca2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
