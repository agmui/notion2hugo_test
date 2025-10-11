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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVDMXEY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFZ9Usts%2FXNclinH1wI1CtE2O9MSCNMd3C7t9GpbZ8fQAiAzIpZIWqhPShLQIWwU%2BTd2BI7IgdPbeBd7PKVz%2FUi%2BhCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW63VqVezvOaBn2owKtwDNyq6qVGiwcX78Nv9p3Jv%2BMUj5Fzdg2dSJRSDAE9aPBrLnZmErNgXKWl2bWNvAXwPG58JQmSUFPgavcmBSPrhv6b%2FtVAdGuaqkI7XpAcnLUdF%2ByAS5Xa4NgVVeAMS63c5m8kfyFxs1HrztaPCA0X%2F%2FL7OuefD7T7deSBdHr%2FF76PuZPLv%2BfiFY5ktX7w6MCAAgJwQI0uvQb7uAoMW58HrD2IrJCV38%2FR%2F3SjTyGTZp2olaM%2FTrCwICXUCUErOBT5UcurRymtaEM7eub93xfbG5%2FSHG2TldqCUZg5Rn1Am6LpN0YqFsfAr0%2FuIW6pSIRO7XzVpIvT3MjyPq%2Bx%2FRzDTmWGHK1kH0pJOlOTcbL%2FPpjmxFRAnvR69sdspez7%2FkgcMw%2Fyak0V055EARr%2B58x5aYbR5XJ2fNwZevAlqUs51G1jQpNEDQsogHzpMj0S%2FNjLseukz%2FS1E1Cz%2B2iTRbW7s0jBqXLumqj49ZnswFxuqtWKEe9vnA%2BjlsGO4tbsz9UogOEYs2VKCQ4NRrcJcjgY%2FHTtgupfGikHZrXm8NzGtu0vapDO8aGjR%2Bwm%2B10QcjvU8p4K%2B9Rjs29nn2BmODF%2FN4etV6%2Fk1onLi6I3En7mLEuO82jOSQROAzqs0nrQwt9emxwY6pgG0p%2BXL9HGinzyAhJLGMqK0J4C2RkBesDiTKKvFKewMtM%2BtsN7eNSKr7V8mUtg4eIx9CJpL5nPuvjB98jCW9Qyv8yivEZjygYIFVo%2BjZhS0x99QRjxH9OqDTnRkGj6n4dF52yGp%2Fv4FtAap6ifB7IpYzZQueLzXxMuYwSnySlyuwitrgrAYRQG2CmPhJcacmOJai%2FDhm391n2lGt6ef2RATH6wawvcH&X-Amz-Signature=dc6257ee688d144913b64d3bc7b7d1549122253effbee6fd6bebe110b54fe58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVDMXEY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFZ9Usts%2FXNclinH1wI1CtE2O9MSCNMd3C7t9GpbZ8fQAiAzIpZIWqhPShLQIWwU%2BTd2BI7IgdPbeBd7PKVz%2FUi%2BhCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW63VqVezvOaBn2owKtwDNyq6qVGiwcX78Nv9p3Jv%2BMUj5Fzdg2dSJRSDAE9aPBrLnZmErNgXKWl2bWNvAXwPG58JQmSUFPgavcmBSPrhv6b%2FtVAdGuaqkI7XpAcnLUdF%2ByAS5Xa4NgVVeAMS63c5m8kfyFxs1HrztaPCA0X%2F%2FL7OuefD7T7deSBdHr%2FF76PuZPLv%2BfiFY5ktX7w6MCAAgJwQI0uvQb7uAoMW58HrD2IrJCV38%2FR%2F3SjTyGTZp2olaM%2FTrCwICXUCUErOBT5UcurRymtaEM7eub93xfbG5%2FSHG2TldqCUZg5Rn1Am6LpN0YqFsfAr0%2FuIW6pSIRO7XzVpIvT3MjyPq%2Bx%2FRzDTmWGHK1kH0pJOlOTcbL%2FPpjmxFRAnvR69sdspez7%2FkgcMw%2Fyak0V055EARr%2B58x5aYbR5XJ2fNwZevAlqUs51G1jQpNEDQsogHzpMj0S%2FNjLseukz%2FS1E1Cz%2B2iTRbW7s0jBqXLumqj49ZnswFxuqtWKEe9vnA%2BjlsGO4tbsz9UogOEYs2VKCQ4NRrcJcjgY%2FHTtgupfGikHZrXm8NzGtu0vapDO8aGjR%2Bwm%2B10QcjvU8p4K%2B9Rjs29nn2BmODF%2FN4etV6%2Fk1onLi6I3En7mLEuO82jOSQROAzqs0nrQwt9emxwY6pgG0p%2BXL9HGinzyAhJLGMqK0J4C2RkBesDiTKKvFKewMtM%2BtsN7eNSKr7V8mUtg4eIx9CJpL5nPuvjB98jCW9Qyv8yivEZjygYIFVo%2BjZhS0x99QRjxH9OqDTnRkGj6n4dF52yGp%2Fv4FtAap6ifB7IpYzZQueLzXxMuYwSnySlyuwitrgrAYRQG2CmPhJcacmOJai%2FDhm391n2lGt6ef2RATH6wawvcH&X-Amz-Signature=62036eae9559b915b0aa8dd20a65b03936fa5318cc88dee6f005efcc51321297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
