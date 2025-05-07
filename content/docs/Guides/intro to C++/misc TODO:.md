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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXVERPO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWPITfL8uKBSUMdQeaqieuNLeirCrSF%2FnrbWxUOIie1AiEA3kZx45cILiCz7yl%2FTmpKnB9CFOQKis2mWcnlXzCZDsEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHS09%2BTa2lcWhnpl%2ByrcAyVsutZoIcAtkiKz5dFKddf3B6HKIweZYOPdDCnkDiiAdC23KRHCDFyrtRg0XFgqsIltzQKoo2%2Fr0a8WgnHZhgBGCDw%2FxjL3UGakpUoD76UK025m2bmVRDJkAW3rh7u9yqMHcBTfyvdAmi4QQSLqroUYMvUtXv5TF4kih9x67qybRecwrzH8qS5FtTFqbz9ztxoYE3qW8rnQjxwBCcGh%2FoC1DBR6huhYrGj6FvGh%2BAQM9NTuIwioQPl6o0hhJnRRNrTHHtufAnByYgig%2B26Xkp5YFAQvy7It8LMyBlL93BBwG2CFCXGe3a8PTQS3ntHkzrk%2Br7W2PXa1Rf%2BAfYegCPzac8vkv3qR0TJUqaW5dFjaoyoCvrh%2BtU0BGHnsIS94dHP5nIldtCkG72aNQ%2BeUoq1CTx0k0mYMxtAFa9lF0ckqOBNdPWn9E6YdSqRR9M7P0zi5WNLeaYbIzQjbHM%2FZPfJ6QAemWq%2BpW2SNie67tP8S7l2HoRW%2Bpau%2FhrWSBgam6Mog2geSma5nW1mfnomRAA1EyaR6qzqJDfR%2BFiTBoCtUoVVXQZrzpfCGNO0h8t07KRyw0d4TLkjrAJXehrBZsNRI4OriqrVilhXelXu3EDO7DQl4O4kzFtXCSgaJMMqb7sAGOqUBtJJo%2BgeKTr1o6iUNOJ6AGOKRnU2u%2FoUcukw73qIzoMOH%2B9UgGJ%2BsXFTXcfOIavvZ%2FMgXJdC4mNsKlPuVWivYyz1mTrXilRZEk3SHZhM29ZdzZscRSDdOMdheBEgLeytDtVYLX8MS%2FZjjmg8zPhjU7474LhoZ3dYO%2FTyJm3s8S9XYnYlYrxwEhWEao8iMs5VyYZ6e%2F0BgKPnfBhjCr8dOirKnkNUZ&X-Amz-Signature=a92d8952ddef2aa2bdeda6efe018dba0e6b3a4d920a7e80021c5148781c24912&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXVERPO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWPITfL8uKBSUMdQeaqieuNLeirCrSF%2FnrbWxUOIie1AiEA3kZx45cILiCz7yl%2FTmpKnB9CFOQKis2mWcnlXzCZDsEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHS09%2BTa2lcWhnpl%2ByrcAyVsutZoIcAtkiKz5dFKddf3B6HKIweZYOPdDCnkDiiAdC23KRHCDFyrtRg0XFgqsIltzQKoo2%2Fr0a8WgnHZhgBGCDw%2FxjL3UGakpUoD76UK025m2bmVRDJkAW3rh7u9yqMHcBTfyvdAmi4QQSLqroUYMvUtXv5TF4kih9x67qybRecwrzH8qS5FtTFqbz9ztxoYE3qW8rnQjxwBCcGh%2FoC1DBR6huhYrGj6FvGh%2BAQM9NTuIwioQPl6o0hhJnRRNrTHHtufAnByYgig%2B26Xkp5YFAQvy7It8LMyBlL93BBwG2CFCXGe3a8PTQS3ntHkzrk%2Br7W2PXa1Rf%2BAfYegCPzac8vkv3qR0TJUqaW5dFjaoyoCvrh%2BtU0BGHnsIS94dHP5nIldtCkG72aNQ%2BeUoq1CTx0k0mYMxtAFa9lF0ckqOBNdPWn9E6YdSqRR9M7P0zi5WNLeaYbIzQjbHM%2FZPfJ6QAemWq%2BpW2SNie67tP8S7l2HoRW%2Bpau%2FhrWSBgam6Mog2geSma5nW1mfnomRAA1EyaR6qzqJDfR%2BFiTBoCtUoVVXQZrzpfCGNO0h8t07KRyw0d4TLkjrAJXehrBZsNRI4OriqrVilhXelXu3EDO7DQl4O4kzFtXCSgaJMMqb7sAGOqUBtJJo%2BgeKTr1o6iUNOJ6AGOKRnU2u%2FoUcukw73qIzoMOH%2B9UgGJ%2BsXFTXcfOIavvZ%2FMgXJdC4mNsKlPuVWivYyz1mTrXilRZEk3SHZhM29ZdzZscRSDdOMdheBEgLeytDtVYLX8MS%2FZjjmg8zPhjU7474LhoZ3dYO%2FTyJm3s8S9XYnYlYrxwEhWEao8iMs5VyYZ6e%2F0BgKPnfBhjCr8dOirKnkNUZ&X-Amz-Signature=787918ef4abd31d9ebea8174f472d8ed9623041537e849c237353f7eff22a7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
