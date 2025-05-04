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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLICWBK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCr2rMoXfvq3etVNpQWrQvsns%2BKfV4pa6pfO4TedfRINwIhAO7eXxR%2BHeImPJCd2%2FY32cLq95YpVfoF5fMUB2d2LGS1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igyq%2B64wXW8v1f5WaQcq3AO96yommNJ2ZbH0S0MgyJlFGBWc%2FU%2Bbd0PvYLADj6ZBDZg0lTBTXNvGA2ExAKEybSqVY7c90wc1dgFtn52rzPpx5dfJfoOiNw0fhRZ13v6YWJxJIphRxCOfW5zm3JiqMN9Hoo7qnroLcBpT8kVgNB3%2Fv8XNnQOj8wth0JswBngLTc3r%2BBzyblIAmnmNI%2FI01G7Keho4aQi8VEwfy%2B1Nyn4WkrhqY3Ey7WdRjQu%2FxJ3GrDvXz4smp7PzodZ9FyNVRIB9KYKuK7%2B46REjhyr5EfpNcH7gOogK24BTzBfBGdnvvy0ilVelgFFUunFWLZ5Iur%2FNCbFyft7BidopuLdJtGaKAzkD%2Fcq2AeAocssbbdDRivrQPidiDkSA31uQy5B9sSDj5urcFKpY0z22FKlayJHZBsLkbCY57igE3oarB56umHK45ii3JRou7UOMpyBhBpvs4ZI8r0%2FmvY8nnVdBK5LoXcAdR%2FW%2BdHHAtT9FZNnCfhNvSUryiMowM8M%2BBKiGeztrucZu3NUHsmh%2BJr%2BJHltIWgBcaw1Lsy004ZesE16IAdcYuhjgeiejt1fKUyx0NYyCYHp04wdQDXYjkIfSAC%2Bq08H%2BTLTkNWzrwEYwtXHiogXtOw%2F2yN%2FZiPeM4TC4rN%2FABjqkAfjTD46c%2FTdsX29RRMncGU2k9AINJ1QkVSadRIuQNei%2ByXXylixUc4fFkHclUt7QaitEAG5dUj6WVlJG1a8CLfw%2BjDk%2BWSzQu97jMpmG7QvHsEKCTgKUvMCWgndwnr0z8aioZHrEQC1BIvGRTWVNDNH1uulJMvCg7Yj%2F7gWFqqDM0uVzbV9gBoGGopkcYS6hEc2SG3R5LAijfIwVUnffxYGsV5E6&X-Amz-Signature=06d6f3e527929c71bdbaf67ee4555d31470eb0df4d6c42ffacb3e685c25cefe2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLICWBK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCr2rMoXfvq3etVNpQWrQvsns%2BKfV4pa6pfO4TedfRINwIhAO7eXxR%2BHeImPJCd2%2FY32cLq95YpVfoF5fMUB2d2LGS1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igyq%2B64wXW8v1f5WaQcq3AO96yommNJ2ZbH0S0MgyJlFGBWc%2FU%2Bbd0PvYLADj6ZBDZg0lTBTXNvGA2ExAKEybSqVY7c90wc1dgFtn52rzPpx5dfJfoOiNw0fhRZ13v6YWJxJIphRxCOfW5zm3JiqMN9Hoo7qnroLcBpT8kVgNB3%2Fv8XNnQOj8wth0JswBngLTc3r%2BBzyblIAmnmNI%2FI01G7Keho4aQi8VEwfy%2B1Nyn4WkrhqY3Ey7WdRjQu%2FxJ3GrDvXz4smp7PzodZ9FyNVRIB9KYKuK7%2B46REjhyr5EfpNcH7gOogK24BTzBfBGdnvvy0ilVelgFFUunFWLZ5Iur%2FNCbFyft7BidopuLdJtGaKAzkD%2Fcq2AeAocssbbdDRivrQPidiDkSA31uQy5B9sSDj5urcFKpY0z22FKlayJHZBsLkbCY57igE3oarB56umHK45ii3JRou7UOMpyBhBpvs4ZI8r0%2FmvY8nnVdBK5LoXcAdR%2FW%2BdHHAtT9FZNnCfhNvSUryiMowM8M%2BBKiGeztrucZu3NUHsmh%2BJr%2BJHltIWgBcaw1Lsy004ZesE16IAdcYuhjgeiejt1fKUyx0NYyCYHp04wdQDXYjkIfSAC%2Bq08H%2BTLTkNWzrwEYwtXHiogXtOw%2F2yN%2FZiPeM4TC4rN%2FABjqkAfjTD46c%2FTdsX29RRMncGU2k9AINJ1QkVSadRIuQNei%2ByXXylixUc4fFkHclUt7QaitEAG5dUj6WVlJG1a8CLfw%2BjDk%2BWSzQu97jMpmG7QvHsEKCTgKUvMCWgndwnr0z8aioZHrEQC1BIvGRTWVNDNH1uulJMvCg7Yj%2F7gWFqqDM0uVzbV9gBoGGopkcYS6hEc2SG3R5LAijfIwVUnffxYGsV5E6&X-Amz-Signature=15c5f74ca52da922ff6d9960b876b44874addc63ef62e7d0a827a72ccf9215f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
