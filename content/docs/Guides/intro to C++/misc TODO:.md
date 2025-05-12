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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOCQ4UG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDLosbXHJ%2FKOjHL3tSdeBfjEvUQGZdR48j0tqQDXDlGZwIgQ9Ogakl5QbK0Cxm0%2BE940q0%2BBSWHsEc%2FL2oMFHOclq4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfu%2BRbLXHQq6OJuiyrcAyArXgzmdIkWy0bvIdftznFPwNNPjyWriLecrqdTNtIESfnf0uWChiOl56rTPpL0abVatfxGPPUJaGwzPUlPkVqXJWZvF3Q1fjpi8aKTlQm%2BB0sJuz8E305ikoLTj%2Fc9pSPDzl5xTEDs6cPUMsggFbyCyz1ChpqIVRxDfpcz5A4yvQHblwdTn7bWbT%2FxV0Id5hKudoANugWIlzLwcJRVS5TOOmnHxcsY6ViVZY8IW%2BvptklgdwKjDAuWqcczpSrbiwp61JaChGWUK6HTYN5aDuuZgTE7QCFnYDoOqvTJApOJcwi0D3s%2FvVZd52rE7Qok2D77neg3pTOe7GiBGOuET4i04cIcoafWDukey%2BIpApw5MBdpe4UmxVoPZBHkneFR%2BG80NubbkCajYy0SU%2FFw6gqrkjRCzliBMz6YS%2BSuJO7AL77BXPcHbA3W1SK%2BluSy2uv5y17gMJ9deUZ39revQSCMbZyo50QONc08haMAZBLD%2FM%2F6dBs1uVTS6caT26MyuFl4FqC9alh7Us4mcP%2FojBVZ3Z%2BczDKRTrhBUAQwOqQOFcSdet3DrMWEAOwW8ZnpnrhX8Cb%2B%2BxmEKmnC3SIKBF%2B0xnIbXEFXit63gbs7fdRWFtJbPjIGRdQptW15MO73icEGOqUBX74cGfGnu4PdSm3ubpGMExXTFqXUaedXn5xG6delWDF1fcZLjloqNjzK6ckftRzvAuNBuJOWXc7FcLSzYdQx79zX8ekogGCXZwfXxPUN6OjQobDY%2FM9SG8IOz5FKDgEh7EOQTI25steTKl58sQFKMLKNkwjlSsfLy5NzRpaYMhhG25QcriiHdF9A5m5FOSNcuj%2FlmjX42bTpCk1yRo3CHRA%2FXcKW&X-Amz-Signature=92e3045f9969fc6e4d45a4ae51d1ee46fefdfe15c3df15f293bf00a65afb12c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOCQ4UG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDLosbXHJ%2FKOjHL3tSdeBfjEvUQGZdR48j0tqQDXDlGZwIgQ9Ogakl5QbK0Cxm0%2BE940q0%2BBSWHsEc%2FL2oMFHOclq4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfu%2BRbLXHQq6OJuiyrcAyArXgzmdIkWy0bvIdftznFPwNNPjyWriLecrqdTNtIESfnf0uWChiOl56rTPpL0abVatfxGPPUJaGwzPUlPkVqXJWZvF3Q1fjpi8aKTlQm%2BB0sJuz8E305ikoLTj%2Fc9pSPDzl5xTEDs6cPUMsggFbyCyz1ChpqIVRxDfpcz5A4yvQHblwdTn7bWbT%2FxV0Id5hKudoANugWIlzLwcJRVS5TOOmnHxcsY6ViVZY8IW%2BvptklgdwKjDAuWqcczpSrbiwp61JaChGWUK6HTYN5aDuuZgTE7QCFnYDoOqvTJApOJcwi0D3s%2FvVZd52rE7Qok2D77neg3pTOe7GiBGOuET4i04cIcoafWDukey%2BIpApw5MBdpe4UmxVoPZBHkneFR%2BG80NubbkCajYy0SU%2FFw6gqrkjRCzliBMz6YS%2BSuJO7AL77BXPcHbA3W1SK%2BluSy2uv5y17gMJ9deUZ39revQSCMbZyo50QONc08haMAZBLD%2FM%2F6dBs1uVTS6caT26MyuFl4FqC9alh7Us4mcP%2FojBVZ3Z%2BczDKRTrhBUAQwOqQOFcSdet3DrMWEAOwW8ZnpnrhX8Cb%2B%2BxmEKmnC3SIKBF%2B0xnIbXEFXit63gbs7fdRWFtJbPjIGRdQptW15MO73icEGOqUBX74cGfGnu4PdSm3ubpGMExXTFqXUaedXn5xG6delWDF1fcZLjloqNjzK6ckftRzvAuNBuJOWXc7FcLSzYdQx79zX8ekogGCXZwfXxPUN6OjQobDY%2FM9SG8IOz5FKDgEh7EOQTI25steTKl58sQFKMLKNkwjlSsfLy5NzRpaYMhhG25QcriiHdF9A5m5FOSNcuj%2FlmjX42bTpCk1yRo3CHRA%2FXcKW&X-Amz-Signature=08993776ba5eaf2e9d7c72d82f6e63d8b83f7c3a7e07de9931df29987105b980&X-Amz-SignedHeaders=host&x-id=GetObject)

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
