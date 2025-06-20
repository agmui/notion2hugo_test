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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7BZGPV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVg9t5Mi5UGjpXGf6LBVqPfhQ3EHQtli%2FPrtOoVXqSnwIgNNJz%2FCraYZLMLUx1t8qQL1NqPtc4cZM3wG%2FNW4qmJ%2FQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwjvllRdR5J4WloCyrcA4gHmvvIiuugpRFWXdhaTMmn8977dCc3024quaKboO%2FNfel3ftngdaPNcOncTf6cWCxKOYHHGrr7FiNqZq%2BhwIvFtbZG4O1Dz82pYK1ycJ0XzrqEay2EwCAypI2i6ri9GeNlSJSeFbidPnFUSWSNl5CiVbtx6AEIInp9wWHuSTiM%2BcCM9frxcJ9DJ64KcNfyRFC1iUoTR1zMePprqCCRlCWy1Mgmg2qjo0j%2FkQymWaAfi1hL3Gr9cIqxRDZoKkxaODs2LIA1M5cUgvnWMPaKgs203A5A0e3fagN3T8ayZkCkL8JEjLGM18QRr5Ac7i828cPDN56p4d65oZ3m9HJnOrX%2FPKDysp26DSTqV2V97PdjIaKmHn3xRp0ve7HJEym81nQK3eq2SrIUBJ8hiSmcGlUt4IIHEloXCcuV34KpFsrhb4Kzzj8g10RpeolEHtDyAAIRIZR%2BJNmz4YECw1MJiHqFYv4J3AEjr8SNZ9GGuatNA2ByScoeCrVfTBEX9nyCnV7ftfEJpjIwxYPPImD9hfpw2mSuwGLCoV5W%2F1IYTcX4DBbTX4u3ZWYG2c%2BTIUdlbG9TPsu3DlLP4v0hoamVahj%2F57lRLaG3hVcpaxFD8vA6VJt%2BeFlJE8wmMfWMML6P08IGOqUB9BKadtyWejXm%2FaSasH5oYR3dtDWDXrYC68LMj84C8R35AHzX5RFruvq1pMj5exlm%2FgWurcMf8q3RiLoctg4zJ77TuZw4pt0hLChBBdGfMxOxVX2YsOQVjrw%2FSQiKENWWdD5iZISV%2FrqBCZrJOkJdqKFmr%2Bb1ZdbMPDhFtTPFc%2FLzPCknIh%2BGyaJ7q1C5hhz5WmXr3CDbZkB83pDBQqEpCq6yQXHh&X-Amz-Signature=27e551cac3e71baa415490aed4b4eff629a8c558dcc37be37d1773e8c0476f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7BZGPV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVg9t5Mi5UGjpXGf6LBVqPfhQ3EHQtli%2FPrtOoVXqSnwIgNNJz%2FCraYZLMLUx1t8qQL1NqPtc4cZM3wG%2FNW4qmJ%2FQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwjvllRdR5J4WloCyrcA4gHmvvIiuugpRFWXdhaTMmn8977dCc3024quaKboO%2FNfel3ftngdaPNcOncTf6cWCxKOYHHGrr7FiNqZq%2BhwIvFtbZG4O1Dz82pYK1ycJ0XzrqEay2EwCAypI2i6ri9GeNlSJSeFbidPnFUSWSNl5CiVbtx6AEIInp9wWHuSTiM%2BcCM9frxcJ9DJ64KcNfyRFC1iUoTR1zMePprqCCRlCWy1Mgmg2qjo0j%2FkQymWaAfi1hL3Gr9cIqxRDZoKkxaODs2LIA1M5cUgvnWMPaKgs203A5A0e3fagN3T8ayZkCkL8JEjLGM18QRr5Ac7i828cPDN56p4d65oZ3m9HJnOrX%2FPKDysp26DSTqV2V97PdjIaKmHn3xRp0ve7HJEym81nQK3eq2SrIUBJ8hiSmcGlUt4IIHEloXCcuV34KpFsrhb4Kzzj8g10RpeolEHtDyAAIRIZR%2BJNmz4YECw1MJiHqFYv4J3AEjr8SNZ9GGuatNA2ByScoeCrVfTBEX9nyCnV7ftfEJpjIwxYPPImD9hfpw2mSuwGLCoV5W%2F1IYTcX4DBbTX4u3ZWYG2c%2BTIUdlbG9TPsu3DlLP4v0hoamVahj%2F57lRLaG3hVcpaxFD8vA6VJt%2BeFlJE8wmMfWMML6P08IGOqUB9BKadtyWejXm%2FaSasH5oYR3dtDWDXrYC68LMj84C8R35AHzX5RFruvq1pMj5exlm%2FgWurcMf8q3RiLoctg4zJ77TuZw4pt0hLChBBdGfMxOxVX2YsOQVjrw%2FSQiKENWWdD5iZISV%2FrqBCZrJOkJdqKFmr%2Bb1ZdbMPDhFtTPFc%2FLzPCknIh%2BGyaJ7q1C5hhz5WmXr3CDbZkB83pDBQqEpCq6yQXHh&X-Amz-Signature=e03008f7880445a04f02dc55a8fd3ba298af16e1ffce1a6a194cc50403dc1d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
