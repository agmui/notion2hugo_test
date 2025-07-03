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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBID6TO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUu5gKx1F60MIcE8HuYvSlc%2FsWw6bNgQu%2FdVNNZX1o%2FAiEAww3Ezp2RPMCWFiW2w8HtAeDSyingcrdl%2FgWx2nPjjJsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbMdEmAycwaljXigircAw9hhDStvn1pLmZ4rejt6zVCL3pvzh00%2B2qqMRX%2B6oE28gsZXLBfq6Vbyly7y98YvtYpG7uCQ0xE1SBbldosDDzNfj%2BfTkTOUKqhPsKiwk7tXYVrewJQ9rig0z%2BAcS0dsgQSx%2Bi1TzhYAgkTQCOaxl47lS5PBhGO%2BojPQhBbAGukIoni%2BHkivIvdUPc%2FxSAnAtk4AYknvAYQieITMOl5irglsnKonKjptBDtgwX8mb6OjGE6M5EKhXr6SVgIcOL9%2FvdhXYrWhRRL%2F4rkC%2Brg0GDhmSxp8Sgvxrqgt17lJ30MCVtQerR8GToMmo9y4LKoEMFvu%2BNFMb7D4%2F39O24MEEB2ggpNiKjcssiIqUPnKBcHyN6SNbbiT7V54lB7pNGNAt3tn386zDuqaAucnIQCzuhNW%2FbersXx1NZrQu0Jm5wix3o1iEycKi%2BV1OiftBCKah01x6sYRK2Q6V9F8IPXBqtK8QOD8spCUVwxx2sDwiAFOzvgEQJnLCWCvrQOAfpRsVjC7U%2FctmNiWNTFje4FGF8eTFnYsfB47ixT%2B42JdDqAcljPC0JKrjsiY68yETBjKZFeY2b6Z6mlz67NBWNvqheIRnFBBxiHBwCiOLijr%2F2G%2Bc4jpdkDeCZAq5uUMM29lsMGOqUBleGa3eI7xdTrcRCU6AdCciiO9G7d0xpkXK8xvjxYSo3TItmTCL%2BGvmnlO%2FGlK15EpVCyGk%2B7MrDYyhyonUNJOnZBConGuAR7upuA%2BFQHSvJLJKSGpFASgPb5yS%2F%2F5K0eFOxdBmeCYqCC74WSICAn8DAg2G6Ws12ncCnV6O4hGj64rzOEuwrvQdqLt5KHZSFF8RqFLmkxWD6W6vNOXOnJrRWgzFVL&X-Amz-Signature=9003edcb61f4fa3ea88e2848cde060bb96092b800f052c8db4d41704f9149586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBID6TO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUu5gKx1F60MIcE8HuYvSlc%2FsWw6bNgQu%2FdVNNZX1o%2FAiEAww3Ezp2RPMCWFiW2w8HtAeDSyingcrdl%2FgWx2nPjjJsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbMdEmAycwaljXigircAw9hhDStvn1pLmZ4rejt6zVCL3pvzh00%2B2qqMRX%2B6oE28gsZXLBfq6Vbyly7y98YvtYpG7uCQ0xE1SBbldosDDzNfj%2BfTkTOUKqhPsKiwk7tXYVrewJQ9rig0z%2BAcS0dsgQSx%2Bi1TzhYAgkTQCOaxl47lS5PBhGO%2BojPQhBbAGukIoni%2BHkivIvdUPc%2FxSAnAtk4AYknvAYQieITMOl5irglsnKonKjptBDtgwX8mb6OjGE6M5EKhXr6SVgIcOL9%2FvdhXYrWhRRL%2F4rkC%2Brg0GDhmSxp8Sgvxrqgt17lJ30MCVtQerR8GToMmo9y4LKoEMFvu%2BNFMb7D4%2F39O24MEEB2ggpNiKjcssiIqUPnKBcHyN6SNbbiT7V54lB7pNGNAt3tn386zDuqaAucnIQCzuhNW%2FbersXx1NZrQu0Jm5wix3o1iEycKi%2BV1OiftBCKah01x6sYRK2Q6V9F8IPXBqtK8QOD8spCUVwxx2sDwiAFOzvgEQJnLCWCvrQOAfpRsVjC7U%2FctmNiWNTFje4FGF8eTFnYsfB47ixT%2B42JdDqAcljPC0JKrjsiY68yETBjKZFeY2b6Z6mlz67NBWNvqheIRnFBBxiHBwCiOLijr%2F2G%2Bc4jpdkDeCZAq5uUMM29lsMGOqUBleGa3eI7xdTrcRCU6AdCciiO9G7d0xpkXK8xvjxYSo3TItmTCL%2BGvmnlO%2FGlK15EpVCyGk%2B7MrDYyhyonUNJOnZBConGuAR7upuA%2BFQHSvJLJKSGpFASgPb5yS%2F%2F5K0eFOxdBmeCYqCC74WSICAn8DAg2G6Ws12ncCnV6O4hGj64rzOEuwrvQdqLt5KHZSFF8RqFLmkxWD6W6vNOXOnJrRWgzFVL&X-Amz-Signature=30ffeae28d9d7403ca7c46b21b360079636e1c54c0b1713ee8500eed19c27340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
