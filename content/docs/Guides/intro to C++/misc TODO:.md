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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OGEU5K%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAronaCiDFA7qH7SRjmYBg%2BzY51BWxB0jaW7AmHH9LNOAiAekJXuzQIwmx8M%2BaWGov3Xas8V2dzd0oqh9TC4GfRlbCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQ%2BhTQLarhLJnEoWKtwD0wapU0i6vyGgzhH5o2azWgy%2ByR%2B6cM9RC0Yj2%2FvjpoFnkMBzr64NVe2qdKsu1RA04bBOGdxy1%2Ff3%2FbRNX2kHaT0eXFuNRLaLCxoLPSHsUcB6n3gMYvjLeYafD4yQkwqg48S9wvh4yQ2vNNtpVMOTJd9%2B83F2Vj3eajNwCK3Gazf1A%2Fq6JEavVIntBnYuabvkTON6a24r%2BgWSRLTttQkohbLHV1uN4aeulvG1q4IrvXPPOk1UhPV2LAsseRSFGpNEWNH17evbmxMsCbB5HpxhLvMaG25DgqaTrCOZt%2BoOupvCyrHPlULJLQj%2FuuBKCMcvg3OBRqis1taBVz4BuRt%2FfgfzHdRx6F7Tn2YMj3MoJx%2BRry5oKeSDtO3am49qFRjovkTupi5x6BaHhrOcZMsVXmw3EX6WpQxVgJVh6D4HcRPB7CSdcwCH2vjOwSZ9pnk4pWprZq60WIzmWhV1efFRklIkbiDX4bh6xjUvizBsIXdglKI7cAalBDjTILTrEkmsGDePRS%2BgGhJ%2FWDIRfRNteclDRoeefuTNnoVbUJaEK2F6JT5JGmXr3SRRUvIRZJIxvRQyRlAsA2cDcUomnsIBwt%2BNXd8BkFtaO%2FJxJXnwmgqNuFzXWFhl9a526hUw0puxxAY6pgH8U4El8mCmnZiyzRdgNMmn%2Fsl6zANxWEKtn84EsiZ4iHYiNcg4MHNL1%2BVl93r04XSaD%2BKojRQNFTVz8F00PqOP8xfx%2FI7Y45E5DWf%2FjMrpyghhfKsdblTwLnPz8ynxDdym0%2FagqE6W2fN40VtR7DOZsOzHm9rkav0eJdaVy0tVwzZC7wQfamBBX9Z4%2FFH9L14tScEr5wpz68RxTZBfOTfgwj1efHZi&X-Amz-Signature=a543e7cbd8125649c99ddde0b6fb1c97e9bfe8e57bd5b3e88782e6285ef7311b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OGEU5K%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAronaCiDFA7qH7SRjmYBg%2BzY51BWxB0jaW7AmHH9LNOAiAekJXuzQIwmx8M%2BaWGov3Xas8V2dzd0oqh9TC4GfRlbCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQ%2BhTQLarhLJnEoWKtwD0wapU0i6vyGgzhH5o2azWgy%2ByR%2B6cM9RC0Yj2%2FvjpoFnkMBzr64NVe2qdKsu1RA04bBOGdxy1%2Ff3%2FbRNX2kHaT0eXFuNRLaLCxoLPSHsUcB6n3gMYvjLeYafD4yQkwqg48S9wvh4yQ2vNNtpVMOTJd9%2B83F2Vj3eajNwCK3Gazf1A%2Fq6JEavVIntBnYuabvkTON6a24r%2BgWSRLTttQkohbLHV1uN4aeulvG1q4IrvXPPOk1UhPV2LAsseRSFGpNEWNH17evbmxMsCbB5HpxhLvMaG25DgqaTrCOZt%2BoOupvCyrHPlULJLQj%2FuuBKCMcvg3OBRqis1taBVz4BuRt%2FfgfzHdRx6F7Tn2YMj3MoJx%2BRry5oKeSDtO3am49qFRjovkTupi5x6BaHhrOcZMsVXmw3EX6WpQxVgJVh6D4HcRPB7CSdcwCH2vjOwSZ9pnk4pWprZq60WIzmWhV1efFRklIkbiDX4bh6xjUvizBsIXdglKI7cAalBDjTILTrEkmsGDePRS%2BgGhJ%2FWDIRfRNteclDRoeefuTNnoVbUJaEK2F6JT5JGmXr3SRRUvIRZJIxvRQyRlAsA2cDcUomnsIBwt%2BNXd8BkFtaO%2FJxJXnwmgqNuFzXWFhl9a526hUw0puxxAY6pgH8U4El8mCmnZiyzRdgNMmn%2Fsl6zANxWEKtn84EsiZ4iHYiNcg4MHNL1%2BVl93r04XSaD%2BKojRQNFTVz8F00PqOP8xfx%2FI7Y45E5DWf%2FjMrpyghhfKsdblTwLnPz8ynxDdym0%2FagqE6W2fN40VtR7DOZsOzHm9rkav0eJdaVy0tVwzZC7wQfamBBX9Z4%2FFH9L14tScEr5wpz68RxTZBfOTfgwj1efHZi&X-Amz-Signature=4771f06b7118e8cbfb7a63b78604f1b0be8ab726f67c0c451d01c1f908dc130e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
