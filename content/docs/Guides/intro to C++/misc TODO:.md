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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5GEQTJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDxCFx%2FFXvArjb%2B1xIw6vjd99NtcgmpPLbenxjN0ajfJQIhAKqihdQj2z7837mqrXJuUwPZ3VvAMzrzYpK3yhqzpe00Kv8DCEQQABoMNjM3NDIzMTgzODA1IgyCVOh9P4aFmLE2%2FiAq3ANymuA1w9pDGeshWsfLTT5Nw8szejBYu2ROlWHGUuXfY%2BcjKwDrY84054QPio971K8fGrwfi9D8VndtIEUYBNaeiOC3H14zztl94PajpLSDMXzSbCjLt6hF6qMjwpvInKw416YRXsn2gaWNWpU1fS7f4NctndMytOq994Hx0S6Yior8gNRGwaqNkBbxO%2FWCp46%2B0aY4t8K8IFsvu%2Bd%2FQ1byEPMCN8bnL83%2F1yRC7Q2WzNZ5pLW%2Bnlegk6vtS8WttipvwtzA3H%2BxFJpZXSAmIveUSyqiOb20MC9e0ABucxo7Wv1tjKHDRdozLE2ppvBsZ8LTIBud7pnwD2XIZQXceuKW931CCxN8BgX%2BuDypaS4%2FYeC3OxvWkE0epfiBnS11tXfG6iqtpFfiI%2BbyRSbaytb%2BtV37njHcU5PvTnakCmw2TERCixAsYqcHxK7xTyA1H0O0hmRn76%2FGbiLaIQMsEzxrvzGrwTy13hyUKU4mBK5SlKXY3WvZfACZgxWMX2eJ91NEYtOUM1oZxqeb1PFb1ht0cTWVypxrugt%2F5QIp%2BAaH5NdnXjFyRGt2Mcb49fEtxoMBOAbDHJ%2B6c81VS9SjeIrjnLrgkdkdpYRntMf7e74emwKVKyoQVu1Yf%2Fsf5zDYjI29BjqkAdCQ2C0noar6laNWjV0vx3TGZ9h%2FQ7dW%2FOnP5iPMVWKjn2ehum6cyR9BF8LW8MX1CTmUxmwbsIxTxMFgbwDS6rHKsaf56sJiTUOOAVKzCBOL59%2BSQqC3iVkJcyWO8ZJcxW5gESprQ3093qrxfqgQtmHtlT5vBIFhmd25YT08ZAdJvfaR%2BiNLBfC9a6hEx4v0jXupuADhhSMcDlio3zDbDs%2Fr%2F%2BQ5&X-Amz-Signature=ccbcc338623bd417e970bcfebbe9d1b00332e789a661f28b217c2d3327d4965e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5GEQTJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDxCFx%2FFXvArjb%2B1xIw6vjd99NtcgmpPLbenxjN0ajfJQIhAKqihdQj2z7837mqrXJuUwPZ3VvAMzrzYpK3yhqzpe00Kv8DCEQQABoMNjM3NDIzMTgzODA1IgyCVOh9P4aFmLE2%2FiAq3ANymuA1w9pDGeshWsfLTT5Nw8szejBYu2ROlWHGUuXfY%2BcjKwDrY84054QPio971K8fGrwfi9D8VndtIEUYBNaeiOC3H14zztl94PajpLSDMXzSbCjLt6hF6qMjwpvInKw416YRXsn2gaWNWpU1fS7f4NctndMytOq994Hx0S6Yior8gNRGwaqNkBbxO%2FWCp46%2B0aY4t8K8IFsvu%2Bd%2FQ1byEPMCN8bnL83%2F1yRC7Q2WzNZ5pLW%2Bnlegk6vtS8WttipvwtzA3H%2BxFJpZXSAmIveUSyqiOb20MC9e0ABucxo7Wv1tjKHDRdozLE2ppvBsZ8LTIBud7pnwD2XIZQXceuKW931CCxN8BgX%2BuDypaS4%2FYeC3OxvWkE0epfiBnS11tXfG6iqtpFfiI%2BbyRSbaytb%2BtV37njHcU5PvTnakCmw2TERCixAsYqcHxK7xTyA1H0O0hmRn76%2FGbiLaIQMsEzxrvzGrwTy13hyUKU4mBK5SlKXY3WvZfACZgxWMX2eJ91NEYtOUM1oZxqeb1PFb1ht0cTWVypxrugt%2F5QIp%2BAaH5NdnXjFyRGt2Mcb49fEtxoMBOAbDHJ%2B6c81VS9SjeIrjnLrgkdkdpYRntMf7e74emwKVKyoQVu1Yf%2Fsf5zDYjI29BjqkAdCQ2C0noar6laNWjV0vx3TGZ9h%2FQ7dW%2FOnP5iPMVWKjn2ehum6cyR9BF8LW8MX1CTmUxmwbsIxTxMFgbwDS6rHKsaf56sJiTUOOAVKzCBOL59%2BSQqC3iVkJcyWO8ZJcxW5gESprQ3093qrxfqgQtmHtlT5vBIFhmd25YT08ZAdJvfaR%2BiNLBfC9a6hEx4v0jXupuADhhSMcDlio3zDbDs%2Fr%2F%2BQ5&X-Amz-Signature=a7bdb8d087b50b0d72e855877b9193d452c2dfa1406d37818c30e0be5c400260&X-Amz-SignedHeaders=host&x-id=GetObject)

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
