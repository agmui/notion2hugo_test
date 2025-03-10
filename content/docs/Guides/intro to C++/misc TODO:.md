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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6ANM3N%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICSy8e5y%2Bh8QIDgqkJm71TKOdkushfudHDCYbY%2B%2BYe%2FCAiEAptHvkjx6n58AEc5Mak6op06OiIBnSxiwZE%2BBn%2BapJnYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQkVfDJcpAqB3pI2yrcAxTxMO87ElmQlunA2fN7u5P97DPCmw%2BDyz5IO1OysVy2cKfNxC3Dt4VP%2F1Aj%2Bd%2FhoCNcoPqS0Ip97do7LfX8QWMhlCsG5q236a6QvBy75KE15OPpcD5Up9J5F3tvim7VCr9qj6b2CLpiAb37bDa6wqyyb0j6tpyNaUgvzs0pU0kvXXT1FBJHofihloEuIcDGodfVjKmyU%2FjAojGpEVEi3FXiEd9fwFmNrSDOgoieM0xB1Z7K545Q9VVoN5aUlV1OmpD4Sjdm9j0Dhp15z%2FkmBOnaXl%2BhPBNnadUONr4mGXSkCf0fEnGqqn1uBOa7NA4XPTE3Oeuy0nl47pNbD0Ay%2BgDVTPIMQjJwn9oRZHAqjg6892FCq9gDeX9lQw3u6S1g2XZeyOgNjatqE3SMLJSRk%2F2hz74JpzJMIegqupOhgbZGrpVGGXblQ2kdU6OanErwn%2BNj8e4JYAH%2BzH2nyv%2FQ3huj37HX%2FUlVTs8FkYkHG9USCX%2FwphqwkghN4U%2BRKaarbsjrx3aBUmDr2EziDLs6ZozA4QNaT5xhQrqxPQ5rwg7auk4B74UG5gwUdmlIW%2BGBj%2B44yHgFox3IXNGY5xwzR84OwYx9I%2BWK4YFRt5lrtpXdsgNQm8qZvJAKDk6EMKLLvb4GOqUB9H%2FRcWqhAr4HBfXvv6FmnN4KqeGdABatTN4s5eedXwUFuEr80AURrngecjlDDD0KNc5Q2ZbSHaMYNCgWt5qyknRninY5yTRdQDUs6Jzc9Hhn7ohTQ3ALrJ4ZtYI%2BiYspCJMf8%2FnuxEm7Y3Uq5BLwQmPPUBEc27Ruc4DXtgFX1OAT37SMPL82745sX6AG18LT4pEonTEXku7H9ZXgDbD5gbfLY1jT&X-Amz-Signature=7d953693ad982118f24fb040213370b95a7a65a9bf8ad8efec62631d5c451103&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6ANM3N%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICSy8e5y%2Bh8QIDgqkJm71TKOdkushfudHDCYbY%2B%2BYe%2FCAiEAptHvkjx6n58AEc5Mak6op06OiIBnSxiwZE%2BBn%2BapJnYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQkVfDJcpAqB3pI2yrcAxTxMO87ElmQlunA2fN7u5P97DPCmw%2BDyz5IO1OysVy2cKfNxC3Dt4VP%2F1Aj%2Bd%2FhoCNcoPqS0Ip97do7LfX8QWMhlCsG5q236a6QvBy75KE15OPpcD5Up9J5F3tvim7VCr9qj6b2CLpiAb37bDa6wqyyb0j6tpyNaUgvzs0pU0kvXXT1FBJHofihloEuIcDGodfVjKmyU%2FjAojGpEVEi3FXiEd9fwFmNrSDOgoieM0xB1Z7K545Q9VVoN5aUlV1OmpD4Sjdm9j0Dhp15z%2FkmBOnaXl%2BhPBNnadUONr4mGXSkCf0fEnGqqn1uBOa7NA4XPTE3Oeuy0nl47pNbD0Ay%2BgDVTPIMQjJwn9oRZHAqjg6892FCq9gDeX9lQw3u6S1g2XZeyOgNjatqE3SMLJSRk%2F2hz74JpzJMIegqupOhgbZGrpVGGXblQ2kdU6OanErwn%2BNj8e4JYAH%2BzH2nyv%2FQ3huj37HX%2FUlVTs8FkYkHG9USCX%2FwphqwkghN4U%2BRKaarbsjrx3aBUmDr2EziDLs6ZozA4QNaT5xhQrqxPQ5rwg7auk4B74UG5gwUdmlIW%2BGBj%2B44yHgFox3IXNGY5xwzR84OwYx9I%2BWK4YFRt5lrtpXdsgNQm8qZvJAKDk6EMKLLvb4GOqUB9H%2FRcWqhAr4HBfXvv6FmnN4KqeGdABatTN4s5eedXwUFuEr80AURrngecjlDDD0KNc5Q2ZbSHaMYNCgWt5qyknRninY5yTRdQDUs6Jzc9Hhn7ohTQ3ALrJ4ZtYI%2BiYspCJMf8%2FnuxEm7Y3Uq5BLwQmPPUBEc27Ruc4DXtgFX1OAT37SMPL82745sX6AG18LT4pEonTEXku7H9ZXgDbD5gbfLY1jT&X-Amz-Signature=218548415db8649d61f58444861234d308a574ba608aaf45aad1bda3e081e4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
