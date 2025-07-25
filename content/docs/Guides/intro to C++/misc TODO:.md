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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSTZH66%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHecT0LuJWQM9J10V6het25VQ%2BRpfBuhA6QMdg51T%2FsJAiByscVIhCzlXwzCI7T0yXmqTmA2PHufKPKQoWY3%2BbOIRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMaFhXtk4lPEo5aAeYKtwDA55tZavR390pfGY1dRfx55Ym5emubKJt9xGVcBxpvXqxcFrVqjGvOovdIJXRDZU75cgzQJX2tUlrdg%2BH9RD0j%2FugM03aRDDzovxXD13ausv63AMDQYNN29Sd17nsFr3dcsZ0gWQHy3FBW%2BzRLLemND1y43wBPz8nVACEM3wCmnhMZJCe6FIdtfCr40%2BUQcNxn%2F8Di7oGIpS4UdHBG76QWV1pCSjsPNOqakLuf%2BDovanzwGIF2Pz5YZ9WaPRsrXny3Oc8ElPd2CgUyyCmTA4AhXFSF9oyjxkvb5GmVvnNHubaW0iVZ4k7YH2nBw5IC0Su5FXZ36aXghqlwbqNB6%2B5L%2FAM4dY0JGlLy3z7IUi4FzlrWSAcATF3xJcOFeZGtqGtyccByJDAaaCj6DLIuWXneIyhrGAQqIdtPkp31bR6L4HyKh5dOvuTVjSKa94tz62bbhYQ97OocP7WVQatgA428p4wRuwp0wc9p66bagZgANKzmFtGCyA5Pvstrr5IDcbQbEKIALFxg0joqR6GhdnTxzSdvhO%2F58cQRbbKIAW3emtltGgix7ZqysVk0YQN3bEoe2TOsQATrNtU6cr%2F5OhGRNLmkCiutUubTdDUeoOe8ocLyRwNnJyxIPCh%2BpswuPiLxAY6pgE8zouI59xELayx4UJe3rf2yMYPJeUrF85SS0MrNNsdAUQBAOkBSAe%2F2sJeG08rwTRUsi1DUj3gDeFxsjbagj7PUAw3BZykHTy%2FO1Trr138l0chCMEyEZZGHFMEMGGyOe7Bw9boNkFGGUu1l2S4%2FAh44xeFuN%2F%2B2vZ2rpA4LEF%2FNhsyoCnwBrWOzTJUajRMf7%2BaZQsLX0sqyBC6vJiPOV4O1RQgs0xI&X-Amz-Signature=1bf531a531f55a7d57f718fd3a941edd1dfde327b53fd72d2d0248285670e52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSTZH66%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHecT0LuJWQM9J10V6het25VQ%2BRpfBuhA6QMdg51T%2FsJAiByscVIhCzlXwzCI7T0yXmqTmA2PHufKPKQoWY3%2BbOIRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMaFhXtk4lPEo5aAeYKtwDA55tZavR390pfGY1dRfx55Ym5emubKJt9xGVcBxpvXqxcFrVqjGvOovdIJXRDZU75cgzQJX2tUlrdg%2BH9RD0j%2FugM03aRDDzovxXD13ausv63AMDQYNN29Sd17nsFr3dcsZ0gWQHy3FBW%2BzRLLemND1y43wBPz8nVACEM3wCmnhMZJCe6FIdtfCr40%2BUQcNxn%2F8Di7oGIpS4UdHBG76QWV1pCSjsPNOqakLuf%2BDovanzwGIF2Pz5YZ9WaPRsrXny3Oc8ElPd2CgUyyCmTA4AhXFSF9oyjxkvb5GmVvnNHubaW0iVZ4k7YH2nBw5IC0Su5FXZ36aXghqlwbqNB6%2B5L%2FAM4dY0JGlLy3z7IUi4FzlrWSAcATF3xJcOFeZGtqGtyccByJDAaaCj6DLIuWXneIyhrGAQqIdtPkp31bR6L4HyKh5dOvuTVjSKa94tz62bbhYQ97OocP7WVQatgA428p4wRuwp0wc9p66bagZgANKzmFtGCyA5Pvstrr5IDcbQbEKIALFxg0joqR6GhdnTxzSdvhO%2F58cQRbbKIAW3emtltGgix7ZqysVk0YQN3bEoe2TOsQATrNtU6cr%2F5OhGRNLmkCiutUubTdDUeoOe8ocLyRwNnJyxIPCh%2BpswuPiLxAY6pgE8zouI59xELayx4UJe3rf2yMYPJeUrF85SS0MrNNsdAUQBAOkBSAe%2F2sJeG08rwTRUsi1DUj3gDeFxsjbagj7PUAw3BZykHTy%2FO1Trr138l0chCMEyEZZGHFMEMGGyOe7Bw9boNkFGGUu1l2S4%2FAh44xeFuN%2F%2B2vZ2rpA4LEF%2FNhsyoCnwBrWOzTJUajRMf7%2BaZQsLX0sqyBC6vJiPOV4O1RQgs0xI&X-Amz-Signature=d86b79a9a1f6628450a24e06883b1b3dc8f5b23c11b93e4fee6c783d3538b1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
