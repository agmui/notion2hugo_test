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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6HGVDQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHltKCNAwaDBzVdw22Z6LkdZb0bg9revvl9fsIHn6QWAiAEke%2BvA1zWQRobUNAO5YjyRFDGzwd1yaJJETG32GqlCCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBGkdKMYfy%2Br0XYgKtwDtIII%2FLZ%2FdS1CgQvAQY%2FYfKKPTrv8OUFVnr5HdK%2Fy9eWesyXQft6aYCz78zd9epBbLuUGNlvFGuEtY0gSCz1eMYqYMdQXP%2Bx4jeii9vs4oPY8m025uZUggCwmawz8cQ2kfSozUA4QU4HzXyZqCDBiQrfOcnNkIjnE%2FOSnxYXLH9oVGfQpm3vPASKsJq3fqh0L15AkpeDK96DfXBX5Q9Acu7nTxCqNauZ0D61XNsY%2FgYI3g1gpRkoAhWRa%2Bx%2FCOh6KwYlux35BrZqeKpg1hoG%2FbOHZdvTOA3KmOzwmQMqMzHuMQnppb4bnNFKyjeeMZxVGGvrznuC3pdDAwMJ1YutPreKKdq0%2FNVu0vs2ndyQqhy2k%2BDSWg%2FXF%2BiQOiYIVHK49ot7KBxXfFRnx%2F9qhKn%2Fnxxze07Feq95U0S9fn0OUpsnRzEFiTYGh6KRh2TS%2BT3k1r8sQhMXaBeOWKTUDWhInBIOgp7m88KcgFQ2gEUjSLMmY0HNZr6rtdFOAEv3heiB6IGON%2BHv%2BKVTaELTiDcJ2Sr9LwW8NhuxjLxup2Wml8U00zlU1UhtM%2BK10dnP7UQftgas9oPDzN4xRybl8DEGo07EON2%2F9Ps5SJ9ENrL9kEVFY3cO8WdettLNkNZswpZrwvAY6pgEOvU3QB27uaG3ePh%2BryBkashOmqV5QqQuu3KhgUHjrtfrv7gYvUIGTwDMpBosOhtjvlIsSDqsjUvmS%2B4mmD70It%2FV928FCFw%2BgvtiK7iZdI81Lg44p13ABx%2BcDxl0NKZ3j%2BBarIVUHq7kA32rIfIFFTPceU7q4Ilolh3J3Q43WIL19nfcsJfX%2BsjxdTwPfB%2FZPi1cE5iYLWu1KTLf85HSi%2B7JJyRLR&X-Amz-Signature=c0654cbdbf060947cc86b083ce336dab3f8a4d2210d6c09d5bbbaed26afee2de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6HGVDQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHltKCNAwaDBzVdw22Z6LkdZb0bg9revvl9fsIHn6QWAiAEke%2BvA1zWQRobUNAO5YjyRFDGzwd1yaJJETG32GqlCCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBGkdKMYfy%2Br0XYgKtwDtIII%2FLZ%2FdS1CgQvAQY%2FYfKKPTrv8OUFVnr5HdK%2Fy9eWesyXQft6aYCz78zd9epBbLuUGNlvFGuEtY0gSCz1eMYqYMdQXP%2Bx4jeii9vs4oPY8m025uZUggCwmawz8cQ2kfSozUA4QU4HzXyZqCDBiQrfOcnNkIjnE%2FOSnxYXLH9oVGfQpm3vPASKsJq3fqh0L15AkpeDK96DfXBX5Q9Acu7nTxCqNauZ0D61XNsY%2FgYI3g1gpRkoAhWRa%2Bx%2FCOh6KwYlux35BrZqeKpg1hoG%2FbOHZdvTOA3KmOzwmQMqMzHuMQnppb4bnNFKyjeeMZxVGGvrznuC3pdDAwMJ1YutPreKKdq0%2FNVu0vs2ndyQqhy2k%2BDSWg%2FXF%2BiQOiYIVHK49ot7KBxXfFRnx%2F9qhKn%2Fnxxze07Feq95U0S9fn0OUpsnRzEFiTYGh6KRh2TS%2BT3k1r8sQhMXaBeOWKTUDWhInBIOgp7m88KcgFQ2gEUjSLMmY0HNZr6rtdFOAEv3heiB6IGON%2BHv%2BKVTaELTiDcJ2Sr9LwW8NhuxjLxup2Wml8U00zlU1UhtM%2BK10dnP7UQftgas9oPDzN4xRybl8DEGo07EON2%2F9Ps5SJ9ENrL9kEVFY3cO8WdettLNkNZswpZrwvAY6pgEOvU3QB27uaG3ePh%2BryBkashOmqV5QqQuu3KhgUHjrtfrv7gYvUIGTwDMpBosOhtjvlIsSDqsjUvmS%2B4mmD70It%2FV928FCFw%2BgvtiK7iZdI81Lg44p13ABx%2BcDxl0NKZ3j%2BBarIVUHq7kA32rIfIFFTPceU7q4Ilolh3J3Q43WIL19nfcsJfX%2BsjxdTwPfB%2FZPi1cE5iYLWu1KTLf85HSi%2B7JJyRLR&X-Amz-Signature=0c792cbc206e6be7e37de70c41d7f0042c1acaee63033417be6589081b682f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
