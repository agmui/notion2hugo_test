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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBM6KWQO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGZAymKNkx2sjFQec%2Bnfq3%2BJIfstwogU6loJq7UETCBsAiEAw9CFFKtZJcf3MPNSknlNiSq7k7Lzx2fFjmhhYiH%2BgKwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcryoTXmtW0r%2B5J3CrcA5pxTF6lkvYXpTThV55%2FtJXSCqX6xH%2BPGGaPe4GEwhjQxQz0v5J1k2BfVGrC%2FxibKJrHdip0mqI9JEoBNedblqWsXQ9zW%2F3kYM%2BqHeg%2FYEuzsz%2F0QLoGNy6HDe4DJbrGvSsgTEDpSxMPbxozsqckh%2BirwC%2FUTUuKd80xlFbO8htCtkv71y5an%2Bvr3UmYI4RkqagoAKwidyTDog2WK1AwRLH7C2dXjjRQQtm421fRGrpNlvdBkSJMyt7BIZttNFPKghz1UgunnKwWXHexTPlHDxO2u64tZ%2BlADE1YJEoRE0PeAdQCkygpWoyWtnB0lqEjbxmPTiYQwxo8oP3BI%2Bb%2BEVOJ%2FuR9EvB8ulIKk6EcCuRyHF9vQPz31J6ujYhN2Zm0mDJrAi7zflXfHPldARYSIWMXPfpwLrlnd1h7NY2hFuzfATx9nyVowV3uDpxG4dj6IDCpayeBU5NwKmGFSytycuBbVHF000jf%2BN%2BKweKW3a6A2Qs8iyVJ5ctZ0q956cmadM4pEiiGilZ21XJCIRi3d8WwPFkobCQ3%2BSv%2B%2BBnEVPR%2BqEGxPTqkv5plevCVo%2B30uYX2s6yai5cgl4NS6isIqULMTFsrpXWFpSL4%2FgdAzJoqjFqJ7hWEJVrqDESoMMrI278GOqUBzAjXd4UC9uNkuBRfYRufDtI%2FoEucOw9fjk7iRE5noHQ1skZntyCqw5O52gzkY1AAoxZqA5%2BtAjEQqcbRCNspMNYwnk8ReYgSbp4TSioqHOPpjREZW25Uk8eJ%2F34jsZyLTfOyEHkBO%2BenNQfdUEesgXe640hwX1cr%2B0LpRPAZiVliJeOIao1COaDzr8F0K5TOG%2Fm6cl%2BCYnc9i7zJOlWrIEkmNg3p&X-Amz-Signature=4294e6c912781de06eb02013a6b4f5754ac97448f1eb02bb1968259e7ddf199c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBM6KWQO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGZAymKNkx2sjFQec%2Bnfq3%2BJIfstwogU6loJq7UETCBsAiEAw9CFFKtZJcf3MPNSknlNiSq7k7Lzx2fFjmhhYiH%2BgKwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcryoTXmtW0r%2B5J3CrcA5pxTF6lkvYXpTThV55%2FtJXSCqX6xH%2BPGGaPe4GEwhjQxQz0v5J1k2BfVGrC%2FxibKJrHdip0mqI9JEoBNedblqWsXQ9zW%2F3kYM%2BqHeg%2FYEuzsz%2F0QLoGNy6HDe4DJbrGvSsgTEDpSxMPbxozsqckh%2BirwC%2FUTUuKd80xlFbO8htCtkv71y5an%2Bvr3UmYI4RkqagoAKwidyTDog2WK1AwRLH7C2dXjjRQQtm421fRGrpNlvdBkSJMyt7BIZttNFPKghz1UgunnKwWXHexTPlHDxO2u64tZ%2BlADE1YJEoRE0PeAdQCkygpWoyWtnB0lqEjbxmPTiYQwxo8oP3BI%2Bb%2BEVOJ%2FuR9EvB8ulIKk6EcCuRyHF9vQPz31J6ujYhN2Zm0mDJrAi7zflXfHPldARYSIWMXPfpwLrlnd1h7NY2hFuzfATx9nyVowV3uDpxG4dj6IDCpayeBU5NwKmGFSytycuBbVHF000jf%2BN%2BKweKW3a6A2Qs8iyVJ5ctZ0q956cmadM4pEiiGilZ21XJCIRi3d8WwPFkobCQ3%2BSv%2B%2BBnEVPR%2BqEGxPTqkv5plevCVo%2B30uYX2s6yai5cgl4NS6isIqULMTFsrpXWFpSL4%2FgdAzJoqjFqJ7hWEJVrqDESoMMrI278GOqUBzAjXd4UC9uNkuBRfYRufDtI%2FoEucOw9fjk7iRE5noHQ1skZntyCqw5O52gzkY1AAoxZqA5%2BtAjEQqcbRCNspMNYwnk8ReYgSbp4TSioqHOPpjREZW25Uk8eJ%2F34jsZyLTfOyEHkBO%2BenNQfdUEesgXe640hwX1cr%2B0LpRPAZiVliJeOIao1COaDzr8F0K5TOG%2Fm6cl%2BCYnc9i7zJOlWrIEkmNg3p&X-Amz-Signature=8bcc10c57ccd3d90cab0d3e5d1b0e876de99dc1daa97bc4bbaea78b35a4146c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
