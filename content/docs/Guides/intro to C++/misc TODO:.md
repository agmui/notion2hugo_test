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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EW5QLW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHOhO66EDraHQ5S81HGs7G23ERFCRXoGc9pe6RdS6%2FVTAiEA89ahq9ujFvDDZAljHdafhJ4NQblM%2Bl4wioCaEuhbKYUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQGFhH%2BBRznP1O0JCrcA9iqSZxLz2C3Pmd94thqd69eWESMUAmT%2FHOGRlqCLgEmWKYdijWND2yb6FRxeAnIltXRpUWk62QMDy0yniUDXyGrdsNa7Lrdq4mPrWU%2F%2B5s3qivkVc6CYC%2F%2F9YobMX1RbVTNjYzvX4XJFKmWGRFmyhx9yuQub79sUD63GZuLEivXUwLBOqrawnwt8LhuXBBbVhbzpNv9dcuR2Ndh%2FHGWu9gmzMv1xxdSjzK%2FFJXAg2%2BNnP4Dr%2FKLdWRizQu9crCMXAvr3V8ejnFlBvkoIA7crz9auz6CXBVITEFncuiRD1vmjnDThQW%2FleB0e17kEk7ia0jzM7%2FyV%2Flr3KUzqr7iN3kcrx0%2FERxK1rQaimszAk5aB4UGfJ0r8Cuk3iPtuqMCQD8vavIGSYb9wL4Vl3OjJ6SLN6fu8biZ4IKRsf5qhkcNTkMjHUQxo8Vmc7Mja2B0ZC8%2Fnd0O2Bs5xYLxx%2FUVNmSlQ3OX4MJ72iBeJQ95A9esniMcvit4usRTF5X1%2FdbucZL83kcRlHmQ7S%2FMIoUeocPuZ78bTQ2odac1mnSeKyYlarvqdoYfXhz%2BO1tOLUC2T4549ha8BTKmUy77GKWUN04inWW8WsCddl9nL9emBoLsG%2F86xuB7CzT2EXIyMMKbxL4GOqUBa4GspHhOSr9kEd6QTMRL%2Bz2YqbEaQosH3RCLmfA%2BH%2FMb64ZqA7AdgIM9W5x41vHhcjacd5HDiQ7Dq0ZtdMqz6m29HFv5Muaz1zZBK3%2FFcj6bZljdrtpp2AONrqtcJtUfwiX%2BX7%2BlPE8EgmNwJ8hqbt%2F1AvTDGi7I842KEmwEB5Bt8h%2BZQC%2BoQFvDbQApy9Zpp9qBdYaiF3pQVhds9Ws%2FjOIAxE16&X-Amz-Signature=6cf6482636d36ae8eb13fa2fd93da6287c15b275728781fa538b506b9aeb36fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EW5QLW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHOhO66EDraHQ5S81HGs7G23ERFCRXoGc9pe6RdS6%2FVTAiEA89ahq9ujFvDDZAljHdafhJ4NQblM%2Bl4wioCaEuhbKYUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQGFhH%2BBRznP1O0JCrcA9iqSZxLz2C3Pmd94thqd69eWESMUAmT%2FHOGRlqCLgEmWKYdijWND2yb6FRxeAnIltXRpUWk62QMDy0yniUDXyGrdsNa7Lrdq4mPrWU%2F%2B5s3qivkVc6CYC%2F%2F9YobMX1RbVTNjYzvX4XJFKmWGRFmyhx9yuQub79sUD63GZuLEivXUwLBOqrawnwt8LhuXBBbVhbzpNv9dcuR2Ndh%2FHGWu9gmzMv1xxdSjzK%2FFJXAg2%2BNnP4Dr%2FKLdWRizQu9crCMXAvr3V8ejnFlBvkoIA7crz9auz6CXBVITEFncuiRD1vmjnDThQW%2FleB0e17kEk7ia0jzM7%2FyV%2Flr3KUzqr7iN3kcrx0%2FERxK1rQaimszAk5aB4UGfJ0r8Cuk3iPtuqMCQD8vavIGSYb9wL4Vl3OjJ6SLN6fu8biZ4IKRsf5qhkcNTkMjHUQxo8Vmc7Mja2B0ZC8%2Fnd0O2Bs5xYLxx%2FUVNmSlQ3OX4MJ72iBeJQ95A9esniMcvit4usRTF5X1%2FdbucZL83kcRlHmQ7S%2FMIoUeocPuZ78bTQ2odac1mnSeKyYlarvqdoYfXhz%2BO1tOLUC2T4549ha8BTKmUy77GKWUN04inWW8WsCddl9nL9emBoLsG%2F86xuB7CzT2EXIyMMKbxL4GOqUBa4GspHhOSr9kEd6QTMRL%2Bz2YqbEaQosH3RCLmfA%2BH%2FMb64ZqA7AdgIM9W5x41vHhcjacd5HDiQ7Dq0ZtdMqz6m29HFv5Muaz1zZBK3%2FFcj6bZljdrtpp2AONrqtcJtUfwiX%2BX7%2BlPE8EgmNwJ8hqbt%2F1AvTDGi7I842KEmwEB5Bt8h%2BZQC%2BoQFvDbQApy9Zpp9qBdYaiF3pQVhds9Ws%2FjOIAxE16&X-Amz-Signature=f2dc85a16b16b2a3d0f3689791d07ad646013b308410c5af759e5465843aea28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
