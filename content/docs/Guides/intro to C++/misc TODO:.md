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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WKNX6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG7GbLCjEBg5pYdKapkbBImxQynoCX5hg0Zl6KpPZjEEAiEAnECjWkvW%2B1O2XEcnpvCVQL2ZKCIP7ZtpCfucIWvF8Iwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIop7VREprBSVmt7GCrcA7f%2F8u0szZHhghiAAZ6dRFN7Ax3jkpidrq2PpoIfgkEJgxd6G5pMaa0QHpqYlEK3JADN4fheoZ282gjYQVGWV6wtpMKnumAeXRhyZJZTrI7hJsf7GjrG%2FTb4T2k7yKhtQ2JraPnuilsgNR6WMVVP4QD1qikp10XI6q5JTFvED2P%2FY86NbtxaeNztBreUJzM2JBxXGhBEsNvG7Lyr08cUcaMVE8O5hS8laDybfChfqos%2BP0nLyYGC%2FbXNktDAUV%2FxjAetsFg236L%2FcJD7k3U3GbXsr1S%2FUuGZIGxkA9j7XO%2FlRbMnyO2PAaFkxcSSu1nm2Wjw3jjX3U7QyV8FVsfBuwoB5nRqCy%2F1J4JKZDNx9n1KO8zLndISTJm%2FGC7WC2fr8nZIt3T79CFxO6R6ddAtEcyfe3IUrqn5HMA5d0uWCaY16g8BAE1Fwp1TC6hiwFIbq1w3tPvKEnOI59kzcIMIRVw%2FMtJY0vgLbsAv643CwDl15Urhh2CZdI%2FtZ2n%2FzTUbC6GMyQ6sFWXk7%2BIRjpO7VdeQE9uVqL%2BBn2aY%2BBKkTiDPPGnS37UDnV7visxtyPBczEXb9CBLiLpeTmvzDIEGpm47LXX1tp2yErdWDmQPpkdYW8XBY2hoPuaXYy0eMI3Mt8IGOqUB%2FhaUr7WB5IUUzsjhL3JV8KPA2UhU4u4VFS3naKjmFWvVbO3VkPo3j5KHRW428arYrc4dsVX6kOqZcvOPwlhXhJ1rWPBwSOSCBJM4bztnCPxnCu5XCPQI%2BOlvOTaJrPK3hwDddCVd5QMZHx9pr2MDxXxH%2BNrkGCbdEzig0J89Zg56D%2BJWrVsc31lnCcoe3MTcfOi7pgrW%2BIkHe0uqcd5F5vg7J3lD&X-Amz-Signature=8442f7be83459d892c34b542ef8982e57b119935e5e2c20a33be1b780838f3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WKNX6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG7GbLCjEBg5pYdKapkbBImxQynoCX5hg0Zl6KpPZjEEAiEAnECjWkvW%2B1O2XEcnpvCVQL2ZKCIP7ZtpCfucIWvF8Iwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIop7VREprBSVmt7GCrcA7f%2F8u0szZHhghiAAZ6dRFN7Ax3jkpidrq2PpoIfgkEJgxd6G5pMaa0QHpqYlEK3JADN4fheoZ282gjYQVGWV6wtpMKnumAeXRhyZJZTrI7hJsf7GjrG%2FTb4T2k7yKhtQ2JraPnuilsgNR6WMVVP4QD1qikp10XI6q5JTFvED2P%2FY86NbtxaeNztBreUJzM2JBxXGhBEsNvG7Lyr08cUcaMVE8O5hS8laDybfChfqos%2BP0nLyYGC%2FbXNktDAUV%2FxjAetsFg236L%2FcJD7k3U3GbXsr1S%2FUuGZIGxkA9j7XO%2FlRbMnyO2PAaFkxcSSu1nm2Wjw3jjX3U7QyV8FVsfBuwoB5nRqCy%2F1J4JKZDNx9n1KO8zLndISTJm%2FGC7WC2fr8nZIt3T79CFxO6R6ddAtEcyfe3IUrqn5HMA5d0uWCaY16g8BAE1Fwp1TC6hiwFIbq1w3tPvKEnOI59kzcIMIRVw%2FMtJY0vgLbsAv643CwDl15Urhh2CZdI%2FtZ2n%2FzTUbC6GMyQ6sFWXk7%2BIRjpO7VdeQE9uVqL%2BBn2aY%2BBKkTiDPPGnS37UDnV7visxtyPBczEXb9CBLiLpeTmvzDIEGpm47LXX1tp2yErdWDmQPpkdYW8XBY2hoPuaXYy0eMI3Mt8IGOqUB%2FhaUr7WB5IUUzsjhL3JV8KPA2UhU4u4VFS3naKjmFWvVbO3VkPo3j5KHRW428arYrc4dsVX6kOqZcvOPwlhXhJ1rWPBwSOSCBJM4bztnCPxnCu5XCPQI%2BOlvOTaJrPK3hwDddCVd5QMZHx9pr2MDxXxH%2BNrkGCbdEzig0J89Zg56D%2BJWrVsc31lnCcoe3MTcfOi7pgrW%2BIkHe0uqcd5F5vg7J3lD&X-Amz-Signature=88eeca96267aa99a8d30f0a2520b7bc63ef851c86fd6d09735be3fa2e6bd88ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
