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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBONURZZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDk8gkm8J6Zk52JZvp1TdwUyiKqPFhDO9RDezQHqcl3LwIgW7s%2F4sWdxztrSZ5C38OSkeUPf6QsTrrBflTwleDFfX8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMRQEYh%2BmWFzgBSgASrcA3sVw6EW1iCxL5IG1DagN3Lx3RVygCLUUe3%2Bo%2F7b7kps%2FS6BgX3AlSwJbm8Ldr3q5n8pPc3pbGIx2mc%2FqWOqoRZ4%2BWqOEpPdwL%2BO6kTyLQ6e3ZVb6F0Sdgg6sPo6W8mI5A9o%2BUTFpdj3wi19Im9Eh97gt1AE%2FxJ13RF21OYN6UxVQv7m70%2FWJs2t%2FRXbbzBJOJ7FUUJggv%2B1V9EKwUZscRB%2BPn%2BGfewBhipP5Hy9e7m8%2FEuVCHunHNkY0hg6uhGHt06COvIDk1Psqk46DF6DV1USMeWr8SB4r1sbibygJVUZN4c9RvL23NVVEJg1XAiZTLmTrNpKNU3MDrRWoco8vZozGItXeVeZL%2Fd3RAmyLvS15fQ0OvEu3bewEJ%2FMqGSYhqQXFs782%2BC7wVOGaF5nwJXFrUhuII4j2JLiA2h%2BJGVixfWolNUj4lhleJdPEu7AcbGNhf3xGWkIwTA%2Fbxd9y%2BbQ1sLxhtEXJmjN%2BE2Rq4CVs01nxmDqJv6pr5MKlb7HW%2BGW9E2I8kLY%2BhPqX8ipz6Jq4GjhtXNk6eKZk5LQ1zZV%2Fv%2Ft3hL1XND1WAZnpR3jrLBxcWnl1kkxaICkNFjV5BxwXeFeEjJNhaYpQ89LdQJaE2hcVwD2gox6hznLMKOuhcIGOqUB4A0J8f%2FHefsTUxztCwPibdjWOAdrmL3KuRlnqoLy7bDjp%2B9fqMIxDa7vHDtpMh13xXW3jt8oHqiBJUkjx4qFlKPNn9BME3PijYHROd%2FNXrr8jsPDqi8MUoDAt3WSx%2F3GpHv3jZTUdB7LXYnlxW4jnt%2BkHMmGhq8%2BT6yB6hfDUjN9FcJxQO3eyTldUnf34%2Fr9itoQ%2FN9YbKneFbpGclJ488Av0LtU&X-Amz-Signature=0ee790172e5755e0751c5c3ea362216958a557474fee6e4b1e1834aa0382d7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBONURZZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDk8gkm8J6Zk52JZvp1TdwUyiKqPFhDO9RDezQHqcl3LwIgW7s%2F4sWdxztrSZ5C38OSkeUPf6QsTrrBflTwleDFfX8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMRQEYh%2BmWFzgBSgASrcA3sVw6EW1iCxL5IG1DagN3Lx3RVygCLUUe3%2Bo%2F7b7kps%2FS6BgX3AlSwJbm8Ldr3q5n8pPc3pbGIx2mc%2FqWOqoRZ4%2BWqOEpPdwL%2BO6kTyLQ6e3ZVb6F0Sdgg6sPo6W8mI5A9o%2BUTFpdj3wi19Im9Eh97gt1AE%2FxJ13RF21OYN6UxVQv7m70%2FWJs2t%2FRXbbzBJOJ7FUUJggv%2B1V9EKwUZscRB%2BPn%2BGfewBhipP5Hy9e7m8%2FEuVCHunHNkY0hg6uhGHt06COvIDk1Psqk46DF6DV1USMeWr8SB4r1sbibygJVUZN4c9RvL23NVVEJg1XAiZTLmTrNpKNU3MDrRWoco8vZozGItXeVeZL%2Fd3RAmyLvS15fQ0OvEu3bewEJ%2FMqGSYhqQXFs782%2BC7wVOGaF5nwJXFrUhuII4j2JLiA2h%2BJGVixfWolNUj4lhleJdPEu7AcbGNhf3xGWkIwTA%2Fbxd9y%2BbQ1sLxhtEXJmjN%2BE2Rq4CVs01nxmDqJv6pr5MKlb7HW%2BGW9E2I8kLY%2BhPqX8ipz6Jq4GjhtXNk6eKZk5LQ1zZV%2Fv%2Ft3hL1XND1WAZnpR3jrLBxcWnl1kkxaICkNFjV5BxwXeFeEjJNhaYpQ89LdQJaE2hcVwD2gox6hznLMKOuhcIGOqUB4A0J8f%2FHefsTUxztCwPibdjWOAdrmL3KuRlnqoLy7bDjp%2B9fqMIxDa7vHDtpMh13xXW3jt8oHqiBJUkjx4qFlKPNn9BME3PijYHROd%2FNXrr8jsPDqi8MUoDAt3WSx%2F3GpHv3jZTUdB7LXYnlxW4jnt%2BkHMmGhq8%2BT6yB6hfDUjN9FcJxQO3eyTldUnf34%2Fr9itoQ%2FN9YbKneFbpGclJ488Av0LtU&X-Amz-Signature=38b1995c8bbdecfbf7c7a7020432365fc9c756acabb7be7b18992d3fbe431b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
