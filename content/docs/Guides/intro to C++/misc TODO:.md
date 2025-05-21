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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPGQMVH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIF8XvU%2F2iWZgK9SYjiVxTxUxdZbirffqvf00jxfs5xsFAiAKO6EE6F9GQYZPTeNO%2FB8xHqHO1Mr4gUUKuwPsABOIYiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3y11PaD4xhFTIHcKtwDMOaVTXaQUHbmI8tIgC%2B4Yz7NJlXKpEoMqJbhgnwltROYLNvS0N%2F8nqUToAyfjnrsqZnu5YJKMitNGFphd14NgsyC9rl%2Fqzpp1GGMY29NzvL%2F2Ew9p8NYXheCLZCvNncxgXICjZ6bXyrX7Om%2BIzUpu8iOlia%2B1%2F4hGi97XtNIfhWC84AZPMB6XE6bVxiJTJGG8Wh%2BkMzrwWrTfVi66jHVb4WsnqLeF8kqGVoNi5NrPHlreagfQPV%2Bzm%2F54BEyfHH9nqQ6DHrQgHCUGyusGn6g1uz%2FNQRobiURz%2F5P4eR4TQx6Rs7taWYqaPFutftj0vLDTv7pf1x5kGB6ZQn1dOm52H8BlL%2Bc4XB3ZeZsZ2dadq2JPYk7rNkHyyy%2F5edsKFBpqi910pW31Pr6hQXENhwbZP5QJ8nx5fSk%2FYlvjVWGOw291ySVRVGxLKLd%2B1RYj1v2Sp4BFLoMYyi2wCu11N1cluzf%2FB2alQoV2cWRfD2NNZSU%2BkYvQ1ZSUhX57nTRrBzK6%2Fj%2BF%2BA1%2FJtg2x3QNdGLjBgrZRgomNoC%2Boe%2FsntYEjvMNeCa5cLy1%2B8BN%2FTS4fYZOLky7xzNXDanPUtO1Gel2OxjlGn%2BAKhTXnC85VNDohc6nNl41yX5lhXDSE8wqLe2wQY6pgHr9no7zujRwtCsgDUPrv%2FAUaf8QhKpaGBdjYPWtI%2Fv%2FgKoypdS0mnAUnvRdCXTjG9VQbhvDFlQcCvgtGxJs0nQ9b%2BhcyiEz6CxDQat46LlIxp1MXFgVxAAzuVq5XJzjacM25g6M69YyVlvZNfpXOpYGRDYwTvqtgrwkT5s6QSvlx6L6zxUKEc3%2BxdBNkHcv7UtbCjJ00HVKp1fgD0%2FqnWqWJJQwKt3&X-Amz-Signature=25ae5c6953dbcb66bfb822cb9b7ba267f04eafffbd34685196a940002484dfcc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPGQMVH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIF8XvU%2F2iWZgK9SYjiVxTxUxdZbirffqvf00jxfs5xsFAiAKO6EE6F9GQYZPTeNO%2FB8xHqHO1Mr4gUUKuwPsABOIYiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3y11PaD4xhFTIHcKtwDMOaVTXaQUHbmI8tIgC%2B4Yz7NJlXKpEoMqJbhgnwltROYLNvS0N%2F8nqUToAyfjnrsqZnu5YJKMitNGFphd14NgsyC9rl%2Fqzpp1GGMY29NzvL%2F2Ew9p8NYXheCLZCvNncxgXICjZ6bXyrX7Om%2BIzUpu8iOlia%2B1%2F4hGi97XtNIfhWC84AZPMB6XE6bVxiJTJGG8Wh%2BkMzrwWrTfVi66jHVb4WsnqLeF8kqGVoNi5NrPHlreagfQPV%2Bzm%2F54BEyfHH9nqQ6DHrQgHCUGyusGn6g1uz%2FNQRobiURz%2F5P4eR4TQx6Rs7taWYqaPFutftj0vLDTv7pf1x5kGB6ZQn1dOm52H8BlL%2Bc4XB3ZeZsZ2dadq2JPYk7rNkHyyy%2F5edsKFBpqi910pW31Pr6hQXENhwbZP5QJ8nx5fSk%2FYlvjVWGOw291ySVRVGxLKLd%2B1RYj1v2Sp4BFLoMYyi2wCu11N1cluzf%2FB2alQoV2cWRfD2NNZSU%2BkYvQ1ZSUhX57nTRrBzK6%2Fj%2BF%2BA1%2FJtg2x3QNdGLjBgrZRgomNoC%2Boe%2FsntYEjvMNeCa5cLy1%2B8BN%2FTS4fYZOLky7xzNXDanPUtO1Gel2OxjlGn%2BAKhTXnC85VNDohc6nNl41yX5lhXDSE8wqLe2wQY6pgHr9no7zujRwtCsgDUPrv%2FAUaf8QhKpaGBdjYPWtI%2Fv%2FgKoypdS0mnAUnvRdCXTjG9VQbhvDFlQcCvgtGxJs0nQ9b%2BhcyiEz6CxDQat46LlIxp1MXFgVxAAzuVq5XJzjacM25g6M69YyVlvZNfpXOpYGRDYwTvqtgrwkT5s6QSvlx6L6zxUKEc3%2BxdBNkHcv7UtbCjJ00HVKp1fgD0%2FqnWqWJJQwKt3&X-Amz-Signature=f4d579d60b03ee8d3e3fea09ee3ba325994a673c45fd35061e23d8e04d57e5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
