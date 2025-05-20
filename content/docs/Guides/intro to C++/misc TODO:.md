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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YXRMRCY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5nRMJd5AkpLidagsq1y8z6qd9FAXlI8QDiHq76Xqz8AIgJ%2FGEEwcVPhSsFmHdDzbfvs80nO6v8TAzEMiA8RFNV3AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD%2Fi%2Faos0yKagfiPircA3yja9hiHlfNwcePiHFFJD5YCVDvkBK53jp9J047Rqs%2BpZPyW%2BywYwZ0hOUL%2FR1BVn%2FiYwMA1b4depdv%2FYuxdBhBVIUvaWfRbkcK5GkFGY1CMZvvR%2BpWrI%2BpbrnCLm1nMjpl5toZCqywPhBVUIJ%2F66gC3aQk8xdlUlb56egFmJhumnXZ0u9RKxACbmIjF7X91MXRxo3cR7GzWPmCB1DQqPZ6T9S9O6AsazC4gu%2FWNG6sci4aOmkjuXrbkgnGMYF72WgV%2BbEPlmuwhaBKOZ0vXnNAGWGGPrOiV%2BV1xa2hsj9nVCv4Qr7nPWYS4nJfFzRsv0pg4wyEvUExwWQ%2FKKVWQwI%2B47upIVdbljrKtGpFje%2FkeByr8jJUwUjVloCZIq9va9aB2SUd1bRVllA54X8MG8mPLIQPPtP0ciEtod2eDB3P2snaleMSK2NTGaFmwMHA5OlDq7q0Rj2I%2BbkX9G3KYeDSlFCVti%2BK9BGmUwN6a3qlBXNVjhHbJvfvUgZIFQuZ9nHetASvAz9r6ab%2FpHliZLW%2Bu%2FZOn1tIf1GGBVlBWeoxXol0sp9bGz8wsOad7xAKxKOr5jli4RRrBOEbR8jo%2BGzXizhmrU8rikdXqYj6s5D43GSh3uEMzlnk3ne4MKfGsMEGOqUBndN20nHPBIINmlshp17UlXOfzHI30mPkBeNOjs53sER5s%2BsxwBWcwC0qVZw7DdOH%2BcNsITNeyMwzlAlOn2KbZ5P8XtnqCZ9LC3SCoHWte7V10CEADSAfnI3uGZgL004cWs7FTk91WjPMBREcGpd5wmjk6UkoJx%2BcTd3HXwo4niBpRh3c%2Fknvl0eDv46YTzww%2Bnm8j6IsAdM%2F5Iqh3vfMEUXPAMFf&X-Amz-Signature=7a0c2e10062e05b5838a97a1d3c769d4f0c3ffba1c2c7351b544d2dfc21e5b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YXRMRCY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5nRMJd5AkpLidagsq1y8z6qd9FAXlI8QDiHq76Xqz8AIgJ%2FGEEwcVPhSsFmHdDzbfvs80nO6v8TAzEMiA8RFNV3AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD%2Fi%2Faos0yKagfiPircA3yja9hiHlfNwcePiHFFJD5YCVDvkBK53jp9J047Rqs%2BpZPyW%2BywYwZ0hOUL%2FR1BVn%2FiYwMA1b4depdv%2FYuxdBhBVIUvaWfRbkcK5GkFGY1CMZvvR%2BpWrI%2BpbrnCLm1nMjpl5toZCqywPhBVUIJ%2F66gC3aQk8xdlUlb56egFmJhumnXZ0u9RKxACbmIjF7X91MXRxo3cR7GzWPmCB1DQqPZ6T9S9O6AsazC4gu%2FWNG6sci4aOmkjuXrbkgnGMYF72WgV%2BbEPlmuwhaBKOZ0vXnNAGWGGPrOiV%2BV1xa2hsj9nVCv4Qr7nPWYS4nJfFzRsv0pg4wyEvUExwWQ%2FKKVWQwI%2B47upIVdbljrKtGpFje%2FkeByr8jJUwUjVloCZIq9va9aB2SUd1bRVllA54X8MG8mPLIQPPtP0ciEtod2eDB3P2snaleMSK2NTGaFmwMHA5OlDq7q0Rj2I%2BbkX9G3KYeDSlFCVti%2BK9BGmUwN6a3qlBXNVjhHbJvfvUgZIFQuZ9nHetASvAz9r6ab%2FpHliZLW%2Bu%2FZOn1tIf1GGBVlBWeoxXol0sp9bGz8wsOad7xAKxKOr5jli4RRrBOEbR8jo%2BGzXizhmrU8rikdXqYj6s5D43GSh3uEMzlnk3ne4MKfGsMEGOqUBndN20nHPBIINmlshp17UlXOfzHI30mPkBeNOjs53sER5s%2BsxwBWcwC0qVZw7DdOH%2BcNsITNeyMwzlAlOn2KbZ5P8XtnqCZ9LC3SCoHWte7V10CEADSAfnI3uGZgL004cWs7FTk91WjPMBREcGpd5wmjk6UkoJx%2BcTd3HXwo4niBpRh3c%2Fknvl0eDv46YTzww%2Bnm8j6IsAdM%2F5Iqh3vfMEUXPAMFf&X-Amz-Signature=dcb82614cf1b0e7c4aa63b9d1452cd9a626a9438e38020df0d97a464d1e902e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
