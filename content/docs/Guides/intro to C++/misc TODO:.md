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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=30632535aeb5942e3103b598f112836cd963a2a6a3621eb77ed9a8284d916e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=220968a6b9f6f14620c89b9a5af016aaf090aef35103e422059680298cadaba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
