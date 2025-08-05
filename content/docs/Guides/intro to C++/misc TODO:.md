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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TLV2LTP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH5qoduHn0I8KDMC30e8kwMg%2BFDkR8AmFNUxTGRImMeIAiAYT1APZVHz58jAV%2B0wl%2F3onUMTY0N%2F1AQ%2FzgNx85qRaCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMqE6MZCxuo9xkws4TKtwDRPNJX0gTG825xwifDNoHYtO%2B%2B7nb6jOAYRXh2WcN0%2FJey%2BC52q0pFz%2F5%2BpCLuqLqXP2X4OUHrzVjACyua0aOfWyfjrQ37LMQbN9NnUQZtGpLnKGjtRDryhG15NsCF5JncuHJpQokm1xjIVsm897Rikq2pAQpfFvW7V4pVQzAnMKVAOTHWTnYjkEEsWJJhonasEKNEHFzicNQA3lTKGlm8ROW%2BNH2yX%2Fp2BSi76EhspqgWZ%2FpwlBiyt6hcxFI199pG%2FIW0RxcobG08hab270bt7DRc1oYKWsktJPfxFl2flgh5Ya5IISIUvN%2Fkc2VgCK1lQp79fY%2BD%2BIUPcGt61dDnP8UZs%2FejbD9C6NPI17XpI%2B4eRNbCwxpQBq9flWJy%2FCYjGVcJfZXAx0S4vwlaJ%2BdqkKiHzb4R9pH8NNqd7P9vQj42pOsnrnxLBrZljQf3WEC%2BA4JT9tSMbbfP71JsFvT3OLE8Jrpo6XltHHdzz5J4hWkkXYkkD8S%2Bne17xyH7%2FmQp4jNEmOvC0FuYsWUA2IXq2m78AXLX5yeIIHEaLe7rd5CHvAL45psfaJckGpWe2yF1KkKUqX3EzO2RZo8TqEa%2F1vBD1G74Fvght81%2Bl9%2FVbej3j%2FIWeUwqnGdD%2FUwz4TIxAY6pgGtcN45msjmNVfBiaTjBs8KGz1pexP3BtYlG0q7%2BW4lKyr5%2B0dh4375ZcYtMrx92i7PYFuwCxKYSzGaXvBRRy2iixEVFgPDZwViMPQyaVVXjWIpar%2BDWhtmjibBe17LBA8dhUctzM6caiqy5fbMeH8soHyAevNxu9I1Ly94QK8wxgePj5h7KPrV7E8nLzjIvHXg1%2B1jglvhO9L6Z44wxVW6wmGfx%2Bib&X-Amz-Signature=36d62d1a913b41bd4e02abceb4594943ddae98c6b27fb20c76a8e63de02ee756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TLV2LTP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH5qoduHn0I8KDMC30e8kwMg%2BFDkR8AmFNUxTGRImMeIAiAYT1APZVHz58jAV%2B0wl%2F3onUMTY0N%2F1AQ%2FzgNx85qRaCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMqE6MZCxuo9xkws4TKtwDRPNJX0gTG825xwifDNoHYtO%2B%2B7nb6jOAYRXh2WcN0%2FJey%2BC52q0pFz%2F5%2BpCLuqLqXP2X4OUHrzVjACyua0aOfWyfjrQ37LMQbN9NnUQZtGpLnKGjtRDryhG15NsCF5JncuHJpQokm1xjIVsm897Rikq2pAQpfFvW7V4pVQzAnMKVAOTHWTnYjkEEsWJJhonasEKNEHFzicNQA3lTKGlm8ROW%2BNH2yX%2Fp2BSi76EhspqgWZ%2FpwlBiyt6hcxFI199pG%2FIW0RxcobG08hab270bt7DRc1oYKWsktJPfxFl2flgh5Ya5IISIUvN%2Fkc2VgCK1lQp79fY%2BD%2BIUPcGt61dDnP8UZs%2FejbD9C6NPI17XpI%2B4eRNbCwxpQBq9flWJy%2FCYjGVcJfZXAx0S4vwlaJ%2BdqkKiHzb4R9pH8NNqd7P9vQj42pOsnrnxLBrZljQf3WEC%2BA4JT9tSMbbfP71JsFvT3OLE8Jrpo6XltHHdzz5J4hWkkXYkkD8S%2Bne17xyH7%2FmQp4jNEmOvC0FuYsWUA2IXq2m78AXLX5yeIIHEaLe7rd5CHvAL45psfaJckGpWe2yF1KkKUqX3EzO2RZo8TqEa%2F1vBD1G74Fvght81%2Bl9%2FVbej3j%2FIWeUwqnGdD%2FUwz4TIxAY6pgGtcN45msjmNVfBiaTjBs8KGz1pexP3BtYlG0q7%2BW4lKyr5%2B0dh4375ZcYtMrx92i7PYFuwCxKYSzGaXvBRRy2iixEVFgPDZwViMPQyaVVXjWIpar%2BDWhtmjibBe17LBA8dhUctzM6caiqy5fbMeH8soHyAevNxu9I1Ly94QK8wxgePj5h7KPrV7E8nLzjIvHXg1%2B1jglvhO9L6Z44wxVW6wmGfx%2Bib&X-Amz-Signature=f4cf39cf0e3902b83249b8d039bd5e969492015aa71a3731e2bf42668c02e5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
