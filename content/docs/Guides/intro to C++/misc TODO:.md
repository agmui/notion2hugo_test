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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GQAXHC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6x5C3x6zj%2FM7gdJhZu7wDUZdjpynnC1wHJ9wgH5608AiArrpF7kmchub8FbyoBC2j1rMZFXzxLYuUekXnSsO6%2BrSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsWaZ0ZLonMu84RA2KtwDVR7Y5rX9Vpcgc0rWqsuTc4kEK8NbkWilsfL76ipcVBlZiVvIOmcye5bF3lZSJPrGRwu4HBpeG0%2FUVWay5j7ZTkHEqAnW3fVwIbLVwIoDrUrlcTwb4zQNfiIl9j9WvD9QSnbr%2Br2s6wt9V9PzaobEsLT%2B0LnwGAUhMJ%2BeU%2BOEG19OCZNHLmESrFQlj8dbyoIu%2FA%2Bn2EWOWw63O9PXv83U8fjxuGF%2Fc5%2Bk5GG0atG7tzprHK3%2BpMsKg0zPnWrPmuwoOZ4atH4aesPkOZ5I3ilEx6kP2P5w74nhOQ%2F5k8xDp8G5oHUIgwW1cqsBgyLXeIfH4dbRLPhCqhqFsl2pWri2jwHniwY9K84QdXyUZiWd5T9iV3nFt0fidNZvzQ6u7aS%2FSp%2Fclbj6qq5DQCwtxvtKNytaInbl53iPvcH4XO9VxU1Ue5Ng6KgYU4vio7e22p%2FksJM2fV0T3U%2B6%2BZN3CbGCsTrU2XVAdADIUrfxIkG6vBzNrE6q3zoqu3x2sXkpP8A6GmJYwzv2xVSXzqn3nSBn8wlZ5JPf1C%2FFP3ClkutDwyBiYznlSuYgy6ATFu%2BJIv%2BMWAWv%2FAB0Nh31ImkSWQdNBEgnJXfxfgYTP5jXmjaW4sFuU044OFfeeVoUaPUwsqecwQY6pgEQzeRealuFJSqYEMbZW9nNK%2F1pE7Y%2B%2FYuFxzmShhee2IUODtKcdW2rHI0rNBEqLT3KD%2BxF%2B%2B5L0xoQ6yy0r3enxPtL7lcQPpkF%2FUqjnLzzXQLnvbkWJaAi7nCSfuZIHtfP%2BJdD9GoBDzJ3L3wRdi8dvo%2Fu9i6MuUtGSBjWcNFoG3e4ez6OW6KMBsqTldlSraKCWoRbtsx1i3ThVY2ASIZstMIQHh95&X-Amz-Signature=4433578d290d7976223a7476c9977d853411449c666429e3565259be567b7e61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GQAXHC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6x5C3x6zj%2FM7gdJhZu7wDUZdjpynnC1wHJ9wgH5608AiArrpF7kmchub8FbyoBC2j1rMZFXzxLYuUekXnSsO6%2BrSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsWaZ0ZLonMu84RA2KtwDVR7Y5rX9Vpcgc0rWqsuTc4kEK8NbkWilsfL76ipcVBlZiVvIOmcye5bF3lZSJPrGRwu4HBpeG0%2FUVWay5j7ZTkHEqAnW3fVwIbLVwIoDrUrlcTwb4zQNfiIl9j9WvD9QSnbr%2Br2s6wt9V9PzaobEsLT%2B0LnwGAUhMJ%2BeU%2BOEG19OCZNHLmESrFQlj8dbyoIu%2FA%2Bn2EWOWw63O9PXv83U8fjxuGF%2Fc5%2Bk5GG0atG7tzprHK3%2BpMsKg0zPnWrPmuwoOZ4atH4aesPkOZ5I3ilEx6kP2P5w74nhOQ%2F5k8xDp8G5oHUIgwW1cqsBgyLXeIfH4dbRLPhCqhqFsl2pWri2jwHniwY9K84QdXyUZiWd5T9iV3nFt0fidNZvzQ6u7aS%2FSp%2Fclbj6qq5DQCwtxvtKNytaInbl53iPvcH4XO9VxU1Ue5Ng6KgYU4vio7e22p%2FksJM2fV0T3U%2B6%2BZN3CbGCsTrU2XVAdADIUrfxIkG6vBzNrE6q3zoqu3x2sXkpP8A6GmJYwzv2xVSXzqn3nSBn8wlZ5JPf1C%2FFP3ClkutDwyBiYznlSuYgy6ATFu%2BJIv%2BMWAWv%2FAB0Nh31ImkSWQdNBEgnJXfxfgYTP5jXmjaW4sFuU044OFfeeVoUaPUwsqecwQY6pgEQzeRealuFJSqYEMbZW9nNK%2F1pE7Y%2B%2FYuFxzmShhee2IUODtKcdW2rHI0rNBEqLT3KD%2BxF%2B%2B5L0xoQ6yy0r3enxPtL7lcQPpkF%2FUqjnLzzXQLnvbkWJaAi7nCSfuZIHtfP%2BJdD9GoBDzJ3L3wRdi8dvo%2Fu9i6MuUtGSBjWcNFoG3e4ez6OW6KMBsqTldlSraKCWoRbtsx1i3ThVY2ASIZstMIQHh95&X-Amz-Signature=e5d026de999d16a316e2033bfcd7b4b1e540e4a7dd538b4c240740bba4a5c768&X-Amz-SignedHeaders=host&x-id=GetObject)

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
