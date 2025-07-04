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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNCTVWV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICtsDpIDclDlZ5yWH%2BfUgdbVy%2FxLKN0XTtvdRQ9DdxONAiEAnlferVg4fQS%2FrCCu%2BHPXHVxishIOtmPOjDFt1j86Raoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJjqo%2FTfG6wPnXHrvyrcAxGUYcp9i%2FWHcb7yCCvtmC4QBfg7hQ1FXGKfKQ%2BGmAcLS7A1YEmDDa03%2BL%2BvzHalteCySwkCu%2FgGaXwgJx4tGo7geQ5s%2BpGnpV2MH57hbQ0hvI659jCa3YZSCIfaMunQATVl16vueiH36yJlqGnpGX0P6KVXshbvQloVrs2WKdrHzEuTy4MaW5T4fKhqriA4oXo5UUtfTHIg1J9KoJlZSoh6bld6HR68TXih6%2BHdBZmlK9%2ByTEfKyFr80%2B6Y6Qz8N8Qih8VSmC1pBU%2BBrZaq3oBNz49CkX7Zr8yaRu62Dx2KYrwqdd8E5mPZNaIigQFSxnajiw9NMlaRWkg736pMdLtOFddEVr035KXXdm5%2FeF8uolqyQJZXybDYHWgE7hlLBN1mDxPwkAcL6dJIzTc9tKBe0vbBago4FWLWGBry4oTL5ckF3fYTMpXnIWwz%2BBWrM7Lz7FK9Kd%2FSv%2BsKi64SxTCsyiqdy6h%2FHb3qVTOTUvc2d378LsdQOiMmkN%2BkozR0k9o3oXK97uNMalB01Fh%2FAUo7QDI%2F2XtOPZifdJ9PnQUsxewB%2F%2BoLKghaQW0jknK45BGxSJay36twQY2Gn%2FHf%2BPyQVm6PXIxp1x4Mbv6KMMN9%2BZuA9YKk4XfhpKyzMKOOncMGOqUBdkovH8Px4131rj3g32OFKzpXN6%2B3soYrgSQ9Q3q6XAG0xjLh5Gt2IFZ2YHXTpzjgESt%2FeTvYUmIJOcrvtezj7SfhpAS6Y94x7t5yo5e7yG1xDL1Jqvd%2BGXzsjStlIrGNqNzTL2VUti2%2FG8rS1mryp6wk%2FI%2BbAA%2BBikPlX4RbxcSDO%2Bw7yetHNS4jgBRDFqtf7LYhHAwIBt06kRbLmPDkcseQyG8j&X-Amz-Signature=3f21ee44a624486cafce82c36f3232a3d3ea09cfe20ed1c30c79d61b610364dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNCTVWV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICtsDpIDclDlZ5yWH%2BfUgdbVy%2FxLKN0XTtvdRQ9DdxONAiEAnlferVg4fQS%2FrCCu%2BHPXHVxishIOtmPOjDFt1j86Raoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJjqo%2FTfG6wPnXHrvyrcAxGUYcp9i%2FWHcb7yCCvtmC4QBfg7hQ1FXGKfKQ%2BGmAcLS7A1YEmDDa03%2BL%2BvzHalteCySwkCu%2FgGaXwgJx4tGo7geQ5s%2BpGnpV2MH57hbQ0hvI659jCa3YZSCIfaMunQATVl16vueiH36yJlqGnpGX0P6KVXshbvQloVrs2WKdrHzEuTy4MaW5T4fKhqriA4oXo5UUtfTHIg1J9KoJlZSoh6bld6HR68TXih6%2BHdBZmlK9%2ByTEfKyFr80%2B6Y6Qz8N8Qih8VSmC1pBU%2BBrZaq3oBNz49CkX7Zr8yaRu62Dx2KYrwqdd8E5mPZNaIigQFSxnajiw9NMlaRWkg736pMdLtOFddEVr035KXXdm5%2FeF8uolqyQJZXybDYHWgE7hlLBN1mDxPwkAcL6dJIzTc9tKBe0vbBago4FWLWGBry4oTL5ckF3fYTMpXnIWwz%2BBWrM7Lz7FK9Kd%2FSv%2BsKi64SxTCsyiqdy6h%2FHb3qVTOTUvc2d378LsdQOiMmkN%2BkozR0k9o3oXK97uNMalB01Fh%2FAUo7QDI%2F2XtOPZifdJ9PnQUsxewB%2F%2BoLKghaQW0jknK45BGxSJay36twQY2Gn%2FHf%2BPyQVm6PXIxp1x4Mbv6KMMN9%2BZuA9YKk4XfhpKyzMKOOncMGOqUBdkovH8Px4131rj3g32OFKzpXN6%2B3soYrgSQ9Q3q6XAG0xjLh5Gt2IFZ2YHXTpzjgESt%2FeTvYUmIJOcrvtezj7SfhpAS6Y94x7t5yo5e7yG1xDL1Jqvd%2BGXzsjStlIrGNqNzTL2VUti2%2FG8rS1mryp6wk%2FI%2BbAA%2BBikPlX4RbxcSDO%2Bw7yetHNS4jgBRDFqtf7LYhHAwIBt06kRbLmPDkcseQyG8j&X-Amz-Signature=50e46c07d30c45252fabe2b356621c280d3bb3a0e8d62685dd035236e94068b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
