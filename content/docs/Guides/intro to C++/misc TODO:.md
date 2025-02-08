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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEOJY5Y%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEuQPt6M%2BTrdKPZ60EmAbQrhVWV85XN6VZpQ6nO6%2BrOFAiEAvQUlyHrI9HAHnzDOcR4oPlCMC%2BID5aRKLlmyJaglKpAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsqYPhFLLTXdTZyQyrcAxJXD5ju48mzhACoweJcYNNZgTSJlik3L72cmlvGimraoJhDAHnPaYDFSJulUL1iAJr68vOXiu4uvPyIljFPpZznUPeuRJ4fDD59sHM7%2Bdi3tkQRGWMivkMpBmddezNm%2FcTO6tzDDZuPNxhBnwHltqpSHF7B4zdmt1n4vklCRmHYcB80TyH1FpTKOwGpT19%2FRLQRNQlXkhalTh5st0cBeS%2F%2F9rV9McDHprxuDgX1wji8DsaXW2JxEInlijsFP5FugFCOqomg7NN00NOJ1CMjxfXH5FwE70SAlcegrNk4csnspz6DZHyskVwV39tDwqqTPbg5%2B7QcRCvWK2ZC2hr1dbczePGvgKC2ieXtjqrJugZOvx4h%2ByiGdluOrtio3DRcuLgx8XCeWQj2IPoBtJDq%2BiQK8xL6ooN%2BtoReihD2BzZ625rc8xW%2BROapbTzJ830bsm0n8teLN99V%2BqSBvmx3p4QmQ5HYfFOo9%2FCTo7TyWv8h3Oe47lyM0%2FpfiynBg%2BQ%2FdmqwUKbk7YTScsqVcB1DmtPN0nGDA0E8aQSggzzYzpKR7blNTloMOpMv3dRL%2FxvI8s5a0cCJfFBtDxp5xnniy0EAREyvI%2FQz4CzEEa72z7DLj%2BWp3SLOHWKkRBI8MNbgnr0GOqUBp7LwLo%2FB%2BfEK36MBvoh0r%2BE3HcRSaKV3kbejZdPiB8L2T%2F7E1Pj%2Fach%2F%2Bwp1O4ZxhkkFyv6yow6GuGdlnt21Z5eFz3faBpAM9N2eo1eARZ0qwHmu%2FnSdTY6yxLwhBCylObGpDwL8u63hjXdQo4sviEZ9HPcZF8WJcBxXE2U6oPHMV9EjLHt%2BNYLa91aF9rJ1EYYzMthl9i3HeIrOp0VmkRnzH2O8&X-Amz-Signature=8fe67f9b26a7134513ed7f9685bc2c43afd708140dec34a3cfc84eeaa9d46d74&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEOJY5Y%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEuQPt6M%2BTrdKPZ60EmAbQrhVWV85XN6VZpQ6nO6%2BrOFAiEAvQUlyHrI9HAHnzDOcR4oPlCMC%2BID5aRKLlmyJaglKpAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsqYPhFLLTXdTZyQyrcAxJXD5ju48mzhACoweJcYNNZgTSJlik3L72cmlvGimraoJhDAHnPaYDFSJulUL1iAJr68vOXiu4uvPyIljFPpZznUPeuRJ4fDD59sHM7%2Bdi3tkQRGWMivkMpBmddezNm%2FcTO6tzDDZuPNxhBnwHltqpSHF7B4zdmt1n4vklCRmHYcB80TyH1FpTKOwGpT19%2FRLQRNQlXkhalTh5st0cBeS%2F%2F9rV9McDHprxuDgX1wji8DsaXW2JxEInlijsFP5FugFCOqomg7NN00NOJ1CMjxfXH5FwE70SAlcegrNk4csnspz6DZHyskVwV39tDwqqTPbg5%2B7QcRCvWK2ZC2hr1dbczePGvgKC2ieXtjqrJugZOvx4h%2ByiGdluOrtio3DRcuLgx8XCeWQj2IPoBtJDq%2BiQK8xL6ooN%2BtoReihD2BzZ625rc8xW%2BROapbTzJ830bsm0n8teLN99V%2BqSBvmx3p4QmQ5HYfFOo9%2FCTo7TyWv8h3Oe47lyM0%2FpfiynBg%2BQ%2FdmqwUKbk7YTScsqVcB1DmtPN0nGDA0E8aQSggzzYzpKR7blNTloMOpMv3dRL%2FxvI8s5a0cCJfFBtDxp5xnniy0EAREyvI%2FQz4CzEEa72z7DLj%2BWp3SLOHWKkRBI8MNbgnr0GOqUBp7LwLo%2FB%2BfEK36MBvoh0r%2BE3HcRSaKV3kbejZdPiB8L2T%2F7E1Pj%2Fach%2F%2Bwp1O4ZxhkkFyv6yow6GuGdlnt21Z5eFz3faBpAM9N2eo1eARZ0qwHmu%2FnSdTY6yxLwhBCylObGpDwL8u63hjXdQo4sviEZ9HPcZF8WJcBxXE2U6oPHMV9EjLHt%2BNYLa91aF9rJ1EYYzMthl9i3HeIrOp0VmkRnzH2O8&X-Amz-Signature=ee91c4c20fd62ef2ed11edc774c12ea099f452e7919095fa8009c8eb5fb9ff87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
