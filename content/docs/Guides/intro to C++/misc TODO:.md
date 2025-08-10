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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OGZS76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwoC5fFIChyd05C36ZiyFnw%2FUGeaVmiN1VD8qHHGhyiQIgBGVqJhCw6V7F5Cvc6EUraIUgU4AhZ1LBEolbCXsNVxUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjletQO2Ve3aJjYCCrcA8lZ2KNnQs2%2BIs2gNtnqicnv8nh0qksinNvD1XPkgRGzXZLE%2B%2BjLlmKrg3IfydAYWrKaYy4s%2FzzDlieOgLChLZJbyfUCgbmYujjIbUvxM%2FSEcPqI06aFyHVu1gKvfKFeVxAMiVdzPpxWrjIaQJxpu4g6EUAxra7MRysAKMfMBPIhOkPb7MsV3yFBci9YLaOQb1gc0tcWu%2B3PxOIgpn3qAzLW9NG9IwdT%2BvhIvL2xg7sZmPGHfqkOuFnFMtNF9yQcFMiomx2wCFSvQYqliyki%2F58LqO9jykzUsbECzUTjk3FIwD1yOpeBgMkrFzE5FXQdBpPJ8QUzxykPIy%2B2lNLzA3xKjIVFb5IF7bTJjezxDpfWHA1f6OzP1%2Fuhzyvzc9eFFS0xodJZNET%2FDT62uBQNOLcIMok0NGoPWZLEUSjbP8wGWcu9maY4455t9T0Anjg1PBScePYJcsw862K01GBOl4APYUfNPP8maXohfI6XiaQIiDLvxpnyDCoIj3p%2B5%2BYKLpyMMokXZL40yyFHuF3zy1R6YetjxVJrM%2FSj%2BZPrjoIXZokUPhp3qUUADCy%2F8mxiwqRIj10q5Bk0pYDgf0xvIbbCUOxYpgRG%2FuQuqGKGziB%2BP3HR0im0jlFKi5hbMIy%2F4sQGOqUBBfF83aCh2hyHYkXxU%2BeZyZ2M0qC%2BLhFerB0wsRRYp8quF6ocq3ytq8mhxVD04e8pe1wYNSh7jBUrzic%2FAOl8reCSUrG3VN%2B0L%2BfVvV%2B4rG5OOZfkFsiAQP06GLPfIlMQOvRQUGafXMqP5YPLXlfPDVM7kM1QiFNmARik9l2Nl0bpiOkIr4v9dQVIa1rQNOZ%2FeEtw%2B4Iw0VqYqJ8Rq2LvJoZJtAAJ&X-Amz-Signature=7d9d068e757589329b18dd03a5239c3523e6151afc4588a50912a09110ca2f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OGZS76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwoC5fFIChyd05C36ZiyFnw%2FUGeaVmiN1VD8qHHGhyiQIgBGVqJhCw6V7F5Cvc6EUraIUgU4AhZ1LBEolbCXsNVxUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjletQO2Ve3aJjYCCrcA8lZ2KNnQs2%2BIs2gNtnqicnv8nh0qksinNvD1XPkgRGzXZLE%2B%2BjLlmKrg3IfydAYWrKaYy4s%2FzzDlieOgLChLZJbyfUCgbmYujjIbUvxM%2FSEcPqI06aFyHVu1gKvfKFeVxAMiVdzPpxWrjIaQJxpu4g6EUAxra7MRysAKMfMBPIhOkPb7MsV3yFBci9YLaOQb1gc0tcWu%2B3PxOIgpn3qAzLW9NG9IwdT%2BvhIvL2xg7sZmPGHfqkOuFnFMtNF9yQcFMiomx2wCFSvQYqliyki%2F58LqO9jykzUsbECzUTjk3FIwD1yOpeBgMkrFzE5FXQdBpPJ8QUzxykPIy%2B2lNLzA3xKjIVFb5IF7bTJjezxDpfWHA1f6OzP1%2Fuhzyvzc9eFFS0xodJZNET%2FDT62uBQNOLcIMok0NGoPWZLEUSjbP8wGWcu9maY4455t9T0Anjg1PBScePYJcsw862K01GBOl4APYUfNPP8maXohfI6XiaQIiDLvxpnyDCoIj3p%2B5%2BYKLpyMMokXZL40yyFHuF3zy1R6YetjxVJrM%2FSj%2BZPrjoIXZokUPhp3qUUADCy%2F8mxiwqRIj10q5Bk0pYDgf0xvIbbCUOxYpgRG%2FuQuqGKGziB%2BP3HR0im0jlFKi5hbMIy%2F4sQGOqUBBfF83aCh2hyHYkXxU%2BeZyZ2M0qC%2BLhFerB0wsRRYp8quF6ocq3ytq8mhxVD04e8pe1wYNSh7jBUrzic%2FAOl8reCSUrG3VN%2B0L%2BfVvV%2B4rG5OOZfkFsiAQP06GLPfIlMQOvRQUGafXMqP5YPLXlfPDVM7kM1QiFNmARik9l2Nl0bpiOkIr4v9dQVIa1rQNOZ%2FeEtw%2B4Iw0VqYqJ8Rq2LvJoZJtAAJ&X-Amz-Signature=8868ef423966692e61e157d4e73fec40c1eaafb78584cb00cda3e2e7b19813cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
