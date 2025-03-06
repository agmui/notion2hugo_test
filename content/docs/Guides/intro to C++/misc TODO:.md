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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTFIXBK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FXnzbjRxfzaPsUPTC0kz9GM9MPmnxmEo9LmMk0sIriAiBb88zkSW0EKVYp5zWpwQBZ29CRm0%2BTTYv0iM5nlSjTySr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMCKVF9TDyW0YWE4XWKtwDcNlwXE%2FcS4g099NliViiiLBBpcW%2BXIzJCg5vnWPX1E%2B8JzjX4mbax4LnUy9EvlcjfxKBKjVVYpIf69Q6LWVelflm5FzBpRkoroXGqN7yrBouQ1GQNanwKYilDsg9PiZwlkE1nStGhgjQRct4yebkdy22jtzyErIHMRPEGVgAPwZyrh4MYQJqcHh6otrE49dO5y54AkE07XgvDLra0G8iTJG%2BpsGWVjGavT1VQXEQJSLz93YjKMhWKy%2FUioF18gRfGxZfHm6kCyUTx1J%2FYeDttj68DkzBA7jrinlg5x7rSRSSTs9oQUL2ORWD6zMe%2F8PTwf%2FfrBUrwX9JWh1OPSPMLxCPNBKEkw1tPqTO9YKdnJZpIwWceI%2BixMIFToFjVihWEyagcrzToL%2BxED7anGlXBM4VcTr%2Fx8OY7174DFTjfiDnuG9so53VKVTosoOtN0w8n0AWIlGAZPoJWhusH13YjY2bsgyzglgrHI3mxjCMF%2FbiWgh5uYDAX2IghmPtFDlWZAwbahE5G%2BG%2FOYtL6orEiEm3l04%2FZa3TO1Xb5PGJ%2B10FqqTLGX2t2iKY3sVk5Cnn5TkPL93Miv1AhHGAfbq4p8R71%2BK6973X4ogIHTZsjQMl7kPFm3pszJ5gJvwwss6nvgY6pgH1Z%2BSmTZbF%2BctwOAx4MY8k866AJO%2Fb5%2FgnlghikspZ8Iz5dWKwDdD4mFy1gnKAaSgVAbPByAS6Ij1K7Y%2FcQFAlEy1N8Xa8RdOo0LjU2TDDEPxYj%2F7DGnc7oC0%2F4docDui6oC0wuqPuz4gJPcKbVvwaSsZxuXvwRSrQkhs5HG1tlp06LItQfvhOGg0XpZUuUn%2BLdlHH3b680MQURLv71TgW3OzRx4Wl&X-Amz-Signature=5492f5599feb060509c6e6bbdd4eacd84abb691b14642fa44ad18e14ef12ae0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTFIXBK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FXnzbjRxfzaPsUPTC0kz9GM9MPmnxmEo9LmMk0sIriAiBb88zkSW0EKVYp5zWpwQBZ29CRm0%2BTTYv0iM5nlSjTySr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMCKVF9TDyW0YWE4XWKtwDcNlwXE%2FcS4g099NliViiiLBBpcW%2BXIzJCg5vnWPX1E%2B8JzjX4mbax4LnUy9EvlcjfxKBKjVVYpIf69Q6LWVelflm5FzBpRkoroXGqN7yrBouQ1GQNanwKYilDsg9PiZwlkE1nStGhgjQRct4yebkdy22jtzyErIHMRPEGVgAPwZyrh4MYQJqcHh6otrE49dO5y54AkE07XgvDLra0G8iTJG%2BpsGWVjGavT1VQXEQJSLz93YjKMhWKy%2FUioF18gRfGxZfHm6kCyUTx1J%2FYeDttj68DkzBA7jrinlg5x7rSRSSTs9oQUL2ORWD6zMe%2F8PTwf%2FfrBUrwX9JWh1OPSPMLxCPNBKEkw1tPqTO9YKdnJZpIwWceI%2BixMIFToFjVihWEyagcrzToL%2BxED7anGlXBM4VcTr%2Fx8OY7174DFTjfiDnuG9so53VKVTosoOtN0w8n0AWIlGAZPoJWhusH13YjY2bsgyzglgrHI3mxjCMF%2FbiWgh5uYDAX2IghmPtFDlWZAwbahE5G%2BG%2FOYtL6orEiEm3l04%2FZa3TO1Xb5PGJ%2B10FqqTLGX2t2iKY3sVk5Cnn5TkPL93Miv1AhHGAfbq4p8R71%2BK6973X4ogIHTZsjQMl7kPFm3pszJ5gJvwwss6nvgY6pgH1Z%2BSmTZbF%2BctwOAx4MY8k866AJO%2Fb5%2FgnlghikspZ8Iz5dWKwDdD4mFy1gnKAaSgVAbPByAS6Ij1K7Y%2FcQFAlEy1N8Xa8RdOo0LjU2TDDEPxYj%2F7DGnc7oC0%2F4docDui6oC0wuqPuz4gJPcKbVvwaSsZxuXvwRSrQkhs5HG1tlp06LItQfvhOGg0XpZUuUn%2BLdlHH3b680MQURLv71TgW3OzRx4Wl&X-Amz-Signature=036548cdd50cc40515b2109b1980b0aedba490ac086db270f61b0a78989203a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
