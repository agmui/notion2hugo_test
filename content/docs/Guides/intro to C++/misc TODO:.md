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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R326VQ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2Q7R5%2BIqpQv4ZLw9mb7bttH0AFOrqaw06PLL0N4mdJwIgIqK47cI3mpiEUvnZD5JFVNkmrw4IKWsPkSecpKzRT2EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYeQk48krPJJsuVzircAxFgYfY2ELje9NQ%2FOKKDs6StACa8MHyB0k614LnmaGk2jy7hLA76HdUuYS7J7AXvdo9yeAERDt1kPI3nEDwl2mLGW2l6Eouo8szli7ZfGk%2FMkn%2FB857UVFBJr4S6m30tM8NPvSuZ7z%2Fq5JOgLNUlCFRAqnavG1YbLZPRlOCeZxugDe5pPxVoAS0B6sMPw8tBn3aM45J78eIiaxmNZkV1m%2F0O5KwMiHoO9xjGvGCvUzPBMXyrIjA%2FAKsiur68cowHZrXhTHdRipi9f7%2B0GNmdPMlWkBOJGakkLJht2PmIpykBOqckpsu752uPXTVoHOZ9jdN2Ktzt0%2BOvZBFaHmBGdPVW8odgma1LfsS34U3K947EHA9AcRr9kQGHku4iJ3asMJIIm0RoI9bEzVpUlKt%2FGBBnQlb9K%2FkzkiBuSxr578jQrIVmXbTe4fdNIcrU5IYbMctCP3%2Fx5tXLxqg11QP0rQAyS7fVXlcnjs3VSC3fvg4YfwkgO3vwmEywZf2403vTFJvR6pLGHuBQS%2BL1%2B7Iwma2HeuINTuNktTPg0nm6v%2FRMbCndzvVVb%2FqswX7Eb0e8CjIGvzYvDzIuMwOr7FB8w4k2%2BZIsi2kMhl6tsRMS1dqeVgeA90MAKHwH1VinMKj%2FvcEGOqUBAl%2BDQnTnjiX57laBt%2BI5tMM%2BBZyU5fbyMG7DmtCoWMgd7mmKGynnmqSFBk7pwoAUnhYPrpyPjh3FHXoanrUzNabUKTmMEGgrpxWuqVbz1wkfi3opCbe0qRSBwKrTAF%2FBeOo1LLNvxDiM%2BrsRZuoqLbrJetxAheX69zBBWeqtkQQ8PMOAeQaYEx%2B55%2BA5GGeApEq7t%2BcKO%2BiN7uB2ob7kmT21ulwp&X-Amz-Signature=65c452fcc87aea7ff20dbddcdec264ee5759eb3c9a6eed99a34a412465a34e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R326VQ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2Q7R5%2BIqpQv4ZLw9mb7bttH0AFOrqaw06PLL0N4mdJwIgIqK47cI3mpiEUvnZD5JFVNkmrw4IKWsPkSecpKzRT2EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYeQk48krPJJsuVzircAxFgYfY2ELje9NQ%2FOKKDs6StACa8MHyB0k614LnmaGk2jy7hLA76HdUuYS7J7AXvdo9yeAERDt1kPI3nEDwl2mLGW2l6Eouo8szli7ZfGk%2FMkn%2FB857UVFBJr4S6m30tM8NPvSuZ7z%2Fq5JOgLNUlCFRAqnavG1YbLZPRlOCeZxugDe5pPxVoAS0B6sMPw8tBn3aM45J78eIiaxmNZkV1m%2F0O5KwMiHoO9xjGvGCvUzPBMXyrIjA%2FAKsiur68cowHZrXhTHdRipi9f7%2B0GNmdPMlWkBOJGakkLJht2PmIpykBOqckpsu752uPXTVoHOZ9jdN2Ktzt0%2BOvZBFaHmBGdPVW8odgma1LfsS34U3K947EHA9AcRr9kQGHku4iJ3asMJIIm0RoI9bEzVpUlKt%2FGBBnQlb9K%2FkzkiBuSxr578jQrIVmXbTe4fdNIcrU5IYbMctCP3%2Fx5tXLxqg11QP0rQAyS7fVXlcnjs3VSC3fvg4YfwkgO3vwmEywZf2403vTFJvR6pLGHuBQS%2BL1%2B7Iwma2HeuINTuNktTPg0nm6v%2FRMbCndzvVVb%2FqswX7Eb0e8CjIGvzYvDzIuMwOr7FB8w4k2%2BZIsi2kMhl6tsRMS1dqeVgeA90MAKHwH1VinMKj%2FvcEGOqUBAl%2BDQnTnjiX57laBt%2BI5tMM%2BBZyU5fbyMG7DmtCoWMgd7mmKGynnmqSFBk7pwoAUnhYPrpyPjh3FHXoanrUzNabUKTmMEGgrpxWuqVbz1wkfi3opCbe0qRSBwKrTAF%2FBeOo1LLNvxDiM%2BrsRZuoqLbrJetxAheX69zBBWeqtkQQ8PMOAeQaYEx%2B55%2BA5GGeApEq7t%2BcKO%2BiN7uB2ob7kmT21ulwp&X-Amz-Signature=3f2b075ddf0ef755c591686f19f5285f52269c4666f0a4bf56b27d053872a6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
