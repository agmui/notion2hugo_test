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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627MH2R3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDxeI%2BoBKaYF5EAgA68YoClI0Y4rp2559px0iMo5fQX7QIhAK%2F6cyLBaV8n22JjFLRt9beYbqjQNnwTEbsCCw%2BwLXoPKv8DCCQQABoMNjM3NDIzMTgzODA1IgyZ%2BwHbp6lXG%2BTX03gq3AM3pSvOxpZiaB%2B%2FnVVgYZt6A%2B7oS7QVMop%2FAmxAuFIzzZ3f7lHcFKKMRUcbJdJFYJwDquu3CvdPPdwWVJHEyZXTwNmGdmNDb4Ux4m%2BtoBxGDVMR3nUTX4ExIOved7OSP68pVwPM7ZJduqZtkFF47M%2F4Keh4JeBXC%2BrH81P0uTekWMCz%2BE4hztFuAb4RuZH1AFMBMDQ27InCkQJLnBWIYkRg5OBMKcp4MeBUFDWUvCEPXt8MTDtA60F9GAp0iXBhftI1nVvU5U%2BN8EIH00fFPrtkdAUpRxpAzeIu0fgWSphM4ju2doGPCRknd9HTJyN48mYv0TcJDwjl2GJ5kgmmjZyUyriXYT8mzTw%2BX3nVcC4c%2FTNpslw8E2cko6e3blLYB6m6ME%2BQkDotBTGHVz3BHBH1%2FD2yiNeJf2j2fkYAPuWsAgfbqJRFIJj3cpS8pCSvkbzy1r700rmasrTvrUtSzYKKXWU2rHhTqfq3lDkHWMu1dsEza5mzVWziQtV6ooHXiZAajWMCdkOqhva27GloMAGYaQ7gfiM9pPIvy%2BrjyBhmqfoSU%2FU2LYG%2BrzYDsT8rDwwfBDDlrJ8vofRmnvjkO3pjzvSdUM6EOjKwLL9vJ%2BhpdC8F1uNLfyP4le53UDD%2Bhoa9BjqkAfhMr5ebEkuMMk5yoKXcMyafuehiUnZdQ75lUxRDrlhPVBCILySeTLv3sL4fFUJuw2%2B%2FjrsV8OJg%2FhsKEYE8IuBuxDUH7PQIzf%2FGP3h14Uj%2FUmxUspHXHkgZ5DYFhkWWVuQdmWUHIQtVZOTMZPdpTJ7nujV38N3wChHoZ7uBkbCS3NFOb5a0lRR8jwvd4JrRVXFp0aMqs%2BHze%2FAVqHzJt6J5N9G7&X-Amz-Signature=55cfc92ca82feb31fab84e9726a1ba023590cff3c13cb27d12a3a1f60e489850&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627MH2R3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDxeI%2BoBKaYF5EAgA68YoClI0Y4rp2559px0iMo5fQX7QIhAK%2F6cyLBaV8n22JjFLRt9beYbqjQNnwTEbsCCw%2BwLXoPKv8DCCQQABoMNjM3NDIzMTgzODA1IgyZ%2BwHbp6lXG%2BTX03gq3AM3pSvOxpZiaB%2B%2FnVVgYZt6A%2B7oS7QVMop%2FAmxAuFIzzZ3f7lHcFKKMRUcbJdJFYJwDquu3CvdPPdwWVJHEyZXTwNmGdmNDb4Ux4m%2BtoBxGDVMR3nUTX4ExIOved7OSP68pVwPM7ZJduqZtkFF47M%2F4Keh4JeBXC%2BrH81P0uTekWMCz%2BE4hztFuAb4RuZH1AFMBMDQ27InCkQJLnBWIYkRg5OBMKcp4MeBUFDWUvCEPXt8MTDtA60F9GAp0iXBhftI1nVvU5U%2BN8EIH00fFPrtkdAUpRxpAzeIu0fgWSphM4ju2doGPCRknd9HTJyN48mYv0TcJDwjl2GJ5kgmmjZyUyriXYT8mzTw%2BX3nVcC4c%2FTNpslw8E2cko6e3blLYB6m6ME%2BQkDotBTGHVz3BHBH1%2FD2yiNeJf2j2fkYAPuWsAgfbqJRFIJj3cpS8pCSvkbzy1r700rmasrTvrUtSzYKKXWU2rHhTqfq3lDkHWMu1dsEza5mzVWziQtV6ooHXiZAajWMCdkOqhva27GloMAGYaQ7gfiM9pPIvy%2BrjyBhmqfoSU%2FU2LYG%2BrzYDsT8rDwwfBDDlrJ8vofRmnvjkO3pjzvSdUM6EOjKwLL9vJ%2BhpdC8F1uNLfyP4le53UDD%2Bhoa9BjqkAfhMr5ebEkuMMk5yoKXcMyafuehiUnZdQ75lUxRDrlhPVBCILySeTLv3sL4fFUJuw2%2B%2FjrsV8OJg%2FhsKEYE8IuBuxDUH7PQIzf%2FGP3h14Uj%2FUmxUspHXHkgZ5DYFhkWWVuQdmWUHIQtVZOTMZPdpTJ7nujV38N3wChHoZ7uBkbCS3NFOb5a0lRR8jwvd4JrRVXFp0aMqs%2BHze%2FAVqHzJt6J5N9G7&X-Amz-Signature=b8e4c3f6ea76d5a6c679a6d9cc9c71dafc9560745855fe6a2a224934e1227c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
