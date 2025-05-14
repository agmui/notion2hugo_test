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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNHP3KE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFMH1IqeKMsVo055eFbkm83k7Mwgsvk8%2Fx%2BffHvSTkm%2FAiEAi7BC4wf6M3KB3hrEVcGtIas0gtrcerRToBhyRpghke4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCf1%2BBUi31XkbwggqSrcA1uC1oeExdP7mMSK94AJMd7depXS0%2BX3N1XQkH4DE96J4f6Z8ZqMHJNzHSM78awGx5%2B6v03K3a5fAFlUxYou3jgHJHlzct5ni%2BcLL9zKPfoYyI7yhGW5IcV8JEjp90ffV4Y4bsJW0vi5N3mLJZ8lkNmDJCoGqVeAqqJnfNWKQSdAwS%2BsejEaR2BoCA2pcHaorzTmuXf%2FitNW4rBLHXIWMuCmuiSgTupcUthP6ypcn9CuIuc%2FdVwgT4Mnoiv9OS3zqHQk2G%2BTcg4akTORTTgyA3b8fsZOR7IilMktaY2LA4YOj0Xr6rX51tM4yaiVrx3pC6E5bhruS8HjCLhfi7O6ScwQL4zTLh6HCyTEJo4g8MQcMlHl5NJ4RMNg2iDiFO2DX3uMtlps927O%2Fx0ga0Zm%2BNrjZetZH4upiu1SrXGRwgoXmCymHxin98ghX5Fsq7IevSANOR%2FbAbbsGSJSV7xXfCbVyg4RS%2BXQzm2PXnW2TtgyQdi6%2Bby%2FdfcC2%2FDn1Y4mhD%2FiMERXiKa08qA7%2F3MYdQa7skCVmJaX6cjdD8lMEIG4SLda6EBAXDf3XfkQ0zei0bzBT5gHrOsGnXt5tnD%2FxTM2Ygj84A5NlFYGKDoHmNu7Hgih9WGsbFiBpJ5cMOm4kcEGOqUBxkR8jYn%2BHHoxuqGy%2Bl%2FkIvBWc0FeUcfp4pvqqgS5ildTHmVp3J7PLv5b1uTVAkc3LfzpPPpKHAawFvcOUEPEATuYDSIDrqNLU1IbXpvqIj5HHFoOdaeImvxmsa8SxjZ42LNFqOvVe%2F7s8PCjkcYTchvfqGnDwKaejAUHIvMdWu8EizJ9DRr2TsZW0L5NbkGsWXcIFW2gZKNZYSrEuxgcF1jYeFMf&X-Amz-Signature=7f257193878a02802710c3035d59486cc6d525f24c05d31838093f1a2ce4e1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNHP3KE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFMH1IqeKMsVo055eFbkm83k7Mwgsvk8%2Fx%2BffHvSTkm%2FAiEAi7BC4wf6M3KB3hrEVcGtIas0gtrcerRToBhyRpghke4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCf1%2BBUi31XkbwggqSrcA1uC1oeExdP7mMSK94AJMd7depXS0%2BX3N1XQkH4DE96J4f6Z8ZqMHJNzHSM78awGx5%2B6v03K3a5fAFlUxYou3jgHJHlzct5ni%2BcLL9zKPfoYyI7yhGW5IcV8JEjp90ffV4Y4bsJW0vi5N3mLJZ8lkNmDJCoGqVeAqqJnfNWKQSdAwS%2BsejEaR2BoCA2pcHaorzTmuXf%2FitNW4rBLHXIWMuCmuiSgTupcUthP6ypcn9CuIuc%2FdVwgT4Mnoiv9OS3zqHQk2G%2BTcg4akTORTTgyA3b8fsZOR7IilMktaY2LA4YOj0Xr6rX51tM4yaiVrx3pC6E5bhruS8HjCLhfi7O6ScwQL4zTLh6HCyTEJo4g8MQcMlHl5NJ4RMNg2iDiFO2DX3uMtlps927O%2Fx0ga0Zm%2BNrjZetZH4upiu1SrXGRwgoXmCymHxin98ghX5Fsq7IevSANOR%2FbAbbsGSJSV7xXfCbVyg4RS%2BXQzm2PXnW2TtgyQdi6%2Bby%2FdfcC2%2FDn1Y4mhD%2FiMERXiKa08qA7%2F3MYdQa7skCVmJaX6cjdD8lMEIG4SLda6EBAXDf3XfkQ0zei0bzBT5gHrOsGnXt5tnD%2FxTM2Ygj84A5NlFYGKDoHmNu7Hgih9WGsbFiBpJ5cMOm4kcEGOqUBxkR8jYn%2BHHoxuqGy%2Bl%2FkIvBWc0FeUcfp4pvqqgS5ildTHmVp3J7PLv5b1uTVAkc3LfzpPPpKHAawFvcOUEPEATuYDSIDrqNLU1IbXpvqIj5HHFoOdaeImvxmsa8SxjZ42LNFqOvVe%2F7s8PCjkcYTchvfqGnDwKaejAUHIvMdWu8EizJ9DRr2TsZW0L5NbkGsWXcIFW2gZKNZYSrEuxgcF1jYeFMf&X-Amz-Signature=a9beab713c452a7128270e3f9b290d3bfb8c0e737b15f9b0e9dfb94ab169bf04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
