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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HOGG3EH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3p6JFyFbocpNQVv0z1SsQP7%2Beo17U2bsXKkyWo2b9XwIhAKzfrvtKVhWmHng7KPfYWkVHN3ggVzRRv5fzYmARgePZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwpYmjGLRg8d9Fbqwq3ANOSUHmewIAJI49DcX5wkGsr%2BVwdt0WhQrBTQiVukpgnIWQ5Kh%2FPjXOgr3JxyXRxmic2gngD3mgWJGELJoYS6%2FXsaEa870RwQTt3yku9dxiEgluJc5Mo9QWIwkXEVYGNDo4Z1MbGuVD1gJMp5a1DblOhkemNk%2BjVE0P1x%2FLBBoJTAEL35Xsr3zzUpyy%2Bf%2FTkwWbO5yGqSz8AKfXY1FzFmjP8XfHZWQ8tKoKQnMuMbP8Ts68pNqJVgIJurTrqdtglel4pLkynEVhX6t8i5rFeC48THDUYydayFIu6u6tQApQy2n5tbXOMvq%2Ff77fXNAUCHtiZMOZ7K3xlfApkuzRTpNvEcEZmdrKBdxvMR8tFGj6kaIbVvr4eiuv3X8cU4NVUWkr6A2w4zhKMipkj45iYHsV7ZyxrAQ0D9DESVpkQpWuRgHZj46rJcwhQaIIQmpshH9ehP4FOQtFi4e1uwA%2FczYwd8qafP2TdFB5Bbd8ypMzPLt9b52hy8%2FstxNWuEM9YsQ9lO5QJGs8tHnEe%2FgM46%2FOeZfKSLkUanJYkC4lAdqrJcwn4VeBKZrFQ%2BwqaAmIoT5yCiAqT029QAiYI%2BdugRCoRX911h4ksoAR5t2IFdtproUYZPs9te7FdRIswDC50f3CBjqkAdYgStnlQlLh6A5eH4y2dtlxmzoBY3lnXC1%2BzhRFI83Rmdoi1W3E%2FPRYU%2Bd8u%2BCk1AFAY1Bcm1jTN5dJrZvAkoCG5BeSYGeX%2FbNZVxs4DePJDWf4F4X9hGDUntsacRjUivtl3rX0bJ8UjABGFYlycLDS%2BXF7z9GIoJ%2Bgs5pDRxnZ3TJuPU%2FPl6Fex24Gf6FHzmpUMcg%2BUIsZE2IAfV4GhOKC9an%2B&X-Amz-Signature=586dda96b9a003f5dbc838b92105c69a05f3fc3678120bb9be0d9eddabf0dc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HOGG3EH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3p6JFyFbocpNQVv0z1SsQP7%2Beo17U2bsXKkyWo2b9XwIhAKzfrvtKVhWmHng7KPfYWkVHN3ggVzRRv5fzYmARgePZKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwpYmjGLRg8d9Fbqwq3ANOSUHmewIAJI49DcX5wkGsr%2BVwdt0WhQrBTQiVukpgnIWQ5Kh%2FPjXOgr3JxyXRxmic2gngD3mgWJGELJoYS6%2FXsaEa870RwQTt3yku9dxiEgluJc5Mo9QWIwkXEVYGNDo4Z1MbGuVD1gJMp5a1DblOhkemNk%2BjVE0P1x%2FLBBoJTAEL35Xsr3zzUpyy%2Bf%2FTkwWbO5yGqSz8AKfXY1FzFmjP8XfHZWQ8tKoKQnMuMbP8Ts68pNqJVgIJurTrqdtglel4pLkynEVhX6t8i5rFeC48THDUYydayFIu6u6tQApQy2n5tbXOMvq%2Ff77fXNAUCHtiZMOZ7K3xlfApkuzRTpNvEcEZmdrKBdxvMR8tFGj6kaIbVvr4eiuv3X8cU4NVUWkr6A2w4zhKMipkj45iYHsV7ZyxrAQ0D9DESVpkQpWuRgHZj46rJcwhQaIIQmpshH9ehP4FOQtFi4e1uwA%2FczYwd8qafP2TdFB5Bbd8ypMzPLt9b52hy8%2FstxNWuEM9YsQ9lO5QJGs8tHnEe%2FgM46%2FOeZfKSLkUanJYkC4lAdqrJcwn4VeBKZrFQ%2BwqaAmIoT5yCiAqT029QAiYI%2BdugRCoRX911h4ksoAR5t2IFdtproUYZPs9te7FdRIswDC50f3CBjqkAdYgStnlQlLh6A5eH4y2dtlxmzoBY3lnXC1%2BzhRFI83Rmdoi1W3E%2FPRYU%2Bd8u%2BCk1AFAY1Bcm1jTN5dJrZvAkoCG5BeSYGeX%2FbNZVxs4DePJDWf4F4X9hGDUntsacRjUivtl3rX0bJ8UjABGFYlycLDS%2BXF7z9GIoJ%2Bgs5pDRxnZ3TJuPU%2FPl6Fex24Gf6FHzmpUMcg%2BUIsZE2IAfV4GhOKC9an%2B&X-Amz-Signature=9265c69840ee924b4e8587c679d6410ccf6088e84f24e217a26921483f732c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
