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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7DZ3YQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDgrNq73ptKlOtlar26wXLqp3JeQAgiw6a0Vdbq5QVcHgIhAMpvWtgPhaNrNjUfI7LocGmxTlN%2BDNEvWxuSbuOb0x5AKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04y3IDCk0tzE%2BDUcq3AOLPnqM%2FqM5SeWVyXEC7L3FSOg194imyRat2xBFY5nwi7K5Ooji3zv1kODS51PO5GNt%2BaNt%2F9RvBAqnRF0gdn%2B%2FCxPKWypUDaGkb1gAPPJFkrVKSWkH9Uq7MSSqpBt13Nl%2B5eCe9ok4Mei3dcsZVRtbKJPj8%2BGNz5T1iNGyNftYyfnnJGQ%2BNL0WUlRxehYVIfFmTCqNxHEUMHzArzv%2BGUP%2FbRhWNzmUSUCyhrTN3SkExxojIay%2BjIZKrLjMjZ92I8DgdUddIWOqM4eXxgE6nENwW8dIpes4x9qkGscVuJshce8SUS8ZAOXuW1DZBtbmDlANia5I8GKI%2FvyghDZGk0FkB%2B%2FaJXBsrcLkCU1QMB%2Fk5yPWDJjhI8zZ0yW5Fw69FVMI3wiA6v%2FubjRyx3QLv3Ex%2Buaio%2BFmIw9hPPZFT85oo%2B9NLMpj6Y49oroZThoSSjVe8TVP8e1i0lXT6RVO80ydM83XPXMyNWkO6nC4dokxdsb2hqWNFeIsoG4FmdwKMVIdaNgm2mU%2FxQRAesER4Mtmi81Gat0zP7duvrHFxmCZUcgpwKDV0lvCOuUtRPbA3q338QIQ5%2FAH1CWxyBCBPQyjw9sSlihlJRk0VYaou1hpqDZ36Mu4Qdhblg%2F0fTCHks%2FABjqkAUXJxhtDdyM42HCBtPdA8VrcSwWJA4PCHZRloWRk5OuZhKW%2F%2Bk1G6%2BiVb52yasdKuH%2FyOUA8ms1dCZtzpJTUXd2KoXxozdxwHi02vuh1TQZ4%2BFjvy0VIIokrPktVUQ1YY4h5LTzselVX5%2FSeGVI87ShYI44h2%2FyZZWDDigLPUSTvRnvA%2BMmemrB1EH2qde4XWGLuMqOHRin3%2FVvxHfAEBFhOW6V1&X-Amz-Signature=b032dbe68a145ecb45342cc0a962767d409065a49f0562667e0b760c1ff8944a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7DZ3YQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDgrNq73ptKlOtlar26wXLqp3JeQAgiw6a0Vdbq5QVcHgIhAMpvWtgPhaNrNjUfI7LocGmxTlN%2BDNEvWxuSbuOb0x5AKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04y3IDCk0tzE%2BDUcq3AOLPnqM%2FqM5SeWVyXEC7L3FSOg194imyRat2xBFY5nwi7K5Ooji3zv1kODS51PO5GNt%2BaNt%2F9RvBAqnRF0gdn%2B%2FCxPKWypUDaGkb1gAPPJFkrVKSWkH9Uq7MSSqpBt13Nl%2B5eCe9ok4Mei3dcsZVRtbKJPj8%2BGNz5T1iNGyNftYyfnnJGQ%2BNL0WUlRxehYVIfFmTCqNxHEUMHzArzv%2BGUP%2FbRhWNzmUSUCyhrTN3SkExxojIay%2BjIZKrLjMjZ92I8DgdUddIWOqM4eXxgE6nENwW8dIpes4x9qkGscVuJshce8SUS8ZAOXuW1DZBtbmDlANia5I8GKI%2FvyghDZGk0FkB%2B%2FaJXBsrcLkCU1QMB%2Fk5yPWDJjhI8zZ0yW5Fw69FVMI3wiA6v%2FubjRyx3QLv3Ex%2Buaio%2BFmIw9hPPZFT85oo%2B9NLMpj6Y49oroZThoSSjVe8TVP8e1i0lXT6RVO80ydM83XPXMyNWkO6nC4dokxdsb2hqWNFeIsoG4FmdwKMVIdaNgm2mU%2FxQRAesER4Mtmi81Gat0zP7duvrHFxmCZUcgpwKDV0lvCOuUtRPbA3q338QIQ5%2FAH1CWxyBCBPQyjw9sSlihlJRk0VYaou1hpqDZ36Mu4Qdhblg%2F0fTCHks%2FABjqkAUXJxhtDdyM42HCBtPdA8VrcSwWJA4PCHZRloWRk5OuZhKW%2F%2Bk1G6%2BiVb52yasdKuH%2FyOUA8ms1dCZtzpJTUXd2KoXxozdxwHi02vuh1TQZ4%2BFjvy0VIIokrPktVUQ1YY4h5LTzselVX5%2FSeGVI87ShYI44h2%2FyZZWDDigLPUSTvRnvA%2BMmemrB1EH2qde4XWGLuMqOHRin3%2FVvxHfAEBFhOW6V1&X-Amz-Signature=98ad96f5c6eb462c94e210c48a2d9ae3c275780645e487c3d34b216e364d1479&X-Amz-SignedHeaders=host&x-id=GetObject)

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
