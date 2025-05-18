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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZ4P4R4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNarmqul%2FsxzZc%2FGXs%2FdnrU%2FjCR%2BNSFyX7faaYg1ghwIhAK8owEY5deLKmfrGppkiudB%2FRDs3YMtkbAE5EC6QuM5jKv8DCHsQABoMNjM3NDIzMTgzODA1IgyrRVxxDkPCN6UrDjQq3APORR3%2BzazS2PGMTfXq5g1vG0P342oDKdYLZjYPzfngttyMguCfwLr7hIbQ2DrpjsAaD7ZwyoCtvaqqVivGbcAcz2RI7s27g9ufbGuhlsO4dOomdlklMYxiBRjlv7FRf9JJpECNGDhdfG%2Bm56cWKfgjL68wz9racvzHAy1CFpXoJNGvVMAa2ENCdOvpvrylpF7ma5JXMs1At7o9nxhTiamNXAzK74OGcJqv4nmHbOykHOgYbIuICJ%2Fk%2FWJgOBfRxp5k3J9VNdAKVooueemAgxEoVlh2vD7goAO3gFGRpZNb03sul0hv8U7fk2Pjg08sy5Z5xDsOoW5tN1d10EitPFwz2VDy6%2FIomg%2BFxDRVpqkibyK%2BYrpPrEYoTfDDlVq9aL758nDKVks5oSOtu4TCn3Ej2hyQTW9Wg7BK0WMHIHyxarCtgHzSFyjd%2FzH9ixmQjqFrb0l%2F5JxCiPkgszVNGcmRBNCtWYASge0%2F4pJKmQoA%2BMjoMVmWDUwv%2F9mX5ruJ4I6NcKf0wKM8OfZ3UiUG4HlkNmoYDb8t7Q3tGfbWdnZHPd4BZQSl8oLTjUJ4f3hOIIf79wsRpNOABFjDQZEpT5Rnx3FrJqWRIjKTVES6xkFBCJARRO%2Fr2N9M%2Bto%2BljDTwajBBjqkAev77UTpkc2F7scAwXnNLLY0SD4bWrTAZI%2BOGqhaPruMF6yb8BH5CHJgm7bDVocE93dOkfiPGiUKQP7E3DNvjU1KgPkfdCzHp2NVuZhVlgFOr4YGhIOvbj6b9aBfjZzGMJFIwiHF4vAA6zakX%2BLNBeEPiycUVrSdgaaFOQwOGKmjRRGhzT3VVCYRCrFk5haL%2FpHSTu6K6SUqytBsyqOQ0JDdVuGP&X-Amz-Signature=cfc3771720ea700017fbcda415152e72bec24b11cc2df61aa51bcdae5bea418b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZ4P4R4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNarmqul%2FsxzZc%2FGXs%2FdnrU%2FjCR%2BNSFyX7faaYg1ghwIhAK8owEY5deLKmfrGppkiudB%2FRDs3YMtkbAE5EC6QuM5jKv8DCHsQABoMNjM3NDIzMTgzODA1IgyrRVxxDkPCN6UrDjQq3APORR3%2BzazS2PGMTfXq5g1vG0P342oDKdYLZjYPzfngttyMguCfwLr7hIbQ2DrpjsAaD7ZwyoCtvaqqVivGbcAcz2RI7s27g9ufbGuhlsO4dOomdlklMYxiBRjlv7FRf9JJpECNGDhdfG%2Bm56cWKfgjL68wz9racvzHAy1CFpXoJNGvVMAa2ENCdOvpvrylpF7ma5JXMs1At7o9nxhTiamNXAzK74OGcJqv4nmHbOykHOgYbIuICJ%2Fk%2FWJgOBfRxp5k3J9VNdAKVooueemAgxEoVlh2vD7goAO3gFGRpZNb03sul0hv8U7fk2Pjg08sy5Z5xDsOoW5tN1d10EitPFwz2VDy6%2FIomg%2BFxDRVpqkibyK%2BYrpPrEYoTfDDlVq9aL758nDKVks5oSOtu4TCn3Ej2hyQTW9Wg7BK0WMHIHyxarCtgHzSFyjd%2FzH9ixmQjqFrb0l%2F5JxCiPkgszVNGcmRBNCtWYASge0%2F4pJKmQoA%2BMjoMVmWDUwv%2F9mX5ruJ4I6NcKf0wKM8OfZ3UiUG4HlkNmoYDb8t7Q3tGfbWdnZHPd4BZQSl8oLTjUJ4f3hOIIf79wsRpNOABFjDQZEpT5Rnx3FrJqWRIjKTVES6xkFBCJARRO%2Fr2N9M%2Bto%2BljDTwajBBjqkAev77UTpkc2F7scAwXnNLLY0SD4bWrTAZI%2BOGqhaPruMF6yb8BH5CHJgm7bDVocE93dOkfiPGiUKQP7E3DNvjU1KgPkfdCzHp2NVuZhVlgFOr4YGhIOvbj6b9aBfjZzGMJFIwiHF4vAA6zakX%2BLNBeEPiycUVrSdgaaFOQwOGKmjRRGhzT3VVCYRCrFk5haL%2FpHSTu6K6SUqytBsyqOQ0JDdVuGP&X-Amz-Signature=5af796894290beaa78609ed3e6c4ee87c7b07971dc19824bc7823a2716b9c92e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
