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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAAFC7F%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD13TOiu0JJVP3FLa%2FM%2FhX3ZOpk2gJj9s88K5STXLet4gIhAKbisqoz%2BDiZ7BgLLSTycE%2Fabxemv52AiVV8z8tsppDnKv8DCHgQABoMNjM3NDIzMTgzODA1IgwfoIUpvMGzsC%2BJBQ8q3AN9tGkSF9kk%2FKoQGi6LAHF6Gl8bDiCWba%2BUfNz2zM7IGW6siEaycGvqb9kDlDHbKHmUiP6I4%2Bb3nMMjRaaE97EVS6byhhwPAEz5KYjVW096bSMOBfF%2B%2F4lqfLdfBKHYoub%2FEBbAqGISQI%2BQ%2BvpqcvON1sJmyshwgCsTYNxJILB%2B0iironZQnVW9gX%2BqtnLUrTKVEkinSK3z09EaUOpj5M17Nsal85432n%2FJdd7Cokf4z3sSKzlAr%2FKqqO9lmpGudZCRLciak2E%2FpSSkRryRUTbXuBNLI65TylQtWBkVLsKp9ztYqhJ5rceG%2BT436pNe6DCU%2F6XzGIkf04Bwgxkg2xMwT%2BekJ4ta3q127vRBZsW7znkuBFQSmn2ErJK0PzUxbD%2FG6Mi1sbA07SZAMSMbonvv1iOptmrnR0TzuZTg9iGw369YOrJ2pwO8g45FmUaUbqR3UuCwPwtiQFzXtN1bI%2F%2FZ%2FqI0MH3Ou3rNrqKg9bcEx8hUI7d3%2BNAWdg8zoU4bFqCFQp95igy74tNcMTslO4%2F0Ezxe6o9LE5oondUnJ1n%2Bjb5rA2NIS4SShcS0IBJWgF8IHAi2r3livYcvvf8WMTi%2Fhw%2B5udgvmL2nGTK1Y4dIv7SgUCX9doBljv%2BrUjDDuK%2FDBjqkAcLoYhR73hNug68g4MqzM6ttYG4o8Yw4qKvunLOBeyEkPm1R3SG5VeY6eD9oNHsNFbizjnvAPPelTcPDRUqG7i0Xu7DRFTxdmHntp7D3rMUBuQ6Ly4HHY7g1LvRSpaRI25VBGrhRjdptviPYpoiEeUdVstGHCm8d%2FHtnPVe%2B5c8CJsvt9BkEWjKzFOxnyH4ys0qtOuwxVT8AVGprC9nfejkYXFqP&X-Amz-Signature=2dcf4eb60486c2fd7f8556b0406fe8cd0bec0cd645bdbd08271a10cade20e832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAAFC7F%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD13TOiu0JJVP3FLa%2FM%2FhX3ZOpk2gJj9s88K5STXLet4gIhAKbisqoz%2BDiZ7BgLLSTycE%2Fabxemv52AiVV8z8tsppDnKv8DCHgQABoMNjM3NDIzMTgzODA1IgwfoIUpvMGzsC%2BJBQ8q3AN9tGkSF9kk%2FKoQGi6LAHF6Gl8bDiCWba%2BUfNz2zM7IGW6siEaycGvqb9kDlDHbKHmUiP6I4%2Bb3nMMjRaaE97EVS6byhhwPAEz5KYjVW096bSMOBfF%2B%2F4lqfLdfBKHYoub%2FEBbAqGISQI%2BQ%2BvpqcvON1sJmyshwgCsTYNxJILB%2B0iironZQnVW9gX%2BqtnLUrTKVEkinSK3z09EaUOpj5M17Nsal85432n%2FJdd7Cokf4z3sSKzlAr%2FKqqO9lmpGudZCRLciak2E%2FpSSkRryRUTbXuBNLI65TylQtWBkVLsKp9ztYqhJ5rceG%2BT436pNe6DCU%2F6XzGIkf04Bwgxkg2xMwT%2BekJ4ta3q127vRBZsW7znkuBFQSmn2ErJK0PzUxbD%2FG6Mi1sbA07SZAMSMbonvv1iOptmrnR0TzuZTg9iGw369YOrJ2pwO8g45FmUaUbqR3UuCwPwtiQFzXtN1bI%2F%2FZ%2FqI0MH3Ou3rNrqKg9bcEx8hUI7d3%2BNAWdg8zoU4bFqCFQp95igy74tNcMTslO4%2F0Ezxe6o9LE5oondUnJ1n%2Bjb5rA2NIS4SShcS0IBJWgF8IHAi2r3livYcvvf8WMTi%2Fhw%2B5udgvmL2nGTK1Y4dIv7SgUCX9doBljv%2BrUjDDuK%2FDBjqkAcLoYhR73hNug68g4MqzM6ttYG4o8Yw4qKvunLOBeyEkPm1R3SG5VeY6eD9oNHsNFbizjnvAPPelTcPDRUqG7i0Xu7DRFTxdmHntp7D3rMUBuQ6Ly4HHY7g1LvRSpaRI25VBGrhRjdptviPYpoiEeUdVstGHCm8d%2FHtnPVe%2B5c8CJsvt9BkEWjKzFOxnyH4ys0qtOuwxVT8AVGprC9nfejkYXFqP&X-Amz-Signature=80f4ecba632a15b125231df9a90edd8d2872f8c9b69800f64853b9f6880c2ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
