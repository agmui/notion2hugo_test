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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYAPSRR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgsXFGg0IxRmc2Fn4lF0a8Fglv0YXmpWCjf4NjqOqSCAiB5FF62oA6XEvrJWL17p4jYHjDBqkxrD8eri7BKvFYEyCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqd8cPg1h1%2F5zPs8FKtwDCORZ3Xb5%2FYITEwJBHzLXMCABSr8HgQNjLwowywmFHqkCZvudNAtCGifRvpuhTngNDRu6ap0OKb9mRCXqU97AfEaT3QBmRc2KjMoagEOh2nqE2pcPV8m6NaT5eu2WoAVk0VMQX8Ji9BWulpqVZpxpg1fs2l4GcE2zqZp79%2F4Z07PVVa4Mv9jns2Vg6xeaKF8TRRWADgJteDPZob3Rj8sr9kkvgSW4i7BXzOb6g1%2BFfwfJStpULfR6MtQmg8zs9oUx%2Fs%2FBZwafUGN7q%2B8vSMP2L92xgW6G0YNaf3Yv8fzMU11306%2FOjbPOq23%2BtHFdGK64dEIS8AhYFmDLva0D2DlaFda85%2B%2Fx1TttbAWSKbVQgp%2F2qodO4DJGISYj73e4kcHUZmbJIm5AZgAhrl4X8G1OZt%2BPQkCz9jROfvVX7v9U1dJFfiXMRptJTA7qrV9DTrUt2nudNr9z9XUJnbCOsS0W9UntSa5Z80dNXt1CCxx4TBsowgxdmJapBdsam0NoOFTrCFvm2wTZcYn%2Fodno1PE046wF6nsIy7qiAfS8SfqroIk76K2Aac7cKacTwdgLJVFly7KqVj3EdIblMA5fyhyTwj1wFuFm7ANNgwoeS5ePPy9PXGpMbsp3frGnE7QwruPivQY6pgFlVKuBi4AjDeSnSD%2Fvzeebu36ceewyaR6UMPHF08MFKoC8tnWDAc6pBw8ClVw1hjSXqwM5XpQO6S0%2FAm1OZQlKKcLctBDheU0h4eLN17jtP%2Fwo%2FQS%2FDDmcm1iav0wjv8Lg4di23xNkEAGHE4xgyBQlnwkfq4OOvSy%2BNTeziaBNldP6MlGRJzaCA8tDmgFWZ4T7J2my1M6GCSj7iZfY62Z8I0omDl4X&X-Amz-Signature=30476714dcd755450ecf792fe69745bb60cafa67aa44339cf8e701834019fa95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYAPSRR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgsXFGg0IxRmc2Fn4lF0a8Fglv0YXmpWCjf4NjqOqSCAiB5FF62oA6XEvrJWL17p4jYHjDBqkxrD8eri7BKvFYEyCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqd8cPg1h1%2F5zPs8FKtwDCORZ3Xb5%2FYITEwJBHzLXMCABSr8HgQNjLwowywmFHqkCZvudNAtCGifRvpuhTngNDRu6ap0OKb9mRCXqU97AfEaT3QBmRc2KjMoagEOh2nqE2pcPV8m6NaT5eu2WoAVk0VMQX8Ji9BWulpqVZpxpg1fs2l4GcE2zqZp79%2F4Z07PVVa4Mv9jns2Vg6xeaKF8TRRWADgJteDPZob3Rj8sr9kkvgSW4i7BXzOb6g1%2BFfwfJStpULfR6MtQmg8zs9oUx%2Fs%2FBZwafUGN7q%2B8vSMP2L92xgW6G0YNaf3Yv8fzMU11306%2FOjbPOq23%2BtHFdGK64dEIS8AhYFmDLva0D2DlaFda85%2B%2Fx1TttbAWSKbVQgp%2F2qodO4DJGISYj73e4kcHUZmbJIm5AZgAhrl4X8G1OZt%2BPQkCz9jROfvVX7v9U1dJFfiXMRptJTA7qrV9DTrUt2nudNr9z9XUJnbCOsS0W9UntSa5Z80dNXt1CCxx4TBsowgxdmJapBdsam0NoOFTrCFvm2wTZcYn%2Fodno1PE046wF6nsIy7qiAfS8SfqroIk76K2Aac7cKacTwdgLJVFly7KqVj3EdIblMA5fyhyTwj1wFuFm7ANNgwoeS5ePPy9PXGpMbsp3frGnE7QwruPivQY6pgFlVKuBi4AjDeSnSD%2Fvzeebu36ceewyaR6UMPHF08MFKoC8tnWDAc6pBw8ClVw1hjSXqwM5XpQO6S0%2FAm1OZQlKKcLctBDheU0h4eLN17jtP%2Fwo%2FQS%2FDDmcm1iav0wjv8Lg4di23xNkEAGHE4xgyBQlnwkfq4OOvSy%2BNTeziaBNldP6MlGRJzaCA8tDmgFWZ4T7J2my1M6GCSj7iZfY62Z8I0omDl4X&X-Amz-Signature=172915041861f8d1df6fabae3b05bc0e3cf3e1668d400e14c4d94b224c77841c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
