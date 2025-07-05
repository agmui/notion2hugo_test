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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTHQ5AY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFGD2hWokFkuarYyT2xwbyEv4rHNv2jHEQ5Hzlu2C1%2BxAiEA94Ryr5rOpAqTnMmU2u28OtlGLLp5sR%2BCEVse9T%2BbZkIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIrO8gMyPHcA5oTpYircAz4qtmFPxy1CJ3Bku2n6gTiBPCzH2sImPUKbnu6WiEoAikPN2d8jL0%2BagtfwpfehDJJqDcNNedjSCHmQZIrJi6qIl8H%2F3IBCu5EATb4n3a%2FH1PWlgupLdUwVLdPmAbwn3wVinABXImEF0jj2qJBGMXARDkfqsNFzo6RfjYBiQTmPB0Os%2BFe4ueJ%2BJpa2ubANuCgBzhsBPxb6KNeZHtxG0HRC%2BTa%2FvWB%2B6WC5qSmdGqtEazP5tKmHWCEqDAV3UpZoGAgzfKDAoxBfvVUsozppp4Cqe%2FBKvbWLBwDit3b99Sz9%2BF3FBjRyG0SWPMBa0IbuSfyvE4Oyqjp%2B3V2SC6E08xAeZHIYTaMDhSawGSgWnXaykNjYe3bw8qA48MQR76EjOlrVlQBjhF4mFxhswEFXJtZlrjflkL4EL%2BKtTxEpWSV656K50BRcOEmUyXxi7lXK%2FB70acIi51deh9njKeL%2BSCR0IMbSgLTPkUwd7cIxxuNSxqDCHPkNuSGWvIbpOuyZUELSgtvOqJKPdyCyNETDu%2BtWa3CeTUnjPYWIfmE1ArnpJRTzOGsXu02JA7zBzMBG2Wp9OIyhHeRkPRc4imrSkOrWFd%2B1R2uPxFVwtejGjSM0ouxf83tkN3KcZi%2FEMOaio8MGOqUBS%2FJkjh54%2BsEVLEipNDYYCQ2ujaj9e0jNr%2BLbXITku2IEA2r%2B7FaVde0Dot9ASFVlz4FbjZprJE71%2FvlDJR8IHBXyLVxGPg1jkkhQZQj47QTbYl5cPC69HG1O%2BJMBDRmkCIqjSC2Dfp9lnmUe81rH9D8oeyRGXkg%2B520TllwDSXr4G5d1yhSxUX1cA%2FrVgqkW69eDUcWyUZMIbhNF1YWxzMute6qR&X-Amz-Signature=1b55eb16b29d3e20ef33e4261f55c90a4c93f2b468d12d60089e2ae123b7bf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTHQ5AY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFGD2hWokFkuarYyT2xwbyEv4rHNv2jHEQ5Hzlu2C1%2BxAiEA94Ryr5rOpAqTnMmU2u28OtlGLLp5sR%2BCEVse9T%2BbZkIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIrO8gMyPHcA5oTpYircAz4qtmFPxy1CJ3Bku2n6gTiBPCzH2sImPUKbnu6WiEoAikPN2d8jL0%2BagtfwpfehDJJqDcNNedjSCHmQZIrJi6qIl8H%2F3IBCu5EATb4n3a%2FH1PWlgupLdUwVLdPmAbwn3wVinABXImEF0jj2qJBGMXARDkfqsNFzo6RfjYBiQTmPB0Os%2BFe4ueJ%2BJpa2ubANuCgBzhsBPxb6KNeZHtxG0HRC%2BTa%2FvWB%2B6WC5qSmdGqtEazP5tKmHWCEqDAV3UpZoGAgzfKDAoxBfvVUsozppp4Cqe%2FBKvbWLBwDit3b99Sz9%2BF3FBjRyG0SWPMBa0IbuSfyvE4Oyqjp%2B3V2SC6E08xAeZHIYTaMDhSawGSgWnXaykNjYe3bw8qA48MQR76EjOlrVlQBjhF4mFxhswEFXJtZlrjflkL4EL%2BKtTxEpWSV656K50BRcOEmUyXxi7lXK%2FB70acIi51deh9njKeL%2BSCR0IMbSgLTPkUwd7cIxxuNSxqDCHPkNuSGWvIbpOuyZUELSgtvOqJKPdyCyNETDu%2BtWa3CeTUnjPYWIfmE1ArnpJRTzOGsXu02JA7zBzMBG2Wp9OIyhHeRkPRc4imrSkOrWFd%2B1R2uPxFVwtejGjSM0ouxf83tkN3KcZi%2FEMOaio8MGOqUBS%2FJkjh54%2BsEVLEipNDYYCQ2ujaj9e0jNr%2BLbXITku2IEA2r%2B7FaVde0Dot9ASFVlz4FbjZprJE71%2FvlDJR8IHBXyLVxGPg1jkkhQZQj47QTbYl5cPC69HG1O%2BJMBDRmkCIqjSC2Dfp9lnmUe81rH9D8oeyRGXkg%2B520TllwDSXr4G5d1yhSxUX1cA%2FrVgqkW69eDUcWyUZMIbhNF1YWxzMute6qR&X-Amz-Signature=c1428fdfaf1f19b14becc62bf8a853203212b549ca1d555825411dec9f916c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
