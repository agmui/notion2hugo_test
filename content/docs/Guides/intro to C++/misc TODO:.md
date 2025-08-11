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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADZGSG4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgjWQbdMIqKB2OXDJtsodsMoxxYq5M9QCW2VGahLwkFwIhAIUA%2BFTOMPgnxJ23r6QLq9ZBW6YtEKQgtLpc5TiOWm%2FyKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb0peJetW8WHVrg70q3AOCwF%2F%2FFszaUROBVC8xHLl0OHSXhKvcF3o4dPY%2B3gCtX%2FTLd%2BtgizjqxLn%2BF3E%2BGVR%2BqO1vmDJWQXHEt%2BkY2gGMsg7y7YSIA5Jn81bvSgLzWYIaClT7zvQZduz99aTfFUhY4sTDsMDPWdVMqtPORAZnrIkio3g%2FvqdiIZZbEoz1w%2B%2BSiAySIP7LA2%2B1KLVjdAta3tH5M0NS%2F7JpfGRxJLOrw6pH6Wx3GF2HDSpsi4RQgmt5mV31jwl%2F53920lZ5H3CD1bVJfDdDW5iNL6Yr4gOo3WDXIOB2LdU7L694StU2PMq0t6nHsY%2Bk6b%2FJkpjDyuZNutjoXwAU406RwHqIFxZAJVKHzYi9AkEAO2ASxbaBYdOEKcIw7MDZZ5dzjBbpqaJjtl%2FyH2BbT63%2Bl18fLWke1VwyUbdWul52tBsbEnAb2hA1TlBndTLwMqgzsUsY2HI%2FQz%2BF%2BdFn9ZTLx40U5LbdIdZimHkymTvOsJQAuYPUunAP8TbLaxq3LA5w1SG1WewNxYz2nyQHiknKpajSPDyG2tqsI7JlAVWnL82PcLKh%2FFEVzVRNTzFVZtAQ4wyMCAvliLmh7K3mIsGQR0%2BIbyMN%2BsDKOxxTP5bR1tHdi4dWjKz5hOQNqccTK8bQaDD4qubEBjqkAdDr5BBKoG9N5qCnunq%2FWQ8spVYC1qTYssrtaiG6pY2uxsNbRirbpNAc9UyehtVvvBt%2BzO8aX7AvqY%2BttcFSng51dudUvYHpQcswEw7iBTpM3HA1ZiHMZdb78Q3C7jkLXQdjqkq99PnULT%2Bjnwp0OzotD6FjG0FKmuKFtuHxmd3omAjgdHtsrhUpnKU2v%2FnSoqnr%2FUMItf9JtSvaXaMxPtaqK10K&X-Amz-Signature=3b60b847c96c39133dac10f4f575f7d9471b663879cf03a388aa06d649c2e099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADZGSG4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgjWQbdMIqKB2OXDJtsodsMoxxYq5M9QCW2VGahLwkFwIhAIUA%2BFTOMPgnxJ23r6QLq9ZBW6YtEKQgtLpc5TiOWm%2FyKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb0peJetW8WHVrg70q3AOCwF%2F%2FFszaUROBVC8xHLl0OHSXhKvcF3o4dPY%2B3gCtX%2FTLd%2BtgizjqxLn%2BF3E%2BGVR%2BqO1vmDJWQXHEt%2BkY2gGMsg7y7YSIA5Jn81bvSgLzWYIaClT7zvQZduz99aTfFUhY4sTDsMDPWdVMqtPORAZnrIkio3g%2FvqdiIZZbEoz1w%2B%2BSiAySIP7LA2%2B1KLVjdAta3tH5M0NS%2F7JpfGRxJLOrw6pH6Wx3GF2HDSpsi4RQgmt5mV31jwl%2F53920lZ5H3CD1bVJfDdDW5iNL6Yr4gOo3WDXIOB2LdU7L694StU2PMq0t6nHsY%2Bk6b%2FJkpjDyuZNutjoXwAU406RwHqIFxZAJVKHzYi9AkEAO2ASxbaBYdOEKcIw7MDZZ5dzjBbpqaJjtl%2FyH2BbT63%2Bl18fLWke1VwyUbdWul52tBsbEnAb2hA1TlBndTLwMqgzsUsY2HI%2FQz%2BF%2BdFn9ZTLx40U5LbdIdZimHkymTvOsJQAuYPUunAP8TbLaxq3LA5w1SG1WewNxYz2nyQHiknKpajSPDyG2tqsI7JlAVWnL82PcLKh%2FFEVzVRNTzFVZtAQ4wyMCAvliLmh7K3mIsGQR0%2BIbyMN%2BsDKOxxTP5bR1tHdi4dWjKz5hOQNqccTK8bQaDD4qubEBjqkAdDr5BBKoG9N5qCnunq%2FWQ8spVYC1qTYssrtaiG6pY2uxsNbRirbpNAc9UyehtVvvBt%2BzO8aX7AvqY%2BttcFSng51dudUvYHpQcswEw7iBTpM3HA1ZiHMZdb78Q3C7jkLXQdjqkq99PnULT%2Bjnwp0OzotD6FjG0FKmuKFtuHxmd3omAjgdHtsrhUpnKU2v%2FnSoqnr%2FUMItf9JtSvaXaMxPtaqK10K&X-Amz-Signature=4c42405480f14307d65db237aec5827f9711ded8bb46d1d99b2e539046a45369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
