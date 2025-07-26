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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653X6Y324%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICM4c7F8ltpnoY1Ptb40StxowXJ2g6PlF4spMsQ3Eq9NAiEArOIw5wZ6jUamCRt6buz2Y7PbxPVUkBjvb1wdqP4nQCMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFZYjzHXj09MPGkqLircAxYOJ8RZPpaFbtZopPCPUcbSzrFDhhiPooHgI6mKZp4yrFtVcz3uKmq2rVQkQIbb7l5YZ6S1TZoiAS1p%2Fr6gCNGz3yVeJaqdYdRg5REkUBfH6LsDQTvK30FZtPR5Tbe45YPKsUGWFqc1fKwKhgiX%2BREoZRwcYPG%2BXV9nMuMtV7JKIxwq4LDBAWuBLza6WD1ORSdGLYni7LPnaQz9aRQcPj1yRer60imfIb0f%2BdhryoPmjzibv4VCMQNjHgpXYgKcksA0qUxfzfuxI%2BANIihdcl4SU%2BN3kOL5eO5MWjrLvFRwwYH2FWftYnxwWPEPy%2B5f7R09wydV7Vhe6DNShOmySCaEYX2LkYlD%2BkIGM9vL9fyG5zFm%2FaGSQbnhVzS8PhnUFFPYXDEvT4eoGElrdSg%2Ft9v%2BPhMLjyENFNYAowTVjNatx%2FLKxnyCkKEkh4QwdV2nM8KwJtVu1wxoYtfIOwzQmZUqeFTDwwRC7KWHy90a%2Bo%2FVt29fCG0tCi3At6ShSbidTREJfz5azMvW1ustVmJ5S%2B3PwJibeXAtfzs0gIedHDDjX%2Fgr%2BASqB8Iit1LU6Z%2FtwzgbXgGMur1SkBbh%2FfJnMYMDxoAVad1%2BE5%2FThhW3ujDGAfDbQEIcgeS01dTXMMD%2FlMQGOqUBUhjW4EBOdpf7jUh2W0X5tibpjBNnJcXbDqZAhXrFqBcTQW9zCmE0w5exmW1puazQ4ut8NYZoblcfbc6tTMgVkTL3aEGliYeZ9CbOL75Ph1MS2cRqO9lLOjjsrFpcwNv2EEepl5JQLYi6Xwu3kF%2B6%2BuYhYbyTGD8jGTxog3I76H4cDsMptTUUbsoRZIh4Ds5l7OFdJBMl3w1mUpZdHLojOge065RX&X-Amz-Signature=10fabce35ac6407de283c895b9a3a4aa20c1617071534b07cb36d067f5399c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653X6Y324%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICM4c7F8ltpnoY1Ptb40StxowXJ2g6PlF4spMsQ3Eq9NAiEArOIw5wZ6jUamCRt6buz2Y7PbxPVUkBjvb1wdqP4nQCMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFZYjzHXj09MPGkqLircAxYOJ8RZPpaFbtZopPCPUcbSzrFDhhiPooHgI6mKZp4yrFtVcz3uKmq2rVQkQIbb7l5YZ6S1TZoiAS1p%2Fr6gCNGz3yVeJaqdYdRg5REkUBfH6LsDQTvK30FZtPR5Tbe45YPKsUGWFqc1fKwKhgiX%2BREoZRwcYPG%2BXV9nMuMtV7JKIxwq4LDBAWuBLza6WD1ORSdGLYni7LPnaQz9aRQcPj1yRer60imfIb0f%2BdhryoPmjzibv4VCMQNjHgpXYgKcksA0qUxfzfuxI%2BANIihdcl4SU%2BN3kOL5eO5MWjrLvFRwwYH2FWftYnxwWPEPy%2B5f7R09wydV7Vhe6DNShOmySCaEYX2LkYlD%2BkIGM9vL9fyG5zFm%2FaGSQbnhVzS8PhnUFFPYXDEvT4eoGElrdSg%2Ft9v%2BPhMLjyENFNYAowTVjNatx%2FLKxnyCkKEkh4QwdV2nM8KwJtVu1wxoYtfIOwzQmZUqeFTDwwRC7KWHy90a%2Bo%2FVt29fCG0tCi3At6ShSbidTREJfz5azMvW1ustVmJ5S%2B3PwJibeXAtfzs0gIedHDDjX%2Fgr%2BASqB8Iit1LU6Z%2FtwzgbXgGMur1SkBbh%2FfJnMYMDxoAVad1%2BE5%2FThhW3ujDGAfDbQEIcgeS01dTXMMD%2FlMQGOqUBUhjW4EBOdpf7jUh2W0X5tibpjBNnJcXbDqZAhXrFqBcTQW9zCmE0w5exmW1puazQ4ut8NYZoblcfbc6tTMgVkTL3aEGliYeZ9CbOL75Ph1MS2cRqO9lLOjjsrFpcwNv2EEepl5JQLYi6Xwu3kF%2B6%2BuYhYbyTGD8jGTxog3I76H4cDsMptTUUbsoRZIh4Ds5l7OFdJBMl3w1mUpZdHLojOge065RX&X-Amz-Signature=335eefed81b0ab18868db9ad9dfa3e7b75cbb004cf6746af2bb2136f14cb59bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
