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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYY5SGNF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FWvc4sLbT2iKPAMM1DLxCHSLkZkEOE%2BRay9ppBXXiPgIhAOA9n4ZEkalaLEO1vAAj%2FABWsubC%2FUG%2F9VugxZF6RXynKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXC%2FzvYx66Mch%2FDFQq3AOWhjRzV7gvjvEDgEF4K%2BuAtZtBQHncSdy8n4lzGHN7E%2F7UC87O7ljQoicADymdo%2FUzsFb33LIDDNxlY4DGNdpIj98hcv%2FrL2StfuUwba5gBEHMSuGn9EYCOb%2B2dNMpX90B3kWeAG0CwJe9VmPgHUgQUuCg%2FUA%2FRmTFN3120XoolOEc0yUMDkffNQvTfAG8ghBhKyVsJbisAl7Ez5IpGokf0ZJb1n0hiS00Pp7fCeu4YXRfH6lMz2CwHcb%2BMzn0Onntyjm2kEz6lECpQerYXF7F0hAn2fXZxlyVRsRBpKMAm%2F9Vx18QUvish4JklBloaR70SeVcQymG3IEhGbkuU0hlSDpJBm%2Fno8UQXQ7%2BaqxOsoAAn9dOR6iniGMWVIA5Cd1asntKiDpgIPUJAucERTX7VwMhDM0yk9AIZwNBdmgim%2BThmAxhuJJiwhICBwpPm8Sbv5j%2BE3e2pP59MGC2UCF6y84g9BWf2HQgJHGGbYMyJYCpE1GS2kuMzP2eqtki0pNUGRDwOaA9chjZmcXBX2VLC7g8HVkTsjvYTvlfQczf%2BnUJNYg4aH1tTnenHLoHUdGb3HhUFlGLZe%2F%2FL2B7e0zAyLohekFcNoZrAwhXchHg2i02CYh379JtodEpWTCh5u7TBjqkATA%2FCQWiTClXhCeO8jB651815cCKg%2FYet%2FsV%2B15gHrQDtgsxKu8TgoNp07ncOMZev5lZlO0eKvtJZzkYvxSaSJlU1Qq%2FyNJQcZomrAHADzqocXwXf1AF1SbhSbjUugvgnWMccTXSxf%2BS3qexQDQIqFEm41xzIBVw6Nl6IGSdsXrkqJuIeV6jeF4jpb%2FkyXLcZ4JisEE%2Bdyg4whMJoEG5VhBKPlWv&X-Amz-Signature=f975bee245afe916ccacdf414f96d4c95e5c783e3bebaee955ccfba23ca98047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYY5SGNF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FWvc4sLbT2iKPAMM1DLxCHSLkZkEOE%2BRay9ppBXXiPgIhAOA9n4ZEkalaLEO1vAAj%2FABWsubC%2FUG%2F9VugxZF6RXynKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXC%2FzvYx66Mch%2FDFQq3AOWhjRzV7gvjvEDgEF4K%2BuAtZtBQHncSdy8n4lzGHN7E%2F7UC87O7ljQoicADymdo%2FUzsFb33LIDDNxlY4DGNdpIj98hcv%2FrL2StfuUwba5gBEHMSuGn9EYCOb%2B2dNMpX90B3kWeAG0CwJe9VmPgHUgQUuCg%2FUA%2FRmTFN3120XoolOEc0yUMDkffNQvTfAG8ghBhKyVsJbisAl7Ez5IpGokf0ZJb1n0hiS00Pp7fCeu4YXRfH6lMz2CwHcb%2BMzn0Onntyjm2kEz6lECpQerYXF7F0hAn2fXZxlyVRsRBpKMAm%2F9Vx18QUvish4JklBloaR70SeVcQymG3IEhGbkuU0hlSDpJBm%2Fno8UQXQ7%2BaqxOsoAAn9dOR6iniGMWVIA5Cd1asntKiDpgIPUJAucERTX7VwMhDM0yk9AIZwNBdmgim%2BThmAxhuJJiwhICBwpPm8Sbv5j%2BE3e2pP59MGC2UCF6y84g9BWf2HQgJHGGbYMyJYCpE1GS2kuMzP2eqtki0pNUGRDwOaA9chjZmcXBX2VLC7g8HVkTsjvYTvlfQczf%2BnUJNYg4aH1tTnenHLoHUdGb3HhUFlGLZe%2F%2FL2B7e0zAyLohekFcNoZrAwhXchHg2i02CYh379JtodEpWTCh5u7TBjqkATA%2FCQWiTClXhCeO8jB651815cCKg%2FYet%2FsV%2B15gHrQDtgsxKu8TgoNp07ncOMZev5lZlO0eKvtJZzkYvxSaSJlU1Qq%2FyNJQcZomrAHADzqocXwXf1AF1SbhSbjUugvgnWMccTXSxf%2BS3qexQDQIqFEm41xzIBVw6Nl6IGSdsXrkqJuIeV6jeF4jpb%2FkyXLcZ4JisEE%2Bdyg4whMJoEG5VhBKPlWv&X-Amz-Signature=1580b5fcdd5a4aa7056548613caa9ec701e1b92266e065c1a077ffc32954974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
