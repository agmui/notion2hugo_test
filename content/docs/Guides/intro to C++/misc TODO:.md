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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MM72P2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQChmyXXb7HTUL199r8o5XagMqNFvRSrTb26qWKcEtpXigIgTihc2WdCJcZ%2BDFbFIhgIN9NHuppp0a4HWY%2F1YNhWDnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqnQTSPj6nhpwK2qircAycnPq3cYKvpMQSeteEyc%2FRcrpXcXQKbkfgL%2Bz694c%2FnIR4sMfQ0Dm7ZxFRIUchWlP9%2BAHPzQzIQExXOtIMR6FSDiPTl1Kk8ro5OZvY%2BbBhaKXlWrSpLShSW95SBlq6vlQ0hMSA44In%2BQoWgvVI9PMEIxO7j3QFA3RIM84yawZF1hyit0%2BlBfHxbjU%2FmUEokb34sArBMU6X002Q9RXNFThhNORQFC3%2B%2FOSSsXyKQiabHvuhByT6jZ4QarCnyX%2Fqiezb7FAUJHepboRXMro55RPM%2FKPQiCODXJ%2BxLbw075QrYi5mGoznN8IhlXWe%2F54Wv5sirKB6cxmD4LAKoqUMy1vCwJXpAmBWD6LdyKN55Ur4ULl6D5h%2FLnozWxTTStA43htI0b9oZ3WPJdIgArzXJjEmtRfM4V44%2BkPxkGb%2FnwWib2uM8P2dqK1tjlInZ5z%2F5k8ivkYEP29gj%2FYoOD9sR72Hbd%2Btca8T3k2ZePwEjI7J5PR69knGDWsxdpiKSczvivjAv8TkoLg1kIn94SduLjQCSFkQLWIl0g7BoPr%2Bu2CMpGh5ecl4k9RaoXIVtshHU0nWi4pkH79cCKoIne68nWum6bwfS2vAm4nz1%2BMdk5tfqkmjLNjRiieCD1YSzMNXXj74GOqUBpEXFTB7VynFK6dnRCvddW9dYxrjvGD1A0HkzWxpoFIM%2BwZcULtAtzVI5n1H7wVdeNa%2BMfE8m9kJckn2rWFKRQVEQykTCGwr8%2FUD5o3IHdR5NPxql%2FD0iYIqaZFu092u3jOf%2Fx0HmiEfgkEoKNnNHLUlfiWkAbrTgmrDA1p%2BclWaKTu%2BNpn99akYQquhitg8I6b3T966BTEa8ZoWKR8OuWyvtlGqN&X-Amz-Signature=e44e001e356d1c1afcaba808c74604f88a62f97ab905870b120fa99ee4f259fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MM72P2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQChmyXXb7HTUL199r8o5XagMqNFvRSrTb26qWKcEtpXigIgTihc2WdCJcZ%2BDFbFIhgIN9NHuppp0a4HWY%2F1YNhWDnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqnQTSPj6nhpwK2qircAycnPq3cYKvpMQSeteEyc%2FRcrpXcXQKbkfgL%2Bz694c%2FnIR4sMfQ0Dm7ZxFRIUchWlP9%2BAHPzQzIQExXOtIMR6FSDiPTl1Kk8ro5OZvY%2BbBhaKXlWrSpLShSW95SBlq6vlQ0hMSA44In%2BQoWgvVI9PMEIxO7j3QFA3RIM84yawZF1hyit0%2BlBfHxbjU%2FmUEokb34sArBMU6X002Q9RXNFThhNORQFC3%2B%2FOSSsXyKQiabHvuhByT6jZ4QarCnyX%2Fqiezb7FAUJHepboRXMro55RPM%2FKPQiCODXJ%2BxLbw075QrYi5mGoznN8IhlXWe%2F54Wv5sirKB6cxmD4LAKoqUMy1vCwJXpAmBWD6LdyKN55Ur4ULl6D5h%2FLnozWxTTStA43htI0b9oZ3WPJdIgArzXJjEmtRfM4V44%2BkPxkGb%2FnwWib2uM8P2dqK1tjlInZ5z%2F5k8ivkYEP29gj%2FYoOD9sR72Hbd%2Btca8T3k2ZePwEjI7J5PR69knGDWsxdpiKSczvivjAv8TkoLg1kIn94SduLjQCSFkQLWIl0g7BoPr%2Bu2CMpGh5ecl4k9RaoXIVtshHU0nWi4pkH79cCKoIne68nWum6bwfS2vAm4nz1%2BMdk5tfqkmjLNjRiieCD1YSzMNXXj74GOqUBpEXFTB7VynFK6dnRCvddW9dYxrjvGD1A0HkzWxpoFIM%2BwZcULtAtzVI5n1H7wVdeNa%2BMfE8m9kJckn2rWFKRQVEQykTCGwr8%2FUD5o3IHdR5NPxql%2FD0iYIqaZFu092u3jOf%2Fx0HmiEfgkEoKNnNHLUlfiWkAbrTgmrDA1p%2BclWaKTu%2BNpn99akYQquhitg8I6b3T966BTEa8ZoWKR8OuWyvtlGqN&X-Amz-Signature=93624ac964dfdae434dbf6c9a3b5d6d983f44271fc058a2912389f828884d27d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
