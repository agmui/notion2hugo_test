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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YAXHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYABo%2BJ6lGh7TORyuvLHgyZzzT01jIEmv8uqSkKk00YwIhAIg422dJb3xTuwPZYfFWPZvAbs2iYub1nrtnGsNpmi2oKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwdzqS1pGsVbL3tcwq3AOJ9sOHlI0CMSkWcrHfwHDjkERcsknPoRDZNyBAONZcLR9RbCh1TfplO5cG4ULgjziRJmAUeE%2BbP8ZqAuGhH9qdlkiykuKLpS7jWK5MVtXIJ2bQBbtT%2BOkIK%2BUuFUCKnPZSfFU1LyXnuraUXQKqzS5c%2B5hHFiVLMo7BBwqkDSryI548u6QK6AHP8qV%2Btm9jllvwppPUSBHSyaNdhMNEWhCiFOrpr%2BOAVAU4gZkIxqPzZxmbpnj3vAwpPwdHamy1eWAEZ62jTybOro%2Bj6KKY2WTDEHCgyZTfGK%2BIQ2vgr0H57ekjMhxAnLhUtO7GsECdlnnaJ8CQsRHBxFaTabN3Txggbxb3SZQuF7FYFK00iSFtvRP0XBSBPvL%2BGaEzrHdj2G2ytxyfc%2Bj3WlYRXZ6F5JNkXhTSNcHek2hr51jJkWZxi%2FwU5GQPXHghOwY5IymrofFu3MJ%2FB%2Fb3HkgHzdOjAUZC0TCDrYoZyduMJI0DDHEnYl2UwbHfTaZc3UfOEctS6TnUrd3XK78OzaPiN9CeNuc%2Bzl8iMlfhlGcvuJO7LNuViM0uMGDZ02SwDbOngLKLBMhVyiUOgoBb1a6dHDvLbIkIS0ys2SHSNEMRNUICrxraq%2BLRQvh5xMoW3cs5cTDazYvDBjqkAUzF6nAVzpu7jJZkatPYnNstU3fJ8QhrqA6h9BekrNTSQMsVXcAoz5lhzNn5pAHzr6hT0vOim%2FfDy%2FtCWGG1ab6QjKAG7xCrw%2BLhcpRbUdwLKIbqjFbTGklT%2B45%2FFS4v9GKzx9sLztU%2B5csPucppSxNyGhyVaXkL14pboFWiu02bM2Ip2YrDSDzOOpq8JQJjly4Q1hUV1CwYzMDRWyaYfUytb5Zh&X-Amz-Signature=51fbfc71911ff882109865329993282d7e8c9755c7993c2651b82decb03e5684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YAXHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYABo%2BJ6lGh7TORyuvLHgyZzzT01jIEmv8uqSkKk00YwIhAIg422dJb3xTuwPZYfFWPZvAbs2iYub1nrtnGsNpmi2oKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwdzqS1pGsVbL3tcwq3AOJ9sOHlI0CMSkWcrHfwHDjkERcsknPoRDZNyBAONZcLR9RbCh1TfplO5cG4ULgjziRJmAUeE%2BbP8ZqAuGhH9qdlkiykuKLpS7jWK5MVtXIJ2bQBbtT%2BOkIK%2BUuFUCKnPZSfFU1LyXnuraUXQKqzS5c%2B5hHFiVLMo7BBwqkDSryI548u6QK6AHP8qV%2Btm9jllvwppPUSBHSyaNdhMNEWhCiFOrpr%2BOAVAU4gZkIxqPzZxmbpnj3vAwpPwdHamy1eWAEZ62jTybOro%2Bj6KKY2WTDEHCgyZTfGK%2BIQ2vgr0H57ekjMhxAnLhUtO7GsECdlnnaJ8CQsRHBxFaTabN3Txggbxb3SZQuF7FYFK00iSFtvRP0XBSBPvL%2BGaEzrHdj2G2ytxyfc%2Bj3WlYRXZ6F5JNkXhTSNcHek2hr51jJkWZxi%2FwU5GQPXHghOwY5IymrofFu3MJ%2FB%2Fb3HkgHzdOjAUZC0TCDrYoZyduMJI0DDHEnYl2UwbHfTaZc3UfOEctS6TnUrd3XK78OzaPiN9CeNuc%2Bzl8iMlfhlGcvuJO7LNuViM0uMGDZ02SwDbOngLKLBMhVyiUOgoBb1a6dHDvLbIkIS0ys2SHSNEMRNUICrxraq%2BLRQvh5xMoW3cs5cTDazYvDBjqkAUzF6nAVzpu7jJZkatPYnNstU3fJ8QhrqA6h9BekrNTSQMsVXcAoz5lhzNn5pAHzr6hT0vOim%2FfDy%2FtCWGG1ab6QjKAG7xCrw%2BLhcpRbUdwLKIbqjFbTGklT%2B45%2FFS4v9GKzx9sLztU%2B5csPucppSxNyGhyVaXkL14pboFWiu02bM2Ip2YrDSDzOOpq8JQJjly4Q1hUV1CwYzMDRWyaYfUytb5Zh&X-Amz-Signature=b6cecb40515941c462909ca96325f52af0ec3138e7244e53380ab8e11a08c9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
