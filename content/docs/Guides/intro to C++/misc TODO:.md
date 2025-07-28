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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBZ6W4K%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIE8AsFOk55KjZCuPmKnP3fVvr617GgB8xOlO%2FXssurEwAiAq4qFd%2FENYy6idCnlosQCyIAiue3eMG%2F6BJjOS%2FbCLLCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6WwWS%2F%2BL5tr6a1EKtwDXXvNNTvFx%2FwALmCzxqHOWBhT0pUWLijag5i2uF1ihI8iqcWgF74FLsPXN0TP14KMFTOdGAhk39Q5RnFz3k6D2T0yLykVDLq%2FqFInv2X0l24Wgottr9%2Fs9wYr7dz2qYKxouRFSsaBlKQMZvC2Sfy%2F79NWfcmcLzvYqnHzEdo%2FOwH64n3rAcySKFsPhAMuLHCEdpjVZLugresr20oozFwd4zLfm7JoVs3U7NZfIhW6OCZRg%2FeQt0dWdi443jjcq8haKOZ1ioGgoVbGWCvLvRSC8h0DToFaENw9urQUgBnoDyXguKoSL8KkRJdRpmiciy4X3Ua6gAAVxHWaH%2F88QSLmWyV2FAGTjQZk1%2BQ%2BUURUe%2BDZ%2F%2Bm5eWSsreWlBTi9%2BnJ0Bf%2F02i4Jo0cYD0jnbhxvhmHfQMlEpS2MoS9WKX2l9mSn9otR0ScjSBNU2XUoG%2B4BHDtdXMTVSjTjW3fLs7gXjLH38%2BoN589tgDffRuVLmg7Q8%2Bz6uNVKC8CL%2F5hrbmhhy3Mpx%2BwjUCzq2Z5EBvSX27bTY0WzXRc3N0aOF%2FtpeqmCEEMHwf4Hqfq88jwP07bXZK%2BKrJbuFB6xwyrpCRXRCn97NiIN944wJcx5bTrUmDGJeQV%2F1sCKJFofUn0w%2BYqfxAY6pgHzvOoxPk4z9zdb9T0ZwVznB0zrFrWrBAT66EuRNiNpTwDZEKotiWkrMBIf0dwp4qZc7WY3qQDtOkDhJY%2BhiZpe1YT2mzyhiiUyoNTk0eU8Cnk8r2ItsDsU74pen4Qge15zQlTQxuwuQWZmqj0ecyKnqRhm%2Fdt3Eo6M8BzmeIafeRBq9ng7%2B5ETQuEnwCu1GAbz%2BmoSnxJPHtZOGG5KdvfS20BeCivt&X-Amz-Signature=78e572fbd70d50beeeb256d5ca435801799484789c06ad7887759af23e97804b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBZ6W4K%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIE8AsFOk55KjZCuPmKnP3fVvr617GgB8xOlO%2FXssurEwAiAq4qFd%2FENYy6idCnlosQCyIAiue3eMG%2F6BJjOS%2FbCLLCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6WwWS%2F%2BL5tr6a1EKtwDXXvNNTvFx%2FwALmCzxqHOWBhT0pUWLijag5i2uF1ihI8iqcWgF74FLsPXN0TP14KMFTOdGAhk39Q5RnFz3k6D2T0yLykVDLq%2FqFInv2X0l24Wgottr9%2Fs9wYr7dz2qYKxouRFSsaBlKQMZvC2Sfy%2F79NWfcmcLzvYqnHzEdo%2FOwH64n3rAcySKFsPhAMuLHCEdpjVZLugresr20oozFwd4zLfm7JoVs3U7NZfIhW6OCZRg%2FeQt0dWdi443jjcq8haKOZ1ioGgoVbGWCvLvRSC8h0DToFaENw9urQUgBnoDyXguKoSL8KkRJdRpmiciy4X3Ua6gAAVxHWaH%2F88QSLmWyV2FAGTjQZk1%2BQ%2BUURUe%2BDZ%2F%2Bm5eWSsreWlBTi9%2BnJ0Bf%2F02i4Jo0cYD0jnbhxvhmHfQMlEpS2MoS9WKX2l9mSn9otR0ScjSBNU2XUoG%2B4BHDtdXMTVSjTjW3fLs7gXjLH38%2BoN589tgDffRuVLmg7Q8%2Bz6uNVKC8CL%2F5hrbmhhy3Mpx%2BwjUCzq2Z5EBvSX27bTY0WzXRc3N0aOF%2FtpeqmCEEMHwf4Hqfq88jwP07bXZK%2BKrJbuFB6xwyrpCRXRCn97NiIN944wJcx5bTrUmDGJeQV%2F1sCKJFofUn0w%2BYqfxAY6pgHzvOoxPk4z9zdb9T0ZwVznB0zrFrWrBAT66EuRNiNpTwDZEKotiWkrMBIf0dwp4qZc7WY3qQDtOkDhJY%2BhiZpe1YT2mzyhiiUyoNTk0eU8Cnk8r2ItsDsU74pen4Qge15zQlTQxuwuQWZmqj0ecyKnqRhm%2Fdt3Eo6M8BzmeIafeRBq9ng7%2B5ETQuEnwCu1GAbz%2BmoSnxJPHtZOGG5KdvfS20BeCivt&X-Amz-Signature=9dc2ad0ba88240c5fb1cf371c05fbb405060fdbfb59fa509fa54aedbae64a780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
