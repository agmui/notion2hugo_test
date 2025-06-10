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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXNDFM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiB3%2BbaudngJ23MX1pYXZMGgCrIIhG%2B%2BPx9tMNKuWP8QIgR8AvuB0EQjLNj%2F43zdzkbLF3pdgtltSeDx%2BB2DAZOmMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVgLQPES8XGPuee3SrcA5Y4%2Fzcb8myxauTWVmndfLoKJlWlNK5n9oAEucoSfHVfUrcVzxVSGBEuojl7ma572lWMXmgqF%2FrVdTP9ux4G0I3c5U366KqrTu%2F9jxme0XPr89%2B4ZXRw0tDO1KFHjig7%2FbFquV7r2Zh7jkrHn84mIYTueBKv6a%2B9f9LrUSkERTcZz0P9OcH2Lvhlmy%2Bb5YbeD%2Fys0XXr6lDC3aL7bYjfe0lmJcsikyXhq6thQbz9QwOqHaK53E1MejgpUNjtoRkU3fHQlp%2FnMcAjMccLkO%2B7WIy9icCEUhLcHC5X2bgWY1duIJtj5gHwd4CrlIyV9wFvwRbNKXTQIs7Vk%2FkoZx5lAsO7DVAyDJV3UanGPumtgN27k%2FySc2WjiItEJ0VUXk3ZWEoBmOkN6qlwjVLBI5s3P1P2GafCDmCVJecEzKU%2B4ybTLdTGLGle4VfpjXqdHaLwcf5cT3HEjldp9WCVhXodySVZewzhcg%2F5N%2BQ0MLqzR6j6woTkFgNkvCNhVW%2FmFWQogWOAZdl98jmm0okxQCxLiUpzCG3kptYA0iS73zO44O3oaUVvrHHqu0MXhm3jOwFiDsdMdLvqEBaqK%2FUV%2FJO3QuSbObKbo4tlb0Jq526h8YSUBJxLdi3Kzt0X1E4lMMW%2BoMIGOqUBpneHfN9X6lU8WY%2BPyGgBoC0dOX2AuMAlaJ753tbO%2F2iAKZ7DkSsa07Akoj3kThPzzQUjOb9JHCdRq8BU12cscJn6OPt1aJ%2Filz2KB4FuB0EBr7YIKwGgMthuinaEr25MxKzPIUJxbOakLSqMQIWjHT%2Fc2PUXTA1BTSnLZGWJRVHUpLExC8LlqqUjzFlcFPoH%2Fvnv4njpT5%2BCxechjy%2BwZpxX0w3c&X-Amz-Signature=3c7fb0446406cb08e56c57743102a9faf3cd0c43130398342bed122fb28419cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXNDFM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiB3%2BbaudngJ23MX1pYXZMGgCrIIhG%2B%2BPx9tMNKuWP8QIgR8AvuB0EQjLNj%2F43zdzkbLF3pdgtltSeDx%2BB2DAZOmMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVgLQPES8XGPuee3SrcA5Y4%2Fzcb8myxauTWVmndfLoKJlWlNK5n9oAEucoSfHVfUrcVzxVSGBEuojl7ma572lWMXmgqF%2FrVdTP9ux4G0I3c5U366KqrTu%2F9jxme0XPr89%2B4ZXRw0tDO1KFHjig7%2FbFquV7r2Zh7jkrHn84mIYTueBKv6a%2B9f9LrUSkERTcZz0P9OcH2Lvhlmy%2Bb5YbeD%2Fys0XXr6lDC3aL7bYjfe0lmJcsikyXhq6thQbz9QwOqHaK53E1MejgpUNjtoRkU3fHQlp%2FnMcAjMccLkO%2B7WIy9icCEUhLcHC5X2bgWY1duIJtj5gHwd4CrlIyV9wFvwRbNKXTQIs7Vk%2FkoZx5lAsO7DVAyDJV3UanGPumtgN27k%2FySc2WjiItEJ0VUXk3ZWEoBmOkN6qlwjVLBI5s3P1P2GafCDmCVJecEzKU%2B4ybTLdTGLGle4VfpjXqdHaLwcf5cT3HEjldp9WCVhXodySVZewzhcg%2F5N%2BQ0MLqzR6j6woTkFgNkvCNhVW%2FmFWQogWOAZdl98jmm0okxQCxLiUpzCG3kptYA0iS73zO44O3oaUVvrHHqu0MXhm3jOwFiDsdMdLvqEBaqK%2FUV%2FJO3QuSbObKbo4tlb0Jq526h8YSUBJxLdi3Kzt0X1E4lMMW%2BoMIGOqUBpneHfN9X6lU8WY%2BPyGgBoC0dOX2AuMAlaJ753tbO%2F2iAKZ7DkSsa07Akoj3kThPzzQUjOb9JHCdRq8BU12cscJn6OPt1aJ%2Filz2KB4FuB0EBr7YIKwGgMthuinaEr25MxKzPIUJxbOakLSqMQIWjHT%2Fc2PUXTA1BTSnLZGWJRVHUpLExC8LlqqUjzFlcFPoH%2Fvnv4njpT5%2BCxechjy%2BwZpxX0w3c&X-Amz-Signature=2a337fdadabd9dd804ec6830205f324a6793f740707395c3f7fa7272a274d7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
