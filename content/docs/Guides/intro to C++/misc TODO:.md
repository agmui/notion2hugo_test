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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7CWP2K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDPbst95a%2B7I7nDtOHPnUox2dSHFi4rR2Jzk7ylGSYACAiAqOmVcT6SureOSNzPkG3dWG6108Z%2BTpzxfM7nIAX0Chyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMVp3Tn5P5%2FtJKo8maKtwDJMqfwFfKNTXaRIlkKPQlkmVSnOx7VsR%2FWhkFmKx5cwBiKHIKFPtRxgvCZXL501vbK6JdidJDXGS264VA4GCgvMqptxcJ6%2FlIycGxIB2LqtwrRChoGXByzGfSEWD0kZZviUv1JvoZrc0U0UBiNTkFfzXIGo0fEjJZfxAkD%2FAYARYhQWfgb4gnXQ7aovJiTbyXK%2BSRfFe8Ml7p4kZiWqWm%2BpDk0ACsP292aA0QDNMPVy5sXk9D35O0wEkS8%2B1bBjF3DGBmavl6tAZDUWDz8i9NF3IZfA1DeeI57I9EHYiqBb4Gjv8XBJw4QMFAzTucD41qScE0nJZx5Vuo2EpLZHZmPUwsQboks82phF4KUldj%2FPvkVLzLEJii91jygU%2BGuy2Gd7nSvn4ejspIPIL3U5XOmwsMbsjU8gEaVlIPJS%2Fa1P9948Xm2zLP7AqaQMhitSpfxStolTmOfCh3abudnVECbJnlHaCWEa5Nxr85eEb7qQBAy2n40kE4VBarJnqMd8TqwZCLDrCWCnIqPdRmHMikYPN4KZ9EIZxVK0jUC0em5LnONb2wHTCcAZyfRfbGhaF7oWC6G8AhpzjG8qwLCuCt7EO%2FXy2Ef3EFmZKhxhityG1BGmozst6yOeTo8fMwjMG1wgY6pgG4uJgjtY0c0f10KhajFssqUfcAmv7BuA9dZB%2F%2Fzu5AiLgjiJKbbIKJj%2BrDfAvNg29MZj7YfsU03gT8R3UBSSdiLiE9xCBtbrzkYfUugac3pZyUoW5Ek42l%2Ftz%2FTlp6lLb51shBLYpk%2Bd1uDYOL0UMbVZ9vaFH6jcghUAJYxs3vh0PExZ5WXxYiOwdcoHBq2GN7sIF1dYQfPuhdLGUn5I1Ceb%2BXqu64&X-Amz-Signature=d9c2ce8cd4a035db200e4d644dd45cd9a7f3efaedbae619f6f309fa4ab5a1442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7CWP2K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDPbst95a%2B7I7nDtOHPnUox2dSHFi4rR2Jzk7ylGSYACAiAqOmVcT6SureOSNzPkG3dWG6108Z%2BTpzxfM7nIAX0Chyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMVp3Tn5P5%2FtJKo8maKtwDJMqfwFfKNTXaRIlkKPQlkmVSnOx7VsR%2FWhkFmKx5cwBiKHIKFPtRxgvCZXL501vbK6JdidJDXGS264VA4GCgvMqptxcJ6%2FlIycGxIB2LqtwrRChoGXByzGfSEWD0kZZviUv1JvoZrc0U0UBiNTkFfzXIGo0fEjJZfxAkD%2FAYARYhQWfgb4gnXQ7aovJiTbyXK%2BSRfFe8Ml7p4kZiWqWm%2BpDk0ACsP292aA0QDNMPVy5sXk9D35O0wEkS8%2B1bBjF3DGBmavl6tAZDUWDz8i9NF3IZfA1DeeI57I9EHYiqBb4Gjv8XBJw4QMFAzTucD41qScE0nJZx5Vuo2EpLZHZmPUwsQboks82phF4KUldj%2FPvkVLzLEJii91jygU%2BGuy2Gd7nSvn4ejspIPIL3U5XOmwsMbsjU8gEaVlIPJS%2Fa1P9948Xm2zLP7AqaQMhitSpfxStolTmOfCh3abudnVECbJnlHaCWEa5Nxr85eEb7qQBAy2n40kE4VBarJnqMd8TqwZCLDrCWCnIqPdRmHMikYPN4KZ9EIZxVK0jUC0em5LnONb2wHTCcAZyfRfbGhaF7oWC6G8AhpzjG8qwLCuCt7EO%2FXy2Ef3EFmZKhxhityG1BGmozst6yOeTo8fMwjMG1wgY6pgG4uJgjtY0c0f10KhajFssqUfcAmv7BuA9dZB%2F%2Fzu5AiLgjiJKbbIKJj%2BrDfAvNg29MZj7YfsU03gT8R3UBSSdiLiE9xCBtbrzkYfUugac3pZyUoW5Ek42l%2Ftz%2FTlp6lLb51shBLYpk%2Bd1uDYOL0UMbVZ9vaFH6jcghUAJYxs3vh0PExZ5WXxYiOwdcoHBq2GN7sIF1dYQfPuhdLGUn5I1Ceb%2BXqu64&X-Amz-Signature=43236f0f17945b3e596c85d0fdeaf32ee3d42a722c06c6b1eb35f782ac079abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
