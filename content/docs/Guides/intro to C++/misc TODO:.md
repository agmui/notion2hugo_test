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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL72QLBR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBODfmwZ6%2FuR%2Fsz0Coo4sXepBSFWfb%2BJaujnoCmwwWYtAiBYPkwwTgVZMVdoGtMvWG2NVN%2FSyVJqQ5BYZn0bGXppQCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMpRXKqWA76FbhbYfFKtwDTPHsRSavop9%2FZgWCnMs9%2F2frruW8hVBf%2BBqhN1JOtEQzxnyk6GfvjIzYAuHbzVi59IljLctvu7i5A6oddsKkknnwFiDMKc0yAxqTUYEX0gaFY5xSw9TKzC32d%2FiYsQeTEp9Zm%2BGjPkFFfPKGD0jnpZo%2Bic0xVtC9iiRT9%2BcN1niD2KUzMd6B%2Fn%2BeQ%2BJanf4x1Qvk8eHFcvhkoNiWty%2BltAIfTIWFFwjHc55JxonkBYnislttT8FkfHI6lAoJjtq9B%2FFYwwcx2QsvvpXV9Vw2sUuoSX6YOvAz8gfbSr66xdP8Oav0RdZAwOIA8RGknclXl2Oxb9bRAHP%2BEASPrb3K9cMt2EcgRp4kLOBsApoA%2F%2Fs2roc9bsDLk3dbPfIK52DLiEEzRt92ND3I%2FXlwC6xn7dNCb6HAx4m2ldEiUH0by6%2FduNH0E56BYxrTk%2FU73pLa3rAizTSg2xSYYuT3XZ003v2hLT4LNtV%2FJqoc2IBF%2B7jP5J4JcFp9PWrnJfFXwzL7mYSZqHakrpVem%2Fmn67NS095EwCk0UoqY1nRmdvQqaSn27dcrxy5BiJbufRwlhO9hjd7qX2VrH4tkIIqYTLRIiSjqxUwgfzLyIKPlz40m%2BW4UyLftos0iQ9N16REwnojmwgY6pgE1dY0bJ0tV51TMNVHLdwgJKwlR4xJ6M9KyUqzEIQgo2bTtqiDse%2B0ydFcFtvQ9QgyG9NcArYXpbF4wBtRUQJkkwONGgnOKPCwz6kpZ23jFRoeEtEP2T0FTJsbt%2FgmhoP26b%2FdpO8JtPBwmomN41vsk9U2mJGY0og5c8mvPbaOBD6SLTuLJBQlhbwvV0Ht%2BmUYgXGzTDA9FS%2FIdZAvk11089%2FzbPffI&X-Amz-Signature=bdfa95b3eadf7217a3b4fdfe768fb70ab3b72d4a0c01f5175b60d969133875ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL72QLBR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBODfmwZ6%2FuR%2Fsz0Coo4sXepBSFWfb%2BJaujnoCmwwWYtAiBYPkwwTgVZMVdoGtMvWG2NVN%2FSyVJqQ5BYZn0bGXppQCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMpRXKqWA76FbhbYfFKtwDTPHsRSavop9%2FZgWCnMs9%2F2frruW8hVBf%2BBqhN1JOtEQzxnyk6GfvjIzYAuHbzVi59IljLctvu7i5A6oddsKkknnwFiDMKc0yAxqTUYEX0gaFY5xSw9TKzC32d%2FiYsQeTEp9Zm%2BGjPkFFfPKGD0jnpZo%2Bic0xVtC9iiRT9%2BcN1niD2KUzMd6B%2Fn%2BeQ%2BJanf4x1Qvk8eHFcvhkoNiWty%2BltAIfTIWFFwjHc55JxonkBYnislttT8FkfHI6lAoJjtq9B%2FFYwwcx2QsvvpXV9Vw2sUuoSX6YOvAz8gfbSr66xdP8Oav0RdZAwOIA8RGknclXl2Oxb9bRAHP%2BEASPrb3K9cMt2EcgRp4kLOBsApoA%2F%2Fs2roc9bsDLk3dbPfIK52DLiEEzRt92ND3I%2FXlwC6xn7dNCb6HAx4m2ldEiUH0by6%2FduNH0E56BYxrTk%2FU73pLa3rAizTSg2xSYYuT3XZ003v2hLT4LNtV%2FJqoc2IBF%2B7jP5J4JcFp9PWrnJfFXwzL7mYSZqHakrpVem%2Fmn67NS095EwCk0UoqY1nRmdvQqaSn27dcrxy5BiJbufRwlhO9hjd7qX2VrH4tkIIqYTLRIiSjqxUwgfzLyIKPlz40m%2BW4UyLftos0iQ9N16REwnojmwgY6pgE1dY0bJ0tV51TMNVHLdwgJKwlR4xJ6M9KyUqzEIQgo2bTtqiDse%2B0ydFcFtvQ9QgyG9NcArYXpbF4wBtRUQJkkwONGgnOKPCwz6kpZ23jFRoeEtEP2T0FTJsbt%2FgmhoP26b%2FdpO8JtPBwmomN41vsk9U2mJGY0og5c8mvPbaOBD6SLTuLJBQlhbwvV0Ht%2BmUYgXGzTDA9FS%2FIdZAvk11089%2FzbPffI&X-Amz-Signature=055552c3aafb841d6f06c23ac9a62e880229443bda30acacec9f553b410366c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
