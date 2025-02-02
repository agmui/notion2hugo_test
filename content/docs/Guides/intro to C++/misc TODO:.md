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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3P3QOIB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXLyIhfLMKHvmTUoeT0wWo2NcnBp4OBfOUEtCcJ3hI5QIgfbhRQ%2BYVc%2BEtGow225KVmsXY38omGpCndBBQPY%2FqZ6IqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9OsC6NRp7TZggFHircA2zE94l0D9039fPYqj74OcAUZ2AKdJJtaTxKbe10QT%2B9cROVSMgAvYVYM0WYan9IE%2F7sM6nBg5WsZdpYVef6MwmFsfv5vENyXBBU6nZfFp5bb9Ub9cKOAGmSqp4auB71ZXgBiF1lyDPEVc%2FXc1oHnfJfeYf4cu%2FGvgTPgqBNN8rmZqbuQ%2FRyY4uO73bwevV0ChLz%2FGlaJsQKdlc2ny5uUz1I6%2BNSO7uzV3Y7tAKuKkEH%2BiLjeByBTc%2FROTkLVkr7g2XE0UfU%2BIKIfjXcXVUECGn6rxac%2Bzx6pm%2FD8IcMlkhE0H3mS7TwiqgKys0yBXWnbmYkUdiSZGugb8X%2FtUOS%2BeL%2FyklEARQ0RD9CGy16FGDpsm7p7VJ%2Bm%2B9JGL1ztTOuPWBhEY6pC8QrzMxTADHxVZMk2NqaHq1YcuRpLg3YdjC2Q0%2B3%2BaFwXfYMGzaj0UuCE%2BY%2BwW%2F4G8dIbS6txGaU%2FHNhajQlCOWYCpMcEOOVpSDSMDSC1YiyVMW%2BOCYtKJ4k30umX62U3nYrW6uVOVVyQ%2BvY96A1XUprKfBhlWLL34uxQtKXESd6s12ZO%2BlLVJx%2BJqbsE4vt4p7wg%2Ff09RG2u9uPfWPOclcojvmiYFsiFznEG9e0xIaBYtyXbVZVMLOd%2FLwGOqUBK5oqwcip3iNWN%2B3dbiVqz9YQ5bOHmHdVHEZIc31tQ54NIocG9Wpo%2FR8FyPprPafcFRkcV8X6pGozStYSN8khlVbVHa4StiueswbYp1dPjldaDZVsqJ%2F%2Bml0BKb2Vj%2BvZBJEtRHNc9zyoniO0muW%2FS9L%2FD8b8qm4SSJ%2BL8zrVG7oUyTmeG0wWhlQnDzIDSlAchL3DTrs95qZEAftFXSJJdOliub4x&X-Amz-Signature=179d48ea98173df4d38aac5bbae972271e9164ea26d20688894466fe0671a141&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3P3QOIB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXLyIhfLMKHvmTUoeT0wWo2NcnBp4OBfOUEtCcJ3hI5QIgfbhRQ%2BYVc%2BEtGow225KVmsXY38omGpCndBBQPY%2FqZ6IqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9OsC6NRp7TZggFHircA2zE94l0D9039fPYqj74OcAUZ2AKdJJtaTxKbe10QT%2B9cROVSMgAvYVYM0WYan9IE%2F7sM6nBg5WsZdpYVef6MwmFsfv5vENyXBBU6nZfFp5bb9Ub9cKOAGmSqp4auB71ZXgBiF1lyDPEVc%2FXc1oHnfJfeYf4cu%2FGvgTPgqBNN8rmZqbuQ%2FRyY4uO73bwevV0ChLz%2FGlaJsQKdlc2ny5uUz1I6%2BNSO7uzV3Y7tAKuKkEH%2BiLjeByBTc%2FROTkLVkr7g2XE0UfU%2BIKIfjXcXVUECGn6rxac%2Bzx6pm%2FD8IcMlkhE0H3mS7TwiqgKys0yBXWnbmYkUdiSZGugb8X%2FtUOS%2BeL%2FyklEARQ0RD9CGy16FGDpsm7p7VJ%2Bm%2B9JGL1ztTOuPWBhEY6pC8QrzMxTADHxVZMk2NqaHq1YcuRpLg3YdjC2Q0%2B3%2BaFwXfYMGzaj0UuCE%2BY%2BwW%2F4G8dIbS6txGaU%2FHNhajQlCOWYCpMcEOOVpSDSMDSC1YiyVMW%2BOCYtKJ4k30umX62U3nYrW6uVOVVyQ%2BvY96A1XUprKfBhlWLL34uxQtKXESd6s12ZO%2BlLVJx%2BJqbsE4vt4p7wg%2Ff09RG2u9uPfWPOclcojvmiYFsiFznEG9e0xIaBYtyXbVZVMLOd%2FLwGOqUBK5oqwcip3iNWN%2B3dbiVqz9YQ5bOHmHdVHEZIc31tQ54NIocG9Wpo%2FR8FyPprPafcFRkcV8X6pGozStYSN8khlVbVHa4StiueswbYp1dPjldaDZVsqJ%2F%2Bml0BKb2Vj%2BvZBJEtRHNc9zyoniO0muW%2FS9L%2FD8b8qm4SSJ%2BL8zrVG7oUyTmeG0wWhlQnDzIDSlAchL3DTrs95qZEAftFXSJJdOliub4x&X-Amz-Signature=c82d0b3d392e97ddbffe480eae0cde67d112dfc0d003848c277fb4754ca543ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
