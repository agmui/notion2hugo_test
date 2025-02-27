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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWR7GH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDfKfcO9sLkW7kipF1n2N0I0uyKxX7RGdVB2KrH%2BDjTsgIgb1Lrx1cP03rhY0QHm%2BsW1RaUx8JJJWaIIU525XyfVbYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGANYbGH2oYBbhylMCrcAzLqVok2P16zAA6sFjHXIo2xCuiCCJvPNc5i9HSYSWnxerAONr214%2FZH49szpaTjE%2BV1JYXIbdbD52ZPVU9wK6Pf3mmxdMxIjO9EuT2QismRboIsnNKb3qPE%2BVfNiSdk84G92M%2FhdVndFcBr1ACRcdBFy%2BU3zov5sI7CHe28VMAq6MYVAcc9ScIAduxr87PZ%2BkBFRgaZ4znksuVnVfzcltu1%2Fob%2Fbyw8YsHbyYNFLLiYV%2FnhBvO2dv3CUNhgntSdQFy1tKf7Hu5cDEnjhG6%2BdJW7Y93vuk64ZHfMGYsBf0QFohlNHPhlTKTDmjQU9AnvBswZJvs4gMNI%2FuWlaTGDJq3WuEHOEQhnajxKU1WAUQOHHqnUeYKFUVhUMxHW8N%2FJwizbeqSF43geHoLJAnVZaMfbP9OrmIEtV99Kjc0Zo59HXfD1vCwoONzSLCSl3Wt0kfhtLU5DJUK5LVm6kcURtc7hCvg9K05dnM%2B8sLgVfnrumyxusyw1dW6KTDTBApC9P4MMOZd9ut088luuEKt095jknxss3rUO1fWnnKxlpHiMVzZFbuEwD8Jv1c03U%2B57S%2FO0kiY%2B%2BK8xUE2x68DzuOu3Y%2F2o28RQFTrvtJGWM8DLOz5NnLoQDlfOhpElMKWugb4GOqUBQ8KPSEVC5LK%2FNCWgd9D244UktAOSQ1nNOox%2BEqTj6xJ7T5PdOMyoOfRv8GU9UAfn%2BAOhycLLzapyu16aZH%2FKuiJRb5WLs2oeDPwg%2BAK%2B1thv0UZZ7pqFz2oGOAKDuA4BeRa8MEoSGtV%2FkGcHA1BwDERgWwjIgd0suzf425ySU8eIA2X81Fby7W4m0OD92b%2FKpMnpL9WL5GogQ%2FFr%2F72wmIsls1pg&X-Amz-Signature=0ca1c251bb85d352493a607803b2f950ec1a565372c6e93ae1593326d012aea3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWR7GH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDfKfcO9sLkW7kipF1n2N0I0uyKxX7RGdVB2KrH%2BDjTsgIgb1Lrx1cP03rhY0QHm%2BsW1RaUx8JJJWaIIU525XyfVbYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGANYbGH2oYBbhylMCrcAzLqVok2P16zAA6sFjHXIo2xCuiCCJvPNc5i9HSYSWnxerAONr214%2FZH49szpaTjE%2BV1JYXIbdbD52ZPVU9wK6Pf3mmxdMxIjO9EuT2QismRboIsnNKb3qPE%2BVfNiSdk84G92M%2FhdVndFcBr1ACRcdBFy%2BU3zov5sI7CHe28VMAq6MYVAcc9ScIAduxr87PZ%2BkBFRgaZ4znksuVnVfzcltu1%2Fob%2Fbyw8YsHbyYNFLLiYV%2FnhBvO2dv3CUNhgntSdQFy1tKf7Hu5cDEnjhG6%2BdJW7Y93vuk64ZHfMGYsBf0QFohlNHPhlTKTDmjQU9AnvBswZJvs4gMNI%2FuWlaTGDJq3WuEHOEQhnajxKU1WAUQOHHqnUeYKFUVhUMxHW8N%2FJwizbeqSF43geHoLJAnVZaMfbP9OrmIEtV99Kjc0Zo59HXfD1vCwoONzSLCSl3Wt0kfhtLU5DJUK5LVm6kcURtc7hCvg9K05dnM%2B8sLgVfnrumyxusyw1dW6KTDTBApC9P4MMOZd9ut088luuEKt095jknxss3rUO1fWnnKxlpHiMVzZFbuEwD8Jv1c03U%2B57S%2FO0kiY%2B%2BK8xUE2x68DzuOu3Y%2F2o28RQFTrvtJGWM8DLOz5NnLoQDlfOhpElMKWugb4GOqUBQ8KPSEVC5LK%2FNCWgd9D244UktAOSQ1nNOox%2BEqTj6xJ7T5PdOMyoOfRv8GU9UAfn%2BAOhycLLzapyu16aZH%2FKuiJRb5WLs2oeDPwg%2BAK%2B1thv0UZZ7pqFz2oGOAKDuA4BeRa8MEoSGtV%2FkGcHA1BwDERgWwjIgd0suzf425ySU8eIA2X81Fby7W4m0OD92b%2FKpMnpL9WL5GogQ%2FFr%2F72wmIsls1pg&X-Amz-Signature=1b997e2369d97e83153b29ff953471f36aaee126474f8e6440364f5df1db6e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
