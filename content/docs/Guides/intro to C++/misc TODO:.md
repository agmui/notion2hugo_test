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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJY22LS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD0OCoJKBs1pFpFDtOywgg5SpuEfXdO9CxYI8ZTAGcTLwIgMkbo8B9qcl1pzsKeLicpKHqlfwaYFBHZHmArpyw2Bpsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEEJR81EjPEK%2FK1omyrcA5tDKsUtm%2BbrHOAsQ7YsURCq%2BJ215pV9HLfLy6R%2FOVz9SiRzIOLjMhGbJaJhcJei0IdN15u3gdzFRcXtmFGdjbYUUpcTx%2BXKt8kWsWMvD5w%2Fb4nMOVcgdyRMaEaXC%2Fi9mVQUCrVK1oZNT%2FbwWlC%2BikaQDhI%2Fw6Pkq6%2F7v2SBnkd4qaxMdW9SReYLwQM9Ciww%2BZOZxaBaFFggTLzWahX8sjLJ3e8Lmd%2FrwN9UEbWJ8VVBBsIvVx9oITQS4y%2BCkcDuaP0jhlJRgAZT9szPrEd7i%2ByY25KkQuR4VT8oVgcw12SCs7MGudS4n04hxfSwTvYYdSCb3qeRUxMIsDx7DW0%2FxUJKuK2ZvhAtTF3aCNYjVzFMWIqS7yfiASd5gB4nR1ZZpkehi6%2FsfyHq0TRsn86nQIKsEpkd6vIDMZZJfLWSyKz4wy8Aiw%2FGUOiSHkRky1mCBI30gTxeR5AfBCOoPrspCu52IGKpY7detVtDcxjG2r7LMjTp%2B4rI4tqJPXxzDTHA1kzCjNH8%2FcoEdu%2FaYAOc0JzdDyDolyvFy5FeOcXIZNKn7vkQSNCuZVrL1EsMTttZ%2F5rD4vK7sfB2KALDDq4ZhTMn9ty1NZsxMo7bR29IaQxMgyIyCvwojZHEWma5MIT4gMUGOqUBk5FCFlX7638zT27NNWejGZcNuylSnTH%2FoWe0JeKhati2mWLG0TCA%2F2lThBAXgqC9pkz41jTfuUR49mCK2INa%2BkuWuGJENC4Ul9he82DuYop%2Boe6%2FgyXMiI3uhuli4IF073w5cDyPaVMblWao%2F5lFzxwoQDksRPNbLHee%2FzqYEXQhTOiNwKuKzfE9hITwi6b6BG9P3Deo64qOGdqog8frn9qv3gvp&X-Amz-Signature=3952c3e1a9207db9fe018caee139077b3bbd056b381ec2f9d14338c7cc0640c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJY22LS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD0OCoJKBs1pFpFDtOywgg5SpuEfXdO9CxYI8ZTAGcTLwIgMkbo8B9qcl1pzsKeLicpKHqlfwaYFBHZHmArpyw2Bpsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEEJR81EjPEK%2FK1omyrcA5tDKsUtm%2BbrHOAsQ7YsURCq%2BJ215pV9HLfLy6R%2FOVz9SiRzIOLjMhGbJaJhcJei0IdN15u3gdzFRcXtmFGdjbYUUpcTx%2BXKt8kWsWMvD5w%2Fb4nMOVcgdyRMaEaXC%2Fi9mVQUCrVK1oZNT%2FbwWlC%2BikaQDhI%2Fw6Pkq6%2F7v2SBnkd4qaxMdW9SReYLwQM9Ciww%2BZOZxaBaFFggTLzWahX8sjLJ3e8Lmd%2FrwN9UEbWJ8VVBBsIvVx9oITQS4y%2BCkcDuaP0jhlJRgAZT9szPrEd7i%2ByY25KkQuR4VT8oVgcw12SCs7MGudS4n04hxfSwTvYYdSCb3qeRUxMIsDx7DW0%2FxUJKuK2ZvhAtTF3aCNYjVzFMWIqS7yfiASd5gB4nR1ZZpkehi6%2FsfyHq0TRsn86nQIKsEpkd6vIDMZZJfLWSyKz4wy8Aiw%2FGUOiSHkRky1mCBI30gTxeR5AfBCOoPrspCu52IGKpY7detVtDcxjG2r7LMjTp%2B4rI4tqJPXxzDTHA1kzCjNH8%2FcoEdu%2FaYAOc0JzdDyDolyvFy5FeOcXIZNKn7vkQSNCuZVrL1EsMTttZ%2F5rD4vK7sfB2KALDDq4ZhTMn9ty1NZsxMo7bR29IaQxMgyIyCvwojZHEWma5MIT4gMUGOqUBk5FCFlX7638zT27NNWejGZcNuylSnTH%2FoWe0JeKhati2mWLG0TCA%2F2lThBAXgqC9pkz41jTfuUR49mCK2INa%2BkuWuGJENC4Ul9he82DuYop%2Boe6%2FgyXMiI3uhuli4IF073w5cDyPaVMblWao%2F5lFzxwoQDksRPNbLHee%2FzqYEXQhTOiNwKuKzfE9hITwi6b6BG9P3Deo64qOGdqog8frn9qv3gvp&X-Amz-Signature=4be8f6bf9199e7f83dd9bd453e705ec8bd3dd49153c5fb3a50f8125b214f7b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
