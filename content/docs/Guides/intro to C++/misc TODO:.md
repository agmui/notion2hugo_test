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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJMSNL4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC4BZT4ufDj8lidhyjUr2jixWafi7qifNbF%2BeklQy7cHgIhAIdOyJNepzT5MtJ8dLXGf2v3w7ybqCZhJwBQXz4BnNY6KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFN%2Bs%2F5vXBEfyNMgwq3AMZTpQjI4qnGOikeObAdIRtmApGDMQXlsnRmNQhRMugNI%2FL8qymO0apdhTJHBxEd%2FF5mw%2F%2BJ8jOAvOOXG89xLc3nkq5GD41dmDDX2eIEUkVvL9joE9qCXBC41gMB9qLu8zb%2Bpi1zSF4CwFDykHsTO6uv7kgieZmtTPPh9fpXhniY8dcq1pyUqsLBFJNQ%2BKsXP%2FqQ5SOhGWRwePOhifXPO0boe9bYjyUS5j%2BY58fJW0E03q2HfD4N9wglQb803HVazFBy73PPlU%2FcDEYlgvJx0DdPoiFd8gKDkwgd6J0ZUN%2BOEfNbQTiuv9TNVnjO4dzL1mZaTUwqHsGhTllGFDsv9KZPFQpnctmw18DlZtkS%2FT5vl2q565Zy%2B4GwgBQmDAfj8ZXMBW5jY7g1bmT%2Fk8l69UuUR2bpxJ6YNtpMusttW8AkRL55rxiJAT3uvWLNE9la%2F3EwHAlQyRnAcZHWWMF7IAMoJcKsSfe0N5dG2y5BgZ8QDSKBqC7iSi2%2FiOEWcS8%2Bfc2pV0FLUZa8nLhs2sKkYirFWC7L986h9w7C2wXd4IDCsSq7zBZK4SitcLmI0r8CL4dIwIbsjcMfmP7X1NCfHwOwG5GG%2FR5fAAbC%2FapnQCSWQKdjAacEs788Y6rwjC42ovBBjqkAZ2YYBCnQXI6UXL5cWnA9uK%2Ffu1e%2FG3VpFcOiODv%2Fpw3ERcYa%2FT5c%2BR0i1W8LObHhLHUNDlZ5ROFE3LKJndlsNKjCcTIn1beaivenW9YFA8I4KrJVkcsEP%2FD66aHD67RC2M2eQi0H0VQghoFIPbuqSgfiDoa93AioI%2FRa%2FcEmTq0Cwb9eWmycXkJb6OoDIbwBGAzTC20aeL9GePDok1Ovh43j0S4&X-Amz-Signature=5f0860a098953d83ad329c4c77bac3abdbd795e389f715cfb63c9929ce7d834d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJMSNL4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC4BZT4ufDj8lidhyjUr2jixWafi7qifNbF%2BeklQy7cHgIhAIdOyJNepzT5MtJ8dLXGf2v3w7ybqCZhJwBQXz4BnNY6KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFN%2Bs%2F5vXBEfyNMgwq3AMZTpQjI4qnGOikeObAdIRtmApGDMQXlsnRmNQhRMugNI%2FL8qymO0apdhTJHBxEd%2FF5mw%2F%2BJ8jOAvOOXG89xLc3nkq5GD41dmDDX2eIEUkVvL9joE9qCXBC41gMB9qLu8zb%2Bpi1zSF4CwFDykHsTO6uv7kgieZmtTPPh9fpXhniY8dcq1pyUqsLBFJNQ%2BKsXP%2FqQ5SOhGWRwePOhifXPO0boe9bYjyUS5j%2BY58fJW0E03q2HfD4N9wglQb803HVazFBy73PPlU%2FcDEYlgvJx0DdPoiFd8gKDkwgd6J0ZUN%2BOEfNbQTiuv9TNVnjO4dzL1mZaTUwqHsGhTllGFDsv9KZPFQpnctmw18DlZtkS%2FT5vl2q565Zy%2B4GwgBQmDAfj8ZXMBW5jY7g1bmT%2Fk8l69UuUR2bpxJ6YNtpMusttW8AkRL55rxiJAT3uvWLNE9la%2F3EwHAlQyRnAcZHWWMF7IAMoJcKsSfe0N5dG2y5BgZ8QDSKBqC7iSi2%2FiOEWcS8%2Bfc2pV0FLUZa8nLhs2sKkYirFWC7L986h9w7C2wXd4IDCsSq7zBZK4SitcLmI0r8CL4dIwIbsjcMfmP7X1NCfHwOwG5GG%2FR5fAAbC%2FapnQCSWQKdjAacEs788Y6rwjC42ovBBjqkAZ2YYBCnQXI6UXL5cWnA9uK%2Ffu1e%2FG3VpFcOiODv%2Fpw3ERcYa%2FT5c%2BR0i1W8LObHhLHUNDlZ5ROFE3LKJndlsNKjCcTIn1beaivenW9YFA8I4KrJVkcsEP%2FD66aHD67RC2M2eQi0H0VQghoFIPbuqSgfiDoa93AioI%2FRa%2FcEmTq0Cwb9eWmycXkJb6OoDIbwBGAzTC20aeL9GePDok1Ovh43j0S4&X-Amz-Signature=8496825c5f53a7e73c9135dc5a5cbd34fbc60455bb5040e002847a7c8eae8aad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
