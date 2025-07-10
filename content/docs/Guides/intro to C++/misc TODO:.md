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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEG22UJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRjwqfp6IRNjk3pSZp%2BwJEduqBZ9f4YrjShR4a2WXPGAIgAPYdvMfpirH6qJYiW6zS6cnMaC2B8P7E9%2BzsNJj96kIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD5%2Bgme29jqOdWtUCrcAxUK1GsAJ6%2FephLDpec8%2FMXuqW6%2F3gHjPBS2F6T2mrOxLtyXSeQuQ04EQuaJfAKIdgvoCKVrPSoYAisz1iokqvvXJ4YlEIC0UC6C4QDs0JAgolL1o75hD58V5LnY2Cqn7Oq7RAjyIFKqcbMTlZclMr0QIDgV0ygwcdAG7s0NHw99s6wsTtO8AyvGddNPHluts9juR9n%2BLqPdVmkEf1cqLhPx0MGgTfx3jJBjTkLQOF6KiRTe2oeZbqGpPR0ioRkQr%2ByisLQozQHIWQRmIwOPSIphSFuYEEwJdAOgZEMzZc4Ag1vva15rh9O9gJ9QCC7PIPZ3ooG36j71V6xFyzr9OevZAExyEkczqf2IoT1Q0uz5OEDS9zWFJBH27Z39VewBGR9%2Fce%2B7u9%2FAoeujcdZPFJxrpfC21w9AF70z5kOTj4kFuh7ifbS5gPchryC94AY8BtSpeX4QMDUtCb5Ehvy1GUJIRLm7RGgR6qhtQUKN%2BTLQtrfvtinx%2FyajHUuD9k9wIFPGuPiGoBNzZqnnz0XTRiOy%2FXUR%2F%2FkZcXVd6iiFjkpCGFYEPBpxh2pDDPy3aF1pAvCMr7UEFz%2BoieibbQQ4Pjr4JkbmG2nnLXBE3hlYmGLr8H4kU6m9VaKLFyWfMMj%2FvMMGOqUBII7OzjdIOQkCaSADhKIK6O7Qp94zpZHbZmxUQmHeT61MQRmsIdt7ec6ot04xYY8Q%2BOLS6KQ%2BjuUjTXop7CETzrO0DF2gtCRX3faEAY3z4xuz1G5UfqSI0V3B0AbixAKtBcNWwvjBKOCKd0yvuuAn%2BsTZueWYUTxif9acBaOe9xUvX22BS3B7%2FI0%2FiwugRKcc8UscMFnbnpmoXfQb6eOVw5wRoZYH&X-Amz-Signature=6c3533adb9cb4e939fbd93d0e677c55ac83dabb9bd9e37093ab82e845cabac7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEG22UJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRjwqfp6IRNjk3pSZp%2BwJEduqBZ9f4YrjShR4a2WXPGAIgAPYdvMfpirH6qJYiW6zS6cnMaC2B8P7E9%2BzsNJj96kIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD5%2Bgme29jqOdWtUCrcAxUK1GsAJ6%2FephLDpec8%2FMXuqW6%2F3gHjPBS2F6T2mrOxLtyXSeQuQ04EQuaJfAKIdgvoCKVrPSoYAisz1iokqvvXJ4YlEIC0UC6C4QDs0JAgolL1o75hD58V5LnY2Cqn7Oq7RAjyIFKqcbMTlZclMr0QIDgV0ygwcdAG7s0NHw99s6wsTtO8AyvGddNPHluts9juR9n%2BLqPdVmkEf1cqLhPx0MGgTfx3jJBjTkLQOF6KiRTe2oeZbqGpPR0ioRkQr%2ByisLQozQHIWQRmIwOPSIphSFuYEEwJdAOgZEMzZc4Ag1vva15rh9O9gJ9QCC7PIPZ3ooG36j71V6xFyzr9OevZAExyEkczqf2IoT1Q0uz5OEDS9zWFJBH27Z39VewBGR9%2Fce%2B7u9%2FAoeujcdZPFJxrpfC21w9AF70z5kOTj4kFuh7ifbS5gPchryC94AY8BtSpeX4QMDUtCb5Ehvy1GUJIRLm7RGgR6qhtQUKN%2BTLQtrfvtinx%2FyajHUuD9k9wIFPGuPiGoBNzZqnnz0XTRiOy%2FXUR%2F%2FkZcXVd6iiFjkpCGFYEPBpxh2pDDPy3aF1pAvCMr7UEFz%2BoieibbQQ4Pjr4JkbmG2nnLXBE3hlYmGLr8H4kU6m9VaKLFyWfMMj%2FvMMGOqUBII7OzjdIOQkCaSADhKIK6O7Qp94zpZHbZmxUQmHeT61MQRmsIdt7ec6ot04xYY8Q%2BOLS6KQ%2BjuUjTXop7CETzrO0DF2gtCRX3faEAY3z4xuz1G5UfqSI0V3B0AbixAKtBcNWwvjBKOCKd0yvuuAn%2BsTZueWYUTxif9acBaOe9xUvX22BS3B7%2FI0%2FiwugRKcc8UscMFnbnpmoXfQb6eOVw5wRoZYH&X-Amz-Signature=9049936e183c3f56334ba32da09810d1a6386215bfba5b3d7d417cb642be36e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
