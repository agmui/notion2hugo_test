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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5XJTRX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvGR5T2R6ciUsmbwQklNjz8e0x%2BDvUUN6%2FitkbGfMvPAiBVjvx%2BXue5u0DibnU6%2FFekL0jspNffzW19DNEpBiu5jSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMuEYfOW%2B2yuvfyiAEKtwDU%2BO%2B4Vhxyv4slTUj47rgfp3%2FZHbBAdtBJzebEMDhDJLrKpVruKXsNEwXpwb7mGJh%2BydXIyIdtF2avktSK%2FSrts5ZdolvfsSMld34LC5R1PVAYiJUdB61kS5tYIIk77%2FFFi7oylGbo%2BvRE3z%2B02mARsgbhVE6gMfAltfDU8l96CSiUT%2BcmXxn4eZ6he7n4kvyw0C92Z44MGApXhPBkMP9bDx2Q18NtTVLO6S7AJ61zGteBoNRZz6FylllB05tDFVivUjF5pf3WfHaIDuMyhPPQSZ4tWzLlGRuWtEEsaIVRePSpoxFUJLK%2FYmsWmH%2FDqYt%2BOpaXl%2Fgq24LwSGaWMHMk2g9LY11X%2FqYwUZB2C9RJ1QQKa6lNzduXeq5IFUAdjQDZY%2FVpQg3hodRFlflJayNZkdHxf6kVl0THfYSDDyMmgS0pXRB3GQCncaNFPyhgy4GzzqiZddVuVK8OuUTAEtkvJ0QCZ8siJsyuIxJYdeqrVLVABxSbWCu%2FhVyWf9Ond%2BKw8Q7T91KA5NbEEr%2FfNhuw%2FImBUwObxrPkxrE9GG2F7y2hzqgE2FMP2IRGi6u8oFw73%2Fj1M3isZ13qhn%2FH8V2dJAzZmKY9uiu9usaCfK35An1t746dI3HGMGeaHUw%2Bu%2FVvgY6pgEcJu%2B9urBWuIaM%2FEVhPcaiXUrTL7VU5GL2hRxJF%2Bl3WMWDvVEC9GoE2PLrS%2FtShzXy%2FmCnVp20yieCOrKHtmVSBvsMUx9iYLpM8e6dwWrH2%2FuOmP9joKa4rf8C6GyQ2Z4jPZB34qQjqcgzBUnpXQ3jMguoyqUlLTHI3lULuYjjOqJg%2BQEMqRnkDmMBPfYWBx3k7ZQXQxgnaElG3mRmtEmYeWObBLXC&X-Amz-Signature=9ffc84571c224e1666b651d7e8e322060c75ca8071c1dff455bac6389bc4a8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5XJTRX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvGR5T2R6ciUsmbwQklNjz8e0x%2BDvUUN6%2FitkbGfMvPAiBVjvx%2BXue5u0DibnU6%2FFekL0jspNffzW19DNEpBiu5jSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMuEYfOW%2B2yuvfyiAEKtwDU%2BO%2B4Vhxyv4slTUj47rgfp3%2FZHbBAdtBJzebEMDhDJLrKpVruKXsNEwXpwb7mGJh%2BydXIyIdtF2avktSK%2FSrts5ZdolvfsSMld34LC5R1PVAYiJUdB61kS5tYIIk77%2FFFi7oylGbo%2BvRE3z%2B02mARsgbhVE6gMfAltfDU8l96CSiUT%2BcmXxn4eZ6he7n4kvyw0C92Z44MGApXhPBkMP9bDx2Q18NtTVLO6S7AJ61zGteBoNRZz6FylllB05tDFVivUjF5pf3WfHaIDuMyhPPQSZ4tWzLlGRuWtEEsaIVRePSpoxFUJLK%2FYmsWmH%2FDqYt%2BOpaXl%2Fgq24LwSGaWMHMk2g9LY11X%2FqYwUZB2C9RJ1QQKa6lNzduXeq5IFUAdjQDZY%2FVpQg3hodRFlflJayNZkdHxf6kVl0THfYSDDyMmgS0pXRB3GQCncaNFPyhgy4GzzqiZddVuVK8OuUTAEtkvJ0QCZ8siJsyuIxJYdeqrVLVABxSbWCu%2FhVyWf9Ond%2BKw8Q7T91KA5NbEEr%2FfNhuw%2FImBUwObxrPkxrE9GG2F7y2hzqgE2FMP2IRGi6u8oFw73%2Fj1M3isZ13qhn%2FH8V2dJAzZmKY9uiu9usaCfK35An1t746dI3HGMGeaHUw%2Bu%2FVvgY6pgEcJu%2B9urBWuIaM%2FEVhPcaiXUrTL7VU5GL2hRxJF%2Bl3WMWDvVEC9GoE2PLrS%2FtShzXy%2FmCnVp20yieCOrKHtmVSBvsMUx9iYLpM8e6dwWrH2%2FuOmP9joKa4rf8C6GyQ2Z4jPZB34qQjqcgzBUnpXQ3jMguoyqUlLTHI3lULuYjjOqJg%2BQEMqRnkDmMBPfYWBx3k7ZQXQxgnaElG3mRmtEmYeWObBLXC&X-Amz-Signature=2244ff52bd35a9af6e94dc940c0cb25d58d85c4922eb27150504c2fd897225b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
