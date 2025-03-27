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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB55Z4DC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ztHRYFnOEhtq8v6U%2F%2Fn6iLPQoKFEWdbkfZU%2BqEoZZQIgRjnOvY%2BPHWSeo78r54HC9z8ebVwfQlbxDP%2FM%2FjUUUD4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN9jbge8pCupgFIlYircAzh7qDHhg2kZnRbrpHt37LgI7Ddg9OjWvx8M8vylS48KFb1D%2FVc%2BrFRaUUYRRJu1x5ftneTtxADwHpgSsIBV%2FWL7pt3AtbbG3Y8IT8r2jNLSrXq6iHv%2B5Nkyo1UIetCiXvawOjpXYvNg%2FOuzMXh70rvQvxacNZNpR%2FDr%2Fj2ccDLlJmHxhR5ez%2BcEP23vxEcZp3Ht2mJCrcwqFlO%2F0Lj0Onlhtk11NeWVNEAZ1WraA%2BA7oG9nbsDW4UDN%2Bt2MUVH2%2FtzZRNnpnFspJnVmZVDQmUF8IHuffoyvN45jRuqJR5ed0QW3uHbQ%2Bc0KJ8cUQB8OK%2BRy0Mvk%2Fd7OwAnHMkPhze2SZleFbjOeMhXB5TyuPECWe3D3fvQy2oRB85HuwAIZHSnHGrUWpiuMunQEOH%2FT6VjtR9bEhV4FZrrlpgvBg1aeGfP%2FHn2wbTKKySE21B7lwRf%2BcCbkqNehiQ14KvGhlDkclDP%2FUWSCsBgFzmONe4xcNXqkvB7WVKtgtZVD9SWt%2BJse6rxtSrB242s6w%2FNrYY4knhmC89Q7RfK1Ke19ImXLTzuhI2S9tT5f06Fwf2mTpsXaN9xKOHBBED1RXUbLf0DxxRzh3XRPJiB8AhYdRJf4BaVEWLiOzil2HwD4MIDblL8GOqUBVYtnq02npWR6CdWEf3CV5Bkv4myypEh47SEaJXoZ1Df3jwrFXW82N8DpUT5oZ0AT1Prc2TJZiKIuOVhJptd5lkPO1WFhosn9oV0tEYsK6VI8IbY8V0LN272lY4hbT%2Fapx1QxUhc2at8OjyubIkxS%2FR2VUAPc5Y9gtfTZLWocnSoPC1hh2anVNHl8jm0Ycxc1jKaR1AJRV0LfPLdRYzCZnj1Ld66F&X-Amz-Signature=fc57bcab2a2f28a41784a69ff08731bde622fd839341c1576cd52b164138f611&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB55Z4DC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ztHRYFnOEhtq8v6U%2F%2Fn6iLPQoKFEWdbkfZU%2BqEoZZQIgRjnOvY%2BPHWSeo78r54HC9z8ebVwfQlbxDP%2FM%2FjUUUD4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN9jbge8pCupgFIlYircAzh7qDHhg2kZnRbrpHt37LgI7Ddg9OjWvx8M8vylS48KFb1D%2FVc%2BrFRaUUYRRJu1x5ftneTtxADwHpgSsIBV%2FWL7pt3AtbbG3Y8IT8r2jNLSrXq6iHv%2B5Nkyo1UIetCiXvawOjpXYvNg%2FOuzMXh70rvQvxacNZNpR%2FDr%2Fj2ccDLlJmHxhR5ez%2BcEP23vxEcZp3Ht2mJCrcwqFlO%2F0Lj0Onlhtk11NeWVNEAZ1WraA%2BA7oG9nbsDW4UDN%2Bt2MUVH2%2FtzZRNnpnFspJnVmZVDQmUF8IHuffoyvN45jRuqJR5ed0QW3uHbQ%2Bc0KJ8cUQB8OK%2BRy0Mvk%2Fd7OwAnHMkPhze2SZleFbjOeMhXB5TyuPECWe3D3fvQy2oRB85HuwAIZHSnHGrUWpiuMunQEOH%2FT6VjtR9bEhV4FZrrlpgvBg1aeGfP%2FHn2wbTKKySE21B7lwRf%2BcCbkqNehiQ14KvGhlDkclDP%2FUWSCsBgFzmONe4xcNXqkvB7WVKtgtZVD9SWt%2BJse6rxtSrB242s6w%2FNrYY4knhmC89Q7RfK1Ke19ImXLTzuhI2S9tT5f06Fwf2mTpsXaN9xKOHBBED1RXUbLf0DxxRzh3XRPJiB8AhYdRJf4BaVEWLiOzil2HwD4MIDblL8GOqUBVYtnq02npWR6CdWEf3CV5Bkv4myypEh47SEaJXoZ1Df3jwrFXW82N8DpUT5oZ0AT1Prc2TJZiKIuOVhJptd5lkPO1WFhosn9oV0tEYsK6VI8IbY8V0LN272lY4hbT%2Fapx1QxUhc2at8OjyubIkxS%2FR2VUAPc5Y9gtfTZLWocnSoPC1hh2anVNHl8jm0Ycxc1jKaR1AJRV0LfPLdRYzCZnj1Ld66F&X-Amz-Signature=c44d3bcb149ceeab50101ba50a25bfe0fd2f70715ee55d00c70fccf8d1748396&X-Amz-SignedHeaders=host&x-id=GetObject)

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
