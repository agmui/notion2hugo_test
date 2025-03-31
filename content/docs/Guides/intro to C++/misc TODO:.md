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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNTS4FU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAZCMI89yF3MirkWP0lXnK5qeX%2BUYzjA28qauSN3UxxdAiAchGrCZA6lp8dG%2FZ54iwlj7dXMx0tdChNVVD76K07CoiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQtImU0ZTa9XzVBCHKtwDU0wBSHyW0cWhIhjdhHkVggcmj7Zwgb%2Bxf7uzFIqdCaUVPJdtCjHFDBJ%2Bi73IUHCb2GF1KHuyg4EBD4IUANKvaStigNq4tPJtk%2FB5a3FP%2FPCiziPoJ0GDw7LVV1SIxee%2BMrzs2pGER3sGVo2w4XIcVUN4qzuAGg0IT2pe4EK5vaY96BmI4mo7GhgJnBVbzg3DF8WPt%2Br3ANDJnjhF2ijDFnQyDeixwb6bWMuiwUAUdwBsBSDUj%2FztYqX22UsICB5skZhowJfszNgCBQhVDTNbb3FseXbhTu7f3b6NcPUUMTaQP%2Fg1tLABG%2FjJelHBrUCaMZAKCbhNPJakIWFxzE08bCRlHjaiNYYD%2FORBoILqwn57AcV4zgljyWJAp3qvnIp6GRuNuKGdFOyeVqZdL9hjVkI0T1FRuOE%2F6id1S%2FQVMrZGiCJBU1mVnJMy3P6XB89wZ6%2FWo2sXo51gyBEv3%2B9v6NGwaXN2FRgjQdfgdect9NWyanx2BY5BtKBuoXGWhEniI8xfD8zdu9JoepbloONyEh4pWVkdG9Sj9Vzhm3TTER8cBEAdt94ZMNTopfhtXxsoj3pK%2BoGgKs2GO3YRmxwG%2BoC3ddfTcLo0ztCcUw9Ppkk9zub2MA7LOeF3Y9gwkuSovwY6pgEnbK36DDRFUms9mo0fjJgaK43XkB6T%2F59jQvVkIjdiQ6qXA%2FOwqQEA4VsOgcTwqG46GZsLlTzbeNFGNI8vd1u7EgAFRpTwtMB941l5BJlBoQ6MMVOk89WQcbWldViZBRWR0fc2Ipg4x4JyFS6Be4JgWv5GdAAA9DQzjFJ2UVyhzmGmfTWjUdeo%2B8IlhlawbdmV1YuWsF97aEl8VkfHE6KWVhFNVmm0&X-Amz-Signature=ac04de1c7dfb505573172af609863e51b5b96d54636ace3070d8ae5118be669b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNTS4FU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAZCMI89yF3MirkWP0lXnK5qeX%2BUYzjA28qauSN3UxxdAiAchGrCZA6lp8dG%2FZ54iwlj7dXMx0tdChNVVD76K07CoiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQtImU0ZTa9XzVBCHKtwDU0wBSHyW0cWhIhjdhHkVggcmj7Zwgb%2Bxf7uzFIqdCaUVPJdtCjHFDBJ%2Bi73IUHCb2GF1KHuyg4EBD4IUANKvaStigNq4tPJtk%2FB5a3FP%2FPCiziPoJ0GDw7LVV1SIxee%2BMrzs2pGER3sGVo2w4XIcVUN4qzuAGg0IT2pe4EK5vaY96BmI4mo7GhgJnBVbzg3DF8WPt%2Br3ANDJnjhF2ijDFnQyDeixwb6bWMuiwUAUdwBsBSDUj%2FztYqX22UsICB5skZhowJfszNgCBQhVDTNbb3FseXbhTu7f3b6NcPUUMTaQP%2Fg1tLABG%2FjJelHBrUCaMZAKCbhNPJakIWFxzE08bCRlHjaiNYYD%2FORBoILqwn57AcV4zgljyWJAp3qvnIp6GRuNuKGdFOyeVqZdL9hjVkI0T1FRuOE%2F6id1S%2FQVMrZGiCJBU1mVnJMy3P6XB89wZ6%2FWo2sXo51gyBEv3%2B9v6NGwaXN2FRgjQdfgdect9NWyanx2BY5BtKBuoXGWhEniI8xfD8zdu9JoepbloONyEh4pWVkdG9Sj9Vzhm3TTER8cBEAdt94ZMNTopfhtXxsoj3pK%2BoGgKs2GO3YRmxwG%2BoC3ddfTcLo0ztCcUw9Ppkk9zub2MA7LOeF3Y9gwkuSovwY6pgEnbK36DDRFUms9mo0fjJgaK43XkB6T%2F59jQvVkIjdiQ6qXA%2FOwqQEA4VsOgcTwqG46GZsLlTzbeNFGNI8vd1u7EgAFRpTwtMB941l5BJlBoQ6MMVOk89WQcbWldViZBRWR0fc2Ipg4x4JyFS6Be4JgWv5GdAAA9DQzjFJ2UVyhzmGmfTWjUdeo%2B8IlhlawbdmV1YuWsF97aEl8VkfHE6KWVhFNVmm0&X-Amz-Signature=e817ac3f85b612c407cf8d9f103e369735facba9e6c9c24b47e3221258995c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
