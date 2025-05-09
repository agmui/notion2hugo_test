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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJYQMTB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvp%2ByCdJ0iyFG%2Fcj5F3OGSF5F9lj2EfujNWo3t7sEfpQIgHnN0iDDEToB7sS0Oxmmw%2Bl9VqxZ07UYtrDTcVsrTbdkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlpzVQ%2BmgRSl%2F1ARCrcA15viGn1Cc%2FJeoxcVgoCul02wFh149ldQIiauAaX636nnY8xuz81%2F5Jb62v2UWR2%2BvGJ6QOvl92%2BvYW7MNpenl8YLX12fbMUDtDYPjnvu1FwcAVuNmXAZ3bKkhi%2Bw9yR8DhsvuvkhgCib0FlKG8%2FPF3zeVbxsff8ClYhXABcxTC79qe%2B8bYcgfezQOOICoanScmtPgO7d41B6%2FsAwdG2zhphqe%2Bl8x5bhKM3gYHwkB3IfXx6G6PEz%2F%2Fnd0mpT1iRRMhdaetCBzg2XC7RkJ%2FihIjD1Dy9oRPlg%2Ff1EjNVxOCAeqhvjjDbL6bOGAAr6nceq5FqwtQKFXzgZxVPHx1W9VSpqM47xi3iFDdXRLE0kmlNAoWpVKmDioIY6pjZdwaMYkWIGm2dJCzr2sScXAenLtih%2FF1s5ir5%2BdSH9jxpy5Hb%2FGmWi5f%2BwXPdyEJozrMQd%2Byw7NmM0zErUBvS30NyQWSBfsj2j4W0Yppsc1I31x4LJ0GU4RmbDajesWrCUn5GCmofiySfS0%2BtX9uNbVzOzzMGGZzs%2BTdBHYCoWrwQD%2B0O%2FfkmSDODpw1BodUVv9bkc0edG54yjfIOI7jMWVi9jb5rsw2cwwxZyoJB1GRbv0SExoBxzEdPLNUE%2FnUZMPzE%2BcAGOqUBTBCGx3w3NmgIukdYL99U7dvMcVJpZhpPVLSy%2Bs%2BSZQxhraISd7LqKU30rbuKmScA69s%2BxKrmKZfsBhy8tlgGfKWPlW3ZgNp9XrfEyfgXz4oFwKeQVsudW49ZPYbr%2BtD8qaL8o74p0pmLm9lrhvcXZgQv2qmBBig5DqCj1h3pGtu8H2Izedu2RcPU%2BDrDt36rDmslxHZLhLOasIVelaWE%2BbzcDaNU&X-Amz-Signature=273baa157abe7517deb0279fec2b72a2b29e4277de6cdd67e51cddc0e788066c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJYQMTB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvp%2ByCdJ0iyFG%2Fcj5F3OGSF5F9lj2EfujNWo3t7sEfpQIgHnN0iDDEToB7sS0Oxmmw%2Bl9VqxZ07UYtrDTcVsrTbdkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlpzVQ%2BmgRSl%2F1ARCrcA15viGn1Cc%2FJeoxcVgoCul02wFh149ldQIiauAaX636nnY8xuz81%2F5Jb62v2UWR2%2BvGJ6QOvl92%2BvYW7MNpenl8YLX12fbMUDtDYPjnvu1FwcAVuNmXAZ3bKkhi%2Bw9yR8DhsvuvkhgCib0FlKG8%2FPF3zeVbxsff8ClYhXABcxTC79qe%2B8bYcgfezQOOICoanScmtPgO7d41B6%2FsAwdG2zhphqe%2Bl8x5bhKM3gYHwkB3IfXx6G6PEz%2F%2Fnd0mpT1iRRMhdaetCBzg2XC7RkJ%2FihIjD1Dy9oRPlg%2Ff1EjNVxOCAeqhvjjDbL6bOGAAr6nceq5FqwtQKFXzgZxVPHx1W9VSpqM47xi3iFDdXRLE0kmlNAoWpVKmDioIY6pjZdwaMYkWIGm2dJCzr2sScXAenLtih%2FF1s5ir5%2BdSH9jxpy5Hb%2FGmWi5f%2BwXPdyEJozrMQd%2Byw7NmM0zErUBvS30NyQWSBfsj2j4W0Yppsc1I31x4LJ0GU4RmbDajesWrCUn5GCmofiySfS0%2BtX9uNbVzOzzMGGZzs%2BTdBHYCoWrwQD%2B0O%2FfkmSDODpw1BodUVv9bkc0edG54yjfIOI7jMWVi9jb5rsw2cwwxZyoJB1GRbv0SExoBxzEdPLNUE%2FnUZMPzE%2BcAGOqUBTBCGx3w3NmgIukdYL99U7dvMcVJpZhpPVLSy%2Bs%2BSZQxhraISd7LqKU30rbuKmScA69s%2BxKrmKZfsBhy8tlgGfKWPlW3ZgNp9XrfEyfgXz4oFwKeQVsudW49ZPYbr%2BtD8qaL8o74p0pmLm9lrhvcXZgQv2qmBBig5DqCj1h3pGtu8H2Izedu2RcPU%2BDrDt36rDmslxHZLhLOasIVelaWE%2BbzcDaNU&X-Amz-Signature=b2e9ab7341121d69d0de63b348e0df18b84a8f70e97c39e891fc58b67b158551&X-Amz-SignedHeaders=host&x-id=GetObject)

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
