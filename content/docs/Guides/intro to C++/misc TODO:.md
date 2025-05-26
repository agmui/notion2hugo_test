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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKP6M4LH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLflfp9tMS4NDKwMiYq14a4x3GKZly1XgWtbmqA1JDQIgKFxnL%2BIBGOvBG7TtmUlupgB00gP4y0z15IJzp5BhpEEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCgWLMDCg4HSvoHZnCrcA4EKRXp8TRSukpIe4RyGTRfEVr0YUdTqhSQLeBqTnI2HLv0gi1Q81%2FR4B8DncMauBPIphlofbkd8PgQDSL5lCAKwfDjGrGHsuC%2FSeAuNFoGnlE3PuS%2BC8Jd0W7aDPNxtMejQdDk8ha2b4SsNWVEbwHWV8UIHqdmvn9IiMZpBOe8JbbREXRU%2BsMxk9xC5ofXzcCwrpWgvuTAUVoKm0qEYhPYmepYw1QjVue97HPOBkPh43VmpuXdA4D1tfdbmdunoBkbJHvO1byT4NUyckZ3ZM8%2FsRnqmCWWdV%2B7u2GiUbAWizWNIcXNCJ%2BUEQk3edIXc8U%2ByTN137lOEP5OR83%2B1UlqLH2vHfVDDA2pV2ARqkjaFjpEXd9yMgs8X%2BTz4jJmPXeXZ0xET5IFU6StAlGgooEeqxX2pxNdrHl3ItEMdWYspq5KvaSlcrFu5g3gG2e%2BTj0FItKQpbQVQRKmF7RVddQHy2%2FBOts1XyID0RkuQC2%2Bnte15haV3t77s4hRVa1VPhJjLQkXehQSKPzQOhhoLYRdZB9KXiJj5fsJkzb5MnIVUbJVC01SsfrJVkZo69i50sGdBc1hYjFtfycT8164STPnL9y2tP0d8YR0nAP%2B%2FIviYmJlFIUsfJSwLsb94MLW20sEGOqUBDZeR28%2FZFVwhurwWelxZzaoeJN01QU6Ec8gzchl3a7XayvUL%2BJ2xQ5ABRjdy2LzzkUcpu21hMadKVxCBtS4Qv2nL9LniXDQsquA90XhRJwR1wg1lk9%2FPbHRuROC%2BoSmX41HKDMmjWCrs7ICoSfWXs0rgMDScFQGJ4BWNXOANFk50UgngnG%2FKOwJ2qsu1yzI8RP%2BJww6my%2F1y11fuxpgDgRfqXK6y&X-Amz-Signature=c65bf6c329a0c1f3bc066449f3de8edfa8e2fa29ecc17cf4aa8b178fb89ecab2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKP6M4LH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLflfp9tMS4NDKwMiYq14a4x3GKZly1XgWtbmqA1JDQIgKFxnL%2BIBGOvBG7TtmUlupgB00gP4y0z15IJzp5BhpEEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCgWLMDCg4HSvoHZnCrcA4EKRXp8TRSukpIe4RyGTRfEVr0YUdTqhSQLeBqTnI2HLv0gi1Q81%2FR4B8DncMauBPIphlofbkd8PgQDSL5lCAKwfDjGrGHsuC%2FSeAuNFoGnlE3PuS%2BC8Jd0W7aDPNxtMejQdDk8ha2b4SsNWVEbwHWV8UIHqdmvn9IiMZpBOe8JbbREXRU%2BsMxk9xC5ofXzcCwrpWgvuTAUVoKm0qEYhPYmepYw1QjVue97HPOBkPh43VmpuXdA4D1tfdbmdunoBkbJHvO1byT4NUyckZ3ZM8%2FsRnqmCWWdV%2B7u2GiUbAWizWNIcXNCJ%2BUEQk3edIXc8U%2ByTN137lOEP5OR83%2B1UlqLH2vHfVDDA2pV2ARqkjaFjpEXd9yMgs8X%2BTz4jJmPXeXZ0xET5IFU6StAlGgooEeqxX2pxNdrHl3ItEMdWYspq5KvaSlcrFu5g3gG2e%2BTj0FItKQpbQVQRKmF7RVddQHy2%2FBOts1XyID0RkuQC2%2Bnte15haV3t77s4hRVa1VPhJjLQkXehQSKPzQOhhoLYRdZB9KXiJj5fsJkzb5MnIVUbJVC01SsfrJVkZo69i50sGdBc1hYjFtfycT8164STPnL9y2tP0d8YR0nAP%2B%2FIviYmJlFIUsfJSwLsb94MLW20sEGOqUBDZeR28%2FZFVwhurwWelxZzaoeJN01QU6Ec8gzchl3a7XayvUL%2BJ2xQ5ABRjdy2LzzkUcpu21hMadKVxCBtS4Qv2nL9LniXDQsquA90XhRJwR1wg1lk9%2FPbHRuROC%2BoSmX41HKDMmjWCrs7ICoSfWXs0rgMDScFQGJ4BWNXOANFk50UgngnG%2FKOwJ2qsu1yzI8RP%2BJww6my%2F1y11fuxpgDgRfqXK6y&X-Amz-Signature=2c9469aca0b702bab7e322c2427e994f5d0d00d563518af90bebafb82bd3f0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
