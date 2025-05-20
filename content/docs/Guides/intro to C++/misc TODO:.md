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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVEWIKU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSAcQRM6KumFdMktokGCjsFibxZ3aqQIkHH2i7rXWvcQIhAKOkdf1vImnU%2BoSKJ3GfyY5g9XmViqX3vvB6XQqPG%2FQgKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW3M1GvUAVLRk4qi4q3AMh0O3W5oS3LChW4zqIzPJfrXpvd6MuaVFZ0GTAh5yY4e6yKUpPC%2BcU1YAOJ%2Fa84EEGdrsmRe6QasGEx0erSic5tiH4OL8XBE3Z6jaFdopP69y%2FGiS8kDJtVRUR3%2BHvvAgA9AC%2F1jvswkOxeLRkC4x89P%2Bf1fMhdPLH1iMxz3zHg%2FCVl846Tz3jgwKPCzzdaC%2Fu8tB1OntPLgycgG%2Fu1Pc0vD9CLbSLgoNkFQR251A1ypFlfsaqj6wzHatZNeDqM9C7p05SGMpgGhS1OPBEsCpXU3hNmiv8eOJi0K7En8sVhSAOmtgmbiDk9bURpWjmEkj25DGWZn5JaYKr4eHKu2iLSxoaiZHhjdbYVRk2MGjIN5SDaFxYu7xlzTyEkpumrE2FBSRI14N4Ipv8pQTLn0XsnxJBjKbadZzsY0EM4g02lwv3CumO5aeYNeTwKcx7bfagzfCVqvdEBhXG%2FHN%2FftgFOmIvyhVDEgDuHfjhgvDbZs45nncAXoAUvucynPvOLb2L5hQokZMSj5f4%2BzHmA1wXZ06MU%2BJ9DsOAeZu%2B8vRrjS2UlDOlIANrnF1Ut2HoDsT8A4sSIrlv5NDZLmUkNvbM0WjPVb87zIUnzOiwt3khjKV5ctZrtsEAHfwBtzDX%2Bq%2FBBjqkAQPGJ1Qp%2BKGOKP1fi1qOK%2B0YxVzmgH8r0D%2BpNG4mMtogohXYQL%2FsnRQIZjlVu4QdqscUDWDQ8pwC1HHY0ffNd6LE89%2FKNMISxDgmZIjQdF3ZvPUoPfcaA9EsbJjuIel4P3uY5WabX%2FffPOM8CKn5GCWS4uaaPViP%2FxQKaF%2F1rdrHRkYcP%2FcEwcbIuu7ejWRlb54X25%2BFLfodKaqaSSi3GbvsJGUI&X-Amz-Signature=180941ce30f4457670ee85b8e98574a639d2a46b29c247bee8be1b94f5d97bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVEWIKU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSAcQRM6KumFdMktokGCjsFibxZ3aqQIkHH2i7rXWvcQIhAKOkdf1vImnU%2BoSKJ3GfyY5g9XmViqX3vvB6XQqPG%2FQgKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW3M1GvUAVLRk4qi4q3AMh0O3W5oS3LChW4zqIzPJfrXpvd6MuaVFZ0GTAh5yY4e6yKUpPC%2BcU1YAOJ%2Fa84EEGdrsmRe6QasGEx0erSic5tiH4OL8XBE3Z6jaFdopP69y%2FGiS8kDJtVRUR3%2BHvvAgA9AC%2F1jvswkOxeLRkC4x89P%2Bf1fMhdPLH1iMxz3zHg%2FCVl846Tz3jgwKPCzzdaC%2Fu8tB1OntPLgycgG%2Fu1Pc0vD9CLbSLgoNkFQR251A1ypFlfsaqj6wzHatZNeDqM9C7p05SGMpgGhS1OPBEsCpXU3hNmiv8eOJi0K7En8sVhSAOmtgmbiDk9bURpWjmEkj25DGWZn5JaYKr4eHKu2iLSxoaiZHhjdbYVRk2MGjIN5SDaFxYu7xlzTyEkpumrE2FBSRI14N4Ipv8pQTLn0XsnxJBjKbadZzsY0EM4g02lwv3CumO5aeYNeTwKcx7bfagzfCVqvdEBhXG%2FHN%2FftgFOmIvyhVDEgDuHfjhgvDbZs45nncAXoAUvucynPvOLb2L5hQokZMSj5f4%2BzHmA1wXZ06MU%2BJ9DsOAeZu%2B8vRrjS2UlDOlIANrnF1Ut2HoDsT8A4sSIrlv5NDZLmUkNvbM0WjPVb87zIUnzOiwt3khjKV5ctZrtsEAHfwBtzDX%2Bq%2FBBjqkAQPGJ1Qp%2BKGOKP1fi1qOK%2B0YxVzmgH8r0D%2BpNG4mMtogohXYQL%2FsnRQIZjlVu4QdqscUDWDQ8pwC1HHY0ffNd6LE89%2FKNMISxDgmZIjQdF3ZvPUoPfcaA9EsbJjuIel4P3uY5WabX%2FffPOM8CKn5GCWS4uaaPViP%2FxQKaF%2F1rdrHRkYcP%2FcEwcbIuu7ejWRlb54X25%2BFLfodKaqaSSi3GbvsJGUI&X-Amz-Signature=7cd648c051f98e216bf4bf729badfaef3634a1072d17cad95771e4cbf83d20b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
