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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTD7SD4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCW88TsmGy10cgfyXq5T2UAsTBh5cH7pDd0iUYo7mzXBgIhAOGfUPEN38925rHwtJAlyR358bh%2BesBHVQVJKmZGFgUVKv8DCG0QABoMNjM3NDIzMTgzODA1Igw4U7aAxOCUJXaNTncq3APmw1341mOv0GF13lomLdHBFqgiHAhJWW%2FCbR4AdHhCzOeHBJh7lNMevg3p1KLkddiRbaK71EI8qnh0mTYM5oDm5RKK1VhojU0cikkr5Wwd19DotCwAvRVfsup%2FOK355TZ5xnxZRNONcuc%2Fv8oyBozz4dARGjTwtwJuqkZiIGOSjCdjipWv7aQmptLQPqqwEqT8IuVMY8YzQH68lk3QgWHbYujHvORSrRCDXg6ugdY%2FpYHzxbZ0iDRyrKyJMGBCWahb8Mg0qJhD%2FAlpv1ausU%2BCNMmArHkKg25ujKOepW11rZVE0gd1IZ5C2XIqKZyrbyM%2BcdkQpXuFo9Aceq3xwSSrQIwhNc3SERffsaYamy2kGRfpT4WDURg4pzdmDyrDTDpBIBWN9m%2Fg6uplFy5QQG87%2FQrYKBKo%2FpmU%2BTXpUAeoGBE1GDisvoRpimlE6LYkBjeaUWxsm0Sk%2BiN2qMVrKt4mzyV2%2BYCrxWNEDbdOdY5ganpwBPtUAs0HPyRWp%2FvP4zIcn%2B7lgpk5znzsAzHjnVDnG6MCQEdQyvtCidcNwfgGGSLlQTgpQGJtbofjuz2eJlSDmMdChzq9BdyzAp7Rvt1gBCHaz7qE2S07aUnRaoJy4hcD3e1Kg%2FrrO6sJtzCboPjCBjqkAbOrL3cEmgetDfDgIGwJcPc%2BSo%2BW3g5cAO4GEFwvLqsZdh9HWLMOqf8GcGK4%2B4JmrZHzL%2Fnqc7pyLzLecA3LERuBMDqCK9wxaIHPbVHk7y3yiHLxEAvBJkCRWULdvZk%2FS95aNTUed9l3Bk3Ge5XExYnFnrj8gvirICdSYX2l6W2EO1vQVV08CB5DFxocvgTpiurlumEoXlRto9yNkSCTcZiPKVQ5&X-Amz-Signature=517a427f34d5840dffbef0f788560ac50df27788cfee1f4859372ca98c40b068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTD7SD4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCW88TsmGy10cgfyXq5T2UAsTBh5cH7pDd0iUYo7mzXBgIhAOGfUPEN38925rHwtJAlyR358bh%2BesBHVQVJKmZGFgUVKv8DCG0QABoMNjM3NDIzMTgzODA1Igw4U7aAxOCUJXaNTncq3APmw1341mOv0GF13lomLdHBFqgiHAhJWW%2FCbR4AdHhCzOeHBJh7lNMevg3p1KLkddiRbaK71EI8qnh0mTYM5oDm5RKK1VhojU0cikkr5Wwd19DotCwAvRVfsup%2FOK355TZ5xnxZRNONcuc%2Fv8oyBozz4dARGjTwtwJuqkZiIGOSjCdjipWv7aQmptLQPqqwEqT8IuVMY8YzQH68lk3QgWHbYujHvORSrRCDXg6ugdY%2FpYHzxbZ0iDRyrKyJMGBCWahb8Mg0qJhD%2FAlpv1ausU%2BCNMmArHkKg25ujKOepW11rZVE0gd1IZ5C2XIqKZyrbyM%2BcdkQpXuFo9Aceq3xwSSrQIwhNc3SERffsaYamy2kGRfpT4WDURg4pzdmDyrDTDpBIBWN9m%2Fg6uplFy5QQG87%2FQrYKBKo%2FpmU%2BTXpUAeoGBE1GDisvoRpimlE6LYkBjeaUWxsm0Sk%2BiN2qMVrKt4mzyV2%2BYCrxWNEDbdOdY5ganpwBPtUAs0HPyRWp%2FvP4zIcn%2B7lgpk5znzsAzHjnVDnG6MCQEdQyvtCidcNwfgGGSLlQTgpQGJtbofjuz2eJlSDmMdChzq9BdyzAp7Rvt1gBCHaz7qE2S07aUnRaoJy4hcD3e1Kg%2FrrO6sJtzCboPjCBjqkAbOrL3cEmgetDfDgIGwJcPc%2BSo%2BW3g5cAO4GEFwvLqsZdh9HWLMOqf8GcGK4%2B4JmrZHzL%2Fnqc7pyLzLecA3LERuBMDqCK9wxaIHPbVHk7y3yiHLxEAvBJkCRWULdvZk%2FS95aNTUed9l3Bk3Ge5XExYnFnrj8gvirICdSYX2l6W2EO1vQVV08CB5DFxocvgTpiurlumEoXlRto9yNkSCTcZiPKVQ5&X-Amz-Signature=2183f38a05d15ab11de4be37508b68e5f049e85fa58cb24ee30ff82486fa446f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
