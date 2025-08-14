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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UMYE3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf76DEtptAZnXrWE8oYlXF7glo5d4q2ATUQVpyElIHLAIgRdtMm4jCmgoTM4JwoUlbV6rNAanbH5ZwIAPVIcynGOAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDZ70Mfg2MgRjTiFcCrcAwLfN85%2BPtCzWlynWSM0Hg0yXf0e52MsZxeC%2FwoyaPCSY3Oh%2Fx%2FGMPN6%2FfKTDkqw3m15GDeUgUYCSBgR05IvToBhrHgc%2F8M4zmTjPelF6IYTZSuNxe5PgOPMF%2BJw3ZLs0zgP6%2B5qNPA0CdT4O1QC4hfRRMvRvUFCuEcjJYUDsP7MZwBRg43UfmzQo3akWcE3gm64UazU7V2yf79sBnJdGQPvxLPW9A6wY5th%2B7iK6ecSIErBtot9Qn31CmnB2U6kvQkJO%2FiaAAOrOQWkpU4ptZrmXTw6EkaFuCLccg9vtCFh8cnOhgQnScis6ZB2qAmGBsI7jk1uDpdIPZxuPF48mObD%2FROf%2BLjZrlU10pXbGCin0RcVPwiHkCZlIz%2Fmwl%2FnzPyQjrdhO6TxDKCsuFA%2BBnC%2BPZV8W25ecEw6EKomn7shZS1D%2BbJdo931G5qg8VozpbJHhe46JF3tAYJ9kjA5d7Sm3ZHiS1xl2eOwhvPfMnG24XtzPjHOSTalHYcW7iM%2BDUaG0RFS3NgmrnIgL5b8G%2Fv4nV058OMZeHNRrkGV81UGRynERGWdoGwQZXlcwWSA7W3tjKbLkyFSHiObC%2B%2FckkfhzBGa2OxfFvcs11bpcf7CT3XKt6ZJEPcP2H5nMOD498QGOqUBevw34OTa1ZoBLRL8QCdqGdq%2FERkBhoMeK6sHLJCHS5ai3aox9ezc6OF%2BM%2BzOkxeB1T3qBEkCtSNaR85%2BXenw9jbQP8kqwwq%2B6SxAWMwKDGoipfwiG%2B7FxPuE4rqWS8g4H4Cgs5TixOkH6XTv3BzNUTLVQh%2B%2FxoNZRc8h6JXI67rcK%2Bdt4Vc5M8PjI6PCOQwDBktVLzaD7PLK3DzGq3gSbVowYpxu&X-Amz-Signature=e9335049afd914b4eab3bfb03cf3995987ea5b22f41cd03fdd78df438c567528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UMYE3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf76DEtptAZnXrWE8oYlXF7glo5d4q2ATUQVpyElIHLAIgRdtMm4jCmgoTM4JwoUlbV6rNAanbH5ZwIAPVIcynGOAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDZ70Mfg2MgRjTiFcCrcAwLfN85%2BPtCzWlynWSM0Hg0yXf0e52MsZxeC%2FwoyaPCSY3Oh%2Fx%2FGMPN6%2FfKTDkqw3m15GDeUgUYCSBgR05IvToBhrHgc%2F8M4zmTjPelF6IYTZSuNxe5PgOPMF%2BJw3ZLs0zgP6%2B5qNPA0CdT4O1QC4hfRRMvRvUFCuEcjJYUDsP7MZwBRg43UfmzQo3akWcE3gm64UazU7V2yf79sBnJdGQPvxLPW9A6wY5th%2B7iK6ecSIErBtot9Qn31CmnB2U6kvQkJO%2FiaAAOrOQWkpU4ptZrmXTw6EkaFuCLccg9vtCFh8cnOhgQnScis6ZB2qAmGBsI7jk1uDpdIPZxuPF48mObD%2FROf%2BLjZrlU10pXbGCin0RcVPwiHkCZlIz%2Fmwl%2FnzPyQjrdhO6TxDKCsuFA%2BBnC%2BPZV8W25ecEw6EKomn7shZS1D%2BbJdo931G5qg8VozpbJHhe46JF3tAYJ9kjA5d7Sm3ZHiS1xl2eOwhvPfMnG24XtzPjHOSTalHYcW7iM%2BDUaG0RFS3NgmrnIgL5b8G%2Fv4nV058OMZeHNRrkGV81UGRynERGWdoGwQZXlcwWSA7W3tjKbLkyFSHiObC%2B%2FckkfhzBGa2OxfFvcs11bpcf7CT3XKt6ZJEPcP2H5nMOD498QGOqUBevw34OTa1ZoBLRL8QCdqGdq%2FERkBhoMeK6sHLJCHS5ai3aox9ezc6OF%2BM%2BzOkxeB1T3qBEkCtSNaR85%2BXenw9jbQP8kqwwq%2B6SxAWMwKDGoipfwiG%2B7FxPuE4rqWS8g4H4Cgs5TixOkH6XTv3BzNUTLVQh%2B%2FxoNZRc8h6JXI67rcK%2Bdt4Vc5M8PjI6PCOQwDBktVLzaD7PLK3DzGq3gSbVowYpxu&X-Amz-Signature=5ed35130b2151b05e9d9d41d88e74fbac0897567747078d1e0138da6d0e65c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
