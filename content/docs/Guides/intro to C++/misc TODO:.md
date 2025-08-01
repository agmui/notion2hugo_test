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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=1224e3db0cd7cf75f921c531bf75d7e5e96e6c1234cda3af06039ab7905554ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=d40797d1a103d93ca9d93da4a8980b7e12d65f7317ee7baaeddde072da2ba71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
