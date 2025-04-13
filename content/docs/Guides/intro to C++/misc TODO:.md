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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXZPJZN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEPTTEQ4j4PRLf9L2KPdSWEL4JqJfI4Q7fdoJ3%2Bx2EKVAiBGo5KNGbgxBDEvpiMQP%2Fm2ZiClQsuWkpZpQzc2LSLqkSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTjgGa5kEIGRpwXKtwD7azOh0D2iSR3iGEc2ZyjDUwQ9NKZuWK%2FKT3LoKcwEw7%2Fr%2Fou1uwzfZVCAVidL0X0OUJf2qSsBr1hQObXdO8Xx4ts2%2FCBk%2BtRetOfkLXfFuGo4TZ5Itgn1HewJDyVXoxVlgzuoyBsK%2FCS7BxsmBZ6FbsHXU%2FdZp2izEum58LPVKp3hOF5sUvDATowPGrxCVubw7jCNfV%2FUPIXEghGuH%2FuxHTOoBj3k1ZUnCPz4y%2Bdxj25%2BewJpcB3M0T%2BgS8icEsT0%2FdodTDWc1bfLxLjyW%2FYakg7HKBGcYbArQYQEoMf1Fk0jyac4Dyi3aFot3gGUAj2qID36FYDym7GUvdafxdvR4heTB1Fq3p1kusxE%2B8JP4gyJGl3nLH7DgtAJ350h7objj98cjOGH4CSP%2BrohkMkVOYifYckYxMby4cEGpom%2F2F4xD5kn1ToagcJ%2FRoGi3hrprrgju4q7qPcc9jq637y5vJaQfApw3jlotG1AvRACLPMUuUvArdNYubIcifekX1BxmfmuM%2F7OF6aJJhAUp33Q1%2BZdNwnuI95%2BsbC9XAB%2BiDrnhJBDp%2FiP8OPJAb7TS3zortsFR04Uh3L1Wo0HmeCZtnB%2BXJgSDIbvf%2BJjVCmIVRm53OO1hUDkUzg35Uw5t7vvwY6pgHPXSlDaDi9Q3zpn1mzkHtZbpKW3ea1bntD%2FEdJeuF6v6j8LutCLF2DxZioWRR%2FzW3ZSHln4S2HpmT2MrlScd5d3SpbrNC60yKPQjzSfv%2FsMkKGopYElmV%2B2417iCBwgKzaS7HWZSJqoi%2FM%2BXyfl7deLjx7V5OqJSCX%2F0dA5JcdyUrzAgBzhGgXc5DVHw0Idb3U2J2v5fYO1CXGqWn5PwXOqvpSU%2B5U&X-Amz-Signature=7a308d0ebc5a27cbeec8ce811ddbd19763f359456661ebda9c0e5e10f8e07ede&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXZPJZN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEPTTEQ4j4PRLf9L2KPdSWEL4JqJfI4Q7fdoJ3%2Bx2EKVAiBGo5KNGbgxBDEvpiMQP%2Fm2ZiClQsuWkpZpQzc2LSLqkSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTjgGa5kEIGRpwXKtwD7azOh0D2iSR3iGEc2ZyjDUwQ9NKZuWK%2FKT3LoKcwEw7%2Fr%2Fou1uwzfZVCAVidL0X0OUJf2qSsBr1hQObXdO8Xx4ts2%2FCBk%2BtRetOfkLXfFuGo4TZ5Itgn1HewJDyVXoxVlgzuoyBsK%2FCS7BxsmBZ6FbsHXU%2FdZp2izEum58LPVKp3hOF5sUvDATowPGrxCVubw7jCNfV%2FUPIXEghGuH%2FuxHTOoBj3k1ZUnCPz4y%2Bdxj25%2BewJpcB3M0T%2BgS8icEsT0%2FdodTDWc1bfLxLjyW%2FYakg7HKBGcYbArQYQEoMf1Fk0jyac4Dyi3aFot3gGUAj2qID36FYDym7GUvdafxdvR4heTB1Fq3p1kusxE%2B8JP4gyJGl3nLH7DgtAJ350h7objj98cjOGH4CSP%2BrohkMkVOYifYckYxMby4cEGpom%2F2F4xD5kn1ToagcJ%2FRoGi3hrprrgju4q7qPcc9jq637y5vJaQfApw3jlotG1AvRACLPMUuUvArdNYubIcifekX1BxmfmuM%2F7OF6aJJhAUp33Q1%2BZdNwnuI95%2BsbC9XAB%2BiDrnhJBDp%2FiP8OPJAb7TS3zortsFR04Uh3L1Wo0HmeCZtnB%2BXJgSDIbvf%2BJjVCmIVRm53OO1hUDkUzg35Uw5t7vvwY6pgHPXSlDaDi9Q3zpn1mzkHtZbpKW3ea1bntD%2FEdJeuF6v6j8LutCLF2DxZioWRR%2FzW3ZSHln4S2HpmT2MrlScd5d3SpbrNC60yKPQjzSfv%2FsMkKGopYElmV%2B2417iCBwgKzaS7HWZSJqoi%2FM%2BXyfl7deLjx7V5OqJSCX%2F0dA5JcdyUrzAgBzhGgXc5DVHw0Idb3U2J2v5fYO1CXGqWn5PwXOqvpSU%2B5U&X-Amz-Signature=94cc5548d88ccce0fd46d2ee49e33b82edd9983ca5d1aa554aa309f491151251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
