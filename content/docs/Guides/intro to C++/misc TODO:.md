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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSTLUQV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa4jPKbqazLf1wTiG5anBTVCcrfWCLiUNvPJscM8ZOXAiEAxNjEBlmDpu691vBbCLbtOfdNlM6r8YVnXSRO0wbT85QqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNUYSYGpJDmnlWgvircA0Dlcaa3v1aONnc1d7r6n7uCFRAOG0jdE6gm%2BLl29qA2lXV9lMdKahYOG4yJ4CTJkGwbEYc8oTLiaNwvwaVzeJp71cu8kuwIzqO%2FzsGrUjm%2B04WUgpSDNzuM2S1bpxyM8tm4JfXVJUPTPxbH0VVY9kDdyF%2F%2FEmcTBTPzpbXDAiFlet95gxo9Z1Dlcft9EDI6TXl3z49YTXRFRj06AZnO9q0T04A6i1ZIDbl5s1HfgQ9cGNQ8OYfrD2TglQ%2B%2FLIA8mCaGAyY%2FfVHTrhl2dd43bk98aFhAeU4DU2aXgZG%2BOdJobs5FKchWkNYfqLwdwfUEpRdzsoxSloMpIxEjTwJdfM0L%2BDw7pHp5Dq3%2FvfY1DZmY4LT07yi9CjuPFlr8cSx1l2TvuKI9OMlKGSLwLvSguyqKrNFtM0BUMo2pzvth0z%2FBQR%2FHqjCXcv2ETKJ5Ad%2B8Ovf8ciKn2mBfPRXa5kv%2BUMk4Au8WZErmyW4aFwUdIjnfH3JvYhzrxXQx6niZg0dsLo7vFhl58XJBZBHKgVQcj3znm0KxLIKJNe11oNrJHmFKMDKWJuXF1kD8MHPOeLnARxHw1nMxxkpmxv%2BY049VSHOzFhHqTsYe%2F2KAOyPZM%2Fhq3TTSrbIqFV4gohKTMO6s3L0GOqUBrb0GudzLWGE7ZzrbE4CNU%2F7IKZ0kXH7gZC8EXxMSRz8CuS%2FJGk86bI6ZK7KMFkt%2FWpc4SNQ%2BkfWf%2FFWfKvpJQ%2FnCEGncOJPAtsZ5dmxOLqL6vRP0cmVH2JnhoQj5a0q4XDtp9QzuoSwocn%2FwiPjuXR0tnX%2BmlKh75H%2BJ3dO3BQDzEGvNO5e3tkxFvPf6rp3gfF3cJDIqjhjCLvkncLDBjPNJT0qX&X-Amz-Signature=adacad809ae9747107c4186f45302dee5d42102f8df214a4641cad0f49b72184&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSTLUQV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa4jPKbqazLf1wTiG5anBTVCcrfWCLiUNvPJscM8ZOXAiEAxNjEBlmDpu691vBbCLbtOfdNlM6r8YVnXSRO0wbT85QqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNUYSYGpJDmnlWgvircA0Dlcaa3v1aONnc1d7r6n7uCFRAOG0jdE6gm%2BLl29qA2lXV9lMdKahYOG4yJ4CTJkGwbEYc8oTLiaNwvwaVzeJp71cu8kuwIzqO%2FzsGrUjm%2B04WUgpSDNzuM2S1bpxyM8tm4JfXVJUPTPxbH0VVY9kDdyF%2F%2FEmcTBTPzpbXDAiFlet95gxo9Z1Dlcft9EDI6TXl3z49YTXRFRj06AZnO9q0T04A6i1ZIDbl5s1HfgQ9cGNQ8OYfrD2TglQ%2B%2FLIA8mCaGAyY%2FfVHTrhl2dd43bk98aFhAeU4DU2aXgZG%2BOdJobs5FKchWkNYfqLwdwfUEpRdzsoxSloMpIxEjTwJdfM0L%2BDw7pHp5Dq3%2FvfY1DZmY4LT07yi9CjuPFlr8cSx1l2TvuKI9OMlKGSLwLvSguyqKrNFtM0BUMo2pzvth0z%2FBQR%2FHqjCXcv2ETKJ5Ad%2B8Ovf8ciKn2mBfPRXa5kv%2BUMk4Au8WZErmyW4aFwUdIjnfH3JvYhzrxXQx6niZg0dsLo7vFhl58XJBZBHKgVQcj3znm0KxLIKJNe11oNrJHmFKMDKWJuXF1kD8MHPOeLnARxHw1nMxxkpmxv%2BY049VSHOzFhHqTsYe%2F2KAOyPZM%2Fhq3TTSrbIqFV4gohKTMO6s3L0GOqUBrb0GudzLWGE7ZzrbE4CNU%2F7IKZ0kXH7gZC8EXxMSRz8CuS%2FJGk86bI6ZK7KMFkt%2FWpc4SNQ%2BkfWf%2FFWfKvpJQ%2FnCEGncOJPAtsZ5dmxOLqL6vRP0cmVH2JnhoQj5a0q4XDtp9QzuoSwocn%2FwiPjuXR0tnX%2BmlKh75H%2BJ3dO3BQDzEGvNO5e3tkxFvPf6rp3gfF3cJDIqjhjCLvkncLDBjPNJT0qX&X-Amz-Signature=e59f82afca61eeda75b007470b0b55fb772f07efebae061b4119bac700f1259d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
