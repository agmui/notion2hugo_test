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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QP3E2QO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBoeg%2B1Xtc6WEeYr8dG%2BL2XBQUzBQIIlElnAJz3uMi3NAiEAu0mYmcZ0XaBLfSjoHyqTgWjtRj7NJlsTMPzFLZAW%2F%2F8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHrmGljD6akGehEoyCrcAzWaS64aTmuvji5EaWUxANkOcFgvSgwAaZs%2Bi9GaOc1b7k0eZmr2hLFHlxRm9R7SUhti8Q7Rvf5bV7Gcji45CE%2BWv519UplZyb1Kxt2v1i%2B7d7XkbTIfDtoRBkQ%2BvRHdKR0rwhQkMK74CU8CNQAK5hKlBJe%2FFolgkvGIPRmi6%2BOGgWtlaCbcqI37Pw%2FATpKHRU04CJ0smHag6W7ocUA%2Fy8DmGW0g06zVF1nA1soklbuhd5V8H%2FrOfNRYo1ewGzkEZLOjyfXi1w%2FiSwFIgggcPxI%2FE%2B8Ibpb5kBEaWf%2FtiKGxkICvMHRMCl3%2FPZW3RQhPdd8NNyNS9wPexUeHaD2C1OYiJwkzYiiHk1hKVcbtwXB44XvuRLvpODlCEhomD8wmNsgm3u6VtE8BOxlmurOSHUsDHqdqTjdu2TTN8XavBZrDIjPzcSNj%2FfUvDEaxdBFRR1Ki%2BAm88fQBRSvU1NTp2q10cfu5A1E67z%2BqvTf0uBoajDJheJqPjctd2QGH%2BNf0bj3DOUhthk6D51nQTTDXMwKYgilZtJtXIayDav5OPU2X94E0z6xWM%2BJ96dKspMz2ecY6C9c%2BEopF3umMTuGfK3vphs9jepW2yKIu%2BfrT0Lhg%2F4cXerTLidGVl%2FmGMN%2F36MIGOqUBtVj7iK%2F3AmZ%2BZHA2b8K%2Bmxo2w6FuNXbjVJYA59LqwQIKWte%2F%2BhesS96N36PBnjXorRvRW3rpWlwyeKhqAFgY13bzWXFKMXigvPP9hwJpXoNNeYD0qB7UPwxnlSJtxRnaudZY%2FwS96bTTKMGCvm2mwBwbSoDqro2uDG5azuup2e9QktwpCWraqCDFH5h0GVOqPEq3jk8%2Fb8kIpxepcoC%2FF%2F7KPqiT&X-Amz-Signature=1b4792b7dc1370f20f1c2bdc6a0aaa26cd080a9acfb6bf18adc89d502c7ad46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QP3E2QO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBoeg%2B1Xtc6WEeYr8dG%2BL2XBQUzBQIIlElnAJz3uMi3NAiEAu0mYmcZ0XaBLfSjoHyqTgWjtRj7NJlsTMPzFLZAW%2F%2F8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHrmGljD6akGehEoyCrcAzWaS64aTmuvji5EaWUxANkOcFgvSgwAaZs%2Bi9GaOc1b7k0eZmr2hLFHlxRm9R7SUhti8Q7Rvf5bV7Gcji45CE%2BWv519UplZyb1Kxt2v1i%2B7d7XkbTIfDtoRBkQ%2BvRHdKR0rwhQkMK74CU8CNQAK5hKlBJe%2FFolgkvGIPRmi6%2BOGgWtlaCbcqI37Pw%2FATpKHRU04CJ0smHag6W7ocUA%2Fy8DmGW0g06zVF1nA1soklbuhd5V8H%2FrOfNRYo1ewGzkEZLOjyfXi1w%2FiSwFIgggcPxI%2FE%2B8Ibpb5kBEaWf%2FtiKGxkICvMHRMCl3%2FPZW3RQhPdd8NNyNS9wPexUeHaD2C1OYiJwkzYiiHk1hKVcbtwXB44XvuRLvpODlCEhomD8wmNsgm3u6VtE8BOxlmurOSHUsDHqdqTjdu2TTN8XavBZrDIjPzcSNj%2FfUvDEaxdBFRR1Ki%2BAm88fQBRSvU1NTp2q10cfu5A1E67z%2BqvTf0uBoajDJheJqPjctd2QGH%2BNf0bj3DOUhthk6D51nQTTDXMwKYgilZtJtXIayDav5OPU2X94E0z6xWM%2BJ96dKspMz2ecY6C9c%2BEopF3umMTuGfK3vphs9jepW2yKIu%2BfrT0Lhg%2F4cXerTLidGVl%2FmGMN%2F36MIGOqUBtVj7iK%2F3AmZ%2BZHA2b8K%2Bmxo2w6FuNXbjVJYA59LqwQIKWte%2F%2BhesS96N36PBnjXorRvRW3rpWlwyeKhqAFgY13bzWXFKMXigvPP9hwJpXoNNeYD0qB7UPwxnlSJtxRnaudZY%2FwS96bTTKMGCvm2mwBwbSoDqro2uDG5azuup2e9QktwpCWraqCDFH5h0GVOqPEq3jk8%2Fb8kIpxepcoC%2FF%2F7KPqiT&X-Amz-Signature=d27248c6520559d7a25b4913d5ae3bd079fc44245dbcf42ea36f79d4e0abb73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
