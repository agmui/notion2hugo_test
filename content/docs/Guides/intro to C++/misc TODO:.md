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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOZKBHH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDHelgej%2Frb7ALj68FsKlJE%2B8kImWaXHZ0QopFjEPsVsgIgTPJ6dBoMBhfcEirXSQw0aXESMOfdZJajpPxxzqx7MNcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh0qAwylZpxLD6vMircA8gMAKwstme%2FUr1x6sGBlnWvStdqnPAs1I3Wu4aEtk5io2cgv7pAfoFV%2BXHalE%2FV2XOdllVyx0vZsnv9FCimj%2FNlE2p3GNZEA%2Budr1GdFWx5QMVaYIYliFHRfZEFHXHmNx%2BaRqwDus0JK4n7rH5DT84%2FHWMDf9YjRYd6du1JcXlB0QunTGK9BtD%2BmgJe4theIDeltpmL0eBzpqpz5GDQNkH3BgTZysoxmyFMZRCiGpMNwvW8cHLzQFIxn0UoA0CObKwQPIsWcih893%2BxI7dlIvHuM%2BWFJZ5RhicL3yuqh2EckeIEs4XyeOxoEJgGA5drDEVmmDtLqU9rwugQp3rvdjEgPWD%2Bz%2FaJzSTZDizPTAhaZPQXRi%2BkAqJmGVsOVaZ1PSZB%2FkpM7NcbRASb8as%2FCEwvb1cjyLIksaF37g3ZaE9QlYZjw8u1QMNkyI9vmnonEtpUk3sthhf4yCpgBkn6%2BfGuxHGV96n40t24oYd2vdYBW8sCim%2FRDQKANgw4DK1%2Ba%2B5VqcseS308uy3%2BEbnwbcQzgCuHyxZn0vnj5jqDDfqJjC9fVQ3QYQGQyLaTv3Yz%2BQdJ8BL3HQq%2Bkp20SzWJUHtR4aU6uLi2lp4PA81fZUZyyG6C%2FISQmnODHmogMN3y178GOqUBxN1je30%2B3w3bzaV8Vmk4K7AJwkaaCWzW4gBdBkeI8VvLN5ZBF5NvSZD3yMjxI76E0pXBjvRNdk%2Bk%2FBa7%2BETZWGI92vlPFhmdt1SGkVciUXMc1O1zmhoMkkQypBXCMndWX%2BWNRw8Tnwv1JPZVKKGJdZ1%2B3ptILOQPsQYemJ%2FDuVDGIFFeJZJRWk72yb3ycTXm55WYZpg7ZG0mrkDu%2Fj1yC7VVFEBq&X-Amz-Signature=45f52bd53539e63d7de7fe8b359e183745c35312d5683ef0cc377f453137cb82&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOZKBHH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDHelgej%2Frb7ALj68FsKlJE%2B8kImWaXHZ0QopFjEPsVsgIgTPJ6dBoMBhfcEirXSQw0aXESMOfdZJajpPxxzqx7MNcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh0qAwylZpxLD6vMircA8gMAKwstme%2FUr1x6sGBlnWvStdqnPAs1I3Wu4aEtk5io2cgv7pAfoFV%2BXHalE%2FV2XOdllVyx0vZsnv9FCimj%2FNlE2p3GNZEA%2Budr1GdFWx5QMVaYIYliFHRfZEFHXHmNx%2BaRqwDus0JK4n7rH5DT84%2FHWMDf9YjRYd6du1JcXlB0QunTGK9BtD%2BmgJe4theIDeltpmL0eBzpqpz5GDQNkH3BgTZysoxmyFMZRCiGpMNwvW8cHLzQFIxn0UoA0CObKwQPIsWcih893%2BxI7dlIvHuM%2BWFJZ5RhicL3yuqh2EckeIEs4XyeOxoEJgGA5drDEVmmDtLqU9rwugQp3rvdjEgPWD%2Bz%2FaJzSTZDizPTAhaZPQXRi%2BkAqJmGVsOVaZ1PSZB%2FkpM7NcbRASb8as%2FCEwvb1cjyLIksaF37g3ZaE9QlYZjw8u1QMNkyI9vmnonEtpUk3sthhf4yCpgBkn6%2BfGuxHGV96n40t24oYd2vdYBW8sCim%2FRDQKANgw4DK1%2Ba%2B5VqcseS308uy3%2BEbnwbcQzgCuHyxZn0vnj5jqDDfqJjC9fVQ3QYQGQyLaTv3Yz%2BQdJ8BL3HQq%2Bkp20SzWJUHtR4aU6uLi2lp4PA81fZUZyyG6C%2FISQmnODHmogMN3y178GOqUBxN1je30%2B3w3bzaV8Vmk4K7AJwkaaCWzW4gBdBkeI8VvLN5ZBF5NvSZD3yMjxI76E0pXBjvRNdk%2Bk%2FBa7%2BETZWGI92vlPFhmdt1SGkVciUXMc1O1zmhoMkkQypBXCMndWX%2BWNRw8Tnwv1JPZVKKGJdZ1%2B3ptILOQPsQYemJ%2FDuVDGIFFeJZJRWk72yb3ycTXm55WYZpg7ZG0mrkDu%2Fj1yC7VVFEBq&X-Amz-Signature=6140e2e837c2e81abd161b09b4da3551ce8d07a1466ae4dba638f83fb2dd34dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
