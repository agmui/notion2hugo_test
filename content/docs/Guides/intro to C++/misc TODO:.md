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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDP56PG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXQkwjz7rBr94GMC53HaftGm4P0Eq0JUJyaaUHOkkH8AiEAjeFL1Q2Hrtufg7Z5lgJYVeUfTUxHkEcWnKcwFkxPlNoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWUZR71pnHZOr1ZfircA9zTwEs5NS5C6K%2Fv6bEmU1sVY2qwgmtnXKO7qrivRo05IVU7pIig%2FByrQeJBzatWenZE0f0rqfckNWQpOmdfkKzX1oImKCcHLo4tIKH%2FhSEIxUSeWxmcmLN3%2F7JUSJ596qohuvkIURAKqL5smjkpZOdC%2BLPILm1eolzi8eOMn5pA2Qohb%2F3ucHFWMbbpHalALPX9xf4d7Ujp7Bopx5uaghzxRsnaRwP2OYPSq09KxrRB7o4vasbnCx5PR52540QGDMHZFUsiA1bNLvdvnatG7Xh6nqpNMw0%2B7vzjAkAoT9xbs6J3%2Bh9cXCNHraJPdqfiYI8aXXN2Y2XjkKoqRLlhpLJmPTisGVcrhjW6m8zScoS%2BDHhsLaptjVk6MhRWSP1D%2BPCadUv9E5ptanjc3v4XeTuYwE1KTjyPlDTr7e3%2BgP7PSbiTnAj4PKiY%2BZrsXlsikPT51pbCRGalhIKd%2BT%2Bs1sMO3K7RHeHDByqYqhcvZRnPS42vm3X4vGttTzxH3nOouaaSNUwYibfUJJ%2Faqyb6HZF8KqWMmGigeT6T7gAsfpv53PeI4AH7z9Im%2BAZr%2BKNqXiBlZRf0L5n%2B7a5WW%2BNARSy8XuwJ99wwaH1b4KIFQogUtbNVP4ikI%2FKmIW0TMP3DkMIGOqUBdnZc0IqDWBM4bHVnL3GbMJE5hVoiy0GLgsyoHWmlJGBKyD1TT7uHeYlfLY77gEWEegjFNtFZRns5Za7IcejUg96IdeKA2ozk71xXIOAcuX3ZuJNHzW0oBRbZ8zUzW%2FU4Zd2RY63N1U9V%2B9r4AVpMnmnMurlc%2F5KPV1msVUgVSKJAsxTCSdPmz6s5TjWp%2FZpBxMj3wdJ7duOF42MmFi415t8Qcej7&X-Amz-Signature=bd08e43617e8fe535b016a67e0c19b65e388a13a83841b5ed76cdd9396635186&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDP56PG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXQkwjz7rBr94GMC53HaftGm4P0Eq0JUJyaaUHOkkH8AiEAjeFL1Q2Hrtufg7Z5lgJYVeUfTUxHkEcWnKcwFkxPlNoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWUZR71pnHZOr1ZfircA9zTwEs5NS5C6K%2Fv6bEmU1sVY2qwgmtnXKO7qrivRo05IVU7pIig%2FByrQeJBzatWenZE0f0rqfckNWQpOmdfkKzX1oImKCcHLo4tIKH%2FhSEIxUSeWxmcmLN3%2F7JUSJ596qohuvkIURAKqL5smjkpZOdC%2BLPILm1eolzi8eOMn5pA2Qohb%2F3ucHFWMbbpHalALPX9xf4d7Ujp7Bopx5uaghzxRsnaRwP2OYPSq09KxrRB7o4vasbnCx5PR52540QGDMHZFUsiA1bNLvdvnatG7Xh6nqpNMw0%2B7vzjAkAoT9xbs6J3%2Bh9cXCNHraJPdqfiYI8aXXN2Y2XjkKoqRLlhpLJmPTisGVcrhjW6m8zScoS%2BDHhsLaptjVk6MhRWSP1D%2BPCadUv9E5ptanjc3v4XeTuYwE1KTjyPlDTr7e3%2BgP7PSbiTnAj4PKiY%2BZrsXlsikPT51pbCRGalhIKd%2BT%2Bs1sMO3K7RHeHDByqYqhcvZRnPS42vm3X4vGttTzxH3nOouaaSNUwYibfUJJ%2Faqyb6HZF8KqWMmGigeT6T7gAsfpv53PeI4AH7z9Im%2BAZr%2BKNqXiBlZRf0L5n%2B7a5WW%2BNARSy8XuwJ99wwaH1b4KIFQogUtbNVP4ikI%2FKmIW0TMP3DkMIGOqUBdnZc0IqDWBM4bHVnL3GbMJE5hVoiy0GLgsyoHWmlJGBKyD1TT7uHeYlfLY77gEWEegjFNtFZRns5Za7IcejUg96IdeKA2ozk71xXIOAcuX3ZuJNHzW0oBRbZ8zUzW%2FU4Zd2RY63N1U9V%2B9r4AVpMnmnMurlc%2F5KPV1msVUgVSKJAsxTCSdPmz6s5TjWp%2FZpBxMj3wdJ7duOF42MmFi415t8Qcej7&X-Amz-Signature=644a08404f1d2effdd4626c658179e00ef04ec6782a0b7461326f308329b5889&X-Amz-SignedHeaders=host&x-id=GetObject)

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
