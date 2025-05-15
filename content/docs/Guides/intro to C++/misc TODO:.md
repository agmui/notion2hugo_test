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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2VWZK6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDZsXPO%2F0NPFHu1F9fu%2FieZbHEdrRTfcymF8GmsFSMrggIhAKOZRb%2F9%2BK5qwIIrmg37%2FnKXeJT34hPL6QnO4WUPT%2B2gKv8DCDMQABoMNjM3NDIzMTgzODA1IgymByFeQ6ipcv8RgHwq3ANnAchn2hvtmkRXjnQQOPrJwTa935sl7Gb2K5uxUGIcHeu0GhphdGdnsVg%2BAnvpdp08WG3%2FlBQrm6IxNIQYa%2Fv6eeW7vggMP6VbjH8BNdvyx%2F6p9EHXKNsnHWlA9rQ67YsdcJmomlyF0s%2FVluc95dNIFeYSWV9tf8OA%2BF6X6IuQ%2BjMnBZsdGjKJUlfXN1W8a0ZzzVgo4H2WvdGFNROXhm7a8RbKC0k8Zlyynh3UxxIRftirFWkycf%2BFrCTWHkkKmMCv2IjfHOTARcmsuw0qcOEnmMdA7%2FRv0RLuyChK4XyvB42SqMrw1QZHG%2BEttLXAJfjxOme0rDpBahzuFpdxehkMS0Zw%2Bval%2FkBDK20OYIP9dIhYQwkoTDX8hF7RIcjCm%2BitLa5ASou%2FX3iHJx9WPtZ6RnEp569%2BxRZ08AHQFoqsqWPokZr44b207lKqMeeYOzUJWrudCIPhTXd0M9o1S2DjJnBObG4vHcEJ0DcuROuh6ffJzLV55coYYRnSq0u3be%2BKSjguOuOCfWMhLp12yvMI6tP05mHpj8SiyYR47jPnaOQ94Xm%2Bo00DpeGHfDGL4%2FpK4S9P9XatAaWmUNsiY1Lg5nK73dYEJrebO24MCmiT9vwgPCSWXRedp2aqmzCF4JjBBjqkAce7WA%2FZMj0Cjb4VgqVTiwNJDNajjazsGUNxMu6PNdZsf8oe%2Bnu0g5W66IwHFSVJ%2F9F3lZIje7TwEVmd9Mr46ZE7pdQKjbwPScsY29YYcCCEoJzRmEfqscMMkt5hy2owasEpyQg3B1M2zyMaYaZQudfqKzC8iaMTzDIjx2hut95p0JMtvMj%2FBJDl5wapQb2itr%2BtNHEWHC%2BSQ1pq9tpb%2Bb9hDheJ&X-Amz-Signature=00972eba5efe6a94eac01470060756c64a9d69fa87a8d06feb05d975d6acaa68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2VWZK6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDZsXPO%2F0NPFHu1F9fu%2FieZbHEdrRTfcymF8GmsFSMrggIhAKOZRb%2F9%2BK5qwIIrmg37%2FnKXeJT34hPL6QnO4WUPT%2B2gKv8DCDMQABoMNjM3NDIzMTgzODA1IgymByFeQ6ipcv8RgHwq3ANnAchn2hvtmkRXjnQQOPrJwTa935sl7Gb2K5uxUGIcHeu0GhphdGdnsVg%2BAnvpdp08WG3%2FlBQrm6IxNIQYa%2Fv6eeW7vggMP6VbjH8BNdvyx%2F6p9EHXKNsnHWlA9rQ67YsdcJmomlyF0s%2FVluc95dNIFeYSWV9tf8OA%2BF6X6IuQ%2BjMnBZsdGjKJUlfXN1W8a0ZzzVgo4H2WvdGFNROXhm7a8RbKC0k8Zlyynh3UxxIRftirFWkycf%2BFrCTWHkkKmMCv2IjfHOTARcmsuw0qcOEnmMdA7%2FRv0RLuyChK4XyvB42SqMrw1QZHG%2BEttLXAJfjxOme0rDpBahzuFpdxehkMS0Zw%2Bval%2FkBDK20OYIP9dIhYQwkoTDX8hF7RIcjCm%2BitLa5ASou%2FX3iHJx9WPtZ6RnEp569%2BxRZ08AHQFoqsqWPokZr44b207lKqMeeYOzUJWrudCIPhTXd0M9o1S2DjJnBObG4vHcEJ0DcuROuh6ffJzLV55coYYRnSq0u3be%2BKSjguOuOCfWMhLp12yvMI6tP05mHpj8SiyYR47jPnaOQ94Xm%2Bo00DpeGHfDGL4%2FpK4S9P9XatAaWmUNsiY1Lg5nK73dYEJrebO24MCmiT9vwgPCSWXRedp2aqmzCF4JjBBjqkAce7WA%2FZMj0Cjb4VgqVTiwNJDNajjazsGUNxMu6PNdZsf8oe%2Bnu0g5W66IwHFSVJ%2F9F3lZIje7TwEVmd9Mr46ZE7pdQKjbwPScsY29YYcCCEoJzRmEfqscMMkt5hy2owasEpyQg3B1M2zyMaYaZQudfqKzC8iaMTzDIjx2hut95p0JMtvMj%2FBJDl5wapQb2itr%2BtNHEWHC%2BSQ1pq9tpb%2Bb9hDheJ&X-Amz-Signature=3bca6abc195c05f7223854b681117f6905731a6fc46c9be87eda5d70efdc3745&X-Amz-SignedHeaders=host&x-id=GetObject)

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
