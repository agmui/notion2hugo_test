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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJP64RB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaO44qEQImnYmk20IaRSoE24HnkZGc56rgG4xzFtJ7%2BAiEA%2BRoldiBMER%2B4qL2QTChAd8e3YBXXPTaU0PWxvlljuCIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOjREAFSE4TA0rcA0yrcAyRb8mrN3Gt8veD99Ut41fDoUMImnZT1kmypFB23Ckr0reecvf5Hd6CTImFXkHJ94XTOrFYzxYNnmxjoMLoa3FKeXzvTpDHtkjWgRw4t8cwG10kfNOOmtCj4gSHeeGFFiTqsWfM4lDom7sj4hGDZJ%2F0nX1xtTlUBYMbxhVoyjROAN%2Bll0%2BhNdElJi7q6XwJu6jkYBvG7IdOO%2FWKMzAfWEwHx927Q%2Fudr8JTO9JOZRgQFyBizlmb32UuMMtzAHTaGxvDJR7Bc6BA3O1r4EdHx3ke171I6QE5%2Fr0dGYyLljCbjG4dOaklwDgxr9WU6BnfmcNL1GNGmw0c8lB0bJAgDZVhychk2curvMpOoGHaXe82Xlr9aqdPKJe9fAW%2BC8OII5AzFnv6cHVhEdMPDUQng6eS6Oa7foncAxYveMv8dSJvQzG0bzegFlmTMF61pqYQ8Vt4ZUFlswIwVBNgk47QxsA3vtYJxktRxaMIbD%2Bk8suD1t6DlGjSpllqMFp7v5fchCDHl%2BN3rRnD8rImoreME0NZ3PG%2FLurBTpW66eNa89bE5%2B78%2FICuSYZc7To%2BrZJrm7n6RpcbIFpYTgc7mAKgEl6IPgCLbJYSCyRUfJXsebPdJ0In7T5IdATIqtGNWMNnG8cQGOqUBfUqg64LqLHLLwMnwBEjwYRnqYp1FNuhJCWbtoi9JC9jdM3yBrOQAbfdJevkH4lmFzdFctcNza%2BmHC7jZ8wZdS4IoPmJCPVrJ%2FrTt3rkxuxqMF7qFwpNHJ3MHP2oAGjaChnM3E%2B7VchB3%2Fl9vcVbqS3H%2BfUCqvVp2j2SmGlul1AaZBO5%2FC8cyPtypIpXBPtX%2BjEfUj42h8b%2BXeQl1NlE6Nm0uZsku&X-Amz-Signature=e60c2a876c76b5465e56265c19689e16ac6f7272cfef5e473b4a6dab90462fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJP64RB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaO44qEQImnYmk20IaRSoE24HnkZGc56rgG4xzFtJ7%2BAiEA%2BRoldiBMER%2B4qL2QTChAd8e3YBXXPTaU0PWxvlljuCIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOjREAFSE4TA0rcA0yrcAyRb8mrN3Gt8veD99Ut41fDoUMImnZT1kmypFB23Ckr0reecvf5Hd6CTImFXkHJ94XTOrFYzxYNnmxjoMLoa3FKeXzvTpDHtkjWgRw4t8cwG10kfNOOmtCj4gSHeeGFFiTqsWfM4lDom7sj4hGDZJ%2F0nX1xtTlUBYMbxhVoyjROAN%2Bll0%2BhNdElJi7q6XwJu6jkYBvG7IdOO%2FWKMzAfWEwHx927Q%2Fudr8JTO9JOZRgQFyBizlmb32UuMMtzAHTaGxvDJR7Bc6BA3O1r4EdHx3ke171I6QE5%2Fr0dGYyLljCbjG4dOaklwDgxr9WU6BnfmcNL1GNGmw0c8lB0bJAgDZVhychk2curvMpOoGHaXe82Xlr9aqdPKJe9fAW%2BC8OII5AzFnv6cHVhEdMPDUQng6eS6Oa7foncAxYveMv8dSJvQzG0bzegFlmTMF61pqYQ8Vt4ZUFlswIwVBNgk47QxsA3vtYJxktRxaMIbD%2Bk8suD1t6DlGjSpllqMFp7v5fchCDHl%2BN3rRnD8rImoreME0NZ3PG%2FLurBTpW66eNa89bE5%2B78%2FICuSYZc7To%2BrZJrm7n6RpcbIFpYTgc7mAKgEl6IPgCLbJYSCyRUfJXsebPdJ0In7T5IdATIqtGNWMNnG8cQGOqUBfUqg64LqLHLLwMnwBEjwYRnqYp1FNuhJCWbtoi9JC9jdM3yBrOQAbfdJevkH4lmFzdFctcNza%2BmHC7jZ8wZdS4IoPmJCPVrJ%2FrTt3rkxuxqMF7qFwpNHJ3MHP2oAGjaChnM3E%2B7VchB3%2Fl9vcVbqS3H%2BfUCqvVp2j2SmGlul1AaZBO5%2FC8cyPtypIpXBPtX%2BjEfUj42h8b%2BXeQl1NlE6Nm0uZsku&X-Amz-Signature=4e12633fdb8fd458286a745a20c0ca81486ae2b65787e411504ed352d4127b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
