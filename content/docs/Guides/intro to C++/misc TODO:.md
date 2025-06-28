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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z22I4LSO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAkcsnQXwDxPD8tqm2wju35ilt3yan3L9KrYE%2BKi8yiuAh8FkQuKA9u7q0A8S13b6Hul7HbLzmcw%2BAlYZXNYt8NSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3V%2FHYQenq0uKzrwq3ANVkCHY69oAa99WFyX40FzRVAQXQNCX7prmc6%2FeTwx39fUVLV6g3oLAwceWJ4zg14pqY17scdPaqF3Kbn3YMV06oNqpY7yuM6YM7IQNUEejfYU%2BvGm5nX3qIQOL3hC4jAyptO1Ju%2B%2FquYUci8V2BOBckHscZ5wJ9o1PkFzSOGv4dUzSbxqZBVRMlC0Y5UisXCPtS%2B5ROu%2BXZTFKI8%2FofA9DUdD4YmLzwfqTXZQ%2FkBLxEZG%2Ff%2BhjBA4RyrH2IWWq7DzSA8gN%2FLDDVeXECy1Hgi3SlZs1s5PiBmIyrwTvJ%2Bmj0s2akdRGEaFMxbgJJraO30LWvwkzAaQXAZOtfhTVbpSjHro17Vit3JEIQ2xg28i79W7R%2BW%2By4BXoQZqV1RLQ2WfJcVj3xcjRN%2FX1ss8thXKcRhykwbnPYxSGXePyY04o4CRty5QGu60tNQLHWh%2Br1pCKWB9hAzuiJlEWbboevBUmzmtKubw2XXM5WrRicW91m%2Fi2qW4c6BK04EICwniFzCQkfvkCER83wU8eq3yJTd4ngtBfKeGo3tnIq5I14DtCtBfR0FsVhQrsqnjG5ZM1dGEW3aJwPCF3LvJXVccxIvwfnX6dTNzEytrIVMuNbHUfuESnQSbQ01NCYdDG5jC19IDDBjqnAVqy1NZYY%2BvutfyuQ79bZGeYzhl90C%2Bjnl8JUOBo0EX72wMy5c6ktdtTERtcqhNhbmz%2FysN1aVPdalditzjpN8o83ZK%2BPyO8DV%2BUq%2BkHwmo6d4AmVVV2SydY69m%2F%2F6zz6b8s1MnSh%2BvnSDRGeIdEWujOZR145jdNkZZIWI%2B%2Fhph3hzmyv%2BYqc8SMPGyukmKbvMRXLZVxNNPrbLdY4%2FHW4d1AGatKwuz2&X-Amz-Signature=eae39c0700e1a31adc9eafa88475b8d0209de6a6f6bac1ba98806335e05ed217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z22I4LSO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAkcsnQXwDxPD8tqm2wju35ilt3yan3L9KrYE%2BKi8yiuAh8FkQuKA9u7q0A8S13b6Hul7HbLzmcw%2BAlYZXNYt8NSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3V%2FHYQenq0uKzrwq3ANVkCHY69oAa99WFyX40FzRVAQXQNCX7prmc6%2FeTwx39fUVLV6g3oLAwceWJ4zg14pqY17scdPaqF3Kbn3YMV06oNqpY7yuM6YM7IQNUEejfYU%2BvGm5nX3qIQOL3hC4jAyptO1Ju%2B%2FquYUci8V2BOBckHscZ5wJ9o1PkFzSOGv4dUzSbxqZBVRMlC0Y5UisXCPtS%2B5ROu%2BXZTFKI8%2FofA9DUdD4YmLzwfqTXZQ%2FkBLxEZG%2Ff%2BhjBA4RyrH2IWWq7DzSA8gN%2FLDDVeXECy1Hgi3SlZs1s5PiBmIyrwTvJ%2Bmj0s2akdRGEaFMxbgJJraO30LWvwkzAaQXAZOtfhTVbpSjHro17Vit3JEIQ2xg28i79W7R%2BW%2By4BXoQZqV1RLQ2WfJcVj3xcjRN%2FX1ss8thXKcRhykwbnPYxSGXePyY04o4CRty5QGu60tNQLHWh%2Br1pCKWB9hAzuiJlEWbboevBUmzmtKubw2XXM5WrRicW91m%2Fi2qW4c6BK04EICwniFzCQkfvkCER83wU8eq3yJTd4ngtBfKeGo3tnIq5I14DtCtBfR0FsVhQrsqnjG5ZM1dGEW3aJwPCF3LvJXVccxIvwfnX6dTNzEytrIVMuNbHUfuESnQSbQ01NCYdDG5jC19IDDBjqnAVqy1NZYY%2BvutfyuQ79bZGeYzhl90C%2Bjnl8JUOBo0EX72wMy5c6ktdtTERtcqhNhbmz%2FysN1aVPdalditzjpN8o83ZK%2BPyO8DV%2BUq%2BkHwmo6d4AmVVV2SydY69m%2F%2F6zz6b8s1MnSh%2BvnSDRGeIdEWujOZR145jdNkZZIWI%2B%2Fhph3hzmyv%2BYqc8SMPGyukmKbvMRXLZVxNNPrbLdY4%2FHW4d1AGatKwuz2&X-Amz-Signature=fe20142a80ae681ecb5c1fca951085b081b88c31bc0e2ef30b3d7892323b1fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
