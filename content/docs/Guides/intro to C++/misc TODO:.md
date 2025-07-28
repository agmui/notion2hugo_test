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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HMKMVV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHMmYsBkh%2Fnm4o0DYGW2l1vWSftPGZzEZY5G8vl244FtAiAJBa10ckMGqXrHb2dV37eIfTaSEwv8QFeDXfeKmXLLVyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYf51GE7C6%2BYrHAE3KtwDbQggcT97QdVTIu1D%2FA5NYefCWqwhz1h0I4wRT8OnaOwgDQyWQGVdQzfilMsjsfS6sz99VTz8FqIQYmbwKy%2BACEkwts9FkMjD3lLTZqK40zu4BEB9sYZcYOeAIL8fs9Q6BgH3NT5WSXrQODOIhKcOD5bUV6wZTITqTSSxKxTtzX%2FwQht4jeocAhD7XAMp3GUJCIoamCBRPixx622Qhl4K0rJ9gdTdgs3Z7MsXFDxabEE42Oi3iAQpuqI3jXNgD0WchcKvGWS44XPc3WtaVm0xKJn3hov4dcsfLvjuqHf3sJr14%2BzhNabPSNyMjRGz7ZlCU%2FFImhqurvkcEFLxeMx2GvNA1JEeAdHJXG64ckLcDOvF%2FU3EgmvdXjwDhCXzJ%2BCTFxs5a02SxqCTqMqBvF8sn2RUxyUKY1Jx4R3Ws1%2BB30%2F7lM12y59U2unFWt7JSd0483p9tzoMc4DaBtMEOB0iqxVmjD7V748iBXbA66ad9LIqsDtOn4AXAfxSaSxKbW8V9ajjqarWL%2B8zddZhBZ1MRiZO%2FvrnPfc1Utyq%2B5X4emdZnt8WuuSfo86wegrw1UsYRzuwOwxOKsjK%2BQtRr5yGhhPYOPefIGOefhh2agnC8XOkwnuiCds0cH8omfkwv5ObxAY6pgFaQykBzTvQGnMEMcfRwTZU95TBanWHSAOCtBJBj3LL9pdRuUEsMmN5mo1v4pEyFlZp3v0E0%2FnU8ktZ%2B%2B8iRE%2FQdIjkgVtkT6OT6ApJkqtwkgh6s%2FifR0Eod%2FtoxPnhHdMCkvt49n2kaOTpMkDYYQq70gUYO8cwAAysmPDKO09ayLTY%2BVlrafq%2Bhf1sDM%2Flg1dRtq6eI7mOpimfrNPkzXsRMxUWooVu&X-Amz-Signature=6c4e96a2c305ba7fab58465e9eb59e912d6e6945244c230493bec96ac351cf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HMKMVV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHMmYsBkh%2Fnm4o0DYGW2l1vWSftPGZzEZY5G8vl244FtAiAJBa10ckMGqXrHb2dV37eIfTaSEwv8QFeDXfeKmXLLVyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYf51GE7C6%2BYrHAE3KtwDbQggcT97QdVTIu1D%2FA5NYefCWqwhz1h0I4wRT8OnaOwgDQyWQGVdQzfilMsjsfS6sz99VTz8FqIQYmbwKy%2BACEkwts9FkMjD3lLTZqK40zu4BEB9sYZcYOeAIL8fs9Q6BgH3NT5WSXrQODOIhKcOD5bUV6wZTITqTSSxKxTtzX%2FwQht4jeocAhD7XAMp3GUJCIoamCBRPixx622Qhl4K0rJ9gdTdgs3Z7MsXFDxabEE42Oi3iAQpuqI3jXNgD0WchcKvGWS44XPc3WtaVm0xKJn3hov4dcsfLvjuqHf3sJr14%2BzhNabPSNyMjRGz7ZlCU%2FFImhqurvkcEFLxeMx2GvNA1JEeAdHJXG64ckLcDOvF%2FU3EgmvdXjwDhCXzJ%2BCTFxs5a02SxqCTqMqBvF8sn2RUxyUKY1Jx4R3Ws1%2BB30%2F7lM12y59U2unFWt7JSd0483p9tzoMc4DaBtMEOB0iqxVmjD7V748iBXbA66ad9LIqsDtOn4AXAfxSaSxKbW8V9ajjqarWL%2B8zddZhBZ1MRiZO%2FvrnPfc1Utyq%2B5X4emdZnt8WuuSfo86wegrw1UsYRzuwOwxOKsjK%2BQtRr5yGhhPYOPefIGOefhh2agnC8XOkwnuiCds0cH8omfkwv5ObxAY6pgFaQykBzTvQGnMEMcfRwTZU95TBanWHSAOCtBJBj3LL9pdRuUEsMmN5mo1v4pEyFlZp3v0E0%2FnU8ktZ%2B%2B8iRE%2FQdIjkgVtkT6OT6ApJkqtwkgh6s%2FifR0Eod%2FtoxPnhHdMCkvt49n2kaOTpMkDYYQq70gUYO8cwAAysmPDKO09ayLTY%2BVlrafq%2Bhf1sDM%2Flg1dRtq6eI7mOpimfrNPkzXsRMxUWooVu&X-Amz-Signature=f0ea9cf8f9e5043c9f72dfa1330fa4e5bb6a87f1c695a7d696496ae54b3671c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
