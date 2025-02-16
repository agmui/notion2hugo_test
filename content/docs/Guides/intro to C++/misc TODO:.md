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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRZWEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDweY1TIwdOkzBkvi11Nft5kzWA%2Bi5i6M8q9cOnYX%2BMIAiEA1cqzXAxTz1Jf%2FmfSaezP0GEhRse6ShB3%2FhRUNuBUi3Eq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL1jB%2F4upMt8ODa4WCrcA4GHMsIgxZoyTSEF0IYUbqJUnJXrwkxeiDm0%2Bi5ZOqL6F40lN%2BcXBplJ9XXVQ%2B%2BqYYNtivjvwPes6jr2jXvbWsPOj%2BeztuosIFaYFGIQlEjvCBJh3sx17MRk617wX%2FGvMs%2FttyC4JJm3HA0s1%2Fz0yxmbfSQJUoohu%2BBzHXfeiaBsPsR4kiD2iajlr%2Btd2j2UjMX31cP28IvC%2FqzluSw2wBaPWTmDTiG4WetHDE9z%2FN0IPLmuDEPW25uqOJnM7QTtstMYQysBHh03KyQfNNHqFEs89sohxAS7x57wV9KYNRkrREXBl3%2BWuyL3YwVJyS%2Fs5tAqi2ifO0LpovaBJhyPlG%2BdhNFEVPO%2B2Dsi8mgtwAl1GkuR3OHYK4d4i8K468XOSv%2FrSnCw33DQLp2dSNMgUXEEJKvbi9FF2lov7fxHmy%2FikDY2Hq8fgFPU0DdIGFlIBSlevKpPey0OlTW1Zw%2BNdK1qcLgfNRW3hTEfM4eRKwH0VcDc26xBtyZ1cAq0I2QuaKYIS8cHKSr46cm5g%2BdloMRhDRjEYL%2FeRUaPp8r3kfGQD9XzHDFH7ScsoRizDB4frS%2FrLmn4iBUSbMhK%2F7p4m9vXjFh1hiDdtx9OXbRTbXQUTbOHeLf8BXIwMTSOMIvnxL0GOqUBAqG5Iy5%2BGMfRCVNDM3jD7Yf0ii2FbriYYBy4V4KON6TJlt73%2BGUPYUU0dTTZ5uV1MoBhOxlQO93z%2Bpni6mMNtwaoSbFjE7uZjGKkxouf%2B%2B564OWlfod%2F99ReXOKgMXCaa0p9OsfhV2UhuoY51y2oYAVHHQSay3g3FES9U1zO9f5cqjJKMyANzjsGA73usXJHc8KcYbaFYekmwlC4E45bwcsw1NcS&X-Amz-Signature=5c6ba07537008e4322e8e4aae55724826feedc3307caf1cb665b17e0b07226ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRZWEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDweY1TIwdOkzBkvi11Nft5kzWA%2Bi5i6M8q9cOnYX%2BMIAiEA1cqzXAxTz1Jf%2FmfSaezP0GEhRse6ShB3%2FhRUNuBUi3Eq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL1jB%2F4upMt8ODa4WCrcA4GHMsIgxZoyTSEF0IYUbqJUnJXrwkxeiDm0%2Bi5ZOqL6F40lN%2BcXBplJ9XXVQ%2B%2BqYYNtivjvwPes6jr2jXvbWsPOj%2BeztuosIFaYFGIQlEjvCBJh3sx17MRk617wX%2FGvMs%2FttyC4JJm3HA0s1%2Fz0yxmbfSQJUoohu%2BBzHXfeiaBsPsR4kiD2iajlr%2Btd2j2UjMX31cP28IvC%2FqzluSw2wBaPWTmDTiG4WetHDE9z%2FN0IPLmuDEPW25uqOJnM7QTtstMYQysBHh03KyQfNNHqFEs89sohxAS7x57wV9KYNRkrREXBl3%2BWuyL3YwVJyS%2Fs5tAqi2ifO0LpovaBJhyPlG%2BdhNFEVPO%2B2Dsi8mgtwAl1GkuR3OHYK4d4i8K468XOSv%2FrSnCw33DQLp2dSNMgUXEEJKvbi9FF2lov7fxHmy%2FikDY2Hq8fgFPU0DdIGFlIBSlevKpPey0OlTW1Zw%2BNdK1qcLgfNRW3hTEfM4eRKwH0VcDc26xBtyZ1cAq0I2QuaKYIS8cHKSr46cm5g%2BdloMRhDRjEYL%2FeRUaPp8r3kfGQD9XzHDFH7ScsoRizDB4frS%2FrLmn4iBUSbMhK%2F7p4m9vXjFh1hiDdtx9OXbRTbXQUTbOHeLf8BXIwMTSOMIvnxL0GOqUBAqG5Iy5%2BGMfRCVNDM3jD7Yf0ii2FbriYYBy4V4KON6TJlt73%2BGUPYUU0dTTZ5uV1MoBhOxlQO93z%2Bpni6mMNtwaoSbFjE7uZjGKkxouf%2B%2B564OWlfod%2F99ReXOKgMXCaa0p9OsfhV2UhuoY51y2oYAVHHQSay3g3FES9U1zO9f5cqjJKMyANzjsGA73usXJHc8KcYbaFYekmwlC4E45bwcsw1NcS&X-Amz-Signature=103d433fdac42ed1ddcf4371b90a1216e434de9019b0d6991bd92bc8f81f72cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
