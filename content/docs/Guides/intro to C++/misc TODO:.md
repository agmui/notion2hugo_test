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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSAHN2A%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDAnD4Zlx8uUzLm95dRRLbIknKlcsnkiGPkSa5SpWDrigIhAL6SL5VBXiCtodaIkgz3vymFDxKclGdBVqdrZPafYrIVKv8DCGgQABoMNjM3NDIzMTgzODA1Igw3DcUNv4NZW1WBbIsq3AOxE7Q%2B7CZx%2BvQY6UcO7wW5C3qdBzJ%2F22cggIdlMKiSnej52bUVMy89pZpM0VlTCauQ%2Ffb7%2Bmllv7jcQTRfpl6Sma8TuzNorC1zvCuJDj7TEvrN3OWhnSV4yc1gGrS6YMQQ%2FR44ENstassMihENLgDzIAuw%2BPbleWBKBw%2BS%2FXEOWUhCG%2BBgs%2FjJ9h%2FxYg%2F8jfY2c35nxYRR21Zbcsm%2FMq7YfQBxGSqLtOwqyQb7%2BSKdvBXCy5ZlW8pvDURNf8mH0Ch9iEFAKDdm9Zb8ArDMmLl4WoPugdXvt3MJHYXJsSFRHk39ZNv2XyuTSB8p06MPNDCpGZaJaK5w1lKGBaGIfoIvWRp8hASlmXGRl05Tni0zJ6MVY8E5lbuHyQX7Z74AvAtkXquxYpPTSMy4i1PgzSGJ4KHlj03qDzKN5EouUqvnAA9UMFlaKXAWiN8YtdjUBYSmsrnF%2FvqQfjA%2FamH%2BMtJww9DQ7FVtR1EIOKuFtuxNGhIi07Z%2Fvtb1Tdt19hEIi9juAC%2Bj9Ncb%2FnWRbYe4M2cq60MEkkH2hMrzQD%2F%2B%2FIaYLezKLF2ApzSVyBWv3%2FEpayFKmVawh%2FP6XjGqQhTj3sR1Zihs8T7Ui1KBdYvXXzhzJfw0ODIs2BbbiPbKITCT35y%2FBjqkAfb6gsJMACMFKpr0xZvUN3Dw7nX%2BxRPOPhqE3drKJLvFNG7vcqf3HfsQte2onLO7koPZ0VTUlwXc3bvz42KKHdEcKNBR9%2BF%2BWhyxm%2FPxDO74DAgMK5jzbRHQb0%2F4fTSbXzO8Kq4MWHaAA%2BhzBvO3ZVb3z5wf6AqYTFnygdSNvLiSrEJtMm8RTY3Yes9pyjdTyRE4HMCm5QtbnMRBC0lnAkzsUkYf&X-Amz-Signature=85151106ad42af5cfd83b99c47fb5dbbcf9e87622ffc5735a6dd48176dfb24f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSAHN2A%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDAnD4Zlx8uUzLm95dRRLbIknKlcsnkiGPkSa5SpWDrigIhAL6SL5VBXiCtodaIkgz3vymFDxKclGdBVqdrZPafYrIVKv8DCGgQABoMNjM3NDIzMTgzODA1Igw3DcUNv4NZW1WBbIsq3AOxE7Q%2B7CZx%2BvQY6UcO7wW5C3qdBzJ%2F22cggIdlMKiSnej52bUVMy89pZpM0VlTCauQ%2Ffb7%2Bmllv7jcQTRfpl6Sma8TuzNorC1zvCuJDj7TEvrN3OWhnSV4yc1gGrS6YMQQ%2FR44ENstassMihENLgDzIAuw%2BPbleWBKBw%2BS%2FXEOWUhCG%2BBgs%2FjJ9h%2FxYg%2F8jfY2c35nxYRR21Zbcsm%2FMq7YfQBxGSqLtOwqyQb7%2BSKdvBXCy5ZlW8pvDURNf8mH0Ch9iEFAKDdm9Zb8ArDMmLl4WoPugdXvt3MJHYXJsSFRHk39ZNv2XyuTSB8p06MPNDCpGZaJaK5w1lKGBaGIfoIvWRp8hASlmXGRl05Tni0zJ6MVY8E5lbuHyQX7Z74AvAtkXquxYpPTSMy4i1PgzSGJ4KHlj03qDzKN5EouUqvnAA9UMFlaKXAWiN8YtdjUBYSmsrnF%2FvqQfjA%2FamH%2BMtJww9DQ7FVtR1EIOKuFtuxNGhIi07Z%2Fvtb1Tdt19hEIi9juAC%2Bj9Ncb%2FnWRbYe4M2cq60MEkkH2hMrzQD%2F%2B%2FIaYLezKLF2ApzSVyBWv3%2FEpayFKmVawh%2FP6XjGqQhTj3sR1Zihs8T7Ui1KBdYvXXzhzJfw0ODIs2BbbiPbKITCT35y%2FBjqkAfb6gsJMACMFKpr0xZvUN3Dw7nX%2BxRPOPhqE3drKJLvFNG7vcqf3HfsQte2onLO7koPZ0VTUlwXc3bvz42KKHdEcKNBR9%2BF%2BWhyxm%2FPxDO74DAgMK5jzbRHQb0%2F4fTSbXzO8Kq4MWHaAA%2BhzBvO3ZVb3z5wf6AqYTFnygdSNvLiSrEJtMm8RTY3Yes9pyjdTyRE4HMCm5QtbnMRBC0lnAkzsUkYf&X-Amz-Signature=fb29594bd44ba9b49ecebf5b5f5c724c934f34ba797060a505955e9a17812740&X-Amz-SignedHeaders=host&x-id=GetObject)

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
