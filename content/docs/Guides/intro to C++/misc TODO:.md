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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=0128a0c949f91a258e615313557a4ab27666b19eb642e3e16328cc26ea31914e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=8feb6fa7c9fbac313a8ac2e5dd02b976778e470273792677f2e5a394522532ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
