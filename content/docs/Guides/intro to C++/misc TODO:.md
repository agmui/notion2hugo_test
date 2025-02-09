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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZM47OXS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtHw5qLn%2Bo9HzyfaILANxZw17tel7LwbJLFL9382hdQAiB8UCPTD0kkOmqdPEU8v0vECNrgLiOmuGQBj1I9sLZx%2BSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbnbwTOrhZXlZq45iKtwDQMtydNIWstOb1HWkbY4uBFLWd9SAcCPxALncfm7H8tZntKqMJr7BP4%2FSu5mpIVD%2F%2F%2BoMkzIXm8wUjI31c5H24%2FpR7YbG2BXIKX9F7DBMmS%2FDRr4kqgcfVEafmuGTBkND7UZwHVsGtFM72C8vX1q8xmqEM4oJBp%2FSARace2%2FacWBcPUiBrrTP9qTWqlDaX1MqoircXr3IAW%2FIO7%2B%2Bz51qzwWCPYXXEhnyl0PKyNRSAjhqc4PoC0D9HgfxSu3OYwSi9dlxs%2FWX%2Fz8%2F3vdZ8YHPgM4zSVEDtfi4HQzaK0BW89NShV0K%2Fwz6JEQ%2B5n9Zk7A5VuGCawC%2FwleLbWYxEKbbE5XxSEWRzlpTKBrIR1dJW1a16VLW2pHQgK4xijWX%2FkdFUs6drYg%2Bw1NbkN8bn1fPqbjxgq7xK4u5Y%2BoQebNLB6LoaoFzJD5PGnO1oDO7lhOUpDc%2FeSJkQO7vGh0syx9jO5hxU6svwM%2BfwUdD%2FdmfySMqj8GOhG%2B1Y1OYHS%2FZHmOEUKcb7hQSV9q9wSW3LuEUlV%2B3nswbneFyOL5GFfiyDbAj8K1EIJoMfDXeFEmV3GrtaDEMjl74MByWL4l98Pd0gJ7cwPs3zRpuyIZ%2BKhDd%2BPvfEqk%2B47fj9ajQeG4wwIWjvQY6pgG8yRLR1Wf1fi5byJzrxt6hzIEpAdDoBCdoafWfDn35rz3xz1aB4plp4ea5Tm8A0NxN1fnsXljbUdQ2mOACFt18jq4JI1%2BcXBrwBjH0DRpirAqNpCKVmLQC0PE%2BIgaY2D%2FLDAZHJa%2B39QHmbIhhNCyCDwVQuhWhBgthOfPi4AEfy5%2F1Gh8%2FeIBvJuF7SCRoTdJEIlc6Ephuv%2F7AlVD8sX%2BiMJwd9yAq&X-Amz-Signature=68cf6c23b4cb41368afdafa94a57cae7de825ca34fd7909c59a1dc684aac950b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZM47OXS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtHw5qLn%2Bo9HzyfaILANxZw17tel7LwbJLFL9382hdQAiB8UCPTD0kkOmqdPEU8v0vECNrgLiOmuGQBj1I9sLZx%2BSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbnbwTOrhZXlZq45iKtwDQMtydNIWstOb1HWkbY4uBFLWd9SAcCPxALncfm7H8tZntKqMJr7BP4%2FSu5mpIVD%2F%2F%2BoMkzIXm8wUjI31c5H24%2FpR7YbG2BXIKX9F7DBMmS%2FDRr4kqgcfVEafmuGTBkND7UZwHVsGtFM72C8vX1q8xmqEM4oJBp%2FSARace2%2FacWBcPUiBrrTP9qTWqlDaX1MqoircXr3IAW%2FIO7%2B%2Bz51qzwWCPYXXEhnyl0PKyNRSAjhqc4PoC0D9HgfxSu3OYwSi9dlxs%2FWX%2Fz8%2F3vdZ8YHPgM4zSVEDtfi4HQzaK0BW89NShV0K%2Fwz6JEQ%2B5n9Zk7A5VuGCawC%2FwleLbWYxEKbbE5XxSEWRzlpTKBrIR1dJW1a16VLW2pHQgK4xijWX%2FkdFUs6drYg%2Bw1NbkN8bn1fPqbjxgq7xK4u5Y%2BoQebNLB6LoaoFzJD5PGnO1oDO7lhOUpDc%2FeSJkQO7vGh0syx9jO5hxU6svwM%2BfwUdD%2FdmfySMqj8GOhG%2B1Y1OYHS%2FZHmOEUKcb7hQSV9q9wSW3LuEUlV%2B3nswbneFyOL5GFfiyDbAj8K1EIJoMfDXeFEmV3GrtaDEMjl74MByWL4l98Pd0gJ7cwPs3zRpuyIZ%2BKhDd%2BPvfEqk%2B47fj9ajQeG4wwIWjvQY6pgG8yRLR1Wf1fi5byJzrxt6hzIEpAdDoBCdoafWfDn35rz3xz1aB4plp4ea5Tm8A0NxN1fnsXljbUdQ2mOACFt18jq4JI1%2BcXBrwBjH0DRpirAqNpCKVmLQC0PE%2BIgaY2D%2FLDAZHJa%2B39QHmbIhhNCyCDwVQuhWhBgthOfPi4AEfy5%2F1Gh8%2FeIBvJuF7SCRoTdJEIlc6Ephuv%2F7AlVD8sX%2BiMJwd9yAq&X-Amz-Signature=6ec9a1df20a765268a7bed059dd1e6276c4879929184d83c450bd016f0952a64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
