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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q675KHD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDzKkvoY5f3ymWKejSsBUaA6Ru5Z%2FnJz6C%2Byy%2Fp7JFiugIgBTVP3NY3qma%2BvNaYcwBCjDFCQxRcK3DgrZ9a9NFsycIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfYO4cHktlTfhlWTCrcA2WNdDCbXVV8dQGXLKSFTVXMOfVsimEZqzIbTYypMzcnpa0pWRUmXKo4DBqsEzG2TeQlf1xKGKqgtnrlGRNk85eBmxYIXcgHXdlcBhY%2B9g4AhfWuagyQa0lxusR7pFu4HZQbv4HpkbitlThRlVCpuPG5ek4zDdilXWV67ESpz3dw44zqEc0dGakzUmuZ84PvKaovhpwN2vc4kh33HshroOkl%2BnGF15I6RQxnNmHI865mI6xim%2BBO%2Bm2dxRpLRNgvM306OYdvZGTgjub0hzSf5dLkXoqrB%2BOeIaLNGd4Tb96YU9oNrFfI4zlp4%2BigrXm9%2FdAtm53WoW7DbHYzMqEiPMMPiJmsONa1lX4oV7GkGEXvq348Hfkqi5a%2B%2F3Wae40YnJGQywhgHbER17rF9YMeLlMG2y4XUty0y2j1e3rw16Ky7SLASNxSP3sZsCEvsYbRWEwjnxuiQRfha8XcpUCKSCZ0WtbcViuilJK2euacZNIXqwa9aL4Em2pbcZ0m7wT39MC6%2BF8RMpn2q4rRofI31KpW%2BhSq4cws%2FVLWhNANi08gnkjxYBvL2y%2FcmtolIWqq2%2FRyB0ha%2F%2FE%2FUMqobwyPIyx2tbxXQFGUaIOJNtqeXjSsWDN1cenF8HDYG2VcMLex48IGOqUBJ9k0lqIAG%2B%2BQaRR0xVFrHL3d68X%2BB4yIT0r2VHYqvkymXGh9nkRW5MHGWQm%2F5qpT1zRuGfLYWgnUvipKeBDoZ%2FcWJSHRRE5xZ8Vk%2BPp5T1Tg9OepNNDZAMHsE7Nqs2n%2FxCDBwwRwJb5pWMqTow4Soi1D5a38yj13QD9NvAOLvvluQDzdQ2OErMAMy6V7c8%2Fe3tPxkxJKkR335HGIBAWhvd8Av7SD&X-Amz-Signature=d5bde9e4b2cc3cd411916a3038d50dbaaf6ba79e71ccf8ab02371c1abcf2c80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q675KHD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDzKkvoY5f3ymWKejSsBUaA6Ru5Z%2FnJz6C%2Byy%2Fp7JFiugIgBTVP3NY3qma%2BvNaYcwBCjDFCQxRcK3DgrZ9a9NFsycIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfYO4cHktlTfhlWTCrcA2WNdDCbXVV8dQGXLKSFTVXMOfVsimEZqzIbTYypMzcnpa0pWRUmXKo4DBqsEzG2TeQlf1xKGKqgtnrlGRNk85eBmxYIXcgHXdlcBhY%2B9g4AhfWuagyQa0lxusR7pFu4HZQbv4HpkbitlThRlVCpuPG5ek4zDdilXWV67ESpz3dw44zqEc0dGakzUmuZ84PvKaovhpwN2vc4kh33HshroOkl%2BnGF15I6RQxnNmHI865mI6xim%2BBO%2Bm2dxRpLRNgvM306OYdvZGTgjub0hzSf5dLkXoqrB%2BOeIaLNGd4Tb96YU9oNrFfI4zlp4%2BigrXm9%2FdAtm53WoW7DbHYzMqEiPMMPiJmsONa1lX4oV7GkGEXvq348Hfkqi5a%2B%2F3Wae40YnJGQywhgHbER17rF9YMeLlMG2y4XUty0y2j1e3rw16Ky7SLASNxSP3sZsCEvsYbRWEwjnxuiQRfha8XcpUCKSCZ0WtbcViuilJK2euacZNIXqwa9aL4Em2pbcZ0m7wT39MC6%2BF8RMpn2q4rRofI31KpW%2BhSq4cws%2FVLWhNANi08gnkjxYBvL2y%2FcmtolIWqq2%2FRyB0ha%2F%2FE%2FUMqobwyPIyx2tbxXQFGUaIOJNtqeXjSsWDN1cenF8HDYG2VcMLex48IGOqUBJ9k0lqIAG%2B%2BQaRR0xVFrHL3d68X%2BB4yIT0r2VHYqvkymXGh9nkRW5MHGWQm%2F5qpT1zRuGfLYWgnUvipKeBDoZ%2FcWJSHRRE5xZ8Vk%2BPp5T1Tg9OepNNDZAMHsE7Nqs2n%2FxCDBwwRwJb5pWMqTow4Soi1D5a38yj13QD9NvAOLvvluQDzdQ2OErMAMy6V7c8%2Fe3tPxkxJKkR335HGIBAWhvd8Av7SD&X-Amz-Signature=baf7be63c67af2226ba151cf44d14dbfa779b0704288ac8d287a5e815237a8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
