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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4RMQC2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCMAZrCTTwejHGvsXDWAll044uT%2FbrZmxYlSnMelog9mwIhAITnvzACiT%2FJV9zNK0uPZGdS1dNkgn0RA9EU7Do1YcWCKv8DCCAQABoMNjM3NDIzMTgzODA1Igy8euHwNg52f5rDSA8q3AOGD5KqXgFNHodxK9K98czNUWXbB69rgL0Kcw71zqsMH2i4YfB6fZm5W58G%2BhdNjBio9%2BPcrP0PI1cvnI6rb4okHF4BAgLfV7EfRGFwSlw4xziL5qPKwMd%2BtPUz4TdMg57mEA%2FUbjPnC2RYX1youdIvZOGBGCyEkw%2FTr%2BYdzOhBtX629g4gW%2BQpw0IoAQsCyvpO94dtWifp3TToo7DIM5tXJUAzYSn13wbQ0A5XuaFh4ikbIc8tn4S6Rmo2BRakZx%2FiuR9TkyhTgLA9LDMLLpZT0cWH2%2Fo3eWhymd8L8PVt8s7BnEgJAjfMs7fIs497ERdVB4slR4MjOCQL5U%2FSj8FY4%2F5980ywH%2BEjDpTodU8PBHXLV6r%2BCo9dKWS3DP8ylpt5ySbk68Nt7%2BMW3HPFx%2BAuGS8RwJ8fpdf%2BkVRPrJ25ewBO94iGu7j6EzYSpIKw1fM7gx2SqR3RbYjkcOyA6gcZsGDgplNwQUgXAsSsr9iWTCTKxkhKDlSWDn08qAdExI0WlWkz2HobLauKUoNxzoNirEtf%2BYnyVt0fLUtDP2Ko9Unt3NJr7pIPPqPkk9TuuwwSAkFXcSSaO5jexzB7AR20qZKkeMpQD3E9ih6b4%2BJYm%2BUtwZO2%2F6H686djCTDy9%2F3BBjqkAdrBtZ3%2B8%2BPP9HwSTaxuQOmABZ4Q3eTdPs%2BrbYSG%2BtgTM1ErLG904TOc%2BEy6xjoClrKefZcvsSliotcgZZw2Hz3e75%2FIr94yuqYvZXjElvb2tOMZwXI%2FEsEUmnpaCovciKEruajmyxWMWaKPEs%2Bsh6EtKZu93wLUwAC4PwcM7VHhKe4%2Fb2vkGIBKlzEJ2hJ2pLr7YU9qvWmF3vMoV08gxWd6VNAA&X-Amz-Signature=c732ee9450e4d3e1237b607af07959a87fdc9685e4ff4e7c912f8fff8817afc3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4RMQC2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCMAZrCTTwejHGvsXDWAll044uT%2FbrZmxYlSnMelog9mwIhAITnvzACiT%2FJV9zNK0uPZGdS1dNkgn0RA9EU7Do1YcWCKv8DCCAQABoMNjM3NDIzMTgzODA1Igy8euHwNg52f5rDSA8q3AOGD5KqXgFNHodxK9K98czNUWXbB69rgL0Kcw71zqsMH2i4YfB6fZm5W58G%2BhdNjBio9%2BPcrP0PI1cvnI6rb4okHF4BAgLfV7EfRGFwSlw4xziL5qPKwMd%2BtPUz4TdMg57mEA%2FUbjPnC2RYX1youdIvZOGBGCyEkw%2FTr%2BYdzOhBtX629g4gW%2BQpw0IoAQsCyvpO94dtWifp3TToo7DIM5tXJUAzYSn13wbQ0A5XuaFh4ikbIc8tn4S6Rmo2BRakZx%2FiuR9TkyhTgLA9LDMLLpZT0cWH2%2Fo3eWhymd8L8PVt8s7BnEgJAjfMs7fIs497ERdVB4slR4MjOCQL5U%2FSj8FY4%2F5980ywH%2BEjDpTodU8PBHXLV6r%2BCo9dKWS3DP8ylpt5ySbk68Nt7%2BMW3HPFx%2BAuGS8RwJ8fpdf%2BkVRPrJ25ewBO94iGu7j6EzYSpIKw1fM7gx2SqR3RbYjkcOyA6gcZsGDgplNwQUgXAsSsr9iWTCTKxkhKDlSWDn08qAdExI0WlWkz2HobLauKUoNxzoNirEtf%2BYnyVt0fLUtDP2Ko9Unt3NJr7pIPPqPkk9TuuwwSAkFXcSSaO5jexzB7AR20qZKkeMpQD3E9ih6b4%2BJYm%2BUtwZO2%2F6H686djCTDy9%2F3BBjqkAdrBtZ3%2B8%2BPP9HwSTaxuQOmABZ4Q3eTdPs%2BrbYSG%2BtgTM1ErLG904TOc%2BEy6xjoClrKefZcvsSliotcgZZw2Hz3e75%2FIr94yuqYvZXjElvb2tOMZwXI%2FEsEUmnpaCovciKEruajmyxWMWaKPEs%2Bsh6EtKZu93wLUwAC4PwcM7VHhKe4%2Fb2vkGIBKlzEJ2hJ2pLr7YU9qvWmF3vMoV08gxWd6VNAA&X-Amz-Signature=835736c5c8fd9975455075de33c571bf92de08a9ba611cebb90fcb14dcf5a7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
