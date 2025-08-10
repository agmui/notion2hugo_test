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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KXB5CV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9yv47oQ8r1Z2z0ZmrYF%2BoHuZhK8IBA3zS8bziVgrCQIgYAmgiSirdoAXQs5cH%2FQOaIYvdtM2XNJzgj5ahm3KVtUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQrgTUh8TIczgCXgCrcA3CcfW6qEmveQbBGX%2FvlAej0dI4zqCfq7HJEHP94I9mDVyAGoNOioKzu1MLe%2FJCqIuo04kew2vpDUaSEURgfKMaZNZ2dQLnqmTrUv5wcT12gpz%2BDeaalhKgHizvfDCfB5mwqLF9QbrKrBxzgcYkC3RYA0Gn08Of9cCS8zIyy4D3QZ%2FCUynDpXptxghm%2BqQ%2BG0UZXc8cjx4FnVsZqqFPqVzsN6xIgORIZvrjj8datq8HI4cohDiFAREVsinOeLIpgBVU2teOufphJLoZ0Ch%2Fqf0l72kBP8FoSkeI%2F3zaEOQ9Z2icoasNzFhTt7h49X4XlePOKL44iU1RiEw7n8L1wpBmj54fu744B9%2F8tk9oy9G9Bi0%2Fcf6xwYjHJ837%2BUSobOVrrsc0ofHVlJENryyYAi%2F1xB7SqCALniGPIku%2BRfesSCPsXjqG%2F1mZMpfmseWgvqqBE%2Fyz9UsqPWiboI4Km5NCZrTehgNQh%2B5wWYpQ%2Fkiw%2Fqv5S55NqrLZ03m5yFYV%2FsZ5A%2FGBUwXmeh5Oao7B5zO2Wki6Tm3XB2tuQ9nEtWrM9%2FFog5V13ylX4SG6y5aosnQLGUz817N%2FxwJ3fVnv4uXQDrLZZbAhqcoL9MxpM8j6WkAAW6yqyTSKxMDesMMi%2F4sQGOqUB2ZDmGjgx31QMjy0oAKT2vpyZ3LV%2BHUzuwM3DRg3BwCSvCfCwMsNM7TqXvA3Wiy3pWqdtJEIN888B8mpVzZWQboGioqRcbIp3v%2BTFqw83Ci2AKluZwkqlfn%2FG7WhoFC8T3knNkigzlMi8mlWtkiaWISpvJj1Dd5SVTBdB2IC4EjLeF8cB4JR%2BW9569BZFCim9TdwpEZ%2BZgWBfP%2FGnz8UcAduZOQb7&X-Amz-Signature=54035927ad2f94d4be711c5835f92e579acace7e2ccc4a34c1c83908597dc588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KXB5CV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9yv47oQ8r1Z2z0ZmrYF%2BoHuZhK8IBA3zS8bziVgrCQIgYAmgiSirdoAXQs5cH%2FQOaIYvdtM2XNJzgj5ahm3KVtUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQrgTUh8TIczgCXgCrcA3CcfW6qEmveQbBGX%2FvlAej0dI4zqCfq7HJEHP94I9mDVyAGoNOioKzu1MLe%2FJCqIuo04kew2vpDUaSEURgfKMaZNZ2dQLnqmTrUv5wcT12gpz%2BDeaalhKgHizvfDCfB5mwqLF9QbrKrBxzgcYkC3RYA0Gn08Of9cCS8zIyy4D3QZ%2FCUynDpXptxghm%2BqQ%2BG0UZXc8cjx4FnVsZqqFPqVzsN6xIgORIZvrjj8datq8HI4cohDiFAREVsinOeLIpgBVU2teOufphJLoZ0Ch%2Fqf0l72kBP8FoSkeI%2F3zaEOQ9Z2icoasNzFhTt7h49X4XlePOKL44iU1RiEw7n8L1wpBmj54fu744B9%2F8tk9oy9G9Bi0%2Fcf6xwYjHJ837%2BUSobOVrrsc0ofHVlJENryyYAi%2F1xB7SqCALniGPIku%2BRfesSCPsXjqG%2F1mZMpfmseWgvqqBE%2Fyz9UsqPWiboI4Km5NCZrTehgNQh%2B5wWYpQ%2Fkiw%2Fqv5S55NqrLZ03m5yFYV%2FsZ5A%2FGBUwXmeh5Oao7B5zO2Wki6Tm3XB2tuQ9nEtWrM9%2FFog5V13ylX4SG6y5aosnQLGUz817N%2FxwJ3fVnv4uXQDrLZZbAhqcoL9MxpM8j6WkAAW6yqyTSKxMDesMMi%2F4sQGOqUB2ZDmGjgx31QMjy0oAKT2vpyZ3LV%2BHUzuwM3DRg3BwCSvCfCwMsNM7TqXvA3Wiy3pWqdtJEIN888B8mpVzZWQboGioqRcbIp3v%2BTFqw83Ci2AKluZwkqlfn%2FG7WhoFC8T3knNkigzlMi8mlWtkiaWISpvJj1Dd5SVTBdB2IC4EjLeF8cB4JR%2BW9569BZFCim9TdwpEZ%2BZgWBfP%2FGnz8UcAduZOQb7&X-Amz-Signature=9c569ee464ecdaf9a36c0461f42a3f72213708bbecb8065d1ce764dc6ab10011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
