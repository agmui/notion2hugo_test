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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NL6R5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWkveycLjkQEnJZfTF31OiOKDUDglaz3O4iGCYHGQy1AiAotEcaxfvoHi8wpvBC9VVudNnLpfN72WrKtB4w1LXFzCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyazwpTS7KiOJ0WKKtwDbgj7rLanxbvg3bY9tZwdFrk2KCIapnQOmxstMhBXKshOXEs0nC4DxpiyHDj45gRqVvICzOdeUcMUMm2qZ9IcoP4jjfNOGAeFdALI0ito0JI0%2F%2Fs2vzTkTSsTgo0pnWwSG%2Fv4n%2By4wXoVcRsv4cCA8SCI%2FmrYJLaH%2Fm0RPWWj%2FehJHjiY%2BQC0NzKYQRadhMLX%2BymC%2FQXxokBlFPA2t99wl6J6SgmTxfBgu6BNu9Pah%2BBBnwmRMtUebCO4K0byUiBQ8njevfuy7qBk0ob6MUC8NhJVYLH2A9KCengXwh%2BpM%2BP%2Fl3IBUpPHlGC%2BWtqVINHK6%2FTo34LkoJjbO1YtgaqDIwGUeM29v9aAG3VO7z%2FN2WOe8iPUi%2BNn8Tsfp2LB485AvGiWtk7jvgQoWGPwSA6KHFAxTrVBfK6QH1bKyYefoOz51wgRA1384pTDRrdFusxJ3fiGB7%2ByJfHH%2BxG0jy3VlcjzAhKPDmOwP%2FAakXkph%2FJKmQOAdU%2FZVGz48CawzL%2F4sy13tdVJQLJW2w0SGvXAzc5XLGfHtqyAimed7GuOHDSMz0eGjt%2BfLOllIHgqrtgp97Wg755Z6McQc%2BYhHHbNacHCqFXlCKLu5AT8htyUgLW1purpYon4VnX06Ucwta%2F9wAY6pgEZWxAdVRI4v1P06EnwSaiqpZn4FCdAH8IkXcKaRe85O3xcU%2BQnes7v4W5vLle8f%2BXbOzQzSswcnWTxQBH6Ehbse7BUSd7w8ld05lJhdiJJmIPMIN0Hx1GTZ3S2OAJEfZ5hH%2F7hIE2ewm3mtHBpJlGnrkiu4S08X4gNxpgNBT5OT7wJRmpZS1baOQJnECMv9AGdaKlyhP4jmSSCNVezVKFzlQkmfoGg&X-Amz-Signature=3def945e64536635413115008da450ab82894490c3d23ae073d3829640df3e90&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NL6R5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWkveycLjkQEnJZfTF31OiOKDUDglaz3O4iGCYHGQy1AiAotEcaxfvoHi8wpvBC9VVudNnLpfN72WrKtB4w1LXFzCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyazwpTS7KiOJ0WKKtwDbgj7rLanxbvg3bY9tZwdFrk2KCIapnQOmxstMhBXKshOXEs0nC4DxpiyHDj45gRqVvICzOdeUcMUMm2qZ9IcoP4jjfNOGAeFdALI0ito0JI0%2F%2Fs2vzTkTSsTgo0pnWwSG%2Fv4n%2By4wXoVcRsv4cCA8SCI%2FmrYJLaH%2Fm0RPWWj%2FehJHjiY%2BQC0NzKYQRadhMLX%2BymC%2FQXxokBlFPA2t99wl6J6SgmTxfBgu6BNu9Pah%2BBBnwmRMtUebCO4K0byUiBQ8njevfuy7qBk0ob6MUC8NhJVYLH2A9KCengXwh%2BpM%2BP%2Fl3IBUpPHlGC%2BWtqVINHK6%2FTo34LkoJjbO1YtgaqDIwGUeM29v9aAG3VO7z%2FN2WOe8iPUi%2BNn8Tsfp2LB485AvGiWtk7jvgQoWGPwSA6KHFAxTrVBfK6QH1bKyYefoOz51wgRA1384pTDRrdFusxJ3fiGB7%2ByJfHH%2BxG0jy3VlcjzAhKPDmOwP%2FAakXkph%2FJKmQOAdU%2FZVGz48CawzL%2F4sy13tdVJQLJW2w0SGvXAzc5XLGfHtqyAimed7GuOHDSMz0eGjt%2BfLOllIHgqrtgp97Wg755Z6McQc%2BYhHHbNacHCqFXlCKLu5AT8htyUgLW1purpYon4VnX06Ucwta%2F9wAY6pgEZWxAdVRI4v1P06EnwSaiqpZn4FCdAH8IkXcKaRe85O3xcU%2BQnes7v4W5vLle8f%2BXbOzQzSswcnWTxQBH6Ehbse7BUSd7w8ld05lJhdiJJmIPMIN0Hx1GTZ3S2OAJEfZ5hH%2F7hIE2ewm3mtHBpJlGnrkiu4S08X4gNxpgNBT5OT7wJRmpZS1baOQJnECMv9AGdaKlyhP4jmSSCNVezVKFzlQkmfoGg&X-Amz-Signature=6dbd6c68e2b34a91df8d3db86af6e321af6157749be0c175b2e324c040ac2360&X-Amz-SignedHeaders=host&x-id=GetObject)

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
