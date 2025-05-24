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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D55QNLR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDDKFnUZ3yJ16yzG3OhSerP7jydj0cgfYrkIl8HcXGCSAIhAIDChMtN3LmqHxTwAM1YGIZn4SLJfFOfbh34jytx0%2BBAKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDhqn25kJ%2BSNybglAq3ANa1HhKgcOEHyEOt4g2g6MA3ArNtoGGoJUtr9xWqgEghaMaWRRz3i4IZO4DEzkWXNc8TtiK6viqHe05mMEx%2FhF%2FwYood1hZDiSaPfBEgFzNms6LTzP7XGzIiaY8%2FvWHjdSkuSndVarQjFRbBV8tdXMGFF8x9jZmK%2FR3c6xHtKutPVpKIGguI91o9WJ2ICSB0INFtFxu1hy8hQaJyujY7H%2B8MAz0ADazljgUn6ri6BRkVEZsbz5wrKMDTQJC1UO1hyCdeqO2wZlIadCbO10DecjedRYeL0oEXZyy9XMQeGf873EGSzzVH7nBz%2F6Kk7cNc0eBykfUD8Iy35PQVqmxATetQXudrEeFiDU9zyVoQqcI0QCHGwMpYuvRAQMBnEfI584YJ69Efi5etXg1QbQrhfCGrc5PV%2FO2%2BqZJ1ck4xn08SorYnaUFwcOH585rMCsAFuPdf9JPST5ZB5XNRSZHuczy5LiFmBr%2BWIpWHN7Ls9qGmrUZDcMpEIgFuaoOB8Jge0WEipjSaJUQTnNAfw9kQw6Zo5BqiH533MJ24NEQ4lbgMg6YB%2FoQbH2AnmUVsqAU8mPUgimCRk%2FMuhgQzuCk4BW67WzTy7RFSrnTwPfzw22dys3xS4x3qJqhg9P8ODD398TBBjqkAeRhgnob3K7UUkZitaFQE2foPFoMvvhOhJqYKTlA5HoJQt1nLPxRvlx6c5XZARUB7CPHGDYB8XUw2cPQLRbA7QG1K8Vy3yZ1KimVDk7b%2Bu9e%2BQApd8cAE1M1qoKtCQ9oop%2BujPtmIJChnqIga06MQYJ6TZfOUB%2BJhpSOXtrzqF%2B03qDYLl03IXCpO%2BvNxqKN7WTWsWjQqxzGg6kSROXsrgiM9m2r&X-Amz-Signature=1ca24954f9acbbd9b0e213bf380558678112b9be7e871bb8f42ff211147477bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D55QNLR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDDKFnUZ3yJ16yzG3OhSerP7jydj0cgfYrkIl8HcXGCSAIhAIDChMtN3LmqHxTwAM1YGIZn4SLJfFOfbh34jytx0%2BBAKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDhqn25kJ%2BSNybglAq3ANa1HhKgcOEHyEOt4g2g6MA3ArNtoGGoJUtr9xWqgEghaMaWRRz3i4IZO4DEzkWXNc8TtiK6viqHe05mMEx%2FhF%2FwYood1hZDiSaPfBEgFzNms6LTzP7XGzIiaY8%2FvWHjdSkuSndVarQjFRbBV8tdXMGFF8x9jZmK%2FR3c6xHtKutPVpKIGguI91o9WJ2ICSB0INFtFxu1hy8hQaJyujY7H%2B8MAz0ADazljgUn6ri6BRkVEZsbz5wrKMDTQJC1UO1hyCdeqO2wZlIadCbO10DecjedRYeL0oEXZyy9XMQeGf873EGSzzVH7nBz%2F6Kk7cNc0eBykfUD8Iy35PQVqmxATetQXudrEeFiDU9zyVoQqcI0QCHGwMpYuvRAQMBnEfI584YJ69Efi5etXg1QbQrhfCGrc5PV%2FO2%2BqZJ1ck4xn08SorYnaUFwcOH585rMCsAFuPdf9JPST5ZB5XNRSZHuczy5LiFmBr%2BWIpWHN7Ls9qGmrUZDcMpEIgFuaoOB8Jge0WEipjSaJUQTnNAfw9kQw6Zo5BqiH533MJ24NEQ4lbgMg6YB%2FoQbH2AnmUVsqAU8mPUgimCRk%2FMuhgQzuCk4BW67WzTy7RFSrnTwPfzw22dys3xS4x3qJqhg9P8ODD398TBBjqkAeRhgnob3K7UUkZitaFQE2foPFoMvvhOhJqYKTlA5HoJQt1nLPxRvlx6c5XZARUB7CPHGDYB8XUw2cPQLRbA7QG1K8Vy3yZ1KimVDk7b%2Bu9e%2BQApd8cAE1M1qoKtCQ9oop%2BujPtmIJChnqIga06MQYJ6TZfOUB%2BJhpSOXtrzqF%2B03qDYLl03IXCpO%2BvNxqKN7WTWsWjQqxzGg6kSROXsrgiM9m2r&X-Amz-Signature=6e5001a5238cef7b66b4f1c9221694012d877d03951d44631e5adc99522558dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
