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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAQUYQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fc9ErhsIhHMDyAPK59ASrfR4VoaEyo8gRvw%2F6AoZ2cgIgH1i%2Bihs8eJ5xClANasOiZTnHxjWyOPqouxuFCbo2r4MqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLTEmxewjECIszpDircA5UtZ0HEwEwSnp1ctoFatVfnEryp62chx8tL0L4EPxJ5Lexsy33AnYi115p9fIqd3o07wo5gZ08b652g5TOxTcYco8NSKgcCOz82WGyhzeCZ%2BhdZco8eHQhP3xcfv5y5aud%2Fv%2BmzIlPGBBGVtQbNBxdMh86U1BRjn3gIIB2EdvQT1rfo4FrZHYOU2wTFD2thwLStzyOGgZv67Lz9kNsPKt2aYDkjsY5vjofx%2FjAIF%2B8Qrkl%2FOtC2PHevY6fmPbykr7hgFl%2BPUbmdipRUzHcURjSb9Z52ILKkq3O9lqBVEg7wVZARXsvAcSLnqqI0HA5DCwMqgdtnmdqGjlgHv4LizBnxMseYr6ANEyTjXqKuiSzIdqdHHjxRdFgyMrOCkfH29b6MWkWZddymdqOTYJZqyxZYgc3HRQf%2FmgNVFYEre4ODP%2BsbbSiXxWL8w8HosIxKGGoxwho3rPjfWDO81NRIINPzt7j518nBD80%2FSc9lrXM%2BO5wJAswnOo2JG9dhpuJGLgk7YyuL2J%2FjDMdUj9cPv898qdfCDmCs6qIXuOEu2xgOYotw2eZJW5f5PFP9Wf3M%2B6n8KG2sKUWt6K6T%2FomVoF%2BWLPma1pzez%2B3X%2Fr0cJTHErWkLhp1ljfpMj17XMO%2Bcu78GOqUBk%2BLj0Re5jHBkYPcIgVHc%2BDY%2FnDEFRntDHx%2Fx%2FjfHRIrXYwTstk9hJlPPi3o4aLZN%2B67FGrYqSu05p7LBDZ4grUlRkY6%2FJMPb31XNY3qlThxQB01L1B02faIgpCuEusZCENhdVkXsVL%2FdPPRv%2FFu9C3LXKy4Hv3IELCQPK5S7U3WgQ4S8mtxACtZ0VBXgnOU45JE%2FRGZ%2F1xuJE0%2Fng4kWiSvBVkli&X-Amz-Signature=95eb469e9cc78d86e0e922241187dcacab815d3d93d3fd70dcce7c90a37722cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAQUYQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fc9ErhsIhHMDyAPK59ASrfR4VoaEyo8gRvw%2F6AoZ2cgIgH1i%2Bihs8eJ5xClANasOiZTnHxjWyOPqouxuFCbo2r4MqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLTEmxewjECIszpDircA5UtZ0HEwEwSnp1ctoFatVfnEryp62chx8tL0L4EPxJ5Lexsy33AnYi115p9fIqd3o07wo5gZ08b652g5TOxTcYco8NSKgcCOz82WGyhzeCZ%2BhdZco8eHQhP3xcfv5y5aud%2Fv%2BmzIlPGBBGVtQbNBxdMh86U1BRjn3gIIB2EdvQT1rfo4FrZHYOU2wTFD2thwLStzyOGgZv67Lz9kNsPKt2aYDkjsY5vjofx%2FjAIF%2B8Qrkl%2FOtC2PHevY6fmPbykr7hgFl%2BPUbmdipRUzHcURjSb9Z52ILKkq3O9lqBVEg7wVZARXsvAcSLnqqI0HA5DCwMqgdtnmdqGjlgHv4LizBnxMseYr6ANEyTjXqKuiSzIdqdHHjxRdFgyMrOCkfH29b6MWkWZddymdqOTYJZqyxZYgc3HRQf%2FmgNVFYEre4ODP%2BsbbSiXxWL8w8HosIxKGGoxwho3rPjfWDO81NRIINPzt7j518nBD80%2FSc9lrXM%2BO5wJAswnOo2JG9dhpuJGLgk7YyuL2J%2FjDMdUj9cPv898qdfCDmCs6qIXuOEu2xgOYotw2eZJW5f5PFP9Wf3M%2B6n8KG2sKUWt6K6T%2FomVoF%2BWLPma1pzez%2B3X%2Fr0cJTHErWkLhp1ljfpMj17XMO%2Bcu78GOqUBk%2BLj0Re5jHBkYPcIgVHc%2BDY%2FnDEFRntDHx%2Fx%2FjfHRIrXYwTstk9hJlPPi3o4aLZN%2B67FGrYqSu05p7LBDZ4grUlRkY6%2FJMPb31XNY3qlThxQB01L1B02faIgpCuEusZCENhdVkXsVL%2FdPPRv%2FFu9C3LXKy4Hv3IELCQPK5S7U3WgQ4S8mtxACtZ0VBXgnOU45JE%2FRGZ%2F1xuJE0%2Fng4kWiSvBVkli&X-Amz-Signature=59bc8ebf18125f9953353f744f1b0c7d9ff17d9b98aee22ab935359c1acaf173&X-Amz-SignedHeaders=host&x-id=GetObject)

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
