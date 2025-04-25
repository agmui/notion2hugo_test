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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHCYVK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOjRRtvTD%2FT76t1ZglQ3QyhuzC2ENwKDArzceIpaUtgQIgI47AgO4AjlDo5yJp9dkQoi2gO9KJRWMS4%2BWeWZiIY8kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGK21JWTTDb8KcqjLircA3xu%2BPN%2FPv1ZHTnDQOQeL%2BjoB7NB2F3KRYnV5wdayTW9M935ZFHEeFIxyBEis6X0dgTIyeNNB7aVE1qtZP86c4%2FoVlUaYFW6deqYXJdue9stQG6rMhxovVGhaMn0s3M7rqhFY98JyKO%2FJCjMJTh1WqesN5NK07%2Bloiu50u%2FYhj7Z5423URkyDouOR2cIqROeRKBo%2BUDMKfyDC2w1MFUHR0CTYTFrHxBn5NA6EpOM%2BQhTkJBjaY2g6HtEVUCKKluKABF5sVf2EqHTyYgv41%2B6ZRvU7yPeUyXFvaXhsU9weZQ3tm%2F4Gs5ATYCYiVXPuc4Fi%2FzZXCfr7xeCqsLyer%2B%2Bi7VHBWtG5XBscrpp5YDOKBh8VWC%2F2TSgDdaQHwaotAkYipfnVhqmxbMPd%2BeCxlN6UAwfIXrzNLdOsJW0Tx0KnFp7xLoYqaGfr1BRa%2FArMRb3%2FMUeW0pdKM8eIIFhEiVMjS4ZmlVuU8Semw7Jg22PAVcPAJOzPbcS2xrZ0dueOKWVFVm%2B4tO3mq05Hp6Wf9RFjT%2BOgMpSXuwo7nZ7Rqsm11ZiPMRns9%2BEENqu1LkpADweOd8RG63mR276SVc7aTsNm6TG66zX9Jaqya1WLQqgrmIVnoFOBz21Cw5lJhprMNWbrcAGOqUBwoNhaIRTUO%2B7o3SzUCAQFYTj7RuC5SkeKTnIbgZ83%2BZTFHIQALBPVLOytrvMFhrAxUMQSZyvTnxpKUYBN8sjaxB6KaR53WRd0anghg7GcwJ6XfpSRKrafc%2F%2BUA%2BME4XtCa9G0ZMVXz683%2FpzRjv3FEng1ZfarCfWQZe%2FHl75kEmdjDLuvApNLd5VDBbWJ%2FpaC3msTF9C4B%2BxAVk%2Bz%2FG9BpMAN8En&X-Amz-Signature=8f64a69c487adb7004ed533f5e7f8ad5654bf419ea4a34ff1cf4d20536510061&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHCYVK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOjRRtvTD%2FT76t1ZglQ3QyhuzC2ENwKDArzceIpaUtgQIgI47AgO4AjlDo5yJp9dkQoi2gO9KJRWMS4%2BWeWZiIY8kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGK21JWTTDb8KcqjLircA3xu%2BPN%2FPv1ZHTnDQOQeL%2BjoB7NB2F3KRYnV5wdayTW9M935ZFHEeFIxyBEis6X0dgTIyeNNB7aVE1qtZP86c4%2FoVlUaYFW6deqYXJdue9stQG6rMhxovVGhaMn0s3M7rqhFY98JyKO%2FJCjMJTh1WqesN5NK07%2Bloiu50u%2FYhj7Z5423URkyDouOR2cIqROeRKBo%2BUDMKfyDC2w1MFUHR0CTYTFrHxBn5NA6EpOM%2BQhTkJBjaY2g6HtEVUCKKluKABF5sVf2EqHTyYgv41%2B6ZRvU7yPeUyXFvaXhsU9weZQ3tm%2F4Gs5ATYCYiVXPuc4Fi%2FzZXCfr7xeCqsLyer%2B%2Bi7VHBWtG5XBscrpp5YDOKBh8VWC%2F2TSgDdaQHwaotAkYipfnVhqmxbMPd%2BeCxlN6UAwfIXrzNLdOsJW0Tx0KnFp7xLoYqaGfr1BRa%2FArMRb3%2FMUeW0pdKM8eIIFhEiVMjS4ZmlVuU8Semw7Jg22PAVcPAJOzPbcS2xrZ0dueOKWVFVm%2B4tO3mq05Hp6Wf9RFjT%2BOgMpSXuwo7nZ7Rqsm11ZiPMRns9%2BEENqu1LkpADweOd8RG63mR276SVc7aTsNm6TG66zX9Jaqya1WLQqgrmIVnoFOBz21Cw5lJhprMNWbrcAGOqUBwoNhaIRTUO%2B7o3SzUCAQFYTj7RuC5SkeKTnIbgZ83%2BZTFHIQALBPVLOytrvMFhrAxUMQSZyvTnxpKUYBN8sjaxB6KaR53WRd0anghg7GcwJ6XfpSRKrafc%2F%2BUA%2BME4XtCa9G0ZMVXz683%2FpzRjv3FEng1ZfarCfWQZe%2FHl75kEmdjDLuvApNLd5VDBbWJ%2FpaC3msTF9C4B%2BxAVk%2Bz%2FG9BpMAN8En&X-Amz-Signature=da3a377a30e64c50a88d12626969b9d662962ebe8a384ad0140305c9002e463e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
