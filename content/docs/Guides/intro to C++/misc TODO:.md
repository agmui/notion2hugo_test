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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYATKS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHh7oCvs9U3O70LPPshP1YD%2FhqSq%2F7JWF5nGTMIGcYFAIhAI7I2FUoQ%2F%2FMtrfN16BMjNEUZCCNXMqk8YBQCknkgwOlKv8DCDIQABoMNjM3NDIzMTgzODA1IgyyKvMQHa4dF9YdooIq3AOPlZ9sRJOfsZ3RqszfhD2krQf6AoJ3HXlGRXlmmX3YIcFJDIsVWM3DSvEEmMRYl%2FCXhdAdOCtvINiZxDnYrwau%2BromSWBPM%2FEtUFul1aR1YcoKEg8Qte4i5vlcWK8Bysh2mwf7OBjR7OACysa5shMHtGLhv1dvbgtzKUQkP1HkNwaCl6G4Kc5H7qiRGVU8b7fNMxWY1m4lR9ofAAWLUc78LCW5VQlv9fOkPkQa7Xf7vIeoNCBtshdj%2FRF79kpSuNcHt5CkmpQ8MVZQdhugEcH6lE%2BTWPSfSfnZ1a6qu3yhIVP2QkYwGLTWP7qYB98cp%2BO%2FkEieqWuKVUvpffAjFN1p7tFrKe%2FiOE%2FNQg5Ce%2B6ryZP80yQfKA0ehsNXrGVf%2FMUm3IlUgxx77CPgT5DtzxLDn6jjH%2F8aLfbmyyYnGJ%2FyN7iX0ffHNq8sPUJrWUINUtsxFYZ5UnSZfYWJ6V8fJ5je71XIlZx50APXfNnjmmhJ7hW0lh%2FVBbLeBIEf%2FR35iHlZddiCR9ffD1j3rat4t1lzXUc3NDPk9P62BPw%2BZwCiHur%2FtYUH21vvxxLgy3DlXFcHMsWS4VY4sOw2f95L%2BDuuQJqDULXqaytUm4XEEHkfcY2KLYDrsLqZBy8eHzDL04nEBjqkAb1Yw13v%2FtkMRbFWqHGLEsz%2FQrrBMXs4lMgGepaYQsC3yYw4DXpQNsQHBJO%2ByjVgp2xApk79SXfQnLsP0yKQdsuOTWOPhvLyDPfcH4s%2BodKkxkcJ7aeCkF3cy9jYgT5PriuO5LsoG8Wh2%2BA0yoiNZ9in6sMSPK7crFxK2T5s%2FQSzn5iQZB0zJsBhjiZAL6fl4%2FJfMfWY3rajKkqghGlYgoT%2F6eha&X-Amz-Signature=9faecc4d91ac01fc831c14f286d718e4064780f5067202db31d2cdc79dcf4593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYATKS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHh7oCvs9U3O70LPPshP1YD%2FhqSq%2F7JWF5nGTMIGcYFAIhAI7I2FUoQ%2F%2FMtrfN16BMjNEUZCCNXMqk8YBQCknkgwOlKv8DCDIQABoMNjM3NDIzMTgzODA1IgyyKvMQHa4dF9YdooIq3AOPlZ9sRJOfsZ3RqszfhD2krQf6AoJ3HXlGRXlmmX3YIcFJDIsVWM3DSvEEmMRYl%2FCXhdAdOCtvINiZxDnYrwau%2BromSWBPM%2FEtUFul1aR1YcoKEg8Qte4i5vlcWK8Bysh2mwf7OBjR7OACysa5shMHtGLhv1dvbgtzKUQkP1HkNwaCl6G4Kc5H7qiRGVU8b7fNMxWY1m4lR9ofAAWLUc78LCW5VQlv9fOkPkQa7Xf7vIeoNCBtshdj%2FRF79kpSuNcHt5CkmpQ8MVZQdhugEcH6lE%2BTWPSfSfnZ1a6qu3yhIVP2QkYwGLTWP7qYB98cp%2BO%2FkEieqWuKVUvpffAjFN1p7tFrKe%2FiOE%2FNQg5Ce%2B6ryZP80yQfKA0ehsNXrGVf%2FMUm3IlUgxx77CPgT5DtzxLDn6jjH%2F8aLfbmyyYnGJ%2FyN7iX0ffHNq8sPUJrWUINUtsxFYZ5UnSZfYWJ6V8fJ5je71XIlZx50APXfNnjmmhJ7hW0lh%2FVBbLeBIEf%2FR35iHlZddiCR9ffD1j3rat4t1lzXUc3NDPk9P62BPw%2BZwCiHur%2FtYUH21vvxxLgy3DlXFcHMsWS4VY4sOw2f95L%2BDuuQJqDULXqaytUm4XEEHkfcY2KLYDrsLqZBy8eHzDL04nEBjqkAb1Yw13v%2FtkMRbFWqHGLEsz%2FQrrBMXs4lMgGepaYQsC3yYw4DXpQNsQHBJO%2ByjVgp2xApk79SXfQnLsP0yKQdsuOTWOPhvLyDPfcH4s%2BodKkxkcJ7aeCkF3cy9jYgT5PriuO5LsoG8Wh2%2BA0yoiNZ9in6sMSPK7crFxK2T5s%2FQSzn5iQZB0zJsBhjiZAL6fl4%2FJfMfWY3rajKkqghGlYgoT%2F6eha&X-Amz-Signature=ed20d1e1c5102f854bab049e9140197509bb821bdd1d7ed0f2971e9873880909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
