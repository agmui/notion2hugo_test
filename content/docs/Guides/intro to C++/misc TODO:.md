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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOBE57D%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCJzktirpBykfsaZDtVnXV25gPABvYZtavVfyfGnqLQIhALfEKuvQ3JadO9e8m%2BEY4DTlAK87%2FlHM9V%2FfTiH%2Fo%2FVRKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw7WVaoj3Vo%2Bh1raYq3AMdPYGBH6U83bnvoCaXovE3D%2Fhs5moGCbHDcRiEQTvAC5j7jMV04Jmb2oGOf8qmhBGsrer%2B6oy7hFJAF7jXASEtxJLggabp1BguIyrF1ohQawoOrQu0cmmPpaX7m15m6%2FR1KzSH2V%2FPa%2BHKOHP84Lhc2S90z9J37Cca1J1JUd6d1VzkjXaQ7aQ9j2fPwfJRtDjY%2BR6AHwLYLM4M%2FznMYi0ErcGm3JKChF2z0wHmhbjFdKdbxH%2Bv%2F0piNfzFmm4UUoJTgl%2FidRpwzenMMkE%2F9QoGns4y08Jn722xvq4qTR2WIPQSriqStRHcAHgOA0cfcjQjPN3WzowpaAcNbkbAjQxFvTOhV2eXu7Mzgt5CCwLbdLtgOTy5qmP3VauNH3QpOVc2R4W1GMImC58fyTP%2F9yi2mShdgx1MhHzFgFNZbwdfSIWMPXUrhB7dlnQLpOZMyeHDSuR%2Bdo4oSxT7w266yYWYWvz5MknD1XlE7zDjw2zqimkDdxdv%2FKiEg3Qb4dlMRUpGN3%2BUKblKMvGTiahNugo68SVqEhVw5Wql%2FNtI2pbTcpO2A%2F9Cef6ZlXr0Iw52BFRmlkA9ELNl7oxLVNBfkqagbYxFweRrxo5jsPh%2BL46HFj2Vo9%2FF0M%2FDP86%2FETDw8qXEBjqkAaY9Y%2BKmMbxffkE0DN0a%2B4VG9g9M%2BV0nxvporQ%2F4waIZ4Tg8hOJaHm5zo367qeNxfQKI7RYqMYIjPRi9t1CtsQ6gA94v%2BpgLLR%2B2Qeq2bdMqMiOfHn04NTrrjxg2kfDPP5vQyFqj1AGFofuRV6hZD6o2cl1HyNb39i1sBPo3m%2F1%2Fqs7FxdVoYR9ljVfatG66bBChfU9jx9JVHgkFbY9K9ajTbai9&X-Amz-Signature=cf2694a328ce1aa4e41a049a2fbf1210e87a3fb8d97d540ffd63f5f3eb7876c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOBE57D%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkCJzktirpBykfsaZDtVnXV25gPABvYZtavVfyfGnqLQIhALfEKuvQ3JadO9e8m%2BEY4DTlAK87%2FlHM9V%2FfTiH%2Fo%2FVRKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw7WVaoj3Vo%2Bh1raYq3AMdPYGBH6U83bnvoCaXovE3D%2Fhs5moGCbHDcRiEQTvAC5j7jMV04Jmb2oGOf8qmhBGsrer%2B6oy7hFJAF7jXASEtxJLggabp1BguIyrF1ohQawoOrQu0cmmPpaX7m15m6%2FR1KzSH2V%2FPa%2BHKOHP84Lhc2S90z9J37Cca1J1JUd6d1VzkjXaQ7aQ9j2fPwfJRtDjY%2BR6AHwLYLM4M%2FznMYi0ErcGm3JKChF2z0wHmhbjFdKdbxH%2Bv%2F0piNfzFmm4UUoJTgl%2FidRpwzenMMkE%2F9QoGns4y08Jn722xvq4qTR2WIPQSriqStRHcAHgOA0cfcjQjPN3WzowpaAcNbkbAjQxFvTOhV2eXu7Mzgt5CCwLbdLtgOTy5qmP3VauNH3QpOVc2R4W1GMImC58fyTP%2F9yi2mShdgx1MhHzFgFNZbwdfSIWMPXUrhB7dlnQLpOZMyeHDSuR%2Bdo4oSxT7w266yYWYWvz5MknD1XlE7zDjw2zqimkDdxdv%2FKiEg3Qb4dlMRUpGN3%2BUKblKMvGTiahNugo68SVqEhVw5Wql%2FNtI2pbTcpO2A%2F9Cef6ZlXr0Iw52BFRmlkA9ELNl7oxLVNBfkqagbYxFweRrxo5jsPh%2BL46HFj2Vo9%2FF0M%2FDP86%2FETDw8qXEBjqkAaY9Y%2BKmMbxffkE0DN0a%2B4VG9g9M%2BV0nxvporQ%2F4waIZ4Tg8hOJaHm5zo367qeNxfQKI7RYqMYIjPRi9t1CtsQ6gA94v%2BpgLLR%2B2Qeq2bdMqMiOfHn04NTrrjxg2kfDPP5vQyFqj1AGFofuRV6hZD6o2cl1HyNb39i1sBPo3m%2F1%2Fqs7FxdVoYR9ljVfatG66bBChfU9jx9JVHgkFbY9K9ajTbai9&X-Amz-Signature=545210bfe458edff314742946923d2fbd935d4835f82fb8150f2855a2d9fe3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
