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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJFRCQK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJRET4EXKllpDrOMig5ibxg5Yw4NOrf72G3TC3BF8DVwIhAMCVsppNif764FHbbg7o2AovU0Pf4DYdiTC%2FIiapi4hpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2BX14f%2BmsSYPQMDgq3AP6cJCbRuXyDahm9sm5x7Rfbn4m45ZAGFyey4fsUJVlizpQWmeJ%2FlE5k4JSJ8mh0vUWTJOdg0R2fVmAC6WiLgPNpYmepD%2ByPq8P%2BbhqNm8uqs1taYXvTUk0QMJa5cJH%2BbM%2F9dagUhQragbuKHFYqjbHGkBYgbI89O7Pg88LwAIDZ527X5RrJ13Feqf4qIYQYbxxc2HAIPBnLdA2H2rpXSIOPZef%2BikVF%2FnmqJGNQ3ng%2BgVi9bz6XbdUHbqInROBMhl3HrHU3yajnYhShy2w%2BSLYYI3tvznEXcnX%2FwsHM49SkQ91o%2F3GhteEijz41BJcNRrGGS1f6I%2FmFVr0oRmwC3%2B6lTXmVy28yI7jtrr0K%2BWVV59L7vjH8jJ9Nbx%2BDUiQ0YEUgcxX8%2BdFjKU3rwajaJZqCTjLQHKelmzYlbjTe5547ogCORlzh%2B%2F%2F4hSXzmgFG1IM9cnLZRSVJz9ilo9QPuHkOsZ8pyjlYm6mT3k46Uc%2BUoPSdxr0HqkmPNm5ETnbw398UOWUKmp%2FguTCCO1TPznbD2yWo0dZAzcO5DxwYozXSG7MRDpspsfq2OAfdykDQKPcrt3lW7gMj4nsxehrR%2FILRrDWSWU%2Bm%2F085SJJhaMmuoPNOVLRmB3Fx%2F%2B48zD5tbLEBjqkAa0QS99TLd4%2B9rR5fdVCx048Zu6oijAriXg1CDNIyG7ztd%2FzK0rj7leoZ%2Fnc2KRQK%2FHKTgBYOTSzGs16qROI95rX9EDfZpyfmOIPB9tYp92%2BV4FUtToD5AuUpl7%2BZA2qaOOxvWu5%2BEpvQO8IiWVM0yt8%2BlpmxPCalmSpznTcHyj%2FBj7hkY9c6NoBxsDl9gLX1CD%2Fc4SGWFiFMMULhBZpLUcTffIH&X-Amz-Signature=365a4249d16d11b2efad9dccf2d7c0adf78af47e80e9a30e110d22dfc22c269a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJFRCQK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJRET4EXKllpDrOMig5ibxg5Yw4NOrf72G3TC3BF8DVwIhAMCVsppNif764FHbbg7o2AovU0Pf4DYdiTC%2FIiapi4hpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2BX14f%2BmsSYPQMDgq3AP6cJCbRuXyDahm9sm5x7Rfbn4m45ZAGFyey4fsUJVlizpQWmeJ%2FlE5k4JSJ8mh0vUWTJOdg0R2fVmAC6WiLgPNpYmepD%2ByPq8P%2BbhqNm8uqs1taYXvTUk0QMJa5cJH%2BbM%2F9dagUhQragbuKHFYqjbHGkBYgbI89O7Pg88LwAIDZ527X5RrJ13Feqf4qIYQYbxxc2HAIPBnLdA2H2rpXSIOPZef%2BikVF%2FnmqJGNQ3ng%2BgVi9bz6XbdUHbqInROBMhl3HrHU3yajnYhShy2w%2BSLYYI3tvznEXcnX%2FwsHM49SkQ91o%2F3GhteEijz41BJcNRrGGS1f6I%2FmFVr0oRmwC3%2B6lTXmVy28yI7jtrr0K%2BWVV59L7vjH8jJ9Nbx%2BDUiQ0YEUgcxX8%2BdFjKU3rwajaJZqCTjLQHKelmzYlbjTe5547ogCORlzh%2B%2F%2F4hSXzmgFG1IM9cnLZRSVJz9ilo9QPuHkOsZ8pyjlYm6mT3k46Uc%2BUoPSdxr0HqkmPNm5ETnbw398UOWUKmp%2FguTCCO1TPznbD2yWo0dZAzcO5DxwYozXSG7MRDpspsfq2OAfdykDQKPcrt3lW7gMj4nsxehrR%2FILRrDWSWU%2Bm%2F085SJJhaMmuoPNOVLRmB3Fx%2F%2B48zD5tbLEBjqkAa0QS99TLd4%2B9rR5fdVCx048Zu6oijAriXg1CDNIyG7ztd%2FzK0rj7leoZ%2Fnc2KRQK%2FHKTgBYOTSzGs16qROI95rX9EDfZpyfmOIPB9tYp92%2BV4FUtToD5AuUpl7%2BZA2qaOOxvWu5%2BEpvQO8IiWVM0yt8%2BlpmxPCalmSpznTcHyj%2FBj7hkY9c6NoBxsDl9gLX1CD%2Fc4SGWFiFMMULhBZpLUcTffIH&X-Amz-Signature=c0270ef17cde8999b47701b1f8963a8f3794f90d7a87d09c932025b761ba2c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
