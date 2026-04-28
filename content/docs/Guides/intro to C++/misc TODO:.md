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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDLLCQF%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCFrQgnDMXdi41SWJTeFR%2BW%2FDfsMXmHNIiHJ3lGDD52gIgNHmoIR1PHrjZDh4MwXONC73%2B7ZBdTIRZsODwpsVgjtoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbyeDDffRnal249ESrcAxAIVb9oNfJCAzW%2FhR414xeaM2reKAnS5lxj7fNx2puoqxPPm0yAcRxMPqOStNVfX6JIINFt75FyVC05I3vpB1KlFMre65Q1mfT47yMke2cCtxPaMT6GqHyhapaf4CTGALhXI1u1eu2FpgkEr6059Z93d%2BbvEmeFZD0kSe0L48O58V8Sx8q4tVjHz0B0XvUvaMHMlUHa1uazcbBRAshUMTn%2FXuh8Msnj5ghMP7NJbA3VXDE1WCwR6YYtw7cKKr428Giaou%2FykbqV9Nu%2BWXFVx1FpcJB9EFaQm0cwNHllFv9paFNaIxmXyCXh6mKOzaeadF%2BIWDicV2WoohNHXp6ZSRZHlCw8gogq%2FXnWbOwM8TFvWoaxCBh2g8HsYA3G70fCblzDfgesl%2FhkZ5gp%2B9iYm45Uh1ejmAoQc0eKC14ezq0%2BrhCzsv1cf91LEJwWPeZ5JpbQI%2BVF6gBwVUgpoDq3ASxLAtbUJgm3kLm3n2FtpjA11PejuxmTgVxju90PqiQpAK6%2FimU%2BeSRr5idsBBno%2FK23d42%2FmUneV8UjpfW0Ti0SjPNx2cJC2dwfPOlv8LkmyZTEcksZXhsJ0mvue1AbQCEdtMW8D%2BeSL%2BbcYs9VNz9FfvJuN4so2bY7WTPgMICjwM8GOqUBp6%2FxGoh6cPUw6VLb%2FYsgSP4SNM%2FZDK0ozuoPBp5RcRvFmJLV1TLAKxQ67%2FHUrSk%2B4B1haAYDY21EYCOqB75wUZxIsj9%2BoobJnEdj7jervJk97Up5M3mm3WyAdQleqwrmt4nqPKHZfTesjvQIY8MEHTrMQtWRoD2rxWFtxfkuy%2FGf50PndWIPjjKKlViMSSQ9dUjxeEYa5bUH7Hjw1PgTFUn%2B%2BvyR&X-Amz-Signature=6045e46b7cf0156fddb757a470c1f77d49b682c8c74ed36a3b3e74e171e708c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDLLCQF%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCFrQgnDMXdi41SWJTeFR%2BW%2FDfsMXmHNIiHJ3lGDD52gIgNHmoIR1PHrjZDh4MwXONC73%2B7ZBdTIRZsODwpsVgjtoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbyeDDffRnal249ESrcAxAIVb9oNfJCAzW%2FhR414xeaM2reKAnS5lxj7fNx2puoqxPPm0yAcRxMPqOStNVfX6JIINFt75FyVC05I3vpB1KlFMre65Q1mfT47yMke2cCtxPaMT6GqHyhapaf4CTGALhXI1u1eu2FpgkEr6059Z93d%2BbvEmeFZD0kSe0L48O58V8Sx8q4tVjHz0B0XvUvaMHMlUHa1uazcbBRAshUMTn%2FXuh8Msnj5ghMP7NJbA3VXDE1WCwR6YYtw7cKKr428Giaou%2FykbqV9Nu%2BWXFVx1FpcJB9EFaQm0cwNHllFv9paFNaIxmXyCXh6mKOzaeadF%2BIWDicV2WoohNHXp6ZSRZHlCw8gogq%2FXnWbOwM8TFvWoaxCBh2g8HsYA3G70fCblzDfgesl%2FhkZ5gp%2B9iYm45Uh1ejmAoQc0eKC14ezq0%2BrhCzsv1cf91LEJwWPeZ5JpbQI%2BVF6gBwVUgpoDq3ASxLAtbUJgm3kLm3n2FtpjA11PejuxmTgVxju90PqiQpAK6%2FimU%2BeSRr5idsBBno%2FK23d42%2FmUneV8UjpfW0Ti0SjPNx2cJC2dwfPOlv8LkmyZTEcksZXhsJ0mvue1AbQCEdtMW8D%2BeSL%2BbcYs9VNz9FfvJuN4so2bY7WTPgMICjwM8GOqUBp6%2FxGoh6cPUw6VLb%2FYsgSP4SNM%2FZDK0ozuoPBp5RcRvFmJLV1TLAKxQ67%2FHUrSk%2B4B1haAYDY21EYCOqB75wUZxIsj9%2BoobJnEdj7jervJk97Up5M3mm3WyAdQleqwrmt4nqPKHZfTesjvQIY8MEHTrMQtWRoD2rxWFtxfkuy%2FGf50PndWIPjjKKlViMSSQ9dUjxeEYa5bUH7Hjw1PgTFUn%2B%2BvyR&X-Amz-Signature=0f14c9d1173e7f74067c91da4b0fe777fe8115790d825f4384eb01d4dbff352c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
