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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF23RL2%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDxknd4WR%2F7jp9igc2ZNHjiVOZzgBlQ2%2FThtOROwZuPOQIgJqJSsMuGlR8MLZhmOAiqlFesEce2gdTVa5sJjCDVPikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDE4A6%2BS7yAMUW0zeHSrcA9ufzUi0%2FNp5Or%2F5fp2bB7lSoYzu8DeoFzn7KDhSrzQ%2BikKHRcVQMFMMpusc2IFvscAXtAZGC4e0JlzSN%2FqjKdDKM413lfoMPHdJQ5IrGHOlv%2BIq54BKiXUnXeEqh9wUurfEcYr7ZwdPezGNIKH2XnjqktRWuPU8v%2FY9kUHIYq2UZZiH%2BoGVyLcHG99XDR1OihFX%2BbmQaigDuqbAWeeJ5A86pXSzBXm3vkDNMk%2FwzpHKFPhvDinYtbXY8rtnSCqLAg0RFmvPYIADKznv4099xcQVQ0XEtqyIfWhgH1JT1w3CZWC6sVc2g7GRw73v6thoMaWngrU%2BThmaDssyzffVp7eb8Q8zfRq5C%2BB%2FrtX9pU1zeATFvMdAM2aZCVjZCWWRUC3CLh81HSd%2BP3OhDnjj%2F6zfPnp9z1ezMFSks3mkkgEflkfB2%2FN5LWPjJp4PfK5Qqg%2BODq4Uor0ewzOITiZy69bnwRS5ylw5zkVH8lU9trlChHqQRAO5U%2F3SuUS%2BfNuWIsaxFSSdaRmQGDHJk3P7UIbgMLXK%2BwYfs0AErfEF1SwSw9k%2BmTVoMV8ZWGgQiEyQfhKtMX2vG8ukZPhyZwcRiqAIGedeGSqJDEdr0JqGtzrPD5%2F9AhDbSn%2F%2B49EPMLycuNEGOqUBicOpXjZjAhLKAYU7DdkiLcS4gUASjSD5gOsUzAHawR2PILy2GHx2YtbS7gZhqDeXAQdj10M5B1pvrQQYdkmqnl0rOpg8VetfZQngX1e57E0y%2FIMjEzPfHUp9MfENqSwqrxefUyJCv%2B35c%2FFdmHVhevJMZVmxDMhM0dCSY0swqpKyDtpdtG2dtuumXyy6Fx%2BrwRaaBEyo0dRHzdp1OF31LfRFhX9i&X-Amz-Signature=c714634e76a0da13c58c9fd63d8f34da96e70311194190253a7cb4e7b8436434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF23RL2%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDxknd4WR%2F7jp9igc2ZNHjiVOZzgBlQ2%2FThtOROwZuPOQIgJqJSsMuGlR8MLZhmOAiqlFesEce2gdTVa5sJjCDVPikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDE4A6%2BS7yAMUW0zeHSrcA9ufzUi0%2FNp5Or%2F5fp2bB7lSoYzu8DeoFzn7KDhSrzQ%2BikKHRcVQMFMMpusc2IFvscAXtAZGC4e0JlzSN%2FqjKdDKM413lfoMPHdJQ5IrGHOlv%2BIq54BKiXUnXeEqh9wUurfEcYr7ZwdPezGNIKH2XnjqktRWuPU8v%2FY9kUHIYq2UZZiH%2BoGVyLcHG99XDR1OihFX%2BbmQaigDuqbAWeeJ5A86pXSzBXm3vkDNMk%2FwzpHKFPhvDinYtbXY8rtnSCqLAg0RFmvPYIADKznv4099xcQVQ0XEtqyIfWhgH1JT1w3CZWC6sVc2g7GRw73v6thoMaWngrU%2BThmaDssyzffVp7eb8Q8zfRq5C%2BB%2FrtX9pU1zeATFvMdAM2aZCVjZCWWRUC3CLh81HSd%2BP3OhDnjj%2F6zfPnp9z1ezMFSks3mkkgEflkfB2%2FN5LWPjJp4PfK5Qqg%2BODq4Uor0ewzOITiZy69bnwRS5ylw5zkVH8lU9trlChHqQRAO5U%2F3SuUS%2BfNuWIsaxFSSdaRmQGDHJk3P7UIbgMLXK%2BwYfs0AErfEF1SwSw9k%2BmTVoMV8ZWGgQiEyQfhKtMX2vG8ukZPhyZwcRiqAIGedeGSqJDEdr0JqGtzrPD5%2F9AhDbSn%2F%2B49EPMLycuNEGOqUBicOpXjZjAhLKAYU7DdkiLcS4gUASjSD5gOsUzAHawR2PILy2GHx2YtbS7gZhqDeXAQdj10M5B1pvrQQYdkmqnl0rOpg8VetfZQngX1e57E0y%2FIMjEzPfHUp9MfENqSwqrxefUyJCv%2B35c%2FFdmHVhevJMZVmxDMhM0dCSY0swqpKyDtpdtG2dtuumXyy6Fx%2BrwRaaBEyo0dRHzdp1OF31LfRFhX9i&X-Amz-Signature=fdb273fdd44cb6805f7183816b2316e405770f65bc4a2fb6dd62104750721d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
