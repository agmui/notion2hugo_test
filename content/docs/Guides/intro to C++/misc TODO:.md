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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RRO7TB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFdGwYc99zxoCjfKoAJNj%2FN6x%2FZB2Q6rp%2BmCEZXgTNJMAiBQabuG64ByUd3RQVtxvqmTrNgOcvgjAkXmAbiYu2vkxSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVVl%2FveVxk%2BbJ6g%2BUKtwDwFoSLgopDnebfFoaEF4cpG1kLJ9Xs33kTXyaUxLk8D3csd5weadwc26Osw7fPrfkHAyoidxAHoQxudnr%2FSZmKpTYptf8U4f4jYQ7YfRB9Z3R2CxZmGEH6sRI3tcT1fD%2F4O1l3iMMxRCS1Ygt%2B%2BSQiF8Rum8gx20rSiU0WwEaVj5pCddwLUfOZRTDh%2Foz%2Bgtw8%2Blls1ZebvfLtd9hBTbs%2FemPSDC6G%2BjFQSTl3%2Bayex3XAYws452CEHHFbyXAAXsq3bg8rKbtWPcovnsPxMcUpT1ZfW9gFisK2kNwimLqI3wwQofnq4158yjgGdS6Vv5G3F8NJrIoSoGPyGYoFbRYmwrBzOkYjmgtWtDneQ6VsMRjGa2ZFVhjbunHBfkQF9cLx0u7dCSlUZwSEIctxdKTN0h%2BXCKwL1IvCxOBZG8134OZgSdtWzyMKToYkvmfUI%2FeEPShP2bblCtiErRFi5hql7tvHVGzgXccaO%2BJPYbKGPgBPURM33R5VIej16HwHrqGAUOrOpO3JWPBoHfqO2WwOsTxUwFhLmoUeJNXBJ2tmawRjPCBRyGSMcaDuFSjY%2FXcaRlT4cPS%2F119AFRHGJ9YYTBH1HWe2GE7B%2BB33yhwjsOo4Yi5Ad%2BeJFi7mhcw7fDPvQY6pgHWvJQzT9%2BKcJTnFutKj2kWnWetE4NipqyxgP56NY6ueSCOD8ShzoIDVfZ8lXJouqn2%2BXirNwVDQIaV7fN%2Bgv2SiDmQ%2FWB80QzzAxyLD61aPp1rkC67m%2FHMX%2BPUJBK6fCmSN3Rt%2BdgU6u3qhFhAf6XbsVsi6IIeqbBX3va6WuMa2ujoMv3JolS1Bws5RsSjCPYTMlMoEaXWSBGxx8hkgtJBXE6BaMZ%2F&X-Amz-Signature=7e438cd11b968796b9ed78c0c485002ffb0791b4c52330c3ea094bc5420149c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RRO7TB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFdGwYc99zxoCjfKoAJNj%2FN6x%2FZB2Q6rp%2BmCEZXgTNJMAiBQabuG64ByUd3RQVtxvqmTrNgOcvgjAkXmAbiYu2vkxSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVVl%2FveVxk%2BbJ6g%2BUKtwDwFoSLgopDnebfFoaEF4cpG1kLJ9Xs33kTXyaUxLk8D3csd5weadwc26Osw7fPrfkHAyoidxAHoQxudnr%2FSZmKpTYptf8U4f4jYQ7YfRB9Z3R2CxZmGEH6sRI3tcT1fD%2F4O1l3iMMxRCS1Ygt%2B%2BSQiF8Rum8gx20rSiU0WwEaVj5pCddwLUfOZRTDh%2Foz%2Bgtw8%2Blls1ZebvfLtd9hBTbs%2FemPSDC6G%2BjFQSTl3%2Bayex3XAYws452CEHHFbyXAAXsq3bg8rKbtWPcovnsPxMcUpT1ZfW9gFisK2kNwimLqI3wwQofnq4158yjgGdS6Vv5G3F8NJrIoSoGPyGYoFbRYmwrBzOkYjmgtWtDneQ6VsMRjGa2ZFVhjbunHBfkQF9cLx0u7dCSlUZwSEIctxdKTN0h%2BXCKwL1IvCxOBZG8134OZgSdtWzyMKToYkvmfUI%2FeEPShP2bblCtiErRFi5hql7tvHVGzgXccaO%2BJPYbKGPgBPURM33R5VIej16HwHrqGAUOrOpO3JWPBoHfqO2WwOsTxUwFhLmoUeJNXBJ2tmawRjPCBRyGSMcaDuFSjY%2FXcaRlT4cPS%2F119AFRHGJ9YYTBH1HWe2GE7B%2BB33yhwjsOo4Yi5Ad%2BeJFi7mhcw7fDPvQY6pgHWvJQzT9%2BKcJTnFutKj2kWnWetE4NipqyxgP56NY6ueSCOD8ShzoIDVfZ8lXJouqn2%2BXirNwVDQIaV7fN%2Bgv2SiDmQ%2FWB80QzzAxyLD61aPp1rkC67m%2FHMX%2BPUJBK6fCmSN3Rt%2BdgU6u3qhFhAf6XbsVsi6IIeqbBX3va6WuMa2ujoMv3JolS1Bws5RsSjCPYTMlMoEaXWSBGxx8hkgtJBXE6BaMZ%2F&X-Amz-Signature=aee9b372390573fecf8f2cff726afc2a411f4a82ad57141ae9ee7f8872fd30ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
