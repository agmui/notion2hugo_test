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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VFDM4U%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4S3dwoq1NrqKUvFDoh7R5V8e747S47BVsANttDcP%2BvAiEA%2BYeiDQremnbDS6kMeKfocfDDctM3JeF0b%2FFUZuGQwakq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOydOo4ENEz%2BytK2TyrcA7anBKLPZK9Db%2F%2BGE43PXeTiYFoUKRkPikzAspW1vEBAVYdxe%2FBP7DPsZWF5xEGQQW1jkw1Vhz9zxWPc1EEz%2B%2F2b1G3jnyrH9NB2tyh9FB0GoQHVY%2FFe6IoM73GGZeEH5aRYnK91NdSLnDnNFwFshUTE22oBisBJuozdoIWUN%2F6kbYQCMzBTXoJ65uioxmedMebypoi1rwB3tu5u67Xj%2Fwzeh3Ea%2BGNvtuFKB4wwV7iP%2F%2BprWioe%2B3k7LZITMjgTaxlXGE3rO8H5mV1JgZRqm84a90AEtJb5T%2Biv2rpCGu8vZqh5ybXzPaNiHUap6lDAaFGDgcvRSbARcARUuez5DU2ad4WgpHmej8lOw3lORGDUmra24uaeVAP%2BVGk%2BwBt78gwzyWtUveZ9SuNJ7f1l8mOCP2vCsOnNhsrueBZacXiNZhdLncIyev9eUBaPEAEDsE6EYOCyUahg3x8hZqcly1r%2Fmraz74wbqgsYbqtwANi37%2FLkwS%2BJpYDcUufDiPO%2FvvK%2B%2FBUUpuARgRWHc3j3VQFvN%2BicsXOvtJ8N%2FJ%2BGnRpsv%2FcMfGqKpeH0yyr2YK1He2oIhZZznW4rDA6CHMBf%2BoX19WPyzujVQQrLVlt6qjaMB66QSD0Fv69IcNwWMKyhwb8GOqUBfK4jiB4iTqohcWsi9t0YIwZcATEbYG2WYe605USrHC8JvvGzH0dtg0z0rmdK3ll4NEVHkiK2ZvofAp67C4QmtERqPhhsrazDlzBb%2FjyAnAJrhwfWuds9zThfK7vJMy4iP8na%2BhMIrdVPOJQBq%2F%2F9AYp76WFPa62rGghwy7RqVBbYjcEX%2FfF9KRMIwPZM7Y75hOWr0PF03egGUVTuSqEHvnWigng2&X-Amz-Signature=a6501d84f2872a8a70e5c5e7d547c799f0dfc45dde79117ca9f7557f3f37bacc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VFDM4U%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4S3dwoq1NrqKUvFDoh7R5V8e747S47BVsANttDcP%2BvAiEA%2BYeiDQremnbDS6kMeKfocfDDctM3JeF0b%2FFUZuGQwakq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOydOo4ENEz%2BytK2TyrcA7anBKLPZK9Db%2F%2BGE43PXeTiYFoUKRkPikzAspW1vEBAVYdxe%2FBP7DPsZWF5xEGQQW1jkw1Vhz9zxWPc1EEz%2B%2F2b1G3jnyrH9NB2tyh9FB0GoQHVY%2FFe6IoM73GGZeEH5aRYnK91NdSLnDnNFwFshUTE22oBisBJuozdoIWUN%2F6kbYQCMzBTXoJ65uioxmedMebypoi1rwB3tu5u67Xj%2Fwzeh3Ea%2BGNvtuFKB4wwV7iP%2F%2BprWioe%2B3k7LZITMjgTaxlXGE3rO8H5mV1JgZRqm84a90AEtJb5T%2Biv2rpCGu8vZqh5ybXzPaNiHUap6lDAaFGDgcvRSbARcARUuez5DU2ad4WgpHmej8lOw3lORGDUmra24uaeVAP%2BVGk%2BwBt78gwzyWtUveZ9SuNJ7f1l8mOCP2vCsOnNhsrueBZacXiNZhdLncIyev9eUBaPEAEDsE6EYOCyUahg3x8hZqcly1r%2Fmraz74wbqgsYbqtwANi37%2FLkwS%2BJpYDcUufDiPO%2FvvK%2B%2FBUUpuARgRWHc3j3VQFvN%2BicsXOvtJ8N%2FJ%2BGnRpsv%2FcMfGqKpeH0yyr2YK1He2oIhZZznW4rDA6CHMBf%2BoX19WPyzujVQQrLVlt6qjaMB66QSD0Fv69IcNwWMKyhwb8GOqUBfK4jiB4iTqohcWsi9t0YIwZcATEbYG2WYe605USrHC8JvvGzH0dtg0z0rmdK3ll4NEVHkiK2ZvofAp67C4QmtERqPhhsrazDlzBb%2FjyAnAJrhwfWuds9zThfK7vJMy4iP8na%2BhMIrdVPOJQBq%2F%2F9AYp76WFPa62rGghwy7RqVBbYjcEX%2FfF9KRMIwPZM7Y75hOWr0PF03egGUVTuSqEHvnWigng2&X-Amz-Signature=e9de57768088fe68b83fb65fd950fbcdcfc8764897d02f5d1495bdbca8ceac0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
