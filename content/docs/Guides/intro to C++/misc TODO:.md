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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMA6L6LJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDwd%2BcVlbh1cO42B%2BRe7t760z4ZUqTxkMug2PgvBuahXAIgKYxdeyzTRTzEESVoxemu0i5rj9WUlx42VAvhMhSlD2Mq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPy5LjjuHLrS86ubCSrcA5rgOt7%2BQUFlN7Ci0bl7Q%2Bpip9J0w24tvb7Qt1GglrkIhfuqFJYp4nKZGIjKFesgVbziGeTRj8e4sJgjwqCgGxhUWBQsjAH1e%2FMrELvC2PYuCBa8o7qPxjkeZgIMTM556ddJKsJzJSePJrGv30ejJqdxVb4K%2FC78khPcZvPOb7Eq98h%2BVXEc%2BskIeQ4ricZadhlQM13acESixnWe3k83lQwLnD5NX%2FZ8dv8oCNbMhn64zqqkcQMYdtVkPqatgkc0ueOrHr9C9%2BW97IGAlMWuTPMkPmUM9gHypx10vXJuVlDS6u7%2F6mF7rSfyJs8mTnw5XiKm1XMYlzeR7Ammi%2BTP9cIl3%2BavoeVU5SDMD%2BiogO0rQsrF48Bc%2Fg1d16Hrj2cxqcY0UCXXPjPy%2BL3OU%2F0c9mcHiRchc%2FB%2B8k4%2B0%2F41FDMHoxJ61zNHpCqHqHHEpwB2QbRrAzEADOSWdjoxVoGRPFqz1y3Upgf99%2FOmI1hOgpaer97rDsGm1dWnWngZP18mgzmS5loM9DCA538OEEZ4rar12%2FWI%2Bvzx78oh8lxtM95%2FCn9WwDLXzh4KxKM6R8xi%2FqcUJ3xW5DCQXXD5h77RFrY2QL3V%2BtJN8NrCmlrOOW9LCsKgDGJ5ezCp5FNrMMna%2FcQGOqUBMTPAsKXAFV5Qs%2BD8rM4ib9VOJCWeOSZf8iMRQgll7LYrQHE5rBCG1SBXtAsl2m3bDbrh%2F%2FMkqzQ8uy8Ef8QBwrnBOqW%2B7abBb7X49VhmVbQYkOATcNGE09Mjk4MHUFV6KiXI2jFUc5PS1uz2vs6raLhpOcxO3MCkXav3XwAMyMUT1y0Lc%2FdRzUsXcAmk7WmMoJpAU54%2FmsHUQPyJbpMyzHcCDlrz&X-Amz-Signature=a9b76109983d54249376fe3eefe083798ec32a0ae0e6ccd0bd452f89d7fd53a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMA6L6LJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDwd%2BcVlbh1cO42B%2BRe7t760z4ZUqTxkMug2PgvBuahXAIgKYxdeyzTRTzEESVoxemu0i5rj9WUlx42VAvhMhSlD2Mq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPy5LjjuHLrS86ubCSrcA5rgOt7%2BQUFlN7Ci0bl7Q%2Bpip9J0w24tvb7Qt1GglrkIhfuqFJYp4nKZGIjKFesgVbziGeTRj8e4sJgjwqCgGxhUWBQsjAH1e%2FMrELvC2PYuCBa8o7qPxjkeZgIMTM556ddJKsJzJSePJrGv30ejJqdxVb4K%2FC78khPcZvPOb7Eq98h%2BVXEc%2BskIeQ4ricZadhlQM13acESixnWe3k83lQwLnD5NX%2FZ8dv8oCNbMhn64zqqkcQMYdtVkPqatgkc0ueOrHr9C9%2BW97IGAlMWuTPMkPmUM9gHypx10vXJuVlDS6u7%2F6mF7rSfyJs8mTnw5XiKm1XMYlzeR7Ammi%2BTP9cIl3%2BavoeVU5SDMD%2BiogO0rQsrF48Bc%2Fg1d16Hrj2cxqcY0UCXXPjPy%2BL3OU%2F0c9mcHiRchc%2FB%2B8k4%2B0%2F41FDMHoxJ61zNHpCqHqHHEpwB2QbRrAzEADOSWdjoxVoGRPFqz1y3Upgf99%2FOmI1hOgpaer97rDsGm1dWnWngZP18mgzmS5loM9DCA538OEEZ4rar12%2FWI%2Bvzx78oh8lxtM95%2FCn9WwDLXzh4KxKM6R8xi%2FqcUJ3xW5DCQXXD5h77RFrY2QL3V%2BtJN8NrCmlrOOW9LCsKgDGJ5ezCp5FNrMMna%2FcQGOqUBMTPAsKXAFV5Qs%2BD8rM4ib9VOJCWeOSZf8iMRQgll7LYrQHE5rBCG1SBXtAsl2m3bDbrh%2F%2FMkqzQ8uy8Ef8QBwrnBOqW%2B7abBb7X49VhmVbQYkOATcNGE09Mjk4MHUFV6KiXI2jFUc5PS1uz2vs6raLhpOcxO3MCkXav3XwAMyMUT1y0Lc%2FdRzUsXcAmk7WmMoJpAU54%2FmsHUQPyJbpMyzHcCDlrz&X-Amz-Signature=28b6a9c0b13d8237740e112c7629b86f22ac53446ced66928da35ec87edbe9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
