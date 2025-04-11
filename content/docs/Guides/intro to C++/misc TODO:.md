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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXVCXAC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID7GkGA8Il%2FluVxcrTzxG%2FVFbb28LFy%2B9CXx1KssFarOAiBtG4G%2BtBQfL3B4ggSqtHsyCD%2BiTKDIk%2B0sSCPsBOhfHSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXNeLZ5Z6QVEb0Y5KtwDzBx6rsKd%2BIHxiJNNbjm9DGpPJBayDm7eZVkdfP2%2Fs7KW74G%2B7%2BJd%2FehS46StJLgStx%2BIDHBeRj1MGIZ3VaMOarJJk%2BWjq9Tkd8UaVGhi%2BdCscv7o17UMWb%2BfIdrlFcm0epSrgGRGKLQAZG8IfdPu8kFN8WSGPwKNo5KBdcSLJ%2FO23KeOO8k550cFN0K0me3PL9ilX9gry1NikL1WoQaf6jBwkAxgqCtLneBtq9ummVBmF8HYSNmMXnMzPhnn8kWQl0rQDI3mfqL%2B2kwFc2trUrFPzG0IN1ZUaGd7H%2FLpNZfpcQKCGlhwOljTvxiF62IrfTaOPIFVibzRpqW1aQAc01xdQdOKXumBytFoJhz0DQVjchufKu04nbDjze4qJLOXuQKwOMrZ41zjXgVaBeZkRO40u16qCX8I4WJ1GbYtK%2BrvTAeWOMwQy%2BWfKCeB5kSaR%2B0Kes5Th2wWh5%2Ft2QLE6f4ldYhJxoaO4kgEx8caHyj4neaNgxY39F7MaZqyX1mbg5eCW3ty2mdsbm8whXbt5YjVmANsVthAbO2gRH2gM63edwRBH6yzhtu2ViBk3BlyHqmfieTr%2BuX%2BqPgjjPcjjicMT3dU6JbS3J1YdB6lr%2F1Hm%2Fdbh67ZokeQxzUwhLzmvwY6pgFS%2FOUfKtiVtvsD5GF%2BoL4JHYvCbHGMY9b5lqp89LqwDd2vddlgE%2B%2BNpZz5RhKVEQ0FVP39JgOoHKXFVuElmOXYEI4mnQmarHHwv63iYhlKU58Dv%2BdmK0loBzy687nowv2yLsVxcRFvwlGFRL7IM4vXFghKZ84pH0g4zv4of8K%2FRCqPXtMI9QgFrQRUDw4uSCefQA62%2Bl4EndRuWBjIDw%2BzskPtPwkD&X-Amz-Signature=d64918eb2fcdadfe630a4011a239f8a3eb8e4f41e17579830a7428f3ab8666dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXVCXAC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID7GkGA8Il%2FluVxcrTzxG%2FVFbb28LFy%2B9CXx1KssFarOAiBtG4G%2BtBQfL3B4ggSqtHsyCD%2BiTKDIk%2B0sSCPsBOhfHSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXNeLZ5Z6QVEb0Y5KtwDzBx6rsKd%2BIHxiJNNbjm9DGpPJBayDm7eZVkdfP2%2Fs7KW74G%2B7%2BJd%2FehS46StJLgStx%2BIDHBeRj1MGIZ3VaMOarJJk%2BWjq9Tkd8UaVGhi%2BdCscv7o17UMWb%2BfIdrlFcm0epSrgGRGKLQAZG8IfdPu8kFN8WSGPwKNo5KBdcSLJ%2FO23KeOO8k550cFN0K0me3PL9ilX9gry1NikL1WoQaf6jBwkAxgqCtLneBtq9ummVBmF8HYSNmMXnMzPhnn8kWQl0rQDI3mfqL%2B2kwFc2trUrFPzG0IN1ZUaGd7H%2FLpNZfpcQKCGlhwOljTvxiF62IrfTaOPIFVibzRpqW1aQAc01xdQdOKXumBytFoJhz0DQVjchufKu04nbDjze4qJLOXuQKwOMrZ41zjXgVaBeZkRO40u16qCX8I4WJ1GbYtK%2BrvTAeWOMwQy%2BWfKCeB5kSaR%2B0Kes5Th2wWh5%2Ft2QLE6f4ldYhJxoaO4kgEx8caHyj4neaNgxY39F7MaZqyX1mbg5eCW3ty2mdsbm8whXbt5YjVmANsVthAbO2gRH2gM63edwRBH6yzhtu2ViBk3BlyHqmfieTr%2BuX%2BqPgjjPcjjicMT3dU6JbS3J1YdB6lr%2F1Hm%2Fdbh67ZokeQxzUwhLzmvwY6pgFS%2FOUfKtiVtvsD5GF%2BoL4JHYvCbHGMY9b5lqp89LqwDd2vddlgE%2B%2BNpZz5RhKVEQ0FVP39JgOoHKXFVuElmOXYEI4mnQmarHHwv63iYhlKU58Dv%2BdmK0loBzy687nowv2yLsVxcRFvwlGFRL7IM4vXFghKZ84pH0g4zv4of8K%2FRCqPXtMI9QgFrQRUDw4uSCefQA62%2Bl4EndRuWBjIDw%2BzskPtPwkD&X-Amz-Signature=f46d7d5808da00d750fd63dfdd5233112fb2eed1f56424cf02905ad48f20a1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
