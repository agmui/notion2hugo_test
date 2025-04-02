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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOV22DT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCyUCXrjU%2B5CxlPZdLYrVg8qz0wC686AQqH9ibxiPytQgIhAOTAXl9BTUAZe16drJ1xqujc9NbTmk2UyO0OwZYDb6LBKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRAvKMp8iw4FXx45sq3ANKcfnVaM2qs0N32%2F2RWQe5F%2Bz5ubglosMt5b77NXJN1bnCqPdjUK6jt6yNDM%2BLGm5qxKlB%2BB4DMnVkX4XlcKvFEvnZ3KUXVZqJHIWaRdHQWbackXlWQPCOEOlIne0MkbrTkJwthkkhpEHQlTLFREbjb8abNUWgeFq0hp0sdFdb%2BHCaC1fiMie9eQehnE6vXdodQQ53jlgheAW5tCFSBj9mYTu3pTm%2FzSXTdTdBJP4%2BX0btMkewry0wU4NxPVYWXGYQDcO4AjhiQ5nsfUrmwxJq8QCs5%2FY%2FiPvSP%2BNLuWjSrWWZplwXjz5yFNHAC0Rumfn0XY6EYB5A87mhSjxxSNiQh1IUggMoGpvmQy9peGF3MTH1stVWmfFnpLU5TLot2JMX%2FCR3EOBLkHrCAv0pzKrc%2FXUvtgSDx30HcfsoBydPOsuvvxsbt9QG37mdFzrg6gq2W4MMtphkdwTdfP4nlULYnTAz%2FGejLwZPXthNtgaFeGbcQtDYhhztj0VTMQ2xCpx7mppGDTa4OCwVSFAVRJ%2F0aSzCauvjOz03je42ZDa7JsXZ3VLc03r%2Fr%2BdXaOLPOeuZF5X8bzhmOfYr%2F6xLqQ45XlrsGOcfuzR4QpHdCs3ygMtBva1ldEVCH3UyuDDiz7K%2FBjqkAW9d%2FdyGzXgcodMOVE9kfkFMU567Vkd7zTiDrLnf6xFhtP1jJRIMt2i5RSqK3e%2FoJtzYDiIyshLHP1CaMwHvX0m%2B%2FhRqQyRxYjTnruJptxffsZdgGodFBPgsUwST0EjMqRuj2Nhu6lwPlbulEJHTPpB0RuxGpMfViDhq35k%2Fnzam%2BVISb6EHB%2BQBOYv3K88onx%2FqGJkZgYJLBX8h6cds%2FDgj6z1W&X-Amz-Signature=226fa6f6fbc4bd0c9bbd3085ca563f671e50acf6a80e1d9513f4bba5edf180f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOV22DT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCyUCXrjU%2B5CxlPZdLYrVg8qz0wC686AQqH9ibxiPytQgIhAOTAXl9BTUAZe16drJ1xqujc9NbTmk2UyO0OwZYDb6LBKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRAvKMp8iw4FXx45sq3ANKcfnVaM2qs0N32%2F2RWQe5F%2Bz5ubglosMt5b77NXJN1bnCqPdjUK6jt6yNDM%2BLGm5qxKlB%2BB4DMnVkX4XlcKvFEvnZ3KUXVZqJHIWaRdHQWbackXlWQPCOEOlIne0MkbrTkJwthkkhpEHQlTLFREbjb8abNUWgeFq0hp0sdFdb%2BHCaC1fiMie9eQehnE6vXdodQQ53jlgheAW5tCFSBj9mYTu3pTm%2FzSXTdTdBJP4%2BX0btMkewry0wU4NxPVYWXGYQDcO4AjhiQ5nsfUrmwxJq8QCs5%2FY%2FiPvSP%2BNLuWjSrWWZplwXjz5yFNHAC0Rumfn0XY6EYB5A87mhSjxxSNiQh1IUggMoGpvmQy9peGF3MTH1stVWmfFnpLU5TLot2JMX%2FCR3EOBLkHrCAv0pzKrc%2FXUvtgSDx30HcfsoBydPOsuvvxsbt9QG37mdFzrg6gq2W4MMtphkdwTdfP4nlULYnTAz%2FGejLwZPXthNtgaFeGbcQtDYhhztj0VTMQ2xCpx7mppGDTa4OCwVSFAVRJ%2F0aSzCauvjOz03je42ZDa7JsXZ3VLc03r%2Fr%2BdXaOLPOeuZF5X8bzhmOfYr%2F6xLqQ45XlrsGOcfuzR4QpHdCs3ygMtBva1ldEVCH3UyuDDiz7K%2FBjqkAW9d%2FdyGzXgcodMOVE9kfkFMU567Vkd7zTiDrLnf6xFhtP1jJRIMt2i5RSqK3e%2FoJtzYDiIyshLHP1CaMwHvX0m%2B%2FhRqQyRxYjTnruJptxffsZdgGodFBPgsUwST0EjMqRuj2Nhu6lwPlbulEJHTPpB0RuxGpMfViDhq35k%2Fnzam%2BVISb6EHB%2BQBOYv3K88onx%2FqGJkZgYJLBX8h6cds%2FDgj6z1W&X-Amz-Signature=d2ef899bedf22ece3fd6c915472b0f82706a7d83752c29e45300b3640caa63ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
