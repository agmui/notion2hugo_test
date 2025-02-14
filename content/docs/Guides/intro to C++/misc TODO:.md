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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBRDBK2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwtGK%2BfbP5dlaB6GCHp0zd8grFF0fZ%2BaYrHqeO3qgewAIgQ3PanrlmcKJoy80ytCZ0iUJlSCDSNjb5V7N%2BbZ3MddIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJ8ObSZcLwQLG7qCRircAz1q0G7iRNSO3ytZX9RCVo58avfLxHa%2FeBTcIq%2FBHs8cUUQ9h6%2BFWktw6aTzNFkWygRl5HrPhY9IctT45oVrC%2FvirzIhnY1NAjYvZhW3XdCVMf%2FTS0KIGVSAd0Qfji4IJQZj0yUtBdLQwypL3%2BlQdB0FCC90pl2tIzJ7qnL%2FOzx4EmXtgtwrF6yy%2BkUlev0burs6mwoMwi5pY69xDOwla%2FWEZyBO3EwnDgIHaZh1lFl7Ghvod6RO4VEuC3FNw7mJo5Y0fOJoIb%2FlqUec7cjggzFgY3z6aH9EZifiwJR2G%2FqtQ5gA5eerAK7aWt%2F2Fj%2Fw5WSAmN%2FmHzlUqB3L5rXIfTELCVJJYogEKuEASIW42m3El0DycipLyyZozhmMXotrc1TL4YBKPNyIlDloVZvfdRAIpiux%2Bc2QfjSD%2BXhTHN8XtVsg5e88jPcITakSKYyGTVqyZUnTV3Nxa9w7zvvZznz%2F8v11GiJYxwuB9AsBTmLEnk85CAXBYiIy4kjYSOum3NhFCxj7QKKlmRp2XYu1CAwn8a4JYeQwYfC09ETdBtdNQnDXg24dLxAHZ43KG1isBCCcYTBIdf37sCkMfzMfppJwEghHuimt5oM0FQKj%2FDpcg0puzoDMPJCZQfINMJ6Eur0GOqUBeAnVq1X%2BQ0YLXhgdM435ZInX3gq0tUAAHpoDZ3oDwyR2Uq2%2BUKD2ImYygpzCQ051sDNvEaqRKyywtDOWT2G%2FZTEoKVaDbiqodGTTa6Qi0yLgyMB6Am%2BmZYFBST3abUIoebNqWBSu0lg363ZxyoJopUMpwmQsAHsIY7HvZb9uAK6voFnlUyTLmRbk%2FUBk7tjNjd%2B7af8QaheybxbqzoCgTyXpKSkd&X-Amz-Signature=1c05b974203a9e72090d273adf76a60afa9c13f3dfccbab9b6de84d2a1cda5af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBRDBK2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwtGK%2BfbP5dlaB6GCHp0zd8grFF0fZ%2BaYrHqeO3qgewAIgQ3PanrlmcKJoy80ytCZ0iUJlSCDSNjb5V7N%2BbZ3MddIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJ8ObSZcLwQLG7qCRircAz1q0G7iRNSO3ytZX9RCVo58avfLxHa%2FeBTcIq%2FBHs8cUUQ9h6%2BFWktw6aTzNFkWygRl5HrPhY9IctT45oVrC%2FvirzIhnY1NAjYvZhW3XdCVMf%2FTS0KIGVSAd0Qfji4IJQZj0yUtBdLQwypL3%2BlQdB0FCC90pl2tIzJ7qnL%2FOzx4EmXtgtwrF6yy%2BkUlev0burs6mwoMwi5pY69xDOwla%2FWEZyBO3EwnDgIHaZh1lFl7Ghvod6RO4VEuC3FNw7mJo5Y0fOJoIb%2FlqUec7cjggzFgY3z6aH9EZifiwJR2G%2FqtQ5gA5eerAK7aWt%2F2Fj%2Fw5WSAmN%2FmHzlUqB3L5rXIfTELCVJJYogEKuEASIW42m3El0DycipLyyZozhmMXotrc1TL4YBKPNyIlDloVZvfdRAIpiux%2Bc2QfjSD%2BXhTHN8XtVsg5e88jPcITakSKYyGTVqyZUnTV3Nxa9w7zvvZznz%2F8v11GiJYxwuB9AsBTmLEnk85CAXBYiIy4kjYSOum3NhFCxj7QKKlmRp2XYu1CAwn8a4JYeQwYfC09ETdBtdNQnDXg24dLxAHZ43KG1isBCCcYTBIdf37sCkMfzMfppJwEghHuimt5oM0FQKj%2FDpcg0puzoDMPJCZQfINMJ6Eur0GOqUBeAnVq1X%2BQ0YLXhgdM435ZInX3gq0tUAAHpoDZ3oDwyR2Uq2%2BUKD2ImYygpzCQ051sDNvEaqRKyywtDOWT2G%2FZTEoKVaDbiqodGTTa6Qi0yLgyMB6Am%2BmZYFBST3abUIoebNqWBSu0lg363ZxyoJopUMpwmQsAHsIY7HvZb9uAK6voFnlUyTLmRbk%2FUBk7tjNjd%2B7af8QaheybxbqzoCgTyXpKSkd&X-Amz-Signature=4b0b9199a362d02bc3bf445825385d23bc5296403984106d076726e4340098e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
