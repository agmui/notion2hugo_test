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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDKGANF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDYFCxG7wfjLD2aSe44olFmSHbAGbySr%2B%2BYfvsAtfoZPAIgWLLGO42z%2FyIN7zEr98A29Ak3%2BFtgym6L3V1s%2BDvZzNsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQGgVx393Hf0tGyhyrcA7%2BcVsL%2FPIsugU8WTCyRtijqGUDDkVeqIqH8UkzxE4hFF79RdNtsmZNtBJUl59VgR24OMAYDUjLNXHMKGuZoVMoMSlEht6iseH9APR6MpbqrFjMtMdM6o%2FtsjAYNK7EGxhpY6enRkN1NmBR2tLFiSX%2FdM%2BwWGxRsDXSshozEPJ3g132V63K6nLNUWsnRsWi6N0K0QlP5Yw7qpfjeQjIhLstPdhxNrQzUxmmPPz08vxb%2BYXmhgYgtyw%2BNi5gTfrL9Ucy%2Bge%2BR8URZGdj3VuCDxAJxIdHZ96yLsL0M8%2BsL2Go6Ntg%2FaPymT9ymJfu%2F88r%2Fa18PhhfOaMG8gZDHbLX5zg1hMby3bhjhhOa398b0%2BwqBc2AZE8jOekTWmDevIrZzfOyNh83kqYDxrTjL7WS7HL%2BE8yb4nFtLXJCsxCnfPIFILsIb%2BIenxSN5eWAaZDzmOBsDgXqmDZo6CKuMB2Ut%2FJVSLnM2lyIbL%2FhMCh4%2Bpnc0hzLM5DhVUMY%2F45%2FJgjCBTiss%2FisAoqORQk5EV7mZOBkYyM2vi1krYCeBBiRIpsomTwcod8DbkBJyKaaUD12WyVXHxp4sZOX%2FwAOkaWgc0nTApNsQ6NjlRBKsxqwD1Vm%2FSvWka%2BaS%2FC0oS6oAMNPf8MEGOqUBuXeb%2FPGHcQzcDvFjH4kynkqfWwRDV6qMLDScC1KQ1%2FmKRI7Zeh7DwwX8ReqXlACKj%2FkPIYLtTsKtbxH%2FTTYkntT6ZvWvW0lgjJukIYC5ceTgQgHcvPotIwif3C7ondFVD4Lkm%2BbstRDsp5OKZE0827F5i3OqeFGrMcuqkBEWU5Q%2BFi9T%2FC%2BB5rk9Mw3LcBiwmqc%2FivVZGJ%2BQ8bDYXXYAJtDnd%2FAP&X-Amz-Signature=77b7b252dd368d0ce642edaf459d7ee22f2895b1670e66db460d657eb2f133a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDKGANF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDYFCxG7wfjLD2aSe44olFmSHbAGbySr%2B%2BYfvsAtfoZPAIgWLLGO42z%2FyIN7zEr98A29Ak3%2BFtgym6L3V1s%2BDvZzNsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQGgVx393Hf0tGyhyrcA7%2BcVsL%2FPIsugU8WTCyRtijqGUDDkVeqIqH8UkzxE4hFF79RdNtsmZNtBJUl59VgR24OMAYDUjLNXHMKGuZoVMoMSlEht6iseH9APR6MpbqrFjMtMdM6o%2FtsjAYNK7EGxhpY6enRkN1NmBR2tLFiSX%2FdM%2BwWGxRsDXSshozEPJ3g132V63K6nLNUWsnRsWi6N0K0QlP5Yw7qpfjeQjIhLstPdhxNrQzUxmmPPz08vxb%2BYXmhgYgtyw%2BNi5gTfrL9Ucy%2Bge%2BR8URZGdj3VuCDxAJxIdHZ96yLsL0M8%2BsL2Go6Ntg%2FaPymT9ymJfu%2F88r%2Fa18PhhfOaMG8gZDHbLX5zg1hMby3bhjhhOa398b0%2BwqBc2AZE8jOekTWmDevIrZzfOyNh83kqYDxrTjL7WS7HL%2BE8yb4nFtLXJCsxCnfPIFILsIb%2BIenxSN5eWAaZDzmOBsDgXqmDZo6CKuMB2Ut%2FJVSLnM2lyIbL%2FhMCh4%2Bpnc0hzLM5DhVUMY%2F45%2FJgjCBTiss%2FisAoqORQk5EV7mZOBkYyM2vi1krYCeBBiRIpsomTwcod8DbkBJyKaaUD12WyVXHxp4sZOX%2FwAOkaWgc0nTApNsQ6NjlRBKsxqwD1Vm%2FSvWka%2BaS%2FC0oS6oAMNPf8MEGOqUBuXeb%2FPGHcQzcDvFjH4kynkqfWwRDV6qMLDScC1KQ1%2FmKRI7Zeh7DwwX8ReqXlACKj%2FkPIYLtTsKtbxH%2FTTYkntT6ZvWvW0lgjJukIYC5ceTgQgHcvPotIwif3C7ondFVD4Lkm%2BbstRDsp5OKZE0827F5i3OqeFGrMcuqkBEWU5Q%2BFi9T%2FC%2BB5rk9Mw3LcBiwmqc%2FivVZGJ%2BQ8bDYXXYAJtDnd%2FAP&X-Amz-Signature=f551d45b674f1dedc9026b6875cf869170e559d6cd9a93e0c7d93f6ea5254c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
