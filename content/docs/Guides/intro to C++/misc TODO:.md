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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTCQT67%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuwm3Znqz9ODCpkMzaEIVLTM32novGJWMAEUOQQhHB%2BQIhAN3FlMm6LoJxjI%2BtJ9w7T0v6ePLkqJTVRiHIA9aNjxh3KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsW3PLsrWY%2FBB%2FbEgq3AOcFi7g5Kwaw5HzWyUXh7TslXfVbjodmFxqHfk%2BoR2me5LJfv0AS1wF1VZH2f%2FZvddWR8yAjxbg9bPeOWhB%2Bk9AUmZY4l53n7esSSEKdnS2iRxkmC1%2Foxb8xX7bOuEE9Hyg37dhUqRwcUZYkkDWRtHb9n3mwWYjrpzcWiwKNU%2BiNVHVUJvlY%2BVF3XMXdb0Slfmh3UhfuDPt4WzrC13yzjM1LfRo1g60QCdZp4aVU9muQ2dcSxjiXgCUPnp1Gb0nmHS%2F4jLwfG%2BLP5kuyJQlBZat9XhfIX8Csbw48a0IL%2FZrhvpK2a08c3T7rsw0YvJb39rCgfRVfXXEZDmhZscbGDbr1V6opBoUNZPG%2F5BN6KMgwpts496HuzynKwdEIfY1DRUOYvqeNHeU%2Fi7PxUXfBr456R8%2BWRE93Ds3nLQEo3aew6hcQw%2BakP5fHrxawY0pbcI%2FtzKH4oQPXB%2BYvBUrPItEFWYhLJ7nkyE3xKnZVcF8wJC0EOJ3FWJxNDJAAGosRp9fXvDOBrKc4z5x8QYCRScYtyH1SrgxyKeFdwyXh09DYUhQRLfI6%2BqI8habiDRP4zRzA9tLod16Vocj4s2eF8vY2EhG%2F4oGeQ75Gl%2F%2Fhaw4h1a6Fl1%2Bu9wnu%2FcaWzDxgqu%2FBjqkAQSvc8zCTOp8zP2dEQeSw6MM9tUSQmhZlSc4478k0Ohr5tZQvbyeCpRD%2FQcoY58VjOIvmoL4etmmgS%2FbzcX5K%2FgjJClHy4cFTvObWLRBlakOoz1LsZg8cIJUilk4l7dfDneXofC8l0cN5NZeHZYiFMjTgiPWB4%2BbwyPPhBB4Qs8QR62t%2BMLNpFEil1TdzGQj%2BpAVk8VoP1muYrPLWJmZCq3%2B6w2%2B&X-Amz-Signature=f72f0cda7ed13202d2e702b3c87c71d79e15788a17df6a7d1a731adcdb5b4edd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTCQT67%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuwm3Znqz9ODCpkMzaEIVLTM32novGJWMAEUOQQhHB%2BQIhAN3FlMm6LoJxjI%2BtJ9w7T0v6ePLkqJTVRiHIA9aNjxh3KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsW3PLsrWY%2FBB%2FbEgq3AOcFi7g5Kwaw5HzWyUXh7TslXfVbjodmFxqHfk%2BoR2me5LJfv0AS1wF1VZH2f%2FZvddWR8yAjxbg9bPeOWhB%2Bk9AUmZY4l53n7esSSEKdnS2iRxkmC1%2Foxb8xX7bOuEE9Hyg37dhUqRwcUZYkkDWRtHb9n3mwWYjrpzcWiwKNU%2BiNVHVUJvlY%2BVF3XMXdb0Slfmh3UhfuDPt4WzrC13yzjM1LfRo1g60QCdZp4aVU9muQ2dcSxjiXgCUPnp1Gb0nmHS%2F4jLwfG%2BLP5kuyJQlBZat9XhfIX8Csbw48a0IL%2FZrhvpK2a08c3T7rsw0YvJb39rCgfRVfXXEZDmhZscbGDbr1V6opBoUNZPG%2F5BN6KMgwpts496HuzynKwdEIfY1DRUOYvqeNHeU%2Fi7PxUXfBr456R8%2BWRE93Ds3nLQEo3aew6hcQw%2BakP5fHrxawY0pbcI%2FtzKH4oQPXB%2BYvBUrPItEFWYhLJ7nkyE3xKnZVcF8wJC0EOJ3FWJxNDJAAGosRp9fXvDOBrKc4z5x8QYCRScYtyH1SrgxyKeFdwyXh09DYUhQRLfI6%2BqI8habiDRP4zRzA9tLod16Vocj4s2eF8vY2EhG%2F4oGeQ75Gl%2F%2Fhaw4h1a6Fl1%2Bu9wnu%2FcaWzDxgqu%2FBjqkAQSvc8zCTOp8zP2dEQeSw6MM9tUSQmhZlSc4478k0Ohr5tZQvbyeCpRD%2FQcoY58VjOIvmoL4etmmgS%2FbzcX5K%2FgjJClHy4cFTvObWLRBlakOoz1LsZg8cIJUilk4l7dfDneXofC8l0cN5NZeHZYiFMjTgiPWB4%2BbwyPPhBB4Qs8QR62t%2BMLNpFEil1TdzGQj%2BpAVk8VoP1muYrPLWJmZCq3%2B6w2%2B&X-Amz-Signature=9bc7245e46ec9b6aa05836272b4cbd12058dc514db7e9a4410fe92527dd296b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
