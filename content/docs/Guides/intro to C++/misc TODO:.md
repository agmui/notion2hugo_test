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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7OAW3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcPQ6grTzSyV3qlsed0Gvb5JYqtCcPFo1GpMTvodroDgIgdVlZfktkPaOkBPOvXhZlzNP7tkf7uTAy5phz893vRyoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdW7ZSF0FWazb9AtSrcA2%2B3MbDZF796JIVCbeFR5NVU2k7No03jKN02e5%2BrlKDYh1VS%2FM7VnCHsEVDtSi1%2BHxTN3cAzOVwqo3WEXyxr2ezPi63VAAgfl9U62%2BHlrt%2Btog4YYdOCHmaNO%2B9X%2BKFWlpq13yoA08YZN%2FzMt5o7ypLFVJYzw8l6HPrTj6v2R1HTJ2Ui7dm%2BG5fcwg1AazYopq513u9Mf%2BbOrQlnbSMzNBHA7E2Crt6QxG5rSZMLA3z4AXA2Q7V439De33WUXoVJSkQpeFtwJewtfToKqipfwRbbj3oyhhMLmImheDYE2tStTPi4oKw77BfTPysvWWn%2F%2FiIfWXpdQgrTy9YRyvxh3AtnERqMRjEpWD7vwWO4%2BWtt%2FjzaBkfhBLMOZAhJWXxlp5muD%2BmfBXZiMJ6%2BAbURQdyOAxJ8TXiZzWu025nf81tqDeHhnA3w2%2BnNT2RyTrzXScugcLPpsxVojxHMvalYzmMtUYh3QXmaABjbCmt2Jw4pZSFbD%2FV1qyNlzQ9YowKXBKe1S26cCQ%2FHp79s5dsIHGRww48lkwmbhN2f6jLVyy6EtgAul4zdn2dyAUHdjkuP%2B1tS43iBKIr6fSHN9nh8zNZbwD915AwuDBv%2B9Bd1Xn9EwgS5w%2FDsgWob5j%2B7MKu%2FoL0GOqUBkvYlM7iMWx3JNroMFRCKgvGcAPaN%2F3bXzKO%2Fcp5WTaN%2F2lrdPSWt3RiZYp59YjdJG57GSPJZY5T5S2QQqoW8F%2BfEiIB8lFnSa20zuUWGWCBdRxcE7v1IsInXlCU4sEskri%2FD0zEeUgh77fbj3M6NjCtyidM7hAZIYSJ8VSeAVLt2o3OR3JB43KIcd2S%2BUdelCM7IH3Fb4di%2B7wpPxRIFANMhA1Qo&X-Amz-Signature=3785a1a002997da3ceb8c4a7068a4a47d1e7997223eec37f9f43a0e5a2d853cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7OAW3S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcPQ6grTzSyV3qlsed0Gvb5JYqtCcPFo1GpMTvodroDgIgdVlZfktkPaOkBPOvXhZlzNP7tkf7uTAy5phz893vRyoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdW7ZSF0FWazb9AtSrcA2%2B3MbDZF796JIVCbeFR5NVU2k7No03jKN02e5%2BrlKDYh1VS%2FM7VnCHsEVDtSi1%2BHxTN3cAzOVwqo3WEXyxr2ezPi63VAAgfl9U62%2BHlrt%2Btog4YYdOCHmaNO%2B9X%2BKFWlpq13yoA08YZN%2FzMt5o7ypLFVJYzw8l6HPrTj6v2R1HTJ2Ui7dm%2BG5fcwg1AazYopq513u9Mf%2BbOrQlnbSMzNBHA7E2Crt6QxG5rSZMLA3z4AXA2Q7V439De33WUXoVJSkQpeFtwJewtfToKqipfwRbbj3oyhhMLmImheDYE2tStTPi4oKw77BfTPysvWWn%2F%2FiIfWXpdQgrTy9YRyvxh3AtnERqMRjEpWD7vwWO4%2BWtt%2FjzaBkfhBLMOZAhJWXxlp5muD%2BmfBXZiMJ6%2BAbURQdyOAxJ8TXiZzWu025nf81tqDeHhnA3w2%2BnNT2RyTrzXScugcLPpsxVojxHMvalYzmMtUYh3QXmaABjbCmt2Jw4pZSFbD%2FV1qyNlzQ9YowKXBKe1S26cCQ%2FHp79s5dsIHGRww48lkwmbhN2f6jLVyy6EtgAul4zdn2dyAUHdjkuP%2B1tS43iBKIr6fSHN9nh8zNZbwD915AwuDBv%2B9Bd1Xn9EwgS5w%2FDsgWob5j%2B7MKu%2FoL0GOqUBkvYlM7iMWx3JNroMFRCKgvGcAPaN%2F3bXzKO%2Fcp5WTaN%2F2lrdPSWt3RiZYp59YjdJG57GSPJZY5T5S2QQqoW8F%2BfEiIB8lFnSa20zuUWGWCBdRxcE7v1IsInXlCU4sEskri%2FD0zEeUgh77fbj3M6NjCtyidM7hAZIYSJ8VSeAVLt2o3OR3JB43KIcd2S%2BUdelCM7IH3Fb4di%2B7wpPxRIFANMhA1Qo&X-Amz-Signature=79ec0b938f8ecc20bc7399d55482eb3a68e0ef0069f71db0abd63d345c99db2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
