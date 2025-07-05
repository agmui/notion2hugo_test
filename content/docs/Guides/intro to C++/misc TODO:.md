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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2JPLVG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCWY7zQfWXQIo9puc%2F0vqk49z4Vx7f%2FC8rbWeB4ZzkosQIgc1pA6ne9JDnIfarTtXV7wZBhSiJPn2VzOWguZy%2FBzisq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL1gtNle6ikOsg31QyrcA%2BhvB%2B5xBoNuaBoLmFi%2FNq7vn9nOGWZZN4KtO3%2Bo1wCAVeXk2iEQNHjz0LjmCF2s6%2Bve%2BjUD%2B5MoZVGFSz5LuOys90O2G%2BpeslOKu3v4pMIAZbEdI2%2FZnvAitzC3GDMIN2kU34uZcKKmjfddg6%2FbPLZCH3OZDgTi69roECIsGgzGB5MFLY1rV9bawlOyY67Q5lbMR4fPPh2z43dVGbBwKZ3b8E3dFN65HEvGc5kKWJTTWOCaHkLJP0E79lzJz5khvmLhUId6Pz%2FC0iamxq3t0TFrbNYix2Pw8vGOropK4Z08WHRHdoo%2B0Ec3Wzqu6o7bQSRXyzhvXwElMWZbPMUk6Cw%2Fla3ixDZIiGuSUwTi2TtAMmB0QS7Bw6Y2F5StnKTbjO%2F3Fq69nZ%2FGna7WLLP9CqP07pC1ejROAQ%2F4j%2F89ltRob4ZkQg6Hvm0UmpfBNYhg9sPhNL3Exw9AtwPzyb4CRzpcqsnUOE3J%2F0Jqn5dcDYCZHXW22qPjKOJA5jbQHajw%2FBEmSOGiLU3Xh8h0NXiL8l8Z7q6KjI7KDqZp7HTj0sVmZwRiidUfgUErEwlDWYzOhLM8Dn6JRElo3Ls%2FxfkpBHciezBYbUop2h6T1xYhLgBBPelMwXYIJZ4GRWTxMI%2Bqo8MGOqUBuy3b%2FQT%2BTJjig1gLB7%2BfqCZ62k%2FkQtqVtDh1n%2F50kJSEsyscN1Y5acvd0dWEWIMqTm8oYlWeFpOy1TpSlgN3%2BUKkknyJe4AuYAnLbu5FS4r8jFf9CuS7xVqOQMxu2FE6dFhjR3UwNM%2B95CgASSK9hXBU7O7dOp9dqxtsxW6E%2B%2BKGBRru3Y5DiNrlGsC4yHflq8MC%2BMBDJk0BPK2VJpOQcCI3wndW&X-Amz-Signature=a565a19f51a9aa02a328cde6bb27a4a3c7b792596d205064e4b53adc0c291138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2JPLVG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCWY7zQfWXQIo9puc%2F0vqk49z4Vx7f%2FC8rbWeB4ZzkosQIgc1pA6ne9JDnIfarTtXV7wZBhSiJPn2VzOWguZy%2FBzisq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL1gtNle6ikOsg31QyrcA%2BhvB%2B5xBoNuaBoLmFi%2FNq7vn9nOGWZZN4KtO3%2Bo1wCAVeXk2iEQNHjz0LjmCF2s6%2Bve%2BjUD%2B5MoZVGFSz5LuOys90O2G%2BpeslOKu3v4pMIAZbEdI2%2FZnvAitzC3GDMIN2kU34uZcKKmjfddg6%2FbPLZCH3OZDgTi69roECIsGgzGB5MFLY1rV9bawlOyY67Q5lbMR4fPPh2z43dVGbBwKZ3b8E3dFN65HEvGc5kKWJTTWOCaHkLJP0E79lzJz5khvmLhUId6Pz%2FC0iamxq3t0TFrbNYix2Pw8vGOropK4Z08WHRHdoo%2B0Ec3Wzqu6o7bQSRXyzhvXwElMWZbPMUk6Cw%2Fla3ixDZIiGuSUwTi2TtAMmB0QS7Bw6Y2F5StnKTbjO%2F3Fq69nZ%2FGna7WLLP9CqP07pC1ejROAQ%2F4j%2F89ltRob4ZkQg6Hvm0UmpfBNYhg9sPhNL3Exw9AtwPzyb4CRzpcqsnUOE3J%2F0Jqn5dcDYCZHXW22qPjKOJA5jbQHajw%2FBEmSOGiLU3Xh8h0NXiL8l8Z7q6KjI7KDqZp7HTj0sVmZwRiidUfgUErEwlDWYzOhLM8Dn6JRElo3Ls%2FxfkpBHciezBYbUop2h6T1xYhLgBBPelMwXYIJZ4GRWTxMI%2Bqo8MGOqUBuy3b%2FQT%2BTJjig1gLB7%2BfqCZ62k%2FkQtqVtDh1n%2F50kJSEsyscN1Y5acvd0dWEWIMqTm8oYlWeFpOy1TpSlgN3%2BUKkknyJe4AuYAnLbu5FS4r8jFf9CuS7xVqOQMxu2FE6dFhjR3UwNM%2B95CgASSK9hXBU7O7dOp9dqxtsxW6E%2B%2BKGBRru3Y5DiNrlGsC4yHflq8MC%2BMBDJk0BPK2VJpOQcCI3wndW&X-Amz-Signature=c2faf3c16ec4db9f88a5ef5fe900831480736f60cb7dc1130a1448206d9649b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
