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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LXOLNR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDVWoS%2BgNSSwW4PO59xwZlirTxaB%2BBz56pYyLtG22m67QIhAJB6DcqXPzGwe2eF23ZJh6W%2Fv8zIGzrn%2BhB9D1nVzIGTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5RE9s6KrTfNz7Srwq3AOV66RyfVqjkVqGBCWya4WtZkOL7cwne95h7bZkxX8DoB%2BByZ2Govfqgmy6GvF%2B40tLyPDL0OPigp3Ee1NaLempPmBslim0u%2FAEOFGKzZ9njoWHmT6tWd5tMjUyJ6RfuXbJ%2Bqm92rDlRlaQTukrnz84ey8%2BDJkBfh7ocIt0Tqw8jj3r%2BTPQPDh6ajMvc%2Bo90qoD%2Be5xrAOwVmWGecaC%2ByE26WwsM99M3qatf8ID0SYL5bdQM%2FAtHWTHWdT6i3TSBIMEvOggF3DFgs8ezSeArOJ22WplBo5uFjNZFfDVACJ60vZH8VWhowJFWOpd5fHDnnmrL7JozGZ2s%2Bu%2Fu%2B9PMYlUWEtmZpuRdaaijVvdkG2eBrTCRJJE4I0PYemXd%2Fl4duUK68hA2BkjV%2BrHka0E63jtr%2Bd098aKEYMvWHoxxUooA3Uc8jTVCvkN7DXNX2qQ5Nj2Ku4DPbXhk8N4Af4ynnbZPQ%2BvVJepbFw5wnLOv0wNLxmLpkUvURSmCHl7dcu4Rhzlc2%2BYBJRA5tAYu3jFpgwBedKJnjDhG9sDmNvumIpF6ULttr5cazlEMg3XInNn2FE3dWEs%2Bo3u65eiM5vjlQyQV3f8haoHa4FL6GW8F3WRyzt5IYsNo9%2Boce7PlTDSu6e%2FBjqkAbC0MAYJuGBwpXMfSTJfhdRKLQs%2B6c3kvaRMkh8ZThP2DVcu0dhvw9k6JKNO9o7JEl75MkXSkvP9sW6lz1S9Fc4QcHjmLSf1Zr2U%2Fgaq9ZMPOWQ8En9kqJhQII4VVq5pdoFQyyVfelaqh2dVBNrERZPG7h8buPz4Apa8NU5m20%2BsjgXkbjS8LZJ53U71qUim7uP0A5GbNaOPihkuoSqeVQufxhzM&X-Amz-Signature=2c20967f82d7d546ec78728d7b765829e3b9c79c45e13417ee84859ba94d787a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LXOLNR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDVWoS%2BgNSSwW4PO59xwZlirTxaB%2BBz56pYyLtG22m67QIhAJB6DcqXPzGwe2eF23ZJh6W%2Fv8zIGzrn%2BhB9D1nVzIGTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5RE9s6KrTfNz7Srwq3AOV66RyfVqjkVqGBCWya4WtZkOL7cwne95h7bZkxX8DoB%2BByZ2Govfqgmy6GvF%2B40tLyPDL0OPigp3Ee1NaLempPmBslim0u%2FAEOFGKzZ9njoWHmT6tWd5tMjUyJ6RfuXbJ%2Bqm92rDlRlaQTukrnz84ey8%2BDJkBfh7ocIt0Tqw8jj3r%2BTPQPDh6ajMvc%2Bo90qoD%2Be5xrAOwVmWGecaC%2ByE26WwsM99M3qatf8ID0SYL5bdQM%2FAtHWTHWdT6i3TSBIMEvOggF3DFgs8ezSeArOJ22WplBo5uFjNZFfDVACJ60vZH8VWhowJFWOpd5fHDnnmrL7JozGZ2s%2Bu%2Fu%2B9PMYlUWEtmZpuRdaaijVvdkG2eBrTCRJJE4I0PYemXd%2Fl4duUK68hA2BkjV%2BrHka0E63jtr%2Bd098aKEYMvWHoxxUooA3Uc8jTVCvkN7DXNX2qQ5Nj2Ku4DPbXhk8N4Af4ynnbZPQ%2BvVJepbFw5wnLOv0wNLxmLpkUvURSmCHl7dcu4Rhzlc2%2BYBJRA5tAYu3jFpgwBedKJnjDhG9sDmNvumIpF6ULttr5cazlEMg3XInNn2FE3dWEs%2Bo3u65eiM5vjlQyQV3f8haoHa4FL6GW8F3WRyzt5IYsNo9%2Boce7PlTDSu6e%2FBjqkAbC0MAYJuGBwpXMfSTJfhdRKLQs%2B6c3kvaRMkh8ZThP2DVcu0dhvw9k6JKNO9o7JEl75MkXSkvP9sW6lz1S9Fc4QcHjmLSf1Zr2U%2Fgaq9ZMPOWQ8En9kqJhQII4VVq5pdoFQyyVfelaqh2dVBNrERZPG7h8buPz4Apa8NU5m20%2BsjgXkbjS8LZJ53U71qUim7uP0A5GbNaOPihkuoSqeVQufxhzM&X-Amz-Signature=8f8925c4cef429b7dfa8c50c16038a0481b0d7c87b34efa237cf80f3c99c288b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
