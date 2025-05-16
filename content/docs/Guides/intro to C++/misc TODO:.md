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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFD5TBT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICp9U6ZD00lSbPW3C0tYM3Tw%2F5C%2FoIDoSDantseg1TVyAiAOGXRgxJta2jJmJXHkDweHvwjyhP4TSBeHmUsqlFPuayr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHCGe9tP63sMZxO5zKtwDpESDd%2BqDIHZlVDeNh08m8bK1Ftj9O7wMqm5DQQZdr04mfGnvhwXlkun2X%2BC2u%2Fkus69lTUqp9rC0jnkNoWXcjX4eDWmLrBSkg9Q3DqLKgehUeYXXWLIBSPlzGP%2F7IzyCpJeT4DXzwzoNFTFUen5d4n6etN27Vv5QFIk5LxSKi4eFrKaCwPk65KllyBDsJnD74ymzAAVWcnDoEd282ilPRJjI9EbVvCcebYzHOW37VcZFLnfktpSKbEJ3b%2F0c3zt80D77OPWfG7RC0fukfaQPIwMuuOk2WJ254h0UyqgZofn7s4uUiwXzpbHFMB5NCgCSR3jg6SkHRUSIChlf2keMH3Qay09rKA8huew1AS4CUsNYG0u63BfoA%2FkUno0lMan%2Fk9K%2BwQNY%2B4v7S7tclGyLnAKImh%2B%2FbCOUHLMIp5vcAbvjMETEFuGjae7tnFcJH0cgeaSisADsj%2FSMLzsVzjvBukhXI0gGLnt7ynxn%2Fhjzwea%2FIRm2V%2BpfjaH59zb9jLyTAL9widfMTPD4yi5XdYbmU2YonF%2FmS%2B94P9HYuGoen6NTt%2Bk%2BXT234UJehEDmIG2bO00QhM80EbM75uwZv0GvoHVeAn2AgJN6kDl0%2FFIc2s3Wl9Yad4d2lBgm6AcwvrWdwQY6pgG0%2Byz21BmhJPoADthSRuVYteg6CxJEv%2F59kEOctnYH9NYkl6CBXhh76ZZxD1BHIJofn%2F3X0PuB7RQkjXDZfDzLGpudVQgrb%2FiS5JD9xq68bX5mXPSn2JDrFJNZQPRioXGgULZcPFaI118kiz77qLedZgZcUNEo0rrRVCm1ETVhF91I3ZdiCDvSZIqR6np6ilEdVnvtIsbfL8xltiocfwsq68orVLdx&X-Amz-Signature=32ebaa566e574519033e91cb2f45222707db4117313c56a3f78b8180821e46b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFD5TBT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICp9U6ZD00lSbPW3C0tYM3Tw%2F5C%2FoIDoSDantseg1TVyAiAOGXRgxJta2jJmJXHkDweHvwjyhP4TSBeHmUsqlFPuayr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHCGe9tP63sMZxO5zKtwDpESDd%2BqDIHZlVDeNh08m8bK1Ftj9O7wMqm5DQQZdr04mfGnvhwXlkun2X%2BC2u%2Fkus69lTUqp9rC0jnkNoWXcjX4eDWmLrBSkg9Q3DqLKgehUeYXXWLIBSPlzGP%2F7IzyCpJeT4DXzwzoNFTFUen5d4n6etN27Vv5QFIk5LxSKi4eFrKaCwPk65KllyBDsJnD74ymzAAVWcnDoEd282ilPRJjI9EbVvCcebYzHOW37VcZFLnfktpSKbEJ3b%2F0c3zt80D77OPWfG7RC0fukfaQPIwMuuOk2WJ254h0UyqgZofn7s4uUiwXzpbHFMB5NCgCSR3jg6SkHRUSIChlf2keMH3Qay09rKA8huew1AS4CUsNYG0u63BfoA%2FkUno0lMan%2Fk9K%2BwQNY%2B4v7S7tclGyLnAKImh%2B%2FbCOUHLMIp5vcAbvjMETEFuGjae7tnFcJH0cgeaSisADsj%2FSMLzsVzjvBukhXI0gGLnt7ynxn%2Fhjzwea%2FIRm2V%2BpfjaH59zb9jLyTAL9widfMTPD4yi5XdYbmU2YonF%2FmS%2B94P9HYuGoen6NTt%2Bk%2BXT234UJehEDmIG2bO00QhM80EbM75uwZv0GvoHVeAn2AgJN6kDl0%2FFIc2s3Wl9Yad4d2lBgm6AcwvrWdwQY6pgG0%2Byz21BmhJPoADthSRuVYteg6CxJEv%2F59kEOctnYH9NYkl6CBXhh76ZZxD1BHIJofn%2F3X0PuB7RQkjXDZfDzLGpudVQgrb%2FiS5JD9xq68bX5mXPSn2JDrFJNZQPRioXGgULZcPFaI118kiz77qLedZgZcUNEo0rrRVCm1ETVhF91I3ZdiCDvSZIqR6np6ilEdVnvtIsbfL8xltiocfwsq68orVLdx&X-Amz-Signature=31d872c14af0d0f36fdcf5e05ddb5b0c932ce8f25ac4b6432bf9bd876ae4d893&X-Amz-SignedHeaders=host&x-id=GetObject)

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
