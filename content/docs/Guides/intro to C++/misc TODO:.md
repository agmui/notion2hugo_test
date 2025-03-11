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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSXNABY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCsZHErP4Mll4dL%2B7imnxqjvjjmOnvCeVwR5KsV7A%2BwlgIgMFpSl%2FAX1qicDvxi6YU9wVI5sOIzdx4jwF9LK1ky%2FOQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIxAAlDgs529csGJyrcAz5CdRcH3dboVuvY500eJukP7LxaFGG5ubLxrDbKKWeBOU75nc%2B17f5be%2FWlqIm0pQaje1pgY1VvxSKLV6cmbTP8wubEGBd2cpSlokoYN%2BfiRxf5kOugcYS6K102xyW0t225fBFfZPBRSueqeF%2BtLycRlKsQ%2FbsJT1JdzuTksrtE0xCGrA2F6PtFWJLfsd9FE0dWCBGfWMuiD8vFyJe6jsaN06YfC53AxFURiRKjFCqL9Tra808CyvFIiHVD4W0ydIFZ5gSseXVJ9a2zTInd52oQCSPnSeINu5WhREUYTKatBZmhc6T96ZakavJkma74vJsY23Hy%2FwV59EJyaiXu4%2B3kD4MTI1HHXbjmsHMw%2FecD%2Bo4kfZXdvMj2x1tjp36udY7U4CTllB3R1Ax3ACPTYfhR%2Bx7iDcu%2BRSNNY45bXj4Fa0m8TBJ73bEtUY9NGSvBKH9bo5CjWNgrNhPCC%2BUJXg7DlVbucE2A3vKb4BdX%2FcgDrT29VSiFC5GVfX93wpfK79iCcalZYT%2Bk8FjjW%2BCh6bF8AGpFx06w5NrIhfJ%2BzuQJlKWKMhAYUTcEAe%2F2K3%2BTqtMuad%2FBJnwdsh1fYq%2F5FCODemMTMzMl205pGc7B5rUZxJYkO3f%2FilXmC4kLMOSuvr4GOqUBMXc5gfonNrBPdsoFZzmTCPCeafDfQ9fRQPKtGR%2B6navB%2BelUU1ZucS2KvJlQBUx1RcuoqgYpMJZ4VWKC8Sk0W9yGYrAVvxqVsHCwT06THdlI5XUiczFY7eO4Y9A7XJ2b2HN2CZ7GfcqzCJDJGoDQdrJB%2FjdOctEz%2FNJaVKcIhhTjuYZY9jcpwQa01biUC%2BcSgYhRP67FJ4%2BOUwhhWLEpAN7bOJ3T&X-Amz-Signature=7049e54622938a2e7837f5375d33bf34f7a1d9ea7daeb298f19cdf8c068c1c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSXNABY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCsZHErP4Mll4dL%2B7imnxqjvjjmOnvCeVwR5KsV7A%2BwlgIgMFpSl%2FAX1qicDvxi6YU9wVI5sOIzdx4jwF9LK1ky%2FOQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIxAAlDgs529csGJyrcAz5CdRcH3dboVuvY500eJukP7LxaFGG5ubLxrDbKKWeBOU75nc%2B17f5be%2FWlqIm0pQaje1pgY1VvxSKLV6cmbTP8wubEGBd2cpSlokoYN%2BfiRxf5kOugcYS6K102xyW0t225fBFfZPBRSueqeF%2BtLycRlKsQ%2FbsJT1JdzuTksrtE0xCGrA2F6PtFWJLfsd9FE0dWCBGfWMuiD8vFyJe6jsaN06YfC53AxFURiRKjFCqL9Tra808CyvFIiHVD4W0ydIFZ5gSseXVJ9a2zTInd52oQCSPnSeINu5WhREUYTKatBZmhc6T96ZakavJkma74vJsY23Hy%2FwV59EJyaiXu4%2B3kD4MTI1HHXbjmsHMw%2FecD%2Bo4kfZXdvMj2x1tjp36udY7U4CTllB3R1Ax3ACPTYfhR%2Bx7iDcu%2BRSNNY45bXj4Fa0m8TBJ73bEtUY9NGSvBKH9bo5CjWNgrNhPCC%2BUJXg7DlVbucE2A3vKb4BdX%2FcgDrT29VSiFC5GVfX93wpfK79iCcalZYT%2Bk8FjjW%2BCh6bF8AGpFx06w5NrIhfJ%2BzuQJlKWKMhAYUTcEAe%2F2K3%2BTqtMuad%2FBJnwdsh1fYq%2F5FCODemMTMzMl205pGc7B5rUZxJYkO3f%2FilXmC4kLMOSuvr4GOqUBMXc5gfonNrBPdsoFZzmTCPCeafDfQ9fRQPKtGR%2B6navB%2BelUU1ZucS2KvJlQBUx1RcuoqgYpMJZ4VWKC8Sk0W9yGYrAVvxqVsHCwT06THdlI5XUiczFY7eO4Y9A7XJ2b2HN2CZ7GfcqzCJDJGoDQdrJB%2FjdOctEz%2FNJaVKcIhhTjuYZY9jcpwQa01biUC%2BcSgYhRP67FJ4%2BOUwhhWLEpAN7bOJ3T&X-Amz-Signature=d339b2ba6d34b907498ab476e0c85d5ee59583326832fed81e1a0242c25c5fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
