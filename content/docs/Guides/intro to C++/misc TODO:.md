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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVPCGPN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2G%2FUmYrE8w0gp%2FkDnKIn5eApJUojbzG4wkhEoZj7QIgSIkCx540uPZHXVr4kb8S4ZF%2BHi%2BoCcq1c7YPPGMGz%2B0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHK5fgW8slzCY3%2F4sSrcA3%2FdmAa%2Bgt9iyUjVribJfcG2rqxVYK8g34DQ54dE9LgafRLQwT2FPR%2FUAlIHsq1ipqBBy8RopRddMpWMlpY7BJJZ%2B1IzCdQIVMU7Hy0cQ%2FSlPdR71ltTnNeEzGrpoLfVSL1EraMq90UpSdly%2B3y%2Fs6FOgk7x56R5au0r%2FXuxngdwr8DewQa4htgswFGrj%2By5sUcGkm5VBMJ1BXMYyejjtnt17TllEnDSVKTA5yfdwjg6zQ7rDTP7EOEcIcdsXswGCLvz%2BBuYJLK1XdkyExgZXXU54HVUyf0qbUlPS4kvuJUe0p%2BiR3bP2AIQEpjGHt2VnCNhcVuvRWDbrBbFT6v%2FarqYPT475gz3ElG7NSNhvEFTlpcSfa6mnxFSWD1ZHpJ2dKV2QsUQWgEswuWdGwyuuSITMoqY4xvnya53%2FfpyMGq5EMPBaglqUKpiINgEDHt%2BW8HejD3%2F3JbzC18lQsVTFRhEtfGkUIz8PCIJFM1xNouU7HudGUFTJNsJoRSi6uAF0o5z1NhJY0MUrt54eYXWhSE7zlfuOLFhOW%2FIfBQBIoQAPYz6tGkYJjBUXKditCfTdcl85CMrBl58beGmo5v8Zl8Rw%2FbsKkZYDwLldfivCJT7CFklNW0aMVDG5RhvMPrKsMQGOqUBbnNjfISNq2Ca1phW%2BHhnOTJ4tRVQVM2S8TPbKYOBqygbqWT%2FaZShNsT18OjojyintZJ435aZrLebmZzsB4dKoJMFQ9ZaTMS%2B2sFh10Il9LBWLWDK%2BQzg2TXNzek8FUEE2TlqiyIvzNEjLqeExDJKlAv3G9yGO%2BK2KC8ge%2FSET%2FfrYq%2BmXMGR4NOQMFU6MHX2pJ0mJrurx0n9MMpgY48yjG2MVNCD&X-Amz-Signature=48dfd43921a9d942af8f74b34dbfd978c957729e237e2acf01ae3d6af5e8e42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVPCGPN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j2G%2FUmYrE8w0gp%2FkDnKIn5eApJUojbzG4wkhEoZj7QIgSIkCx540uPZHXVr4kb8S4ZF%2BHi%2BoCcq1c7YPPGMGz%2B0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHK5fgW8slzCY3%2F4sSrcA3%2FdmAa%2Bgt9iyUjVribJfcG2rqxVYK8g34DQ54dE9LgafRLQwT2FPR%2FUAlIHsq1ipqBBy8RopRddMpWMlpY7BJJZ%2B1IzCdQIVMU7Hy0cQ%2FSlPdR71ltTnNeEzGrpoLfVSL1EraMq90UpSdly%2B3y%2Fs6FOgk7x56R5au0r%2FXuxngdwr8DewQa4htgswFGrj%2By5sUcGkm5VBMJ1BXMYyejjtnt17TllEnDSVKTA5yfdwjg6zQ7rDTP7EOEcIcdsXswGCLvz%2BBuYJLK1XdkyExgZXXU54HVUyf0qbUlPS4kvuJUe0p%2BiR3bP2AIQEpjGHt2VnCNhcVuvRWDbrBbFT6v%2FarqYPT475gz3ElG7NSNhvEFTlpcSfa6mnxFSWD1ZHpJ2dKV2QsUQWgEswuWdGwyuuSITMoqY4xvnya53%2FfpyMGq5EMPBaglqUKpiINgEDHt%2BW8HejD3%2F3JbzC18lQsVTFRhEtfGkUIz8PCIJFM1xNouU7HudGUFTJNsJoRSi6uAF0o5z1NhJY0MUrt54eYXWhSE7zlfuOLFhOW%2FIfBQBIoQAPYz6tGkYJjBUXKditCfTdcl85CMrBl58beGmo5v8Zl8Rw%2FbsKkZYDwLldfivCJT7CFklNW0aMVDG5RhvMPrKsMQGOqUBbnNjfISNq2Ca1phW%2BHhnOTJ4tRVQVM2S8TPbKYOBqygbqWT%2FaZShNsT18OjojyintZJ435aZrLebmZzsB4dKoJMFQ9ZaTMS%2B2sFh10Il9LBWLWDK%2BQzg2TXNzek8FUEE2TlqiyIvzNEjLqeExDJKlAv3G9yGO%2BK2KC8ge%2FSET%2FfrYq%2BmXMGR4NOQMFU6MHX2pJ0mJrurx0n9MMpgY48yjG2MVNCD&X-Amz-Signature=a3921d1934196357c60903618aa393cf8f7550bcbafb6dafb0481c87229d7103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
