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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSOZHM3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID%2F9DV89EUpdEZDL5phFSFMqJX4nkOK89F0fuaR9Gz%2BeAiEA0JOpF8Sq5K9SHy2OVZHVLjApcdAhtlhTFex92238SwYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPQ1rrc3NNlanhTLCrcA%2FYiODmt6T0FPWx2g6bDBQPct6B%2FxhukYcjOnwyXZEC6XW1WR1FHmsSs8r9s7rZPa9mTpWcrF0vHWuYt6dmivquJ8V5IRpkvQNf0Qty28s5yMdZxJoJck1Bt3c9wDOS8h8KY8uNrOKPiIwFzxTKcoUawDGS9yWsq8oRm%2BqqcrZOxgcxxTxAiPlxw1qm3eq4ofzY0Fum%2BkFYQlneN%2FLfuXMLRQjueIFvtavbFFrGXyCL9Gpmzbv4QFswm8H4u46UJCOCwg%2FH%2BuENp8cliOk6%2BlhPXpqOKOwtoFCdBXsbz35S%2BpMINMByOTaM%2Fn6XtI46cHfpxIRdKuulxNZVwJjLxy%2BZL%2BdkwWFrGV3%2Bj9isD4g%2FXeAafg2RhOnmwdmZsHF7E0KQfvBqi%2B4RkjybZo%2BQD6ZdkmRjvtB9ikkbQi29%2BD0KgIxIXHC8L1HkSvupId%2BDCVNWeByrPDB3eMden9CxFJgC%2FtisazU6%2BG%2Fxg5K0%2BZhZsM%2BOPQzTldqMmK%2FKPoFhMA4QCzS3YnWNwU8Wi40x5WUPfzLooEOgnfV8uzX02vLrya4DNZBiDGUEa48rIBWtk7AZ6kRxzXCh6SU9anGnSt4hdzjk6KtSGSeqsGbcPCdDSHnyJKLbE8FE%2BI%2B52ML7Xj74GOqUBGuDT8wsP%2BsJJchBOlDFyZOlM7PniI7uItG%2Bf%2BR0gRSbm6XDtFukR3Wyd%2Fxk5VgyGHNg2XFcuQPTzUI8jepdXPT15rwxtbq59NaXmu%2FtVjpUExyLiYTL9rSNYKvCh9r%2BMu3bXTbRmd7Df%2BHEel1Uqjjd2SW0J2ZCSnSBuFzf02x%2F3xf8WO%2FdAcel%2B5ewvmizJN%2FHZBb0SvLtHri6gOQDAZ0EZtkwl&X-Amz-Signature=665042207a261eace67855d9442cc63d2e2dd569b4bc844cae3bfc99ae08e94d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSOZHM3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID%2F9DV89EUpdEZDL5phFSFMqJX4nkOK89F0fuaR9Gz%2BeAiEA0JOpF8Sq5K9SHy2OVZHVLjApcdAhtlhTFex92238SwYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPQ1rrc3NNlanhTLCrcA%2FYiODmt6T0FPWx2g6bDBQPct6B%2FxhukYcjOnwyXZEC6XW1WR1FHmsSs8r9s7rZPa9mTpWcrF0vHWuYt6dmivquJ8V5IRpkvQNf0Qty28s5yMdZxJoJck1Bt3c9wDOS8h8KY8uNrOKPiIwFzxTKcoUawDGS9yWsq8oRm%2BqqcrZOxgcxxTxAiPlxw1qm3eq4ofzY0Fum%2BkFYQlneN%2FLfuXMLRQjueIFvtavbFFrGXyCL9Gpmzbv4QFswm8H4u46UJCOCwg%2FH%2BuENp8cliOk6%2BlhPXpqOKOwtoFCdBXsbz35S%2BpMINMByOTaM%2Fn6XtI46cHfpxIRdKuulxNZVwJjLxy%2BZL%2BdkwWFrGV3%2Bj9isD4g%2FXeAafg2RhOnmwdmZsHF7E0KQfvBqi%2B4RkjybZo%2BQD6ZdkmRjvtB9ikkbQi29%2BD0KgIxIXHC8L1HkSvupId%2BDCVNWeByrPDB3eMden9CxFJgC%2FtisazU6%2BG%2Fxg5K0%2BZhZsM%2BOPQzTldqMmK%2FKPoFhMA4QCzS3YnWNwU8Wi40x5WUPfzLooEOgnfV8uzX02vLrya4DNZBiDGUEa48rIBWtk7AZ6kRxzXCh6SU9anGnSt4hdzjk6KtSGSeqsGbcPCdDSHnyJKLbE8FE%2BI%2B52ML7Xj74GOqUBGuDT8wsP%2BsJJchBOlDFyZOlM7PniI7uItG%2Bf%2BR0gRSbm6XDtFukR3Wyd%2Fxk5VgyGHNg2XFcuQPTzUI8jepdXPT15rwxtbq59NaXmu%2FtVjpUExyLiYTL9rSNYKvCh9r%2BMu3bXTbRmd7Df%2BHEel1Uqjjd2SW0J2ZCSnSBuFzf02x%2F3xf8WO%2FdAcel%2B5ewvmizJN%2FHZBb0SvLtHri6gOQDAZ0EZtkwl&X-Amz-Signature=a9b0fb795aedeefb7a3ee0c358c2560fd933a3b29567bd1bd4bcc6ca630465f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
