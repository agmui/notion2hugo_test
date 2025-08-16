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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODNVOVE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAcayFq3H5THYq%2Fm7FIYxHtpJ3GaPPf3esd9%2F09m%2FGgiAiBUIA8cJnMnvki%2FPbjfdsfZTiH95h%2FYme5Bg2Wjsgv63ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIME4q8SX7X2Lkkt%2FvsKtwDX7vFSrEf2CtD6wUyU4McS8kD33Rv9EREleTyrq%2BMBGEcCmFnPvson5AolHiy3SBhSNgaJZXxJs24XP44y5KyXufoYSXxkU7Bry6DgXNr8CCUmHJw4TnkSHZUDc1XUAPtFWGrYqaCCgXa1Pls1%2BmlXK%2F6Ul%2FDgxdSQsMst4sTE%2FUKHyzSp4bbnTrIKLns2XilMGqtel%2BGrP8WTKDQeOQrvsTAU6Gh3iHQMNGUQDrL580QZ5rMlIzV4GWA%2FJx%2BeK%2Fniv8Q6zPJBWw0WnaJXhTqmy0IIQrtbihFBbckDMYWA8SbGDDc%2FAX0%2FXoO5jMHtRP5dKXoNKp2WngoSforgy0HN4vWxCl6DxbfQqnfFcG%2Fn0%2BIxH4ABhaVmcs4uwZ6iNGmTvN1%2B0J9pscIcpKe81OsT0afEaLMks730Zw3misyyanojd0THVj3a2UWeKpVTPsszBZbqpbLLl0VXccSrm2%2FZz5MiC6WwuX02GbqeV3BWb4JArAe9sKaSdEDFYRa9G6s361O%2BwS%2FSnCRteb3dkNwNYPSJ6fs5kSZIaHGgls6zuBL5ktpxaUED4Sudq5nerbJCvAFfbk5XtuvjMrQ%2BGxA66Ukd4qGz1W4rIrERCL29v2lf31clU7egoe236AwoviAxQY6pgFDLUHIGeUMuCwPz5bQRNjJ8iTEUvCdMAkK25QaSpw9VJ3Bw%2F1HO3EDqOZfk9sYs%2Fcm2ITMPiwAS2xcZ2oupOljBQUUurgzdtVX63eVc16BAP%2FMUyBZPrpXjdDBqBW4NK4Oihe2IrF6jsgmDxydH5EsV9nElOWLtGw3KfHvfUkVGasRAtvWgVVem39igpiS7%2BKR0ergHl%2BUj1x62NwXospV5n64TQF8&X-Amz-Signature=e418a7ee1bdb2b13a852e04940b9079b80403c4fe6f4131c2f8e87355600785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODNVOVE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAcayFq3H5THYq%2Fm7FIYxHtpJ3GaPPf3esd9%2F09m%2FGgiAiBUIA8cJnMnvki%2FPbjfdsfZTiH95h%2FYme5Bg2Wjsgv63ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIME4q8SX7X2Lkkt%2FvsKtwDX7vFSrEf2CtD6wUyU4McS8kD33Rv9EREleTyrq%2BMBGEcCmFnPvson5AolHiy3SBhSNgaJZXxJs24XP44y5KyXufoYSXxkU7Bry6DgXNr8CCUmHJw4TnkSHZUDc1XUAPtFWGrYqaCCgXa1Pls1%2BmlXK%2F6Ul%2FDgxdSQsMst4sTE%2FUKHyzSp4bbnTrIKLns2XilMGqtel%2BGrP8WTKDQeOQrvsTAU6Gh3iHQMNGUQDrL580QZ5rMlIzV4GWA%2FJx%2BeK%2Fniv8Q6zPJBWw0WnaJXhTqmy0IIQrtbihFBbckDMYWA8SbGDDc%2FAX0%2FXoO5jMHtRP5dKXoNKp2WngoSforgy0HN4vWxCl6DxbfQqnfFcG%2Fn0%2BIxH4ABhaVmcs4uwZ6iNGmTvN1%2B0J9pscIcpKe81OsT0afEaLMks730Zw3misyyanojd0THVj3a2UWeKpVTPsszBZbqpbLLl0VXccSrm2%2FZz5MiC6WwuX02GbqeV3BWb4JArAe9sKaSdEDFYRa9G6s361O%2BwS%2FSnCRteb3dkNwNYPSJ6fs5kSZIaHGgls6zuBL5ktpxaUED4Sudq5nerbJCvAFfbk5XtuvjMrQ%2BGxA66Ukd4qGz1W4rIrERCL29v2lf31clU7egoe236AwoviAxQY6pgFDLUHIGeUMuCwPz5bQRNjJ8iTEUvCdMAkK25QaSpw9VJ3Bw%2F1HO3EDqOZfk9sYs%2Fcm2ITMPiwAS2xcZ2oupOljBQUUurgzdtVX63eVc16BAP%2FMUyBZPrpXjdDBqBW4NK4Oihe2IrF6jsgmDxydH5EsV9nElOWLtGw3KfHvfUkVGasRAtvWgVVem39igpiS7%2BKR0ergHl%2BUj1x62NwXospV5n64TQF8&X-Amz-Signature=81e67007cf995d1faaa48456655864ac4720c7b6b2a04172a357bee7acc14066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
