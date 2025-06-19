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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2GAEGL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCENWyV4dU0ZdWaPQqzB%2BpKgQP5AwKRKoX3Z5KA8CEdUQIgbfQV6J8mHkHZn7iwu1IE7qwlh%2FaoD3wBHlEwCyAiJqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkGUfEGVmw9mbfKsyrcA7G2AahDusPl2Gmegoj8nrjPSrWWZyXsVv7iHr4ehvvrypstx5otr2%2F4ycIqDF1dCsskzTOUvETexX3mFAvceKxQVjL%2FOVAIAcf%2B%2BabComCLd29A89xB6C8VNIZp9RmR1djYUlHXAzda3w454Y7MnIefCDOoynAGBYgVoMoAZghqLGXFBgRqCv4BUPi4OorkfBxWGRWuRPSiq5EfztazVgBftmYyl58g7gt7T12o%2F993oUZ%2BOGrgnNSFblxVYnCcUSPL0ayTo4Issx3wz3vt1aYuiXi7d8FGrAbx%2BN2jv8ogTrq1wgeoWTOj72csyFQzUOmWpYV9uPUBh9hlztw6GO%2Fa0KR4zcjCnM0M7hktXC8qJNwq351r8i89wQyjofWg8JbF5uy00jnszv2h7UQqbK2Gqu8vJZ%2FpmJQjV2L8%2FauODDpLCTxoK0ZoU7plV%2FM5QfTeiybbuIXDxzRq%2BMOdVLUwRO3R3DjzO8Z4sn4CTZ71cB6THwkIvwDKNa%2ByPpcbaLZg9Et5NC573jkVWtyVGXfnQ%2FKDP2lW559ytCHxZwzQrWsatMz9UgCUew4MH5MIUAxVMikCHEDKmJHWUIdoEKhogF4OORfh%2B3erdO4z%2FwQTRDNVn9FHRQ7rqAGzMMre0MIGOqUBhS%2FEeSSXbRXraw1aTfSAoBp8nAyq44ooggIgHCkvRNL4j5VjVm2Wv%2FJPRDcysa%2BnPAMpuNPzOxURC32HoQqUO0BvvHzAyN57rPWY94puILXzQcjXLhrBS6M4KQ5zrfFaF2fc6GvU0etT1RFkCFLFYURMCtkLd2OHGjlwLg4U4yKgFBk0ubM08378WvQIll0y7qUyR9n73C0KwVmBAlQu2UTKNTyT&X-Amz-Signature=f0cb8612954af827b1c79dd155e55339d7bfb73dde0f52dc885e5dce7f0fb8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2GAEGL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCENWyV4dU0ZdWaPQqzB%2BpKgQP5AwKRKoX3Z5KA8CEdUQIgbfQV6J8mHkHZn7iwu1IE7qwlh%2FaoD3wBHlEwCyAiJqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkGUfEGVmw9mbfKsyrcA7G2AahDusPl2Gmegoj8nrjPSrWWZyXsVv7iHr4ehvvrypstx5otr2%2F4ycIqDF1dCsskzTOUvETexX3mFAvceKxQVjL%2FOVAIAcf%2B%2BabComCLd29A89xB6C8VNIZp9RmR1djYUlHXAzda3w454Y7MnIefCDOoynAGBYgVoMoAZghqLGXFBgRqCv4BUPi4OorkfBxWGRWuRPSiq5EfztazVgBftmYyl58g7gt7T12o%2F993oUZ%2BOGrgnNSFblxVYnCcUSPL0ayTo4Issx3wz3vt1aYuiXi7d8FGrAbx%2BN2jv8ogTrq1wgeoWTOj72csyFQzUOmWpYV9uPUBh9hlztw6GO%2Fa0KR4zcjCnM0M7hktXC8qJNwq351r8i89wQyjofWg8JbF5uy00jnszv2h7UQqbK2Gqu8vJZ%2FpmJQjV2L8%2FauODDpLCTxoK0ZoU7plV%2FM5QfTeiybbuIXDxzRq%2BMOdVLUwRO3R3DjzO8Z4sn4CTZ71cB6THwkIvwDKNa%2ByPpcbaLZg9Et5NC573jkVWtyVGXfnQ%2FKDP2lW559ytCHxZwzQrWsatMz9UgCUew4MH5MIUAxVMikCHEDKmJHWUIdoEKhogF4OORfh%2B3erdO4z%2FwQTRDNVn9FHRQ7rqAGzMMre0MIGOqUBhS%2FEeSSXbRXraw1aTfSAoBp8nAyq44ooggIgHCkvRNL4j5VjVm2Wv%2FJPRDcysa%2BnPAMpuNPzOxURC32HoQqUO0BvvHzAyN57rPWY94puILXzQcjXLhrBS6M4KQ5zrfFaF2fc6GvU0etT1RFkCFLFYURMCtkLd2OHGjlwLg4U4yKgFBk0ubM08378WvQIll0y7qUyR9n73C0KwVmBAlQu2UTKNTyT&X-Amz-Signature=18109177db5b891a065038348cc9109da934b173039597e10e843c3d3bf7bd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
