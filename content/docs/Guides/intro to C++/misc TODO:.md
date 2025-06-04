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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672G2OQ3T%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCiWEMBgPBOBPrqaPUehwYtkuBZKC89SMCrihTDkzbcjgIhAPVE7fBTeL5Ud%2FWAonn3SGMbCt0WE5X60byYr2q1bRD3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgyFFAV215%2F3mCLiXPkq3APfOWmLwfgiJMhYKQPUimReWME7YoVgy8s7IFVuuyvjIArn%2FUq2GDTZaZf3scfZcAa2WNv2YZV0VrEiNPBd9E758l1AXNPwWgx6dIe8%2FJTrbNv5AkobC6fTCxSWgaPDBaWgWedJxiYrEPMCFt7p%2FhnVFr32SKdp%2BeJ1Nrx9YbTL8glmUfrShq46Fi6j5RWEzVwZKwZ%2F%2BR6rwzcqiMiay7Yhge%2Bprl8hvx6TcZZqmBGsAB23B2V9RdY6cpXsKtp07LOf3M1wI6%2FeM90LUsPB8F7yGTI0KwFp2xua9b6Jl%2FGyqar8reczIFQ767JAaEl5%2Bnhh%2FatJZnecRkMb9rSG6qLUPB2vmnTBbS1vsWHfqQzjVrxJSqcF7toxgvWp7JyLY83lMKy9WrtZE3kmtbm%2BdvfCN4X%2FsnDjp4GtAOZPIeJBlfFSTSviIZbSLpsMfNoFRAc4FNm7Ukmt6Sgt%2BylS%2BJP9yPCbzstmHFPO0jUl9DilOTfHdDvPaWJZ6p0jKw4UezbTHd0PzlQqANZ9zWc6ASRNfKGAonj3zafKG23sjazSiUUhciesgx%2F7KEnUfWz581uAN8OBKkbvqvdu8J3AWEUpDh0NA1C6hhSUB%2F4nuiSqdapSODEK8jNq0pRRxDC%2BqYHCBjqkAbrYNBW9zbZmgEOGEmgK7Lw5L2YdmJbmB%2BNm9SEJahbZiEDDqR2skYU89Hk8D0Bymua7QVy9mlj1pLLNDZoBnrY7C6yaHIYtnBJbizogtTiab67eLQi73JqWYt7UfS6vt421HrwCzr2ZrnrJhJHGLhe3jk%2Fdncv1Cn3YW0CbqKSebXtATVIdqeUULbnC0BZ7rPMlZiB6gZXDiqwWOQDyzdiYFc67&X-Amz-Signature=1ec0c803d91d2cca8ec735ade6ce452254b2e95af9fd918573765ee7c05849a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672G2OQ3T%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCiWEMBgPBOBPrqaPUehwYtkuBZKC89SMCrihTDkzbcjgIhAPVE7fBTeL5Ud%2FWAonn3SGMbCt0WE5X60byYr2q1bRD3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgyFFAV215%2F3mCLiXPkq3APfOWmLwfgiJMhYKQPUimReWME7YoVgy8s7IFVuuyvjIArn%2FUq2GDTZaZf3scfZcAa2WNv2YZV0VrEiNPBd9E758l1AXNPwWgx6dIe8%2FJTrbNv5AkobC6fTCxSWgaPDBaWgWedJxiYrEPMCFt7p%2FhnVFr32SKdp%2BeJ1Nrx9YbTL8glmUfrShq46Fi6j5RWEzVwZKwZ%2F%2BR6rwzcqiMiay7Yhge%2Bprl8hvx6TcZZqmBGsAB23B2V9RdY6cpXsKtp07LOf3M1wI6%2FeM90LUsPB8F7yGTI0KwFp2xua9b6Jl%2FGyqar8reczIFQ767JAaEl5%2Bnhh%2FatJZnecRkMb9rSG6qLUPB2vmnTBbS1vsWHfqQzjVrxJSqcF7toxgvWp7JyLY83lMKy9WrtZE3kmtbm%2BdvfCN4X%2FsnDjp4GtAOZPIeJBlfFSTSviIZbSLpsMfNoFRAc4FNm7Ukmt6Sgt%2BylS%2BJP9yPCbzstmHFPO0jUl9DilOTfHdDvPaWJZ6p0jKw4UezbTHd0PzlQqANZ9zWc6ASRNfKGAonj3zafKG23sjazSiUUhciesgx%2F7KEnUfWz581uAN8OBKkbvqvdu8J3AWEUpDh0NA1C6hhSUB%2F4nuiSqdapSODEK8jNq0pRRxDC%2BqYHCBjqkAbrYNBW9zbZmgEOGEmgK7Lw5L2YdmJbmB%2BNm9SEJahbZiEDDqR2skYU89Hk8D0Bymua7QVy9mlj1pLLNDZoBnrY7C6yaHIYtnBJbizogtTiab67eLQi73JqWYt7UfS6vt421HrwCzr2ZrnrJhJHGLhe3jk%2Fdncv1Cn3YW0CbqKSebXtATVIdqeUULbnC0BZ7rPMlZiB6gZXDiqwWOQDyzdiYFc67&X-Amz-Signature=a698eaf4126b94cb682132848c5c331903702c8f1543cb9762a9ad80bfdbb960&X-Amz-SignedHeaders=host&x-id=GetObject)

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
