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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSNGPWW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtXKaLUHzaSZzkFijzSRZ815OHGAewXRjTC99w%2BbCnwAiEAqAW5ICmilVJ4BbxeezXWg7XI1oHUyNavq8hoZkW%2BJFYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDB3eousINLP9Y2RsGyrcAwyHuMbnAu3gGRArP9huHPpcZDr%2BdUc8flWl2IMKabpzoiE8oVRtTRZPfRXv%2F4cadM96YT%2FmQUWGKrE2RdhTc6tHrORd1B0igaoXT5uxrXg7VCOC7BAuhUZNbpzSHP8us9RH2cm6WCvEDjuJlik8EWHCGcSTP5jOV3aWTjnC3Wqhh6uFnEcumnbrbGPh6uy67XfxT2OPnae%2Bi2SNjuTTZGVOEGi7Y%2Bys9Y%2BshCeGzO%2F0%2FlCBg8lLcGoWH78pV7v9l9%2FSuft00C4cFpDZNLrncNcchEUZsQhW4Q7MFT7KqXGy6Ez%2FpxNmppHtnH8hUeFt7q%2FMeBUL%2FjfwDWY%2FAMgoyBlMcuPU3JOn5kiawcbpFXokEJIoP%2F9tPxppaNe9eQr50VxVBQ67SS0JzoJ4ta%2FCf3Ow7jPO%2FtkHB335ThqV1gr%2FBulk1BxG8QTxeAGieqzNbt%2FsQoHl2RTGFfxsRaYfqtd5ijgw%2BzIJBjQj4T9%2Fxert7PBbRjefr8VbkU6TtdGL2lvqsYjS1yZ1tydI3Prc69p%2BFe3Dq5Udl6faqDF9iybOzDqA7nkrKSCJCsapV8Ewa%2BsolK4uITTLFYBMFi%2FlliYqxtk8oYqPLR%2BDjKUZhHIM%2B8TjBVSUuY0RHGGeMIPK4L4GOqUBstOpEm7ojkdX%2B%2BvGnKWl1n9jvIY1trCNIoD8KhdCTsyoroHo6y6cTaObdpng34yuXYW8JCb4ZceHG%2FmemmBTa3TcUvve7s9Y6Dh5t9EfN%2FV0helekTn4oDXbk32FJKbjoLCOR%2BT17aRAsznqxr11mo4xeCpmfqWSrZxxODTFNOu4K%2FEGKIqu9Omzt7M8z5q6O5P1gDhymcjX%2FiYrIHIhI6UsGgix&X-Amz-Signature=70b4a47f6ddf58c40c1d938c1c74aeccb5a7cfd189cd3593c162a225f5ea8be9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSNGPWW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtXKaLUHzaSZzkFijzSRZ815OHGAewXRjTC99w%2BbCnwAiEAqAW5ICmilVJ4BbxeezXWg7XI1oHUyNavq8hoZkW%2BJFYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDB3eousINLP9Y2RsGyrcAwyHuMbnAu3gGRArP9huHPpcZDr%2BdUc8flWl2IMKabpzoiE8oVRtTRZPfRXv%2F4cadM96YT%2FmQUWGKrE2RdhTc6tHrORd1B0igaoXT5uxrXg7VCOC7BAuhUZNbpzSHP8us9RH2cm6WCvEDjuJlik8EWHCGcSTP5jOV3aWTjnC3Wqhh6uFnEcumnbrbGPh6uy67XfxT2OPnae%2Bi2SNjuTTZGVOEGi7Y%2Bys9Y%2BshCeGzO%2F0%2FlCBg8lLcGoWH78pV7v9l9%2FSuft00C4cFpDZNLrncNcchEUZsQhW4Q7MFT7KqXGy6Ez%2FpxNmppHtnH8hUeFt7q%2FMeBUL%2FjfwDWY%2FAMgoyBlMcuPU3JOn5kiawcbpFXokEJIoP%2F9tPxppaNe9eQr50VxVBQ67SS0JzoJ4ta%2FCf3Ow7jPO%2FtkHB335ThqV1gr%2FBulk1BxG8QTxeAGieqzNbt%2FsQoHl2RTGFfxsRaYfqtd5ijgw%2BzIJBjQj4T9%2Fxert7PBbRjefr8VbkU6TtdGL2lvqsYjS1yZ1tydI3Prc69p%2BFe3Dq5Udl6faqDF9iybOzDqA7nkrKSCJCsapV8Ewa%2BsolK4uITTLFYBMFi%2FlliYqxtk8oYqPLR%2BDjKUZhHIM%2B8TjBVSUuY0RHGGeMIPK4L4GOqUBstOpEm7ojkdX%2B%2BvGnKWl1n9jvIY1trCNIoD8KhdCTsyoroHo6y6cTaObdpng34yuXYW8JCb4ZceHG%2FmemmBTa3TcUvve7s9Y6Dh5t9EfN%2FV0helekTn4oDXbk32FJKbjoLCOR%2BT17aRAsznqxr11mo4xeCpmfqWSrZxxODTFNOu4K%2FEGKIqu9Omzt7M8z5q6O5P1gDhymcjX%2FiYrIHIhI6UsGgix&X-Amz-Signature=2893f2e382d42672f3a2870c0bf14dca96625a6d81bf27d63a0fc7eb0ffbcd42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
