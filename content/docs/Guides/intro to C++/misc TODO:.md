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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSHZFER%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwegu2Fbh9%2FPVUbYxiVrglkA3sI3P9pAyHRmQAKmUlnAIgLRhCgq7izpWlWobCMn8J10ky8rPekUqmzeSMhNqQyu8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJ5YdassOH1FU9IXKCrcAyOx6rsBZB5vl3LTZsJycNEReO96D8Tn4Z6OeU1eC%2BA0dp9d6CuO1c3ASxkXywkBEXqpvZs%2BXcF5kiSsL5snXcOe8bCW7b4wZs1EN%2Bl%2BglvgldpdJlkJedRqqFLT%2BLORfy9pf8kMz80Mcy4YPFDEfHP5CWyCNkd5X2VrKYi15Nrfe9Nt8TkFIUkgdLdtFi3lxrVL1C2lnb60zoSq%2BCv9Q9eJ%2Bth7edahHDllv1kPBCNj%2BXz9l2zthWxmsNmfZqBzyNys%2BSev95F4Mgt6Ar7EIanQwRhtXNLg6GDAOonuYXaFEN4RtFwmRnYJKpM5sc1kU3lK3NQz7rs3PQrGfzq%2FZ6wSXVdl4b%2BJJWn64wn0EOIDBWFLdH6vfhvjz19UMtoldk5bDvumhuDK3u7vH%2Bd7gkor0jVUmbTaxccB%2BxlEc9X0vgtMun%2FZcSxgKx8QDah95TF7Wf1nx19%2FiMeagNHSVHEGTZB5U7qtE%2F7O6U1BJ4Xntv%2FKVwTdAZHbg4X3zfZKSQpvmPd050SX8KemxGWu2I8qBu7ygMc82LO2xZWtt6t%2FVKIDQfpl7zNqeF%2BW39WRAtJ6y0RPirSi0aSIfDBTZAIyw49fYxhkNtefwXRgJ7H08t31gCpYLEzhloyDMPvPpr4GOqUB9ONunUF8zyB2RoPt1%2BzLLK8uFmHxqwNmlQ7vebPqQ12YnGYVYEYuxkgLLznv7%2BeNZDt30luyQNoezlFgn76kBKbREopRpAsHZOZFn%2BEXC82H7wXUBY47ZsBNW9peJgrIC2cO%2FkO5qOui2xuPVm4%2FQOfqGMOgbZAnvMatNyxrUbOJ0E2RcQ7ewUnnjSSGIHasR%2BTw56kXKqtN4TJ3r1dsUQVuYwHj&X-Amz-Signature=505f74b0add165fe45f53280193bd97bd16c8a92a1c16b212ec163bd9dbd16ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSHZFER%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwegu2Fbh9%2FPVUbYxiVrglkA3sI3P9pAyHRmQAKmUlnAIgLRhCgq7izpWlWobCMn8J10ky8rPekUqmzeSMhNqQyu8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJ5YdassOH1FU9IXKCrcAyOx6rsBZB5vl3LTZsJycNEReO96D8Tn4Z6OeU1eC%2BA0dp9d6CuO1c3ASxkXywkBEXqpvZs%2BXcF5kiSsL5snXcOe8bCW7b4wZs1EN%2Bl%2BglvgldpdJlkJedRqqFLT%2BLORfy9pf8kMz80Mcy4YPFDEfHP5CWyCNkd5X2VrKYi15Nrfe9Nt8TkFIUkgdLdtFi3lxrVL1C2lnb60zoSq%2BCv9Q9eJ%2Bth7edahHDllv1kPBCNj%2BXz9l2zthWxmsNmfZqBzyNys%2BSev95F4Mgt6Ar7EIanQwRhtXNLg6GDAOonuYXaFEN4RtFwmRnYJKpM5sc1kU3lK3NQz7rs3PQrGfzq%2FZ6wSXVdl4b%2BJJWn64wn0EOIDBWFLdH6vfhvjz19UMtoldk5bDvumhuDK3u7vH%2Bd7gkor0jVUmbTaxccB%2BxlEc9X0vgtMun%2FZcSxgKx8QDah95TF7Wf1nx19%2FiMeagNHSVHEGTZB5U7qtE%2F7O6U1BJ4Xntv%2FKVwTdAZHbg4X3zfZKSQpvmPd050SX8KemxGWu2I8qBu7ygMc82LO2xZWtt6t%2FVKIDQfpl7zNqeF%2BW39WRAtJ6y0RPirSi0aSIfDBTZAIyw49fYxhkNtefwXRgJ7H08t31gCpYLEzhloyDMPvPpr4GOqUB9ONunUF8zyB2RoPt1%2BzLLK8uFmHxqwNmlQ7vebPqQ12YnGYVYEYuxkgLLznv7%2BeNZDt30luyQNoezlFgn76kBKbREopRpAsHZOZFn%2BEXC82H7wXUBY47ZsBNW9peJgrIC2cO%2FkO5qOui2xuPVm4%2FQOfqGMOgbZAnvMatNyxrUbOJ0E2RcQ7ewUnnjSSGIHasR%2BTw56kXKqtN4TJ3r1dsUQVuYwHj&X-Amz-Signature=0d2a777aaf43577fbe91a9d1e58bba52427bbbe65ccfec8bccde993c68d785e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
