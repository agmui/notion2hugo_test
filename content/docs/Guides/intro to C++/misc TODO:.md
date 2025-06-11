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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFLRBEV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycCN5yMXsLE5MscUL59g5ckske0N2WE1Z3nM7fpkBGAIhAJSSh%2Fbexoxik1Qi8p5xrCs2uu67FuLow73s1%2BFTMHNfKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAcP3sGECqFEi70rAq3ANywWkfrrjyvkLVRxBMniyG%2BbMK58dngNdh24l%2FikG9Y3UfjjmO5KAZldVtfuvVWGOBxgCja4wCHsMYxjVV1hMeyAaRwoxKMkPAF4rhu1s8oT6EDP7TYoJ%2BO5vuCF3owAWj5fTDSnCXKJRMZ9e%2BLaR5L8Llqj7xlMd6fNzi31XhYJ0beaiw12aDQkL391Argjwin3HXq0XEunUCIWJDznhRY%2B3ALVsPORxy0QBeEzKpf89H%2Fm0ul3p%2FmqMxdggl92hFat3EaTjlq4HgSUM3RqAWAOKO5EMJxB2H7%2BBefJ26c3a8orBnPieNhJmu7xrdrh%2FzEGCy3BXHvOBevL7ii3%2BT31os8R%2BMz3s47JdgjTbgr0pI887RXYN4LBTb7qoJWWre6U2bRZrNgoVjV93PUkOBAR0m7Ym9WxavO8Ls8x25OlLObDF6jkL5wzPqNIN6adZB90Lwfm2HaaEcOy15K4DnFh3WFtzTh%2B5MBVAQbjbI%2B57D3FqR8QSDIoPjb%2F3C%2BYWCHgOHbwl043%2BpxgDOAt6sl%2BnDHU7KzZggXqvqF6HQ9UmbJRaIH8SCXAxq1R4LXEqpXDi8c4pqXc3edpc9Hx0b7q74pf7SLzcsE5pZ8GkWGw67BDZOlx9Ses%2Fc%2FjD%2Bh6XCBjqkAXMS7HrjYXIX2F04I8MEoLxKvXB7uwTUcn%2B73dYo2ELr1vIlZFKeMFCXtOYfPG87yXx76YAHZhU9mOBo9ytnHpBrLE1OO3hni8oiZalvUr7HiRZi6Q75XOvXkdPiaAvP0Xk%2BXDe%2B7CzgCWZiEiDk96M%2BMQe3ClPQ%2B4232sCirZQ27oflVHWTLdXxTlMS8zt6NKBkOVp33jbCABee9uEjzVPjSSDu&X-Amz-Signature=b07b1739482a7e2c2899426c1f222b5eb28bf4017a4d2e150b4cd3c598ffd948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFLRBEV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycCN5yMXsLE5MscUL59g5ckske0N2WE1Z3nM7fpkBGAIhAJSSh%2Fbexoxik1Qi8p5xrCs2uu67FuLow73s1%2BFTMHNfKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAcP3sGECqFEi70rAq3ANywWkfrrjyvkLVRxBMniyG%2BbMK58dngNdh24l%2FikG9Y3UfjjmO5KAZldVtfuvVWGOBxgCja4wCHsMYxjVV1hMeyAaRwoxKMkPAF4rhu1s8oT6EDP7TYoJ%2BO5vuCF3owAWj5fTDSnCXKJRMZ9e%2BLaR5L8Llqj7xlMd6fNzi31XhYJ0beaiw12aDQkL391Argjwin3HXq0XEunUCIWJDznhRY%2B3ALVsPORxy0QBeEzKpf89H%2Fm0ul3p%2FmqMxdggl92hFat3EaTjlq4HgSUM3RqAWAOKO5EMJxB2H7%2BBefJ26c3a8orBnPieNhJmu7xrdrh%2FzEGCy3BXHvOBevL7ii3%2BT31os8R%2BMz3s47JdgjTbgr0pI887RXYN4LBTb7qoJWWre6U2bRZrNgoVjV93PUkOBAR0m7Ym9WxavO8Ls8x25OlLObDF6jkL5wzPqNIN6adZB90Lwfm2HaaEcOy15K4DnFh3WFtzTh%2B5MBVAQbjbI%2B57D3FqR8QSDIoPjb%2F3C%2BYWCHgOHbwl043%2BpxgDOAt6sl%2BnDHU7KzZggXqvqF6HQ9UmbJRaIH8SCXAxq1R4LXEqpXDi8c4pqXc3edpc9Hx0b7q74pf7SLzcsE5pZ8GkWGw67BDZOlx9Ses%2Fc%2FjD%2Bh6XCBjqkAXMS7HrjYXIX2F04I8MEoLxKvXB7uwTUcn%2B73dYo2ELr1vIlZFKeMFCXtOYfPG87yXx76YAHZhU9mOBo9ytnHpBrLE1OO3hni8oiZalvUr7HiRZi6Q75XOvXkdPiaAvP0Xk%2BXDe%2B7CzgCWZiEiDk96M%2BMQe3ClPQ%2B4232sCirZQ27oflVHWTLdXxTlMS8zt6NKBkOVp33jbCABee9uEjzVPjSSDu&X-Amz-Signature=9be07bbf0f4d4d8a93936b1b9d58cac2f85ec33fc7f67e123dbf5abc785a742a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
