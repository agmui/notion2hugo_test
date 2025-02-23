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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6R5PTQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGE59QJlibAEWAlmKvbDG26Y%2FnqNTIFsXwm%2Bm18CwXQIhALPXt%2FOwRtI9IUHAguGWDDqx0bDh0daE%2FxymrEfkUmYwKv8DCB8QABoMNjM3NDIzMTgzODA1IgydR7PKEXuuMdHb%2Bk0q3APcYA07KoW2eggpQu%2FedL8rlXB7sXXsaTx11zQZJctS3Np%2BO4DGq%2BS37YIfXTti3VoI7Igh6bLOEA%2FVVUKs49KmXXYwIJayMe2%2FiE7bFMR1IBRcJxd5yjN2Dq5OYX%2B1q1KVse9cM16WNLoou9DsiQWiniwT4qCt9RKa8OYh4vKadg7GQ2DyEeN7klQAEi6wRfRqKvfsSuSNhWyC%2Bd2VrQeK5nyjXMS24xi2p6lAkC8dYiZFuswWq7KQPUFF9KCQPJtCrqfA5Z8OiYQjw767IM08d3G9asXpAfGF5Gjkv3V%2B5RWsqUs9GcfZqJYjF7ZWmMDV9LTf2CqR00UiLqubHRIRW2F8BwQ4p6XHl7Uz7tbdNcV3fNjGEodOeBxP7H2tFIgyiKv3m5f9AUswhrgP%2B0V7YS88z90PpL97XnVNOiNIH4Af2eavHs0Bh23zNyAtrnGd45GhnAoqfl2U3a3%2BJG4rmTnsGdVmbWwqsQRG7vvseCvVBS9dtoAQGUe0u3BtmnK4kaTlLOJA7qrk%2BGoLVx8rQZlsrmIYeGo9T6mzWJyT60Wi6tIHqXKZBs00YUpZrVxk%2FcYwvsSzu5w%2FTUO87kGZQIXxI%2FW%2FAbc%2FmFtALULR2zP1g%2BrCyOuvUnqKrTDwse69BjqkAYljK0CjAlhIG%2FOKJqkJ1J2AUrsT61KBHdgDEIkocWS1wKLU8R0OsxDrcsQoL4JuWKkdQ3I8fe5M852hGNDhG5paHrJdcN0hfJOOLdUcQ1gh4yFxTxDejMknBpTutTGOZKMEajQkiK%2BlQPdKZCbbmpGxkryFRJO0CAqjIGfUNCHwTBlNGrsnvTHpJPMdcZQGsDjiRtaR93nzAKEqrPBPqx4hYdpv&X-Amz-Signature=9e7d9204833cfe0f181de9d86d426a847c073011e1164b27befefac2f58d0f91&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6R5PTQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGE59QJlibAEWAlmKvbDG26Y%2FnqNTIFsXwm%2Bm18CwXQIhALPXt%2FOwRtI9IUHAguGWDDqx0bDh0daE%2FxymrEfkUmYwKv8DCB8QABoMNjM3NDIzMTgzODA1IgydR7PKEXuuMdHb%2Bk0q3APcYA07KoW2eggpQu%2FedL8rlXB7sXXsaTx11zQZJctS3Np%2BO4DGq%2BS37YIfXTti3VoI7Igh6bLOEA%2FVVUKs49KmXXYwIJayMe2%2FiE7bFMR1IBRcJxd5yjN2Dq5OYX%2B1q1KVse9cM16WNLoou9DsiQWiniwT4qCt9RKa8OYh4vKadg7GQ2DyEeN7klQAEi6wRfRqKvfsSuSNhWyC%2Bd2VrQeK5nyjXMS24xi2p6lAkC8dYiZFuswWq7KQPUFF9KCQPJtCrqfA5Z8OiYQjw767IM08d3G9asXpAfGF5Gjkv3V%2B5RWsqUs9GcfZqJYjF7ZWmMDV9LTf2CqR00UiLqubHRIRW2F8BwQ4p6XHl7Uz7tbdNcV3fNjGEodOeBxP7H2tFIgyiKv3m5f9AUswhrgP%2B0V7YS88z90PpL97XnVNOiNIH4Af2eavHs0Bh23zNyAtrnGd45GhnAoqfl2U3a3%2BJG4rmTnsGdVmbWwqsQRG7vvseCvVBS9dtoAQGUe0u3BtmnK4kaTlLOJA7qrk%2BGoLVx8rQZlsrmIYeGo9T6mzWJyT60Wi6tIHqXKZBs00YUpZrVxk%2FcYwvsSzu5w%2FTUO87kGZQIXxI%2FW%2FAbc%2FmFtALULR2zP1g%2BrCyOuvUnqKrTDwse69BjqkAYljK0CjAlhIG%2FOKJqkJ1J2AUrsT61KBHdgDEIkocWS1wKLU8R0OsxDrcsQoL4JuWKkdQ3I8fe5M852hGNDhG5paHrJdcN0hfJOOLdUcQ1gh4yFxTxDejMknBpTutTGOZKMEajQkiK%2BlQPdKZCbbmpGxkryFRJO0CAqjIGfUNCHwTBlNGrsnvTHpJPMdcZQGsDjiRtaR93nzAKEqrPBPqx4hYdpv&X-Amz-Signature=e232e3fd5eb561b4b786f27b52b34c0b0024a157098db8011b919836910de8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
