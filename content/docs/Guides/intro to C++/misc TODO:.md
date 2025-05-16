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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYOYJW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8O7s4LA08bJ0%2B5nBGjtNxnvjRftsgRlMbLK838IX%2ByQIgCbgRhII3sEYikDOvTlm9NwY%2BMeo%2BGCN340vUYB7JJBkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMpZBMZNs3RSepOkCrcAw4zH8xhc2XKvpy4aOef20MUqDsgiXXsB1t8orWV5wC9yzryXkD8XnOR9JCgaNvFwzs5dJvBMCV1r5%2FKmlmS360uQkHne%2FX%2Be3CRaB%2BzH7MTZ3XxvMCZqoubgDbMl3yU7MEE6ktFfTwbFRAm7Sex7xfwIDsH4M%2F%2BOIEAwnw3TKSYe4yT6Kh6So2BzB72qmJms2TAOIL6fWf6FAKU%2FrzT9v%2FEz%2Bvt18tjtRKXQDZM3spu9Zrxnk8kQo60PAXyStBh4gwNc4ZqAlVfaBZ9nwWKvSVIPFCOwrg4c3PSMZ5NpdnuoLX%2FxdpXX%2BHobHON%2B7FzrvTFEmwx2PXMFf2fpkxx7kJXyLtPa%2F2aJ%2BeTVb2y99IYfYNr32V6VqQ4o7rBbr9EEns7RMgulD1SuxMFOX53SMaCodOUqq%2BVOMD%2BzwJ6%2B6KSi0ZawWy8MBj1ZPxQWpfmYDss8%2FcGuOLQwZeY6XtuPFbmKqeZXSzvdeazubOfDYbDiShujq7hur2JEOLJiqvuBvZ6pK2x1f2jTD0TWHEQ5c4AbP9vcygo6DKPpkry8QHUdSvFT7AmqDLtfWajM9m99909RLH%2FGdm%2FmAwVyO3zWvb4HJt8DPb0QuvePI5fyKNI3TbgAonpmPc7d6TtMNLum8EGOqUBCsQyeNEuxWbzEFzWh9A4WOoANEsvGp3nEn5kA4DX7%2FLiS%2BAKvYPAIcmvU6OZ2ugqXD5DwbGbGKuHraJLxhNjQCSy5%2F85t85rsMQB4s%2F6OvCOzdf96xIzAgRFLRPsifFIrsMAwoiHAPjYIYS%2FSA%2FGuIG6fBgVyGVMJ5KAYRUWOq%2BVTS7kctlSDcymJP4sb9ArgtiziqCvkFMolxjieVrhDVf7wxew&X-Amz-Signature=395dda664589696b8eae43fa4fad6874eaa9c4494cecaa6c61e92b0700f84ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYOYJW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8O7s4LA08bJ0%2B5nBGjtNxnvjRftsgRlMbLK838IX%2ByQIgCbgRhII3sEYikDOvTlm9NwY%2BMeo%2BGCN340vUYB7JJBkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMpZBMZNs3RSepOkCrcAw4zH8xhc2XKvpy4aOef20MUqDsgiXXsB1t8orWV5wC9yzryXkD8XnOR9JCgaNvFwzs5dJvBMCV1r5%2FKmlmS360uQkHne%2FX%2Be3CRaB%2BzH7MTZ3XxvMCZqoubgDbMl3yU7MEE6ktFfTwbFRAm7Sex7xfwIDsH4M%2F%2BOIEAwnw3TKSYe4yT6Kh6So2BzB72qmJms2TAOIL6fWf6FAKU%2FrzT9v%2FEz%2Bvt18tjtRKXQDZM3spu9Zrxnk8kQo60PAXyStBh4gwNc4ZqAlVfaBZ9nwWKvSVIPFCOwrg4c3PSMZ5NpdnuoLX%2FxdpXX%2BHobHON%2B7FzrvTFEmwx2PXMFf2fpkxx7kJXyLtPa%2F2aJ%2BeTVb2y99IYfYNr32V6VqQ4o7rBbr9EEns7RMgulD1SuxMFOX53SMaCodOUqq%2BVOMD%2BzwJ6%2B6KSi0ZawWy8MBj1ZPxQWpfmYDss8%2FcGuOLQwZeY6XtuPFbmKqeZXSzvdeazubOfDYbDiShujq7hur2JEOLJiqvuBvZ6pK2x1f2jTD0TWHEQ5c4AbP9vcygo6DKPpkry8QHUdSvFT7AmqDLtfWajM9m99909RLH%2FGdm%2FmAwVyO3zWvb4HJt8DPb0QuvePI5fyKNI3TbgAonpmPc7d6TtMNLum8EGOqUBCsQyeNEuxWbzEFzWh9A4WOoANEsvGp3nEn5kA4DX7%2FLiS%2BAKvYPAIcmvU6OZ2ugqXD5DwbGbGKuHraJLxhNjQCSy5%2F85t85rsMQB4s%2F6OvCOzdf96xIzAgRFLRPsifFIrsMAwoiHAPjYIYS%2FSA%2FGuIG6fBgVyGVMJ5KAYRUWOq%2BVTS7kctlSDcymJP4sb9ArgtiziqCvkFMolxjieVrhDVf7wxew&X-Amz-Signature=f0725345c81696d562070205e03552713df7698ca31fb8a35ca07bf5a574a0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
