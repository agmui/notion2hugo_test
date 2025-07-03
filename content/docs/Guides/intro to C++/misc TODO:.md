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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEG5RT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBS6eWdVuq7e0Ef5fFaL%2FkR5ueT7fok8Ihw%2FX4XKwGtrAiEAoTYKKfhpE4n2ckSZAAbHHJP88YCKa94wUMy2kiStt2gq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK53ZNb08aU9LlF9XircA2vNsCSXtyAfNFlSZ440M5g9mbq0NsI0MqJhFq0%2FXN3c3gANwW0cLmmpKP00cic0MjLMHVU0NOqkleOPLl1BSFh%2FIN4GKg2yDRMQ%2BvsAbqiHqTLrWVaIy%2Fbu5Rtewx%2B6gT0NVVdExXG9kilWsnDmvpRN7VyLvyTCuXixjOtMghQ0RPRAYjtqvZvXOZGR8AhYWebLQvVInRkj9sBLf1D%2FsSarFZxr1%2BNGMJMnnkDUw091IeDAmbkPd9N%2BjJJNJY3C%2FPkuHt5oYhyy6pzqax7nDVEQMP0k9FpA7aWOPLW5O3Re80HohBQtsL%2FG8NxrlvCEuMhdts2NWMR1fu9nkGHHuQRO4qy63E%2FeXiA5fpAHo%2BGL1al4o2MQhsseGyeYXothUuBesTHz5z88CrFx%2FK%2Bo%2B86pqodCOhePEWGvnONawxugEnvh7XvJTNaZ0Nt5ctnxPRIsBmYwoagxwa4ybremOMBEHwp5MN1y6VDxP4es4HGPPTAjcgyAR8GkgQpCYQ7TcNIVISlg6oVBqXQD0zyV40tTwSDHat2YSlWemeO05yx%2B%2BVY6h6UD51oYGPT6qluUOOcklDtrlktbMuIrZQzzoe0iKBGW4XIzxcQLhAbo0vNvYoelkyfhP9emGGVoMI%2BQm8MGOqUBdDttfpS341WyH7t3ZT9YPzLxkd9QULFc8dd6NSZ%2BmBALkj7CQOvvdOJVHjTOz95pJ4s6fJbeYaRkQqMO7iC%2FrbukgcmlIOntnY%2FeCjb%2BwAlxZ8ni3GhhgWeOuPVf5f04e1J4egcex3nR09UAEFIL9Pu8R0zl0ywMu8K%2FUAy5ZQvLyW%2FNcgEO8RepIKqlzFDSdTL0O1%2BKprkbUaDTcL3uqwyE4R5%2B&X-Amz-Signature=6d72568ab1eca22358b534d947613d7437ef4c21822912265b2f1228ef555ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TEG5RT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBS6eWdVuq7e0Ef5fFaL%2FkR5ueT7fok8Ihw%2FX4XKwGtrAiEAoTYKKfhpE4n2ckSZAAbHHJP88YCKa94wUMy2kiStt2gq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK53ZNb08aU9LlF9XircA2vNsCSXtyAfNFlSZ440M5g9mbq0NsI0MqJhFq0%2FXN3c3gANwW0cLmmpKP00cic0MjLMHVU0NOqkleOPLl1BSFh%2FIN4GKg2yDRMQ%2BvsAbqiHqTLrWVaIy%2Fbu5Rtewx%2B6gT0NVVdExXG9kilWsnDmvpRN7VyLvyTCuXixjOtMghQ0RPRAYjtqvZvXOZGR8AhYWebLQvVInRkj9sBLf1D%2FsSarFZxr1%2BNGMJMnnkDUw091IeDAmbkPd9N%2BjJJNJY3C%2FPkuHt5oYhyy6pzqax7nDVEQMP0k9FpA7aWOPLW5O3Re80HohBQtsL%2FG8NxrlvCEuMhdts2NWMR1fu9nkGHHuQRO4qy63E%2FeXiA5fpAHo%2BGL1al4o2MQhsseGyeYXothUuBesTHz5z88CrFx%2FK%2Bo%2B86pqodCOhePEWGvnONawxugEnvh7XvJTNaZ0Nt5ctnxPRIsBmYwoagxwa4ybremOMBEHwp5MN1y6VDxP4es4HGPPTAjcgyAR8GkgQpCYQ7TcNIVISlg6oVBqXQD0zyV40tTwSDHat2YSlWemeO05yx%2B%2BVY6h6UD51oYGPT6qluUOOcklDtrlktbMuIrZQzzoe0iKBGW4XIzxcQLhAbo0vNvYoelkyfhP9emGGVoMI%2BQm8MGOqUBdDttfpS341WyH7t3ZT9YPzLxkd9QULFc8dd6NSZ%2BmBALkj7CQOvvdOJVHjTOz95pJ4s6fJbeYaRkQqMO7iC%2FrbukgcmlIOntnY%2FeCjb%2BwAlxZ8ni3GhhgWeOuPVf5f04e1J4egcex3nR09UAEFIL9Pu8R0zl0ywMu8K%2FUAy5ZQvLyW%2FNcgEO8RepIKqlzFDSdTL0O1%2BKprkbUaDTcL3uqwyE4R5%2B&X-Amz-Signature=b4e06441740e4d909c003241ae5c53666cd356a7ea8df167efa2818cb9830250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
