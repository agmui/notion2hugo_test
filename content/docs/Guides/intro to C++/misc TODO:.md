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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GS5MIVV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNm3CGerY%2Fs0W0Zyf%2FVj42jvOHf%2BWlr6diCtGW4lE3cAiEA0agZ%2Fn2lrDDVVaSbEYqPsIzZkgeSamtb2vr8Dl3rc7Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHx8Udx84hZlvrjYWSrcA3ge5Oq51bVwpAM8PmK%2FF9CCLGr7XwqXSdl87Uc%2BXZ5GwEPEgJVPaYJ%2B8rKsVKzYYhEjBN%2FK%2BJGcqmJux8Aib%2BfHjQ4DHjWbdRsuZNCBPwwdevIm78lmJ4lRPGxK%2BLQPDpgYapDbb83PGZqh%2F7%2BJsUUO3tse32A2v4fmW3CDrIKB73ysk6QMQBMyz34z6Nc4IuDrlW57u7LAUz2epJvbT%2BTYc%2FsJZy1OfZUB6OBGtiO6vOgqAbsAgG7NsHgeY5ibho63z3JxjeyddLqMzQ05ER9qOKLxH03OMKpHjnb%2Bc%2F7IyHb7YzSJNDeDOVPFB44q8gARsPVA3VF9ld1ZiCmDt%2FT3DjKW8hRqVPpiNMRAIvelarcAyXNw2le68Xjh%2BM4dEH4da5H%2B5mfPC2kfbN4GHk8vpzfoS3BwXDoTgUpi90BjyqbJdUmnIc0z40XSkfiUxqo9%2Fnoon2W4%2FziqItHzPH%2FqqB2GDQ9OIeCztu4pVZN4pLt5W5DZd3oByCHIvQUKftYlMB%2F9Y9BR2elQHyNbxq4CUvy%2FefU9ZL%2B1O07XzhW%2FR4%2FSim8%2B5Gp8Npeq4%2BtMTz0c%2Bv%2FwgAFHOAoZ0BCjywhLiOq5yiNibw14iHA5FVmDutjxudqZgaT3j10AMI%2BUvMAGOqUBJJ%2Fp8F9wYH1XcFNpkxvFxVyE9eYZitF%2BY5u5wFWh9kANSdLpDOb6ZC0a%2BETJgo2Ndhq2XpMWPBVMZXV%2BcdZ4s80hQdr4NGQ%2BModxDwjvrMtTmdfEe80O33WQtyNboMU1wfJJm79gsX4CaP6oVzVb4s561oFJVZBjOcZREeaqQq9FLD6wCI50EG3dCEfa%2BKsGpVu0BpbGxSw4Un%2B%2FdjRkc6BFlSeV&X-Amz-Signature=9685ba909836c133ebc8158972b2c3bc15850e9c41c130600a037b10cdfecd2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GS5MIVV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNm3CGerY%2Fs0W0Zyf%2FVj42jvOHf%2BWlr6diCtGW4lE3cAiEA0agZ%2Fn2lrDDVVaSbEYqPsIzZkgeSamtb2vr8Dl3rc7Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHx8Udx84hZlvrjYWSrcA3ge5Oq51bVwpAM8PmK%2FF9CCLGr7XwqXSdl87Uc%2BXZ5GwEPEgJVPaYJ%2B8rKsVKzYYhEjBN%2FK%2BJGcqmJux8Aib%2BfHjQ4DHjWbdRsuZNCBPwwdevIm78lmJ4lRPGxK%2BLQPDpgYapDbb83PGZqh%2F7%2BJsUUO3tse32A2v4fmW3CDrIKB73ysk6QMQBMyz34z6Nc4IuDrlW57u7LAUz2epJvbT%2BTYc%2FsJZy1OfZUB6OBGtiO6vOgqAbsAgG7NsHgeY5ibho63z3JxjeyddLqMzQ05ER9qOKLxH03OMKpHjnb%2Bc%2F7IyHb7YzSJNDeDOVPFB44q8gARsPVA3VF9ld1ZiCmDt%2FT3DjKW8hRqVPpiNMRAIvelarcAyXNw2le68Xjh%2BM4dEH4da5H%2B5mfPC2kfbN4GHk8vpzfoS3BwXDoTgUpi90BjyqbJdUmnIc0z40XSkfiUxqo9%2Fnoon2W4%2FziqItHzPH%2FqqB2GDQ9OIeCztu4pVZN4pLt5W5DZd3oByCHIvQUKftYlMB%2F9Y9BR2elQHyNbxq4CUvy%2FefU9ZL%2B1O07XzhW%2FR4%2FSim8%2B5Gp8Npeq4%2BtMTz0c%2Bv%2FwgAFHOAoZ0BCjywhLiOq5yiNibw14iHA5FVmDutjxudqZgaT3j10AMI%2BUvMAGOqUBJJ%2Fp8F9wYH1XcFNpkxvFxVyE9eYZitF%2BY5u5wFWh9kANSdLpDOb6ZC0a%2BETJgo2Ndhq2XpMWPBVMZXV%2BcdZ4s80hQdr4NGQ%2BModxDwjvrMtTmdfEe80O33WQtyNboMU1wfJJm79gsX4CaP6oVzVb4s561oFJVZBjOcZREeaqQq9FLD6wCI50EG3dCEfa%2BKsGpVu0BpbGxSw4Un%2B%2FdjRkc6BFlSeV&X-Amz-Signature=d79bb00387a0550952ae2063b0cf9a42e89f85ba18b5bf9ce5e5e658e5af9151&X-Amz-SignedHeaders=host&x-id=GetObject)

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
