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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLS6TF22%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFC2oVjIaIFTB%2BReIer26cmiim4FQsSozKy4Oww21iw5AiBBCzyVZBKvfOGuc7T7EIGVccKpH%2F6ZkJkwaZawFlfLSyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMwurYdgZAKfUTJ%2BKtwDe%2F2%2FgXazTjYDiSN0MKC0gnAkFSCuR1QnNGKSC6gzZAXScohAXwdrPpHxaanIot%2Bcv8M3kl20UfrEvtjynowog1Nu%2BJnPMz6QnnEZG7W%2BZxtoaBvYlJRkZPZ5kyl4qrlkDvyNm4OFk0X5bWP8J6HNIO%2FZ5ZYNkUQE%2F2s%2F1rcDsK09P7%2Bcvi%2F7IKVuDdidmw6InQAPXDUMb0hlohMEQ6ZTyTzQr9yOYUqRrYAcJJY%2B0dhCOYA4E2srSVQk4%2FpDUyF%2BvgGkbtUPP7sUIA5QZ5PmKUD9EmLBBQkz%2Fy5RtkjNZO3TzfEU%2BUC4M0h4IGi3ngK%2BwJraNhtjru95mbdahR%2BTpmSr%2FMe5hiwsBfbjrM4DL5tDqali0gcQUNMXb4l%2B6WanBR0yzqeEoNio2KKCaK2jcNFdQd9HZwEQA3rjx1S6kspa0scwnFkXO9n7IbTFXi8ajOCuKx5%2BucN%2BC4X4le1NG7%2Fa%2BYULjtnG3Igi4mn%2BY%2FsIEemOZmpvJaNcgrKt65DUGRnBxJ8DuRc%2BTnKw1UiXc%2FK7AAQuzOODTADlPLGTyQqCQXdgcPH1twvB3dcVngiRPud%2FQZ9OyqaTub6jCZxMQjQha2y8NCemWomfOFNtWww2lNm7mnuJ9QgEa6ow3aKqvwY6pgEFtld49yT4%2BLon7y48henWMB5xwjG1rkDu1hO%2FJsmfqNCi86j2zQfreCfyvYA4lwiUMFM0bMfwh8kF4cRGohRLF5QtovSGYnxJrtwQK7LoqhYZoxQWaIDHDnLqTBSftQKy9tRiyND6WToviqsFncWkOIfMplMOgsu6VJEm0WqjNc0M62oc6RU1tOiumsj2Ia0DagcNZOvwfyPk%2FIxD1N594YJlDhVw&X-Amz-Signature=ac38d2b1bd9fc3576b1807985d70a381ce9edc093618346bdb4296fa48909105&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLS6TF22%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFC2oVjIaIFTB%2BReIer26cmiim4FQsSozKy4Oww21iw5AiBBCzyVZBKvfOGuc7T7EIGVccKpH%2F6ZkJkwaZawFlfLSyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMwurYdgZAKfUTJ%2BKtwDe%2F2%2FgXazTjYDiSN0MKC0gnAkFSCuR1QnNGKSC6gzZAXScohAXwdrPpHxaanIot%2Bcv8M3kl20UfrEvtjynowog1Nu%2BJnPMz6QnnEZG7W%2BZxtoaBvYlJRkZPZ5kyl4qrlkDvyNm4OFk0X5bWP8J6HNIO%2FZ5ZYNkUQE%2F2s%2F1rcDsK09P7%2Bcvi%2F7IKVuDdidmw6InQAPXDUMb0hlohMEQ6ZTyTzQr9yOYUqRrYAcJJY%2B0dhCOYA4E2srSVQk4%2FpDUyF%2BvgGkbtUPP7sUIA5QZ5PmKUD9EmLBBQkz%2Fy5RtkjNZO3TzfEU%2BUC4M0h4IGi3ngK%2BwJraNhtjru95mbdahR%2BTpmSr%2FMe5hiwsBfbjrM4DL5tDqali0gcQUNMXb4l%2B6WanBR0yzqeEoNio2KKCaK2jcNFdQd9HZwEQA3rjx1S6kspa0scwnFkXO9n7IbTFXi8ajOCuKx5%2BucN%2BC4X4le1NG7%2Fa%2BYULjtnG3Igi4mn%2BY%2FsIEemOZmpvJaNcgrKt65DUGRnBxJ8DuRc%2BTnKw1UiXc%2FK7AAQuzOODTADlPLGTyQqCQXdgcPH1twvB3dcVngiRPud%2FQZ9OyqaTub6jCZxMQjQha2y8NCemWomfOFNtWww2lNm7mnuJ9QgEa6ow3aKqvwY6pgEFtld49yT4%2BLon7y48henWMB5xwjG1rkDu1hO%2FJsmfqNCi86j2zQfreCfyvYA4lwiUMFM0bMfwh8kF4cRGohRLF5QtovSGYnxJrtwQK7LoqhYZoxQWaIDHDnLqTBSftQKy9tRiyND6WToviqsFncWkOIfMplMOgsu6VJEm0WqjNc0M62oc6RU1tOiumsj2Ia0DagcNZOvwfyPk%2FIxD1N594YJlDhVw&X-Amz-Signature=f6a333b506ad93b86dd0a1f72f989b85119ebd2bda062a0c452eb7f75314398f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
