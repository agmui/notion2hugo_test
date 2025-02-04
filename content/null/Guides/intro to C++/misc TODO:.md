---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV6IMKCI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDxVcKSBRpyo5IYxMkO0NETkGl5%2BnMnPHFPkbzYE77X0AiEA8o9Ts324NOBoZo2OdzUh66RxwuqWNA20%2FJpEb%2BPTFakq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK7RkVqYcM2xPzcVqyrcAyWO0eMw1L84Yb7Mpa8JMCaPLDH64p%2FVGarVswm0aaqJp3LiYfiG4KLLH6p4KNzdLlyqGI%2FhErDfY8KGg86zVFdO3nNt7gNGd8S0KIvnKSN7A2Fkvz%2BaRtOB2YwT3n86Z6KmV704b1TUBqXs4w1EinS%2BnpaA1wazlvtBjLChOHzxlhFjvAqVgW7UuqhVreGrXt8ooaRDp0hkjKDFsqx%2Blv5LnBigQe8G1WwrdoJy7biPIjBtfH9cJiJdOL5K346n16qe0lYu%2Bll0kkg2hktYhn5rz1oWq63M%2FFWyhBieXstjRe6JZtSVZBJGSOeLb%2B7hI%2FVgVnE1lDzMvpJYpyhLQJv%2BZzGxTSreo9PrnUnK022alLw304sSWe9wB28KEKZ%2B333vOzoSpXnUiiBej05YgdYiAaJlq5cv4wOnVe7h%2FcfdK3mTndeN%2BIgQyCa0cPL2x8nB0hLdBdCo2mtzoZJN2Ufoaej5GlRPSZQ0y07Bks%2BIH3sCQNSnKKkXvJpDK6nsl46Q%2FBueGMbiMbS8HG8d8ZkODEAGAPt783JAIv%2BUaAg6LZ73gFEi%2BeZiDmdc76%2FcLOTx5iCX%2B5rzBSUoeSkhRH0xV1Sgznu9v7J%2BPFOlmswtdLISmUrm8%2F3vr7OzMJeVir0GOqUBQZ648HZj6E2PzVbU6AWw6QRNzr5Zo9LiIDS4wDrtHQ7i6F7xsCM9YKphaElbum3eGTZM5T%2FXswJ0qQpg30wALKlxEPFWJGw3ZTLIEH7pGirFBtmvDpU3C%2FmCPTsWCK1s3dKt%2BLN9JTFOtfkoieur3Jj8dZL9awEwGWHYLj9h6TC%2FtMuppAAEICHXMo3PnipjhbrMgaBHk078H%2FrWvf8kWqb3ch3V&X-Amz-Signature=11a05736ada5bbd9613d114df1e8a583ccd34172ae35ee5c7cafab1e7698db5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV6IMKCI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDxVcKSBRpyo5IYxMkO0NETkGl5%2BnMnPHFPkbzYE77X0AiEA8o9Ts324NOBoZo2OdzUh66RxwuqWNA20%2FJpEb%2BPTFakq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK7RkVqYcM2xPzcVqyrcAyWO0eMw1L84Yb7Mpa8JMCaPLDH64p%2FVGarVswm0aaqJp3LiYfiG4KLLH6p4KNzdLlyqGI%2FhErDfY8KGg86zVFdO3nNt7gNGd8S0KIvnKSN7A2Fkvz%2BaRtOB2YwT3n86Z6KmV704b1TUBqXs4w1EinS%2BnpaA1wazlvtBjLChOHzxlhFjvAqVgW7UuqhVreGrXt8ooaRDp0hkjKDFsqx%2Blv5LnBigQe8G1WwrdoJy7biPIjBtfH9cJiJdOL5K346n16qe0lYu%2Bll0kkg2hktYhn5rz1oWq63M%2FFWyhBieXstjRe6JZtSVZBJGSOeLb%2B7hI%2FVgVnE1lDzMvpJYpyhLQJv%2BZzGxTSreo9PrnUnK022alLw304sSWe9wB28KEKZ%2B333vOzoSpXnUiiBej05YgdYiAaJlq5cv4wOnVe7h%2FcfdK3mTndeN%2BIgQyCa0cPL2x8nB0hLdBdCo2mtzoZJN2Ufoaej5GlRPSZQ0y07Bks%2BIH3sCQNSnKKkXvJpDK6nsl46Q%2FBueGMbiMbS8HG8d8ZkODEAGAPt783JAIv%2BUaAg6LZ73gFEi%2BeZiDmdc76%2FcLOTx5iCX%2B5rzBSUoeSkhRH0xV1Sgznu9v7J%2BPFOlmswtdLISmUrm8%2F3vr7OzMJeVir0GOqUBQZ648HZj6E2PzVbU6AWw6QRNzr5Zo9LiIDS4wDrtHQ7i6F7xsCM9YKphaElbum3eGTZM5T%2FXswJ0qQpg30wALKlxEPFWJGw3ZTLIEH7pGirFBtmvDpU3C%2FmCPTsWCK1s3dKt%2BLN9JTFOtfkoieur3Jj8dZL9awEwGWHYLj9h6TC%2FtMuppAAEICHXMo3PnipjhbrMgaBHk078H%2FrWvf8kWqb3ch3V&X-Amz-Signature=d68af067e611e103ceb83db96d36f1bf7b95f25e1e7782481d5f8c3cbb5e64f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
