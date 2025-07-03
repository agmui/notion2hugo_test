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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKFUFYW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCx76oRnWOq2YYoHTySW%2BJK5SOS%2FYsyH2%2FpfiFaGxfxeAIgHPeZrpMBlD5t0HfEPsYct30AjWWhRrsUp06htYUOYZMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDEJf5umTkxKhSsnUASrcAz7k%2BHD8lLJZsG7xeND%2Bm4ChABkGqd0JVCFYhT2YOMWgc7acWR9CCkhFirKsXS%2FS2sqGUu1T6zmPshhC7p6z4%2FjR4xhBfS6IuShzhrpNnXTWEYqa5uXALuQ2NmtgxLN5mjIOlUkoKOlNqa6pt2X40xkb1LP1MIcyyZAbC7qLGLNsNlS6FmzMn3NCR%2FErTLj1UZkStFwyfSD4MPOQlBRIFTaOr2Z5VQ1zSGagF8bXq5Tkn43DnC3NPsQyFyo%2BoxD8oGr%2FC%2BDozzXef0HKZgbfqhpr8SuPLieRcg9OXzYCX243I0S3j28JzkNCHlIQ2AG43BrcvaGHMLBHsWe3GZgx95hGlPs9HxXspiw6w5aP1GdrWL9OWi13UTpF8f0bfiwWPgo1CWPk7bB5nK%2FwXwnFDlNu2ump2n6xTuMaXhW8PFuSozj6WKRO6Qb%2FnqJMspUD9tQ2gjkc31B3LBqemRvRMX23t2lk%2BZlLzZSnxeo20Sxu7myMljyMOOuiXBiSlu6ynjRQON5BZTCpBv4Y5LMuEfoNKFOpsbCpS5wqGcJVqCkA%2B3rEkfT1UoWa8x74gokQNcJ2fg14Ra%2BukzB%2F9fyFx4dai9JFt07HvU0B6XxQjYlGyr9eB0bZ6sJjEibiMPqImcMGOqUB%2BpJekB%2Fdz47vifIGpWgl9hGjTnXw4U6QBa9t4vJAi8f0P2kJfbUxmvlZXKx9hUwxuRFO5f37wuCR06e%2BDXVXX4mhtMivcGBW%2B3kL4SRKjZdh7sj5je%2FmdbpUhq%2BM5Cq2lSSRDW%2Bge73%2FhHm2NCAPgTk7YbopR4HRMQZhIGQ839azVCi25aey4NOQEUFsaAbnBPRFyVlL8z%2B%2BZLB9sIu2igvEnCW2&X-Amz-Signature=1cf3d5a4a264577e24a328446e209c3685dcb6675f726ff1e55664625c335027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKFUFYW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCx76oRnWOq2YYoHTySW%2BJK5SOS%2FYsyH2%2FpfiFaGxfxeAIgHPeZrpMBlD5t0HfEPsYct30AjWWhRrsUp06htYUOYZMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDEJf5umTkxKhSsnUASrcAz7k%2BHD8lLJZsG7xeND%2Bm4ChABkGqd0JVCFYhT2YOMWgc7acWR9CCkhFirKsXS%2FS2sqGUu1T6zmPshhC7p6z4%2FjR4xhBfS6IuShzhrpNnXTWEYqa5uXALuQ2NmtgxLN5mjIOlUkoKOlNqa6pt2X40xkb1LP1MIcyyZAbC7qLGLNsNlS6FmzMn3NCR%2FErTLj1UZkStFwyfSD4MPOQlBRIFTaOr2Z5VQ1zSGagF8bXq5Tkn43DnC3NPsQyFyo%2BoxD8oGr%2FC%2BDozzXef0HKZgbfqhpr8SuPLieRcg9OXzYCX243I0S3j28JzkNCHlIQ2AG43BrcvaGHMLBHsWe3GZgx95hGlPs9HxXspiw6w5aP1GdrWL9OWi13UTpF8f0bfiwWPgo1CWPk7bB5nK%2FwXwnFDlNu2ump2n6xTuMaXhW8PFuSozj6WKRO6Qb%2FnqJMspUD9tQ2gjkc31B3LBqemRvRMX23t2lk%2BZlLzZSnxeo20Sxu7myMljyMOOuiXBiSlu6ynjRQON5BZTCpBv4Y5LMuEfoNKFOpsbCpS5wqGcJVqCkA%2B3rEkfT1UoWa8x74gokQNcJ2fg14Ra%2BukzB%2F9fyFx4dai9JFt07HvU0B6XxQjYlGyr9eB0bZ6sJjEibiMPqImcMGOqUB%2BpJekB%2Fdz47vifIGpWgl9hGjTnXw4U6QBa9t4vJAi8f0P2kJfbUxmvlZXKx9hUwxuRFO5f37wuCR06e%2BDXVXX4mhtMivcGBW%2B3kL4SRKjZdh7sj5je%2FmdbpUhq%2BM5Cq2lSSRDW%2Bge73%2FhHm2NCAPgTk7YbopR4HRMQZhIGQ839azVCi25aey4NOQEUFsaAbnBPRFyVlL8z%2B%2BZLB9sIu2igvEnCW2&X-Amz-Signature=51fe4bc2240d8443dd6e0f37e67bd0a225c4851357f79178b3172a28ea0cdd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
