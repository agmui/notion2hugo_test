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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TU7D7IP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKldlXskEv2dxILyYqETmKq7qqna8j93YfKkpndvL2iQIgFnhrkKpufsmOvB9%2BTFi4nBDaXfqrcnxAytZlx9%2BAU7Qq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDLdmWIJKnyAx5zlU1CrcAwmvtr4hHYmG8UpxqDQjOY3m10BaUlbIrGsu5jLIDtInvabaALw1u0pgNVjFx8GGAScdna2tzlOvwa%2FQKOCfhtohBDyFlIP5iOM1Z6xy6oCV2QqL0tyhiSdAn0xqf4xNQiRdFAaYJmmbSQ75r8itGT755H%2FXaol%2B1ZxYeGoiHidGWdxs91CkvoIsdUBDYtwp3nsYURcYBmJ5aYp221YPOTfxf8jcATShGsBuOcTSE5C9OjZop7Kd594hn1lC9OnZAwxx3cUnZTd4YfxaVR1mOMeSTy4gkUCxEmU%2BgNDxMnIf3k38dGM%2F2iC6CmcwgvF3EAwwNbx%2FBBvN3rMMvFDY1UWOqgVWEkwTooI36E4ypXVhgP9XDZEay%2FXjnM1xFE2ByrdB1jOPhkwCrW8flkp5YFSS4UlnIdZhs4H5z1thvQgzLLh54MBx17%2BBuXvOFBbGzYgIa%2FJs9oCEpeeWrTdp8Os1sRWBN9l7M4DDGRG5l8o6tEz5VhPltxy1VYQ0t66dcXSFC3dPh0HGpQovWlCtnrG2WVvw1melbtzXnqWd2KnwzuIGNOWecmVU7c2sWJ%2Fso2%2BjHSAGsYiIF1QACZBNPR8wWdEyVgT7X%2BCVuFcrUYoOql2GhcS562xLDzlzMPKW2MEGOqUBRfgb03wvczWGyHlhXKrsfW%2FkzwZ5HFb0INeMA%2BKZzGke%2F6o%2BCV6g7%2B9sJE14gu9yblvhGBcHkXScdTMJIPeg2eUgrbRsks%2Biizc6zUJNCSJ1xrId2birAD6a6cuHncE8aoeMUG9zOcvw8xP9Db0Rr%2BYx0fW1wyZ3OFNeZ%2BlSdr6LE0hzLcxJKUIha0LZJgdnet8sK9a%2BGZMBtz1HOJfxqH2yBV4N&X-Amz-Signature=14001031434ce9414f88daae8b641948bdea1d41da7c26e74f9a7edb11ab5326&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TU7D7IP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKldlXskEv2dxILyYqETmKq7qqna8j93YfKkpndvL2iQIgFnhrkKpufsmOvB9%2BTFi4nBDaXfqrcnxAytZlx9%2BAU7Qq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDLdmWIJKnyAx5zlU1CrcAwmvtr4hHYmG8UpxqDQjOY3m10BaUlbIrGsu5jLIDtInvabaALw1u0pgNVjFx8GGAScdna2tzlOvwa%2FQKOCfhtohBDyFlIP5iOM1Z6xy6oCV2QqL0tyhiSdAn0xqf4xNQiRdFAaYJmmbSQ75r8itGT755H%2FXaol%2B1ZxYeGoiHidGWdxs91CkvoIsdUBDYtwp3nsYURcYBmJ5aYp221YPOTfxf8jcATShGsBuOcTSE5C9OjZop7Kd594hn1lC9OnZAwxx3cUnZTd4YfxaVR1mOMeSTy4gkUCxEmU%2BgNDxMnIf3k38dGM%2F2iC6CmcwgvF3EAwwNbx%2FBBvN3rMMvFDY1UWOqgVWEkwTooI36E4ypXVhgP9XDZEay%2FXjnM1xFE2ByrdB1jOPhkwCrW8flkp5YFSS4UlnIdZhs4H5z1thvQgzLLh54MBx17%2BBuXvOFBbGzYgIa%2FJs9oCEpeeWrTdp8Os1sRWBN9l7M4DDGRG5l8o6tEz5VhPltxy1VYQ0t66dcXSFC3dPh0HGpQovWlCtnrG2WVvw1melbtzXnqWd2KnwzuIGNOWecmVU7c2sWJ%2Fso2%2BjHSAGsYiIF1QACZBNPR8wWdEyVgT7X%2BCVuFcrUYoOql2GhcS562xLDzlzMPKW2MEGOqUBRfgb03wvczWGyHlhXKrsfW%2FkzwZ5HFb0INeMA%2BKZzGke%2F6o%2BCV6g7%2B9sJE14gu9yblvhGBcHkXScdTMJIPeg2eUgrbRsks%2Biizc6zUJNCSJ1xrId2birAD6a6cuHncE8aoeMUG9zOcvw8xP9Db0Rr%2BYx0fW1wyZ3OFNeZ%2BlSdr6LE0hzLcxJKUIha0LZJgdnet8sK9a%2BGZMBtz1HOJfxqH2yBV4N&X-Amz-Signature=b8ddf61dc78d2e107094b5db3648e5bba363dd76861d3d8566d13a0354b35568&X-Amz-SignedHeaders=host&x-id=GetObject)

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
