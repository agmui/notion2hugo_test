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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZVYL5O%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2zg1YArohpNayA1f4lb8t2P1XXONAb7Bc8RW3zh9j8AiAYAnPa6Y0MfX85PfjuavZ7iVvtUyK4tS5xe1haewJSNyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDXcUuuTx4XATngbZKtwDOU5uFt3cj4BwU2UsV%2BPaQEgiE3Tttrki9KVhEuRDLpMrf%2FMxMjsX0%2Bo9FdZX8Za4C%2Fn9AHr8NCgyom4Iv9xj1mo6GRuIfJ2X4OFmKgDsj6vU8LB8YJ1%2FdNMaCuqZNz5xmVs0eVT4tOhOqHrVSv6ExyJids7xI1JPGgv8Um%2FYrTCxjL7kDlKjLJTnooeMSeVR3zNOX%2BEAvegLgzmgDY%2FpGul1iFpNMQ7v07uqQYDikMZUKQaw41R3zQ%2BZY8jtzt8Y%2FIqsw%2Bu3wUvSoStOKD6g77q%2FUVHuOhKC8uw4G4LUopA0DrN4GPQudP9nmbCxO8pA918c%2F0UBSuqq4VXsLfpYKJjzyd1jtRpIauCcqcDbJn%2FuQCOfQcSk51dF%2FWcGZqXbdKzTn4F%2FI8Q7f3%2FTPdG2SAnPxh2k6k03mlHvKzsQM3hCRCXP8tEfaw5VLjP92Ka65JRquTS%2BoYx5dnTbdpRYpwK9uWmBrB%2BbWyT2ATl15FbpYrowIFHD%2FH%2FJXZvFvkH6Kx4o8SDeZxmi1DMAdPPDHobHPFYS5A7xudedBNTNfMZ8nMbSfI0rl87FLFqKK7zPZTo1bckBhPR8zYGjJJ5qxSsd%2BoNG0aV1Lyjz9X7rM9s1%2FrRkkxmZt6pF%2BG8w%2F%2BrrwQY6pgEoCePjA0AsEtfzGyCxeqfaEiiL8suz6g7SHwGNg3TcvkzXu7kdBpL6RqQAI4SLfFDNMNOS0NfCQeOqYg2EgoUP%2Bb48tLcl%2FmCuNY%2F6cBTtBRSNXq2XZbcTMiKRd2d%2FKprpNkz7jBq1ZByBWJc3YMTkB5i0H5WBZF1Uo3petJS8VR5XHRQurvtQQ7IWSuMCfg2Uhpv%2Bx3wpi%2Fe4o%2BIW1%2B2%2BPR9jHTW2&X-Amz-Signature=eac0956bcf3ab33ad915051c96256b8896d79186083b2ab42f0705b95c8913a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZVYL5O%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2zg1YArohpNayA1f4lb8t2P1XXONAb7Bc8RW3zh9j8AiAYAnPa6Y0MfX85PfjuavZ7iVvtUyK4tS5xe1haewJSNyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDXcUuuTx4XATngbZKtwDOU5uFt3cj4BwU2UsV%2BPaQEgiE3Tttrki9KVhEuRDLpMrf%2FMxMjsX0%2Bo9FdZX8Za4C%2Fn9AHr8NCgyom4Iv9xj1mo6GRuIfJ2X4OFmKgDsj6vU8LB8YJ1%2FdNMaCuqZNz5xmVs0eVT4tOhOqHrVSv6ExyJids7xI1JPGgv8Um%2FYrTCxjL7kDlKjLJTnooeMSeVR3zNOX%2BEAvegLgzmgDY%2FpGul1iFpNMQ7v07uqQYDikMZUKQaw41R3zQ%2BZY8jtzt8Y%2FIqsw%2Bu3wUvSoStOKD6g77q%2FUVHuOhKC8uw4G4LUopA0DrN4GPQudP9nmbCxO8pA918c%2F0UBSuqq4VXsLfpYKJjzyd1jtRpIauCcqcDbJn%2FuQCOfQcSk51dF%2FWcGZqXbdKzTn4F%2FI8Q7f3%2FTPdG2SAnPxh2k6k03mlHvKzsQM3hCRCXP8tEfaw5VLjP92Ka65JRquTS%2BoYx5dnTbdpRYpwK9uWmBrB%2BbWyT2ATl15FbpYrowIFHD%2FH%2FJXZvFvkH6Kx4o8SDeZxmi1DMAdPPDHobHPFYS5A7xudedBNTNfMZ8nMbSfI0rl87FLFqKK7zPZTo1bckBhPR8zYGjJJ5qxSsd%2BoNG0aV1Lyjz9X7rM9s1%2FrRkkxmZt6pF%2BG8w%2F%2BrrwQY6pgEoCePjA0AsEtfzGyCxeqfaEiiL8suz6g7SHwGNg3TcvkzXu7kdBpL6RqQAI4SLfFDNMNOS0NfCQeOqYg2EgoUP%2Bb48tLcl%2FmCuNY%2F6cBTtBRSNXq2XZbcTMiKRd2d%2FKprpNkz7jBq1ZByBWJc3YMTkB5i0H5WBZF1Uo3petJS8VR5XHRQurvtQQ7IWSuMCfg2Uhpv%2Bx3wpi%2Fe4o%2BIW1%2B2%2BPR9jHTW2&X-Amz-Signature=be410630c721a3d323ca6cd84299ee0e8c9a33ce0f2f7dc4e2101913e4c2a67b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
