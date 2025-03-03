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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SR4WKJL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPe91x4peV%2BIeq6wHvlckxbILGi3968GT8ismGI%2BgQaAiEAlC33PWzEf21qWjde19vn1OSExp2eJf3r5SUCVyRn0TkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqfCYXlpftknfLeBircAymua2dgcupwM4D6Py0It5zJO4WrPtmVKJZE4rIB5BZyhsS%2Bmfd7OpOm9LFHzqa0%2BlsS3OsV7I%2FkPZ6i595m310USj6maMDPPhLlAomrSs9OjdDJOq3I6TPxlhA88bRliJujNseCjH13mF36JjlYPmz%2FUy2qx0x8utTywjwkOp5kw%2BncqtF00R2RwaoBveE8q01jg8P%2FSGaTbLDPV78opo1YKnR7MJJNNbAp1U9oHCHDlhw7mLXwaDah31W%2BiXe0%2FvbKVW19CjQNeeIaOOAfdpkgTjn%2BDfcMslwr2IHGQ%2FW14Ih1O2dN38svVVtsvM4XN9HoFQCrlfCpb6Hycjavzu2x6cxKV0ZXK9DOd8zWDT6wQXxgrm0mx9BIVDo7eLjzCw2MSlW%2F%2BaK%2B8dboWz36vayDi1%2FIidpOUvZGpo%2F1U0JBPq0cBZ9V2d4DNR0jGaai5DwoYm%2BYtFRzt%2FFfQGe2J1%2BSgqtoLSxREthLS6EttaS5OWC6dc%2Bo5pr6w9ERmwBpzg6CZ%2FmgsvjqoVXOn9hRIOnvqJF%2Fntq7LacF2bh7lkPuPpf0c9j25YQPibgf5BSdCMh%2BHa902WmMmZy4rwos3iqC3OR8o6RI3cf%2BY19Nz65c4kBzscWhoUY0ybR9MKbcl74GOqUBz%2BVURF55Odx2Ics5mNCWwnR99O1QoyKeJkeJVQuoHs%2BsVcuF%2F70ZE6AvYwbRi1fqwQWENaLaCI77kV0mw1Aq8HmpX1a%2FTDPkJCv28lHPPNhWDPDRqTLFSReifi3v00N%2FdOigioGVf8lUX4nhc9%2BOuOs4j6eXWTtdBavzwtxkZFKpF9JSWDpPQT3r%2Brp%2Bc9cO00T%2BP%2BK1Y7jsLfR%2B2zrePGAMY7ZX&X-Amz-Signature=a23343b135ccf65024288681b46fff17ca985bebb9f43596f85d0654a7f3b7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SR4WKJL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPe91x4peV%2BIeq6wHvlckxbILGi3968GT8ismGI%2BgQaAiEAlC33PWzEf21qWjde19vn1OSExp2eJf3r5SUCVyRn0TkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqfCYXlpftknfLeBircAymua2dgcupwM4D6Py0It5zJO4WrPtmVKJZE4rIB5BZyhsS%2Bmfd7OpOm9LFHzqa0%2BlsS3OsV7I%2FkPZ6i595m310USj6maMDPPhLlAomrSs9OjdDJOq3I6TPxlhA88bRliJujNseCjH13mF36JjlYPmz%2FUy2qx0x8utTywjwkOp5kw%2BncqtF00R2RwaoBveE8q01jg8P%2FSGaTbLDPV78opo1YKnR7MJJNNbAp1U9oHCHDlhw7mLXwaDah31W%2BiXe0%2FvbKVW19CjQNeeIaOOAfdpkgTjn%2BDfcMslwr2IHGQ%2FW14Ih1O2dN38svVVtsvM4XN9HoFQCrlfCpb6Hycjavzu2x6cxKV0ZXK9DOd8zWDT6wQXxgrm0mx9BIVDo7eLjzCw2MSlW%2F%2BaK%2B8dboWz36vayDi1%2FIidpOUvZGpo%2F1U0JBPq0cBZ9V2d4DNR0jGaai5DwoYm%2BYtFRzt%2FFfQGe2J1%2BSgqtoLSxREthLS6EttaS5OWC6dc%2Bo5pr6w9ERmwBpzg6CZ%2FmgsvjqoVXOn9hRIOnvqJF%2Fntq7LacF2bh7lkPuPpf0c9j25YQPibgf5BSdCMh%2BHa902WmMmZy4rwos3iqC3OR8o6RI3cf%2BY19Nz65c4kBzscWhoUY0ybR9MKbcl74GOqUBz%2BVURF55Odx2Ics5mNCWwnR99O1QoyKeJkeJVQuoHs%2BsVcuF%2F70ZE6AvYwbRi1fqwQWENaLaCI77kV0mw1Aq8HmpX1a%2FTDPkJCv28lHPPNhWDPDRqTLFSReifi3v00N%2FdOigioGVf8lUX4nhc9%2BOuOs4j6eXWTtdBavzwtxkZFKpF9JSWDpPQT3r%2Brp%2Bc9cO00T%2BP%2BK1Y7jsLfR%2B2zrePGAMY7ZX&X-Amz-Signature=7063ae2fb0e57b77f4724ffcdfddd34b278bb51f3bdca0c6c04127e0eb4cab64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
