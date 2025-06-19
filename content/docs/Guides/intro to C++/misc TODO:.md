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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKVZGCDC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAt8jcckzRBOvWF27ZYPIF%2BEOizFuwywjL8CSnc6cFVvAiBcC7zQnK2%2BZg%2Bq0HTa5qiPSzs3DOVswe574waSRX8f3SqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyWlA52CHrq4aaLtXKtwDE2pI3v5X%2BgwOKawFYthMM0ZUgHtgpWoWI4tdEK6vCxK0i%2BpWzgyPKwPgU%2FrPqy3bVNOZsxo0tgjPZFJPYOoVAD1T4h2iIbR%2Fo8gxjc9DsIO3%2BZj%2FrOhwoeXSPZMJDF3V5x%2BURnxHnsas2qoKt%2FXWdtZWsseGqFtTJsBZZXt53eBCYDD%2Bjw62GzFgK8V5SMuN2slyySXODJTSzwTic7wjxv%2F2LqOm5KRes70IyfL3af%2FI39cTPCEGXLUkXUfqGiEpOwypg9nm2pszkSkHwq8rPqLID7uUJlaIj9YBlmbzF%2BQL6lEe33v0lMAkQp88HHaTNbSDmj7QjnyKkTD1lV6KDfdfZbTjX8%2Fd85Fu2gaQz79b%2FD6cTxT2jQ1rSxtz3ko33bx%2FQUt3MakyPGp3qtgYZ9UIzrnsvVu5bQfK3%2BHmOMXJeFxEv2aYnUXkQJ9Q4eVMYSuviMGgHD719M14v2YtRCGN5ZQ%2BBkyrrbMFLOoi31Wr3mmKXT%2BxiVwEiTJ1q7NpQe8vlY5Du7gQkcPMlg8qkvr6LMrT9%2BSbm1%2BbDnWgdfl%2FnmLaabNJiNP5h4OO4jXRGIIZ9VPgjY%2FqGnYDi1igj2qzsha9PNUoDIt9GiTByTCJ23LNh2Hx7ew8ni8wp9%2FOwgY6pgEERmJp%2BdjGhLpIw%2F7ttykcle%2Ftj7kJAcbbYXoxCnNECBEHSxU7d9mJdOwlqgXxcg4i5IeFtDDY2OtRIpPFKgTwa6mJhGc6AyNMZJfVNFTwYD9LtoTup5Xhe%2BgAHEX1fqtg8aVZXOwm5hdAt8JUuaRymYhDj3nmW%2FrjuoQGtX12B84wXURTdnW5bhf1FJEDqQyVqgB3l7P4MJKNsSO%2FMtA9dKpoByVU&X-Amz-Signature=f4c729d1268052d7e4317fe25ec354b85f19d0a27943c8c440141c1baff255ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKVZGCDC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAt8jcckzRBOvWF27ZYPIF%2BEOizFuwywjL8CSnc6cFVvAiBcC7zQnK2%2BZg%2Bq0HTa5qiPSzs3DOVswe574waSRX8f3SqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyWlA52CHrq4aaLtXKtwDE2pI3v5X%2BgwOKawFYthMM0ZUgHtgpWoWI4tdEK6vCxK0i%2BpWzgyPKwPgU%2FrPqy3bVNOZsxo0tgjPZFJPYOoVAD1T4h2iIbR%2Fo8gxjc9DsIO3%2BZj%2FrOhwoeXSPZMJDF3V5x%2BURnxHnsas2qoKt%2FXWdtZWsseGqFtTJsBZZXt53eBCYDD%2Bjw62GzFgK8V5SMuN2slyySXODJTSzwTic7wjxv%2F2LqOm5KRes70IyfL3af%2FI39cTPCEGXLUkXUfqGiEpOwypg9nm2pszkSkHwq8rPqLID7uUJlaIj9YBlmbzF%2BQL6lEe33v0lMAkQp88HHaTNbSDmj7QjnyKkTD1lV6KDfdfZbTjX8%2Fd85Fu2gaQz79b%2FD6cTxT2jQ1rSxtz3ko33bx%2FQUt3MakyPGp3qtgYZ9UIzrnsvVu5bQfK3%2BHmOMXJeFxEv2aYnUXkQJ9Q4eVMYSuviMGgHD719M14v2YtRCGN5ZQ%2BBkyrrbMFLOoi31Wr3mmKXT%2BxiVwEiTJ1q7NpQe8vlY5Du7gQkcPMlg8qkvr6LMrT9%2BSbm1%2BbDnWgdfl%2FnmLaabNJiNP5h4OO4jXRGIIZ9VPgjY%2FqGnYDi1igj2qzsha9PNUoDIt9GiTByTCJ23LNh2Hx7ew8ni8wp9%2FOwgY6pgEERmJp%2BdjGhLpIw%2F7ttykcle%2Ftj7kJAcbbYXoxCnNECBEHSxU7d9mJdOwlqgXxcg4i5IeFtDDY2OtRIpPFKgTwa6mJhGc6AyNMZJfVNFTwYD9LtoTup5Xhe%2BgAHEX1fqtg8aVZXOwm5hdAt8JUuaRymYhDj3nmW%2FrjuoQGtX12B84wXURTdnW5bhf1FJEDqQyVqgB3l7P4MJKNsSO%2FMtA9dKpoByVU&X-Amz-Signature=ebada0eb2b1ec546ed25766a0a55e310b28087c397a94cf41aee01c71f35052b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
