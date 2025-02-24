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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2F6XTC4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC39%2FbDNgMmW7l0DYFa4GGV6LwSfjD4VaH9MJ%2FaWdT39wIhAN4nIy8DgRJ3Giun8J3KvdxBuZYJJhKFZ5MvQKTEUYO1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzXP6iHzL2GOjMZBm0q3APkAeRdcYcTEZ4pA7V21qj5BdEQHKhjg13dlKWXdFpH%2BQX4S9%2FLNQvH396znQo0J5JLIV6T%2F6yYQIC9zgRvw0hcNPKpXsg%2FyjfMU6vf1bET33s7mnpLsfIG%2Fo8rOPh2omHRM1jW%2Bp2vn0nPJ%2BLbGOMzzZl6HF7B5AuWiErmpg4j8jbvVHiY%2Bczi79LK4%2FQ2CsMdNICHULL5ze2VGmk5x7JdxQKRYG6ZkBId2qsFpv6cmo4yYBc7ftnoTTfmmEAVTB0pUI4QnPo1a140h1sPNPBQcTryfdDIVuKhxuBy0QMPPNZ6U7QWVeyxhzgCKccHue235GPOTd3%2FrS7FDn8jEepIiU450TnqohTGiyCQVevmG2OZc2gKAIgzbTxslihGHFKrT3%2FnKmGAG1q8Jdwy4vDIv7leYNYFe3IssZHe9ml09iEQpjOvRS%2F1xlM2tyhmKzw9M7IIO86Yk4bNi85kVjsPyRUPABJf3q6luDye6lN0%2ByYykVOXRH3F8to6jnISNwH8grn1BOjAymOGLj1wlsV%2FV4MoKzxO6CLl0hPtWy3w5W6kg31YU0lDuYi6OoZ7R3eYWQib8mG2iJE25emI8io7RuNixggpcTd1%2BxYdi8%2Bg8cfEn891EKfk4QUhPjDZ%2FfK9BjqkARAZRg9JQE4BUzMZlVUnjkhFTlAbuL8zwGCvFaEtQp0otLdHdXL%2FyzUo1eHqfW0H%2BJx5%2B9eNQxzXj%2FweJ3pBzujjOC51XJS29oWMvFFS64N6OJal5n6ixLnFZc6cLq1UvRd7AcRT4UUDN6QigphfZYAWEqgmKvlhu1xW9clDBzU4ySAdKNRQgtAs4Yeg8LhJwBJsdzsQXQEZLFCIdNP0FDytc5kX&X-Amz-Signature=f758811066653766a93be3f2174c4f4f4edfa20cf22dc1bc44ebf4a183df9dec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2F6XTC4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC39%2FbDNgMmW7l0DYFa4GGV6LwSfjD4VaH9MJ%2FaWdT39wIhAN4nIy8DgRJ3Giun8J3KvdxBuZYJJhKFZ5MvQKTEUYO1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzXP6iHzL2GOjMZBm0q3APkAeRdcYcTEZ4pA7V21qj5BdEQHKhjg13dlKWXdFpH%2BQX4S9%2FLNQvH396znQo0J5JLIV6T%2F6yYQIC9zgRvw0hcNPKpXsg%2FyjfMU6vf1bET33s7mnpLsfIG%2Fo8rOPh2omHRM1jW%2Bp2vn0nPJ%2BLbGOMzzZl6HF7B5AuWiErmpg4j8jbvVHiY%2Bczi79LK4%2FQ2CsMdNICHULL5ze2VGmk5x7JdxQKRYG6ZkBId2qsFpv6cmo4yYBc7ftnoTTfmmEAVTB0pUI4QnPo1a140h1sPNPBQcTryfdDIVuKhxuBy0QMPPNZ6U7QWVeyxhzgCKccHue235GPOTd3%2FrS7FDn8jEepIiU450TnqohTGiyCQVevmG2OZc2gKAIgzbTxslihGHFKrT3%2FnKmGAG1q8Jdwy4vDIv7leYNYFe3IssZHe9ml09iEQpjOvRS%2F1xlM2tyhmKzw9M7IIO86Yk4bNi85kVjsPyRUPABJf3q6luDye6lN0%2ByYykVOXRH3F8to6jnISNwH8grn1BOjAymOGLj1wlsV%2FV4MoKzxO6CLl0hPtWy3w5W6kg31YU0lDuYi6OoZ7R3eYWQib8mG2iJE25emI8io7RuNixggpcTd1%2BxYdi8%2Bg8cfEn891EKfk4QUhPjDZ%2FfK9BjqkARAZRg9JQE4BUzMZlVUnjkhFTlAbuL8zwGCvFaEtQp0otLdHdXL%2FyzUo1eHqfW0H%2BJx5%2B9eNQxzXj%2FweJ3pBzujjOC51XJS29oWMvFFS64N6OJal5n6ixLnFZc6cLq1UvRd7AcRT4UUDN6QigphfZYAWEqgmKvlhu1xW9clDBzU4ySAdKNRQgtAs4Yeg8LhJwBJsdzsQXQEZLFCIdNP0FDytc5kX&X-Amz-Signature=98711450d1a1278da1c034cb6271fefc1d59160bd1e23671e771f4f5423561e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
