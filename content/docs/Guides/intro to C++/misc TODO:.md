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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLFWN2X%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdd4ggTP2U2MI7LHUGFbXrimQ2zgaVZgAZUPF2JrdCQIgM3NZLnnxH%2FXYUNkV65OtiUtWxCx3swMsRvSWD17PdEQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEKLrTmkNdreKi8tQircA9jMboz9VzfzRDDHjN873r5Ix8JQa%2FlFLw5fZOHgeqxXnFuVuy32c6Dvan2Jrf6bvrXgI%2BZ8zWLYcSvMLX5oWXBIeKe0UeY0oaOhHfOQfnKkE27sOGk4EC9G5YIpVdGpnQxHItmMZ14A%2BKSwjYsNUvfv0mHVUtulCjnfRFsPyXfssWUqwVuXL%2B8vAEqBWy5Y3Gjg%2BfPSAuwZOUQ942ZDCA7lxItDh1LeBR068X630QnYAdKo%2FzzO8hqheYEfw%2Fqx1E7ntZ%2F0kTW0rd5OME9AfqhEsA0HfefoP7ZN9LxMaUBfmbdmFIkvN6kvIB%2Btic8qQNmIzIYh%2FXsaXjQ4A1RCs6WyaxS1GZ%2BHQmlM%2B9Aci3fMaT%2BXwrQOKqVb%2B1jkouvRzdzjCJPZ3kaNKwA4m9jSwlPm%2FqZ0YDJOV%2FNbbnYeddGf6gLSmV2m9fvn5YeouZqx71f8GlNcqkjmk4VSclx%2B3FcP1GUVqfRRFmJSIAooAKVtcsBRd4QbuU3CojqDAK5PnYIVPGNMF%2BsaYCI2Yo8mmhjRY5u5r1AvFB%2FAG08IIztzcZiTtlNdS2nNQ4xVO77Z44dBDCBUEKd1LHl84T7VOuur7NzSjXyP9s0UUzFb6fhDAFhB7yD0ciNhyEREMIOki78GOqUBV5JUITQRB4kbje2Y4l1u3cObG8XCzI29Zsatxf4eCX61p9CDSChm4m%2Fmr8OSlXxI0Kdk0OSYuUHQ1fJladjcZE0M93%2BmkNysGqK7gTqnRzylxdlZvPmH1b3LRj83ozCDpUx1nLsLpl0gl%2FvQ9EwFdcx%2FzpIOJcaI4HnaLtymB%2FQagqnxqCIDfOjSAy48rGwJw3fbnnbYtHPHVqWWPAzbg4BugCCH&X-Amz-Signature=10dc2799e1537f0c44f7d56756e07cea3215a2be98b567dc0f01e579c435a684&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLFWN2X%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdd4ggTP2U2MI7LHUGFbXrimQ2zgaVZgAZUPF2JrdCQIgM3NZLnnxH%2FXYUNkV65OtiUtWxCx3swMsRvSWD17PdEQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEKLrTmkNdreKi8tQircA9jMboz9VzfzRDDHjN873r5Ix8JQa%2FlFLw5fZOHgeqxXnFuVuy32c6Dvan2Jrf6bvrXgI%2BZ8zWLYcSvMLX5oWXBIeKe0UeY0oaOhHfOQfnKkE27sOGk4EC9G5YIpVdGpnQxHItmMZ14A%2BKSwjYsNUvfv0mHVUtulCjnfRFsPyXfssWUqwVuXL%2B8vAEqBWy5Y3Gjg%2BfPSAuwZOUQ942ZDCA7lxItDh1LeBR068X630QnYAdKo%2FzzO8hqheYEfw%2Fqx1E7ntZ%2F0kTW0rd5OME9AfqhEsA0HfefoP7ZN9LxMaUBfmbdmFIkvN6kvIB%2Btic8qQNmIzIYh%2FXsaXjQ4A1RCs6WyaxS1GZ%2BHQmlM%2B9Aci3fMaT%2BXwrQOKqVb%2B1jkouvRzdzjCJPZ3kaNKwA4m9jSwlPm%2FqZ0YDJOV%2FNbbnYeddGf6gLSmV2m9fvn5YeouZqx71f8GlNcqkjmk4VSclx%2B3FcP1GUVqfRRFmJSIAooAKVtcsBRd4QbuU3CojqDAK5PnYIVPGNMF%2BsaYCI2Yo8mmhjRY5u5r1AvFB%2FAG08IIztzcZiTtlNdS2nNQ4xVO77Z44dBDCBUEKd1LHl84T7VOuur7NzSjXyP9s0UUzFb6fhDAFhB7yD0ciNhyEREMIOki78GOqUBV5JUITQRB4kbje2Y4l1u3cObG8XCzI29Zsatxf4eCX61p9CDSChm4m%2Fmr8OSlXxI0Kdk0OSYuUHQ1fJladjcZE0M93%2BmkNysGqK7gTqnRzylxdlZvPmH1b3LRj83ozCDpUx1nLsLpl0gl%2FvQ9EwFdcx%2FzpIOJcaI4HnaLtymB%2FQagqnxqCIDfOjSAy48rGwJw3fbnnbYtHPHVqWWPAzbg4BugCCH&X-Amz-Signature=f5f5efd556c93381bee2c7a25a960720ac4274ba3f102235d0d195e0ae9556c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
