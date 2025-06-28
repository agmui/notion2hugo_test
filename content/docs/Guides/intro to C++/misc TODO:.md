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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIHF5ZE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOWV%2F8K%2Fij8CZknUlB3ddXYDfFv2fIIXB%2FS3gag%2BiW8AIhAPJy0CidqOaazhd8UfjZ8Q6FdsFktrYzEiqljiISlLHxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySsL29%2Fo2ejr7P3lQq3ANFNnRISArt9hYDtr1Or7xipgnMXMEyU6g7iAeFJ5FoVVqeiaq0PNp7MwWiUPHDpMGhTfoNhOsP%2BnktR9ezXcMJH04eGZCyLyEHKCEQ0dAMfPZuNxYZYcxwzMmjCddxYhXsr5W%2FGAZ54GYLOHiMykVIn9LzmlPpg7uZpfWz1%2FwkyHR%2BOlUIVR%2FVAPdHkU0gtPj%2BOhXWQ%2BvPWxLNcfFwTcsCvXtIi749LApIVcIlC5bqdOVq2kyxqPcU0YpqG%2FzQviYbCvv1NDwx%2F013YFgze26g4R0BuOpcYBiHJPden1MWpcoOLbyUO4pFRU84C2eo7FF4fPqkoN4%2BN2XTRJtyMtKkkfPE5ubRGfC5npnEEtri6Z2gKhDS%2B11CcIx%2BxlUoq%2FxfcPjWxngsGLeFkEy9R8cTtr5UBZ0GV4QSvsjmdRo8SJ03H91FcW0p7dCRHMVdPkI%2Fm0W%2FClq73Q3gAakgcqwwCxPxRjh%2BFhI2075ml0uK7uCzlRuQxCY%2BLGh1sdi3ZRJHgW4NBU4QuZIC%2Fu9opswEQuLxWyjqbyL5G0Dj5Mq6%2BfrYIR65PBoE0C87NfBhsG1f81n9Wu0k0OshgnMepOXuEJ8%2FsU7kGkL%2B9MTnMJDN%2FZcUKWsVbOWhHbzqjTDyj%2F%2FCBjqkAVZ4HTJI4xguYyqTq2AuUIZmOSxAW5TtT45WnSaarb1shBcnlC%2FTNSfdCFa3yhdUiimnZKfu79r5U6tR8BprYgffh77tUFnX08CEKkiZEVhGv3eBkkMX7g%2BDlZWiISD%2FysDLdaGgZPAmCaB8kOOc0C8WBJ9KpPDykU%2BLSh%2F1luj5TxeKNlAdxowOP7tmAa0rNdh935GLM1wtoZJ%2FT8umfiN1XdZK&X-Amz-Signature=e2cb3efc4e975feb021899f2a3422406c88b7dc238cefba42b5997e3b04059bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIHF5ZE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOWV%2F8K%2Fij8CZknUlB3ddXYDfFv2fIIXB%2FS3gag%2BiW8AIhAPJy0CidqOaazhd8UfjZ8Q6FdsFktrYzEiqljiISlLHxKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySsL29%2Fo2ejr7P3lQq3ANFNnRISArt9hYDtr1Or7xipgnMXMEyU6g7iAeFJ5FoVVqeiaq0PNp7MwWiUPHDpMGhTfoNhOsP%2BnktR9ezXcMJH04eGZCyLyEHKCEQ0dAMfPZuNxYZYcxwzMmjCddxYhXsr5W%2FGAZ54GYLOHiMykVIn9LzmlPpg7uZpfWz1%2FwkyHR%2BOlUIVR%2FVAPdHkU0gtPj%2BOhXWQ%2BvPWxLNcfFwTcsCvXtIi749LApIVcIlC5bqdOVq2kyxqPcU0YpqG%2FzQviYbCvv1NDwx%2F013YFgze26g4R0BuOpcYBiHJPden1MWpcoOLbyUO4pFRU84C2eo7FF4fPqkoN4%2BN2XTRJtyMtKkkfPE5ubRGfC5npnEEtri6Z2gKhDS%2B11CcIx%2BxlUoq%2FxfcPjWxngsGLeFkEy9R8cTtr5UBZ0GV4QSvsjmdRo8SJ03H91FcW0p7dCRHMVdPkI%2Fm0W%2FClq73Q3gAakgcqwwCxPxRjh%2BFhI2075ml0uK7uCzlRuQxCY%2BLGh1sdi3ZRJHgW4NBU4QuZIC%2Fu9opswEQuLxWyjqbyL5G0Dj5Mq6%2BfrYIR65PBoE0C87NfBhsG1f81n9Wu0k0OshgnMepOXuEJ8%2FsU7kGkL%2B9MTnMJDN%2FZcUKWsVbOWhHbzqjTDyj%2F%2FCBjqkAVZ4HTJI4xguYyqTq2AuUIZmOSxAW5TtT45WnSaarb1shBcnlC%2FTNSfdCFa3yhdUiimnZKfu79r5U6tR8BprYgffh77tUFnX08CEKkiZEVhGv3eBkkMX7g%2BDlZWiISD%2FysDLdaGgZPAmCaB8kOOc0C8WBJ9KpPDykU%2BLSh%2F1luj5TxeKNlAdxowOP7tmAa0rNdh935GLM1wtoZJ%2FT8umfiN1XdZK&X-Amz-Signature=b8731d651c18a7b4d7de8ca6f032eb43b59201b0980df812db729eb8cd541c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
