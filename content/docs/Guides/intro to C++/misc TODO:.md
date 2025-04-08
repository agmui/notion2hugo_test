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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIT37IH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFixmNVxPX8acoXLHwjD1QIZa07iWlx7Ng3SuCd2rx7cAiB3ZBxfPsN19TOo5hTKFS6i2qbIDd8Nwl9Rm6%2FVvJIO%2FCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMkychPXi2rueABKw6KtwDbvJQ70pVNFXIYwLFjm3T6oDNU5cj%2FkoDYC8l5h8Dj12ewbv5%2FEDPtUIBPlh3SKKOg9%2Bp%2BeUVYuap0xZwT1hsnUA4iXEnhRSVUH6OzLs0B4IPRUnS4HMKCCfCklcUA9xFz3sAReNV8jC%2FedAlNu%2BwBvB7vSATXoIknwobO5LFjkvO%2B1S2FlP9PqhDsJyI4L4dJmB20Z%2BWEctZMfK23ihdAtzbCIqDql0SEadAdhcphRnvRuxYKpQjB1%2Bu%2BqE%2FT0qNTCgu%2BXijRojmRns%2F8XGecNyBIsSBN%2BdWjcuJVf1IMk3P6HRPd0LIxyAPFGGdoom41EoNeAoEEpLTqIaJ9n41m4kwj3ecU18uXcZ7tTMNtur8z1hEiAzT17n0kLdejBC1187sG2GfuCKZJeOMyA2Bn7oEFOaNhmaJ6yM3bd1jo6Rvi2trhtJEXyCkoS%2Fk0p%2BgvdFgpxkOzC7H8xQEJaCgfDIQer4EXmayqhlZnvsr3vQFqOZ1nFNajjaDvViXaZHY4NOj0XPne%2FZWNRUtePkzsNjF%2Ftz1orIKGXvPizjbkzaqhJhIsvSQXV4kZ2ICKiNU2J2IEvAPOffvHoJKhbyPAYZqFEgcGT1WCAur9kDwrdHDfN%2F1zEWAO9eKhsgw47vTvwY6pgE8XpRO%2BPVli%2BkgA%2FjEORjxQ2Uh%2FTGC6SRC9RHv9YX6IvM04f%2F7sjkQcXZINceqiy2cqM7PigWGWry%2B5Hq6LYQGSpFXZ%2BMnfSLCa8CDfR4DvmdxFM%2FGsTppKstP%2FSKsThhx5f9AeOBPkFO3LYUxSNqSqzRjmlj62DI0cW%2BEjKNl4JrjHyxXXIF%2Fq4%2BKcX5aiHLr%2B9DoSwtRD5kbxqFa7J1%2FatvaEq%2Bo&X-Amz-Signature=c38eaf8587b25e9244576ea2fe1cfe825faea188920725e092e3067c0eaf68c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIT37IH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFixmNVxPX8acoXLHwjD1QIZa07iWlx7Ng3SuCd2rx7cAiB3ZBxfPsN19TOo5hTKFS6i2qbIDd8Nwl9Rm6%2FVvJIO%2FCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMkychPXi2rueABKw6KtwDbvJQ70pVNFXIYwLFjm3T6oDNU5cj%2FkoDYC8l5h8Dj12ewbv5%2FEDPtUIBPlh3SKKOg9%2Bp%2BeUVYuap0xZwT1hsnUA4iXEnhRSVUH6OzLs0B4IPRUnS4HMKCCfCklcUA9xFz3sAReNV8jC%2FedAlNu%2BwBvB7vSATXoIknwobO5LFjkvO%2B1S2FlP9PqhDsJyI4L4dJmB20Z%2BWEctZMfK23ihdAtzbCIqDql0SEadAdhcphRnvRuxYKpQjB1%2Bu%2BqE%2FT0qNTCgu%2BXijRojmRns%2F8XGecNyBIsSBN%2BdWjcuJVf1IMk3P6HRPd0LIxyAPFGGdoom41EoNeAoEEpLTqIaJ9n41m4kwj3ecU18uXcZ7tTMNtur8z1hEiAzT17n0kLdejBC1187sG2GfuCKZJeOMyA2Bn7oEFOaNhmaJ6yM3bd1jo6Rvi2trhtJEXyCkoS%2Fk0p%2BgvdFgpxkOzC7H8xQEJaCgfDIQer4EXmayqhlZnvsr3vQFqOZ1nFNajjaDvViXaZHY4NOj0XPne%2FZWNRUtePkzsNjF%2Ftz1orIKGXvPizjbkzaqhJhIsvSQXV4kZ2ICKiNU2J2IEvAPOffvHoJKhbyPAYZqFEgcGT1WCAur9kDwrdHDfN%2F1zEWAO9eKhsgw47vTvwY6pgE8XpRO%2BPVli%2BkgA%2FjEORjxQ2Uh%2FTGC6SRC9RHv9YX6IvM04f%2F7sjkQcXZINceqiy2cqM7PigWGWry%2B5Hq6LYQGSpFXZ%2BMnfSLCa8CDfR4DvmdxFM%2FGsTppKstP%2FSKsThhx5f9AeOBPkFO3LYUxSNqSqzRjmlj62DI0cW%2BEjKNl4JrjHyxXXIF%2Fq4%2BKcX5aiHLr%2B9DoSwtRD5kbxqFa7J1%2FatvaEq%2Bo&X-Amz-Signature=4311a142dd5cc54db6914f9f0e83280b5375223157a44b5214d86334e9278151&X-Amz-SignedHeaders=host&x-id=GetObject)

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
