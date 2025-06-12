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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TQSYMD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDLgrFzU0BIneKDp90tfbQmTyKAREBzMiqSamgGC6K4ogIgbQM7waXsDVs%2FwyELG8cD7uFcW50Jfi%2FUW0Zc3iugSwkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxHDDxceu82SwGJ1CrcA3nTicLTBBBGummbfGlzapFSiUOoIMNzkPzxIcyUhrS17J6Wdq61YLZSIXhs1PLVFc02Bs3R2NeqMeGTcod%2FlOip7jm4XLFHdXNAgIhnKMrRvrkRB7%2B5z0gCI6QY1FI0B94Q90vqDypqbPugM%2FlXRiJFw0DKwIjihbOhGgOSn6pttdDUzLqbYXw3o2ol47FSYbcNUEpiR%2BJN%2FBLKqO6RM%2BbOd9fk1Tzw79cRZIj9lpQRP0pSAJE4jdkVrw8u02eQSN%2BJtYR%2BNfWwTQ1JBPgmPnvpBwg2AYoP%2Fdgv2ETGo%2B5Z5g2t5rajnItZL0RkZdT4cfpfelMzo%2BYS2vY6ENdBjBhFRddbR586yS%2BKkaDn6pWLT33BcFY5d10AjQlVsbL2nNSX7UI8l4acINuUzg4eO5VRYSAiossIYUsbtoMuWfKAdUcPyrMLGbdCOwQ4%2BT2e7a4VPeJ10XmuF8KHnjDMs%2F46jMdLuspgM61iU0YNL4i2YkWhaxfWi9rN%2FSKGm6wsDbfu7UQH1lHc584pJ2OZBosz9tauHmpqlAsDF1APseI4ZqshKKhE5uQ1v5PHAwhZ%2BRqOHxcyzKKI%2BrRFis%2F%2BW%2FYQSCQGylb85NqCUdlduxZ6s9eBMagUAw1Na8LGMIu5rcIGOqUBrZFRKbgxOe9Q08Mem4WaWzdAJwMioebUGRpOwKgZl%2F%2BjqydOTUiUfT%2BgtodVSJpNqKfB4a1uUZySjd8Nz8Pxi%2BhXSO8Xjlx6Nf99kAgPjM9LBxb4w%2FWrfjwwxtFyUfzIJXb%2BIwUKEl2gEd1MKr3P6WDhS4SMiI%2BnqfJL7pAUcAO9fqcF22K53%2F2h%2FVs5EMobyFS5m6tdrR3PflMCZMBZsiNQtQSa&X-Amz-Signature=2f10f32f3970acb59adb50bb37a1a3835b8064e063804dbcc8d96a53103fafda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TQSYMD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDLgrFzU0BIneKDp90tfbQmTyKAREBzMiqSamgGC6K4ogIgbQM7waXsDVs%2FwyELG8cD7uFcW50Jfi%2FUW0Zc3iugSwkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxHDDxceu82SwGJ1CrcA3nTicLTBBBGummbfGlzapFSiUOoIMNzkPzxIcyUhrS17J6Wdq61YLZSIXhs1PLVFc02Bs3R2NeqMeGTcod%2FlOip7jm4XLFHdXNAgIhnKMrRvrkRB7%2B5z0gCI6QY1FI0B94Q90vqDypqbPugM%2FlXRiJFw0DKwIjihbOhGgOSn6pttdDUzLqbYXw3o2ol47FSYbcNUEpiR%2BJN%2FBLKqO6RM%2BbOd9fk1Tzw79cRZIj9lpQRP0pSAJE4jdkVrw8u02eQSN%2BJtYR%2BNfWwTQ1JBPgmPnvpBwg2AYoP%2Fdgv2ETGo%2B5Z5g2t5rajnItZL0RkZdT4cfpfelMzo%2BYS2vY6ENdBjBhFRddbR586yS%2BKkaDn6pWLT33BcFY5d10AjQlVsbL2nNSX7UI8l4acINuUzg4eO5VRYSAiossIYUsbtoMuWfKAdUcPyrMLGbdCOwQ4%2BT2e7a4VPeJ10XmuF8KHnjDMs%2F46jMdLuspgM61iU0YNL4i2YkWhaxfWi9rN%2FSKGm6wsDbfu7UQH1lHc584pJ2OZBosz9tauHmpqlAsDF1APseI4ZqshKKhE5uQ1v5PHAwhZ%2BRqOHxcyzKKI%2BrRFis%2F%2BW%2FYQSCQGylb85NqCUdlduxZ6s9eBMagUAw1Na8LGMIu5rcIGOqUBrZFRKbgxOe9Q08Mem4WaWzdAJwMioebUGRpOwKgZl%2F%2BjqydOTUiUfT%2BgtodVSJpNqKfB4a1uUZySjd8Nz8Pxi%2BhXSO8Xjlx6Nf99kAgPjM9LBxb4w%2FWrfjwwxtFyUfzIJXb%2BIwUKEl2gEd1MKr3P6WDhS4SMiI%2BnqfJL7pAUcAO9fqcF22K53%2F2h%2FVs5EMobyFS5m6tdrR3PflMCZMBZsiNQtQSa&X-Amz-Signature=656c512cd3f59615b8844c85acf428f41f855ab33f0ce2087dd431f1198b327d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
