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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUK24IP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCZUQ4E8Q9%2FIegGP1C66YWn5QryfHETGui5YRtOmvHWHgIgMx9N%2FxR2r11Pb3dVafeTEZmxb0UnUY3Lv742FbL6JzQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBBzcXw3puc%2FzaFmqSrcA5DEMlfnxH46JdcuelJLQrxVrTEsqHiIQLUw5DqKVUE4BzxZ9Q56tKiBBnRiMxj3sUDiWQkq5V7mKkbAlCKQNG00w8j6cMNhcZkYtdvtLGixcmEkYMtHCNQRtAGgz5wB3xMjUlMUoIGKuYN%2F%2BbjPwAwX%2BjajI3tc9fWQmTEfdiS7D26IBzRwwPDYBk5sspRxw1WbOnywDMrQ54KryFRafifJLoKsS8I1nIC%2B6GoQw5PKzOMP6a4To%2FrKOa%2FNA9QEkafBGwfucbhDw75Y2uZ%2BAvdTbdQbsocljPDiNn61d0CZk66vUOml%2FvJ2W3gxVu25qH7CO97mT2lkYjm96HynLmi6aKX7rCDOXCAdWKTD3kQLQZLu%2BsNrbc1X%2FQrBsQCb1rZbfM516x%2Fxb0u9zQURh31PvzVxU2ZWR%2F4%2FiE7qEcjOl2YEUYQ11S1mecMjrfze5s8aM2WGOsJrWJ192C3Xp81SPQf2JZFIDoQDlCXJCMsf42HARWGjU0C5FTwFKkPaxKsBzNFkEp5UOcxAXQtzNcGqVNnNe06t4zonBgA13LPW8hY%2B%2BT%2BojmLAOljL2CCDsVU9QbdjuhABUob%2B1nAucrtPl%2F3c5VG1vJWPlrXUfTbfbKPx8idP%2BwsmJQZmMJXItL4GOqUBOlg8TVJc3KZA8RFxYlauZG1wrKulUe7VkKO4tBJ8YiQwjnD%2FyvZKN32NHJZeikijX1R00TqCXBN4ihlQjIU9K9nvZqRYjzZ%2FMkhXWQ4jFJB9wrQhYqACtSbCvPFmCEBynDFRWN37HB44kBa8PnZMXgUrEIRDfRiaVpcR0PcMfIRhbTK%2FstERaVbz7Z21W%2FA8ufDz%2B%2FK7DEYJrO%2B7PmjnlHrObwws&X-Amz-Signature=f9b8d53ed66c030396c49bece0f400511213dfb790557c359743bc9770b043af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUK24IP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCZUQ4E8Q9%2FIegGP1C66YWn5QryfHETGui5YRtOmvHWHgIgMx9N%2FxR2r11Pb3dVafeTEZmxb0UnUY3Lv742FbL6JzQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBBzcXw3puc%2FzaFmqSrcA5DEMlfnxH46JdcuelJLQrxVrTEsqHiIQLUw5DqKVUE4BzxZ9Q56tKiBBnRiMxj3sUDiWQkq5V7mKkbAlCKQNG00w8j6cMNhcZkYtdvtLGixcmEkYMtHCNQRtAGgz5wB3xMjUlMUoIGKuYN%2F%2BbjPwAwX%2BjajI3tc9fWQmTEfdiS7D26IBzRwwPDYBk5sspRxw1WbOnywDMrQ54KryFRafifJLoKsS8I1nIC%2B6GoQw5PKzOMP6a4To%2FrKOa%2FNA9QEkafBGwfucbhDw75Y2uZ%2BAvdTbdQbsocljPDiNn61d0CZk66vUOml%2FvJ2W3gxVu25qH7CO97mT2lkYjm96HynLmi6aKX7rCDOXCAdWKTD3kQLQZLu%2BsNrbc1X%2FQrBsQCb1rZbfM516x%2Fxb0u9zQURh31PvzVxU2ZWR%2F4%2FiE7qEcjOl2YEUYQ11S1mecMjrfze5s8aM2WGOsJrWJ192C3Xp81SPQf2JZFIDoQDlCXJCMsf42HARWGjU0C5FTwFKkPaxKsBzNFkEp5UOcxAXQtzNcGqVNnNe06t4zonBgA13LPW8hY%2B%2BT%2BojmLAOljL2CCDsVU9QbdjuhABUob%2B1nAucrtPl%2F3c5VG1vJWPlrXUfTbfbKPx8idP%2BwsmJQZmMJXItL4GOqUBOlg8TVJc3KZA8RFxYlauZG1wrKulUe7VkKO4tBJ8YiQwjnD%2FyvZKN32NHJZeikijX1R00TqCXBN4ihlQjIU9K9nvZqRYjzZ%2FMkhXWQ4jFJB9wrQhYqACtSbCvPFmCEBynDFRWN37HB44kBa8PnZMXgUrEIRDfRiaVpcR0PcMfIRhbTK%2FstERaVbz7Z21W%2FA8ufDz%2B%2FK7DEYJrO%2B7PmjnlHrObwws&X-Amz-Signature=18ec8d409eb80252d550832a873f83c70e6d6d22c2828f4ea82931d20b6181e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
