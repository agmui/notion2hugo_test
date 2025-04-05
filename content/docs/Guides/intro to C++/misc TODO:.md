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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRO5TAO6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZe6TKGnRZEu2GmLx2%2BSO50T2Md37mD85SCHMyU2JRgIgfDXXrLdQbBRaMZrMB0wqZ2jM5VC3%2Bxv%2BjB1GHaO0GVgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKzIecs5kfNRFwLTYyrcA9%2Fe7iE8zpdmLMRxQzrwANw8sQj36Ntm0CoW4XaYYTMsrZJLaUMWIigSg3%2FhqIoQ8f2cwyzhtEvW363SFXfARcG%2BHbRqP0oFNiWY0jWmKdTGmTGQiYUfm2P8dWDv6zN3QgUPlOp%2Ba2LBzTF6840XtTuW8PhYLVerNbP2G%2BW2w0QlUWtmKFi3kMonq8EmYF%2BNRR4x%2BOk33MvEAZV%2BT3G%2BEh4gbLA5O7oIwM7hVXKfVrm9CzA1oXrh1JB2nJSk0tBN73DRC53F23bG5whSA46wkP0OvOdOHJ%2Fy3V0lwk7oVESbTLTqfbd7skkduTHolSIGeV0Y6huJqvtH3Q95pyKDImWVx9MdkRKNWFBLiTG5lFbTwq%2BFRQlp2U5EfWSJOGv%2FHL9FzZOHmF7oH%2BQRcc9ljwcpDoTlCVMisbQF8Z8BVPjnqhSIeDxLPxnjZTyhiqeAeLdgIT20wgUCOLQuaU1De2g8oRaY9x4QK7VfsDnB9IGM5J4uF01N%2BR7vsakzRTnYI%2FXK14MpqgKNX7Ffij5j8zcUGVQdfia6aul%2BYct0NctzkMJgD2s62V2HBlzNWTWH79a2X%2F9xMt%2FJ676OGxy%2BvzXlHx9uKqFmoIbxK0GkJCgEAfJHsQU422%2Bbrl%2FGMP%2BSxr8GOqUBgTSCQsawQrHP2Pr%2FTh6z80GIDCgb0pjyP%2FMRRuJBV1arqEigiFgk2wJ20PfpwdZsJSW5dmglNWx2k6z9KsokIykn%2Ba0umwUmpDO5i78PRIukoqLqjON9IuK%2BMuiVi44uw6kVdXlTBsuq0oAA1KznlQa3OVoaOEia6Yce6ydBV934207cDqI8O5EVv9XijxX%2F4BoW2WFkxDqmRQF4NF2oXeKW9J0I&X-Amz-Signature=45631fc1ad8e059673fa07b6aa524b7f1cf79aac7ff9da6873d5f3de5e9b25b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRO5TAO6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZe6TKGnRZEu2GmLx2%2BSO50T2Md37mD85SCHMyU2JRgIgfDXXrLdQbBRaMZrMB0wqZ2jM5VC3%2Bxv%2BjB1GHaO0GVgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKzIecs5kfNRFwLTYyrcA9%2Fe7iE8zpdmLMRxQzrwANw8sQj36Ntm0CoW4XaYYTMsrZJLaUMWIigSg3%2FhqIoQ8f2cwyzhtEvW363SFXfARcG%2BHbRqP0oFNiWY0jWmKdTGmTGQiYUfm2P8dWDv6zN3QgUPlOp%2Ba2LBzTF6840XtTuW8PhYLVerNbP2G%2BW2w0QlUWtmKFi3kMonq8EmYF%2BNRR4x%2BOk33MvEAZV%2BT3G%2BEh4gbLA5O7oIwM7hVXKfVrm9CzA1oXrh1JB2nJSk0tBN73DRC53F23bG5whSA46wkP0OvOdOHJ%2Fy3V0lwk7oVESbTLTqfbd7skkduTHolSIGeV0Y6huJqvtH3Q95pyKDImWVx9MdkRKNWFBLiTG5lFbTwq%2BFRQlp2U5EfWSJOGv%2FHL9FzZOHmF7oH%2BQRcc9ljwcpDoTlCVMisbQF8Z8BVPjnqhSIeDxLPxnjZTyhiqeAeLdgIT20wgUCOLQuaU1De2g8oRaY9x4QK7VfsDnB9IGM5J4uF01N%2BR7vsakzRTnYI%2FXK14MpqgKNX7Ffij5j8zcUGVQdfia6aul%2BYct0NctzkMJgD2s62V2HBlzNWTWH79a2X%2F9xMt%2FJ676OGxy%2BvzXlHx9uKqFmoIbxK0GkJCgEAfJHsQU422%2Bbrl%2FGMP%2BSxr8GOqUBgTSCQsawQrHP2Pr%2FTh6z80GIDCgb0pjyP%2FMRRuJBV1arqEigiFgk2wJ20PfpwdZsJSW5dmglNWx2k6z9KsokIykn%2Ba0umwUmpDO5i78PRIukoqLqjON9IuK%2BMuiVi44uw6kVdXlTBsuq0oAA1KznlQa3OVoaOEia6Yce6ydBV934207cDqI8O5EVv9XijxX%2F4BoW2WFkxDqmRQF4NF2oXeKW9J0I&X-Amz-Signature=376ea39680ce8ad8e7b26bdc3f4636ff6db6cbe3057bac025c4f754cfae01316&X-Amz-SignedHeaders=host&x-id=GetObject)

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
