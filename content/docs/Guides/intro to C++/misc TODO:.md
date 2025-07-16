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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326WA5I6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoUMTdomq7zQFiwHX%2BZDLhxsrYodRoOc7nEaknDUa%2FHwIhAM8uS60sZFOL8idQZMObn1pTtiVuA2bAmL3LaSX%2BUFoMKv8DCGIQABoMNjM3NDIzMTgzODA1Igz4fhScheE1tHfniKgq3AMObH29DIC%2BGp%2FamcmrNmilbUQpkyYyncrXTyIEUEW9cgl7N6K%2B2rdg2GehEjiZn8ozH4rKNafIsmzC1tqj%2Fn7JVQ0l2tbRIEKCNfAEl%2BoyY%2BkaFIRVNfVuqaMBHvBUiiXa6AM%2FXgNIzlIzw8Gn136TTXIy3BZzCqorNh8nMWWsekWPFNKirbdPtIJE11k6FNjNNM4MJfC6bbtBfmHH3h%2F%2B1J8KXsAd8537vde%2BZ50YqI2AT4vX7MV%2FdiOknF2vM9bqB%2BDd3k3uTPuxLpIwOBSIkQNsf38VY%2BT%2BDiAf5TFks1W863A1jPd1PDnv8Vdkacl%2BQka304TBvOAIfLR%2BCr6iPzbkH58CPBDVUyza67AqDlUutRVaFF91icEKlcMeyDLGXHNImzUaKEIcEx7y1RW0o72cT%2Bdt6W35gX4D6%2FGafCYHER6UKQSwIO5GibS%2BEp1GpYkwe4HC63MuOCobhOba88EDkC14YH1m6qckfJIdUcd1Oj73XB%2FK5dB0sMfqhDl7Ykc1G8tVnUqZ%2Bso6kWy1B1YznSUKRMpO%2FdzoaARFZUAkSlTxwK0KStVlmPPiQyOE8VKkN7jyF%2Ff%2FVWPOddpHokAXQ7UynjtZtdZEYK1QHRmqWo%2B74fYz53TGZzDXtN%2FDBjqkAaoDAI%2BdzzyxuLhnvEqU729XCDDY8Pb0QkRvb06CROMYgvc%2FOBcrlfAYxtNZGalZFuJR8Xs3Pyo6kmp4toeshZnz0SLAcyUBQCQPkAhQvZ2bNay1sRaPbHpxTAZY%2FHD4HMVyeuAu66SAUp3oid0L9hqqYSgQ7E1Ose255YWsL2Q7cL444E5sdt9M7aFFcSR4usrrBMMvaoOKzC6UeCUoA3vvqYpq&X-Amz-Signature=bb5867069335f60580e14c55ebfc85f080587609e31c58bf79d4c47676057d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326WA5I6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoUMTdomq7zQFiwHX%2BZDLhxsrYodRoOc7nEaknDUa%2FHwIhAM8uS60sZFOL8idQZMObn1pTtiVuA2bAmL3LaSX%2BUFoMKv8DCGIQABoMNjM3NDIzMTgzODA1Igz4fhScheE1tHfniKgq3AMObH29DIC%2BGp%2FamcmrNmilbUQpkyYyncrXTyIEUEW9cgl7N6K%2B2rdg2GehEjiZn8ozH4rKNafIsmzC1tqj%2Fn7JVQ0l2tbRIEKCNfAEl%2BoyY%2BkaFIRVNfVuqaMBHvBUiiXa6AM%2FXgNIzlIzw8Gn136TTXIy3BZzCqorNh8nMWWsekWPFNKirbdPtIJE11k6FNjNNM4MJfC6bbtBfmHH3h%2F%2B1J8KXsAd8537vde%2BZ50YqI2AT4vX7MV%2FdiOknF2vM9bqB%2BDd3k3uTPuxLpIwOBSIkQNsf38VY%2BT%2BDiAf5TFks1W863A1jPd1PDnv8Vdkacl%2BQka304TBvOAIfLR%2BCr6iPzbkH58CPBDVUyza67AqDlUutRVaFF91icEKlcMeyDLGXHNImzUaKEIcEx7y1RW0o72cT%2Bdt6W35gX4D6%2FGafCYHER6UKQSwIO5GibS%2BEp1GpYkwe4HC63MuOCobhOba88EDkC14YH1m6qckfJIdUcd1Oj73XB%2FK5dB0sMfqhDl7Ykc1G8tVnUqZ%2Bso6kWy1B1YznSUKRMpO%2FdzoaARFZUAkSlTxwK0KStVlmPPiQyOE8VKkN7jyF%2Ff%2FVWPOddpHokAXQ7UynjtZtdZEYK1QHRmqWo%2B74fYz53TGZzDXtN%2FDBjqkAaoDAI%2BdzzyxuLhnvEqU729XCDDY8Pb0QkRvb06CROMYgvc%2FOBcrlfAYxtNZGalZFuJR8Xs3Pyo6kmp4toeshZnz0SLAcyUBQCQPkAhQvZ2bNay1sRaPbHpxTAZY%2FHD4HMVyeuAu66SAUp3oid0L9hqqYSgQ7E1Ose255YWsL2Q7cL444E5sdt9M7aFFcSR4usrrBMMvaoOKzC6UeCUoA3vvqYpq&X-Amz-Signature=b8b54d8e94724690c0740290d346a6ad859682054f36d77226353391e0b4076a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
