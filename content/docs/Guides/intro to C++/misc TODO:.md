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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J7J5NK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2L%2B6%2FuaRqPl%2BdneqUUyK1q0VbV%2BV7%2BuESZYAcydKxCAiA2xCsl7v%2F8f09xD8lK7InOMq5dwiHAMw10USHAC%2FQqHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGAPhzIahS%2FrdltJpKtwDL%2BPzz2CZ8Ep0ozEWclnLqDsvW6W%2BPZOV6W8regjg4lCZ3yMljGmpuf7RkVXbmSnQyDGr%2BV7qMNhUowB2b6ap0QrEFlJpzoJfqwYs5%2FQYSiKu2yfsvm3YvRafDO60lT7LZWq40nkjaBQ6aKTbbChnmvZ1NMyBbZeRrRI7408BuAx8vMNCr4H2z00QihHQf%2BItiQeKjjhDRZ8NG7UQWU5z8wZ6BIsOJvC9GxoxBpJ4RXbWMq5E43y9BEIAYch56CIbMrteot3xMm%2BU3k3HtEZKtxQvNIKmf5Z53YVANMsoQp0mBbYd1z2ipbGRjDKUQnpUO5YxmJ0bEvp47INQgnmfmxk0aPPmJaVr37AaDTZJ6%2FNSsF2ILf%2FTyDoGXfUbcz6Pys2pRS86NFOonlgFC0D34f1MeK9p7TEurb8vj3PbxZFjo0etxAkPdhyGCh20ZfRCgTCel2AvTO8XW9ZwIkyryVihyJ%2B%2Fgswm9dyck2g%2FBG1G4%2BwmvCzBOEOfV1yFW6X34HImSh71N75q4%2BkcnfXb772Vc3ECM7bPTvxEvZEtI0DXz23Hlmwfxz7PebHnd%2Fmn6wAqiySmgAXFRwroVoH6I5KhuNiRb2F%2BGqLUhUXn%2F8XrSXVVZOXQ2nvd%2BtUwu6LFwAY6pgG540GsH9lJMtsSW155M6LRj5Qchez6%2F6vpDXtKdp%2BAUd69JTRCNDR9UNmcirEEpZ04qjU5iCGZuaofh%2B5eiJSv76qNKg%2FdUbmgcJafX1H57sQRr4EhvOHtnovnZHqTetaOmAJgfr7uprWnsBN2E7ORyXHPiwELyp6x7atureRanfMt5mQ5gEcwz%2FjE2sendF5qQKBSjfHYStbcRkcLowWPJIGkHqP2&X-Amz-Signature=37b266e0524d610a79ee6c454edbd8411fbaff664ab317e3bbeaf4cfeb9f2a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J7J5NK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2L%2B6%2FuaRqPl%2BdneqUUyK1q0VbV%2BV7%2BuESZYAcydKxCAiA2xCsl7v%2F8f09xD8lK7InOMq5dwiHAMw10USHAC%2FQqHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGAPhzIahS%2FrdltJpKtwDL%2BPzz2CZ8Ep0ozEWclnLqDsvW6W%2BPZOV6W8regjg4lCZ3yMljGmpuf7RkVXbmSnQyDGr%2BV7qMNhUowB2b6ap0QrEFlJpzoJfqwYs5%2FQYSiKu2yfsvm3YvRafDO60lT7LZWq40nkjaBQ6aKTbbChnmvZ1NMyBbZeRrRI7408BuAx8vMNCr4H2z00QihHQf%2BItiQeKjjhDRZ8NG7UQWU5z8wZ6BIsOJvC9GxoxBpJ4RXbWMq5E43y9BEIAYch56CIbMrteot3xMm%2BU3k3HtEZKtxQvNIKmf5Z53YVANMsoQp0mBbYd1z2ipbGRjDKUQnpUO5YxmJ0bEvp47INQgnmfmxk0aPPmJaVr37AaDTZJ6%2FNSsF2ILf%2FTyDoGXfUbcz6Pys2pRS86NFOonlgFC0D34f1MeK9p7TEurb8vj3PbxZFjo0etxAkPdhyGCh20ZfRCgTCel2AvTO8XW9ZwIkyryVihyJ%2B%2Fgswm9dyck2g%2FBG1G4%2BwmvCzBOEOfV1yFW6X34HImSh71N75q4%2BkcnfXb772Vc3ECM7bPTvxEvZEtI0DXz23Hlmwfxz7PebHnd%2Fmn6wAqiySmgAXFRwroVoH6I5KhuNiRb2F%2BGqLUhUXn%2F8XrSXVVZOXQ2nvd%2BtUwu6LFwAY6pgG540GsH9lJMtsSW155M6LRj5Qchez6%2F6vpDXtKdp%2BAUd69JTRCNDR9UNmcirEEpZ04qjU5iCGZuaofh%2B5eiJSv76qNKg%2FdUbmgcJafX1H57sQRr4EhvOHtnovnZHqTetaOmAJgfr7uprWnsBN2E7ORyXHPiwELyp6x7atureRanfMt5mQ5gEcwz%2FjE2sendF5qQKBSjfHYStbcRkcLowWPJIGkHqP2&X-Amz-Signature=7581efc5047d74996db9c1f034eefe504c1f9e5492cc00b1517139991deeb4af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
