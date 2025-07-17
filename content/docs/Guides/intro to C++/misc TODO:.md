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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JASTVV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC9NfM6TOqG%2BD2qzVmhtMek%2BqlQGPXcPiUZD9O5Th3lRwIgabC2P8YLSuC8EKwDYZbUxx3aAX229EBo3kq6fRs2dRsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJVRjrpD4GE%2B2sq57ircA0%2FBaulxTpa3jHXjM2cBY6FbQ2zXD4Lv8wiROHnfTe8AoYKXHor8KuG0GHFw8azFO48b%2BqX7x2MfM2iUEA0I%2FeJ15%2BuhCGBO5vQs18Q8XAm9Lv%2BP7lZD3LGMlPZbRi5hD0H%2F%2B%2BRgV42qvQ%2FUvzohtSmXaGgtTGV0rmk2URV4gSNYDPApxVpgcNpirIGLJ%2B%2Fkhtzx7BkkWjtuHV5DkZPnz4GO0Bvp1OUP%2FgDmfhA3SsMhzGxkc7RHi85EIiOoBDig33iLMAnqfWvS55TQrrF5UL0gpbt83r01LUQdoaibEWjrXnwfEWIEHz3lhHrNasubkvqkCVzCOEIvRmOypyKhMwdHLZkRhvqZ5SG3wk4hg6RAt%2F7Z%2F1eHNziLqyilKpekRWHSTKLfyaEbocicbut1EUEBZMWSbvSqdxOaSua5me%2FccoOWf9mqOM4NQHlQ9UJL%2Bii03awljShBZlDnRtfZA%2B4f%2BvtYjWqMh0uKySPTQB%2Fv2%2BTeEfUQDJgxdfPtRejzUkK94g4jTf9z4yhJif4DNIfRh6YdnpwTb9ACyPmPv6jHfW%2BLTkeu00TaB%2FGHY1T%2B9i50BhfiGufmtLjlTLACzv%2FCWTwkFSmc6oNcEXilAhbZt%2FhPwkixtLi%2B8HzFMOSR48MGOqUBkHFprSxWQAxW%2F80eMsXVS0jEjAnfzo0BVm9rrAtHa5%2FPTVMpXpzXqX96oE1hLMnbf8QBuIZKFBIBQsZA1%2B68hGVpNvsMj3stA0wqyyi6HTt0R1kN%2F2mcjupMhsAvmB6sHIRdOmBcWeMHY1sYERs9DP6XI88J9LN1l4%2B4oNK5qfe0j786%2FHeecQqzxaz1KQxDYnkp5sITiGZNmZBVuq1KBdqca5LA&X-Amz-Signature=9d1155c3b0c4b524846b96bbd770708e9ef23c12a3d7a89a311ab5e15609e37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JASTVV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC9NfM6TOqG%2BD2qzVmhtMek%2BqlQGPXcPiUZD9O5Th3lRwIgabC2P8YLSuC8EKwDYZbUxx3aAX229EBo3kq6fRs2dRsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJVRjrpD4GE%2B2sq57ircA0%2FBaulxTpa3jHXjM2cBY6FbQ2zXD4Lv8wiROHnfTe8AoYKXHor8KuG0GHFw8azFO48b%2BqX7x2MfM2iUEA0I%2FeJ15%2BuhCGBO5vQs18Q8XAm9Lv%2BP7lZD3LGMlPZbRi5hD0H%2F%2B%2BRgV42qvQ%2FUvzohtSmXaGgtTGV0rmk2URV4gSNYDPApxVpgcNpirIGLJ%2B%2Fkhtzx7BkkWjtuHV5DkZPnz4GO0Bvp1OUP%2FgDmfhA3SsMhzGxkc7RHi85EIiOoBDig33iLMAnqfWvS55TQrrF5UL0gpbt83r01LUQdoaibEWjrXnwfEWIEHz3lhHrNasubkvqkCVzCOEIvRmOypyKhMwdHLZkRhvqZ5SG3wk4hg6RAt%2F7Z%2F1eHNziLqyilKpekRWHSTKLfyaEbocicbut1EUEBZMWSbvSqdxOaSua5me%2FccoOWf9mqOM4NQHlQ9UJL%2Bii03awljShBZlDnRtfZA%2B4f%2BvtYjWqMh0uKySPTQB%2Fv2%2BTeEfUQDJgxdfPtRejzUkK94g4jTf9z4yhJif4DNIfRh6YdnpwTb9ACyPmPv6jHfW%2BLTkeu00TaB%2FGHY1T%2B9i50BhfiGufmtLjlTLACzv%2FCWTwkFSmc6oNcEXilAhbZt%2FhPwkixtLi%2B8HzFMOSR48MGOqUBkHFprSxWQAxW%2F80eMsXVS0jEjAnfzo0BVm9rrAtHa5%2FPTVMpXpzXqX96oE1hLMnbf8QBuIZKFBIBQsZA1%2B68hGVpNvsMj3stA0wqyyi6HTt0R1kN%2F2mcjupMhsAvmB6sHIRdOmBcWeMHY1sYERs9DP6XI88J9LN1l4%2B4oNK5qfe0j786%2FHeecQqzxaz1KQxDYnkp5sITiGZNmZBVuq1KBdqca5LA&X-Amz-Signature=38aeaec0e19e25adaf48a638235ab9b14dcbeb8c8632912f7394d4f5a776fac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
