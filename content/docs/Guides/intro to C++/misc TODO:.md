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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMV5L3NU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCx7PC7Q0XaUq0FoVUpYVuoLLPbXdcp6CNF%2FjxygBjRaAIgMYWtfGndiwFUGA5%2FeL7xAjS1JICmQnvdR4VEDyx0iR0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFEjC2kWJBSUmqqoqSrcA%2F0pndKrRrBe35T6JBrF4akz8y3%2BYWqb5UPirHCZi9cRjnNbv2%2Fohd2RUgVGgD5nHRsyNTSYwAhRRlfRN1IdgRgiRc8LG8glfmrYX12ltiX9oPb8iEl6pGVlaQNAUaDMxJANZpZ0j3WShah0pxoLt9hqT0aG9K0qvpfPkfSz9FG6LWX1jRBV0%2BDnetjKKI9XiMotiBghiedA5Hd7RsaGnj1natJ0lxBXqdwNx3KxjLBRz4V1uwYy5IluKUBXyNHwO9P5m4Ltmg7JdCF41FTgoecmMmC8pYP9pLg7iiMIxzNQ3I%2BDv0%2F%2FqGU%2FX2mXNu1SxA0BkI4pq2bvOT9rDaiDBcUhLvyA7r15MP61Orc3SugihZw4NMs4Gm%2FKXt1gHI88luxxCtaIE9beOLw7u%2FzhSAyu7Petm8GCKixu6kqcTVTC1rlrxzvnHJdDN8rKlmIkibHLyOD%2BhSM5n7Qu2ze5u2PA9gALxpeB3UeeZ%2FNuqRYnCzG8brKVuQRQT9nb1nAV8kgcc2sYAtRWQrPWoiGeCin882mnRzHe%2Fw76lHVhJHL2R6AXLDoqpF6jOZo%2FJ%2Fsx8jqD7aiBp81%2FiRkfMq0Al4HtBBYx%2BcDwcw5I1aSsX66l1dRPUW8gOpEq19zqMKOAxsEGOqUBQDaIXYkFFYRGzh%2FzLbHtPZOa2lxCmSzqq8xgoQzbttqo72cOyLE%2FI8GK7bSkVXiD903fLE2aPaLJL4l7w82E2%2B8kj9cr79nnjXRj9I2SaEJUgKnxFinrdaqlqSGf2RKE7RsPW71BGeLMJtVoPfG7JVtIJes4oG82Qkvi69gbqaqMKvem%2BBFxyRqsDoEoISSkuCzTJ2kZdYcnZkyi76KlZkX4GnOs&X-Amz-Signature=2f7c55f9b181a033486df943bc44547d91fdc9b4ac616d25ab7b5290853af6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMV5L3NU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCx7PC7Q0XaUq0FoVUpYVuoLLPbXdcp6CNF%2FjxygBjRaAIgMYWtfGndiwFUGA5%2FeL7xAjS1JICmQnvdR4VEDyx0iR0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFEjC2kWJBSUmqqoqSrcA%2F0pndKrRrBe35T6JBrF4akz8y3%2BYWqb5UPirHCZi9cRjnNbv2%2Fohd2RUgVGgD5nHRsyNTSYwAhRRlfRN1IdgRgiRc8LG8glfmrYX12ltiX9oPb8iEl6pGVlaQNAUaDMxJANZpZ0j3WShah0pxoLt9hqT0aG9K0qvpfPkfSz9FG6LWX1jRBV0%2BDnetjKKI9XiMotiBghiedA5Hd7RsaGnj1natJ0lxBXqdwNx3KxjLBRz4V1uwYy5IluKUBXyNHwO9P5m4Ltmg7JdCF41FTgoecmMmC8pYP9pLg7iiMIxzNQ3I%2BDv0%2F%2FqGU%2FX2mXNu1SxA0BkI4pq2bvOT9rDaiDBcUhLvyA7r15MP61Orc3SugihZw4NMs4Gm%2FKXt1gHI88luxxCtaIE9beOLw7u%2FzhSAyu7Petm8GCKixu6kqcTVTC1rlrxzvnHJdDN8rKlmIkibHLyOD%2BhSM5n7Qu2ze5u2PA9gALxpeB3UeeZ%2FNuqRYnCzG8brKVuQRQT9nb1nAV8kgcc2sYAtRWQrPWoiGeCin882mnRzHe%2Fw76lHVhJHL2R6AXLDoqpF6jOZo%2FJ%2Fsx8jqD7aiBp81%2FiRkfMq0Al4HtBBYx%2BcDwcw5I1aSsX66l1dRPUW8gOpEq19zqMKOAxsEGOqUBQDaIXYkFFYRGzh%2FzLbHtPZOa2lxCmSzqq8xgoQzbttqo72cOyLE%2FI8GK7bSkVXiD903fLE2aPaLJL4l7w82E2%2B8kj9cr79nnjXRj9I2SaEJUgKnxFinrdaqlqSGf2RKE7RsPW71BGeLMJtVoPfG7JVtIJes4oG82Qkvi69gbqaqMKvem%2BBFxyRqsDoEoISSkuCzTJ2kZdYcnZkyi76KlZkX4GnOs&X-Amz-Signature=5fb24b21230c191bd56c64aa5138509738d752236248aa7c1e44141f6d5dcdc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
