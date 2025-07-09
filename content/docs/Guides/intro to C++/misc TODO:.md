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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUBPTBA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDgzARqA2sDb0m%2FwOm0ZCjkQOtPSz%2BBTZ7EGk00X6pXQIhAJ5MWfoeIg3e28EEmNKB8J2vRFn%2F2kJyeLJ4c3R2Imc4KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeErm%2BUKeoS2f2KSYq3APrDS75aZcfNch73ZRGMFt1i0ckxAiVsZ%2FPiDRy5l4eMwqhy48v64Q05OOz%2FZXUH6xTIqRFSvMumxyQi%2BIZqd3qGpqaxh3BUPiiQXKUNoE2zgqg0CedtU1WF6rROqLPg%2FvgMjgcOtZ314O%2ByVHYBy8cFIOuiGQhlMIryn7BLYHQ%2BzMlRs2nFhTtCFNscPSWGVlUaAMTU3WLa2aa8AdsTYPGGzhjHTVXpKh4XiQ%2F7i7DSIZ53Uk5D2LmuuWnO3iy5d1Mjr5W6J9C3DbdUsEUahs4WLAuFibcNLDGYiffGo4EKdB%2BTw%2FqbebKqfQctg%2BNLeQPKEPdL9KUtRspVZQ7fXiWtN%2BCFVfgczjGEXG1zfqUfDhU3LRfX7GSYaj9IACD%2FNoZmLEZWf3ggkukpyMi0XJmEzFe8pXPZu6KbbT01yd%2BfKLZG2VEaZ%2FosJPMCxKUTjq%2BSR2MQ%2FkQOTWBIK9aU1hbOUKKyIOOweR2w9SYgbgsVOL0bq%2BYxh4xso8BjB75hcI3hHQQkILQ7WH5%2BRZK3Q37pf%2BY8qyOVv8HRmhBf7PJpMZ6OXv2wZRhkUNprmOH7mhk717DJrOS1qjrwtvbRpofjQMDFrKE4FkdJCCE7Ez5RurROqeAwUPsyVauADCXmrvDBjqkAUvIBXk4sPXEm1Qx6%2Fct8YRxJ%2Fy0%2FJcn89Sw6u2UUPNVjzvoMcdc%2BMOUMDGhF6AxPf4Q7pDLyn2agWO%2FpSvZdLx9MvANcjTp4RDfguog0O%2Bmrw9xAw%2BbqCfrzErvGFAuxTDWJi1GiKGNZnPgiB%2BakgPk6q3WfoRc0oiPZNCLT33GM1zRSVF3MMMjESMzwSL%2BGSTuVuhjxq2bpjokYE66M3D%2F8XFe&X-Amz-Signature=37dd382188c6272ac40655469df02fecb2f6e25deabdc65c9a3a7270e3e1d4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUBPTBA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDgzARqA2sDb0m%2FwOm0ZCjkQOtPSz%2BBTZ7EGk00X6pXQIhAJ5MWfoeIg3e28EEmNKB8J2vRFn%2F2kJyeLJ4c3R2Imc4KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeErm%2BUKeoS2f2KSYq3APrDS75aZcfNch73ZRGMFt1i0ckxAiVsZ%2FPiDRy5l4eMwqhy48v64Q05OOz%2FZXUH6xTIqRFSvMumxyQi%2BIZqd3qGpqaxh3BUPiiQXKUNoE2zgqg0CedtU1WF6rROqLPg%2FvgMjgcOtZ314O%2ByVHYBy8cFIOuiGQhlMIryn7BLYHQ%2BzMlRs2nFhTtCFNscPSWGVlUaAMTU3WLa2aa8AdsTYPGGzhjHTVXpKh4XiQ%2F7i7DSIZ53Uk5D2LmuuWnO3iy5d1Mjr5W6J9C3DbdUsEUahs4WLAuFibcNLDGYiffGo4EKdB%2BTw%2FqbebKqfQctg%2BNLeQPKEPdL9KUtRspVZQ7fXiWtN%2BCFVfgczjGEXG1zfqUfDhU3LRfX7GSYaj9IACD%2FNoZmLEZWf3ggkukpyMi0XJmEzFe8pXPZu6KbbT01yd%2BfKLZG2VEaZ%2FosJPMCxKUTjq%2BSR2MQ%2FkQOTWBIK9aU1hbOUKKyIOOweR2w9SYgbgsVOL0bq%2BYxh4xso8BjB75hcI3hHQQkILQ7WH5%2BRZK3Q37pf%2BY8qyOVv8HRmhBf7PJpMZ6OXv2wZRhkUNprmOH7mhk717DJrOS1qjrwtvbRpofjQMDFrKE4FkdJCCE7Ez5RurROqeAwUPsyVauADCXmrvDBjqkAUvIBXk4sPXEm1Qx6%2Fct8YRxJ%2Fy0%2FJcn89Sw6u2UUPNVjzvoMcdc%2BMOUMDGhF6AxPf4Q7pDLyn2agWO%2FpSvZdLx9MvANcjTp4RDfguog0O%2Bmrw9xAw%2BbqCfrzErvGFAuxTDWJi1GiKGNZnPgiB%2BakgPk6q3WfoRc0oiPZNCLT33GM1zRSVF3MMMjESMzwSL%2BGSTuVuhjxq2bpjokYE66M3D%2F8XFe&X-Amz-Signature=43c349175a23a4d14851d38489698fe05b5df671584b58c0d500d65e7e032593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
