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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635V2OZAD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIExqAo%2FrbKc5vzUr4rGGUOjfpfZ5IJfu9UO%2FT3w%2B0cZQAiBS1EmDsSUGuhgePgGuyApvudpep7pQdg7diEFSqAf%2FHSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM6A0b0oHEuGfQCNLXKtwDGdvTKV4H0lPZBCoH%2B4iJMGo7vZeqhONo2seYquF3%2FdmF1lqARlid8GI%2Fd0BFDxw00CjPjnwrgOLQzBt5%2BkoC8p9vzCcsFk5XuzsSpcKsoUUfsNcW8pqobgVOXVXgNTLwzWFeKOr8uqWxkm8pc%2FxuzjEmXGg%2B%2F1NbAhK3f8Vn%2Bhh6jVIZv7nmaPX83CldaMAyOuG2TKE7tGgeIqFCii47A9tXCozrxPh5soNKzMEiAavUe45XrXBbdPTm4Dwx7tPbemeWPAMNTJsZYM4LPCyKeyVJ%2F1%2Be5XHLGSUVIe2iqp%2BlCNnIeLpunEtP9CtmDNFm%2FBrqYuUvNaih8X6Rs5k7XKxSLyRx0G6Gmmc0hp7oUYkYBlBx9RR4xi6XSC2ZwoT2NdVxEMBM84h8RgYMSEDQDIslMpEBPHvT8LqSLRCmQjl%2FkSps1twGv%2B5f7%2FJCiP6C1N49tCTxXEqvHwpvkrnkoFNU2npwrczoehaDp2Fp9CA%2BugkLvrDXmZdTm%2BEEphnwSSAhSumyJygsZscwLcpK1KhBRnJbk8cQI5Hqvx7cFhZYvx9M7GV9kjcGZiNPkQi4C8NLvBW79FFXEyaLfqOH8P7XuOGRgm7MdMzolakFHrOzq4oGNKzdG5HYfJ4w4KrFvQY6pgFYtszz0uImmf5z4MqE5COEZPAgomIQxkwvR6s37wFdGIGVAPeGelmkvSW7qMLgUyqZkC0Dtj6TPBmsXvVSm8w4qoIgoX%2FnYngSN5t%2B1dvzT9pT1r8pCutmTVDI6hSKs1e0ByKW%2FEHkIRe5cs3OjsSmy1Oc%2FPdtMdm1stEinoXIdrwtDNJZVglD%2FExyyyVOmyFDmRRqkoVb9S056dTh2jCGXgfQR3Yh&X-Amz-Signature=80c70e4d311a933a317ceb2dc8e473980f93170a00649d11bfc9ae4b80b1001b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635V2OZAD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIExqAo%2FrbKc5vzUr4rGGUOjfpfZ5IJfu9UO%2FT3w%2B0cZQAiBS1EmDsSUGuhgePgGuyApvudpep7pQdg7diEFSqAf%2FHSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM6A0b0oHEuGfQCNLXKtwDGdvTKV4H0lPZBCoH%2B4iJMGo7vZeqhONo2seYquF3%2FdmF1lqARlid8GI%2Fd0BFDxw00CjPjnwrgOLQzBt5%2BkoC8p9vzCcsFk5XuzsSpcKsoUUfsNcW8pqobgVOXVXgNTLwzWFeKOr8uqWxkm8pc%2FxuzjEmXGg%2B%2F1NbAhK3f8Vn%2Bhh6jVIZv7nmaPX83CldaMAyOuG2TKE7tGgeIqFCii47A9tXCozrxPh5soNKzMEiAavUe45XrXBbdPTm4Dwx7tPbemeWPAMNTJsZYM4LPCyKeyVJ%2F1%2Be5XHLGSUVIe2iqp%2BlCNnIeLpunEtP9CtmDNFm%2FBrqYuUvNaih8X6Rs5k7XKxSLyRx0G6Gmmc0hp7oUYkYBlBx9RR4xi6XSC2ZwoT2NdVxEMBM84h8RgYMSEDQDIslMpEBPHvT8LqSLRCmQjl%2FkSps1twGv%2B5f7%2FJCiP6C1N49tCTxXEqvHwpvkrnkoFNU2npwrczoehaDp2Fp9CA%2BugkLvrDXmZdTm%2BEEphnwSSAhSumyJygsZscwLcpK1KhBRnJbk8cQI5Hqvx7cFhZYvx9M7GV9kjcGZiNPkQi4C8NLvBW79FFXEyaLfqOH8P7XuOGRgm7MdMzolakFHrOzq4oGNKzdG5HYfJ4w4KrFvQY6pgFYtszz0uImmf5z4MqE5COEZPAgomIQxkwvR6s37wFdGIGVAPeGelmkvSW7qMLgUyqZkC0Dtj6TPBmsXvVSm8w4qoIgoX%2FnYngSN5t%2B1dvzT9pT1r8pCutmTVDI6hSKs1e0ByKW%2FEHkIRe5cs3OjsSmy1Oc%2FPdtMdm1stEinoXIdrwtDNJZVglD%2FExyyyVOmyFDmRRqkoVb9S056dTh2jCGXgfQR3Yh&X-Amz-Signature=81c3973a2a054bb93a5069872a221c1786befe4c605485d9c28d1a0a9ba87696&X-Amz-SignedHeaders=host&x-id=GetObject)

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
