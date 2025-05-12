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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBIH7NO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFdoRD8rfIBKomSsEiGCJrqudwIOSchrW5f6QFb4RFPLAiEA8nK7EZre6kcnAu1AKv2Uomi%2Bde93gcP7lZ2qAU4wAeAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInG8nay51xKKX9gHircAwo6mGEzA2Kjvfne2%2BmiBJxBZAZcNv4BTA18cU%2BcOTpuqEZkDJ%2BuTd%2BYabt%2FuJZGyo3coO%2F57oiSYZmaKSNh0ur56UBez5V1t9Lo%2BDjL7y4Xxp6fiCERk7euxnz2zi5I2Y8gdOEtTfmBMLQN0X9t3OBZBIhbOdQax1z0HuPC5fRXNNEPG7%2BOXScurJ6AL2r%2Fmh%2FTXtWkI3D0V81nzyxBs%2FX7GdPpLflOUtfbHURLF80thpv69HDiCVRcRHceTZ3qio09ZebD3UiTf6TmUOslAGaffKIHjO%2BLkI8jM1W2JH9iBLSagNOt9gopfK09U7%2BLz3cxuZlPWtKWurxb1YryWwz0B%2B89I2ygJeu3mljh11oU44pTo8Q037dlJUXMFMb1RfsKvvs9fgW8Iishf2VgbzJtXYAGlYLSOE7Qi1CtrUfU12qD%2Bl%2BuV9se45DP7bOwm%2B0tXV5pw%2FjaQpEus2CTvzYipFNvKTtPzQDk%2BvFLVJH0KpOVMtciTM6%2FM6ABQTuyIMdg%2FHfushypU2j%2BR8PHhnzmkcVJRiw%2Bq5oBOFSNE4PKqXQ1Ju%2FTxwbANIv2Vky3TYRYHmnAJkeUOTr%2Bpi%2F8%2FYu4ziqWQ2fmtVfLxQhvCgQpikdT6ZufekuB3e9VMPqOhcEGOqUBSkBMJN4lmrGxOfEroG0Dj6bov3AvAT2rHpdGpuLK3iPSxGYI8vtIOU80vJaiwgVFqUqhTjCgekTnfhzLSFe8YrBsmwbj4SO5Q%2BV1kbI9FQZwiKjEOiX0X%2FNh7Yekt75eeVMwqWcSIWHHFZY75EJNiqrKEDihquZAAtXJsq49MnjDR67SwMVpad4vdgfrW6qNslEMweMyqNJj1MBMnxlG5XKkwLY%2F&X-Amz-Signature=5de6170055b5d8e60d37c04fb79978893b6350909e4a93ffa4f99118a8269f76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBIH7NO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFdoRD8rfIBKomSsEiGCJrqudwIOSchrW5f6QFb4RFPLAiEA8nK7EZre6kcnAu1AKv2Uomi%2Bde93gcP7lZ2qAU4wAeAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInG8nay51xKKX9gHircAwo6mGEzA2Kjvfne2%2BmiBJxBZAZcNv4BTA18cU%2BcOTpuqEZkDJ%2BuTd%2BYabt%2FuJZGyo3coO%2F57oiSYZmaKSNh0ur56UBez5V1t9Lo%2BDjL7y4Xxp6fiCERk7euxnz2zi5I2Y8gdOEtTfmBMLQN0X9t3OBZBIhbOdQax1z0HuPC5fRXNNEPG7%2BOXScurJ6AL2r%2Fmh%2FTXtWkI3D0V81nzyxBs%2FX7GdPpLflOUtfbHURLF80thpv69HDiCVRcRHceTZ3qio09ZebD3UiTf6TmUOslAGaffKIHjO%2BLkI8jM1W2JH9iBLSagNOt9gopfK09U7%2BLz3cxuZlPWtKWurxb1YryWwz0B%2B89I2ygJeu3mljh11oU44pTo8Q037dlJUXMFMb1RfsKvvs9fgW8Iishf2VgbzJtXYAGlYLSOE7Qi1CtrUfU12qD%2Bl%2BuV9se45DP7bOwm%2B0tXV5pw%2FjaQpEus2CTvzYipFNvKTtPzQDk%2BvFLVJH0KpOVMtciTM6%2FM6ABQTuyIMdg%2FHfushypU2j%2BR8PHhnzmkcVJRiw%2Bq5oBOFSNE4PKqXQ1Ju%2FTxwbANIv2Vky3TYRYHmnAJkeUOTr%2Bpi%2F8%2FYu4ziqWQ2fmtVfLxQhvCgQpikdT6ZufekuB3e9VMPqOhcEGOqUBSkBMJN4lmrGxOfEroG0Dj6bov3AvAT2rHpdGpuLK3iPSxGYI8vtIOU80vJaiwgVFqUqhTjCgekTnfhzLSFe8YrBsmwbj4SO5Q%2BV1kbI9FQZwiKjEOiX0X%2FNh7Yekt75eeVMwqWcSIWHHFZY75EJNiqrKEDihquZAAtXJsq49MnjDR67SwMVpad4vdgfrW6qNslEMweMyqNJj1MBMnxlG5XKkwLY%2F&X-Amz-Signature=3d0b74c104f50f93623aa8f4518e149827c379e3f559c33a122c12d21e5a0cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
