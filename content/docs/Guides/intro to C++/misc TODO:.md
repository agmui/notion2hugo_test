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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EYW3DU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfCbWnGAiS0IYxvm8f2AKnBJPwsUt8%2FBftaijn2EOikgIhAJJ2v0LIlf9O5rKAIr4%2Bpg7IcxoqacNwKs18tB6gwNpNKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqttdmAsmA09xaiHUq3AM0iZUlkDuQtLtX%2FcbudPdRY9PHH5acgj5C71t5KXREK%2BcHeciwQLWBi%2BLB%2Bne%2BI8YSwHiGpOThwCf0Ujk2WTdtYtHNPf7ld0HMZRLd6yR%2Fnn2kIhl16H885TP4D9vLLNMZQCE5XzZRcubtHhXpMe2zgy7h1laKGlQ3w6wRP9EIphLYstr3gM3euOI0YzENJTXK26bONry%2FzUpNKFfxBXpcubANhWkADZFMiiRSmrZfxi90UPbr5P7yfxcbWeIwQOG4bH2l1jb0gcfuV7%2Fdg%2BfI6T0UqZOQ3OzW61R6kduVcxdFpMFIPnUL6%2BM6Twvao%2FI7boN2om1oeAGA1GpampbYEFSD0fEysbl6llfdQE1SwGC7PkKNFXcm0hjiOg%2Fo2yGDR%2BJytp673sYQu10EN0rImbjGi2pf6HC0LygATfWkXDdvki57VM%2FmyhtAi%2B6XEKS9JxEXwYnxgTQpt%2BUteQQZoiA7hnFP9m%2B3vluFMH7ouMdbDu1GoyeIOsMj9amuPfLiVgSwcHcHHQQcPH1y1u%2F7KYu0vV2MRGSQ6DpRucNbF35HjqyYGTx9oVb3dRyIFvqmNf1%2FTQfLQy9LpQQnZQfhZEF5S9rvXicnaeNDzLKfL5WNdW3a8FKsQk9mpjC425XABjqkAbycDt8VtXwKg8EQyvb96yi7NRiWqNCLpWsg3iUhzQjFdhz5Ja3m5PO1I2xwN%2FsHjo58LL6zBBcndu8iZWYahh1Pn24qkskAKPA1fnBtd%2BCGyuNrM%2F8HgraGllMvfx0zSmzhOKnv1luRch0Q5hsK57mf911zmLNJIwFDkGMuDT6C25Nk6H6xSiOsXoli1KRqhIxWXxWF5c6Act05G7QbbikBTcrk&X-Amz-Signature=c4fe09f1c506bc037015f12b4ed99aed7798fa85c24112748c7f3826258ff624&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EYW3DU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfCbWnGAiS0IYxvm8f2AKnBJPwsUt8%2FBftaijn2EOikgIhAJJ2v0LIlf9O5rKAIr4%2Bpg7IcxoqacNwKs18tB6gwNpNKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqttdmAsmA09xaiHUq3AM0iZUlkDuQtLtX%2FcbudPdRY9PHH5acgj5C71t5KXREK%2BcHeciwQLWBi%2BLB%2Bne%2BI8YSwHiGpOThwCf0Ujk2WTdtYtHNPf7ld0HMZRLd6yR%2Fnn2kIhl16H885TP4D9vLLNMZQCE5XzZRcubtHhXpMe2zgy7h1laKGlQ3w6wRP9EIphLYstr3gM3euOI0YzENJTXK26bONry%2FzUpNKFfxBXpcubANhWkADZFMiiRSmrZfxi90UPbr5P7yfxcbWeIwQOG4bH2l1jb0gcfuV7%2Fdg%2BfI6T0UqZOQ3OzW61R6kduVcxdFpMFIPnUL6%2BM6Twvao%2FI7boN2om1oeAGA1GpampbYEFSD0fEysbl6llfdQE1SwGC7PkKNFXcm0hjiOg%2Fo2yGDR%2BJytp673sYQu10EN0rImbjGi2pf6HC0LygATfWkXDdvki57VM%2FmyhtAi%2B6XEKS9JxEXwYnxgTQpt%2BUteQQZoiA7hnFP9m%2B3vluFMH7ouMdbDu1GoyeIOsMj9amuPfLiVgSwcHcHHQQcPH1y1u%2F7KYu0vV2MRGSQ6DpRucNbF35HjqyYGTx9oVb3dRyIFvqmNf1%2FTQfLQy9LpQQnZQfhZEF5S9rvXicnaeNDzLKfL5WNdW3a8FKsQk9mpjC425XABjqkAbycDt8VtXwKg8EQyvb96yi7NRiWqNCLpWsg3iUhzQjFdhz5Ja3m5PO1I2xwN%2FsHjo58LL6zBBcndu8iZWYahh1Pn24qkskAKPA1fnBtd%2BCGyuNrM%2F8HgraGllMvfx0zSmzhOKnv1luRch0Q5hsK57mf911zmLNJIwFDkGMuDT6C25Nk6H6xSiOsXoli1KRqhIxWXxWF5c6Act05G7QbbikBTcrk&X-Amz-Signature=ebd6dd60d62e51b25e0603c678f68b5bc462b1831fad5faec8266928758a18e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
