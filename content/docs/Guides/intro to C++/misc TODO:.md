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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOJSIC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42lukD4oVdyymtxllXY%2FZRBHhtfqWHzwDSWBVM6CtvQIgeIHIHvaCuzbskloCrvi%2FYg%2FHXf2a4QX8WO33lxFySdMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHprYVos3XsBlPWreCrcAw5nNA3U%2BNmncTJxV%2FyHO1rlpx4juP219PCrYYx6%2FHABAqHnEmto8lRalDZo1XzQdhk68PcQym3lUnFaGv4QekUoGCleSGZjGviU6nidslPKBiw%2FKZQfwwjsC1%2BsCQWaZrDWSxrpRB2d03GrxQRh6d02xeAX%2Bz4HCYOJNNPVT9bN2L14bQWEyf4KigIGvoVjyEkdaNzx5BhZruusLSgIaSG2t%2FCDkl7wBTampG%2Bmcy%2BiAO7O35N%2FWd9N5X7wsKC0cXdcXdL4D4n6ee%2FPoKjjN05MdS0LCmHqyoOBj%2BRImy2H8FcfcXDLt9uTJCHKEOk5QtKjlrNT6ncybhqFZEsw9VzBoSMX93LdoJGGPkr%2B4GvfSMTHj1KYyLogoVzUAMc1Gbg5sFfR7oWVPMuJalaTtt9dE334C7pHRw%2F%2FI8LBW%2Fy9encdX40ZXW9UjI8g3jHzQIjyNuo%2FQQHY86Z2KLyC3SK1kr1O0RmzTpKHxSUA0%2BUA3ZGSuXgG%2BPiolgVxcYNfddYPOOKldKG0%2BbLGXpwFg9lBmX0ncyZ6vWDaXZNbiZPDLh%2Bm5NLqCdfQszdCiIqwmJmX%2FmzOslw0i707He%2F3qFUV4OrUxegDefLmHp7JraSnxvhqX9uqu2ZqpLdXMPiJqsAGOqUBOATzZ0fQw2oPiXaLdVtAPEwdjlvozXdTNkxLUmmYWuGahcU9oJ3aYhGaQ9VrBDAbLccsSiKYbDX%2FMaMWmC5a6%2BuLDRBoep62wzR61twjMs7RBkZhPjI6u4ke8nUgBu8cIHQR2QHrflhO0A25%2BciaVhzxF%2BOKgBNClqijt5VhnDD%2B8WMPmeia%2FGV6NwhGH4TlL%2BPU%2BDuCRtKPmyeTN5%2BVNNKW0e8S&X-Amz-Signature=0f37e388063303689543f42d2e372fa6f4c4a9c8642360a60e73ad02cb43a5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOJSIC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD42lukD4oVdyymtxllXY%2FZRBHhtfqWHzwDSWBVM6CtvQIgeIHIHvaCuzbskloCrvi%2FYg%2FHXf2a4QX8WO33lxFySdMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHprYVos3XsBlPWreCrcAw5nNA3U%2BNmncTJxV%2FyHO1rlpx4juP219PCrYYx6%2FHABAqHnEmto8lRalDZo1XzQdhk68PcQym3lUnFaGv4QekUoGCleSGZjGviU6nidslPKBiw%2FKZQfwwjsC1%2BsCQWaZrDWSxrpRB2d03GrxQRh6d02xeAX%2Bz4HCYOJNNPVT9bN2L14bQWEyf4KigIGvoVjyEkdaNzx5BhZruusLSgIaSG2t%2FCDkl7wBTampG%2Bmcy%2BiAO7O35N%2FWd9N5X7wsKC0cXdcXdL4D4n6ee%2FPoKjjN05MdS0LCmHqyoOBj%2BRImy2H8FcfcXDLt9uTJCHKEOk5QtKjlrNT6ncybhqFZEsw9VzBoSMX93LdoJGGPkr%2B4GvfSMTHj1KYyLogoVzUAMc1Gbg5sFfR7oWVPMuJalaTtt9dE334C7pHRw%2F%2FI8LBW%2Fy9encdX40ZXW9UjI8g3jHzQIjyNuo%2FQQHY86Z2KLyC3SK1kr1O0RmzTpKHxSUA0%2BUA3ZGSuXgG%2BPiolgVxcYNfddYPOOKldKG0%2BbLGXpwFg9lBmX0ncyZ6vWDaXZNbiZPDLh%2Bm5NLqCdfQszdCiIqwmJmX%2FmzOslw0i707He%2F3qFUV4OrUxegDefLmHp7JraSnxvhqX9uqu2ZqpLdXMPiJqsAGOqUBOATzZ0fQw2oPiXaLdVtAPEwdjlvozXdTNkxLUmmYWuGahcU9oJ3aYhGaQ9VrBDAbLccsSiKYbDX%2FMaMWmC5a6%2BuLDRBoep62wzR61twjMs7RBkZhPjI6u4ke8nUgBu8cIHQR2QHrflhO0A25%2BciaVhzxF%2BOKgBNClqijt5VhnDD%2B8WMPmeia%2FGV6NwhGH4TlL%2BPU%2BDuCRtKPmyeTN5%2BVNNKW0e8S&X-Amz-Signature=4d22f3765b4792daf84bad363809dfa42c842538b5237eb51415eb857266aa8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
