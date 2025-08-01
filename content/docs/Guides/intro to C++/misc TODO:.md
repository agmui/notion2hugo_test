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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KPZJFG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTHXFR3V%2B6zndtUN0FjnUniY%2FEcllED3lEwriuKT%2B3AIhAI2FeeGKe%2BzyFlLKtqVY28dI5M7ieiPD0HC2phOM3qooKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuG819U0EaVw2fhOcq3ANqchprWx64u6SLbfl3%2FwZtzyJ75RbaBaV0hKdO7nLjz0x8n1s5GeTYRrBfBnKRwKxaPK1uv%2FDUkk%2FikfL85XRZHCVbaXAsIp%2B1WsN%2BbJ6hc19gMrYSw8Z5BrjSUDgo9ZpgzMathxX%2BTrIf8l6mtUFr4P1HRC4May%2BtWKs%2BGyOMvrKp%2FAa4XgF2A3RUcT8uElT%2FpLmMnrx6PAZDkQJHq2dF02IW4O7%2FgNMvd%2F7nQRC4sttt8%2FHzhD8GignZJGskJ5wFYh%2BH9wnxavcqe86URn%2F%2BbH%2Bafw52%2BYHyE7H%2F%2BtO3jRJO1qD2R1my3nsHzKmOuzWMxvx%2FYk8SN4Sy1mrinIVnaeZ%2BjN4Vxinz31BQJVrPF%2BznFk9O%2F3YJw6Zm2arLKfX%2FFmjWWHQ4l1zNUJjmrBatcO8NTWulNUqfeW%2BkEfbDMS2GO%2BS6tLZB3cSMAovlK61lMdVHQ%2FjRzT5MbNcL%2B3y2x2JPygg5%2FWlFcoM7nDXiz7f6z4PTRAh2y1IA0apPh%2B7Tl%2Fkl%2F1Ud4xkX1N8vkUlrs5cq3vjSyvr7BORP2da1nAKRaSm%2B3mz6AJczCMDYYm82Tgkvx0k4iyoWeiunTeL5cYb%2BiZnUkeM6jVHr90%2BCZS7XjNNijaftU%2B7LwzDDsLPEBjqkAWqfgrCbgLlJQM%2FEzv3F%2BZfEUbI5JnP2YO1ZuRPj3xh6DD2h3l0eNSgAC5PSDKwYadRTma%2BRTUvRMGi9zBmj9vv7eIHwuLcfQY6bJyqDZTjFU4CokyNwFI8D8iwXlHVY7oAnbNzdravQfVd%2Ffx8x9LUKzNIfpInTo6nG3VS9fx127UPHcUJduELhDeWn%2B8wI3cKax0Hp8WyTFDIYCewLZZmBFKAt&X-Amz-Signature=112e630da0eb7dac6b3665da4ea31ce5580a9a5b2cdef1e13bb433a7a9efb3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KPZJFG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTHXFR3V%2B6zndtUN0FjnUniY%2FEcllED3lEwriuKT%2B3AIhAI2FeeGKe%2BzyFlLKtqVY28dI5M7ieiPD0HC2phOM3qooKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuG819U0EaVw2fhOcq3ANqchprWx64u6SLbfl3%2FwZtzyJ75RbaBaV0hKdO7nLjz0x8n1s5GeTYRrBfBnKRwKxaPK1uv%2FDUkk%2FikfL85XRZHCVbaXAsIp%2B1WsN%2BbJ6hc19gMrYSw8Z5BrjSUDgo9ZpgzMathxX%2BTrIf8l6mtUFr4P1HRC4May%2BtWKs%2BGyOMvrKp%2FAa4XgF2A3RUcT8uElT%2FpLmMnrx6PAZDkQJHq2dF02IW4O7%2FgNMvd%2F7nQRC4sttt8%2FHzhD8GignZJGskJ5wFYh%2BH9wnxavcqe86URn%2F%2BbH%2Bafw52%2BYHyE7H%2F%2BtO3jRJO1qD2R1my3nsHzKmOuzWMxvx%2FYk8SN4Sy1mrinIVnaeZ%2BjN4Vxinz31BQJVrPF%2BznFk9O%2F3YJw6Zm2arLKfX%2FFmjWWHQ4l1zNUJjmrBatcO8NTWulNUqfeW%2BkEfbDMS2GO%2BS6tLZB3cSMAovlK61lMdVHQ%2FjRzT5MbNcL%2B3y2x2JPygg5%2FWlFcoM7nDXiz7f6z4PTRAh2y1IA0apPh%2B7Tl%2Fkl%2F1Ud4xkX1N8vkUlrs5cq3vjSyvr7BORP2da1nAKRaSm%2B3mz6AJczCMDYYm82Tgkvx0k4iyoWeiunTeL5cYb%2BiZnUkeM6jVHr90%2BCZS7XjNNijaftU%2B7LwzDDsLPEBjqkAWqfgrCbgLlJQM%2FEzv3F%2BZfEUbI5JnP2YO1ZuRPj3xh6DD2h3l0eNSgAC5PSDKwYadRTma%2BRTUvRMGi9zBmj9vv7eIHwuLcfQY6bJyqDZTjFU4CokyNwFI8D8iwXlHVY7oAnbNzdravQfVd%2Ffx8x9LUKzNIfpInTo6nG3VS9fx127UPHcUJduELhDeWn%2B8wI3cKax0Hp8WyTFDIYCewLZZmBFKAt&X-Amz-Signature=5df22a5011333e4049139b836c2cd1828f4b610f7933433be596e0555734c9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
