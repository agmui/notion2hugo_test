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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDNSAGN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaXgZhXvJpufqPgUtRILYZ2%2FzYTacGS%2FPsjddPBZFZbAiArp%2BCwIS9xsQkIMYuMJQWPPVEDuLTzxpKQy9HMTaQaiir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMoMPMqR3h6dY1DLk7KtwDoZxgr7Djdump9eN4McdpWWG7yo0%2BJPvDoKOxIACBEPyMdw%2BPXUQcId5muvIzw43R16%2Bx%2Fu8XT874FPRBTKPHNq5zROzj5vlWWxosW%2FyfN4PuOrX1ZNPSMQUgMGQZU3oCQIaw8rd5Z5txDPlB4cz3PmIfrIQnTqhojp%2BaFP13MWcaZ0B0Ddb0yuZvamzTn0QvqLGP9fn1o3j7WHzHZPWxal9indOpPNyM%2FBV13aBQ%2BnsCBtiQnzmXY5utpIrGcbptCuu1xSAuYpVlGTD%2F5mR3RdwkVDxZXQzpRu2Fxo9r2qw3sHC9wkDuknch%2FobI22MXfxuQcDt5K1GIqegTkjRzVQnqRYeX33vqJUOuF0sezEd9urCNuhN6yKpNnkAnQf7UD1CPnfK3Ct0YWReNbu2k3Y0Z5HgSZOYns6O8Rp5gamWsdqYUbAtA4fw9Mt1Z38JEszFaxNAmz1wKOf2GhbBmHCqtBOXrBQE5Vriew%2FAhSBz5TI8H0eu7Cj%2F0VtLZZKm8DkWReDL6iKQLqY%2BGXUs%2Fgcme8M89PoT6PSFYQWplL3O1VzaxdIpdkVHlkLs8BpPKfcLtV%2Bzi7sLZ6JT9mwSaiS0FNUMwutlH7OwTiKunVoqeTWvEAIhaPjKHclAw8ePiwAY6pgEMIz2Kkc7gRYeyiZc0nge7S0BzXLPsctYdFnxqqX5x%2FyLd5QNBtSFtcfhlnhvKTTjmnJHoNjcYECRCy8ekOKEa%2BBIIpfmfKBxvLzYO6%2BdnO22bEDv5tuP5e%2Br%2FdZ9pMP3GqXcsJl%2F9KwvQd%2By5GFSTmbPnMRKpsn1yamdVtxbG0HzeGXFJQYlxdMtTlfFa45jyIFumeV6ONL7YCNJZ4j6zdncHYOP%2B&X-Amz-Signature=f85d7134b360c114820dfb1f8ac726ffc621460727f80361233d20ebab4254c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDNSAGN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaXgZhXvJpufqPgUtRILYZ2%2FzYTacGS%2FPsjddPBZFZbAiArp%2BCwIS9xsQkIMYuMJQWPPVEDuLTzxpKQy9HMTaQaiir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMoMPMqR3h6dY1DLk7KtwDoZxgr7Djdump9eN4McdpWWG7yo0%2BJPvDoKOxIACBEPyMdw%2BPXUQcId5muvIzw43R16%2Bx%2Fu8XT874FPRBTKPHNq5zROzj5vlWWxosW%2FyfN4PuOrX1ZNPSMQUgMGQZU3oCQIaw8rd5Z5txDPlB4cz3PmIfrIQnTqhojp%2BaFP13MWcaZ0B0Ddb0yuZvamzTn0QvqLGP9fn1o3j7WHzHZPWxal9indOpPNyM%2FBV13aBQ%2BnsCBtiQnzmXY5utpIrGcbptCuu1xSAuYpVlGTD%2F5mR3RdwkVDxZXQzpRu2Fxo9r2qw3sHC9wkDuknch%2FobI22MXfxuQcDt5K1GIqegTkjRzVQnqRYeX33vqJUOuF0sezEd9urCNuhN6yKpNnkAnQf7UD1CPnfK3Ct0YWReNbu2k3Y0Z5HgSZOYns6O8Rp5gamWsdqYUbAtA4fw9Mt1Z38JEszFaxNAmz1wKOf2GhbBmHCqtBOXrBQE5Vriew%2FAhSBz5TI8H0eu7Cj%2F0VtLZZKm8DkWReDL6iKQLqY%2BGXUs%2Fgcme8M89PoT6PSFYQWplL3O1VzaxdIpdkVHlkLs8BpPKfcLtV%2Bzi7sLZ6JT9mwSaiS0FNUMwutlH7OwTiKunVoqeTWvEAIhaPjKHclAw8ePiwAY6pgEMIz2Kkc7gRYeyiZc0nge7S0BzXLPsctYdFnxqqX5x%2FyLd5QNBtSFtcfhlnhvKTTjmnJHoNjcYECRCy8ekOKEa%2BBIIpfmfKBxvLzYO6%2BdnO22bEDv5tuP5e%2Br%2FdZ9pMP3GqXcsJl%2F9KwvQd%2By5GFSTmbPnMRKpsn1yamdVtxbG0HzeGXFJQYlxdMtTlfFa45jyIFumeV6ONL7YCNJZ4j6zdncHYOP%2B&X-Amz-Signature=f1be876274e3a2f513bf4f26b01abe5bb4e3ccdf473923dab62b138e6cccdc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
