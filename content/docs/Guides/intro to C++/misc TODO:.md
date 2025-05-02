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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDO6YQ3T%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIA206e6I0B9b%2Bo207zymGfOeptGEE9HihLhkA2RbBvecAiBdJgZuBipnuROGyUvg71MK5RazbTAc3COdYcVk2Jda%2FCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqi8ZnKr3KeofAeFKtwDfpbd8bxIeesE4InLUHQKg7%2BjWBinuBnnOqMLjx7zF6fIlArpff2j6XwWECb8BZHWdqsVu5BbwvDlcYT7bT8gBRODXByG6iJpuSGBjmx7VNKF7Ebs1sU7Xx4awZf1PlM8cRTlRRO0i%2BRDO6ydLJPYeKOkCVoBatP3kkZhVPeFx1cxdcD9dfOrihXxuhYsJwPECULN6AeeULP9oudrGw%2FTXg1AG9Bl3qa2wKvl9AYZHqDwvcOtB586O%2Flfk%2Ff%2BaND%2F86jDyjTAGwAR1WtjuBWddNcUs14AUpRgYoRN3Y59x%2FU20XJSeJLtY2QUB%2BaNwrZXCmJFaWvNeSkRWEZ9B4tF3xt6HDxvDfgVLcoMH07n7U7GW6VjwKiBnL4PTmUQWSW%2B0x2kqhg2f0OH5XEVcdSbGYqSax75az%2BXILrTQcIi%2FZP%2FQXcU05lKEi1t2ThPODhdfTwoJcb83fAUe6YSqAZdml99uFlWCiTgMFditNPle3KDxuwiAi0maJGCaYdUCGHM4ukZXKXJmUCZgCDxtC7fMo4K2h5Zsnd1KqYtj70zZcxJSw%2BYItmWbdsY8KaXziFPsGuJQ6zMRVhowQX4pDI97Sd3EVid%2BycorB9xwoplE7gvD74qpPhUUGgVIKEwuP3SwAY6pgE9OYwPbJVKYVJQTfHydlDv8l92CmBkj84%2FnPsyAiFbxuJ0og95Z4AE29dvFqhhFKCQRMaluFdlo8ub6EOvyh9QgpxsC8r6oTBQHbeXSCd0NjSWHGc%2B%2BHbU%2BkQoGGpVtAH7rSEwdYdr6zq7lC2WGypsg4fjyRc62J2i3TvC26urUJFoJhhHuQtAvAXbBuRHbj4DZ747jOsZ5Mltw3nV2X6wp3BAerM8&X-Amz-Signature=96cb710c15534e35335e1e3d3b3540160b60efb3e54b3198a89d9c24237a479f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDO6YQ3T%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIA206e6I0B9b%2Bo207zymGfOeptGEE9HihLhkA2RbBvecAiBdJgZuBipnuROGyUvg71MK5RazbTAc3COdYcVk2Jda%2FCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqi8ZnKr3KeofAeFKtwDfpbd8bxIeesE4InLUHQKg7%2BjWBinuBnnOqMLjx7zF6fIlArpff2j6XwWECb8BZHWdqsVu5BbwvDlcYT7bT8gBRODXByG6iJpuSGBjmx7VNKF7Ebs1sU7Xx4awZf1PlM8cRTlRRO0i%2BRDO6ydLJPYeKOkCVoBatP3kkZhVPeFx1cxdcD9dfOrihXxuhYsJwPECULN6AeeULP9oudrGw%2FTXg1AG9Bl3qa2wKvl9AYZHqDwvcOtB586O%2Flfk%2Ff%2BaND%2F86jDyjTAGwAR1WtjuBWddNcUs14AUpRgYoRN3Y59x%2FU20XJSeJLtY2QUB%2BaNwrZXCmJFaWvNeSkRWEZ9B4tF3xt6HDxvDfgVLcoMH07n7U7GW6VjwKiBnL4PTmUQWSW%2B0x2kqhg2f0OH5XEVcdSbGYqSax75az%2BXILrTQcIi%2FZP%2FQXcU05lKEi1t2ThPODhdfTwoJcb83fAUe6YSqAZdml99uFlWCiTgMFditNPle3KDxuwiAi0maJGCaYdUCGHM4ukZXKXJmUCZgCDxtC7fMo4K2h5Zsnd1KqYtj70zZcxJSw%2BYItmWbdsY8KaXziFPsGuJQ6zMRVhowQX4pDI97Sd3EVid%2BycorB9xwoplE7gvD74qpPhUUGgVIKEwuP3SwAY6pgE9OYwPbJVKYVJQTfHydlDv8l92CmBkj84%2FnPsyAiFbxuJ0og95Z4AE29dvFqhhFKCQRMaluFdlo8ub6EOvyh9QgpxsC8r6oTBQHbeXSCd0NjSWHGc%2B%2BHbU%2BkQoGGpVtAH7rSEwdYdr6zq7lC2WGypsg4fjyRc62J2i3TvC26urUJFoJhhHuQtAvAXbBuRHbj4DZ747jOsZ5Mltw3nV2X6wp3BAerM8&X-Amz-Signature=cc00076dbfe34c6c6ef53a50ceb9a5c1134be5208439bc618d9abc600c9f573d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
