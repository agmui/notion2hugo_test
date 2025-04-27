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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZZWE62%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BVzYLXR9zpH2IJ2Yr8pECZEOsMxb9Lc8whdZlYst6AiEA5oNlB%2FiIKOPutuisE7BJQC%2B32hbiPP89%2FGmNQhfudNEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFCUzJeR6FbuTR27yCrcA9Pee460KRCJBx8UB0j%2BPocoWmXwPkzCQWsrNrxQ8TOxFpg22Gw3nvBqV7jrI0u8Qtt%2Fk1zijvaiMD26FdFHNRWWh1xieXKP7GjDQj4%2FGOIxO9nEwdXVtrD2Z4vAGgNnNGISp8S0w71Jt%2FkBTcVZYTmF9r7p5Ufzwcsnv2TG3YqlVHHHRXOoi33g87viESAegEU4r1P5JJ5T6SaXVxigP%2BmkhssK26tGN%2Bu4FHwBXvTPNRbZ3L8MRNwYi57vNbz45ncAx%2B4wSpo8zpQvlqjjckugVacpugppDNBP7%2BtXL7eHelN%2B10q6OFGkyEcEb1t5yNUm%2BVHAeL9diCKk8imyYZQ1wLSdxXra8yDGcMm%2Fy5pCo7JjHPAUhMaPKTnamhzOc6gS8BYC4HE9aLL7lf6bTpADnDcn%2FVDJ57OAgap0Z9C6cbj6Lyd5NGJtIO01vC2qeEOcGTJNVlxPU2b7iPIFXZuBklouOuE2qz7MgDvz%2FouDCx5oPaaZI7wlwbry69o8CaGi%2BKBHwfU0OEZhUB3G6w4xHtDZpglPUm6oFnJgnOdHPKJDhLhbQcGzZ46VhTVYRL0BLyU01znYq2CdeVqVxtv%2FQgbug5N%2F%2BjaGBQkgtKZrbdYGypy50SfAqrntMMyKusAGOqUB0Px13rd334Asud43cpzGp4kqqnKs9FxnMYmlpxhhD5mdW8K3ADUYwbMEFHYPjcqPZXMHQN8BQJ9LDXnC%2Fxe0Unhny112zqejOjQYAEqXQq4kGIVTv6qptVmWJ3fnMf9S83bhd0sYLLNlD1HHzIJEM9P5mPEwlg10JXlwF19%2FEDLfegmnJ8WDFsCG%2BKdh%2B6QqKBiTN0ohpCD4y7rtvihA2BfcbW4e&X-Amz-Signature=a85fe858e58a0bfe93d34c75255b5e5379eee071a0811f9a5c12f90f2d1d74f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZZWE62%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BVzYLXR9zpH2IJ2Yr8pECZEOsMxb9Lc8whdZlYst6AiEA5oNlB%2FiIKOPutuisE7BJQC%2B32hbiPP89%2FGmNQhfudNEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFCUzJeR6FbuTR27yCrcA9Pee460KRCJBx8UB0j%2BPocoWmXwPkzCQWsrNrxQ8TOxFpg22Gw3nvBqV7jrI0u8Qtt%2Fk1zijvaiMD26FdFHNRWWh1xieXKP7GjDQj4%2FGOIxO9nEwdXVtrD2Z4vAGgNnNGISp8S0w71Jt%2FkBTcVZYTmF9r7p5Ufzwcsnv2TG3YqlVHHHRXOoi33g87viESAegEU4r1P5JJ5T6SaXVxigP%2BmkhssK26tGN%2Bu4FHwBXvTPNRbZ3L8MRNwYi57vNbz45ncAx%2B4wSpo8zpQvlqjjckugVacpugppDNBP7%2BtXL7eHelN%2B10q6OFGkyEcEb1t5yNUm%2BVHAeL9diCKk8imyYZQ1wLSdxXra8yDGcMm%2Fy5pCo7JjHPAUhMaPKTnamhzOc6gS8BYC4HE9aLL7lf6bTpADnDcn%2FVDJ57OAgap0Z9C6cbj6Lyd5NGJtIO01vC2qeEOcGTJNVlxPU2b7iPIFXZuBklouOuE2qz7MgDvz%2FouDCx5oPaaZI7wlwbry69o8CaGi%2BKBHwfU0OEZhUB3G6w4xHtDZpglPUm6oFnJgnOdHPKJDhLhbQcGzZ46VhTVYRL0BLyU01znYq2CdeVqVxtv%2FQgbug5N%2F%2BjaGBQkgtKZrbdYGypy50SfAqrntMMyKusAGOqUB0Px13rd334Asud43cpzGp4kqqnKs9FxnMYmlpxhhD5mdW8K3ADUYwbMEFHYPjcqPZXMHQN8BQJ9LDXnC%2Fxe0Unhny112zqejOjQYAEqXQq4kGIVTv6qptVmWJ3fnMf9S83bhd0sYLLNlD1HHzIJEM9P5mPEwlg10JXlwF19%2FEDLfegmnJ8WDFsCG%2BKdh%2B6QqKBiTN0ohpCD4y7rtvihA2BfcbW4e&X-Amz-Signature=48dd2ef5e699cbe0b8551a118fe3ab643ac44757e19365824cba337a6f06abfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
