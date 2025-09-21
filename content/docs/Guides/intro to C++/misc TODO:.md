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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOU67LBQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDds%2FQobl13UPDtM8eG%2FUJ8E2sWCLBDUxpF%2FhicMv3gIhAIk1ztqI2EozO8FywzWD2MfG3Xa4nu7nAJk4MpL9m%2F5PKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoRYkPh3bxBm3CSkMq3ANPTE80VbIbQKZCnROOkNkBa%2B95MZooSIOrX3C7SpwwYWMPBixdZaumlMtlQz6EXutjT2QCIXIO1abiTFkmqyO0vp5qNXBYreSaGO7REystJ4NTXVL%2FNaATDmAPMSbUy2M1Ja3MffvTHmDKzrpxngI7tjVgKZ99N0YOMp4YL4WLW%2FbfHZJ1%2BxXQOuSPjuQoDFIeZSDSWuP3vcdvFVBw4ZHIS3BiNLmpCpPf%2BVkLmuMWlinjWyFGh69yCbx6echFsEP7mpVXhaTZhtQ8b4UQHvFxJH8EI%2F6qEpEKCEbNERnCMuRRNend%2Bc0NxiyjfGXNB78WBOFDV0x6k5lU8aNiRN%2FqsTwV%2BZAxabFmqeGk6KIy0l9S5%2FRGWQTx47vEVw3M5CvHz9MwnzjCBocFGc%2BRu9WA4ouvBOJi7VCk9t0AyzrXq6xQudZnMA1prTIRDcRop8RmqPHI38VfREjzrgkDu%2BdhmCvFyFYoTgXEl2dCQ50BSOlvqdc5UrH%2F8lRO2aam52Hs1P6h2eH1fztB%2BuK5zVKuukp1NbOTZEmGxDS5DrBUth%2BhaULqSMvGU8VzQkB5gKU7jzYYLmjK2yIu5k4bFOyuVbxyV4G4cBygGoGHdPYoWKfbxzlvMJykMb9nDzCBn73GBjqkAb7XJJS6iCCc55nyEIrmmcQJz0csQMWPpbgq079XIaoPz2uLhvcAEgU5%2BILj3VlUoJbG4xjbxKCoTSFL0uwF2zohdULYCR7nasKAGoDc2SfeEbP4We%2F5T437n3DdR88QbKWHZlRjz41E0loFWf68pTfxIVwtXva5kzOx0RVYkLFLQeecCkNmzh7pvUl1hNm5f4xEwkfoV%2F5ZzELfFeI%2Bv67mWQ5k&X-Amz-Signature=788b1063f71c291b644fa018d6dda59059074ae086e5a18aae61ff56623a3e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOU67LBQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDds%2FQobl13UPDtM8eG%2FUJ8E2sWCLBDUxpF%2FhicMv3gIhAIk1ztqI2EozO8FywzWD2MfG3Xa4nu7nAJk4MpL9m%2F5PKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoRYkPh3bxBm3CSkMq3ANPTE80VbIbQKZCnROOkNkBa%2B95MZooSIOrX3C7SpwwYWMPBixdZaumlMtlQz6EXutjT2QCIXIO1abiTFkmqyO0vp5qNXBYreSaGO7REystJ4NTXVL%2FNaATDmAPMSbUy2M1Ja3MffvTHmDKzrpxngI7tjVgKZ99N0YOMp4YL4WLW%2FbfHZJ1%2BxXQOuSPjuQoDFIeZSDSWuP3vcdvFVBw4ZHIS3BiNLmpCpPf%2BVkLmuMWlinjWyFGh69yCbx6echFsEP7mpVXhaTZhtQ8b4UQHvFxJH8EI%2F6qEpEKCEbNERnCMuRRNend%2Bc0NxiyjfGXNB78WBOFDV0x6k5lU8aNiRN%2FqsTwV%2BZAxabFmqeGk6KIy0l9S5%2FRGWQTx47vEVw3M5CvHz9MwnzjCBocFGc%2BRu9WA4ouvBOJi7VCk9t0AyzrXq6xQudZnMA1prTIRDcRop8RmqPHI38VfREjzrgkDu%2BdhmCvFyFYoTgXEl2dCQ50BSOlvqdc5UrH%2F8lRO2aam52Hs1P6h2eH1fztB%2BuK5zVKuukp1NbOTZEmGxDS5DrBUth%2BhaULqSMvGU8VzQkB5gKU7jzYYLmjK2yIu5k4bFOyuVbxyV4G4cBygGoGHdPYoWKfbxzlvMJykMb9nDzCBn73GBjqkAb7XJJS6iCCc55nyEIrmmcQJz0csQMWPpbgq079XIaoPz2uLhvcAEgU5%2BILj3VlUoJbG4xjbxKCoTSFL0uwF2zohdULYCR7nasKAGoDc2SfeEbP4We%2F5T437n3DdR88QbKWHZlRjz41E0loFWf68pTfxIVwtXva5kzOx0RVYkLFLQeecCkNmzh7pvUl1hNm5f4xEwkfoV%2F5ZzELfFeI%2Bv67mWQ5k&X-Amz-Signature=65fde535d6698f46bfd428b91ec6b1f0e17353c5be5553b19556cc11cd3fb9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
