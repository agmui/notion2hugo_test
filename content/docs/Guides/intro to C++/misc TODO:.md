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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3TKOHR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDEjNlyg9DXuXyv2vTDxW48SsTdEUQEDGQlicCggVqzPQIgeCvHtq850Og3Fnc3BYhZSryZFU35yc6zmg8w5tewGJUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDUz7iTp6njsz07H%2FCrcAxXkxgFnRmnmlVnMNctOclP4PPMdPPnR8AdY3HGJiORRZ1Ove3WrF4KpRz%2BNTn%2FlZ3w62PVLbex9UD%2BbdqlDTBHV1aqx12G6AozSQcT4dW1Jwb7ahvT1NXPbyJS%2BMxK6zpfsZH%2BsGPTDX65lwjExh4t74sxUlU7v%2Fmn%2FEqbeMNlH60J7D6rKBje99anZYxKULDd51FOXm%2BcEszNNov0eNTmbltz6bJHIHHae8qPXiajmg%2B4ntaLxvYdMMEwsn%2Bkn%2BXpgz1hN8LURRv%2FK%2FXt4aN2nGXXjeiMzFaNiwSaZHnoSk3810x3dpmJkqRtYpQ%2F7JoSMpRkN0z3ksG%2B1NeX0of4OvTsZdqT9y1QtWUMKI3LsTbSIiYBXz9vlOaNF5PPSOT1Nc0Q%2FAreqpKHvPxuAH18MsZf4Xa0iYNjwSWMEmkXYKIL0n5ELe6g9VwdxsusCstFWhVcDTepnFERr1twwxiSCqt6nd4FNpMKqRtdXy6ItZpauuCi5ujdL0q1mJ8lS5nsIHc1fCAbQdiA15aQsGxYyp8jWlKofD8JzH5OrYcJhts%2BTgOUqm5dN3Qxbm%2FNnXdNsAixVglBqXLXdPIJXfnKH0EmxqBeTjz%2BziQBW376PjRPDCCMrmUojvEVUMOK6w70GOqUBKqenRP%2FY43Hnmc9efnFNjaT0OdXKF%2FmIgzi9DTx2eGI8GqHeaHMRaDmTmq6DSOUNVhFnAslXfu95RGYZtsNcJkQJGAfNRBnXPVdCgTtjPgyPcfr2tULwVdHbDcrY%2FsswvhQJcEugNx0APpwaJ5BNccufYHmUkG9bhsExbM48rvoRbz5Ge0gbO8lY3JC0t5SAOU3iuGHgeZmewzTU0IseGO7Hicxe&X-Amz-Signature=9966da6ac5d1296cb73bd410f2c769f8f3122790cde7478793c1bbb8d8eda2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3TKOHR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDEjNlyg9DXuXyv2vTDxW48SsTdEUQEDGQlicCggVqzPQIgeCvHtq850Og3Fnc3BYhZSryZFU35yc6zmg8w5tewGJUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDUz7iTp6njsz07H%2FCrcAxXkxgFnRmnmlVnMNctOclP4PPMdPPnR8AdY3HGJiORRZ1Ove3WrF4KpRz%2BNTn%2FlZ3w62PVLbex9UD%2BbdqlDTBHV1aqx12G6AozSQcT4dW1Jwb7ahvT1NXPbyJS%2BMxK6zpfsZH%2BsGPTDX65lwjExh4t74sxUlU7v%2Fmn%2FEqbeMNlH60J7D6rKBje99anZYxKULDd51FOXm%2BcEszNNov0eNTmbltz6bJHIHHae8qPXiajmg%2B4ntaLxvYdMMEwsn%2Bkn%2BXpgz1hN8LURRv%2FK%2FXt4aN2nGXXjeiMzFaNiwSaZHnoSk3810x3dpmJkqRtYpQ%2F7JoSMpRkN0z3ksG%2B1NeX0of4OvTsZdqT9y1QtWUMKI3LsTbSIiYBXz9vlOaNF5PPSOT1Nc0Q%2FAreqpKHvPxuAH18MsZf4Xa0iYNjwSWMEmkXYKIL0n5ELe6g9VwdxsusCstFWhVcDTepnFERr1twwxiSCqt6nd4FNpMKqRtdXy6ItZpauuCi5ujdL0q1mJ8lS5nsIHc1fCAbQdiA15aQsGxYyp8jWlKofD8JzH5OrYcJhts%2BTgOUqm5dN3Qxbm%2FNnXdNsAixVglBqXLXdPIJXfnKH0EmxqBeTjz%2BziQBW376PjRPDCCMrmUojvEVUMOK6w70GOqUBKqenRP%2FY43Hnmc9efnFNjaT0OdXKF%2FmIgzi9DTx2eGI8GqHeaHMRaDmTmq6DSOUNVhFnAslXfu95RGYZtsNcJkQJGAfNRBnXPVdCgTtjPgyPcfr2tULwVdHbDcrY%2FsswvhQJcEugNx0APpwaJ5BNccufYHmUkG9bhsExbM48rvoRbz5Ge0gbO8lY3JC0t5SAOU3iuGHgeZmewzTU0IseGO7Hicxe&X-Amz-Signature=7ac5b0966858ccf8d64b5ac29b519bb6b6ba919924ec4be7a43ab0bac1c49e30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
