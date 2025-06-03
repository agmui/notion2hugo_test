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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U434YK2J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEgthgYmH5xulUUhM70toT6vRJos6%2BV4VG0KciN1axFFAiAJKLRWEQ2rKzFd7qTihJ2hYy82dIsIpnbM6NHYdj5voyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMIRsiOVPP%2FEnAw28ZKtwDRxkOeVNGZPE49K3F8LQv%2Fr8qX4Uf9oMG%2BHljBZH5hvKLHXtv8I8agOXR3UQVwbksOIyPXU5cqaa3O579BeQE5tboOc63llfXQhiQ219i6z4ieqnJxsprhS0ssKridwijjw5ugdFQFCBp75EkZEBOj55GKKogKqR6q75owtjqEVP0iKmRT6V3fXq%2FGMGtN8IXEO7KBiSWoa18icjwIsjKBt3jCpOvUzUKg9GeIKHzd4AllefHdqMoZIH6AbqO2XM%2F%2FZJ4Liwzb0%2FiyY3uQQ2dIfqANMGa8Vw9VwxO6h%2Fx5m3OTW7QCiF3q62At6gXcJopW8By7OLKwO%2F0AoJpv3h%2F8j0Oq3a%2FeWd6HdqYhsxvnTqZtH1%2BgUrwvy34ak68TJHjrrgR7g4dTw2W46iEcVFb%2FuZ%2B5vaMb7jgEExi1%2FmlQVNv64zjtROdatY7iH842Netv%2FYiUiX4EWxNglF64OD6w%2FDPqyMSo8NzUxmMowT3fuZcLH6GXMkbyXK66ZRtf%2FlE5jaMceS54chJpaF7%2BFUCWmME%2BkXcUoHt6kpfS7nzaCNThmHy2BfghyaIAZA%2BjiU57gE2%2FpvjxdylgNXTjN9XiQM1%2BobXFkkccL813Qd%2BvLmB2I3x1SwgY6OagTYwqMX6wQY6pgH%2BsmOacrrq9MIM9lHBPlPyqWtuDpkLxkIgjfYB9vyFZHEYHFuJS2pawI39zVc7KC8cAYrgNYm5OFvjwD4n3TdEnYxrIcJJRHIRMzb3XQTWZAUtwPh628O0PE7ACk91UJYngyjdE00VW6bFZMeiYaj8BzuGUBYlSHNd449sQz84BUl50mxKNnPxQD%2BX98TjqXXoEtSNyXqZShTgzTyldz0SKPQArUBK&X-Amz-Signature=f3c2a9576f1d7d4574aef42b4a3bdafb6a0f36cff3b2476904fae399d653bf40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U434YK2J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEgthgYmH5xulUUhM70toT6vRJos6%2BV4VG0KciN1axFFAiAJKLRWEQ2rKzFd7qTihJ2hYy82dIsIpnbM6NHYdj5voyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMIRsiOVPP%2FEnAw28ZKtwDRxkOeVNGZPE49K3F8LQv%2Fr8qX4Uf9oMG%2BHljBZH5hvKLHXtv8I8agOXR3UQVwbksOIyPXU5cqaa3O579BeQE5tboOc63llfXQhiQ219i6z4ieqnJxsprhS0ssKridwijjw5ugdFQFCBp75EkZEBOj55GKKogKqR6q75owtjqEVP0iKmRT6V3fXq%2FGMGtN8IXEO7KBiSWoa18icjwIsjKBt3jCpOvUzUKg9GeIKHzd4AllefHdqMoZIH6AbqO2XM%2F%2FZJ4Liwzb0%2FiyY3uQQ2dIfqANMGa8Vw9VwxO6h%2Fx5m3OTW7QCiF3q62At6gXcJopW8By7OLKwO%2F0AoJpv3h%2F8j0Oq3a%2FeWd6HdqYhsxvnTqZtH1%2BgUrwvy34ak68TJHjrrgR7g4dTw2W46iEcVFb%2FuZ%2B5vaMb7jgEExi1%2FmlQVNv64zjtROdatY7iH842Netv%2FYiUiX4EWxNglF64OD6w%2FDPqyMSo8NzUxmMowT3fuZcLH6GXMkbyXK66ZRtf%2FlE5jaMceS54chJpaF7%2BFUCWmME%2BkXcUoHt6kpfS7nzaCNThmHy2BfghyaIAZA%2BjiU57gE2%2FpvjxdylgNXTjN9XiQM1%2BobXFkkccL813Qd%2BvLmB2I3x1SwgY6OagTYwqMX6wQY6pgH%2BsmOacrrq9MIM9lHBPlPyqWtuDpkLxkIgjfYB9vyFZHEYHFuJS2pawI39zVc7KC8cAYrgNYm5OFvjwD4n3TdEnYxrIcJJRHIRMzb3XQTWZAUtwPh628O0PE7ACk91UJYngyjdE00VW6bFZMeiYaj8BzuGUBYlSHNd449sQz84BUl50mxKNnPxQD%2BX98TjqXXoEtSNyXqZShTgzTyldz0SKPQArUBK&X-Amz-Signature=83e01c78879b5f2e57e20cfcab3f66a86c5b433144b1c713d645b517d11e4695&X-Amz-SignedHeaders=host&x-id=GetObject)

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
