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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2LUTSE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqsnEQwyywlyFtnjbS6nVT35JR8pTauO9BJsRm1LH4eQIgcjnMAdLomfSMVgQMj8VHlIWjzalpJUDDqemzYvS64TgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd12MXn8nZmXWwKnyrcA2vJrK0JUqoMefStzyBx9gAglfyv6t%2FFwzGJi4ocV5P%2Fbcukt7T8P5Xkp33vDQ%2FFPmYiEKwEULTvvHPmLA1b3guS4hqin%2BOwnSsoHtz9dcO5B%2Fp7jPZGC2Ea2Inl2UCDf2q%2FPWy%2F8LvtM36eCpPqgbiK3iZxUnS8AOVkRHRRgoVQt3kPhMM3JOe%2FuAVlED4Qy4A1zSzNc0QfBAQpbrXuKYT3RheDzaLm5cu5MRx83rNwTW16aIRZq83FGaFT0uh9yl26HgRVgSiDuPFaPEGyiy8CmLkh3L8Bs8sL0ZAV2sl6EnFQcNg8eA9Y8EgXqlAUHZhDZr29B00yYhGNLLynZhANlYgrC%2Bh6IBPEisj5E%2FIoxxEEhxNoI9GonQgnKRFd0NIIkoSi2ycGWhcYtR%2B9Atoj4QDuDVlN4qqfIJA4pMtMSEiZSm8Fu9SkQUz67K5AjuVUBrTFxHxuRx0GQ0gcfNE1THD8AMjbDu2E4LadTTO2lGb5LN8RmKg5v0%2ByxOJWGZcroBpdiW5G8cersdhWWYLyo31VzJ%2F2VUbL1GUQwoxlrsom2ERLoP71xkic17C89OYJi1q0GzeYorK9jo1UR6S0Y3qoBBQBk32ncxXrmLDO8l9rdUZ%2BzCBMTzdGMNCenr4GOqUBVFff5nkAOE9AliYDmg%2Biicaum%2F6uGOUsh%2FHPgHipfFhfIh8JUpLcQ5iw9uo2Y3xIkEFIzEtgkrFzhiLzmfVhlYoS2bsPKEgrHv8Vr7661we1I3JflOchLnv7rGv%2B03IirReN5jSS%2Bs6uERpnRXdFLBJQJxfD9hhV%2FJ8ywNggvehkCVgRIWAHaAltBxZR0Lijd%2BYB%2F2WHXUSAq%2F5Di82ca5zfapHX&X-Amz-Signature=84750c8c20b4716bc8c31185ab9cd7dabad4a6478d6e98553a1ec0cd517cd5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2LUTSE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqsnEQwyywlyFtnjbS6nVT35JR8pTauO9BJsRm1LH4eQIgcjnMAdLomfSMVgQMj8VHlIWjzalpJUDDqemzYvS64TgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd12MXn8nZmXWwKnyrcA2vJrK0JUqoMefStzyBx9gAglfyv6t%2FFwzGJi4ocV5P%2Fbcukt7T8P5Xkp33vDQ%2FFPmYiEKwEULTvvHPmLA1b3guS4hqin%2BOwnSsoHtz9dcO5B%2Fp7jPZGC2Ea2Inl2UCDf2q%2FPWy%2F8LvtM36eCpPqgbiK3iZxUnS8AOVkRHRRgoVQt3kPhMM3JOe%2FuAVlED4Qy4A1zSzNc0QfBAQpbrXuKYT3RheDzaLm5cu5MRx83rNwTW16aIRZq83FGaFT0uh9yl26HgRVgSiDuPFaPEGyiy8CmLkh3L8Bs8sL0ZAV2sl6EnFQcNg8eA9Y8EgXqlAUHZhDZr29B00yYhGNLLynZhANlYgrC%2Bh6IBPEisj5E%2FIoxxEEhxNoI9GonQgnKRFd0NIIkoSi2ycGWhcYtR%2B9Atoj4QDuDVlN4qqfIJA4pMtMSEiZSm8Fu9SkQUz67K5AjuVUBrTFxHxuRx0GQ0gcfNE1THD8AMjbDu2E4LadTTO2lGb5LN8RmKg5v0%2ByxOJWGZcroBpdiW5G8cersdhWWYLyo31VzJ%2F2VUbL1GUQwoxlrsom2ERLoP71xkic17C89OYJi1q0GzeYorK9jo1UR6S0Y3qoBBQBk32ncxXrmLDO8l9rdUZ%2BzCBMTzdGMNCenr4GOqUBVFff5nkAOE9AliYDmg%2Biicaum%2F6uGOUsh%2FHPgHipfFhfIh8JUpLcQ5iw9uo2Y3xIkEFIzEtgkrFzhiLzmfVhlYoS2bsPKEgrHv8Vr7661we1I3JflOchLnv7rGv%2B03IirReN5jSS%2Bs6uERpnRXdFLBJQJxfD9hhV%2FJ8ywNggvehkCVgRIWAHaAltBxZR0Lijd%2BYB%2F2WHXUSAq%2F5Di82ca5zfapHX&X-Amz-Signature=c80a033e9b84cd65f6d1278e86476b656fbddb42ad95351f7121547c4ae7eec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
