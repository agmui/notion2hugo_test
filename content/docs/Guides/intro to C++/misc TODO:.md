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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ764T2P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzW8NS1W%2FcOWcbAmzeQI21sBe6u7XM4uQI5V%2FteFjxCAiAtNKq2JaOlorCZjEpTnsUr%2BsII7h1Fh39eJTEOTD63Xir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMYJB3puMnrr%2B0JceAKtwD%2BRdRQqRI6kXoGCHSgEsQBxG1akDNgstxYdMdnITUD2pZXZJuDhVw8qwnS8y1jBv92lSfAsVUzo8Mm1iRJmiXRzT2AfpwaxhoNn4rhcrVfLpRjYnHlP8dISXjvVGAlHQWfNk9GVIybW8utb5xd5AKmPw0S%2BRzJQbw35eoqMNpdepNMPdfjVIYHj8HoTB%2F6WMCHgyRgysoFD0Y5VwR3SNn5Z0yZOYZ6eqjQJyU%2FlUS%2FpeUaew0Ivv1ITGIMVf6ZVvy99lE8FjmF2auBeTxsRbxtVMNP8bgxfbWOi64%2F%2Ff8qJx3kvpCOAAexeQ%2B17k3pvV2MDfkq8yZLh%2BLfUZ7Au5FJ5AfMjElWUTHuJfihnIo0bKNoypSEF4Kuaftz58vrfV9YMTFlyKgFHUoWwIPZkNug6I4d1ezjaEtgByTgIuy1xzcWpGCGowAgDmobxJ%2F3qDkynIIiEz1q8ylrYvTVOVY82MNeqflo2fekT%2BthQ1N962pO9XIaBS4w7fwTxDxUX%2BnpsAqpXsDmrsEAk8md9iY8Fq2tG0MXREakS5wpqHZCvsTQCikpkMGztFZ8frAgrbu0eCRMQ4bUawBDMCUBfORDt03ttvLfAafVmiO23wRFbxFyjT1V6iSDwWdjn0w1sC5wAY6pgEvo%2B%2BSbicylXdlmNouSNvZ%2BPFtUiCCsjo2t9qQ7ZHuJZxwY00RyTyTf%2BNOK0hE8aUUKF44IqdqcXrhUIA1FqSwBqFQfE260VAYBLt%2BBHbjD1AhE21BJDHpUZNOODPUVXipykrymXt0jq7xJF3n2Rp3V69C%2FzCXEUmCfIewDn0qXsltrWOYMgjdiDR1OrEbwov%2BM1%2FqNqUlm%2B4jejVodJsLx4IZ4XhH&X-Amz-Signature=e9e2cc7227f0439751d80ac241f63319822954b16ce21bc5280c60cb98f59e10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ764T2P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzW8NS1W%2FcOWcbAmzeQI21sBe6u7XM4uQI5V%2FteFjxCAiAtNKq2JaOlorCZjEpTnsUr%2BsII7h1Fh39eJTEOTD63Xir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMYJB3puMnrr%2B0JceAKtwD%2BRdRQqRI6kXoGCHSgEsQBxG1akDNgstxYdMdnITUD2pZXZJuDhVw8qwnS8y1jBv92lSfAsVUzo8Mm1iRJmiXRzT2AfpwaxhoNn4rhcrVfLpRjYnHlP8dISXjvVGAlHQWfNk9GVIybW8utb5xd5AKmPw0S%2BRzJQbw35eoqMNpdepNMPdfjVIYHj8HoTB%2F6WMCHgyRgysoFD0Y5VwR3SNn5Z0yZOYZ6eqjQJyU%2FlUS%2FpeUaew0Ivv1ITGIMVf6ZVvy99lE8FjmF2auBeTxsRbxtVMNP8bgxfbWOi64%2F%2Ff8qJx3kvpCOAAexeQ%2B17k3pvV2MDfkq8yZLh%2BLfUZ7Au5FJ5AfMjElWUTHuJfihnIo0bKNoypSEF4Kuaftz58vrfV9YMTFlyKgFHUoWwIPZkNug6I4d1ezjaEtgByTgIuy1xzcWpGCGowAgDmobxJ%2F3qDkynIIiEz1q8ylrYvTVOVY82MNeqflo2fekT%2BthQ1N962pO9XIaBS4w7fwTxDxUX%2BnpsAqpXsDmrsEAk8md9iY8Fq2tG0MXREakS5wpqHZCvsTQCikpkMGztFZ8frAgrbu0eCRMQ4bUawBDMCUBfORDt03ttvLfAafVmiO23wRFbxFyjT1V6iSDwWdjn0w1sC5wAY6pgEvo%2B%2BSbicylXdlmNouSNvZ%2BPFtUiCCsjo2t9qQ7ZHuJZxwY00RyTyTf%2BNOK0hE8aUUKF44IqdqcXrhUIA1FqSwBqFQfE260VAYBLt%2BBHbjD1AhE21BJDHpUZNOODPUVXipykrymXt0jq7xJF3n2Rp3V69C%2FzCXEUmCfIewDn0qXsltrWOYMgjdiDR1OrEbwov%2BM1%2FqNqUlm%2B4jejVodJsLx4IZ4XhH&X-Amz-Signature=ccfa2d13cca72a41dc87e91372e9d09396650667058d8c375d4927b863fcfc4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
