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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TS3B7RH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDTiY3fkk0Cn%2FhSv6ERJtFo%2FjtItyp9KaZ6QBnfWl%2B3sQIgFTThI%2FyKVPyWBJZ7zAmA6bEJx4%2BEtNe7woSPsI0efsYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVMYzLLlb77OU8u0yrcAz61NWl25MaXLqihz5iXBhWpmZXPi8hUpCVS5%2FdufRlVEs9mOXpKPxLGHIN8eMtxqZRk1w5KoslYlUuyPSGBbVYFnWC4Y2PY3ZSV%2BUilWIOt%2FA8T8Wjz0V7xV4zGKzW8DQ%2B%2BvdCBP2J3Pffy%2FsxCRet4JdCNiM4bXqUbeQ34uMRDMCsW3pbHxA49LTB9JA54rQwHMuXpJEB7MaQwoDUTgM5k%2Br6%2BnG1eczn6rZjKRrAYBkVbOGxCLecLn2lFLfWkiNKkjURZfgeTOjCXY3Rh46fpwIX%2BLzP3GgHzU37RJo2yMN06f5LR4zHovGWlPM5o9wjkkKYzbgZAOsiEwNauPAZ2ey0jsLMaQOBWk4l7PtsXXqsn4zdTqpiLDab2SU6ZBOvvjOHahNPu4mYIg0LTg89zAirnclj6pkDSV391%2FbGcgj1POSFtxg0qHfgYrUCkYkE2CekIh06bndblONv6R3S5iZM9O7gMNBNdQOhAIA8tMpp2%2BpWHeyQRtWqwNCdbDFfnELW5ZZy%2F760fB977byL%2F3YpMt3SUkhXjBOHyVgboRfTpi3xYeCpPXakAL6OJ4g4irgVDsTKe9J8zts1D8N6uBQFWFSiPpHBpnWAAoN7MFom%2FYbzAYooPTVK3MLj2%2Br4GOqUBw%2FSq%2BaKt6FfN7GJA6G1OpT0gN1fYsxVgtWT%2Bif26SaIc3M7bD17%2FDOyDnYLICctaY41B7vuk4uUYU57yzMTsgRKbSsvn1pWu870MQt1%2BaPDsZg6tlgsAslyCYLwow%2BLNMjFZrqQoWKthIkfQFtAtqnRugJjujOMSpa7n7WItdYFEK2LgWp4fTdsvXaC47oQgePPL5WZeoBBHwZQV9Ufggb7r2g1X&X-Amz-Signature=300f973de71a18f5bf35e7af24f27c7e0811c6b03d06369f07d477a61d888c84&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TS3B7RH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDTiY3fkk0Cn%2FhSv6ERJtFo%2FjtItyp9KaZ6QBnfWl%2B3sQIgFTThI%2FyKVPyWBJZ7zAmA6bEJx4%2BEtNe7woSPsI0efsYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVMYzLLlb77OU8u0yrcAz61NWl25MaXLqihz5iXBhWpmZXPi8hUpCVS5%2FdufRlVEs9mOXpKPxLGHIN8eMtxqZRk1w5KoslYlUuyPSGBbVYFnWC4Y2PY3ZSV%2BUilWIOt%2FA8T8Wjz0V7xV4zGKzW8DQ%2B%2BvdCBP2J3Pffy%2FsxCRet4JdCNiM4bXqUbeQ34uMRDMCsW3pbHxA49LTB9JA54rQwHMuXpJEB7MaQwoDUTgM5k%2Br6%2BnG1eczn6rZjKRrAYBkVbOGxCLecLn2lFLfWkiNKkjURZfgeTOjCXY3Rh46fpwIX%2BLzP3GgHzU37RJo2yMN06f5LR4zHovGWlPM5o9wjkkKYzbgZAOsiEwNauPAZ2ey0jsLMaQOBWk4l7PtsXXqsn4zdTqpiLDab2SU6ZBOvvjOHahNPu4mYIg0LTg89zAirnclj6pkDSV391%2FbGcgj1POSFtxg0qHfgYrUCkYkE2CekIh06bndblONv6R3S5iZM9O7gMNBNdQOhAIA8tMpp2%2BpWHeyQRtWqwNCdbDFfnELW5ZZy%2F760fB977byL%2F3YpMt3SUkhXjBOHyVgboRfTpi3xYeCpPXakAL6OJ4g4irgVDsTKe9J8zts1D8N6uBQFWFSiPpHBpnWAAoN7MFom%2FYbzAYooPTVK3MLj2%2Br4GOqUBw%2FSq%2BaKt6FfN7GJA6G1OpT0gN1fYsxVgtWT%2Bif26SaIc3M7bD17%2FDOyDnYLICctaY41B7vuk4uUYU57yzMTsgRKbSsvn1pWu870MQt1%2BaPDsZg6tlgsAslyCYLwow%2BLNMjFZrqQoWKthIkfQFtAtqnRugJjujOMSpa7n7WItdYFEK2LgWp4fTdsvXaC47oQgePPL5WZeoBBHwZQV9Ufggb7r2g1X&X-Amz-Signature=e1b3b98ffe92c7eb850e4d52e17a3e8150486819c4dcf59c2d08b7e2bf244018&X-Amz-SignedHeaders=host&x-id=GetObject)

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
