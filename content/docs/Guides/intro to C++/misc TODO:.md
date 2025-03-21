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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTOTVV3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHvZ8%2FDsFpA7V0Yt2dZ9WirZwq3oSM2ccAt1D9WIH2ZvAiBumlA5pqCIaF6HmzBkYa7%2BkZJXRUtUvVUn0XRiF5aGwCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRmTKG5Tf2mweeEtSKtwD8r%2B6RwH%2FuY2euyG2sdrEI6vUk6MaCd8StUIWuMQg7Bryfs7QbesA%2FTSvsxAU0F8acq0xK8SVURjiKWY%2FhGyFOfVnCZQPo2RxSANZL%2Bjaw7aU20w0JfVveAp%2Bi1%2BKXPUNnTep5AZmYrQPct0GfnJSZV%2B5ZU60mGuDaH1F4omX178RFXSwSoxO0rsiqOISPQInKTjmZex8uYY2eVP4z2v5Y3nxW8owJp0k%2Fy29gDISGVstuzEk%2FQRQF3uRMwKPPHFR3sRi%2Fst7OFweRybCHFsdjJZACAlN2drk9%2FMLUyg9dVJS%2B6PMLkC7uoS8ILLAVj1zSYpG2ieFSaF2abRRnBto1cv4EObXVDnWk2uBck1%2BwKsO2mFnboyb4H0Y%2FNFOblUiTpferHckTWAPYRYVTwopuJhQ4BvqHzyNPfi7oB2CdDEVxs%2FqJy4XGJVueJ9RMtca7oIP1lUcc9lJXdKC0%2Fog8GlOTOsoPuBofkISykH4rXfmiXb5quBRVyYedDC%2B2uNj2iGMLvywMMf9bUXVtONNlbbiCISlt28eyG3i%2BdFAduKdnCSXKtyAQRzFRdiMv%2FyeLJ7rsY5BcS5vyMFOtlSlsOfpHayWciRPPaHCUbVRorz%2BoGl8jEBnkwleq%2Bowl9jzvgY6pgFysvXeXauMhaNvfKaiBMT9I3mbijLPPtQ9Zuj2YjpIEOMinJJgoAB3OLx62yC3MtpW0eFYloxaCNVGTCJ2TqD0sXwH1RrraT9RTrYOOHhXPnHcMPhlBhkrSLsNIBZwJzOjTrnQzC3chNCNJoBoUwMAiUW2mAntEhHc59tKJhDPdIe7giVY1QiRVoU45i%2F5uIZjC1fDsppQyENeHuOw8hBCO3JUD1OR&X-Amz-Signature=c9df2867c475cb71851b02061a02290b404500fff137addbbdb62aa5ba8493c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTOTVV3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHvZ8%2FDsFpA7V0Yt2dZ9WirZwq3oSM2ccAt1D9WIH2ZvAiBumlA5pqCIaF6HmzBkYa7%2BkZJXRUtUvVUn0XRiF5aGwCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRmTKG5Tf2mweeEtSKtwD8r%2B6RwH%2FuY2euyG2sdrEI6vUk6MaCd8StUIWuMQg7Bryfs7QbesA%2FTSvsxAU0F8acq0xK8SVURjiKWY%2FhGyFOfVnCZQPo2RxSANZL%2Bjaw7aU20w0JfVveAp%2Bi1%2BKXPUNnTep5AZmYrQPct0GfnJSZV%2B5ZU60mGuDaH1F4omX178RFXSwSoxO0rsiqOISPQInKTjmZex8uYY2eVP4z2v5Y3nxW8owJp0k%2Fy29gDISGVstuzEk%2FQRQF3uRMwKPPHFR3sRi%2Fst7OFweRybCHFsdjJZACAlN2drk9%2FMLUyg9dVJS%2B6PMLkC7uoS8ILLAVj1zSYpG2ieFSaF2abRRnBto1cv4EObXVDnWk2uBck1%2BwKsO2mFnboyb4H0Y%2FNFOblUiTpferHckTWAPYRYVTwopuJhQ4BvqHzyNPfi7oB2CdDEVxs%2FqJy4XGJVueJ9RMtca7oIP1lUcc9lJXdKC0%2Fog8GlOTOsoPuBofkISykH4rXfmiXb5quBRVyYedDC%2B2uNj2iGMLvywMMf9bUXVtONNlbbiCISlt28eyG3i%2BdFAduKdnCSXKtyAQRzFRdiMv%2FyeLJ7rsY5BcS5vyMFOtlSlsOfpHayWciRPPaHCUbVRorz%2BoGl8jEBnkwleq%2Bowl9jzvgY6pgFysvXeXauMhaNvfKaiBMT9I3mbijLPPtQ9Zuj2YjpIEOMinJJgoAB3OLx62yC3MtpW0eFYloxaCNVGTCJ2TqD0sXwH1RrraT9RTrYOOHhXPnHcMPhlBhkrSLsNIBZwJzOjTrnQzC3chNCNJoBoUwMAiUW2mAntEhHc59tKJhDPdIe7giVY1QiRVoU45i%2F5uIZjC1fDsppQyENeHuOw8hBCO3JUD1OR&X-Amz-Signature=1c4f894cf22906a909c186b63c697f4409ba33f9aafda3831c2c93fdee384372&X-Amz-SignedHeaders=host&x-id=GetObject)

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
