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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPBYNL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mEYmqeJW8LOjZj8MSOM4e6P2vFJ0DK0ffV4vji4aUAIhANti7Bwwxv28G6rZsASLNSI%2FoVNMzrsBVlnEAKMYF6UAKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4tTMS0XxqBT669gUq3AMRfC3Vw1eAKP1Jh9ABmmKCsWrUgfbNGDpJrQGPVbXRpPiAKjv%2B0QZthyWOJgtr1J8Enu6%2B5Ds77SRXBcPfT48CsUBPZlf0V823rQp1iHMdLGFrCRAAPmGl7lFV6rd4ebAAf4edbf5WwfLD94tgOsr%2BT%2FRtByLYjNHElrbbXNGx%2BaiI8UB0Olv9NO6QTuFue9cO0f8yEAAosSO%2FN%2FOrLki22ek9lL2HS2Y8sE%2Btk5j9caAAKKSduDm7fkJ2Td5KkaVYGzryR6LULMlXOWid2ILcJgDYD8i6%2BN8dXBvHqIQXlIlmc8vTzIFWaafUKXRUDExzzqAYtyElOzyjumfxxrWmLaBsbzM%2Fer5Uk3SVba%2B06VTdm29berg4HrQCSznGZ%2FXQ3WNbXEukQdQqx6M%2Fz2p17BLMAA%2F0FtZgQyD4D%2B9Mxh2dl1CmoiYYDicXK%2Fbbr%2B62TixhDaLJGaX9dK1QDsUn5zsR8Mwd6i6Pb0Rk%2FVEkJlincIM4L8VbO9sKjA7tprxQM6YFoslCf1gWY0PqPodv1vRRuOb82W6CELYd6z0gVVsXDHMEoVXikAeX4ZOGsMYkPUpBfoC6H3Se%2BoQ31sOnAMOrozlnAvDdZ3rLeL0RKWeYtU2k38tYcRsy2TDjwKfEBjqkAUPMcbE3xWtdmWn3DjvFjTFPfEV92b8RQ2Aq8mGny%2F9Cnj58zkgdLvRFxTQ7xZXe3nJQuVqU8cd13k0TxVNPutprunsrqdjbje35BJH8JShQWi9EEIxRdA4VtQxhZ%2BdG1RSzJW30ib1K6AOamm9L4zbeOh0P7NIS975SJFp%2FnHFatCD31eqwE%2BzQXoi6jbSrQGEh9bOpJWwxdwUhqHqRuWXS9ZIN&X-Amz-Signature=62f586cfa331d5a2393e1275ffb5919b4c8e12526f1400c2e955bb53b5e25d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPBYNL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mEYmqeJW8LOjZj8MSOM4e6P2vFJ0DK0ffV4vji4aUAIhANti7Bwwxv28G6rZsASLNSI%2FoVNMzrsBVlnEAKMYF6UAKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4tTMS0XxqBT669gUq3AMRfC3Vw1eAKP1Jh9ABmmKCsWrUgfbNGDpJrQGPVbXRpPiAKjv%2B0QZthyWOJgtr1J8Enu6%2B5Ds77SRXBcPfT48CsUBPZlf0V823rQp1iHMdLGFrCRAAPmGl7lFV6rd4ebAAf4edbf5WwfLD94tgOsr%2BT%2FRtByLYjNHElrbbXNGx%2BaiI8UB0Olv9NO6QTuFue9cO0f8yEAAosSO%2FN%2FOrLki22ek9lL2HS2Y8sE%2Btk5j9caAAKKSduDm7fkJ2Td5KkaVYGzryR6LULMlXOWid2ILcJgDYD8i6%2BN8dXBvHqIQXlIlmc8vTzIFWaafUKXRUDExzzqAYtyElOzyjumfxxrWmLaBsbzM%2Fer5Uk3SVba%2B06VTdm29berg4HrQCSznGZ%2FXQ3WNbXEukQdQqx6M%2Fz2p17BLMAA%2F0FtZgQyD4D%2B9Mxh2dl1CmoiYYDicXK%2Fbbr%2B62TixhDaLJGaX9dK1QDsUn5zsR8Mwd6i6Pb0Rk%2FVEkJlincIM4L8VbO9sKjA7tprxQM6YFoslCf1gWY0PqPodv1vRRuOb82W6CELYd6z0gVVsXDHMEoVXikAeX4ZOGsMYkPUpBfoC6H3Se%2BoQ31sOnAMOrozlnAvDdZ3rLeL0RKWeYtU2k38tYcRsy2TDjwKfEBjqkAUPMcbE3xWtdmWn3DjvFjTFPfEV92b8RQ2Aq8mGny%2F9Cnj58zkgdLvRFxTQ7xZXe3nJQuVqU8cd13k0TxVNPutprunsrqdjbje35BJH8JShQWi9EEIxRdA4VtQxhZ%2BdG1RSzJW30ib1K6AOamm9L4zbeOh0P7NIS975SJFp%2FnHFatCD31eqwE%2BzQXoi6jbSrQGEh9bOpJWwxdwUhqHqRuWXS9ZIN&X-Amz-Signature=55f362065369941eb9304c05f48c2ab9323c4f18c1cfdfea7bb8503d802bc318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
