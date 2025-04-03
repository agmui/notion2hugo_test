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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLSMY3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDbQTLMij%2BMYKiDoV7OEmu7tQHYbPfVMaW9jv2389ysXAIhAMQIzlBbYUGsR1QAgCVrx26NktHZQ20QxdQacyure%2FWuKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jMFJfUOD6nVjpD4q3APOw0elMIFrpMyB7oYaxMxWlpFc6WNR8misqTTP68xU4dXEf5cO0EwxqXCDpo9hehyn9oxv%2FYr1Yr1LM%2BsGW6ZCO14fU26CxCi%2BwfsdkKrCgFoVAQ7eZiOTAxfSS15xkIa6F%2BJYR1y7YPGyKriK%2BIgckKJpTDM5HSzl757goRO5NlVscAZD8GIKRp39K1ZXxdAj5FYts1C6iHHQyJ%2BX6ozRm9YgtFEB7SMAoiQr%2BsH2CTsJRirqiqXvPIUA4A4uq98q3lrK96G%2Fj9%2FfmfmiWdXSEwB9Tb%2FsV%2B9DxMTy3fBD%2FodbOGKOE6dIjz9i1fTAg6cCfdxOo8RaM0AmTnJgweiIz4XzEoogRBy0PNaNj1GCdPKd5aL84%2FOZNLIvdrH6o8JuGeXYAucN8RIsFcpelNs%2BZJyfbQpr%2BIg19MdD8rquQsR2dqzO3s%2BCBcClxLdx0tK1HBJIBc524d7Op6zFSxaIez8ItMIINUGCmHZ3tesBYdobxm1zSjBLcwhLy6bzhKmWNEsBictn6ElEoH%2FNA4dDFkYGpaibTF20%2Bu3CSqd3JFysNQihQnIPVhxmG2tUxdA3wWFDA1%2BKLKEaNkUVweV%2FBOaNog8VHkU%2B2DpwXLzgO9V87bi7IoC0kLZFVzD24Li%2FBjqkASe%2BiCOkD5241G8QriVm3AAars8DVQ6NzbE1dL%2Bj%2FmXYOKuSq8Ac8c%2FglfJ8g71n9ccnwnbSeZTBCYSoe7btJAlf6LNvdcVjcWE8atC8Lnta8dP0yOsrfei3SGbEzozzvCjtMSPxzQVeNjozPAomsa6kGyijweAv2csbig0lloppYA5vxs4olOmIorwAM1aDqrUiBcNuVhorppZO7byAyB7NpWK4&X-Amz-Signature=6909ad07b9def5966adf212ef90199987e3ff570c357aa9550410c611eca6322&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLSMY3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDbQTLMij%2BMYKiDoV7OEmu7tQHYbPfVMaW9jv2389ysXAIhAMQIzlBbYUGsR1QAgCVrx26NktHZQ20QxdQacyure%2FWuKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jMFJfUOD6nVjpD4q3APOw0elMIFrpMyB7oYaxMxWlpFc6WNR8misqTTP68xU4dXEf5cO0EwxqXCDpo9hehyn9oxv%2FYr1Yr1LM%2BsGW6ZCO14fU26CxCi%2BwfsdkKrCgFoVAQ7eZiOTAxfSS15xkIa6F%2BJYR1y7YPGyKriK%2BIgckKJpTDM5HSzl757goRO5NlVscAZD8GIKRp39K1ZXxdAj5FYts1C6iHHQyJ%2BX6ozRm9YgtFEB7SMAoiQr%2BsH2CTsJRirqiqXvPIUA4A4uq98q3lrK96G%2Fj9%2FfmfmiWdXSEwB9Tb%2FsV%2B9DxMTy3fBD%2FodbOGKOE6dIjz9i1fTAg6cCfdxOo8RaM0AmTnJgweiIz4XzEoogRBy0PNaNj1GCdPKd5aL84%2FOZNLIvdrH6o8JuGeXYAucN8RIsFcpelNs%2BZJyfbQpr%2BIg19MdD8rquQsR2dqzO3s%2BCBcClxLdx0tK1HBJIBc524d7Op6zFSxaIez8ItMIINUGCmHZ3tesBYdobxm1zSjBLcwhLy6bzhKmWNEsBictn6ElEoH%2FNA4dDFkYGpaibTF20%2Bu3CSqd3JFysNQihQnIPVhxmG2tUxdA3wWFDA1%2BKLKEaNkUVweV%2FBOaNog8VHkU%2B2DpwXLzgO9V87bi7IoC0kLZFVzD24Li%2FBjqkASe%2BiCOkD5241G8QriVm3AAars8DVQ6NzbE1dL%2Bj%2FmXYOKuSq8Ac8c%2FglfJ8g71n9ccnwnbSeZTBCYSoe7btJAlf6LNvdcVjcWE8atC8Lnta8dP0yOsrfei3SGbEzozzvCjtMSPxzQVeNjozPAomsa6kGyijweAv2csbig0lloppYA5vxs4olOmIorwAM1aDqrUiBcNuVhorppZO7byAyB7NpWK4&X-Amz-Signature=4eeefc59438b63d443bea65c07881b5786ab9a975755f15df72db3f446ae7bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
