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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTTD5UQS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDsnWzaVQz15oSDndH9segYBVnQvY4TYNSbEKs%2FOzfKgIhAPUQMwKZcs8sT2hBCoj3wlw69b0jL7ZoEBIS7BBs3eiuKv8DCFEQABoMNjM3NDIzMTgzODA1Igwz4JEe3LJNFe8ZHs8q3AOQF9lhBDWcvrpCWGPBntWYmRQCVxs97PLyVDcJl%2BVanbwM6JKrHuyEDvke0lVMJ%2BzZ92ufRTfHq%2FGTBxR536pbHtGQGfoQ6%2Bye1shtpqTqJicEGqWJATundn5k2p7qzprxjKu25w2hNv1%2B3QmhM2uGYh7nZbEoindtcVQXBS0IkU%2BZXEGTiQIA5juQ33tZ59P%2FcuQHrdl1aupX%2Bd9FJ3yx%2BUIFwJbJDVMIMDQomQDoPB8mostPhj7OWQCRxTqnA8MhgZ2jBFxeKuKUblYXeSuVpvlfe2h7NJg0ozJ1z8QTR7mTALtiRkpgBFpcfUiUXpBXMaRt%2BWuIuPmPds31yr6bROL%2BQHfIY6RMvvqWuf3zWNlVO3KsvCJUWRK9ehEU9m%2FQ5LlgHa0D78tl5K7zDe06riJTv6Fh3EjXugY5kx%2BrmFWsK3%2F7OeRE0kcL7nUlFe56wPFIb9azYDq%2Fy8f261Z%2F5RMfDbukJSpPHssUc7REwjsVBXir6nJw2%2FC0xR0NxKO%2B%2BMoXcw9rVWc1Z09Fc1KfdNDtq3uw%2BfF5t1payIekc5nW0LZEkbBZzfvzOe15mKJlUGU6KJQSiHB%2F8dG18k%2BlOF%2FUSUqnLaoWA8FD2SplnDSDHKHiGIinCKaeXDDlysS9BjqkAWIfxaDVXpps1TtSxsw1msQVT%2FnosLdgzCoE9hYyFzpkifMkv8bM8VN4oKDt8WDtSo7oPlB9qkpcrJta1vbkwGBtKIHYfEYkHvHcasZA3T9qKiyY%2FojxCc0zfObhIN%2FentRhJNWeJEIlV0MpN9bYIuQVPmupfFzMpG88F5RHe5SSRvzj%2Bb9bhppQTcfb0qHEEkt8T%2FrCbw%2BRQPI5yys%2BljCF7%2FHW&X-Amz-Signature=ff3ffc37b322b4ab1d27d5e7a0cca89bd0946dc13f2517bd629d72dc905b4466&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTTD5UQS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDsnWzaVQz15oSDndH9segYBVnQvY4TYNSbEKs%2FOzfKgIhAPUQMwKZcs8sT2hBCoj3wlw69b0jL7ZoEBIS7BBs3eiuKv8DCFEQABoMNjM3NDIzMTgzODA1Igwz4JEe3LJNFe8ZHs8q3AOQF9lhBDWcvrpCWGPBntWYmRQCVxs97PLyVDcJl%2BVanbwM6JKrHuyEDvke0lVMJ%2BzZ92ufRTfHq%2FGTBxR536pbHtGQGfoQ6%2Bye1shtpqTqJicEGqWJATundn5k2p7qzprxjKu25w2hNv1%2B3QmhM2uGYh7nZbEoindtcVQXBS0IkU%2BZXEGTiQIA5juQ33tZ59P%2FcuQHrdl1aupX%2Bd9FJ3yx%2BUIFwJbJDVMIMDQomQDoPB8mostPhj7OWQCRxTqnA8MhgZ2jBFxeKuKUblYXeSuVpvlfe2h7NJg0ozJ1z8QTR7mTALtiRkpgBFpcfUiUXpBXMaRt%2BWuIuPmPds31yr6bROL%2BQHfIY6RMvvqWuf3zWNlVO3KsvCJUWRK9ehEU9m%2FQ5LlgHa0D78tl5K7zDe06riJTv6Fh3EjXugY5kx%2BrmFWsK3%2F7OeRE0kcL7nUlFe56wPFIb9azYDq%2Fy8f261Z%2F5RMfDbukJSpPHssUc7REwjsVBXir6nJw2%2FC0xR0NxKO%2B%2BMoXcw9rVWc1Z09Fc1KfdNDtq3uw%2BfF5t1payIekc5nW0LZEkbBZzfvzOe15mKJlUGU6KJQSiHB%2F8dG18k%2BlOF%2FUSUqnLaoWA8FD2SplnDSDHKHiGIinCKaeXDDlysS9BjqkAWIfxaDVXpps1TtSxsw1msQVT%2FnosLdgzCoE9hYyFzpkifMkv8bM8VN4oKDt8WDtSo7oPlB9qkpcrJta1vbkwGBtKIHYfEYkHvHcasZA3T9qKiyY%2FojxCc0zfObhIN%2FentRhJNWeJEIlV0MpN9bYIuQVPmupfFzMpG88F5RHe5SSRvzj%2Bb9bhppQTcfb0qHEEkt8T%2FrCbw%2BRQPI5yys%2BljCF7%2FHW&X-Amz-Signature=6eac67a3287b4da1074ba8d0d4e6a7da3e3dffa283328e8f2dbfeb0a257f9548&X-Amz-SignedHeaders=host&x-id=GetObject)

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
