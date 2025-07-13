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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC73HJLT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbFtuN%2BySRQYct6%2BMiQG1yad0z2Cq3qibsoWGvJcUGLQIhAIo6bURAndEG6YvtFawlLug4mysC3tiLfARw4eMcZtQHKv8DCBAQABoMNjM3NDIzMTgzODA1Igxi4dpUycz%2BzM9etVAq3AN0DQlhNYjVbr%2B%2BlOfJPuvmqie65Lg3sYywCZAIjsYvuv2S49Q%2F%2FA0KLaGPSTF4BPtMMbNs78AxQ2CzD9Pa6%2FoeK3gxVT5OSTfhw1e%2FacaJrQZROaXpqokHAVexm1l25DdnuKCaHDtOz5ZvbkaG7XsqslqPYV77a9IEbYiQmDpSNPeoUolIbQ2gcdd5ZixM78enigYTfa1CAPCEDL1BNFhjMjaNOrq9PVd8B0x9%2BfhamKkKYkbLZs8folxe8am1q73FlPJ1c6tWCH9orwcq%2FWkTuU3FKmvp9q82cPdX2X0icyu8iL14jlZqOjjinf8%2BP0hAxi2cqYmtSmBD3ES%2FaTWPUvSUpwH86H4ktXT9t3tDEq7RhREUVohsfXM83e7zt8z9%2BL0u6lxlBH8APZLtyx7wX4Zspo9vpA2XiG6qx2vt0q%2F1dnyhkvNemHzIK9IO9EhjZa8RavC%2B7IWW3bjLaWwcB%2BjjZMfx1iwM2u99lWAIkFYSgsg3KLSkGogeX0jUe1W8ovFcBP2eZc1KVoHV%2BPnlL2bqu7Cs%2FWhtyum6P7iJehNmUeu9iXA5YUP%2BF6QQGCvOe3OUTfUj%2BpcCaBo32jF1XrfZKFswNRA837qdZSMJ4LZFv3%2BtOXaLt4lIPDDjo83DBjqkAdysdpxYOBKJeLvHnAsDhU%2Ft25%2B4W6ty0hg%2FyqUGX4bsdSyso6wo%2FCVS7Muq5gsIRS5d6ZUvaC1WO8JaLVseBlPOF8CVcuuumSrzQsPuNQcHzDlZ6vnPVzXLBwUQBGyWmsT%2FrUBbFrW8%2Bqe7SdQUGkM6Qzw2WTchSeW8pRjnGc7kbqI1Kjb8sPalokaaBwX0k1d3K6MoPrYzRsVez5Ex6xNQn3Vz&X-Amz-Signature=cc4cfe54e31a9cc3cdf6d4c051c7166e3122608336bdba67f7287ad1ce167066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC73HJLT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbFtuN%2BySRQYct6%2BMiQG1yad0z2Cq3qibsoWGvJcUGLQIhAIo6bURAndEG6YvtFawlLug4mysC3tiLfARw4eMcZtQHKv8DCBAQABoMNjM3NDIzMTgzODA1Igxi4dpUycz%2BzM9etVAq3AN0DQlhNYjVbr%2B%2BlOfJPuvmqie65Lg3sYywCZAIjsYvuv2S49Q%2F%2FA0KLaGPSTF4BPtMMbNs78AxQ2CzD9Pa6%2FoeK3gxVT5OSTfhw1e%2FacaJrQZROaXpqokHAVexm1l25DdnuKCaHDtOz5ZvbkaG7XsqslqPYV77a9IEbYiQmDpSNPeoUolIbQ2gcdd5ZixM78enigYTfa1CAPCEDL1BNFhjMjaNOrq9PVd8B0x9%2BfhamKkKYkbLZs8folxe8am1q73FlPJ1c6tWCH9orwcq%2FWkTuU3FKmvp9q82cPdX2X0icyu8iL14jlZqOjjinf8%2BP0hAxi2cqYmtSmBD3ES%2FaTWPUvSUpwH86H4ktXT9t3tDEq7RhREUVohsfXM83e7zt8z9%2BL0u6lxlBH8APZLtyx7wX4Zspo9vpA2XiG6qx2vt0q%2F1dnyhkvNemHzIK9IO9EhjZa8RavC%2B7IWW3bjLaWwcB%2BjjZMfx1iwM2u99lWAIkFYSgsg3KLSkGogeX0jUe1W8ovFcBP2eZc1KVoHV%2BPnlL2bqu7Cs%2FWhtyum6P7iJehNmUeu9iXA5YUP%2BF6QQGCvOe3OUTfUj%2BpcCaBo32jF1XrfZKFswNRA837qdZSMJ4LZFv3%2BtOXaLt4lIPDDjo83DBjqkAdysdpxYOBKJeLvHnAsDhU%2Ft25%2B4W6ty0hg%2FyqUGX4bsdSyso6wo%2FCVS7Muq5gsIRS5d6ZUvaC1WO8JaLVseBlPOF8CVcuuumSrzQsPuNQcHzDlZ6vnPVzXLBwUQBGyWmsT%2FrUBbFrW8%2Bqe7SdQUGkM6Qzw2WTchSeW8pRjnGc7kbqI1Kjb8sPalokaaBwX0k1d3K6MoPrYzRsVez5Ex6xNQn3Vz&X-Amz-Signature=e69062e2f06608e17fddf839ede8d7ea66f3c10a81427eae3948f0ade35fc640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
