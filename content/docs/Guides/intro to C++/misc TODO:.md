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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446OIG2K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChg2J3V%2FWm9O%2B5UwUe9xznaC90aq9OWleRdLXdFYo3AAiAf%2Bjxnu1JUIMDLNAtrHRw7EfWdjnfDGdbtAU9Qt8R%2B1CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90vXyguwD1K5XulrKtwD%2FEG%2FbdEPSRGIRTHdEPcTL6z%2BFUyICYd98LFLss0w8al1UlrIGp6muo9uuBZh1qYuGx%2BsnA%2Fcekg4FphGX5SQORY6zPzpvvs9lpVQ1q0J6sVtKNIS4odoGuhB2bxIIzr6nsu1dYaGl2B%2BvAOGmqq%2FlFUJkW00itrJ1IUUpGEXC62ed2a5WRdHmL23K5GWJLHZ76uYq2%2F19yObjqFnn4Fln%2Fn2VuvBPa4zdi1jWHETbFsRiUz%2FinfbkS3Z5MWXgchldz1Di4umD9WYP7PQxLTrGMQursh1eFuUlDPWPPW3qrr4L304WMAHlkFGDKuEMVsn0wa75nb0NayGsl8Mr04xfJcm%2FQJckJhMaNS0WC7Q412hRBanJFJv7TSa%2B1CQ%2BgunEyNwj4BsU9YvJXoEfNcfbQuuhXH0KOCf%2F%2BXFFfaGd8V64gfc9uuJAIlQ5UWYFFimIeHz3ENddsrkyokY07CEtT814MpM%2FSoTiqmp8YoKt4bv%2BAMr3rVFYKfdWkw5KFfQzwwoRB4I%2FJk6W0HU5czJZve%2FC7gGaOXJ4mNYLT6EB0ahCBs0UuNGcWMgLCXJ6Kh4jdMpKf1m2DgN7fkB2lLn1%2FYmgMB%2FvN%2BuilKZkdJcwGyc4LLmbc%2BGUt1U5tAw7u2YwgY6pgHqOVD1SkF%2FxjHZxpBiPOpIgfcuSr0LThoIYCVBNdRduVtOBYspRvtjt0yZfAKxRHNcG4IOZMH59cc4ZOPn6ckhN6pZMpCl5Dj8iOs5Wvf20yvGINR7MQ74E9rbELx4heg0630kNqNX%2FaExiOeEx4qbQEe9ECvAerKDt3eTDTwB2efV%2B4eKLpL8YtmXHqXzhmPAHhCgWVggJUPcglJprTXAOz73aFzq&X-Amz-Signature=2dd12540834e677ed8f907ed13e555d7c73b41c607c7bb1fc450be1730335410&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446OIG2K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChg2J3V%2FWm9O%2B5UwUe9xznaC90aq9OWleRdLXdFYo3AAiAf%2Bjxnu1JUIMDLNAtrHRw7EfWdjnfDGdbtAU9Qt8R%2B1CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90vXyguwD1K5XulrKtwD%2FEG%2FbdEPSRGIRTHdEPcTL6z%2BFUyICYd98LFLss0w8al1UlrIGp6muo9uuBZh1qYuGx%2BsnA%2Fcekg4FphGX5SQORY6zPzpvvs9lpVQ1q0J6sVtKNIS4odoGuhB2bxIIzr6nsu1dYaGl2B%2BvAOGmqq%2FlFUJkW00itrJ1IUUpGEXC62ed2a5WRdHmL23K5GWJLHZ76uYq2%2F19yObjqFnn4Fln%2Fn2VuvBPa4zdi1jWHETbFsRiUz%2FinfbkS3Z5MWXgchldz1Di4umD9WYP7PQxLTrGMQursh1eFuUlDPWPPW3qrr4L304WMAHlkFGDKuEMVsn0wa75nb0NayGsl8Mr04xfJcm%2FQJckJhMaNS0WC7Q412hRBanJFJv7TSa%2B1CQ%2BgunEyNwj4BsU9YvJXoEfNcfbQuuhXH0KOCf%2F%2BXFFfaGd8V64gfc9uuJAIlQ5UWYFFimIeHz3ENddsrkyokY07CEtT814MpM%2FSoTiqmp8YoKt4bv%2BAMr3rVFYKfdWkw5KFfQzwwoRB4I%2FJk6W0HU5czJZve%2FC7gGaOXJ4mNYLT6EB0ahCBs0UuNGcWMgLCXJ6Kh4jdMpKf1m2DgN7fkB2lLn1%2FYmgMB%2FvN%2BuilKZkdJcwGyc4LLmbc%2BGUt1U5tAw7u2YwgY6pgHqOVD1SkF%2FxjHZxpBiPOpIgfcuSr0LThoIYCVBNdRduVtOBYspRvtjt0yZfAKxRHNcG4IOZMH59cc4ZOPn6ckhN6pZMpCl5Dj8iOs5Wvf20yvGINR7MQ74E9rbELx4heg0630kNqNX%2FaExiOeEx4qbQEe9ECvAerKDt3eTDTwB2efV%2B4eKLpL8YtmXHqXzhmPAHhCgWVggJUPcglJprTXAOz73aFzq&X-Amz-Signature=df3b078a413dad60cd872e879f000ab379624f8b113feefffe7efa0a8a4b8538&X-Amz-SignedHeaders=host&x-id=GetObject)

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
