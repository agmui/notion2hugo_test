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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QPSGY4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCbcdE4k6x2sqmnudI5YI%2Fx%2FzcKhBorW%2BiJJ2Ry4XrFfgIhAJuVuJ8DCNu8aY5UefuFAbffWhRfc4idGZACZ6Q3tsfXKv8DCF0QABoMNjM3NDIzMTgzODA1IgxpbF00K%2FJh5A3B4n0q3AMfQkZ0iBEge%2Fn3GgQW%2BhGKsRJT5uUKKY92nuR37zhdqiQYDC8Eu%2FuGfiGXXQzekxPaSeWFCVbU8UyqQMUBRjJuuGwFR0uaUKqMABmsyLylKV1iNbpPjqDuKMTuuqqbcFQO1%2BlrIa4G8WbwJORMlHJy0I3wqF9c4pQ6hEoG9373gcrtUnCiv2vyVF3rorV2NbM%2BgZQmQd54i4pYGi78dr7cZLKwWkBahNeoiFrJBtkV%2FQnmx8v2I57YsfrH5pkttD%2BJAvPeizn87QacYss6lNmrgmcP2T7F7ajOVnRK6RvTXLlVnqtGT7he9zRceGd5cGNHQhXB%2F9UF21Eb3mFjte2XpgA4uc8V5VgRNPh34yv6E8ZrVJT2KJQwmkCpnoEbZxA%2FfCQ2xERGnXDA6g9dIQXgxxlD0mwEyBTQxnpiW8S%2FPDXZEZa2asB9n95nf2Qvl9FdXJ26fOgjcrHxmEcpemqW3ANrPkUhkVhMxtOGbP%2BDtLz%2BmTMnch%2BeM0K5QDBk8sZ3wHFPBba6qsMnmsHWBjECxwpqdVOPYuVj65LvcUHSehzki4LSC1xOgl3XdEbkjHlbNptCU9itsglznHbPzpWUg8zibBkVffSK79in1FZL83mMNB0XwEkTfiY3tzCXmse9BjqkAXQxcS1hTf%2Fpu8DpzL1ecmaQe%2BW0DkptAb7uB5FukoA0TEXEJfdddxHpHKtib%2BIGXV2n%2BEitu%2BC9HXx6nNHpUnA%2BY6BRsD1l8Lm%2FawlwZgaych9JP%2BGqBldAqy3FAkuEbDWD5tBFhSH6Fi1E82MyTzqjJxZVNsinNHw5%2BvLa%2FHa1yIl1Xiun8qMEnUkbKeczY1uBTUnAdJiGUFvrNccryRItA0EQ&X-Amz-Signature=0ca694f553f1209c9042051ed731eb54b945879db880075a1a86aca51c3de5be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QPSGY4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCbcdE4k6x2sqmnudI5YI%2Fx%2FzcKhBorW%2BiJJ2Ry4XrFfgIhAJuVuJ8DCNu8aY5UefuFAbffWhRfc4idGZACZ6Q3tsfXKv8DCF0QABoMNjM3NDIzMTgzODA1IgxpbF00K%2FJh5A3B4n0q3AMfQkZ0iBEge%2Fn3GgQW%2BhGKsRJT5uUKKY92nuR37zhdqiQYDC8Eu%2FuGfiGXXQzekxPaSeWFCVbU8UyqQMUBRjJuuGwFR0uaUKqMABmsyLylKV1iNbpPjqDuKMTuuqqbcFQO1%2BlrIa4G8WbwJORMlHJy0I3wqF9c4pQ6hEoG9373gcrtUnCiv2vyVF3rorV2NbM%2BgZQmQd54i4pYGi78dr7cZLKwWkBahNeoiFrJBtkV%2FQnmx8v2I57YsfrH5pkttD%2BJAvPeizn87QacYss6lNmrgmcP2T7F7ajOVnRK6RvTXLlVnqtGT7he9zRceGd5cGNHQhXB%2F9UF21Eb3mFjte2XpgA4uc8V5VgRNPh34yv6E8ZrVJT2KJQwmkCpnoEbZxA%2FfCQ2xERGnXDA6g9dIQXgxxlD0mwEyBTQxnpiW8S%2FPDXZEZa2asB9n95nf2Qvl9FdXJ26fOgjcrHxmEcpemqW3ANrPkUhkVhMxtOGbP%2BDtLz%2BmTMnch%2BeM0K5QDBk8sZ3wHFPBba6qsMnmsHWBjECxwpqdVOPYuVj65LvcUHSehzki4LSC1xOgl3XdEbkjHlbNptCU9itsglznHbPzpWUg8zibBkVffSK79in1FZL83mMNB0XwEkTfiY3tzCXmse9BjqkAXQxcS1hTf%2Fpu8DpzL1ecmaQe%2BW0DkptAb7uB5FukoA0TEXEJfdddxHpHKtib%2BIGXV2n%2BEitu%2BC9HXx6nNHpUnA%2BY6BRsD1l8Lm%2FawlwZgaych9JP%2BGqBldAqy3FAkuEbDWD5tBFhSH6Fi1E82MyTzqjJxZVNsinNHw5%2BvLa%2FHa1yIl1Xiun8qMEnUkbKeczY1uBTUnAdJiGUFvrNccryRItA0EQ&X-Amz-Signature=56762b8478156678c69e551836b70a3eed6ed6e7844e718ae90d7a8eb7bb3c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
