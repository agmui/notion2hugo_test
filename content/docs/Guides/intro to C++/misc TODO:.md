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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN6YCVG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDukL%2BwAPrjlfa8KGq8nJNr6tXOdozpILx6HadACtz65gIgLLQcG6hqqXcsTrMF1rpvLtU1xGNsvpIWQGGCvjvWdUQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBpocQo9duRXQC9sSrcA8uAsDehlOJjlhw37cUXH2zdJmKlyHBkG5E3mH5GCPStGtdpN79tJb3oXf9KBEqaAxkzFGvgmu4L4zsUR1mPVnseyp0es97nDGYBej1%2Fq4Te2LaHqMES2LratSnFZnZ71qDGVNGvvY%2F5pAHTLD5HfDt21n4tjoXPsks1rLhlsXDMWE%2BSVehKSEixQn4IkS63DQXmEZb3DUAWhaU5QeIQm531I%2B0qJLdWt5p12iXkIpBlB1zok2i88eitGf5kYx0%2BZ1EycSy%2BhnYHAgU0D9OBOdu2LV38ajnQ7Trwf6CjQ1Qpwo%2B224QwndjtVXJ1h8cezCz%2FQct%2Bx%2F7kAfNnPIHHGKDyM63lns8HvuEH4pzEWOuv8A4hll3pA5jurKkelvB%2B3ufaUAYtZOUdJ0X%2B8ovLAIS46ZjFuH%2BFreMSouGs6QUPzkwdH%2F6F7pWWBYp8Vn0EgS9g3j%2BPd9WJnVicxLHON2KF4QkBNElmCXBzNZ8ofGR1DKu%2Bq24SEYCv3gbzNtGxKWE%2FKRpotwuB8XFkcV%2FMV1H45a68dYFY3EGSJg3kD8rvfar6EHx2biLStzGsyR%2FMkRMqusFcmZlhoAWihYtNURmO41GZpdYhDksIJjVoapKBk65iLgI5n0X3wMLzMM%2B8lsMGOqUB1eMuwMACLNmCrotgi3TD%2Bzx%2FXf%2ByTN0dQOTavJ1GmfId1e%2F3PIoX2oiPzQSB5l%2BM5UJUu3RRkX73gCc4khtIo2OqUM8HOJynyD%2FlRLp1wbTxHI%2FAvdcQ%2BbKYeQ%2FRA7WlJVf%2B7sC2JRQ0PjVoJ7uA5SN8wMBMju2wqmdaWr9B2WvEZ26nquTD94%2F2f0cOig9lzuDo8yMzufr5%2FXHsl4oiuDVzOmtM&X-Amz-Signature=4241e1e533e98ac35440f844e3938141cae627932bbe16fbfe063daafd36542e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN6YCVG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDukL%2BwAPrjlfa8KGq8nJNr6tXOdozpILx6HadACtz65gIgLLQcG6hqqXcsTrMF1rpvLtU1xGNsvpIWQGGCvjvWdUQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBpocQo9duRXQC9sSrcA8uAsDehlOJjlhw37cUXH2zdJmKlyHBkG5E3mH5GCPStGtdpN79tJb3oXf9KBEqaAxkzFGvgmu4L4zsUR1mPVnseyp0es97nDGYBej1%2Fq4Te2LaHqMES2LratSnFZnZ71qDGVNGvvY%2F5pAHTLD5HfDt21n4tjoXPsks1rLhlsXDMWE%2BSVehKSEixQn4IkS63DQXmEZb3DUAWhaU5QeIQm531I%2B0qJLdWt5p12iXkIpBlB1zok2i88eitGf5kYx0%2BZ1EycSy%2BhnYHAgU0D9OBOdu2LV38ajnQ7Trwf6CjQ1Qpwo%2B224QwndjtVXJ1h8cezCz%2FQct%2Bx%2F7kAfNnPIHHGKDyM63lns8HvuEH4pzEWOuv8A4hll3pA5jurKkelvB%2B3ufaUAYtZOUdJ0X%2B8ovLAIS46ZjFuH%2BFreMSouGs6QUPzkwdH%2F6F7pWWBYp8Vn0EgS9g3j%2BPd9WJnVicxLHON2KF4QkBNElmCXBzNZ8ofGR1DKu%2Bq24SEYCv3gbzNtGxKWE%2FKRpotwuB8XFkcV%2FMV1H45a68dYFY3EGSJg3kD8rvfar6EHx2biLStzGsyR%2FMkRMqusFcmZlhoAWihYtNURmO41GZpdYhDksIJjVoapKBk65iLgI5n0X3wMLzMM%2B8lsMGOqUB1eMuwMACLNmCrotgi3TD%2Bzx%2FXf%2ByTN0dQOTavJ1GmfId1e%2F3PIoX2oiPzQSB5l%2BM5UJUu3RRkX73gCc4khtIo2OqUM8HOJynyD%2FlRLp1wbTxHI%2FAvdcQ%2BbKYeQ%2FRA7WlJVf%2B7sC2JRQ0PjVoJ7uA5SN8wMBMju2wqmdaWr9B2WvEZ26nquTD94%2F2f0cOig9lzuDo8yMzufr5%2FXHsl4oiuDVzOmtM&X-Amz-Signature=6e74203c1c6050ceb9805a7b5d1eace6311161f31d6568bdb51d2cf04798b506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
