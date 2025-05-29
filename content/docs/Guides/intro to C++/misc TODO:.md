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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU62SOEC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWtTsB%2FTEglFv35ZviuW5t3qwwKWruy9x0%2Blpw77CW8AiEAnXU2FXnOpT%2Bcs9p5Rc%2FlNLNDdxrpZTM%2BC52VXSx5wdYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvlGY5ERZJxmTv2BCrcAx9PTpISDaHNNFvJL7t1m%2FQxYrfw28MAobDBlTddd8L7CjHIF4%2Flr1Qyzsf4vI1VI2AXE4KnMuTmy0VPifw83d8%2FMdSF0TEasEUU1fyfoGicIOvmEwoRSjnSBqTuGTu5OSZkyEotpU36q4PSuMnewmjD0xAETCJUd6l4c50e5N4brDWSztWJCf%2Fd1Nd9L1unUnLUBVeqTr1YgbPQmckcexmHTJh6GQBosP6FkaaHCAJbBmRYihG5yQY8ct2Mm7qlBD6vejAGVm7CkFBuoICu32lyLMD7U2JoPDVE9ZWeGrhOonNJJJC3JsaM%2FtCKubG7dV9lLNCvouGjxk6SxNl5xSXCF4gWloNiRgsYqyFhCjdzqe6VmWiAVTLu7PHLVbjp1XHVFGNVlOB8u9L7poZxkJpDZ3%2BLFLHRjcmavkxP0Y8oj9G8jF%2FmlAUAPTBQOKa%2BfKD2oqSgtN4M5%2Bm3SMkKATRcAjslFeFmT1ZW1UaDY16vZCeZ1wkZnHw8x1za%2BZW9RcztVlDH1E1uMhRBG9mKClmIHeJmU21tdgCMUyRQ1y7xylllfdtZDK0RuzOHBGAWQK6PwmGkPyB%2BzIFWlcZfxxZSVKdrXTPdVCW3TjTgWfckiTdXoRwD7b1zzEUWMJCJ4cEGOqUB119scPeQoSbO4r1OD%2FXcOEFEpskDyroTZbRKbV%2FMKsf%2B90Yy7dGqQvfFgSlEz8t3Rw8Cx1HHygaqKeERdlbc46%2B9c1v5THkuynFypIAOf4LiELYRhay9g4gqhLttpRtcjqzAgDc%2FS5o3a8KjcNCO291BSyg9rIbn3xTzqqZroIlUlLbNS9I%2BtDzj6xvEm4WNEj2KG4JEVm0QEeSbNeZD%2B1oXFyXH&X-Amz-Signature=457e4ef3cae45e9ec1abf534bf345f6cfd799976869ff406ae7b254ca30077a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU62SOEC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWtTsB%2FTEglFv35ZviuW5t3qwwKWruy9x0%2Blpw77CW8AiEAnXU2FXnOpT%2Bcs9p5Rc%2FlNLNDdxrpZTM%2BC52VXSx5wdYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvlGY5ERZJxmTv2BCrcAx9PTpISDaHNNFvJL7t1m%2FQxYrfw28MAobDBlTddd8L7CjHIF4%2Flr1Qyzsf4vI1VI2AXE4KnMuTmy0VPifw83d8%2FMdSF0TEasEUU1fyfoGicIOvmEwoRSjnSBqTuGTu5OSZkyEotpU36q4PSuMnewmjD0xAETCJUd6l4c50e5N4brDWSztWJCf%2Fd1Nd9L1unUnLUBVeqTr1YgbPQmckcexmHTJh6GQBosP6FkaaHCAJbBmRYihG5yQY8ct2Mm7qlBD6vejAGVm7CkFBuoICu32lyLMD7U2JoPDVE9ZWeGrhOonNJJJC3JsaM%2FtCKubG7dV9lLNCvouGjxk6SxNl5xSXCF4gWloNiRgsYqyFhCjdzqe6VmWiAVTLu7PHLVbjp1XHVFGNVlOB8u9L7poZxkJpDZ3%2BLFLHRjcmavkxP0Y8oj9G8jF%2FmlAUAPTBQOKa%2BfKD2oqSgtN4M5%2Bm3SMkKATRcAjslFeFmT1ZW1UaDY16vZCeZ1wkZnHw8x1za%2BZW9RcztVlDH1E1uMhRBG9mKClmIHeJmU21tdgCMUyRQ1y7xylllfdtZDK0RuzOHBGAWQK6PwmGkPyB%2BzIFWlcZfxxZSVKdrXTPdVCW3TjTgWfckiTdXoRwD7b1zzEUWMJCJ4cEGOqUB119scPeQoSbO4r1OD%2FXcOEFEpskDyroTZbRKbV%2FMKsf%2B90Yy7dGqQvfFgSlEz8t3Rw8Cx1HHygaqKeERdlbc46%2B9c1v5THkuynFypIAOf4LiELYRhay9g4gqhLttpRtcjqzAgDc%2FS5o3a8KjcNCO291BSyg9rIbn3xTzqqZroIlUlLbNS9I%2BtDzj6xvEm4WNEj2KG4JEVm0QEeSbNeZD%2B1oXFyXH&X-Amz-Signature=66c8374a548cdccf9ff209ad8744c1d4e56f3401772c6de8c200def7c5e87cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
