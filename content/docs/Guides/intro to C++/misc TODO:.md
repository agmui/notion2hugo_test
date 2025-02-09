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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RYQXRE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1HKfCetPB0%2F9s8PCrKuGBhOcK73fPKIKz65NUhaixgIgb76yigreVAboR%2FixGsmZLdFkxGt5wx8aCmG%2FS82VmfAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVUorNHhGBKPzOetCrcA1U%2BVBeJ55HYhxBMKFGMglSkFsiY0j%2FYa%2B216oXoqYcEH4z8q2VqeJcYNroW%2FaFpFYMLZ1h79mpRl7pahua2WiHiaetIUvk5lbVnoczJuDKyIAlhbd%2F%2FsrU5QUs0%2BGmb%2FEffb1x29d91r8nRcBxUhWYurn68rZuMNG4MwDC6QTDL73fJ9X1q6D6ei9V6fQlbhd9FR3eIOQaMvhb3Mb3USj%2FodcNQNIQGGkv12IOB4wCrhxgj87uonURKbwTp1lnU1DiuZlKaBMCJkUVdWkMW5kFu9NQxLodO5BCnpwWJ%2BxLzbUEzaptg8GiUy53RTd2%2B6RGKKVIZberDpxPg12lmBlXvy7m%2FmbheGaG3XlXnM0KjJujvGOUOpmuuYHFEUJKdKem4Q77zRlkFuXdgEjKuG54Xx28MRNTqAaCJpmCv5LhNsOJvIPxCFDt0l9WrsOdNd1HKmXaqt5Z3eYTyQDrlOn5ZqfwIpJ8M5qVL9DUwb7PWd7D3lszR8DgueieFxQB2IGlzg1JT3sglX5MqW98Zi%2FrDaiTsbVbPXWIrs0ZA7HXok9JWoxKvbXPHTPMsLVLVPNQNc4iqeiTXcBohWNU%2FPxjJUbH5uAP4r7UuAlH8ql%2BGIMhi2kch%2FBrWmbzVMMq%2BoL0GOqUBfcCTXOdy9JyFRh%2FtVm9JCdaKKTPIXXvU%2FSnKjs3YLfol7vtPXaiBZJs6tXxnICXPw%2BpuwYgecsVWroS4gkdykmsyCaCNQBM0YyEwdzgD6xzRUrst49Q93Pjbeqz6DlsgNLySNvojivDxxr44oYeDtr1DWEmdWVgrSaHUk4jr88FKUy7%2FME73q4JTtQnit0WEQUTvQZNpdzhGaucrRzk8%2FfP5V5D%2B&X-Amz-Signature=a8524b4b3285581d82c772985c6e2af21ef554601ed41c202d9c04581356586f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RYQXRE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1HKfCetPB0%2F9s8PCrKuGBhOcK73fPKIKz65NUhaixgIgb76yigreVAboR%2FixGsmZLdFkxGt5wx8aCmG%2FS82VmfAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVUorNHhGBKPzOetCrcA1U%2BVBeJ55HYhxBMKFGMglSkFsiY0j%2FYa%2B216oXoqYcEH4z8q2VqeJcYNroW%2FaFpFYMLZ1h79mpRl7pahua2WiHiaetIUvk5lbVnoczJuDKyIAlhbd%2F%2FsrU5QUs0%2BGmb%2FEffb1x29d91r8nRcBxUhWYurn68rZuMNG4MwDC6QTDL73fJ9X1q6D6ei9V6fQlbhd9FR3eIOQaMvhb3Mb3USj%2FodcNQNIQGGkv12IOB4wCrhxgj87uonURKbwTp1lnU1DiuZlKaBMCJkUVdWkMW5kFu9NQxLodO5BCnpwWJ%2BxLzbUEzaptg8GiUy53RTd2%2B6RGKKVIZberDpxPg12lmBlXvy7m%2FmbheGaG3XlXnM0KjJujvGOUOpmuuYHFEUJKdKem4Q77zRlkFuXdgEjKuG54Xx28MRNTqAaCJpmCv5LhNsOJvIPxCFDt0l9WrsOdNd1HKmXaqt5Z3eYTyQDrlOn5ZqfwIpJ8M5qVL9DUwb7PWd7D3lszR8DgueieFxQB2IGlzg1JT3sglX5MqW98Zi%2FrDaiTsbVbPXWIrs0ZA7HXok9JWoxKvbXPHTPMsLVLVPNQNc4iqeiTXcBohWNU%2FPxjJUbH5uAP4r7UuAlH8ql%2BGIMhi2kch%2FBrWmbzVMMq%2BoL0GOqUBfcCTXOdy9JyFRh%2FtVm9JCdaKKTPIXXvU%2FSnKjs3YLfol7vtPXaiBZJs6tXxnICXPw%2BpuwYgecsVWroS4gkdykmsyCaCNQBM0YyEwdzgD6xzRUrst49Q93Pjbeqz6DlsgNLySNvojivDxxr44oYeDtr1DWEmdWVgrSaHUk4jr88FKUy7%2FME73q4JTtQnit0WEQUTvQZNpdzhGaucrRzk8%2FfP5V5D%2B&X-Amz-Signature=9f57829a25a5eab2d0b1c770f464d20914869d1460706db6dd3729e056c4f558&X-Amz-SignedHeaders=host&x-id=GetObject)

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
