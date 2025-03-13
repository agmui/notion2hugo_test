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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IIYJCU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzP5Ds4JpbKzYTFEG%2FKRyiiM2fa1KWr592ocmOsVjZDgIgYrXAVVikEdpsS5XDiKzBV9QriOvlc7bVSKKKKxslYDkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrYNfejDOy9jfCFNSrcA%2BhqPEe8U1yFp37hL03tXJcHlOEo2alUaiMGkPhrr1V1jz0XcEpJJp9BoH9sxbafBQ6ZmyyQ0om6HbLaOV6W%2BamGCwbF3J0iPi75Xb9OkQhi823AhzU64Vmw9ZXcadCjee24ZfcEP7CNKb0McBqFyCQzhq3h3OkZ1jweTdYgPMNgkzNJZ3oWapEE3ry96KfU3vBhrKFx3PqB0wpz0gj2q4NnMQDJWVOUp4c688MUCFMtEpBC%2ByuqyhRycs8jKhZx49WCMkJ9F%2Fh0cCE7e4w7Os7N9DWhZ26XM4EBbPyJDU63Pw6vqtOdJ4oT7lWHUs1w7z6k%2F%2FUZ4HjebvCuxUWnrVoE%2B4A4cQZrFJaiwUppjPmz2vHHo2e9JQmhk7Vz2IHoTzPEhUZwWdTd%2FV3Sp3PwcWvmm5s%2BqZhbudytbFR9vfkvc3eWqyfre3FDXkO%2Bm2CoWff%2FhPHviSyXHGOp61q%2FLQpV6CZ8NLa6VaUT5RJRIlbvO4EwPVax64ZmCjmmhOeKpg%2BINDB2GpLdjZDfLvxGHm6u%2FZCq5EsPTmeqDxUDglFh%2FaMlSNxtBoF5cip%2FK97FecV00fIP8RrAW8TEedkW7vyU0NPN7yz0raNPwbTB9O8NnGt4eMQsDJuObzg8MJjlyb4GOqUBko530Y%2BNFXBIv1YtrpWNEYXT7XNark8h6wCsRAx%2BvJiws24aKnFJYMoKeRxNsg3PWGzrSo2RrGh4PgDf8BC2b%2Fw5zGHE3GguiyE0OFJbvS6TgSzCxCAHFy%2B7EzhaK0gmOoSCqUr6hqvPW9p9sPbDBmuWfuitLo6cvZMBVorBJnht0wgn8AuFHtWww2%2BOqqyXONzy0nhP8hNTxiMBK68StUY0f54r&X-Amz-Signature=511aa594353453deb6c43504b02e09c068c6271872f916e848dc172aad1764bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IIYJCU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzP5Ds4JpbKzYTFEG%2FKRyiiM2fa1KWr592ocmOsVjZDgIgYrXAVVikEdpsS5XDiKzBV9QriOvlc7bVSKKKKxslYDkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrYNfejDOy9jfCFNSrcA%2BhqPEe8U1yFp37hL03tXJcHlOEo2alUaiMGkPhrr1V1jz0XcEpJJp9BoH9sxbafBQ6ZmyyQ0om6HbLaOV6W%2BamGCwbF3J0iPi75Xb9OkQhi823AhzU64Vmw9ZXcadCjee24ZfcEP7CNKb0McBqFyCQzhq3h3OkZ1jweTdYgPMNgkzNJZ3oWapEE3ry96KfU3vBhrKFx3PqB0wpz0gj2q4NnMQDJWVOUp4c688MUCFMtEpBC%2ByuqyhRycs8jKhZx49WCMkJ9F%2Fh0cCE7e4w7Os7N9DWhZ26XM4EBbPyJDU63Pw6vqtOdJ4oT7lWHUs1w7z6k%2F%2FUZ4HjebvCuxUWnrVoE%2B4A4cQZrFJaiwUppjPmz2vHHo2e9JQmhk7Vz2IHoTzPEhUZwWdTd%2FV3Sp3PwcWvmm5s%2BqZhbudytbFR9vfkvc3eWqyfre3FDXkO%2Bm2CoWff%2FhPHviSyXHGOp61q%2FLQpV6CZ8NLa6VaUT5RJRIlbvO4EwPVax64ZmCjmmhOeKpg%2BINDB2GpLdjZDfLvxGHm6u%2FZCq5EsPTmeqDxUDglFh%2FaMlSNxtBoF5cip%2FK97FecV00fIP8RrAW8TEedkW7vyU0NPN7yz0raNPwbTB9O8NnGt4eMQsDJuObzg8MJjlyb4GOqUBko530Y%2BNFXBIv1YtrpWNEYXT7XNark8h6wCsRAx%2BvJiws24aKnFJYMoKeRxNsg3PWGzrSo2RrGh4PgDf8BC2b%2Fw5zGHE3GguiyE0OFJbvS6TgSzCxCAHFy%2B7EzhaK0gmOoSCqUr6hqvPW9p9sPbDBmuWfuitLo6cvZMBVorBJnht0wgn8AuFHtWww2%2BOqqyXONzy0nhP8hNTxiMBK68StUY0f54r&X-Amz-Signature=c8e3cf02e36d0e11b0646800f5354d8a3a20b4cbd9f431a9d4ff1a8e93c472c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
