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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JQIFGC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62%2BMabnO9rwEnKxX8YipAHXRJdIjevbijqqkdLAjLuwIhAJs9xykHZTgZHruecoER1Caa2QDiFQ0pXl5zz5RvmFc%2FKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVjO0FCHxq7qVmUEq3APu5Wzf1YYe3wa2wr0ThnAtzr3sHiIJXDquAzaj969HiEa%2FjL2pfBHAFsgkVUOnl8Sm%2F7zcCMp63rdHvRZCVtykPNpZTUKRZ3Bjaben5KOxUeZDF1Ri9AGmc4CZUpI0wuC1ctGhtR6cztmlt8lv7mjNyxFW19s%2Bowv4EI6oZ8%2FZ7LEus4MExsn1DUc0598ZGJQ4cJWvzWvG2eM%2FqnPC2bl5IvzLsyeQ%2FcZPECnwBRAkc0uLJLK4IhNuNte%2BakokCPEoa9akImyKsSCU5FSrx0jUO6vEKrw%2BLLOy1YYx87gq5993FQDdsua7b10HufXVl9l%2BCjzY%2FjnDDb7evJyZqIGJH3D%2BIvrpED4PhZV5wOwoCTw51IeEnU1UiF4k2V1N%2B9biBIm2GX9nsmln9NDbnbQQqI94HsFwgUXvdIaJ4fTPMnN%2FGRS6hSClZ8ajjboDZjqAGNJDk5eKqi%2FEZdvY68GnjM7y%2Bhok%2BBer6sMDKAVwGX9lJ%2BQQAmuYef%2F%2B24RPsVKspTk1BunfjmIS8B7T1G9SaeI1xUaXwRSq1iixDhCzvHJjiEwpkL%2BjaT%2FC95cMp95ngB4Fx1BfnSX26wI78Ton20TfY73cyeL258asfl4NBimF8syyI0TR6KFk7TC2mO68BjqkAaZSGgbIe%2BV3PuN%2BM7TrWqUx4fS9GEWqyOzVSKKv%2F0yTYrw0jZ0Tz5j%2BJ2F%2BNQNdw0W1RBAAU4T5KbNqQXru%2F0QHI6sghXKWJ9puTn2VmlJ%2B1TZVGGOdOYDf4RcIV%2BTJI9xHE9Y%2BxF83JasOm38zCeFAH5mUWuzodUiE6MBTfXDGuRGWAiFQQqmml5uwjEufQE3E%2BY%2BpS9sQ%2BQ%2Bi3Xc933EzEQC6&X-Amz-Signature=34109c7f57b6e2734361853b99ef1169d66f224696ac77e7d69473c464d07b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JQIFGC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62%2BMabnO9rwEnKxX8YipAHXRJdIjevbijqqkdLAjLuwIhAJs9xykHZTgZHruecoER1Caa2QDiFQ0pXl5zz5RvmFc%2FKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVjO0FCHxq7qVmUEq3APu5Wzf1YYe3wa2wr0ThnAtzr3sHiIJXDquAzaj969HiEa%2FjL2pfBHAFsgkVUOnl8Sm%2F7zcCMp63rdHvRZCVtykPNpZTUKRZ3Bjaben5KOxUeZDF1Ri9AGmc4CZUpI0wuC1ctGhtR6cztmlt8lv7mjNyxFW19s%2Bowv4EI6oZ8%2FZ7LEus4MExsn1DUc0598ZGJQ4cJWvzWvG2eM%2FqnPC2bl5IvzLsyeQ%2FcZPECnwBRAkc0uLJLK4IhNuNte%2BakokCPEoa9akImyKsSCU5FSrx0jUO6vEKrw%2BLLOy1YYx87gq5993FQDdsua7b10HufXVl9l%2BCjzY%2FjnDDb7evJyZqIGJH3D%2BIvrpED4PhZV5wOwoCTw51IeEnU1UiF4k2V1N%2B9biBIm2GX9nsmln9NDbnbQQqI94HsFwgUXvdIaJ4fTPMnN%2FGRS6hSClZ8ajjboDZjqAGNJDk5eKqi%2FEZdvY68GnjM7y%2Bhok%2BBer6sMDKAVwGX9lJ%2BQQAmuYef%2F%2B24RPsVKspTk1BunfjmIS8B7T1G9SaeI1xUaXwRSq1iixDhCzvHJjiEwpkL%2BjaT%2FC95cMp95ngB4Fx1BfnSX26wI78Ton20TfY73cyeL258asfl4NBimF8syyI0TR6KFk7TC2mO68BjqkAaZSGgbIe%2BV3PuN%2BM7TrWqUx4fS9GEWqyOzVSKKv%2F0yTYrw0jZ0Tz5j%2BJ2F%2BNQNdw0W1RBAAU4T5KbNqQXru%2F0QHI6sghXKWJ9puTn2VmlJ%2B1TZVGGOdOYDf4RcIV%2BTJI9xHE9Y%2BxF83JasOm38zCeFAH5mUWuzodUiE6MBTfXDGuRGWAiFQQqmml5uwjEufQE3E%2BY%2BpS9sQ%2BQ%2Bi3Xc933EzEQC6&X-Amz-Signature=d5be0a43fe07c45b0df93cbcb69eadb6e5c31e154ce9c787c24759a71310237a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
