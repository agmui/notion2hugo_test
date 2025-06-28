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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPQA627%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeyWGRbnqg3BOurfZAFz1HFR6rZcufqLwrxTvu5uNtgIhAK6yUumG55GPeB7iOr7rgf8%2Fkjpeb1P8fsCBLKBT0rhqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Rj%2FGEWrmUvgEKaoq3AOiTi%2Fh5d3oFFAsPxI%2F%2BWbH2QEkD7GuxbrbtP%2FPYaP76IuKMPmqeXJ5L7%2FumM5R726%2Fz%2BZ2pRpXgMJ%2F%2BThJnlHNF5NcAI%2BBz7RoUtcUU2pGSAYi1QBXhENGbinO8%2BI4FVSskc9eLTebJBhxYLZIztI6x5jjlpUW1379jiTi5tfxZBEzpxVtOeubtw66gR7IzIPEImFOEitp1lDv00N7JQ3vag6ncqYnYgANydxlWYhIpAhuWt67P5pnyLQ56r8Ke%2F8KnyWywzoDqGf4P%2B1ayOCATmNgc0cEyMN3ESGPfEZ7RJ2UQSd6SYPOKzkyzkawvZzi41LK8ZWNVsNNAt92kY9mdlfSgEtCX0I4iPrgV2cO7aVBEZZf3iXS8CNHoG%2FlGwUevG6UamS4F5nZaE975zE07JgBG9Fp6rYECMguDk7C3TMG5De9LTSa5oscB0CVy38wSloM3DFcoE3BIHbLKRQxWyYE2I4CZ%2FEs0wU%2BI3dm0yFcIFli%2BgbwUdMvxFtuATNOFMhR5yWWkSwcKiquyBUHr7jxKqneX9PppKPcXivBapVljdSDg5VfoEtZWQRflGSBFAYZphr1vHAJOk9RrrbsC5i2VOy%2FgVoyrfLyyfPUSTvKleNfWFoCn1WIYTDgyv7CBjqkAWA8Uy5Z4wL0pTBiip3e9F9b7JL%2FU6rZ30TmfnymuIn%2BxohrIgn8F6EuwfDiCFFk5U0zTQgGB2T1dJzdPBFbZt%2BhGOXsZa2UO5BLlofCrj5I5WmCgAZLnVz6Dx3rDrcFPhuF9z1b19U2wsWu6v6cWTr1FrxHfZfuR9FJ1sf3wc08K30dfXq8r5TLLPLojnqdGsm4ljPz%2FVAAILqsl31sP1kkcNvP&X-Amz-Signature=f50413e0dcd225f4d3ddbda0c180e6361bbac81b99e6f31442f221bbc1697a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPQA627%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeyWGRbnqg3BOurfZAFz1HFR6rZcufqLwrxTvu5uNtgIhAK6yUumG55GPeB7iOr7rgf8%2Fkjpeb1P8fsCBLKBT0rhqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Rj%2FGEWrmUvgEKaoq3AOiTi%2Fh5d3oFFAsPxI%2F%2BWbH2QEkD7GuxbrbtP%2FPYaP76IuKMPmqeXJ5L7%2FumM5R726%2Fz%2BZ2pRpXgMJ%2F%2BThJnlHNF5NcAI%2BBz7RoUtcUU2pGSAYi1QBXhENGbinO8%2BI4FVSskc9eLTebJBhxYLZIztI6x5jjlpUW1379jiTi5tfxZBEzpxVtOeubtw66gR7IzIPEImFOEitp1lDv00N7JQ3vag6ncqYnYgANydxlWYhIpAhuWt67P5pnyLQ56r8Ke%2F8KnyWywzoDqGf4P%2B1ayOCATmNgc0cEyMN3ESGPfEZ7RJ2UQSd6SYPOKzkyzkawvZzi41LK8ZWNVsNNAt92kY9mdlfSgEtCX0I4iPrgV2cO7aVBEZZf3iXS8CNHoG%2FlGwUevG6UamS4F5nZaE975zE07JgBG9Fp6rYECMguDk7C3TMG5De9LTSa5oscB0CVy38wSloM3DFcoE3BIHbLKRQxWyYE2I4CZ%2FEs0wU%2BI3dm0yFcIFli%2BgbwUdMvxFtuATNOFMhR5yWWkSwcKiquyBUHr7jxKqneX9PppKPcXivBapVljdSDg5VfoEtZWQRflGSBFAYZphr1vHAJOk9RrrbsC5i2VOy%2FgVoyrfLyyfPUSTvKleNfWFoCn1WIYTDgyv7CBjqkAWA8Uy5Z4wL0pTBiip3e9F9b7JL%2FU6rZ30TmfnymuIn%2BxohrIgn8F6EuwfDiCFFk5U0zTQgGB2T1dJzdPBFbZt%2BhGOXsZa2UO5BLlofCrj5I5WmCgAZLnVz6Dx3rDrcFPhuF9z1b19U2wsWu6v6cWTr1FrxHfZfuR9FJ1sf3wc08K30dfXq8r5TLLPLojnqdGsm4ljPz%2FVAAILqsl31sP1kkcNvP&X-Amz-Signature=1c6fe35ee56547cbfdb73b50a10ddfac773d7be5b21bf7409269840c2dfe3292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
