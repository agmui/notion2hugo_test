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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAY2M2Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhr%2Bc%2Bx5KIsAuMfkaItV%2FIgJnck0PDGON1fYGuUpI%2B3AiEA5edSaSr7gYU7WMkv6s18WjMH%2B%2F%2Fg0%2FUFJZEVOfP7kFUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf2ZulqQQOXlsw8ZSrcAzKu0eieCiYx1WtjLuc0acu%2Bjn3mHghIyjqstQlFu3ydgAhM67xxMeGIJASHDOpNl0XhCwYAwU%2Bx04%2B3%2BSXO7UDGwciopLZxmlOGqstnb9u7LvxxShLesyxtRhWs9nVLzGJFyMnhpcrb7O7wsRiRP621jzayrumH276GR%2B8rIsd%2B97a0yu2jNKGKG3n6y%2Bt9P0Q7W7U1gIr8YtUelljHzXKyoGyJiZ1kod40rMaZAwYUnq%2FQIFXn1CXOat9uVvM%2BjC7l2PMIgCxFGy2YNs7Dr4S7%2FI1Bpokx01yMIspnfF33CVlgjHvqTqCq3H1xbaGpvPk%2FaeI5OsDW2DYOyMYecB%2B3mcucBrXxQiItFAZDcU8F1JTvfwH9WLLyizg3WozJuPTiz7PQD%2BoBZva%2FoPtV3LCdFk2%2BkP4SoVBTOIVTpp5wAHjX3eoEl5MXoC6VNfgFAf%2FqL19NiGd%2FsJJTTU4HVcXwkIi%2BoxSM5QDBPo9WDWzfPlO3sRIEkaXepaicNIfvL6IB4YNjuCElVLyXqjd0lJBltG5XC8o4A%2B%2BfkPse6hcIbX%2BzymQjlMSjopFWx9Uj444%2FzOAaPtMjhGhqqX1D%2BaSDBOv%2FunwoMtj9pmmvS%2Fx5yPTLXMFimIU279kzMNTqlcMGOqUBc4e%2B7oxkri5lnfNhgySGk6qrcdM95plYqjl1vwK6ks0oDfO1%2Bwx3NsBNdZWCsBCcD8NU3pz92PlW7MHT56pP2aLlvBoZ%2FpcPWPoOZK6O4vuXEdChORnalLyrFYSPZJAqi1SwA8fjC3%2FVqcxu2KTIz8Gug1QHXq42XUK89tDK4RRZY7kQuydRBSvwi1mo7nRriCFbygGA7kqMigp49QCeeL2Ktc7T&X-Amz-Signature=4c276e114c6311115a98a929fb4cfb8c011000a4f09e77c6ce76e3e0a8bc19e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAY2M2Y%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhr%2Bc%2Bx5KIsAuMfkaItV%2FIgJnck0PDGON1fYGuUpI%2B3AiEA5edSaSr7gYU7WMkv6s18WjMH%2B%2F%2Fg0%2FUFJZEVOfP7kFUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf2ZulqQQOXlsw8ZSrcAzKu0eieCiYx1WtjLuc0acu%2Bjn3mHghIyjqstQlFu3ydgAhM67xxMeGIJASHDOpNl0XhCwYAwU%2Bx04%2B3%2BSXO7UDGwciopLZxmlOGqstnb9u7LvxxShLesyxtRhWs9nVLzGJFyMnhpcrb7O7wsRiRP621jzayrumH276GR%2B8rIsd%2B97a0yu2jNKGKG3n6y%2Bt9P0Q7W7U1gIr8YtUelljHzXKyoGyJiZ1kod40rMaZAwYUnq%2FQIFXn1CXOat9uVvM%2BjC7l2PMIgCxFGy2YNs7Dr4S7%2FI1Bpokx01yMIspnfF33CVlgjHvqTqCq3H1xbaGpvPk%2FaeI5OsDW2DYOyMYecB%2B3mcucBrXxQiItFAZDcU8F1JTvfwH9WLLyizg3WozJuPTiz7PQD%2BoBZva%2FoPtV3LCdFk2%2BkP4SoVBTOIVTpp5wAHjX3eoEl5MXoC6VNfgFAf%2FqL19NiGd%2FsJJTTU4HVcXwkIi%2BoxSM5QDBPo9WDWzfPlO3sRIEkaXepaicNIfvL6IB4YNjuCElVLyXqjd0lJBltG5XC8o4A%2B%2BfkPse6hcIbX%2BzymQjlMSjopFWx9Uj444%2FzOAaPtMjhGhqqX1D%2BaSDBOv%2FunwoMtj9pmmvS%2Fx5yPTLXMFimIU279kzMNTqlcMGOqUBc4e%2B7oxkri5lnfNhgySGk6qrcdM95plYqjl1vwK6ks0oDfO1%2Bwx3NsBNdZWCsBCcD8NU3pz92PlW7MHT56pP2aLlvBoZ%2FpcPWPoOZK6O4vuXEdChORnalLyrFYSPZJAqi1SwA8fjC3%2FVqcxu2KTIz8Gug1QHXq42XUK89tDK4RRZY7kQuydRBSvwi1mo7nRriCFbygGA7kqMigp49QCeeL2Ktc7T&X-Amz-Signature=63f4ca5d609c3f2258dae00f3cb2738ec11fe1dfe329a664ab34d8d40d8e3b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
