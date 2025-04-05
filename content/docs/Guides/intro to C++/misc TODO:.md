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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5VU2ZZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBm%2FS%2Fxzr6dccajU%2BQrXK1UQq6aDKx1eHG546oPjOrngIgcqHzt6tCLQP9crTcqGofzKPDXFS%2FUZUCgoVSn4k9NQsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKL%2FDxS5k95SHzmGQCrcAwNZo9%2FVN1LFj9qhfteLgG%2BjCUgRDctrWPxlq3iPBSwhS7Mln3LsUM8BUuatR87xKd%2BXak4OY0eClST3silkPLhvizAVBDsHNnoSeDN%2BvUbS8d%2BcgiwJMBLdMzOuvdFdqpKz%2FfXOacacAezHHuCuHWev9FsWV2fyqyEQHNLETfnp9gmKk6UwWLnNVrPCxN%2BCn61ot57QOx9vUGe3co82K4XjAsm7DLsTDwW3xAlOs5IOIINUBZ37qLnTVe%2BJni2ihQ1UssDdmL%2Fk8h213hisF4U8GaTBxhjpEaFL1dRylYSt7RNaf%2FCUO37PzF%2BnHmISexotNmfBGzLe5ZkhW9rb2aFlgo7d9zyWd5dr5brGoGeIfu4CXaIiHuLeCsbutMcsiXJ2z4RD9LEFU7BXqIVckwMuyaZWzGj1QnlvpjnjNdpvUUPXRqUtkl6cYZpiT89HPrRJLCUMMdnTiyJVn6hWj6ZECgvIrB4zc7GZ86kxtcN1PiDWQzRr9OlxrRLCQ9qIyWQrXnh72lxu9voIDhqDGXslWqVCC5tBoZyqGyD5h5GptZXNR4BfvTha1wfFx08W77O8V6PHQ9xGbCi%2FpCtYrMnao4mObhFPZJDBxpGTX2Zv65oOOnWA4E7G2BXRMK6Dxb8GOqUBGIGsiUtXQQ3gMA%2FJsc2sEPkgB5kuyA3Mm%2F%2FjEPCH3M4HkgTSFjy%2F%2FJTh5j6K%2BOmQtmdefgu13RyJTghL10K%2By1elv7hk2ASJmTu0m0XhDTh45AgrOV640UBlshX7Sj%2FfhYZUtmRDr0Q%2B7A9y9JcQK72vm6xDd%2FN1tk2GVk1%2BaVr47%2Baj0SO6jeUeGS3KXyV5cYlSVAB2u6q3AZDClnbqlUpMXs9K&X-Amz-Signature=67f8ad36309ffb1666193086af6a01fe969d911ce7462e14457ca86cca838c31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5VU2ZZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBm%2FS%2Fxzr6dccajU%2BQrXK1UQq6aDKx1eHG546oPjOrngIgcqHzt6tCLQP9crTcqGofzKPDXFS%2FUZUCgoVSn4k9NQsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKL%2FDxS5k95SHzmGQCrcAwNZo9%2FVN1LFj9qhfteLgG%2BjCUgRDctrWPxlq3iPBSwhS7Mln3LsUM8BUuatR87xKd%2BXak4OY0eClST3silkPLhvizAVBDsHNnoSeDN%2BvUbS8d%2BcgiwJMBLdMzOuvdFdqpKz%2FfXOacacAezHHuCuHWev9FsWV2fyqyEQHNLETfnp9gmKk6UwWLnNVrPCxN%2BCn61ot57QOx9vUGe3co82K4XjAsm7DLsTDwW3xAlOs5IOIINUBZ37qLnTVe%2BJni2ihQ1UssDdmL%2Fk8h213hisF4U8GaTBxhjpEaFL1dRylYSt7RNaf%2FCUO37PzF%2BnHmISexotNmfBGzLe5ZkhW9rb2aFlgo7d9zyWd5dr5brGoGeIfu4CXaIiHuLeCsbutMcsiXJ2z4RD9LEFU7BXqIVckwMuyaZWzGj1QnlvpjnjNdpvUUPXRqUtkl6cYZpiT89HPrRJLCUMMdnTiyJVn6hWj6ZECgvIrB4zc7GZ86kxtcN1PiDWQzRr9OlxrRLCQ9qIyWQrXnh72lxu9voIDhqDGXslWqVCC5tBoZyqGyD5h5GptZXNR4BfvTha1wfFx08W77O8V6PHQ9xGbCi%2FpCtYrMnao4mObhFPZJDBxpGTX2Zv65oOOnWA4E7G2BXRMK6Dxb8GOqUBGIGsiUtXQQ3gMA%2FJsc2sEPkgB5kuyA3Mm%2F%2FjEPCH3M4HkgTSFjy%2F%2FJTh5j6K%2BOmQtmdefgu13RyJTghL10K%2By1elv7hk2ASJmTu0m0XhDTh45AgrOV640UBlshX7Sj%2FfhYZUtmRDr0Q%2B7A9y9JcQK72vm6xDd%2FN1tk2GVk1%2BaVr47%2Baj0SO6jeUeGS3KXyV5cYlSVAB2u6q3AZDClnbqlUpMXs9K&X-Amz-Signature=a2f7ba317aa14f22dbc2a3d0d7ca8c70c2a22e8d925890021962192ace188548&X-Amz-SignedHeaders=host&x-id=GetObject)

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
