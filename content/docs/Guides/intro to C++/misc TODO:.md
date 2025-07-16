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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLVVE54%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCTESO1fcqubTeup33IcNN6NnMlADF5qft6FJq2evuQvQIgPkLluBLv3FwlPoy1UHoixW8kMI6FSJGV1dGYmfqA7VUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPwV0zpP1QrPuSINMSrcA%2Fs%2FCFfQYsBYMvaqCHI6zCdhST4tyLcYx5Qtl4RSRcvDxFo8T2wA6DnlguZZF4d75ujAOxUGEN7knfzCHwQMrOuU8DjrWcCEbe59m8%2FFjTD24ARr5mMmeNs7lQQEcNGdrWSO%2Fo1b3UimQmeXaZ7XK6chMJiL7zRa6fp3ZZesIDTjlozmOP9QCtjUxqibNgsMyaDWVbjHVgHPMsTXnxCk15chsneXcc%2FbdEFrVY5%2B4JHTQ7OTb%2FArejdrGFhPwrEdrmIPyqtQc2DCBZ%2BMNDb820rB1vIuZvrH4gAWyGeRvoLVQOWHaeGgxNViX%2BmYkh62xrcja8JfA2jSGEIEaPqfEywXDFkhT6l4Yv8taU3UmCDu96YM7XIpy8DNW%2FYJi4%2F7X300kRgCawJpCUFWP%2BX1Z4ZQgVA2c0CcG8TiisrkBy40BVM6AU%2BMqbtI7sVSobLDM8ixVfggA7ipo2xD%2FXVZqbo4a3kSaiJ%2FhhZ7u8ZTxBnWQ5qwmedm0qvn0Qf3FIP2lluETRBvFf1553157MSr7zP3hwBZzZRmrZTDAzt4xGqFgtF2C8gmDzgXflKfaC4%2Fja1R6sez1Sc%2BmTMJiZY1IJzwYstwiEomkIn6hRl69VFHYkU9qBp6mh8tOaXpMJzo3cMGOqUBWYW52X2DVzrLi00wuo65Naj2gF4Ce58BR6q5N1XU6ZlwrWqryy9qyoe8a42RcfvB1ct7C7y8OHrR5zG%2FrbhzjqXp8MGj7cUgNcdeAzZEJatvtkqXRMLQPoUJ4jBqrvjw5p%2B3jln2H3RVyUXXXMNrC8XyNKtroPNEnIZ7krlhseSrUAY%2FneJ001jsOk0ZIgD2CMMSifqlIh1%2BOzz5YTLZDlbJXktq&X-Amz-Signature=4c618d09da2a2dcd42309369661e414697179928fd8c466609650a20ffe6b2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLVVE54%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCTESO1fcqubTeup33IcNN6NnMlADF5qft6FJq2evuQvQIgPkLluBLv3FwlPoy1UHoixW8kMI6FSJGV1dGYmfqA7VUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPwV0zpP1QrPuSINMSrcA%2Fs%2FCFfQYsBYMvaqCHI6zCdhST4tyLcYx5Qtl4RSRcvDxFo8T2wA6DnlguZZF4d75ujAOxUGEN7knfzCHwQMrOuU8DjrWcCEbe59m8%2FFjTD24ARr5mMmeNs7lQQEcNGdrWSO%2Fo1b3UimQmeXaZ7XK6chMJiL7zRa6fp3ZZesIDTjlozmOP9QCtjUxqibNgsMyaDWVbjHVgHPMsTXnxCk15chsneXcc%2FbdEFrVY5%2B4JHTQ7OTb%2FArejdrGFhPwrEdrmIPyqtQc2DCBZ%2BMNDb820rB1vIuZvrH4gAWyGeRvoLVQOWHaeGgxNViX%2BmYkh62xrcja8JfA2jSGEIEaPqfEywXDFkhT6l4Yv8taU3UmCDu96YM7XIpy8DNW%2FYJi4%2F7X300kRgCawJpCUFWP%2BX1Z4ZQgVA2c0CcG8TiisrkBy40BVM6AU%2BMqbtI7sVSobLDM8ixVfggA7ipo2xD%2FXVZqbo4a3kSaiJ%2FhhZ7u8ZTxBnWQ5qwmedm0qvn0Qf3FIP2lluETRBvFf1553157MSr7zP3hwBZzZRmrZTDAzt4xGqFgtF2C8gmDzgXflKfaC4%2Fja1R6sez1Sc%2BmTMJiZY1IJzwYstwiEomkIn6hRl69VFHYkU9qBp6mh8tOaXpMJzo3cMGOqUBWYW52X2DVzrLi00wuo65Naj2gF4Ce58BR6q5N1XU6ZlwrWqryy9qyoe8a42RcfvB1ct7C7y8OHrR5zG%2FrbhzjqXp8MGj7cUgNcdeAzZEJatvtkqXRMLQPoUJ4jBqrvjw5p%2B3jln2H3RVyUXXXMNrC8XyNKtroPNEnIZ7krlhseSrUAY%2FneJ001jsOk0ZIgD2CMMSifqlIh1%2BOzz5YTLZDlbJXktq&X-Amz-Signature=3053fbec7a8b81bb77f824155b7984921d5654e9d4870b4aacc0488a31ff050b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
