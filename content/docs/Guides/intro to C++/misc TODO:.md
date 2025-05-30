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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JRL4BF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQjtYeAwAX1q%2FjVV4L7oneeAwV3kSAZa4ZjxN0pqd9KAiARVo8q1hClzN22e3T3%2FQV1Nm8HIFf2VKaVxh3xgeTlnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxJZs8vMwoYKSqXb%2FKtwDkwLXrsNR4fhPkSOmvHXcq4vixbgEMJYjq3jCGYwBdAyol4H%2BZ2KXLMIBWbM68sIu8BY%2BmFWvGJgcv8vn9%2F58LP2GRDJRhNbgRA1Hg6brbW9GOfGcmFQGwfQNrL9y4FhaiL2vyHoTFyQeeeH78lP0dh6HgUKEqxOOQGFnErmrKiXkAPObuxElXsYrXPNSsb1s849II9q298WwlCSNuq%2F6McphRrGsEuIQvwU50%2FjrM6Ejfg2PGVZVoo1nFtEeanMR6gZx9rq%2BnLKdeo0h93q5BR23Vwq6QczKAenpO%2BFDQn2xRJGiVi6gTnzs%2BzabnYQQVaOg0pp29CP6mUSdg2qnFkwfmkXsJ0DfldXcJ1dr5oMlyBfF25T1%2BYwwKouT8mqWz15OsNKMhfLqlyMxbYX2P0%2FUC%2BBjNgJWDw91mjm91eDsY4QunsWQX0YS9aeDOrd1WrRFz7dGogFtlWkt0xcwaU2p1hYOn9ig8qWsvSShGijo0aoq9gjV6Bt1Da7TBdD7f6nr5FEUsRqttGPdJjHgPHgGHvcP9h5cFWVlWTFLUvwDhkhCGBtCRSjSR%2BBVa%2FAd6HVCw9mTxo7Uh4nvjJyJlCmGfDNizLjT5uBipMn46KO5jY2%2FkEpwIH60x4swlKbowQY6pgELL5tfqCjG1sLKW8oJW0UYwttxFkBSbynvIzNr3e77sDF9HCcxG17%2Bz5Hb9Ewd8bpETTcVAGwZirty6jnPcaaCAppU8dL1DQj6dCMvxQkl9MCK2k5fDjhwekDE%2Fp9L7q1mN5rBlyPdJR1QVB%2FbBOUv86s3kCz%2BZDKaDpRhiUjha94CJdkJ4mgLKoy62cQNrXsxT%2BpgZ5K9zLahew8A%2BWjQj9pVKIQf&X-Amz-Signature=f41297c07d36d37245124bb0d239a67bb13dba4bbe70d533a84f08820795bbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JRL4BF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQjtYeAwAX1q%2FjVV4L7oneeAwV3kSAZa4ZjxN0pqd9KAiARVo8q1hClzN22e3T3%2FQV1Nm8HIFf2VKaVxh3xgeTlnyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxJZs8vMwoYKSqXb%2FKtwDkwLXrsNR4fhPkSOmvHXcq4vixbgEMJYjq3jCGYwBdAyol4H%2BZ2KXLMIBWbM68sIu8BY%2BmFWvGJgcv8vn9%2F58LP2GRDJRhNbgRA1Hg6brbW9GOfGcmFQGwfQNrL9y4FhaiL2vyHoTFyQeeeH78lP0dh6HgUKEqxOOQGFnErmrKiXkAPObuxElXsYrXPNSsb1s849II9q298WwlCSNuq%2F6McphRrGsEuIQvwU50%2FjrM6Ejfg2PGVZVoo1nFtEeanMR6gZx9rq%2BnLKdeo0h93q5BR23Vwq6QczKAenpO%2BFDQn2xRJGiVi6gTnzs%2BzabnYQQVaOg0pp29CP6mUSdg2qnFkwfmkXsJ0DfldXcJ1dr5oMlyBfF25T1%2BYwwKouT8mqWz15OsNKMhfLqlyMxbYX2P0%2FUC%2BBjNgJWDw91mjm91eDsY4QunsWQX0YS9aeDOrd1WrRFz7dGogFtlWkt0xcwaU2p1hYOn9ig8qWsvSShGijo0aoq9gjV6Bt1Da7TBdD7f6nr5FEUsRqttGPdJjHgPHgGHvcP9h5cFWVlWTFLUvwDhkhCGBtCRSjSR%2BBVa%2FAd6HVCw9mTxo7Uh4nvjJyJlCmGfDNizLjT5uBipMn46KO5jY2%2FkEpwIH60x4swlKbowQY6pgELL5tfqCjG1sLKW8oJW0UYwttxFkBSbynvIzNr3e77sDF9HCcxG17%2Bz5Hb9Ewd8bpETTcVAGwZirty6jnPcaaCAppU8dL1DQj6dCMvxQkl9MCK2k5fDjhwekDE%2Fp9L7q1mN5rBlyPdJR1QVB%2FbBOUv86s3kCz%2BZDKaDpRhiUjha94CJdkJ4mgLKoy62cQNrXsxT%2BpgZ5K9zLahew8A%2BWjQj9pVKIQf&X-Amz-Signature=cb0314dbb2bd0109a43895d4d6b6178f22f9a89ef61a22d761c9bef45c5300ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
