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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCXBHP4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCl9%2FYXfbEyF0UM5lgnNTxHJCLRShc60wj%2FO4EB9vCTsgIhAImb8GLE9rBKCiRhROrqJagCh%2FJ3dqlU5SdFVF4lgzBXKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPMWcl0c2i8A6UA2Uq3AMJJxbCneGIAEGGMuuBgXvRTmBl%2F3tlFcqbKiTODf1I%2BPki5g0X7S5SG%2BJcTd0vhUz2i2OEgP78jmhwq5VRZnPMzeXLX6qMdTf%2BwaJjCnjNEPpuZ3qoBP9DgKDyef%2F%2BFqHr27N%2BYg1WB2LFBvV7pI%2BKkUDezAxkl2r1zbL3QFvsgt%2FF%2B%2FkSEOItTRww8pgLuLinqh8rphYPf9qFGj08n5lJ1pvim3YjzfZUv17zwQCeJ12TzLNynEBh6htcj%2B2D2HLTHnQmtXtCk3%2Bj2xsRAqDZlLXKJcyCfZT6ozroecvO8l7K2cF9otyApZ9d%2BudQ2KoTLuEoCEIcBuDlygu2caH3aCvj%2FimX0v0VFnslqc4fuAYPrES6dDdZscFRc1tpSB1FlBhZDyfYYA4gFkq0W3YNT%2FQkzNqdq11gzJv3E8asTKf4EewtPKDzPJkA3dzwEGTulwM7CMMvuWzfB2T%2BnG0tmuFAgDibYlqwEHj0KOZriDZWZgdLF9bWRIS2rD2SQkqLH9gGDkADMuAFvUddgUFDfyVbmcZ8ZqvpzJlQBNpViaSNC1G7eo5czB7ynjBIOrHZLVMzIiVsjbxpaWSXSd%2BVlWEUS9YAQDHs8MV7Fr9J4NSiX%2F8uDuSSOnfzGTCxqPK%2BBjqkAYly3%2BBd5w8COgxv%2B9WptJnqRcAJXmMGdfmEA0SvJ4B3BfZFOL0EMf7OL33wALZT%2Ff0Te%2FvliZ6EEGN3N2B%2B%2Fd9vPHmJiyA840l18IpkrXBZ0kcJI5%2B7yX%2F9OQ88GXbNjMq8vYgx6kn%2FtYaZNtC6pnPU9tlPFKl6qN%2Bo8zkSXiS2F%2BXtzbwYgFnVAINuuCKtr3iLPF170c6Drnjf3QZSsE8xCdEP&X-Amz-Signature=290120fee5744aa7deaa72e2d48c025e3a54f0da25f6219b79dde8cf7e2adfe6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCXBHP4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCl9%2FYXfbEyF0UM5lgnNTxHJCLRShc60wj%2FO4EB9vCTsgIhAImb8GLE9rBKCiRhROrqJagCh%2FJ3dqlU5SdFVF4lgzBXKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPMWcl0c2i8A6UA2Uq3AMJJxbCneGIAEGGMuuBgXvRTmBl%2F3tlFcqbKiTODf1I%2BPki5g0X7S5SG%2BJcTd0vhUz2i2OEgP78jmhwq5VRZnPMzeXLX6qMdTf%2BwaJjCnjNEPpuZ3qoBP9DgKDyef%2F%2BFqHr27N%2BYg1WB2LFBvV7pI%2BKkUDezAxkl2r1zbL3QFvsgt%2FF%2B%2FkSEOItTRww8pgLuLinqh8rphYPf9qFGj08n5lJ1pvim3YjzfZUv17zwQCeJ12TzLNynEBh6htcj%2B2D2HLTHnQmtXtCk3%2Bj2xsRAqDZlLXKJcyCfZT6ozroecvO8l7K2cF9otyApZ9d%2BudQ2KoTLuEoCEIcBuDlygu2caH3aCvj%2FimX0v0VFnslqc4fuAYPrES6dDdZscFRc1tpSB1FlBhZDyfYYA4gFkq0W3YNT%2FQkzNqdq11gzJv3E8asTKf4EewtPKDzPJkA3dzwEGTulwM7CMMvuWzfB2T%2BnG0tmuFAgDibYlqwEHj0KOZriDZWZgdLF9bWRIS2rD2SQkqLH9gGDkADMuAFvUddgUFDfyVbmcZ8ZqvpzJlQBNpViaSNC1G7eo5czB7ynjBIOrHZLVMzIiVsjbxpaWSXSd%2BVlWEUS9YAQDHs8MV7Fr9J4NSiX%2F8uDuSSOnfzGTCxqPK%2BBjqkAYly3%2BBd5w8COgxv%2B9WptJnqRcAJXmMGdfmEA0SvJ4B3BfZFOL0EMf7OL33wALZT%2Ff0Te%2FvliZ6EEGN3N2B%2B%2Fd9vPHmJiyA840l18IpkrXBZ0kcJI5%2B7yX%2F9OQ88GXbNjMq8vYgx6kn%2FtYaZNtC6pnPU9tlPFKl6qN%2Bo8zkSXiS2F%2BXtzbwYgFnVAINuuCKtr3iLPF170c6Drnjf3QZSsE8xCdEP&X-Amz-Signature=66f1d1fce0dee837a1eaff9ce73dec031d44541133857c7bfa97dd496352f8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
