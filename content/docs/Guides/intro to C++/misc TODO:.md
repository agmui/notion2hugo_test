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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3Y55BV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHVsbJxcTZ9A8i2zmQa0vweZ1M0e1aHuDkxhdjzg%2B5XtAiBmcN8ZSDXrLoSBuX0fmlyOt690LEo932F68yu2oWFbNiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWmM6FI2HAxSNWpk6KtwD2wUdVZ6pTzv87e4%2F6q5x%2FDqJYqOs5%2FJI6IQ35fuy1l%2BqhqpNjUcvOox3M%2Fmzyw8L5%2BBVF%2FAFktBupDuwOe8x75I2SgOgCjCUMGfMAY41Q8xkoONOs7utkzd99ZrTHpIzDfsJeiwb%2Bg%2FNzg73xwmUDLZlmggDANCBzxw7VA%2B74%2FM3xUbshW3ydpluo0tCbBTNqtQyZYm9oyMnnNPz%2BZ9xIfu428yQji%2FvzX%2B1%2BCMulmLvrl9tbPo%2FJOuyAA%2FJi0SB9uIp%2BVrNGvDz19OWihgZhXCbqCzghdCY9kPwUZeqmEFQN4iiK0u18wnre%2BfiXc4F88Zo1vCsLWymkP%2Bh86ty3lNSRHhGIN9evti%2F1RtA7pcuxtwBox56fXs9hwI7fSA1YlWTYEDsPaDu26JmxYyXtS8SBbkuIB7C7GYijPcQN%2BIYSI77FbXx4QIJd1TG6rFyAcAVft8vTnksWPPHqpMnx4g6CCzLKbCLmUK4MK4F5toqWX82kEIVcae2mJ0zK2crNJbgvNSemb2U5tdYSFwp6DnKjSGbgJiK89vqiLVdlhTX2xRmunMXSSKHfL9bEZvem4wlb%2FLq5DtsPdo9PVC3anc%2BVcRKoXkAkoONC02rnz62E2ysWVCFQkYE%2BVcwlafyvgY6pgFoR5LfMoWNfWFamakfZW7j0HATedOnBVrLi5wgIzXrDjC9RPAqFPog9hIVSllbjPLi6UmcgBvRFtTZXK2dEZvXXK9pPHR%2FNvNcyrK5ECM%2BC%2B95DajsKcUBgAfkzWFgNw3J35HFGgqFl4IHlcIxeYt1GkjnVMpC6UeG2ObhJUiGaXT4AA98o%2BNhb%2FCPJY2lNZTP6uwMQJo56D5CNojNHuOJ7qf0YA3n&X-Amz-Signature=2018b898bf021b5d0bae9a3c815b4f97e5f4b50b3a8ffd5932bd6b4bed01587f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3Y55BV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHVsbJxcTZ9A8i2zmQa0vweZ1M0e1aHuDkxhdjzg%2B5XtAiBmcN8ZSDXrLoSBuX0fmlyOt690LEo932F68yu2oWFbNiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWmM6FI2HAxSNWpk6KtwD2wUdVZ6pTzv87e4%2F6q5x%2FDqJYqOs5%2FJI6IQ35fuy1l%2BqhqpNjUcvOox3M%2Fmzyw8L5%2BBVF%2FAFktBupDuwOe8x75I2SgOgCjCUMGfMAY41Q8xkoONOs7utkzd99ZrTHpIzDfsJeiwb%2Bg%2FNzg73xwmUDLZlmggDANCBzxw7VA%2B74%2FM3xUbshW3ydpluo0tCbBTNqtQyZYm9oyMnnNPz%2BZ9xIfu428yQji%2FvzX%2B1%2BCMulmLvrl9tbPo%2FJOuyAA%2FJi0SB9uIp%2BVrNGvDz19OWihgZhXCbqCzghdCY9kPwUZeqmEFQN4iiK0u18wnre%2BfiXc4F88Zo1vCsLWymkP%2Bh86ty3lNSRHhGIN9evti%2F1RtA7pcuxtwBox56fXs9hwI7fSA1YlWTYEDsPaDu26JmxYyXtS8SBbkuIB7C7GYijPcQN%2BIYSI77FbXx4QIJd1TG6rFyAcAVft8vTnksWPPHqpMnx4g6CCzLKbCLmUK4MK4F5toqWX82kEIVcae2mJ0zK2crNJbgvNSemb2U5tdYSFwp6DnKjSGbgJiK89vqiLVdlhTX2xRmunMXSSKHfL9bEZvem4wlb%2FLq5DtsPdo9PVC3anc%2BVcRKoXkAkoONC02rnz62E2ysWVCFQkYE%2BVcwlafyvgY6pgFoR5LfMoWNfWFamakfZW7j0HATedOnBVrLi5wgIzXrDjC9RPAqFPog9hIVSllbjPLi6UmcgBvRFtTZXK2dEZvXXK9pPHR%2FNvNcyrK5ECM%2BC%2B95DajsKcUBgAfkzWFgNw3J35HFGgqFl4IHlcIxeYt1GkjnVMpC6UeG2ObhJUiGaXT4AA98o%2BNhb%2FCPJY2lNZTP6uwMQJo56D5CNojNHuOJ7qf0YA3n&X-Amz-Signature=3b554fa74e23c1e3d6b86cd25ec5d3cce8c4c3742e9bdf9b853597636dce4bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
