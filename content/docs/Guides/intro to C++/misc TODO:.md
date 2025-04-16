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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HSITVC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsHVKczlI3g36WaaOo4FPkaqzNXbbGU%2FRhJ2R7WqYTegIgHFCZrMjbb18TqUFI1RqJvVvF0MNIyNRsG6ui0gzLcLwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNLUbr7MsRmFFTjISCrcA%2F5Qxhd%2Fc34DohqMl5J67nREOy8OU%2BlsZzUNkbCq8JH15fXfBraoeJhMyoOpfNr1ma2JSaiGrXZQFMSiA0CC2P03jpIBqWtVJNsguwjA6g2BLLeJSj1AMgqrjzXAypKwgEON%2B2RrpQsnf0J0IEo6%2FAYJNQCRKD%2B81iMiuwWRrbfUXD64JpAk%2FB2As%2BvB94D7eya0QzYdVEl5dhM%2FxJuIy5%2FWHCjdka2tK3202xAT0pdpiRFvH265RV7C8QIJ89OXxa0ZhfBRwWh%2FRKRaGMbZo1VfSmSa0mCvJf%2FEB8f1S27XA2jaWwObwR0ZEBBybATLsbyVBsMGUD76CLFat142mfIqHDrhEuXs05CDl%2F%2B4coM2eAMYANQiOYDBS7YeziW3oPKHfvr1l5DXYvyQlSyg%2BuiZmz%2F1Rst2jD1Zb%2ByaNldPOceiGQkHTkAppy3wmULX%2BLYR6k3OjeBiv6h7IIbN4I8YSngKbDURZngPEH%2FDIMwGYTqz0BO%2BMktLAsb7R3zPN060vGs27nggDE9GIO2%2BGbLlKGpBmy28FM7N%2BIrHBVpy7LAejvEiuKQRXL8KVHJN68Y0j1nOM4Vx7QYZG9ex81KwodSNiKaphtNbcYh0GyOjsSus3KM4cUsUybCCMMm8%2FL8GOqUBcW7%2BwGrLe99ysxIDOaKxYX%2Bqon9%2FUDfJrvYWJWV0KkP0TMGmMxt7SmFkIBKzXUrROttcMo1TIw7JRj1xw4C0HljqCdZJh2DJ8L%2B%2F%2BpWYZ5DByfQLxQBOP2PyRRz%2F9mTd4Daxtf3YDnfKlLGHx%2BYVofZBr62xV0NHEU8Tps9ytDZ%2FM5ETs7yomJdYiEGnoAyk51wBD8RPBFxhLIxwoaAl4Imu1JA3&X-Amz-Signature=a9b28857b1446a47ef745cfd9df0ceb4ab30fd11c9cf234a74acea84e928f19a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HSITVC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsHVKczlI3g36WaaOo4FPkaqzNXbbGU%2FRhJ2R7WqYTegIgHFCZrMjbb18TqUFI1RqJvVvF0MNIyNRsG6ui0gzLcLwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNLUbr7MsRmFFTjISCrcA%2F5Qxhd%2Fc34DohqMl5J67nREOy8OU%2BlsZzUNkbCq8JH15fXfBraoeJhMyoOpfNr1ma2JSaiGrXZQFMSiA0CC2P03jpIBqWtVJNsguwjA6g2BLLeJSj1AMgqrjzXAypKwgEON%2B2RrpQsnf0J0IEo6%2FAYJNQCRKD%2B81iMiuwWRrbfUXD64JpAk%2FB2As%2BvB94D7eya0QzYdVEl5dhM%2FxJuIy5%2FWHCjdka2tK3202xAT0pdpiRFvH265RV7C8QIJ89OXxa0ZhfBRwWh%2FRKRaGMbZo1VfSmSa0mCvJf%2FEB8f1S27XA2jaWwObwR0ZEBBybATLsbyVBsMGUD76CLFat142mfIqHDrhEuXs05CDl%2F%2B4coM2eAMYANQiOYDBS7YeziW3oPKHfvr1l5DXYvyQlSyg%2BuiZmz%2F1Rst2jD1Zb%2ByaNldPOceiGQkHTkAppy3wmULX%2BLYR6k3OjeBiv6h7IIbN4I8YSngKbDURZngPEH%2FDIMwGYTqz0BO%2BMktLAsb7R3zPN060vGs27nggDE9GIO2%2BGbLlKGpBmy28FM7N%2BIrHBVpy7LAejvEiuKQRXL8KVHJN68Y0j1nOM4Vx7QYZG9ex81KwodSNiKaphtNbcYh0GyOjsSus3KM4cUsUybCCMMm8%2FL8GOqUBcW7%2BwGrLe99ysxIDOaKxYX%2Bqon9%2FUDfJrvYWJWV0KkP0TMGmMxt7SmFkIBKzXUrROttcMo1TIw7JRj1xw4C0HljqCdZJh2DJ8L%2B%2F%2BpWYZ5DByfQLxQBOP2PyRRz%2F9mTd4Daxtf3YDnfKlLGHx%2BYVofZBr62xV0NHEU8Tps9ytDZ%2FM5ETs7yomJdYiEGnoAyk51wBD8RPBFxhLIxwoaAl4Imu1JA3&X-Amz-Signature=bc3a15e74f10616c2fc8c9def69a7933008d36d997146c6b3f06a116ed34676b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
