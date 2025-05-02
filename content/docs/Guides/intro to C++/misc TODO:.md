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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2B4R3K5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICOE06751vdSCfy51%2F0WLfoVnVGdOynv2oQa6TAaI%2BsvAiBFDNERCH1YGdXStAeHF5C%2BRAwM85HSlWobFggBelAMuiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQpoZ83WlFBOz4S4uKtwDl6pH4rfhivskrqP2AzG8hx5MRmQqN3vMIbEfQ2FruwdaamcT%2FhVM19CSXbjYRcjRuiUZmZpbdL%2BfktMcaV7kIRdMJjviqtohLZJ0jP3Ycy0OV7pxm0s%2FCgANlJHNVBQoNlstXzXWjXfAaAFBojpIZ%2BCWR7k4AoyB%2F8u682lcnhvCO58IVHP%2BRmvn1T0WQAn5oM1gVLoernKuoLy%2BKxPr1GH54nefvdbY4oUtztCs2W6wCGKzlT%2FyPc2HFKT77LIqh8Lodn1kmMKfFpUyNhZTO0bxklKGq53TzddSDVrBebLtevSsFPpdx56EuyZa2AkXWB2QFKYcwPNK%2B46RK4L9mn6eKSpIR72jSKC8fpqypFyhBP%2BQZoGkmyTs0qqWRDEvXuVvk2VvESdbBcNs1BcCrxGw6hBeW%2BlGwCDPFnagbb2CQld9MAhRyfAHOjIoNB1AeGGddEnsNYRqUyGp62XuIeYPa90z2wM2t0oBo20kp8uKTb%2BRJM8zdFcahIlpPpmH62MvNQhvuklvk9cvsW%2BbXQ849W6sxEcE3sRCqjyiQap3qbpUGrPDcYfkvPf%2Bbeq0dhSyYCX1zyxuDlhZdgAFs3Eaq884lYJMfFTOAXZLihO5QSkve9%2FiPVqmfQUwoOTTwAY6pgHz7l2xIa%2FJMP0huiR1d9%2Bear%2BChs4S1Az%2BcFx7hGac50PvyuTBtbhWkjUI4GajdKKqxQSx3QPyqNXo%2BU5KWp7Py62IDfHXpSIn1sGqsydLOe6wEs7cev2KEnMGVZOsuVysPEK1eM1WaT%2FIvOvnl7kbQ8sLrlBDWB55Fe4GwAzuOTpHdJnUul4HIIBJcBRrWObFXITv3vdXaLAm4zLUGlptvtR10IOw&X-Amz-Signature=fe8cf953e87139fc2ca8ce4d77d60ffff609eacaf485c5b7ef47174333e46109&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2B4R3K5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICOE06751vdSCfy51%2F0WLfoVnVGdOynv2oQa6TAaI%2BsvAiBFDNERCH1YGdXStAeHF5C%2BRAwM85HSlWobFggBelAMuiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQpoZ83WlFBOz4S4uKtwDl6pH4rfhivskrqP2AzG8hx5MRmQqN3vMIbEfQ2FruwdaamcT%2FhVM19CSXbjYRcjRuiUZmZpbdL%2BfktMcaV7kIRdMJjviqtohLZJ0jP3Ycy0OV7pxm0s%2FCgANlJHNVBQoNlstXzXWjXfAaAFBojpIZ%2BCWR7k4AoyB%2F8u682lcnhvCO58IVHP%2BRmvn1T0WQAn5oM1gVLoernKuoLy%2BKxPr1GH54nefvdbY4oUtztCs2W6wCGKzlT%2FyPc2HFKT77LIqh8Lodn1kmMKfFpUyNhZTO0bxklKGq53TzddSDVrBebLtevSsFPpdx56EuyZa2AkXWB2QFKYcwPNK%2B46RK4L9mn6eKSpIR72jSKC8fpqypFyhBP%2BQZoGkmyTs0qqWRDEvXuVvk2VvESdbBcNs1BcCrxGw6hBeW%2BlGwCDPFnagbb2CQld9MAhRyfAHOjIoNB1AeGGddEnsNYRqUyGp62XuIeYPa90z2wM2t0oBo20kp8uKTb%2BRJM8zdFcahIlpPpmH62MvNQhvuklvk9cvsW%2BbXQ849W6sxEcE3sRCqjyiQap3qbpUGrPDcYfkvPf%2Bbeq0dhSyYCX1zyxuDlhZdgAFs3Eaq884lYJMfFTOAXZLihO5QSkve9%2FiPVqmfQUwoOTTwAY6pgHz7l2xIa%2FJMP0huiR1d9%2Bear%2BChs4S1Az%2BcFx7hGac50PvyuTBtbhWkjUI4GajdKKqxQSx3QPyqNXo%2BU5KWp7Py62IDfHXpSIn1sGqsydLOe6wEs7cev2KEnMGVZOsuVysPEK1eM1WaT%2FIvOvnl7kbQ8sLrlBDWB55Fe4GwAzuOTpHdJnUul4HIIBJcBRrWObFXITv3vdXaLAm4zLUGlptvtR10IOw&X-Amz-Signature=33094a89aa83361322f7c332c683d3fb6ffbf6dca1f9ff1e7f4ec09c8e512fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
