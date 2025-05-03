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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOMTV4W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFRuwtGhimWXkrP3A%2BLn06Vx6x9Zy3mHV9WK8mM6AVqdAiEA1EZYFxDvaVL8PqCEN8BynxXP1DqtepNDyFslQX%2FXUgIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpLdDKbxG1gxuZm5CrcA%2BlgBXAWH%2BlqpFFUQHoSjtAC8t1AfQVATS1IQRpuGRg9B%2Fv4ccVp1n7i2ZyOKbzpLORbweRUJIDVSRrsYZaMEUOlGPK5Wv2X2UzznkYMepCPJrkPWO0ioSbQVPOvM2A%2F1zidmktp9pK31bVlFquJMZFIVXztda%2BLMXuc%2FulB4%2FBw3YxLw148X0COuNptqMeqavPMKMCVw8mO0p6CFDMxIPtg%2BBgGp9tiulvUo9agVc9IC6I2ff2eAm3xqEeB68QRABApHRdEENqyp5vtEYVF8U%2B0Iu6wblM9vD0EZVaXKhItNeH5cBZ1rk9cL23nJbInpdCsk6pOsrWS%2BZQ%2BJS%2BudC9MSLljCE8fZAdxTtGs2dmQpahgrauEuFz%2Fma%2FZhjPJa%2BC43YC5UsuW6GHBV8j9ix2EUP3prpHtLR4EbVq1pUYHzL8mGw%2BmxwPh3I4vR4ngM76CIuHcf9NapFz%2BQb19gKZ02PwQHuigEVkytGH7lnJ7%2FL672OYNQ97mSdOf6Y0RPBpE2mIuyMchybMzuCEc1B1CQ7sKy%2FRT6Mvj04OFl%2BlHRfMRO%2BEGEjX9D%2FdOc5ObF8xUaZZHk2icSpnN556nyCiGF9xC0ASD7grYuh3kj2XUS0egytDT69b%2BlAzaMIiB2cAGOqUB12XreT%2F1s7hhL6LfKImgbHxnK1XRt6B8uPy0%2BD4rNFRe1NndtDi5LGBPu9AvHVB%2FZ78LSbino5hZi2azY%2BcQ%2Fzzbp5EUCuY6xjzx0eQwNRZ9jSv5e5ZWjVbiXQ3r1LgwyOxKMH0PZafiBEe2rZPFKG%2Bi1wlVnsWNcvx2M2prXvLSDx2wHJyUU0m65Ij2Z8FO%2Bqf8agyeOk6jRBheMxVOm3P3SZKg&X-Amz-Signature=58f3c7feaf85c55a47c955c6d8664e1a21f31ae6443aef904433901be6615f59&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOMTV4W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFRuwtGhimWXkrP3A%2BLn06Vx6x9Zy3mHV9WK8mM6AVqdAiEA1EZYFxDvaVL8PqCEN8BynxXP1DqtepNDyFslQX%2FXUgIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpLdDKbxG1gxuZm5CrcA%2BlgBXAWH%2BlqpFFUQHoSjtAC8t1AfQVATS1IQRpuGRg9B%2Fv4ccVp1n7i2ZyOKbzpLORbweRUJIDVSRrsYZaMEUOlGPK5Wv2X2UzznkYMepCPJrkPWO0ioSbQVPOvM2A%2F1zidmktp9pK31bVlFquJMZFIVXztda%2BLMXuc%2FulB4%2FBw3YxLw148X0COuNptqMeqavPMKMCVw8mO0p6CFDMxIPtg%2BBgGp9tiulvUo9agVc9IC6I2ff2eAm3xqEeB68QRABApHRdEENqyp5vtEYVF8U%2B0Iu6wblM9vD0EZVaXKhItNeH5cBZ1rk9cL23nJbInpdCsk6pOsrWS%2BZQ%2BJS%2BudC9MSLljCE8fZAdxTtGs2dmQpahgrauEuFz%2Fma%2FZhjPJa%2BC43YC5UsuW6GHBV8j9ix2EUP3prpHtLR4EbVq1pUYHzL8mGw%2BmxwPh3I4vR4ngM76CIuHcf9NapFz%2BQb19gKZ02PwQHuigEVkytGH7lnJ7%2FL672OYNQ97mSdOf6Y0RPBpE2mIuyMchybMzuCEc1B1CQ7sKy%2FRT6Mvj04OFl%2BlHRfMRO%2BEGEjX9D%2FdOc5ObF8xUaZZHk2icSpnN556nyCiGF9xC0ASD7grYuh3kj2XUS0egytDT69b%2BlAzaMIiB2cAGOqUB12XreT%2F1s7hhL6LfKImgbHxnK1XRt6B8uPy0%2BD4rNFRe1NndtDi5LGBPu9AvHVB%2FZ78LSbino5hZi2azY%2BcQ%2Fzzbp5EUCuY6xjzx0eQwNRZ9jSv5e5ZWjVbiXQ3r1LgwyOxKMH0PZafiBEe2rZPFKG%2Bi1wlVnsWNcvx2M2prXvLSDx2wHJyUU0m65Ij2Z8FO%2Bqf8agyeOk6jRBheMxVOm3P3SZKg&X-Amz-Signature=c00a0b7496e21bf8eceaa4c0e43f3ab8815af600f822453a8b924f6793853b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
