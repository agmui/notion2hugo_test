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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T52ARPL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BqB7VBXrebViOs2rCQU0sEBZmzl%2B4mRsVFWOv089qQQIhAIuyvmEKP5nA%2FnEe9NeG3apq6ffJ22yx7AGkZ%2BsM5KmKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOVFE07ynNEANq08cq3AMkgicOzz%2FZdMKyLw35HkuJ8WqZqNCE%2BAkuNimOkupsy4aqRkaexTiIh1szreOaaRAbkrO0m4dKYTvX1GVS9VKuWOrYTKPVRFEWhonkXyigdDVDdZTH4yeRZBKejJj25dcj96ZWLn46tMpFzYDRSI9Q0wc%2B9ttIGD1UhGYAPtRu3%2FD45ThIodA5dAB9KB2lDhvAHwi1u%2BFA7WSngVoRG58ZiPs%2BbPb77XUZZNxwybtxIEqzJeqwiQJetlFM%2Bpri22nq%2Bi3pdMPpG2plkyJfSnEmvyxmlnaKhtvBStIVslec97Y48yUfTqdEDp%2FxZJ88S%2FJNQ9BYdzWweJMLmfzZ1p2hhFj6FFCuKb%2BZ9Tsy9GvjwQKs62ae65CwsjTVwJ1dM0PHZYNqZ%2FgIHJGKxeUTzar5fifrxAvHtZ%2F1l%2FOGZAUXZQU%2FZOpTh6VQ93TVtJSUKFcCtxZRbCfSH%2F5TF7NyClycBYaknAh%2BT%2BId5FE6TRrBner3qLj1RrjVlkD0Omhj14ifI7d6L0geUEox%2F7MMQKuUZM49NcAQdtz3G0YmCj9uytsF6o%2FYD7ldV0EIrmEtoRRTUFyNnTrl4qmBEnpxnzbtpa4eZwqNHmCAZ7Sly2DwtECviNk34TvI6PCTzzD39IDDBjqkAeEIWPSoquV70d7LCvw9Dfs6%2BYcXv3SNGRsyojGrpHLkEX93npNnuQGWDK%2BbGmhHwY8AxILHcsh0tUcykGfegw5sBS0tKhyhl69v6uXXpWse9gvUM20fWyN8ADIxu9xlSRYjmac5Yf20ca6dW%2FjUkxxwWW3pLLxbVAnRhT%2FW2vJY935E7SxuMyeMKU8D5O%2B3K21Ew7y9aWkooBxGSzOQ%2FhzMqvz%2F&X-Amz-Signature=33bdf87a0637693406cb494daf4822d9765e2ec57c1d117d284e3a6e3b8d715e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T52ARPL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BqB7VBXrebViOs2rCQU0sEBZmzl%2B4mRsVFWOv089qQQIhAIuyvmEKP5nA%2FnEe9NeG3apq6ffJ22yx7AGkZ%2BsM5KmKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOVFE07ynNEANq08cq3AMkgicOzz%2FZdMKyLw35HkuJ8WqZqNCE%2BAkuNimOkupsy4aqRkaexTiIh1szreOaaRAbkrO0m4dKYTvX1GVS9VKuWOrYTKPVRFEWhonkXyigdDVDdZTH4yeRZBKejJj25dcj96ZWLn46tMpFzYDRSI9Q0wc%2B9ttIGD1UhGYAPtRu3%2FD45ThIodA5dAB9KB2lDhvAHwi1u%2BFA7WSngVoRG58ZiPs%2BbPb77XUZZNxwybtxIEqzJeqwiQJetlFM%2Bpri22nq%2Bi3pdMPpG2plkyJfSnEmvyxmlnaKhtvBStIVslec97Y48yUfTqdEDp%2FxZJ88S%2FJNQ9BYdzWweJMLmfzZ1p2hhFj6FFCuKb%2BZ9Tsy9GvjwQKs62ae65CwsjTVwJ1dM0PHZYNqZ%2FgIHJGKxeUTzar5fifrxAvHtZ%2F1l%2FOGZAUXZQU%2FZOpTh6VQ93TVtJSUKFcCtxZRbCfSH%2F5TF7NyClycBYaknAh%2BT%2BId5FE6TRrBner3qLj1RrjVlkD0Omhj14ifI7d6L0geUEox%2F7MMQKuUZM49NcAQdtz3G0YmCj9uytsF6o%2FYD7ldV0EIrmEtoRRTUFyNnTrl4qmBEnpxnzbtpa4eZwqNHmCAZ7Sly2DwtECviNk34TvI6PCTzzD39IDDBjqkAeEIWPSoquV70d7LCvw9Dfs6%2BYcXv3SNGRsyojGrpHLkEX93npNnuQGWDK%2BbGmhHwY8AxILHcsh0tUcykGfegw5sBS0tKhyhl69v6uXXpWse9gvUM20fWyN8ADIxu9xlSRYjmac5Yf20ca6dW%2FjUkxxwWW3pLLxbVAnRhT%2FW2vJY935E7SxuMyeMKU8D5O%2B3K21Ew7y9aWkooBxGSzOQ%2FhzMqvz%2F&X-Amz-Signature=8226219aec15b46fdb25a21162a144356696881839c7f2644e36b19182613e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
