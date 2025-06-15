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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73PN6FD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBgi%2Fp3RWPe3YfxC81qO7E8FRfldXPD2JxlST4DlTjfSAiEAlRkkkUHMZUSqUG7Zqq8U25fZpavYkF6qbWhGE2jbMIcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLPQ9V%2F2D4xAGLwumCrcAw9V0GPYfRtwiuVyN%2B9TrbyNkxXrZmj52eBTJm0Qvs7v3DxesokeGJIv%2BpKwBGBECTLbx%2Bc%2BkA2sBbxw6anA3MpT4YXTcTNfu4q%2FaJiLbYR3dHIpx9%2FDOD7VxT5bU%2FlxFsT2SWAK8%2F7rIYLQcB%2FatYOvIIT7tz%2BZGeQXK2DQEFlrue34hRByoj3mFK4Onnc6bRtAJsUdh48lFkYfK1rq49VmEAq3EMatT4Et8yeqlVjjTvwzEVvmXmK3WHTgvjrnRZKhHEn6VPB3aAYWNRvZSobVcRnHKfIepw%2FoPvy2F62ZriN15DqQ3Jl7%2B0ztGnp8F1gTYf6lHsYEu%2BognTxl85QovVAduh7BqT9F1ll86yoNe6nRoALfNi2vF35FU1Sfw%2BS96t4W2PHvp0iTCzTBz4SRzkxrdj5HwTnm5cFFgX%2FYojPqOOP4G6UjgGLYpEhIkYA6ccgwOtX89oDJLMrmw4yT7t6AWY%2Bs5TYQgDCG8rMF8FV79heqXSvAehGslI8Dhh%2BplSCAnP6sE9VSEChVJ%2F4p1%2FZY2hkv7KKZCP3HZw7CbQlseTMPnx%2B7EGhIf7qxhu%2BrWJn1C4N%2BWyKum%2BGEfQ9Dz1zX5MruZohuZkv8QMvcEMsYCwxLLDBj%2BX3yMNasucIGOqUBcPCzcboKk4kI%2BZQPfU2UdF%2B6SChFZo0Ta4RRp%2BxadEV8znTGGCiIbPNA9OYh17FDgVjGMMzu%2FRES5ULTuRqLXnaswD6ABV0wwEu08jeliFN2ZdTmgAHweQjUFoREucWTOeilSpOgsQxB0TSDQd66HriXUHgOCP3MLYa8U9UwjZjMrNfcnhA3k6ll%2FW1OUuGiO0h5kSmrG7Sb07%2Bd1v0A7gNkSBlh&X-Amz-Signature=e469c2c3a59a3ef271ce5cce2786402be3b6fbe0bcbba22034db23be7c8c6d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73PN6FD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBgi%2Fp3RWPe3YfxC81qO7E8FRfldXPD2JxlST4DlTjfSAiEAlRkkkUHMZUSqUG7Zqq8U25fZpavYkF6qbWhGE2jbMIcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLPQ9V%2F2D4xAGLwumCrcAw9V0GPYfRtwiuVyN%2B9TrbyNkxXrZmj52eBTJm0Qvs7v3DxesokeGJIv%2BpKwBGBECTLbx%2Bc%2BkA2sBbxw6anA3MpT4YXTcTNfu4q%2FaJiLbYR3dHIpx9%2FDOD7VxT5bU%2FlxFsT2SWAK8%2F7rIYLQcB%2FatYOvIIT7tz%2BZGeQXK2DQEFlrue34hRByoj3mFK4Onnc6bRtAJsUdh48lFkYfK1rq49VmEAq3EMatT4Et8yeqlVjjTvwzEVvmXmK3WHTgvjrnRZKhHEn6VPB3aAYWNRvZSobVcRnHKfIepw%2FoPvy2F62ZriN15DqQ3Jl7%2B0ztGnp8F1gTYf6lHsYEu%2BognTxl85QovVAduh7BqT9F1ll86yoNe6nRoALfNi2vF35FU1Sfw%2BS96t4W2PHvp0iTCzTBz4SRzkxrdj5HwTnm5cFFgX%2FYojPqOOP4G6UjgGLYpEhIkYA6ccgwOtX89oDJLMrmw4yT7t6AWY%2Bs5TYQgDCG8rMF8FV79heqXSvAehGslI8Dhh%2BplSCAnP6sE9VSEChVJ%2F4p1%2FZY2hkv7KKZCP3HZw7CbQlseTMPnx%2B7EGhIf7qxhu%2BrWJn1C4N%2BWyKum%2BGEfQ9Dz1zX5MruZohuZkv8QMvcEMsYCwxLLDBj%2BX3yMNasucIGOqUBcPCzcboKk4kI%2BZQPfU2UdF%2B6SChFZo0Ta4RRp%2BxadEV8znTGGCiIbPNA9OYh17FDgVjGMMzu%2FRES5ULTuRqLXnaswD6ABV0wwEu08jeliFN2ZdTmgAHweQjUFoREucWTOeilSpOgsQxB0TSDQd66HriXUHgOCP3MLYa8U9UwjZjMrNfcnhA3k6ll%2FW1OUuGiO0h5kSmrG7Sb07%2Bd1v0A7gNkSBlh&X-Amz-Signature=ffd638b95e1002b3d9e918d6ddf6a2fc2d379102d60ef4f26afa6c90dc4774f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
