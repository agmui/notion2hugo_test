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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JEGW5I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB48D9Ts0uz1zBxl0rEmX79ebzPq%2BUBFEJeyrAsviQmNAiEA4gzxlrYC2NDZY6BESEJC7ANptz8VCYV0yrhY87%2FSL6kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBUsTLK6goIMPnuZECrcA58TThHYKQxMQ9rVqLCDi94uuLsQy%2B6YKZdW85d4wBCf%2FIcsTz%2FGMKwX85ZwZn33L9W8lYEJv5Ltmu55yAhUUnRD6%2B9JnihhznhAzbdEDtIzvM2wF%2FsPRM%2FiUNhoVeJoLASnE6BlsVxZ7uA%2Fs1j0pbUQhpM1OjNu8pmF6qOajNltUMf53yDKGAuT8ZzCGWrFyBFYAdLhS5JbRK3hrUhjaNMpqTc3W1w10EEMiL5HO%2BdHvHOSyPdPBkmd6GNFPz9YLkWvL1uWEGwu5A7nT2y%2FHUej05dudzQVYFaiXu2McV9wDRyIOvWCEEhc%2FdjAmMoiCaxfOC1W5kkcp8rxxWGdXyRrhaKGwYF7EgZXmXzvC8e0Qrh3RV0G0tNw9mkU%2Fr8gyJApAE1E6BbNXitx9t5pdChjIBmIw%2Bq7eiIvWirAby2usP%2B7kjYjRZxpjES92WqzuU1A2r42jeJ2Vfm7fGNFSNTqHTzpLu3CqaObY9v6%2B9Lwtq2PcIY2a8OIYiF%2BB630HrUhJlI%2BrfIkJFaPcgFvGTGmRSER54cnqj6W1BazLdkDDTBFsPFWZvuaGD6MiKCln7eFoGnVYogCF7AhPUKNHtepzw00KTClEnfXNH%2BKWUKuJVJJawC0OEqAQ5UBMOzltr0GOqUBhDR2ckCLVv%2F%2FSiBgfCbKhNm%2F7XAK9izS6R2R0WrhS20x201wKTnuFEpjZ9N6afSSQNLzKDfi6ZwxP270%2FHye6seD3ug%2Bk4e2XDiqIsYPOVP54BRWvtZEpTcwCkWa6cirnpJuRaDOuBSmLtgFKLuLecJG5CQckb5b8NwAl9YzXc7%2BzxaYw%2BlYsGudBV5OhFW9m6aStxou4cDcs0B2Lv71eAqumFRM&X-Amz-Signature=9a46adda4703233d4bfadbe2efcf49df5f93b116d20153490c0b0c1785483bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JEGW5I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB48D9Ts0uz1zBxl0rEmX79ebzPq%2BUBFEJeyrAsviQmNAiEA4gzxlrYC2NDZY6BESEJC7ANptz8VCYV0yrhY87%2FSL6kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBUsTLK6goIMPnuZECrcA58TThHYKQxMQ9rVqLCDi94uuLsQy%2B6YKZdW85d4wBCf%2FIcsTz%2FGMKwX85ZwZn33L9W8lYEJv5Ltmu55yAhUUnRD6%2B9JnihhznhAzbdEDtIzvM2wF%2FsPRM%2FiUNhoVeJoLASnE6BlsVxZ7uA%2Fs1j0pbUQhpM1OjNu8pmF6qOajNltUMf53yDKGAuT8ZzCGWrFyBFYAdLhS5JbRK3hrUhjaNMpqTc3W1w10EEMiL5HO%2BdHvHOSyPdPBkmd6GNFPz9YLkWvL1uWEGwu5A7nT2y%2FHUej05dudzQVYFaiXu2McV9wDRyIOvWCEEhc%2FdjAmMoiCaxfOC1W5kkcp8rxxWGdXyRrhaKGwYF7EgZXmXzvC8e0Qrh3RV0G0tNw9mkU%2Fr8gyJApAE1E6BbNXitx9t5pdChjIBmIw%2Bq7eiIvWirAby2usP%2B7kjYjRZxpjES92WqzuU1A2r42jeJ2Vfm7fGNFSNTqHTzpLu3CqaObY9v6%2B9Lwtq2PcIY2a8OIYiF%2BB630HrUhJlI%2BrfIkJFaPcgFvGTGmRSER54cnqj6W1BazLdkDDTBFsPFWZvuaGD6MiKCln7eFoGnVYogCF7AhPUKNHtepzw00KTClEnfXNH%2BKWUKuJVJJawC0OEqAQ5UBMOzltr0GOqUBhDR2ckCLVv%2F%2FSiBgfCbKhNm%2F7XAK9izS6R2R0WrhS20x201wKTnuFEpjZ9N6afSSQNLzKDfi6ZwxP270%2FHye6seD3ug%2Bk4e2XDiqIsYPOVP54BRWvtZEpTcwCkWa6cirnpJuRaDOuBSmLtgFKLuLecJG5CQckb5b8NwAl9YzXc7%2BzxaYw%2BlYsGudBV5OhFW9m6aStxou4cDcs0B2Lv71eAqumFRM&X-Amz-Signature=1881a2b9cc25d6bfa79f0a3bbccfc052523ae396864b2e212c7538a086e3f25e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
