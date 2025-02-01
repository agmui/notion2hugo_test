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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO6XWT7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ%2ByKcgj3BP1slT7%2F1nXR%2BxdATIxdaIDdgLsSNRbxU%2FAiEAnKWYiqQgsE%2BCJWTwy5Xy1HrlLgE0BGltzX5HqRmQ8S0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKvezhVuz2EDXJDpSrcA%2FgkeVZ8wFNlS6Sqe7LVDIFpNM0aYi6gGavj8ApStq%2BWA6F6B8n4izBqlnjLl6YkUxchhbu44HX4al77hBGxz0wiDHljL4XPcLbVH20BokmQC%2FlfMyw5PKi5GVLZoSDBrOoSFZHXatRy8io3ZRJU%2Bn9slOmsrk9V1dUCBJiK4bkHbWUXdCxiecssHjZ%2B9bXXN%2FSCUDJDYZ4s3xPNTAr%2FrPOIbHxCe7LkCr4mexYKpg4UrIpfZhMa2rYbWmjtFZ0N2Hk8xsEm%2BAOyDuNePz4BqRVW4DO5n9MBm9jp5npq4%2F6h9vyh9rXMSXBsPeL16vkVDlr7Mwd75x%2BpTO1Fl%2FQQWd91ulS5WECi83oopUOYJGhcoGSRMLKElzbGb0izR%2FrrHCDiSFFVfa1vT%2B1SJnKdEVNXtKBmk%2BPITvHK6wtwg1%2BDZmnzI%2BtBCTvUvTonhPqVP6zx1MxyKS5ZnYAZRtpOAXivt3%2BRkpUFHj0uWuy22ZMNm%2BTYoPSslbtXzPBF6u2kjPvvIsRa%2BxWRoCdEAX3YELGdPiTATejp4S9vEzO7%2B5zQP%2B9NtAbgulzkgxEZqyTYncd9YQ1L246w%2F3%2F6%2BBtKEK5TsiYfXHYGKG%2BAWcyygY%2FFDhSkBl92DKDlioRoMPvC9rwGOqUBrR6QXKVsLJSRz9AmEnaHMRh4wlVjFb3Wz9zlNEdfCrIiR%2Ffew6g%2FuVEbRayRuLQ5qnv2iILzdZu7hr34k4b2HfY2ZguzOt%2FTG0hoIwvj5TR3YJzjuXyzeDOSltlEcoz82a477BoBLVXLLLVHlLSDHNCF2FXkgFXohqS9CEnOzGvaaDHenUNQAbWfztddTTO5lsZU1M9PrtnFrD8DmBFTy68neCiX&X-Amz-Signature=e84faadd93b5ec6d30d134074bfc3c7e7904bb758e3b0e350d65ff761add430b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZO6XWT7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ%2ByKcgj3BP1slT7%2F1nXR%2BxdATIxdaIDdgLsSNRbxU%2FAiEAnKWYiqQgsE%2BCJWTwy5Xy1HrlLgE0BGltzX5HqRmQ8S0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKvezhVuz2EDXJDpSrcA%2FgkeVZ8wFNlS6Sqe7LVDIFpNM0aYi6gGavj8ApStq%2BWA6F6B8n4izBqlnjLl6YkUxchhbu44HX4al77hBGxz0wiDHljL4XPcLbVH20BokmQC%2FlfMyw5PKi5GVLZoSDBrOoSFZHXatRy8io3ZRJU%2Bn9slOmsrk9V1dUCBJiK4bkHbWUXdCxiecssHjZ%2B9bXXN%2FSCUDJDYZ4s3xPNTAr%2FrPOIbHxCe7LkCr4mexYKpg4UrIpfZhMa2rYbWmjtFZ0N2Hk8xsEm%2BAOyDuNePz4BqRVW4DO5n9MBm9jp5npq4%2F6h9vyh9rXMSXBsPeL16vkVDlr7Mwd75x%2BpTO1Fl%2FQQWd91ulS5WECi83oopUOYJGhcoGSRMLKElzbGb0izR%2FrrHCDiSFFVfa1vT%2B1SJnKdEVNXtKBmk%2BPITvHK6wtwg1%2BDZmnzI%2BtBCTvUvTonhPqVP6zx1MxyKS5ZnYAZRtpOAXivt3%2BRkpUFHj0uWuy22ZMNm%2BTYoPSslbtXzPBF6u2kjPvvIsRa%2BxWRoCdEAX3YELGdPiTATejp4S9vEzO7%2B5zQP%2B9NtAbgulzkgxEZqyTYncd9YQ1L246w%2F3%2F6%2BBtKEK5TsiYfXHYGKG%2BAWcyygY%2FFDhSkBl92DKDlioRoMPvC9rwGOqUBrR6QXKVsLJSRz9AmEnaHMRh4wlVjFb3Wz9zlNEdfCrIiR%2Ffew6g%2FuVEbRayRuLQ5qnv2iILzdZu7hr34k4b2HfY2ZguzOt%2FTG0hoIwvj5TR3YJzjuXyzeDOSltlEcoz82a477BoBLVXLLLVHlLSDHNCF2FXkgFXohqS9CEnOzGvaaDHenUNQAbWfztddTTO5lsZU1M9PrtnFrD8DmBFTy68neCiX&X-Amz-Signature=b7837301a54ac630560492f036f49ef566faa360e39fa039cec8ff458ce7a6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
